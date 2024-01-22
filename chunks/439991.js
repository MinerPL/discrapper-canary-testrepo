"use strict";
let r;
n.r(t), n.d(t, {
  useOverlayPosition: function() {
    return C
  },
  useOverlayTrigger: function() {
    return A
  },
  OverlayContainer: function() {
    return q
  },
  DismissButton: function() {
    return eM
  },
  ariaHideOutside: function() {
    return eP
  },
  usePopover: function() {
    return eT
  },
  useModalOverlay: function() {
    return eO
  },
  Overlay: function() {
    return eR
  },
  useOverlayFocusContain: function() {
    return eI
  }
}), n("222007"), n("781738"), n("424973"), n("70102");
var i = n("884691"),
  o = n("290895"),
  s = n("181551"),
  a = n("780095"),
  c = n("495912"),
  u = n("817736"),
  d = n("46397"),
  l = n("678760");
let f = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
  },
  p = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  },
  h = {
    top: "left",
    left: "top"
  },
  g = {
    top: "height",
    left: "width"
  },
  b = {
    width: "totalWidth",
    height: "totalHeight"
  },
  v = {},
  m = "undefined" != typeof document && window.visualViewport;

function y(e, t, n, r, i) {
  let o = document.scrollingElement || document.documentElement,
    s = "hidden" === window.getComputedStyle(o).overflow ? 0 : r.scroll[e],
    a = r[g[e]],
    c = t - i - s,
    u = t + i - s + n;
  return c < 0 ? -c : u > a ? Math.max(a - u, -c) : 0
}

function x(e) {
  if (v[e]) return v[e];
  let [t, n] = e.split(" "), r = f[t] || "right", i = h[r];
  !f[n] && (n = "center");
  let o = g[r],
    s = g[i];
  return v[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: i,
    size: o,
    crossSize: s
  }, v[e]
}

function w(e, t, n, r, i, s, a, c, u, d) {
  let {
    placement: l,
    crossPlacement: f,
    axis: h,
    crossAxis: g,
    size: v,
    crossSize: m
  } = r, y = {};
  y[g] = e[g], "center" === f ? y[g] += (e[m] - n[m]) / 2 : f !== g && (y[g] += e[m] - n[m]), y[g] += s;
  let x = e[g] - n[m] + u + d,
    w = e[g] + e[m] - u - d;
  if (y[g] = (0, o.clamp)(y[g], x, w), l === h) {
    let n = c ? a[v] : t[b[v]];
    y[p[h]] = Math.floor(n - e[h] + i)
  } else y[h] = Math.floor(e[h] + e[v] + i);
  return y
}

function S(e, t, n, r, i, o) {
  let {
    placement: s,
    axis: a,
    size: c
  } = o;
  return s === a ? Math.max(0, n[a] - e[a] - e.scroll[a] + t[a] - r[a] - r[p[a]] - i) : Math.max(0, e[c] + e[a] + e.scroll[a] - t[a] - n[a] - n[c] - r[a] - r[p[a]] - i)
}

function k(e) {
  let {
    top: t,
    left: n,
    width: r,
    height: i
  } = e.getBoundingClientRect(), {
    scrollTop: o,
    scrollLeft: s,
    clientTop: a,
    clientLeft: c
  } = document.documentElement;
  return {
    top: t + o - a,
    left: n + s - c,
    width: r,
    height: i
  }
}

