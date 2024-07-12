n.d(t, {
  J9: function() {
return l.J;
  },
  Jt: function() {
return D;
  },
  K0: function() {
return O;
  },
  f$: function() {
return s.f$;
  },
  lg: function() {
return C;
  },
  sX: function() {
return s.Hx;
  },
  tn: function() {
return v;
  },
  yZ: function() {
return u.H;
  }
}), n(47120), n(653041);
var r = n(203651),
  i = n.n(r),
  a = n(261470);
n(17089);
var o = n(259443),
  s = n(343817),
  l = n(357280);
n(380094);
var u = n(817109),
  c = n(413135).Buffer;
let d = new o.Y('HTTPUtils'),
  _ = new Set([
502,
504,
507,
598,
599,
522,
523,
524
  ]);

function E(e, t, n, r, o) {
  var u, d, f, h, m;
  let I = i()[e](t.url);
  if (null != t.onRequestCreated && t.onRequestCreated(I), null != t.query) {
let e = t.query;
if ('object' == typeof e) {
  let t = {
    ...e
  };
  Object.keys(t).map(e => {
    null == t[e] && delete t[e];
  }), e = t;
}
I.query(e);
  }
  if (t.body && I.send(t.body), null != t.headers && I.set(t.headers), null != t.reason && I.set('X-Audit-Log-Reason', encodeURIComponent(t.reason)), null === (u = t.attachments) || void 0 === u || u.forEach(e => {
  I.attach(e.name, e.file, e.filename);
}), null === (d = t.fields) || void 0 === d || d.forEach(e => {
  I.field(e.name, e.value);
}), null != t.context) {
let e = function(e) {
  try {
    return c.from(JSON.stringify(e)).toString('base64');
  } catch (e) {
    return null;
  }
}(t.context);
null != e && I.set('X-Context-Properties', e);
  }
  null != t.retried && 0 !== t.retried && I.set('X-Failed-Requests', ''.concat(t.retried)), null != t.timeout && 0 !== t.timeout && I.timeout(t.timeout), t.binary && I.responseType('blob'), null != t.onRequestProgress && I.on('progress', e => {
var n;
null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e);
  });
  let T = () => {
t.backoff = null != t.backoff ? t.backoff : new a.Z(), t.retried = (null != t.retried ? t.retried : 0) + 1, t.backoff.fail(() => y(t.url).then(() => E(e, t, n, r, o)));
  };
  null == R || null === (f = R.prepareRequest) || void 0 === f || f.call(R, I), I.ok(e => null != e.status), I.then(i => {
var a, u, c;
if (null != t.retries && t.retries-- > 0 && _.has(i.status))
  return T();
let d = {
  ok: i.ok,
  headers: i.headers,
  body: i.body,
  text: i.text,
  status: i.status
};
p(t, d);
let f = !1,
  h = (i, a) => {
    let s = {
      ...t,
      headers: {
        ...t.headers,
        ...i
      },
      interceptResponse: a
    };
    f = !0, E(e, s, n, r, o);
  },
  m = e => {
    !f && (r(e), null == o || o({
      ok: !1,
      hasErr: !0,
      err: e
    }));
  };
if ((null == t ? void 0 : null === (a = t.interceptResponse) || void 0 === a ? void 0 : a.call(t, i, h, m)) !== !0 && (null == R ? void 0 : null === (u = R.interceptResponse) || void 0 === u ? void 0 : u.call(R, i, h, m)) !== !0) {
  if (i.ok)
    n(d);
  else {
    if (t.oldFormErrors && (null == d ? void 0 : null === (c = d.body) || void 0 === c ? void 0 : c.code) === s.f$) {
      let {
        errors: e
      } = d.body;
      null != e && (d.body = (0, l.J)(e));
    }
    r(d);
  }
  null != o && o({
    hasErr: !1,
    ...d
  });
}
  }, e => {
null != t.retries && t.retries-- > 0 && 'ABORTED' !== e.code ? T() : (p(t), r(e), null != o && o({
  ok: !1,
  hasErr: !0,
  err: e
}));
  }), (null === (h = t.signal) || void 0 === h ? void 0 : h.aborted) ? I.abort() : null === (m = t.signal) || void 0 === m || m.addEventListener('abort', () => I.abort(), {
once: !0
  });
}
let f = new Map();

function h(e) {
  let t = f.get(e);
  if (null == t) {
d.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
return;
  }
  let n = t.queue.shift();
  if (null == n) {
d.verbose('rateLimitExpirationHandler: removing key for', e), f.delete(e);
return;
  }
  d.verbose('rateLimitExpirationHandler: moving to next record for ', e), n();
}

function p(e, t) {
  let n = f.get(e.url);
  if (null != t && 429 === t.status) {
var r, i, a;
let o = (null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) || 5,
  s = Date.now() + 1000 * o;
if (null != n) {
  if (n.retryAfterTimestamp < s)
    d.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(n.timeoutId);
  else {
    d.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
    return;
  }
}
d.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(o, ' seconds'));
let l = setTimeout(() => h(e.url), 1000 * o);
f.set(e.url, {
  queue: null !== (a = null == n ? void 0 : n.queue) && void 0 !== a ? a : [],
  retryAfterTimestamp: s,
  latestErrorMessage: String(null === (i = t.body) || void 0 === i ? void 0 : i.message),
  timeoutId: l
});
  } else
null != n && n.retryAfterTimestamp < Date.now() && (d.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), h(e.url));
}
let m = (e, t) => {
  let n = Math.round((t.retryAfterTimestamp - Date.now()) / 1000);
  return e({
status: 429,
body: {
  message: t.latestErrorMessage,
  retry_after: n
}
  });
};

function I(e, t, n) {
  return new Promise((r, i) => {
'string' == typeof t && (t = {
  url: t
});
let a = f.get(t.url);
if (null != a && t.failImmediatelyWhenRateLimited)
  return m(i, a);
null != a ? (d.verbose('makeRequest: queueing request for ', t.url), a.queue.push(E.bind(null, e, t, r, i, n))) : E(e, t, r, i, n);
  });
}
let T = I.bind(null, 'get'),
  g = I.bind(null, 'post'),
  S = I.bind(null, 'put'),
  A = I.bind(null, 'patch'),
  N = I.bind(null, 'del'),
  v = {
get: T,
post: g,
put: S,
patch: A,
del: N
  };
if (n.g.isServerRendering) {
  let e = (e, t) => Promise.resolve({
ok: !0,
status: 200,
headers: {},
body: null,
text: ''
  });
  T = e, g = e, S = e, A = e, N = e;
}

function O() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let R = null;

function C(e) {
  R = e;
}
let y = () => Promise.resolve();

function D(e) {
  y = e;
}