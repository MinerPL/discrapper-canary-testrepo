"use strict";
l.r(t), l.d(t, {
  useClipProtocolURL: function() {
    return s
  }
});
var a = l("470079"),
  n = l("579806");

function s(e) {
  return (0, a.useMemo)(() => null == n.default.clips.getClipProtocolURLFromPath ? null : n.default.clips.getClipProtocolURLFromPath(e.filepath), [e.filepath])
}