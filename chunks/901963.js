n(47120);
var r = n(735250),
  i = n(470079),
  a = n(913527),
  s = n.n(a),
  o = n(442837),
  l = n(433517),
  u = n(481060),
  c = n(355467),
  d = n(230711),
  _ = n(436774),
  E = n(78839),
  f = n(74538),
  h = n(543241),
  p = n(981631),
  m = n(474936),
  I = n(689938),
  T = n(192287);
let g = 'premiumRetentionEmojiPickerNotice',
  S = l.K.get(g);
t.Z = e => {
  let {
closePopout: t,
channel: n
  } = e, [a, A] = i.useState(!1), {
subscription: N,
hasFetchedSubscriptions: v
  } = (0, o.cj)([E.ZP], () => ({
subscription: E.ZP.getPremiumSubscription(),
hasFetchedSubscriptions: E.ZP.hasFetchedSubscriptions()
  }));
  if (i.useEffect(() => {
  !v && (0, c.jg)();
}, [v]), null == N || !(0, f.zV)(N.status) || a)
return null;
  let O = N.status === p.O0b.PAST_DUE ? (0, f.lY)(N).expiresDate : s()(N.currentPeriodStart).add(m.gh),
R = ''.concat(N.id, ':').concat(O.toISOString());
  if (S === R)
return null;
  let C = f.ZP.getPremiumType(N.planId) === m.p9.TIER_0 ? _.JX.PREMIUM_TIER_0 : f.ZP.getPremiumType(N.planId) === m.p9.TIER_1 ? _.JX.PREMIUM_TIER_1 : _.JX.PREMIUM_TIER_2;
  return (0, r.jsxs)('div', {
className: T.premiumRetentionNotice,
children: [
  (0, r.jsx)(u.NitroWheelIcon, {
    size: 'md',
    className: T.premiumRetentionNoticeIcon,
    color: C
  }),
  (0, r.jsxs)('div', {
    className: T.premiumRetentionNoticeContent,
    children: [
      (0, r.jsx)(u.Text, {
        variant: 'text-xs/normal',
        children: I.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
          planName: f.ZP.getDisplayPremiumType(N.planId),
          endsAt: O
        })
      }),
      (0, r.jsx)('div', {
        children: (0, r.jsx)(u.Anchor, {
          onClick: () => {
            (0, h.A3)(n), t(), d.Z.open(p.oAB.PREMIUM);
          },
          children: I.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
        })
      })
    ]
  }),
  (0, r.jsx)(u.Clickable, {
    onClick: () => {
      l.K.set(g, R), S = R, A(!0);
    },
    children: (0, r.jsx)(u.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: T.premiumRetentionNoticeClose
    })
  })
]
  });
};