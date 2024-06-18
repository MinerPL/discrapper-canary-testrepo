"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(594190),
  r = n(569545),
  s = n(199902),
  o = n(314897),
  a = n(158776),
  l = n(19780),
  u = n(979651),
  _ = n(709054),
  d = n(356659),
  c = n(981631),
  E = n(689938);

function I(e) {
  let {
    sourceName: t,
    sourceApplicationId: n
  } = function(e) {
    var t, n;
    if (null != e) {
      let {
        ownerId: t
      } = r.my(e);
      if (t !== o.default.getId()) {
        let e = a.Z.getActivities(t).find(e => e.type === c.IIU.PLAYING);
        return {
          sourceName: null == e ? void 0 : e.name,
          sourceApplicationId: null == e ? void 0 : e.application_id
        }
      }
    }
    let l = s.Z.getStreamerActiveStreamMetadata(),
      u = null == l ? void 0 : l.pid,
      _ = null != l ? null != u ? i.ZP.getGameForPID(u) : null : i.ZP.getVisibleGame();
    return {
      sourceName: null !== (t = null == l ? void 0 : l.sourceName) && void 0 !== t ? t : null == _ ? void 0 : _.name,
      sourceApplicationId: null !== (n = null == l ? void 0 : l.id) && void 0 !== n ? n : null == _ ? void 0 : _.id
    }
  }(e), I = l.Z.getChannelId(), T = [o.default.getId()];
  return null != I && (T = Object.keys(u.Z.getVoiceStatesForChannel(I))), {
    id: _.default.fromTimestamp(Date.now()),
    version: d.Bg,
    applicationName: null != t ? t : E.Z.Messages.CLIPS_UNKNOWN_SOURCE,
    applicationId: n,
    users: T,
    clipMethod: "manual",
    length: 0,
    thumbnail: ""
  }
}