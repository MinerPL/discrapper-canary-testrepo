"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var n = a("37983"),
  l = a("884691"),
  s = a("446674"),
  u = a("77078"),
  i = a("750560"),
  r = a("38766"),
  d = a("506885"),
  o = a("271938"),
  c = a("26989"),
  f = a("305961"),
  E = a("957255"),
  C = a("697218"),
  h = a("49111"),
  v = a("782340"),
  I = a("576398");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: M,
    analyticsLocations: m,
    context: N,
    icon: _
  } = e, p = f.default.getGuild(t), L = o.default.getId(), S = (0, s.useStateFromStores)([C.default], () => C.default.getUser(g)), A = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, g), [t, g]);
  (0, s.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let V = l.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, i.useSubscribeGuildMembers)(V);
  let G = N === h.AppContext.POPOUT,
    x = (0, r.default)({
      guild: p,
      analyticsLocation: M
    });
  if (null == p || G) return null;
  let H = L === g && (E.default.can(h.Permissions.CHANGE_NICKNAME, p) || E.default.can(h.Permissions.MANAGE_NICKNAMES, p)),
    T = L === g,
    O = E.default.canManageUser(h.Permissions.MANAGE_NICKNAMES, g, p);
  if (!(H || O || T) || null == S || A) return null;
  let b = p.hasFeature(h.GuildFeatures.HUB),
    U = b ? v.default.Messages.HUB_EDIT_PROFILE : v.default.Messages.CHANGE_IDENTITY,
    D = T ? U : v.default.Messages.CHANGE_NICKNAME;
  return (0, n.jsx)(u.MenuItem, {
    id: "change-nickname",
    label: (0, n.jsx)("div", {
      className: I.labelWrapper,
      children: (0, n.jsx)("span", {
        className: I.label,
        children: D
      })
    }),
    icon: _,
    action: () => {
      T ? ((0, d.default)(S.id, S.getAvatarURL(t, 80), {
        guildId: t
      }), x()) : (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await a.el("59709").then(a.bind(a, "59709"));
        return a => (0, n.jsx)(e, {
          ...a,
          guildId: t,
          user: S,
          analyticsSource: M,
          analyticsLocations: m
        })
      })
    }
  })
}