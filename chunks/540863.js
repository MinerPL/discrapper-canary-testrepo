n.d(t, {
    x: function () {
        return s;
    }
});
var r = n(735250), i = n(470079), a = n(15127), o = n(512983);
let s = i.forwardRef(function (e, t) {
    var n, s;
    let {
            children: l,
            disabled: u = !1,
            className: c,
            titleClassName: d,
            tag: _ = 'h5',
            required: E = !1,
            style: f,
            title: h,
            error: p,
            ...m
        } = e, I = i.useId(), T = i.useId(), g = null !== (n = m.titleId) && void 0 !== n ? n : I, S = null != p ? null !== (s = m.errorId) && void 0 !== s ? s : T : void 0;
    return (0, r.jsxs)('div', {
        ref: t,
        className: null != c ? c : void 0,
        style: null != f ? f : void 0,
        children: [
            null != h || null != p ? (0, r.jsx)(o.v, {
                tag: _,
                disabled: u,
                required: E,
                error: p,
                className: d,
                id: g,
                errorId: S,
                ...m,
                children: h
            }) : null,
            (0, r.jsx)(a.ol, {
                titleId: g,
                errorId: S,
                error: null != p ? p : void 0,
                children: l
            })
        ]
    });
});
