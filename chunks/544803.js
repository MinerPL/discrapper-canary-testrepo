"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("692547"),
  r = n("481060"),
  o = n("758059"),
  u = n("367907"),
  d = n("835473"),
  c = n("703656"),
  f = n("594174"),
  h = n("366695"),
  C = n("436088"),
  p = n("51144"),
  m = n("158631"),
  g = n("143614"),
  E = n("787740"),
  S = n("981631"),
  _ = n("689938"),
  I = n("161016");

function N(e) {
  var t;
  let {
    userId: n,
    applicationId: a
  } = e, i = (0, s.useStateFromStores)([f.default], () => f.default.getUser(n)), o = null !== (t = p.default.getGlobalName(i)) && void 0 !== t ? t : p.default.getUserTag(i), u = (0, d.useGetOrFetchApplication)(a);
  return null == i ? null : (0, l.jsxs)("div", {
    className: I.broadcast,
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: I.inline,
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
        children: (null == u ? void 0 : u.name) != null ? _.default.Messages.STREAMING.format({
          name: u.name
        }) : _.default.Messages.STREAMING_A_GAME
      })]
    }), (0, l.jsx)(h.default, {
      game: u
    })]
  })
}

function T(e) {
  let {
    closePopout: t
  } = e, n = (0, g.default)(), s = n.slice(0, 3), d = (0, m.default)(), f = n.length - s.length;
  return a.useEffect(() => {
    u.default.trackWithMetadata(S.AnalyticEvents.BROADCAST_POPOUT_VIEWED, {
      num_broadcasts_shown: s.length,
      num_active_broadcasts: n.length,
      is_broadcasting: d
    })
  }, [n.length, s.length, d]), (0, l.jsxs)("div", {
    className: I.container,
    children: [(0, l.jsxs)("div", {
      className: I.header,
      children: [(0, l.jsxs)("div", {
        className: I.inline,
        children: [(0, l.jsx)(C.default, {
          color: i.default.colors.HEADER_PRIMARY.css,
          height: 16,
          width: 16
        }), (0, l.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: _.default.Messages.LIVE_BROADCASTS
        })]
      }), (0, l.jsx)(E.default, {})]
    }), s.map((e, t) => (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(N, {
        ...e
      }, e.userId), t !== s.length - 1 && (0, l.jsx)("hr", {
        className: I.separator
      })]
    })), f > 0 && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("hr", {
        className: I.separator
      }), (0, l.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: _.default.Messages.MORE_OPEN_BROADCASTS.format({
          count: f
        })
      })]
    }), (0, l.jsx)(r.Button, {
      onClick: () => {
        (0, c.transitionTo)(S.Routes.ME), o.default.setSection(S.FriendsSections.ONLINE), u.default.trackWithMetadata(S.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: n.length,
          friends_tab_clicked: !1,
          is_broadcasting: d
        }), t()
      },
      className: I.button,
      children: _.default.Messages.VIEW_OPEN_BROADCASTS
    })]
  })
}