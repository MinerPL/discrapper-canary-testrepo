"use strict";
n.r(t), n.d(t, {
  GuildNewMemberActionsProgressBar: function() {
    return g
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("44315"),
  o = n("563534"),
  u = n("846121"),
  d = n("703656"),
  c = n("259580"),
  f = n("981631"),
  h = n("176505"),
  C = n("689938"),
  p = n("880031");

function m(e, t) {
  return (0, l.jsx)(i.Text, {
    variant: "text-xs/bold",
    color: "text-normal",
    children: e
  }, t)
}
let g = a.memo(function(e) {
  let {
    guild: t
  } = e, n = (0, s.useStateFromStores)([o.default], () => o.default.getNewMemberActions(t.id), [t.id]), g = (0, s.useStateFromStores)([u.default], () => u.default.getCompletedActions(t.id)), E = a.useMemo(() => {
    if (null == n || null == g) return 0;
    let e = 0;
    return n.forEach(t => {
      null != g[t.channelId] && e++
    }), e
  }, [g, n]), S = null == n ? 0 : n.length;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.Clickable, {
      className: p.progressBarContainer,
      onClick: function() {
        (0, d.transitionTo)(f.Routes.CHANNEL(t.id, h.StaticChannelRoute.GUILD_HOME))
      },
      children: [(0, l.jsxs)("div", {
        className: p.progressBarText,
        children: [(0, l.jsx)(i.Heading, {
          variant: "heading-sm/bold",
          children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED
        }), (0, l.jsxs)("div", {
          className: p.rightContainer,
          children: [(0, l.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: p.rightText,
            children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format({
              numberHook: m,
              total: S.toString(),
              completed: E.toString()
            })
          }), (0, l.jsx)(c.default, {
            className: p.arrow,
            width: 16,
            height: 16,
            direction: c.default.Directions.RIGHT
          })]
        })]
      }), (0, l.jsx)(i.Progress, {
        className: p.progressBar,
        foregroundGradientColor: [(0, r.getColor)(f.Color.GREEN_300), (0, r.getColor)(f.Color.GREEN_230)],
        percent: E / S * 100 + 3,
        animate: !0
      })]
    }), (0, l.jsx)("div", {
      role: "separator",
      className: p.divider
    })]
  })
})