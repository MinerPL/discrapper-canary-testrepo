var r, n;
r = this, n = function() {
  "use strict";
  var t, e, r, n, i, o, a, u, s, c, l = Array.prototype.slice;

  function f(t, e) {
    e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t
  }

  function p(t) {
    return y(t) ? t : Q(t)
  }

  function h(t) {
    return v(t) ? t : tt(t)
  }

  function d(t) {
    return m(t) ? t : te(t)
  }

  function g(t) {
    return y(t) && !_(t) ? t : tr(t)
  }

  function y(t) {
    return !!(t && t[S])
  }

  function v(t) {
    return !!(t && t[w])
  }

  function m(t) {
    return !!(t && t[k])
  }

  function _(t) {
    return v(t) || m(t)
  }

  function b(t) {
    return !!(t && t[x])
  }
  f(h, p), f(d, p), f(g, p), p.isIterable = y, p.isKeyed = v, p.isIndexed = m, p.isAssociative = _, p.isOrdered = b, p.Keyed = h, p.Indexed = d, p.Set = g;
  var S = "@@__IMMUTABLE_ITERABLE__@@",
    w = "@@__IMMUTABLE_KEYED__@@",
    k = "@@__IMMUTABLE_INDEXED__@@",
    x = "@@__IMMUTABLE_ORDERED__@@",
    C = "delete",
    E = 32,
    D = 31,
    O = {},
    K = {
      value: !1
    },
    T = {
      value: !1
    };

  function M(t) {
    return t.value = !1, t
  }

  function A(t) {
    t && (t.value = !0)
  }

  function I() {}

  function B(t, e) {
    e = e || 0;
    for (var r = Math.max(0, t.length - e), n = Array(r), i = 0; i < r; i++) n[i] = t[i + e];
    return n
  }

  function L(t) {
    return void 0 === t.size && (t.size = t.__iterate(N)), t.size
  }

  function R(t, e) {
    if ("number" != typeof e) {
      var r = e >>> 0;
      if ("" + r !== e || 4294967295 === r) return NaN;
      e = r
    }
    return e < 0 ? L(t) + e : e
  }

  function N() {
    return !0
  }

  function F(t, e, r) {
    return (0 === t || void 0 !== r && t <= -r) && (void 0 === e || void 0 !== r && e >= r)
  }

  function z(t, e) {
    return j(t, e, 0)
  }

  function P(t, e) {
    return j(t, e, e)
  }

  function j(t, e, r) {
    return void 0 === t ? r : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t)
  }
  var U = "function" == typeof Symbol && Symbol.iterator,
    q = "@@iterator",
    H = U || q;

  function W(t) {
    this.next = t
  }

  function V(t, e, r, n) {
    var i = 0 === t ? e : 1 === t ? r : [e, r];
    return n ? n.value = i : n = {
      value: i,
      done: !1
    }, n
  }

  function G() {
    return {
      value: void 0,
      done: !0
    }
  }

  function J(t) {
    return !!Z(t)
  }

  function X(t) {
    return t && "function" == typeof t.next
  }

  function Y(t) {
    var e = Z(t);
    return e && e.call(t)
  }

  function Z(t) {
    var e = t && (U && t[U] || t[q]);
    if ("function" == typeof e) return e
  }

  function $(t) {
    return t && "number" == typeof t.length
  }

  function Q(t) {
    return null == t ? tc() : y(t) ? t.toSeq() : function(t) {
      var e = tp(t) || "object" == typeof t && new to(t);
      if (!e) throw TypeError("Expected Array or iterable object of values, or keyed object: " + t);
      return e
    }(t)
  }

  function tt(t) {
    return null == t ? tc().toKeyedSeq() : y(t) ? v(t) ? t.toSeq() : t.fromEntrySeq() : tl(t)
  }

  function te(t) {
    return null == t ? tc() : y(t) ? v(t) ? t.entrySeq() : t.toIndexedSeq() : tf(t)
  }

  function tr(t) {
    return (null == t ? tc() : y(t) ? v(t) ? t.entrySeq() : t : tf(t)).toSetSeq()
  }
  W.prototype.toString = function() {
    return "[Iterator]"
  }, W.KEYS = 0, W.VALUES = 1, W.ENTRIES = 2, W.prototype.inspect = W.prototype.toSource = function() {
    return this.toString()
  }, W.prototype[H] = function() {
    return this
  }, f(Q, p), Q.of = function() {
    return Q(arguments)
  }, Q.prototype.toSeq = function() {
    return this
  }, Q.prototype.toString = function() {
    return this.__toString("Seq {", "}")
  }, Q.prototype.cacheResult = function() {
    return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
  }, Q.prototype.__iterate = function(t, e) {
    return th(this, t, e, !0)
  }, Q.prototype.__iterator = function(t, e) {
    return td(this, t, e, !0)
  }, f(tt, Q), tt.prototype.toKeyedSeq = function() {
    return this
  }, f(te, Q), te.of = function() {
    return te(arguments)
  }, te.prototype.toIndexedSeq = function() {
    return this
  }, te.prototype.toString = function() {
    return this.__toString("Seq [", "]")
  }, te.prototype.__iterate = function(t, e) {
    return th(this, t, e, !1)
  }, te.prototype.__iterator = function(t, e) {
    return td(this, t, e, !1)
  }, f(tr, Q), tr.of = function() {
    return tr(arguments)
  }, tr.prototype.toSetSeq = function() {
    return this
  }, Q.isSeq = ts, Q.Keyed = tt, Q.Set = tr, Q.Indexed = te;
  var tn = "@@__IMMUTABLE_SEQ__@@";

  function ti(t) {
    this._array = t, this.size = t.length
  }

  function to(t) {
    var e = Object.keys(t);
    this._object = t, this._keys = e, this.size = e.length
  }

  function ta(t) {
    this._iterable = t, this.size = t.length || t.size
  }

  function tu(t) {
    this._iterator = t, this._iteratorCache = []
  }

  function ts(t) {
    return !!(t && t[tn])
  }

  function tc() {
    return t || (t = new ti([]))
  }

  function tl(t) {
    var e = Array.isArray(t) ? new ti(t).fromEntrySeq() : X(t) ? new tu(t).fromEntrySeq() : Z(t) ? new ta(t).fromEntrySeq() : "object" == typeof t ? new to(t) : void 0;
    if (!e) throw TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
    return e
  }

  function tf(t) {
    var e = tp(t);
    if (!e) throw TypeError("Expected Array or iterable object of values: " + t);
    return e
  }
  Q.prototype[tn] = !0, f(ti, te), ti.prototype.get = function(t, e) {
    return this.has(t) ? this._array[R(this, t)] : e
  }, ti.prototype.__iterate = function(t, e) {
    for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
      if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
    return i
  }, ti.prototype.__iterator = function(t, e) {
    var r = this._array,
      n = r.length - 1,
      i = 0;
    return new W(function() {
      return i > n ? G() : V(t, i, r[e ? n - i++ : i++])
    })
  }, f(to, tt), to.prototype.get = function(t, e) {
    return void 0 === e || this.has(t) ? this._object[t] : e
  }, to.prototype.has = function(t) {
    return this._object.hasOwnProperty(t)
  }, to.prototype.__iterate = function(t, e) {
    for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; o <= i; o++) {
      var a = n[e ? i - o : o];
      if (!1 === t(r[a], a, this)) return o + 1
    }
    return o
  }, to.prototype.__iterator = function(t, e) {
    var r = this._object,
      n = this._keys,
      i = n.length - 1,
      o = 0;
    return new W(function() {
      var a = n[e ? i - o : o];
      return o++ > i ? G() : V(t, a, r[a])
    })
  }, to.prototype[x] = !0, f(ta, te), ta.prototype.__iterateUncached = function(t, e) {
    if (e) return this.cacheResult().__iterate(t, e);
    var r, n = Y(this._iterable),
      i = 0;
    if (X(n))
      for (; !(r = n.next()).done && !1 !== t(r.value, i++, this););
    return i
  }, ta.prototype.__iteratorUncached = function(t, e) {
    if (e) return this.cacheResult().__iterator(t, e);
    var r = Y(this._iterable);
    if (!X(r)) return new W(G);
    var n = 0;
    return new W(function() {
      var e = r.next();
      return e.done ? e : V(t, n++, e.value)
    })
  }, f(tu, te), tu.prototype.__iterateUncached = function(t, e) {
    if (e) return this.cacheResult().__iterate(t, e);
    for (var r, n = this._iterator, i = this._iteratorCache, o = 0; o < i.length;)
      if (!1 === t(i[o], o++, this)) return o;
    for (; !(r = n.next()).done;) {
      var a = r.value;
      if (i[o] = a, !1 === t(a, o++, this)) break
    }
    return o
  }, tu.prototype.__iteratorUncached = function(t, e) {
    if (e) return this.cacheResult().__iterator(t, e);
    var r = this._iterator,
      n = this._iteratorCache,
      i = 0;
    return new W(function() {
      if (i >= n.length) {
        var e = r.next();
        if (e.done) return e;
        n[i] = e.value
      }
      return V(t, i, n[i++])
    })
  };

  function tp(t) {
    return $(t) ? new ti(t) : X(t) ? new tu(t) : Z(t) ? new ta(t) : void 0
  }

  function th(t, e, r, n) {
    var i = t._cache;
    if (i) {
      for (var o = i.length - 1, a = 0; a <= o; a++) {
        var u = i[r ? o - a : a];
        if (!1 === e(u[1], n ? u[0] : a, t)) return a + 1
      }
      return a
    }
    return t.__iterateUncached(e, r)
  }

  function td(t, e, r, n) {
    var i = t._cache;
    if (i) {
      var o = i.length - 1,
        a = 0;
      return new W(function() {
        var t = i[r ? o - a : a];
        return a++ > o ? G() : V(e, n ? t[0] : a - 1, t[1])
      })
    }
    return t.__iteratorUncached(e, r)
  }

  function tg(t, e) {
    return e ? function t(e, r, n, i) {
      return Array.isArray(r) ? e.call(i, n, te(r).map(function(n, i) {
        return t(e, n, i, r)
      })) : ty(r) ? e.call(i, n, tt(r).map(function(n, i) {
        return t(e, n, i, r)
      })) : r
    }(e, t, "", {
      "": t
    }) : function t(e) {
      return Array.isArray(e) ? te(e).map(t).toList() : ty(e) ? tt(e).map(t).toMap() : e
    }(t)
  }

  function ty(t) {
    return t && (t.constructor === Object || void 0 === t.constructor)
  }

  function tv(t, e) {
    if (t === e || t != t && e != e) return !0;
    if (!t || !e) return !1;
    if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
      if (t = t.valueOf(), t === (e = e.valueOf()) || t != t && e != e) return !0;
      if (!t || !e) return !1
    }
    return !!("function" == typeof t.equals && "function" == typeof e.equals && t.equals(e)) || !1
  }

  function tm(t, e) {
    if (t === e) return !0;
    if (!y(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || v(t) !== v(e) || m(t) !== m(e) || b(t) !== b(e)) return !1;
    if (0 === t.size && 0 === e.size) return !0;
    var r = !_(t);
    if (b(t)) {
      var n = t.entries();
      return e.every(function(t, e) {
        var i = n.next().value;
        return i && tv(i[1], t) && (r || tv(i[0], e))
      }) && n.next().done
    }
    var i = !1;
    if (void 0 === t.size) {
      if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();
      else {
        i = !0;
        var o = t;
        t = e, e = o
      }
    }
    var a = !0,
      u = e.__iterate(function(e, n) {
        if (r ? !t.has(e) : i ? !tv(e, t.get(n, O)) : !tv(t.get(n, O), e)) return a = !1, !1
      });
    return a && t.size === u
  }

  function t_(t, r) {
    if (!(this instanceof t_)) return new t_(t, r);
    if (this._value = t, this.size = void 0 === r ? 1 / 0 : Math.max(0, r), 0 === this.size) {
      if (e) return e;
      e = this
    }
  }

  function tb(t, e) {
    if (!t) throw Error(e)
  }

  function tS(t, e, n) {
    if (!(this instanceof tS)) return new tS(t, e, n);
    if (tb(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
      if (r) return r;
      r = this
    }
  }

  function tw() {
    throw TypeError("Abstract")
  }

  function tk() {}

  function tx() {}

  function tC() {}
  f(t_, te), t_.prototype.toString = function() {
    return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
  }, t_.prototype.get = function(t, e) {
    return this.has(t) ? this._value : e
  }, t_.prototype.includes = function(t) {
    return tv(this._value, t)
  }, t_.prototype.slice = function(t, e) {
    var r, n = this.size;
    return F(t, e, n) ? this : new t_(this._value, j(e, r = n, r) - j(t, n, 0))
  }, t_.prototype.reverse = function() {
    return this
  }, t_.prototype.indexOf = function(t) {
    return tv(this._value, t) ? 0 : -1
  }, t_.prototype.lastIndexOf = function(t) {
    return tv(this._value, t) ? this.size : -1
  }, t_.prototype.__iterate = function(t, e) {
    for (var r = 0; r < this.size; r++)
      if (!1 === t(this._value, r, this)) return r + 1;
    return r
  }, t_.prototype.__iterator = function(t, e) {
    var r = this,
      n = 0;
    return new W(function() {
      return n < r.size ? V(t, n++, r._value) : G()
    })
  }, t_.prototype.equals = function(t) {
    return t instanceof t_ ? tv(this._value, t._value) : tm(t)
  }, f(tS, te), tS.prototype.toString = function() {
    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]"
  }, tS.prototype.get = function(t, e) {
    return this.has(t) ? this._start + R(this, t) * this._step : e
  }, tS.prototype.includes = function(t) {
    var e = (t - this._start) / this._step;
    return e >= 0 && e < this.size && e === Math.floor(e)
  }, tS.prototype.slice = function(t, e) {
    var r;
    if (F(t, e, this.size)) return this;
    return (t = j(t, this.size, 0), (e = j(e, r = this.size, r)) <= t) ? new tS(0, 0) : new tS(this.get(t, this._end), this.get(e, this._end), this._step)
  }, tS.prototype.indexOf = function(t) {
    var e = t - this._start;
    if (e % this._step == 0) {
      var r = e / this._step;
      if (r >= 0 && r < this.size) return r
    }
    return -1
  }, tS.prototype.lastIndexOf = function(t) {
    return this.indexOf(t)
  }, tS.prototype.__iterate = function(t, e) {
    for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; o <= r; o++) {
      if (!1 === t(i, o, this)) return o + 1;
      i += e ? -n : n
    }
    return o
  }, tS.prototype.__iterator = function(t, e) {
    var r = this.size - 1,
      n = this._step,
      i = e ? this._start + r * n : this._start,
      o = 0;
    return new W(function() {
      var a = i;
      return i += e ? -n : n, o > r ? G() : V(t, o++, a)
    })
  }, tS.prototype.equals = function(t) {
    return t instanceof tS ? this._start === t._start && this._end === t._end && this._step === t._step : tm(this, t)
  }, f(tw, p), f(tk, tw), f(tx, tw), f(tC, tw), tw.Keyed = tk, tw.Indexed = tx, tw.Set = tC;
  var tE = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(t, e) {
    var r = 65535 & (t |= 0),
      n = 65535 & (e |= 0);
    return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0
  };

  function tD(t) {
    return t >>> 1 & 1073741824 | 3221225471 & t
  }

  function tO(t) {
    if (!1 === t || null == t || "function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0;
    if (!0 === t) return 1;
    var e = typeof t;
    if ("number" === e) {
      var r = 0 | t;
      for (r !== t && (r ^= 4294967295 * t); t > 4294967295;) t /= 4294967295, r ^= t;
      return tD(r)
    }
    if ("string" === e) return t.length > tL ? function(t) {
      var e = tF[t];
      return void 0 === e && (e = tK(t), tN === tR && (tN = 0, tF = {}), tN++, tF[t] = e), e
    }(t) : tK(t);
    if ("function" == typeof t.hashCode) return t.hashCode();
    if ("object" === e) return function(t) {
      var e;
      if (tA && void 0 !== (e = n.get(t)) || void 0 !== (e = t[tB]) || !tM && (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[tB]) || void 0 !== (e = function(t) {
          if (t && t.nodeType > 0) switch (t.nodeType) {
            case 1:
              return t.uniqueID;
            case 9:
              return t.documentElement && t.documentElement.uniqueID
          }
        }(t)))) return e;
      if (e = ++tI, 1073741824 & tI && (tI = 0), tA) n.set(t, e);
      else if (void 0 !== tT && !1 === tT(t)) throw Error("Non-extensible objects are not allowed as keys.");
      else if (tM) Object.defineProperty(t, tB, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: e
      });
      else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
      }, t.propertyIsEnumerable[tB] = e;
      else if (void 0 !== t.nodeType) t[tB] = e;
      else throw Error("Unable to set a non-enumerable property on object.");
      return e
    }(t);
    if ("function" == typeof t.toString) return tK(t.toString());
    throw Error("Value type " + e + " cannot be hashed.")
  }

  function tK(t) {
    for (var e = 0, r = 0; r < t.length; r++) e = 31 * e + t.charCodeAt(r) | 0;
    return tD(e)
  }
  var tT = Object.isExtensible,
    tM = function() {
      try {
        return Object.defineProperty({}, "@", {}), !0
      } catch (t) {
        return !1
      }
    }(),
    tA = "function" == typeof WeakMap;
  tA && (n = new WeakMap);
  var tI = 0,
    tB = "__immutablehash__";
  "function" == typeof Symbol && (tB = Symbol(tB));
  var tL = 16,
    tR = 255,
    tN = 0,
    tF = {};

  function tz(t) {
    tb(t !== 1 / 0, "Cannot perform this action with an infinite size.")
  }

  function tP(t) {
    return null == t ? tQ() : tj(t) && !b(t) ? t : tQ().withMutations(function(e) {
      var r = h(t);
      tz(r.size), r.forEach(function(t, r) {
        return e.set(r, t)
      })
    })
  }

  function tj(t) {
    return !!(t && t[tU])
  }
  f(tP, tk), tP.prototype.toString = function() {
    return this.__toString("Map {", "}")
  }, tP.prototype.get = function(t, e) {
    return this._root ? this._root.get(0, void 0, t, e) : e
  }, tP.prototype.set = function(t, e) {
    return t0(this, t, e)
  }, tP.prototype.setIn = function(t, e) {
    return this.updateIn(t, O, function() {
      return e
    })
  }, tP.prototype.remove = function(t) {
    return t0(this, t, O)
  }, tP.prototype.deleteIn = function(t) {
    return this.updateIn(t, function() {
      return O
    })
  }, tP.prototype.update = function(t, e, r) {
    return 1 == arguments.length ? t(this) : this.updateIn([t], e, r)
  }, tP.prototype.updateIn = function(t, e, r) {
    !r && (r = e, e = void 0);
    var n = function t(e, r, n, i) {
      var o = e === O,
        a = r.next();
      if (a.done) {
        var u = o ? n : e,
          s = i(u);
        return s === u ? e : s
      }
      tb(o || e && e.set, "invalid keyPath");
      var c = a.value,
        l = o ? O : e.get(c, O),
        f = t(l, r, n, i);
      return f === l ? e : f === O ? e.remove(c) : (o ? tQ() : e).set(c, f)
    }(this, eW(t), e, r);
    return n === O ? void 0 : n
  }, tP.prototype.clear = function() {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : tQ()
  }, tP.prototype.merge = function() {
    return t2(this, void 0, arguments)
  }, tP.prototype.mergeWith = function(t) {
    var e = l.call(arguments, 1);
    return t2(this, t, e)
  }, tP.prototype.mergeIn = function(t) {
    var e = l.call(arguments, 1);
    return this.updateIn(t, tQ(), function(t) {
      return "function" == typeof t.merge ? t.merge.apply(t, e) : e[e.length - 1]
    })
  }, tP.prototype.mergeDeep = function() {
    return t2(this, t8, arguments)
  }, tP.prototype.mergeDeepWith = function(t) {
    var e = l.call(arguments, 1);
    return t2(this, t5(t), e)
  }, tP.prototype.mergeDeepIn = function(t) {
    var e = l.call(arguments, 1);
    return this.updateIn(t, tQ(), function(t) {
      return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, e) : e[e.length - 1]
    })
  }, tP.prototype.sort = function(t) {
    return em(eB(this, t))
  }, tP.prototype.sortBy = function(t, e) {
    return em(eB(this, e, t))
  }, tP.prototype.withMutations = function(t) {
    var e = this.asMutable();
    return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
  }, tP.prototype.asMutable = function() {
    return this.__ownerID ? this : this.__ensureOwner(new I)
  }, tP.prototype.asImmutable = function() {
    return this.__ensureOwner()
  }, tP.prototype.wasAltered = function() {
    return this.__altered
  }, tP.prototype.__iterator = function(t, e) {
    return new tX(this, t, e)
  }, tP.prototype.__iterate = function(t, e) {
    var r = this,
      n = 0;
    return this._root && this._root.iterate(function(e) {
      return n++, t(e[1], e[0], r)
    }, e), n
  }, tP.prototype.__ensureOwner = function(t) {
    return t === this.__ownerID ? this : t ? t$(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
  }, tP.isMap = tj;
  var tU = "@@__IMMUTABLE_MAP__@@",
    tq = tP.prototype;

  function tH(t, e) {
    this.ownerID = t, this.entries = e
  }

  function tW(t, e, r) {
    this.ownerID = t, this.bitmap = e, this.nodes = r
  }

  function tV(t, e, r) {
    this.ownerID = t, this.count = e, this.nodes = r
  }

  function tG(t, e, r) {
    this.ownerID = t, this.keyHash = e, this.entries = r
  }

  function tJ(t, e, r) {
    this.ownerID = t, this.keyHash = e, this.entry = r
  }

  function tX(t, e, r) {
    this._type = e, this._reverse = r, this._stack = t._root && tZ(t._root)
  }

  function tY(t, e) {
    return V(t, e[0], e[1])
  }

  function tZ(t, e) {
    return {
      node: t,
      index: 0,
      __prev: e
    }
  }

  function t$(t, e, r, n) {
    var i = Object.create(tq);
    return i.size = t, i._root = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i
  }

  function tQ() {
    return i || (i = t$(0))
  }

  function t0(t, e, r) {
    if (t._root) {
      var n, i, o = M(K),
        a = M(T);
      if (n = t1(t._root, t.__ownerID, 0, void 0, e, r, o, a), !a.value) return t;
      i = t.size + (o.value ? r === O ? -1 : 1 : 0)
    } else {
      if (r === O) return t;
      i = 1, n = new tH(t.__ownerID, [
        [e, r]
      ])
    }
    return t.__ownerID ? (t.size = i, t._root = n, t.__hash = void 0, t.__altered = !0, t) : n ? t$(i, n) : tQ()
  }

  function t1(t, e, r, n, i, o, a, u) {
    if (!t) return o === O ? t : (A(u), A(a), new tJ(e, n, [i, o]));
    return t.update(e, r, n, i, o, a, u)
  }

  function t6(t) {
    return t.constructor === tJ || t.constructor === tG
  }

  function t3(t, e, r, n, i) {
    if (t.keyHash === n) return new tG(e, n, [t.entry, i]);
    var o, a = (0 === r ? t.keyHash : t.keyHash >>> r) & D,
      u = (0 === r ? n : n >>> r) & D,
      s = a === u ? [t3(t, e, r + 5, n, i)] : (o = new tJ(e, n, i), a < u ? [t, o] : [o, t]);
    return new tW(e, 1 << a | 1 << u, s)
  }
  tq[tU] = !0, tq[C] = tq.remove, tq.removeIn = tq.deleteIn, tH.prototype.get = function(t, e, r, n) {
    for (var i = this.entries, o = 0, a = i.length; o < a; o++)
      if (tv(r, i[o][0])) return i[o][1];
    return n
  }, tH.prototype.update = function(t, e, r, n, i, o, a) {
    for (var u = i === O, s = this.entries, c = 0, l = s.length; c < l && !tv(n, s[c][0]); c++);
    var f = c < l;
    if (f ? s[c][1] === i : u) return this;
    if (A(a), (u || !f) && A(o), !u || 1 !== s.length) {
      if (!f && !u && s.length >= et) return function(t, e, r, n) {
        !t && (t = new I);
        for (var i = new tJ(t, tO(r), [r, n]), o = 0; o < e.length; o++) {
          var a = e[o];
          i = i.update(t, 0, void 0, a[0], a[1])
        }
        return i
      }(t, s, n, i);
      var p = t && t === this.ownerID,
        h = p ? s : B(s);
      return (f ? u ? c === l - 1 ? h.pop() : h[c] = h.pop() : h[c] = [n, i] : h.push([n, i]), p) ? (this.entries = h, this) : new tH(t, h)
    }
  }, tW.prototype.get = function(t, e, r, n) {
    void 0 === e && (e = tO(r));
    var i = 1 << ((0 === t ? e : e >>> t) & D),
      o = this.bitmap;
    return (o & i) == 0 ? n : this.nodes[t9(o & i - 1)].get(t + 5, e, r, n)
  }, tW.prototype.update = function(t, e, r, n, i, o, a) {
    void 0 === r && (r = tO(n));
    var u = (0 === e ? r : r >>> e) & D,
      s = 1 << u,
      c = this.bitmap,
      l = (c & s) != 0;
    if (!l && i === O) return this;
    var f = t9(c & s - 1),
      p = this.nodes,
      h = l ? p[f] : void 0,
      d = t1(h, t, e + 5, r, n, i, o, a);
    if (d === h) return this;
    if (!l && d && p.length >= ee) return function(t, e, r, n, i) {
      for (var o = 0, a = Array(E), u = 0; 0 !== r; u++, r >>>= 1) a[u] = 1 & r ? e[o++] : void 0;
      return a[n] = i, new tV(t, o + 1, a)
    }(t, p, c, u, d);
    if (l && !d && 2 === p.length && t6(p[1 ^ f])) return p[1 ^ f];
    if (l && d && 1 === p.length && t6(d)) return d;
    var g = t && t === this.ownerID,
      y = l ? d ? c : c ^ s : c | s,
      v = l ? d ? t4(p, f, d, g) : function(t, e, r) {
        var n = t.length - 1;
        if (r && e === n) return t.pop(), t;
        for (var i = Array(n), o = 0, a = 0; a < n; a++) a === e && (o = 1), i[a] = t[a + o];
        return i
      }(p, f, g) : function(t, e, r, n) {
        var i = t.length + 1;
        if (n && e + 1 === i) return t[e] = r, t;
        for (var o = Array(i), a = 0, u = 0; u < i; u++) u === e ? (o[u] = r, a = -1) : o[u] = t[u + a];
        return o
      }(p, f, d, g);
    return g ? (this.bitmap = y, this.nodes = v, this) : new tW(t, y, v)
  }, tV.prototype.get = function(t, e, r, n) {
    void 0 === e && (e = tO(r));
    var i = (0 === t ? e : e >>> t) & D,
      o = this.nodes[i];
    return o ? o.get(t + 5, e, r, n) : n
  }, tV.prototype.update = function(t, e, r, n, i, o, a) {
    void 0 === r && (r = tO(n));
    var u = (0 === e ? r : r >>> e) & D,
      s = i === O,
      c = this.nodes,
      l = c[u];
    if (s && !l) return this;
    var f = t1(l, t, e + 5, r, n, i, o, a);
    if (f === l) return this;
    var p = this.count;
    if (l) {
      if (!f && --p < er) return function(t, e, r, n) {
        for (var i = 0, o = 0, a = Array(r), u = 0, s = 1, c = e.length; u < c; u++, s <<= 1) {
          var l = e[u];
          void 0 !== l && u !== n && (i |= s, a[o++] = l)
        }
        return new tW(t, i, a)
      }(t, c, p, u)
    } else p++;
    var h = t && t === this.ownerID,
      d = t4(c, u, f, h);
    return h ? (this.count = p, this.nodes = d, this) : new tV(t, p, d)
  }, tG.prototype.get = function(t, e, r, n) {
    for (var i = this.entries, o = 0, a = i.length; o < a; o++)
      if (tv(r, i[o][0])) return i[o][1];
    return n
  }, tG.prototype.update = function(t, e, r, n, i, o, a) {
    void 0 === r && (r = tO(n));
    var u = i === O;
    if (r !== this.keyHash) return u ? this : (A(a), A(o), t3(this, t, e, r, [n, i]));
    for (var s = this.entries, c = 0, l = s.length; c < l && !tv(n, s[c][0]); c++);
    var f = c < l;
    if (f ? s[c][1] === i : u) return this;
    if (A(a), (u || !f) && A(o), u && 2 === l) return new tJ(t, this.keyHash, s[1 ^ c]);
    var p = t && t === this.ownerID,
      h = p ? s : B(s);
    return (f ? u ? c === l - 1 ? h.pop() : h[c] = h.pop() : h[c] = [n, i] : h.push([n, i]), p) ? (this.entries = h, this) : new tG(t, this.keyHash, h)
  }, tJ.prototype.get = function(t, e, r, n) {
    return tv(r, this.entry[0]) ? this.entry[1] : n
  }, tJ.prototype.update = function(t, e, r, n, i, o, a) {
    var u = i === O,
      s = tv(n, this.entry[0]);
    if (s ? i === this.entry[1] : u) return this;
    if (A(a), u) {
      A(o);
      return
    }
    if (s) return t && t === this.ownerID ? (this.entry[1] = i, this) : new tJ(t, this.keyHash, [n, i]);
    return A(o), t3(this, t, e, tO(n), [n, i])
  }, tH.prototype.iterate = tG.prototype.iterate = function(t, e) {
    for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
      if (!1 === t(r[e ? i - n : n])) return !1
  }, tW.prototype.iterate = tV.prototype.iterate = function(t, e) {
    for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
      var o = r[e ? i - n : n];
      if (o && !1 === o.iterate(t, e)) return !1
    }
  }, tJ.prototype.iterate = function(t, e) {
    return t(this.entry)
  }, f(tX, W), tX.prototype.next = function() {
    for (var t = this._type, e = this._stack; e;) {
      var r, n = e.node,
        i = e.index++;
      if (n.entry) {
        if (0 === i) return tY(t, n.entry)
      } else if (n.entries) {
        if (i <= (r = n.entries.length - 1)) return tY(t, n.entries[this._reverse ? r - i : i])
      } else if (i <= (r = n.nodes.length - 1)) {
        var o = n.nodes[this._reverse ? r - i : i];
        if (o) {
          if (o.entry) return tY(t, o.entry);
          e = this._stack = tZ(o, e)
        }
        continue
      }
      e = this._stack = this._stack.__prev
    }
    return G()
  };

  function t2(t, e, r) {
    for (var n = [], i = 0; i < r.length; i++) {
      var o = r[i],
        a = h(o);
      !y(o) && (a = a.map(function(t) {
        return tg(t)
      })), n.push(a)
    }
    return t7(t, e, n)
  }

  function t8(t, e, r) {
    return t && t.mergeDeep && y(e) ? t.mergeDeep(e) : tv(t, e) ? t : e
  }

  function t5(t) {
    return function(e, r, n) {
      if (e && e.mergeDeepWith && y(r)) return e.mergeDeepWith(t, r);
      var i = t(e, r, n);
      return tv(e, i) ? e : i
    }
  }

  function t7(t, e, r) {
    return 0 === (r = r.filter(function(t) {
      return 0 !== t.size
    })).length ? t : 0 !== t.size || t.__ownerID || 1 !== r.length ? t.withMutations(function(t) {
      for (var n = e ? function(r, n) {
          t.update(n, O, function(t) {
            return t === O ? r : e(t, r, n)
          })
        } : function(e, r) {
          t.set(r, e)
        }, i = 0; i < r.length; i++) r[i].forEach(n)
    }) : t.constructor(r[0])
  }

  function t9(t) {
    return t -= t >> 1 & 1431655765, t = (t = (858993459 & t) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, t += t >> 8, 127 & (t += t >> 16)
  }

  function t4(t, e, r, n) {
    var i = n ? t : B(t);
    return i[e] = r, i
  }
  var et = E / 4,
    ee = E / 2,
    er = E / 4;

  function en(t) {
    var e = ef();
    if (null == t) return e;
    if (ei(t)) return t;
    var r = d(t),
      n = r.size;
    return 0 === n ? e : (tz(n), n > 0 && n < E) ? el(0, n, 5, null, new eu(r.toArray())) : e.withMutations(function(t) {
      t.setSize(n), r.forEach(function(e, r) {
        return t.set(r, e)
      })
    })
  }

  function ei(t) {
    return !!(t && t[eo])
  }
  f(en, tx), en.of = function() {
    return this(arguments)
  }, en.prototype.toString = function() {
    return this.__toString("List [", "]")
  }, en.prototype.get = function(t, e) {
    if ((t = R(this, t)) >= 0 && t < this.size) {
      var r = ed(this, t += this._origin);
      return r && r.array[t & D]
    }
    return e
  }, en.prototype.set = function(t, e) {
    return function(t, e, r) {
      if ((e = R(t, e)) != e) return t;
      if (e >= t.size || e < 0) return t.withMutations(function(t) {
        e < 0 ? eg(t, e).set(0, r) : eg(t, 0, e + 1).set(e, r)
      });
      e += t._origin;
      var n = t._tail,
        i = t._root,
        o = M(T);
      return (e >= ev(t._capacity) ? n = ep(n, t.__ownerID, 0, e, r, o) : i = ep(i, t.__ownerID, t._level, e, r, o), o.value) ? t.__ownerID ? (t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t) : el(t._origin, t._capacity, t._level, i, n) : t
    }(this, t, e)
  }, en.prototype.remove = function(t) {
    return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this
  }, en.prototype.insert = function(t, e) {
    return this.splice(t, 0, e)
  }, en.prototype.clear = function() {
    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : ef()
  }, en.prototype.push = function() {
    var t = arguments,
      e = this.size;
    return this.withMutations(function(r) {
      eg(r, 0, e + t.length);
      for (var n = 0; n < t.length; n++) r.set(e + n, t[n])
    })
  }, en.prototype.pop = function() {
    return eg(this, 0, -1)
  }, en.prototype.unshift = function() {
    var t = arguments;
    return this.withMutations(function(e) {
      eg(e, -t.length);
      for (var r = 0; r < t.length; r++) e.set(r, t[r])
    })
  }, en.prototype.shift = function() {
    return eg(this, 1)
  }, en.prototype.merge = function() {
    return ey(this, void 0, arguments)
  }, en.prototype.mergeWith = function(t) {
    var e = l.call(arguments, 1);
    return ey(this, t, e)
  }, en.prototype.mergeDeep = function() {
    return ey(this, t8, arguments)
  }, en.prototype.mergeDeepWith = function(t) {
    var e = l.call(arguments, 1);
    return ey(this, t5(t), e)
  }, en.prototype.setSize = function(t) {
    return eg(this, 0, t)
  }, en.prototype.slice = function(t, e) {
    var r, n = this.size;
    if (F(t, e, n)) return this;
    return eg(this, j(t, n, 0), j(e, r = n, r))
  }, en.prototype.__iterator = function(t, e) {
    var r = 0,
      n = ec(this, e);
    return new W(function() {
      var e = n();
      return e === es ? G() : V(t, r++, e)
    })
  }, en.prototype.__iterate = function(t, e) {
    for (var r, n = 0, i = ec(this, e);
      (r = i()) !== es && !1 !== t(r, n++, this););
    return n
  }, en.prototype.__ensureOwner = function(t) {
    return t === this.__ownerID ? this : t ? el(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this)
  }, en.isList = ei;
  var eo = "@@__IMMUTABLE_LIST__@@",
    ea = en.prototype;

  function eu(t, e) {
    this.array = t, this.ownerID = e
  }
  ea[eo] = !0, ea[C] = ea.remove, ea.setIn = tq.setIn, ea.deleteIn = ea.removeIn = tq.removeIn, ea.update = tq.update, ea.updateIn = tq.updateIn, ea.mergeIn = tq.mergeIn, ea.mergeDeepIn = tq.mergeDeepIn, ea.withMutations = tq.withMutations, ea.asMutable = tq.asMutable, ea.asImmutable = tq.asImmutable, ea.wasAltered = tq.wasAltered, eu.prototype.removeBefore = function(t, e, r) {
    if (r === e ? 1 << e : 0 === this.array.length) return this;
    var n, i = r >>> e & D;
    if (i >= this.array.length) return new eu([], t);
    var o = 0 === i;
    if (e > 0) {
      var a = this.array[i];
      if ((n = a && a.removeBefore(t, e - 5, r)) === a && o) return this
    }
    if (o && !n) return this;
    var u = eh(this, t);
    if (!o)
      for (var s = 0; s < i; s++) u.array[s] = void 0;
    return n && (u.array[i] = n), u
  }, eu.prototype.removeAfter = function(t, e, r) {
    if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
    var n, i = r - 1 >>> e & D;
    if (i >= this.array.length) return this;
    if (e > 0) {
      var o = this.array[i];
      if ((n = o && o.removeAfter(t, e - 5, r)) === o && i === this.array.length - 1) return this
    }
    var a = eh(this, t);
    return a.array.splice(i + 1), n && (a.array[i] = n), a
  };
  var es = {};

  function ec(t, e) {
    var r = t._origin,
      n = t._capacity,
      i = ev(n),
      o = t._tail;
    return a(t._root, t._level, 0);

    function a(t, u, s) {
      return 0 === u ? function(t, a) {
        var u = a === i ? o && o.array : t && t.array,
          s = a > r ? 0 : r - a,
          c = n - a;
        return c > E && (c = E),
          function() {
            if (s === c) return es;
            var t = e ? --c : s++;
            return u && u[t]
          }
      }(t, s) : function(t, i, o) {
        var u, s = t && t.array,
          c = o > r ? 0 : r - o >> i,
          l = (n - o >> i) + 1;
        return l > E && (l = E),
          function() {
            for (;;) {
              if (u) {
                var t = u();
                if (t !== es) return t;
                u = null
              }
              if (c === l) return es;
              var r = e ? --l : c++;
              u = a(s && s[r], i - 5, o + (r << i))
            }
          }
      }(t, u, s)
    }
  }

  function el(t, e, r, n, i, o, a) {
    var u = Object.create(ea);
    return u.size = e - t, u._origin = t, u._capacity = e, u._level = r, u._root = n, u._tail = i, u.__ownerID = o, u.__hash = a, u.__altered = !1, u
  }

  function ef() {
    return o || (o = el(0, 0, 5))
  }

  function ep(t, e, r, n, i, o) {
    var a, u = n >>> r & D,
      s = t && u < t.array.length;
    if (!s && void 0 === i) return t;
    if (r > 0) {
      var c = t && t.array[u],
        l = ep(c, e, r - 5, n, i, o);
      return l === c ? t : ((a = eh(t, e)).array[u] = l, a)
    }
    return s && t.array[u] === i ? t : (A(o), a = eh(t, e), void 0 === i && u === a.array.length - 1 ? a.array.pop() : a.array[u] = i, a)
  }

  function eh(t, e) {
    return e && t && e === t.ownerID ? t : new eu(t ? t.array.slice() : [], e)
  }

  function ed(t, e) {
    if (e >= ev(t._capacity)) return t._tail;
    if (e < 1 << t._level + 5) {
      for (var r = t._root, n = t._level; r && n > 0;) r = r.array[e >>> n & D], n -= 5;
      return r
    }
  }

  function eg(t, e, r) {
    void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
    var n = t.__ownerID || new I,
      i = t._origin,
      o = t._capacity,
      a = i + e,
      u = void 0 === r ? o : r < 0 ? o + r : i + r;
    if (a === i && u === o) return t;
    if (a >= u) return t.clear();
    for (var s = t._level, c = t._root, l = 0; a + l < 0;) c = new eu(c && c.array.length ? [void 0, c] : [], n), s += 5, l += 1 << s;
    l && (a += l, i += l, u += l, o += l);
    for (var f = ev(o), p = ev(u); p >= 1 << s + 5;) c = new eu(c && c.array.length ? [c] : [], n), s += 5;
    var h = t._tail,
      d = p < f ? ed(t, u - 1) : p > f ? new eu([], n) : h;
    if (h && p > f && a < o && h.array.length) {
      for (var g = c = eh(c, n), y = s; y > 5; y -= 5) {
        var v = f >>> y & D;
        g = g.array[v] = eh(g.array[v], n)
      }
      g.array[f >>> 5 & D] = h
    }
    if (u < o && (d = d && d.removeAfter(n, 0, u)), a >= p) a -= p, u -= p, s = 5, c = null, d = d && d.removeBefore(n, 0, a);
    else if (a > i || p < f) {
      for (l = 0; c;) {
        var m = a >>> s & D;
        if (m !== p >>> s & D) break;
        m && (l += (1 << s) * m), s -= 5, c = c.array[m]
      }
      c && a > i && (c = c.removeBefore(n, s, a - l)), c && p < f && (c = c.removeAfter(n, s, p - l)), l && (a -= l, u -= l)
    }
    return t.__ownerID ? (t.size = u - a, t._origin = a, t._capacity = u, t._level = s, t._root = c, t._tail = d, t.__hash = void 0, t.__altered = !0, t) : el(a, u, s, c, d)
  }

  function ey(t, e, r) {
    for (var n = [], i = 0, o = 0; o < r.length; o++) {
      var a = r[o],
        u = d(a);
      u.size > i && (i = u.size), !y(a) && (u = u.map(function(t) {
        return tg(t)
      })), n.push(u)
    }
    return i > t.size && (t = t.setSize(i)), t7(t, e, n)
  }

  function ev(t) {
    return t < E ? 0 : t - 1 >>> 5 << 5
  }

  function em(t) {
    return null == t ? eS() : e_(t) ? t : eS().withMutations(function(e) {
      var r = h(t);
      tz(r.size), r.forEach(function(t, r) {
        return e.set(r, t)
      })
    })
  }

  function e_(t) {
    return tj(t) && b(t)
  }

  function eb(t, e, r, n) {
    var i = Object.create(em.prototype);
    return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = r, i.__hash = n, i
  }

  function eS() {
    return a || (a = eb(tQ(), ef()))
  }

  function ew(t, e, r) {
    var n, i, o = t._map,
      a = t._list,
      u = o.get(e),
      s = void 0 !== u;
    if (r === O) {
      if (!s) return t;
      a.size >= E && a.size >= 2 * o.size ? (n = (i = a.filter(function(t, e) {
        return void 0 !== t && u !== e
      })).toKeyedSeq().map(function(t) {
        return t[0]
      }).flip().toMap(), t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID)) : (n = o.remove(e), i = u === a.size - 1 ? a.pop() : a.set(u, void 0))
    } else if (s) {
      if (r === a.get(u)[1]) return t;
      n = o, i = a.set(u, [e, r])
    } else n = o.set(e, a.size), i = a.set(a.size, [e, r]);
    return t.__ownerID ? (t.size = n.size, t._map = n, t._list = i, t.__hash = void 0, t) : eb(n, i)
  }

  function ek(t, e) {
    this._iter = t, this._useKeys = e, this.size = t.size
  }

  function ex(t) {
    this._iter = t, this.size = t.size
  }

  function eC(t) {
    this._iter = t, this.size = t.size
  }

  function eE(t) {
    this._iter = t, this.size = t.size
  }

  function eD(t) {
    var e = eU(t);
    return e._iter = t, e.size = t.size, e.flip = function() {
      return t
    }, e.reverse = function() {
      var e = t.reverse.apply(this);
      return e.flip = function() {
        return t.reverse()
      }, e
    }, e.has = function(e) {
      return t.includes(e)
    }, e.includes = function(e) {
      return t.has(e)
    }, e.cacheResult = eq, e.__iterateUncached = function(e, r) {
      var n = this;
      return t.__iterate(function(t, r) {
        return !1 !== e(r, t, n)
      }, r)
    }, e.__iteratorUncached = function(e, r) {
      if (2 === e) {
        var n = t.__iterator(e, r);
        return new W(function() {
          var t = n.next();
          if (!t.done) {
            var e = t.value[0];
            t.value[0] = t.value[1], t.value[1] = e
          }
          return t
        })
      }
      return t.__iterator(1 === e ? 0 : 1, r)
    }, e
  }

  function eO(t, e, r) {
    var n = eU(t);
    return n.size = t.size, n.has = function(e) {
      return t.has(e)
    }, n.get = function(n, i) {
      var o = t.get(n, O);
      return o === O ? i : e.call(r, o, n, t)
    }, n.__iterateUncached = function(n, i) {
      var o = this;
      return t.__iterate(function(t, i, a) {
        return !1 !== n(e.call(r, t, i, a), i, o)
      }, i)
    }, n.__iteratorUncached = function(n, i) {
      var o = t.__iterator(2, i);
      return new W(function() {
        var i = o.next();
        if (i.done) return i;
        var a = i.value,
          u = a[0];
        return V(n, u, e.call(r, a[1], u, t), i)
      })
    }, n
  }

  function eK(t, e) {
    var r = eU(t);
    return r._iter = t, r.size = t.size, r.reverse = function() {
      return t
    }, t.flip && (r.flip = function() {
      var e = eD(t);
      return e.reverse = function() {
        return t.flip()
      }, e
    }), r.get = function(r, n) {
      return t.get(e ? r : -1 - r, n)
    }, r.has = function(r) {
      return t.has(e ? r : -1 - r)
    }, r.includes = function(e) {
      return t.includes(e)
    }, r.cacheResult = eq, r.__iterate = function(e, r) {
      var n = this;
      return t.__iterate(function(t, r) {
        return e(t, r, n)
      }, !r)
    }, r.__iterator = function(e, r) {
      return t.__iterator(e, !r)
    }, r
  }

  function eT(t, e, r, n) {
    var i = eU(t);
    return n && (i.has = function(n) {
      var i = t.get(n, O);
      return i !== O && !!e.call(r, i, n, t)
    }, i.get = function(n, i) {
      var o = t.get(n, O);
      return o !== O && e.call(r, o, n, t) ? o : i
    }), i.__iterateUncached = function(i, o) {
      var a = this,
        u = 0;
      return t.__iterate(function(t, o, s) {
        if (e.call(r, t, o, s)) return u++, i(t, n ? o : u - 1, a)
      }, o), u
    }, i.__iteratorUncached = function(i, o) {
      var a = t.__iterator(2, o),
        u = 0;
      return new W(function() {
        for (;;) {
          var o = a.next();
          if (o.done) return o;
          var s = o.value,
            c = s[0],
            l = s[1];
          if (e.call(r, l, c, t)) return V(i, n ? c : u++, l, o)
        }
      })
    }, i
  }
  f(em, tP), em.of = function() {
    return this(arguments)
  }, em.prototype.toString = function() {
    return this.__toString("OrderedMap {", "}")
  }, em.prototype.get = function(t, e) {
    var r = this._map.get(t);
    return void 0 !== r ? this._list.get(r)[1] : e
  }, em.prototype.clear = function() {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : eS()
  }, em.prototype.set = function(t, e) {
    return ew(this, t, e)
  }, em.prototype.remove = function(t) {
    return ew(this, t, O)
  }, em.prototype.wasAltered = function() {
    return this._map.wasAltered() || this._list.wasAltered()
  }, em.prototype.__iterate = function(t, e) {
    var r = this;
    return this._list.__iterate(function(e) {
      return e && t(e[1], e[0], r)
    }, e)
  }, em.prototype.__iterator = function(t, e) {
    return this._list.fromEntrySeq().__iterator(t, e)
  }, em.prototype.__ensureOwner = function(t) {
    if (t === this.__ownerID) return this;
    var e = this._map.__ensureOwner(t),
      r = this._list.__ensureOwner(t);
    return t ? eb(e, r, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = r, this)
  }, em.isOrderedMap = e_, em.prototype[x] = !0, em.prototype[C] = em.prototype.remove, f(ek, tt), ek.prototype.get = function(t, e) {
    return this._iter.get(t, e)
  }, ek.prototype.has = function(t) {
    return this._iter.has(t)
  }, ek.prototype.valueSeq = function() {
    return this._iter.valueSeq()
  }, ek.prototype.reverse = function() {
    var t = this,
      e = eK(this, !0);
    return !this._useKeys && (e.valueSeq = function() {
      return t._iter.toSeq().reverse()
    }), e
  }, ek.prototype.map = function(t, e) {
    var r = this,
      n = eO(this, t, e);
    return !this._useKeys && (n.valueSeq = function() {
      return r._iter.toSeq().map(t, e)
    }), n
  }, ek.prototype.__iterate = function(t, e) {
    var r, n = this;
    return this._iter.__iterate(this._useKeys ? function(e, r) {
      return t(e, r, n)
    } : (r = e ? eP(this) : 0, function(i) {
      return t(i, e ? --r : r++, n)
    }), e)
  }, ek.prototype.__iterator = function(t, e) {
    if (this._useKeys) return this._iter.__iterator(t, e);
    var r = this._iter.__iterator(1, e),
      n = e ? eP(this) : 0;
    return new W(function() {
      var i = r.next();
      return i.done ? i : V(t, e ? --n : n++, i.value, i)
    })
  }, ek.prototype[x] = !0, f(ex, te), ex.prototype.includes = function(t) {
    return this._iter.includes(t)
  }, ex.prototype.__iterate = function(t, e) {
    var r = this,
      n = 0;
    return this._iter.__iterate(function(e) {
      return t(e, n++, r)
    }, e)
  }, ex.prototype.__iterator = function(t, e) {
    var r = this._iter.__iterator(1, e),
      n = 0;
    return new W(function() {
      var e = r.next();
      return e.done ? e : V(t, n++, e.value, e)
    })
  }, f(eC, tr), eC.prototype.has = function(t) {
    return this._iter.includes(t)
  }, eC.prototype.__iterate = function(t, e) {
    var r = this;
    return this._iter.__iterate(function(e) {
      return t(e, e, r)
    }, e)
  }, eC.prototype.__iterator = function(t, e) {
    var r = this._iter.__iterator(1, e);
    return new W(function() {
      var e = r.next();
      return e.done ? e : V(t, e.value, e.value, e)
    })
  }, f(eE, tt), eE.prototype.entrySeq = function() {
    return this._iter.toSeq()
  }, eE.prototype.__iterate = function(t, e) {
    var r = this;
    return this._iter.__iterate(function(e) {
      if (e) {
        ez(e);
        var n = y(e);
        return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r)
      }
    }, e)
  }, eE.prototype.__iterator = function(t, e) {
    var r = this._iter.__iterator(1, e);
    return new W(function() {
      for (;;) {
        var e = r.next();
        if (e.done) return e;
        var n = e.value;
        if (n) {
          ez(n);
          var i = y(n);
          return V(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e)
        }
      }
    })
  }, ex.prototype.cacheResult = ek.prototype.cacheResult = eC.prototype.cacheResult = eE.prototype.cacheResult = eq;

  function eM(t, e, r, n) {
    var i, o, a = t.size;
    if (void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), F(e, r, a)) return t;
    var u = j(e, a, 0);
    var s = j(r, i = a, i);
    if (u != u || s != s) return eM(t.toSeq().cacheResult(), e, r, n);
    var c = s - u;
    c == c && (o = c < 0 ? 0 : c);
    var l = eU(t);
    return l.size = 0 === o ? o : t.size && o || void 0, !n && ts(t) && o >= 0 && (l.get = function(e, r) {
      return (e = R(this, e)) >= 0 && e < o ? t.get(e + u, r) : r
    }), l.__iterateUncached = function(e, r) {
      var i = this;
      if (0 === o) return 0;
      if (r) return this.cacheResult().__iterate(e, r);
      var a = 0,
        s = !0,
        c = 0;
      return t.__iterate(function(t, r) {
        if (!(s && (s = a++ < u))) return c++, !1 !== e(t, n ? r : c - 1, i) && c !== o
      }), c
    }, l.__iteratorUncached = function(e, r) {
      if (0 !== o && r) return this.cacheResult().__iterator(e, r);
      var i = 0 !== o && t.__iterator(e, r),
        a = 0,
        s = 0;
      return new W(function() {
        for (; a++ < u;) i.next();
        if (++s > o) return G();
        var t = i.next();
        return n || 1 === e ? t : 0 === e ? V(e, s - 1, void 0, t) : V(e, s - 1, t.value[1], t)
      })
    }, l
  }

  function eA(t, e, r, n) {
    var i = eU(t);
    return i.__iterateUncached = function(i, o) {
      var a = this;
      if (o) return this.cacheResult().__iterate(i, o);
      var u = !0,
        s = 0;
      return t.__iterate(function(t, o, c) {
        if (!(u && (u = e.call(r, t, o, c)))) return s++, i(t, n ? o : s - 1, a)
      }), s
    }, i.__iteratorUncached = function(i, o) {
      var a = this;
      if (o) return this.cacheResult().__iterator(i, o);
      var u = t.__iterator(2, o),
        s = !0,
        c = 0;
      return new W(function() {
        var t, o, l;
        do {
          if ((t = u.next()).done) {
            if (n || 1 === i) return t;
            if (0 === i) return V(i, c++, void 0, t);
            else return V(i, c++, t.value[1], t)
          }
          var f = t.value;
          o = f[0], l = f[1], s && (s = e.call(r, l, o, a))
        } while (s);
        return 2 === i ? t : V(i, o, l, t)
      })
    }, i
  }

  function eI(t, e, r) {
    var n = eU(t);
    return n.__iterateUncached = function(n, i) {
      var o = 0,
        a = !1;
      return ! function t(u, s) {
        var c = this;
        u.__iterate(function(i, u) {
          return (!e || s < e) && y(i) ? t(i, s + 1) : !1 === n(i, r ? u : o++, c) && (a = !0), !a
        }, i)
      }(t, 0), o
    }, n.__iteratorUncached = function(n, i) {
      var o = t.__iterator(n, i),
        a = [],
        u = 0;
      return new W(function() {
        for (; o;) {
          var t = o.next();
          if (!1 !== t.done) {
            o = a.pop();
            continue
          }
          var s = t.value;
          if (2 === n && (s = s[1]), !((!e || a.length < e) && y(s))) return r ? t : V(n, u++, s, t);
          a.push(o), o = s.__iterator(n, i)
        }
        return G()
      })
    }, n
  }

  function eB(t, e, r) {
    !e && (e = eH);
    var n = v(t),
      i = 0,
      o = t.toSeq().map(function(e, n) {
        return [n, e, i++, r ? r(e, n, t) : e]
      }).toArray();
    return o.sort(function(t, r) {
      return e(t[3], r[3]) || t[2] - r[2]
    }).forEach(n ? function(t, e) {
      o[e].length = 2
    } : function(t, e) {
      o[e] = t[1]
    }), n ? tt(o) : m(t) ? te(o) : tr(o)
  }

  function eL(t, e, r) {
    if (!e && (e = eH), !r) return t.reduce(function(t, r) {
      return eR(e, t, r) ? r : t
    });
    var n = t.toSeq().map(function(e, n) {
      return [e, r(e, n, t)]
    }).reduce(function(t, r) {
      return eR(e, t[1], r[1]) ? r : t
    });
    return n && n[0]
  }

  function eR(t, e, r) {
    var n = t(r, e);
    return 0 === n && r !== e && (null == r || r != r) || n > 0
  }

  function eN(t, e, r) {
    var n = eU(t);
    return n.size = new ti(r).map(function(t) {
      return t.size
    }).min(), n.__iterate = function(t, e) {
      for (var r, n = this.__iterator(1, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this););
      return i
    }, n.__iteratorUncached = function(t, n) {
      var i = r.map(function(t) {
          return t = p(t), Y(n ? t.reverse() : t)
        }),
        o = 0,
        a = !1;
      return new W(function() {
        var r;
        return (!a && (a = (r = i.map(function(t) {
          return t.next()
        })).some(function(t) {
          return t.done
        })), a) ? G() : V(t, o++, e.apply(null, r.map(function(t) {
          return t.value
        })))
      })
    }, n
  }

  function eF(t, e) {
    return ts(t) ? e : t.constructor(e)
  }

  function ez(t) {
    if (t !== Object(t)) throw TypeError("Expected [K, V] tuple: " + t)
  }

  function eP(t) {
    return tz(t.size), L(t)
  }

  function ej(t) {
    return v(t) ? h : m(t) ? d : g
  }

  function eU(t) {
    return Object.create((v(t) ? tt : m(t) ? te : tr).prototype)
  }

  function eq() {
    return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : Q.prototype.cacheResult.call(this)
  }

  function eH(t, e) {
    return t > e ? 1 : t < e ? -1 : 0
  }

  function eW(t) {
    var e = Y(t);
    if (!e) {
      if (!$(t)) throw TypeError("Expected iterable or array-like: " + t);
      e = Y(p(t))
    }
    return e
  }

  function eV(t, e) {
    var r, n = function(o) {
        if (o instanceof n) return o;
        if (!(this instanceof n)) return new n(o);
        if (!r) {
          r = !0;
          var a = Object.keys(t);
          (function(t, e) {
            try {
              e.forEach(eY.bind(void 0, t))
            } catch (t) {}
          })(i, a), i.size = a.length, i._name = e, i._keys = a, i._defaultValues = t
        }
        this._map = tP(o)
      },
      i = n.prototype = Object.create(eG);
    return i.constructor = n, n
  }
  f(eV, tk), eV.prototype.toString = function() {
    return this.__toString(eX(this) + " {", "}")
  }, eV.prototype.has = function(t) {
    return this._defaultValues.hasOwnProperty(t)
  }, eV.prototype.get = function(t, e) {
    if (!this.has(t)) return e;
    var r = this._defaultValues[t];
    return this._map ? this._map.get(t, r) : r
  }, eV.prototype.clear = function() {
    if (this.__ownerID) return this._map && this._map.clear(), this;
    var t = this.constructor;
    return t._empty || (t._empty = eJ(this, tQ()))
  }, eV.prototype.set = function(t, e) {
    if (!this.has(t)) throw Error('Cannot set unknown key "' + t + '" on ' + eX(this));
    var r = this._map && this._map.set(t, e);
    return this.__ownerID || r === this._map ? this : eJ(this, r)
  }, eV.prototype.remove = function(t) {
    if (!this.has(t)) return this;
    var e = this._map && this._map.remove(t);
    return this.__ownerID || e === this._map ? this : eJ(this, e)
  }, eV.prototype.wasAltered = function() {
    return this._map.wasAltered()
  }, eV.prototype.__iterator = function(t, e) {
    var r = this;
    return h(this._defaultValues).map(function(t, e) {
      return r.get(e)
    }).__iterator(t, e)
  }, eV.prototype.__iterate = function(t, e) {
    var r = this;
    return h(this._defaultValues).map(function(t, e) {
      return r.get(e)
    }).__iterate(t, e)
  }, eV.prototype.__ensureOwner = function(t) {
    if (t === this.__ownerID) return this;
    var e = this._map && this._map.__ensureOwner(t);
    return t ? eJ(this, e, t) : (this.__ownerID = t, this._map = e, this)
  };
  var eG = eV.prototype;

  function eJ(t, e, r) {
    var n = Object.create(Object.getPrototypeOf(t));
    return n._map = e, n.__ownerID = r, n
  }

  function eX(t) {
    return t._name || t.constructor.name || "Record"
  }
  eG[C] = eG.remove, eG.deleteIn = eG.removeIn = tq.removeIn, eG.merge = tq.merge, eG.mergeWith = tq.mergeWith, eG.mergeIn = tq.mergeIn, eG.mergeDeep = tq.mergeDeep, eG.mergeDeepWith = tq.mergeDeepWith, eG.mergeDeepIn = tq.mergeDeepIn, eG.setIn = tq.setIn, eG.update = tq.update, eG.updateIn = tq.updateIn, eG.withMutations = tq.withMutations, eG.asMutable = tq.asMutable, eG.asImmutable = tq.asImmutable;

  function eY(t, e) {
    Object.defineProperty(t, e, {
      get: function() {
        return this.get(e)
      },
      set: function(t) {
        tb(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t)
      }
    })
  }

  function eZ(t) {
    return null == t ? e3() : e$(t) && !b(t) ? t : e3().withMutations(function(e) {
      var r = g(t);
      tz(r.size), r.forEach(function(t) {
        return e.add(t)
      })
    })
  }

  function e$(t) {
    return !!(t && t[eQ])
  }
  f(eZ, tC), eZ.of = function() {
    return this(arguments)
  }, eZ.fromKeys = function(t) {
    return this(h(t).keySeq())
  }, eZ.prototype.toString = function() {
    return this.__toString("Set {", "}")
  }, eZ.prototype.has = function(t) {
    return this._map.has(t)
  }, eZ.prototype.add = function(t) {
    return e1(this, this._map.set(t, !0))
  }, eZ.prototype.remove = function(t) {
    return e1(this, this._map.remove(t))
  }, eZ.prototype.clear = function() {
    return e1(this, this._map.clear())
  }, eZ.prototype.union = function() {
    var t = l.call(arguments, 0);
    return 0 === (t = t.filter(function(t) {
      return 0 !== t.size
    })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function(e) {
      for (var r = 0; r < t.length; r++) g(t[r]).forEach(function(t) {
        return e.add(t)
      })
    }) : this.constructor(t[0])
  }, eZ.prototype.intersect = function() {
    var t = l.call(arguments, 0);
    if (0 === t.length) return this;
    t = t.map(function(t) {
      return g(t)
    });
    var e = this;
    return this.withMutations(function(r) {
      e.forEach(function(e) {
        !t.every(function(t) {
          return t.includes(e)
        }) && r.remove(e)
      })
    })
  }, eZ.prototype.subtract = function() {
    var t = l.call(arguments, 0);
    if (0 === t.length) return this;
    t = t.map(function(t) {
      return g(t)
    });
    var e = this;
    return this.withMutations(function(r) {
      e.forEach(function(e) {
        t.some(function(t) {
          return t.includes(e)
        }) && r.remove(e)
      })
    })
  }, eZ.prototype.merge = function() {
    return this.union.apply(this, arguments)
  }, eZ.prototype.mergeWith = function(t) {
    var e = l.call(arguments, 1);
    return this.union.apply(this, e)
  }, eZ.prototype.sort = function(t) {
    return e2(eB(this, t))
  }, eZ.prototype.sortBy = function(t, e) {
    return e2(eB(this, e, t))
  }, eZ.prototype.wasAltered = function() {
    return this._map.wasAltered()
  }, eZ.prototype.__iterate = function(t, e) {
    var r = this;
    return this._map.__iterate(function(e, n) {
      return t(n, n, r)
    }, e)
  }, eZ.prototype.__iterator = function(t, e) {
    return this._map.map(function(t, e) {
      return e
    }).__iterator(t, e)
  }, eZ.prototype.__ensureOwner = function(t) {
    if (t === this.__ownerID) return this;
    var e = this._map.__ensureOwner(t);
    return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this)
  }, eZ.isSet = e$;
  var eQ = "@@__IMMUTABLE_SET__@@",
    e0 = eZ.prototype;

  function e1(t, e) {
    return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e)
  }

  function e6(t, e) {
    var r = Object.create(e0);
    return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r
  }

  function e3() {
    return u || (u = e6(tQ()))
  }

  function e2(t) {
    return null == t ? e9() : e8(t) ? t : e9().withMutations(function(e) {
      var r = g(t);
      tz(r.size), r.forEach(function(t) {
        return e.add(t)
      })
    })
  }

  function e8(t) {
    return e$(t) && b(t)
  }
  e0[eQ] = !0, e0[C] = e0.remove, e0.mergeDeep = e0.merge, e0.mergeDeepWith = e0.mergeWith, e0.withMutations = tq.withMutations, e0.asMutable = tq.asMutable, e0.asImmutable = tq.asImmutable, e0.__empty = e3, e0.__make = e6, f(e2, eZ), e2.of = function() {
    return this(arguments)
  }, e2.fromKeys = function(t) {
    return this(h(t).keySeq())
  }, e2.prototype.toString = function() {
    return this.__toString("OrderedSet {", "}")
  }, e2.isOrderedSet = e8;
  var e5 = e2.prototype;

  function e7(t, e) {
    var r = Object.create(e5);
    return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r
  }

  function e9() {
    return s || (s = e7(eS()))
  }

  function e4(t) {
    return null == t ? ri() : rt(t) ? t : ri().unshiftAll(t)
  }

  function rt(t) {
    return !!(t && t[re])
  }
  e5[x] = !0, e5.__empty = e9, e5.__make = e7, f(e4, tx), e4.of = function() {
    return this(arguments)
  }, e4.prototype.toString = function() {
    return this.__toString("Stack [", "]")
  }, e4.prototype.get = function(t, e) {
    var r = this._head;
    for (t = R(this, t); r && t--;) r = r.next;
    return r ? r.value : e
  }, e4.prototype.peek = function() {
    return this._head && this._head.value
  }, e4.prototype.push = function() {
    if (0 == arguments.length) return this;
    for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--) e = {
      value: arguments[r],
      next: e
    };
    return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : rn(t, e)
  }, e4.prototype.pushAll = function(t) {
    if (0 === (t = d(t)).size) return this;
    tz(t.size);
    var e = this.size,
      r = this._head;
    return (t.reverse().forEach(function(t) {
      e++, r = {
        value: t,
        next: r
      }
    }), this.__ownerID) ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : rn(e, r)
  }, e4.prototype.pop = function() {
    return this.slice(1)
  }, e4.prototype.unshift = function() {
    return this.push.apply(this, arguments)
  }, e4.prototype.unshiftAll = function(t) {
    return this.pushAll(t)
  }, e4.prototype.shift = function() {
    return this.pop.apply(this, arguments)
  }, e4.prototype.clear = function() {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : ri()
  }, e4.prototype.slice = function(t, e) {
    if (F(t, e, this.size)) return this;
    var r, n = j(t, this.size, 0);
    if (j(e, r = this.size, r) !== this.size) return tx.prototype.slice.call(this, t, e);
    for (var i = this.size - n, o = this._head; n--;) o = o.next;
    return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : rn(i, o)
  }, e4.prototype.__ensureOwner = function(t) {
    return t === this.__ownerID ? this : t ? rn(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
  }, e4.prototype.__iterate = function(t, e) {
    if (e) return this.reverse().__iterate(t);
    for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this);) {
      ;
      n = n.next
    }
    return r
  }, e4.prototype.__iterator = function(t, e) {
    if (e) return this.reverse().__iterator(t);
    var r = 0,
      n = this._head;
    return new W(function() {
      if (n) {
        var e = n.value;
        return n = n.next, V(t, r++, e)
      }
      return G()
    })
  }, e4.isStack = rt;
  var re = "@@__IMMUTABLE_STACK__@@",
    rr = e4.prototype;

  function rn(t, e, r, n) {
    var i = Object.create(rr);
    return i.size = t, i._head = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i
  }

  function ri() {
    return c || (c = rn(0))
  }

  function ro(t, e) {
    var r = function(r) {
      t.prototype[r] = e[r]
    };
    return Object.keys(e).forEach(r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r), t
  }
  rr[re] = !0, rr.withMutations = tq.withMutations, rr.asMutable = tq.asMutable, rr.asImmutable = tq.asImmutable, rr.wasAltered = tq.wasAltered, p.Iterator = W, ro(p, {
    toArray: function() {
      tz(this.size);
      var t = Array(this.size || 0);
      return this.valueSeq().__iterate(function(e, r) {
        t[r] = e
      }), t
    },
    toIndexedSeq: function() {
      return new ex(this)
    },
    toJS: function() {
      return this.toSeq().map(function(t) {
        return t && "function" == typeof t.toJS ? t.toJS() : t
      }).__toJS()
    },
    toJSON: function() {
      return this.toSeq().map(function(t) {
        return t && "function" == typeof t.toJSON ? t.toJSON() : t
      }).__toJS()
    },
    toKeyedSeq: function() {
      return new ek(this, !0)
    },
    toMap: function() {
      return tP(this.toKeyedSeq())
    },
    toObject: function() {
      tz(this.size);
      var t = {};
      return this.__iterate(function(e, r) {
        t[r] = e
      }), t
    },
    toOrderedMap: function() {
      return em(this.toKeyedSeq())
    },
    toOrderedSet: function() {
      return e2(v(this) ? this.valueSeq() : this)
    },
    toSet: function() {
      return eZ(v(this) ? this.valueSeq() : this)
    },
    toSetSeq: function() {
      return new eC(this)
    },
    toSeq: function() {
      return m(this) ? this.toIndexedSeq() : v(this) ? this.toKeyedSeq() : this.toSetSeq()
    },
    toStack: function() {
      return e4(v(this) ? this.valueSeq() : this)
    },
    toList: function() {
      return en(v(this) ? this.valueSeq() : this)
    },
    toString: function() {
      return "[Iterable]"
    },
    __toString: function(t, e) {
      return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e
    },
    concat: function() {
      var t = l.call(arguments, 0);
      return eF(this, function(t, e) {
        var r = v(t),
          n = [t].concat(e).map(function(t) {
            return y(t) ? r && (t = h(t)) : t = r ? tl(t) : tf(Array.isArray(t) ? t : [t]), t
          }).filter(function(t) {
            return 0 !== t.size
          });
        if (0 === n.length) return t;
        if (1 === n.length) {
          var i = n[0];
          if (i === t || r && v(i) || m(t) && m(i)) return i
        }
        var o = new ti(n);
        return r ? o = o.toKeyedSeq() : !m(t) && (o = o.toSetSeq()), (o = o.flatten(!0)).size = n.reduce(function(t, e) {
          if (void 0 !== t) {
            var r = e.size;
            if (void 0 !== r) return t + r
          }
        }, 0), o
      }(this, t))
    },
    includes: function(t) {
      return this.some(function(e) {
        return tv(e, t)
      })
    },
    entries: function() {
      return this.__iterator(2)
    },
    every: function(t, e) {
      tz(this.size);
      var r = !0;
      return this.__iterate(function(n, i, o) {
        if (!t.call(e, n, i, o)) return r = !1, !1
      }), r
    },
    filter: function(t, e) {
      return eF(this, eT(this, t, e, !0))
    },
    find: function(t, e, r) {
      var n = this.findEntry(t, e);
      return n ? n[1] : r
    },
    findEntry: function(t, e) {
      var r;
      return this.__iterate(function(n, i, o) {
        if (t.call(e, n, i, o)) return r = [i, n], !1
      }), r
    },
    findLastEntry: function(t, e) {
      return this.toSeq().reverse().findEntry(t, e)
    },
    forEach: function(t, e) {
      return tz(this.size), this.__iterate(e ? t.bind(e) : t)
    },
    join: function(t) {
      tz(this.size), t = void 0 !== t ? "" + t : ",";
      var e = "",
        r = !0;
      return this.__iterate(function(n) {
        r ? r = !1 : e += t, e += null != n ? n.toString() : ""
      }), e
    },
    keys: function() {
      return this.__iterator(0)
    },
    map: function(t, e) {
      return eF(this, eO(this, t, e))
    },
    reduce: function(t, e, r) {
      var n, i;
      return tz(this.size), arguments.length < 2 ? i = !0 : n = e, this.__iterate(function(e, o, a) {
        i ? (i = !1, n = e) : n = t.call(r, n, e, o, a)
      }), n
    },
    reduceRight: function(t, e, r) {
      var n = this.toKeyedSeq().reverse();
      return n.reduce.apply(n, arguments)
    },
    reverse: function() {
      return eF(this, eK(this, !0))
    },
    slice: function(t, e) {
      return eF(this, eM(this, t, e, !0))
    },
    some: function(t, e) {
      return !this.every(rl(t), e)
    },
    sort: function(t) {
      return eF(this, eB(this, t))
    },
    values: function() {
      return this.__iterator(1)
    },
    butLast: function() {
      return this.slice(0, -1)
    },
    isEmpty: function() {
      return void 0 !== this.size ? 0 === this.size : !this.some(function() {
        return !0
      })
    },
    count: function(t, e) {
      return L(t ? this.toSeq().filter(t, e) : this)
    },
    countBy: function(t, e) {
      var r, n, i, o;
      return r = this, n = t, i = e, o = tP().asMutable(), r.__iterate(function(t, e) {
        o.update(n.call(i, t, e, r), 0, function(t) {
          return t + 1
        })
      }), o.asImmutable()
    },
    equals: function(t) {
      return tm(this, t)
    },
    entrySeq: function() {
      var t = this;
      if (t._cache) return new ti(t._cache);
      var e = t.toSeq().map(rc).toIndexedSeq();
      return e.fromEntrySeq = function() {
        return t.toSeq()
      }, e
    },
    filterNot: function(t, e) {
      return this.filter(rl(t), e)
    },
    findLast: function(t, e, r) {
      return this.toKeyedSeq().reverse().find(t, e, r)
    },
    first: function() {
      return this.find(N)
    },
    flatMap: function(t, e) {
      var r, n, i, o;
      return eF(this, (r = this, n = t, i = e, o = ej(r), r.toSeq().map(function(t, e) {
        return o(n.call(i, t, e, r))
      }).flatten(!0)))
    },
    flatten: function(t) {
      return eF(this, eI(this, t, !0))
    },
    fromEntrySeq: function() {
      return new eE(this)
    },
    get: function(t, e) {
      return this.find(function(e, r) {
        return tv(r, t)
      }, void 0, e)
    },
    getIn: function(t, e) {
      for (var r, n = this, i = eW(t); !(r = i.next()).done;) {
        var o = r.value;
        if ((n = n && n.get ? n.get(o, O) : O) === O) return e
      }
      return n
    },
    groupBy: function(t, e) {
      return function(t, e, r) {
        var n = v(t),
          i = (b(t) ? em() : tP()).asMutable();
        t.__iterate(function(o, a) {
          i.update(e.call(r, o, a, t), function(t) {
            return (t = t || []).push(n ? [a, o] : o), t
          })
        });
        var o = ej(t);
        return i.map(function(e) {
          return eF(t, o(e))
        })
      }(this, t, e)
    },
    has: function(t) {
      return this.get(t, O) !== O
    },
    hasIn: function(t) {
      return this.getIn(t, O) !== O
    },
    isSubset: function(t) {
      return t = "function" == typeof t.includes ? t : p(t), this.every(function(e) {
        return t.includes(e)
      })
    },
    isSuperset: function(t) {
      return (t = "function" == typeof t.isSubset ? t : p(t)).isSubset(this)
    },
    keySeq: function() {
      return this.toSeq().map(rs).toIndexedSeq()
    },
    last: function() {
      return this.toSeq().reverse().first()
    },
    max: function(t) {
      return eL(this, t)
    },
    maxBy: function(t, e) {
      return eL(this, e, t)
    },
    min: function(t) {
      return eL(this, t ? rf(t) : rd)
    },
    minBy: function(t, e) {
      return eL(this, e ? rf(e) : rd, t)
    },
    rest: function() {
      return this.slice(1)
    },
    skip: function(t) {
      return this.slice(Math.max(0, t))
    },
    skipLast: function(t) {
      return eF(this, this.toSeq().reverse().skip(t).reverse())
    },
    skipWhile: function(t, e) {
      return eF(this, eA(this, t, e, !0))
    },
    skipUntil: function(t, e) {
      return this.skipWhile(rl(t), e)
    },
    sortBy: function(t, e) {
      return eF(this, eB(this, e, t))
    },
    take: function(t) {
      return this.slice(0, Math.max(0, t))
    },
    takeLast: function(t) {
      return eF(this, this.toSeq().reverse().take(t).reverse())
    },
    takeWhile: function(t, e) {
      var r, n, i, o;
      return eF(this, (r = this, n = t, i = e, (o = eU(r)).__iterateUncached = function(t, e) {
        var o = this;
        if (e) return this.cacheResult().__iterate(t, e);
        var a = 0;
        return r.__iterate(function(e, r, u) {
          return n.call(i, e, r, u) && ++a && t(e, r, o)
        }), a
      }, o.__iteratorUncached = function(t, e) {
        var o = this;
        if (e) return this.cacheResult().__iterator(t, e);
        var a = r.__iterator(2, e),
          u = !0;
        return new W(function() {
          if (!u) return G();
          var e = a.next();
          if (e.done) return e;
          var r = e.value,
            s = r[0],
            c = r[1];
          return n.call(i, c, s, o) ? 2 === t ? e : V(t, s, c, e) : (u = !1, G())
        })
      }, o))
    },
    takeUntil: function(t, e) {
      return this.takeWhile(rl(t), e)
    },
    valueSeq: function() {
      return this.toIndexedSeq()
    },
    hashCode: function() {
      return this.__hash || (this.__hash = function(t) {
        if (t.size === 1 / 0) return 0;
        var e = b(t),
          r = v(t),
          n = e ? 1 : 0;
        return function(t, e) {
          return e = tE(e, 3432918353), e = tE(e << 15 | e >>> -15, 461845907), e = ((e = tE(e << 13 | e >>> -13, 5)) + 3864292196 | 0) ^ t, e = tE(e ^ e >>> 16, 2246822507), e = tD((e = tE(e ^ e >>> 13, 3266489909)) ^ e >>> 16)
        }(t.__iterate(r ? e ? function(t, e) {
          n = 31 * n + rg(tO(t), tO(e)) | 0
        } : function(t, e) {
          n = n + rg(tO(t), tO(e)) | 0
        } : e ? function(t) {
          n = 31 * n + tO(t) | 0
        } : function(t) {
          n = n + tO(t) | 0
        }), n)
      }(this))
    }
  });
  var ra = p.prototype;
  ra[S] = !0, ra[H] = ra.values, ra.__toJS = ra.toArray, ra.__toStringMapper = rp, ra.inspect = ra.toSource = function() {
    return this.toString()
  }, ra.chain = ra.flatMap, ra.contains = ra.includes, ! function() {
    try {
      Object.defineProperty(ra, "length", {
        get: function() {
          if (!p.noLengthWarning) {
            var t;
            try {
              throw Error()
            } catch (e) {
              t = e.stack
            }
            if (-1 === t.indexOf("_wrapObject")) return console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + t), this.size
          }
        }
      })
    } catch (t) {}
  }(), ro(h, {
    flip: function() {
      return eF(this, eD(this))
    },
    findKey: function(t, e) {
      var r = this.findEntry(t, e);
      return r && r[0]
    },
    findLastKey: function(t, e) {
      return this.toSeq().reverse().findKey(t, e)
    },
    keyOf: function(t) {
      return this.findKey(function(e) {
        return tv(e, t)
      })
    },
    lastKeyOf: function(t) {
      return this.findLastKey(function(e) {
        return tv(e, t)
      })
    },
    mapEntries: function(t, e) {
      var r = this,
        n = 0;
      return eF(this, this.toSeq().map(function(i, o) {
        return t.call(e, [o, i], n++, r)
      }).fromEntrySeq())
    },
    mapKeys: function(t, e) {
      var r = this;
      return eF(this, this.toSeq().flip().map(function(n, i) {
        return t.call(e, n, i, r)
      }).flip())
    }
  });
  var ru = h.prototype;

  function rs(t, e) {
    return e
  }

  function rc(t, e) {
    return [e, t]
  }

  function rl(t) {
    return function() {
      return !t.apply(this, arguments)
    }
  }

  function rf(t) {
    return function() {
      return -t.apply(this, arguments)
    }
  }

  function rp(t) {
    return "string" == typeof t ? JSON.stringify(t) : t
  }

  function rh() {
    return B(arguments)
  }

  function rd(t, e) {
    return t < e ? 1 : t > e ? -1 : 0
  }
  ru[w] = !0, ru[H] = ra.entries, ru.__toJS = ra.toObject, ru.__toStringMapper = function(t, e) {
    return JSON.stringify(e) + ": " + rp(t)
  }, ro(d, {
    toKeyedSeq: function() {
      return new ek(this, !1)
    },
    filter: function(t, e) {
      return eF(this, eT(this, t, e, !1))
    },
    findIndex: function(t, e) {
      var r = this.findEntry(t, e);
      return r ? r[0] : -1
    },
    indexOf: function(t) {
      var e = this.toKeyedSeq().keyOf(t);
      return void 0 === e ? -1 : e
    },
    lastIndexOf: function(t) {
      var e = this.toKeyedSeq().reverse().keyOf(t);
      return void 0 === e ? -1 : e
    },
    reverse: function() {
      return eF(this, eK(this, !1))
    },
    slice: function(t, e) {
      return eF(this, eM(this, t, e, !1))
    },
    splice: function(t, e) {
      var r = arguments.length;
      if (e = Math.max(0 | e, 0), 0 === r || 2 === r && !e) return this;
      t = j(t, t < 0 ? this.count() : this.size, 0);
      var n = this.slice(0, t);
      return eF(this, 1 === r ? n : n.concat(B(arguments, 2), this.slice(t + e)))
    },
    findLastIndex: function(t, e) {
      var r = this.toKeyedSeq().findLastKey(t, e);
      return void 0 === r ? -1 : r
    },
    first: function() {
      return this.get(0)
    },
    flatten: function(t) {
      return eF(this, eI(this, t, !1))
    },
    get: function(t, e) {
      return (t = R(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function(e, r) {
        return r === t
      }, void 0, e)
    },
    has: function(t) {
      return (t = R(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t))
    },
    interpose: function(t) {
      var e, r, n;
      return eF(this, (e = this, r = t, (n = eU(e)).size = e.size && 2 * e.size - 1, n.__iterateUncached = function(t, n) {
        var i = this,
          o = 0;
        return e.__iterate(function(e, n) {
          return (!o || !1 !== t(r, o++, i)) && !1 !== t(e, o++, i)
        }, n), o
      }, n.__iteratorUncached = function(t, n) {
        var i, o = e.__iterator(1, n),
          a = 0;
        return new W(function() {
          return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? V(t, a++, r) : V(t, a++, i.value, i)
        })
      }, n))
    },
    interleave: function() {
      var t = [this].concat(B(arguments)),
        e = eN(this.toSeq(), te.of, t),
        r = e.flatten(!0);
      return e.size && (r.size = e.size * t.length), eF(this, r)
    },
    last: function() {
      return this.get(-1)
    },
    skipWhile: function(t, e) {
      return eF(this, eA(this, t, e, !1))
    },
    zip: function() {
      var t = [this].concat(B(arguments));
      return eF(this, eN(this, rh, t))
    },
    zipWith: function(t) {
      var e = B(arguments);
      return e[0] = this, eF(this, eN(this, t, e))
    }
  }), d.prototype[k] = !0, d.prototype[x] = !0, ro(g, {
    get: function(t, e) {
      return this.has(t) ? t : e
    },
    includes: function(t) {
      return this.has(t)
    },
    keySeq: function() {
      return this.valueSeq()
    }
  }), g.prototype.has = ra.includes, ro(tt, h.prototype), ro(te, d.prototype), ro(tr, g.prototype), ro(tk, h.prototype), ro(tx, d.prototype), ro(tC, g.prototype);

  function rg(t, e) {
    return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0
  }
  return {
    Iterable: p,
    Seq: Q,
    Collection: tw,
    Map: tP,
    OrderedMap: em,
    List: en,
    Stack: e4,
    Set: eZ,
    OrderedSet: e2,
    Record: eV,
    Range: tS,
    Repeat: t_,
    is: tv,
    fromJS: tg
  }
}, "object" == typeof e ? t.exports = n() : "function" == typeof define && define.amd ? define(n) : r.Immutable = n()