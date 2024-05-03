"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var l = n("735250");
n("470079");
var i = n("120356"),
  a = n.n(i),
  r = n("442837"),
  s = n("481060"),
  u = n("239091"),
  d = n("129861"),
  o = n("939863"),
  c = n("484459"),
  f = n("103575"),
  v = n("314897"),
  E = n("158776"),
  h = n("885110"),
  m = n("594174"),
  g = n("158010"),
  _ = n("315416"),
  I = n("765305"),
  S = n("689938"),
  N = n("101705");

function x(e) {
  let {
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: N.emptyContainer,
    children: [(0, l.jsx)(o.default, {
      children: (0, l.jsx)("div", {
        className: N.circle,
        children: (0, l.jsx)(g.default, {
          height: 40,
          width: 40,
          className: N.icon
        })
      })
    }), t]
  })
}

function T() {
  return (0, l.jsx)(x, {
    children: (0, l.jsx)(s.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: N.title,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
    })
  })
}

function p() {
  return (0, l.jsx)(x, {
    children: (0, l.jsx)(s.Heading, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: N.errorTitle,
      children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
    })
  })
}

function C(e) {
  let {
    count: t
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: N.listRow,
      children: [(0, l.jsx)("div", {
        className: a()(N.listRowCircle, N.listAvatar),
        children: (0, l.jsx)(g.default, {
          height: 14,
          width: 14,
          className: N.icon
        })
      }), (0, l.jsx)(s.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
          userRemainCount: t
        })
      })]
    })
  })
}

function j(e) {
  var t;
  let {
    eventUser: n,
    onContextMenu: i
  } = e, u = (0, r.useStateFromStores)([m.default], () => m.default.getUser(n.user_id)), o = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, g = (0, r.useStateFromStores)([h.default, E.default, v.default], () => n.user_id === v.default.getId() ? h.default.getStatus() : E.default.getStatus(n.user_id, o), [n.user_id, o]);
  return null == u ? null : (0, l.jsx)(s.Popout, {
    preload: () => (0, c.maybeFetchUserProfileForPopout)(u.id, u.getAvatarURL(o, 80), {
      guildId: o
    }),
    renderPopout: e => (0, l.jsx)(f.default, {
      ...e,
      location: "EventDetailRsvpTab",
      userId: n.user_id,
      guildId: o
    }),
    position: "left",
    spacing: 16,
    children: (e, t) => {
      var r, o;
      let {
        isShown: c
      } = t;
      return (0, l.jsxs)(s.Clickable, {
        className: a()(N.listRow, N.interactiveRow, {
          [N.selected]: c
        }),
        onContextMenu: e => i(e, u),
        ...e,
        children: [(0, l.jsx)(s.Avatar, {
          src: u.getAvatarURL(null === (r = n.member) || void 0 === r ? void 0 : r.guildId, 24),
          "aria-label": u.username,
          size: s.AvatarSizes.SIZE_24,
          className: N.listAvatar,
          status: g
        }), (0, l.jsx)(d.default, {
          user: u,
          className: N.listName,
          discriminatorClass: N.listDiscriminator,
          nick: null === (o = n.member) || void 0 === o ? void 0 : o.nick
        })]
      })
    }
  })
}

function L(e) {
  let {
    eventUsers: t,
    usersNotShownCount: n = 0,
    onContextMenu: i
  } = e;
  return (0, l.jsxs)(s.ScrollerThin, {
    className: N.listScroller,
    children: [t.map(e => (0, l.jsx)(j, {
      eventUser: e,
      onContextMenu: i
    }, e.user_id)), n > 0 && (0, l.jsx)(C, {
      count: n
    })]
  })
}

function R(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, l.jsx)("div", {
    className: N.container,
    style: null != n ? n : {},
    children: t
  })
}

function y(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, l.jsx)(R, {
    style: {
      height: n
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
  } = e, c = (0, _.default)(t.guild_id, t.id, i);
  if (r && 0 === a.length) return (0, l.jsx)(y, {
    height: o,
    children: (0, l.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE,
      className: N.spinner
    })
  });
  if (null != d && 0 === a.length) return (0, l.jsx)(y, {
    height: o,
    children: (0, l.jsx)(p, {})
  });
  let f = 0;
  return a.length >= I.MAX_RSVP_USER_DISPLAY_COUNT && c > I.MAX_RSVP_USER_DISPLAY_COUNT && (f = Math.max(c - a.length, 0)), 0 === a.length ? (0, l.jsx)(y, {
    height: o,
    children: (0, l.jsx)(T, {})
  }) : (0, l.jsx)(R, {
    children: (0, l.jsx)(L, {
      eventUsers: a,
      onContextMenu: function(e, t) {
        (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("69220")]).then(n.bind(n, "881351"));
          return n => (0, l.jsx)(e, {
            ...n,
            user: t
          })
        })
      },
      usersNotShownCount: f
    })
  })
}