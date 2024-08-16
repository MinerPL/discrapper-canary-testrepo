t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(735250),
    s = t(470079),
    a = t(780384),
    i = t(481060),
    r = t(689938);
function o(e) {
    let { onConfirm: n, onDismiss: t, theme: o } = e;
    return (0, l.jsxs)(s.Fragment, {
        children: [
            (0, l.jsx)(i.Button, {
                onClick: n,
                children: r.Z.Messages.GENERATE_A_NEW_LINK
            }),
            (0, l.jsx)(i.Button, {
                look: i.Button.Looks.LINK,
                color: (0, a.ap)(o) ? i.Button.Colors.PRIMARY : i.Button.Colors.WHITE,
                onClick: t,
                children: r.Z.Messages.CANCEL
            })
        ]
    });
}
