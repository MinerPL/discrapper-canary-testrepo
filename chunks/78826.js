"use strict";
n.d(t, {
  Fl: function() {
    return _
  },
  d7: function() {
    return d
  },
  p: function() {
    return u
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(374470),
  o = n(960048);
let a = r.createContext({
  registerAsset: () => {},
  unregisterAsset: () => {},
  hasError: !1,
  isLoading: !0
});

function l(e) {
  return (0, s.k)(e, HTMLImageElement) ? e.complete : !(0, s.k)(e, HTMLVideoElement) || e.readyState >= 2
}

function u(e) {
  let {
    children: t,
    isPreview: n = !1,
    sentrySource: u
  } = e, [_, d] = r.useState(!1), [c, E] = r.useState(new Set), [I, T] = r.useState(!1), h = r.useRef(!1);
  r.useEffect(() => {
    let e = new Set;
    for (let t of c) !l(t) && e.add(t);
    e.size !== c.size && E(e)
  }, [c]);
  let S = r.useCallback(e => {
      let {
        assetNode: t,
        nodeId: i,
        errorPrefix: r,
        errorMessage: a
      } = e;
      if (!n && null != u) {
        var l, _, c;
        o.Z.captureException(Error("".concat(r, ": ").concat(null != a ? "".concat(a, ", ") : "").concat((l = t, (0, s.k)(l, HTMLImageElement) ? l.getAttribute("src") : (0, s.k)(l, HTMLVideoElement) ? null !== (c = null === (_ = l.querySelectorAll("source")[0]) || void 0 === _ ? void 0 : _.getAttribute("src")) && void 0 !== c ? c : "video" : l.tagName), ", ").concat(i)), {
          tags: {
            source: u
          }
        }), d(!0)
      }
    }, [n, u]),
    f = r.useCallback(e => {
      E(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    N = r.useCallback((e, t) => {
      var n;
      if (T(!0), l(e)) return;
      E(t => {
        let n = new Set(t);
        return n.add(e), n
      });
      let i = (n = e, (0, s.k)(n, HTMLImageElement) ? "load" : (0, s.k)(n, HTMLVideoElement) ? "canplaythrough" : "load");
      e.addEventListener(i, function t() {
        f(e), e.removeEventListener(i, t)
      });
      e.addEventListener("error", function n(i) {
        f(e), S({
          assetNode: e,
          nodeId: t,
          errorPrefix: "Error loading asset",
          errorMessage: "message" in i ? i.message : null
        }), e.removeEventListener("error", n)
      })
    }, [S, f]),
    A = r.useMemo(() => c.size > 0 || !I, [I, c]);
  r.useEffect(() => {
    !A && (h.current = !0)
  }, [A]);
  let m = r.useMemo(() => ({
    registerAsset: N,
    unregisterAsset: f,
    hasError: _,
    isLoading: A && !h.current
  }), [N, f, _, A]);
  return (0, i.jsx)(a.Provider, {
    value: m,
    children: t
  })
}

function _(e) {
  let {
    id: t,
    children: n
  } = e, {
    registerAsset: i,
    unregisterAsset: s
  } = r.useContext(a), o = r.useRef(null);
  return r.useEffect(() => {
    let e = o.current;
    return null != e && i(e, t), () => {
      null != e && s(e)
    }
  }, [i, s, t]), n(o)
}

function d() {
  let {
    hasError: e,
    isLoading: t
  } = r.useContext(a);
  return {
    hasError: e,
    isLoading: t
  }
}