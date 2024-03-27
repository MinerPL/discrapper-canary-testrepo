"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("151426"),
  r = n("384997"),
  o = n("562228"),
  u = n("525503"),
  d = n("377253"),
  c = n("891302");

function f(e) {
  let {
    channel: t,
    isOmniMenuOpen: n,
    openOmniMenu: f,
    children: h
  } = e, C = (0, l.useStateFromStores)([d.default], () => d.default.hasCurrentUserSentMessageSinceAppStart()), p = (0, c.useActivitiesInTextOnboardingVisibility)(t, "ChannelOmniButtonNux"), m = (0, o.useCanPostPollsInChannel)(t), E = (0, o.useCanShowPollsChatInputCoachmarkInGuild)(null == t ? void 0 : t.guild_id), g = a.useMemo(() => {
    let e = [];
    return C && (null == p ? void 0 : p.desktopThrobberEnabled) && e.push(i.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX), m && E && e.push(i.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK), e
  }, [C, null == p ? void 0 : p.desktopThrobberEnabled, m, E]);
  return (0, s.jsx)(r.default, {
    contentTypes: g,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: a
      } = e;
      switch (t) {
        case i.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX:
          return (0, s.jsx)(c.OmniButtonNuxAnimation, {
            children: h
          });
        case i.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK:
          return (0, s.jsx)(u.default, {
            markAsDismissed: a,
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