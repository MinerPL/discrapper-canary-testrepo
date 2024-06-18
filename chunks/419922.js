"use strict";
n.d(t, {
  Co: function() {
    return L
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(920906),
  _ = n(442837),
  d = n(622535),
  c = n(481060),
  E = n(607070),
  I = n(134432),
  T = n(641749),
  h = n(153850),
  S = n(506071),
  f = n(453070),
  N = n(373228),
  A = n(378233),
  m = n(689938),
  O = n(680413);
let R = e => e.preventDefault(),
  C = {
    tension: 1100,
    friction: 40
  },
  p = {
    tension: 1600,
    friction: 60
  };

function g(e, t) {
  return r.cloneElement(e, {
    "data-type": "sticker",
    "data-id": t
  })
}

function L(e) {
  let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
  return m.Z.Messages.STICKER_A11Y_LABEL.format({
    stickerName: t
  })
}
let v = e => {
    let {
      children: t,
      hasError: n,
      isLoading: r,
      maskAsset: s,
      size: a,
      withLoadingIndicator: l = !0
    } = e, u = a >= 33;
    return (0, i.jsxs)("div", {
      className: o()(O.assetWrapper, {
        [O.assetWrapperMasked]: n || s
      }),
      style: {
        height: a,
        width: a
      },
      children: [n ? (0, i.jsxs)("div", {
        className: O.error,
        children: [(0, i.jsx)(T.Z, {
          className: O.errorIcon
        }), u && (0, i.jsx)(c.Text, {
          className: O.errorText,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: m.Z.Messages.STICKER_ASSET_LOAD_ERROR
        })]
      }) : t, l && r && (0, i.jsx)("div", {
        className: O.loadingIndicator
      })]
    })
  },
  D = e => {
    let {
      shouldAnimate: t,
      size: s,
      sticker: o,
      fileUri: a,
      assetData: u,
      isFocused: _,
      className: d,
      maskAsset: c,
      positionRef: E,
      withLoadingIndicator: T,
      onError: h
    } = e, S = r.useRef(null), f = r.useRef(null), [N, R] = r.useState(!0), [C, p] = r.useState(!1), D = r.useRef(!1);
    D.current = t && _;
    let M = null == a ? (0, A.Q6)(o) : a;
    return (l()(null != M, "Unable to determine sticker asset URL. Sticker ID: ".concat(o.id)), r.useEffect(() => {
      if (null == S.current || null == M) return;
      let e = Math.min(2, (0, I.x_)());
      S.current.width = s * e, S.current.height = s * e;
      let t = !1;
      return (async () => {
        let {
          default: e
        } = await n.e("21617").then(n.bind(n, 186952));
        null != S.current && (f.current = new e({
          canvas: S.current,
          animationId: o.id,
          assetUrl: M,
          assetData: u,
          onInitialDraw: () => {
            !t && R(!1)
          },
          onError: () => {
            !t && (R(!1), p(!0), null == h || h())
          }
        }), D.current && f.current.setState(!0))
      })(), () => {
        var e;
        null === (e = f.current) || void 0 === e || e.drop(), f.current = null, t = !0
      }
    }, [M, s, o.id, u, h]), r.useEffect(() => {
      var e;
      let n;
      !t && (n = 0), null === (e = f.current) || void 0 === e || e.setState(t && _, n)
    }, [o, t, _]), null == M) ? null : (0, i.jsx)("div", {
      role: "img",
      className: d,
      "aria-label": C ? m.Z.Messages.ERROR_LOADING_STICKER : L(o),
      ref: E,
      children: (0, i.jsx)(v, {
        hasError: C,
        isLoading: N,
        maskAsset: c,
        size: s,
        withLoadingIndicator: T,
        children: g((0, i.jsx)("canvas", {
          className: O.lottieCanvas,
          ref: S
        }), o.id)
      })
    })
  },
  M = e => {
    let {
      shouldAnimate: t,
      sticker: n,
      isFocused: s,
      size: a,
      className: l,
      maskAsset: u,
      positionRef: _,
      withLoadingIndicator: c,
      fileUri: E
    } = e, [I, T] = r.useState(!1), [h, S] = r.useState(!0), [f, N] = r.useState(!1), m = r.useRef(null), C = r.useRef(null), p = null != E ? E : (0, A.Q6)(n, {
      isPreview: !t || !I || !s,
      size: a
    }), D = r.useCallback(() => {
      S(!1)
    }, []), M = r.useCallback(() => {
      N(!0)
    }, []);
    return (r.useEffect(() => {
      if (null != m.current) {
        let {
          isVisible: e
        } = m.current;
        T(e)
      }
    }, []), r.useLayoutEffect(() => {
      var e;
      (null === (e = C.current) || void 0 === e ? void 0 : e.complete) === !0 && S(!1)
    }, []), null == p) ? null : (0, i.jsx)(d.$, {
      ref: m,
      onChange: T,
      threshold: .7,
      children: (0, i.jsx)("div", {
        className: o()(l, O.__invalid_pngImageWrapper),
        ref: _,
        children: (0, i.jsx)(v, {
          hasError: f,
          isLoading: h,
          maskAsset: u,
          size: a,
          withLoadingIndicator: c,
          children: g((0, i.jsx)("img", {
            className: O.pngImage,
            alt: L(n),
            src: p,
            draggable: !1,
            onError: M,
            onLoad: D,
            onContextMenu: R,
            ref: C
          }), n.id)
        })
      })
    })
  },
  P = e => {
    let {
      disableAnimation: t,
      enlargeScaleFactor: n,
      enlargeWithName: s,
      isInteracting: o,
      positionRef: a,
      size: l,
      sticker: d
    } = e, I = (0, _.e7)([E.Z], () => E.Z.useReducedMotion), T = r.useRef(null), S = {
      transform: "scale(".concat(I ? 1 : 1 / n, ")"),
      opacity: 0
    }, f = (0, u.useTransition)(o, {
      ref: T,
      from: S,
      enter: {
        transform: "scale(1)",
        opacity: 1
      },
      leave: S,
      config: C
    }), N = r.useRef(null), A = (0, u.useSpring)({
      ref: N,
      transform: o || I ? "translateY(0)" : "translateY(-25px)",
      opacity: o ? 1 : 0,
      config: p
    });
    return (0, u.useChain)(o ? [T, N] : [N, T], o ? [0, .0625] : [0, 0]), f((e, r) => r && (0, i.jsx)(h.W5, {
      className: O.positionedLayer,
      fixed: !0,
      align: "center",
      position: "center",
      targetRef: a,
      children: () => (0, i.jsxs)("div", {
        className: O.overlayWrapper,
        children: [(0, i.jsx)(u.animated.div, {
          className: O.overlayStickerWrapper,
          style: e,
          children: (0, i.jsx)(y, {
            className: O.__invalid_overlaySticker,
            disableAnimation: t,
            enlargeOnInteraction: !1,
            isInteracting: o,
            maskAsset: !1,
            sticker: d,
            size: Math.round(l * n),
            withLoadingIndicator: !1
          })
        }), s && (0, i.jsx)(u.animated.div, {
          className: O.overlayLabelWrapper,
          style: A,
          children: (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: O.overlayLabel,
            children: d.name
          })
        })]
      })
    }))
  },
  y = e => {
    let {
      isInteracting: t = !1,
      disableAnimation: n = !1,
      enlargeOnInteraction: s = !1,
      enlargeWithName: o = !0,
      enlargeScaleFactor: a = 1.55,
      maskAsset: l = !1,
      size: u,
      sticker: _,
      className: d,
      withLoadingIndicator: c,
      assetData: E,
      fileUri: I,
      onError: T
    } = e, h = (0, S.n)(), A = (0, f.t$)(t) && !n, m = r.useRef(null);
    if (null == _) return null;
    let O = _.format_type === N.u3.LOTTIE ? D : M;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(O, {
        shouldAnimate: A,
        isFocused: h,
        size: u,
        sticker: _,
        className: d,
        maskAsset: l,
        positionRef: m,
        withLoadingIndicator: c,
        assetData: E,
        fileUri: I,
        onError: T
      }), s && (0, i.jsx)(P, {
        disableAnimation: n,
        enlargeScaleFactor: a,
        enlargeWithName: o,
        isInteracting: t,
        positionRef: m,
        size: u,
        sticker: _
      })]
    }, "".concat(_.id, ",").concat(u))
  };
t.ZP = y