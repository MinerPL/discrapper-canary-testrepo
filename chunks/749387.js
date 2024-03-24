"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("669491"),
  r = n("77078"),
  o = n("630086"),
  u = n("716241"),
  d = n("442939"),
  c = n("393414"),
  f = n("697218"),
  h = n("953109"),
  C = n("774223"),
  p = n("158998"),
  m = n("754493"),
  E = n("813531"),
  g = n("395635"),
  I = n("49111"),
  S = n("782340"),
  _ = n("307994");

function N(e) {
  var t;
  let {
    userId: n,
    applicationId: a
  } = e, i = (0, s.useStateFromStores)([f.default], () => f.default.getUser(n)), o = null !== (t = p.default.getGlobalName(i)) && void 0 !== t ? t : p.default.getUserTag(i), u = (0, d.useGetOrFetchApplication)(a);
  return null == i ? null : (0, l.jsxs)("div", {
    className: _.broadcast,
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: _.inline,
        children: [(0, l.jsx)(r.Avatar, {
          size: r.AvatarSizes.SIZE_16,
          src: i.getAvatarURL(null, 16),
          "aria-label": o
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: o
        })]
      }), (0, l.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: (null == u ? void 0 : u.name) != null ? S.default.Messages.STREAMING.format({
          name: u.name
        }) : S.default.Messages.STREAMING_A_GAME
      })]
    }), (0, l.jsx)(h.default, {
      game: u
    })]
  })
}

function T(e) {
  let {
    closePopout: t
  } = e, n = (0, E.default)(), s = n.slice(0, 3), d = (0, m.default)(), f = n.length - s.length;
  return a.useEffect(() => {
    u.default.trackWithMetadata(I.AnalyticEvents.BROADCAST_POPOUT_VIEWED, {
      num_broadcasts_shown: s.length,
      num_active_broadcasts: n.length,
      is_broadcasting: d
    })
  }, [n.length, s.length, d]), (0, l.jsxs)("div", {
    className: _.container,
    children: [(0, l.jsxs)("div", {
      className: _.header,
      children: [(0, l.jsxs)("div", {
        className: _.inline,
        children: [(0, l.jsx)(C.default, {
          color: i.default.colors.HEADER_PRIMARY.css,
          height: 16,
          width: 16
        }), (0, l.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: S.default.Messages.LIVE_BROADCASTS
        })]
      }), (0, l.jsx)(g.default, {})]
    }), s.map((e, t) => (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(N, {
        ...e
      }, e.userId), t !== s.length - 1 && (0, l.jsx)("hr", {
        className: _.separator
      })]
    })), f > 0 && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("hr", {
        className: _.separator
      }), (0, l.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: S.default.Messages.MORE_OPEN_BROADCASTS.format({
          count: f
        })
      })]
    }), (0, l.jsx)(r.Button, {
      onClick: () => {
        (0, c.transitionTo)(I.Routes.ME), o.default.setSection(I.FriendsSections.ONLINE), u.default.trackWithMetadata(I.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: n.length,
          friends_tab_clicked: !1,
          is_broadcasting: d
        }), t()
      },
      className: _.button,
      children: S.default.Messages.VIEW_OPEN_BROADCASTS
    })]
  })
}