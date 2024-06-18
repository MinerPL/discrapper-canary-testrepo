"use strict";
var r, i = SyntaxError,
  a = Function,
  o = TypeError,
  s = function(e) {
    try {
      return a('"use strict"; return (' + e + ").constructor;")()
    } catch (e) {}
  },
  u = Object.getOwnPropertyDescriptor;
if (u) try {
  u({}, "")
} catch (e) {
  u = null
}
var c = function() {
    throw new o
  },
  l = u ? function() {
    try {
      return arguments.callee, c
    } catch (e) {
      try {
        return u(arguments, "callee").get
      } catch (e) {
        return c
      }
    }
  }() : c,
  d = n(322499)(),
  f = n(79536)(),
  p = Object.getPrototypeOf || (f ? function(e) {
    return e.__proto__
  } : null),
  h = {},
  m = "undefined" != typeof Uint8Array && p ? p(Uint8Array) : r,
  g = {
    "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
    "%ArrayIteratorPrototype%": d && p ? p([][Symbol.iterator]()) : r,
    "%AsyncFromSyncIteratorPrototype%": r,
    "%AsyncFunction%": h,
    "%AsyncGenerator%": h,
    "%AsyncGeneratorFunction%": h,
    "%AsyncIteratorPrototype%": h,
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
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
    "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
    "%Function%": a,
    "%GeneratorFunction%": h,
    "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
    "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
    "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": d && p ? p(p([][Symbol.iterator]())) : r,
    "%JSON%": "object" == typeof JSON ? JSON : r,
    "%Map%": "undefined" == typeof Map ? r : Map,
    "%MapIteratorPrototype%": "undefined" != typeof Map && d && p ? p(new Map()[Symbol.iterator]()) : r,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "undefined" == typeof Promise ? r : Promise,
    "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
    "%RegExp%": RegExp,
    "%Set%": "undefined" == typeof Set ? r : Set,
    "%SetIteratorPrototype%": "undefined" != typeof Set && d && p ? p(new Set()[Symbol.iterator]()) : r,
    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": d && p ? p("" [Symbol.iterator]()) : r,
    "%Symbol%": d ? Symbol : r,
    "%SyntaxError%": i,
    "%ThrowTypeError%": l,
    "%TypedArray%": m,
    "%TypeError%": o,
    "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
    "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
    "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
    "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
    "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
  };
if (p) try {
  null.error
} catch (e) {
  var _ = p(p(e));
  g["%Error.prototype%"] = _
}
var b = function e(t) {
    var n;
    if ("%AsyncFunction%" === t) n = s("async function () {}");
    else if ("%GeneratorFunction%" === t) n = s("function* () {}");
    else if ("%AsyncGeneratorFunction%" === t) n = s("async function* () {}");
    else if ("%AsyncGenerator%" === t) {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype)
    } else if ("%AsyncIteratorPrototype%" === t) {
      var i = e("%AsyncGenerator%");
      i && p && (n = p(i.prototype))
    }
    return g[t] = n, n
  },
  v = {
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
  y = n(390976),
  E = n(706165),
  S = y.call(Function.call, Array.prototype.concat),
  x = y.call(Function.apply, Array.prototype.splice),
  w = y.call(Function.call, String.prototype.replace),
  C = y.call(Function.call, String.prototype.slice),
  T = y.call(Function.call, RegExp.prototype.exec),
  D = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  M = /\\(\\)?/g,
  O = function(e) {
    var t = C(e, 0, 1),
      n = C(e, -1);
    if ("%" === t && "%" !== n) throw new i("invalid intrinsic syntax, expected closing `%`");
    if ("%" === n && "%" !== t) throw new i("invalid intrinsic syntax, expected opening `%`");
    var r = [];
    return w(e, D, function(e, t, n, i) {
      r[r.length] = n ? w(i, M, "$1") : t || e
    }), r
  },
  A = function(e, t) {
    var n, r = e;
    if (E(v, r) && (r = "%" + (n = v[r])[0] + "%"), E(g, r)) {
      var a = g[r];
      if (a === h && (a = b(r)), void 0 === a && !t) throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: n,
        name: r,
        value: a
      }
    }
    throw new i("intrinsic " + e + " does not exist!")
  };
e.exports = function(e, t) {
  if ("string" != typeof e || 0 === e.length) throw new o("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof t) throw new o('"allowMissing" argument must be a boolean');
  if (null === T(/^%?[^%]*%?$/, e)) throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = O(e),
    r = n.length > 0 ? n[0] : "",
    a = A("%" + r + "%", t),
    s = a.name,
    c = a.value,
    l = !1,
    d = a.alias;
  d && (r = d[0], x(n, S([0, 1], d)));
  for (var f = 1, p = !0; f < n.length; f += 1) {
    var h = n[f],
      m = C(h, 0, 1),
      _ = C(h, -1);
    if (('"' === m || "'" === m || "`" === m || '"' === _ || "'" === _ || "`" === _) && m !== _) throw new i("property names with quotes must have matching quotes");
    if (("constructor" === h || !p) && (l = !0), r += "." + h, E(g, s = "%" + r + "%")) c = g[s];
    else if (null != c) {
      if (!(h in c)) {
        if (!t) throw new o("base intrinsic for " + e + " exists, but the property is not available.");
        return
      }
      if (u && f + 1 >= n.length) {
        var b = u(c, h);
        c = (p = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : c[h]
      } else p = E(c, h), c = c[h];
      p && !l && (g[s] = c)
    }
  }
  return c
}