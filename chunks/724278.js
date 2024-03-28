"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
});
var l = n("735250"),
  i = n("470079"),
  a = n("803997"),
  r = n.n(a),
  s = n("442837"),
  u = n("481060"),
  d = n("447543"),
  o = n("906732"),
  c = n("171368"),
  f = n("271383"),
  v = n("430824"),
  E = n("940627"),
  h = n("346656"),
  m = n("158010"),
  g = n("51144"),
  _ = n("897285"),
  I = n("978227"),
  S = n("894017"),
  N = n("79874"),
  x = n("315416"),
  T = n("236373"),
  p = n("854698"),
  C = n("391174"),
  j = n("810561"),
  L = n("390966"),
  R = n("390072"),
  y = n("981631"),
  M = n("689938"),
  A = n("177477");

function D(e) {
  var t;
  let {
    creator: n,
    guildId: i,
    channelId: a
  } = e, {
    analyticsLocations: r
  } = (0, o.default)(), d = (0, s.useStateFromStores)([f.default], () => f.default.getMember(i, n.id), [n, i]);
  return (0, l.jsxs)("div", {
    className: A.row,
    children: [(0, l.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(i, 20),
      "aria-label": null !== (t = null == d ? void 0 : d.nick) && void 0 !== t ? t : g.default.getName(n),
      className: A.icon
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, l.jsx)(u.Clickable, {
            onClick: () => (0, c.openUserProfileModal)({
              guildId: i,
              channelId: a,
              userId: n.id,
              roleId: null == d ? void 0 : d.colorRoleId,
              sourceAnalyticsLocations: r,
              analyticsLocation: {
                section: y.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: A.creator,
            tag: "span",
            role: "link",
            children: (0, l.jsx)(u.NameWithRole, {
              name: null !== (e = null == d ? void 0 : d.nick) && void 0 !== e ? e : g.default.getName(n),
              color: null !== (t = null == d ? void 0 : d.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function b(e) {
  let {
    guild: t,
    onClick: n,
    onClose: a
  } = e, s = i.useCallback(e => {
    null == n || n(e), null != n && (null == a || a(e))
  }, [n, a]), d = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.default, {
      guild: t,
      size: h.default.Sizes.MINI,
      active: !0,
      className: r()(A.guildIcon, A.icon)
    }), (0, l.jsx)(E.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      size: 16,
      className: A.guildBadge
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: A.linkText,
      children: t.name
    })]
  });
  return (0, l.jsx)("div", {
    className: A.row,
    children: null != n ? (0, l.jsx)(u.Clickable, {
      onClick: s,
      className: A.clickable,
      role: "link",
      children: d
    }) : d
  })
}

function G(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, l.jsxs)("div", {
    className: A.row,
    children: [(0, l.jsx)(m.default, {
      width: 20,
      height: 20,
      className: A.icon
    }), (0, l.jsx)(u.Clickable, {
      onClick: n,
      className: A.interestedCount,
      children: (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function U(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: a,
    headerId: r,
    onClose: o,
    onClickInterestedCount: c,
    isHub: f = !1,
    containerRef: E,
    recurrenceId: h,
    setRecurrenceId: m
  } = e, g = (0, s.useStateFromStores)([v.default], () => null != v.default.getGuild(n.id), [n.id]), {
    startTime: y,
    endTime: M
  } = (0, N.default)(t.id, h), U = (0, x.default)(t.guild_id, t.id, h), k = i.useCallback(e => {
    e.stopPropagation(), null != t && (0, d.transitionToGuildFromEventInvite)(t)
  }, [t]), P = (0, S.default)(h, t.id), V = (0, I.default)(t);
  i.useEffect(() => {
    _.default.getGuildEventUserCounts(n.id, t.id, null != h ? [h] : []), _.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, h]);
  let O = (0, T.recurrenceRuleFromServer)(t.recurrence_rule),
    F = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, p.getRecurrenceStatus)(P, y, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, l.jsxs)("div", {
    ref: E,
    children: [(0, l.jsxs)("div", {
      className: A.header,
      children: [(0, l.jsx)(L.GuildEventTimeStatus, {
        startTime: y.toISOString(),
        endTime: null == M ? void 0 : M.toISOString(),
        status: null != F ? F : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: h
      }), (0, l.jsx)(u.Heading, {
        id: r,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: A.title,
        children: t.name
      })]
    }), (0, l.jsxs)("div", {
      className: A.body,
      children: [(0, l.jsx)(b, {
        guild: n,
        onClick: g ? k : void 0,
        onClose: o
      }), (0, l.jsx)(R.default, {
        guildScheduledEvent: t,
        channel: a,
        onClose: o
      }), null != U && (0, l.jsx)(G, {
        userCount: U,
        onClick: c
      }), !f && null != V && (0, l.jsx)(D, {
        creator: V,
        guildId: n.id,
        channelId: null == a ? void 0 : a.id
      }, V.id), null != t.description && (0, l.jsx)("div", {
        className: A.description,
        children: (0, l.jsx)(C.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != O && (0, l.jsx)("hr", {
      className: A.divider
    }), null != O && (0, l.jsx)(j.default, {
      guildId: n.id,
      recurrenceRule: O,
      guildEventId: t.id,
      onRecurrenceClick: m,
      hideScroller: !0,
      activeRecurrenceId: h
    })]
  })
}