"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("446674"),
  a = n("77078"),
  u = n("272030"),
  o = n("145079"),
  d = n("119184"),
  c = n("506885"),
  f = n("340906"),
  v = n("271938"),
  h = n("824563"),
  E = n("101125"),
  m = n("697218"),
  C = n("155207"),
  _ = n("18284"),
  p = n("745049"),
  S = n("782340"),
  g = n("519951");

function I(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, i.jsx)(d.default, {
      children: (0, i.jsx)("div", {
        className: g.circle,
        children: (0, i.jsx)(C.default, {
          height: 40,
          width: 40,
          className: g.icon
        })
      })
    }), t]
  })
}

function N() {
  return (0, i.jsx)(I, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: g.title,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function T() {
  return (0, i.jsx)(I, {
    children: (0, i.jsx)(a.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: g.errorTitle,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function x(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: g.listRow,
      children: [(0, i.jsx)("div", {
        className: r(g.listRowCircle, g.listAvatar),
        children: (0, i.jsx)(C.default, {
          height: 14,
          width: 14,
          className: g.icon
        })
      }), (0, i.jsx)(a.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function R(e) {
  var t;
  let {
    eventUser: n,
    onContextMenu: l
  } = e, u = (0, s.useStateFromStores)([m.default], () => m.default.getUser(n.user_id)), d = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, C = (0, s.useStateFromStores)([E.default, h.default, v.default], () => n.user_id === v.default.getId() ? E.default.getStatus() : h.default.getStatus(n.user_id, d), [n.user_id, d]);
  return null == u ? null : (0, i.jsx)(a.Popout, {
    preload: () => (0, c.default)(u.id, u.getAvatarURL(d, 80), {
      guildId: d
    }),
    renderPopout: e => (0, i.jsx)(f.default, {
      ...e,
      location: "EventDetailRsvpTab",
      userId: n.user_id,
      guildId: d
    }),
    position: "left",
    spacing: 16,
    children: (e, t) => {
      var s, d;
      let {
        isShown: c
      } = t;
      return (0, i.jsxs)(a.Clickable, {
        className: r(g.listRow, g.interactiveRow, {
          [g.selected]: c
        }),
        onContextMenu: e => l(e, u),
        ...e,
        children: [(0, i.jsx)(a.Avatar, {
          src: u.getAvatarURL(null === (s = n.member) || void 0 === s ? void 0 : s.guildId, 24),
          "aria-label": u.username,
          size: a.AvatarSizes.SIZE_24,
          className: g.listAvatar,
          status: C
        }), (0, i.jsx)(o.default, {
          user: u,
          className: g.listName,
          discriminatorClass: g.listDiscriminator,
          nick: null === (d = n.member) || void 0 === d ? void 0 : d.nick
        })]
      })
    }
  })
}

function A(e) {
  let {
    eventUsers: t,
    usersNotShownCount: n = 0,
    onContextMenu: l
  } = e;
  return (0, i.jsxs)(a.ScrollerThin, {
    className: g.listScroller,
    children: [t.map(e => (0, i.jsx)(R, {
      eventUser: e,
      onContextMenu: l
    }, e.user_id)), n > 0 && (0, i.jsx)(x, {
      count: n
    })]
  })
}

function y(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, i.jsx)("div", {
    className: g.container,
    style: null != n ? n : {},
    children: t
  })
}

function M(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, i.jsx)(y, {
    style: {
      height: n
    },
    children: t
  })
}

function L(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    eventUsers: r,
    loading: s,
    error: o,
    containerHeight: d
  } = e, c = (0, _.default)(t.guild_id, t.id, l);
  if (s && 0 === r.length) return (0, i.jsx)(M, {
    height: d,
    children: (0, i.jsx)(a.Spinner, {
      type: a.Spinner.Type.SPINNING_CIRCLE,
      className: g.spinner
    })
  });
  if (null != o && 0 === r.length) return (0, i.jsx)(M, {
    height: d,
    children: (0, i.jsx)(T, {})
  });
  let f = 0;
  return r.length >= p.MAX_RSVP_USER_DISPLAY_COUNT && c > p.MAX_RSVP_USER_DISPLAY_COUNT && (f = Math.max(c - r.length, 0)), 0 === r.length ? (0, i.jsx)(M, {
    height: d,
    children: (0, i.jsx)(N, {})
  }) : (0, i.jsx)(y, {
    children: (0, i.jsx)(A, {
      eventUsers: r,
      onContextMenu: function(e, t) {
        (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("406784").then(n.bind(n, "406784"));
          return n => (0, i.jsx)(e, {
            ...n,
            user: t
          })
        })
      },
      usersNotShownCount: f
    })
  })
}