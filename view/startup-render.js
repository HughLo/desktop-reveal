import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
require("bootstrap"); //the import syntax just does not work
import React from "react";
import ReactDOM from "react-dom";
let {dialog, BrowserWindow, app} = require('electron').remote;

let mdWin;

$("#browser-btn").on("click", ()=> {
  dialog.showOpenDialog({
    properties: ['openFile'],
    title: "choose the file",
    defaultPath: "/home"
  }, (fileNames)=> {
    if(fileNames === undefined) {
      console.log("no file selected");
      return;
    }
    localStorage.setItem("md-file-path", fileNames[0]);
    mdWin = new BrowserWindow({width: 800, height: 600});
    console.log(`app path: ` + app.getAppPath());
    mdWin.loadURL(`file://` + app.getAppPath() + `/view/reveal.html`);
    mdWin.webContents.openDevTools();
    mdWin.on("closed", ()=>{mdWin=null;});
  })
});

$("#new-btn").on("click", ()=> {

})

