i.d(t, {
    Z: function () {
        return h;
    }
});
var n = i(735250);
i(470079);
var a = i(481060),
    r = i(782568),
    o = i(626135),
    s = i(132871),
    l = i(981631),
    c = i(689938),
    d = i(974366),
    u = i(820305);
function h() {
    let e = (0, s.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        className: d.container,
        role: 'contentinfo',
        children: [
            (0, n.jsx)('img', {
                className: d.image,
                src: u,
                alt: ''
            }),
            (0, n.jsxs)('div', {
                className: d.content,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: c.Z.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: c.Z.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
                    })
                ]
            }),
            (0, n.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                onClick: function () {
                    o.default.track(l.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'new_to_apps',
                        current_page: s.ApplicationDirectoryViews.HOME,
                        guild_id: e
                    }),
                        (0, r.Z)('https://discord.com/blog/how-to-use-discord-apps');
                },
                className: d.button,
                children: c.Z.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_CTA
            })
        ]
    });
}
