"use strict";
n.d(t, {
  Ao: function() {
    return E
  },
  B3: function() {
    return H
  },
  Dt: function() {
    return k
  },
  Gt: function() {
    return et
  },
  IN: function() {
    return T
  },
  Me: function() {
    return l
  },
  PK: function() {
    return Q
  },
  Pf: function() {
    return A
  },
  QB: function() {
    return j
  },
  V5: function() {
    return C
  },
  Zj: function() {
    return en
  },
  a9: function() {
    return K
  },
  ad: function() {
    return O
  },
  b0: function() {
    return I
  },
  bE: function() {
    return z
  },
  bt: function() {
    return o
  },
  cr: function() {
    return er
  },
  dG: function() {
    return m
  },
  gn: function() {
    return M
  },
  iW: function() {
    return s
  },
  ib: function() {
    return P
  },
  kR: function() {
    return h
  },
  lE: function() {
    return $
  },
  mp: function() {
    return d
  },
  nG: function() {
    return L
  },
  r3: function() {
    return p
  },
  rP: function() {
    return Z
  },
  rf: function() {
    return G
  },
  tS: function() {
    return f
  },
  tv: function() {
    return N
  },
  vE: function() {
    return ei
  },
  xi: function() {
    return Y
  },
  y$: function() {
    return ea
  },
  yU: function() {
    return V
  },
  zL: function() {
    return y
  },
  zT: function() {
    return J
  },
  zX: function() {
    return X
  }
});
var r = n(470079),
  i = n(230012),
  a = n(867330);
let o = "undefined" != typeof document ? r.useLayoutEffect : () => {};

function s(e) {
  let t = (0, r.useRef)(null);
  return o(() => {
    t.current = e
  }, [e]), (0, r.useCallback)((...e) => (0, t.current)(...e), [])
}
let u = !!("undefined" != typeof window && window.document && window.document.createElement),
  c = new Map;

function l(e) {
  let [t, n] = (0, r.useState)(e), a = (0, r.useRef)(null), s = (0, i.gP)(t), l = (0, r.useCallback)(e => {
    a.current = e
  }, []);
  return u && c.set(s, l), o(() => () => {
    c.delete(s)
  }, [s]), (0, r.useEffect)(() => {
    let e = a.current;
    e && (a.current = null, n(e))
  }), s
}

function d(e = []) {
  let t = l(),
    [n, i] = function(e) {
      let [t, n] = (0, r.useState)(e), i = (0, r.useRef)(null), a = s(() => {
        let e = i.current.next();
        if (e.done) {
          i.current = null;
          return
        }
        t === e.value ? a() : n(e.value)
      });
      o(() => {
        i.current && a()
      });
      let u = s(e => {
        i.current = e(t), a()
      });
      return [t, u]
    }(t),
    a = (0, r.useCallback)(() => {
      i(function*() {
        yield t, yield document.getElementById(t) ? t : void 0
      })
    }, [t, i]);
  return o(a, [t, a, ...e]), n
}

function f(...e) {
  return (...t) => {
    for (let n of e) "function" == typeof n && n(...t)
  }
}
let p = e => {
    var t;
    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
  },
  h = e => e && "window" in e && e.window === e ? e : p(e).defaultView || window;

function m(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let e in r) {
      let n = t[e],
        i = r[e];
      "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = f(n, i) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof i ? t[e] = (0, a.Z)(n, i) : "id" === e && n && i ? t.id = function(e, t) {
        if (e === t) return e;
        let n = c.get(e);
        if (n) return n(t), t;
        let r = c.get(t);
        return r ? (r(e), e) : t
      }(n, i) : t[e] = void 0 !== i ? i : n
    }
  }
  return t
}
let g = new Set(["id"]),
  _ = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
  b = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
  v = /^(data-.*)$/;

