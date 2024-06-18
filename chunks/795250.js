"use strict";
let r;
n.d(t, {
  Bq: function() {
    return eL
  },
  IB: function() {
    return ep
  },
  NE: function() {
    return eP
  },
  RP: function() {
    return ek
  },
  Sv: function() {
    return eR
  },
  U4: function() {
    return eM
  },
  Xj: function() {
    return eT
  },
  aV: function() {
    return eI
  },
  tN: function() {
    return el
  }
});
var i = n(53786),
  a = n(519313),
  o = n(588016),
  s = n(993330),
  u = n(119380),
  c = n(230874),
  l = n(643586),
  d = n(676730),
  f = n(113404),
  p = n(837692),
  h = n(848560),
  m = n(397865),
  g = n(652695),
  _ = n(108760),
  b = n(658311),
  v = n(814878),
  y = n(166305),
  E = n(860223),
  S = n(313573),
  x = n(901670),
  w = n(96730),
  C = n(917050),
  T = n(510022),
  D = n(423793),
  M = n(517156),
  O = n(587818),
  A = n(864407),
  k = n(637290),
  R = n(854451),
  N = n(275051),
  I = n(749118),
  L = n(561161),
  P = n(674303),
  B = n(419301),
  F = n(470079),
  U = n(882932),
  j = n(182823),
  Y = n(616073),
  z = n(706682),
  H = n(612001),
  G = n(699581),
  V = n(230012),
  $ = n(297821);
let Z = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
  },
  K = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  },
  W = {
    top: "left",
    left: "top"
  },
  q = {
    top: "height",
    left: "width"
  },
  Q = {
    width: "totalWidth",
    height: "totalHeight"
  },
  X = {},
  J = "undefined" != typeof document && window.visualViewport;

function ee(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = 0,
    a = 0,
    o = 0,
    s = {};
  if ("BODY" === e.tagName) {
    var u, c;
    let a = document.documentElement;
    r = a.clientWidth, i = a.clientHeight, t = null !== (u = null == J ? void 0 : J.width) && void 0 !== u ? u : r, n = null !== (c = null == J ? void 0 : J.height) && void 0 !== c ? c : i, s.top = a.scrollTop || e.scrollTop, s.left = a.scrollLeft || e.scrollLeft
  } else({
    width: t,
    height: n,
    top: a,
    left: o
  } = ea(e)), s.top = e.scrollTop, s.left = e.scrollLeft, r = t, i = n;
  return {
    width: t,
    height: n,
    totalWidth: r,
    totalHeight: i,
    scroll: s,
    top: a,
    left: o
  }
}

function et(e, t, n, r, i, a) {
  let o = i.scroll[e],
    s = r[q[e]],
    u = t - a - o,
    c = t + a - o + n;
  return u < 0 ? -u : c > s ? Math.max(s - c, -u) : 0
}

function en(e) {
  if (X[e]) return X[e];
  let [t, n] = e.split(" "), r = Z[t] || "right", i = W[r];
  !Z[n] && (n = "center");
  let a = q[r],
    o = q[i];
  return X[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: i,
    size: a,
    crossSize: o
  }, X[e]
}

function er(e, t, n, r, i, a, o, s, u, c) {
  let {
    placement: l,
    crossPlacement: d,
    axis: f,
    crossAxis: p,
    size: h,
    crossSize: m
  } = r, g = {};
  g[p] = e[p], "center" === d ? g[p] += (e[m] - n[m]) / 2 : d !== p && (g[p] += e[m] - n[m]), g[p] += a;
  let _ = e[p] - n[m] + u + c,
    b = e[p] + e[m] - u - c;
  if (g[p] = (0, U.uZ)(g[p], _, b), l === f) {
    let n = s ? o[h] : t[Q[h]];
    g[K[f]] = Math.floor(n - e[f] + i)
  } else g[f] = Math.floor(e[f] + e[h] + i);
  return g
}

function ei(e, t, n, r, i, a) {
  let {
    placement: o,
    axis: s,
    size: u
  } = a;
  return o === s ? Math.max(0, n[s] - e[s] - e.scroll[s] + t[s] - r[s] - r[K[s]] - i) : Math.max(0, e[u] + e[s] + e.scroll[s] - t[s] - n[s] - n[u] - r[s] - r[K[s]] - i)
}

function ea(e) {
  let {
    top: t,
    left: n,
    width: r,
    height: i
  } = e.getBoundingClientRect(), {
    scrollTop: a,
    scrollLeft: o,
    clientTop: s,
    clientLeft: u
  } = document.documentElement;
  return {
    top: t + a - s,
    left: n + o - u,
    width: r,
    height: i
  }
}

