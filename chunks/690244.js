var r, i = n(401801),
  a = n(104509),
  s = n(333567),
  o = n(284456),
  l = n(429675),
  u = n(815329),
  c = n(102099),
  d = Function,
  _ = function(e) {
try {
} catch (e) {}
  },
  E = Object.getOwnPropertyDescriptor;
if (E)
  try {
E({}, '');
  } catch (e) {
E = null;
  }
var f = function() {
throw new u();
  },
  h = E ? function() {
try {
  return arguments.callee, f;
} catch (e) {
  try {
    return E(arguments, 'callee').get;
  } catch (e) {
    return f;
  }
}
  }() : f,
  p = n(322499)(),
  m = n(79536)(),
  I = Object.getPrototypeOf || (m ? function(e) {
return e.__proto__;
  } : null),
  T = {},
  g = 'undefined' != typeof Uint8Array && I ? I(Uint8Array) : r,
  S = {
__proto__: null,
'%AggregateError%': 'undefined' == typeof AggregateError ? r : AggregateError,
'%Array%': Array,
'%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
'%ArrayIteratorPrototype%': p && I ? I([][Symbol.iterator]()) : r,
'%AsyncFromSyncIteratorPrototype%': r,
'%AsyncFunction%': T,
'%AsyncGenerator%': T,
'%AsyncGeneratorFunction%': T,
'%AsyncIteratorPrototype%': T,
'%Atomics%': 'undefined' == typeof Atomics ? r : Atomics,
'%BigInt%': 'undefined' == typeof BigInt ? r : BigInt,
'%BigInt64Array%': 'undefined' == typeof BigInt64Array ? r : BigInt64Array,
'%BigUint64Array%': 'undefined' == typeof BigUint64Array ? r : BigUint64Array,
'%Boolean%': Boolean,
'%DataView%': 'undefined' == typeof DataView ? r : DataView,
'%Date%': Date,
'%decodeURI%': decodeURI,
'%decodeURIComponent%': decodeURIComponent,
'%encodeURI%': encodeURI,
'%encodeURIComponent%': encodeURIComponent,
'%Error%': i,
'%eval%': eval,
'%EvalError%': a,
'%Float32Array%': 'undefined' == typeof Float32Array ? r : Float32Array,
'%Float64Array%': 'undefined' == typeof Float64Array ? r : Float64Array,
'%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? r : FinalizationRegistry,
'%Function%': d,
'%GeneratorFunction%': T,
'%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
'%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
'%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
'%isFinite%': isFinite,
'%isNaN%': isNaN,
'%IteratorPrototype%': p && I ? I(I([][Symbol.iterator]())) : r,
'%JSON%': 'object' == typeof JSON ? JSON : r,
'%Map%': 'undefined' == typeof Map ? r : Map,
'%MapIteratorPrototype%': 'undefined' != typeof Map && p && I ? I(new Map()[Symbol.iterator]()) : r,
'%Math%': Math,
'%Number%': Number,
'%Object%': Object,
'%parseFloat%': parseFloat,
'%parseInt%': parseInt,
'%Promise%': 'undefined' == typeof Promise ? r : Promise,
'%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
'%RangeError%': s,
'%ReferenceError%': o,
'%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
'%RegExp%': RegExp,
'%Set%': 'undefined' == typeof Set ? r : Set,
'%SetIteratorPrototype%': 'undefined' != typeof Set && p && I ? I(new Set()[Symbol.iterator]()) : r,
'%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
'%String%': String,
'%StringIteratorPrototype%': p && I ? I('' [Symbol.iterator]()) : r,
'%Symbol%': p ? Symbol : r,
'%SyntaxError%': l,
'%ThrowTypeError%': h,
'%TypedArray%': g,
'%TypeError%': u,
'%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
'%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
'%Uint16Array%': 'undefined' == typeof Uint16Array ? r : Uint16Array,
'%Uint32Array%': 'undefined' == typeof Uint32Array ? r : Uint32Array,
'%URIError%': c,
'%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
'%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
'%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet
  };
