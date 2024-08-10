n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(70956),
  i = n(564990),
  a = n(353647);
let s = r.Z.Millis.MINUTE;

function o(e) {
  var t, n;
  let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!r || a.Z.isFetchingUserOutbox(e))
return;
  let o = null !== (n = null === (t = a.Z.getUserOutbox(e)) || void 0 === t ? void 0 : t.lastFetched) && void 0 !== n ? n : 0;
  if (!(Date.now() - o < s))
return (0, i.JX)(e);
}