"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("850391"),
  o = n("557809"),
  u = n("288518"),
  d = n("486503"),
  c = n("803524"),
  f = n("7643"),
  E = n("949067"),
  h = n("144491"),
  _ = n("208021"),
  C = n("982108"),
  S = n("945330"),
  I = n("664336"),
  m = n("679653"),
  p = n("176347"),
  T = n("782340"),
  g = n("264594"),
  A = n("867453");

function N(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, N = (0, m.default)(t), R = (0, c.useListHasSingleMessageRequest)(), O = (0, c.useListHasSingleSpamMessageRequest)(), v = (0, l.useStateFromStores)([u.default], () => u.default.isMessageRequest(t.id)), L = (0, l.useStateFromStores)([d.default], () => d.default.isSpam(t.id)), M = (0, E.useLongestChannelMessageBeforeReply)(t.id, t.getRecipientId()), P = s.useCallback(() => {
    _.default.closeChannelSidebar(C.MESSAGE_REQUESTS_BASE_CHANNEL_ID), v && R && (0, h.transitionToChannel)(t.id), L && O && (0, h.transitionToChannel)(t.id)
  }, [t.id, L, O, v, R]), y = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(T.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: D
  } = (0, f.useMessageRequestActions)({
    onAcceptSuccess: P,
    onError: y
  });
  if (null == t || !t.isDM()) return null;
  let x = [(0, a.jsx)(I.default.Icon, {
    icon: S.default,
    tooltip: T.default.Messages.CLOSE,
    onClick: () => _.default.closeChannelSidebar(n)
  }, "close")];
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.default, {
      toolbar: x,
      "aria-label": T.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.renderTitle)({
        channel: t,
        channelName: N,
        inSidebar: !0
      })
    }), L && (0, a.jsxs)("div", {
      className: A.hamBanner,
      children: [(0, a.jsx)(i.Text, {
        className: A.hamBannerText,
        variant: "text-sm/normal",
        children: T.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, a.jsx)(i.Button, {
        className: A.hamBannerButton,
        size: i.ButtonSizes.SMALL,
        onClick: () => D(t, M),
        children: T.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: g.chat,
      children: (0, a.jsx)(p.default, {
        channel: t,
        guild: null,
        chatInputType: r.ChatInputTypes.SIDEBAR
      }, t.id)
    })]
  })
}