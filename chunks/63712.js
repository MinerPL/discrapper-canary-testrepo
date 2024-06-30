l.d(n, {
    Z: function () {
        return E;
    }
});
var s = l(735250);
l(470079);
var a = l(442837), t = l(481060), i = l(536442), r = l(142497), o = l(689938), d = l(963711), c = l(137707);
let u = () => (0, s.jsxs)(s.Fragment, {
    children: [
        (0, s.jsx)(t.Text, {
            color: 'header-primary',
            variant: 'text-xs/normal',
            className: d.inlineText,
            children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
        }),
        (0, s.jsx)(t.Text, {
            color: 'header-primary',
            variant: 'text-xs/normal',
            className: d.inlineText,
            children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
        }),
        (0, s.jsx)(t.Text, {
            color: 'header-primary',
            variant: 'text-xs/normal',
            className: d.inlineText,
            children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
        }),
        (0, s.jsx)(t.Text, {
            color: 'header-primary',
            variant: 'text-xs/normal',
            className: d.inlineText,
            children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
        })
    ]
});
function E(e) {
    let {onClick: n} = e;
    return (0, a.e7)([i.qc], () => !i.qc.hasHotspot(i.v6.STAGE_CHANNEL_UPSELL)) ? null : (0, s.jsxs)('div', {
        className: d.container,
        children: [
            (0, s.jsxs)('div', {
                className: d.content,
                children: [
                    (0, s.jsxs)('div', {
                        className: d.textContainer,
                        children: [
                            (0, s.jsx)(t.Heading, {
                                variant: 'heading-md/semibold',
                                children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }),
                            (0, s.jsx)(t.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/normal',
                                className: d.descriptionText,
                                children: o.Z.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }),
                            (0, s.jsx)(t.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/normal',
                                children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL.format({ suggestionsHook: u })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: d.image,
                        children: (0, s.jsx)('img', {
                            src: c,
                            alt: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                        })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: d.footer,
                children: [
                    (0, s.jsx)(t.Button, {
                        onClick: n,
                        color: t.Button.Colors.PRIMARY,
                        size: t.Button.Sizes.SMALL,
                        className: d.button,
                        children: o.Z.Messages.CREATE_STAGE_CHANNEL
                    }),
                    (0, s.jsx)(t.Button, {
                        onClick: () => {
                            r.Kw(i.v6.STAGE_CHANNEL_UPSELL);
                        },
                        color: t.Button.Colors.TRANSPARENT,
                        size: t.Button.Sizes.SMALL,
                        look: t.ButtonLooks.LINK,
                        children: o.Z.Messages.DONT_SHOW_AGAIN
                    })
                ]
            })
        ]
    });
}
