n.d(t, {
    Ie: function () {
        return _;
    },
    JA: function () {
        return d;
    },
    OP: function () {
        return h;
    },
    SJ: function () {
        return m;
    },
    bG: function () {
        return I;
    },
    eg: function () {
        return f;
    },
    l2: function () {
        return p;
    },
    mh: function () {
        return E;
    },
    qB: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(25441),
    s = n(536895),
    o = n(260866);
let l = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: s.hy.VERTICAL,
        ref: i.createRef(),
        tabIndex: -1
    },
    u = i.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    c = i.createContext(l);
function d(e) {
    let [t, n] = i.useState(-1),
        { id: r, setFocus: s } = i.useContext(u),
        l = i.useCallback(() => s(e), [e, s]);
    return (
        i.useLayoutEffect(
            () =>
                (0, a.N)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r]
        ),
        {
            role: 'listitem',
            [o.ie]: (0, o.jb)(r, e),
            tabIndex: t,
            onFocus: l
        }
    );
}
function _(e) {
    return {
        ...d(e),
        role: 'treeitem'
    };
}
function E(e) {
    let { children: t, id: n } = e;
    return t(d(n));
}
function f() {
    return i.useContext(c).ref;
}
function h() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r } = i.useContext(c);
    return {
        role: 'list',
        tabIndex: r,
        [o.kn]: e,
        onKeyDown: t,
        ref: n
    };
}
function p(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: a
    } = e;
    return {
        role: 'list',
        onKeyDown: n,
        ref: r,
        [o.kn]: t,
        tabIndex: i
    };
}
function m(e) {
    let { children: t } = e;
    return t(h());
}
function I(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: o, ref: l, tabIndex: d },
            orientation: _
        } = n,
        E = i.useMemo(
            () => ({
                id: a,
                setFocus: s
            }),
            [a, s]
        ),
        f = i.useMemo(
            () => ({
                onKeyDown: o,
                orientation: _,
                ref: l,
                id: a,
                tabIndex: d
            }),
            [o, _, l, a, d]
        );
    return (0, r.jsxs)(c.Provider, {
        value: f,
        children: [
            (0, r.jsx)(u.Provider, {
                value: E,
                children: t
            }),
            ' '
        ]
    });
}
