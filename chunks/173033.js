n.d(t, {
  Z: function() {
return a;
  }
});
var i = n(374470);

function a(e, t) {
  let n = e.offsetTop,
a = e.offsetParent;
  for (; null != a;) {
var s;
if (a === t || !(0, i.k)(a, HTMLElement))
  break;
n += null !== (s = a.offsetTop) && void 0 !== s ? s : 0, a = a.offsetParent;
  }
  return n;
}