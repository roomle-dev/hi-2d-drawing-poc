import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'

import { IGlobalVars, GlobalVars } from './global-vars'
import { IModBase, IPartBase, PartBase, MatrixHelper, IDockingInfo, Dock, IInsertLevelInfo } from './mod-base'

declare function uuidv4(): string;

export class MathHelper {
  static numberEq(a?:number, b?:number):boolean {
    if (a === undefined && b === undefined) { return true; }
    if (a === undefined || b === undefined) { return false; }
    const epsilon: number = 0.000001;
    return Math.abs(a - b) < epsilon;
  }

  static normalizeAngle(degree:number):number {
    // Use the Modulo-Operator to bring the angle into the range from 0 to 360
    let normalizedAngle = degree % 360;

    // If the angle is negative, add 360 to make it positive
    if (normalizedAngle < 0) {
        normalizedAngle += 360;
    }

    return normalizedAngle;
  }

  static radianToDegree(radian:number) {
    return radian * (180/Math.PI);
  }

  // See: https://github.com/mrdoob/three.js/blob/dev/src/math/MathUtils.js
  static clamp( value:number, min:number, max:number ) {
	  return Math.max( min, Math.min( max, value ) );
  }
}

export class Euler {
  // See: https://github.com/mrdoob/three.js/blob/dev/src/math/Euler.js
  constructor( x = 0, y = 0, z = 0, order = 'XYZ' ) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
  }
  _x:number;
  _y:number;
  _z:number;
  _order:string;

  setFromRotationMatrix(m:Matrix4, order:string = this._order) {
    const te = m.elements;
    const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
    const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
    const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

    switch ( order ) {
      case 'XYZ':
        this._y = Math.asin( MathHelper.clamp( m13, - 1, 1 ) );

        if ( Math.abs( m13 ) < 0.9999999 ) {
          this._x = Math.atan2( - m23, m33 );
          this._z = Math.atan2( - m12, m11 );
        } else {
          this._x = Math.atan2( m32, m22 );
          this._z = 0;
        }
        break;

      case 'YXZ':
        this._x = Math.asin( - MathHelper.clamp( m23, - 1, 1 ) );

        if ( Math.abs( m23 ) < 0.9999999 ) {
          this._y = Math.atan2( m13, m33 );
          this._z = Math.atan2( m21, m22 );
        } else {
          this._y = Math.atan2( - m31, m11 );
          this._z = 0;
        }
        break;

      case 'ZXY':
        this._x = Math.asin( MathHelper.clamp( m32, - 1, 1 ) );

        if ( Math.abs( m32 ) < 0.9999999 ) {

          this._y = Math.atan2( - m31, m33 );
          this._z = Math.atan2( - m12, m22 );
        } else {
          this._y = 0;
          this._z = Math.atan2( m21, m11 );
        }
        break;

      case 'ZYX':
        this._y = Math.asin( - MathHelper.clamp( m31, - 1, 1 ) );

        if ( Math.abs( m31 ) < 0.9999999 ) {
          this._x = Math.atan2( m32, m33 );
          this._z = Math.atan2( m21, m11 );
        } else {
          this._x = 0;
          this._z = Math.atan2( - m12, m22 );
        }
        break;

      case 'YZX':
          this._z = Math.asin( MathHelper.clamp( m21, - 1, 1 ) );

        if ( Math.abs( m21 ) < 0.9999999 ) {
          this._x = Math.atan2( - m23, m22 );
          this._y = Math.atan2( - m31, m11 );
        } else {
          this._x = 0;
          this._y = Math.atan2( m13, m33 );
        }
        break;

      case 'XZY':
        this._z = Math.asin( - MathHelper.clamp( m12, - 1, 1 ) );

        if ( Math.abs( m12 ) < 0.9999999 ) {
          this._x = Math.atan2( m32, m22 );
          this._y = Math.atan2( m13, m11 );
        } else {
          this._x = Math.atan2( - m23, m33 );
          this._y = 0;
        }
        break;

      default:
        console.warn( 'Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );
    }

    this._order = order;
    return this;
  }
}

export class Vector3 {
  // See: https://github.com/mrdoob/three.js/blob/dev/src/math/Vector3.js
  constructor(x = 0, y = 0, z = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
  }
  _x:number;
  _y:number;
  _z:number;
  applyMatrix4(m:Matrix4) {
    const x = this._x, y = this._y, z = this._z;

    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);

