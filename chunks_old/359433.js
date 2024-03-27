"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("37983"),
  n = l("884691"),
  u = l("446674"),
  i = l("77078"),
  d = l("244201"),
  s = l("994906"),
  r = l("459824"),
  o = l("18494"),
  c = l("599110"),
  f = l("49111"),
  E = l("724210"),
  M = l("789150"),
  S = l("782340");

function m(e, t, l, m) {
  let I = n.useContext(c.AnalyticsContext),
    g = (0, d.useWindowDispatch)(),
    _ = (0, u.useStateFromStores)([o.default], () => null != l ? l : o.default.getChannelId(t, !0), [l, t]),
    h = (0, r.useCanAccessGuildMemberModView)(t, !0);
  return null != t && h ? (0, a.jsx)(i.MenuItem, {
    id: "mod-view",
    label: S.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
    action: () => {
      (0, s.openGuildMemberModViewSidebar)(t, e, null != _ ? _ : E.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: M.ModViewPanel.INFO,
        sourceLocation: null != m ? m : I.location
      }), g.dispatch(f.ComponentActions.POPOUT_CLOSE)
    }
  }) : null
}