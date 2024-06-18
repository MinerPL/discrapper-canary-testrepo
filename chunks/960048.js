"use strict";
n(47120), n(411104);
var i = n(464847),
  r = n(289182),
  s = n(358085),
  o = n(998502);

function a() {
  var e, t, n, i, r, a;
  let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  s.isPlatformEmbedded && o.ZP.updateCrashReporter({
    user_id: null !== (e = l.id) && void 0 !== e ? e : "",
    username: null !== (t = l.username) && void 0 !== t ? t : "",
    email: null !== (n = l.email) && void 0 !== n ? n : "",
    sentry: {
      user: {
        id: null !== (i = l.id) && void 0 !== i ? i : "",
        username: null !== (r = l.username) && void 0 !== r ? r : "",
        email: null !== (a = l.email) && void 0 !== a ? a : ""
      }
    }
  })
}
t.Z = {
  setUser(e, t, n, i) {
    let r = {
      id: e,
      username: t,
      email: n,
      staff: i
    };
    null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
      e.setUser(r)
    }), a(r)
  },
  clearUser() {
    null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
      e.setUser(null)
    }), a()
  },
  setTags(e) {
    null != window.DiscordSentry && window.DiscordSentry.configureScope(t => {
      t.setTags(e)
    })
  },
  setExtra(e) {
    null != window.DiscordSentry && window.DiscordSentry.configureScope(t => {
      t.setExtras(e)
    })
  },
  captureException(e, t) {
    let n = (0, r.v)(t);
    null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
      null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureException(e)
    })
  },
  captureCrash(e, t) {
    let n;
    let i = (0, r.v)(t);
    return null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
      t.setExtras(i.extra), t.setTag("crash", "true"), t.setLevel("fatal"), t.addEventProcessor(e => {
        var t, n;
        let i = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
        return null != i && (i.mechanism = {
          ...i.mechanism,
          handled: !1
        }), e
      }), n = window.DiscordSentry.captureException(e)
    }), n
  },
  captureMessage(e, t) {
    let n = (0, r.v)(t);
    null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
      null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureMessage(e)
    })
  },
  addBreadcrumb(e) {
    (0, i.Z)(e)
  },
  profiledRootComponent: e => e,
  crash() {
    throw Error("crash")
  }
}