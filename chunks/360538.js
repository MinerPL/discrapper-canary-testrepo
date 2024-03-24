"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("446674"),
  u = n("77078"),
  o = n("970728"),
  d = n("685665"),
  c = n("401642"),
  f = n("26989"),
  h = n("305961"),
  v = n("580357"),
  E = n("476263"),
  m = n("155207"),
  C = n("158998"),
  _ = n("933326"),
  p = n("882550"),
  S = n("397680"),
  g = n("466148"),
  I = n("18284"),
  N = n("189443"),
  T = n("822516"),
  x = n("909151"),
  R = n("427554"),
  A = n("393745"),
  y = n("586403"),
  M = n("49111"),
  L = n("782340"),
  j = n("409295");

function b(e) {
  var t;
  let {
    creator: n,
    guildId: l,
    channelId: r
  } = e, {
    analyticsLocations: s
  } = (0, d.default)(), o = (0, a.useStateFromStores)([f.default], () => f.default.getMember(l, n.id), [n, l]);
  return (0, i.jsxs)("div", {
    className: j.row,
    children: [(0, i.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(l, 20),
      "aria-label": null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : C.default.getName(n),
      className: j.icon
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: L.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(u.Clickable, {
            onClick: () => (0, c.openUserProfileModal)({
              guildId: l,
              channelId: r,
              userId: n.id,
              roleId: null == o ? void 0 : o.colorRoleId,
              sourceAnalyticsLocations: s,
              analyticsLocation: {
                section: M.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: j.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(u.NameWithRole, {
              name: null !== (e = null == o ? void 0 : o.nick) && void 0 !== e ? e : C.default.getName(n),
              color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function P(e) {
  let {
    guild: t,
    onClick: n,
    onClose: r
  } = e, a = l.useCallback(e => {
    null == n || n(e), null != n && (null == r || r(e))
  }, [n, r]), o = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.default, {
      guild: t,
      size: E.default.Sizes.MINI,
      active: !0,
      className: s(j.guildIcon, j.icon)
    }), (0, i.jsx)(v.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      size: 16,
      className: j.guildBadge
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: j.linkText,
      children: t.name
    })]
  });
  return (0, i.jsx)("div", {
    className: j.row,
    children: null != n ? (0, i.jsx)(u.Clickable, {
      onClick: a,
      className: j.clickable,
      role: "link",
      children: o
    }) : o
  })
}

function w(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: j.row,
    children: [(0, i.jsx)(m.default, {
      width: 20,
      height: 20,
      className: j.icon
    }), (0, i.jsx)(u.Clickable, {
      onClick: n,
      className: j.interestedCount,
      children: (0, i.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: L.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function V(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    headerId: s,
    onClose: d,
    onClickInterestedCount: c,
    isHub: f = !1,
    containerRef: v,
    recurrenceId: E,
    setRecurrenceId: m
  } = e, C = (0, a.useStateFromStores)([h.default], () => null != h.default.getGuild(n.id), [n.id]), {
    startTime: M,
    endTime: L
  } = (0, g.default)(t.id, E), V = (0, I.default)(t.guild_id, t.id, E), D = l.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.transitionToGuildFromEventInvite)(t)
  }, [t]), O = (0, S.default)(E, t.id), U = (0, p.default)(t);
  l.useEffect(() => {
    _.default.getGuildEventUserCounts(n.id, t.id, null != E ? [E] : []), _.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, E]);
  let G = (0, N.recurrenceRuleFromServer)(t.recurrence_rule),
    F = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, T.getRecurrenceStatus)(O, M, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, i.jsxs)("div", {
    ref: v,
    children: [(0, i.jsxs)("div", {
      className: j.header,
      children: [(0, i.jsx)(A.GuildEventTimeStatus, {
        startTime: M.toISOString(),
        endTime: null == L ? void 0 : L.toISOString(),
        status: null != F ? F : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: E
      }), (0, i.jsx)(u.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: j.title,
        children: t.name
      })]
    }), (0, i.jsxs)("div", {
      className: j.body,
      children: [(0, i.jsx)(P, {
        guild: n,
        onClick: C ? D : void 0,
        onClose: d
      }), (0, i.jsx)(y.default, {
        guildScheduledEvent: t,
        channel: r,
        onClose: d
      }), null != V && (0, i.jsx)(w, {
        userCount: V,
        onClick: c
      }), !f && null != U && (0, i.jsx)(b, {
        creator: U,
        guildId: n.id,
        channelId: null == r ? void 0 : r.id
      }, U.id), null != t.description && (0, i.jsx)("div", {
        className: j.description,
        children: (0, i.jsx)(x.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != G && (0, i.jsx)("hr", {
      className: j.divider
    }), null != G && (0, i.jsx)(R.default, {
      guildId: n.id,
      recurrenceRule: G,
      guildEventId: t.id,
      onRecurrenceClick: m,
      hideScroller: !0,
      activeRecurrenceId: E
    })]
  })
}