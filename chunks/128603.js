"use strict";
n.d(e, {
  JY: function() {
    return r
  },
  Q: function() {
    return i
  },
  WG: function() {
    return s
  }
});

function r(t, e = Date.now()) {
  let n = parseInt(`${t}`, 10);
  if (!isNaN(n)) return 1e3 * n;
  let r = Date.parse(`${t}`);
  return isNaN(r) ? 6e4 : r - e
}

function i(t, e, n = Date.now()) {
  var r;
  return ((r = t)[e] || r.all || 0) > n
}

function s(t, {
  statusCode: e,
  headers: n
}, i = Date.now()) {
  let s = {
      ...t
    },
    a = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (a)
    for (let t of a.trim().split(",")) {
      let [e, n] = t.split(":", 2), r = parseInt(e, 10), a = (isNaN(r) ? 60 : r) * 1e3;
      if (n)
        for (let t of n.split(";")) s[t] = i + a;
      else s.all = i + a
    } else o ? s.all = i + r(o, i) : 429 === e && (s.all = i + 6e4);
  return s
}