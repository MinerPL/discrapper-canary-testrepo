t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(921157),
    i = t(76793),
    r = t(838436),
    o = t(726985),
    l = t(760373),
    c = t(689938),
    d = t(498302);
function _() {
    let e = (0, a.s)();
    return (0, n.jsxs)(r.U, {
        setting: o.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        children: [
            (0, n.jsx)(r.H, {
                header: c.Z.Messages.E2EE_VERIFIED_DEVICES,
                description: c.Z.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({ helpArticle: l.s9 })
            }),
            e.map((e) =>
                (0, n.jsx)(
                    'div',
                    {
                        className: d.item,
                        children: (0, n.jsx)(i.q, { userId: e })
                    },
                    e
                )
            )
        ]
    });
}
