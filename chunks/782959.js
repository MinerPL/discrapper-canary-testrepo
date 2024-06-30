n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(367907), r = n(970731), l = n(810090), o = n(626135), c = n(63063), d = n(981631), u = n(689938), _ = n(290110);
function E(e) {
    let {
            guildId: t,
            markAsDismissed: E
        } = e, h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Text, {
                    color: 'always-white',
                    variant: 'text-sm/normal',
                    className: _.upsellBody,
                    children: u.Z.Messages.MEDIA_CHANNEL_UPSELL_BODY
                }),
                (0, i.jsx)(s.Text, {
                    color: 'always-white',
                    variant: 'text-sm/normal',
                    children: u.Z.Messages.MEDIA_CHANNEL_LEARN_MORE.format({ hcArticleUrl: c.Z.getCreatorSupportArticleURL(d.BhN.MEDIA_CHANNEL) })
                })
            ]
        });
    return (0, i.jsx)(r.ZP, {
        header: u.Z.Messages.MEDIA_CHANNEL_UPSELL_TITLE,
        content: h,
        asset: (0, i.jsx)(l.Z, {
            className: _.video,
            src: 'https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4',
            autoPlay: !0,
            loop: !0
        }),
        buttonCTA: u.Z.Messages.MEDIA_CHANNEL_UPSELL_CREATE_NOW_CTA,
        onClick: () => {
            o.default.track(d.rMx.MEDIA_CHANNEL_UPSELL_CLICKED, { ...(0, a.hH)(t) }), (0, s.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('45094'),
                    n.e('9458')
                ]).then(n.bind(n, 218613));
                return n => (0, i.jsx)(e, {
                    ...n,
                    channelType: d.d4z.GUILD_MEDIA,
                    guildId: t
                });
            });
        },
        secondaryButtonCTA: u.Z.Messages.DISMISS,
        markAsDismissed: E
    });
}
