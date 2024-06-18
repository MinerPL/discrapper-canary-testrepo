"use strict";
n.d(e, {
  f: function() {
    return a
  }
});
var r = n(347421),
  i = n(880803),
  s = n(56618);

function a(t, e = (0, s.x)()) {
  let n = 0,
    a = 0;
  return (0, r.q)(t, function(r) {
    let o = r.body.length;
    n += o, a++;
    let u = {
      body: r.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: t.headers,
      keepalive: n <= 6e4 && a < 15,
      ...t.fetchOptions
    };
    try {
      return e(t.url, u).then(t => (n -= o, a--, {
        statusCode: t.status,
        headers: {
          "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": t.headers.get("Retry-After")
        }
      }))
    } catch (t) {
      return (0, s.c)(), n -= o, a--, (0, i.$2)(t)
    }
  })
}