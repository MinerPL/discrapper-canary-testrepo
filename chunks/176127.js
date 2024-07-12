n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(435064),
  o = n(142592);

function c() {
  let e = (0, r.Wu)([l.Z], () => {
var e;
let t = null === (e = l.Z.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
return null == t ? [] : l.Z.getClips().slice(0, 4).filter(e => t.includes(e.id));
  });
  return (0, i.jsx)('div', {
className: s()(o.thumbnailStack, {
  [o['height-1']]: 1 === e.length,
  [o['height-2']]: 2 === e.length,
  [o['height-3']]: 3 === e.length,
  [o['height-max']]: e.length >= 4
}),
children: Array.from({
  ...e,
  length: 4
}).map((e, t) => null != e ? (0, i.jsx)('img', {
  alt: '',
  className: o.thumbnail,
  src: e.thumbnail
}, e.id) : (0, i.jsx)('div', {}, 'placeholder-'.concat(t))).reverse()
  });
}