n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(197115), l = n(702346), r = n(981631), o = n(474936), c = n(689938), d = n(255265);
function u(e) {
    let {
            message: t,
            channel: n
        } = e, u = null != n.guild_id ? r.jXE.TEXT_IN_VOICE : r.jXE.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(l.Z, {
        contentClassName: d.messageContentContainer,
        iconContainerClassName: d.iconContainer,
        iconNode: (0, i.jsx)(a.BellIcon, { colorClass: d.icon }),
        children: (0, i.jsxs)('div', {
            className: d.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, i.jsxs)('div', {
                            className: d.nitroBadge,
                            children: [
                                (0, i.jsx)(a.NitroWheelIcon, {
                                    size: 'xs',
                                    colorClass: d.nitroBadgeIcon
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    className: d.nitroBadgeText,
                                    children: c.Z.Messages.POWERED_BY_NITRO
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: d.buttonContainer,
                    children: (0, i.jsx)(s.Z, {
                        showGradient: !0,
                        iconClassName: d.premiumIcon,
                        subscriptionTier: o.Si.TIER_2,
                        buttonText: c.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
                        size: a.Button.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: u,
                            object: r.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}
