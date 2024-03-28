"use strict";
n.r(t), n.d(t, {
  getActivityGuildSuggestion: function() {
    return c
  },
  useSelectGuildOptions: function() {
    return o
  }
});
var s = n("470079"),
  i = n("442837"),
  a = n("592125"),
  l = n("944486"),
  u = n("914010"),
  r = n("771845");

function c() {
  var e;
  let {
    allowGdmActivityChannelSuggestion: t
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    allowGdmActivityChannelSuggestion: !1
  }, n = l.default.getVoiceChannelId(), s = a.default.getChannel(n);
  if (null != s && null != s.guild_id) return s.guild_id;
  if (null == s || !t) return null !== (e = u.default.getLastSelectedGuildId()) && void 0 !== e ? e : r.default.getFlattenedGuildIds()[0]
}

function o() {
  let e = (0, i.useStateFromStores)([r.default], () => r.default.getFlattenedGuildIds());
  return s.useMemo(() => e.map(e => ({
    label: e,
    value: e
  })), [e])
}