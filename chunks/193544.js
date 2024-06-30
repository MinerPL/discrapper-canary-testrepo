n.d(t, {
    Z: function () {
        return T;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(481060), o = n(186523), c = n(553826), d = n(2150), u = n(992249), _ = n(717251), E = n(689938), I = n(785973);
function T(e) {
    var t, n, i;
    let {
            changeTitle: T,
            value: m,
            options: N,
            className: S,
            onChange: h
        } = e, [g, C] = a.useState(m), [x, p] = a.useState(!1), [R, f] = a.useState(!1), L = a.useRef(null);
    a.useEffect(() => {
        C(m);
    }, [m]), a.useEffect(() => () => {
        clearTimeout(L.current);
    }, []);
    let O = N.find(e => e.value === g), A = e => {
            if (!e.disabled && e.value !== g)
                f(!0), null == h || h(e), C(e.value), L.current = setTimeout(() => {
                    f(!1), p(!1);
                }, 1000);
        };
    return (0, s.jsx)(u.Z, {
        title: x ? T : null !== (t = null == O ? void 0 : O.title) && void 0 !== t ? t : T,
        description: x ? '('.concat(null !== (n = null == O ? void 0 : O.title) && void 0 !== n ? n : E.Z.Messages.NONE, ')') : null !== (i = null == O ? void 0 : O.description) && void 0 !== i ? i : '',
        highlightColor: x ? d.q.NONE : null == O ? void 0 : O.highlightColor,
        action: (0, s.jsx)(l.Button, {
            look: l.Button.Looks.LINK,
            size: l.Button.Sizes.MIN,
            color: l.Button.Colors.LINK,
            children: E.Z.Messages.CHANGE
        }),
        loading: R,
        className: S,
        children: N.map((e, t) => (0, s.jsx)(_.Z, {
            title: e.title,
            description: e.description,
            highlightColor: e.highlightColor,
            className: r()(I.groupCollapsedRow, g === e.value && I.selected),
            selected: g === e.value,
            action: g === e.value ? (0, s.jsx)(c.Z, { className: I.radioItem }) : (0, s.jsx)(o.Z, { className: I.radioItem }),
            onClick: () => A(e),
            disabled: e.disabled
        }, ''.concat(e.title, '-').concat(t)))
    });
}
