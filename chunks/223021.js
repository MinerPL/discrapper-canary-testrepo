n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(475525);
let i = {
LATIN12: r.latin12CompactTimeStamp,
LATIN24: r.latin24CompactTimeStamp,
ASIAN: r.asianCompactTimeStamp
  },
  a = /(AM|PM)$/;

function o(e) {
  return null != e.match(a) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}