n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(695346),
  i = n(318661);

function a(e, t) {
  if ('undefined' == typeof Image)
return;
  let n = (0, i.Of)(e.user.id, t);
  if (null == n)
return;
  let a = r.QK.getSetting(),
o = n.getBannerURL({
  canAnimate: a,
  size: 480
});
  if (null != o)
new Image().src = o;
}