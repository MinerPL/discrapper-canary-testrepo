"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(763472),
  o = n(647162),
  a = n(680686),
  l = n(131303);
async function u(e, t, u) {
  let {
    hasSpotifyAccount: _,
    activity: d,
    user: c
  } = e;
  (0, l.Z)(_) && null != d && null != d.sync_id && (await (0, o.KV)(), await (0, o.yp)().catch(e => ((0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("58690")]).then(n.bind(n, 841178));
    return t => (0, i.jsx)(e, {
      ...t
    })
  }), Promise.reject(e))), s.Z_(d, c.id), (0, a.Z)(t, c, d, u))
}