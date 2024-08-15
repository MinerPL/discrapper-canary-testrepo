n(47120), n(411104);
var r = n(464847),
  i = n(289182),
  a = n(358085),
  s = n(998502);

function o() {
  var e, t, n, r, i, o;
  let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  a.isPlatformEmbedded && s.ZP.updateCrashReporter({
user_id: null !== (e = l.id) && void 0 !== e ? e : '',
username: null !== (t = l.username) && void 0 !== t ? t : '',
email: null !== (n = l.email) && void 0 !== n ? n : '',
sentry: {
  user: {
    id: null !== (r = l.id) && void 0 !== r ? r : '',
    username: null !== (i = l.username) && void 0 !== i ? i : '',
    email: null !== (o = l.email) && void 0 !== o ? o : ''
  }
}
  });
}
t.Z = {
  setUser(e, t, n, r) {
var i;
let a = {
  id: e,
  username: t,
  email: n,
  staff: r
};
null === (i = window.DiscordSentry) || void 0 === i || i.getCurrentScope().setUser(a), o(a);
  },
  clearUser() {
var e;
null === (e = window.DiscordSentry) || void 0 === e || e.getCurrentScope().setUser(null), o();
  },
  setTags(e) {
var t;
null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setTags(e);
  },
  setExtra(e) {
var t;
null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setExtras(e);
  },
  captureException(e, t) {
var n;
let r = (0, i.v)(t);
null === (n = window.DiscordSentry) || void 0 === n || n.withScope(t => {
  var n;
  null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureException(e);
});
  },
  captureCrash(e, t) {
var n;
let r;
let a = (0, i.v)(t);
return null === (n = window.DiscordSentry) || void 0 === n || n.withScope(t => {
  var n;
  t.setExtras(a.extra), t.setTag('crash', 'true'), t.setLevel('fatal'), t.addEventProcessor(e => {
    var t, n;
    let r = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
    return null != r && (r.mechanism = {
      ...r.mechanism,
      handled: !1
    }), e;
  }), r = null === (n = window.DiscordSentry) || void 0 === n ? void 0 : n.captureException(e);
}), r;
  },
  captureMessage(e, t) {
var n;
let r = (0, i.v)(t);
null === (n = window.DiscordSentry) || void 0 === n || n.withScope(t => {
  var n;
  null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureMessage(e);
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