function _(e, t) {
  let n, r = window.getComputedStyle(e);
  if ("fixed" === r.position) {
    let {
      top: t,
      left: r,
      width: i,
      height: o
    } = e.getBoundingClientRect();
    n = {
      top: t,
      left: r,
      width: i,
      height: o
    }
  } else {
    n = k(e);
    let r = k(t),
      i = window.getComputedStyle(t);
    r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n
}

function E(e) {
  let t = window.getComputedStyle(e);
  return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
}
let M = new WeakMap,
  D = "undefined" != typeof document && window.visualViewport;

function C(e) {
  let {
    direction: t
  } = (0, s.useLocale)(), {
    arrowSize: n = 0,
    targetRef: r,
    overlayRef: a,
    scrollRef: c = a,
    placement: u = "bottom",
    containerPadding: d = 12,
    shouldFlip: l = !0,
    boundaryElement: f = "undefined" != typeof document ? document.body : null,
    offset: h = 0,
    crossOffset: g = 0,
    shouldUpdatePosition: b = !0,
    isOpen: v = !0,
    onClose: C,
    maxHeight: P,
    arrowBoundaryOffset: T = 0
  } = e, [A, R] = (0, i.useState)({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), I = [b, u, a.current, r.current, c.current, d, l, f, h, g, v, t, P, T, n], O = (0, i.useCallback)(() => {
    if (!1 === b || !v || !a.current || !r.current || !c.current || !f) return;
    let e = function(e) {
      var t, n;
      let r, {
          placement: i,
          targetNode: s,
          overlayNode: a,
          scrollNode: c,
          padding: u,
          shouldFlip: d,
          boundaryElement: l,
          offset: f,
          crossOffset: h,
          maxHeight: g,
          arrowSize: b = 0,
          arrowBoundaryOffset: v = 0
        } = e,
        M = a instanceof HTMLElement ? function(e) {
          let t = e.offsetParent;
          if (t && t === document.body && "static" === window.getComputedStyle(t).position && !E(t) && (t = document.documentElement), null == t)
            for (t = e.parentElement; t && !E(t);) t = t.parentElement;
          return t || document.documentElement
        }(a) : document.documentElement,
        D = M === document.documentElement,
        C = window.getComputedStyle(M).position,
        P = D ? k(s) : _(s, M);
      if (!D) {
        let {
          marginTop: e,
          marginLeft: t
        } = window.getComputedStyle(s);
        P.top += parseInt(e, 10) || 0, P.left += parseInt(t, 10) || 0
      }
      let T = k(a);
      let A = (t = a, {
        top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
        bottom: parseInt(r.marginBottom, 10) || 0,
        left: parseInt(r.marginLeft, 10) || 0,
        right: parseInt(r.marginRight, 10) || 0
      });
      return T.width += A.left + A.right, T.height += A.top + A.bottom,
        function(e, t, n, r, i, s, a, c, u, d, l, f, h, g, b) {
          var v, m, k, _, E, M;
          let D = x(e),
            {
              size: C,
              crossAxis: P,
              crossSize: T,
              placement: A,
              crossPlacement: R
            } = D,
            I = w(t, c, n, D, d, l, u, f, g, b),
            O = d,
            j = S(c, u, t, i, s + d, D);
          if (a && r[C] > j) {
            let e = x("".concat(p[A], " ").concat(R)),
              r = w(t, c, n, e, d, l, u, f, g, b);
            S(c, u, t, i, s + d, e) > j && (D = e, I = r, O = d)
          }
          let N = y(P, I[P], n[T], c, s);
          I[P] += N;
          let L = (v = I, m = c, k = u, _ = t, E = i, M = s, null != v.top ? Math.max(0, m.height + m.top + m.scroll.top - (k.top + v.top) - (E.top + E.bottom + M)) : Math.max(0, _.top + k.top - (m.top + m.scroll.top) - (E.top + E.bottom + M)));
          h && h < L && (L = h), n.height = Math.min(n.height, L), N = y(P, (I = w(t, c, n, D, O, l, u, f, g, b))[P], n[T], c, s), I[P] += N;
          let F = {},
            B = t[P] + .5 * t[T] - n[P],
            z = g / 2 + b,
            K = n[T] - g / 2 - b,
            V = t[P] - n[P] + g / 2,
            U = t[P] + t[T] - n[P] - g / 2,
            q = (0, o.clamp)(B, V, U);
          return F[P] = (0, o.clamp)(q, z, K), {
            position: I,
            maxHeight: L,
            arrowOffsetLeft: F.left,
            arrowOffsetTop: F.top,
            placement: D.placement
          }
        }(i, P, T, {
          top: (n = c).scrollTop,
          left: n.scrollLeft,
          width: n.scrollWidth,
          height: n.scrollHeight
        }, A, u, d, function(e) {
          let t = 0,
            n = 0,
            r = 0,
            i = 0,
            o = 0,
            s = 0,
            a = {};
          if ("BODY" === e.tagName) {
            var c, u;
            let o = document.documentElement;
            r = o.clientWidth, i = o.clientHeight, t = null !== (c = null == m ? void 0 : m.width) && void 0 !== c ? c : r, n = null !== (u = null == m ? void 0 : m.height) && void 0 !== u ? u : i, a.top = o.scrollTop || e.scrollTop, a.left = o.scrollLeft || e.scrollLeft
          } else({
            width: t,
            height: n,
            top: o,
            left: s
          } = k(e)), a.top = e.scrollTop, a.left = e.scrollLeft, r = t, i = n;
          return {
            width: t,
            height: n,
            totalWidth: r,
            totalHeight: i,
            scroll: a,
            top: o,
            left: s
          }
        }(l), "BODY" === l.tagName ? k(M) : _(M, l), f, h, !!C && "static" !== C, g, b, v)
    }({
      placement: function(e, t) {
        return "rtl" === t ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
      }(u, t),
      overlayNode: a.current,
      targetNode: r.current,
      scrollNode: c.current,
      padding: d,
      shouldFlip: l,
      boundaryElement: f,
      offset: h,
      crossOffset: g,
      maxHeight: P,
      arrowSize: n,
      arrowBoundaryOffset: T
    });
    Object.keys(e.position).forEach(t => a.current.style[t] = e.position[t] + "px"), a.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0, R(e)
  }, I);
  (0, o.useLayoutEffect)(O, I),
  function(e) {
    (0, o.useLayoutEffect)(() => (window.addEventListener("resize", e, !1), () => {
      window.removeEventListener("resize", e, !1)
    }), [e])
  }(O), (0, o.useResizeObserver)({
    ref: a,
    onResize: O
  });
  let j = (0, i.useRef)(!1);
  (0, o.useLayoutEffect)(() => {
    let e;
    let t = () => {
      j.current = !0, clearTimeout(e), e = setTimeout(() => {
        j.current = !1
      }, 500), O()
    };
    return null == D || D.addEventListener("resize", t), null == D || D.addEventListener("scroll", t), () => {
      null == D || D.removeEventListener("resize", t), null == D || D.removeEventListener("scroll", t)
    }
  }, [O]);
  let N = (0, i.useCallback)(() => {
    !j.current && C()
  }, [C, j]);
  return ! function(e) {
    let {
      triggerRef: t,
      isOpen: n,
      onClose: r
    } = e;
    (0, i.useEffect)(() => {
      if (!n || null === r) return;
      let e = e => {
        let n = e.target;
        if (!t.current || n instanceof Node && !n.contains(t.current)) return;
        let i = r || M.get(t.current);
        i && i()
      };
      return window.addEventListener("scroll", e, !0), () => {
        window.removeEventListener("scroll", e, !0)
      }
    }, [n, r, t])
  }({
    triggerRef: r,
    isOpen: v,
    onClose: C && N
  }), {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...A.position,
        maxHeight: A.maxHeight
      }
    },
    placement: A.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: A.arrowOffsetLeft,
        top: A.arrowOffsetTop
      }
    },
    updatePosition: O
  }
}
let P = [];

