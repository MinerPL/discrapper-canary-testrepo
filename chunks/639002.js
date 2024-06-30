n.d(t, {
    Z: function () {
        return u;
    }
});
var a = n(735250);
n(470079);
var i = n(481060), l = n(782568), r = n(626135), c = n(132871), s = n(981631), o = n(689938), d = n(665012);
function u(e) {
    let {guildId: t} = e;
    return (0, a.jsxs)('div', {
        className: d.container,
        children: [
            (0, a.jsx)('img', {
                className: d.image,
                src: n(731914),
                alt: ''
            }),
            (0, a.jsxs)('div', {
                className: d.content,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-md/extrabold',
                        children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
                    })
                ]
            }),
            (0, a.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                onClick: function () {
                    r.default.track(s.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'submit_music_app',
                        current_page: c.ApplicationDirectoryViews.SEARCH,
                        guild_id: t
                    }), (0, l.Z)('https://dis.gd/music-search-page-inclusion');
                },
                color: i.Button.Colors.TRANSPARENT,
                className: d.button,
                children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
            })
        ]
    });
}
