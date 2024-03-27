"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n("446674"),
  r = n("447289"),
  u = n("950019"),
  o = n("996496"),
  d = n("981913"),
  c = n("660478"),
  f = n("191542"),
  h = n("378765"),
  m = n("550766"),
  p = n("191225"),
  E = n("272505"),
  g = n("49111"),
  S = n("782340"),
  C = n("518958");

function _(e) {
  let {
    channelId: t,
    className: n,
    ..._
  } = e, I = l.useRef(null), T = (0, i.useStateFromStores)([p.default], () => p.default.getFocusedLayout() === E.FocusedActivityLayouts.RESIZABLE), v = l.useCallback(() => {
    let e = T ? E.FocusedActivityLayouts.NO_CHAT : E.FocusedActivityLayouts.RESIZABLE;
    (0, m.updateFocusedActivityLayout)(e)
  }, [T]), {
    unreadCount: x,
    mentionCount: N
  } = function(e) {
    let t = (0, i.useStateFromStores)([f.default], () => !(0, s.isEmpty)(f.default.getTypingUsers(e)), [e]),
      {
        unreadCount: n,
        mentionCount: a
      } = (0, i.useStateFromStoresObject)([c.default], () => ({
        unreadCount: c.default.getUnreadCount(e),
        mentionCount: c.default.getMentionCount(e)
      }), [e]);
    return {
      unreadCount: n,
      mentionCount: a,
      isTyping: t
    }
  }(t), A = l.useCallback(() => {
    var e;
    null === (e = I.current) || void 0 === e || e.focus()
  }, []);
  (0, h.useComponentAction)({
    event: g.ComponentActions.FOCUS_CHAT_BUTTON,
    handler: A
  });
  let M = T ? S.default.Messages.HIDE_CHAT : S.default.Messages.SHOW_CHAT,
    R = [M];
  N > 0 && R.push(S.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: N
  })), x > 0 && R.push(S.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
  let j = (0, i.useStateFromStores)([p.default], () => p.default.getFocusedLayout()),
    L = N > 0 ? N : x,
    y = L > 0;
  return (0, a.jsxs)("div", {
    className: C.wrapper,
    children: [(0, a.jsx)(d.CenterControlButton, {
      buttonRef: I,
      onClick: v,
      label: M,
      "aria-label": R.join(", "),
      tooltipPosition: "top",
      iconComponent: j === E.FocusedActivityLayouts.NO_CHAT ? u.ChevronLargeUpIcon : r.ChevronLargeDownIcon,
      themeable: !0,
      className: n,
      ..._
    }), y ? (0, a.jsx)(o.default, {
      hasMentions: N > 0,
      truncatedCount: L > 99 ? "99+" : L,
      className: C.badge
    }) : null]
  })
}