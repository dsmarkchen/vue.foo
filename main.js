const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const url = require("url");
const path = require("path");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
console.log(app);
app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
/*  
let url;
if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:9000/";
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

app.on("ready", () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  window.loadURL(url);
});
*/
