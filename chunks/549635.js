t.d(n, {
    D: function () {
        return h;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(124347),
    a = t(80966),
    o = t(524444),
    s = t(52824),
    u = t(956664),
    c = t(589530),
    d = t(591759),
    m = t(718263);
function h(e) {
    let n = d.Z.toURLSafe(e);
    return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
}
n.Z = i.memo(function (e) {
    let { media: n, obscured: t = !1, onContextMenu: i } = e,
        { width: d, height: f, url: p, proxyUrl: g, alt: _, type: x, maxWidth: C, maxHeight: S, ...v } = n,
        { width: E, height: L } = (0, u.zp)(null != d ? d : 0, null != f ? f : 0),
        y = (0, s.q)({
            proxyURL: g,
            url: p
        }),
        I = !(null == d || 0 === d || null == f || 0 === f);
    if ('VIDEO' === x && I && null != g) {
        var A;
        let e = h(g);
        if (null == e) return null;
        let l = null !== (A = n.renderLinkComponent) && void 0 !== A ? A : o.iT;
        return (0, r.jsx)(a.Z, {
            ...v,
            src: y,
            width: d,
            height: f,
            maxWidth: E,
            maxHeight: L,
            responsive: !0,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: l,
            autoPlay: !t,
            alt: _,
            onContextMenu: i
        });
    }
    if ('IMAGE' === x)
        return I
            ? (0, r.jsx)(l.ZP, {
                  ...v,
                  src: y,
                  width: d,
                  height: f,
                  shouldLink: !1,
                  maxWidth: E,
                  maxHeight: L,
                  animated: !t && n.animated,
                  autoPlay: !t,
                  alt: _,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: i,
                  responsive: !0
              })
            : (0, r.jsx)('img', {
                  src: y,
                  alt: _,
                  onContextMenu: i,
                  className: m.dimensionlessImage
              });
    return null;
});
