n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(186325), o = n(780384), c = n(481060), d = n(410030), u = n(810090), _ = n(113434), E = n(497505), h = n(918701), I = n(78826), m = n(670638), p = n(981631), g = n(689938), T = n(211549);
function S(e) {
    let {
            quest: t,
            isHovering: n,
            onCtxMenuClose: a,
            onCtxMenuOpen: S,
            onCtxMenuSelect: C
        } = e, N = (0, h.ph)(t), f = (0, d.ZP)(), A = (0, o.wj)(f) ? p.BRd.DARK : p.BRd.LIGHT, Z = A === p.BRd.DARK, L = s.useMemo(() => (0, h.nP)(t.config.assets.questBarHero), [t]), v = s.useContext(l.S).reducedMotion.enabled, O = (0, h.Mi)(t, E.jn.GIFT_INVENTORY_FOR_YOU), R = (0, _.tP)(t), x = s.useRef(n), P = s.useRef(null);
    return s.useEffect(() => {
        if (L && null != P.current)
            return x.current !== n && (n ? P.current.play() : (P.current.pause(), P.current.currentTime = 0)), x.current = n, () => {
                var e;
                null === (e = P.current) || void 0 === e || e.pause();
            };
    }, [
        n,
        L
    ]), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: T.container,
                children: [
                    (0, i.jsx)('div', {
                        className: T.heroAssetWrapper,
                        children: L ? (0, i.jsx)(I.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroAnimated',
                            children: e => (null != e.current && (P.current = e.current), (0, i.jsx)(u.Z, {
                                ref: e,
                                autoPlay: !v && n,
                                loop: !0,
                                playsInline: !0,
                                className: T.heroAsset,
                                controls: !1,
                                children: (0, i.jsx)('source', {
                                    src: N,
                                    type: (0, h.mN)(N)
                                })
                            }))
                        }) : (0, i.jsx)(I.Fl, {
                            id: 'QuestTileBanner',
                            children: e => (0, i.jsx)('img', {
                                ref: e,
                                alt: '',
                                className: T.heroAsset,
                                src: N
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: r()(T.overlay, {
                            [T.darkThemeGradient]: Z,
                            [T.lightThemeGradient]: !Z
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: T.positionContentOverBackground,
                        children: (0, i.jsxs)('div', {
                            className: T.contents,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: T.topRow,
                                    children: [
                                        O && !R && (0, i.jsx)('div', {
                                            className: T.pill,
                                            children: (0, i.jsx)(c.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: T.eyebrowText,
                                                children: g.Z.Messages.RECOMMENDED
                                            })
                                        }),
                                        (0, i.jsx)(m.r, {
                                            onOpen: S,
                                            onClose: a,
                                            onSelect: C,
                                            questContent: E.jn.QUEST_HOME_DESKTOP,
                                            quest: t,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: e => (0, i.jsx)(c.Clickable, {
                                                ...e,
                                                className: T.submenuWrapper,
                                                'aria-label': g.Z.Messages.ACTIONS,
                                                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: r()(T.submenuIcon)
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(I.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: e => (0, i.jsx)('img', {
                                        ref: e,
                                        className: T.partnerBranding,
                                        alt: t.config.messages.gameTitle,
                                        src: (0, h.Gs)(t, A)
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: T.bottomRow,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-muted',
                                        children: g.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: t.config.messages.gamePublisher })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', { className: T.spacer })
        ]
    });
}
