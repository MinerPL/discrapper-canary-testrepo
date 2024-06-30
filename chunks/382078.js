r.d(e, {
    p: function () {
        return o;
    }
});
var n = r(442853), _ = r(432038), a = r(643487);
let i = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload'
];
class o {
    static __initStatic() {
        this.id = 'TryCatch';
    }
    __init() {
        this.name = o.id;
    }
    constructor(t) {
        o.prototype.__init.call(this), this._options = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t
        };
    }
    setupOnce() {
        this._options.setTimeout && (0, n.hl)(a.m9, 'setTimeout', E), this._options.setInterval && (0, n.hl)(a.m9, 'setInterval', E), this._options.requestAnimationFrame && (0, n.hl)(a.m9, 'requestAnimationFrame', s), this._options.XMLHttpRequest && 'XMLHttpRequest' in a.m9 && (0, n.hl)(XMLHttpRequest.prototype, 'send', c);
        let t = this._options.eventTarget;
        t && (Array.isArray(t) ? t : i).forEach(I);
    }
}
function E(t) {
    return function (...e) {
        let r = e[0];
        return e[0] = (0, a.re)(r, {
            mechanism: {
                data: { function: (0, _.$P)(t) },
                handled: !0,
                type: 'instrument'
            }
        }), t.apply(this, e);
    };
}
function s(t) {
    return function (e) {
        return t.apply(this, [(0, a.re)(e, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: (0, _.$P)(t)
                    },
                    handled: !0,
                    type: 'instrument'
                }
            })]);
    };
}
function c(t) {
    return function (...e) {
        let r = this;
        return [
            'onload',
            'onerror',
            'onprogress',
            'onreadystatechange'
        ].forEach(t => {
            t in r && 'function' == typeof r[t] && (0, n.hl)(r, t, function (e) {
                let r = {
                        mechanism: {
                            data: {
                                function: t,
                                handler: (0, _.$P)(e)
                            },
                            handled: !0,
                            type: 'instrument'
                        }
                    }, i = (0, n.HK)(e);
                return i && (r.mechanism.data.handler = (0, _.$P)(i)), (0, a.re)(e, r);
            });
        }), t.apply(this, e);
    };
}
function I(t) {
    let e = a.m9, r = e[t] && e[t].prototype;
    if (!!r && !!r.hasOwnProperty && !!r.hasOwnProperty('addEventListener'))
        (0, n.hl)(r, 'addEventListener', function (e) {
            return function (r, n, i) {
                try {
                    'function' == typeof n.handleEvent && (n.handleEvent = (0, a.re)(n.handleEvent, {
                        mechanism: {
                            data: {
                                function: 'handleEvent',
                                handler: (0, _.$P)(n),
                                target: t
                            },
                            handled: !0,
                            type: 'instrument'
                        }
                    }));
                } catch (t) {
                }
                return e.apply(this, [
                    r,
                    (0, a.re)(n, {
                        mechanism: {
                            data: {
                                function: 'addEventListener',
                                handler: (0, _.$P)(n),
                                target: t
                            },
                            handled: !0,
                            type: 'instrument'
                        }
                    }),
                    i
                ]);
            };
        }), (0, n.hl)(r, 'removeEventListener', function (t) {
            return function (e, r, n) {
                try {
                    let _ = r && r.__sentry_wrapped__;
                    _ && t.call(this, e, _, n);
                } catch (t) {
                }
                return t.call(this, e, r, n);
            };
        });
}
o.__initStatic();