function T(e, t) {
  let {
    onClose: n,
    shouldCloseOnBlur: r,
    isOpen: o,
    isDismissable: s = !1,
    isKeyboardDismissDisabled: u = !1,
    shouldCloseOnInteractOutside: d
  } = e;
  (0, i.useEffect)(() => (o && P.push(t), () => {
    let e = P.indexOf(t);
    e >= 0 && P.splice(e, 1)
  }), [o, t]);
  let l = () => {
    P[P.length - 1] === t && n && n()
  };
  (0, c.useInteractOutside)({
    ref: t,
    onInteractOutside: s ? e => {
      (!d || d(e.target)) && (P[P.length - 1] === t && (e.stopPropagation(), e.preventDefault()), l())
    } : null,
    onInteractOutsideStart: e => {
      (!d || d(e.target)) && P[P.length - 1] === t && (e.stopPropagation(), e.preventDefault())
    }
  });
  let {
    focusWithinProps: f
  } = (0, c.useFocusWithin)({
    isDisabled: !r,
    onBlurWithin: e => {
      !(!e.relatedTarget || (0, a.isElementInChildOfActiveScope)(e.relatedTarget)) && (!d || d(e.relatedTarget)) && n()
    }
  });
  return {
    overlayProps: {
      onKeyDown: e => {
        "Escape" === e.key && !u && (e.stopPropagation(), e.preventDefault(), l())
      },
      ...f
    },
    underlayProps: {
      onPointerDown: e => {
        e.target === e.currentTarget && e.preventDefault()
      }
    }
  }
}

