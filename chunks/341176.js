t.d(n, {
    D: function () {
        return _;
    },
    Z: function () {
        return p;
    }
});
var a = t(200651),
    r = t(120356),
    i = t.n(r),
    l = t(524444),
    o = t(52824),
    s = t(956664),
    u = t(589530),
    c = t(591759),
    d = t(124347),
    f = t(80966),
    h = t(519817);
let _ = {
    DEFAULT: null,
    CONTAIN: h.contain,
    SCALE_DOWN: h.scaleDown
};
function p(e) {
    let { media: n, fit: t = _.DEFAULT, obscured: r = !1, onContextMenu: p } = e,
        { width: m, height: C, url: E, proxyUrl: g, alt: L, type: S, maxWidth: x, maxHeight: v, ...A } = n,
        { width: O, height: b } = (0, s.zp)(null != m ? m : 0, null != C ? C : 0),
        R = (0, o.q)({
            proxyURL: g,
            url: E
        }),
        N = !(null == m || 0 === m || null == C || 0 === C);
    if ('VIDEO' === S && N && null != g) {
        var D;
        let e = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n ? null : (n.searchParams.append('format', 'webp'), n.toString());
        })(g);
        if (null == e) return null;
        let t = null !== (D = n.renderLinkComponent) && void 0 !== D ? D : l.iT;
        return (0, a.jsx)(f.Z, {
            ...A,
            src: R,
            width: m,
            height: C,
            maxWidth: O,
            maxHeight: b,
            poster: e,
            naturalWidth: m,
            naturalHeight: C,
            volume: u.FC,
            autoMute: u.rs,
            onVolumeChange: u.jA,
            onMute: u.Zj,
            renderLinkComponent: t,
            autoPlay: !r,
            alt: L,
            onContextMenu: p
        });
    }
    if ('IMAGE' === S)
        return N
            ? (0, a.jsx)(d.ZP, {
                  ...A,
                  imageClassName: i()(h.slide, t),
                  src: R,
                  width: m,
                  height: C,
                  shouldLink: !1,
                  maxWidth: O,
                  maxHeight: b,
                  animated: !r && n.animated,
                  autoPlay: !r,
                  alt: L,
                  zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                  onContextMenu: p
              })
            : (0, a.jsx)('img', {
                  src: R,
                  alt: L,
                  className: i()(h.slide, t),
                  onContextMenu: p
              });
    return null;
}
