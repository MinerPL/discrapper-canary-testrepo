n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(553813),
  a = n.n(i),
  s = n(358085);
let r = {
  [s.PlatformTypes.WINDOWS]: {
nvidia: '>=397.93.0'
  }
};

function l(e) {
  let t = r[(0, s.getPlatform)()];
  if (null == t)
return !1;
  for (let n of Object.keys(e)) {
let i = e[n],
  s = t[n];
if (null == i || null == s || null != i.error)
  continue;
let r = function(e) {
  var t, n;
  return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
}(i);
if (!a().satisfies(r, s))
  return !0;
  }
  return !1;
}