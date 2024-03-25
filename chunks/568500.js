"use strict";
n.r(t), n.d(t, {
  useGuildHasLiveChannelNotice: function() {
    return u
  }
});
var a = n("446674"),
  s = n("834052"),
  l = n("170183"),
  i = n("42203"),
  r = n("824650"),
  o = n("534222");

function u(e) {
  var t;
  let n = (0, l.default)(e),
    u = i.default.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
    d = (0, a.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(null == u ? void 0 : u.id), [u]),
    c = (0, o.useGuildActiveEvent)(e),
    {
      isStageNoticeHidden: f,
      isEventNoticeHidden: E
    } = (0, a.useStateFromStoresObject)([r.default], () => ({
      isStageNoticeHidden: r.default.isLiveChannelNoticeHidden({
        stageId: null == d ? void 0 : d.id
      }),
      isEventNoticeHidden: r.default.isLiveChannelNoticeHidden({
        eventId: null == c ? void 0 : c.id
      })
    }), [d, c]);
  if (null != c) return null != d ? !f : !E;
  return null != d && !f
}