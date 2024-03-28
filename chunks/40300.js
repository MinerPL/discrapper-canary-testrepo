"use strict";
n.r(t), n.d(t, {
  VideoStreamFit: function() {
    return a
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("481060"),
  d = n("763520"),
  c = n("153066"),
  f = n("519887");
(l = a || (a = {})).CONTAIN = "contain", l.COVER = "cover";
let h = i.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: a,
    videoComponent: l,
    className: r,
    fit: h = "contain",
    mirror: m = !1,
    paused: p = !1,
    streamPreviewURL: E,
    videoSpinnerContext: C,
    userId: g
  } = e, [S, _] = i.useState(!0), [T] = i.useState(() => new d.VideoSpinnerTimer("VideoStream"));
  i.useEffect(() => {
    !p && (S ? T.onSpinnerStarted() : null != t && T.trackSpinnerDuration(C, g, t))
  }, [S, p, t, T, C, g]);
  let I = i.useCallback(() => {
    _(!1)
  }, []);
  return (0, s.jsxs)("div", {
    className: o()(f.wrapper, a),
    children: [null != t && (0, s.jsx)(l, {
      className: o()(f.video, (0, c.getClass)(f, "video", h), {
        [f.mirror]: m
      }, r),
      streamId: t,
      onResize: n,
      onReady: I,
      paused: p
    }), p ? null : (0, s.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: S
      }),
      children: S && (0, s.jsxs)(i.Fragment, {
        children: [null != E ? (0, s.jsx)("img", {
          src: E,
          alt: "",
          className: f.previewImage
        }) : (0, s.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, s.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, s.jsx)(u.Spinner, {
          className: f.spinner
        })]
      })
    })]
  })
});
t.default = h