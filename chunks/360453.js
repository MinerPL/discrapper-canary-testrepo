var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(949389),
  l = n(82950),
  o = n(434404),
  c = n(899667),
  d = n(267642),
  u = n(981631),
  _ = n(689938),
  E = n(571472);
t.Z = e => {
  let {
guild: t
  } = e, n = t.id, h = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t.id));
  return null == h || 0 >= (0, d._k)(h, n) ? null : (0, i.jsx)(l.Z, {
guild: t,
onDismissed: () => {
  (0, r.GO)(n);
},
onClick: () => {
  o.Z.open(n, u.pNK.GUILD_PREMIUM);
},
message: _.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE,
trackingSource: u.PsQ.GRACE_PERIOD_NOTICE,
type: u.vID.GUILD_BOOSTING_GRACE_PERIOD,
image: E,
cta: _.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE_BUTTON,
ctaColor: s.ButtonColors.PRIMARY
  });
};