"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  r = a("414456"),
  i = a.n(r),
  s = a("917351"),
  u = a("65597"),
  o = a("718776"),
  d = a("77078"),
  c = a("731898"),
  f = a("31695"),
  m = a("471671"),
  v = a("830837"),
  p = a("132755"),
  h = a("58608"),
  x = a("28388"),
  C = a("141210"),
  g = a("80028"),
  E = a("782340"),
  L = a("504835"),
  N = function(e) {
    var t, a, r, N, j, T;
    let {
      sourceURL: S
    } = e, {
      videoPlayerRef: _,
      cropData: b,
      setCropData: w
    } = (0, C.useEditModalContext)(), [R, A] = n.useState((T = !(null === (a = _.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), T)), y = n.useRef(null), [k, D] = n.useState(null), [P, O] = n.useState(), F = n.useRef(null), B = n.useRef(null), [U, H] = n.useState(0), [z, Z] = n.useState(!1), [V, G] = n.useState(null);
    (0, f.default)(() => {
      var e;
      let t = null === (e = _.current) || void 0 === e ? void 0 : e.videoElement;
      null != t && U !== t.currentTime && H(t.currentTime)
    });
    let K = n.useMemo(() => b.end - b.start, [b]);
    n.useEffect(() => {
      var e;
      let t = null === (e = _.current) || void 0 === e ? void 0 : e.videoElement,
        a = F.current,
        l = B.current;
      if (null == t || null == a || null == l) return;
      let n = (0, s.debounce)(A, g.CLIP_PLAYING_DEBOUNCE_MS),
        r = () => {
          D(null), Z(!1), n.cancel(), n(!0)
        },
        i = () => {
          n.cancel(), n(!1)
        };
      return t.addEventListener("play", r), t.addEventListener("pause", i), () => {
        t.removeEventListener("play", r), t.removeEventListener("pause", i)
      }
    }, [_]);
    let {
      ref: Y,
      width: W = 0,
      height: X = 0
    } = (0, c.default)(), q = (0, u.useStateFromStores)([m.default], () => m.default.windowSize());
    n.useMemo(() => {
      let e = Y.current;
      null != e && G(e.getBoundingClientRect())
    }, [q.width, q.height, W]);
    let J = n.useRef(null),
      Q = n.useRef({}),
      $ = n.useCallback(e => {
        var t;
        let a = (0, s.clamp)(e, 0, b.end - g.MIN_CLIP_DURATION_SECONDS);
        w({
          ...b,
          start: a
        }), null === (t = _.current) || void 0 === t || t.seek(a)
      }, [b, w, _]),
      ee = n.useCallback(e => {
        var t, a;
        let l = null === (t = _.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == l) return;
        let n = (0, s.clamp)(e, b.start + g.MIN_CLIP_DURATION_SECONDS, l.duration);
        w({
          ...b,
          end: n
        }), null === (a = _.current) || void 0 === a || a.seek(n)
      }, [b, w, _]),
      et = n.useCallback((e, t) => {
        var a, l;
        if (null == P) return;
        if (null == V) return null;
        let n = (0, s.clamp)(e, V.left, V.right),
          r = (n - V.left) / V.width * P,
          i = (0, s.clamp)(r, 0, P),
          u = k;
        if (null == u && t && (u = i <= b.start ? "start" : i >= b.end ? "end" : "playhead", null === (a = _.current) || void 0 === a || a.pause(), D(u), Z(R)), "start" === u) $(i);
        else if ("end" === u) ee(i);
        else if ("playhead" === u) {
          let e = (0, s.clamp)(i, b.start, b.end);
          null === (l = _.current) || void 0 === l || l.seek(e)
        }
      }, [P, V, k, b.start, b.end, _, R, $, ee]),
      ea = n.useCallback(e => {
        var t;
        let a = null === (t = _.current) || void 0 === t ? void 0 : t.videoElement;
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
      }, [_, $, b.start]),
      el = n.useCallback(e => {
        var t;
        let a = null === (t = _.current) || void 0 === t ? void 0 : t.videoElement;
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
      }, [_, ee, b.end]),
      en = n.useCallback(e => {
        et(e.clientX, !0)
      }, [et]),
      er = n.useCallback(e => {
        et(e.clientX, !1)
      }, [et]),
      ei = n.useCallback(() => {
        if (z) {
          var e;
          null === (e = _.current) || void 0 === e || e.play()
        }
        Z(!1), D(null)
      }, [_, z]);
    n.useEffect(() => (document.addEventListener("mousemove", er), document.addEventListener("mouseup", ei), () => {
      document.removeEventListener("mousemove", er), document.removeEventListener("mouseup", ei)
    }), [er, ei]), n.useEffect(() => {
      (async function e() {
        var e;
        let t = Y.current,
          a = y.current;
        if (null == t || null == a || null == P) return;
        t.height = X, t.width = W;
        let l = t.getContext("2d");
        if (null == l) return;
        l.fillStyle = "#000", l.fillRect(0, 0, W, X);
        let n = a.videoWidth / a.videoHeight,
          r = Math.ceil(X * n),
          i = Math.ceil(W / r),
          s = J.current;
        if (null == s) return;
        s.width = r, s.height = X;
        let u = null == s ? void 0 : s.getContext("2d", {
          willReadFrequently: !0
        });
        if (null == u) return;
        let o = Q.current;
        if ((null === (e = o[i]) || void 0 === e ? void 0 : e.length) === i) {
          for (let e = 0; e < i; e++) l.putImageData(o[i][e], r * e, 0);
          return
        }
        for (let e = 0; e < i; e++) await new Promise(t => {
          a.onseeked = () => {
            l.drawImage(a, r * e, 0, r, X), u.drawImage(a, 0, 0, r, X);
            let n = u.getImageData(0, 0, r, X);
            null == o[i] && (o[i] = []), o[i][e] = n, t()
          }, a.currentTime = r / W * P * e
        })
      })()
    }, [W, X, Y, P, J]);
    let es = U - b.start,
      eu = null === (r = _.current) || void 0 === r ? void 0 : r.videoElement;
    return (0, l.jsx)("div", {
      className: L.centeringWrapper,
      children: (0, l.jsxs)("div", {
        className: L.timelineContainer,
        children: [(0, l.jsx)("div", {
          className: L.playPauseButtonWrapper,
          children: (0, l.jsx)(d.Clickable, {
            tabIndex: 0,
            onClick: () => {
              var e, t;
              return R ? null === (e = _.current) || void 0 === e ? void 0 : e.pause() : null === (t = _.current) || void 0 === t ? void 0 : t.play()
            },
            className: L.playPauseButton,
            children: R ? (0, l.jsx)(v.default, {
              width: 24,
              height: 24,
              className: L.playPauseIcon
            }) : (0, l.jsx)(p.default, {
              width: 24,
              height: 24,
              className: L.playPauseIcon
            })
          })
        }), (0, l.jsxs)("div", {
          className: i(L.timeline, {
            [L.timelineDragging]: null != k
          }),
          onMouseDown: en,
          children: [(0, l.jsx)("canvas", {
            className: L.hiddenCanvas,
            ref: J
          }), (0, l.jsx)("canvas", {
            className: L.timelineBackground,
            ref: Y
          }), (0, l.jsx)(o.FocusRing, {
            children: (0, l.jsx)("div", {
              tabIndex: 0,
              ref: F,
              className: L.playhead,
              style: {
                left: null != eu ? "".concat(eu.currentTime / eu.duration * 100, "%") : 0
              }
            })
          }), (0, l.jsx)(h.default, {
            preload: "auto",
            onLoadedMetadata: function() {
              let e = y.current;
              if (null != e) {
                if (O(e.duration), 0 === b.start && (0 === b.end || b.end === e.duration)) {
                  var t;
                  null === (t = _.current) || void 0 === t || t.seek(e.duration / 2), H(e.duration / 2)
                }
                0 === b.end && w(t => ({
                  ...t,
                  end: e.duration
                }))
              }
            },
            className: L.timelineVideo,
            ref: y,
            src: S,
            muted: !0
          }), (0, l.jsxs)("div", {
            className: L.dragBox,
            style: {
              left: null != P ? "".concat(b.start / P * 100, "%") : "0",
              right: null != P ? "".concat((P - b.end) / P * 100, "%") : "0"
            },
            children: [(0, l.jsx)("div", {
              className: L.timePillContainer,
              children: (0, l.jsx)("div", {
                ref: B,
                className: L.timePillBackground,
                children: (0, l.jsxs)(d.Text, {
                  variant: "text-sm/normal",
                  className: L.timePillText,
                  color: "always-white",
                  children: [I(es), (0, l.jsx)("span", {
                    className: L.slashCharacter,
                    children: " / "
                  }), I(K)]
                })
              })
            }), (0, l.jsx)(o.FocusRing, {
              children: (0, l.jsx)("button", {
                className: i(L.dragHandleLeft, {
                  [L.dragging]: "start" === k
                }),
                onMouseDown: en,
                onKeyDown: ea,
                role: "slider",
                tabIndex: 0,
                "aria-valuemin": 0,
                "aria-valuenow": b.start,
                "aria-valuetext": M(b.start),
                "aria-valuemax": b.end - g.MIN_CLIP_DURATION_SECONDS,
                "aria-label": E.default.Messages.CLIPS_CROP_START,
                children: (0, l.jsx)("div", {
                  className: L.cropLeftArrow
                })
              })
            }), (0, l.jsx)(o.FocusRing, {
              children: (0, l.jsx)("button", {
                className: i(L.dragHandleRight, {
                  [L.dragging]: "end" === k
                }),
                onMouseDown: en,
                onKeyDown: el,
                role: "slider",
                tabIndex: 0,
                "aria-valuemin": b.start + g.MIN_CLIP_DURATION_SECONDS,
                "aria-valuenow": b.end,
                "aria-valuetext": M(b.end),
                "aria-valuemax": null === (j = _.current) || void 0 === j ? void 0 : null === (N = j.videoElement) || void 0 === N ? void 0 : N.duration,
                "aria-label": E.default.Messages.CLIPS_CROP_END,
                children: (0, l.jsx)("div", {
                  className: L.cropRightArrow
                })
              })
            })]
          })]
        })]
      })
    })
  };

function I(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    a = Math.floor(e % 60),
    l = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, l = l < 10 ? "0" + l : l, "".concat(t, ":").concat(a, ".").concat(l)
}

function M(e) {
  let t = E.default.Messages.DURATION_MINUTES.format({
      minutes: Math.floor(e / 60)
    }),
    a = E.default.Messages.DURATION_SECONDS.format({
      seconds: e % 60
    });
  return "".concat(t, " ").concat(a)
}