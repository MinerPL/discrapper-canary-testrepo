n.d(t, {
  g: function() {
return U;
  }
});
var i, s, a = n(735250);
n(470079);
var r = n(91192),
  l = n(442837),
  o = n(704215),
  c = n(481060),
  d = n(515753),
  u = n(605236),
  _ = n(594174),
  h = n(351402),
  E = n(78839),
  I = n(626135),
  m = n(74538),
  g = n(502087),
  p = n(647265),
  T = n(650032),
  S = n(104494),
  C = n(639119),
  f = n(655525),
  N = n(314684),
  A = n(52188),
  Z = n(248042),
  L = n(924540),
  v = n(649765),
  O = n(565626),
  R = n(701910),
  x = n(487980),
  b = n(474936),
  P = n(981631),
  M = n(921944),
  D = n(689938),
  y = n(941576);
let j = 'NitroTabButton';
(i = s || (s = {}))[i.BOGO_PROMOTION = 0] = 'BOGO_PROMOTION', i[i.TENURE_REWARD = 1] = 'TENURE_REWARD', i[i.NEW_PERKS_BADGE = 2] = 'NEW_PERKS_BADGE', i[i.DISCOUNT_OFFER = 3] = 'DISCOUNT_OFFER', i[i.TRIAL_OFFER = 4] = 'TRIAL_OFFER', i[i.LOCALIZED_PRICING = 5] = 'LOCALIZED_PRICING', i[i.REFERRAL_PROGRAM = 6] = 'REFERRAL_PROGRAM';
let U = e => {
  let t, n, i, {
  selected: s,
  route: U,
  locationState: G,
  ...k
} = e,
w = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
B = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
H = (0, m.Qo)(w, B),
V = (0, r.JA)('nitro'),
F = (0, C.N)(),
Y = (0, S.Ng)(),
W = (0, l.e7)([h.Z], () => h.Z.isLocalizedPromoEnabled) && null == F,
z = (0, Z.Vi)(),
K = (0, O.ZP)(),
q = (0, N.$_)(),
Q = (0, x.K)(j),
X = (0, l.e7)([g.Z], () => g.Z.getCreatedAtOverride()),
J = null != X ? X : null == w ? void 0 : w.createdAt,
$ = s || null != F || null != Y || z || K || null != q || H,
{
  enabled: ee
} = T._.useExperiment({
  location: j
}, {
  autoTrackExposure: !1
}),
et = ee && (null == F ? void 0 : F.trial_id) === b.a7,
en = (0, p.N9)({
  location: 'NitroTabButton',
  showTabForOtherReasons: $
});
  if (!($ = $ || null != w && null != J && Date.now() - J.getTime() > en))
return null;
  z ? (n = (0, a.jsx)(f.Z, {}), i = 0) : null != q ? (n = (0, a.jsx)(R.Z, {
copy: q
  }), i = 1) : K ? (n = (0, a.jsx)(R.Z, {}), i = 2) : null != Y ? (n = (0, a.jsx)(L.GN, {
userDiscount: Y,
isTabSelected: s,
includesAmountOff: !1
  }), i = 3) : null == F || et ? Q ? (n = (0, a.jsx)(v.Z, {
isSelected: s,
onSelect: () => (0, u.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
  dismissAction: M.L.TAKE_ACTION
})
  }), i = 6) : W && (n = (0, a.jsx)(A.k, {
entryPoint: A.U.PrivateMessages
  }), !s && (t = y.localizeBadge), i = 5) : (n = (0, a.jsx)(L.$H, {
trialOffer: F,
isTabSelected: s
  }), i = 4);
  let ei = (0, a.jsx)(d.Qj, {
selected: s,
route: U,
icon: c.NitroWheelIcon,
text: D.Z.Messages.PREMIUM,
locationState: G,
onClick: () => {
  I.default.track(P.rMx.NITRO_TAB_VISITED, {
    badge_decorator: i,
    has_premium: H
  });
},
...k,
...V,
className: t,
children: n
  });
  return Q ? (0, a.jsx)(v.E, {
children: ei
  }) : ei;
};