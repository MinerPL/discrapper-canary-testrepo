"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var n = l("735250");
l("470079");
var i = l("120356"),
  a = l.n(i),
  r = l("442837"),
  s = l("481060"),
  u = l("239091"),
  d = l("129861"),
  o = l("939863"),
  c = l("484459"),
  f = l("103575"),
  v = l("314897"),
  E = l("158776"),
  h = l("885110"),
  m = l("594174"),
  _ = l("158010"),
  g = l("315416"),
  I = l("765305"),
  S = l("689938"),
  x = l("225216");

function N(e) {
  let {
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: x.emptyContainer,
    children: [(0, n.jsx)(o.default, {
      children: (0, n.jsx)("div", {
        className: x.circle,
        children: (0, n.jsx)(_.default, {
          height: 40,
          width: 40,
          className: x.icon
        })
      })
    }), t]
  })
}

function T() {
  return (0, n.jsx)(N, {
    children: (0, n.jsx)(s.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: x.title,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function j() {
  return (0, n.jsx)(N, {
    children: (0, n.jsx)(s.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: x.errorTitle,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function C(e) {
  let {
    count: t
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: x.listRow,
      children: [(0, n.jsx)("div", {
        className: a()(x.listRowCircle, x.listAvatar),
        children: (0, n.jsx)(_.default, {
          height: 14,
          width: 14,
          className: x.icon
        })
      }), (0, n.jsx)(s.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function p(e) {
  let {
    eventUser: t,
    guildId: l,
    onContextMenu: i
  } = e, u = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t.user_id)), o = (0, r.useStateFromStores)([h.default, E.default, v.default], () => t.user_id === v.default.getId() ? h.default.getStatus() : E.default.getStatus(t.user_id, l), [t.user_id, l]);
  return null == u ? null : (0, n.jsx)(s.Popout, {
    preload: () => (0, c.maybeFetchUserProfileForPopout)(u.id, u.getAvatarURL(l, 80), {
      guildId: l
    }),
    renderPopout: e => (0, n.jsx)(f.default, {
      ...e,
      location: "EventDetailRsvpTab",
      userId: t.user_id,
      guildId: l
    }),
    position: "left",
    spacing: 16,
    children: (e, r) => {
      var c;
      let {
        isShown: f
      } = r;
      return (0, n.jsxs)(s.Clickable, {
        className: a()(x.listRow, x.interactiveRow, {
          [x.selected]: f
        }),
        onContextMenu: e => i(e, u),
        ...e,
        children: [(0, n.jsx)(s.Avatar, {
          src: u.getAvatarURL(l, 24),
          "aria-label": u.username,
          size: s.AvatarSizes.SIZE_24,
          className: x.listAvatar,
          status: o
        }), (0, n.jsx)(d.default, {
          user: u,
          className: x.listName,
          discriminatorClass: x.listDiscriminator,
          nick: null === (c = t.member) || void 0 === c ? void 0 : c.nick
        })]
      })
    }
  })
}

function L(e) {
  let {
    eventUsers: t,
    guildId: l,
    usersNotShownCount: i = 0,
    onContextMenu: a
  } = e;
  return (0, n.jsxs)(s.ScrollerThin, {
    className: x.listScroller,
    children: [t.map(e => (0, n.jsx)(p, {
      guildId: l,
      eventUser: e,
      onContextMenu: a
    }, e.user_id)), i > 0 && (0, n.jsx)(C, {
      count: i
    })]
  })
}

function R(e) {
  let {
    children: t,
    style: l
  } = e;
  return (0, n.jsx)("div", {
    className: x.container,
    style: null != l ? l : {},
    children: t
  })
}

function y(e) {
  let {
    children: t,
    height: l
  } = e;
  return (0, n.jsx)(R, {
    style: {
      height: l
    },
    children: t
  })
}

function M(e) {
  let {
    guildEvent: t,
    recurrenceId: i,
    eventUsers: a,
    loading: r,
    error: d,
    containerHeight: o
  } = e, c = (0, g.default)(t.guild_id, t.id, i);
  if (r && 0 === a.length) return (0, n.jsx)(y, {
    height: o,
    children: (0, n.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE,
      className: x.spinner
    })
  });
  if (null != d && 0 === a.length) return (0, n.jsx)(y, {
    height: o,
    children: (0, n.jsx)(j, {})
  });
  let f = 0;
  return a.length >= I.MAX_RSVP_USER_DISPLAY_COUNT && c > I.MAX_RSVP_USER_DISPLAY_COUNT && (f = Math.max(c - a.length, 0)), 0 === a.length ? (0, n.jsx)(y, {
    height: o,
    children: (0, n.jsx)(T, {})
  }) : (0, n.jsx)(R, {
    children: (0, n.jsx)(L, {
      eventUsers: a,
      guildId: t.guild_id,
      onContextMenu: function(e, t) {
        (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("36441"), l.e("64409")]).then(l.bind(l, "881351"));
          return l => (0, n.jsx)(e, {
            ...l,
            user: t
          })
        })
      },
      usersNotShownCount: f
    })
  })
}