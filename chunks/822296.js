"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(872810),
  a = n(569545),
  l = n(592125),
  u = n(112560),
  _ = n(689938);
let d = n(340109);

function c(e) {
  let {
    stream: t,
    width: n,
    noArt: c = !1,
    selected: E = !1
  } = e, I = (0, s.e7)([l.Z], () => l.Z.getChannel(t.channelId));
  return r.useEffect(() => {
    (null == I ? void 0 : I.isGuildStageVoice()) && (0, o.aP)((0, a.V9)(t), !1)
  }, []), (0, i.jsx)(u.Z, {
    artURL: d,
    noArt: c,
    selected: E,
    size: (0, u.L)(n),
    header: _.Z.Messages.STREAM_ENDED,
    onCTAClick: () => (0, o.aP)((0, a.V9)(t)),
    callToAction: _.Z.Messages.CLOSE_STREAM
  })
}