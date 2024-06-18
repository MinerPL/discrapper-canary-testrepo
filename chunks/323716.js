"use strict";
n(610138), n(216116), n(78328), n(815648), n(47120), n(724458), n(653041), n(315314), n(203651);
var i = n(544891),
  r = n(569611),
  s = n(547010),
  o = n(580189),
  a = n(397550),
  l = n(931619);
n(358085);
var u = n(960048),
  _ = n(591759),
  d = n(303850),
  c = n(981631);
let E = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
  I = new d.R,
  T = /\/api(\/v\d+)?\/science/;
(0, i.lg)({
  prepareRequest(e) {
    let {
      default: t
    } = n(314897), {
      default: s
    } = n(857192), {
      default: o
    } = n(706454), {
      default: a
    } = n(594174), {
      default: l
    } = n(626135), {
      isPlatformEmbedded: d
    } = n(358085);
    if ("/" === e.url[0]) {
      var c, h;
      e.url = (0, i.K0)() + e.url, !("Authorization" in e.header) && !("authorization" in e.header) && e.set("Authorization", t.getToken());
      let n = l.getSuperPropertiesBase64();
      null != n && e.set("X-Super-Properties", n);
      let r = t.getFingerprint();
      if (null != r && "" !== r && e.set("X-Fingerprint", r), d) {
        let t, n = [];
        null != navigator && (n = (c = [...navigator.languages], c));
        let i = (t = 10, n.reduce((e, n) => (10 === t ? e.push(n) : e.push("".concat(n, ";q=0.").concat(t)), t = Math.max(t - 1, 1), e), []).join(","));
        e.set("Accept-Language", i)
      }
      e.set("X-Discord-Locale", o.locale);
      let u = function() {
        if (null == Intl.DateTimeFormat) return null;
        let e = Intl.DateTimeFormat();
        return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone
      }();
      null != u && e.set("X-Discord-Timezone", u);
      let E = s.getDebugOptionsHeaderValue();
      if (null != E && "" !== E && e.set("X-Debug-Options", E), s.isTracingRequests) {
        let t = a.getCurrentUser(),
          n = I.generate(null !== (h = null == t ? void 0 : t.id) && void 0 !== h ? h : "0");
        e.set("x-client-trace-id", n);
        try {
          let t = new URL(e.url).pathname;
          if (!T.test(t)) {
            let i = function(e) {
              let t = new URLSearchParams;
              t.append("query", '@http.x_client_trace_id:"'.concat(e, '"')), t.append("showAllSpans", "true");
              let n = _.Z.toURLSafe("traces?".concat(t.toString()), "https://datadog.discord.tools/apm/");
              return null == n ? null : n.toString()
            }(n);
            null !== i && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, i)
          }
        } catch (e) {
          console.error("error while printing tracing log", e)
        }
      }
    }
    r.Hj("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", t => {
      let n = null != t && t.status >= 400 ? t.text : null;
      r.Hj("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == t ? void 0 : t.status, " ").concat(null == n ? "" : "and body: ".concat(n)))
    }), e.on("error", (t, n) => {
      if (r.Hj("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == t ? void 0 : t.status, " and body: ").concat(null == n ? void 0 : n.text)), null != t && "parse" in t && t.parse) {
        let n = "[FILTERED]";
        if (E.includes(e.url)) {
          var i, s;
          n = null === (s = e.xhr) || void 0 === s ? void 0 : null === (i = s.responseText) || void 0 === i ? void 0 : i.slice(0, 1e3)
        }
        u.Z.addBreadcrumb({
          category: "superagent",
          message: "Failed to parse HTTP response.",
          data: {
            method: e.method,
            url: e.url,
            responseText: n,
            status: t.status
          }
        })
      }
    })
  },
  interceptResponse(e, t, i) {
    var r, l, u, _, d;
    return 400 === e.statusCode && (null === (r = e.body) || void 0 === r ? void 0 : r.captcha_key) ? (Promise.all([n.e("36514").then(n.bind(n, 475271)), n.e("31177").then(n.bind(n, 353250))]).then(t => {
      let [{
        default: n
      }, {
        extractCaptchaPropsFromResponseBody: i
      }] = t;
      return n.showCaptchaAsync(i(e.body))
    }).then(e => {
      let {
        captcha_key: n,
        captcha_rqtoken: i
      } = e, r = {
        "X-Captcha-Key": n
      };
      null != i && (r["X-Captcha-Rqtoken"] = i), t(r)
    }).catch(i), !0) : 401 === e.statusCode && (null === (l = e.body) || void 0 === l ? void 0 : l.code) === c.evJ.MFA_REQUIRED && (null === (u = e.body) || void 0 === u ? void 0 : u.mfa) ? (Promise.all([n.e("99387"), n.e("52030"), n.e("62344")]).then(n.bind(n, 24031)).then(n => {
      let {
        openMFAModal: r
      } = n;
      r(e.body.mfa, t, i)
    }).catch(i), !0) : (0, a.b)(e.statusCode, null === (_ = e.body) || void 0 === _ ? void 0 : _.code) ? (Promise.resolve().then(n.bind(n, 895886)).then(e => {
      let {
        default: t
      } = e;
      t()
    }), !1) : (0, s.b)(e.statusCode, null === (d = e.body) || void 0 === d ? void 0 : d.code) ? (n.e("76731").then(n.bind(n, 626892)).then(t => {
      var n;
      let {
        default: i
      } = t;
      i(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id)
    }), !1) : ((0, o.X)(e) && n.e("89715").then(n.bind(n, 707708)).then(e => {
      let {
        handleBlockedByProxy: t
      } = e;
      t()
    }), !1)
  }
}), (0, i.Jt)(async e => {
  if (r.Hj("Network", "Request to ".concat(e, " failed, will retry.")), !l.Z.isOnline()) await l.Z.awaitOnline(), r.Hj("Network", "Network detected online, retrying ".concat(e))
})