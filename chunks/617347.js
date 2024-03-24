"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return u
  },
  default: function() {
    return U
  }
});
var l, u, i = n("37983"),
  a = n("884691"),
  r = n("414456"),
  d = n.n(r),
  s = n("446674"),
  o = n("77078"),
  c = n("656038"),
  f = n("419830"),
  E = n("817963"),
  v = n("957255"),
  g = n("476263"),
  S = n("718550"),
  h = n("398604"),
  N = n("1339"),
  _ = n("613767"),
  C = n("822516"),
  I = n("707916"),
  T = n("255050"),
  m = n("400271"),
  p = n("427554"),
  x = n("644189"),
  G = n("29913"),
  D = n("745049"),
  L = n("49111"),
  R = n("782340"),
  M = n("402155");

function y(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, E.useManageResourcePermissions)(t), u = (0, s.useStateFromStores)([v.default], () => !t.isGuildVocal() || v.default.can(L.Permissions.CONNECT, t), [t]), r = a.useMemo(() => (0, c.default)(t), [t]), g = (0, f.getChannelIconComponent)(t);
  return (0, i.jsx)(o.Tooltip, {
    text: R.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !u && null != n,
    children: e => (0, i.jsxs)(o.Clickable, {
      ...e,
      className: d(M.inline, M.channelContainer, {
        [M.channelContainerEnabled]: u && null != n,
        [M.channelContainerDisabled]: !u && null != n
      }),
      onClick: n,
      children: [(0, i.jsx)(o.Tooltip, {
        text: R.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && u && null != n,
        children: e => null != g ? (0, i.jsx)(g, {
          ...e,
          width: 20,
          height: 20,
          className: M.icon
        }) : null
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: M.channelLocation,
        children: t.name
      })]
    })
  })
}

function A(e) {
  let {
    guild: t,
    channel: n,
    onJoinClick: l,
    handleLocationClick: u,
    location: a,
    isExternal: r,
    isHub: s
  } = e;
  if (s) return null == t ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
    className: M.inline,
    children: [(0, i.jsx)(g.default, {
      className: M.guildIcon,
      size: g.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, i.jsx)(y, {
    channel: n,
    onClick: l
  }) : (0, i.jsxs)(o.Clickable, {
    className: M.inline,
    onClick: u,
    children: [(0, i.jsx)(S.default, {
      height: 20,
      width: 20,
      className: d(M.channelContainer, M.icon)
    }), (0, i.jsx)(o.Text, {
      className: r ? M.externalLocation : M.channelLocation,
      variant: "text-sm/normal",
      children: (0, N.guildEventDetailsParser)(a, !0)
    })]
  })
}

function U(e) {
  let {
    className: t,
    guild: n,
    channel: l,
    creator: u,
    name: a,
    entityType: r,
    description: c,
    imageLocation: f = 0,
    imageSource: E,
    isActive: v,
    isUserLurking: g,
    isJoined: S = !1,
    isMember: N = !1,
    isHub: L = !1,
    speakers: R,
    speakerCount: y,
    rsvped: U,
    canInvite: V,
    location: O,
    truncate: P,
    onContextMenu: j,
    onJoinClick: F,
    onJoinGuildClick: k,
    onGoToGuildClick: H,
    onRsvpClick: b,
    onStartClick: w,
    onInviteClick: B,
    onEndClick: Y,
    onClick: z,
    isNew: W,
    guildEventId: K,
    eventPreview: q,
    recurrenceRule: Z,
    recurrenceId: J
  } = e, X = (0, _.isChannelPublic)(l, r), Q = r === D.GuildScheduledEventEntityTypes.EXTERNAL, $ = (0, s.useStateFromStores)([h.default], () => h.default.getGuildScheduledEvent(K)), ee = [];
  if (null != Z && null != $) {
    let e = (0, C.getRRule)(Z);
    ee = (0, C.generateNextRecurrences)(4, e, new Date($.scheduled_start_time))
  }
  let et = ee.length > 0;
  return (0, i.jsxs)(o.ClickableContainer, {
    "aria-label": a,
    onClick: () => null == z ? void 0 : z(J),
    onContextMenu: j,
    className: d(M.card, {
      [M.joined]: S,
      [M.lurking]: g
    }, t),
    children: [(0, i.jsxs)("div", {
      className: d(M.padding, {
        [M.isRecurring]: et
      }),
      children: [0 === f && (0, i.jsx)(T.default, {
        source: E
      }), (0, i.jsx)(m.default, {
        creator: u,
        name: a,
        description: c,
        imageSource: 1 === f ? E : null,
        truncate: P,
        guildId: null == n ? void 0 : n.id,
        isHub: L,
        isNew: W,
        guildEventId: K,
        eventPreview: q,
        recurrenceId: J
      }), v && null != n && null != R && y > 0 && (0, i.jsx)(G.default, {
        guild: n,
        speakers: R,
        speakerCount: y,
        className: M.spacing
      }), (0, i.jsx)("hr", {
        className: M.divider
      }), (0, i.jsxs)("div", {
        className: d(M.inline, M.footer),
        children: [(0, i.jsx)(A, {
          guild: n,
          channel: l,
          onJoinClick: F,
          handleLocationClick: Q ? e => e.stopPropagation() : void 0,
          location: O,
          isExternal: Q,
          isHub: L
        }), L ? (0, i.jsx)(x.default, {
          isActive: v,
          isUserLurking: g,
          isMember: N,
          rsvped: U,
          onRsvpClick: b,
          onJoinGuildClick: k,
          onGoToGuildClick: H,
          guildName: null == n ? void 0 : n.name,
          canInvite: V,
          isChannelPublic: X,
          onInviteClick: B
        }) : (0, i.jsx)(I.default, {
          entityType: r,
          isJoined: S,
          isActive: v,
          isUserLurking: g,
          rsvped: U,
          canInvite: V,
          isChannelPublic: X,
          onContextMenu: j,
          onJoinClick: F,
          onRsvpClick: b,
          onStartClick: w,
          onInviteClick: B,
          onEndClick: Y
        })]
      }), et && (0, i.jsx)("hr", {
        className: M.divider
      })]
    }), et && (0, i.jsx)(p.default, {
      guildId: null == n ? void 0 : n.id,
      recurrenceRule: Z,
      guildEventId: K,
      onRecurrenceClick: z
    })]
  })
}(l = u || (u = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"