s.d(n, {
    Z: function () {
        return _;
    }
}), s(757143);
var l = s(735250);
s(470079);
var i = s(120356), t = s.n(i), r = s(481060), a = s(403182), c = s(587446), o = s(504983), u = s(3474);
function d(e) {
    let {errors: n} = e;
    return (0, l.jsx)(l.Fragment, {
        children: n.map((e, n) => (0, l.jsx)(r.Text, {
            variant: 'text-xs/normal',
            color: 'text-danger',
            className: u.errorMessage,
            children: e.replace(/[0-9.,]+ ?kb/g, e => {
                let n = 1024 * parseInt(e, 10);
                return isNaN(n) ? e : (0, a.Ng)(n);
            })
        }, n))
    });
}
function _(e) {
    let {
        title: n,
        titleIcon: s,
        titleId: i,
        description: a,
        children: _,
        className: m,
        errors: I,
        disabled: E = !1,
        hideDivider: p = !1,
        showBorder: N = !1,
        borderType: T,
        hasBackground: S = !1,
        forcedDivider: x = !1,
        showPremiumIcon: h = !1
    } = e;
    return (0, l.jsx)('div', {
        className: t()(u.customizationSection, m, {
            [u.disabled]: E,
            [u.hideDivider]: p,
            [u.showBorder]: N,
            [u.withDivider]: x
        }),
        children: (0, l.jsxs)(o.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: N,
            type: T,
            hasBackground: S,
            children: [
                (0, l.jsxs)(r.FormTitle, {
                    className: u.title,
                    id: i,
                    children: [
                        n,
                        h && (0, l.jsx)(c.Z, {}),
                        s
                    ]
                }),
                null != a ? (0, l.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: u.sectionDescription,
                    children: a
                }) : null,
                _,
                null != I && (0, l.jsx)(d, { errors: I })
            ]
        })
    });
}
