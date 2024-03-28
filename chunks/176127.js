"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("442837"),
  r = n("435064"),
  o = n("569220");

function u() {
  let e = (0, i.useStateFromStoresArray)([r.default], () => {
    var e;
    let t = null === (e = r.default.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
    return null == t ? [] : r.default.getClips().slice(0, 4).filter(e => t.includes(e.id))
  });
  return (0, s.jsx)("div", {
    className: l()(o.thumbnailStack, {
      [o["height-1"]]: 1 === e.length,
      [o["height-2"]]: 2 === e.length,
      [o["height-3"]]: 3 === e.length,
      [o["height-max"]]: e.length >= 4
    }),
    children: Array.from({
      ...e,
      length: 4
    }).map((e, t) => null != e ? (0, s.jsx)("img", {
      alt: "",
      className: o.thumbnail,
      src: e.thumbnail
    }, e.id) : (0, s.jsx)("div", {}, "placeholder-".concat(t))).reverse()
  })
}