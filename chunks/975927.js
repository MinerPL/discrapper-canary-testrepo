r.d(e, {
  K: function() {
return a;
  }
});
var n = r(347421),
  _ = r(880803);

function a(t) {
  return (0, n.q)(t, function(e) {
return new _.cW((r, n) => {
  let _ = new XMLHttpRequest();
  for (let e in (_.onerror = n, _.onreadystatechange = () => {
      4 === _.readyState && r({
        statusCode: _.status,
        headers: {
          'x-sentry-rate-limits': _.getResponseHeader('X-Sentry-Rate-Limits'),
          'retry-after': _.getResponseHeader('Retry-After')
        }
      });
    }, _.open('POST', t.url), t.headers))
    Object.prototype.hasOwnProperty.call(t.headers, e) && _.setRequestHeader(e, t.headers[e]);
  _.send(e.body);
});
  });
}