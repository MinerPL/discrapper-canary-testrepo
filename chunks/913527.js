var r, i;
e = n.nmd(e), r = this, i = function() {
  "use strict";

  function t() {
    return m.apply(null, arguments)
  }

  function r(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
  }

  function i(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e)
  }

  function a(e) {
    return void 0 === e
  }

  function o(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
  }

  function s(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
  }

  function u(e, t) {
    var n, r = [];
    for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
    return r
  }

  function c(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }

  function l(e, t) {
    for (var n in t) c(t, n) && (e[n] = t[n]);
    return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
  }

  function d(e, t, n, r) {
    return tr(e, t, n, r, !0).utc()
  }

  function f(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf
  }

  function p(e) {
    if (null == e._isValid) {
      var t = f(e),
        n = g.call(t.parsedDateParts, function(e) {
          return null != e
        }),
        r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
      e._isValid = r
    }
    return e._isValid
  }

  function h(e) {
    var t = d(NaN);
    return null != e ? l(f(t), e) : f(t).userInvalidated = !0, t
  }
  g = Array.prototype.some ? Array.prototype.some : function(e) {
    for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
      if (r in t && e.call(this, t[r], r, t)) return !0;
    return !1
  };
  var m, g, _, b, v, y, E = t.momentProperties = [];

  function S(e, t) {
    var n, r, i;
    if (!a(t._isAMomentObject) && (e._isAMomentObject = t._isAMomentObject), !a(t._i) && (e._i = t._i), !a(t._f) && (e._f = t._f), !a(t._l) && (e._l = t._l), !a(t._strict) && (e._strict = t._strict), !a(t._tzm) && (e._tzm = t._tzm), !a(t._isUTC) && (e._isUTC = t._isUTC), !a(t._offset) && (e._offset = t._offset), !a(t._pf) && (e._pf = f(t)), !a(t._locale) && (e._locale = t._locale), E.length > 0)
      for (n = 0; n < E.length; n++) !a(i = t[r = E[n]]) && (e[r] = i);
    return e
  }
  var x = !1;

  function w(e) {
    S(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), !this.isValid() && (this._d = new Date(NaN)), !1 === x && (x = !0, t.updateOffset(this), x = !1)
  }

  function C(e) {
    return e instanceof w || null != e && null != e._isAMomentObject
  }

  function T(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }

  function D(e) {
    var t = +e,
      n = 0;
    return 0 !== t && isFinite(t) && (n = T(t)), n
  }

  function M(e, t, n) {
    var r, i = Math.min(e.length, t.length),
      a = Math.abs(e.length - t.length),
      o = 0;
    for (r = 0; r < i; r++)(n && e[r] !== t[r] || !n && D(e[r]) !== D(t[r])) && o++;
    return o + a
  }

  function O(e) {
    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
  }

  function A(e, n) {
    var r = !0;
    return l(function() {
      if (null != t.deprecationHandler && t.deprecationHandler(null, e), r) {
        for (var i, a = [], o = 0; o < arguments.length; o++) {
          if (i = "", "object" == typeof arguments[o]) {
            for (var s in i += "\n[" + o + "] ", arguments[0]) i += s + ": " + arguments[0][s] + ", ";
            i = i.slice(0, -2)
          } else i = arguments[o];
          a.push(i)
        }
        O(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + Error().stack), r = !1
      }
      return n.apply(this, arguments)
    }, n)
  }
  var k = {};

  function R(e, n) {
    null != t.deprecationHandler && t.deprecationHandler(e, n), !k[e] && (O(n), k[e] = !0)
  }

  function N(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
  }
  t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;

  function I(e, t) {
    var n, r = l({}, e);
    for (n in t) c(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {}, l(r[n], e[n]), l(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
    for (n in e) c(e, n) && !c(t, n) && i(e[n]) && (r[n] = l({}, r[n]));
    return r
  }

  function L(e) {
    null != e && this.set(e)
  }
  _ = Object.keys ? Object.keys : function(e) {
    var t, n = [];
    for (t in e) c(e, t) && n.push(t);
    return n
  };
  var P = {};

  function B(e, t) {
    var n = e.toLowerCase();
    P[n] = P[n + "s"] = P[t] = e
  }

  function F(e) {
    return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0
  }

  function U(e) {
    var t, n, r = {};
    for (n in e) c(e, n) && (t = F(n)) && (r[t] = e[n]);
    return r
  }
  var j = {};

  function Y(e, t) {
    j[e] = t
  }

  function z(e, t, n) {
    var r = "" + Math.abs(e);
    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - r.length)).toString().substr(1) + r
  }
  var H = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    V = {},
    $ = {};

  function Z(e, t, n, r) {
    var i = r;
    "string" == typeof r && (i = function() {
      return this[r]()
    }), e && ($[e] = i), t && ($[t[0]] = function() {
      return z(i.apply(this, arguments), t[1], t[2])
    }), n && ($[n] = function() {
      return this.localeData().ordinal(i.apply(this, arguments), e)
    })
  }

  function K(e, t) {
    return e.isValid() ? (V[t = W(t, e.localeData())] = V[t] || function(e) {
      var t, n, r, i = e.match(H);
      for (n = 0, r = i.length; n < r; n++)
        if ($[i[n]]) i[n] = $[i[n]];
        else {
          ;
          i[n] = (t = i[n]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        } return function(t) {
        var n, a = "";
        for (n = 0; n < r; n++) a += N(i[n]) ? i[n].call(t, e) : i[n];
        return a
      }
    }(t), V[t](e)) : e.localeData().invalidDate()
  }

  function W(e, t) {
    var n = 5;

    function r(e) {
      return t.longDateFormat(e) || e
    }
    for (G.lastIndex = 0; n >= 0 && G.test(e);) e = e.replace(G, r), G.lastIndex = 0, n -= 1;
    return e
  }
  var q = /\d/,
    Q = /\d\d/,
    X = /\d{3}/,
    J = /\d{4}/,
    ee = /[+-]?\d{6}/,
    et = /\d\d?/,
    en = /\d\d\d\d?/,
    er = /\d\d\d\d\d\d?/,
    ei = /\d{1,3}/,
    ea = /\d{1,4}/,
    eo = /[+-]?\d{1,6}/,
    es = /\d+/,
    eu = /[+-]?\d+/,
    ec = /Z|[+-]\d\d:?\d\d/gi,
    el = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ed = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    ef = {};

  function ep(e, t, n) {
    ef[e] = N(t) ? t : function(e, r) {
      return e && n ? n : t
    }
  }

  function eh(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }
  var em = {};

  function eg(e, t) {
    var n, r = t;
    for ("string" == typeof e && (e = [e]), o(t) && (r = function(e, n) {
        n[t] = D(e)
      }), n = 0; n < e.length; n++) em[e[n]] = r
  }

  function e_(e, t) {
    eg(e, function(e, n, r, i) {
      r._w = r._w || {}, t(e, r._w, r, i)
    })
  }

  function eb(e) {
    return ev(e) ? 366 : 365
  }

  function ev(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
  }
  Z("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e
  }), Z(0, ["YY", 2], 0, function() {
    return this.year() % 100
  }), Z(0, ["YYYY", 4], 0, "year"), Z(0, ["YYYYY", 5], 0, "year"), Z(0, ["YYYYYY", 6, !0], 0, "year"), B("year", "y"), j.year = 1, ep("Y", eu), ep("YY", et, Q), ep("YYYY", ea, J), ep("YYYYY", eo, ee), ep("YYYYYY", eo, ee), eg(["YYYYY", "YYYYYY"], 0), eg("YYYY", function(e, n) {
    n[0] = 2 === e.length ? t.parseTwoDigitYear(e) : D(e)
  }), eg("YY", function(e, n) {
    n[0] = t.parseTwoDigitYear(e)
  }), eg("Y", function(e, t) {
    t[0] = parseInt(e, 10)
  }), t.parseTwoDigitYear = function(e) {
    return D(e) + (D(e) > 68 ? 1900 : 2e3)
  };
  var ey = eE("FullYear", !0);

  function eE(e, n) {
    return function(r) {
      return null != r ? (ex(this, e, r), t.updateOffset(this, n), this) : eS(this, e)
    }
  }

  function eS(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
  }

  function ex(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && ev(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), ew(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
  }

  function ew(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n, r = (t % 12 + (n = 12)) % n;
    return e += (t - r) / 12, 1 === r ? ev(e) ? 29 : 28 : 31 - r % 7 % 2
  }
  b = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e) return t;
    return -1
  }, Z("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
  }), Z("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
  }), Z("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
  }), B("month", "M"), j.month = 8, ep("M", et), ep("MM", et, Q), ep("MMM", function(e, t) {
    return t.monthsShortRegex(e)
  }), ep("MMMM", function(e, t) {
    return t.monthsRegex(e)
  }), eg(["M", "MM"], function(e, t) {
    t[1] = D(e) - 1
  }), eg(["MMM", "MMMM"], function(e, t, n, r) {
    var i = n._locale.monthsParse(e, r, n._strict);
    null != i ? t[1] = i : f(n).invalidMonth = e
  });
  var eC = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    eT = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function eD(e, t, n) {
    var r, i, a, o = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (r = 0, this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []; r < 12; ++r) a = d([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
    if (n) return "MMM" === t ? -1 !== (i = b.call(this._shortMonthsParse, o)) ? i : null : -1 !== (i = b.call(this._longMonthsParse, o)) ? i : null;
    if ("MMM" === t) return -1 !== (i = b.call(this._shortMonthsParse, o)) ? i : -1 !== (i = b.call(this._longMonthsParse, o)) ? i : null;
    return -1 !== (i = b.call(this._longMonthsParse, o)) ? i : -1 !== (i = b.call(this._shortMonthsParse, o)) ? i : null
  }

  function eM(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t) {
      if (/^\d+$/.test(t)) t = D(t);
      else if (!o(t = e.localeData().monthsParse(t))) return e
    }
    return n = Math.min(e.date(), ew(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
  }

  function eO(e) {
    return null != e ? (eM(this, e), t.updateOffset(this, !0), this) : eS(this, "Month")
  }

  function eA() {
    function e(e, t) {
      return t.length - e.length
    }
    var t, n, r = [],
      i = [],
      a = [];
    for (t = 0; t < 12; t++) n = d([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
    for (r.sort(e), i.sort(e), a.sort(e), t = 0; t < 12; t++) r[t] = eh(r[t]), i[t] = eh(i[t]);
    for (t = 0; t < 24; t++) a[t] = eh(a[t]);
    this._monthsRegex = RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = RegExp("^(" + r.join("|") + ")", "i")
  }

  function ek(e, t, n, r, i, a, o) {
    var s = new Date(e, t, n, r, i, a, o);
    return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
  }

  function eR(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
  }

  function eN(e, t, n) {
    var r = 7 + t - n;
    return -((7 + eR(e, 0, r).getUTCDay() - t) % 7) + r - 1
  }

  function eI(e, t, n, r, i) {
    var a, o, s = 1 + 7 * (t - 1) + (7 + n - r) % 7 + eN(e, r, i);
    return s <= 0 ? o = eb(a = e - 1) + s : s > eb(e) ? (a = e + 1, o = s - eb(e)) : (a = e, o = s), {
      year: a,
      dayOfYear: o
    }
  }

  function eL(e, t, n) {
    var r, i, a = eN(e.year(), t, n),
      o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
    return o < 1 ? r = o + eP(i = e.year() - 1, t, n) : o > eP(e.year(), t, n) ? (r = o - eP(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = o), {
      week: r,
      year: i
    }
  }

  function eP(e, t, n) {
    var r = eN(e, t, n),
      i = eN(e + 1, t, n);
    return (eb(e) - r + i) / 7
  }
  Z("w", ["ww", 2], "wo", "week"), Z("W", ["WW", 2], "Wo", "isoWeek"), B("week", "w"), B("isoWeek", "W"), j.week = 5, j.isoWeek = 5, ep("w", et), ep("ww", et, Q), ep("W", et), ep("WW", et, Q), e_(["w", "ww", "W", "WW"], function(e, t, n, r) {
    t[r.substr(0, 1)] = D(e)
  });
  Z("d", 0, "do", "day"), Z("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
  }), Z("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
  }), Z("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
  }), Z("e", 0, 0, "weekday"), Z("E", 0, 0, "isoWeekday"), B("day", "d"), B("weekday", "e"), B("isoWeekday", "E"), j.day = 11, j.weekday = 11, j.isoWeekday = 11, ep("d", et), ep("e", et), ep("E", et), ep("dd", function(e, t) {
    return t.weekdaysMinRegex(e)
  }), ep("ddd", function(e, t) {
    return t.weekdaysShortRegex(e)
  }), ep("dddd", function(e, t) {
    return t.weekdaysRegex(e)
  }), e_(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var i = n._locale.weekdaysParse(e, r, n._strict);
    null != i ? t.d = i : f(n).invalidWeekday = e
  }), e_(["d", "e", "E"], function(e, t, n, r) {
    t[r] = D(e)
  });
  var eB = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

  function eF(e, t, n) {
    var r, i, a, o = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (r = 0, this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = []; r < 7; ++r) a = d([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
    if (n) return "dddd" === t ? -1 !== (i = b.call(this._weekdaysParse, o)) ? i : null : "ddd" === t ? -1 !== (i = b.call(this._shortWeekdaysParse, o)) ? i : null : -1 !== (i = b.call(this._minWeekdaysParse, o)) ? i : null;
    if ("dddd" === t) return -1 !== (i = b.call(this._weekdaysParse, o)) || -1 !== (i = b.call(this._shortWeekdaysParse, o)) ? i : -1 !== (i = b.call(this._minWeekdaysParse, o)) ? i : null;
    if ("ddd" === t) return -1 !== (i = b.call(this._shortWeekdaysParse, o)) || -1 !== (i = b.call(this._weekdaysParse, o)) ? i : -1 !== (i = b.call(this._minWeekdaysParse, o)) ? i : null;
    else return -1 !== (i = b.call(this._minWeekdaysParse, o)) || -1 !== (i = b.call(this._weekdaysParse, o)) ? i : -1 !== (i = b.call(this._shortWeekdaysParse, o)) ? i : null
  }

  function eU() {
    function e(e, t) {
      return t.length - e.length
    }
    var t, n, r, i, a, o = [],
      s = [],
      u = [],
      c = [];
    for (t = 0; t < 7; t++) n = d([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), o.push(r), s.push(i), u.push(a), c.push(r), c.push(i), c.push(a);
    for (o.sort(e), s.sort(e), u.sort(e), c.sort(e), t = 0; t < 7; t++) s[t] = eh(s[t]), u[t] = eh(u[t]), c[t] = eh(c[t]);
    this._weekdaysRegex = RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = RegExp("^(" + o.join("|") + ")", "i")
  }

  function ej() {
    return this.hours() % 12 || 12
  }

  function eY(e, t) {
    Z(e, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
  }

  function ez(e, t) {
    return t._meridiemParse
  }
  Z("H", ["HH", 2], 0, "hour"), Z("h", ["hh", 2], 0, ej), Z("k", ["kk", 2], 0, function() {
    return this.hours() || 24
  }), Z("hmm", 0, 0, function() {
    return "" + ej.apply(this) + z(this.minutes(), 2)
  }), Z("hmmss", 0, 0, function() {
    return "" + ej.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
  }), Z("Hmm", 0, 0, function() {
    return "" + this.hours() + z(this.minutes(), 2)
  }), Z("Hmmss", 0, 0, function() {
    return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
  }), eY("a", !0), eY("A", !1), B("hour", "h"), j.hour = 13, ep("a", ez), ep("A", ez), ep("H", et), ep("h", et), ep("k", et), ep("HH", et, Q), ep("hh", et, Q), ep("kk", et, Q), ep("hmm", en), ep("hmmss", er), ep("Hmm", en), ep("Hmmss", er), eg(["H", "HH"], 3), eg(["k", "kk"], function(e, t, n) {
    var r = D(e);
    t[3] = 24 === r ? 0 : r
  }), eg(["a", "A"], function(e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e
  }), eg(["h", "hh"], function(e, t, n) {
    t[3] = D(e), f(n).bigHour = !0
  }), eg("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r)), f(n).bigHour = !0
  }), eg("hmmss", function(e, t, n) {
    var r = e.length - 4,
      i = e.length - 2;
    t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r, 2)), t[5] = D(e.substr(i)), f(n).bigHour = !0
  }), eg("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r))
  }), eg("Hmmss", function(e, t, n) {
    var r = e.length - 4,
      i = e.length - 2;
    t[3] = D(e.substr(0, r)), t[4] = D(e.substr(r, 2)), t[5] = D(e.substr(i))
  });
  var eH = eE("Hours", !0),
    eG = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: eT,
      week: {
        dow: 0,
        doy: 6
      },
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      weekdaysShort: eB,
      meridiemParse: /[ap]\.?m?\.?/i
    },
    eV = {},
    e$ = {};

  function eZ(e) {
    return e ? e.toLowerCase().replace("_", "-") : e
  }

  function eK(t) {
    var r = null;
    if (!eV[t] && e && e.exports) try {
      n(207653)("./" + t), eW(r)
    } catch {
      try {
        r = v._abbr, n(207653)("./" + t), n(207653)("./" + t), eW(r)
      } catch (e) {}
    }
    return eV[t]
  }

  function eW(e, t) {
    var n;
    return e && ((n = a(t) ? eQ(e) : eq(e, t)) ? v = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), v._abbr
  }

  function eq(e, t) {
    if (null === t) return delete eV[e], null;
    var n, r = eG;
    if (t.abbr = e, null != eV[e]) R("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = eV[e]._config;
    else if (null != t.parentLocale) {
      if (null != eV[t.parentLocale]) r = eV[t.parentLocale]._config;
      else {
        if (null == (n = eK(t.parentLocale))) return !e$[t.parentLocale] && (e$[t.parentLocale] = []), e$[t.parentLocale].push({
          name: e,
          config: t
        }), null;
        r = n._config
      }
    }
    return eV[e] = new L(I(r, t)), e$[e] && e$[e].forEach(function(e) {
      eq(e.name, e.config)
    }), eW(e), eV[e]
  }

  function eQ(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return v;
    if (!r(e)) {
      if (t = eK(e)) return t;
      e = [e]
    }
    return function(e) {
      for (var t, n, r, i, a = 0; a < e.length;) {
        for (t = (i = eZ(e[a]).split("-")).length, n = (n = eZ(e[a + 1])) ? n.split("-") : null; t > 0;) {
          if (r = eK(i.slice(0, t).join("-"))) return r;
          if (n && n.length >= t && M(i, n, !0) >= t - 1) break;
          t--
        }
        a++
      }
      return v
    }(e)
  }

  function eX(e) {
    var t, n = e._a;
    return n && -2 === f(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > ew(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, f(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), f(e)._overflowWeeks && -1 === t && (t = 7), f(e)._overflowWeekday && -1 === t && (t = 8), f(e).overflow = t), e
  }

  function eJ(e, t, n) {
    return null != e ? e : null != t ? t : n
  }

  function e0(e) {
    var n, r, i, a, o, s, u, c = [];
    if (!e._d) {
      for (n = e, r = new Date(t.now()), o = n._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()], e._w && null == e._a[2] && null == e._a[1] && function(e) {
          var t, n, r, i, a, o, s, u;
          if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1, o = 4, n = eJ(t.GG, e._a[0], eL(ti(), 1, 4).year), r = eJ(t.W, 1), ((i = eJ(t.E, 1)) < 1 || i > 7) && (u = !0);
          else {
            a = e._locale._week.dow, o = e._locale._week.doy;
            var c = eL(ti(), a, o);
            n = eJ(t.gg, e._a[0], c.year), r = eJ(t.w, c.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : i = a
          }
          r < 1 || r > eP(n, a, o) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (s = eI(n, r, i, a, o), e._a[0] = s.year, e._dayOfYear = s.dayOfYear)
        }(e), null != e._dayOfYear && (u = eJ(e._a[0], o[0]), (e._dayOfYear > eb(u) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), a = eR(u, 0, e._dayOfYear), e._a[1] = a.getUTCMonth(), e._a[2] = a.getUTCDate()), i = 0; i < 3 && null == e._a[i]; ++i) e._a[i] = c[i] = o[i];
      for (; i < 7; i++) e._a[i] = c[i] = null == e._a[i] ? 2 === i ? 1 : 0 : e._a[i];
      24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? eR : ek).apply(null, c), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (f(e).weekdayMismatch = !0)
    }
  }
  var e1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    e2 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    e3 = /Z|[+-]\d\d(?::?\d\d)?/,
    e4 = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/]
    ],
    e6 = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ],
    e5 = /^\/?Date\((\-?\d+)/i;

  function e8(e) {
    var t, n, r, i, a, o, s = e._i,
      u = e1.exec(s) || e2.exec(s);
    if (u) {
      for (t = 0, f(e).iso = !0, n = e4.length; t < n; t++)
        if (e4[t][1].exec(u[1])) {
          i = e4[t][0], r = !1 !== e4[t][2];
          break
        } if (null == i) {
        e._isValid = !1;
        return
      }
      if (u[3]) {
        for (t = 0, n = e6.length; t < n; t++)
          if (e6[t][1].exec(u[3])) {
            a = (u[2] || " ") + e6[t][0];
            break
          } if (null == a) {
          e._isValid = !1;
          return
        }
      }
      if (!r && null != a) {
        e._isValid = !1;
        return
      }
      if (u[4]) {
        if (e3.exec(u[4])) o = "Z";
        else {
          e._isValid = !1;
          return
        }
      }
      e._f = i + (a || "") + (o || ""), tt(e)
    } else e._isValid = !1
  }
  var e9 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    e7 = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };

  function te(e) {
    var t = e9.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
    if (t) {
      var n, r, i, a, o, s, u, c, l, d, p = (n = t[4], r = t[3], i = t[2], a = t[5], o = t[6], s = t[7], u = [function(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
      }(n), eT.indexOf(r), parseInt(i, 10), parseInt(a, 10), parseInt(o, 10)], s && u.push(parseInt(s, 10)), u);
      if (c = t[1], l = p, d = e, c && eB.indexOf(c) !== new Date(l[0], l[1], l[2]).getDay() && (f(d).weekdayMismatch = !0, d._isValid = !1, 1)) return;
      e._a = p, e._tzm = function(e, t, n) {
        if (e) return e7[e];
        if (t) return 0;
        var r = parseInt(n, 10),
          i = r % 100;
        return (r - i) / 100 * 60 + i
      }(t[8], t[9], t[10]), e._d = eR.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
    } else e._isValid = !1
  }

  function tt(e) {
    if (e._f === t.ISO_8601) {
      e8(e);
      return
    }
    if (e._f === t.RFC_2822) {
      te(e);
      return
    }
    e._a = [], f(e).empty = !0;
    var n, r, i, a, o, s, u, l, d, p, h = "" + e._i,
      m = h.length,
      g = 0;
    for (s = 0, l = W(e._f, e._locale).match(H) || []; s < l.length; s++) {
      ;
      if (d = l[s], (u = (h.match((n = d, r = e, c(ef, n) ? ef[n](r._strict, r._locale) : new RegExp(function(e) {
          return eh(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
            return t || n || r || i
          }))
        }(n)))) || [])[0]) && ((p = h.substr(0, h.indexOf(u))).length > 0 && f(e).unusedInput.push(p), h = h.slice(h.indexOf(u) + u.length), g += u.length), $[d]) {
        ;
        u ? f(e).empty = !1 : f(e).unusedTokens.push(d), i = d, a = u, o = e, null != a && c(em, i) && em[i](a, o._a, o, i)
      } else e._strict && !u && f(e).unusedTokens.push(d)
    }
    f(e).charsLeftOver = m - g, h.length > 0 && f(e).unusedInput.push(h), e._a[3] <= 12 && !0 === f(e).bigHour && e._a[3] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[3] = function(e, t, n) {
      var r;
      return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), !r && 12 === t && (t = 0), t) : t
    }(e._locale, e._a[3], e._meridiem), e0(e), eX(e)
  }
  t.createFromInputFallback = A("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
  }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};

  function tn(e) {
    var n = e._i,
      c = e._f;
    return (e._locale = e._locale || eQ(e._l), null === n || void 0 === c && "" === n) ? h({
      nullInput: !0
    }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), C(n)) ? new w(eX(n)) : (s(n) ? e._d = n : r(c) ? ! function(e) {
      var t, n, r, i, a;
      if (0 === e._f.length) {
        f(e).invalidFormat = !0, e._d = new Date(NaN);
        return
      }
      for (i = 0; i < e._f.length; i++) {
        if (a = 0, t = S({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], tt(t), !!p(t)) a += f(t).charsLeftOver + 10 * f(t).unusedTokens.length, f(t).score = a, (null == r || a < r) && (r = a, n = t)
      }
      l(e, n || t)
    }(e) : c ? tt(e) : function(e) {
      var n = e._i;
      a(n) ? e._d = new Date(t.now()) : s(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? ! function(e) {
        var n = e5.exec(e._i);
        if (null !== n) {
          e._d = new Date(+n[1]);
          return
        }
        if (e8(e), !1 !== e._isValid) return;
        delete e._isValid;
        if (te(e), !1 === e._isValid) {
          delete e._isValid;
          t.createFromInputFallback(e)
        }
      }(e) : r(n) ? (e._a = u(n.slice(0), function(e) {
        return parseInt(e, 10)
      }), e0(e)) : i(n) ? ! function(e) {
        if (!e._d) {
          var t = U(e._i);
          e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
            return e && parseInt(e, 10)
          }), e0(e)
        }
      }(e) : o(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
    }(e), !p(e) && (e._d = null), e)
  }

  function tr(e, t, n, a, o) {
    var s, u = {};
    return (!0 === n || !1 === n) && (a = n, n = void 0), (i(e) && function(e) {
      var t;
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      for (t in e)
        if (e.hasOwnProperty(t)) return !1;
      return !0
    }(e) || r(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = o, u._l = n, u._i = e, u._f = t, u._strict = a, (s = new w(eX(tn(u))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
  }

  function ti(e, t, n, r) {
    return tr(e, t, n, r, !1)
  }
  var ta = A("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
      var e = ti.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : h()
    }),
    to = A("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
      var e = ti.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : h()
    });

  function ts(e, t) {
    var n, i;
    if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return ti();
    for (i = 1, n = t[0]; i < t.length; ++i)(!t[i].isValid() || t[i][e](n)) && (n = t[i]);
    return n
  }
  var tu = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function tc(e) {
    var t = U(e),
      n = t.year || 0,
      r = t.quarter || 0,
      i = t.month || 0,
      a = t.week || 0,
      o = t.day || 0,
      s = t.hour || 0,
      u = t.minute || 0,
      c = t.second || 0,
      l = t.millisecond || 0;
    this._isValid = function(e) {
      for (var t in e)
        if (!(-1 !== b.call(tu, t) && (null == e[t] || !isNaN(e[t])))) return !1;
      for (var n = !1, r = 0; r < tu.length; ++r)
        if (e[tu[r]]) {
          if (n) return !1;
          parseFloat(e[tu[r]]) !== D(e[tu[r]]) && (n = !0)
        } return !0
    }(t), this._milliseconds = +l + 1e3 * c + 6e4 * u + 36e5 * s, this._days = +o + 7 * a, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = eQ(), this._bubble()
  }

  function tl(e) {
    return e instanceof tc
  }

  function td(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
  }

  function tf(e, t) {
    Z(e, 0, 0, function() {
      var e = this.utcOffset(),
        n = "+";
      return e < 0 && (e = -e, n = "-"), n + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
    })
  }
  tf("Z", ":"), tf("ZZ", ""), ep("Z", el), ep("ZZ", el), eg(["Z", "ZZ"], function(e, t, n) {
    n._useUTC = !0, n._tzm = th(el, e)
  });
  var tp = /([\+\-]|\d\d)/gi;

  function th(e, t) {
    var n = (t || "").match(e);
    if (null === n) return null;
    var r = ((n[n.length - 1] || []) + "").match(tp) || ["-", 0, 0],
      i = +(60 * r[1]) + D(r[2]);
    return 0 === i ? 0 : "+" === r[0] ? i : -i
  }

  function tm(e, n) {
    var r, i;
    return n._isUTC ? (r = n.clone(), i = (C(e) || s(e) ? e.valueOf() : ti(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), t.updateOffset(r, !1), r) : ti(e).local()
  }

  function tg(e) {
    return -(15 * Math.round(e._d.getTimezoneOffset() / 15))
  }
  t.updateOffset = function() {};

  function t_() {
    return !!this.isValid() && this._isUTC && 0 === this._offset
  }
  var tb = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    tv = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function ty(e, t) {
    var n, r, i, a = e,
      s = null;
    return tl(e) ? a = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : o(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (s = tb.exec(e)) ? (n = "-" === s[1] ? -1 : 1, a = {
      y: 0,
      d: D(s[2]) * n,
      h: D(s[3]) * n,
      m: D(s[4]) * n,
      s: D(s[5]) * n,
      ms: D(td(1e3 * s[6])) * n
    }) : (s = tv.exec(e)) ? (n = "-" === s[1] ? -1 : (s[1], 1), a = {
      y: tE(s[2], n),
      M: tE(s[3], n),
      w: tE(s[4], n),
      d: tE(s[5], n),
      h: tE(s[6], n),
      m: tE(s[7], n),
      s: tE(s[8], n)
    }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (i = function(e, t) {
      var n;
      return e.isValid() && t.isValid() ? (t = tm(t, e), e.isBefore(t) ? n = tS(e, t) : ((n = tS(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
        milliseconds: 0,
        months: 0
      }
    }(ti(a.from), ti(a.to)), (a = {}).ms = i.milliseconds, a.M = i.months), r = new tc(a), tl(e) && c(e, "_locale") && (r._locale = e._locale), r
  }

  function tE(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t
  }

  function tS(e, t) {
    var n = {
      milliseconds: 0,
      months: 0
    };
    return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
  }
  ty.fn = tc.prototype, ty.invalid = function() {
    return ty(NaN)
  };

  function tx(e, t) {
    return function(n, r) {
      var i;
      return null !== r && !isNaN(+r) && (R(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), tw(this, ty(n = "string" == typeof n ? +n : n, r), e), this
    }
  }

  function tw(e, n, r, i) {
    var a = n._milliseconds,
      o = td(n._days),
      s = td(n._months);
    if (!!e.isValid()) i = null == i || i, s && eM(e, eS(e, "Month") + s * r), o && ex(e, "Date", eS(e, "Date") + o * r), a && e._d.setTime(e._d.valueOf() + a * r), i && t.updateOffset(e, o || s)
  }
  var tC = tx(1, "add"),
    tT = tx(-1, "subtract");

  function tD(e, t) {
    var n, r, i = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      a = e.clone().add(i, "months");
    return r = t - a < 0 ? (t - a) / (a - (n = e.clone().add(i - 1, "months"))) : (t - a) / ((n = e.clone().add(i + 1, "months")) - a), -(i + r) || 0
  }
  t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

  function tM(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = eQ(e)) && (this._locale = t), this)
  }
  var tO = A("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return void 0 === e ? this.localeData() : this.locale(e)
  });

  function tA() {
    return this._locale
  }

  function tk(e, t) {
    Z(0, [e, e.length], 0, t)
  }
  Z(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
  }), Z(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
  }), tk("gggg", "weekYear"), tk("ggggg", "weekYear"), tk("GGGG", "isoWeekYear"), tk("GGGGG", "isoWeekYear"), B("weekYear", "gg"), B("isoWeekYear", "GG"), j.weekYear = 1, j.isoWeekYear = 1, ep("G", eu), ep("g", eu), ep("GG", et, Q), ep("gg", et, Q), ep("GGGG", ea, J), ep("gggg", ea, J), ep("GGGGG", eo, ee), ep("ggggg", eo, ee), e_(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
    t[r.substr(0, 2)] = D(e)
  }), e_(["gg", "GG"], function(e, n, r, i) {
    n[i] = t.parseTwoDigitYear(e)
  });

  function tR(e, t, n, r, i) {
    var a;
    return null == e ? eL(this, r, i).year : (t > (a = eP(e, r, i)) && (t = a), tN.call(this, e, t, n, r, i))
  }

  function tN(e, t, n, r, i) {
    var a = eI(e, t, n, r, i),
      o = eR(a.year, 0, a.dayOfYear);
    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
  }
  Z("Q", 0, "Qo", "quarter"), B("quarter", "Q"), j.quarter = 7, ep("Q", q), eg("Q", function(e, t) {
    t[1] = (D(e) - 1) * 3
  });
  Z("D", ["DD", 2], "Do", "date"), B("date", "D"), j.date = 9, ep("D", et), ep("DD", et, Q), ep("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
  }), eg(["D", "DD"], 2), eg("Do", function(e, t) {
    t[2] = D(e.match(et)[0])
  });
  var tI = eE("Date", !0);
  Z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), B("dayOfYear", "DDD"), j.dayOfYear = 4, ep("DDD", ei), ep("DDDD", X), eg(["DDD", "DDDD"], function(e, t, n) {
    n._dayOfYear = D(e)
  });
  Z("m", ["mm", 2], 0, "minute"), B("minute", "m"), j.minute = 14, ep("m", et), ep("mm", et, Q), eg(["m", "mm"], 4);
  var tL = eE("Minutes", !1);
  Z("s", ["ss", 2], 0, "second"), B("second", "s"), j.second = 15, ep("s", et), ep("ss", et, Q), eg(["s", "ss"], 5);
  var tP = eE("Seconds", !1);
  for (Z("S", 0, 0, function() {
      return ~~(this.millisecond() / 100)
    }), Z(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10)
    }), Z(0, ["SSS", 3], 0, "millisecond"), Z(0, ["SSSS", 4], 0, function() {
      return 10 * this.millisecond()
    }), Z(0, ["SSSSS", 5], 0, function() {
      return 100 * this.millisecond()
    }), Z(0, ["SSSSSS", 6], 0, function() {
      return 1e3 * this.millisecond()
    }), Z(0, ["SSSSSSS", 7], 0, function() {
      return 1e4 * this.millisecond()
    }), Z(0, ["SSSSSSSS", 8], 0, function() {
      return 1e5 * this.millisecond()
    }), Z(0, ["SSSSSSSSS", 9], 0, function() {
      return 1e6 * this.millisecond()
    }), B("millisecond", "ms"), j.millisecond = 16, ep("S", ei, q), ep("SS", ei, Q), ep("SSS", ei, X), y = "SSSS"; y.length <= 9; y += "S") ep(y, es);

  function tB(e, t) {
    t[6] = D(("0." + e) * 1e3)
  }
  for (y = "S"; y.length <= 9; y += "S") eg(y, tB);
  var tF = eE("Milliseconds", !1);
  Z("z", 0, 0, "zoneAbbr"), Z("zz", 0, 0, "zoneName");
  var tU = w.prototype;
  tU.add = tC, tU.calendar = function(e, n) {
    var r = e || ti(),
      i = tm(r, this).startOf("day"),
      a = t.calendarFormat(this, i) || "sameElse",
      o = n && (N(n[a]) ? n[a].call(this, r) : n[a]);
    return this.format(o || this.localeData().calendar(a, this, ti(r)))
  }, tU.clone = function() {
    return new w(this)
  }, tU.diff = function(e, t, n) {
    var r, i, a;
    if (!this.isValid() || !(r = tm(e, this)).isValid()) return NaN;
    switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = F(t)) {
      case "year":
        a = tD(this, r) / 12;
        break;
      case "month":
        a = tD(this, r);
        break;
      case "quarter":
        a = tD(this, r) / 3;
        break;
      case "second":
        a = (this - r) / 1e3;
        break;
      case "minute":
        a = (this - r) / 6e4;
        break;
      case "hour":
        a = (this - r) / 36e5;
        break;
      case "day":
        a = (this - r - i) / 864e5;
        break;
      case "week":
        a = (this - r - i) / 6048e5;
        break;
      default:
        a = this - r
    }
    return n ? a : T(a)
  }, tU.endOf = function(e) {
    return void 0 === (e = F(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
  }, tU.format = function(e) {
    !e && (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
    var n = K(this, e);
    return this.localeData().postformat(n)
  }, tU.from = function(e, t) {
    return this.isValid() && (C(e) && e.isValid() || ti(e).isValid()) ? ty({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, tU.fromNow = function(e) {
    return this.from(ti(), e)
  }, tU.to = function(e, t) {
    return this.isValid() && (C(e) && e.isValid() || ti(e).isValid()) ? ty({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, tU.toNow = function(e) {
    return this.to(ti(), e)
  }, tU.get = function(e) {
    return N(this[e = F(e)]) ? this[e]() : this
  }, tU.invalidAt = function() {
    return f(this).overflow
  }, tU.isAfter = function(e, t) {
    var n = C(e) ? e : ti(e);
    return !!(this.isValid() && n.isValid()) && ("millisecond" === (t = F(a(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
  }, tU.isBefore = function(e, t) {
    var n = C(e) ? e : ti(e);
    return !!(this.isValid() && n.isValid()) && ("millisecond" === (t = F(a(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
  }, tU.isBetween = function(e, t, n, r) {
    return ("(" === (r = r || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
  }, tU.isSame = function(e, t) {
    var n, r = C(e) ? e : ti(e);
    return !!(this.isValid() && r.isValid()) && ("millisecond" === (t = F(t || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
  }, tU.isSameOrAfter = function(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }, tU.isSameOrBefore = function(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }, tU.isValid = function() {
    return p(this)
  }, tU.lang = tO, tU.locale = tM, tU.localeData = tA, tU.max = to, tU.min = ta, tU.parsingFlags = function() {
    return l({}, f(this))
  }, tU.set = function(e, t) {
    if ("object" == typeof e) {
      for (var n = function(e) {
          var t = [];
          for (var n in e) t.push({
            unit: n,
            priority: j[n]
          });
          return t.sort(function(e, t) {
            return e.priority - t.priority
          }), t
        }(e = U(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit])
    } else if (N(this[e = F(e)])) return this[e](t);
    return this
  }, tU.startOf = function(e) {
    switch (e = F(e)) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0)
    }
    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
  }, tU.subtract = tT, tU.toArray = function() {
    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
  }, tU.toObject = function() {
    return {
      years: this.year(),
      months: this.month(),
      date: this.date(),
      hours: this.hours(),
      minutes: this.minutes(),
      seconds: this.seconds(),
      milliseconds: this.milliseconds()
    }
  }, tU.toDate = function() {
    return new Date(this.valueOf())
  }, tU.toISOString = function(e) {
    if (!this.isValid()) return null;
    var t = !0 !== e,
      n = t ? this.clone().utc() : this;
    if (0 > n.year() || n.year() > 9999) return K(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
    if (N(Date.prototype.toISOString)) return t ? this.toDate().toISOString() : new Date(this.valueOf() + 6e4 * this.utcOffset()).toISOString().replace("Z", K(n, "Z"));
    return K(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
  }, tU.inspect = function() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "";
    !this.isLocal() && (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
    var n = "[" + e + '("]',
      r = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY",
      i = t + '[")]';
    return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
  }, tU.toJSON = function() {
    return this.isValid() ? this.toISOString() : null
  }, tU.toString = function() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }, tU.unix = function() {
    return Math.floor(this.valueOf() / 1e3)
  }, tU.valueOf = function() {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
  }, tU.creationData = function() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }, tU.year = ey, tU.isLeapYear = function() {
    return ev(this.year())
  }, tU.weekYear = function(e) {
    return tR.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }, tU.isoWeekYear = function(e) {
    return tR.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }, tU.quarter = tU.quarters = function(e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
  }, tU.month = eO, tU.daysInMonth = function() {
    return ew(this.year(), this.month())
  }, tU.week = tU.weeks = function(e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add((e - t) * 7, "d")
  }, tU.isoWeek = tU.isoWeeks = function(e) {
    var t = eL(this, 1, 4).week;
    return null == e ? t : this.add((e - t) * 7, "d")
  }, tU.weeksInYear = function() {
    var e = this.localeData()._week;
    return eP(this.year(), e.dow, e.doy)
  }, tU.isoWeeksInYear = function() {
    return eP(this.year(), 1, 4)
  }, tU.date = tI, tU.day = tU.days = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t, n, r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (null == e) return r;
    return t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - r, "d")
  }, tU.weekday = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d")
  }, tU.isoWeekday = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this.day() || 7;
    var t, n, r = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
    return this.day(this.day() % 7 ? r : r - 7)
  }, tU.dayOfYear = function(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d")
  }, tU.hour = tU.hours = eH, tU.minute = tU.minutes = tL, tU.second = tU.seconds = tP, tU.millisecond = tU.milliseconds = tF, tU.utcOffset = function(e, n, r) {
    var i, a = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this._isUTC ? a : tg(this);
    if ("string" == typeof e) {
      if (null === (e = th(el, e))) return this
    } else 16 > Math.abs(e) && !r && (e *= 60);
    return !this._isUTC && n && (i = tg(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), a !== e && (!n || this._changeInProgress ? tw(this, ty(e - a, "m"), 1, !1) : !this._changeInProgress && (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
  }, tU.utc = function(e) {
    return this.utcOffset(0, e)
  }, tU.local = function(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(tg(this), "m")), this
  }, tU.parseZone = function() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" == typeof this._i) {
      var e = th(ec, this._i);
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
  }, tU.hasAlignedHourOffset = function(e) {
    return !!this.isValid() && (e = e ? ti(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
  }, tU.isDST = function() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }, tU.isLocal = function() {
    return !!this.isValid() && !this._isUTC
  }, tU.isUtcOffset = function() {
    return !!this.isValid() && this._isUTC
  }, tU.isUtc = t_, tU.isUTC = t_, tU.zoneAbbr = function() {
    return this._isUTC ? "UTC" : ""
  }, tU.zoneName = function() {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }, tU.dates = A("dates accessor is deprecated. Use date instead.", tI), tU.months = A("months accessor is deprecated. Use month instead", eO), tU.years = A("years accessor is deprecated. Use year instead", ey), tU.zone = A("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
  }), tU.isDSTShifted = A("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
    if (!a(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};
    if (S(e, this), (e = tn(e))._a) {
      var t = e._isUTC ? d(e._a) : ti(e._a);
      this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
  });

  function tj(e) {
    return e
  }
  var tY = L.prototype;

  function tz(e, t, n, r) {
    var i = eQ(),
      a = d().set(r, t);
    return i[n](a, e)
  }

  function tH(e, t, n) {
    if (o(e) && (t = e, e = void 0), e = e || "", null != t) return tz(e, t, n, "month");
    var r, i = [];
    for (r = 0; r < 12; r++) i[r] = tz(e, r, n, "month");
    return i
  }

  function tG(e, t, n, r) {
    "boolean" == typeof e || (n = t = e, e = !1), o(t) && (n = t, t = void 0), t = t || "";
    var i, a = eQ(),
      s = e ? a._week.dow : 0;
    if (null != n) return tz(t, (n + s) % 7, r, "day");
    var u = [];
    for (i = 0; i < 7; i++) u[i] = tz(t, (i + s) % 7, r, "day");
    return u
  }
  tY.calendar = function(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return N(r) ? r.call(t, n) : r
  }, tY.longDateFormat = function(e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
      return e.slice(1)
    }), this._longDateFormat[e])
  }, tY.invalidDate = function() {
    return this._invalidDate
  }, tY.ordinal = function(e) {
    return this._ordinal.replace("%d", e)
  }, tY.preparse = tj, tY.postformat = tj, tY.relativeTime = function(e, t, n, r) {
    var i = this._relativeTime[n];
    return N(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
  }, tY.pastFuture = function(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return N(n) ? n(t) : n.replace(/%s/i, t)
  }, tY.set = function(e) {
    var t, n;
    for (n in e) N(t = e[n]) ? this[n] = t : this["_" + n] = t;
    this._config = e, this._dayOfMonthOrdinalParseLenient = RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
  }, tY.months = function(e, t) {
    return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || eC).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
  }, tY.monthsShort = function(e, t) {
    return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[eC.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }, tY.monthsParse = function(e, t, n) {
    var r, i, a;
    if (this._monthsParseExact) return eD.call(this, e, t, n);
    for (!this._monthsParse && (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (i = d([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
      if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
      else if (!n && this._monthsParse[r].test(e)) return r
    }
  }, tY.monthsRegex = function(e) {
    return this._monthsParseExact ? (!c(this, "_monthsRegex") && eA.call(this), e) ? this._monthsStrictRegex : this._monthsRegex : (!c(this, "_monthsRegex") && (this._monthsRegex = ed), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
  }, tY.monthsShortRegex = function(e) {
    return this._monthsParseExact ? (!c(this, "_monthsRegex") && eA.call(this), e) ? this._monthsShortStrictRegex : this._monthsShortRegex : (!c(this, "_monthsShortRegex") && (this._monthsShortRegex = ed), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }, tY.week = function(e) {
    return eL(e, this._week.dow, this._week.doy).week
  }, tY.firstDayOfYear = function() {
    return this._week.doy
  }, tY.firstDayOfWeek = function() {
    return this._week.dow
  }, tY.weekdays = function(e, t) {
    return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
  }, tY.weekdaysMin = function(e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
  }, tY.weekdaysShort = function(e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
  }, tY.weekdaysParse = function(e, t, n) {
    var r, i, a;
    if (this._weekdaysParseExact) return eF.call(this, e, t, n);
    for (!this._weekdaysParse && (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (i = d([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), !this._weekdaysParse[r] && (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
      if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
      else if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
      else if (!n && this._weekdaysParse[r].test(e)) return r
    }
  }, tY.weekdaysRegex = function(e) {
    return this._weekdaysParseExact ? (!c(this, "_weekdaysRegex") && eU.call(this), e) ? this._weekdaysStrictRegex : this._weekdaysRegex : (!c(this, "_weekdaysRegex") && (this._weekdaysRegex = ed), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }, tY.weekdaysShortRegex = function(e) {
    return this._weekdaysParseExact ? (!c(this, "_weekdaysRegex") && eU.call(this), e) ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex : (!c(this, "_weekdaysShortRegex") && (this._weekdaysShortRegex = ed), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
  }, tY.weekdaysMinRegex = function(e) {
    return this._weekdaysParseExact ? (!c(this, "_weekdaysRegex") && eU.call(this), e) ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex : (!c(this, "_weekdaysMinRegex") && (this._weekdaysMinRegex = ed), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }, tY.isPM = function(e) {
    return "p" === (e + "").toLowerCase().charAt(0)
  }, tY.meridiem = function(e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
  };
  eW("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
      var t = e % 10,
        n = 1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
      return e + n
    }
  }), t.lang = A("moment.lang is deprecated. Use moment.locale instead.", eW), t.langData = A("moment.langData is deprecated. Use moment.localeData instead.", eQ);
  var tV = Math.abs;

  function t$(e, t, n, r) {
    var i = ty(t, n);
    return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
  }

  function tZ(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }

  function tK(e) {
    return 4800 * e / 146097
  }

  function tW(e) {
    return 146097 * e / 4800
  }

  function tq(e) {
    return function() {
      return this.as(e)
    }
  }
  var tQ = tq("ms"),
    tX = tq("s"),
    tJ = tq("m"),
    t0 = tq("h"),
    t1 = tq("d"),
    t2 = tq("w"),
    t3 = tq("M"),
    t4 = tq("y");

  function t6(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  var t5 = t6("milliseconds"),
    t8 = t6("seconds"),
    t9 = t6("minutes"),
    t7 = t6("hours"),
    ne = t6("days"),
    nt = t6("months"),
    nn = t6("years"),
    nr = Math.round,
    ni = {
      ss: 44,
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    };

  function na(e, t, n, r, i) {
    return i.relativeTime(t || 1, !!n, e, r)
  }
  var no = Math.abs;

  function ns(e) {
    return (e > 0) - (e < 0) || +e
  }

  function nu() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e, t, n, r = no(this._milliseconds) / 1e3,
      i = no(this._days),
      a = no(this._months);
    e = T(r / 60), t = T(e / 60), r %= 60, e %= 60, n = T(a / 12), a %= 12;
    var o = a,
      s = e,
      u = r ? r.toFixed(3).replace(/\.?0+$/, "") : "",
      c = this.asSeconds();
    if (!c) return "P0D";
    var l = c < 0 ? "-" : "",
      d = ns(this._months) !== ns(c) ? "-" : "",
      f = ns(this._days) !== ns(c) ? "-" : "",
      p = ns(this._milliseconds) !== ns(c) ? "-" : "";
    return l + "P" + (n ? d + n + "Y" : "") + (o ? d + o + "M" : "") + (i ? f + i + "D" : "") + (t || s || u ? "T" : "") + (t ? p + t + "H" : "") + (s ? p + s + "M" : "") + (u ? p + u + "S" : "")
  }
  var nc = tc.prototype;
  return nc.isValid = function() {
    return this._isValid
  }, nc.abs = function() {
    var e = this._data;
    return this._milliseconds = tV(this._milliseconds), this._days = tV(this._days), this._months = tV(this._months), e.milliseconds = tV(e.milliseconds), e.seconds = tV(e.seconds), e.minutes = tV(e.minutes), e.hours = tV(e.hours), e.months = tV(e.months), e.years = tV(e.years), this
  }, nc.add = function(e, t) {
    return t$(this, e, t, 1)
  }, nc.subtract = function(e, t) {
    return t$(this, e, t, -1)
  }, nc.as = function(e) {
    if (!this.isValid()) return NaN;
    var t, n, r = this._milliseconds;
    if ("month" === (e = F(e)) || "year" === e) return t = this._days + r / 864e5, n = this._months + tK(t), "month" === e ? n : n / 12;
    switch (t = this._days + Math.round(tW(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return 24 * t + r / 36e5;
      case "minute":
        return 1440 * t + r / 6e4;
      case "second":
        return 86400 * t + r / 1e3;
      case "millisecond":
        return Math.floor(864e5 * t) + r;
      default:
        throw Error("Unknown unit " + e)
    }
  }, nc.asMilliseconds = tQ, nc.asSeconds = tX, nc.asMinutes = tJ, nc.asHours = t0, nc.asDays = t1, nc.asWeeks = t2, nc.asMonths = t3, nc.asYears = t4, nc.valueOf = function() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
  }, nc._bubble = function() {
    var e, t, n, r, i, a = this._milliseconds,
      o = this._days,
      s = this._months,
      u = this._data;
    return !(a >= 0 && o >= 0 && s >= 0 || a <= 0 && o <= 0 && s <= 0) && (a += 864e5 * tZ(tW(s) + o), o = 0, s = 0), u.milliseconds = a % 1e3, e = T(a / 1e3), u.seconds = e % 60, t = T(e / 60), u.minutes = t % 60, n = T(t / 60), u.hours = n % 24, o += T(n / 24), s += i = T(tK(o)), o -= tZ(tW(i)), r = T(s / 12), s %= 12, u.days = o, u.months = s, u.years = r, this
  }, nc.clone = function() {
    return ty(this)
  }, nc.get = function(e) {
    return e = F(e), this.isValid() ? this[e + "s"]() : NaN
  }, nc.milliseconds = t5, nc.seconds = t8, nc.minutes = t9, nc.hours = t7, nc.days = ne, nc.weeks = function() {
    return T(this.days() / 7)
  }, nc.months = nt, nc.years = nn, nc.humanize = function(e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t, n, r, i, a, o, s, u, c, l, d, f = this.localeData();
    var p = (t = this, n = !e, r = f, i = ty(t).abs(), a = nr(i.as("s")), o = nr(i.as("m")), s = nr(i.as("h")), u = nr(i.as("d")), c = nr(i.as("M")), l = nr(i.as("y")), (d = a <= ni.ss && ["s", a] || a < ni.s && ["ss", a] || o <= 1 && ["m"] || o < ni.m && ["mm", o] || s <= 1 && ["h"] || s < ni.h && ["hh", s] || u <= 1 && ["d"] || u < ni.d && ["dd", u] || c <= 1 && ["M"] || c < ni.M && ["MM", c] || l <= 1 && ["y"] || ["yy", l])[2] = n, d[3] = +t > 0, d[4] = r, na.apply(null, d));
    return e && (p = f.pastFuture(+this, p)), f.postformat(p)
  }, nc.toISOString = nu, nc.toString = nu, nc.toJSON = nu, nc.locale = tM, nc.localeData = tA, nc.toIsoString = A("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", nu), nc.lang = tO, Z("X", 0, 0, "unix"), Z("x", 0, 0, "valueOf"), ep("x", eu), ep("X", /[+-]?\d+(\.\d{1,3})?/), eg("X", function(e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10))
  }), eg("x", function(e, t, n) {
    n._d = new Date(D(e))
  }), t.version = "2.22.2", m = ti, t.fn = tU, t.min = function() {
    var e = [].slice.call(arguments, 0);
    return ts("isBefore", e)
  }, t.max = function() {
    var e = [].slice.call(arguments, 0);
    return ts("isAfter", e)
  }, t.now = function() {
    return Date.now ? Date.now() : +new Date
  }, t.utc = d, t.unix = function(e) {
    return ti(1e3 * e)
  }, t.months = function(e, t) {
    return tH(e, t, "months")
  }, t.isDate = s, t.locale = eW, t.invalid = h, t.duration = ty, t.isMoment = C, t.weekdays = function(e, t, n) {
    return tG(e, t, n, "weekdays")
  }, t.parseZone = function() {
    return ti.apply(null, arguments).parseZone()
  }, t.localeData = eQ, t.isDuration = tl, t.monthsShort = function(e, t) {
    return tH(e, t, "monthsShort")
  }, t.weekdaysMin = function(e, t, n) {
    return tG(e, t, n, "weekdaysMin")
  }, t.defineLocale = eq, t.updateLocale = function(e, t) {
    if (null != t) {
      var n, r, i = eG;
      null != (r = eK(e)) && (i = r._config), (n = new L(t = I(i, t))).parentLocale = eV[e], eV[e] = n, eW(e)
    } else null != eV[e] && (null != eV[e].parentLocale ? eV[e] = eV[e].parentLocale : null != eV[e] && delete eV[e]);
    return eV[e]
  }, t.locales = function() {
    return _(eV)
  }, t.weekdaysShort = function(e, t, n) {
    return tG(e, t, n, "weekdaysShort")
  }, t.normalizeUnits = F, t.relativeTimeRounding = function(e) {
    return void 0 === e ? nr : "function" == typeof e && (nr = e, !0)
  }, t.relativeTimeThreshold = function(e, t) {
    return void 0 !== ni[e] && (void 0 === t ? ni[e] : (ni[e] = t, "s" === e && (ni.ss = t - 1), !0))
  }, t.calendarFormat = function(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
  }, t.prototype = tU, t.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "YYYY-[W]WW",
    MONTH: "YYYY-MM"
  }, t
}, "object" == typeof t ? e.exports = i() : "function" == typeof define && define.amd ? define(i) : r.moment = i()