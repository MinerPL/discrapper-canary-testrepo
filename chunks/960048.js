n(47120), n(411104);
var r = n(464847),
  i = n(289182),
  a = n(358085),
  o = n(998502);

function s() {
  var e, t, n, r, i, s;
  let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  a.isPlatformEmbedded && o.ZP.updateCrashReporter({
user_id: null !== (e = l.id) && void 0 !== e ? e : '',
username: null !== (t = l.username) && void 0 !== t ? t : '',
email: null !== (n = l.email) && void 0 !== n ? n : '',
sentry: {
  user: {
    id: null !== (r = l.id) && void 0 !== r ? r : '',
    username: null !== (i = l.username) && void 0 !== i ? i : '',
    email: null !== (s = l.email) && void 0 !== s ? s : ''
  }
}
  });
}
t.Z = {
  setUser(e, t, n, r) {
let i = {
  id: e,
  username: t,
  email: n,
  staff: r
};
null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
  e.setUser(i);
}), s(i);
  },
  clearUser() {
null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
  e.setUser(null);
}), s();
  },
  setTags(e) {
null != window.DiscordSentry && window.DiscordSentry.configureScope(t => {
  t.setTags(e);
});
  },
  setExtra(e) {
null != window.DiscordSentry && window.DiscordSentry.configureScope(t => {
  t.setExtras(e);
});
  },
  captureException(e, t) {
let n = (0, i.v)(t);
null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
  null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureException(e);
});
  },
  captureCrash(e, t) {
let n;
let r = (0, i.v)(t);
return null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
  t.setExtras(r.extra), t.setTag('crash', 'true'), t.setLevel('fatal'), t.addEventProcessor(e => {
    var t, n;
    let r = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
    return null != r && (r.mechanism = {
      ...r.mechanism,
      handled: !1
    }), e;
  }), n = window.DiscordSentry.captureException(e);
}), n;
  },
  captureMessage(e, t) {
let n = (0, i.v)(t);
null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
  null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureMessage(e);
});
  },
  addBreadcrumb(e) {
(0, r.Z)(e);
  },
  profiledRootComponent: e => e,
  crash() {
throw Error('crash');
  }
};