"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("399606"),
  a = n("430824"),
  s = n("971130"),
  i = n("956829"),
  r = n("981631");

function o(e) {
  let {
    guildId: t
  } = e, n = i.CommunityEndlessInvitesExperiment.useExperiment({
    guildId: null != t ? t : r.EMPTY_STRING_SNOWFLAKE_ID,
    location: "6798be_2"
  }), o = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(t));
  return null != t && function(e) {
    var t;
    let {
      guild: n,
      experimentConfig: l
    } = e, {
      defaultInvitesToNeverExpire: a
    } = null != l ? l : i.CommunityEndlessInvitesExperiment.getCurrentConfig({
      guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : r.EMPTY_STRING_SNOWFLAKE_ID,
      location: "6798be_1"
    });
    if ((null == n ? void 0 : n.hasFeature(r.GuildFeatures.HUB)) === !0 || (null == n ? void 0 : n.hasFeature(r.GuildFeatures.COMMUNITY)) === !0 && a) return s.default.INVITE_OPTIONS_FOREVER.value
  }({
    guild: o,
    experimentConfig: n
  })
}