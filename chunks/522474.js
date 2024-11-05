n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(519149), n(411104);
var r,
    i = n(512722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(616254),
    u = n(442837),
    c = n(570140),
    d = n(710845),
    f = n(358085),
    _ = n(998502),
    h = n(228488),
    p = n(248977),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = {},
    v = {},
    I = {},
    S = {},
    T = {},
    b = new Set(),
    y = () => x.emitChange(),
    A = o().debounce(y, 150);
function N(e) {
    let t = I[e];
    null != t &&
        !t.closed &&
        (E[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!f.isPlatformEmbedded && v[e]
        });
}
function C(e, t, r) {
    let i = e.document,
        s = new URL(t).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : '';
    if (s !== o && s !== l) {
        new d.Z('PopoutWindowStore').warn('Not injecting stylesheet, unrecognized origin', s);
        return;
    }
    let u = i.createElement('link');
    (u.href = t), (u.rel = 'stylesheet'), (u.integrity = r), a()(null != i.head, 'Document head was null'), i.head.appendChild(u);
}
function R(e) {
    let t = I[e];
    null != t &&
        (!t.closed && N(e),
        t.close(),
        !(function (e) {
            let t = I[e];
            a()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', y), t.removeEventListener('blur', y), t.removeEventListener('resize', A);
            let n = S[e];
            a()(null != n, 'Window root was null while unmounting'), n.unmount(), delete I[e], delete v[e], delete T[e], delete S[e];
        })(e),
        x.emitChange());
}
function O(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case m.l9w.LOADED:
                var r;
                return (
                    (r = n.key),
                    void (
                        b.has(r) &&
                        (!(function (e) {
                            let t = I[e],
                                n = T[e];
                            if (null == t) {
                                new d.Z('PopoutWindowStore').warn('Failed to open window', e);
                                return;
                            }
                            let r = t.document;
                            (0, h.uF)(r, y),
                                t.addEventListener('focus', y),
                                t.addEventListener('blur', y),
                                t.addEventListener('resize', A),
                                !(function (e, t) {
                                    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) C(t, e.href, e.integrity);
                                })(0, t);
                            let i = (0, l.createRoot)(r.getElementById('app-mount'));
                            a()(null != i, 'No render target for popout!'), (S[e] = i), i.render(n(e));
                        })(r),
                        b.delete(r),
                        x.emitChange())
                    )
                );
            case m.l9w.UNLOADED:
                return R(n.key);
        }
}
function D() {
    for (let e of Object.keys(I)) {
        let t = I[e];
        null != t && t.close();
    }
}
class L extends (r = u.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', O), window.addEventListener('beforeunload', D), (E = null != e ? e : {});
    }
    getWindow(e) {
        return I[e];
    }
    getWindowState(e) {
        return E[e];
    }
    getWindowKeys() {
        return Object.keys(I);
    }
    getWindowOpen(e) {
        let t = I[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!v[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = I[e];
        return null !== (n = null == r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n;
    }
    getWindowVisible(e) {
        var t;
        let n = I[e];
        return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === 'visible';
    }
    getState() {
        return E;
    }
    unmountWindow(e) {
        return R(e);
    }
}
g(L, 'displayName', 'PopoutWindowStore'), g(L, 'persistKey', 'PopoutWindowStore');
let x = new L(c.Z, {
    POPOUT_WINDOW_OPEN: function (e) {
        let { key: t, features: n, render: r } = e;
        if (f.isPlatformEmbedded && !_.ZP.supportsFeature(m.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
        let i = I[t];
        if (null != i && !i.closed) return f.isPlatformEmbedded ? _.ZP.focus(t) : i.focus(), !1;
        let { defaultWidth: a, defaultHeight: s, defaultAlwaysOnTop: o = !1, ...l } = n,
            u = l,
            c = o,
            d = E[t];
        if (null != d) {
            let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = d;
            (c = null != i ? i : o),
                (u = {
                    width: null != e && 0 !== e ? e : a,
                    height: null != t && 0 !== t ? t : s,
                    left: n,
                    top: r,
                    ...u
                });
        }
        let h = window.open(m.Z5c.POPOUT_WINDOW, t, (0, p.Z)(u));
        (h.windowKey = t), null == h || h.focus(), (I[t] = h), (T[t] = r), f.isPlatformEmbedded && (_.ZP.setAlwaysOnTop(t, c), (v[t] = c), _.ZP.isAlwaysOnTop(t).then((e) => (v[t] = e))), b.add(t);
    },
    POPOUT_WINDOW_ADD_STYLESHEET: function (e) {
        let { url: t, integrity: n } = e;
        for (let e of Object.values(I)) null != e && !e.closed && C(e, t, n);
    },
    POPOUT_WINDOW_CLOSE: function (e) {
        let { key: t } = e,
            n = I[t];
        null != n && !n.closed && (N(t), n.close());
    },
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function (e) {
        let { key: t, alwaysOnTop: n } = e;
        f.isPlatformEmbedded && (_.ZP.setAlwaysOnTop(t, n), (v[t] = n), _.ZP.isAlwaysOnTop(t).then((e) => (v[t] = e)));
    },
    LOGOUT: D
});
t.Z = x;
