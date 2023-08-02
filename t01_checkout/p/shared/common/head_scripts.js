function international_redirects() {
    // return; 
    if (localStorage.getItem('_admin_subs_debug') == 'yes') {
        return;
    }
    try {
        // CANADIAN TRAFFIC REDIRECT

        let locationapi = 'https://sc.youmaker.com/getcity';
        $.getJSON(locationapi, function (response) {
            console.log('Country data (detect)', response);
            if(response.hasOwnProperty('data') && response.data.hasOwnProperty('country')) {
                ga('send', 'event', 'DEBUG Subs Page Country Redirect',  response.data.country, response.data.city);
            }
    
            if(response.hasOwnProperty('data') && response.data.hasOwnProperty('country') && response.data.country == 'CA') {
                ga('send', 'event', 'Subs Page Country Redirect', 'CA');
                if (window.location.href.indexOf("page=gift") > -1) {
                    window.location.href = "https://offers.theepochtimes.com/gift-canada?utm_source=et_website";
                } else {
                    window.location.href = 'https://readepoch.ca/et_website';
                }    
            } else if(response.hasOwnProperty('data') && response.data.hasOwnProperty('country') && response.data.country == 'AU') {
                ga('send', 'event', 'Subs Page Country Redirect', 'AU');
                window.location.href = 'https://subscribe.theepochtimes.com/p/?page=au-digitalsub';
            } else if (response.hasOwnProperty('data') && response.data.hasOwnProperty('country') && (response.data.country == 'GB' || response.data.country == 'IE')) {
                ga('send', 'event', 'Subs Page Country Redirect', 'GB');
                window.location.href = 'https://subscribe.epochtimes.uk';
            } else if (response.hasOwnProperty('data') && response.data.hasOwnProperty('timezone') && response.data.timezone.includes('Europe')) {
                ga('send', 'event', 'Subs Page Country Redirect', 'EU');
                window.location.href = 'https://subscribe.epochtimes.eu';
            }

        })
    } catch (e) {
        console.log(e);
    }
}

function _admin_subs_debug_on() {
    alert('DEBUG ON');
    localStorage.setItem('_admin_subs_debug', 'yes');
}
function _admin_subs_debug_off() {
    alert('DEBUG OFF');
    localStorage.removeItem('_admin_subs_debug');
}

// timeago https://timeago.org/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).timeago={})}(this,function(e){"use strict";var r=["second","minute","hour","day","week","month","year"];var a=["秒","分钟","小时","天","周","个月","年"];function t(e,t){n[e]=t}function i(e){return n[e]||n.en_US}var n={},f=[60,60,24,7,365/7/12,12];function o(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function d(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=f[a]&&a<f.length;a++)e/=f[a];return(0===(a*=2)?9:1)<(e=Math.floor(e))&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}function l(e,t){return((t?o(t):new Date)-o(e))/1e3}var s="timeago-id";function h(e){return parseInt(e.getAttribute(s))}var p={},v=function(e){clearTimeout(e),delete p[e]};function m(e,t,n,r){v(h(e));var a=r.relativeDate,i=r.minInterval,o=l(t,a);e.innerText=d(o,n);var u,c=setTimeout(function(){m(e,t,n,r)},Math.min(1e3*Math.max(function(e){for(var t=1,n=0,r=Math.abs(e);e>=f[n]&&n<f.length;n++)e/=f[n],t*=f[n];return r=(r%=t)?t-r:t,Math.ceil(r)}(o),i||1),2147483647));p[c]=0,u=c,e.setAttribute(s,u)}t("en_US",function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return 1<e&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]}),t("zh_CN",function(e,t){if(0===t)return["刚刚","片刻后"];var n=a[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}),e.cancel=function(e){e?v(h(e)):Object.keys(p).forEach(v)},e.format=function(e,t,n){return d(l(e,n&&n.relativeDate),i(t))},e.register=t,e.render=function(e,t,n){var r=e.length?e:[e];return r.forEach(function(e){m(e,e.getAttribute("datetime"),i(t),n||{})}),r},Object.defineProperty(e,"__esModule",{value:!0})});


// mobile check
window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    
    console.log((check) ? 'mobile device' : 'desktop device');
    return check;
};

if(window.location.href.includes('debug-on')) {
    _admin_subs_debug_on();
}
if(window.location.href.includes('debug-off')) {
    _admin_subs_debug_off();
}