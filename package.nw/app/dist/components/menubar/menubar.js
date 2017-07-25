"use strict";function init(){var e=require("../../lib/react.js"),t=require("../../components/mask/mask.js"),l=require("../../cssStr/cssStr.js"),s=require("../../stores/windowStores.js"),o=require("../../common/actions/actions.js"),r=require("../../utils/newReport.js"),a=require("../../actions/projectActions.js"),i=e.createClass({displayName:"Menubar",getInitialState:function(){return{memory:0,show:"win32"===process.platform||"linux"===process.platform||global.appConfig.isDev?{}:l.displayNone,showSubMenu:null}},actionsClick:function(e){var t=e.target,l=t.dataset,s=l.type;if(s.startsWith("submenu")){var i=s.match(/-(.+)$/)[1];this.setState({showSubMenu:i===this.state.showSubMenu?null:i})}else"closeProject"==s?(a.close(),r("project_"+close,this.props.project.appid)):o[s]&&o[s](),this.setState({showSubMenu:null})},onMaskClick:function(e){this.setState({showSubMenu:null})},_bodyClick:function(e){},componentDidMount:function(){s.on("BODY_CLICK",this._bodyClick)},componentWillUnmount:function(){s.removeListener("BODY_CLICK",this._bodyClick)},getMenuTree:function(){function s(t){var o=[],r=!0,a=!1,n=void 0;try{for(var c,h=t[Symbol.iterator]();!(r=(c=h.next()).done);r=!0){var p=c.value;if(p.show){var u=[],b=p.type,m=null;p.children&&(u=1===p.level?e.createElement("ul",{className:"menubar-item-sub submenu-"+p.type,style:i.state.showSubMenu===b?{}:l.displayNone},s(p.children)):e.createElement("ul",{className:"menubar-item-sub submenu-"+p.type,style:i.state.showSubMenu===b?{}:l.displayNone},s(p.children))),p.shortcut&&(m=e.createElement("span",{className:"menubar-item-shortcut"},p.shortcut)),o.push(e.createElement("li",{"data-type":p.children?"submenu-"+b:null,className:"menubar-item app-no-drag"},e.createElement("a",{href:"javascript:;","data-type":p.children?"submenu-"+b:b,className:"menubar-item-link"},p.label,m),u))}}}catch(e){a=!0,n=e}finally{try{!r&&h.return&&h.return()}finally{if(a)throw n}}return o}var o=!!this.props.project,r="edit"===this.props.show,a=!this.props.project;this.tree=[{label:"设置",type:"showSetting",show:!0,level:1},{label:"文件",type:"file",level:1,show:o&&r,children:[{label:"新建文件",type:"newFile",shortcut:"Ctrl + N",show:o&&r},{label:"保存",type:"save",shortcut:"Ctrl + S",show:o&&r},{label:"保存所有文件",type:"saveAll",shortcut:"Shift + Ctrl + S",show:o&&r},{label:"关闭文件",type:"closeFile",shortcut:"Ctrl + W",show:o&&r},{label:"关闭项目",type:"closeProject",show:o&&r}]},{label:"编辑",type:"edit",level:1,show:o&&r,children:[{label:"选中地址栏",type:"focusAddressBar",show:!o},{label:"撤销",type:"undo",shortcut:"Ctrl + Z",show:o&&r},{label:"重做",type:"redo",shortcut:"Shift + Ctrl + Z",show:o&&r},{label:"复制",type:"copy",shortcut:"Ctrl + C",show:o&&r},{label:"剪切",type:"cut",shortcut:"Ctrl + X",show:o&&r},{label:"粘贴",type:"paste",shortcut:"Ctrl + V",show:o&&r},{label:"左缩进",type:"unindent",shortcut:"Ctrl + [",show:o&&r},{label:"右缩进",type:"indent",shortcut:"Ctrl + ]",show:o&&r},{label:"格式化代码",type:"format",shortcut:"Shift + Alt + F",show:o&&r},{label:"代码上移一行",type:"moveLineUp",shortcut:"Alt + ↑",show:o&&r},{label:"代码下移一行",type:"moveLineDown",shortcut:"Alt + ↓",show:o&&r},{label:"复制并向上粘贴",type:"copyLineUp",shortcut:"Shift + Alt + ↑",show:o&&r},{label:"复制并向下粘贴",type:"copyLineDown",shortcut:"Shift + Alt + ↓",show:o&&r}]},{label:"查找",type:"find",level:1,show:o&&r,children:[{label:"搜索",type:"find",shortcut:"Ctrl + F",show:o&&r},{label:"全局搜索",type:"globalFind",shortcut:"Shift + Ctrl + F",show:o&&r},{label:"替换",type:"replace",shortcut:"Ctrl + H",show:o&&r}]},{label:"界面",type:"view",level:1,show:o&&r,children:[{label:"显示 / 隐藏模拟器",type:"toggleSimulatorView",shortcut:"Ctrl + F1",show:o},{label:"显示 / 隐藏目录树",type:"toggleFileTreeView",shortcut:"Ctrl + F2",show:o}]},{label:"跳转",type:"goto",level:1,show:o&&r||a,children:[{label:"跳转到文件",type:"gotoFile",shortcut:"Ctrl + P",show:o&&r},{label:"跳转到最近文件",type:"gotoRecentFile",shortcut:"Ctrl + E",show:o&&r},{label:"上一个编辑器",type:"gotoPreviousEditor",shortcut:"Ctrl + PageUp",show:o&&r},{label:"下一个编辑器",type:"gotoNextEditor",shortcut:"Ctrl + PageDown",show:o&&r},{label:"后退",type:"goback",shortcut:"Ctrl + Left",show:a},{label:"前进",type:"goforward",shortcut:"Ctrl + Right",show:a},{label:"选中地址栏",type:"focusAddressBar",shortcut:"Ctrl + L",show:a}]},{label:"工具",type:"tools",level:1,show:o||a,children:[{label:"编译",type:"reBuild",shortcut:"Ctrl + B",show:o},{label:"刷新",type:"reload",shortcut:"F5 | Ctrl + R",show:a},{label:"自定义分析",type:"customAnalysis",show:o}]},{label:"帮助",type:"help",level:1,show:!0,children:[{label:"开发文档",type:"jumpDoc",show:o},{label:"更新日志",type:"showChangeLog",show:!0},{label:"关于",type:"showAbout",show:!0}]},{label:"开发者社区",type:"jumpBbs",level:1,show:!0}];var i=this,n=this.tree,c=s(n),h=this.props.lastWinStatus,p="restore"===h.status?"operation-max-icon":"operation-recover-icon";return e.createElement("div",{className:"menubar-wrapper app-drag",style:this.state.show},e.createElement(t,{show:!!this.state.showSubMenu,zIndex:8192,onClick:this.onMaskClick}),e.createElement("ul",{className:"menubar",onClick:this.actionsClick,style:{zIndex:8192}},c),e.createElement("div",{className:"titlebar"},e.createElement("h1",null,"微信开发者工具 ",global.appVersion," ",global.appConfig.isBeta?"beta":"")),e.createElement("div",{className:"operation-area app-no-drag"},e.createElement("a",{href:"javascript:;",onClick:this.props.appMin,className:"operation-item"},e.createElement("i",{className:"operation-min-icon"})),e.createElement("a",{href:"javascript:;",onClick:this.props.appMax,className:"operation-item"},e.createElement("i",{className:p})),e.createElement("a",{href:"javascript:;",onClick:this.props.appQuit,className:"operation-item"},e.createElement("i",{className:"operation-close-icon"}))))},render:function(){return this.getMenuTree()}});_exports=i}var _exports;init(),module.exports=_exports;