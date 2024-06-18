"use strict";
n.d(t, {
  J9: function() {
    return l.J
  },
  Jt: function() {
    return v
  },
  K0: function() {
    return C
  },
  f$: function() {
    return a.f$
  },
  lg: function() {
    return g
  },
  sX: function() {
    return a.Hx
  },
  tn: function() {
    return R
  },
  yZ: function() {
    return u.H
  }
}), n(47120), n(653041);
var i = n(203651),
  r = n.n(i),
  s = n(261470);
n(17089);
var o = n(259443),
  a = n(343817),
  l = n(357280);
n(380094);
var u = n(817109),
  _ = n(413135).Buffer;
let d = new o.Y("HTTPUtils"),
  c = new Set([502, 504, 507, 598, 599, 522, 523, 524]);

function E(e, t, n, i, o) {
  var u, d, I, T, S;
  let f = r()[e](t.url);
  if (null != t.onRequestCreated && t.onRequestCreated(f), null != t.query) {
    let e = t.query;
    if ("object" == typeof e) {
      let t = {
        ...e
      };
      Object.keys(t).map(e => {
        null == t[e] && delete t[e]
      }), e = t
    }
    f.query(e)
  }
  if (t.body && f.send(t.body), null != t.headers && f.set(t.headers), null != t.reason && f.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)), null === (u = t.attachments) || void 0 === u || u.forEach(e => {
      f.attach(e.name, e.file, e.filename)
    }), null === (d = t.fields) || void 0 === d || d.forEach(e => {
      f.field(e.name, e.value)
    }), null != t.context) {
    let e = function(e) {
      try {
        return _.from(JSON.stringify(e)).toString("base64")
      } catch (e) {
        return null
      }
    }(t.context);
    null != e && f.set("X-Context-Properties", e)
  }
  null != t.retried && 0 !== t.retried && f.set("X-Failed-Requests", "".concat(t.retried)), null != t.timeout && 0 !== t.timeout && f.timeout(t.timeout), t.binary && f.responseType("blob"), null != t.onRequestProgress && f.on("progress", e => {
    var n;
    null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e)
  });
  let N = () => {
    t.backoff = null != t.backoff ? t.backoff : new s.Z, t.retried = (null != t.retried ? t.retried : 0) + 1, t.backoff.fail(() => L(t.url).then(() => E(e, t, n, i, o)))
  };
  null == p || null === (I = p.prepareRequest) || void 0 === I || I.call(p, f), f.ok(e => null != e.status), f.then(r => {
    var s, u, _;
    if (null != t.retries && t.retries-- > 0 && c.has(r.status)) return N();
    let d = {
      ok: r.ok,
      headers: r.headers,
      body: r.body,
      text: r.text,
      status: r.status
    };
    h(t, d);
    let I = !1,
      T = (r, s) => {
        let a = {
          ...t,
          headers: {
            ...t.headers,
            ...r
          },
          interceptResponse: s
        };
        I = !0, E(e, a, n, i, o)
      },
      S = e => {
        !I && (i(e), null == o || o({
          ok: !1,
          hasErr: !0,
          err: e
        }))
      };
    if ((null == t ? void 0 : null === (s = t.interceptResponse) || void 0 === s ? void 0 : s.call(t, r, T, S)) !== !0 && (null == p ? void 0 : null === (u = p.interceptResponse) || void 0 === u ? void 0 : u.call(p, r, T, S)) !== !0) {
      if (r.ok) n(d);
      else {
        if (t.oldFormErrors && (null == d ? void 0 : null === (_ = d.body) || void 0 === _ ? void 0 : _.code) === a.f$) {
          let {
            errors: e
          } = d.body;
          null != e && (d.body = (0, l.J)(e))
        }
        i(d)
      }
      null != o && o({
        hasErr: !1,
        ...d
      })
    }
  }, e => {
    null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code ? N() : (h(t), i(e), null != o && o({
      ok: !1,
      hasErr: !0,
      err: e
    }))
  }), (null === (T = t.signal) || void 0 === T ? void 0 : T.aborted) ? f.abort() : null === (S = t.signal) || void 0 === S || S.addEventListener("abort", () => f.abort(), {
    once: !0
  })
}
let I = new Map;

function T(e) {
  let t = I.get(e);
  if (null == t) {
    d.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
    return
  }
  let n = t.queue.shift();
  if (null == n) {
    d.verbose("rateLimitExpirationHandler: removing key for", e), I.delete(e);
    return
  }
  d.verbose("rateLimitExpirationHandler: moving to next record for ", e), n()
}

function h(e, t) {
  let n = I.get(e.url);
  if (null != t && 429 === t.status) {
    var i, r;
    let s = (null === (i = t.body) || void 0 === i ? void 0 : i.retry_after) || 5,
      o = Date.now() + 1e3 * s;
    if (null != n) {
      if (n.retryAfterTimestamp < o) d.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
      else {
        d.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
        return
      }
    }
    d.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(s, " seconds"));
    let a = setTimeout(() => T(e.url), 1e3 * s);
    I.set(e.url, {
      queue: null !== (r = null == n ? void 0 : n.queue) && void 0 !== r ? r : [],
      retryAfterTimestamp: o,
      timeoutId: a
    })
  } else null != n && n.retryAfterTimestamp < Date.now() && (d.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), T(e.url))
}

function S(e, t, n) {
  return new Promise((i, r) => {
    "string" == typeof t && (t = {
      url: t
    });
    let s = I.get(t.url);
    null != s ? (d.verbose("makeRequest: queueing request for ", t.url), s.queue.push(E.bind(null, e, t, i, r, n))) : E(e, t, i, r, n)
  })
}
let f = S.bind(null, "get"),
  N = S.bind(null, "post"),
  A = S.bind(null, "put"),
  m = S.bind(null, "patch"),
  O = S.bind(null, "del"),
  R = {
    get: f,
    post: N,
    put: A,
    patch: m,
    del: O
  };
if (n.g.isServerRendering) {
  let e = (e, t) => Promise.resolve({
    ok: !0,
    status: 200,
    headers: {},
    body: null,
    text: ""
  });
  f = e, N = e, A = e, m = e, O = e
}

function C() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
}
let p = null;

function g(e) {
  p = e
}
let L = () => Promise.resolve();

function v(e) {
  L = e
}