"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var n = s("37983");
s("884691");
var a = s("77078"),
  r = s("446674"),
  o = s("697218"),
  i = s("158998"),
  u = s("217736"),
  l = s("33320"),
  c = s("302577"),
  E = s("782340"),
  T = s("932379"),
  d = s("546597");

function N(e) {
  let {
    senderId: t,
    trackAnalyticsEvent: s,
    onNavigate: N
  } = e, I = (0, r.useStateFromStores)([o.default], () => {
    let e = o.default.getUser(t);
    return i.default.getName(e)
  });
  return (0, n.jsx)(c.default, {
    header: E.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
    description: E.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
      username: I
    }),
    heroImageSrc: d,
    heroImageAlt: E.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
    children: (0, n.jsxs)("div", {
      className: T.buttonContainer,
      children: [(0, n.jsx)(a.Button, {
        color: a.Button.Colors.BRAND_NEW,
        size: a.Button.Sizes.LARGE,
        className: T.button,
        onClick: () => {
          N(l.InappropriateConversationModalSlideKeys.TAKE_ACTION), s(u.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION)
        },
        children: E.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
      }), (0, n.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        size: a.Button.Sizes.LARGE,
        className: T.button,
        onClick: () => {
          N(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS), s(u.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        },
        children: E.default.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
      })]
    })
  })
}