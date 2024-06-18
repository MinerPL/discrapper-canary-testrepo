"use strict";
n.d(t, {
  r: function() {
    return l
  }
});
var r = n(470079),
  i = n(234366),
  a = n(705942),
  o = n(566833),
  s = function() {},
  u = function() {
    return Promise.resolve(null)
  },
  c = [];

function l(e) {
  var t = e.placement,
    n = void 0 === t ? "bottom" : t,
    l = e.strategy,
    d = void 0 === l ? "absolute" : l,
    f = e.modifiers,
    p = void 0 === f ? c : f,
    h = e.referenceElement,
    m = e.onFirstUpdate,
    g = e.innerRef,
    _ = e.children,
    b = r.useContext(i.C8),
    v = r.useState(null),
    y = v[0],
    E = v[1],
    S = r.useState(null),
    x = S[0],
    w = S[1];
  r.useEffect(function() {
    (0, a.k$)(g, y)
  }, [g, y]);
  var C = r.useMemo(function() {
      return {
        placement: n,
        strategy: d,
        onFirstUpdate: m,
        modifiers: [].concat(p, [{
          name: "arrow",
          enabled: null != x,
          options: {
            element: x
          }
        }])
      }
    }, [n, d, m, p, x]),
    T = (0, o.D)(h || b, y, C),
    D = T.state,
    M = T.styles,
    O = T.forceUpdate,
    A = T.update,
    k = r.useMemo(function() {
      return {
        ref: E,
        style: M.popper,
        placement: D ? D.placement : n,
        hasPopperEscaped: D && D.modifiersData.hide ? D.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: D && D.modifiersData.hide ? D.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: M.arrow,
          ref: w
        },
        forceUpdate: O || s,
        update: A || u
      }
    }, [E, w, n, D, M, A, O]);
  return (0, a.$p)(_)(k)
}