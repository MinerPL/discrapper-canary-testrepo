"use strict";
n.d(e, {
  Z: function() {
    return s
  }
});
var r = n(46834),
  i = n(336344);

function s(t, e, n = 250, s, u, l, c) {
  if (!l.exception || !l.exception.values || !c || !(0, r.V9)(c.originalException, Error)) return;
  let d = l.exception.values.length > 0 ? l.exception.values[l.exception.values.length - 1] : void 0;
  d && (l.exception.values = function(t, e) {
    return t.map(t => (t.value && (t.value = (0, i.$G)(t.value, e)), t))
  }(function t(e, n, i, s, u, l, c, d) {
    if (l.length >= i + 1) return l;
    let h = [...l];
    if ((0, r.V9)(s[u], Error)) {
      a(c, d);
      let r = e(n, s[u]),
        l = h.length;
      o(r, u, l, d), h = t(e, n, i, s[u], u, [r, ...h], r, l)
    }
    return Array.isArray(s.errors) && s.errors.forEach((s, l) => {
      if ((0, r.V9)(s, Error)) {
        a(c, d);
        let r = e(n, s),
          _ = h.length;
        o(r, `errors[${l}]`, _, d), h = t(e, n, i, s, u, [r, ...h], r, _)
      }
    }), h
  }(t, e, u, c.originalException, s, l.exception.values, d, 0), n))
}

function a(t, e) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    is_exception_group: !0,
    exception_id: e
  }
}

function o(t, e, n, r) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  }
}