"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  r = s("442837"),
  o = s("594174"),
  i = s("51144"),
  u = s("473092"),
  l = s("955708"),
  c = s("850165"),
  E = s("689938"),
  T = s("358733"),
  d = s("282668");

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