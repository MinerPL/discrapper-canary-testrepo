"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("524437"),
  i = n("475179"),
  r = n("561472"),
  o = n("287746"),
  u = n("325708"),
  d = n("541716"),
  c = n("605236"),
  f = n("703558"),
  h = n("974029"),
  m = n("465670"),
  p = n("502568"),
  E = n("585483"),
  C = n("909820"),
  g = n("981631"),
  S = n("921944"),
  _ = n("689938"),
  T = n("586760");
t.default = function(e) {
  let {
    channel: t,
    guild: n,
    maxWidth: I
  } = e;
  l.useEffect(() => {
    (0, c.markDismissibleContentAsDismissed)(s.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
      dismissAction: S.ContentDismissActionType.AUTO
    })
  }, []);
  let A = l.useCallback(() => {
      i.default.updateChatOpen(t.id, !1), E.ComponentDispatch.safeDispatch(g.ComponentActions.FOCUS_CHAT_BUTTON)
    }, [t.id]),
    v = (0, a.jsx)(p.default.Icon, {
      icon: m.default,
      tooltip: _.default.Messages.CLOSE,
      onClick: A
    });
  return (0, a.jsxs)(u.default, {
    sidebarType: u.ChatSidebarType.CallChatSidebar,
    maxWidth: I,
    floatingLayer: C.default,
    children: [(0, a.jsx)(r.default, {
      channel: t,
      draftType: f.DraftType.ChannelMessage
    }), (0, a.jsxs)(p.default, {
      toolbar: v,
      "aria-label": _.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: [(0, a.jsx)(p.default.Icon, {
        icon: h.default,
        disabled: !0,
        "aria-label": _.default.Messages.VOICE_CHAT_TEXT_CHANNEL
      }), (0, a.jsx)(p.default.Title, {
        children: t.name
      })]
    }), (0, a.jsx)("div", {
      className: T.chat,
      children: (0, a.jsx)(o.default, {
        channel: t,
        guild: n,
        chatInputType: d.ChatInputTypes.SIDEBAR
      }, t.id)
    })]
  })
}