t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(89057),
    o = t(724884),
    l = t(290799),
    c = t(362948),
    d = t(899667),
    _ = t(165630),
    E = t(771845),
    u = t(594174),
    I = t(314884),
    T = t(74538),
    S = t(296533),
    N = t(901750),
    C = t(112863),
    m = t(701157),
    A = t(912152),
    O = t(615603),
    g = t(474936),
    h = t(833145);
function p(e) {
    let { premiumSubscription: s } = e,
        t = (0, i.e7)([I.Z], () => I.Z.boostSlots),
        p = a.useMemo(() => Object.values(t), [t]),
        R = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        x = T.ZP.isPremium(R, g.p9.TIER_2),
        M = (0, i.e7)([_.Z], () => _.Z.affinities),
        f = (0, i.e7)([E.ZP], () => E.ZP.getFlattenedGuildIds()),
        D = M.length > 0 || f.length > 0,
        P = p.length > 0,
        L = a.useMemo(() => p.some((e) => null != e.premiumGuildSubscription), [p]),
        b = (0, i.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()),
        Z = (null == s ? void 0 : s.isPausedOrPausePending) === !0;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(r.oQ, { className: h.blockedPaymentsWarning }),
            (0, n.jsx)(N.Z, {
                hasGuildBoostSlots: P,
                hasAppliedGuildBoosts: L,
                isUserPremiumTier2: x,
                subscriptionIsPausedOrPausePending: Z
            }),
            (0, n.jsx)(A.Z, {
                hasAppliedGuildBoosts: L,
                isUserPremiumTier2: x,
                hasGuildAffinitiesOrInGuild: D,
                subscriptionIsPausedOrPausePending: Z
            }),
            !D && (0, n.jsx)(C.Z, {}),
            (null == s ? void 0 : s.isPaused)
                ? (0, n.jsx)(S.r, {
                      appliedGuildBoosts: b,
                      premiumSubscription: s
                  })
                : (0, n.jsx)(S.Z, {
                      guildBoostSlots: t,
                      premiumSubscription: s
                  }),
            (0, n.jsx)(O.Z, { guildBoostSlots: p }),
            (0, n.jsx)(m.Z, {
                hasAppliedGuildBoosts: L,
                subscriptionIsPausedOrPausePending: Z
            }),
            (0, n.jsx)(c.Z, {
                className: h.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, n.jsx)(o.Z, { cardClassName: h.boosterRecognitionCard }),
            (0, n.jsx)(l.Z, { className: h.faq })
        ]
    });
}
