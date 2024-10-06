n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    _ = n(28546),
    E = n(357355),
    f = n(98278),
    h = n(48125),
    p = n(104494),
    I = n(639119),
    m = n(165583),
    T = n(197115),
    S = n(631771),
    g = n(609218),
    A = n(210887),
    N = n(626135),
    O = n(176354),
    R = n(74538),
    v = n(543241),
    C = n(149203),
    L = n(981631),
    y = n(185923),
    D = n(474936),
    b = n(689938),
    M = n(145834);
t.Z = (e) => {
    var t, a;
    let P,
        { onLearnMore: U, onClose: w, channel: x, emojiDescriptor: G, pickerIntention: k, analyticsLocation: B, containerContext: F } = e,
        V = (0, o.e7)([A.Z], () => A.Z.theme) === L.BRd.LIGHT ? 'light' : 'dark',
        [H, Z] = i.useState(!1),
        Y = () => {
            (0, v.A3)(x), (0, f.z)(), U();
        },
        j = n(577391)('./img_premium_emoji_'.concat(V, '.svg')),
        W = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(V, '.png'),
        K = (0, I.N)(),
        z = (0, p.Ng)(),
        q = null != K || null != z,
        Q = (0, _.Iu)((e) => e.searchQuery),
        { analyticsLocations: X } = (0, d.ZP)(c.Z.EMOJI_PICKER),
        $ = S.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !q,
                disable: q
            }
        ),
        J = h.Z.useExperiment(
            { location: 'EmojiPickerPremiumUpsell' },
            {
                autoTrackExposure: null != K,
                disable: null == K
            }
        ),
        ee = $.enabled || J.enabled,
        et = $.addSocialProof;
    P = k === y.Hz.REACTION ? D.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == G ? D.cd.EMOJI_PICKER_FLOATING_UPSELL : G.subCategory === C.t0.TOP_GUILD_EMOJI ? D.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : G.subCategory === C.t0.NEWLY_ADDED_EMOJI ? D.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : D.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let en = null != G ? G.emoji : void 0,
        er = null != en && en.animated,
        ei = null != en && !O.ZP.isInternalEmojiForGuildId(en, null == x ? void 0 : x.getGuildId()),
        ea = null != en ? L.qAy.EMOJI : L.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    i.useEffect(() => {
        !ee &&
            N.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P,
                is_animated: er,
                is_external: ei,
                has_search_query: null != Q && '' !== Q,
                location: {
                    ...B,
                    object: ea
                },
                location_stack: X,
                sku_id: (0, R.Wz)(R.ZP.getSkuIdForPremiumType(D.p9.TIER_2))
            });
    }, [B, X, Q, er, ei, P, ea, ee]);
    let es = (0, o.e7)([E.Z], () => E.Z.affinities),
        eo = (0, o.e7)([E.Z], () => E.Z.hasFetched);
    i.useEffect(() => {
        !eo && u.MH();
    }, [eo]);
    let el = es.length > 1 && et;
    return ee
        ? (0, r.jsx)(g.Z, {
              containerContext: F,
              image: {
                  url: W,
                  width: 220,
                  height: 132
              },
              title: b.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE_V2,
              description: b.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_DESCRIPTION_V2,
              enableSocialProof: el,
              analyticsLocationSection: L.jXE.EMOJI_UPSELL_POPOUT,
              onClose: w,
              upsellViewedTrackingData: {
                  type: P,
                  is_external: ei,
                  location: {
                      ...B,
                      object: ea
                  },
                  location_stack: X,
                  sku_id: (0, R.Wz)(R.ZP.getSkuIdForPremiumType(D.p9.TIER_2)),
                  has_search_query: null != Q && '' !== Q,
                  is_animated: er
              }
          })
        : (0, r.jsxs)('div', {
              className: s()(M.premiumPromo, { [M.unifyTrialUpsell]: q }),
              children: [
                  (0, r.jsx)(l.Clickable, {
                      className: M.premiumPromoClose,
                      onClick: w,
                      children: b.Z.Messages.CLOSE
                  }),
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          q
                              ? (0, r.jsx)(m.ZP, {
                                    type: D.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: null !== (a = null == K ? void 0 : null === (t = K.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== a ? a : D.Si.TIER_2,
                                    onClose: w,
                                    trialOffer: K,
                                    discountOffer: z,
                                    children: b.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: Y })
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            className: M.premiumPromoImage,
                                            src: j
                                        }),
                                        (0, r.jsx)('div', {
                                            className: M.premiumPromoTitle,
                                            children: b.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                        }),
                                        (0, r.jsx)('div', {
                                            className: M.premiumPromoDescription,
                                            children: b.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: Y })
                                        })
                                    ]
                                }),
                          !q &&
                              (0, r.jsx)(T.Z, {
                                  subscriptionTier: D.Si.TIER_2,
                                  submitting: H,
                                  premiumModalAnalyticsLocation: {
                                      section: L.jXE.EMOJI_PICKER_POPOUT,
                                      object: L.qAy.BUTTON_CTA
                                  },
                                  size: l.Button.Sizes.SMALL,
                                  color: l.Button.Colors.GREEN,
                                  onClick: () => {
                                      Z(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      Z(!1), e && w();
                                  },
                                  buttonText: q ? b.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : b.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
                              })
                      ]
                  })
              ]
          });
};
