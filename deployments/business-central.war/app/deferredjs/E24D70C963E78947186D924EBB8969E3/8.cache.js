function getClass_156(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_156;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader8_1_1Super_2_classLit;
}

function runCallbacks_13(){
}

function AsyncLoader8__Super(){
}

_ = AsyncLoader8__Super.prototype = new Object_0;
_.getClass$ = getClass_156;
_.runCallbacks = runCallbacks_13;
_.typeId$ = 0;
function $clinit_287(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_287;
  $location_0[stackIndex] = 'AsyncLoader8.java:' + '5' , $clinit_287 = nullMethod;
  instance_9 = ($location_0[stackIndex] = 'AsyncLoader8.java:' + '11' , new AsyncLoader8__Super);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_157(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_157;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader8_2_classLit;
}

function onLoad_6(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_6;
  instance_9 = ($location_0[stackIndex] = 'AsyncLoader8.java:' + '5' , $clinit_287() , ($location_0[stackIndex] = 'AsyncLoader8.java:' + '22' , new AsyncLoader8));
  $location_0[stackIndex] = 'AsyncLoader8.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 8);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks8', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader8.java:' + '25' , instance_9.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks8', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_14(){
}

function AsyncLoader8(){
}

_ = AsyncLoader8.prototype = new AsyncLoader8__Super;
_.getClass$ = getClass_157;
_.runCallbacks = runCallbacks_14;
_.typeId$ = 0;
var instance_9;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader8_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader8__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader8_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader8');
onLoad_6();
