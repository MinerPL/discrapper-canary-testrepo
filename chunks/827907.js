"use strict";
t.d(s, {
  EH: function() {
    return E
  },
  Mf: function() {
    return d
  },
  lL: function() {
    return _
  },
  t4: function() {
    return u
  }
});
var n = t(442837),
  i = t(592125),
  l = t(430824),
  a = t(700785),
  r = t(889369),
  o = t(981631),
  c = t(689938);

function d(e, s) {
  return (0, n.e7)([r.Z], () => r.Z.editedDefaultChannelIds.has(e) || null != s && r.Z.editedDefaultChannelIds.has(s))
}

function u(e, s) {
  return (0, n.e7)([r.Z], () => e === s || null != s && r.Z.editedDefaultChannelIds.has(s))
}

function E(e, s) {
  return (0, n.e7)([r.Z, i.Z], () => null != s && r.Z.editedDefaultChannelIds.has(s) ? c.Z.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY : a.Uu(o.Plq.VIEW_CHANNEL, i.Z.getChannel(e)) ? void 0 : c.Z.Messages.DEFAULT_CHANNELS_DISABLED_PRIVATE)
}

function _(e, s) {
  let t = (0, n.e7)([l.Z], () => {
      var t;
      return (null === (t = l.Z.getGuild(e)) || void 0 === t ? void 0 : t.rulesChannelId) === s
    }),
    a = (0, n.e7)([i.Z], () => {
      var e;
      return null === (e = i.Z.getChannel(s)) || void 0 === e ? void 0 : e.isGuildVocal()
    });
  return t ? c.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RULES_DISCOURAGED : a ? c.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_VOICE_TOOLTIP : void 0
}