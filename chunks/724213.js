"use strict";
a.r(t), a.d(t, {
  hasNotSetUpChannelOptIn: function() {
    return c
  },
  optIntoAllChannelsForExistingMember: function() {
    return E
  },
  toggleShowAllChannels: function() {
    return f
  }
}), a("789020"), a("47120"), a("653041"), a("524437");
var l = a("549817");
a("581883");
var n = a("984933"),
  s = a("271383"),
  u = a("9156"),
  i = a("630388"),
  r = a("152376"),
  d = a("398758"),
  o = a("372897");

function c(e) {
  var t, a;
  let l = (0, d.isOptInEnabledForGuild)(e),
    n = null !== (a = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
    r = (0, i.hasFlag)(n, o.GuildMemberFlags.COMPLETED_ONBOARDING),
    c = u.default.getOptedInChannels(e).size > 0;
  return !l && !r && !c
}

function f(e) {
  if (c(e)) {
    E(e);
    return
  } {
    let t = (0, d.isOptInEnabledForGuild)(e);
    (0, r.setGuildOptIn)(e, !t)
  }
}

function E(e) {
  let {
    include: t = new Set,
    exclude: a = new Set
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = n.default.getChannels(e), u = [...s[0, n.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, n.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isThread() && !a.has(t.id)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t.id
  });
  t.forEach(e => u.push(e)), l.default.onboardExistingMember(e, new Set(u))
}