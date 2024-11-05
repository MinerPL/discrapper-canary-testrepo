var r = n(200651);
n(192379);
var i = n(119837),
    a = n(802433),
    s = n(831748);
t.Z = (e) => {
    var t, n, o, l;
    let { layerConfig: u, animationType: c, ticking: d, time: f, accessibilityLabel: _, hasPlayedThrough: h, setHasPlayedThrough: p, urlQueryString: m, maxLoops: g, loopEnd: E, bannerAdjustment: v } = e,
        I = !0;
    if ((!d && (I = !1), f < u.start && (I = !1), !u.loop && f > u.duration + u.start && (I = !1), c === a.Q.PERSISTENT && !h && null != g && f >= E && p(!0), u.loop && void 0 !== u.loopDelay && u.loopDelay > 0)) {
        let e = u.duration + u.loopDelay,
            t = Math.floor((f - u.start) / e);
        f - u.start - t * e > u.duration && (c === a.Q.INTERMITTENT && !h && null != g && t >= g && p(!0), (I = !1));
    }
    return I
        ? (0, r.jsx)('img', {
              src: null != m ? ''.concat(u.src, '?query=').concat(m) : u.src,
              className: s.effect,
              style: {
                  top: (null !== (o = null === (t = u.position) || void 0 === t ? void 0 : t.y) && void 0 !== o ? o : 0) - v,
                  left: null !== (l = null === (n = u.position) || void 0 === n ? void 0 : n.x) && void 0 !== l ? l : 0
              },
              alt: _
          })
        : (0, r.jsx)('img', {
              src: i.td,
              alt: _
          });
};