    this._x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this._y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this._z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;

      return this;
  }

  setFromMatrixPosition(m:Matrix4) {
    const e = m.elements;

    this._x = e[ 12 ];
    this._y = e[ 13 ];
    this._z = e[ 14 ];

    return this;
  }

  setFromMatrixColumn(m: Matrix4, index: number) {
    return this.fromArray(m.elements, index * 4);
  }

  fromArray(array: Array<number>, offset: number = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];

    return this;
  }

  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
  }
}

export class Matrix4 {
  // See: https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js
  elements;  // column-order

  constructor() {
    this.elements = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
  }

  clone(): Matrix4 {
    return new Matrix4().fromArray( this.elements );
  }

  fromArray( array:number[], offset:number = 0 ): Matrix4 {
    for ( let i = 0; i < 16; i ++ ) {
        this.elements[ i ] = array[ i + offset ];
    }
    
    return this;
  }

  set(n11:number, n12:number, n13:number, n14:number, n21:number, n22:number, n23:number, n24:number, n31:number, n32:number, n33:number, n34:number, n41:number, n42:number, n43:number, n44:number) {
    const te = this.elements;
    te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
    te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
    te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
    te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
    return this;
  }

  makeBasis(x:number, y:number, z:number): Matrix4 {
    this.set(
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    );
    return this;
  }

  makeBasisV(xAxis:number[], yAxis:number[], zAxis:number[]): Matrix4 {
    this.set(
        xAxis[0], yAxis[0], zAxis[0], 0,
        xAxis[1], yAxis[1], zAxis[1], 0,
        xAxis[2], yAxis[2], zAxis[2], 0,
        0, 0, 0, 1
    );
    return this;
  }

  setPosition(x:number, y:number, z:number): Matrix4 {
    const te = this.elements;
    te[12] = x;
    te[13] = y;
    te[14] = z;
    return this;
  }

