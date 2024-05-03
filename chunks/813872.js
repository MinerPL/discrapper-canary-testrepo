"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  s = l("481060"),
  i = l("40851"),
  d = l("189432"),
  r = l("189357"),
  o = l("944486"),
  c = l("626135"),
  f = l("981631"),
  M = l("176505"),
  m = l("50493"),
  E = l("689938");

function S(e) {
  let {
    userId: t,
    guildId: l,
    channelId: S,
    location: g,
    onAction: I
  } = e, C = n.useContext(c.AnalyticsContext), _ = (0, i.useWindowDispatch)(), R = (0, u.useStateFromStores)([o.default], () => null != S ? S : o.default.getChannelId(l, !0), [S, l]), A = (0, r.useCanAccessGuildMemberModView)(l, !0);
  return null != l && A ? (0, a.jsx)(s.MenuItem, {
    id: "mod-view",
    label: E.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
    action: () => {
      null == I || I(), (0, d.openGuildMemberModViewSidebar)(l, t, null != R ? R : M.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: m.ModViewPanel.INFO,
        sourceLocation: null != g ? g : C.location
      }), _.dispatch(f.ComponentActions.POPOUT_CLOSE)
    }
  }) : null
}