n(627341);
var r = n(735250),
    s = n(470079),
    i = n(120356),
    l = n.n(i),
    a = n(278074),
    o = n(831209),
    c = n(399606),
    d = n(481060),
    u = n(37234),
    f = n(597688),
    m = n(884697),
    E = n(74538),
    p = n(731896),
    _ = n(528439),
    h = n(981631),
    g = n(689938),
    I = n(126025),
    v = n(223223);
let C = () => 80,
    x = (e) => {
        let { children: t, className: n, isSelected: s = !1, ...i } = e;
        return (0, r.jsx)(d.Clickable, {
            className: l()(I.effectGridItem, n, { [I.selected]: s }),
            ...i,
            onClick: i.onSelect,
            children: t
        });
    },
    P = (e) => {
        var t;
        let { user: n, profileEffect: i, innerRef: l, section: a, isSelected: u, ...h } = e,
            C = (0, p.V)(i.id),
            P = (0, c.e7)([f.Z], () => {
                let e = f.Z.getProduct(i.skuId);
                return (0, m.G1)(e);
            }),
            A = (0, m.Yq)(i.skuId),
            Z = s.useRef(null),
            { accessibilityLabel: T, thumbnailPreviewSrc: N, title: S } = null !== (t = null == C ? void 0 : C.config) && void 0 !== t ? t : {},
            j = E.ZP.canUseCollectibles(n),
            R = a === _.$0.PREMIUM_PURCHASE && !j;
        return (0, r.jsxs)(x, {
            className: R && !u ? I.decorationGridItemChurned : void 0,
            innerRef: null != l ? l : Z,
            isSelected: u,
            ...h,
            children: [
                (0, r.jsx)('img', {
                    src: v,
                    alt: T,
                    className: I.presetEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: I.presetEffectImg,
                    src: N,
                    alt: S
                }),
                a === _.$0.PURCHASE || (a === _.$0.PREMIUM_PURCHASE && j)
                    ? null
                    : A
                      ? (0, r.jsx)(d.PremiumBadge, {
                            className: I.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: I.newBadgeText,
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
                            icon: P
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
                            color: o.Z.BACKGROUND_ACCENT,
                            className: I.lockBadge
                        })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guild: n, pendingProfileEffect: s, selectedProfileEffectRef: i, onSelect: l, onClose: o } = e,
        c = () => {
            o(), (0, u.jN)(h.S9g.COLLECTIBLES_SHOP);
        },
        f = (0, _.ZP)(),
        m = null != s;
    return (0, r.jsx)('section', {
        className: I.section,
        children: (0, r.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: I.list,
            columns: 3,
            sections: f.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, o, u, E) => {
                let { section: p, items: h } = f[e];
                return (0, a.EQ)(h[o])
                    .with(_.Tm, () =>
                        (0, r.jsxs)(
                            x,
                            {
                                style: { ...u },
                                isSelected: !m,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(d.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: I.notAllowedIcon
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
                    .with(_.oT, () =>
                        (0, r.jsxs)(
                            x,
                            {
                                style: u,
                                onSelect: c,
                                children: [
                                    (0, r.jsx)(d.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: I.shopIcon
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
                            P,
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
            getItemHeight: C,
            removeEdgeItemGutters: !0
        })
    });
};
