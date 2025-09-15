import { Vector3 } from './base';
import { PartBase, PartTouch } from './mod-base'

export class CollisionDataRel {
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    x: number
    y: number;
    z: number;
}
export class Collision {
    constructor(touch: PartTouch, self: PartBase, part2: PartBase, posRel: CollisionDataRel, rotRel: CollisionDataRel) {
        this.Touch = touch;
        this.PartSelf = self;
        this.Part2 = part2;
        this.PosRel = posRel;
        this.RotRel = rotRel;
    }
    Touch: PartTouch;
    PartSelf: PartBase;
    Part2: PartBase;
    PosRel: CollisionDataRel;
    RotRel: CollisionDataRel;
    XHint?: string;
    YHint?: string;
    ZHint?: string;
    TouchGroup?: string;
}

export class CollisionMap {
    constructor() {
        this._detectedCollisions = new Map<string, string[]>();
    }

    exists(part1Id: string, part2Id: string): boolean {
        return this._detectedCollisions.get(part1Id)?.find(id => id === part2Id)
        ? true
        : false;
    }

    push(part1Id: string, part2Id: string) {
        if (!this._detectedCollisions.has(part1Id)) {
            this._detectedCollisions.set(part1Id, []);
        }
        this._detectedCollisions.get(part1Id)!.push(part2Id);
    }

    _detectedCollisions: Map<string, string[]>;
}

function calcCollision1(min1: number, max1: number, min2: number, max2: number, e: number): [string, number] | undefined {
    // Calculate intersection
    // First check if box1 is inside box2
    if (min1 >= (min2 - e) && max1 <= (max2 + e)) {
        return ["1 inside 2", -1];
    } else if (min2 >= (min1 - e) && max2 <= (max1 + e)) {
        return ["2 inside 1", -2];
    } else {
        // Test if we overlap...
        if (max2 >= (min1 - e) && (min2 < min1)) {
            // 1:     |----|
            // 2: |----|
            return ["+", (max2 - min1)];
        }
        else if (max1 >= (min2 - e) && (max1 < max2)) {
            // 1: |----|
            // 2:     |----|
            return ["-", (max1 - min2)];
        }
    }
    return undefined;
}

function getOriginsInWCS(part1: PartBase, part2: PartBase): [Vector3, Vector3] {
    let origin1 = new Vector3(part1._x, part1._y, part1._z);
    let origin2 = new Vector3(part2._x, part2._y, part2._z);

    // transform to world coordinates
    origin1 = origin1.applyMatrix4(part1._fullMatrix!);
    origin2 = origin2.applyMatrix4(part2._fullMatrix!);
    return [origin1, origin2];
}

function getExtremePointsInWCS(partOrigin1WCS: Vector3, part1: PartBase, partOrigin2WCS: Vector3, part2: PartBase)
    : [Vector3, Vector3, Vector3, Vector3] {
    let min1 = new Vector3();
    let max1 = new Vector3();
    let min2 = new Vector3();
    let max2 = new Vector3();

    // transform to world coordinates
    let max1WCS = new Vector3(part1._x + part1._dimx, part1._y + part1._dimy, part1._z + part1._dimz)
        .applyMatrix4(part1._fullMatrix!);

    let max2WCS = new Vector3(part2._x + part2._dimx, part2._y + part2._dimy, part2._z + part2._dimz)
        .applyMatrix4(part2._fullMatrix!);

    min1._x = partOrigin1WCS._x <= max1WCS._x ? partOrigin1WCS._x : max1WCS._x;
    min1._y = partOrigin1WCS._y <= max1WCS._y ? partOrigin1WCS._y : max1WCS._y;
    min1._z = partOrigin1WCS._z <= max1WCS._z ? partOrigin1WCS._z : max1WCS._z;
    max1._x = max1WCS._x >= partOrigin1WCS._x ? max1WCS._x : partOrigin1WCS._x;
    max1._y = max1WCS._y >= partOrigin1WCS._y ? max1WCS._y : partOrigin1WCS._y;
    max1._z = max1WCS._z >= partOrigin1WCS._z ? max1WCS._z : partOrigin1WCS._z;

    min2._x = partOrigin2WCS._x <= max2WCS._x ? partOrigin2WCS._x : max2WCS._x;
    min2._y = partOrigin2WCS._y <= max2WCS._y ? partOrigin2WCS._y : max2WCS._y;
    min2._z = partOrigin2WCS._z <= max2WCS._z ? partOrigin2WCS._z : max2WCS._z;
    max2._x = max2WCS._x >= partOrigin2WCS._x ? max2WCS._x : partOrigin2WCS._x;
    max2._y = max2WCS._y >= partOrigin2WCS._y ? max2WCS._y : partOrigin2WCS._y;
    max2._z = max2WCS._z >= partOrigin2WCS._z ? max2WCS._z : partOrigin2WCS._z;

    return [min1, max1, min2, max2];
}

