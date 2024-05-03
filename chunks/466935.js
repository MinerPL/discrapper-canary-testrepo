"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("693546"),
  r = n("826581"),
  o = n("246364"),
  u = n("98493"),
  d = n("703656"),
  c = n("669405"),
  f = n("26290"),
  h = n("434479"),
  p = n("981631"),
  m = n("176505"),
  C = n("689938");

function g(e) {
  let {
    guild: t,
    selected: n
  } = e, g = (0, s.useStateFromStores)([r.default], () => r.default.getSubmittedGuildJoinRequestTotal(t.id)), E = null != g ? g : 0;
  return a.useEffect(() => {
    null == g && i.default.fetchGuildJoinRequests({
      guildId: t.id,
      status: o.GuildJoinRequestApplicationStatuses.SUBMITTED,
      limit: u.MEMBER_APPLICATION_FETCH_LIMIT
    })
  }, [t.id, g]), (0, l.jsx)(h.BasicChannelRow, {
    id: "application-review-".concat(t.id),
    renderIcon: e => (0, l.jsx)(c.default, {
      className: e,
      width: 24,
      height: 24
    }),
    text: C.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
    selected: n,
    onClick: () => {
      (0, d.transitionTo)(p.Routes.CHANNEL(t.id, m.StaticChannelRoute.MEMBER_APPLICATIONS))
    },
    trailing: E > 0 ? (0, l.jsx)(f.NumberBadge, {
      count: E
    }) : null
  })
}