function A(e, t, n) {
  let r, {
      type: s
    } = e,
    {
      isOpen: a
    } = t;
  (0, i.useEffect)(() => {
    n && n.current && M.set(n.current, t.close)
  });
  "menu" === s ? r = !0 : "listbox" === s && (r = "listbox");
  let c = (0, o.useId)();
  return {
    triggerProps: {
      "aria-haspopup": r,
      "aria-expanded": a,
      "aria-controls": a ? c : null,
      onPress: t.toggle
    },
    overlayProps: {
      id: c
    }
  }
}
let R = "undefined" != typeof document && window.visualViewport,
  I = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
  O = 0;

function j() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      isDisabled: t
    } = e;
  (0, o.useLayoutEffect)(() => {
    if (!t) return 1 == ++O && (r = (0, o.isIOS)() ? function() {
      let e;
      let t = 0,
        n = window.pageXOffset,
        r = window.pageYOffset,
        i = (0, o.chain)(N(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), N(document.documentElement, "overflow", "hidden"), N(document.body, "marginTop", "-".concat(r, "px")));
      window.scrollTo(0, 0);
      let s = (0, o.chain)(L(document, "touchstart", n => {
        ((e = (0, o.getScrollParent)(n.target)) !== document.documentElement || e !== document.body) && (t = n.changedTouches[0].pageY)
      }, {
        passive: !1,
        capture: !0
      }), L(document, "touchmove", n => {
        if (!e || e === document.documentElement || e === document.body) {
          n.preventDefault();
          return
        }
        let r = n.changedTouches[0].pageY,
          i = e.scrollTop,
          o = e.scrollHeight - e.clientHeight;
        0 !== o && ((i <= 0 && r > t || i >= o && r < t) && n.preventDefault(), t = r)
      }, {
        passive: !1,
        capture: !0
      }), L(document, "touchend", e => {
        let t = e.target;
        B(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
          t.style.transform = ""
        }))
      }, {
        passive: !1,
        capture: !0
      }), L(document, "focus", e => {
        let t = e.target;
        B(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
          t.style.transform = "", R && (R.height < window.innerHeight ? requestAnimationFrame(() => {
            F(t)
          }) : R.addEventListener("resize", () => F(t), {
            once: !0
          }))
        }))
      }, !0), L(window, "scroll", () => {
        window.scrollTo(0, 0)
      }));
      return () => {
        i(), s(), window.scrollTo(n, r)
      }
    }() : function() {
      return (0, o.chain)(N(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), N(document.documentElement, "overflow", "hidden"))
    }()), () => {
      0 == --O && r()
    }
  }, [t])
}

function N(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r
  }
}

function L(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r)
  }
}

function F(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t;) {
    let t = (0, o.getScrollParent)(e);
    if (t !== document.documentElement && t !== document.body && t !== e) {
      let n = t.getBoundingClientRect().top,
        r = e.getBoundingClientRect().top;
      r > n + e.clientHeight && (t.scrollTop += r - n)
    }
    e = t.parentElement
  }
}

function B(e) {
  return e instanceof HTMLInputElement && !I.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}
let z = i.createContext(null);

