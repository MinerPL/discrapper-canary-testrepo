n.d(t, {
    g: function () {
        return X;
    }
}),
    n(47120);
var i,
    r,
    a = n(200651),
    l = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(704215),
    h = n(481060),
    m = n(515753),
    p = n(774078),
    g = n(927359),
    f = n(975298),
    _ = n(605236),
    E = n(243778),
    I = n(819640),
    C = n(594174),
    v = n(351402),
    S = n(78839),
    N = n(626135),
    T = n(74538),
    x = n(502087),
    b = n(657041),
    A = n(769415),
    Z = n(650032),
    y = n(767870),
    L = n(104494),
    R = n(639119),
    P = n(655525),
    O = n(314684),
    j = n(52188),
    D = n(346497),
    M = n(924540),
    w = n(474486),
    k = n(565626),
    U = n(976465),
    G = n(701910),
    B = n(938736),
    H = n(227140),
    V = n(474936),
    F = n(981631),
    z = n(921944),
    Y = n(388032),
    W = n(618226);
let K = 'NitroTabButton',
    q = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let X = (e) => {
    let t,
        n,
        i,
        { selected: r, route: s, locationState: X, ...Q } = e,
        J = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        $ = (0, d.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        [ee, et] = l.useState(!1),
        en = (0, T.Qo)(J, $),
        ei = (0, c.JA)('nitro'),
        er = (0, R.N)(),
        ea = (0, L.Ng)(),
        el = (0, d.e7)([S.ZP], () => S.ZP.inReverseTrial()),
        es = (null == er ? void 0 : er.trial_id) === V.jz,
        eo = (0, d.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == er,
        ec = (0, D.Vi)(),
        { enabled: ed } = (0, b.Z)();
    (0, p.Z)(new Date(2024, 10, 21), 1000, void 0, !ed);
    let eu = (0, k.ZP)(),
        eh = (0, O.$_)(),
        em = (0, U.V6)(),
        ep = (0, B.Kn)(K),
        eg = (0, B.vx)(K),
        ef = (0, B.wG)(K),
        e_ = (0, d.e7)([x.Z], () => x.Z.getCreatedAtOverride()),
        eE = (0, d.e7)([I.Z], () => I.Z.hasLayers()),
        { fractionalState: eI, endsAt: eC } = (0, f.Z)({ forceFetch: !0 }),
        ev = null != e_ ? e_ : null == J ? void 0 : J.createdAt,
        eS = r || null != er || null != ea || ec || eg || ef || eu || null != eh || null != em || en,
        { enabled: eN } = Z._.useExperiment({ location: K }, { autoTrackExposure: !1 }),
        { enabled: eT } = A.Z.useExperiment({ location: K }, { autoTrackExposure: !1 }),
        ex = eN && (null == er ? void 0 : er.trial_id) === V.a7,
        [eb, eA] = (0, E.US)(el ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eS = eS || (null != J && null != ev && Date.now() - ev.getTime() > q))) return null;
    eI !== V.a$.NONE &&
        ((i = 9),
        (n = (0, a.jsx)(y.Z, {
            className: '',
            endsAt: eC,
            messageStyle: g.a.SHORT_TIME,
            upperCase: !0
        }))),
        es
            ? ((i = 10),
              (n = (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(w.dX, {
                          isSelected: r,
                          trialOffer: er,
                          q4MarketingEnabled: eT
                      }),
                      eT &&
                          (0, a.jsx)('div', {
                              className: W.tabBackground,
                              children: (0, a.jsx)('img', {
                                  className: o()(W.tabBackgroundImage, { [W.tabBackgroundImageHovered]: ee }),
                                  src: 'https://cdn.discordapp.com/assets/content/b57054ec389f08b678de8863bca1e656c8239c114833667decac8bbc72e85d53.png',
                                  alt: ''
                              })
                          })
                  ]
              })))
            : eg
              ? ((t = W.referralIncentive), (i = 7))
              : ef
                ? ((n = (0, a.jsx)(G.Z, { copy: Y.intl.string(Y.t.jyYgZ2) })), (i = 8))
                : ec
                  ? ((n = (0, a.jsx)(P.Z, {})), (i = 0))
                  : null != eb && eb === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                    ? ((n = (0, a.jsx)(H.Z, {
                          copy: Y.intl.string(Y.t.HwUCnp),
                          showStars: !1
                      })),
                      (i = 4))
                    : null != eh
                      ? ((n = (0, a.jsx)(G.Z, { copy: eh })), (i = 1))
                      : null != em
                        ? ((n = (0, a.jsx)(G.Z, { copy: em })), (i = 1))
                        : eu
                          ? ((n = (0, a.jsx)(G.Z, {})), (i = 2))
                          : null != ea
                            ? ((n = (0, a.jsx)(M.GN, {
                                  userDiscount: ea,
                                  isTabSelected: r,
                                  includesAmountOff: !1
                              })),
                              (i = 3))
                            : null == er || ex
                              ? ep
                                  ? ((n = (0, a.jsx)(w.lH, {
                                        isSelected: r,
                                        onSelect: () => (0, _.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: z.L.TAKE_ACTION })
                                    })),
                                    (i = 6))
                                  : eo && ((n = (0, a.jsx)(j.k, { entryPoint: j.U.PrivateMessages })), !r && (t = W.localizeBadge), (i = 5))
                              : ((n = (0, a.jsx)(M.$H, {
                                    trialOffer: er,
                                    isTabSelected: r
                                })),
                                (i = 4));
    let eZ = (0, a.jsx)(m.Qj, {
        selected: r,
        route: s,
        icon: h.NitroWheelIcon,
        text: Y.intl.string(Y.t.Ipxkoq),
        locationState: X,
        onClick: () => {
            N.default.track(F.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: en
            }),
                eg || ef ? ((0, _.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: z.L.TAKE_ACTION }), ef && (0, _.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: z.L.TAKE_ACTION })) : null != eb && eA(z.L.USER_DISMISS);
        },
        onMouseEnter: () => {
            et(!0);
        },
        onMouseLeave: () => {
            et(!1);
        },
        ...Q,
        ...ei,
        className: t,
        children: n
    });
    return es && eT
        ? (0, a.jsx)(w.CI, {
              variant: w.j$.TRIAL_FOR_ALL,
              trialOffer: er,
              children: eZ
          })
        : ep
          ? (0, a.jsx)(w.CI, {
                variant: w.j$.REFERRAL_PROGRAM,
                children: eZ
            })
          : eg && !eE
            ? (0, a.jsx)(w.A7, { children: () => eZ })
            : eZ;
};