function y(e, t = {}) {
  let {
    labelable: n,
    isLink: r,
    propNames: i
  } = t, a = {};
  for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (g.has(t) || n && _.has(t) || r && b.has(t) || (null == i ? void 0 : i.has(t)) || v.test(t)) && (a[t] = e[t]);
  return a
}

function E(e) {
  if (function() {
      if (null == S) {
        S = !1;
        try {
          document.createElement("div").focus({
            get preventScroll() {
              return S = !0, !0
            }
          })
        } catch (e) {}
      }
      return S
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
let S = null;

function x(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
}

function w(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
}

function C() {
  return w(/^Mac/i)
}

function T() {
  return w(/^iPhone/i)
}

function D() {
  return w(/^iPad/i) || C() && navigator.maxTouchPoints > 1
}

function M() {
  return T() || D()
}

function O() {
  return C() || M()
}

function A() {
  return x(/AppleWebKit/i) && ! function() {
    return x(/Chrome/i)
  }()
}

function k() {
  return x(/Android/i)
}
let R = (0, r.createContext)({
  isNative: !0,
  open: function(e, t) {
    ! function(e, t) {
      if (e instanceof HTMLAnchorElement) t(e);
      else if (e.hasAttribute("data-href")) {
        let n = document.createElement("a");
        n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
      }
    }(e, e => L(e, t))
  }
});

function N() {
  return (0, r.useContext)(R)
}

function I(e, t) {
  let n = e.getAttribute("target");
  return (!n || "_self" === n) && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey
}

function L(e, t, n = !0) {
  var r, i;
  let {
    metaKey: a,
    ctrlKey: o,
    altKey: s,
    shiftKey: u
  } = t;
  x(/Firefox/i) && (null === (i = window.event) || void 0 === i ? void 0 : null === (r = i.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (C() ? a = !0 : o = !0);
  let c = A() && C() && !D() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: o,
    altKey: s,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: o,
    altKey: s,
    shiftKey: u,
    bubbles: !0,
    cancelable: !0
  });
  L.isOpening = n, E(e), e.dispatchEvent(c), L.isOpening = !1
}
L.isOpening = !1;

function P(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  }
}
let B = new Map,
  F = new Set;

function U() {
  if ("undefined" == typeof window) return;
  let e = t => {
    let n = B.get(t.target);
    if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), B.delete(t.target)), 0 === B.size)) {
      for (let e of F) e();
      F.clear()
    }
  };
  document.body.addEventListener("transitionrun", t => {
    let n = B.get(t.target);
    !n && (n = new Set, B.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
  }), document.body.addEventListener("transitionend", e)
}

function j(e) {
  requestAnimationFrame(() => {
    0 === B.size ? e() : F.add(e)
  })
}

