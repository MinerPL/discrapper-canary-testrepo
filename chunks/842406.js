var r = n(607974),
  i = n(350434),
  a = n(91826),
  o = n(400194);

function s(e) {
  return e.call.bind(e);
}
var l = 'undefined' != typeof BigInt,
  u = 'undefined' != typeof Symbol,
  c = s(Object.prototype.toString),
  d = s(Number.prototype.valueOf),
  _ = s(String.prototype.valueOf),
  E = s(Boolean.prototype.valueOf);
if (l)
  var f = s(BigInt.prototype.valueOf);
if (u)
  var h = s(Symbol.prototype.valueOf);

function p(e, t) {
  if ('object' != typeof e)
return !1;
  try {
return t(e), !0;
  } catch (e) {
return !1;
  }
}
t.isArgumentsObject = r, t.isGeneratorFunction = i, t.isTypedArray = o;
t.isPromise = function(e) {
  return 'undefined' != typeof Promise && e instanceof Promise || null !== e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch;
};
t.isArrayBufferView = function(e) {
  return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : o(e) || v(e);
};
t.isUint8Array = function(e) {
  return 'Uint8Array' === a(e);
};
t.isUint8ClampedArray = function(e) {
  return 'Uint8ClampedArray' === a(e);
};
t.isUint16Array = function(e) {
  return 'Uint16Array' === a(e);
};
t.isUint32Array = function(e) {
  return 'Uint32Array' === a(e);
};
t.isInt8Array = function(e) {
  return 'Int8Array' === a(e);
};
t.isInt16Array = function(e) {
  return 'Int16Array' === a(e);
};
t.isInt32Array = function(e) {
  return 'Int32Array' === a(e);
};
t.isFloat32Array = function(e) {
  return 'Float32Array' === a(e);
};
t.isFloat64Array = function(e) {
  return 'Float64Array' === a(e);
};
t.isBigInt64Array = function(e) {
  return 'BigInt64Array' === a(e);
};

function m(e) {
  return '[object Map]' === c(e);
}
t.isBigUint64Array = function(e) {
  return 'BigUint64Array' === a(e);
}, m.working = 'undefined' != typeof Map && m(new Map());

function I(e) {
  return '[object Set]' === c(e);
}
t.isMap = function(e) {
  return 'undefined' != typeof Map && (m.working ? m(e) : e instanceof Map);
}, I.working = 'undefined' != typeof Set && I(new Set());

function T(e) {
  return '[object WeakMap]' === c(e);
}
t.isSet = function(e) {
  return 'undefined' != typeof Set && (I.working ? I(e) : e instanceof Set);
}, T.working = 'undefined' != typeof WeakMap && T(new WeakMap());

function g(e) {
  return '[object WeakSet]' === c(e);
}
t.isWeakMap = function(e) {
  return 'undefined' != typeof WeakMap && (T.working ? T(e) : e instanceof WeakMap);
}, g.working = 'undefined' != typeof WeakSet && g(new WeakSet());

function S(e) {
  return '[object ArrayBuffer]' === c(e);
}

function A(e) {
  return 'undefined' != typeof ArrayBuffer && (S.working ? S(e) : e instanceof ArrayBuffer);
}

function N(e) {
  return '[object DataView]' === c(e);
}

function v(e) {
  return 'undefined' != typeof DataView && (N.working ? N(e) : e instanceof DataView);
}
t.isWeakSet = function(e) {
  return g(e);
}, S.working = 'undefined' != typeof ArrayBuffer && S(new ArrayBuffer()), t.isArrayBuffer = A, N.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && N(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = v;
var O = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

function R(e) {
  return '[object SharedArrayBuffer]' === c(e);
}

function C(e) {
  return void 0 !== O && (void 0 === R.working && (R.working = R(new O())), R.working ? R(e) : e instanceof O);
}
t.isSharedArrayBuffer = C;
t.isAsyncFunction = function(e) {
  return '[object AsyncFunction]' === c(e);
};
t.isMapIterator = function(e) {
  return '[object Map Iterator]' === c(e);
};
t.isSetIterator = function(e) {
  return '[object Set Iterator]' === c(e);
};
t.isGeneratorObject = function(e) {
  return '[object Generator]' === c(e);
};

function y(e) {
  return p(e, d);
}

function D(e) {
  return p(e, _);
}

function L(e) {
  return p(e, E);
}

function b(e) {
  return l && p(e, f);
}

function M(e) {
  return u && p(e, h);
}
t.isWebAssemblyCompiledModule = function(e) {
  return '[object WebAssembly.Module]' === c(e);
}, t.isNumberObject = y, t.isStringObject = D, t.isBooleanObject = L, t.isBigIntObject = b, t.isSymbolObject = M;
t.isBoxedPrimitive = function(e) {
  return y(e) || D(e) || L(e) || b(e) || M(e);
};
t.isAnyArrayBuffer = function(e) {
  return 'undefined' != typeof Uint8Array && (A(e) || C(e));
}, [
  'isProxy',
  'isExternal',
  'isModuleNamespaceObject'
].forEach(function(e) {
  Object.defineProperty(t, e, {
enumerable: !1,
value: function() {
  throw Error(e + ' is not supported in userland');
}
  });
});