n.d(t, {
    Z: function () {
        return R;
    },
    n: function () {
        return T;
    }
});
var s = n(735250), r = n(470079), a = n(120356), o = n.n(a), i = n(180650), l = n(399606), c = n(481060), d = n(906732), u = n(963249), p = n(594174), g = n(754347), f = n(74538), C = n(884697), m = n(624377), h = n(141011), _ = n(813083), b = n(67938), x = n(372654), E = n(994896), I = n(215023), L = n(474936), S = n(689938), v = n(12900);
let T = (0, C.IC)(96), N = {
        [i.T.DISXCORE]: {
            left: () => n(136648),
            right: () => n(850298),
            leftLogo: () => n(407848),
            rightLogo: () => n(457734)
        },
        [i.T.FANTASY]: {
            left: () => n(44602),
            right: () => n(862392),
            leftLogo: () => n(150218),
            rightLogo: () => n(625591)
        },
        [i.T.CYBERPUNK]: {
            left: () => n(862358),
            right: () => n(604083),
            leftLogo: () => n(519293),
            rightLogo: () => n(769307)
        },
        [i.T.ELEMENTS]: {
            left: () => n(534572),
            right: () => n(905911),
            leftOverflow: () => n(149653),
            rightOverflow: () => n(183749),
            leftLogo: () => n(201651),
            rightLogo: () => n(47227)
        },
        [i.T.ANIME_V2]: {
            left: () => n(607668),
            right: () => n(381436),
            leftLogo: () => n(384970),
            rightLogo: () => n(906935)
        },
        [i.T.SPRINGTOONS]: {
            left: () => n(138272),
            right: () => n(392425),
            leftLogo: () => n(547470),
            rightLogo: () => n(204641)
        },
        [i.T.LOFI_VIBES]: {
            left: () => n(659813),
            right: () => n(722603),
            leftLogo: () => n(678747),
            rightLogo: () => n(178466)
        },
        [i.T.GALAXY]: {
            left: () => n(236801),
            right: () => n(537085),
            leftLogo: () => n(818198),
            rightLogo: () => n(959177)
        },
        [i.T.FEELIN_RETRO]: {
            left: () => n(616442),
            right: () => n(250440),
            leftLogo: () => n(662232),
            rightLogo: () => n(226107)
        },
        [i.T.PIRATES]: {
            left: () => n(519741),
            right: () => n(980112),
            leftLogo: () => n(379545),
            rightLogo: () => n(31847)
        },
        [i.T.ARCADE]: {
            left: () => n(6414),
            right: () => n(959436),
            leftLogo: () => n(23695),
            rightLogo: () => n(2235)
        },
        [i.T.TIDE]: {
            left: () => n(960088),
            right: () => n(402313),
            leftOverflow: () => n(757631),
            rightOverflow: () => n(17142),
            leftLogo: () => n(237457),
            rightLogo: () => n(958609)
        }
    }, O = e => {
        let {category: t} = e, {analyticsLocations: n} = (0, d.ZP)(), a = r.useRef(null), o = (0, l.e7)([p.default], () => p.default.getCurrentUser());
        return f.ZP.canUseCollectibles(o) ? (0, s.jsx)(s.Fragment, { children: t.summary }) : (0, s.jsx)(s.Fragment, {
            children: S.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                getPremium: e => (0, s.jsx)(c.Clickable, {
                    innerRef: a,
                    className: v.getPremiumHook,
                    onClick: () => {
                        (0, u.Z)({
                            subscriptionTier: L.Si.TIER_2,
                            analyticsLocations: n,
                            returnRef: a
                        });
                    },
                    tag: 'span',
                    children: (0, s.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        color: 'always-white',
                        tag: 'span',
                        children: e
                    })
                })
            })
        });
    };
function j(e) {
    var t, n, r;
    let {
            config: a,
            category: l,
            index: c,
            hideLimitedTimeBadge: d = !1
        } = e, u = c % 2 == 1, p = null !== (r = u ? a.left() : a.right()) && void 0 !== r ? r : (0, C.uV)(l.banner, {
            size: x.yV,
            format: 'jpg'
        }), g = u ? null === (t = a.leftOverflow) || void 0 === t ? void 0 : t.call(a) : null === (n = a.rightOverflow) || void 0 === n ? void 0 : n.call(a), f = u ? a.rightLogo() : a.leftLogo(), {backgroundColors: h} = (0, m.Z)(l.styles), b = {
            objectPosition: u ? 'left' : 'right',
            background: null != h ? ''.concat((0, x.nH)(h), ' border-box border-box') : void 0,
            outlineColor: null != h ? h.border.toHslString() : void 0
        };
    return (0, s.jsxs)('div', {
        className: o()(v.condensedBannerContainer),
        children: [
            (0, s.jsx)('img', {
                src: p,
                style: b,
                className: v.condensedBannerImage,
                alt: ''
            }),
            null != g && (0, s.jsx)('img', {
                src: g,
                className: o()(v.overflowImage, {
                    [v.overflowImageLeft]: u,
                    [v.tideOverflowImage]: l.skuId === i.T.TIDE
                }),
                alt: ''
            }),
            (0, s.jsx)('img', {
                className: o()(v.condensedCategoryLogo, { [v.condensedCategoryLogoLeft]: !u }),
                src: f,
                alt: l.name
            }),
            !d && (0, s.jsx)(_.Z, {
                category: l,
                className: o()(v.limitedTimeBadge, { [v.limitedTimeBadgeLeft]: u }),
                display: 'banner'
            })
        ]
    });
}
function R(e) {
    var t, n;
    let {
            category: r,
            className: a,
            hideLimitedTimeBadge: l = !1,
            index: d = 0
        } = e, {backgroundColors: u} = (0, m.Z)(r.styles), p = !!(null === (t = I.Ve[r.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {condensedBannersEnabled: f} = (0, E.O)({ location: 'Collectibles Shop Banner' });
    if (f) {
        let e = N[r.skuId];
        if (null != e)
            return (0, s.jsx)(j, {
                config: e,
                category: r,
                index: d,
                hideLimitedTimeBadge: l
            });
    }
    return r.skuId === i.T.TIDE ? (0, s.jsx)(b.G, { category: r }) : (0, s.jsxs)(h.Z, {
        asset: r.banner,
        className: o()(v.shopBanner, a),
        style: null != u ? {
            background: ''.concat((0, x.nH)(u), ' border-box border-box'),
            outlineColor: u.border.toHslString()
        } : void 0,
        children: [
            (0, s.jsxs)('div', {
                className: v.discordLogo,
                children: [
                    (0, s.jsx)(c.ClydeIcon, {
                        size: 'custom',
                        width: 28,
                        height: 28,
                        color: 'currentColor',
                        className: v.discordIcon
                    }),
                    (0, s.jsx)(g.Z, { className: v.discordWordmark })
                ]
            }),
            (0, s.jsx)('img', {
                className: v.categoryLogo,
                src: (0, C.uV)(r.logo, { size: T }),
                alt: r.name,
                style: { maxWidth: null === (n = I.Ve[r.skuId]) || void 0 === n ? void 0 : n.logoMaxWidth }
            }),
            (0, s.jsx)(c.Text, {
                className: o()(v.summary, { [v.blackSummary]: p }),
                variant: 'text-md/normal',
                children: r.skuId === i.T.DISXCORE ? (0, s.jsx)(O, { category: r }) : r.summary
            }),
            !l && (0, s.jsx)(_.Z, {
                category: r,
                className: v.limitedTimeBadge,
                display: 'banner'
            })
        ]
    });
}