function Y() {
  let e = (0, r.useRef)(new Map),
    t = (0, r.useCallback)((t, n, r, i) => {
      let a = (null == i ? void 0 : i.once) ? (...t) => {
        e.current.delete(r), r(...t)
      } : r;
      e.current.set(r, {
        type: n,
        eventTarget: t,
        fn: a,
        options: i
      }), t.addEventListener(n, r, i)
    }, []),
    n = (0, r.useCallback)((t, n, r, i) => {
      var a;
      let o = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
      t.removeEventListener(n, o, i), e.current.delete(r)
    }, []),
    i = (0, r.useCallback)(() => {
      e.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [n]);
  return (0, r.useEffect)(() => i, [i]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: i
  }
}

function z(e, t) {
  let {
    id: n,
    "aria-label": r,
    "aria-labelledby": i
  } = e;
  return n = l(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i && (i = i.trim().split(/\s+/).join(" ")), !r && !i && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": i
  }
}

function H(e) {
  let t = (0, r.useRef)();
  return (0, r.useMemo)(() => ({
    get current() {
      return t.current
    },
    set current(value) {
      t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
    }
  }), [e])
}

function G(e, t) {
  let n = (0, r.useRef)(!0),
    i = (0, r.useRef)(null);
  (0, r.useEffect)(() => (n.current = !0, () => {
    n.current = !1
  }), []), (0, r.useEffect)(() => {
    n.current ? n.current = !1 : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(), i.current = t
  }, t)
}
"undefined" != typeof document && ("loading" !== document.readyState ? U() : document.addEventListener("DOMContentLoaded", U));

function V(e) {
  let {
    ref: t,
    onResize: n
  } = e;
  (0, r.useEffect)(() => {
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

function $(e, t) {
  o(() => {
    if (e && e.ref && t) return e.ref.current = t.current, () => {
      e.ref.current = null
    }
  })
}

function Z(e, t) {
  for (K(e, t) && (e = e.parentElement); e && !K(e, t);) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement
}

function K(e, t) {
  let n = window.getComputedStyle(e),
    r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
}
"undefined" != typeof document && window.visualViewport;
let W = 0,
  q = new Map;

function Q(e) {
  let [t, n] = (0, r.useState)(void 0);
  return o(() => {
    if (!e) return;
    let t = q.get(e);
    if (t) n(t.element.id);
    else {
      let r = `react-aria-description-${W++}`;
      n(r);
      let i = document.createElement("div");
      i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
        refCount: 0,
        element: i
      }, q.set(e, t)
    }
    return t.refCount++, () => {
      0 == --t.refCount && (t.element.remove(), q.delete(e))
    }
  }, [e]), {
    "aria-describedby": e ? t : void 0
  }
}

function X(e, t, n, i) {
  let a = s(n),
    o = null == n;
  (0, r.useEffect)(() => {
    if (o) return;
    let n = e.current;
    return n.addEventListener(t, a, i), () => {
      n.removeEventListener(t, a, i)
    }
  }, [e, t, i, o, a])
}

function J(e, t) {
  let n = ee(e, t, "left"),
    r = ee(e, t, "top"),
    i = t.offsetWidth,
    a = t.offsetHeight,
    o = e.scrollLeft,
    s = e.scrollTop,
    {
      borderTopWidth: u,
      borderLeftWidth: c
    } = getComputedStyle(e),
    l = e.scrollLeft + parseInt(c, 10),
    d = e.scrollTop + parseInt(u, 10),
    f = l + e.clientWidth,
    p = d + e.clientHeight;
  n <= o ? o = n - parseInt(c, 10) : n + i > f && (o += n + i - f), r <= d ? s = r - parseInt(u, 10) : r + a > p && (s += r + a - p), e.scrollLeft = o, e.scrollTop = s
}

function ee(e, t, n) {
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

function et(e, t) {
  if (document.contains(e)) {
    let o = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(o).overflow) {
      let t = Z(e);
      for (; e && t && e !== o && t !== o;) J(t, e), t = Z(e = t)
    } else {
      var n, r, i, a;
      let {
        left: o,
        top: s
      } = e.getBoundingClientRect();
      null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
        block: "nearest"
      });
      let {
        left: u,
        top: c
      } = e.getBoundingClientRect();
      (Math.abs(o - u) > 1 || Math.abs(s - c) > 1) && (null == t || null === (i = t.containingElement) || void 0 === i || null === (r = i.scrollIntoView) || void 0 === r || r.call(i, {
        block: "center",
        inline: "center"
      }), null === (a = e.scrollIntoView) || void 0 === a || a.call(e, {
        block: "nearest"
      }))
    }
  }
}

function en(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || (k() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function er(e) {
  return !k() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}

function ei(e, t) {
  let n = (0, r.useRef)(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
}

function ea(e, t, n) {
  let i = (0, r.useRef)(t),
    a = s(() => {
      n && n(i.current)
    });
  (0, r.useEffect)(() => {
    var t;
    let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
    return null == n || n.addEventListener("reset", a), () => {
      null == n || n.removeEventListener("reset", a)
    }
  }, [e, a])
}