"use strict";
n.d(e, {
  m7: function() {
    return c
  },
  m8: function() {
    return u
  },
  q4: function() {
    return l
  }
});
var r = n(862315),
  i = n(529866),
  s = n(876122),
  a = n(703498);
let o = [];

function u(t) {
  let e;
  let n = t.defaultIntegrations || [],
    i = t.integrations;
  n.forEach(t => {
    t.isDefaultInstance = !0
  });
  let s = function(t) {
      let e = {};
      return t.forEach(t => {
        let {
          name: n
        } = t, r = e[n];
        if (!r || !!r.isDefaultInstance || !t.isDefaultInstance) e[n] = t
      }), Object.keys(e).map(t => e[t])
    }(e = Array.isArray(i) ? [...n, ...i] : "function" == typeof i ? (0, r.lE)(i(n)) : n),
    a = function(t, e) {
      for (let n = 0; n < t.length; n++)
        if (!0 === e(t[n])) return n;
      return -1
    }(s, t => "Debug" === t.name);
  if (-1 !== a) {
    let [t] = s.splice(a, 1);
    s.push(t)
  }
  return s
}

function l(t) {
  let e = {};
  return t.forEach(t => {
    t && c(t, e)
  }), e
}

function c(t, e) {
  e[t.name] = t, -1 === o.indexOf(t.name) && (t.setupOnce(a.c, s.Gd), o.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Integration installed: ${t.name}`))
}