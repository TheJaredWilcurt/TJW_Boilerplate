







/////////////////////////////////////////////////////////////////
//                                                             //
//                      CONSOLE ERROR FIX                      //
//                                                             //
/////////////////////////////////////////////////////////////////

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());








/////////////////////////////////////////////////////////////////
//                                                             //
//                 CSS CROSS-BROWSER SELECTOR                  //
//                                                             //
/////////////////////////////////////////////////////////////////
// Adds the OS, browser, and rendering engine to the the HTML  //
// tag as a class, allowing you to easily target specific      //
// browsers with CSS when they have unique rendering issues.   //
// See: _crossbrowser.scss                                     //
/////////////////////////////////////////////////////////////////

// CSS Browser Selector 0.6.1
// Originally written by Rafael Lima (http://rafael.adm.br)
// http://rafael.adm.br/css_browser_selector
// License: http://creativecommons.org/licenses/by/2.5/
//
// Co-maintained by:
// https://github.com/verbatim/css_browser_selector

showLog=true;
function log(m) {if ( window.console && showLog ) {console.log(m); }  }

function css_browser_selector(u)
    {
    var uaInfo = {},
        screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
        allScreens = screens.length,
        ua=u.toLowerCase(),
        is=function(t) { return RegExp(t,"i").test(ua);  },
        version = function(p,n) 
            { 
            n=n.replace(".","_"); var i = n.indexOf('_'),  ver=""; 
            while (i>0) {ver += " "+ p+n.substring(0,i);i = n.indexOf('_', i+1);} 
            ver += " "+p+n; return ver; 
            },
        g='gecko',
        w='webkit',
        c='chrome',
        f='firefox',
        s='safari',
        o='opera',
        m='mobile',
        a='android',
        bb='blackberry',
        lang='lang_',
        dv='device_',
        html=document.documentElement,
        b=  [
        
            // browser
            (!(/opera|webtv/i.test(ua))&&/msie\s(\d+)/.test(ua))?('ie ie'+(/trident\/4\.0/.test(ua) ? '8' : RegExp.$1))
            :is('firefox/')?g+ " " + f+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+f+RegExp.$2 + ' '+f+RegExp.$2+"_"+RegExp.$4:'')    
            :is('gecko/')?g
            :is('opera')?o+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+o+RegExp.$2 + ' '+o+RegExp.$2+"_"+RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua)?' '+o+RegExp.$2+" "+o+RegExp.$2+"_"+RegExp.$3:''))
            :is('konqueror')?'konqueror'
    
            :is('blackberry') ? 
                ( bb + 
                    ( /Version\/(\d+)(\.(\d+)+)/i.test(ua)
                        ? " " + bb+ RegExp.$1 + " "+bb+ RegExp.$1+RegExp.$2.replace('.','_')
                        : (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) 
                            ? ' ' +bb+RegExp.$2 + (RegExp.$3?' ' +bb+RegExp.$2+RegExp.$3:'')
                            : '')
                    )
                ) // blackberry
    
            :is('android') ? 
                (  a +
                    ( /Version\/(\d+)(\.(\d+))+/i.test(ua)
                        ? " " + a+ RegExp.$1 + " "+a+ RegExp.$1+RegExp.$2.replace('.','_')
                        : '')
                    + (/Android (.+); (.+) Build/i.test(ua)
                        ? ' '+dv+( (RegExp.$2).replace(/ /g,"_") ).replace(/-/g,"_")
                        :'' )
                ) //android
    
            :is('chrome')?w+   ' '+c+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+c+RegExp.$2 +((RegExp.$4>0) ? ' '+c+RegExp.$2+"_"+RegExp.$4:''):'')   
            
            :is('iron')?w+' iron'
            
            :is('applewebkit/') ? 
                ( w+ ' '+ s + 
                    ( /version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)
                        ?  ' '+ s +RegExp.$2 + " "+s+ RegExp.$2+RegExp.$3.replace('.','_')
                        :  ( / Safari\/(\d+)/i.test(ua) 
                            ? 
                            ( (RegExp.$1=="419" || RegExp.$1=="417" || RegExp.$1=="416" || RegExp.$1=="412" ) ? ' '+ s + '2_0' 
                                : RegExp.$1=="312" ? ' '+ s + '1_3'
                                : RegExp.$1=="125" ? ' '+ s + '1_2'
                                : RegExp.$1=="85" ? ' '+ s + '1_0'
                                : '' )
                            :'')
                        )
                ) //applewebkit 
        
            :is('mozilla/')?g
            :''
            
            // mobile
            ,is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?m:''
            
            // os/platform
            ,is('j2me')?'j2me'
            :is('ipad|ipod|iphone')?  
                ( 
                    (
                        /CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua)  ?
                        'ios' + version('ios',RegExp.$2) : ''
                    ) + ' ' + ( /(ip(ad|od|hone))/gi.test(ua) ? RegExp.$1 : "" )
                ) //'iphone'
            //:is('ipod')?'ipod'
            //:is('ipad')?'ipad'
            :is('playbook')?'playbook'
            :is('kindle|silk')?'kindle'
            :is('playbook')?'playbook'
            :is('mac')?'mac'+ (/mac os x ((\d+)[.|_](\d+))/.test(ua) ?    ( ' mac' + (RegExp.$2)  +  ' mac' + (RegExp.$1).replace('.',"_")  )     : '' )
            :is('win')?'win'+
                    (is('windows nt 6.2')?' win8'
                    :is('windows nt 6.1')?' win7'
                    :is('windows nt 6.0')?' vista'
                    :is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp' 
                    :is('windows nt 5.0')?' win_2k'
                    :is('windows nt 4.0') || is('WinNT4.0') ?' win_nt'
                    : ''
                    ) 
            :is('freebsd')?'freebsd'
            :(is('x11|linux'))?'linux'
            :''
            
            // user agent language
            ,(/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua))?(lang+RegExp.$2).replace("-","_")+(RegExp.$3!=''?(' '+lang+RegExp.$1).replace("-","_"):''):''
        
            // beta: test if running iPad app
            ,( is('ipad|iphone|ipod') && !is('safari') )  ?  'ipad_app'  : ''
        
        
        ]; // b

    function screenSize() 
        {
        var w = window.outerWidth || html.clientWidth;
        var h = window.outerHeight || html.clientHeight;
        uaInfo.orientation = ((w<h) ? "portrait" : "landscape");
        // remove previous min-width, max-width, client-width, client-height, and orientation
        html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "")
        for (var i=(allScreens-1);i>=0;i--) { if (w >= screens[i] ) { uaInfo.maxw = screens[i]; break; }}
        widthClasses="";
        for (var info in uaInfo) { widthClasses+=" "+info+"_"+ uaInfo[info]  };
        html.className =  ( html.className +widthClasses  );
        return widthClasses;
        } // screenSize
    
    window.onresize = screenSize;
    screenSize();   

    var cssbs = (b.join(' ')) + " js ";
    html.className =   ( cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g,"")  ).replace(/^ /, "").replace(/ +/g," ");

    return cssbs;
    }
    
