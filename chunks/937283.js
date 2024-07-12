t.d(n, {
  Z: function() {
return x;
  }
});
var l = t(735250),
  s = t(470079),
  o = t(442837),
  i = t(100527),
  a = t(906732),
  r = t(613464),
  d = t(6025),
  c = t(433355),
  u = t(430824),
  _ = t(981631),
  E = t(455136);

function x(e) {
  let {
guildId: n
  } = e, t = (0, o.e7)([u.Z], () => u.Z.getGuild(n)), {
analyticsLocations: x
  } = (0, a.ZP)(i.Z.MEMBER_SAFETY_PAGE), I = (0, o.e7)([c.ZP], () => c.ZP.getGuildSidebarState(n), [n]), C = s.useCallback(() => {
d.Z.closeGuildSidebar(n);
  }, [n]), N = null != I;
  return null != t && N && null != I ? (0, l.jsx)(a.Gt, {
value: x,
children: (0, l.jsx)('div', {
  className: E.__invalid_sidebarContainer,
  style: {
    width: _.$Y6
  },
  children: (0, l.jsx)(r.Z, {
    userId: I.details.userId,
    guildId: I.details.guildId,
    onClose: C
  })
})
  }) : null;
}