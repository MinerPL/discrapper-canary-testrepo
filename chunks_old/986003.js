"use strict";
l.r(t), l.d(t, {
  hasNotSetUpChannelOptIn: function() {
    return c
  },
  toggleShowAllChannels: function() {
    return h
  },
  optIntoAllChannelsForExistingMember: function() {
    return f
  }
}), l("702976"), l("222007"), l("424973"), l("151426");
var n = l("921031");
l("374363");
var a = l("923959"),
  s = l("26989"),
  i = l("282109"),
  r = l("568734"),
  d = l("629220"),
  o = l("512395"),
  u = l("657944");

function c(e) {
  var t, l;
  let n = (0, o.isOptInEnabledForGuild)(e),
    a = null !== (l = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== l ? l : 0,
    d = (0, r.hasFlag)(a, u.GuildMemberFlags.COMPLETED_ONBOARDING),
    c = i.default.getOptedInChannels(e).size > 0;
  return !n && !d && !c
}

function h(e) {
  if (c(e)) {
    f(e);
    return
  } {
    let t = (0, o.isOptInEnabledForGuild)(e);
    (0, d.setGuildOptIn)(e, !t)
  }
}

function f(e) {
  let {
    include: t = new Set,
    exclude: l = new Set
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = a.default.getChannels(e), i = [...s[0, a.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, a.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isThread() && !l.has(t.id)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t.id
  });
  t.forEach(e => i.push(e)), n.default.onboardExistingMember(e, new Set(i))
}