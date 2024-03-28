"use strict";
n.r(t), n.d(t, {
  VIOLATION_ATTRIBUTE_NAME: function() {
    return v
  },
  useAccessibilityChecker: function() {
    return M
  }
}), n("47120"), n("653041");
var r, i, a = n("470079"),
  s = n("622131"),
  l = n("247123"),
  u = n("350934"),
  o = n("972959"),
  c = n("585647"),
  d = n("883349"),
  f = n("993173"),
  h = n("650021"),
  b = n("807608");
let m = [u.default, o.default, c.default, f.default, d.default, b.default, h.default],
  v = "data-accessibility-violation",
  p = "function" == typeof(null === (i = navigator) || void 0 === i ? void 0 : null === (r = i.scheduling) || void 0 === r ? void 0 : r.isInputPending),
  g = null,
  A = null,
  w = 0,
  I = 0,
  _ = null,
  y = {
    hash: 0,
    violations: new Map
  },
  T = () => {},
  k = document.body;

function E() {
  w = 0, I = 0, _ = null, y = {
    hash: 0,
    violations: new Map
  }
}

function P() {
  A = requestIdleCallback(N)
}

function R() {
  _ = null, I = 0, w < m.length - 1 ? (w += 1, P()) : (T(y), E())
}

function N() {
  let e = m[w];
  if (null == _ && (_ = null != e.selector ? Array.from(k.querySelectorAll(e.selector)) : e.select(k)), 0 === _.length) return R();
  let t = performance.now() + 16,
    n = {
      includeContinuous: !0
    };
  for (; I < _.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t);) {
    ;
    let t = _[I++],
      n = e.check(t);
    if (n !== l.Pass) {
      var r, i;
      let a = (0, s.getComponentStackTraceFromElement)(t),
        l = x("".concat(n, "_").concat(e.id, "_").concat(null == a ? function(e) {
          let t = "",
            n = e;
          for (; null != n;) t += n.className, n = n.parentElement;
          return x(t)
        }(t) : a.join("\n")));
      y.hash = x("".concat(y.hash).concat(l));
      let u = "".concat(e.id, "_").concat(l),
        o = null !== (r = y.violations.get(e.id)) && void 0 !== r ? r : {
          rule: e,
          instances: new Map
        },
        c = null !== (i = o.instances.get(u)) && void 0 !== i ? i : [];
      c.push({
        element: t,
        message: n,
        trace: null != a ? a : [],
        hash: l
      }), o.instances.set(u, c), y.violations.set(e.id, o)
    }
  }
  if (I < _.length - 1) return P();
  R()
}
let S = e => {
  let t = e.filter(e => ("attributes" !== e.type || e.attributeName !== v) && !0);
  0 !== t.length && (E(), null != g && (clearTimeout(g), g = null), null != A && (clearTimeout(A), A = null), g = setTimeout(P, 250))
};

function M(e, t) {
  (0, a.useLayoutEffect)(() => {
    if (p && null != e) {
      T = t, k = e;
      let n = function(e) {
        let t = new MutationObserver(S);
        return t.observe(e, {
          attributes: !0,
          childList: !0,
          subtree: !0
        }), t
      }(e);
      return () => {
        T = () => {}, n.disconnect()
      }
    }
  }, [e])
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = 3735928559 ^ t,
    r = 1103547991 ^ t;
  for (let t = 0, i; t < e.length; t++) n = Math.imul(n ^ (i = e.charCodeAt(t)), 2654435761), r = Math.imul(r ^ i, 1597334677);
  return n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & (r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909))) + (n >>> 0)
}