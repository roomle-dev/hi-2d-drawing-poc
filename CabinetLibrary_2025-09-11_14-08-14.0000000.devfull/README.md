# tecConfig

## Initial setup

1. Install VSCode from: <https://code.visualstudio.com/>

2. Install NVM
   * Download zip file (nvm-setup.exe) from: <https://github.com/coreybutler/nvm-windows/releases>
   * Execute the program

3. Install plugins inside VSCode:
   * Error Lens: <https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens>
   * ESLint: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
   * IntelliCode: <https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode>
   * Prettier - code formatter: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
   * Spell Right: <https://marketplace.visualstudio.com/items?itemName=ban.spellright>

4. Install other stuff
   * Open VSCode
   * Open a new terminal (Terminal | New Terminal)
   * Install Node v22
   * Execute in the terminal: `nvm install 22.2.0`
   * Execute in the terminal: `nvm use 22.2.0`
   * Install yarn
   * Execute in the terminal: `npm install -g yarn`
   * You need to allow yarn to execute PowerShell scripts; the easiest way is to allow all scripts: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope LocalMachine`

## Development

1. Download the "DEV-FULL-Download" package (ONLY NEEDED ONCE or on UI changes)
   1.1. After you have downloaded this ONCE you can then download the "DEV-LIB-Download" which only contains the library data)

2. Extract the ZIP file

3. Open the folder in VSCode

4. Open a new terminal (Terminal | New Terminal)

5. Enter in the new terminal the following (ONLY needed ONCE): `yarn install`

6. Start the program: (Run | Start Debugging - F5))

7. Develop your scripts

## Development server

Run `yarn run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `yarn run build` to build the project. The build artifacts will be stored in the `dist/` directory.