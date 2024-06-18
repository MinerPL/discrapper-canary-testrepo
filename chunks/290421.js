"use strict";
n.d(t, {
  Z: function() {
    return _
  },
  i: function() {
    return l
  }
});
var i = n(399606),
  r = n(695346),
  s = n(246946),
  o = n(594174),
  a = n(689938);
let l = "quest_completed",
  u = "legacy_username";

function _(e) {
  var t;
  let n = r.R_.useSetting(),
    l = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
    _ = (0, i.e7)([s.Z], () => s.Z.hidePersonalInformation);
  if (null == e) return [];
  let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
  return null != l && l.id === e.userId && n && (d = d.filter(e => e.id !== u)), _ && (d = d.map(e => ({
    ...e,
    description: e.id === u ? a.Z.Messages.STREAMER_MODE_ENABLED : e.description
  }))), d
}