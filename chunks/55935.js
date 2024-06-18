"use strict";
n.d(t, {
  Hg: function() {
    return f
  },
  KC: function() {
    return d
  },
  QX: function() {
    return m
  },
  TD: function() {
    return A
  },
  Xf: function() {
    return T
  },
  Y4: function() {
    return I
  },
  _w: function() {
    return c
  },
  vc: function() {
    return E
  }
});
var i = n(913527),
  r = n.n(i),
  s = n(232551),
  o = n(706454);
let a = 864e5,
  l = Object.create(null);

function u(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e.getTime();
  return !t && (n -= 6e4 * e.getTimezoneOffset()), Math.floor(n / a) * a
}

function _(e, t) {
  return Math.floor((u(e, !1) - u(t, !1)) / a)
}

function d(e, t) {
  return Math.abs(+e - +t) <= a && e.getDate() === t.getDate()
}

function c(e, t, n) {
  return Math.abs(e.valueOf() - t.valueOf()) < n
}

function E(e, t) {
  let n = h(e).locale(),
    i = "".concat(n, ":").concat(t),
    r = l[i];
  return null == r && (r = l[i] = (0, s.Z)(t)), r(S(e))
}

function I(e) {
  let t;
  let n = r().localeData(),
    i = r()(),
    s = _(S(e), i.toDate());
  return s < -1 ? E(e, "L LT") : (t = s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse", E(e, n.calendar(t, h(e), i)))
}

function T(e) {
  let t = r().localeData(),
    n = r()(),
    i = _(S(e), n.toDate());
  if (0 === i) return E(e, t.longDateFormat("LT"));
  if (-1 === i) return E(e, t.calendar("lastDay", h(e), n));
  if (i > -7) return E(e, "dddd");
  return E(e, t.longDateFormat("l"))
}

function h(e) {
  return r().isMoment(e) ? e : r()(e)
}

function S(e) {
  return r().isMoment(e) ? e.toDate() : e
}

function f(e) {
  let t;
  let n = r().localeData(),
    i = new Date,
    s = _(e, i);
  return "sameElse" == (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse") ? E(e, "LLL") : E(e, n.calendar(t, r()(e), r()(i)))
}
o.default.addChangeListener(() => {
  l = Object.create(null)
});
let N = [{
  key: "days",
  millisecondsInUnit: 864e5
}, {
  key: "hours",
  millisecondsInUnit: 36e5
}, {
  key: "minutes",
  millisecondsInUnit: 6e4
}, {
  key: "seconds",
  millisecondsInUnit: 1e3
}];

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: n ? 1 : 0
    };
  if (e > t || n && Number(e) + 1200 > Number(t)) return i;
  let r = Number(t) - Number(e);
  return N.forEach(e => {
    let {
      key: t,
      millisecondsInUnit: n
    } = e;
    i[t] = Math.floor(r / n), r -= i[t] * n
  }), i
}

function m(e, t) {
  return e.days > 0 ? t.days.format({
    days: e.days,
    hours: e.hours
  }) : e.hours > 0 ? t.hours.format({
    hours: e.hours,
    minutes: e.minutes
  }) : t.minutes.format({
    minutes: Math.max(1, e.minutes)
  })
}