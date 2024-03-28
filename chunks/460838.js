"use strict";
t.r(n), t.d(n, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return w
  }
});
var l, a, i = t("735250"),
  s = t("470079"),
  r = t("803997"),
  c = t.n(r),
  d = t("442837"),
  u = t("481060"),
  o = t("447003"),
  v = t("471445"),
  h = t("889161"),
  E = t("496675"),
  f = t("346656"),
  m = t("393112"),
  C = t("924301"),
  g = t("725436"),
  x = t("274311"),
  N = t("854698"),
  S = t("285784"),
  T = t("95291"),
  p = t("742593"),
  y = t("810561"),
  _ = t("187443"),
  I = t("131154"),
  A = t("765305"),
  j = t("981631"),
  k = t("689938"),
  G = t("148580");

function L(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: l
  } = (0, h.useManageResourcePermissions)(n), a = (0, d.useStateFromStores)([E.default], () => !n.isGuildVocal() || E.default.can(j.Permissions.CONNECT, n), [n]), r = s.useMemo(() => (0, o.default)(n), [n]), f = (0, v.getChannelIconComponent)(n);
  return (0, i.jsx)(u.Tooltip, {
    text: k.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != t,
    children: e => (0, i.jsxs)(u.Clickable, {
      ...e,
      className: c()(G.inline, G.channelContainer, {
        [G.channelContainerEnabled]: a && null != t,
        [G.channelContainerDisabled]: !a && null != t
      }),
      onClick: t,
      children: [(0, i.jsx)(u.Tooltip, {
        text: k.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && a && null != t,
        children: e => null != f ? (0, i.jsx)(f, {
          ...e,
          width: 20,
          height: 20,
          className: G.icon
        }) : null
      }), (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: G.channelLocation,
        children: n.name
      })]
    })
  })
}

function R(e) {
  let {
    guild: n,
    channel: t,
    onJoinClick: l,
    handleLocationClick: a,
    location: s,
    isExternal: r,
    isHub: d
  } = e;
  if (d) return null == n ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
    className: G.inline,
    children: [(0, i.jsx)(f.default, {
      className: G.guildIcon,
      size: f.default.Sizes.MINI,
      active: !0,
      guild: n
    }), (0, i.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == n ? void 0 : n.name
    })]
  });
  return null != t ? (0, i.jsx)(L, {
    channel: t,
    onClick: l
  }) : (0, i.jsxs)(u.Clickable, {
    className: G.inline,
    onClick: a,
    children: [(0, i.jsx)(m.default, {
      height: 20,
      width: 20,
      className: c()(G.channelContainer, G.icon)
    }), (0, i.jsx)(u.Text, {
      className: r ? G.externalLocation : G.channelLocation,
      variant: "text-sm/normal",
      children: (0, g.guildEventDetailsParser)(s, !0)
    })]
  })
}

function w(e) {
  let {
    className: n,
    guild: t,
    channel: l,
    creator: a,
    name: s,
    entityType: r,
    description: o,
    imageLocation: v = 0,
    imageSource: h,
    isActive: E,
    isUserLurking: f,
    isJoined: m = !1,
    isMember: g = !1,
    isHub: j = !1,
    speakers: k,
    speakerCount: L,
    rsvped: w,
    canInvite: b,
    location: M,
    truncate: P,
    onContextMenu: O,
    onJoinClick: V,
    onJoinGuildClick: U,
    onGoToGuildClick: B,
    onRsvpClick: D,
    onStartClick: F,
    onInviteClick: Y,
    onEndClick: H,
    onClick: z,
    isNew: J,
    guildEventId: q,
    eventPreview: K,
    recurrenceRule: X,
    recurrenceId: W
  } = e, Z = (0, x.isChannelPublic)(l, r), Q = r === A.GuildScheduledEventEntityTypes.EXTERNAL, $ = (0, d.useStateFromStores)([C.default], () => C.default.getGuildScheduledEvent(q)), ee = [];
  if (null != X && null != $) {
    let e = (0, N.getRRule)(X);
    ee = (0, N.generateNextRecurrences)(4, e, new Date($.scheduled_start_time))
  }
  let en = ee.length > 0;
  return (0, i.jsxs)(u.ClickableContainer, {
    "aria-label": s,
    onClick: () => null == z ? void 0 : z(W),
    onContextMenu: O,
    className: c()(G.card, {
      [G.joined]: m,
      [G.lurking]: f
    }, n),
    children: [(0, i.jsxs)("div", {
      className: c()(G.padding, {
        [G.isRecurring]: en
      }),
      children: [0 === v && (0, i.jsx)(T.default, {
        source: h
      }), (0, i.jsx)(p.default, {
        creator: a,
        name: s,
        description: o,
        imageSource: 1 === v ? h : null,
        truncate: P,
        guildId: null == t ? void 0 : t.id,
        isHub: j,
        isNew: J,
        guildEventId: q,
        eventPreview: K,
        recurrenceId: W
      }), E && null != t && null != k && L > 0 && (0, i.jsx)(I.default, {
        guild: t,
        speakers: k,
        speakerCount: L,
        className: G.spacing
      }), (0, i.jsx)("hr", {
        className: G.divider
      }), (0, i.jsxs)("div", {
        className: c()(G.inline, G.footer),
        children: [(0, i.jsx)(R, {
          guild: t,
          channel: l,
          onJoinClick: V,
          handleLocationClick: Q ? e => e.stopPropagation() : void 0,
          location: M,
          isExternal: Q,
          isHub: j
        }), j ? (0, i.jsx)(_.default, {
          isActive: E,
          isUserLurking: f,
          isMember: g,
          rsvped: w,
          onRsvpClick: D,
          onJoinGuildClick: U,
          onGoToGuildClick: B,
          guildName: null == t ? void 0 : t.name,
          canInvite: b,
          isChannelPublic: Z,
          onInviteClick: Y
        }) : (0, i.jsx)(S.default, {
          entityType: r,
          isJoined: m,
          isActive: E,
          isUserLurking: f,
          rsvped: w,
          canInvite: b,
          isChannelPublic: Z,
          onContextMenu: O,
          onJoinClick: V,
          onRsvpClick: D,
          onStartClick: F,
          onInviteClick: Y,
          onEndClick: H
        })]
      }), en && (0, i.jsx)("hr", {
        className: G.divider
      })]
    }), en && (0, i.jsx)(y.default, {
      guildId: null == t ? void 0 : t.id,
      recurrenceRule: X,
      guildEventId: q,
      onRecurrenceClick: z
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"