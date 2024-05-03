"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  d = l("481060"),
  s = l("58540"),
  r = l("300284"),
  i = l("484459"),
  o = l("314897"),
  f = l("271383"),
  c = l("430824"),
  E = l("496675"),
  m = l("594174"),
  M = l("981631"),
  S = l("689938"),
  _ = l("931100");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: I,
    analyticsLocations: R,
    context: C,
    icon: A
  } = e, T = c.default.getGuild(t), N = o.default.getId(), h = (0, n.useStateFromStores)([m.default], () => m.default.getUser(g)), v = (0, n.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, g), [t, g]);
  (0, n.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let O = u.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, s.useSubscribeGuildMembers)(O);
  let p = C === M.AppContext.POPOUT,
    x = (0, r.default)({
      guild: T,
      analyticsLocation: I
    });
  if (null == T || p) return null;
  let b = N === g && (E.default.can(M.Permissions.CHANGE_NICKNAME, T) || E.default.can(M.Permissions.MANAGE_NICKNAMES, T)),
    U = N === g,
    F = E.default.canManageUser(M.Permissions.MANAGE_NICKNAMES, g, T);
  if (!(b || F || U) || null == h || v) return null;
  let P = T.hasFeature(M.GuildFeatures.HUB) ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
    j = U ? P : S.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(d.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: _.labelWrapper,
      children: (0, a.jsx)("span", {
        className: _.label,
        children: j
      })
    }),
    icon: A,
    action: () => {
      U ? ((0, i.default)(h.id, h.getAvatarURL(t, 80), {
        guildId: t
      }), x()) : (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("17712")]).then(l.bind(l, "620021"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: h,
          analyticsSource: I,
          analyticsLocations: R
        })
      })
    }
  })
}