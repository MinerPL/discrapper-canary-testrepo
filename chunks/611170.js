l.d(n, {
    a: function () {
        return a;
    },
    r: function () {
        return u;
    }
});
var t = l(591759),
    r = l(524444),
    i = l(231338);
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
function u(e) {
    let n = e.item.originalItem.media,
        l = t.Z.toURLSafe(n.proxyUrl);
    return null == l
        ? null
        : (l.searchParams.append('format', 'jpeg'),
          (0, r.lV)({
              ...e,
              poster: l.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              renderForwardComponent: i.Vq
          }));
}
