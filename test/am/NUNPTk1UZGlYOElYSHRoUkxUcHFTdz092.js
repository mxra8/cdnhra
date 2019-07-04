var hrasv_lib = (function() {
    'use strict';
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj, start) {
            var i = (start || 0),
                j = this.length;
            for (i; i < j; i = i + 1) {
                if (this[i] === obj) {
                    return i;
                }
            };
            return -1;
        };
    };
    return {
        cookie: {
            create_cookie: function(name, value, days) {
                var expires = '',
                    date;
                if (days && days !== 'session') {
                    date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = '; expires=' + date.toGMTString();
                };
                document.cookie = name + '=' + value + expires + '; path=/;';
            },
            read_cookie: function(name) {
                var i, c, nameEQ = name + '=',
                    ca = document.cookie.split(';');
                for (i = 0; i < ca.length; i += 1) {
                    c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1, c.length);
                    };
                    if (c.indexOf(nameEQ) === 0) {
                        return c.substring(nameEQ.length, c.length);
                    }
                };
                return null;
            },
            erase_cookie: function(name) {
                this.create_cookie(name, '', -1);
            }
        },
        add_event: function(target, type, handler) {
            if (target.addEventListener) {
                target.addEventListener(type, handler, false);
            } else {
                target.attachEvent('on' + type, function(event) {
                    return handler.call(target, event);
                });
            }
        },
        add_class: function(target, className) {
            document.getElementById(target).className += ' ' + className;
        },
        make_element: function(tag, properties, text) {
            var obj = document.createElement(tag),
                i;
            for (i in properties) {
                if (properties.hasOwnProperty(i)) {
                    if (properties[i]) {
                        obj.setAttribute(i, properties[i]);
                    }
                }
            };
            if (text) {
                obj.innerHTML = text;
            };
            return obj;
        },
        callCallBack: function(fx) {
            if (typeof window[fx] === 'function') {
                window[fx]();
            }
        }
    };
}());
var NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280 = NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280 || {};
NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.script = function(url) {
    var s = document.createElement('script');
    s.async = 1;
    s.type = 'text/javascript';
    s.src = url;
    var node = document.getElementsByTagName('head')[0];
    node.appendChild(s);
    return s;
};
NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.reset = function() {
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt = {};
};
NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt = {
    define: function() {
        var content = ['window.googletag = window.googletag || {};', 'googletag.cmd = googletag.cmd || [];', 'googletag.cmd.push(function() {', 'googletag.defineSlot("/21798689226/HRA_Article_LR", [336, 280], "div-gpt-ad-1558388607247-0").addService(googletag.pubads());', 'googletag.pubads().enableSingleRequest();', 'googletag.enableServices();', '});'];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = content.join(' ');
        return script;
    },
    matomo: function() {
        var content = ['window._paq = window._paq || [];', '_paq.push(["trackPageView"]);', '_paq.push(["enableLinkTracking"]);', '(function() {', 'var u="https://hrads.matomo.cloud/";', '_paq.push(["setTrackerUrl", u+"matomo.php"]);', '_paq.push(["setSiteId", "1"]);', 'var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];', 'g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"matomo.js"; s.parentNode.insertBefore(g,s);', '})();'];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = content.join(' ');
        console.log('Matomo HRA');
        return script;
    },
    display: function() {
        var content = ['googletag.cmd.push(function() {', 'googletag.display("div-gpt-ad-1558388607247-0")', '});'];
        var divP = document.createElement('div');
        divP.id = 'HRA_Article_LR';
        divP.style.width = '336px';
        divP.style.height = '280px';
        divP.style.position = 'relative';
        var a = document.createElement('a');
        a.href = 'https://highrevads.com';
        a.target = '_black';
        a.style.position = 'absolute';
        a.style.top = '0';
        a.style.right = '0';
        a.style.zIndex = '2';
        a.style.width = '100%';
        a.style.height = '25px';
        a.style.display = 'block';
        var img = document.createElement('img');
        var s = NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt.num();
        s = (s) ? 'blanco' : 'negro';
        img.src = 'https://cdn.highrevads.com/assets/images/hra-logo-' + s + '.png';
        img.style.width = '41px';
        img.style.height = '17px';
        img.style.position = 'absolute';
        img.style.zIndex = '2';
        img.style.top = '0';
        img.style.right = '0';
        img.id = 'imageLogo';
        a.appendChild(img);
        divP.appendChild(a);
        var div = document.createElement('div');
        div.id = 'div-gpt-ad-1558388607247-0';
        div.style.width = '336px';
        div.style.height = '280px';
        div.style.textAlign = 'center';
        div.style.position = 'relative';
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = content.join(' ');
        div.appendChild(script);
        divP.appendChild(div);
        return divP;
    },
    tag: function() {
        var useSSL = 'https:' == document.location.protocol;
        var url = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
        NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.script(url);
    },
    num: function() {
        var hrads = Math.round(Math.random() * 10000000000);
        return hrads % 2 === 0;
    },
    hbd: function(url) {
        var bd = document.createElement('script');
        bd.id = 'hbepl';
        bd.async = 1;
        bd.src = url;
        bd.dataset.isv = 'us.img.e-planning.net';
        bd.dataset.sv = 'ads.us.e-planning.net';
        bd.dataset.ci = '283f0';
        var node = document.getElementsByTagName('head')[0];
        node.appendChild(bd);
        console.log('HeaderBidding HRA');
        return bd;
    },
    aws: function() {
        ! function(a9, a, p, s, t, A, g) {
            if (a[a9]) return;

            function q(c, r) {
                a[a9]._Q.push([c, r])
            }
            a[a9] = {
                init: function() {
                    q('i', arguments)
                },
                fetchBids: function() {
                    q('f', arguments)
                },
                setDisplayBids: function() {},
                targetingKeys: function() {
                    return []
                },
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsByTagName(s)[0];
            g.parentNode.insertBefore(A, g)
        }('apstag', window, document, 'script', 'https://c.amazon-adsystem.com/aax2/apstag.js');
        apstag.init({
            pubID: 'e1506285-098d-4eac-8a37-858283a112f8',
            adServer: 'googletag'
        });
        apstag.fetchBids({
            slots: [{
                slotID: 'div-gpt-ad-1558388607247-0',
                slotName: '/21798689226/HRA_Article_LR',
                sizes: [
                    [336, 280]
                ]
            }],
            timeout: 2e3
        }, function(bids) {
            googletag.cmd.push(function() {
                apstag.setDisplayBids();
                googletag.pubads().refresh();
            });
        });
    },
    aws2: function() {
        var content = ["!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q('i',arguments)},fetchBids:function(){q('f',arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}('apstag',window,document,'script','https://c.amazon-adsystem.com/aax2/apstag.js');", "apstag.init({", "pubID: 'e1506285-098d-4eac-8a37-858283a112f8', ", "adServer: 'googletag'", "});", "apstag.fetchBids({", "slots: [{", "slotID: 'div-gpt-ad-1558388607247-0',", "slotName: '/21798689226/HRA_Article_LR',", "sizes: [[336, 280]]", "}],", "timeout: 2e3", "}, function(bids) {", "googletag.cmd.push(function(){", "apstag.setDisplayBids();", "googletag.pubads().refresh();", "});", "});"];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = content.join(' ');
        return script;
    }
};
try {
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt.hbd('https://i.e-planning.net/layers/hbdfp.js');
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt.tag();
    var NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR = document.getElementById('NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09');
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR = (NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR) ? NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR.parentNode : document.body;
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR.appendChild(NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt.define());
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR.appendChild(NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt.matomo());
    NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280HRA_Article_LR.appendChild(NUNPTk1UZGlYOElYSHRoUkxUcHFTdz09336x280.gpt.display());
} catch (e) {
    console.log(e);
};
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-135274236-2', 'auto');
ga('send', 'pageview', {
    'dimension1': 'https://www.am.com.mx/'
});