css_browser_selector(navigator.userAgent);







/////////////////////////////////////////////////////////////////
//                                                             //
//                        FLYING FOCUS                         //
//                                                             //
/////////////////////////////////////////////////////////////////
// Animates a transition box from one element to another while //
// tabbing through the page. Especially useful when navigating //
// a form field, but also when tabbing from link to link.      //
// Code currently has limited browser support, check back in   //
// the future for newer versions to replace this section.      //
/////////////////////////////////////////////////////////////////
// All JS after this section is ignored in IE8 due to a bug.   //
// As such, this should be the last JS is this document.       //
/////////////////////////////////////////////////////////////////

// Source: http://n12v.com/focus-transition
// Source: http://github.com/NV/flying-focus
// Downloaded on: 10/24/2013

(function() {

if (document.getElementById('flying-focus')) return;

var flyingFocus = document.createElement('flying-focus'); // use uniq element name to decrease the chances of a conflict with website styles
flyingFocus.id = 'flying-focus';
document.body.appendChild(flyingFocus);

var DURATION = 100;
flyingFocus.style.transitionDuration = flyingFocus.style.WebkitTransitionDuration = DURATION / 1000 + 's';

function offsetOf(elem) {
    var rect = elem.getBoundingClientRect();
    var docElem = document.documentElement;
    var win = document.defaultView;
    var body = document.body;

    var clientTop  = docElem.clientTop  || body.clientTop  || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0,
        scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
        scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft,
        top  = rect.top  + scrollTop  - clientTop,
        left = rect.left + scrollLeft - clientLeft;

    return {top: top, left: left};
}

var movingId = 0;
var prevFocused = null;
var isFirstFocus = true;
var keyDownTime = 0;

document.documentElement.addEventListener('keydown', function(event) {
    var code = event.which;
    // Show animation only upon Tab or Arrow keys press.
    if (code === 9 || (code > 36 && code < 41)) {
        keyDownTime = now();
    }
}, false);

document.documentElement.addEventListener('focus', function(event) {
    var target = event.target;
    if (target.id === 'flying-focus') {
        return;
    }
    var offset = offsetOf(target);
    flyingFocus.style.left = offset.left + 'px';
    flyingFocus.style.top = offset.top + 'px';
    flyingFocus.style.width = target.offsetWidth + 'px';
    flyingFocus.style.height = target.offsetHeight + 'px';

    if (isFirstFocus) {
        isFirstFocus = false;
        return;
    }

    if (now() - keyDownTime > 42) {
        return;
    }

    onEnd();
    target.classList.add('flying-focus_target');
    flyingFocus.classList.add('flying-focus_visible');
    prevFocused = target;
    movingId = setTimeout(onEnd, DURATION);
}, true);

document.documentElement.addEventListener('blur', function() {
    onEnd();
}, true);


function onEnd() {
    if (!movingId) {
        return;
    }
    clearTimeout(movingId);
    movingId = 0;
    flyingFocus.classList.remove('flying-focus_visible');
    prevFocused.classList.remove('flying-focus_target');
    prevFocused = null;
}

function now() {
    return new Date().valueOf();
}

})();