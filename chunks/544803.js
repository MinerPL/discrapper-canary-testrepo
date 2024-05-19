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
  m = n("436088"),
  C = n("51144"),
  p = n("158631"),
  g = n("143614"),
  E = n("787740"),
  _ = n("981631"),
  S = n("689938"),
  I = n("637861");

function N(e) {
  var t;
  let {
    userId: n,
    applicationId: a
  } = e, i = (0, s.useStateFromStores)([f.default], () => f.default.getUser(n)), o = null !== (t = C.default.getGlobalName(i)) && void 0 !== t ? t : C.default.getUserTag(i), u = (0, d.useGetOrFetchApplication)(a);
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
  } = e, n = (0, g.default)(), s = n.slice(0, 3), d = (0, p.default)(), f = n.length - s.length;
  return a.useEffect(() => {
    u.default.trackWithMetadata(_.AnalyticEvents.BROADCAST_POPOUT_VIEWED, {
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
        children: [(0, l.jsx)(m.default, {
          color: i.default.colors.HEADER_PRIMARY.css,
          height: 16,
          width: 16
        }), (0, l.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: S.default.Messages.LIVE_BROADCASTS
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
        children: S.default.Messages.MORE_OPEN_BROADCASTS.format({
          count: f
        })
      })]
    }), (0, l.jsx)(r.Button, {
      onClick: () => {
        (0, c.transitionTo)(_.Routes.ME), o.default.setSection(_.FriendsSections.ONLINE), u.default.trackWithMetadata(_.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: n.length,
          friends_tab_clicked: !1,
          is_broadcasting: d
        }), t()
      },
      className: I.button,
      children: S.default.Messages.VIEW_OPEN_BROADCASTS
    })]
  })
}