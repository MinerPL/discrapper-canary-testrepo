"use strict";
n.r(t), n.d(t, {
  FriendRow: function() {
    return C
  },
  default: function() {
    return g
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("239091"),
  o = n("232567"),
  u = n("129861"),
  d = n("158776"),
  c = n("785717"),
  f = n("621853"),
  h = n("171368"),
  m = n("981631"),
  p = n("689938"),
  E = n("521170");

function C(e) {
  let {
    user: t,
    status: n,
    onSelect: l,
    onContextMenu: r
  } = e, o = (0, s.useStateFromStores)([d.default], () => d.default.isMobileOnline(t.id));
  return (0, a.jsxs)(i.Clickable, {
    className: E.listRow,
    onClick: () => l(t.id),
    onContextMenu: e => r(e, t),
    children: [(0, a.jsx)(i.Avatar, {
      src: t.getAvatarURL(void 0, 40),
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_40,
      status: n,
      isMobile: o,
      className: E.listAvatar
    }), (0, a.jsx)(u.default, {
      user: t,
      className: E.listName,
      discriminatorClass: E.listDiscriminator
    })]
  })
}

function g(e) {
  let t, {
      user: u,
      onClose: d
    } = e,
    g = (0, s.useStateFromStores)([f.default], () => f.default.getMutualFriends(u.id)),
    {
      analyticsLocations: S,
      guildId: _,
      channelId: T,
      messageId: I,
      roleId: A
    } = (0, c.useUserProfileAnalyticsContext)();

  function v(e) {
    d(), (0, h.openUserProfileModal)({
      userId: e,
      guildId: null != _ ? _ : void 0,
      channelId: null != T ? T : void 0,
      messageId: null != I ? I : void 0,
      roleId: null != A ? A : void 0,
      sourceAnalyticsLocations: S,
      analyticsLocation: {
        section: m.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  }

  function N(e, t) {
    (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("64409")]).then(n.bind(n, "881351"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    })
  }
  return l.useEffect(() => {
    null == g && (0, o.fetchMutualFriends)(u.id)
  }, [g, u.id]), t = null == g ? (0, a.jsx)("div", {
    className: E.empty,
    children: (0, a.jsx)(i.Spinner, {})
  }) : 0 === g.length ? (0, a.jsxs)("div", {
    className: E.empty,
    children: [(0, a.jsx)("div", {
      className: E.emptyIconFriends
    }), (0, a.jsx)("div", {
      className: E.emptyText,
      children: p.default.Messages.NO_MUTUAL_FRIENDS
    })]
  }) : g.map(e => (0, a.jsx)(C, {
    user: e.user,
    status: e.status,
    onSelect: v,
    onContextMenu: N
  }, e.key)), (0, a.jsx)(i.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: t
  })
}