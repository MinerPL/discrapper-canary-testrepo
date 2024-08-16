s.d(t, {
    Z: function () {
        return d;
    }
});
var n = s(735250);
s(470079);
var r = s(481060),
    i = s(600164),
    a = s(7557),
    o = s(388905),
    l = s(689938),
    c = s(739467),
    u = s(224499);
function d(e) {
    let { title: t, subtitle: s, error: d, onSubmit: h, onCancel: p } = e;
    return (0, n.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, n.jsx)(o.Dx, {
                className: u.marginBottom8,
                children: t
            }),
            (0, n.jsx)(o.DK, {
                className: c.subTitle,
                children: s
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(a.Z, {
                        inputClassName: c.codeInput,
                        onSubmit: h
                    }),
                    null != d
                        ? (0, n.jsx)(r.Text, {
                              className: c.error,
                              variant: 'text-sm/normal',
                              children: d
                          })
                        : null
                ]
            }),
            null != p &&
                (0, n.jsx)(r.Button, {
                    className: c.button,
                    onClick: p,
                    color: r.Button.Colors.PRIMARY,
                    children: l.Z.Messages.CANCEL
                })
        ]
    });
}
