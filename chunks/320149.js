"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("541716"),
  o = n("910611"),
  u = n("355298"),
  d = n("333984"),
  c = n("26373"),
  f = n("486622"),
  E = n("718538"),
  h = n("359110"),
  _ = n("6025"),
  C = n("433355"),
  S = n("465670"),
  m = n("502568"),
  p = n("933557"),
  I = n("287746"),
  T = n("689938"),
  g = n("63733"),
  A = n("38156");

function N(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, N = (0, p.default)(t), v = (0, c.useListHasSingleMessageRequest)(), R = (0, c.useListHasSingleSpamMessageRequest)(), L = (0, l.useStateFromStores)([u.default], () => u.default.isMessageRequest(t.id)), O = (0, l.useStateFromStores)([d.default], () => d.default.isSpam(t.id)), M = (0, E.useLongestChannelMessageBeforeReply)(t.id, t.getRecipientId()), P = s.useCallback(() => {
    _.default.closeChannelSidebar(C.MESSAGE_REQUESTS_BASE_CHANNEL_ID), L && v && (0, h.transitionToChannel)(t.id), O && R && (0, h.transitionToChannel)(t.id)
  }, [t.id, O, R, L, v]), y = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(T.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: x
  } = (0, f.useMessageRequestActions)({
    onAcceptSuccess: P,
    onError: y
  });
  if (null == t || !t.isDM()) return null;
  let D = [(0, a.jsx)(m.default.Icon, {
    icon: S.default,
    tooltip: T.default.Messages.CLOSE,
    onClick: () => _.default.closeChannelSidebar(n)
  }, "close")];
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(m.default, {
      toolbar: D,
      "aria-label": T.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.renderTitle)({
        channel: t,
        channelName: N,
        inSidebar: !0
      })
    }), O && (0, a.jsxs)("div", {
      className: A.hamBanner,
      children: [(0, a.jsx)(i.Text, {
        className: A.__invalid_hamBannerText,
        variant: "text-sm/normal",
        children: T.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, a.jsx)(i.Button, {
        className: A.hamBannerButton,
        size: i.ButtonSizes.SMALL,
        onClick: () => x(t, M),
        children: T.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: g.chat,
      children: (0, a.jsx)(I.default, {
        channel: t,
        guild: null,
        chatInputType: r.ChatInputTypes.SIDEBAR
      }, t.id)
    })]
  })
}