n.d(t, {
    $s: function () {
        return T;
    },
    DE: function () {
        return N;
    },
    Gw: function () {
        return d;
    },
    JQ: function () {
        return I;
    },
    Jw: function () {
        return S;
    },
    Mr: function () {
        return p;
    },
    Vn: function () {
        return _;
    },
    ZD: function () {
        return f;
    },
    f9: function () {
        return g;
    },
    h7: function () {
        return h;
    },
    nf: function () {
        return v;
    },
    o: function () {
        return m;
    },
    pT: function () {
        return A;
    },
    s9: function () {
        return E;
    }
}), n(411104), n(47120), n(571269), n(298267);
var r = n(97613), i = n.n(r), a = n(652874), o = n(40851), s = n(602091), l = n(981631);
let u = n(338305).Z, c = [
        s.z1,
        s.u1
    ];
function d() {
    let e = (0, o.GB)();
    return null != e ? _(e) : s.z1;
}
function _(e) {
    return e === l.IlC.POPOUT ? s.u1 : s.z1;
}
let E = (0, a.Z)(e => ({
    [s.z1]: [],
    [s.u1]: []
}));
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            contextKey: n = d(),
            ...r
        } = t, a = null != t.modalKey ? t.modalKey : i()(), o = !1, s = setTimeout(() => {
            o = !0, h(u, {
                ...r,
                modalKey: a
            }, n);
        }, 300), l = await e();
    return clearTimeout(s), o ? v(a, n) && m(a, l, r.onCloseRequest, r.onCloseCallback, n) : h(l, {
        ...r,
        modalKey: a
    }, n), a;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}), n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d(), {
            modalKey: r,
            instant: a,
            Layer: o,
            onCloseRequest: s,
            onCloseCallback: l,
            backdropStyle: u
        } = t, c = null != r ? r : i()();
    return E.setState(t => {
        let r = t[n];
        return void 0 !== r && r.some(e => {
            let {key: t} = e;
            return t === c;
        }) ? t : {
            ...t,
            [n]: [
                ...r,
                {
                    key: c,
                    Layer: o,
                    render: e,
                    onCloseRequest: null != s ? s : () => p(c, n),
                    onCloseCallback: l,
                    instant: a,
                    backdropStyle: u
                }
            ]
        };
    }), c;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(), n = E.getState()[t], r = null != n ? n.find(t => {
            let {key: n} = t;
            return n === e;
        }) : null;
    E.setState(n => void 0 === n[t] ? n : {
        ...n,
        [t]: n[t].filter(t => {
            let {key: n} = t;
            return n !== e;
        })
    }), null != r && null != r.onCloseCallback && r.onCloseCallback();
}
function m(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d();
    E.setState(a => void 0 === a[i] ? a : {
        ...a,
        [i]: a[i].map(a => a.key === e ? {
            ...a,
            render: t,
            onCloseRequest: null == n ? () => p(e, i) : n,
            onCloseCallback: r
        } : a)
    });
}
function I(e) {
    for (let t of c) {
        let n = e[t];
        if (null != n && n.length > 0)
            return !0;
    }
    return !1;
}
function T() {
    return I(E.getState());
}
function g() {
    return I(E());
}
function S(e) {
    var t, n;
    let {
        default: r,
        popout: i
    } = E();
    return i.length > 0 ? (null === (t = i.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = r.at(-1)) || void 0 === n ? void 0 : n.key) === e;
}
function A() {
    let e = E.getState();
    for (let t in e)
        for (let n of e[t])
            p(n.key, t);
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.z1, r = e[n];
    return null != r && r.some(e => e.key === t);
}
function v(e, t) {
    return N(E.getState(), e, t);
}
