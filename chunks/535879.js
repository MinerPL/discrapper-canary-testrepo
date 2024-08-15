n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(594174),
  l = n(74538),
  r = n(878349),
  o = n(689938);

function c(e) {
  let {
value: t,
labelText: n,
onChange: c,
onShowUpsell: u
  } = e, d = (0, a.e7)([s.default], () => s.default.getCurrentUser()), h = l.ZP.canUseFancyVoiceChannelReactions(d), m = '';
  return m = h ? t ? o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_ENABLED : o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_DISABLED : o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_UPSELL, (0, i.jsx)(r.Z, {
checked: t,
onChange: c,
labelText: n,
tooltipText: m,
iconAltText: o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TADA_ALT,
canToggle: h,
onClick: h ? () => {} : u
  });
}