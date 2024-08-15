
function r(e) {
  return Math.max(Math.min(e, 1), 0);
}

function i(e, t) {
  let {
top: n,
bottom: i,
left: a,
right: s
  } = e;
  return {
top: null != n ? Math.floor(r(n) * t.height) : null,
left: null != a ? Math.floor(r(a) * t.width) : null,
bottom: null != i ? Math.floor(r(i) * t.height) : null,
right: null != s ? Math.floor(r(s) * t.width) : null
  };
}

function a(e, t) {
  let {
width: n,
height: i
  } = e;
  return {
width: 'auto' === n ? n : Math.floor(r(n) * t.width),
height: 'auto' === i ? i : Math.floor(r(i) * t.height)
  };
}

function s(e, t) {
  let {
top: n,
bottom: i,
left: a,
right: s
  } = e;
  return {
top: null != n ? r(n / t.height) : null,
left: null != a ? r(a / t.width) : null,
bottom: null != i ? r(i / t.height) : null,
right: null != s ? r(s / t.width) : null
  };
}

function o(e, t) {
  let {
width: n,
height: r
  } = e;
  return {
width: 'auto' === n ? n : n / t.width,
height: 'auto' === r ? r : r / t.height
  };
}

function l(e, t, n, r, i) {
  let {
top: a,
bottom: s,
left: o,
right: l
  } = e;
  if (null == a && null == s ? (a = 0, s = n - i) : null == a && null != s ? a = n - (s + i) : null != a && (s = n - (a + i)), null == o && null == l ? (o = 0, l = t - r) : null == o && null != l ? o = t - (l + r) : null == l && null != o && (l = t - (o + r)), null == a || null == s || null == o || null == l)
throw Error('Logically this can never happen based on our if/else statements');
  return {
top: a,
left: o,
bottom: s,
right: l
  };
}

function u(e) {
  let {
top: t,
left: n,
bottom: r,
right: i
  } = e;
  return 0 === t || t <= r ? r = null : t = null, 0 === n || n <= i ? i = null : n = null, {
top: t,
left: n,
bottom: r,
right: i
  };
}

function c(e) {
  let {
top: t,
left: n,
bottom: r,
right: i
  } = e;
  return r < 0 && (t += r, r = 0), t < 0 && (r += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
top: t,
left: n,
bottom: r,
right: i
  };
}

function d(e, t, n) {
  e = i(e, n);
  let {
width: r,
height: s
  } = a(t, n);
  return r = 'string' == typeof r ? 0 : r, s = 'string' == typeof s ? 0 : s, l(e, n.width, n.height, r, s);
}

function _(e, t, n) {
  let {
top: r,
left: i
  } = e, {
x: a,
y: d
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
x: 0,
y: 0
  }, {
width: _,
height: E
  } = t;
  return [
s(u(c(l({
  top: r + d,
  left: i + a,
  bottom: null,
  right: null
}, n.width, n.height, 'number' == typeof _ ? _ : 0, 'number' == typeof E ? E : 0))), n),
o(t, n)
  ];
}

function E(e, t, n) {
  let {
top: r,
right: i
  } = e, {
x: a,
y: d
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
x: 0,
y: 0
  }, {
width: _,
height: E
  } = t;
  return [
s(u(c(l({
  top: r + d,
  left: null,
  bottom: null,
  right: i - a
}, n.width, n.height, 'number' == typeof _ ? _ : 0, 'number' == typeof E ? E : 0))), n),
o(t, n)
  ];
}
n.d(t, {
  KR: function() {
return i;
  },
  Ox: function() {
return o;
  },
  PY: function() {
return l;
  },
  R: function() {
return u;
  },
  jL: function() {
return s;
  },
  o4: function() {
return _;
  },
  ou: function() {
return c;
  },
  uq: function() {
return E;
  },
  vS: function() {
return d;
  },
  w_: function() {
return a;
  }
}), n(411104);