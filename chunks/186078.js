t.d(n, {
    BO: function () {
        return d;
    },
    QH: function () {
        return m;
    },
    sp: function () {
        return f;
    }
});
var o = t(735250), r = t(470079), a = t(120356), i = t.n(a), s = t(481060), l = t(489813), c = t(707592), u = t(953136);
function d(e) {
    let {
            disabled: n,
            field: t,
            value: a,
            radioItemClassName: l,
            radioItemIconClassName: c,
            onChange: d
        } = e, {choices: m} = t, f = r.useMemo(() => m.map((e, n) => ({
            name: e,
            value: n,
            radioItemIconClassName: i()(u.multipleChoiceIcon, c)
        })), [
            m,
            c
        ]);
    return (0, o.jsx)(s.RadioGroup, {
        disabled: n,
        options: f,
        value: a,
        onChange: d,
        radioItemClassName: l,
        withTransparentBackground: !0
    });
}
function m(e) {
    let {formField: n} = e, t = null != n.response ? n.choices[n.response] : '';
    return (0, o.jsx)(l.hK, {
        title: n.label,
        children: (0, o.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: t,
            disabled: !0
        })
    });
}
function f(e) {
    let {
        formField: n,
        onChange: t
    } = e;
    return (0, o.jsx)(l.hK, {
        title: n.label,
        children: (0, o.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: n,
            value: n.response,
            onChange: t
        })
    });
}
