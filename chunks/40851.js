n.d(t, {
    Aq: function () {
        return m;
    },
    GB: function () {
        return f;
    },
    J5: function () {
        return _;
    },
    UI: function () {
        return u;
    },
    Wu: function () {
        return h;
    },
    bp: function () {
        return p;
    },
    g0: function () {
        return E;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(585483),
    s = n(830917),
    o = n(919570),
    l = n(981631);
let u = new a.b(),
    c = i.createContext({
        appContext: l.IlC.APP,
        renderWindow: window,
        windowDispatch: u,
        windowId: (0, s.UU)()
    }),
    d = new Map();
function _(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let r = (0, s.ZY)(n);
    return null === (t = d.get(r)) || void 0 === t ? void 0 : t.windowDispatch;
}
function E(e) {
    return d.get(e);
}
function f() {
    let e = (function () {
        var e;
        let t = (0, o.GR)();
        return null == t ? null : null !== (e = d.get(t)) && void 0 !== e ? e : null;
    })();
    return null != e ? e.appContext : null;
}
function h(e) {
    let { appContext: t, renderWindow: n, children: i } = e,
        o = (function (e, t) {
            let n = (0, s.ZY)(t),
                r = d.get(n);
            return (
                null == r &&
                    ((r = {
                        appContext: e,
                        renderWindow: t,
                        windowDispatch: new a.b(),
                        windowId: n
                    }),
                    d.set(n, r),
                    t.addEventListener('unload', () => {
                        d.delete(n);
                    })),
                r
            );
        })(t, n);
    return (0, r.jsx)(c.Provider, {
        value: o,
        children: i
    });
}
function p() {
    return i.useContext(c).appContext;
}
function m() {
    return i.useContext(c).windowDispatch;
}
t.ZP = c;
