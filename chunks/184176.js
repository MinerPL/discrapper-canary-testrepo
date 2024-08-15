var s = n(735250);
n(470079);
var a = n(512722),
  r = n.n(a),
  i = n(442837),
  l = n(481060),
  o = n(100527),
  c = n(906732),
  d = n(963249),
  _ = n(594174),
  u = n(78839),
  E = n(823188),
  T = n(474936),
  I = n(981631),
  R = n(689938),
  C = n(653875);
t.Z = () => {
  var e;
  let t = (0, i.e7)([_.default], () => _.default.getCurrentUser());
  r()(t, 'UserStore.getCurrentUser() should not be null');
  let n = null !== (e = t.globalName) && void 0 !== e ? e : t.username,
a = (0, i.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
g = (null == a ? void 0 : a.trialId) === T.dO ? '1' : '2',
N = (0, c.ZP)([o.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
  return (0, s.jsxs)('div', {
className: C.banner,
children: [
  (0, s.jsx)(E.Cy, {
    text: R.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
    className: C.trialPill,
    colorOptions: E.VE.PREMIUM_TIER_2_WHITE_FILL
  }),
  (0, s.jsx)(l.Heading, {
    variant: 'heading-lg/extrabold',
    children: R.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_TITLE.format({
      displayName: n
    })
  }),
  (0, s.jsx)('div', {
    className: C.body,
    children: (0, s.jsx)(l.Text, {
      variant: 'text-md/medium',
      children: R.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BODY.format({
        duration: g
      })
    })
  }),
  (0, s.jsx)(l.Button, {
    onClick: () => {
      (0, d.Z)({
        initialPlanId: T.Xh.PREMIUM_MONTH_TIER_2,
        analyticsLocations: N.analyticsLocations,
        analyticsObject: {
          object: I.qAy.BUTTON_CTA
        }
      });
    },
    look: l.ButtonLooks.OUTLINED,
    color: l.ButtonColors.WHITE,
    children: R.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BUTTON_LABEL
  })
]
  });
};