n.d(t, {
  b: function() {
return r;
  }
});
var i = n(594174),
  a = n(709054);
let s = new Date('06/16/2020');

function r() {
  let e = i.default.getCurrentUser();
  return null != e && a.default.extractTimestamp(e.id) > s.getTime() && !e.isClaimed() && null == e.nsfwAllowed;
}