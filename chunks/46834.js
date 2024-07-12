r.d(e, {
  Cy: function() {
return A;
  },
  HD: function() {
return s;
  },
  J8: function() {
return l;
  },
  Kj: function() {
return u;
  },
  PO: function() {
return I;
  },
  TX: function() {
return o;
  },
  V9: function() {
return d;
  },
  VW: function() {
return i;
  },
  VZ: function() {
return _;
  },
  cO: function() {
return R;
  },
  fm: function() {
return E;
  },
  i2: function() {
return N;
  },
  kK: function() {
return T;
  },
  pt: function() {
return c;
  }
});
let n = Object.prototype.toString;

function _(t) {
  switch (n.call(t)) {
case '[object Error]':
case '[object Exception]':
case '[object DOMException]':
  return !0;
default:
  return d(t, Error);
  }
}

function a(t, e) {
  return n.call(t) === `[object ${ e }]`;
}

function i(t) {
  return a(t, 'ErrorEvent');
}

function o(t) {
  return a(t, 'DOMError');
}

function E(t) {
  return a(t, 'DOMException');
}

function s(t) {
  return a(t, 'String');
}

function c(t) {
  return null === t || 'object' != typeof t && 'function' != typeof t;
}

function I(t) {
  return a(t, 'Object');
}

function R(t) {
  return 'undefined' != typeof Event && d(t, Event);
}

function T(t) {
  return 'undefined' != typeof Element && d(t, Element);
}

function u(t) {
  return a(t, 'RegExp');
}

function l(t) {
  return !!(t && t.then && 'function' == typeof t.then);
}

function A(t) {
  return I(t) && 'nativeEvent' in t && 'preventDefault' in t && 'stopPropagation' in t;
}

function N(t) {
  return 'number' == typeof t && t != t;
}

function d(t, e) {
  try {
return t instanceof e;
  } catch (t) {
return !1;
  }
}