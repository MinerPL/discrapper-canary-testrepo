"use strict";
n.r(t), n.d(t, {
  useActiveEventOrStageInstanceChannel: function() {
    return i
  }
});
var a = n("170183"),
  s = n("42203"),
  l = n("534222");

function i(e) {
  var t;
  let n = (0, l.useFirstActiveEventChannel)(e),
    i = (0, a.default)(e),
    r = s.default.getChannel(null === (t = i[0]) || void 0 === t ? void 0 : t.id);
  return null != n ? n : r
}