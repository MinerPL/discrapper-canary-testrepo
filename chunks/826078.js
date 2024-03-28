"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  i = a("803997"),
  r = a.n(i),
  s = a("392711"),
  u = a("399606"),
  o = a("84735"),
  d = a("481060"),
  c = a("393238"),
  m = a("98650"),
  f = a("451478"),
  v = a("786048"),
  p = a("897353"),
  h = a("810090"),
  x = a("917042"),
  C = a("20437"),
  E = a("356659"),
  g = a("689938"),
  N = a("867905");

function I(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    a = Math.floor(e % 60),
    l = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, l = l < 10 ? "0" + l : l, "".concat(t, ":").concat(a, ".").concat(l)
}

function _(e) {
  let t = g.default.Messages.DURATION_MINUTES.format({
      minutes: Math.floor(e / 60)
    }),
    a = g.default.Messages.DURATION_SECONDS.format({
      seconds: e % 60
    });
  return "".concat(t, " ").concat(a)
}
t.default = function(e) {
  var t, a, i, L, j, M;
  let {
    sourceURL: S
  } = e, {
    videoPlayerRef: T,
    cropData: b,
    setCropData: R
  } = (0, C.useEditModalContext)(), [y, A] = n.useState((M = !(null === (a = T.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), M)), w = n.useRef(null), [P, k] = n.useState(null), [D, O] = n.useState(), F = n.useRef(null), B = n.useRef(null), [U, H] = n.useState(0), [z, G] = n.useState(!1), [K, V] = n.useState(null);
  (0, m.default)(() => {
    var e;
    let t = null === (e = T.current) || void 0 === e ? void 0 : e.videoElement;
    null != t && U !== t.currentTime && H(t.currentTime)
  });
  let Y = n.useMemo(() => b.end - b.start, [b]);
  n.useEffect(() => {
    var e;
    let t = null === (e = T.current) || void 0 === e ? void 0 : e.videoElement,
      a = F.current,
      l = B.current;
    if (null == t || null == a || null == l) return;
    let n = (0, s.debounce)(A, E.CLIP_PLAYING_DEBOUNCE_MS),
      i = () => {
        k(null), G(!1), n.cancel(), n(!0)
      },
      r = () => {
        n.cancel(), n(!1)
      };
    return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
      t.removeEventListener("play", i), t.removeEventListener("pause", r)
    }
  }, [T]);
  let {
    ref: W,
    width: X = 0,
    height: q = 0
  } = (0, c.default)(), J = (0, u.useStateFromStores)([f.default], () => f.default.windowSize());
  n.useMemo(() => {
    let e = W.current;
    null != e && V(e.getBoundingClientRect())
  }, [J.width, J.height, X]);
  let Q = n.useRef(null),
    Z = n.useRef({}),
    $ = n.useCallback(e => {
      var t;
      let a = (0, s.clamp)(e, 0, b.end - E.MIN_CLIP_DURATION_SECONDS);
      R({
        ...b,
        start: a
      }), null === (t = T.current) || void 0 === t || t.seek(a)
    }, [b, R, T]),
    ee = n.useCallback(e => {
      var t, a;
      let l = null === (t = T.current) || void 0 === t ? void 0 : t.videoElement;
      if (null == l) return;
      let n = (0, s.clamp)(e, b.start + E.MIN_CLIP_DURATION_SECONDS, l.duration);
      R({
        ...b,
        end: n
      }), null === (a = T.current) || void 0 === a || a.seek(n)
    }, [b, R, T]),
    et = n.useCallback((e, t) => {
      var a, l;
      if (null == D) return;
      if (null == K) return null;
      let n = ((0, s.clamp)(e, K.left, K.right) - K.left) / K.width * D,
        i = (0, s.clamp)(n, 0, D),
        r = P;
      if (null == r && t && (r = i <= b.start ? "start" : i >= b.end ? "end" : "playhead", null === (a = T.current) || void 0 === a || a.pause(), k(r), G(y)), "start" === r) $(i);
      else if ("end" === r) ee(i);
      else if ("playhead" === r) {
        let e = (0, s.clamp)(i, b.start, b.end);
        null === (l = T.current) || void 0 === l || l.seek(e)
      }
    }, [D, K, P, b.start, b.end, T, y, $, ee]),
    ea = n.useCallback(e => {
      var t;
      let a = null === (t = T.current) || void 0 === t ? void 0 : t.videoElement;
      if (null == a) return;
      let l = (0, x.default)(a.duration, e.shiftKey),
        n = !1;
      switch (e.key) {
        case "ArrowLeft":
          n = !0, $(b.start - l);
          break;
        case "ArrowRight":
          n = !0, $(b.start + l)
      }
      n && (e.stopPropagation(), e.preventDefault())
    }, [T, $, b.start]),
    el = n.useCallback(e => {
      var t;
      let a = null === (t = T.current) || void 0 === t ? void 0 : t.videoElement;
      if (null == a) return;
      let l = (0, x.default)(a.duration, e.shiftKey),
        n = !1;
      switch (e.key) {
        case "ArrowLeft":
          n = !0, ee(b.end - l);
          break;
        case "ArrowRight":
          n = !0, ee(b.end + l)
      }
      n && (e.stopPropagation(), e.preventDefault())
    }, [T, ee, b.end]),
    en = n.useCallback(e => {
      et(e.clientX, !0)
    }, [et]),
    ei = n.useCallback(e => {
      et(e.clientX, !1)
    }, [et]),
    er = n.useCallback(() => {
      if (z) {
        var e;
        null === (e = T.current) || void 0 === e || e.play()
      }
      G(!1), k(null)
    }, [T, z]);
  n.useEffect(() => (document.addEventListener("mousemove", ei), document.addEventListener("mouseup", er), () => {
    document.removeEventListener("mousemove", ei), document.removeEventListener("mouseup", er)
  }), [ei, er]), n.useEffect(() => {
    (async function e() {
      var e;
      let t = W.current,
        a = w.current;
      if (null == t || null == a || null == D) return;
      t.height = q, t.width = X;
      let l = t.getContext("2d");
      if (null == l) return;
      l.fillStyle = "#000", l.fillRect(0, 0, X, q);
      let n = Math.ceil(a.videoWidth / a.videoHeight * q),
        i = Math.ceil(X / n),
        r = Q.current;
      if (null == r) return;
      r.width = n, r.height = q;
      let s = null == r ? void 0 : r.getContext("2d", {
        willReadFrequently: !0
      });
      if (null == s) return;
      let u = Z.current;
      if ((null === (e = u[i]) || void 0 === e ? void 0 : e.length) === i) {
        for (let e = 0; e < i; e++) l.putImageData(u[i][e], n * e, 0);
        return
      }
      for (let e = 0; e < i; e++) await new Promise(t => {
        a.onseeked = () => {
          l.drawImage(a, n * e, 0, n, q), s.drawImage(a, 0, 0, n, q);
          let r = s.getImageData(0, 0, n, q);
          null == u[i] && (u[i] = []), u[i][e] = r, t()
        }, a.currentTime = n / X * D * e
      })
    })()
  }, [X, q, W, D, Q]);
  let es = U - b.start,
    eu = null === (i = T.current) || void 0 === i ? void 0 : i.videoElement;
  return (0, l.jsx)("div", {
    className: N.centeringWrapper,
    children: (0, l.jsxs)("div", {
      className: N.timelineContainer,
      children: [(0, l.jsx)("div", {
        className: N.playPauseButtonWrapper,
        children: (0, l.jsx)(d.Clickable, {
          tabIndex: 0,
          onClick: () => {
            var e, t;
            return y ? null === (e = T.current) || void 0 === e ? void 0 : e.pause() : null === (t = T.current) || void 0 === t ? void 0 : t.play()
          },
          className: N.playPauseButton,
          children: y ? (0, l.jsx)(v.default, {
            width: 24,
            height: 24,
            className: N.playPauseIcon
          }) : (0, l.jsx)(p.default, {
            width: 24,
            height: 24,
            className: N.playPauseIcon
          })
        })
      }), (0, l.jsxs)("div", {
        className: r()(N.timeline, {
          [N.timelineDragging]: null != P
        }),
        onMouseDown: en,
        children: [(0, l.jsx)("canvas", {
          className: N.hiddenCanvas,
          ref: Q
        }), (0, l.jsx)("canvas", {
          className: N.timelineBackground,
          ref: W
        }), (0, l.jsx)(o.FocusRing, {
          children: (0, l.jsx)("div", {
            tabIndex: 0,
            ref: F,
            className: N.playhead,
            style: {
              left: null != eu ? "".concat(eu.currentTime / eu.duration * 100, "%") : 0
            }
          })
        }), (0, l.jsx)(h.default, {
          preload: "auto",
          onLoadedMetadata: function() {
            let e = w.current;
            if (null != e) {
              if (O(e.duration), 0 === b.start && (0 === b.end || b.end === e.duration)) {
                var t;
                null === (t = T.current) || void 0 === t || t.seek(e.duration / 2), H(e.duration / 2)
              }
              0 === b.end && R(t => ({
                ...t,
                end: e.duration
              }))
            }
          },
          className: N.timelineVideo,
          ref: w,
          src: S,
          muted: !0
        }), (0, l.jsxs)("div", {
          className: N.dragBox,
          style: {
            left: null != D ? "".concat(b.start / D * 100, "%") : "0",
            right: null != D ? "".concat((D - b.end) / D * 100, "%") : "0"
          },
          children: [(0, l.jsx)("div", {
            className: N.timePillContainer,
            children: (0, l.jsx)("div", {
              ref: B,
              className: N.timePillBackground,
              children: (0, l.jsxs)(d.Text, {
                variant: "text-sm/normal",
                className: N.timePillText,
                color: "always-white",
                children: [I(es), (0, l.jsx)("span", {
                  className: N.slashCharacter,
                  children: " / "
                }), I(Y)]
              })
            })
          }), (0, l.jsx)(o.FocusRing, {
            children: (0, l.jsx)("button", {
              className: r()(N.dragHandleLeft, {
                [N.dragging]: "start" === P
              }),
              onMouseDown: en,
              onKeyDown: ea,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": 0,
              "aria-valuenow": b.start,
              "aria-valuetext": _(b.start),
              "aria-valuemax": b.end - E.MIN_CLIP_DURATION_SECONDS,
              "aria-label": g.default.Messages.CLIPS_CROP_START,
              children: (0, l.jsx)("div", {
                className: N.cropLeftArrow
              })
            })
          }), (0, l.jsx)(o.FocusRing, {
            children: (0, l.jsx)("button", {
              className: r()(N.dragHandleRight, {
                [N.dragging]: "end" === P
              }),
              onMouseDown: en,
              onKeyDown: el,
              role: "slider",
              tabIndex: 0,
              "aria-valuemin": b.start + E.MIN_CLIP_DURATION_SECONDS,
              "aria-valuenow": b.end,
              "aria-valuetext": _(b.end),
              "aria-valuemax": null === (j = T.current) || void 0 === j ? void 0 : null === (L = j.videoElement) || void 0 === L ? void 0 : L.duration,
              "aria-label": g.default.Messages.CLIPS_CROP_END,
              children: (0, l.jsx)("div", {
                className: N.cropRightArrow
              })
            })
          })]
        })]
      })]
    })
  })
}