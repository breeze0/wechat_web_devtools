"use strict";function init(){var e=require("../../lib/react.js"),t=require("../../cssStr/cssStr.js"),a=(require("../../actions/projectActions.js"),require("../../stores/configStores.js")),s=require("../../weapp/utils/projectManager.js"),r=require("../../stores/windowStores.js"),o=require("../../stores/projectStores.js"),i=require("../../actions/windowActions.js"),n="custompreview",c=e.createClass({displayName:"CustomPreview",getInitialState:function(){var e=o.getCurrentProjectConfig();return{lazyLoaded:!1,err:"",referDataErr:"",page:"",query:"",show:!1,type:"",enable:!1,showLaunch:!1,showSceneList:!1,showGroup:!1,showGroupList:!1,sceneData:a.getSceneConfig(),groupList:e&&e.groupList||[],groupInfo:{}}},checkPage:function(e){var t=this.state.project;return!this.state.page||(s.isProjectPage(t,this.state.page)?(this.setState({err:""}),!0):(this.setState({err:"页面不存在，请检查后重试"}),!1))},checkReferData:function(){if(!this.state.enable||!this.state.showLaunch)return!0;try{JSON.parse(this.state.referData||"{}")}catch(e){return this.setState({showLaunch:!0,referDataErr:"解析错误，"+e}),!1}return!0},changeQuery:function(e){var t=e.target.value;this.setState({query:t})},changePage:function(e){var t=e.target.value;this.setState({page:t})},upload:function(e){if(this.checkPage()&&this.checkReferData()){var t=this.state;this.state.callback({page:t.page||"",query:t.query,scene:parseInt(t.scene),enable:t.enable,referData:t.showLaunch?t.referData:"",groupInfo:t.showGroup?t.groupInfo:null,appid:t.showLaunch?t.appid:""}),this.close()}},_showCustomPreview:function(e){var t=e.project,s=t.uploadPath,r=t.initPath,o="upload"===e.type?s:r,i=o.page,n=o.query,c=o.enable,l=o.scene,m=o.appid,p=o.referData,u=o.groupInfo,h=l==a.getMiniProgramScene()||l==a.getMiniProgramBackScene();this.setState({lazyLoaded:!0,show:!0,page:i||"",query:n||"",project:t,scene:l||"",sceneWording:a.getSceneWording(l),referData:p||"",appid:m||"",callback:e.callback,type:e.type,showGroup:l==a.getGroupScene(),showLaunch:h,enable:c,groupInfo:u||{}})},changeEnable:function(){this.setState({enable:!this.state.enable})},changeAppId:function(e){var t=e.target.value;this.setState({appid:t})},changeReferData:function(e){var t=e.target.value,a="";try{JSON.parse(t)}catch(e){a="解析错误，"+e}this.setState({referData:t,referDataErr:a})},onSceneSelect:function(e){e.stopPropagation();var t=e.currentTarget.dataset,s=t.scene,r=t.wording,o={showLaunch:!1,showSceneList:!1,showGroup:!1,showGroupList:!1,scene:s,sceneWording:r};s==a.getMiniProgramScene()||s==a.getMiniProgramBackScene()?o.showLaunch=!0:s==a.getGroupScene()&&(o.showGroup=!0),i.clickToolsbar(n),this.setState(o)},onGroupSelect:function(e){e.stopPropagation();var t=e.currentTarget.dataset,a=t.shareKey,s=t.shareName,r=t.groupName;this.setState({showGroupList:!1,groupInfo:{shareKey:a,shareName:s,groupName:r}}),i.clickToolsbar(n)},onShowGroupList:function(e){e.stopPropagation(),this.setState({showSceneList:!1,showGroupList:!0})},onShowSceneList:function(e){e.stopPropagation(),this.setState({showGroupList:!1,showSceneList:!0})},close:function(){this.setState({err:"",page:"",query:"",show:!1,type:"",enable:!1})},_clickToolsbar:function(e){n!=e&&this.setState({showSceneList:!1,showGroupList:!1})},_onSceneConfigChange:function(e){this.setState({sceneData:e})},_onConfigRefreshed:function(e){var t=e&&e.groupList||[];this.setState({groupList:t})},componentDidMount:function(){r.on("SHOW_CUSTOM_PREVIEW",this._showCustomPreview),r.on("BODY_CLICK",this._clickToolsbar),r.on("CLICK_TOOLSBAR",this._clickToolsbar),o.on("PROJECT_CONFIG_REFRESHED",this._onConfigRefreshed),a.on("SCENE_CONFIG_CHANGE",this._onSceneConfigChange)},componentWillUnmount:function(){r.removeListener("SHOW_CUSTOM_PREVIEW",this._showCustomPreview),r.removeListener("BODY_CLICK",this._clickToolsbar),r.removeListener("CLICK_TOOLSBAR",this._clickToolsbar),o.removeListener("PROJECT_CONFIG_REFRESHED",this._onConfigRefreshed),a.removeListener("SCENE_CONFIG_CHANGE",this._onSceneConfigChange)},render:function(){var a=this;if(!this.state.lazyLoaded)return null;var s=this.state.show?t.displayBlock:t.displayNone,r="upload"===this.state.type,o=r?"预览":"确定",i=r?"预览":"编译",n=this.state.showLaunch&&!r?t.displayBlock:t.displayNone,c=this.state.sceneData,l=[];for(var m in c)l.push(e.createElement("div",{className:"custom-preview-dropdown-item","data-scene":m,"data-wording":c[m],onClick:this.onSceneSelect},m+": "+c[m]));var p=this.state.showGroup&&this.state.groupList.length>0&&!r?t.displayBlock:t.displayNone,u=this.state.groupList.map(function(t,s){return e.createElement("div",{className:"custom-preview-dropdown-item","data-group-name":t.room_topic,"data-share-key":t.share_key,"data-share-name":t.share_name,onClick:a.onGroupSelect},t.room_topic)});return e.createElement("div",{className:"setting-show",style:s},e.createElement("div",{className:"setting-hd"},e.createElement("h3",{className:"setting-hd-title"},"自定义",i)),e.createElement("div",{className:"setting-bd"},e.createElement("div",{className:"custom-preview"},e.createElement("div",{className:"custom-preview-form"},e.createElement("div",{className:"custom-preview-form-item"},e.createElement("div",{className:"custom-preview-form-label"},"设置编译时的启动页面"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("input",{type:"text",onChange:this.changePage,value:this.state.page,placeholder:"页面地址（默认为首页）"})),e.createElement("div",{className:"custom-preview-form-tips"},e.createElement("p",null,this.state.err))),e.createElement("div",{className:"custom-preview-form-item"},e.createElement("div",{className:"custom-preview-form-label"},"设置页面自定义参数"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("input",{value:this.state.query,onChange:this.changeQuery,type:"text",placeholder:"参数"}))),e.createElement("div",{className:"custom-preview-form-item",style:r?t.displayNone:{}},e.createElement("div",{className:"custom-preview-form-label"},"设置应用进入的场景"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("div",{className:"custom-preview-form-input-wrapper",onClick:this.onShowSceneList},e.createElement("input",{value:this.state.scene+": "+this.state.sceneWording,disabled:!0,type:"text"}),e.createElement("i",{className:this.state.showSceneList?"custom-preview-dropdown-icon-up":"custom-preview-dropdown-icon-down"})),e.createElement("div",{className:"custom-preview-dropdown",style:this.state.showSceneList?{}:t.displayNone},l))),e.createElement("div",{style:p},e.createElement("div",{className:"custom-preview-form-item"},e.createElement("div",{className:"custom-preview-form-label"},"选择进入的群"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("div",{className:"custom-preview-form-input-wrapper",onClick:this.onShowGroupList},e.createElement("input",{value:this.state.groupInfo.groupName,disabled:!0,type:"text"}),e.createElement("i",{className:this.state.showGroupList?"custom-preview-dropdown-icon-up":"custom-preview-dropdown-icon-down"})),e.createElement("div",{className:"custom-preview-dropdown",style:this.state.showGroupList?{}:t.displayNone},u)))),e.createElement("div",{style:n},e.createElement("div",{className:"custom-preview-form-item"},e.createElement("div",{className:"custom-preview-form-label"},"设置 appid"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("input",{type:"text",onChange:this.changeAppId,value:this.state.appid,placeholder:"启动的 appid"}))),e.createElement("div",{className:"custom-preview-form-item"},e.createElement("div",{className:"custom-preview-form-label"},"设置 extraData (JSON)"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("textarea",{value:this.state.referData,onChange:this.changeReferData,type:"text",placeholder:""})),e.createElement("div",{className:"custom-preview-form-tips"},e.createElement("p",null,this.state.referDataErr)))),e.createElement("div",{style:r?t.displayNone:{},className:"custom-preview-form-item"},e.createElement("div",{className:"custom-preview-form-value"},e.createElement("label",{onClick:this.changeEnable,htmlFor:"customPreviewCheckbox",className:"custom-preview-form-checkbox"},e.createElement("input",{checked:this.state.enable,type:"checkbox"}),e.createElement("i",null),"保存为默认编译模式")))))),e.createElement("div",{className:"setting-ft"},e.createElement("a",{onClick:this.close,href:"javascript:;",className:"setting-button-default"},"取消"),e.createElement("a",{onClick:this.upload,href:"javascript:;",className:"detail-meta-upload"},o)))}});_exports=c}var _exports;init(),module.exports=_exports;