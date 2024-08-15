r.d(t, {
  l: function() {
return R;
  }
});
var n = r(157079),
  a = r(151122),
  o = r(233517),
  i = r(263449),
  _ = r(946471),
  E = r(622916),
  s = r(694043),
  c = r(64685),
  I = r(899517),
  u = r(394798),
  l = r(454463);
let R = (0, a._I)((e = {}) => {
  let t = {
failedRequestStatusCodes: [
  [
    500,
    599
  ]
],
failedRequestTargets: [/.*/],
...e
  };
  return {
name: 'HttpClient',
setup(e) {
  (function(e, t) {
    if (!!(0, s.t$)())
      (0, c.Uf)(r => {
        if ((0, i.s3)() !== e)
          return;
        let {
          response: n,
          args: a
        } = r, [_, E] = a;
        if (!!n)
          ! function(e, t, r, n) {
            if (d(e, r.status, r.url)) {
              let e, a, i, _;
              let E = function(e, t) {
                return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e, t);
              }(t, n);
              p() && ([e, i] = A('Cookie', E), [a, _] = A('Set-Cookie', r));
              let s = N({
                url: E.url,
                method: E.method,
                status: r.status,
                requestHeaders: e,
                responseHeaders: a,
                requestCookies: i,
                responseCookies: _
              });
              (0, o.eN)(s);
            }
          }(t, _, n, E);
      });
  }(e, t), function(e, t) {
    if ('XMLHttpRequest' in I.n)
      (0, n.UK)(r => {
        if ((0, i.s3)() !== e)
          return;
        let a = r.xhr,
          _ = a[n.xU];
        if (!_)
          return;
        let {
          method: s,
          request_headers: c
        } = _;
        try {
          ! function(e, t, r, n) {
            if (d(e, t.status, t.responseURL)) {
              let e, a, i;
              if (p()) {
                try {
                  let e = t.getResponseHeader('Set-Cookie') || t.getResponseHeader('set-cookie') || void 0;
                  e && (a = T(e));
                } catch (e) {
                  l.X && E.kg.log('Could not extract cookies from response headers');
                }
                try {
                  i = function(e) {
                    let t = e.getAllResponseHeaders();
                    return t ? t.split('\r\n').reduce((e, t) => {
                      let [r, n] = t.split(': ');
                      return r && n && (e[r] = n), e;
                    }, {}) : {};
                  }(t);
                } catch (e) {
                  l.X && E.kg.log('Could not extract headers from response');
                }
                e = n;
              }
              let _ = N({
                url: t.responseURL,
                method: r,
                status: t.status,
                requestHeaders: e,
                responseHeaders: i,
                responseCookies: a
              });
              (0, o.eN)(_);
            }
          }(t, a, s, c);
        } catch (e) {
          l.X && E.kg.warn('Error while extracting response event form XHR response', e);
        }
      });
  }(e, t));
}
  };
});

function A(e, t) {
  let r;
  let n = function(e) {
let t = {};
return e.forEach((e, r) => {
  t[r] = e;
}), t;
  }(t.headers);
  try {
let t = n[e] || n[e.toLowerCase()] || void 0;
t && (r = T(t));
  } catch (t) {
l.X && E.kg.log(`Could not extract cookies from header ${ e }`);
  }
  return [
n,
r
  ];
}

function T(e) {
  return e.split('; ').reduce((e, t) => {
let [r, n] = t.split('=');
return r && n && (e[r] = n), e;
  }, {});
}

function d(e, t, r) {
  var n, a, o, E;
  return n = e.failedRequestStatusCodes, a = t, n.some(e => 'number' == typeof e ? e === a : a >= e[0] && a <= e[1]) && (o = e.failedRequestTargets, E = r, o.some(e => 'string' == typeof e ? E.includes(e) : e.test(E))) && !(0, _.W)(r, (0, i.s3)());
}

function N(e) {
  let t = `HTTP Client Error with status code: ${ e.status }`,
r = {
  message: t,
  exception: {
    values: [{
      type: 'Error',
      value: t
    }]
  },
  request: {
    url: e.url,
    method: e.method,
    headers: e.requestHeaders,
    cookies: e.requestCookies
  },
  contexts: {
    response: {
      status_code: e.status,
      headers: e.responseHeaders,
      cookies: e.responseCookies,
      body_size: function(e) {
        if (e) {
          let t = e['Content-Length'] || e['content-length'];
          if (t)
            return parseInt(t, 10);
        }
      }(e.responseHeaders)
    }
  }
};
  return (0, u.EG)(r, {
type: 'http.client',
handled: !1
  }), r;
}

function p() {
  let e = (0, i.s3)();
  return !!e && !!e.getOptions().sendDefaultPii;
}