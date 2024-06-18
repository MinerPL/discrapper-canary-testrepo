"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(372444),
  a = t(267642),
  r = t(981631),
  o = t(474936),
  c = t(689938),
  d = t(865656);

function u(e) {
  let {
    guild: s,
    numSounds: t,
    isOutOfSlots: u
  } = e, E = s.premiumTier, _ = (0, a.FZ)(E, s.id), I = o._k[E] - 2;
  if (null == _ || E === r.Eu4.TIER_3 || t < I) return null;
  let T = u ? {
    color: i.ButtonColors.GREEN,
    look: i.ButtonLooks.FILLED,
    text: c.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_CTA
  } : void 0;
  return (0, n.jsx)(l.Z, {
    header: c.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER,
    text: c.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPSELL_BANNER_TEXT.format({
      level: _,
      numAdditional: (0, a.Je)(_)
    }),
    headerColor: "header-primary",
    textColor: "text-normal",
    buttonProps: T,
    guild: s,
    analyticsLocation: {
      page: r.ZY5.GUILD_SETTINGS,
      section: r.jXE.GUILD_SETTINGS_SOUNDBOARD,
      object: r.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, a.ge)(_)
    },
    className: d.container
  })
}