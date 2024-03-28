"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n("442837"),
  r = n("207532"),
  o = n("140220"),
  u = n("481051"),
  d = n("871499"),
  c = n("306680"),
  f = n("111583"),
  h = n("459273"),
  m = n("566620"),
  p = n("317381"),
  E = n("918559"),
  C = n("981631"),
  g = n("689938"),
  S = n("658845");

function _(e) {
  let {
    channelId: t,
    className: n,
    ..._
  } = e, T = l.useRef(null), I = (0, i.useStateFromStores)([p.default], () => p.default.getFocusedLayout() === E.FocusedActivityLayouts.RESIZABLE), A = l.useCallback(() => {
    let e = I ? E.FocusedActivityLayouts.NO_CHAT : E.FocusedActivityLayouts.RESIZABLE;
    (0, m.updateFocusedActivityLayout)(e)
  }, [I]), {
    unreadCount: v,
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
  }(t), x = l.useCallback(() => {
    var e;
    null === (e = T.current) || void 0 === e || e.focus()
  }, []);
  (0, h.useComponentAction)({
    event: C.ComponentActions.FOCUS_CHAT_BUTTON,
    handler: x
  });
  let M = I ? g.default.Messages.HIDE_CHAT : g.default.Messages.SHOW_CHAT,
    R = [M];
  N > 0 && R.push(g.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: N
  })), v > 0 && R.push(g.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
  let L = (0, i.useStateFromStores)([p.default], () => p.default.getFocusedLayout()),
    y = N > 0 ? N : v,
    O = y > 0;
  return (0, a.jsxs)("div", {
    className: S.wrapper,
    children: [(0, a.jsx)(d.CenterControlButton, {
      buttonRef: T,
      onClick: A,
      label: M,
      "aria-label": R.join(", "),
      tooltipPosition: "top",
      iconComponent: L === E.FocusedActivityLayouts.NO_CHAT ? o.ChevronLargeUpIcon : r.ChevronLargeDownIcon,
      themeable: !0,
      className: n,
      ..._
    }), O ? (0, a.jsx)(u.default, {
      hasMentions: N > 0,
      truncatedCount: y > 99 ? "99+" : y,
      className: S.badge
    }) : null]
  })
}