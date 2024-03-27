"use strict";
n.r(t), n.d(t, {
  VideoStreamFit: function() {
    return a
  },
  default: function() {
    return m
  }
}), n("222007");
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("77078"),
  d = n("103723"),
  c = n("474293"),
  f = n("757182");
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
    videoSpinnerContext: g,
    userId: S
  } = e, [C, _] = i.useState(!0), [I] = i.useState(() => new d.VideoSpinnerTimer("VideoStream"));
  i.useEffect(() => {
    !p && (C ? I.onSpinnerStarted() : null != t && I.trackSpinnerDuration(g, S, t))
  }, [C, p, t, I, g, S]);
  let T = i.useCallback(() => {
    _(!1)
  }, []);
  return (0, s.jsxs)("div", {
    className: u(f.wrapper, a),
    children: [null != t && (0, s.jsx)(l, {
      className: u(f.video, (0, c.getClass)(f, "video", h), {
        [f.mirror]: m
      }, r),
      streamId: t,
      onResize: n,
      onReady: T,
      paused: p
    }), p ? null : (0, s.jsx)("div", {
      className: u(f.previewWrapper, {
        [f.loading]: C
      }),
      children: C && (0, s.jsxs)(i.Fragment, {
        children: [null != E ? (0, s.jsx)("img", {
          src: E,
          alt: "",
          className: f.previewImage
        }) : (0, s.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, s.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, s.jsx)(o.Spinner, {
          className: f.spinner
        })]
      })
    })]
  })
});
var m = h