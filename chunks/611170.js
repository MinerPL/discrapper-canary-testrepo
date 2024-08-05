t.d(n, {
  a: function() {
return a;
  },
  r: function() {
return o;
  }
});
var l = t(591759),
  r = t(524444),
  i = t(231338);

function a(e) {
  let n = e.item.originalItem.media;
  return (0, r.Yi)({
...e,
alt: e.item.originalItem.description,
src: n.proxyUrl,
original: n.url,
placeholder: n.placeholder,
placeholderVersion: n.placeholderVersion,
renderForwardComponent: i.Vq
  });
}

function o(e) {
  let n = e.item.originalItem.media,
t = l.Z.toURLSafe(n.proxyUrl);
  return null == t ? null : (t.searchParams.append('format', 'jpeg'), (0, r.lV)({
...e,
poster: t.toString(),
alt: e.item.originalItem.description,
src: n.proxyUrl,
placeholder: n.placeholder,
placeholderVersion: n.placeholderVersion,
renderForwardComponent: i.Vq
  }));
}