n.d(t, {
    g: function () {
        return k;
    }
}),
    n(47120);
var i,
    a,
    s = n(735250);
n(470079);
var r = n(91192),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(515753),
    u = n(605236),
    _ = n(243778),
    E = n(819640),
    h = n(594174),
    m = n(351402),
    I = n(78839),
    g = n(626135),
    p = n(74538),
    T = n(502087),
    S = n(647265),
    C = n(650032),
    f = n(104494),
    N = n(639119),
    A = n(655525),
    v = n(314684),
    L = n(52188),
    Z = n(248042),
    R = n(924540),
    O = n(649765),
    x = n(565626),
    b = n(701910),
    P = n(938736),
    M = n(227140),
    D = n(474936),
    y = n(981631),
    j = n(921944),
    U = n(689938),
    G = n(54463);
let w = 'NitroTabButton';
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD');
let k = (e) => {
    let t,
        n,
        i,
        { selected: a, route: k, locationState: B, ...H } = e,
        V = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        F = (0, l.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        Y = (0, p.Qo)(V, F),
        W = (0, r.JA)('nitro'),
        z = (0, N.N)(),
        K = (0, f.Ng)(),
        q = (0, l.e7)([I.ZP], () => I.ZP.inReverseTrial()),
        Q = (0, l.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == z,
        X = (0, Z.Vi)(),
        J = (0, x.ZP)(),
        $ = (0, v.$_)(),
        ee = (0, P.Kn)(w),
        et = (0, P.vx)(w),
        en = (0, P.wG)(w),
        ei = (0, l.e7)([T.Z], () => T.Z.getCreatedAtOverride()),
        ea = (0, l.e7)([E.Z], () => E.Z.hasLayers()),
        es = null != ei ? ei : null == V ? void 0 : V.createdAt,
        er = a || null != z || null != K || X || et || en || J || null != $ || Y,
        { enabled: el } = C._.useExperiment({ location: w }, { autoTrackExposure: !1 }),
        eo = el && (null == z ? void 0 : z.trial_id) === D.a7,
        ec = (0, S.N9)({
            location: 'NitroTabButton',
            showTabForOtherReasons: er
        }),
        [ed, eu] = (0, _.US)(q ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(er = er || (null != V && null != es && Date.now() - es.getTime() > ec))) return null;
    et
        ? ((t = G.referralIncentive), (i = 7))
        : en
          ? ((n = (0, s.jsx)(b.Z, { copy: U.Z.Messages.REWARD })), (i = 8))
          : X
            ? ((n = (0, s.jsx)(A.Z, {})), (i = 0))
            : null != ed && ed === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
              ? ((n = (0, s.jsx)(M.Z, {
                    copy: U.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                    showStars: !1
                })),
                (i = 4))
              : null != $
                ? ((n = (0, s.jsx)(b.Z, { copy: $ })), (i = 1))
                : J
                  ? ((n = (0, s.jsx)(b.Z, {})), (i = 2))
                  : null != K
                    ? ((n = (0, s.jsx)(R.GN, {
                          userDiscount: K,
                          isTabSelected: a,
                          includesAmountOff: !1
                      })),
                      (i = 3))
                    : null == z || eo
                      ? ee
                          ? ((n = (0, s.jsx)(O.ZP, {
                                isSelected: a,
                                onSelect: () => (0, u.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: j.L.TAKE_ACTION })
                            })),
                            (i = 6))
                          : Q && ((n = (0, s.jsx)(L.k, { entryPoint: L.U.PrivateMessages })), !a && (t = G.localizeBadge), (i = 5))
                      : ((n = (0, s.jsx)(R.$H, {
                            trialOffer: z,
                            isTabSelected: a
                        })),
                        (i = 4));
    let e_ = (0, s.jsx)(d.Qj, {
        selected: a,
        route: k,
        icon: c.NitroWheelIcon,
        text: U.Z.Messages.PREMIUM,
        locationState: B,
        onClick: () => {
            g.default.track(y.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: Y
            }),
                et || en ? ((0, u.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: j.L.TAKE_ACTION }), en && (0, u.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: j.L.TAKE_ACTION })) : null != ed && eu(j.L.USER_DISMISS);
        },
        ...H,
        ...W,
        className: t,
        children: n
    });
    return ee ? (0, s.jsx)(O.Em, { children: e_ }) : et && !ea ? (0, s.jsx)(O.A7, { children: () => e_ }) : e_;
};