function eo(e, t) {
  let n, r = window.getComputedStyle(e);
  if ("fixed" === r.position) {
    let {
      top: t,
      left: r,
      width: i,
      height: a
    } = e.getBoundingClientRect();
    n = {
      top: t,
      left: r,
      width: i,
      height: a
    }
  } else {
    n = ea(e);
    let r = ea(t),
      i = window.getComputedStyle(t);
    r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n
}

function es(e) {
  let t = window.getComputedStyle(e);
  return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
}
let eu = new WeakMap,
  ec = "undefined" != typeof document && window.visualViewport;

function el(e) {
  let {
    direction: t
  } = (0, Y.bU)(), {
    arrowSize: n = 0,
    targetRef: r,
    overlayRef: i,
    scrollRef: a = i,
    placement: o = "bottom",
    containerPadding: s = 12,
    shouldFlip: u = !0,
    boundaryElement: c = "undefined" != typeof document ? document.body : null,
    offset: l = 0,
    crossOffset: d = 0,
    shouldUpdatePosition: f = !0,
    isOpen: p = !0,
    onClose: h,
    maxHeight: m,
    arrowBoundaryOffset: g = 0
  } = e, [_, b] = (0, F.useState)({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), v = [f, o, i.current, r.current, a.current, s, u, c, l, d, p, t, m, g, n], y = (0, F.useCallback)(() => {
    if (!1 === f || !p || !i.current || !r.current || !a.current || !c) return;
    let e = function(e) {
      var t, n;
      let r, {
          placement: i,
          targetNode: a,
          overlayNode: o,
          scrollNode: s,
          padding: u,
          shouldFlip: c,
          boundaryElement: l,
          offset: d,
          crossOffset: f,
          maxHeight: p,
          arrowSize: h = 0,
          arrowBoundaryOffset: m = 0
        } = e,
        g = o instanceof HTMLElement ? function(e) {
          let t = e.offsetParent;
          if (t && t === document.body && "static" === window.getComputedStyle(t).position && !es(t) && (t = document.documentElement), null == t)
            for (t = e.parentElement; t && !es(t);) t = t.parentElement;
          return t || document.documentElement
        }(o) : document.documentElement,
        _ = g === document.documentElement,
        b = window.getComputedStyle(g).position,
        v = _ ? ea(a) : eo(a, g);
      if (!_) {
        let {
          marginTop: e,
          marginLeft: t
        } = window.getComputedStyle(a);
        v.top += parseInt(e, 10) || 0, v.left += parseInt(t, 10) || 0
      }
      let y = ea(o);
      let E = (t = o, {
        top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
        bottom: parseInt(r.marginBottom, 10) || 0,
        left: parseInt(r.marginLeft, 10) || 0,
        right: parseInt(r.marginRight, 10) || 0
      });
      return y.width += E.left + E.right, y.height += E.top + E.bottom,
        function(e, t, n, r, i, a, o, s, u, c, l, d, f, p, h, m) {
          var g, _, b, v, y, E;
          let S = en(e),
            {
              size: x,
              crossAxis: w,
              crossSize: C,
              placement: T,
              crossPlacement: D
            } = S,
            M = er(t, s, n, S, l, d, c, f, h, m),
            O = l,
            A = ei(s, c, t, i, a + l, S);
          if (o && r[x] > A) {
            let e = en(`${K[T]} ${D}`),
              r = er(t, s, n, e, l, d, c, f, h, m);
            ei(s, c, t, i, a + l, e) > A && (S = e, M = r, O = l)
          }
          let k = et(w, M[w], n[C], s, u, a);
          M[w] += k;
          let R = (g = M, _ = s, b = c, v = t, y = i, E = a, null != g.top ? Math.max(0, _.height + _.top + _.scroll.top - (b.top + g.top) - (y.top + y.bottom + E)) : Math.max(0, v.top + b.top - (_.top + _.scroll.top) - (y.top + y.bottom + E)));
          p && p < R && (R = p), n.height = Math.min(n.height, R), k = et(w, (M = er(t, s, n, S, O, d, c, f, h, m))[w], n[C], s, u, a), M[w] += k;
          let N = {},
            I = t[w] + .5 * t[C] - n[w],
            L = h / 2 + m,
            P = n[C] - h / 2 - m,
            B = t[w] - n[w] + h / 2,
            F = t[w] + t[C] - n[w] - h / 2,
            j = (0, U.uZ)(I, B, F);
          return N[w] = (0, U.uZ)(j, L, P), {
            position: M,
            maxHeight: R,
            arrowOffsetLeft: N.left,
            arrowOffsetTop: N.top,
            placement: S.placement
          }
        }(i, v, y, {
          top: (n = s).scrollTop,
          left: n.scrollLeft,
          width: n.scrollWidth,
          height: n.scrollHeight
        }, E, u, c, ee(l), ee(g), "BODY" === l.tagName ? ea(g) : eo(g, l), d, f, !!b && "static" !== b, p, h, m)
    }({
      placement: function(e, t) {
        return "rtl" === t ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
      }(o, t),
      overlayNode: i.current,
      targetNode: r.current,
      scrollNode: a.current,
      padding: s,
      shouldFlip: u,
      boundaryElement: c,
      offset: l,
      crossOffset: d,
      maxHeight: m,
      arrowSize: n,
      arrowBoundaryOffset: g
    });
    Object.keys(e.position).forEach(t => i.current.style[t] = e.position[t] + "px"), i.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0, b(e)
  }, v);
  (0, j.bt)(y, v),
  function(e) {
    (0, j.bt)(() => (window.addEventListener("resize", e, !1), () => {
      window.removeEventListener("resize", e, !1)
    }), [e])
  }(y), (0, j.yU)({
    ref: i,
    onResize: y
  });
  let E = (0, F.useRef)(!1);
  (0, j.bt)(() => {
    let e;
    let t = () => {
      E.current = !0, clearTimeout(e), e = setTimeout(() => {
        E.current = !1
      }, 500), y()
    };
    return null == ec || ec.addEventListener("resize", t), null == ec || ec.addEventListener("scroll", t), () => {
      null == ec || ec.removeEventListener("resize", t), null == ec || ec.removeEventListener("scroll", t)
    }
  }, [y]);
  let S = (0, F.useCallback)(() => {
    !E.current && h()
  }, [h, E]);
  return ! function(e) {
    let {
      triggerRef: t,
      isOpen: n,
      onClose: r
    } = e;
    (0, F.useEffect)(() => {
      if (!n || null === r) return;
      let e = e => {
        let n = e.target;
        if (!t.current || n instanceof Node && !n.contains(t.current)) return;
        let i = r || eu.get(t.current);
        i && i()
      };
      return window.addEventListener("scroll", e, !0), () => {
        window.removeEventListener("scroll", e, !0)
      }
    }, [n, r, t])
  }({
    triggerRef: r,
    isOpen: p,
    onClose: h && S
  }), {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ..._.position,
        maxHeight: _.maxHeight
      }
    },
    placement: _.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: _.arrowOffsetLeft,
        top: _.arrowOffsetTop
      }
    },
    updatePosition: y
  }
}
let ed = [];

