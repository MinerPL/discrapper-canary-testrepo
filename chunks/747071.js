n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(695346),
  i = n(131951),
  a = n(36703);

function o(e) {
  let t = function() {
var e;
let t = r.kU.getSetting();
return (0, a.P)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100;
  }();
  return Math.min(e * t * Math.min(i.Z.getOutputVolume() / 100, 1), 1);
}