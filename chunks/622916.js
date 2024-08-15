n.d(e, {
  Cf: function() {
return u;
  },
  LD: function() {
return o;
  },
  RU: function() {
return s;
  },
  kg: function() {
return c;
  }
});
var r = n(309544),
  i = n(899517);
let s = [
'debug',
'info',
'warn',
'error',
'log',
'assert',
'trace'
  ],
  o = {};

function u(t) {
  if (!('console' in i.n))
return t();
  let e = i.n.console,
n = {},
r = Object.keys(o);
  r.forEach(t => {
let r = o[t];
n[t] = e[t], e[t] = r;
  });
  try {
return t();
  } finally {
r.forEach(t => {
  e[t] = n[t];
});
  }
}
let c = function() {
  let t = !1,
e = {
  enable: () => {
    t = !0;
  },
  disable: () => {
    t = !1;
  },
  isEnabled: () => t
};
  return r.X ? s.forEach(n => {
e[n] = (...e) => {
  t && u(() => {
    i.n.console[n](`Sentry Logger [${ n }]:`, ...e);
  });
};
  }) : s.forEach(t => {
e[t] = () => void 0;
  }), e;
}();