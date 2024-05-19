"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("317632"),
  r = n("602478"),
  o = n("360629"),
  u = n("306680"),
  d = n("594174"),
  c = n("837062"),
  f = n("502568"),
  E = n("280763"),
  _ = n("178088"),
  m = n("222940"),
  T = n("490897"),
  I = n("689938"),
  p = n("75028");

function h(e) {
  let {
    onOpen: t,
    onClose: n,
    className: h
  } = e, N = (0, o.useInDesktopNotificationCenterExperiment)(), S = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), C = a.useRef(null), A = (0, l.useStateFromStores)([u.default], () => !!N && (null == S ? void 0 : S.id) != null && u.default.getMentionCount(S.id, T.ReadStateTypes.NOTIFICATION_CENTER) > 0), {
    enabled: g
  } = r.default.useExperiment({
    location: "RecentsButton"
  }, {
    autoTrackExposure: !1
  }), M = (0, l.useStateFromStores)([i.default], () => g && i.default.getUnseenInviteCount() > 0);
  return (0, s.jsx)(_.RecentsPopout, {
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: A
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n) => (0, s.jsxs)("div", {
      ref: C,
      className: p.recentsIcon,
      children: [g && (0, s.jsx)(m.default, {
        inboxIconRef: C,
        recentsPopoutShown: t
      }), (0, s.jsx)(f.Icon, {
        ...n,
        className: h,
        onClick: e,
        icon: c.default,
        "aria-label": I.default.Messages.INBOX,
        tooltip: t ? null : I.default.Messages.INBOX,
        selected: t,
        showBadge: A || M,
        children: (0, s.jsx)(E.default, {
          className: p.todoBadge
        })
      })]
    })
  })
}