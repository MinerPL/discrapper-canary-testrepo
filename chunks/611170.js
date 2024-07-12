n.d(l, {
  a: function() {
return a;
  },
  r: function() {
return s;
  }
});
var t = n(591759),
  i = n(524444),
  r = n(231338);

function a(e) {
  let l = e.item.originalItem.media;
  return (0, i.Yi)({
...e,
alt: e.item.originalItem.description,
src: l.proxyUrl,
original: l.url,
placeholder: l.placeholder,
placeholderVersion: l.placeholderVersion,
renderForwardComponent: r.Vq
  });
}

function s(e) {
  let l = e.item.originalItem.media,
n = t.Z.toURLSafe(l.proxyUrl);
  return null == n ? null : (n.searchParams.append('format', 'jpeg'), (0, i.lV)({
...e,
poster: n.toString(),
alt: e.item.originalItem.description,
src: l.proxyUrl,
placeholder: l.placeholder,
placeholderVersion: l.placeholderVersion,
renderForwardComponent: r.Vq
  }));
}