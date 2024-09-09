n(627341);
var r = n(735250),
    s = n(470079),
    i = n(120356),
    l = n.n(i),
    o = n(278074),
    a = n(831209),
    c = n(399606),
    d = n(481060),
    u = n(37234),
    f = n(597688),
    m = n(884697),
    E = n(81245),
    p = n(74538),
    _ = n(731896),
    h = n(528439),
    I = n(981631),
    g = n(689938),
    v = n(126025),
    C = n(223223);
let x = () => 80,
    P = (e) => {
        let { children: t, className: n, isSelected: s = !1, ...i } = e;
        return (0, r.jsx)(d.Clickable, {
            className: l()(v.effectGridItem, n, { [v.selected]: s }),
            ...i,
            onClick: i.onSelect,
            children: t
        });
    },
    Z = (e) => {
        var t;
        let { user: n, profileEffect: i, innerRef: l, section: o, isSelected: u, ...I } = e,
            x = (0, _.V)(i.id),
            Z = (0, c.e7)([f.Z], () => {
                let e = f.Z.getProduct(i.skuId);
                return (0, m.G1)(e);
            }),
            A = (0, m.Yq)(i.skuId),
            T = s.useRef(null),
            { accessibilityLabel: N, thumbnailPreviewSrc: S, title: j } = null !== (t = null == x ? void 0 : x.config) && void 0 !== t ? t : {},
            R = p.ZP.canUseCollectibles(n),
            M = o === h.$0.PREMIUM_PURCHASE && !R,
            L = (0, E.Mu)('ProfileEffectPresetItem');
        return (0, r.jsxs)(P, {
            className: !M || u || L ? void 0 : v.decorationGridItemChurned,
            innerRef: null != l ? l : T,
            isSelected: u,
            ...I,
            children: [
                (0, r.jsx)('img', {
                    src: C,
                    alt: N,
                    className: v.presetEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: v.presetEffectImg,
                    src: S,
                    alt: j
                }),
                o === h.$0.PURCHASE || (o === h.$0.PREMIUM_PURCHASE && R)
                    ? null
                    : A
                      ? (0, r.jsx)(d.PremiumBadge, {
                            className: v.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: v.newBadgeText,
                                children: [
                                    (0, r.jsx)(d.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    g.Z.Messages.NEW
                                ]
                            })
                        })
                      : (0, r.jsx)(d.IconBadge, {
                            icon: Z
                                ? () =>
                                      (0, r.jsx)(d.NitroWheelIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, r.jsx)(d.LockIcon, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: a.Z.BACKGROUND_ACCENT,
                            className: v.lockBadge
                        })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guild: n, pendingProfileEffect: s, selectedProfileEffectRef: i, onSelect: l, onClose: a } = e,
        c = () => {
            a(), (0, u.jN)(I.S9g.COLLECTIBLES_SHOP);
        },
        f = (0, h.ZP)(),
        m = null != s;
    return (0, r.jsx)('section', {
        className: v.section,
        children: (0, r.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: v.list,
            columns: 3,
            sections: f.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, a, u, E) => {
                let { section: p, items: _ } = f[e];
                return (0, o.EQ)(_[a])
                    .with(h.Tm, () =>
                        (0, r.jsxs)(
                            P,
                            {
                                style: { ...u },
                                isSelected: !m,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(d.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: v.notAllowedIcon
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: null != n ? g.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : g.Z.Messages.NONE
                                    })
                                ]
                            },
                            E
                        )
                    )
                    .with(h.oT, () =>
                        (0, r.jsxs)(
                            P,
                            {
                                style: u,
                                onSelect: c,
                                children: [
                                    (0, r.jsx)(d.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: v.shopIcon
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: g.Z.Messages.COLLECTIBLES_SHOP
                                    })
                                ]
                            },
                            E
                        )
                    )
                    .otherwise((e) => {
                        let n = s === e.id;
                        return (0, r.jsx)(
                            Z,
                            {
                                user: t,
                                style: { ...u },
                                section: p,
                                profileEffect: e,
                                innerRef: n ? i : void 0,
                                isSelected: n,
                                onSelect: () => l(e.id)
                            },
                            E
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: n } = f[e];
                return (0, r.jsx)('div', {
                    style: {
                        ...t,
                        height: ''.concat(16, 'px'),
                        position: 'absolute'
                    },
                    children: (0, r.jsx)(d.FormTitle, { children: n })
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
                var n, r;
                return null !== (r = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null;
            },
            getItemHeight: x,
            removeEdgeItemGutters: !0
        })
    });
};
