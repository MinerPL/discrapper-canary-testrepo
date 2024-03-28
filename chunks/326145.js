"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("745752"),
  r = n("17181"),
  o = n("689938"),
  u = n("461936");

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, d = s.useCallback(() => {
    null != t && null != n && ((0, i.startOnboarding)(t), (0, r.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]);
  return (0, a.jsx)("div", {
    className: u.container,
    children: (0, a.jsxs)("div", {
      className: u.explainerContainer,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        children: o.default.Messages.ONBOARDING_ERROR_PAGE_TEXT
      }), (0, a.jsx)(l.Button, {
        onClick: d,
        children: (0, a.jsx)(l.Text, {
          variant: "text-md/medium",
          children: o.default.Messages.START_ONBOARDING
        })
      })]
    })
  })
}