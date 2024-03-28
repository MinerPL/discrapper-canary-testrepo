"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("569545"),
  l = n("102172"),
  s = n("981631"),
  i = n("689938");

function r(e, t, n, r) {
  return null == t || t.state === s.ApplicationStreamStates.ENDED || (0, a.encodeStreamKey)(t) !== (0, a.encodeStreamKey)(e) ? (0, l.getStreamCTAString)(r) : t.ownerId === n ? i.default.Messages.WATCH_STREAM_STREAMING : i.default.Messages.WATCH_STREAM_WATCHING
}