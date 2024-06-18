"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(701488),
  r = n(981631);

function s(e) {
  return e.type === r.IIU.STREAMING && null != e.url && i.Fr.test(e.url)
}

function o(e) {
  return null != e && (Array.isArray(e) ? e.some(s) : s(e))
}