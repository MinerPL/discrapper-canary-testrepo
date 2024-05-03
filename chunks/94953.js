"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
}), i("47120");
var s = i("735250"),
  n = i("470079"),
  a = i("442837"),
  l = i("481060"),
  u = i("58540"),
  o = i("931240"),
  d = i("353093"),
  r = i("314897"),
  c = i("271383"),
  S = i("430824"),
  f = i("496675"),
  E = i("594174"),
  N = i("981631"),
  _ = i("689938");

function g(e) {
  let {
    guildId: t,
    userId: i,
    analyticsLocation: g,
    analyticsLocations: M,
    context: I,
    icon: A
  } = e, h = (0, a.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]), T = (0, a.useStateFromStores)([r.default], () => r.default.getId()), L = (0, a.useStateFromStores)([E.default], () => E.default.getUser(i)), m = (0, a.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, i), [t, i]), O = n.useMemo(() => ({
    [t]: [i]
  }), [t, i]), p = (0, d.isGuildAClan)(h);
  (0, u.useSubscribeGuildMembers)(O);
  let G = I === N.AppContext.POPOUT,
    C = T === i,
    [b, x] = (0, a.useStateFromStoresArray)([f.default], () => {
      if (null == h) return [!1, !1];
      let e = T === i && (f.default.can(N.Permissions.CHANGE_NICKNAME, h) || f.default.can(N.Permissions.MANAGE_NICKNAMES, h));
      return [e, f.default.canManageUser(N.Permissions.MANAGE_NICKNAMES, i, h)]
    }, [T, i, h]),
    U = n.useCallback((e, t) => () => {
      (0, o.adoptClanIdentity)(e, t)
    }, []);
  return null != h && !G && (b || x || C) && null != L && !m && p && L.isStaff() ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.MenuItem, {
      id: "adopt-clan-identity",
      label: _.default.Messages.CLAN_ADOPT_CLAN_IDENTITY,
      icon: A,
      action: U(t, !0)
    }), (0, s.jsx)(l.MenuItem, {
      id: "deadopt-clan-identity",
      label: _.default.Messages.CLAN_CLEAR_CLAN_IDENTITY,
      icon: A,
      action: U(null, null)
    })]
  }) : null
}