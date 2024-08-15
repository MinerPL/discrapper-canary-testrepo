n.d(t, {
  Z: function() {
return u;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(372444),
  r = n(267642),
  l = n(981631),
  o = n(474936),
  c = n(689938),
  d = n(991912);

function u(e) {
  let {
guild: t,
numSounds: n,
isOutOfSlots: u
  } = e, _ = t.premiumTier, I = (0, r.FZ)(_, t.id), E = o._k[_] - 2;
  if (null == I || _ === l.Eu4.TIER_3 || n < E)
return null;
  let T = u ? {
color: a.ButtonColors.GREEN,
look: a.ButtonLooks.FILLED,
text: c.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_CTA
  } : void 0;
  return (0, s.jsx)(i.Z, {
header: c.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER,
text: c.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPSELL_BANNER_TEXT.format({
  level: I,
  numAdditional: (0, r.Je)(I)
}),
headerColor: 'header-primary',
textColor: 'text-normal',
buttonProps: T,
guild: t,
analyticsLocation: {
  page: l.ZY5.GUILD_SETTINGS,
  section: l.jXE.GUILD_SETTINGS_SOUNDBOARD,
  object: l.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
  objectType: (0, r.ge)(I)
},
className: d.container
  });
}