"use strict";
n.r(t), n.d(t, {
  useId: function() {
    return d
  },
  useSlotId: function() {
    return l
  },
  chain: function() {
    return f
  },
  mergeProps: function() {
    return p
  },
  mergeRefs: function() {
    return h
  },
  filterDOMProps: function() {
    return m
  },
  focusWithoutScrolling: function() {
    return y
  },
  runAfterTransition: function() {
    return _
  },
  useGlobalListeners: function() {
    return E
  },
  useLabels: function() {
    return M
  },
  useObjectRef: function() {
    return D
  },
  useUpdateEffect: function() {
    return C
  },
  useLayoutEffect: function() {
    return a
  },
  useResizeObserver: function() {
    return P
  },
  useSyncRef: function() {
    return T
  },
  getScrollParent: function() {
    return A
  },
  isScrollable: function() {
    return R
  },
  useViewportSize: function() {
    return O
  },
  useDescription: function() {
    return F
  },
  isMac: function() {
    return K
  },
  isIPhone: function() {
    return V
  },
  isIOS: function() {
    return U
  },
  isAppleDevice: function() {
    return q
  },
  isWebKit: function() {
    return H
  },
  isAndroid: function() {
    return G
  },
  useEvent: function() {
    return W
  },
  scrollIntoView: function() {
    return Z
  },
  scrollIntoViewport: function() {
    return X
  },
  clamp: function() {
    return r.clamp
  },
  snapValueToStep: function() {
    return r.snapValueToStep
  },
  isVirtualClick: function() {
    return $
  },
  isVirtualPointerEvent: function() {
    return J
  },
  useEffectEvent: function() {
    return c
  },
  useDeepMemo: function() {
    return Q
  },
  useFormReset: function() {
    return ee
  }
}), n("222007"), n("424973");
var r = n("679750"),
  i = n("884691"),
  o = n("46397"),
  s = n("38736");
let a = "undefined" != typeof document ? i.useLayoutEffect : () => {};

function c(e) {
  let t = (0, i.useRef)(null);
  return a(() => {
    t.current = e
  }, [e]), (0, i.useCallback)(function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    let i = t.current;
    return i(...n)
  }, [])
}
let u = new Map;

function d(e) {
  let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), s = (0, o.useSSRSafeId)(t), c = (0, i.useCallback)(e => {
    r.current = e
  }, []);
  return u.set(s, c), a(() => () => {
    u.delete(s)
  }, [s]), (0, i.useEffect)(() => {
    let e = r.current;
    e && (r.current = null, n(e))
  }), s
}

function l() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = d(),
    [n, r] = function(e) {
      let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), o = c(() => {
        let e = r.current.next();
        if (e.done) {
          r.current = null;
          return
        }
        t === e.value ? o() : n(e.value)
      });
      a(() => {
        r.current && o()
      });
      let s = c(e => {
        r.current = e(t), o()
      });
      return [t, s]
    }(t),
    o = (0, i.useCallback)(() => {
      r(function*() {
        yield t, yield document.getElementById(t) ? t : void 0
      })
    }, [t, r]);
  return a(o, [t, o, ...e]), n
}

function f() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    for (let e of t) "function" == typeof e && e(...n)
  }
}

function p() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let r = {
    ...t[0]
  };
  for (let e = 1; e < t.length; e++) {
    let n = t[e];
    for (let e in n) {
      let t = r[e],
        i = n[e];
      "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = f(t, i) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof i ? r[e] = (0, s.default)(t, i) : "id" === e && t && i ? r.id = function(e, t) {
        if (e === t) return e;
        let n = u.get(e);
        if (n) return n(t), t;
        let r = u.get(t);
        return r ? (r(e), e) : t
      }(t, i) : r[e] = void 0 !== i ? i : t
    }
  }
  return r
}

function h() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return 1 === t.length ? t[0] : e => {
    for (let n of t) "function" == typeof n ? n(e) : null != n && (n.current = e)
  }
}
let g = new Set(["id"]),
  b = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
  v = /^(data-.*)$/;

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      labelable: n,
      propNames: r
    } = t,
    i = {};
  for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (g.has(t) || n && b.has(t) || (null == r ? void 0 : r.has(t)) || v.test(t)) && (i[t] = e[t]);
  return i
}

