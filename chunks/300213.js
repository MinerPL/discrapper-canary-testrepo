n.d(t, {
  m: function() {
return c;
  }
});
var i = n(442837),
  a = n(427679),
  s = n(517334),
  r = n(592125),
  l = n(151864),
  o = n(554747);

function c(e) {
  var t;
  let n = (0, s.ZP)(e),
c = r.Z.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
d = (0, i.e7)([a.Z], () => a.Z.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
u = (0, o.k5)(e),
{
  isStageNoticeHidden: _,
  isEventNoticeHidden: h
} = (0, i.cj)([l.Z], () => ({
  isStageNoticeHidden: l.Z.isLiveChannelNoticeHidden({
    stageId: null == d ? void 0 : d.id
  }),
  isEventNoticeHidden: l.Z.isLiveChannelNoticeHidden({
    eventId: null == u ? void 0 : u.id
  })
}), [
  d,
  u
]);
  if (null != u)
return null != d ? !_ : !h;
  return null != d && !_;
}