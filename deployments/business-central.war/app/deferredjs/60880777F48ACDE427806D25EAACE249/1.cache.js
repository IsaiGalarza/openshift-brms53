function getClass_132(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_132;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2_classLit;
}

function onLoad(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad;
  $location_0[stackIndex] = 'AsyncLoader1.java:' + '21' , loaded_0 = true;
  instance_2 = ($location_0[stackIndex] = 'AsyncLoader1.java:' + '5' , $clinit_256() , ($location_0[stackIndex] = 'AsyncLoader1.java:' + '22' , new AsyncLoader1));
  $location_0[stackIndex] = 'AsyncLoader1.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 1);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks1', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader1.java:' + '25' , instance_2.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks1', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_0(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_0;
  while (callbacksHead) {
    $location_0[stackIndex] = 'AsyncLoader1.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader1.java:' + '56' , next = callbacksHead;
    $location_0[stackIndex] = 'AsyncLoader1.java:' + '57' , callbacksHead = callbacksHead.next;
    !callbacksHead && ($location_0[stackIndex] = 'AsyncLoader1.java:' + '59' , callbacksTail = null);
    if (!handler) {
      $location_0[stackIndex] = 'AsyncLoader1.java:' + '62' , $onSuccess(next.callback);
    }
     else {
      try {
        $location_0[stackIndex] = 'AsyncLoader1.java:' + '65' , $onSuccess(next.callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader1.java:' + '66' , caught_0($e0));
        $stackDepth_0 = stackIndex;
        if (instanceOf($e0, 12)) {
          e = $e0;
          $location_0[stackIndex] = 'LogImplBase.java:' + '295' , $clinit_25();
          $location_0[stackIndex] = 'Log.java:' + '285' , $fatal(impl, 'Uncaught Exception:', e);
        }
         else 
          throw $e0;
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader1(){
}

_ = AsyncLoader1.prototype = new AsyncLoader1__Super;
_.getClass$ = getClass_132;
_.runCallbacks = runCallbacks_0;
_.typeId$ = 0;
function $onSuccess(this$static){
  var index, roleString, roles, s, s$iterator, t, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSuccess;
  $location_0[stackIndex] = 'LoginView.java:' + '145' , roles = this$static.this$3.this$2.this$1.this$0.auth.rolesAssigned;
  roleString = $StringBuilder(($location_0[stackIndex] = 'LoginView.java:' + '146' , new StringBuilder));
  $location_0[stackIndex] = 'LoginView.java:' + '147' , index = 1;
  for ($location_0[stackIndex] = 'LoginView.java:' + '148' , s$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), roles); s$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , s$iterator.this$0.size_1());) {
    s = dynamicCast(($location_0[stackIndex] = 'LoginView.java:' + '148' , $next_6(s$iterator)), 1);
    $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , roleString.impl.string += s;
    index < roles.size_0 && (roleString.impl.string += ',' , undefined);
    $location_0[stackIndex] = 'LoginView.java:' + '153' , ++index;
  }
  $location_0[stackIndex] = 'SecurityService.java:' + '192' , dynamicCast(($location_0[stackIndex] = 'LoginView.java:' + '161' , get_16(Lorg_jboss_errai_bus_client_security_SecurityService_2_classLit)), 225).deferredNotification = false;
  $location_0[stackIndex] = 'AbstractMessageBuilder.java:' + '59' , $sendNowWith($with_0(($location_0[stackIndex] = 'LoginView.java:' + '163' , $with_0(($location_0[stackIndex] = 'LoginView.java:' + '163' , $toSubject_0($start(($location_0[stackIndex] = 'MessageBuilder.java:' + '40' , $AbstractMessageBuilder(($location_0[stackIndex] = 'MessageBuilder.java:' + '40' , new AbstractMessageBuilder), $JSONMessage(($location_0[stackIndex] = 'JSONMessage.java:' + '105' , new JSONMessage))))), 'AuthorizationListener')), ($location_0[stackIndex] = 'SecurityParts.java:' + '26' , $clinit_1151() , Name), this$static.this$3.this$2.this$1.this$0.auth.username)), Roles, roleString.impl.string).val$sendable.this$0.message_0, ($location_0[stackIndex] = 'LoginView.java:' + '169' , $clinit_1086() , ($location_0[stackIndex] = 'ErraiBus.java:' + '30' , $clinit_1086()) , bus_0));
  t = ($location_0[stackIndex] = 'LoginView.java:' + '172' , $clinit_899() , ($location_0[stackIndex] = 'Timer.java:' + '36' , $clinit_44()) , ($location_0[stackIndex] = 'LoginView.java:' + '172' , new LoginView$1$1$1$1$1));
  $location_0[stackIndex] = 'LoginView.java:' + '189' , $schedule(t, 2000);
  $stackDepth_0 = stackIndex - 1;
}

function $clinit_899(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_899;
  $location_0[stackIndex] = 'LoginView.java:' + '172' , $clinit_899 = nullMethod;
  $clinit_44();
  $stackDepth_0 = stackIndex - 1;
}

function getClass_605(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_605;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_LoginView$1$1$1$1$1_2_classLit;
}

function run_16(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_16;
  $location_0[stackIndex] = 'LoginView.java:' + '177' , addCommand(($location_0[stackIndex] = 'LoginView.java:' + '178' , new LoginView$1$1$1$1$1$1));
  $stackDepth_0 = stackIndex - 1;
}

function LoginView$1$1$1$1$1(){
}

_ = LoginView$1$1$1$1$1.prototype = new Timer;
_.getClass$ = getClass_605;
_.run = run_16;
_.typeId$ = 390;
function execute_31(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_31;
  $location_0[stackIndex] = 'Style.java:' + '1449' , ($location_0[stackIndex] = 'Document.java:' + '1212' , $doc.getElementById('ui_loading')).style['visibility'] = 'hidden';
  $location_0[stackIndex] = 'Style.java:' + '1449' , ($location_0[stackIndex] = 'Document.java:' + '1212' , $doc.getElementById('splash')).style['visibility'] = 'hidden';
  $stackDepth_0 = stackIndex - 1;
}

function getClass_606(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_606;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_LoginView$1$1$1$1$1$1_2_classLit;
}

function LoginView$1$1$1$1$1$1(){
}

_ = LoginView$1$1$1$1$1$1.prototype = new Object_0;
_.execute = execute_31;
_.getClass$ = getClass_606;
_.typeId$ = 391;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader1'), Lorg_jboss_bpm_console_client_LoginView$1$1$1$1$1_2_classLit = createForClass('org.jboss.bpm.console.client.', 'LoginView$1$1$1$1$1'), Lorg_jboss_bpm_console_client_LoginView$1$1$1$1$1$1_2_classLit = createForClass('org.jboss.bpm.console.client.', 'LoginView$1$1$1$1$1$1');
onLoad();
