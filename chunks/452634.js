"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(131704),
  r = n(592125),
  s = n(979651);

function o(e) {
  var t;
  let {
    channelId: n,
    userId: o,
    activity: a
  } = e, l = r.Z.getChannel(n), u = (null == a ? void 0 : a.session_id) == null || null != l && (0, i.Qm)(l.type) ? n : null === (t = s.Z.getVoiceStateForSession(o, null == a ? void 0 : a.session_id)) || void 0 === t ? void 0 : t.channelId;
  return null != u ? u : void 0
}