function K(e) {
  let {
    children: t
  } = e, n = (0, i.useContext)(z), [r, o] = (0, i.useState)(0), s = (0, i.useMemo)(() => ({
    parent: n,
    modalCount: r,
    addModal() {
      o(e => e + 1), n && n.addModal()
    },
    removeModal() {
      o(e => e - 1), n && n.removeModal()
    }
  }), [n, r]);
  return i.createElement(z.Provider, {
    value: s
  }, t)
}

function V(e) {
  let t;
  let {
    modalProviderProps: n
  } = {
    modalProviderProps: {
      "aria-hidden": !!(t = (0, i.useContext)(z)) && t.modalCount > 0 || null
    }
  };
  return i.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...n
  })
}

function U(e) {
  return i.createElement(K, null, i.createElement(V, e))
}

function q(e) {
  let t = (0, d.useIsSSR)(),
    {
      portalContainer: n = t ? null : document.body,
      ...r
    } = e;
  if (i.useEffect(() => {
      if (null == n ? void 0 : n.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
    }, [n]), !n) return null;
  let o = i.createElement(U, r);
  return u.createPortal(o, n)
}
var H = {},
  G = {},
  W = {},
  Z = {},
  Y = {},
  X = {},
  $ = {},
  J = {},
  Q = {},
  ee = {},
  et = {},
  en = {},
  er = {},
  ei = {},
  eo = {},
  es = {},
  ea = {},
  ec = {},
  eu = {},
  ed = {},
  el = {},
  ef = {},
  ep = {},
  eh = {},
  eg = {},
  eb = {},
  ev = {},
  em = {},
  ey = {},
  ex = {},
  ew = {},
  eS = {},
  ek = {},
  e_ = {},
  eE = {};

function eM(e) {
  var t;
  let {
    onDismiss: n,
    ...r
  } = e;
  let a = (0, s.useLocalizedStringFormatter)((t = H) && t.__esModule ? t.default : t),
    c = (0, o.useLabels)(r, a.format("dismiss"));
  return i.createElement(l.VisuallyHidden, null, i.createElement("button", {
    ...c,
    tabIndex: -1,
    onClick: () => {
      n && n()
    }
  }))
}
H = {
  "ar-AE": G = {
    dismiss: "تجاهل"
  },
  "bg-BG": W = {
    dismiss: "Отхвърляне"
  },
  "cs-CZ": Z = {
    dismiss: "Odstranit"
  },
  "da-DK": Y = {
    dismiss: "Luk"
  },
  "de-DE": X = {
    dismiss: "Schlie\xdfen"
  },
  "el-GR": $ = {
    dismiss: "Απόρριψη"
  },
  "en-US": J = {
    dismiss: "Dismiss"
  },
  "es-ES": Q = {
    dismiss: "Descartar"
  },
  "et-EE": ee = {
    dismiss: "L\xf5peta"
  },
  "fi-FI": et = {
    dismiss: "Hylk\xe4\xe4"
  },
  "fr-FR": en = {
    dismiss: "Rejeter"
  },
  "he-IL": er = {
    dismiss: "התעלם"
  },
  "hr-HR": ei = {
    dismiss: "Odbaci"
  },
  "hu-HU": eo = {
    dismiss: "Elutas\xedt\xe1s"
  },
  "it-IT": es = {
    dismiss: "Ignora"
  },
  "ja-JP": ea = {
    dismiss: "閉じる"
  },
  "ko-KR": ec = {
    dismiss: "무시"
  },
  "lt-LT": eu = {
    dismiss: "Atmesti"
  },
  "lv-LV": ed = {
    dismiss: "Nerādīt"
  },
  "nb-NO": el = {
    dismiss: "Lukk"
  },
  "nl-NL": ef = {
    dismiss: "Negeren"
  },
  "pl-PL": ep = {
    dismiss: "Zignoruj"
  },
  "pt-BR": eh = {
    dismiss: "Descartar"
  },
  "pt-PT": eg = {
    dismiss: "Dispensar"
  },
  "ro-RO": eb = {
    dismiss: "Revocare"
  },
  "ru-RU": ev = {
    dismiss: "Пропустить"
  },
  "sk-SK": em = {
    dismiss: "Zrušiť"
  },
  "sl-SI": ey = {
    dismiss: "Opusti"
  },
  "sr-SP": ex = {
    dismiss: "Odbaci"
  },
  "sv-SE": ew = {
    dismiss: "Avvisa"
  },
  "tr-TR": eS = {
    dismiss: "Kapat"
  },
  "uk-UA": ek = {
    dismiss: "Скасувати"
  },
  "zh-CN": e_ = {
    dismiss: "取消"
  },
  "zh-TW": eE = {
    dismiss: "關閉"
  }
};
let eD = new WeakMap,
  eC = [];

function eP(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
    n = new Set(e),
    r = new Set,
    i = e => {
      for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(t);
      let t = e => {
          if (n.has(e) || r.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
          for (let t of n)
            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT
        },
        i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: t
        }),
        s = t(e);
      if (s === NodeFilter.FILTER_ACCEPT && o(e), s !== NodeFilter.FILTER_REJECT) {
        let e = i.nextNode();
        for (; null != e;) o(e), e = i.nextNode()
      }
    },
    o = e => {
      var t;
      let n = null !== (t = eD.get(e)) && void 0 !== t ? t : 0;
      ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), r.add(e), eD.set(e, n + 1))
    };
  eC.length && eC[eC.length - 1].disconnect(), i(t);
  let s = new MutationObserver(e => {
    for (let t of e)
      if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some(e => e.contains(t.target))) {
        for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e)
      }
  });
  s.observe(t, {
    childList: !0,
    subtree: !0
  });
  let a = {
    observe() {
      s.observe(t, {
        childList: !0,
        subtree: !0
      })
    },
    disconnect() {
      s.disconnect()
    }
  };
  return eC.push(a), () => {
    for (let e of (s.disconnect(), r)) {
      let t = eD.get(e);
      1 === t ? (e.removeAttribute("aria-hidden"), eD.delete(e)) : eD.set(e, t - 1)
    }
    a === eC[eC.length - 1] ? (eC.pop(), eC.length && eC[eC.length - 1].observe()) : eC.splice(eC.indexOf(a), 1)
  }
}