  makeRotationX(degree:number): Matrix4 {
    let theta = (Math.PI / 180) * degree;
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
        1, 0, 0, 0,
        0, c, - s, 0,
        0, s, c, 0,
        0, 0, 0, 1
    );
    return this;
  }

  makeRotationY(degree:number): Matrix4 {
    let theta = (Math.PI / 180) * degree;
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
        c, 0, s, 0,
        0, 1, 0, 0,
        - s, 0, c, 0,
        0, 0, 0, 1
    );
    return this;
  }

  makeRotationZ(degree:number): Matrix4 {
    let theta = (Math.PI / 180) * degree;
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
        c, - s, 0, 0,
        s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
    return this;
  }

  makeRotationAxis(x:number, y:number, z:number, degree:number): Matrix4 {
    var angle = (Math.PI / 180) * degree;
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    //const x = axis.x, y = axis.y, z = axis.z;
    const tx = t * x, ty = t * y;
    this.set(
        tx * x + c, tx * y - s * z, tx * z + s * y, 0,
        tx * y + s * z, ty * y + c, ty * z - s * x, 0,
        tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
        0, 0, 0, 1
    );
    return this;
  }

  makeRotationAxisV( axis:Vector3, angle:number ):Matrix4 {
    // Based on http://www.gamedev.net/reference/articles/article1199.asp
    const c = Math.cos( angle );
    const s = Math.sin( angle );
    const t = 1 - c;
    const x = axis._x, y = axis._y, z = axis._z;
    const tx = t * x, ty = t * y;
    
    this.set(
      tx * x + c, tx * y - s * z, tx * z + s * y, 0,
      tx * y + s * z, ty * y + c, ty * z - s * x, 0,
      tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
      0, 0, 0, 1
    );
    
    return this;
  }

  extractRotation( m: Matrix4 ):Matrix4 {
    const te = this.elements;
    const me = m.elements;
    const v1 = new Vector3();

    const scaleX = 1 / v1.setFromMatrixColumn( m, 0 ).length();
    const scaleY = 1 / v1.setFromMatrixColumn( m, 1 ).length();
    const scaleZ = 1 / v1.setFromMatrixColumn( m, 2 ).length();

    te[ 0 ] = me[ 0 ] * scaleX;
    te[ 1 ] = me[ 1 ] * scaleX;
    te[ 2 ] = me[ 2 ] * scaleX;
    te[ 3 ] = 0;

    te[ 4 ] = me[ 4 ] * scaleY;
    te[ 5 ] = me[ 5 ] * scaleY;
    te[ 6 ] = me[ 6 ] * scaleY;
    te[ 7 ] = 0;

    te[ 8 ] = me[ 8 ] * scaleZ;
    te[ 9 ] = me[ 9 ] * scaleZ;
    te[ 10 ] = me[ 10 ] * scaleZ;
    te[ 11 ] = 0;

    te[ 12 ] = 0;
    te[ 13 ] = 0;
    te[ 14 ] = 0;
    te[ 15 ] = 1;

    return this;
	}

  getNormalizedAnglesInDegrees():Vector3 {
    const rotMat = new Matrix4().extractRotation(this);
    const euler = new Euler().setFromRotationMatrix(rotMat);

    return new Vector3(
      MathHelper.normalizeAngle(MathHelper.radianToDegree(euler._x)),
      MathHelper.normalizeAngle(MathHelper.radianToDegree(euler._y)),
      MathHelper.normalizeAngle(MathHelper.radianToDegree(euler._z)));
  }

  hasRotation():boolean {
    const rotMat = new Matrix4().extractRotation(this);
    const euler = new Euler().setFromRotationMatrix(rotMat);

    return !MathHelper.numberEq(0, euler._x) ||
    !MathHelper.numberEq(0, euler._y) ||
    !MathHelper.numberEq(0, euler._z);
  }

  makeTranslation( x:number, y:number, z:number ) {
    this.set(
    1, 0, 0, x,
    0, 1, 0, y,
    0, 0, 1, z,
    0, 0, 0, 1
    );

    return this;
  }

  invert() {
    // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    const te = this.elements,

    n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
    n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
    n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
    n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

    t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
    t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
    t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
    t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

    const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

    if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

    const detInv = 1 / det;
    
    te[ 0 ] = t11 * detInv;
    te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
    te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
    te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

    te[ 4 ] = t12 * detInv;
    te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
    te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
    te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

    te[ 8 ] = t13 * detInv;
    te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
    te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
    te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

    te[ 12 ] = t14 * detInv;
    te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
    te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
    te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

    return this;
  }

  multiply( m:Matrix4 ) {

  return this.multiplyMatrices( this, m );
  
  }
  
  premultiply( m:Matrix4 ) {
  
  return this.multiplyMatrices( m, this );
  
  }
  
  multiplyMatrices( a:Matrix4, b:Matrix4 ) {
  
  const ae = a.elements;
  const be = b.elements;
  const te = this.elements;
  
  const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
  const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
  const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
  const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];
  
  const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
  const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
  const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
  const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];
  
  te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
  te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
  te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
  te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
  
  te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
  te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
  te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
  te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
  
  te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
  te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
  te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
  te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
  
  te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
  te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
  te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
  te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
  
  return this;
  }
}

export class PartGroup {
  constructor(partModId: string, rootPart: PartBase, groupName: string) {
    this.parentId = partModId;
    this._groupName = groupName;

    if (rootPart._groupRootId !== undefined) {
      const error = "You cannot assign a part as root to multiple part groups (" + rootPart._partId + " / " + rootPart._id + " / group: " + groupName + ")";
      logError(error);
      throw new Error(error);
    }
    this._mainPart = rootPart;
    rootPart._groupRootId = groupName;
  }
  parentId:string;
  _mainPart:PartBase;
  _groupName: string;

  addPart(part:PartBase) {
    if (part.partParentId !== undefined) {
      logError("You cannot assign a part to multiple part groups (" + part._partId + " / " + part._id + " / group: " + this._groupName + ")");
      return;
    }
    this._mainPart._childParts.push(part);
    part._groupParentId = this._groupName;
  }
}

export enum FullMatrixMode {
    Full,
    NoRotation,
    NoPosOrRotation,
}

export class OpenGroup {
  constructor(rootPart: PartBase, groupName: string, module: OD_Base) {
    this._groupName = groupName;
    this._moduleRef = module;
    this.addPart(rootPart);
  }
  _groupName: string;
  _moduleRef: OD_Base;

