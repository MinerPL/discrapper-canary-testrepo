var r = n(444675);
!function (e, t) {
    if (!e.setImmediate) {
        var n, i, a, o, s, l = 1, u = {}, c = !1, d = e.document;
        var _ = Object.getPrototypeOf && Object.getPrototypeOf(e);
        if (_ = _ && _.setTimeout ? _ : e, '[object process]' === {}.toString.call(e.process))
            s = function (e) {
                r.nextTick(function () {
                    f(e);
                });
            };
        else if (function () {
                if (e.postMessage && !e.importScripts) {
                    var t = !0, n = e.onmessage;
                    return e.onmessage = function () {
                        t = !1;
                    }, e.postMessage('', '*'), e.onmessage = n, t;
                }
            }()) {
            ;
            n = 'setImmediate$' + Math.random() + '$', i = function (t) {
                t.source === e && 'string' == typeof t.data && 0 === t.data.indexOf(n) && f(+t.data.slice(n.length));
            }, e.addEventListener ? e.addEventListener('message', i, !1) : e.attachEvent('onmessage', i), s = function (t) {
                e.postMessage(n + t, '*');
            };
        } else if (e.MessageChannel) {
            ;
            (a = new MessageChannel()).port1.onmessage = function (e) {
                f(e.data);
            }, s = function (e) {
                a.port2.postMessage(e);
            };
        } else if (d && 'onreadystatechange' in d.createElement('script')) {
            ;
            o = d.documentElement, s = function (e) {
                var t = d.createElement('script');
                t.onreadystatechange = function () {
                    f(e), t.onreadystatechange = null, o.removeChild(t), t = null;
                }, o.appendChild(t);
            };
        } else
            s = function (e) {
                setTimeout(f, 0, e);
            };
        _.setImmediate = function (e) {
            'function' != typeof e && (e = Function('' + e));
            for (var t = Array(arguments.length - 1), n = 0; n < t.length; n++)
                t[n] = arguments[n + 1];
            var r = {
                callback: e,
                args: t
            };
            return u[l] = r, s(l), l++;
        }, _.clearImmediate = E;
    }
    function E(e) {
        delete u[e];
    }
    function f(e) {
        if (c)
            setTimeout(f, 0, e);
        else {
            var n = u[e];
            if (n) {
                c = !0;
                try {
                    !function (e) {
                        var n = e.callback, r = e.args;
                        switch (r.length) {
                        case 0:
                            n();
                            break;
                        case 1:
                            n(r[0]);
                            break;
                        case 2:
                            n(r[0], r[1]);
                            break;
                        case 3:
                            n(r[0], r[1], r[2]);
                            break;
                        default:
                            n.apply(t, r);
                        }
                    }(n);
                } finally {
                    E(e), c = !1;
                }
            }
        }
    }
}('undefined' == typeof self ? void 0 === n.g ? this : n.g : self);
