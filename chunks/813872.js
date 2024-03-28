"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  i = l("481060"),
  s = l("40851"),
  d = l("189432"),
  r = l("189357"),
  o = l("944486"),
  c = l("626135"),
  f = l("981631"),
  m = l("176505"),
  M = l("50493"),
  E = l("689938");

function S(e, t, l, S) {
  let g = n.useContext(c.AnalyticsContext),
    I = (0, s.useWindowDispatch)(),
    C = (0, u.useStateFromStores)([o.default], () => null != l ? l : o.default.getChannelId(t, !0), [l, t]),
    _ = (0, r.useCanAccessGuildMemberModView)(t, !0);
  return null != t && _ ? (0, a.jsx)(i.MenuItem, {
    id: "mod-view",
    label: E.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
    action: () => {
      (0, d.openGuildMemberModViewSidebar)(t, e, null != C ? C : m.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: M.ModViewPanel.INFO,
        sourceLocation: null != S ? S : g.location
      }), I.dispatch(f.ComponentActions.POPOUT_CLOSE)
    }
  }) : null
}