const {BrowserWindow, app} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        backgroundColor: '#2d2d2d'
    });
};

app.whenReady().then(() => {
    createWindow();
});