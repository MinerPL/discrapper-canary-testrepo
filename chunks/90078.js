n.d(t, {
  r: function() {
return c;
  }
});
var r = n(470079),
  i = n(234366),
  a = n(705942),
  s = n(566833),
  o = function() {},
  l = function() {
return Promise.resolve(null);
  },
  u = [];

function c(e) {
  var t = e.placement,
n = void 0 === t ? 'bottom' : t,
c = e.strategy,
d = void 0 === c ? 'absolute' : c,
_ = e.modifiers,
E = void 0 === _ ? u : _,
f = e.referenceElement,
h = e.onFirstUpdate,
p = e.innerRef,
m = e.children,
I = r.useContext(i.C8),
T = r.useState(null),
g = T[0],
S = T[1],
A = r.useState(null),
N = A[0],
v = A[1];
  r.useEffect(function() {
(0, a.k$)(p, g);
  }, [
p,
g
  ]);
  var O = r.useMemo(function() {
  return {
    placement: n,
    strategy: d,
    onFirstUpdate: h,
    modifiers: [].concat(E, [{
      name: 'arrow',
      enabled: null != N,
      options: {
        element: N
      }
    }])
  };
}, [
  n,
  d,
  h,
  E,
  N
]),
R = (0, s.D)(f || I, g, O),
C = R.state,
y = R.styles,
D = R.forceUpdate,
L = R.update,
b = r.useMemo(function() {
  return {
    ref: S,
    style: y.popper,
    placement: C ? C.placement : n,
    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
    arrowProps: {
      style: y.arrow,
      ref: v
    },
    forceUpdate: D || o,
    update: L || l
  };
}, [
  S,
  v,
  n,
  C,
  y,
  L,
  D
]);
  return (0, a.$p)(m)(b);
}