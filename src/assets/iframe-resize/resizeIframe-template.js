function portaInterno() {
  console.log('>>>>> portal sistemas');
  var
  myID	= '',
  target	= null,
  height	= 0,
  width	= 0,
  base	= 10,
  logging = false,
  msgID	= '[iFrameSizer]',  //Must match host page msg ID
  firstRun = true;
  msgIdLen= msgID.length;

	try{

		function addEventListener(e,func){
			if (window.addEventListener){
				window.addEventListener(e,func, false);
			} else if (window.attachEvent){
				window.attachEvent('on'+e,func);
			}
		}

		function formatLogMsg(msg){
			return msgID + '[' + myID + ']' + ' ' + msg;
		}

		function log(msg){
			if (logging && window.console){
				console.log(formatLogMsg(msg));
			}
		}

		function warn(msg){
			if (window.console){
				console.warn(formatLogMsg(msg));
			}
		}

		function receiver(event) {
			function init(){
				function strBool(str){
					return 'true' === str ? true : false;
				}

				function setMargin(){
					document.body.style.margin = bodyMargin+'px';
					log('Body margin set to '+bodyMargin+'px');
				}

				function intiWindowListener(){
					addEventListener('resize', function(){
						sendSize('Window resized');
					});
				}

				function initInterval(){
					if ( 0 !== interval ){
						log('setInterval: '+interval);
						setInterval(function(){
							sendSize('setInterval');
						},interval);
					}
				}

				var data = event.data.substr(msgIdLen).split(':');

				myID           = data[0];
				bodyMargin     = parseInt(data[1],base);
				doWidth        = strBool(data[2]);
				logging        = strBool(data[3]);
				interval       = parseInt(data[4],base);
				publicMethods  = strBool(data[5]);
				target         = event.source;
				
				log('Initialising iframe');

				setMargin();
				intiWindowListener();
				initInterval();

				if (publicMethods){
					setupPublicMethods();
				}
			}

			function getOffset(dimension){
				return parseInt(document.body['offset'+dimension],base);
			}

			function sendSize(calleeMsg){

				var
					currentHeight = getOffset('Height') + 2*bodyMargin,
					currentWidth  = getOffset('Width')  + 2*bodyMargin,
					msg;

				if ((height !== currentHeight) || (doWidth && (width !== currentWidth))){
					height = currentHeight;
					width = currentWidth;
					log( 'Trigger event: ' + calleeMsg );

					msg = myID + ':' + height + ':' + width;
					target.postMessage( msgID + msg, '*' );
					log( 'Sending msg to host page (' + msg + ')' );
				}
			}

			function setupPublicMethods(){
				log( 'Enabling public methods' );
				window.iFrameSizer={
					trigger: function(){
						sendSize('window.iFrameSizer.trigger()');
					}
				};
			}


			var bodyMargin,doWidth;

			if (msgID === event.data.substr(0,msgIdLen) && firstRun){ //Check msg ID
				firstRun = false;
				init();
				sendSize('Init message from host page');
			}
		}

		addEventListener('message', receiver);
	}
	catch(e){
		warn(e);
	}
}

function portaExterno(currentWindow, parentWindow) {  
  console.log('>>>>> portal parceiros');
  var _interval = 1000;
  var _iframeElement = null;
  var _timeout = null;

  function removeHeightProperties(element) {

    element.removeAttribute('height');
    element.style.removeProperty('height');

    let prcHeigth = (parent.innerWidth / parent.innerHeight) * 100;
    element.style.height = prcHeigth+"%";
  }

  function validarWindow() {
    if (!currentWindow.name)
      throw new Error('Iframe parent não possui parametros suficifientes para monitorar resize');

    if (currentWindow == parentWindow) {
      throw new Error('Documento não está inserido em um iframe');
    }
  }

  function init() {
    try {
      validarWindow();

      _iframeElement = parentWindow.document.querySelector('iframe[name=' + currentWindow.name + ']');

      if (!_iframeElement)
      throw new Error('Iframe não encontrado para resize');

      removeHeightProperties(_iframeElement);

      _timeout = setInterval(function () {
        resizeParent()
      }, _interval);

    } catch (e) {
      console.error(e);
    }
  }

  init();

  var resizeParent = function () {
    var ajuste = parent.innerHeight * 0.1;
    if(_iframeElement.height < document.body.scrollHeight) {
      removeHeightProperties(_iframeElement);
      _iframeElement.height = Math.ceil(document.body.scrollHeight + ajuste);
    }
  }

  this.setInterval = function (interval) {
    if(interval <= 0)
      throw new Error('intervalo deve ser maior que 0');

    console.log('novo intervalo', interval);
    _interval = interval;
    if(_timeout) {
      removeHeightProperties(_iframeElement);
      clearInterval(_timeout);
      _timeout = setInterval(function(){resizeParent()}, _interval);
    }
  }
}

var IframeResizer = function (currentWindow, parentWindow) {
  let portal = window.location.origin.replace(/(^\w+:|^)\/\//, '').substring(0,15);
  console.log('tipo_portal: ', portal);
  if(portal != 'localhost:4200'){
    if(portal == 'portalparceiros'){
      portaExterno(currentWindow, parentWindow);
      return;
    }else {
      portaInterno();
      return;
    }
  }
}

var iframeResizer = new IframeResizer(window, parent);