"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("481369"),
  i = n("944103"),
  r = n("946050"),
  o = n("256413"),
  u = n("292853"),
  d = n("359565"),
  c = n("226027");
t.default = l.memo(function(e) {
  let {
    channel: t,
    narrow: n
  } = e, l = (0, o.default)(t), f = (0, s.default)(), {
    canRenderNotice: h,
    recordNoticeRender: m
  } = (0, i.default)(t);
  return t.isArchivedLockedThread() ? (0, a.jsx)(d.ArchivedLockedThreadNotice, {
    channel: t,
    narrow: n
  }) : t.isLockedThread() ? (0, a.jsx)(d.LockedThreadNotice, {
    channel: t,
    narrow: n
  }) : l && f.includes(c.ChatOverlays.OPT_IN_CHANNEL) ? (0, a.jsx)(u.default, {
    channel: t,
    narrow: n
  }) : h ? (0, a.jsx)(r.default, {
    channel: t,
    onChannelChange: m
  }) : null
})