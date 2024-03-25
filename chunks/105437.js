"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("884691"),
  s = n("386411"),
  l = n.n(s),
  i = n("597755"),
  r = n.n(i),
  o = n("446674"),
  u = n("952451"),
  d = n("385649"),
  c = n("27618"),
  f = n("31957"),
  E = n("773336"),
  h = n("50885"),
  _ = n("69927"),
  C = n("49111"),
  S = n("782340");
let I = new Set(["Blink", "Gecko", "WebKit"]),
  m = C.NOOP;
if (E.isPlatformEmbedded) m = e => h.default.setBadge(e);
else if (I.has(r.layout)) {
  let e = new l({
    animation: "none"
  });
  m = t => {
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
        messages: [S.default.Messages.INCOMING_CALL],
        count: 50
      });
    return () => {
      null == t || t(), n()
    }
  }, [e]), a.useEffect(() => {
    m(t)
  }, [t]), a.useEffect(() => () => m(0), [])
}