t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(37234),
    r = t(703656),
    o = t(981631),
    l = t(689938),
    c = t(591559),
    d = t(286359);
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
