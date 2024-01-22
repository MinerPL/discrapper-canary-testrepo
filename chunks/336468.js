"use strict";
let r, i;
n.r(t), n.d(t, {
  CalendarDate: function() {
    return em
  },
  Time: function() {
    return ex
  },
  GregorianCalendar: function() {
    return f
  },
  createCalendar: function() {
    return tr
  },
  toCalendarDate: function() {
    return H
  },
  toCalendarDateTime: function() {
    return G
  },
  toTime: function() {
    return W
  },
  toCalendar: function() {
    return Z
  },
  toZoned: function() {
    return Y
  },
  isSameDay: function() {
    return h
  },
  isSameMonth: function() {
    return g
  },
  isEqualDay: function() {
    return b
  },
  isToday: function() {
    return v
  },
  getDayOfWeek: function() {
    return m
  },
  now: function() {
    return y
  },
  today: function() {
    return x
  },
  getLocalTimeZone: function() {
    return E
  },
  startOfMonth: function() {
    return M
  },
  startOfWeek: function() {
    return A
  },
  startOfYear: function() {
    return C
  },
  endOfMonth: function() {
    return D
  },
  endOfWeek: function() {
    return R
  },
  getMinimumMonthInYear: function() {
    return P
  },
  getMinimumDayInMonth: function() {
    return T
  },
  getWeeksInMonth: function() {
    return O
  },
  minDate: function() {
    return j
  },
  maxDate: function() {
    return N
  },
  DateFormatter: function() {
    return to
  }
}), n("222007"), n("70102"), n("781738"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790"), n("492311"), n("101997"), n("990131");
var o = n("599514");

function s(e, t) {
  return e - t * Math.floor(e / t)
}

function a(e, t, n, r) {
  let i = (t = u(e, t)) - 1,
    o = -2;
  return n <= 2 ? o = 0 : c(t) && (o = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + o + r)
}

function c(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
}

function u(e, t) {
  return "BC" === e ? 1 - t : t
}

function d(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [t, e]
}
let l = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class f {
  fromJulianDay(e) {
    let t = e - 1721426,
      n = Math.floor(t / 146097),
      r = s(t, 146097),
      i = Math.floor(r / 36524),
      o = s(r, 36524),
      u = Math.floor(o / 1461),
      l = Math.floor(s(o, 1461) / 365),
      [f, p] = d(400 * n + 100 * i + 4 * u + l + (4 !== i && 4 !== l ? 1 : 0)),
      h = e - a(f, p, 1, 1),
      g = 2;
    e < a(f, p, 3, 1) ? g = 0 : c(p) && (g = 1);
    let b = Math.floor(((h + g) * 12 + 373) / 367),
      v = e - a(f, p, b, 1) + 1;
    return new em(f, p, b, v)
  }
  toJulianDay(e) {
    return a(e.era, e.year, e.month, e.day)
  }
  getDaysInMonth(e) {
    return l[c(e.year) ? "leapyear" : "standard"][e.month - 1]
  }
  getMonthsInYear(e) {
    return 12
  }
  getDaysInYear(e) {
    return c(e.year) ? 366 : 365
  }
  getYearsInEra(e) {
    return 9999
  }
  getEras() {
    return ["BC", "AD"]
  }
  isInverseEra(e) {
    return "BC" === e.era
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year)
  }
  constructor() {
    this.identifier = "gregory"
  }
}
let p = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};

function h(e, t) {
  return t = Z(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
}

function g(e, t) {
  return t = Z(t, e.calendar), e = M(e), t = M(t), e.era === t.era && e.year === t.year && e.month === t.month
}

function b(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
}

function v(e, t) {
  return h(e, x(t))
}

function m(e, t) {
  let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - function(e) {
    return p[function(e) {
      if (Intl.Locale) {
        let t = I.get(e);
        return !t && (t = new Intl.Locale(e).maximize().region, I.set(e, t)), t
      }
      let t = e.split("-")[1];
      return "u" === t ? null : t
    }(e)] || 0
  }(t)) % 7;
  return n < 0 && (n += 7), n
}

function y(e) {
  return q(Date.now(), e)
}

function x(e) {
  return H(y(e))
}

function w(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
}

function S(e, t) {
  return k(e) - k(t)
}

function k(e) {
  return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
}
let _ = null;

function E() {
  return null == _ && (_ = new Intl.DateTimeFormat().resolvedOptions().timeZone), _
}

