n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(975298),
    u = n(158153),
    m = n(760558),
    h = n(401786),
    g = n(450468),
    p = n(98278),
    x = n(314684),
    S = n(594174),
    T = n(78839),
    C = n(267642),
    _ = n(74538),
    E = n(283029),
    f = n(357956),
    I = n(275909),
    N = n(981631),
    A = n(474936),
    b = n(735825),
    v = n(388032),
    j = n(601709);
function O(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: l, premiumSubscription: a, useReducedMotion: c } = e,
        d = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, C.tl)(t);
    return (0, i.jsxs)(
        'li',
        {
            className: j.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: j.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(I.Z, {
                            className: j.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: c
                        }),
                        u && null != a
                            ? (0, i.jsx)(o.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: v.intl.format(v.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != d
                              ? (0, i.jsx)(f.Z, { cooldown: d.getTime() })
                              : (0, i.jsx)(o.Text, {
                                    className: j.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: v.intl.string(v.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: j.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !u &&
                            (0, i.jsx)(o.Button, {
                                className: j.unappliedGuildBoostSlotCta,
                                color: o.Button.Colors.PRIMARY,
                                look: o.Button.Looks.LINK,
                                onClick: () => r(t),
                                size: o.Button.Sizes.NONE,
                                children: v.intl.string(v.t.twFU3d)
                            }),
                        u &&
                            (0, i.jsx)(o.Button, {
                                className: j.unappliedGuildBoostSlotCta,
                                color: o.Button.Colors.PRIMARY,
                                look: o.Button.Looks.LINK,
                                onClick: () => l(t),
                                size: o.Button.Sizes.NONE,
                                children: v.intl.string(v.t['2glQNj'])
                            })
                    ]
                })
            ]
        },
        t.id
    );
}
function R(e) {
    (0, o.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(h.default, {
                ...t,
                guildBoostSlot: e
            })
    );
}
function P(e) {
    (0, o.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(g.default, {
                ...t,
                guildBoostSlotId: e.id
            })
    );
}
t.Z = function (e) {
    let t, n;
    let { guildBoostSlots: r } = e,
        h = (0, a.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        g = (null == h ? void 0 : h.isPausedOrPausePending) === !0,
        { fractionalState: f } = (0, d.Z)(),
        I = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        D = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        y = (0, x.Vp)(),
        B = f === A.a$.FP_SUB,
        L = g && !B,
        {
            appliedGuildBoostSlots: Z,
            unappliedGuildBoostSlots: F,
            numActiveGuildBoostSlots: M,
            hasCooldownBoosts: k,
            allGuildBoostsAreOnCooldown: w
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                r.forEach((r) => {
                    !(0, C.tl)(r) && n++, r.isOnCooldown() ? (i = !0) : (s = !1), null != r.premiumGuildSubscription ? e.push(r) : t.push(r);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s
                }
            );
        }, [r]),
        U = null != h ? (0, u.G)(h, y) : 0,
        V = Math.max(0, U - Z.length),
        G = M > U,
        Y = U === r.length,
        H = Y ? V : 1,
        z = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < H; t++)
                e.push(
                    (0, i.jsx)(
                        E.Z,
                        {
                            className: j.headerBoostGem,
                            useReducedMotion: I
                        },
                        t
                    )
                );
            return e;
        }, [H, I]),
        W = null != y,
        K = s.useMemo(() => F.find((e) => e.isAvailable()), [F]);
    if (0 === F.length) return null;
    let q = F.length;
    if (((t = Y ? (1 === q && W ? v.intl.string(v.t['65r43N']) : v.intl.formatToPlainString(w ? v.t['3DW6DQ'] : v.t['/u15QU'], { numUnappliedGuildBoostSlots: q })) : v.intl.formatToPlainString(w ? v.t['3DW6DQ'] : v.t.BPadnJ, { numUnappliedGuildBoostSlots: q })), _.ZP.isPremium(D))) {
        if (Y && 1 === q && W) n = y.skuId === b.Ft.FREE_GUILD_BOOST_1_MONTH ? v.intl.string(v.t.dm8r0t) : v.intl.string(v.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, i.jsx)(
                    o.Clickable,
                    {
                        className: j.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, p.z)();
                        },
                        children: e
                    },
                    t
                );
            n = w
                ? v.intl.format(v.t.omcpSE, { learnMoreHook: e })
                : v.intl.format(v.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: q,
                      learnMoreHook: e
                  });
        }
    } else n = w ? v.intl.string(v.t['8pcUZm']) : v.intl.formatToPlainString(v.t.Kaw82t, { numUnappliedGuildBoostSlots: q });
    return (0, i.jsxs)('div', {
        className: j.wrapper,
        children: [
            W &&
                (0, i.jsxs)('div', {
                    className: j.specialHeader,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/semibold',
                            className: j.pill,
                            children: v.intl.string(v.t.fhK8ho).toLocaleUpperCase()
                        }),
                        (0, i.jsx)(o.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: v.intl.string(v.t.Cly3mZ)
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: l()(j.content, {
                    [j.headerWithBoost]: W,
                    [j.headerWithoutSpecialHeader]: !W
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: j.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.headerContentPrimary,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: j.headerBoostGems,
                                        children: z
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: j.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(o.Heading, {
                                                className: j.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: t
                                            }),
                                            (0, i.jsx)(o.Text, {
                                                className: j.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: n
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: j.headerContentSecondary,
                                children: (0, i.jsx)(o.Tooltip, {
                                    shouldShow: null == K || L,
                                    text: g ? v.intl.string(v.t.mOWsFx) : v.intl.string(v.t.xr4m5O),
                                    children: (e) =>
                                        (0, i.jsx)(o.Button, {
                                            ...e,
                                            disabled: null == K || L,
                                            onClick:
                                                null != K
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = K),
                                                              void (0, o.openModalLazy)(
                                                                  async () => (t) =>
                                                                      (0, i.jsx)(m.default, {
                                                                          ...t,
                                                                          guildBoostSlots: [e],
                                                                          locationSection: N.jXE.SETTINGS_PREMIUM
                                                                      })
                                                              )
                                                          );
                                                      }
                                                    : void 0,
                                            children: v.intl.string(v.t.BMx1i4)
                                        })
                                })
                            })
                        ]
                    }),
                    (!Y || k) &&
                        (0, i.jsx)('ul', {
                            className: j.unappliedBoostSlots,
                            children: F.map((e) =>
                                (0, i.jsx)(
                                    O,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: G,
                                        onCancel: R,
                                        onUncancel: P,
                                        premiumSubscription: h,
                                        useReducedMotion: I
                                    },
                                    e.id
                                )
                            )
                        })
                ]
            })
        ]
    });
};
