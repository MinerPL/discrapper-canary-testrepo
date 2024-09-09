var r = n(735250);
n(470079);
var s = n(442837),
    i = n(481060),
    l = n(809206),
    o = n(597688),
    a = n(884697),
    c = n(18438),
    d = n(778825),
    u = n(957730),
    f = n(81245),
    m = n(921813),
    E = n(350327),
    p = n(687158),
    _ = n(706454),
    h = n(695346),
    I = n(265159),
    g = n(25990),
    v = n(594174),
    C = n(55935),
    x = n(74538),
    P = n(689938),
    Z = n(149441);
let A = (e) => {
        var t;
        let { effectIsOwned: n, pendingProfileEffectRecord: l, product: c, purchase: d } = e,
            u = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            m = (0, s.e7)([o.Z], () => o.Z.getProduct(null == l ? void 0 : l.skuId)),
            E = (0, s.e7)([_.default], () => _.default.locale),
            p = x.ZP.canUseCollectibles(u),
            h = (0, a.qS)(d),
            I = (0, a.G1)(c),
            g = !p && h,
            A = (null == d ? void 0 : d.expiresAt) != null ? (0, C.TD)(Date.now(), d.expiresAt) : null,
            N = (0, f.Mu)('ProfileEffectDescription', !I || p),
            S = T(g, I, p, N);
        return null != l
            ? (0, r.jsx)('div', {
                  className: n ? Z.effectDescriptionNoGradient : Z.effectDescriptionBorderWithGradient,
                  children: (0, r.jsxs)('div', {
                      className: Z.effectDescriptionContainer,
                      children: [
                          (0, r.jsx)(i.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: Z.effectName,
                              children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == m ? void 0 : m.name
                          }),
                          (0, r.jsx)(i.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: Z.effectDescription,
                              children: null != d ? d.summary : S
                          }),
                          null != A &&
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: Z.effectPurchasedAt,
                                  children: P.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: A.days.toString() })
                              }),
                          null != d &&
                              (0, r.jsxs)(i.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: Z.effectPurchasedAt,
                                  children: [
                                      P.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                          date: d.purchasedAt.toLocaleDateString(E, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != d.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('br', {}),
                                                  P.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
                                                      date: d.expiresAt.toLocaleDateString(E, {
                                                          minute: 'numeric',
                                                          hour: 'numeric',
                                                          day: 'numeric',
                                                          month: 'long',
                                                          year: 'numeric'
                                                      })
                                                  })
                                              ]
                                          })
                                  ]
                              }),
                          h &&
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: Z.effectPurchasedAt,
                                  children: P.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
                              })
                      ]
                  })
              })
            : null;
    },
    T = (e, t, n, r) => {
        if (e) return P.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED;
        if (t && n) return P.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM;
        if (t && !n) return r ? P.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_INLINE_UPSELL_DESCRIPTION : P.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER;
        return P.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
    };
t.Z = (e) => {
    var t;
    let { user: n, pendingProfileEffectRecord: i, canApplySelectedChange: o, product: a, purchase: f, guild: _ } = e,
        {
            pendingGlobalName: v,
            pendingNickname: C,
            pendingPronouns: P,
            pendingBio: T,
            pendingBanner: N,
            pendingAvatar: S,
            pendingAvatarDecoration: j,
            pendingThemeColors: R,
            pendingAccentColor: M
        } = (0, s.cj)([d.Z, g.Z], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != _ ? d.Z.getAllPending() : g.Z.getAllPending())
        })),
        L = x.ZP.isPremium(n),
        O = x.ZP.canUsePremiumProfileCustomization(n),
        y = (0, p.ZP)(n.id),
        b = !!(null == y ? void 0 : y.getPreviewBio(T).value),
        B = {
            user: n,
            guild: _,
            pendingGlobalName: v,
            pendingNickname: C,
            pendingPronouns: P,
            pendingBio: h.dN.useSetting() && null != T ? u.ZP.parse(void 0, T).content : T,
            pendingBanner: N,
            useLargeBanner: !0,
            pendingAvatar: S,
            pendingAvatarDecoration: j,
            pendingThemeColors: R,
            pendingAccentColor: M,
            pendingProfileEffectId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null,
            hideFakeActivity: b,
            canUsePremiumCustomization: O,
            onUpsellClick: I.Z,
            onAvatarChange: null != _ ? c.I5 : l.I5,
            onBannerChange: E.g_
        };
    return (0, r.jsxs)('div', {
        className: Z.previewContainer,
        children: [
            (0, r.jsx)(m.Z, {
                ...B,
                disabledInputs: !0,
                hideCustomStatus: !0
            }),
            !1,
            (0, r.jsx)(A, {
                effectIsOwned: o,
                pendingProfileEffectRecord: i,
                product: a,
                purchase: f,
                userIsPremium: L
            })
        ]
    });
};
