const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadFile(path.join(__dirname, 'public/index.html'));
    // win.webContents.openDevTools(); // Keep this for debugging

    // Comment or remove this line to stop automatic reloading
    // win.webContents.on('did-finish-load', () => {
    //     win.webContents.reloadIgnoringCache();
    // });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// const { app, BrowserWindow } = require('electron');

// function createWindow() {
//     // Create the browser window.
//     const mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: false,
//         },
//     });

//     // Load your HTML file into the window
//     mainWindow.loadFile('index.html');

//     // Execute JavaScript when the window is ready to show
//     // mainWindow.webContents.on('did-finish-load', () => {
//     //     mainWindow.webContents.executeJavaScript(`
//     //         console.log('Main window loaded');
//     //         // Add more JavaScript code to execute here
//     //         alert('Welcome to your Electron app!');
//     //     `);
//     // });
// }

// // This method will be called when Electron has finished initialization
// app.whenReady().then(createWindow);

// // Quit when all windows are closed
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow();
//     }
// });

