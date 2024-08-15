n.d(t, {
  I: function() {
return a;
  },
  T: function() {
return s;
  }
});
var i = n(673125);

function a(e, t, n, i, a) {
  e.save(), e.beginPath(), e.fillStyle = i, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + a, 0, 2 * Math.PI), e.fill(), e.restore();
}

function s(e, t, n, a) {
  e.save();
  let s = i.Z.getAvatarImage(a);
  if (null == s)
return;
  let l = 20 * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, l / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(s, t - l / 2, n - l / 2, l, l), e.restore();
}