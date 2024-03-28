"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("594174"),
  i = n("74538"),
  r = n("878349"),
  o = n("689938");

function u(e) {
  let {
    value: t,
    labelText: n,
    onChange: u,
    onShowUpsell: d
  } = e, c = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser()), f = i.default.canUseFancyVoiceChannelReactions(c), h = "";
  return h = f ? t ? o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_ENABLED : o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_DISABLED : o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_UPSELL, (0, a.jsx)(r.default, {
    checked: t,
    onChange: u,
    labelText: n,
    tooltipText: h,
    iconAltText: o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TADA_ALT,
    canToggle: f,
    onClick: f ? () => {} : d
  })
}