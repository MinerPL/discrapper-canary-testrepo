"use strict";
var r, i = n(401801),
  a = n(104509),
  o = n(333567),
  s = n(284456),
  u = n(429675),
  c = n(815329),
  l = n(102099),
  d = Function,
  f = function(e) {
    try {
      return d('"use strict"; return (' + e + ").constructor;")()
    } catch (e) {}
  },
  p = Object.getOwnPropertyDescriptor;
if (p) try {
  p({}, "")
} catch (e) {
  p = null
}
var h = function() {
    throw new c
  },
  m = p ? function() {
    try {
      return arguments.callee, h
    } catch (e) {
      try {
        return p(arguments, "callee").get
      } catch (e) {
        return h
      }
    }
  }() : h,
  g = n(322499)(),
  _ = n(79536)(),
  b = Object.getPrototypeOf || (_ ? function(e) {
    return e.__proto__
  } : null),
  v = {},
  y = "undefined" != typeof Uint8Array && b ? b(Uint8Array) : r,
  E = {
    __proto__: null,
    "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
    "%ArrayIteratorPrototype%": g && b ? b([][Symbol.iterator]()) : r,
    "%AsyncFromSyncIteratorPrototype%": r,
    "%AsyncFunction%": v,
    "%AsyncGenerator%": v,
    "%AsyncGeneratorFunction%": v,
    "%AsyncIteratorPrototype%": v,
    "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
    "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": "undefined" == typeof DataView ? r : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": i,
    "%eval%": eval,
    "%EvalError%": a,
    "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
    "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
    "%Function%": d,
    "%GeneratorFunction%": v,
    "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
    "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
    "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": g && b ? b(b([][Symbol.iterator]())) : r,
    "%JSON%": "object" == typeof JSON ? JSON : r,
    "%Map%": "undefined" == typeof Map ? r : Map,
    "%MapIteratorPrototype%": "undefined" != typeof Map && g && b ? b(new Map()[Symbol.iterator]()) : r,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "undefined" == typeof Promise ? r : Promise,
    "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": s,
    "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
    "%RegExp%": RegExp,
    "%Set%": "undefined" == typeof Set ? r : Set,
    "%SetIteratorPrototype%": "undefined" != typeof Set && g && b ? b(new Set()[Symbol.iterator]()) : r,
    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": g && b ? b("" [Symbol.iterator]()) : r,
    "%Symbol%": g ? Symbol : r,
    "%SyntaxError%": u,
    "%ThrowTypeError%": m,
    "%TypedArray%": y,
    "%TypeError%": c,
    "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
    "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
    "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
    "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
    "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
  };
if (b) try {
  null.error
} catch (e) {
  var S = b(b(e));
  E["%Error.prototype%"] = S
}
var x = function e(t) {
    var n;
    if ("%AsyncFunction%" === t) n = f("async function () {}");
    else if ("%GeneratorFunction%" === t) n = f("function* () {}");
    else if ("%AsyncGeneratorFunction%" === t) n = f("async function* () {}");
    else if ("%AsyncGenerator%" === t) {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype)
    } else if ("%AsyncIteratorPrototype%" === t) {
      var i = e("%AsyncGenerator%");
      i && b && (n = b(i.prototype))
    }
    return E[t] = n, n
  },
  w = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  },
  C = n(390976),
  T = n(706165),
  D = C.call(Function.call, Array.prototype.concat),
  M = C.call(Function.apply, Array.prototype.splice),
  O = C.call(Function.call, String.prototype.replace),
  A = C.call(Function.call, String.prototype.slice),
  k = C.call(Function.call, RegExp.prototype.exec),
  R = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  N = /\\(\\)?/g,
  I = function(e) {
    var t = A(e, 0, 1),
      n = A(e, -1);
    if ("%" === t && "%" !== n) throw new u("invalid intrinsic syntax, expected closing `%`");
    if ("%" === n && "%" !== t) throw new u("invalid intrinsic syntax, expected opening `%`");
    var r = [];
    return O(e, R, function(e, t, n, i) {
      r[r.length] = n ? O(i, N, "$1") : t || e
    }), r
  },
  L = function(e, t) {
    var n, r = e;
    if (T(w, r) && (r = "%" + (n = w[r])[0] + "%"), T(E, r)) {
      var i = E[r];
      if (i === v && (i = x(r)), void 0 === i && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: n,
        name: r,
        value: i
      }
    }
    throw new u("intrinsic " + e + " does not exist!")
  };
e.exports = function(e, t) {
  if ("string" != typeof e || 0 === e.length) throw new c("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof t) throw new c('"allowMissing" argument must be a boolean');
  if (null === k(/^%?[^%]*%?$/, e)) throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = I(e),
    r = n.length > 0 ? n[0] : "",
    i = L("%" + r + "%", t),
    a = i.name,
    o = i.value,
    s = !1,
    l = i.alias;
  l && (r = l[0], M(n, D([0, 1], l)));
  for (var d = 1, f = !0; d < n.length; d += 1) {
    var h = n[d],
      m = A(h, 0, 1),
      g = A(h, -1);
    if (('"' === m || "'" === m || "`" === m || '"' === g || "'" === g || "`" === g) && m !== g) throw new u("property names with quotes must have matching quotes");
    if (("constructor" === h || !f) && (s = !0), r += "." + h, T(E, a = "%" + r + "%")) o = E[a];
    else if (null != o) {
      if (!(h in o)) {
        if (!t) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
        return
      }
      if (p && d + 1 >= n.length) {
        var _ = p(o, h);
        o = (f = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : o[h]
      } else f = T(o, h), o = o[h];
      f && !s && (E[a] = o)
    }
  }
  return o
}