  // https://threejs.org/docs/#manual/en/introduction/Matrix-transformations
  // See also: http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/
  // a 4x4 matrix (arrray of 16 elements) in row-major order
  // See also: https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order
  // See: https://threejs.org/docs/#api/en/math/Matrix4
  openMatrix?: Matrix4 = undefined;

  addPart(part: IPartBase) {
    if (part._openGroupId !== undefined) {
      logError("You cannot assign a part to multiple open groups (" + part._partId + " / " + part._id + " / group: " + this._groupName + ")");
      return;
    }
    part._openGroupId = this._groupName;
  }
}

export class ArticlePos {
  x: number = 0;
  y: number = 0;
  z: number = 0;
  rotationY: number = 0;

  // INFO: Later we might use a Matrix4 to position the article...
};

export abstract class OD_Base {
  constructor(modId:string, parent:IModBase|undefined = undefined, manufacturerMode:boolean) {
    this.modId = modId;
    this.parentBase = parent;
    this._manufacturerMode = manufacturerMode;
    this._id = uuidv4();  // by default we create a new uuid
  }
  _id: string;  // unique id
  generationContours: GenerationContour[] = [];
  roomContours?: RoomContour[];
  _posData: Map<string, string | number> = new Map<string, string | number>(); // Optional data which is used only for OM data (height/width/depth / color / carcaseColor / doorDirection)
  modId:string;  // module id
  parentBase?:IModBase;  // parent module
  _articlePos: ArticlePos = new ArticlePos();
  _manufacturerMode:boolean;  // manufacturer mode
  _adcFinished:boolean = false; //afterDataCompletion finished
  _isGenerated?:boolean; // if true, this module is a generation module
  variants: string[] = []; // list of available variants
  m:OD_Base[] = [];  // sub modules list
  _g?:GlobalVars = undefined;  // global variables
  get g() : IGlobalVars { return (this._g === undefined ? this.parentBase!.g : this._g); }
  p: PartBase[] = [];  // part list
  #dockingInfo: IDockingInfo[] = [];
  get dockingInfo(): IDockingInfo[] { return this.#dockingInfo; }
  addDockingInfo(id: Dock, start: Vector3, end: Vector3) : IDockingInfo{
    const di: IDockingInfo = {id: id, start: start, end: end};
    this.#dockingInfo.push(di);
    return di;
  }
  #insertLevelInfo: IInsertLevelInfo[] = [];
  #insertLevelFixed: boolean = false;
  get insertLevelInfo(): IInsertLevelInfo[] { return this.#insertLevelInfo; }
  get insertLevelFixed(): boolean { return this.#insertLevelFixed; }
  set insertLevelFixed(value: boolean) { this.#insertLevelFixed = value; }
  addInsertLevelHeight(height:number, isDefault: boolean|undefined = undefined) : IInsertLevelInfo {
    const ili: IInsertLevelInfo = {height: height, isDefault: isDefault};
    this.#insertLevelInfo.push(ili);
    return ili;
  }
  _openGroups?: Map<string, OpenGroup>;
  _partGroups?: Map<string, PartGroup>;  // master data part groups (dictionary)
  abstract loadJson(json: any, withSubModules: boolean, manufacturerMode: boolean): void;
  abstract dataCompletion():void;
  abstract manufacturerDataCompletion():void;
  abstract afterDataCompletion():void;
  abstract createBuildPlan():void;
  abstract validateSelections(): void;
  checkPosRelevantRequiredAttributes(): void {}
  createPartGroup(groupName:string, part:PartBase): PartGroup { 
    if (!groupName) {
      var grpName = uuidv4();
      logError("'groupName' is empty when calling 'createPartGroup' - creating temporary name '" + grpName + "'!");
      groupName = grpName;
    }
    var grp = this.getPartGroupDict.get(groupName);
    if (grp) {
      grp.addPart(part);
      logError("groupName '" + groupName + "' already exists when calling 'createPartGroup' - part assigned to existing group!");
      return grp;
    }
    var pg = new PartGroup(this.modId, part, groupName);
    this.getPartGroupDict.set(groupName, pg);
    return pg;
  }
  assignPartGroup(groupName:string, part:PartBase) :void {
    if (!groupName) {
      var grpName = uuidv4();
      logError("'groupName' is empty when calling 'assignPartGroup' - creating temporary name '" + grpName + "'!");
      this.createPartGroup(grpName, part);
      return;
    }
    var grp = this.getPartGroupDict.get(groupName);
    if (!grp) {
      var grpName = uuidv4();
      logError("'" + groupName + "' is not found in the part groups - creating temporary name '" + grpName + "'!");
      this.createPartGroup(grpName, part);
      return;
    }
    grp.addPart(part);
  }
  createOpenGroup(groupName: string, part: PartBase): OpenGroup {
    if (!groupName) {
        var grpName = uuidv4();
        logError("'groupName' is empty when calling 'createOpenGroup' - creating temporary name '" + grpName + "'!");
        groupName = grpName;
    }
    var grp = this.getOpenGroupDict.get(groupName);
    if (grp) {
      grp.addPart(part);
      logError("groupName '" + groupName + "' already exists when calling 'createOpenGroup' - part assigned to existing group!");
      return grp;
    }
    var pg = new OpenGroup(part, groupName, this);
    this.getOpenGroupDict.set(groupName, pg);
    return pg;
  }
  assignOpenGroup(groupName: string, part: PartBase): void {
    if (!groupName) {
        var grpName = uuidv4();
        logError("'groupName' is empty when calling 'assignOpenGroup' - creating temporary name '" + grpName + "'!");
        this.createOpenGroup(grpName, part);
        return;
    }
    var grp = this.getOpenGroupDict.get(groupName);
    if (!grp) {
        var grpName = uuidv4();
        logError("'" + groupName + "' is not found in the open groups - creating temporary name '" + grpName + "'!");
        this.createOpenGroup(grpName, part);
        return;
    }
    grp.addPart(part);
  }
  get getOpenGroupDict(): Map<string, OpenGroup> { return ((!this._openGroups) ? this.parentBase!.getOpenGroupDict : this._openGroups); }
  get getPartGroupDict():Map<string, PartGroup> { return ((!this._partGroups) ? this.parentBase!.getPartGroupDict : this._partGroups); }
  _origin?:Matrix4 = undefined;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void {
    if (this._origin != undefined) {
      logError("'setOrigin' cannot be called multiple times!");
    }
    if (x instanceof Matrix4) {
      if (MatrixHelper.isValid(x)) {
        this._origin = x;
      }
      else {
        logError("Could not set origin in module '" + this.modId + "' (" + this._id + ") - matrix is invalid");
      }
    }
    else {
      var m = new Matrix4();
      var hasError = false;
      if (x === null || x === undefined || Number.isNaN(x)) {
        logError("Could not set origin in module '" + this.modId + "' (" + this._id + ") - x-value is undefined");
        hasError = true;
      }
      if (y === null || y === undefined || Number.isNaN(y)) {
        logError("Could not set origin in module '" + this.modId + "' (" + this._id + ") - y-value is undefined");
        hasError = true;
      }
      if (z === null || z === undefined || Number.isNaN(z)) {
        logError("Could not set origin in module '" + this.modId + "' (" + this._id + ") - z-value is undefined");
        hasError = true;
      }

      if (!hasError) {
        m.setPosition(x, y!, z!);
        this._origin = m;
      }
    }
  }

  getOrigin():Matrix4{
    if(this._origin){
      return this._origin;
    }

    logWarning("Undefined origin in module '" + this.modId + "'(" + this._id + ") when 'getOrigin()' was called.");
    return new Matrix4();
  }

  getOriginPos():Vector3{
    return new Vector3().setFromMatrixPosition(this.getOrigin());
  }

  getFullMatrix(mode: FullMatrixMode): Matrix4 {
    var m = new Matrix4();
    if (this._origin != undefined) {
      m = this._origin.clone();
    }
    if (this.parentBase != null) {
      m = this.parentBase.getFullMatrix(mode).multiply(m);
    }
    else {
      // Adjust abs coordinate system
      if (this._articlePos && (mode === FullMatrixMode.Full || mode === FullMatrixMode.NoRotation)) {
        if (mode === FullMatrixMode.Full) {
          m = m.multiply(new Matrix4().setPosition(this._articlePos.x, this._articlePos.y, this._articlePos.z));
          if (this._articlePos.rotationY !== 0) {
            m = m.multiply(new Matrix4().makeRotationY(this._articlePos.rotationY));
          }
        } else if (mode === FullMatrixMode.NoRotation) {
          let aPos = new Vector3(this._articlePos.x, this._articlePos.y, this._articlePos.z);
          if (this._articlePos.rotationY !== 0) {
            // We must rotate the root module back to the "Normal" position in order to calculate the touches
            let rotM2 = new Matrix4().makeRotationY(-this._articlePos.rotationY);
            aPos.applyMatrix4(rotM2);
            // round position to 5 digits
            aPos._x = Math.round(aPos._x*100000)/100000;
            aPos._y = Math.round(aPos._y*100000)/100000;
            aPos._z = Math.round(aPos._z*100000)/100000;
          }
          m = m.multiply(new Matrix4().setPosition(aPos._x, aPos._y, aPos._z));
        }
      }
    }
    return m;
  }

  getOpenFullMatrix(openGrp: OpenGroup): Matrix4 {
    var m = new Matrix4();
    if (this._origin != undefined) {
      m = this._origin.clone();
    }
    if (this.parentBase != null) {
      m = this.parentBase.getOpenFullMatrix(openGrp).multiply(m);
    }
    else {
      if (this._articlePos) {
        // Adjust abs coordinate system
        m = m.multiply(new Matrix4().setPosition(this._articlePos.x, this._articlePos.y, this._articlePos.z));
        if (this._articlePos.rotationY !== 0) {
          m = m.multiply(new Matrix4().makeRotationY(this._articlePos.rotationY));
        }
      }
    }

    if (openGrp._moduleRef === this) {
      m.multiply(openGrp.openMatrix!);
    }

    return m;
  }

  getFullOrigin(): Vector3 {
    let v3 = new Vector3();
    v3.setFromMatrixPosition(this.getFullMatrix(FullMatrixMode.NoRotation));
    return v3;
  }

  setPartModuleMatrix() {
    let m = this.getFullMatrix(FullMatrixMode.Full);
    let m2 = this.getFullMatrix(FullMatrixMode.NoRotation);
    this.p.forEach(part => {
      part._matrix = m2.clone();
      const isPartMatrixValid = MatrixHelper.isValid(part._partMatrix);

      if (part._partMatrix && isPartMatrixValid) {
        part._fullMatrix = m.clone().multiply(part._partMatrix);
      }
      else if (part._partMatrix && !isPartMatrixValid) {
        logError('Part matrix is invalid for part ' + part._partId + ' in ' + this.modId);
        part._partMatrix = undefined;
      }
      else {
        part._fullMatrix = m.clone();
      }

      if (part._openGroupId) {
        let og = this.getOpenGroupDict.get(part._openGroupId)!;
        let openMatrix = og.openMatrix!;

        if (MatrixHelper.isValid(openMatrix)) {
          part._openFullMatrix = this.getOpenFullMatrix(og);

          if (part._partMatrix) {
            part._openFullMatrix.multiply(part._partMatrix);
          }
        }
        else {
          logError('Open matrix is invalid for open group ' + part._openGroupId);
          part._openFullMatrix = undefined;
        }
      }
    });
    this.m.forEach(subMod => { subMod.setPartModuleMatrix(); });
  }
    abstract getAttributes(): Map<string, any>;
    getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined { return undefined }

  toJson(withCheckAttributes?: boolean): any {
    if (!this.parentBase) {
      // Only in root - it iternally calls all submodules
      this.setPartModuleMatrix();
    }
    var json: any = new Object();
    json.id = this._id;
    json.moduleId = this.modId;
    if (!this.parentBase) { // We only use the article pos on the root article
      json.articlePos = this._articlePos;
    }
    json._isGenerated = this._isGenerated;
    json.origin = this._origin;
    json.attributes = {};
    this.getAttributes().forEach(
      (value, key) => (json.attributes[key] = value)
    );
    if (this._posData?.size > 0) {
      json.posData = {};
      this._posData.forEach((value, key) => (json.posData[key] = value));
    }
    json.assignedPartIds = [];
    this.p.forEach(part => json.assignedPartIds.push(part._id));
      let mods: Object[] = [];
      this.m.forEach(subMod => { mods.push(subMod.toJson(withCheckAttributes)) });
    json.modules = mods;
    if (this._g) {
      json.globals = {};
      this._g.getAttributes().forEach((value, key) => json.globals[key] = value);
    }
    if(this.#dockingInfo.length > 0){
      json.dockingInfo = this.#dockingInfo;
    }
    if(this.#insertLevelInfo.length > 0){
      json.insertLevelInfo = this.#insertLevelInfo;
    }
    json.insertLevelFixed = this.#insertLevelFixed;
    json.generationContours = this.generationContours;
    const orderData = (this as any)['orderData'];
    if (orderData) {
      json.orderData = orderData;
      }
    if (withCheckAttributes) {
    json.checkAttributes = this.getCheckAttributes();
    }

    return json;
}}

export enum CKind {
  None = 'None',
  Front = 'Front',
  Back = 'Back',
  Left = 'Left',
  Right = 'Right'
};

export class Contour {
  constructor(startX:number, startY:number, attr?: (attr:Map<string, string|number>) => void){
    var ce = { kind:CKind.None, posType: "M", x: startX, y: startY } as ContourEntry;
    Contour.#handleAttr(ce, attr);
    this._entries.push(ce);
  }
  static #handleAttr(ce: ContourEntry, attr?: (attr:Map<string, string|number>) => void) {
    if (attr) {
      if (!ce.attributes) {
        ce.attributes = new Map<string, string|number>()
      }
      attr(ce.attributes);
    }
  }
  static M(startX:number, startY:number, attr?: (attr:Map<string, string|number>) => void): Contour {
    return new Contour(startX, startY, attr);
  }
  // See: https://www.w3schools.com/graphics/svg_path.asp
  L(kind: CKind, x: number, y: number, attr?: (attr:Map<string, string|number>) => void): Contour {
    var ce = { kind: kind, posType: "L", x: x, y: y } as ContourEntry;
    Contour.#handleAttr(ce, attr);
    this._entries.push(ce);
    return this;
  }
  H(kind:CKind, x: number, attr?: (attr:Map<string, string|number>) => void):Contour {
    var ce = { kind: kind, posType: "H", x: x } as ContourEntry;
    Contour.#handleAttr(ce, attr);
    this._entries.push(ce);
    return this;
  }
  V(kind:CKind, y:number, attr?: (attr:Map<string, string|number>) => void):Contour {
    var ce = { kind: kind, posType: "V", y: y } as ContourEntry;
    Contour.#handleAttr(ce, attr);
    this._entries.push(ce);
    return this;
  }
  Z(kind:CKind, attr?: (attr:Map<string, string|number>) => void):Contour {
    var ce = { kind: kind, posType: "Z" } as ContourEntry;
    Contour.#handleAttr(ce, attr);
    this._entries.push(ce);
    return this;
  }
  _entries: ContourEntry[] = [];
  attributes:Map<string, string|number> = new Map<string, string|number>();
}

export class ContourEntry {
  kind: CKind = CKind.None;
  posType: string = "M";
  x?: number;
  y?:number;
  attributes?:Map<string, string|number>;
}

export interface GenerationContour {
  generationMethod: GenerationMethod;
  height: number;
  contour: Contour;
  position: ArticlePos; // x,y,z
}

export class RoomContour {
  level: number = 0;
  segments: RoomContourSegment[] = [];
}

export class RoomContourSegment {
  cmd: string = '';
  x: number = 0;
  y: number = 0;
  angle: number = 0;
  type?: string;
};

export class OD_Base_NotFound extends OD_Base {
    private _attributes: Map<string, any> = new Map<string, any>();

    constructor(
        modId: string,
        parent: IModBase | undefined = undefined,
        manufacturerMode: boolean
    ) {
        super(modId, parent, manufacturerMode);
    }

    override dataCompletion(): void { }
    override manufacturerDataCompletion(): void { }
    override afterDataCompletion(): void { }
    override createBuildPlan(): void { }
    override validateSelections(): void { }

    override loadJson(
        json: any,
        withSubModules: boolean,
        manufacturerMode: boolean
    ): void {
        for (const [key, value] of Object.entries(json['attributes'] || {})) {
            this._attributes.set(key, value);
        }
    }

    override getAttributes(): Map<string, any> {
        return this._attributes;
    }
}

export enum GenerationMethod {
	Paneltop = 'Paneltop',
	Countertop = 'Countertop',
	Toekick = 'Toekick',
	Fingergrip = 'Fingergrip',
}