function ef(e, t) {
  let {
    onClose: n,
    shouldCloseOnBlur: r,
    isOpen: i,
    isDismissable: a = !1,
    isKeyboardDismissDisabled: o = !1,
    shouldCloseOnInteractOutside: s
  } = e;
  (0, F.useEffect)(() => (i && ed.push(t), () => {
    let e = ed.indexOf(t);
    e >= 0 && ed.splice(e, 1)
  }), [i, t]);
  let u = () => {
    ed[ed.length - 1] === t && n && n()
  };
  (0, H.Fc)({
    ref: t,
    onInteractOutside: a && i ? e => {
      (!s || s(e.target)) && (ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault()), u())
    } : null,
    onInteractOutsideStart: e => {
      (!s || s(e.target)) && ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault())
    }
  });
  let {
    focusWithinProps: c
  } = (0, H.L_)({
    isDisabled: !r,
    onBlurWithin: e => {
      !(!e.relatedTarget || (0, z.cW)(e.relatedTarget)) && (!s || s(e.relatedTarget)) && n()
    }
  });
  return {
    overlayProps: {
      onKeyDown: e => {
        "Escape" === e.key && !o && (e.stopPropagation(), e.preventDefault(), u())
      },
      ...c
    },
    underlayProps: {
      onPointerDown: e => {
        e.target === e.currentTarget && e.preventDefault()
      }
    }
  }
}

function ep(e, t, n) {
  let r, {
      type: i
    } = e,
    {
      isOpen: a
    } = t;
  (0, F.useEffect)(() => {
    n && n.current && eu.set(n.current, t.close)
  });
  "menu" === i ? r = !0 : "listbox" === i && (r = "listbox");
  let o = (0, j.Me)();
  return {
    triggerProps: {
      "aria-haspopup": r,
      "aria-expanded": a,
      "aria-controls": a ? o : null,
      onPress: t.toggle
    },
    overlayProps: {
      id: o
    }
  }
}
let eh = "undefined" != typeof document && window.visualViewport,
  em = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
  eg = 0;

