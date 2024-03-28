"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("470079"),
  s = n("166516"),
  l = n.n(s),
  i = n("525654"),
  r = n.n(i),
  o = n("442837"),
  u = n("888369"),
  d = n("292959"),
  c = n("699516"),
  f = n("340895"),
  E = n("358085"),
  h = n("998502"),
  _ = n("252618"),
  C = n("981631"),
  m = n("689938");
let S = new Set(["Blink", "Gecko", "WebKit"]),
  I = C.NOOP;
if (E.isPlatformEmbedded) I = e => h.default.setBadge(e);
else if (S.has(r().layout)) {
  let e = new(l())({
    animation: "none"
  });
  I = t => {
    try {
      (0, _.setPageTitleNotificationCount)(t), e.badge(-1 === t ? "•" : t)
    } catch (e) {}
  }
}

function p() {
  let e = (0, o.useStateFromStores)([f.default], () => f.default.hasIncomingCalls()),
    t = (0, o.useStateFromStores)([u.default, c.default, d.default], () => {
      let e = u.default.getTotalMentionCount(),
        t = c.default.getPendingCount(),
        n = u.default.hasAnyUnread(),
        a = d.default.getDisableUnreadBadge(),
        s = e + t;
      return 0 === s && n && !a && (s = -1), s
    });
  a.useEffect(() => {
    if (!e) return;
    let t = h.default.bounceDock("critical"),
      n = (0, _.flashPageTitle)({
        messages: [m.default.Messages.INCOMING_CALL],
        count: 50
      });
    return () => {
      null == t || t(), n()
    }
  }, [e]), a.useEffect(() => {
    I(t)
  }, [t]), a.useEffect(() => () => I(0), [])
}