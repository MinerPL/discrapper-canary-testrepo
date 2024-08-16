t.d(n, {
    Q8: function () {
        return u;
    },
    jn: function () {
        return d;
    },
    lX: function () {
        return m;
    }
});
var o = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    a = t(481060),
    s = t(489813),
    l = t(592286),
    c = t(994735);
function u(e) {
    let { value: n, placeholder: t, onChange: r, disabled: s, className: u, autofocus: d } = e;
    return (0, o.jsx)(a.TextArea, {
        className: i()(c.paragraphFieldBody, u),
        maxLength: l.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: r,
        disabled: s,
        autoFocus: d,
        autosize: !0
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, o.jsx)(s.hK, {
        title: n.label,
        children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, o.jsx)(s.hK, {
        title: n.label,
        children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: t
        })
    });
}