function eT(e, t) {
  let {
    triggerRef: n,
    popoverRef: r,
    isNonModal: i,
    isKeyboardDismissDisabled: s,
    ...a
  } = e, {
    overlayProps: c,
    underlayProps: u
  } = T({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !i,
    isKeyboardDismissDisabled: s
  }, r), {
    overlayProps: d,
    arrowProps: l,
    placement: f
  } = C({
    ...a,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: null
  });
  return j({
    isDisabled: i
  }), (0, o.useLayoutEffect)(() => {
    if (t.isOpen && !i && r.current) return eP([r.current])
  }, [i, t.isOpen, r]), {
    popoverProps: (0, o.mergeProps)(c, d),
    arrowProps: l,
    underlayProps: u,
    placement: f
  }
}
let eA = i.createContext(null);

function eR(e) {
  let t, n = (0, d.useIsSSR)(),
    {
      portalContainer: r = n ? null : document.body,
      isExiting: o
    } = e,
    [s, c] = (0, i.useState)(!1),
    l = (0, i.useMemo)(() => ({
      contain: s,
      setContain: c
    }), [s, c]);
  return r ? (t = e.disableFocusManagement ? i.createElement(eA.Provider, {
    value: l
  }, e.children) : i.createElement(eA.Provider, {
    value: l
  }, i.createElement(a.FocusScope, {
    restoreFocus: !0,
    contain: s && !o
  }, e.children)), u.createPortal(t, r)) : null
}

function eI() {
  let e = (0, i.useContext)(eA),
    t = null == e ? void 0 : e.setContain;
  (0, o.useLayoutEffect)(() => {
    null == t || t(!0)
  }, [t])
}

function eO(e, t, n) {
  let {
    overlayProps: r,
    underlayProps: s
  } = T({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, n);
  return j({
    isDisabled: !t.isOpen
  }), eI(), (0, i.useEffect)(() => {
    if (t.isOpen) return eP([n.current])
  }, [t.isOpen, n]), {
    modalProps: (0, o.mergeProps)(r),
    underlayProps: s
  }
}