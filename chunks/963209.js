n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    r = n(481060),
    l = n(112831),
    i = n(689938),
    c = n(934836);
function d(e) {
    let { onComplete: t } = e;
    return (0, s.jsxs)(r.Clickable, {
        className: c.container,
        onClick: t,
        children: [
            (0, s.jsx)(l.Z, {
                size: l.Z.Sizes.SIZE_24,
                className: c.title,
                children: i.Z.Messages.NUF_COMPLETE_TITLE
            }),
            (0, s.jsx)(l.Z, {
                size: l.Z.Sizes.SIZE_24,
                className: o()(c.title, c.subtitle),
                children: i.Z.Messages.NUF_COMPLETE_SUBTITLE
            }),
            (0, s.jsx)(r.Button, {
                color: r.Button.Colors.WHITE,
                onClick: t,
                children: i.Z.Messages.NUF_COMPLETE_CTA
            })
        ]
    });
}
