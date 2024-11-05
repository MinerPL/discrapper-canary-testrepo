var r,
    i = SyntaxError,
    a = Function,
    s = TypeError,
    o = function (e) {
        try {
        } catch (e) {}
    },
    l = Object.getOwnPropertyDescriptor;
if (l)
    try {
        l({}, '');
    } catch (e) {
        l = null;
    }
var u = function () {
        throw new s();
    },
    c = l
        ? (function () {
              try {
                  return arguments.callee, u;
              } catch (e) {
                  try {
                      return l(arguments, 'callee').get;
                  } catch (e) {
                      return u;
                  }
              }
          })()
        : u,
    d = n(322499)(),
    f = n(79536)(),
    _ =
        Object.getPrototypeOf ||
        (f
            ? function (e) {
                  return e.__proto__;
              }
            : null),
    h = {},
    p = 'undefined' != typeof Uint8Array && _ ? _(Uint8Array) : r,
    m = {
        '%AggregateError%': 'undefined' == typeof AggregateError ? r : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
        '%ArrayIteratorPrototype%': d && _ ? _([][Symbol.iterator]()) : r,
        '%AsyncFromSyncIteratorPrototype%': r,
        '%AsyncFunction%': h,
        '%AsyncGenerator%': h,
        '%AsyncGeneratorFunction%': h,
        '%AsyncIteratorPrototype%': h,
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
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': 'undefined' == typeof Float32Array ? r : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? r : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? r : FinalizationRegistry,
        '%Function%': a,
        '%GeneratorFunction%': h,
        '%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': d && _ ? _(_([][Symbol.iterator]())) : r,
        '%JSON%': 'object' == typeof JSON ? JSON : r,
        '%Map%': 'undefined' == typeof Map ? r : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && d && _ ? _(new Map()[Symbol.iterator]()) : r,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? r : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? r : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && d && _ ? _(new Set()[Symbol.iterator]()) : r,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': d && _ ? _(''[Symbol.iterator]()) : r,
        '%Symbol%': d ? Symbol : r,
        '%SyntaxError%': i,
        '%ThrowTypeError%': c,
        '%TypedArray%': p,
        '%TypeError%': s,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? r : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? r : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet
    };
if (_)
    try {
        null.error;
    } catch (e) {
        var g = _(_(e));
        m['%Error.prototype%'] = g;
    }
var E = function e(t) {
        var n;
        if ('%AsyncFunction%' === t) n = o('async function () {}');
        else if ('%GeneratorFunction%' === t) n = o('function* () {}');
        else if ('%AsyncGeneratorFunction%' === t) n = o('async function* () {}');
        else if ('%AsyncGenerator%' === t) {
            var r = e('%AsyncGeneratorFunction%');
            r && (n = r.prototype);
        } else if ('%AsyncIteratorPrototype%' === t) {
            var i = e('%AsyncGenerator%');
            i && _ && (n = _(i.prototype));
        }
        return (m[t] = n), n;
    },
    v = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype']
    },
    I = n(390976),
    S = n(706165),
    T = I.call(Function.call, Array.prototype.concat),
    b = I.call(Function.apply, Array.prototype.splice),
    y = I.call(Function.call, String.prototype.replace),
    A = I.call(Function.call, String.prototype.slice),
    N = I.call(Function.call, RegExp.prototype.exec),
    C = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    R = /\\(\\)?/g,
    O = function (e) {
        var t = A(e, 0, 1),
            n = A(e, -1);
        if ('%' === t && '%' !== n) throw new i('invalid intrinsic syntax, expected closing `%`');
        if ('%' === n && '%' !== t) throw new i('invalid intrinsic syntax, expected opening `%`');
        var r = [];
        return (
            y(e, C, function (e, t, n, i) {
                r[r.length] = n ? y(i, R, '$1') : t || e;
            }),
            r
        );
    },
    D = function (e, t) {
        var n,
            r = e;
        if ((S(v, r) && (r = '%' + (n = v[r])[0] + '%'), S(m, r))) {
            var a = m[r];
            if ((a === h && (a = E(r)), void 0 === a && !t)) throw new s('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: n,
                name: r,
                value: a
            };
        }
        throw new i('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, t) {
    if ('string' != typeof e || 0 === e.length) throw new s('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof t) throw new s('"allowMissing" argument must be a boolean');
    if (null === N(/^%?[^%]*%?$/, e)) throw new i('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var n = O(e),
        r = n.length > 0 ? n[0] : '',
        a = D('%' + r + '%', t),
        o = a.name,
        u = a.value,
        c = !1,
        d = a.alias;
    d && ((r = d[0]), b(n, T([0, 1], d)));
    for (var f = 1, _ = !0; f < n.length; f += 1) {
        var h = n[f],
            p = A(h, 0, 1),
            g = A(h, -1);
        if (('"' === p || "'" === p || '`' === p || '"' === g || "'" === g || '`' === g) && p !== g) throw new i('property names with quotes must have matching quotes');
        if ((('constructor' === h || !_) && (c = !0), (r += '.' + h), S(m, (o = '%' + r + '%')))) u = m[o];
        else if (null != u) {
            if (!(h in u)) {
                if (!t) throw new s('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (l && f + 1 >= n.length) {
                var E = l(u, h);
                u = (_ = !!E) && 'get' in E && !('originalValue' in E.get) ? E.get : u[h];
            } else (_ = S(u, h)), (u = u[h]);
            _ && !c && (m[o] = u);
        }
    }
    return u;
};
