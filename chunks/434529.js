"use strict";

function i(e) {
  return Math.max(Math.min(e, 1), 0)
}

function r(e, t) {
  let {
    top: n,
    bottom: r,
    left: s,
    right: o
  } = e;
  return {
    top: null != n ? Math.floor(i(n) * t.height) : null,
    left: null != s ? Math.floor(i(s) * t.width) : null,
    bottom: null != r ? Math.floor(i(r) * t.height) : null,
    right: null != o ? Math.floor(i(o) * t.width) : null
  }
}

function s(e, t) {
  let {
    width: n,
    height: r
  } = e;
  return {
    width: "auto" === n ? n : Math.floor(i(n) * t.width),
    height: "auto" === r ? r : Math.floor(i(r) * t.height)
  }
}

function o(e, t) {
  let {
    top: n,
    bottom: r,
    left: s,
    right: o
  } = e;
  return {
    top: null != n ? i(n / t.height) : null,
    left: null != s ? i(s / t.width) : null,
    bottom: null != r ? i(r / t.height) : null,
    right: null != o ? i(o / t.width) : null
  }
}

function a(e, t) {
  let {
    width: n,
    height: i
  } = e;
  return {
    width: "auto" === n ? n : n / t.width,
    height: "auto" === i ? i : i / t.height
  }
}

function l(e, t, n, i, r) {
  let {
    top: s,
    bottom: o,
    left: a,
    right: l
  } = e;
  if (null == s && null == o ? (s = 0, o = n - r) : null == s && null != o ? s = n - (o + r) : null != s && (o = n - (s + r)), null == a && null == l ? (a = 0, l = t - i) : null == a && null != l ? a = t - (l + i) : null == l && null != a && (l = t - (a + i)), null == s || null == o || null == a || null == l) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: s,
    left: a,
    bottom: o,
    right: l
  }
}

function u(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= r ? r = null : n = null, {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function _(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), r < 0 && (n += r, r = 0), n < 0 && (r += n, n = 0), {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function d(e, t, n) {
  e = r(e, n);
  let {
    width: i,
    height: o
  } = s(t, n);
  return i = "string" == typeof i ? 0 : i, o = "string" == typeof o ? 0 : o, l(e, n.width, n.height, i, o)
}

function c(e, t, n) {
  let {
    top: i,
    left: r
  } = e, {
    x: s,
    y: d
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    x: 0,
    y: 0
  }, {
    width: c,
    height: E
  } = t;
  return [o(u(_(l({
    top: i + d,
    left: r + s,
    bottom: null,
    right: null
  }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof E ? E : 0))), n), a(t, n)]
}

function E(e, t, n) {
  let {
    top: i,
    right: r
  } = e, {
    x: s,
    y: d
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    x: 0,
    y: 0
  }, {
    width: c,
    height: E
  } = t;
  return [o(u(_(l({
    top: i + d,
    left: null,
    bottom: null,
    right: r - s
  }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof E ? E : 0))), n), a(t, n)]
}
n.d(t, {
  KR: function() {
    return r
  },
  Ox: function() {
    return a
  },
  PY: function() {
    return l
  },
  R: function() {
    return u
  },
  jL: function() {
    return o
  },
  o4: function() {
    return c
  },
  ou: function() {
    return _
  },
  uq: function() {
    return E
  },
  vS: function() {
    return d
  },
  w_: function() {
    return s
  }
}), n(411104)