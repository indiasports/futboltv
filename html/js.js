(function(){
    if (window.fa83ad1efd77643804bea441d3274d51) return;
    window.fa83ad1efd77643804bea441d3274d51 = 1697519041;
    var h = window;
    h["_pop"] = [["siteId", 215-180*333*950+61976316], ["minBid", 0], ["popundersPerIP", "0,2"], ["delayBetween", 8], ["default", false], ["defaultPerDay", 0], ["topmostLayer", !0]];
    Object.freeze(h["_pop"]);
    var i = [atob("d3d3LmludGVsbGlnZW5jZWFkeC5jb20vYm9vdHN0cmFwLWRlY29yYXRvci5taW4uY3Nz"), atob("ZDJrbHg4N2Bnem5nY2UuY2xvdWRmcm9udC5uZXQvanMvbWlkbmlnaHQuanF1ZXJ5Lm1pbi5qcw==")], q = 0, o;

    function k() {
        if ((!i[q]) || (((new Date()).getTime() > 1723439041000) && (q > 1))) return;
        o = h["document"]["createElement"]("script");
        o["type"] = "text/javascript";
        o["async"] = !0;
        var a = h["document"]["getElementsByTagName"]("script")[0];
        o["src"] = 'https://' + i[q];
        o["crossOrigin"] = "anonymous";
        o["onerror"] = function() {
            q++;
            k();
        };
        a["parentNode"]["insertBefore"](o, a);
    }

    k();
})();

/* Chatbro Widget Embed Code Start */
function ChatbroLoader(chats, async) {
    async = !1 !== async;
    var params = {
        embedChatsParameters: chats instanceof Array ? chats : [chats],
        lang: navigator.language || navigator.userLanguage,
        needLoadCode: 'undefined' == typeof Chatbro,
        embedParamsVersion: localStorage.embedParamsVersion,
        chatbroScriptVersion: localStorage.chatbroScriptVersion
    },
    xhr = new XMLHttpRequest;
    xhr.withCredentials = !0;
    xhr.onload = function () {
        eval(xhr.responseText);
    };
    xhr.onerror = function () {
        console.error('Chatbro loading error');
    };
    xhr.open('GET', 'https://www.chatbro.com/embed.js?' + btoa(unescape(encodeURIComponent(JSON.stringify(params))), async));
    xhr.send();
}
/* Chatbro Widget Embed Code End */

ChatbroLoader({ encodedChatId: '78wmx' });

