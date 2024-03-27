"use strict";
n.r(t), n.d(t, {
  FriendRow: function() {
    return g
  },
  default: function() {
    return S
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("272030"),
  u = n("327037"),
  o = n("145079"),
  d = n("824563"),
  c = n("756507"),
  f = n("713135"),
  h = n("401642"),
  m = n("49111"),
  p = n("782340"),
  E = n("155502");

function g(e) {
  let {
    user: t,
    status: n,
    onSelect: l,
    onContextMenu: r
  } = e, u = (0, s.useStateFromStores)([d.default], () => d.default.isMobileOnline(t.id));
  return (0, a.jsxs)(i.Clickable, {
    className: E.listRow,
    onClick: () => l(t.id),
    onContextMenu: e => r(e, t),
    children: [(0, a.jsx)(i.Avatar, {
      src: t.getAvatarURL(void 0, 40),
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_40,
      status: n,
      isMobile: u,
      className: E.listAvatar
    }), (0, a.jsx)(o.default, {
      user: t,
      className: E.listName,
      discriminatorClass: E.listDiscriminator
    })]
  })
}

function S(e) {
  let t, {
      user: o,
      onClose: d
    } = e,
    S = (0, s.useStateFromStores)([f.default], () => f.default.getMutualFriends(o.id)),
    {
      analyticsLocations: C,
      guildId: _,
      channelId: I,
      messageId: T,
      roleId: v
    } = (0, c.useUserProfileAnalyticsContext)();

  function x(e) {
    d(), (0, h.openUserProfileModal)({
      userId: e,
      guildId: null != _ ? _ : void 0,
      channelId: null != I ? I : void 0,
      messageId: null != T ? T : void 0,
      roleId: null != v ? v : void 0,
      sourceAnalyticsLocations: C,
      analyticsLocation: {
        section: m.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  }

  function N(e, t) {
    (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    })
  }
  return l.useEffect(() => {
    null == S && (0, u.fetchMutualFriends)(o.id)
  }, [S, o.id]), t = null == S ? (0, a.jsx)("div", {
    className: E.empty,
    children: (0, a.jsx)(i.Spinner, {})
  }) : 0 === S.length ? (0, a.jsxs)("div", {
    className: E.empty,
    children: [(0, a.jsx)("div", {
      className: E.emptyIconFriends
    }), (0, a.jsx)("div", {
      className: E.emptyText,
      children: p.default.Messages.NO_MUTUAL_FRIENDS
    })]
  }) : S.map(e => (0, a.jsx)(g, {
    user: e.user,
    status: e.status,
    onSelect: x,
    onContextMenu: N
  }, e.key)), (0, a.jsx)(i.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: t
  })
}