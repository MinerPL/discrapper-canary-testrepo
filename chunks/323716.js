n(610138), n(216116), n(78328), n(815648), n(47120), n(724458), n(653041), n(315314), n(203651);
var r = n(544891),
  i = n(569611),
  a = n(547010),
  s = n(580189),
  o = n(397550),
  l = n(931619);
n(358085);
var u = n(960048),
  c = n(591759),
  d = n(303850),
  _ = n(981631);
let E = [
'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
'https://cdn.discordapp.com/bad-domains/hashes.json'
  ],
  f = new d.R(),
  h = /\/api(\/v\d+)?\/science/;
(0, r.lg)({
  prepareRequest(e) {
let {
  default: t
} = n(314897), {
  default: a
} = n(857192), {
  default: s
} = n(706454), {
  default: o
} = n(594174), {
  default: l
} = n(626135), {
  isPlatformEmbedded: d
} = n(358085);
if ('/' === e.url[0]) {
  var _, p;
  e.url = (0, r.K0)() + e.url, !('Authorization' in e.header) && !('authorization' in e.header) && e.set('Authorization', t.getToken());
  let n = l.getSuperPropertiesBase64();
  null != n && e.set('X-Super-Properties', n);
  let i = t.getFingerprint();
  if (null != i && '' !== i && e.set('X-Fingerprint', i), d) {
    let t, n = [];
    null != navigator && (n = (_ = [...navigator.languages], _));
    let r = (t = 10, n.reduce((e, n) => (10 === t ? e.push(n) : e.push(''.concat(n, ';q=0.').concat(t)), t = Math.max(t - 1, 1), e), []).join(','));
    e.set('Accept-Language', r);
  }
  e.set('X-Discord-Locale', s.locale);
  let u = function() {
    if (null == Intl.DateTimeFormat)
      return null;
    let e = Intl.DateTimeFormat();
    return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone;
  }();
  null != u && e.set('X-Discord-Timezone', u);
  let E = a.getDebugOptionsHeaderValue();
  if (null != E && '' !== E && e.set('X-Debug-Options', E), a.isTracingRequests) {
    let t = o.getCurrentUser(),
      n = f.generate(null !== (p = null == t ? void 0 : t.id) && void 0 !== p ? p : '0');
    e.set('x-client-trace-id', n);
    try {
      let t = new URL(e.url).pathname;
      if (!h.test(t)) {
        let r = function(e) {
          let t = new URLSearchParams();
          t.append('query', '@http.x_client_trace_id:"'.concat(e, '"')), t.append('showAllSpans', 'true');
          let n = c.Z.toURLSafe('traces?'.concat(t.toString()), 'https://datadog.discord.tools/apm/');
          return null == n ? null : n.toString();
        }(n);
        null !== r && console.debug('%c[tracing]%c %s %s\n%s', 'font-weight: bold', '', e.method, t, r);
      }
    } catch (e) {
      console.error('error while printing tracing log', e);
    }
  }
}
i.Hj('Network', 'Sending '.concat(e.method, ' to ').concat(e.url)), e.on('response', t => {
  let n = null != t && t.status >= 400 ? t.text : null;
  i.Hj('Network', 'Completed '.concat(e.method, ' to ').concat(e.url, ' with status: ').concat(null == t ? void 0 : t.status, ' ').concat(null == n ? '' : 'and body: '.concat(n)));
}), e.on('error', (t, n) => {
  if (i.Hj('Network', 'Failed '.concat(e.method, ' to ').concat(e.url, ' with status ').concat(null == t ? void 0 : t.status, ' and body: ').concat(null == n ? void 0 : n.text)), null != t && 'parse' in t && t.parse) {
    let n = '[FILTERED]';
    if (E.includes(e.url)) {
      var r, a;
      n = null === (a = e.xhr) || void 0 === a ? void 0 : null === (r = a.responseText) || void 0 === r ? void 0 : r.slice(0, 1000);
    }
    u.Z.addBreadcrumb({
      category: 'superagent',
      message: 'Failed to parse HTTP response.',
      data: {
        method: e.method,
        url: e.url,
        responseText: n,
        status: t.status
      }
    });
  }
});
  },
  interceptResponse(e, t, r) {
var i, l, u, c, d;
return 400 === e.statusCode && (null === (i = e.body) || void 0 === i ? void 0 : i.captcha_key) ? (Promise.all([
  n.e('36514').then(n.bind(n, 475271)),
  n.e('31177').then(n.bind(n, 353250))
]).then(t => {
  let [{
    default: n
  }, {
    extractCaptchaPropsFromResponseBody: r
  }] = t;
  return n.showCaptchaAsync(r(e.body));
}).then(e => {
  let {
    captcha_key: n,
    captcha_rqtoken: r
  } = e, i = {
    'X-Captcha-Key': n
  };
  null != r && (i['X-Captcha-Rqtoken'] = r), t(i);
}).catch(r), !0) : 401 === e.statusCode && (null === (l = e.body) || void 0 === l ? void 0 : l.code) === _.evJ.MFA_REQUIRED && (null === (u = e.body) || void 0 === u ? void 0 : u.mfa) ? (Promise.all([
  n.e('52030'),
  n.e('96043')
]).then(n.bind(n, 24031)).then(n => {
  let {
    openMFAModal: i
  } = n;
  i(e.body.mfa, t, r);
}).catch(r), !0) : (0, o.b)(e.statusCode, null === (c = e.body) || void 0 === c ? void 0 : c.code) ? (Promise.resolve().then(n.bind(n, 895886)).then(e => {
  let {
    default: t
  } = e;
  t();
}), !1) : (0, a.b)(e.statusCode, null === (d = e.body) || void 0 === d ? void 0 : d.code) ? (n.e('76731').then(n.bind(n, 626892)).then(t => {
  var n;
  let {
    default: r
  } = t;
  r(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id);
}), !1) : ((0, s.X)(e) && n.e('89715').then(n.bind(n, 707708)).then(e => {
  let {
    handleBlockedByProxy: t
  } = e;
  t();
}), !1);
  }
}), (0, r.Jt)(async e => {
  if (i.Hj('Network', 'Request to '.concat(e, ' failed, will retry.')), !l.Z.isOnline())
await l.Z.awaitOnline(), i.Hj('Network', 'Network detected online, retrying '.concat(e));
});