if (I)
  try {
null.error;
  } catch (e) {
var A = I(I(e));
S['%Error.prototype%'] = A;
  }
var N = function e(t) {
var n;
if ('%AsyncFunction%' === t)
  n = _('async function () {}');
else if ('%GeneratorFunction%' === t)
  n = _('function* () {}');
else if ('%AsyncGeneratorFunction%' === t)
  n = _('async function* () {}');
else if ('%AsyncGenerator%' === t) {
  var r = e('%AsyncGeneratorFunction%');
  r && (n = r.prototype);
} else if ('%AsyncIteratorPrototype%' === t) {
  var i = e('%AsyncGenerator%');
  i && I && (n = I(i.prototype));
}
return S[t] = n, n;
  },
  v = {
__proto__: null,
'%ArrayBufferPrototype%': [
  'ArrayBuffer',
  'prototype'
],
'%ArrayPrototype%': [
  'Array',
  'prototype'
],
'%ArrayProto_entries%': [
  'Array',
  'prototype',
  'entries'
],
'%ArrayProto_forEach%': [
  'Array',
  'prototype',
  'forEach'
],
'%ArrayProto_keys%': [
  'Array',
  'prototype',
  'keys'
],
'%ArrayProto_values%': [
  'Array',
  'prototype',
  'values'
],
'%AsyncFunctionPrototype%': [
  'AsyncFunction',
  'prototype'
],
'%AsyncGenerator%': [
  'AsyncGeneratorFunction',
  'prototype'
],
'%AsyncGeneratorPrototype%': [
  'AsyncGeneratorFunction',
  'prototype',
  'prototype'
],
'%BooleanPrototype%': [
  'Boolean',
  'prototype'
],
'%DataViewPrototype%': [
  'DataView',
  'prototype'
],
'%DatePrototype%': [
  'Date',
  'prototype'
],
'%ErrorPrototype%': [
  'Error',
  'prototype'
],
'%EvalErrorPrototype%': [
  'EvalError',
  'prototype'
],
'%Float32ArrayPrototype%': [
  'Float32Array',
  'prototype'
],
'%Float64ArrayPrototype%': [
  'Float64Array',
  'prototype'
],
'%FunctionPrototype%': [
  'Function',
  'prototype'
],
'%Generator%': [
  'GeneratorFunction',
  'prototype'
],
'%GeneratorPrototype%': [
  'GeneratorFunction',
  'prototype',
  'prototype'
],
'%Int8ArrayPrototype%': [
  'Int8Array',
  'prototype'
],
'%Int16ArrayPrototype%': [
  'Int16Array',
  'prototype'
],
'%Int32ArrayPrototype%': [
  'Int32Array',
  'prototype'
],
'%JSONParse%': [
  'JSON',
  'parse'
],
'%JSONStringify%': [
  'JSON',
  'stringify'
],
'%MapPrototype%': [
  'Map',
  'prototype'
],
'%NumberPrototype%': [
  'Number',
  'prototype'
],
'%ObjectPrototype%': [
  'Object',
  'prototype'
],
'%ObjProto_toString%': [
  'Object',
  'prototype',
  'toString'
],
'%ObjProto_valueOf%': [
  'Object',
  'prototype',
  'valueOf'
],
'%PromisePrototype%': [
  'Promise',
  'prototype'
],
'%PromiseProto_then%': [
  'Promise',
  'prototype',
  'then'
],
'%Promise_all%': [
  'Promise',
  'all'
],
'%Promise_reject%': [
  'Promise',
  'reject'
],
'%Promise_resolve%': [
  'Promise',
  'resolve'
],
'%RangeErrorPrototype%': [
  'RangeError',
  'prototype'
],
'%ReferenceErrorPrototype%': [
  'ReferenceError',
  'prototype'
],
'%RegExpPrototype%': [
  'RegExp',
  'prototype'
],
'%SetPrototype%': [
  'Set',
  'prototype'
],
'%SharedArrayBufferPrototype%': [
  'SharedArrayBuffer',
  'prototype'
],
'%StringPrototype%': [
  'String',
  'prototype'
],
'%SymbolPrototype%': [
  'Symbol',
  'prototype'
],
'%SyntaxErrorPrototype%': [
  'SyntaxError',
  'prototype'
],
'%TypedArrayPrototype%': [
  'TypedArray',
  'prototype'
],
'%TypeErrorPrototype%': [
  'TypeError',
  'prototype'
],
'%Uint8ArrayPrototype%': [
  'Uint8Array',
  'prototype'
],
'%Uint8ClampedArrayPrototype%': [
  'Uint8ClampedArray',
  'prototype'
],
'%Uint16ArrayPrototype%': [
  'Uint16Array',
  'prototype'
],
'%Uint32ArrayPrototype%': [
  'Uint32Array',
  'prototype'
],
'%URIErrorPrototype%': [
  'URIError',
  'prototype'
],
'%WeakMapPrototype%': [
  'WeakMap',
  'prototype'
],
'%WeakSetPrototype%': [
  'WeakSet',
  'prototype'
]
  },
  O = n(390976),
  R = n(706165),
  C = O.call(Function.call, Array.prototype.concat),
  y = O.call(Function.apply, Array.prototype.splice),
  D = O.call(Function.call, String.prototype.replace),
  L = O.call(Function.call, String.prototype.slice),
  b = O.call(Function.call, RegExp.prototype.exec),
  M = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  P = /\\(\\)?/g,
  U = function(e) {
var t = L(e, 0, 1),
  n = L(e, -1);
if ('%' === t && '%' !== n)
  throw new l('invalid intrinsic syntax, expected closing `%`');
if ('%' === n && '%' !== t)
  throw new l('invalid intrinsic syntax, expected opening `%`');
var r = [];
return D(e, M, function(e, t, n, i) {
  r[r.length] = n ? D(i, P, '$1') : t || e;
}), r;
  },
  w = function(e, t) {
var n, r = e;
if (R(v, r) && (r = '%' + (n = v[r])[0] + '%'), R(S, r)) {
  var i = S[r];
  if (i === T && (i = N(r)), void 0 === i && !t)
    throw new u('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
  return {
    alias: n,
    name: r,
    value: i
  };
}
throw new l('intrinsic ' + e + ' does not exist!');
  };
e.exports = function(e, t) {
  if ('string' != typeof e || 0 === e.length)
throw new u('intrinsic name must be a non-empty string');
  if (arguments.length > 1 && 'boolean' != typeof t)
throw new u('"allowMissing" argument must be a boolean');
  if (null === b(/^%?[^%]*%?$/, e))
throw new l('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
  var n = U(e),
r = n.length > 0 ? n[0] : '',
i = w('%' + r + '%', t),
a = i.name,
s = i.value,
o = !1,
c = i.alias;
  c && (r = c[0], y(n, C([
0,
1
  ], c)));
  for (var d = 1, _ = !0; d < n.length; d += 1) {
var f = n[d],
  h = L(f, 0, 1),
  p = L(f, -1);
if (('"' === h || '\'' === h || '`' === h || '"' === p || '\'' === p || '`' === p) && h !== p)
  throw new l('property names with quotes must have matching quotes');
if (('constructor' === f || !_) && (o = !0), r += '.' + f, R(S, a = '%' + r + '%'))
  s = S[a];
else if (null != s) {
  if (!(f in s)) {
    if (!t)
      throw new u('base intrinsic for ' + e + ' exists, but the property is not available.');
    return;
  }
  if (E && d + 1 >= n.length) {
    var m = E(s, f);
    s = (_ = !!m) && 'get' in m && !('originalValue' in m.get) ? m.get : s[f];
  } else
    _ = R(s, f), s = s[f];
  _ && !o && (S[a] = s);
}
  }
  return s;
};