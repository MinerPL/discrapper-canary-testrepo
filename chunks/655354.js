n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(481060), o = n(689938), c = n(554050);
function d(e) {
    let {
            className: t,
            onJump: n
        } = e, [s, d] = a.useState(!1);
    return (0, i.jsx)(r.Clickable, {
        className: l()(c.jumpButton, t),
        onClick: e => {
            d(!0), n(e);
        },
        children: s ? (0, i.jsx)(r.Spinner, { type: r.Spinner.Type.PULSING_ELLIPSIS }) : (0, i.jsx)(r.Text, {
            variant: 'text-xs/normal',
            className: c.text,
            children: o.Z.Messages.JUMP
        })
    });
}