function detectCollisionInWCS(part1: PartBase, part2: PartBase): Collision | undefined {
    var e: number = 0.01;  // epsilon

    let origins = getOriginsInWCS(part1, part2);
    let part1Origin = origins[0];
    let part2Origin = origins[1];

    let extremePoints = getExtremePointsInWCS(part1Origin, part1, part2Origin, part2);
    let minPart1 = extremePoints[0];
    let maxPart1 = extremePoints[1];
    let minPart2 = extremePoints[2];
    let maxPart2 = extremePoints[3];

    var xRes: [string, number] | undefined = calcCollision1(minPart1._x, maxPart1._x, minPart2._x, maxPart2._x, e);
    var yRes: [string, number] | undefined = calcCollision1(minPart1._y, maxPart1._y, minPart2._y, maxPart2._y, e);
    var zRes: [string, number] | undefined = calcCollision1(minPart1._z, maxPart1._z, minPart2._z, maxPart2._z, e);

    if (xRes != undefined && yRes != undefined && zRes != undefined) {
        const posRel: CollisionDataRel = new CollisionDataRel(part2Origin._x - part1Origin._x, part2Origin._y - part1Origin._y, part2Origin._z - part1Origin._z);
        const anglesPart1 = part1._fullMatrix?.getNormalizedAnglesInDegrees() ?? new Vector3();
        const anglesPart2 = part2._fullMatrix?.getNormalizedAnglesInDegrees() ?? new Vector3();
        const rotRel: CollisionDataRel = new CollisionDataRel(anglesPart2._x - anglesPart1._x, anglesPart2._y - anglesPart1._y, anglesPart2._z - anglesPart1._z);
        const res: Collision = new Collision(PartTouch.Collision, part1, part2, posRel, rotRel);
        if (xRes[1] >= -e && xRes[1] <= e) {
            // We have a touch (inside epsilon)
            if (xRes[0] == "+") {
                res.Touch = PartTouch.FromLeft;
            }
            else {
                res.Touch = PartTouch.FromRight;
            }
        }
        else if (yRes[1] >= -e && yRes[1] <= e) {
            // We have a touch (inside epsilon)
            if (yRes[0] == "+") {
                res.Touch = PartTouch.FromBottom;
            }
            else {
                res.Touch = PartTouch.FromTop;
            }
        }
        else if (zRes[1] >= -e && zRes[1] <= e) {
            // We have a touch (inside epsilon)
            if (zRes[0] == "+") {
                res.Touch = PartTouch.FromBack;
            }
            else {
                res.Touch = PartTouch.FromFront;
            }
        }

        res.XHint = xRes[0];
        res.YHint = yRes[0];
        res.ZHint = zRes[0];
        return res;
    }
    return undefined;
}

