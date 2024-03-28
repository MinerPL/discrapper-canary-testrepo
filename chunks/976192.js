"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  d = l("481060"),
  s = l("58540"),
  r = l("300284"),
  i = l("484459"),
  o = l("314897"),
  f = l("271383"),
  c = l("430824"),
  m = l("496675"),
  M = l("594174"),
  E = l("981631"),
  S = l("689938"),
  _ = l("18641");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: I,
    analyticsLocations: C,
    context: R,
    icon: N
  } = e, A = c.default.getGuild(t), T = o.default.getId(), v = (0, u.useStateFromStores)([M.default], () => M.default.getUser(g)), h = (0, u.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, g), [t, g]);
  (0, u.useStateFromStores)([m.default], () => m.default.getGuildVersion(t), [t]);
  let O = n.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, s.useSubscribeGuildMembers)(O);
  let x = R === E.AppContext.POPOUT,
    p = (0, r.default)({
      guild: A,
      analyticsLocation: I
    });
  if (null == A || x) return null;
  let F = T === g && (m.default.can(E.Permissions.CHANGE_NICKNAME, A) || m.default.can(E.Permissions.MANAGE_NICKNAMES, A)),
    b = T === g,
    U = m.default.canManageUser(E.Permissions.MANAGE_NICKNAMES, g, A);
  if (!(F || U || b) || null == v || h) return null;
  let L = A.hasFeature(E.GuildFeatures.HUB) ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
    j = b ? L : S.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(d.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: _.labelWrapper,
      children: (0, a.jsx)("span", {
        className: _.label,
        children: j
      })
    }),
    icon: N,
    action: () => {
      b ? ((0, i.default)(v.id, v.getAvatarURL(t, 80), {
        guildId: t
      }), p()) : (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("17712")]).then(l.bind(l, "620021"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: v,
          analyticsSource: I,
          analyticsLocations: C
        })
      })
    }
  })
}