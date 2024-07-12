var n = 'function' == typeof Symbol && Symbol.for,
  r = n ? Symbol.for('react.element') : 60103,
  i = n ? Symbol.for('react.portal') : 60106,
  a = n ? Symbol.for('react.fragment') : 60107,
  o = n ? Symbol.for('react.strict_mode') : 60108,
  s = n ? Symbol.for('react.profiler') : 60114,
  l = n ? Symbol.for('react.provider') : 60109,
  u = n ? Symbol.for('react.context') : 60110,
  c = n ? Symbol.for('react.async_mode') : 60111,
  d = n ? Symbol.for('react.concurrent_mode') : 60111,
  _ = n ? Symbol.for('react.forward_ref') : 60112,
  E = n ? Symbol.for('react.suspense') : 60113,
  f = n ? Symbol.for('react.suspense_list') : 60120,
  h = n ? Symbol.for('react.memo') : 60115,
  p = n ? Symbol.for('react.lazy') : 60116,
  m = n ? Symbol.for('react.block') : 60121,
  I = n ? Symbol.for('react.fundamental') : 60117,
  T = n ? Symbol.for('react.responder') : 60118,
  g = n ? Symbol.for('react.scope') : 60119;

function S(e) {
  if ('object' == typeof e && null !== e) {
var t = e.$$typeof;
switch (t) {
  case r:
    switch (e = e.type) {
      case c:
      case d:
      case a:
      case s:
      case o:
      case E:
        return e;
      default:
        switch (e = e && e.$$typeof) {
          case u:
          case _:
          case p:
          case h:
          case l:
            return e;
          default:
            return t;
        }
    }
  case i:
    return t;
}
  }
}

function A(e) {
  return S(e) === d;
}
t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = _, t.Fragment = a, t.Lazy = p, t.Memo = h, t.Portal = i, t.Profiler = s, t.StrictMode = o, t.Suspense = E, t.isAsyncMode = function(e) {
  return A(e) || S(e) === c;
}, t.isConcurrentMode = A, t.isContextConsumer = function(e) {
  return S(e) === u;
}, t.isContextProvider = function(e) {
  return S(e) === l;
}, t.isElement = function(e) {
  return 'object' == typeof e && null !== e && e.$$typeof === r;
}, t.isForwardRef = function(e) {
  return S(e) === _;
}, t.isFragment = function(e) {
  return S(e) === a;
}, t.isLazy = function(e) {
  return S(e) === p;
}, t.isMemo = function(e) {
  return S(e) === h;
}, t.isPortal = function(e) {
  return S(e) === i;
}, t.isProfiler = function(e) {
  return S(e) === s;
}, t.isStrictMode = function(e) {
  return S(e) === o;
}, t.isSuspense = function(e) {
  return S(e) === E;
}, t.isValidElementType = function(e) {
  return 'string' == typeof e || 'function' == typeof e || e === a || e === d || e === s || e === o || e === E || e === f || 'object' == typeof e && null !== e && (e.$$typeof === p || e.$$typeof === h || e.$$typeof === l || e.$$typeof === u || e.$$typeof === _ || e.$$typeof === I || e.$$typeof === T || e.$$typeof === g || e.$$typeof === m);
}, t.typeOf = S;