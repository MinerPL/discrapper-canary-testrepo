n.d(t, {
    Z: function () {
        return m;
    }
});
var s = n(735250);
n(470079);
var a = n(120356), i = n.n(a), r = n(481060), l = n(367907), o = n(357352), c = n(434404), d = n(626135), u = n(629481), _ = n(981631), E = n(689938), I = n(197452);
function T(e) {
    let {pills: t} = e;
    return (0, s.jsx)('div', {
        className: I.row,
        children: t.map(e => (0, s.jsx)('div', {
            className: I.pill,
            children: (0, s.jsx)(r.Text, {
                variant: 'text-sm/normal',
                children: e
            })
        }, e))
    });
}
function m(e) {
    let {
            guildId: t,
            showCTA: n,
            responsive: a = !0
        } = e, m = [
            [
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS,
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS
            ],
            [
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS,
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART
            ],
            [
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS,
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS
            ],
            [
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS,
                E.Z.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS
            ]
        ];
    return (0, s.jsx)('div', {
        className: i()({ [I.responsive]: a }),
        children: (0, s.jsxs)('div', {
            className: I.container,
            children: [
                (0, s.jsxs)('div', {
                    className: I.content,
                    children: [
                        (0, s.jsx)('div', {
                            className: I.pillContainer,
                            children: m.map((e, t) => (0, s.jsx)(T, { pills: e }, 'pill-row-'.concat(t)))
                        }),
                        (0, s.jsxs)('div', {
                            className: I.ctaContent,
                            children: [
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-lg/medium',
                                    color: 'header-primary',
                                    children: E.Z.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
                                }),
                                n && (0, s.jsxs)(r.ShinyButton, {
                                    size: r.Button.Sizes.MEDIUM,
                                    className: I.getStartedButton,
                                    innerClassName: I.getStartedButtonContents,
                                    shineSize: r.ShinyButton.ShineSizes.SMALL,
                                    onClick: () => {
                                        d.default.track(_.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                            ...(0, l.hH)(t),
                                            action_taken: u.mz.GET_STARTED_CLICK
                                        }), c.Z.open(t, _.pNK.GUILD_PRODUCTS);
                                    },
                                    children: [
                                        E.Z.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON,
                                        (0, s.jsx)(r.ArrowSmallRightIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: I.getStartedArrow
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: I.muralImageContainer,
                    children: [
                        (0, s.jsx)('img', {
                            src: (0, o.b)('server_products/storefront/preview-mural.png'),
                            alt: '',
                            className: I.muralImage
                        }),
                        (0, s.jsx)('img', {
                            src: (0, o.b)('server_products/storefront/preview-mural-reduced.png'),
                            alt: '',
                            className: I.muralImageReducedWidth
                        })
                    ]
                })
            ]
        })
    });
}
