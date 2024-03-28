"use strict";
s.r(t), s.d(t, {
  useDisabledTooltip: function() {
    return E
  },
  useIsChecked: function() {
    return u
  },
  useIsDisabled: function() {
    return c
  },
  useTooltip: function() {
    return _
  }
});
var a = s("442837"),
  l = s("592125"),
  n = s("430824"),
  i = s("700785"),
  r = s("889369"),
  o = s("981631"),
  d = s("689938");

function u(e, t) {
  return (0, a.useStateFromStores)([r.default], () => r.default.editedDefaultChannelIds.has(e) || null != t && r.default.editedDefaultChannelIds.has(t))
}

function c(e, t) {
  return (0, a.useStateFromStores)([r.default], () => e === t || null != t && r.default.editedDefaultChannelIds.has(t))
}

function E(e, t) {
  return (0, a.useStateFromStores)([r.default, l.default], () => null != t && r.default.editedDefaultChannelIds.has(t) ? d.default.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY : i.canEveryoneRole(o.Permissions.VIEW_CHANNEL, l.default.getChannel(e)) ? void 0 : d.default.Messages.DEFAULT_CHANNELS_DISABLED_PRIVATE)
}

function _(e, t) {
  let s = (0, a.useStateFromStores)([n.default], () => {
      var s;
      return (null === (s = n.default.getGuild(e)) || void 0 === s ? void 0 : s.rulesChannelId) === t
    }),
    i = (0, a.useStateFromStores)([l.default], () => {
      var e;
      return null === (e = l.default.getChannel(t)) || void 0 === e ? void 0 : e.isGuildVocal()
    });
  return s ? d.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RULES_DISCOURAGED : i ? d.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_VOICE_TOOLTIP : void 0
}