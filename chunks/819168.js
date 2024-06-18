"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(306680),
  r = n(70956),
  s = n(709054);

function o(e) {
  if (null == e.threadMetadata) return 0;
  let t = e.threadMetadata.autoArchiveDuration * r.Z.Millis.MINUTE;
  return function(e) {
    var t;
    if (null == e.threadMetadata) return 0;
    let n = null !== (t = i.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
      r = s.default.extractTimestamp(n);
    return Math.max(r, null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0)
  }(e) + t
}