r.d(e, {
  f: function() {
return i;
  }
});
var n = r(347421),
  _ = r(880803),
  a = r(56618);

function i(t, e = (0, a.x)()) {
  let r = 0,
i = 0;
  return (0, n.q)(t, function(n) {
let o = n.body.length;
r += o, i++;
let E = {
  body: n.body,
  method: 'POST',
  referrerPolicy: 'origin',
  headers: t.headers,
  keepalive: r <= 60000 && i < 15,
  ...t.fetchOptions
};
try {
  return e(t.url, E).then(t => (r -= o, i--, {
    statusCode: t.status,
    headers: {
      'x-sentry-rate-limits': t.headers.get('X-Sentry-Rate-Limits'),
      'retry-after': t.headers.get('Retry-After')
    }
  }));
} catch (t) {
  return (0, a.c)(), r -= o, i--, (0, _.$2)(t);
}
  });
}