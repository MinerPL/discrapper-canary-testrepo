n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(434404),
    l = n(962086),
    r = n(303737),
    o = n(981631),
    c = n(689938),
    u = n(4753),
    d = n(497224);
function h(e) {
    let { guildId: t } = e;
    return (0, i.jsx)('div', {
        className: u.upsellPage,
        children: (0, i.jsxs)('div', {
            className: u.upsellContainer,
            children: [
                (0, i.jsx)('img', {
                    src: d,
                    alt: ''
                }),
                (0, i.jsxs)('div', {
                    className: u.upsellContent,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-xl/semibold',
                            children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_HEADER
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            className: u.bodyText,
                            children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BODY
                        }),
                        (0, i.jsx)(a.Button, {
                            size: a.Button.Sizes.MEDIUM,
                            onClick: () => {
                                (0, l.mL)(t), s.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, void 0, o.KsC.ROLE_SUBSCRIPTION_TIERS), (0, r.GN)(t);
                            },
                            className: u.__invalid_button,
                            children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BUTTON
                        })
                    ]
                })
            ]
        })
    });
}
