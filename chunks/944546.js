"use strict";
n.r(t), n.d(t, {
  FriendRow: function() {
    return g
  },
  default: function() {
    return S
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("239091"),
  o = n("232567"),
  u = n("129861"),
  d = n("906732"),
  c = n("158776"),
  f = n("785717"),
  h = n("621853"),
  m = n("171368"),
  p = n("981631"),
  E = n("689938"),
  C = n("613398");

function g(e) {
  let {
    user: t,
    status: n,
    onSelect: l,
    onContextMenu: r
  } = e, o = (0, s.useStateFromStores)([c.default], () => c.default.isMobileOnline(t.id));
  return (0, a.jsxs)(i.Clickable, {
    className: C.listRow,
    onClick: () => l(t.id),
    onContextMenu: e => r(e, t),
    children: [(0, a.jsx)(i.Avatar, {
      src: t.getAvatarURL(void 0, 40),
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_40,
      status: n,
      isMobile: o,
      className: C.listAvatar
    }), (0, a.jsx)(u.default, {
      user: t,
      className: C.listName,
      discriminatorClass: C.listDiscriminator
    })]
  })
}

function S(e) {
  let t, {
      user: u,
      onClose: c
    } = e,
    S = (0, s.useStateFromStores)([h.default], () => h.default.getMutualFriends(u.id)),
    {
      analyticsLocations: _
    } = (0, d.default)(),
    {
      guildId: T,
      channelId: I,
      messageId: A,
      roleId: N
    } = (0, f.useUserProfileAnalyticsContext)();

  function v(e) {
    c(), (0, m.openUserProfileModal)({
      userId: e,
      guildId: T,
      channelId: I,
      messageId: A,
      roleId: N,
      sourceAnalyticsLocations: _,
      analyticsLocation: {
        section: p.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  }

  function x(e, t) {
    (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("64409")]).then(n.bind(n, "881351"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    })
  }
  return l.useEffect(() => {
    null == S && (0, o.fetchMutualFriends)(u.id)
  }, [S, u.id]), t = null == S ? (0, a.jsx)("div", {
    className: C.empty,
    children: (0, a.jsx)(i.Spinner, {})
  }) : 0 === S.length ? (0, a.jsxs)("div", {
    className: C.empty,
    children: [(0, a.jsx)("div", {
      className: C.emptyIconFriends
    }), (0, a.jsx)("div", {
      className: C.emptyText,
      children: E.default.Messages.NO_MUTUAL_FRIENDS
    })]
  }) : S.map(e => (0, a.jsx)(g, {
    user: e.user,
    status: e.status,
    onSelect: v,
    onContextMenu: x
  }, e.key)), (0, a.jsx)(i.ScrollerThin, {
    className: C.listScroller,
    fade: !0,
    children: t
  })
}