function detectCollision(part1: PartBase, part2: PartBase): Collision | undefined {
    var e: number = 0.01;  // epsilon

    var xRes: [string, number] | undefined = calcCollision1(part1._xAbs!, part1._xAbs! + part1._dimx, part2._xAbs!, part2._xAbs! + part2._dimx, e);
    var yRes: [string, number] | undefined = calcCollision1(part1._yAbs!, part1._yAbs! + part1._dimy, part2._yAbs!, part2._yAbs! + part2._dimy, e);
    var zRes: [string, number] | undefined = calcCollision1(part1._zAbs!, part1._zAbs! + part1._dimz, part2._zAbs!, part2._zAbs! + part2._dimz, e);
    if (xRes != undefined && yRes != undefined && zRes != undefined) {
        const posRel: CollisionDataRel = new CollisionDataRel(part2._xAbs! - part1._xAbs!, part2._yAbs! - part1._yAbs!, part2._zAbs! - part1._zAbs!);
        const rotRel: CollisionDataRel = new CollisionDataRel(0, 0, 0);
        const res: Collision = new Collision(PartTouch.Collision, part1, part2, posRel, rotRel);
        if (xRes[1] >= -e && xRes[1] <= e) {
            // We have a touch (inside epsilon)
            if (xRes[0] == "+") {
                res.Touch = PartTouch.FromLeft;
            }
            else {
                res.Touch = PartTouch.FromRight;
            }
        }
        else if (yRes[1] >= -e && yRes[1] <= e) {
            // We have a touch (inside epsilon)
            if (yRes[0] == "+") {
                res.Touch = PartTouch.FromBottom;
            }
            else {
                res.Touch = PartTouch.FromTop;
            }
        }
        else if (zRes[1] >= -e && zRes[1] <= e) {
            // We have a touch (inside epsilon)
            if (zRes[0] == "+") {
                res.Touch = PartTouch.FromBack;
            }
            else {
                res.Touch = PartTouch.FromFront;
            }
        }

        res.XHint = xRes[0];
        res.YHint = yRes[0];
        res.ZHint = zRes[0];
        return res;
    }
    return undefined;
}

export function applyPartMatrix(parts: PartBase[]) {
    // Apply matrix
    parts.forEach(p => {
        // Apply matrix
        var v3 = new Vector3(p._x, p._y, p._z);
        if (p._matrix) {
            v3.applyMatrix4(p._matrix);
        }
        p._xAbs = v3._x;
        p._yAbs = v3._y;
        p._zAbs = v3._z;
    });
}

export function detectTouches(parts: PartBase[], touchGroup: string, detectedTouches: CollisionMap): Collision[] {
    // Detect touches
    var cols: Collision[] = [];
    for (var i = 0; i < parts.length; i++) {
        for (var j = i + 1; j < parts.length; j++) {
            if (detectedTouches.exists(parts[i]._id, parts[j]._id)) {
                continue;
            }

            let col: Collision | undefined = undefined;
            if (touchGroup === '-1') {
                col = detectCollisionInWCS(parts[i], parts[j]);
            }
            else {
                col = detectCollision(parts[i], parts[j]);
            }
            if (col != undefined) {
                if (col.PartSelf._noNCData !== true) {
                    col.TouchGroup = touchGroup;
                    cols.push(col);
                    detectedTouches.push(col.PartSelf._id, col.Part2._id);
                }

                if (col.Part2._noNCData !== true) {
                    // Create also the opposite touch...
                    var posRel2 = new CollisionDataRel(-col.PosRel.x, -col.PosRel.y, -col.PosRel.z);
                    var rotRel2: CollisionDataRel = new CollisionDataRel(-col.RotRel.x, -col.RotRel.y, -col.RotRel.z);
                    var col2: Collision = new Collision(col.Touch, col.Part2, col.PartSelf, posRel2, rotRel2);
                    switch (col.Touch) {
                        case PartTouch.FromRight: col2.Touch = PartTouch.FromLeft; break;
                        case PartTouch.FromLeft: col2.Touch = PartTouch.FromRight; break;
                        case PartTouch.FromTop: col2.Touch = PartTouch.FromBottom; break;
                        case PartTouch.FromBottom: col2.Touch = PartTouch.FromTop; break;
                        case PartTouch.FromFront: col2.Touch = PartTouch.FromBack; break;
                        case PartTouch.FromBack: col2.Touch = PartTouch.FromFront; break;
                        default:
                            col2.Touch = col.Touch;
                    }
                    col2.XHint = "!" + col.XHint;
                    col2.YHint = "!" + col.YHint;
                    col2.ZHint = "!" + col.ZHint;
                    col2.TouchGroup = touchGroup;
                    cols.push(col2);
                    detectedTouches.push(col2.PartSelf._id, col2.Part2._id);
                }
            }
        }
    }
    return cols;
}

export function createTouchBillOfMaterialStart(parts: PartBase[]) {
    parts.forEach(p => {
        p.createBomTouchElementsStart();
    });
}

export function createTouchBillOfMaterial(touches: Collision[]) {
    touches.forEach(t => {
        t.PartSelf.createBomTouchElements(t.Touch, t.Part2, t.PosRel);
    });
}

export function createTouchBillOfMaterialEnd(parts: PartBase[]) {
    parts.forEach(p => {
        p.createBomTouchElementsEnd();
    });
}

