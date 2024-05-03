"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("243778"),
  o = n("79390"),
  u = n("966153"),
  d = n("375954"),
  c = n("423490");

function f(e) {
  let {
    channel: t,
    isOmniMenuOpen: n,
    openOmniMenu: f,
    children: h
  } = e, m = (0, s.useStateFromStores)([d.default], () => d.default.hasCurrentUserSentMessageSinceAppStart()), p = (0, o.useCanPostPollsInChannel)(t), E = (0, o.useCanShowPollsChatInputCoachmarkInGuild)(null == t ? void 0 : t.guild_id), C = (null == t ? void 0 : t.isPrivate()) || E, g = l.useMemo(() => {
    let e = [];
    return m && e.push(i.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2), p && C && e.push(i.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK), e
  }, [m, p, C]);
  return (0, a.jsx)(r.default, {
    contentTypes: g,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e;
      switch (t) {
        case i.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2:
          return (0, a.jsx)(c.OmniButtonNuxAnimation, {
            children: h
          });
        case i.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK:
          return (0, a.jsx)(u.default, {
            markAsDismissed: l,
            onClickCta: f,
            shouldShow: !n,
            children: h
          });
        default:
          return h
      }
    }
  })
}