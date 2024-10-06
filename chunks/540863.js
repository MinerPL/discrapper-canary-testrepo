n.d(t, {
    x: function () {
        return l;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(15127),
    s = n(512983),
    o = n(958920);
let l = i.forwardRef(function (e, t) {
    var n, l;
    let { children: u, disabled: c = !1, className: d, titleClassName: _, tag: E = 'h5', required: f = !1, style: h, title: p, error: I, ...m } = e,
        T = i.useId(),
        S = i.useId(),
        g = null !== (n = m.titleId) && void 0 !== n ? n : T,
        A = null != I ? (null !== (l = m.errorId) && void 0 !== l ? l : S) : void 0,
        [N, O] = i.useState(void 0),
        [R, v] = i.useState(void 0),
        C = void 0 !== R;
    return (0, r.jsx)('div', {
        ref: t,
        className: null != d ? d : void 0,
        style: null != h ? h : void 0,
        children: (0, r.jsx)(a.ol, {
            titleId: g,
            errorId: A,
            error: null != I ? I : void 0,
            isFocused: N,
            setIsFocused: O,
            hasValue: R,
            setHasValue: v,
            children: (0, r.jsxs)('div', {
                className: C ? o.fieldWrapper : void 0,
                children: [
                    null != p || null != I
                        ? (0, r.jsx)(s.v, {
                              tag: E,
                              disabled: c,
                              required: f,
                              error: I,
                              className: _,
                              id: g,
                              errorId: A,
                              ...m,
                              children: p
                          })
                        : null,
                    u
                ]
            })
        })
    });
});