function y(e) {
  if (function() {
      if (null == x) {
        x = !1;
        try {
          document.createElement("div").focus({
            get preventScroll() {
              return x = !0, !0
            }
          })
        } catch (e) {}
      }
      return x
    }()) e.focus({
    preventScroll: !0
  });
  else {
    let t = function(e) {
      for (var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
        element: t,
        scrollTop: t.scrollTop,
        scrollLeft: t.scrollLeft
      }), t = t.parentNode;
      return r instanceof HTMLElement && n.push({
        element: r,
        scrollTop: r.scrollTop,
        scrollLeft: r.scrollLeft
      }), n
    }(e);
    e.focus(),
      function(e) {
        for (let {
            element: t,
            scrollTop: n,
            scrollLeft: r
          }
          of e) t.scrollTop = n, t.scrollLeft = r
      }(t)
  }
}
let x = null,
  w = new Map,
  S = new Set;

function k() {
  if ("undefined" == typeof window) return;
  let e = t => {
    let n = w.get(t.target);
    if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), w.delete(t.target)), 0 === w.size)) {
      for (let e of S) e();
      S.clear()
    }
  };
  document.body.addEventListener("transitionrun", t => {
    let n = w.get(t.target);
    !n && (n = new Set, w.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
  }), document.body.addEventListener("transitionend", e)
}

function _(e) {
  requestAnimationFrame(() => {
    0 === w.size ? e() : S.add(e)
  })
}

function E() {
  let e = (0, i.useRef)(new Map),
    t = (0, i.useCallback)((t, n, r, i) => {
      let o = (null == i ? void 0 : i.once) ? function() {
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        e.current.delete(r), r(...n)
      } : r;
      e.current.set(r, {
        type: n,
        eventTarget: t,
        fn: o,
        options: i
      }), t.addEventListener(n, r, i)
    }, []),
    n = (0, i.useCallback)((t, n, r, i) => {
      var o;
      let s = (null === (o = e.current.get(r)) || void 0 === o ? void 0 : o.fn) || r;
      t.removeEventListener(n, s, i), e.current.delete(r)
    }, []),
    r = (0, i.useCallback)(() => {
      e.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [n]);
  return (0, i.useEffect)(() => r, [r]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  }
}

function M(e, t) {
  let {
    id: n,
    "aria-label": r,
    "aria-labelledby": i
  } = e;
  return n = d(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i && (i = i.trim().split(/\s+/).join(" ")), !r && !i && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": i
  }
}

function D(e) {
  let t = (0, i.useRef)();
  return (0, i.useMemo)(() => ({
    get current() {
      return t.current
    },
    set current(value) {
      t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
    }
  }), [e])
}

function C(e, t) {
  let n = (0, i.useRef)(!0),
    r = (0, i.useRef)(null);
  (0, i.useEffect)(() => (n.current = !0, () => {
    n.current = !1
  }), []), (0, i.useEffect)(() => {
    n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t
  }, t)
}
"undefined" != typeof document && ("loading" !== document.readyState ? k() : document.addEventListener("DOMContentLoaded", k));

function P(e) {
  let {
    ref: t,
    onResize: n
  } = e;
  (0, i.useEffect)(() => {
    let e = null == t ? void 0 : t.current;
    if (e) {
      if (!(void 0 !== window.ResizeObserver)) return window.addEventListener("resize", n, !1), () => {
        window.removeEventListener("resize", n, !1)
      };
      else {
        let t = new window.ResizeObserver(e => {
          e.length && n()
        });
        return t.observe(e), () => {
          e && t.unobserve(e)
        }
      }
    }
  }, [n, t])
}

function T(e, t) {
  a(() => {
    if (e && e.ref && t) return e.ref.current = t.current, () => {
      e.ref.current = null
    }
  }, [e, t])
}

function A(e) {
  for (R(e) && (e = e.parentElement); e && !R(e);) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement
}

function R(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
}
let I = "undefined" != typeof document && window.visualViewport;

function O() {
  let [e, t] = (0, i.useState)(() => j());
  return (0, i.useEffect)(() => {
    let e = () => {
      t(e => {
        let t = j();
        return t.width === e.width && t.height === e.height ? e : t
      })
    };
    return I ? I.addEventListener("resize", e) : window.addEventListener("resize", e), () => {
      I ? I.removeEventListener("resize", e) : window.removeEventListener("resize", e)
    }
  }, []), e
}

function j() {
  return {
    width: (null == I ? void 0 : I.width) || window.innerWidth,
    height: (null == I ? void 0 : I.height) || window.innerHeight
  }
}
let N = 0,
  L = new Map;

function F(e) {
  let [t, n] = (0, i.useState)(void 0);
  return a(() => {
    if (!e) return;
    let t = L.get(e);
    if (t) n(t.element.id);
    else {
      let r = "react-aria-description-".concat(N++);
      n(r);
      let i = document.createElement("div");
      i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
        refCount: 0,
        element: i
      }, L.set(e, t)
    }
    return t.refCount++, () => {
      0 == --t.refCount && (t.element.remove(), L.delete(e))
    }
  }, [e]), {
    "aria-describedby": e ? t : void 0
  }
}

