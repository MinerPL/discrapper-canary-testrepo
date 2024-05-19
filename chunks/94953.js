"use strict";
i.r(t), i.d(t, {
  default: function() {
    return M
  }
}), i("47120");
var n = i("735250"),
  s = i("470079"),
  a = i("442837"),
  u = i("481060"),
  l = i("58540"),
  o = i("100527"),
  d = i("931240"),
  r = i("353093"),
  c = i("314897"),
  S = i("271383"),
  f = i("430824"),
  E = i("496675"),
  N = i("594174"),
  _ = i("981631"),
  g = i("689938");

function M(e) {
  let {
    guildId: t,
    userId: i,
    analyticsLocation: M,
    analyticsLocations: I,
    context: A,
    icon: h
  } = e, T = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]), m = (0, a.useStateFromStores)([c.default], () => c.default.getId()), L = (0, a.useStateFromStores)([N.default], () => N.default.getUser(i)), p = (0, a.useStateFromStores)([S.default], () => S.default.isGuestOrLurker(t, i), [t, i]), O = s.useMemo(() => ({
    [t]: [i]
  }), [t, i]), C = (0, r.isGuildAClan)(T);
  (0, l.useSubscribeGuildMembers)(O);
  let G = A === _.AppContext.POPOUT,
    x = m === i,
    [b, U] = (0, a.useStateFromStoresArray)([E.default], () => {
      if (null == T) return [!1, !1];
      let e = m === i && (E.default.can(_.Permissions.CHANGE_NICKNAME, T) || E.default.can(_.Permissions.MANAGE_NICKNAMES, T));
      return [e, E.default.canManageUser(_.Permissions.MANAGE_NICKNAMES, i, T)]
    }, [m, i, T]),
    j = s.useCallback((e, t) => () => {
      (0, d.adoptClanIdentity)(e, t, o.default.CONTEXT_MENU)
    }, []);
  return null != T && !G && (b || U || x) && null != L && !p && C && L.isStaff() ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.MenuItem, {
      id: "adopt-clan-identity",
      label: g.default.Messages.CLAN_ADOPT_CLAN_IDENTITY,
      icon: h,
      action: j(t, !0)
    }), (0, n.jsx)(u.MenuItem, {
      id: "deadopt-clan-identity",
      label: g.default.Messages.CLAN_CLEAR_CLAN_IDENTITY,
      icon: h,
      action: j(null, null)
    })]
  }) : null
}