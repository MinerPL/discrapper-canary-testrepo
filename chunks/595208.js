r.d(e, {
  m7: function() {
return c;
  },
  m8: function() {
return E;
  },
  q4: function() {
return s;
  }
});
var n = r(862315),
  _ = r(529866),
  a = r(876122),
  i = r(703498);
let o = [];

function E(t) {
  let e;
  let r = t.defaultIntegrations || [],
_ = t.integrations;
  r.forEach(t => {
t.isDefaultInstance = !0;
  });
  let a = function(t) {
  let e = {};
  return t.forEach(t => {
    let {
      name: r
    } = t, n = e[r];
    if (!n || !!n.isDefaultInstance || !t.isDefaultInstance)
      e[r] = t;
  }), Object.keys(e).map(t => e[t]);
}(e = Array.isArray(_) ? [
  ...r,
  ..._
] : 'function' == typeof _ ? (0, n.lE)(_(r)) : r),
i = function(t, e) {
  for (let r = 0; r < t.length; r++)
    if (!0 === e(t[r]))
      return r;
  return -1;
}(a, t => 'Debug' === t.name);
  if (-1 !== i) {
let [t] = a.splice(i, 1);
a.push(t);
  }
  return a;
}

function s(t) {
  let e = {};
  return t.forEach(t => {
t && c(t, e);
  }), e;
}

function c(t, e) {
  e[t.name] = t, -1 === o.indexOf(t.name) && (t.setupOnce(i.c, a.Gd), o.push(t.name), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`Integration installed: ${ t.name }`));
}