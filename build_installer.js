//import { MSICreator } from 'electron-wix-msi';
let MSICreator = require('electron-wix-msi').MSICreator;
const APP_NAME = 'vue.foo'
const path= require('path');
const APP_DIR = path.resolve(__dirname, "release-builds\\vue.foo-win32-ia32");
const OUT_DIR = path.resolve(__dirname, 'ooo');



// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  description: 'Vue.Foo',
  exe: APP_NAME,
  name: APP_NAME,
  manufacturer: 'dsmarkchen',
  version: '1.0.0',
  outputDirectory: OUT_DIR,
  ui: {
    chooseDirectory: true
  }

});

// Step 2: Create a .wxs template file
msiCreator.create().then(() => {
  msiCreator.compile();
});