function e_(e = {}) {
  let {
    isDisabled: t
  } = e;
  (0, j.bt)(() => {
    if (!t) return 1 == ++eg && (r = (0, j.gn)() ? function() {
      let e, t;
      let n = null,
        r = () => {
          if (n) return;
          let e = window.pageXOffset,
            t = window.pageYOffset;
          n = (0, j.tS)(ev(window, "scroll", () => {
            window.scrollTo(0, 0)
          }), eb(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), eb(document.documentElement, "overflow", "hidden"), eb(document.body, "marginTop", `-${t}px`), () => {
            window.scrollTo(e, t)
          }), window.scrollTo(0, 0)
        },
        i = (0, j.tS)(ev(document, "touchstart", n => {
          ((e = (0, j.rP)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (t = eb(e, "overscrollBehavior", "contain"))
        }, {
          passive: !1,
          capture: !0
        }), ev(document, "touchmove", t => {
          if (!e || e === document.documentElement || e === document.body) {
            t.preventDefault();
            return
          }
          e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
        }, {
          passive: !1,
          capture: !0
        }), ev(document, "touchend", e => {
          let n = e.target;
          eE(n) && n !== document.activeElement && (e.preventDefault(), r(), n.style.transform = "translateY(-2000px)", n.focus(), requestAnimationFrame(() => {
            n.style.transform = ""
          })), t && t()
        }, {
          passive: !1,
          capture: !0
        }), ev(document, "focus", e => {
          let t = e.target;
          eE(t) && (r(), t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
            t.style.transform = "", eh && (eh.height < window.innerHeight ? requestAnimationFrame(() => {
              ey(t)
            }) : eh.addEventListener("resize", () => ey(t), {
              once: !0
            }))
          }))
        }, !0));
      return () => {
        null == t || t(), null == n || n(), i()
      }
    }() : function() {
      return (0, j.tS)(eb(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), eb(document.documentElement, "overflow", "hidden"))
    }()), () => {
      0 == --eg && r()
    }
  }, [t])
}

function eb(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r
  }
}

function ev(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r)
  }
}

function ey(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t;) {
    let t = (0, j.rP)(e);
    if (t !== document.documentElement && t !== document.body && t !== e) {
      let n = t.getBoundingClientRect().top,
        r = e.getBoundingClientRect().top;
      r > n + e.clientHeight && (t.scrollTop += r - n)
    }
    e = t.parentElement
  }
}

function eE(e) {
  return e instanceof HTMLInputElement && !em.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}
let eS = F.createContext(null);

function ex(e) {
  let {
    children: t
  } = e, n = (0, F.useContext)(eS), [r, i] = (0, F.useState)(0), a = (0, F.useMemo)(() => ({
    parent: n,
    modalCount: r,
    addModal() {
      i(e => e + 1), n && n.addModal()
    },
    removeModal() {
      i(e => e - 1), n && n.removeModal()
    }
  }), [n, r]);
  return F.createElement(eS.Provider, {
    value: a
  }, t)
}

function ew(e) {
  let t;
  let {
    modalProviderProps: n
  } = {
    modalProviderProps: {
      "aria-hidden": !!(t = (0, F.useContext)(eS)) && t.modalCount > 0 || null
    }
  };
  return F.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...n
  })
}

function eC(e) {
  return F.createElement(ex, null, F.createElement(ew, e))
}

