import {app, BrowserWindow} from 'electron';

console.log('main process', __dirname);

app.on('ready', () => {
  const mainWindow = new BrowserWindow();
  const rendererUrl = 'http://localhost:32438/index.html';
  console.log('rendererUrl', rendererUrl);
  mainWindow.loadURL(rendererUrl);
  mainWindow.webContents.openDevTools();
});
