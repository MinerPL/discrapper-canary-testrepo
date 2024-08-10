var s = n(735250);
n(470079);
var a = n(512722),
  r = n.n(a),
  i = n(442837),
  l = n(481060),
  o = n(594174),
  c = n(78839),
  d = n(823188),
  _ = n(474936),
  u = n(689938),
  E = n(9949);
t.Z = () => {
  var e;
  let t = (0, i.e7)([o.default], () => o.default.getCurrentUser());
  r()(t, 'UserStore.getCurrentUser() should not be null');
  let n = null !== (e = t.globalName) && void 0 !== e ? e : t.username,
a = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
T = (null == a ? void 0 : a.trialId) === _.dO ? '1' : '2';
  return (0, s.jsxs)('div', {
className: E.banner,
children: [
  (0, s.jsx)(d.Cy, {
    text: u.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
    className: E.trialPill,
    colorOptions: d.VE.PREMIUM_TIER_2_WHITE_FILL
  }),
  (0, s.jsx)(l.Heading, {
    variant: 'heading-lg/extrabold',
    children: u.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_TITLE.format({
      displayName: n
    })
  }),
  (0, s.jsx)('div', {
    className: E.body,
    children: (0, s.jsx)(l.Text, {
      variant: 'text-md/medium',
      children: u.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BODY.format({
        duration: T
      })
    })
  }),
  (0, s.jsx)(l.Button, {
    look: l.ButtonLooks.OUTLINED,
    color: l.ButtonColors.WHITE,
    children: u.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BUTTON_LABEL
  })
]
  });
};