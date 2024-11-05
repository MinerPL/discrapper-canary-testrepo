n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(809206),
    d = n(634894),
    u = n(100527),
    m = n(906732),
    h = n(335131),
    g = n(597688),
    p = n(1870),
    x = n(884697),
    S = n(175756),
    T = n(104494),
    C = n(639119),
    _ = n(211712),
    E = n(31590),
    f = n(81245),
    I = n(629654),
    N = n(53691),
    A = n(165583),
    b = n(197115),
    v = n(267717),
    j = n(350327),
    O = n(996073),
    R = n(25990),
    P = n(626135),
    D = n(74538),
    y = n(296810),
    B = n(433411),
    L = n(532432),
    Z = n(504983),
    F = n(134795),
    M = n(513901),
    k = n(451392),
    w = n(649700),
    U = n(981631),
    V = n(474936),
    G = n(526761),
    Y = n(388032),
    H = n(232335);
function z(e) {
    var t, n;
    let { user: r, isVisible: z, shouldShow: W } = e,
        K = D.ZP.isPremium(r),
        {
            pendingAvatar: q,
            pendingThemeColors: Q,
            tryItOutThemeColors: X,
            tryItOutAvatar: J,
            tryItOutBanner: $,
            tryItOutProfileEffectId: ee,
            tryItOutAvatarDecoration: et
        } = (0, a.cj)([R.Z], () => {
            let e = R.Z.getAllPending(),
                t = R.Z.getErrors(),
                n = R.Z.getAllTryItOut();
            return {
                ...e,
                ...n,
                errors: t
            };
        }),
        en = (0, S.Z)(ee),
        ei = s.useRef(null);
    (0, O.Z)(ei, G.Y_.TRY_IT_OUT);
    let { analyticsLocations: es, sourceAnalyticsLocations: er } = (0, m.ZP)(u.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [el, ea] = s.useState(Math.floor(Math.random() * _.J2.length)),
        eo = (e) => {
            if (e) {
                if (((0, c.I5)(J), (0, j.z5)(X), (0, j.ho)($), null != et)) {
                    let e = g.Z.getProduct(et.skuId);
                    null != e && (0, x.G1)(e) ? (0, h.fK)(e.skuId).then(() => (0, c.cV)(et)) : null != p.Z.getPurchase(et.skuId) && (0, c.cV)(et);
                }
                P.default.track(U.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: _.J2[el].presetName });
            }
        };
    s.useEffect(() => {
        if (!!z)
            P.default.track(U.rMx.PREMIUM_UPSELL_VIEWED, {
                type: V.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.ZY5.USER_SETTINGS },
                location_stack: er
            });
    }, [er, r, z]);
    let ec = (null === (n = (0, C.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === V.Si.TIER_2,
        ed = (0, T.Ng)(),
        eu = (0, T.Wp)(ed, V.Si.TIER_2),
        em = 'TryOutPremiumSection';
    (0, d.j)({
        location: em + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: em + ' auto off',
            autoTrackExposure: !1
        });
    let eh = (0, f.Mu)('TryOutPremiumSection'),
        { enabled: eg } = E.Z.useExperiment({ location: 'UserSettingsProfileCustomization' }, { autoTrackExposure: !1 });
    return W
        ? (0, i.jsx)(m.Gt, {
              value: es,
              children: (0, i.jsxs)(Z.Z, {
                  ref: ei,
                  className: H.tryItOutSection,
                  type: Z.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(y.Z, {
                          layoutClassName: H.tryItOutLayout,
                          previewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.NitroWheelIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: H.premiumIcon
                                  }),
                                  Y.intl.string(Y.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  eg &&
                                      (0, i.jsx)(I.Z, {
                                          selectedIndex: el,
                                          setSelectedIndex: ea
                                      }),
                                  (0, i.jsx)(w.Z, { user: r })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: H.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: 'heading-xl/extrabold',
                                              children: Y.intl.string(Y.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              className: H.description,
                                              variant: 'text-sm/normal',
                                              children: Y.intl.string(Y.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(k.Z, {
                                      className: H.customizationSection,
                                      user: r,
                                      pendingAvatar: null != J ? J : q,
                                      pendingColors: null != X ? X : Q,
                                      onThemeColorsChange: j.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(F.Z, {
                                      className: H.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != $,
                                      onBannerChange: j.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(L.Z, {
                                      className: H.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: j.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: Y.intl.string(Y.t['7z0D1d']),
                                      sectionTitle: Y.intl.string(Y.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      B.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: H.customizationSection,
                                          user: r,
                                          sectionTitle: Y.intl.string(Y.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      M.Z,
                                      {
                                          className: H.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: en,
                                          user: r,
                                          sectionTitle: Y.intl.string(Y.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !ec &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: l()({ [H.premiumPerksListTitle]: !eh }),
                                                  children: Y.intl.string(Y.t['smo74+'])
                                              }),
                                              !eh &&
                                                  (0, i.jsx)(b.Z, {
                                                      onSubscribeModalClose: eo,
                                                      subscriptionTier: V.Si.TIER_2,
                                                      className: H.premiumSubscribeButton,
                                                      size: o.Button.Sizes.MEDIUM,
                                                      buttonText: K ? Y.intl.string(Y.t.AfRWIy) : eu ? Y.intl.formatToPlainString(Y.t.bkQ4bG, { percent: null == ed ? void 0 : ed.discount.amount }) : Y.intl.string(Y.t.pj0XBA)
                                                  })
                                          ]
                                      })
                              ]
                          })
                      }),
                      eh &&
                          (0, i.jsx)(N.p, {
                              onSubscribeModalClose: eo,
                              className: H.floatingUpsell,
                              showUpsell: !0,
                              text: Y.intl.format(Y.t.TmfgIy, { onClick: () => (0, v.openPremiumTryItOutProfileUpsell)(eo) }),
                              button: Y.intl.string(Y.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      ec &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: H.premiumTier2Divider }),
                                  (0, i.jsx)(A.ZP, {
                                      type: V.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: V.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