function eT(e) {
  let t = (0, V.Av)(),
    {
      portalContainer: n = t ? null : document.body,
      ...r
    } = e;
  if (F.useEffect(() => {
      if (null == n ? void 0 : n.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
    }, [n]), !n) return null;
  let i = F.createElement(eC, r);
  return G.createPortal(i, n)
}
var eD = {};

function eM(e) {
  var t;
  let {
    onDismiss: n,
    ...r
  } = e;
  let i = (0, Y.qb)((t = eD) && t.__esModule ? t.default : t, "@react-aria/overlays"),
    a = (0, j.bE)(r, i.format("dismiss"));
  return F.createElement($.T, null, F.createElement("button", {
    ...a,
    tabIndex: -1,
    onClick: () => {
      n && n()
    },
    style: {
      width: 1,
      height: 1
    }
  }))
}
eD = {
  "ar-AE": i.Z,
  "bg-BG": a.Z,
  "cs-CZ": o.Z,
  "da-DK": s.Z,
  "de-DE": u.Z,
  "el-GR": c.Z,
  "en-US": l.Z,
  "es-ES": d.Z,
  "et-EE": f.Z,
  "fi-FI": p.Z,
  "fr-FR": h.Z,
  "he-IL": m.Z,
  "hr-HR": g.Z,
  "hu-HU": _.Z,
  "it-IT": b.Z,
  "ja-JP": v.Z,
  "ko-KR": y.Z,
  "lt-LT": E.Z,
  "lv-LV": S.Z,
  "nb-NO": x.Z,
  "nl-NL": w.Z,
  "pl-PL": C.Z,
  "pt-BR": T.Z,
  "pt-PT": D.Z,
  "ro-RO": M.Z,
  "ru-RU": O.Z,
  "sk-SK": A.Z,
  "sl-SI": k.Z,
  "sr-SP": R.Z,
  "sv-SE": N.Z,
  "tr-TR": I.Z,
  "uk-UA": L.Z,
  "zh-CN": P.Z,
  "zh-TW": B.Z
};
let eO = new WeakMap,
  eA = [];

function ek(e, t = document.body) {
  let n = new Set(e),
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
        o = t(e);
      if (o === NodeFilter.FILTER_ACCEPT && a(e), o !== NodeFilter.FILTER_REJECT) {
        let e = i.nextNode();
        for (; null != e;) a(e), e = i.nextNode()
      }
    },
    a = e => {
      var t;
      let n = null !== (t = eO.get(e)) && void 0 !== t ? t : 0;
      ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), r.add(e), eO.set(e, n + 1))
    };
  eA.length && eA[eA.length - 1].disconnect(), i(t);
  let o = new MutationObserver(e => {
    for (let t of e)
      if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some(e => e.contains(t.target))) {
        for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e)
      }
  });
  o.observe(t, {
    childList: !0,
    subtree: !0
  });
  let s = {
    observe() {
      o.observe(t, {
        childList: !0,
        subtree: !0
      })
    },
    disconnect() {
      o.disconnect()
    }
  };
  return eA.push(s), () => {
    for (let e of (o.disconnect(), r)) {
      let t = eO.get(e);
      1 === t ? (e.removeAttribute("aria-hidden"), eO.delete(e)) : eO.set(e, t - 1)
    }
    s === eA[eA.length - 1] ? (eA.pop(), eA.length && eA[eA.length - 1].observe()) : eA.splice(eA.indexOf(s), 1)
  }
}

function eR(e, t) {
  let {
    triggerRef: n,
    popoverRef: r,
    isNonModal: i,
    isKeyboardDismissDisabled: a,
    shouldCloseOnInteractOutside: o,
    ...s
  } = e, {
    overlayProps: u,
    underlayProps: c
  } = ef({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !i,
    isKeyboardDismissDisabled: a,
    shouldCloseOnInteractOutside: o
  }, r), {
    overlayProps: l,
    arrowProps: d,
    placement: f
  } = el({
    ...s,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: i ? t.close : null
  });
  return e_({
    isDisabled: i || !t.isOpen
  }), (0, j.bt)(() => {
    if (t.isOpen && !i && r.current) return ek([r.current])
  }, [i, t.isOpen, r]), {
    popoverProps: (0, j.dG)(u, l),
    arrowProps: d,
    underlayProps: c,
    placement: f
  }
}
let eN = F.createContext(null);

function eI(e) {
  let t = (0, V.Av)(),
    {
      portalContainer: n = t ? null : document.body,
      isExiting: r
    } = e,
    [i, a] = (0, F.useState)(!1),
    o = (0, F.useMemo)(() => ({
      contain: i,
      setContain: a
    }), [i, a]);
  if (!n) return null;
  let s = e.children;
  return !e.disableFocusManagement && (s = F.createElement(z.MT, {
    restoreFocus: !0,
    contain: i && !r
  }, s)), s = F.createElement(eN.Provider, {
    value: o
  }, F.createElement(H.mk, null, s)), G.createPortal(s, n)
}

function eL() {
  let e = (0, F.useContext)(eN),
    t = null == e ? void 0 : e.setContain;
  (0, j.bt)(() => {
    null == t || t(!0)
  }, [t])
}

function eP(e, t, n) {
  let {
    overlayProps: r,
    underlayProps: i
  } = ef({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, n);
  return e_({
    isDisabled: !t.isOpen
  }), eL(), (0, F.useEffect)(() => {
    if (t.isOpen) return ek([n.current])
  }, [t.isOpen, n]), {
    modalProps: (0, j.dG)(r),
    underlayProps: i
  }
}