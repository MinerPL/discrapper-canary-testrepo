"use strict";
e.r(E), e.d(E, {
  isBigFlag: function() {
    return T
  },
  default: function() {
    return l
  }
}), e("274635");
var I = e("552442"),
  a = e.n(I);
let o = 4;

function R(_) {
  let E = [];
  for (let e = 0; e < _.length; e++) {
    let I = Number(_[e]);
    for (let _ = 0; I || _ < E.length; _++) I += 10 * (E[_] || 0), E[_] = I % 16, I = (I - E[_]) / 16
  }
  return E
}
class t {
  static fromString(_) {
    return new t(function(_) {
      let E = R(_),
        e = Array(o);
      for (let _ = 0; _ < o; _++) e[o - 1 - _] = function(_, E, e) {
        let I = 0;
        for (let a = 0; a < e; a++) {
          let e = _[E + a];
          if (void 0 === e) break;
          I += e * 16 ** a
        }
        return I
      }(E, _ * o, o);
      return e
    }(_), _)
  }
  static fromBit(_) {
    let E = Array(o),
      e = Math.floor(_ / 16);
    for (let I = 0; I < o; I++) E[o - 1 - I] = I === e ? 1 << _ - 16 * e : 0;
    return new t(E)
  }
  static asUintN(_, E) {
    let {
      parts: e
    } = E, I = 0, a = 0;
    for (; a < _ && a < 16 * e.length;) {
      let E = Math.min(_ - a, 16),
        o = (1 << E) - 1,
        R = e.length - Math.floor(a / 16) - 1;
      I |= (e[R] & o) << a, a += E
    }
    return I
  }
  and(_) {
    let {
      parts: E
    } = _;
    return new t(this.parts.map((_, e) => _ & E[e]))
  }
  or(_) {
    let {
      parts: E
    } = _;
    return new t(this.parts.map((_, e) => _ | E[e]))
  }
  xor(_) {
    let {
      parts: E
    } = _;
    return new t(this.parts.map((_, e) => _ ^ E[e]))
  }
  not() {
    return new t(this.parts.map(_ => ~_))
  }
  equals(_) {
    let {
      parts: E
    } = _;
    return this.parts.every((_, e) => _ === E[e])
  }
  toString() {
    if (null != this.str) return this.str;
    let _ = Array(16);
    return this.parts.forEach((E, e) => {
      let I = R(E.toString());
      for (let E = 0; E < 4; E++) _[E + 4 * e] = I[3 - E] || 0
    }), this.str = a.fromArray(_, 16).toString()
  }
  toJSON() {
    return this.toString()
  }
  constructor(_, E) {
    this.parts = _, this.str = E
  }
}
let A = function() {
  try {
    return !0
  } catch (_) {
    return !1
  }
}();
A && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
  return this.toString()
});
let T = A ? function(_) {
    return "bigint" == typeof _
  } : function(_) {
    return _ instanceof t
  },
  r = {},
  N = A ? function(_) {
    return BigInt(_)
  } : function(_) {
    return _ instanceof t ? _ : ("number" == typeof _ && (_ = _.toString()), null != r[_]) ? r[_] : (r[_] = t.fromString(_), r[_])
  },
  i = N(0),
  c = A ? function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
      E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return _ & E
  } : function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
      E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return _.and(E)
  },
  O = A ? function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
      E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return _ | E
  } : function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
      E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return _.or(E)
  },
  n = A ? function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
      E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return _ ^ E
  } : function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
      E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return _.xor(E)
  },
  L = A ? function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
    return ~_
  } : function() {
    let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
    return _.not()
  },
  D = A ? function(_, E) {
    return _ === E
  } : function(_, E) {
    return null == _ || null == E ? _ == E : _.equals(E)
  },
  S = A ? function(_) {
    return BigInt(1) << BigInt(_)
  } : function(_) {
    return t.fromBit(_)
  },
  C = A ? function(_, E) {
    return Number(BigInt.asUintN(_, E))
  } : function(_, E) {
    return t.asUintN(_, E)
  };
var l = {
  asUintN: C,
  combine: function() {
    for (var _ = arguments.length, E = Array(_), e = 0; e < _; e++) E[e] = arguments[e];
    let I = E[0];
    for (let _ = 1; _ < E.length; _++) I = O(I, E[_]);
    return I
  },
  add: function(_, E) {
    return E === i ? _ : O(_, E)
  },
  remove: function(_, E) {
    return E === i ? _ : n(_, c(_, E))
  },
  filter: c,
  invert: L,
  has: function(_, E) {
    return D(c(_, E), E)
  },
  hasAny: function(_, E) {
    return !D(c(_, E), i)
  },
  equals: D,
  deserialize: N,
  getFlag: S
}