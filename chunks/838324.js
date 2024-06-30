n.d(t, {
    Z: function () {
        return I;
    }
}), n(47120);
var s = n(735250);
n(470079);
var a = n(442837), i = n(692547), r = n(481060), l = n(45966), o = n(637853), c = n(889369), d = n(974513), u = n(290511), _ = n(689938), E = n(167442);
function I(e) {
    let {
            guildId: t,
            scrollToQuestions: n
        } = e, I = (0, a.e7)([l.Z], () => l.Z.isAdvancedMode(t)), T = (0, a.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [m, N] = (0, o.VF)(t, T), [S, h] = (0, d.OA)(t, [...T]), g = I ? h.length : N.length, C = I ? S.length : m.length, x = g < u.md, p = C >= u.X, R = h.length - N.length, f = (0, s.jsx)(r.CircleCheckIcon, {
            size: 'sm',
            color: i.Z.unsafe_rawColors.BRAND_500.css,
            secondaryColor: i.Z.unsafe_rawColors.WHITE_100.css,
            className: E.icon
        }), L = (0, s.jsx)(r.CircleXIcon, {
            size: 'sm',
            className: E.icon,
            color: i.Z.colors.WHITE.css,
            secondaryColor: i.Z.colors.BACKGROUND_ACCENT.css
        }), O = [
            Math.min(u.X, C) / u.md * 100,
            Math.min(u.md, g) / u.md * 100
        ], A = !x && p ? [
            i.Z.colors.TEXT_POSITIVE.css,
            i.Z.colors.TEXT_POSITIVE.css
        ] : [
            i.Z.colors.TEXT_BRAND.css,
            i.Z.colors.TEXT_MUTED.css
        ];
    return (0, s.jsxs)('div', {
        className: E.container,
        children: [
            (0, s.jsxs)('div', {
                className: E.header,
                children: [
                    (0, s.jsx)(r.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-brand',
                        children: _.Z.Messages.DEFAULT_CHANNELS_CHATTABLE_COUNT.format({ count: C })
                    }),
                    (0, s.jsx)(r.Text, {
                        variant: 'text-xs/bold',
                        color: 'text-muted',
                        children: _.Z.Messages.DEFAULT_CHANNELS_TOTAL_COUNT.format({ count: g })
                    })
                ]
            }),
            (0, s.jsx)(r.StackedProgress, {
                foregroundColors: A,
                percents: O,
                size: r.StackedProgress.Sizes.XSMALL
            }),
            (0, s.jsxs)('div', {
                className: E.requiredItem,
                children: [
                    x ? L : f,
                    (0, s.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: _.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHANNELS.format({ count: u.md })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: E.requiredItem,
                children: [
                    p ? f : L,
                    (0, s.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: _.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHATTABLE_CHANNELS.format({ count: u.X })
                    })
                ]
            }),
            I && (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsxs)('div', {
                        className: E.requiredItem,
                        children: [
                            (0, s.jsx)(r.CircleInformationIcon, {
                                size: 'sm',
                                color: i.Z.colors.WHITE.css,
                                secondaryColor: i.Z.colors.BACKGROUND_ACCENT.css,
                                className: E.icon
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: _.Z.Messages.DEFAULT_CHANNELS_ADVANCED_EXPLAINER
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: E.requiredItem,
                        children: [
                            (0, s.jsx)(r.CircleInformationIcon, {
                                size: 'sm',
                                color: i.Z.colors.WHITE.css,
                                secondaryColor: i.Z.colors.BACKGROUND_ACCENT.css,
                                className: E.icon
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: _.Z.Messages.DEFAULT_CHANNELS_PREVIEW_ADDITIONAL.format({
                                    count: R,
                                    prejoinHook: e => (0, s.jsx)(r.Anchor, {
                                        onClick: n,
                                        children: (0, s.jsx)(r.Text, {
                                            tag: 'span',
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: e
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
