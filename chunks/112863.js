s.d(t, {
    Z: function () {
        return _;
    }
});
var n = s(735250);
s(470079);
var a = s(481060), i = s(37234), r = s(703656), o = s(981631), l = s(689938), c = s(673778), d = s(286359);
function _() {
    return (0, n.jsxs)('div', {
        className: c.wrapper,
        children: [
            (0, n.jsx)('img', {
                className: c.icon,
                alt: '',
                src: d
            }),
            (0, n.jsxs)('div', {
                className: c.info,
                children: [
                    (0, n.jsx)(a.Text, {
                        variant: 'text-lg/bold',
                        children: l.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_TITLE
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: l.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_SUBTITLE
                    })
                ]
            }),
            (0, n.jsx)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                onClick: () => {
                    (0, r.uL)(o.Z5c.GUILD_DISCOVERY), (0, i.xf)();
                },
                size: a.Button.Sizes.LARGE,
                children: l.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_CTA
            })
        ]
    });
}
