r.d(e, {
  L7: function() {
return u;
  },
  k3: function() {
return T;
  }
});
var n = r(633401),
  _ = r(876122),
  a = r(154405),
  i = r(793884),
  o = r(868145),
  E = r(336344),
  s = r(874230),
  c = r(545459),
  I = r(46834);
let R = [
'localhost',
/^\/(?!\/)/
  ],
  T = {
traceFetch: !0,
traceXHR: !0,
enableHTTPTimings: !0,
tracingOrigins: R,
tracePropagationTargets: R
  };

function u(t) {
  let {
traceFetch: e,
traceXHR: r,
tracePropagationTargets: o,
tracingOrigins: u,
shouldCreateSpanForRequest: A,
enableHTTPTimings: d
  } = {
traceFetch: T.traceFetch,
traceXHR: T.traceXHR,
...t
  }, O = 'function' == typeof A ? A : t => !0, S = t => function(t, e) {
return (0, E.U0)(t, e || R);
  }(t, o || u), p = {};
  e && (0, i.oq)('fetch', t => {
let e = function(t, e, r, i) {
  if (!(0, n.z)() || !t.fetchData)
    return;
  let o = e(t.fetchData.url);
  if (t.endTimestamp && o) {
    let e = t.fetchData.__span;
    if (!e)
      return;
    let r = i[e];
    if (r) {
      if (t.response) {
        r.setHttpStatus(t.response.status);
        let e = parseInt(t.response && t.response.headers && t.response.headers.get('content-length'));
        e > 0 && r.setData('http.response_content_length', e);
      } else
        t.error && r.setStatus('internal_error');
      r.finish(), delete i[e];
    }
    return;
  }
  let E = (0, _.Gd)(),
    R = E.getScope(),
    T = E.getClient(),
    u = R.getSpan(),
    {
      method: l,
      url: A
    } = t.fetchData,
    N = o && u ? u.startChild({
      data: {
        url: A,
        type: 'fetch',
        'http.method': l
      },
      description: `${ l } ${ A }`,
      op: 'http.client'
    }) : void 0;
  if (N && (t.fetchData.__span = N.spanId, i[N.spanId] = N), r(t.fetchData.url) && T) {
    let e = t.args[0];
    t.args[1] = t.args[1] || {};
    let r = t.args[1];
    r.headers = function(t, e, r, n) {
      let _ = r.getSpan(),
        i = _ && _.transaction,
        {
          traceId: o,
          sampled: E,
          dsc: R
        } = r.getPropagationContext(),
        T = _ ? _.toTraceparent() : (0, s.$p)(o, void 0, E),
        u = i ? i.getDynamicSamplingContext() : R || (0, a._)(o, e, r),
        l = (0, c.IQ)(u),
        A = 'undefined' != typeof Request && (0, I.V9)(t, Request) ? t.headers : n.headers;
      if (!A)
        return {
          'sentry-trace': T,
          baggage: l
        };
      if ('undefined' != typeof Headers && (0, I.V9)(A, Headers)) {
        let t = new Headers(A);
        return t.append('sentry-trace', T), l && t.append(c.bU, l), t;
      }
      if (Array.isArray(A)) {
        let t = [
          ...A,
          [
            'sentry-trace',
            T
          ]
        ];
        return l && t.push([
          c.bU,
          l
        ]), t;
      } else {
        let t = 'baggage' in A ? A.baggage : void 0,
          e = [];
        return Array.isArray(t) ? e.push(...t) : t && e.push(t), l && e.push(l), {
          ...A,
          'sentry-trace': T,
          baggage: e.length > 0 ? e.join(',') : void 0
        };
      }
    }(e, T, R, r);
  }
  return N;
}(t, O, S, p);
d && e && l(e);
  }), r && (0, i.oq)('xhr', t => {
let e = function(t, e, r, o) {
  let E = t.xhr,
    I = E && E[i.xU];
  if (!(0, n.z)() || E && E.__sentry_own_request__ || !E || !I)
    return;
  let R = e(I.url);
  if (t.endTimestamp && R) {
    let t = E.__sentry_xhr_span_id__;
    if (!t)
      return;
    let e = o[t];
    e && (e.setHttpStatus(I.status_code), e.finish(), delete o[t]);
    return;
  }
  let T = (0, _.Gd)(),
    u = T.getScope(),
    l = u.getSpan(),
    A = R && l ? l.startChild({
      data: {
        ...I.data,
        type: 'xhr',
        'http.method': I.method,
        url: I.url
      },
      description: `${ I.method } ${ I.url }`,
      op: 'http.client'
    }) : void 0;
  if (A && (E.__sentry_xhr_span_id__ = A.spanId, o[E.__sentry_xhr_span_id__] = A), E.setRequestHeader && r(I.url)) {
    if (A) {
      let t = A && A.transaction,
        e = t && t.getDynamicSamplingContext(),
        r = (0, c.IQ)(e);
      N(E, A.toTraceparent(), r);
    } else {
      let t = T.getClient(),
        {
          traceId: e,
          sampled: r,
          dsc: n
        } = u.getPropagationContext(),
        _ = (0, s.$p)(e, void 0, r),
        i = n || (t ? (0, a._)(e, t, u) : void 0);
      N(E, _, (0, c.IQ)(i));
    }
  }
  return A;
}(t, O, S, p);
d && e && l(e);
  });
}

function l(t) {
  let e = t.data.url,
r = new PerformanceObserver(n => {
  n.getEntries().forEach(n => {
    ('fetch' === n.initiatorType || 'xmlhttprequest' === n.initiatorType) && n.name.endsWith(e) && (function(t) {
      let {
        name: e,
        version: r
      } = function(t) {
        let e = 'unknown',
          r = 'unknown',
          n = '';
        for (let _ of t) {
          if ('/' === _) {
            [e, r] = t.split('/');
            break;
          }
          if (!isNaN(Number(_))) {
            e = 'h' === n ? 'http' : n, r = t.split(n)[1];
            break;
          }
          n += _;
        }
        return n === t && (e = n), {
          name: e,
          version: r
        };
      }(t.nextHopProtocol), n = [];
      return (n.push([
        'network.protocol.version',
        r
      ], [
        'network.protocol.name',
        e
      ]), o.Z1) ? [
        ...n,
        [
          'http.request.redirect_start',
          A(t.redirectStart)
        ],
        [
          'http.request.fetch_start',
          A(t.fetchStart)
        ],
        [
          'http.request.domain_lookup_start',
          A(t.domainLookupStart)
        ],
        [
          'http.request.domain_lookup_end',
          A(t.domainLookupEnd)
        ],
        [
          'http.request.connect_start',
          A(t.connectStart)
        ],
        [
          'http.request.secure_connection_start',
          A(t.secureConnectionStart)
        ],
        [
          'http.request.connection_end',
          A(t.connectEnd)
        ],
        [
          'http.request.request_start',
          A(t.requestStart)
        ],
        [
          'http.request.response_start',
          A(t.responseStart)
        ],
        [
          'http.request.response_end',
          A(t.responseEnd)
        ]
      ] : n;
    }(n).forEach(e => t.setData(...e)), r.disconnect());
  });
});
  r.observe({
entryTypes: ['resource']
  });
}

function A(t) {
  return ((o.Z1 || performance.timeOrigin) + t) / 1000;
}

function N(t, e, r) {
  try {
t.setRequestHeader('sentry-trace', e), r && t.setRequestHeader(c.bU, r);
  } catch (t) {}
}