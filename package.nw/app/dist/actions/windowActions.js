"use strict";function init(){var t=require("../dispatcher/dispatcher.js"),i={showTipsMsg:function(i){t.dispatch({actionType:"SHOW_TIPS_MSG",opt:i})},updataProxySetting:function(i,n){t.dispatch({actionType:"UPDATA_PROXY_SETTING",proxyType:i,callback:n})},showAbout:function(){t.dispatch({actionType:"SHOW_ABOUT_LAYER"})},showLoginLayer:function(){t.dispatch({actionType:"SHOW_LOGIN_LAYER"})},resize:function(i){t.dispatch({actionType:"WINDOW_RESIZE",height:i})},blur:function(){t.dispatch({actionType:"WINDOW_BLUR"})},focus:function(){t.dispatch({actionType:"WINDOW_FOCUS"})},bodyClick:function(i){t.dispatch({actionType:"BODY_CLICK",event:i})},upDateUserInfo:function(i){t.dispatch({actionType:"UPDATA_USER_INFO",info:i})},clearUserInfo:function(){t.dispatch({actionType:"CLEAR_USER_INFO"})},upTicket:function(i,n){t.dispatch({actionType:"UP_USER_TICKET",newticket:i,ticketExpiredTime:n})},delTicket:function(){t.dispatch({actionType:"DEL_USER_TICKET"})},setAutoComplete:function(i){t.dispatch({actionType:"SET_AUTO_COMPLETET",url:i})},showSetting:function(){t.dispatch({actionType:"SHOW_SETTING"})},focusAddressBar:function(i){t.dispatch({actionType:"FOCUS_ADDRESSBAR",webviewID:i})},clearAddressHistory:function(i){t.dispatch({actionType:"CLEAR_ADDRESSBAR_HISTORY",data:i})},saveSetting:function(i){t.dispatch({actionType:"SAVE_SETTING",data:i})},changeUrl:function(i,n){t.dispatch({actionType:"CHANGE_WEBVIEW_URL",url:i,webviewID:n})},closeWebviewDevtools:function(i){t.dispatch({actionType:"CLOSE_WEBVIEW_DEVTOOLS",webviewID:i})},openWebviewDevtools:function(i,n,o){t.dispatch({webviewID:i,actionType:"OPEN_WEBVIEW_DEVTOOLS",webview:n,webviewOffset:o})},setWebviewInfo:function(i){t.dispatch({actionType:"WINDOW_SET_WEBVIEW_INFO",data:i})},appEnterBackground:function(){t.dispatch({actionType:"APP_ENTER_BACKGROUND"})},appEnterForeground:function(i){t.dispatch({actionType:"APP_ENTER_FOREGROUND",data:i})},clickToolsbar:function(i){t.dispatch({actionType:"CLICK_TOOLSBAR",clickkey:i})},operateMusicPlayer:function(i){t.dispatch({actionType:"OPERATE_MUSIC_PLAY",opt:i})},getMusicPlayerState:function(i){t.dispatch({actionType:"GET_MUSIC_PLAY_STATE",callback:i})},startDebuggee:function(i,n){t.dispatch({actionType:"START_WEBVIEW_DEBUGGEE",webviewID:i,data:n})},changeWebviewID:function(i){t.dispatch({actionType:"WINDOW_CHANGE_WEBVIEW_ID",webviewID:i})},getWeappError:function(i,n,o){t.dispatch({actionType:"WINDOW_GET_WEBAPP_ERROR",webviewID:i,url:n,errStr:o})},showWeappError:function(i,n){t.dispatch({actionType:"WINDOW_SHOW_WEBAPP_ERROR",type:i,event:n})},showInConsole:function(i,n){t.dispatch({actionType:"WINDOW_SHOW_IN_CONSOLE",type:i,event:n})},showConfirm:function(i){t.dispatch({actionType:"WINDOW_SHOW_CONFIRM",data:i})},showSimulatorConfirm:function(i){t.dispatch({actionType:"WINDOW_SHOW_SIMULATOR_CONFIRM",data:i})},showAuthorizeConfirm:function(i){t.dispatch({actionType:"WINDOW_SHOW_AUTHORIZE_CONFIRM",data:i})},openProjectFile:function(i){t.dispatch({actionType:"OPEN_PROJECT_FILE",data:i})},toggleNewFeatureCheckShowStatus:function(i){t.dispatch({actionType:"TOGGLE_NEW_FEACHE_CHECK_SHOW_STATUS",status:i})},showCustomPreview:function(i){t.dispatch({actionType:"SHOW_CUSTOM_PREVIEW",options:i})},showWidgetCustom:function(i){t.dispatch({actionType:"SHOW_WIDGET_CUSTOM",options:i})},showSearchWidgetCustom:function(i){t.dispatch({actionType:"SHOW_SEARCH_WIDGET_CUSTOM",options:i})},editorFocus:function(){t.dispatch({actionType:"EDITOR_FOCUS"})},editorBlur:function(){t.dispatch({actionType:"EDITOR_BLUR"})},updateEditorConfig:function(i){t.dispatch({actionType:"UPDATE_EDITOR_CONFIG",data:i})},updateSettingByKey:function(i,n){t.dispatch({actionType:"UPDATE_SETTING_BY_KEY",key:i,data:n})},execEditorCommand:function(i){t.dispatch({actionType:"EXEC_EDITOR_COMMAND",data:i})},showWidgetWebviewError:function(i){t.dispatch({actionType:"SHOW_WIDGET_WEBVIEW_ERROR",data:i})},showCustomAnalysis:function(){t.dispatch({actionType:"SHOW_CUSTOM_ANALYSIS"})},closeCustomAnalysis:function(){t.dispatch({actionType:"CLOSE_CUSTOM_ANALYSIS"})}};_exports=i}var _exports;init(),module.exports=_exports;