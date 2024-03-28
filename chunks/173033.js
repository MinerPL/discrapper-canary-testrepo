"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("374470");

function l(e, t) {
  let n = e.offsetTop,
    l = e.offsetParent;
  for (; null != l;) {
    var s;
    if (l === t || !(0, a.isElement)(l, HTMLElement)) break;
    n += null !== (s = l.offsetTop) && void 0 !== s ? s : 0, l = l.offsetParent
  }
  return n
}