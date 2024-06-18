"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(665443),
  o = n.n(s),
  a = n(39383),
  l = n.n(a),
  u = n(992774),
  _ = n(672784),
  d = n(369711),
  c = n(649754);

function E(e) {
  let {
    streamId: t,
    paused: n,
    onReady: s,
    onResize: a,
    className: E,
    ...I
  } = e, T = r.useRef(null), {
    current: h
  } = r.useRef(l()("media-engine-video-"));
  return r.useEffect(() => {
    let e = T.current;
    if (!n && null != e) {
      let n = !1,
        i = (t, i) => {
          !n && (null == s || s(), n = !0), (e.width !== t || e.height !== i) && (e.width = t, e.height = i, null == a || a({
            width: t,
            height: i
          }))
        },
        r = (0, u.zS)();
      if (null != r.addVideoOutputSink) return r.addVideoOutputSink(h, t, i), () => {
        r.removeVideoOutputSink(h, t)
      };
      {
        let n = function(e) {
          var t, n, i, r;
          let s = null === (r = window) || void 0 === r ? void 0 : null === (i = r.DiscordNative) || void 0 === i ? void 0 : null === (n = i.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
          return "canary" === s || "development" === s ? (0, d.m)(e) : (0, _.y)(e)
        }(e);
        if (null == n) return;
        return c.Z.addSink(t, T, e => {
          i(e.width, e.height), n.render(e)
        }), () => {
          c.Z.removeSink(t, T)
        }
      }
    }
  }, [t, n, a, s, h]), (0, i.jsx)("canvas", {
    id: h,
    className: o()("media-engine-video", E),
    ref: T,
    ...I
  })
}
E.defaultProps = {
  paused: !1
}