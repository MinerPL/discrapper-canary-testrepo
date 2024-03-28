"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("724912"),
  a = n("15608"),
  s = n("518756"),
  i = n("554747"),
  r = n("981631");

function o(e) {
  var t;
  let n = (0, s.default)(null == e ? void 0 : e.id),
    o = (0, i.default)(null == e ? void 0 : e.id),
    {
      canSeeTopLevelEventsEntrypoint: u
    } = a.default.useExperiment({
      location: "Channel List",
      guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : r.EMPTY_STRING_SNOWFLAKE_ID
    }, {
      autoTrackExposure: !1
    }),
    d = (0, l.default)(null == e ? void 0 : e.id),
    c = null == e ? void 0 : e.hasFeature(r.GuildFeatures.COMMUNITY);
  return !d && ((c || u) && n || o.length > 0)
}