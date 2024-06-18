"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(763472),
  r = n(647162),
  s = n(680686),
  o = n(131303);
async function a(e, t, n) {
  let {
    hasSpotifyAccount: a,
    activity: l,
    user: u
  } = e;
  (0, o.Z)(a) && null != l && null != l.sync_id && (await (0, r.KV)(), i.hY(l, u.id), (0, s.Z)(t, u, l, n))
}