function app(){
  var $wnd_0 = window, $doc_0 = document, $stats = $wnd_0.__gwtStatsEvent?function(a){
    return $wnd_0.__gwtStatsEvent(a);
  }
  :null, $sessionId_0 = $wnd_0.__gwtStatsSessionId?$wnd_0.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'begin'});
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc_0.getElementById('app');
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name_0){
          return computePropValue(name_0);
        }
        ;
      }
      app = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, 'app', base);
      $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'end'});
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = '__gwt_marker_app', markerScript;
    $doc_0.write('<script id="' + markerId + '"><\/script>');
    markerScript = $doc_0.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != 'SCRIPT') {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc_0.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc_0.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content;
      if (name_0) {
        if (name_0 == 'gwt:property') {
          content = meta.getAttribute('content');
          if (content) {
            var value, eq = content.indexOf('=');
            if (eq >= 0) {
              name_0 = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name_0 = content;
              value = '';
            }
            metaProps[name_0] = value;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content = meta.getAttribute('content');
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert('Bad handler "' + content + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content = meta.getAttribute('content');
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert('Bad handler "' + content + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc_0.createElement('iframe');
      iframe.src = "javascript:''";
      iframe.id = 'app';
      iframe.style.cssText = 'position:absolute;width:0;height:0;border:none';
      iframe.tabIndex = -1;
      $doc_0.body.appendChild(iframe);
      $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'moduleRequested'});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers['compat.mode'] = function(){
    return document.compatMode == 'CSS1Compat'?'CSS1Compat':'BackCompat';
  }
  ;
  values['compat.mode'] = {BackCompat:0, CSS1Compat:1};
  providers['hasflash'] = function(){
    if (window.location.href.indexOf('_force_flash') != -1)
      return 'force';
    if (navigator.plugins) {
      var x = navigator.plugins['Shockwave Flash'];
      if (x) {
        var desc = x.description;
        var ind = desc.indexOf('.');
        if (ind > -1 && desc.charAt(ind - 1) == '9')
          return 'yes';
      }
    }
    if (navigator.userAgent.indexOf('MSIE') != -1) {
      var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.9');
      if (axo != null && axo != undefined)
        return 'yes';
    }
    return 'no';
  }
  ;
  values['hasflash'] = {force:0, no:1, yes:2};
  providers['user.agent'] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf('opera') != -1) {
      return 'opera';
    }
     else if (ua.indexOf('webkit') != -1) {
      return 'safari';
    }
     else if (ua.indexOf('msie') != -1) {
      if (document.documentMode >= 8) {
        return 'ie8';
      }
       else {
        var result_0 = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
        if (result_0 && result_0.length == 3) {
          var v = makeVersion(result_0);
          if (v >= 6000) {
            return 'ie6';
          }
        }
      }
    }
     else if (ua.indexOf('gecko') != -1) {
      var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result_0 && result_0.length == 3) {
        if (makeVersion(result_0) >= 1008)
          return 'gecko1_8';
      }
      return 'gecko';
    }
    return 'unknown';
  }
  ;
  values['user.agent'] = {gecko:0, gecko1_8:1, ie6:2, ie8:3, opera:4, safari:5};
  app.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  app.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'end'});
    maybeStartModule();
  }
  ;
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd_0.external && ($wnd_0.external.initModule && $wnd_0.external.initModule('app'))) {
      $wnd_0.location.reload();
      return;
    }
    initialHtml = 'hosted.html?app';
    strongName = '';
  }
  processMetas();
  $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'selectingPermutation'});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers(['BackCompat', 'force', 'gecko'], '19623C11EA24DC61776ABDF65A94C04B');
      unflattenKeylistIntoAnswers(['BackCompat', 'no', 'gecko'], '19623C11EA24DC61776ABDF65A94C04B');
      unflattenKeylistIntoAnswers(['BackCompat', 'yes', 'gecko'], '19623C11EA24DC61776ABDF65A94C04B');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'force', 'safari'], '2D661A304A370413FAC70B3F16E2EC68');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'no', 'safari'], '2D661A304A370413FAC70B3F16E2EC68');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'yes', 'safari'], '2D661A304A370413FAC70B3F16E2EC68');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'force', 'ie8'], '34E1A808126C04A7D4E436BAFDCE9261');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'no', 'ie8'], '34E1A808126C04A7D4E436BAFDCE9261');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'yes', 'ie8'], '34E1A808126C04A7D4E436BAFDCE9261');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'force', 'opera'], '359CB8A3A1AFD82E2D6D891BF6BC8487');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'no', 'opera'], '359CB8A3A1AFD82E2D6D891BF6BC8487');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'yes', 'opera'], '359CB8A3A1AFD82E2D6D891BF6BC8487');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'force', 'gecko1_8'], '4A73D503DDA27689EC8B0914DA11B230');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'no', 'gecko1_8'], '4A73D503DDA27689EC8B0914DA11B230');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'yes', 'gecko1_8'], '4A73D503DDA27689EC8B0914DA11B230');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'force', 'ie6'], '7013FA4C78F0C6AAD873C06F9C6B8889');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'no', 'ie6'], '7013FA4C78F0C6AAD873C06F9C6B8889');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'yes', 'ie6'], '7013FA4C78F0C6AAD873C06F9C6B8889');
      unflattenKeylistIntoAnswers(['BackCompat', 'force', 'safari'], '7E39F7C4B7DFBD5404E7BA8DFAFCFE90');
      unflattenKeylistIntoAnswers(['BackCompat', 'no', 'safari'], '7E39F7C4B7DFBD5404E7BA8DFAFCFE90');
      unflattenKeylistIntoAnswers(['BackCompat', 'yes', 'safari'], '7E39F7C4B7DFBD5404E7BA8DFAFCFE90');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'force', 'gecko'], '92F744AFC3B23A2E1D2636A78AAE1D7B');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'no', 'gecko'], '92F744AFC3B23A2E1D2636A78AAE1D7B');
      unflattenKeylistIntoAnswers(['CSS1Compat', 'yes', 'gecko'], '92F744AFC3B23A2E1D2636A78AAE1D7B');
      unflattenKeylistIntoAnswers(['BackCompat', 'force', 'gecko1_8'], '9F287430A9885DB5F3430C05241EC8D2');
      unflattenKeylistIntoAnswers(['BackCompat', 'no', 'gecko1_8'], '9F287430A9885DB5F3430C05241EC8D2');
      unflattenKeylistIntoAnswers(['BackCompat', 'yes', 'gecko1_8'], '9F287430A9885DB5F3430C05241EC8D2');
      unflattenKeylistIntoAnswers(['BackCompat', 'force', 'ie6'], 'A747DD70041349378FC0D6D67897E8A3');
      unflattenKeylistIntoAnswers(['BackCompat', 'no', 'ie6'], 'A747DD70041349378FC0D6D67897E8A3');
      unflattenKeylistIntoAnswers(['BackCompat', 'yes', 'ie6'], 'A747DD70041349378FC0D6D67897E8A3');
      unflattenKeylistIntoAnswers(['BackCompat', 'force', 'ie8'], 'BAA21DCE4597BCE542E2D543CCB838EE');
      unflattenKeylistIntoAnswers(['BackCompat', 'no', 'ie8'], 'BAA21DCE4597BCE542E2D543CCB838EE');
      unflattenKeylistIntoAnswers(['BackCompat', 'yes', 'ie8'], 'BAA21DCE4597BCE542E2D543CCB838EE');
      unflattenKeylistIntoAnswers(['BackCompat', 'force', 'opera'], 'BB8320B8B7475E5C9C0B32C15E9BD5B1');
      unflattenKeylistIntoAnswers(['BackCompat', 'no', 'opera'], 'BB8320B8B7475E5C9C0B32C15E9BD5B1');
      unflattenKeylistIntoAnswers(['BackCompat', 'yes', 'opera'], 'BB8320B8B7475E5C9C0B32C15E9BD5B1');
      strongName = answers[computePropValue('compat.mode')][computePropValue('hasflash')][computePropValue('user.agent')];
      initialHtml = strongName + '.cache.html';
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      if (!__gwt_stylesLoaded['theme/chrome/chrome.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['theme/chrome/chrome.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'theme/chrome/chrome.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['widgets-default.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['widgets-default.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'widgets-default.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['gwt/chrome/chrome.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['gwt/chrome/chrome.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'gwt/chrome/chrome.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['gwt/chrome/mosaic.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['gwt/chrome/mosaic.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'gwt/chrome/mosaic.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['workspace.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['workspace.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'workspace.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['monitor.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['monitor.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'monitor.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['console.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['console.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'console.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'end'});
  $stats && $stats({moduleName:'app', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'begin'});
  if (!__gwt_scriptsLoaded['js/pagebus.js']) {
    __gwt_scriptsLoaded['js/pagebus.js'] = true;
    document.write('<script language="javascript" src="' + base + 'js/pagebus.js"><\/script>');
  }
  $doc_0.write('<script defer="defer">app.onInjectionDone(\'app\')<\/script>');
}

app();
