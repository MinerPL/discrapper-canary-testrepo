"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(822545);
let r = {
    LATIN12: i.latin12CompactTimeStamp,
    LATIN24: i.latin24CompactTimeStamp,
    ASIAN: i.asianCompactTimeStamp
  },
  s = /(AM|PM)$/;

function o(e) {
  return null != e.match(s) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN
}