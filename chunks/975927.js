"use strict";
n.d(e, {
  K: function() {
    return s
  }
});
var r = n(347421),
  i = n(880803);

function s(t) {
  return (0, r.q)(t, function(e) {
    return new i.cW((n, r) => {
      let i = new XMLHttpRequest;
      for (let e in i.onerror = r, i.onreadystatechange = () => {
          4 === i.readyState && n({
            statusCode: i.status,
            headers: {
              "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": i.getResponseHeader("Retry-After")
            }
          })
        }, i.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
      i.send(e.body)
    })
  })
}