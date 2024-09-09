n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(921944),
    r = n(689938),
    l = n(660415);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('div', { className: l.pointer }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                className: l.content,
                children: r.Z.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
            }),
            (0, i.jsx)(a.Button, {
                color: a.Button.Colors.BRAND_INVERTED,
                fullWidth: !0,
                onClick: () => {
                    t(s.L.AUTO);
                },
                children: r.Z.Messages.GOT_IT
            })
        ]
    });
}