function B(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
}

function z(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
}

function K() {
  return z(/^Mac/i)
}

function V() {
  return z(/^iPhone/i)
}

function U() {
  return V() || z(/^iPad/i) || K() && navigator.maxTouchPoints > 1
}

function q() {
  return K() || U()
}

function H() {
  return B(/AppleWebKit/i) && ! function() {
    return B(/Chrome/i)
  }()
}

function G() {
  return B(/Android/i)
}

function W(e, t, n, r) {
  let o = c(n),
    s = null == n;
  (0, i.useEffect)(() => {
    if (s) return;
    let n = e.current;
    return n.addEventListener(t, o, r), () => {
      n.removeEventListener(t, o, r)
    }
  }, [e, t, r, s, o])
}

function Z(e, t) {
  let n = Y(e, t, "left"),
    r = Y(e, t, "top"),
    i = t.offsetWidth,
    o = t.offsetHeight,
    s = e.scrollLeft,
    a = e.scrollTop,
    {
      borderTopWidth: c,
      borderLeftWidth: u
    } = getComputedStyle(e),
    d = e.scrollLeft + parseInt(u, 10),
    l = e.scrollTop + parseInt(c, 10),
    f = d + e.clientWidth,
    p = l + e.clientHeight;
  n <= s ? s = n - parseInt(u, 10) : n + i > f && (s += n + i - f), r <= l ? a = r - parseInt(c, 10) : r + o > p && (a += r + o - p), e.scrollLeft = s, e.scrollTop = a
}

function Y(e, t, n) {
  let r = "left" === n ? "offsetLeft" : "offsetTop",
    i = 0;
  for (; t.offsetParent && (i += t[r], t.offsetParent !== e);) {
    ;
    if (t.offsetParent.contains(e)) {
      i -= e[r];
      break
    }
    t = t.offsetParent
  }
  return i
}

function X(e, t) {
  if (document.contains(e)) {
    let s = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(s).overflow) {
      let t = A(e);
      for (; e && t && e !== s && t !== s;) Z(t, e), t = A(e = t)
    } else {
      var n, r, i, o;
      let {
        left: s,
        top: a
      } = e.getBoundingClientRect();
      null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
        block: "nearest"
      });
      let {
        left: c,
        top: u
      } = e.getBoundingClientRect();
      (Math.abs(s - c) > 1 || Math.abs(a - u) > 1) && (null == t || null === (r = t.containingElement) || void 0 === r || null === (i = r.scrollIntoView) || void 0 === i || i.call(r, {
        block: "center",
        inline: "center"
      }), null === (o = e.scrollIntoView) || void 0 === o || o.call(e, {
        block: "nearest"
      }))
    }
  }
}

function $(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || (G() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function J(e) {
  return !G() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}

function Q(e, t) {
  let n = (0, i.useRef)(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
}

function ee(e, t, n) {
  let r = (0, i.useRef)(t),
    o = c(() => {
      n && n(r.current)
    });
  (0, i.useEffect)(() => {
    var t;
    let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
    return null == n || n.addEventListener("reset", o), () => {
      null == n || n.removeEventListener("reset", o)
    }
  }, [e, o])
}