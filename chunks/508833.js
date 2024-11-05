n.d(t, {
    D: function () {
        return o;
    }
});
var r = n(661763),
    i = n(239700),
    a = n(523603),
    s = n(649859);
function o(e) {
    let { value: t = 0, minValue: n = 0, maxValue: o = 100, valueLabel: l, isIndeterminate: u, formatOptions: c = { style: 'percent' } } = e,
        d = (0, r.zL)(e, { labelable: !0 }),
        { labelProps: f, fieldProps: _ } = (0, a.N)({
            ...e,
            labelElementType: 'span'
        }),
        h = ((t = (0, i.uZ)(t, n, o)) - n) / (o - n),
        p = (0, s.Ux)(c);
    if (!u && !l) {
        let e = 'percent' === c.style ? h : t;
        l = p.format(e);
    }
    return {
        progressBarProps: (0, r.dG)(d, {
            ..._,
            'aria-valuenow': u ? void 0 : t,
            'aria-valuemin': n,
            'aria-valuemax': o,
            'aria-valuetext': u ? void 0 : l,
            role: 'progressbar'
        }),
        labelProps: f
    };
}