function M(e) {
  return e.subtract({
    days: e.day - 1
  })
}

function D(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  })
}

function C(e) {
  return M(e.subtract({
    months: e.month - 1
  }))
}

function P(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1
}

function T(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1
}

function A(e, t) {
  let n = m(e, t);
  return e.subtract({
    days: n
  })
}

function R(e, t) {
  return A(e, t).add({
    days: 6
  })
}
let I = new Map;

function O(e, t) {
  let n = e.calendar.getDaysInMonth(e);
  return Math.ceil((m(M(e), t) + n) / 7)
}

function j(e, t) {
  return e && t ? 0 >= e.compare(t) ? e : t : e || t
}

function N(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t
}

function L(e) {
  return F(u((e = Z(e, new f)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
}

function F(e, t, n, r, i, o, s) {
  let a = new Date;
  return a.setUTCHours(r, i, o, s), a.setUTCFullYear(e, t - 1, n), a.getTime()
}

function B(e, t) {
  if ("UTC" === t) return 0;
  if (e > 0 && t === E()) return -6e4 * new Date(e).getTimezoneOffset();
  let {
    year: n,
    month: r,
    day: i,
    hour: o,
    minute: s,
    second: a
  } = K(e, t);
  return F(n, r, i, o, s, a, 0) - 1e3 * Math.floor(e / 1e3)
}
let z = new Map;

function K(e, t) {
  let n = z.get(t);
  !n && (n = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), z.set(t, n));
  let r = n.formatToParts(new Date(e)),
    i = {};
  for (let e of r) "literal" !== e.type && (i[e.type] = e.value);
  return {
    year: "BC" === i.era || "B" === i.era ? -i.year + 1 : +i.year,
    month: +i.month,
    day: +i.day,
    hour: "24" === i.hour ? 0 : +i.hour,
    minute: +i.minute,
    second: +i.second
  }
}

function V(e, t) {
  var n, r, i, o;
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible",
    a = G(e);
  if ("UTC" === t) return L(a);
  if (t === E() && "compatible" === s) {
    a = Z(a, new f);
    let e = new Date,
      t = u(a.era, a.year);
    return e.setFullYear(t, a.month - 1, a.day), e.setHours(a.hour, a.minute, a.second, a.millisecond), e.getTime()
  }
  let c = L(a),
    d = B(c - 864e5, t),
    l = B(c + 864e5, t);
  let p = (n = a, r = t, ((i = c - d) == (o = c - l) ? [i] : [i, o]).filter(e => (function(e, t, n) {
    let r = K(n, t);
    return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
  })(n, r, e)));
  if (1 === p.length) return p[0];
  if (p.length > 1) switch (s) {
    case "compatible":
    case "earlier":
      return p[0];
    case "later":
      return p[p.length - 1];
    case "reject":
      throw RangeError("Multiple possible absolute times found")
  }
  switch (s) {
    case "earlier":
      return Math.min(c - d, c - l);
    case "compatible":
    case "later":
      return Math.max(c - d, c - l);
    case "reject":
      throw RangeError("No such absolute time found")
  }
}

function U(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible";
  return new Date(V(e, t, n))
}

function q(e, t) {
  let n = B(e, t),
    r = new Date(e + n);
  return new e_(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds())
}

function H(e) {
  return new em(e.calendar, e.era, e.year, e.month, e.day)
}

function G(e, t) {
  let n = 0,
    r = 0,
    i = 0,
    o = 0;
  if ("timeZone" in e)({
    hour: n,
    minute: r,
    second: i,
    millisecond: o
  } = e);
  else if ("hour" in e && !t) return e;
  return t && ({
    hour: n,
    minute: r,
    second: i,
    millisecond: o
  } = t), new eS(e.calendar, e.era, e.year, e.month, e.day, n, r, i, o)
}

function W(e) {
  return new ex(e.hour, e.minute, e.second, e.millisecond)
}

function Z(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
    r = e.copy();
  return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, ee(r), r
}

function Y(e, t, n) {
  if (e instanceof e_) return e.timeZone === t ? e : function(e, t) {
    return Z(q(L(e) - e.offset, t), e.calendar)
  }(e, t);
  return q(V(e, t, n), t)
}

function X(e, t) {
  let n = e.copy(),
    r = "hour" in n ? ea(n, t) : 0;
  $(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, J(n), Q(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
    function(e) {
      for (; e.day < 1;) e.month--, J(e), e.day += e.calendar.getDaysInMonth(e);
      for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, J(e)
    }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let i = n.calendar.getYearsInEra(n);
  if (n.year > i) {
    var o, s;
    let e = null === (s = (o = n.calendar).isInverseEra) || void 0 === s ? void 0 : s.call(o, n);
    n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let a = n.calendar.getMonthsInYear(n);
  return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
}

function $(e, t) {
  var n, r;
  (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), e.year += t
}

function J(e) {
  for (; e.month < 1;) $(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, $(e, 1)
}

function Q(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
}

function ee(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Q(e)
}

function et(e) {
  let t = {};
  for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
  return t
}

function en(e, t) {
  return X(e, et(t))
}

function er(e, t) {
  let n = e.copy();
  return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), ee(n), n
}

function ei(e, t) {
  let n = e.copy();
  return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), eo(n), n
}

function eo(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
}

function es(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n
}

function ea(e, t) {
  var n;
  let r;
  e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
  return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = es(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = es(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = es(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = es(n.hour, 24), r
}

function ec(e, t) {
  let n = e.copy();
  return ea(n, t), n
}

function eu(e, t, n, r) {
  let i = e.copy();
  switch (t) {
    case "era": {
      let t = e.calendar.getEras(),
        o = t.indexOf(e.era);
      if (o < 0) throw Error("Invalid era: " + e.era);
      o = el(o, n, 0, t.length - 1, null == r ? void 0 : r.round), i.era = t[o], ee(i);
      break
    }
    case "year":
      var o, s;
      (null === (s = (o = i.calendar).isInverseEra) || void 0 === s ? void 0 : s.call(o, i)) && (n = -n), i.year = el(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
      break;
    case "month":
      i.month = el(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
      break;
    case "day":
      i.day = el(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
      break;
    default:
      throw Error("Unsupported field " + t)
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(i), ee(i), i
}

function ed(e, t, n, r) {
  let i = e.copy();
  switch (t) {
    case "hour": {
      let t = e.hour,
        o = 0,
        s = 23;
      if ((null == r ? void 0 : r.hourCycle) === 12) {
        let e = t >= 12;
        o = e ? 12 : 0, s = e ? 23 : 11
      }
      i.hour = el(t, n, o, s, null == r ? void 0 : r.round);
      break
    }
    case "minute":
      i.minute = el(e.minute, n, 0, 59, null == r ? void 0 : r.round);
      break;
    case "second":
      i.second = el(e.second, n, 0, 59, null == r ? void 0 : r.round);
      break;
    case "millisecond":
      i.millisecond = el(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
      break;
    default:
      throw Error("Unsupported field " + t)
  }
  return i
}

function el(e, t, n, r) {
  let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (i) {
    (e += Math.sign(t)) < n && (e = r);
    let i = Math.abs(t);
    (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n)
  } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
  return e
}

function ef(e, t) {
  let n;
  if (null != t.years && 0 !== t.years || null != t.months && 0 !== t.months || null != t.weeks && 0 !== t.weeks || null != t.days && 0 !== t.days) {
    let r;
    n = V(X(G(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    }), e.timeZone)
  } else n = L(e) - e.offset;
  return Z(q(n += (t.milliseconds || 0) + 1e3 * (t.seconds || 0) + 6e4 * (t.minutes || 0) + 36e5 * (t.hours || 0), e.timeZone), e.calendar)
}

function ep(e) {
  return "".concat(String(e.hour).padStart(2, "0"), ":").concat(String(e.minute).padStart(2, "0"), ":").concat(String(e.second).padStart(2, "0")).concat(e.millisecond ? String(e.millisecond / 1e3).slice(1) : "")
}

function eh(e) {
  let t = Z(e, new f);
  return "".concat(String(t.year).padStart(4, "0"), "-").concat(String(t.month).padStart(2, "0"), "-").concat(String(t.day).padStart(2, "0"))
}

function eg(e) {
  return "".concat(eh(e), "T").concat(ep(e))
}

function eb(e) {
  let t, n = "object" == typeof e[0] ? e.shift() : new f;
  if ("string" == typeof e[0]) t = e.shift();
  else {
    let e = n.getEras();
    t = e[e.length - 1]
  }
  return [n, t, e.shift(), e.shift(), e.shift()]
}
var ev = new WeakMap;
class em {
  copy() {
    return this.era ? new em(this.calendar, this.era, this.year, this.month, this.day) : new em(this.calendar, this.year, this.month, this.day)
  }
  add(e) {
    return X(this, e)
  }
  subtract(e) {
    var t;
    return t = this, X(t, et(e))
  }
  set(e) {
    return er(this, e)
  }
  cycle(e, t, n) {
    return eu(this, e, t, n)
  }
  toDate(e) {
    return U(this, e)
  }
  toString() {
    return eh(this)
  }
  compare(e) {
    return w(this, e)
  }
  constructor(...e) {
    (0, o._)(this, ev, {
      writable: !0,
      value: void 0
    });
    let [t, n, r, i, s] = eb(e);
    this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = s, ee(this)
  }
}
var ey = new WeakMap;
class ex {
  copy() {
    return new ex(this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return ec(this, e)
  }
  subtract(e) {
    var t;
    return t = this, ec(t, et(e))
  }
  set(e) {
    return ei(this, e)
  }
  cycle(e, t, n) {
    return ed(this, e, t, n)
  }
  toString() {
    return ep(this)
  }
  compare(e) {
    var t, n;
    return t = this, n = e, k(t) - k(n)
  }
  constructor(e = 0, t = 0, n = 0, r = 0) {
    (0, o._)(this, ey, {
      writable: !0,
      value: void 0
    }), this.hour = e, this.minute = t, this.second = n, this.millisecond = r, eo(this)
  }
}
var ew = new WeakMap;
class eS {
  copy() {
    return this.era ? new eS(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new eS(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return X(this, e)
  }
  subtract(e) {
    var t;
    return t = this, X(t, et(e))
  }
  set(e) {
    return er(ei(this, e), e)
  }
  cycle(e, t, n) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return eu(this, e, t, n);
      default:
        return ed(this, e, t, n)
    }
  }
  toDate(e, t) {
    return U(this, e, t)
  }
  toString() {
    return eg(this)
  }
  compare(e) {
    let t = w(this, e);
    if (0 === t) {
      var n, r;
      return n = this, r = G(e), k(n) - k(r)
    }
    return t
  }
  constructor(...e) {
    (0, o._)(this, ew, {
      writable: !0,
      value: void 0
    });
    let [t, n, r, i, s] = eb(e);
    this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, ee(this)
  }
}
var ek = new WeakMap;
class e_ {
  copy() {
    return this.era ? new e_(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e_(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return ef(this, e)
  }
  subtract(e) {
    var t;
    return t = this, ef(t, et(e))
  }
  set(e, t) {
    var n, r, i;
    let o, s;
    return n = this, r = e, i = t, 0 === (s = ei(er(o = G(n), r), r)).compare(o) ? n : Z(q(V(s, n.timeZone, i), n.timeZone), n.calendar)
  }
  cycle(e, t, n) {
    return function(e, t, n, r) {
      switch (t) {
        case "hour": {
          let t = 0,
            i = 23;
          if ((null == r ? void 0 : r.hourCycle) === 12) {
            let n = e.hour >= 12;
            t = n ? 12 : 0, i = n ? 23 : 11
          }
          let o = G(e),
            s = Z(ei(o, {
              hour: t
            }), new f),
            a = [V(s, e.timeZone, "earlier"), V(s, e.timeZone, "later")].filter(t => q(t, e.timeZone).day === s.day)[0],
            c = Z(ei(o, {
              hour: i
            }), new f),
            u = [V(c, e.timeZone, "earlier"), V(c, e.timeZone, "later")].filter(t => q(t, e.timeZone).day === c.day).pop(),
            d = L(e) - e.offset,
            l = Math.floor(d / 36e5),
            p = d % 36e5;
          return Z(q(d = 36e5 * el(l, n, Math.floor(a / 36e5), Math.floor(u / 36e5), null == r ? void 0 : r.round) + p, e.timeZone), e.calendar)
        }
        case "minute":
        case "second":
        case "millisecond":
          return ed(e, t, n, r);
        case "era":
        case "year":
        case "month":
        case "day":
          return Z(q(V(eu(G(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
        default:
          throw Error("Unsupported field " + t)
      }
    }(this, e, t, n)
  }
  toDate() {
    var e;
    return e = this, new Date(L(e) - e.offset)
  }
  toString() {
    var e, t;
    let n, r, i;
    return e = this, "".concat(eg(e)).concat((n = 0 > Math.sign(t = e.offset) ? "-" : "+", r = Math.floor((t = Math.abs(t)) / 36e5), i = t % 36e5 / 6e4, "".concat(n).concat(String(r).padStart(2, "0"), ":").concat(String(i).padStart(2, "0"))), "[").concat(e.timeZone, "]")
  }
  toAbsoluteString() {
    return this.toDate().toISOString()
  }
  compare(e) {
    return this.toDate().getTime() - Y(e, this.timeZone).toDate().getTime()
  }
  constructor(...e) {
    (0, o._)(this, ek, {
      writable: !0,
      value: void 0
    });
    let [t, n, r, i, s] = eb(e), a = e.shift(), c = e.shift();
    this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = s, this.timeZone = a, this.offset = c, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, ee(this)
  }
}
let eE = [
    [1868, 9, 8],
    [1912, 7, 30],
    [1926, 12, 25],
    [1989, 1, 8],
    [2019, 5, 1]
  ],
  eM = [
    [1912, 7, 29],
    [1926, 12, 24],
    [1989, 1, 7],
    [2019, 4, 30]
  ],
  eD = [1867, 1911, 1925, 1988, 2018],
  eC = ["meiji", "taisho", "showa", "heisei", "reiwa"];

function eP(e) {
  let t = eE.findIndex(t => {
    let [n, r, i] = t;
    return !!(e.year < n) || e.year === n && !!(e.month < r) || e.year === n && e.month === r && !!(e.day < i) || !1
  });
  return -1 === t ? eE.length - 1 : 0 === t ? 0 : t - 1
}

function eT(e) {
  let t = eD[eC.indexOf(e.era)];
  if (!t) throw Error("Unknown era: " + e.era);
  return new em(e.year + t, e.month, e.day)
}
class eA extends f {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      n = eP(t);
    return new em(this, eC[n], t.year - eD[n], t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(eT(e))
  }
  balanceDate(e) {
    let t = eT(e),
      n = eP(t);
    eC[n] !== e.era && (e.era = eC[n], e.year = t.year - eD[n]), this.constrainDate(e)
  }
  constrainDate(e) {
    let t = eC.indexOf(e.era),
      n = eM[t];
    if (null != n) {
      let [r, i, o] = n, s = r - eD[t];
      e.year = Math.max(1, Math.min(s, e.year)), e.year === s && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(o, e.day)))
    }
    if (1 === e.year && t >= 0) {
      let [, n, r] = eE[t];
      e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day))
    }
  }
  getEras() {
    return eC
  }
  getYearsInEra(e) {
    let t = eC.indexOf(e.era),
      n = eE[t],
      r = eE[t + 1];
    if (null == r) return 9999 - n[0] + 1;
    let i = r[0] - n[0];
    return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(eT(e))
  }
  getMinimumMonthInYear(e) {
    let t = eR(e);
    return t ? t[1] : 1
  }
  getMinimumDayInMonth(e) {
    let t = eR(e);
    return t && e.month === t[1] ? t[2] : 1
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese"
  }
}

function eR(e) {
  if (1 === e.year) return eE[eC.indexOf(e.era)]
}
class eI extends f {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e);
    return new em(this, u(t.era, t.year) - -543, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(eO(e))
  }
  getEras() {
    return ["BE"]
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(eO(e))
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "buddhist"
  }
}

function eO(e) {
  let [t, n] = d(e.year + -543);
  return new em(t, n, e.month, e.day)
}

function ej(e) {
  return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911
}

function eN(e) {
  let t = e - 1911;
  return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
}
class eL extends f {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      [n, r] = eN(u(t.era, t.year));
    return new em(this, n, r, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(eF(e))
  }
  getEras() {
    return ["before_minguo", "minguo"]
  }
  balanceDate(e) {
    let [t, n] = eN(ej(e));
    e.era = t, e.year = n
  }
  isInverseEra(e) {
    return "before_minguo" === e.era
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(eF(e))
  }
  getYearsInEra(e) {
    return "before_minguo" === e.era ? 9999 : 8088
  }
  constructor(...e) {
    super(...e), this.identifier = "roc"
  }
}

function eF(e) {
  let [t, n] = d(ej(e));
  return new em(t, n, e.month, e.day)
}

function eB(e, t, n) {
  let r = e > 0 ? e - 474 : e - 473,
    i = s(r, 2820) + 474;
  return 1948320 + 1029983 * Math.floor(r / 2820) + 365 * (i - 1) + Math.floor((31 * i - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n
}
class ez {
  fromJulianDay(e) {
    let t = e - eB(475, 1, 1),
      n = Math.floor(t / 1029983),
      r = s(t, 1029983),
      i = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
    i <= 0 && i--;
    let o = e - eB(i, 1, 1) + 1,
      a = o <= 186 ? Math.ceil(o / 31) : Math.ceil((o - 6) / 31),
      c = e - eB(i, a, 1) + 1;
    return new em(this, i, a, c)
  }
  toJulianDay(e) {
    return eB(e.year, e.month, e.day)
  }
  getMonthsInYear() {
    return 12
  }
  getDaysInMonth(e) {
    var t;
    let n;
    if (e.month <= 6) return 31;
    if (e.month <= 11) return 30;
    return (n = s((t = e.year) > 0 ? t - 474 : t - 473, 2820) + 474, 31 > s((n + 38) * 31, 128)) ? 30 : 29
  }
  getEras() {
    return ["AP"]
  }
  getYearsInEra() {
    return 9377
  }
  constructor() {
    this.identifier = "persian"
  }
}
class eK extends f {
  fromJulianDay(e) {
    let t, n, r, i = super.fromJulianDay(e),
      o = i.year - 78,
      s = e - a(i.era, i.year, 1, 1);
    if (s < 80 ? (o--, s += (t = c(i.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = c(i.year) ? 31 : 30, s -= 80), s < t) n = 1, r = s + 1;
    else {
      let e = s - t;
      e < 155 ? (n = Math.floor(e / 31) + 2, r = e % 31 + 1) : (e -= 155, n = Math.floor(e / 30) + 7, r = e % 30 + 1)
    }
    return new em(this, o, n, r)
  }
  toJulianDay(e) {
    let t, n;
    let [r, i] = d(e.year + 78);
    return (c(i) ? (t = 31, n = a(r, i, 3, 21)) : (t = 30, n = a(r, i, 3, 22)), 1 === e.month) ? n + e.day - 1 : (n += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (n += (e.month - 7) * 30), n += e.day - 1)
  }
  getDaysInMonth(e) {
    return 1 === e.month && c(e.year + 78) || e.month >= 2 && e.month <= 6 ? 31 : 30
  }
  getYearsInEra() {
    return 9919
  }
  getEras() {
    return ["saka"]
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "indian"
  }
}

function eV(e, t, n, r) {
  return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1
}

function eU(e, t, n) {
  let r = Math.floor((30 * (n - t) + 10646) / 10631),
    i = Math.min(12, Math.ceil((n - (29 + eV(t, r, 1, 1))) / 29.5) + 1),
    o = n - eV(t, r, i, 1) + 1;
  return new em(e, r, i, o)
}

function eq(e) {
  return (14 + 11 * e) % 30 < 11
}
class eH {
  fromJulianDay(e) {
    return eU(this, 1948440, e)
  }
  toJulianDay(e) {
    return eV(1948440, e.year, e.month, e.day)
  }
  getDaysInMonth(e) {
    let t = 29 + e.month % 2;
    return 12 === e.month && eq(e.year) && t++, t
  }
  getMonthsInYear() {
    return 12
  }
  getDaysInYear(e) {
    return eq(e.year) ? 355 : 354
  }
  getYearsInEra() {
    return 9665
  }
  getEras() {
    return ["AH"]
  }
  constructor() {
    this.identifier = "islamic-civil"
  }
}
class eG extends eH {
  fromJulianDay(e) {
    return eU(this, 1948439, e)
  }
  toJulianDay(e) {
    return eV(1948439, e.year, e.month, e.day)
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla"
  }
}

function eW(e) {
  return 460322 + i[e - 1300]
}

function eZ(e, t) {
  return (r[e - 1300] & 1 << 11 - (t - 1)) == 0 ? 29 : 30
}

function eY(e, t) {
  let n = eW(e);
  for (let r = 1; r < t; r++) n += eZ(e, r);
  return n
}

function eX(e) {
  return i[e + 1 - 1300] - i[e - 1300]
}
class e$ extends eH {
  fromJulianDay(e) {
    let t = e - 1948440,
      n = eW(1300),
      r = eW(1600);
    if (t < n || t > r) return super.fromJulianDay(e);
    {
      let e = 1299,
        n = 1,
        r = 1;
      for (; r > 0;) {
        r = t - eW(++e) + 1;
        let i = eX(e);
        if (r === i) {
          n = 12;
          break
        }
        if (r < i) {
          let t = eZ(e, n);
          for (n = 1; r > t;) r -= t, t = eZ(e, ++n);
          break
        }
      }
      return new em(this, e, n, t - eY(e, n) + 1)
    }
  }
  toJulianDay(e) {
    return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + eY(e.year, e.month) + (e.day - 1)
  }
  getDaysInMonth(e) {
    return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : eZ(e.year, e.month)
  }
  getDaysInYear(e) {
    return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : eX(e.year)
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", !r && (r = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), e => e.charCodeAt(0)).buffer)), !i) {
      i = new Uint32Array(301);
      let e = 0;
      for (let t = 1300; t <= 1600; t++) {
        i[t - 1300] = e;
        for (let n = 1; n <= 12; n++) e += eZ(t, n)
      }
    }
  }
}
let eJ = 25920,
  eQ = 29 * eJ + 13753;

function e0(e) {
  return 7 > s(7 * e + 1, 19)
}

function e1(e) {
  let t = Math.floor((235 * e - 234) / 19),
    n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
  return 3 > s(3 * (n + 1), 7) && (n += 1), n
}

function e2(e) {
  var t;
  let n, r;
  return e1(e) + (n = e1((t = e) - 1), r = e1(t), e1(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0)
}

function e3(e) {
  return e2(e + 1) - e2(e)
}

function e8(e, t) {
  if (t >= 6 && !e0(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t) return 29;
  let n = function(e) {
    let t = e3(e);
    switch (t > 380 && (t -= 30), t) {
      case 353:
        return 0;
      case 354:
        return 1;
      case 355:
        return 2
    }
  }(e);
  return 2 === t ? 2 === n ? 30 : 29 : 3 === t ? 0 === n ? 29 : 30 : 6 === t ? e0(e) ? 30 : 0 : 30
}
class e6 {
  fromJulianDay(e) {
    let t = e - 347997,
      n = Math.floor((19 * (t * eJ / eQ) + 234) / 235) + 1,
      r = e2(n),
      i = Math.floor(t - r);
    for (; i < 1;) i = Math.floor(t - (r = e2(--n)));
    let o = 1,
      s = 0;
    for (; s < i;) s += e8(n, o), o++;
    let a = i - (s -= e8(n, --o));
    return new em(this, n, o, a)
  }
  toJulianDay(e) {
    let t = e2(e.year);
    for (let n = 1; n < e.month; n++) t += e8(e.year, n);
    return t + e.day + 347997
  }
  getDaysInMonth(e) {
    return e8(e.year, e.month)
  }
  getMonthsInYear(e) {
    return e0(e.year) ? 13 : 12
  }
  getDaysInYear(e) {
    return e3(e.year)
  }
  getYearsInEra() {
    return 9999
  }
  getEras() {
    return ["AM"]
  }
  balanceYearMonth(e, t) {
    t.year !== e.year && (e0(t.year) && !e0(e.year) && t.month > 6 ? e.month-- : !e0(t.year) && e0(e.year) && t.month > 6 && e.month++)
  }
  constructor() {
    this.identifier = "hebrew"
  }
}

function e4(e, t, n, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1
}

function e5(e, t) {
  let n = Math.floor(4 * (t - e) / 1461),
    r = 1 + Math.floor((t - e4(e, n, 1, 1)) / 30),
    i = t + 1 - e4(e, n, r, 1);
  return [n, r, i]
}

function e7(e) {
  return Math.floor(e % 4 / 3)
}

function e9(e, t) {
  return t % 13 != 0 ? 30 : e7(e) + 5
}
class te {
  fromJulianDay(e) {
    let [t, n, r] = e5(1723856, e), i = "AM";
    return t <= 0 && (i = "AA", t += 5500), new em(this, i, t, n, r)
  }
  toJulianDay(e) {
    let t = e.year;
    return "AA" === e.era && (t -= 5500), e4(1723856, t, e.month, e.day)
  }
  getDaysInMonth(e) {
    return e9(e.year, e.month)
  }
  getMonthsInYear() {
    return 13
  }
  getDaysInYear(e) {
    return 365 + e7(e.year)
  }
  getYearsInEra(e) {
    return "AA" === e.era ? 9999 : 9991
  }
  getEras() {
    return ["AA", "AM"]
  }
  constructor() {
    this.identifier = "ethiopic"
  }
}
class tt extends te {
  fromJulianDay(e) {
    let [t, n, r] = e5(1723856, e);
    return new em(this, "AA", t += 5500, n, r)
  }
  getEras() {
    return ["AA"]
  }
  getYearsInEra() {
    return 9999
  }
  constructor(...e) {
    super(...e), this.identifier = "ethioaa"
  }
}
class tn extends te {
  fromJulianDay(e) {
    let [t, n, r] = e5(1824665, e), i = "CE";
    return t <= 0 && (i = "BCE", t = 1 - t), new em(this, i, t, n, r)
  }
  toJulianDay(e) {
    let t = e.year;
    return "BCE" === e.era && (t = 1 - t), e4(1824665, t, e.month, e.day)
  }
  getDaysInMonth(e) {
    let t = e.year;
    return "BCE" === e.era && (t = 1 - t), e9(t, e.month)
  }
  isInverseEra(e) {
    return "BCE" === e.era
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BCE" === e.era ? "CE" : "BCE", e.year = 1 - e.year)
  }
  getEras() {
    return ["BCE", "CE"]
  }
  getYearsInEra(e) {
    return "BCE" === e.era ? 9999 : 9715
  }
  constructor(...e) {
    super(...e), this.identifier = "coptic"
  }
}

function tr(e) {
  switch (e) {
    case "buddhist":
      return new eI;
    case "ethiopic":
      return new te;
    case "ethioaa":
      return new tt;
    case "coptic":
      return new tn;
    case "hebrew":
      return new e6;
    case "indian":
      return new eK;
    case "islamic-civil":
      return new eH;
    case "islamic-tbla":
      return new eG;
    case "islamic-umalqura":
      return new e$;
    case "japanese":
      return new eA;
    case "persian":
      return new ez;
    case "roc":
      return new eL;
    default:
      return new f
  }
}
let ti = new Map;
class to {
  format(e) {
    return this.formatter.format(e)
  }
  formatToParts(e) {
    return this.formatter.formatToParts(e)
  }
  formatRange(e, t) {
    if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    return "".concat(this.formatter.format(e), " – ").concat(this.formatter.format(t))
  }
  formatRangeToParts(e, t) {
    if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    let n = this.formatter.formatToParts(e),
      r = this.formatter.formatToParts(t);
    return [...n.map(e => ({
      ...e,
      source: "startRange"
    })), {
      type: "literal",
      value: " – ",
      source: "shared"
    }, ...r.map(e => ({
      ...e,
      source: "endRange"
    }))]
  }
  resolvedOptions() {
    let e = this.formatter.resolvedOptions();
    return function() {
      return null == tu && (tu = "h12" === new Intl.DateTimeFormat("fr", {
        hour: "numeric",
        hour12: !1
      }).resolvedOptions().hourCycle), tu
    }() && (!this.resolvedHourCycle && (this.resolvedHourCycle = function(e, t) {
      if (!t.timeStyle && !t.hour) return;
      e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
      let n = ta(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
          ...t,
          timeZone: void 0
        }),
        r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find(e => "hour" === e.type).value, 10),
        i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find(e => "hour" === e.type).value, 10);
      if (0 === r && 23 === i) return "h23";
      if (24 === r && 23 === i) return "h24";
      if (0 === r && 11 === i) return "h11";
      if (12 === r && 11 === i) return "h12";
      throw Error("Unexpected hour cycle result")
    }(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"), e
  }
  constructor(e, t = {}) {
    this.formatter = ta(e, t), this.options = t
  }
}
let ts = {
  true: {
    ja: "h11"
  },
  false: {}
};

function ta(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if ("boolean" == typeof t.hour12 && function() {
      return null == tc && (tc = "24" === new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        hour12: !1
      }).format(new Date(2020, 2, 3, 0))), tc
    }()) {
    let n = ts[String((t = {
        ...t
      }).hour12)][e.split("-")[0]],
      r = t.hour12 ? "h12" : "h23";
    t.hourCycle = null != n ? n : r, delete t.hour12
  }
  let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  if (ti.has(n)) return ti.get(n);
  let r = new Intl.DateTimeFormat(e, t);
  return ti.set(n, r), r
}
let tc = null,
  tu = null