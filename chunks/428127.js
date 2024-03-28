"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("442837"),
  u = n("692547"),
  d = n("481060"),
  c = n("607070"),
  f = n("492162"),
  h = n("451478"),
  C = n("409216"),
  p = n("86813"),
  m = n("826026"),
  g = n("632184"),
  E = n("934415"),
  S = n("968847"),
  _ = n("689938"),
  I = n("308530");
let N = {
  friction: 30,
  tension: 300
};

function T(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: s
  } = e, r = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, f.default)(n.id), c = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), s()
  }, [s]), h = null !== (t = null == r ? void 0 : r.getChannelRecords()) && void 0 !== t ? t : [], p = (0, E.computeSummarizedVoiceUsers)({
    channels: h,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, l.jsxs)(d.Clickable, {
    className: i()(I.bar),
    onClick: c,
    children: [(0, l.jsx)(g.default, {
      className: I.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: u.default.unsafe_rawColors.GREEN_330.css
    }), (0, l.jsx)(d.Text, {
      variant: "text-xs/semibold",
      color: "text-positive",
      className: I.barText,
      children: _.default.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
        count: p.length
      })
    }), (0, l.jsx)(C.default, {
      guildId: n.id,
      className: I.voiceChannelsUsers,
      users: p.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: d.AvatarSizes.SIZE_16
    })]
  })
}

function A(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: s,
    jumpToVoiceChannels: u,
    jumpToChannel: f
  } = e, {
    bottomBar: C,
    topBar: g
  } = (0, o.useStateFromStoresObject)([S.default], () => S.default.getUnreadStateForGuildId(n.id)), E = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), A = (0, o.useStateFromStores)([h.default], () => h.default.isFocused()), {
    mode: L,
    mentionCount: v,
    targetChannelId: x
  } = "bottom" === t ? C : g, R = L === S.UnreadBarMode.HIDDEN, M = (0, r.useSpring)({
    to: {
      transform: R ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: N,
    immediate: E || !A
  }), O = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && f(x)
  }, [f, x]);
  return (0, l.jsx)("div", {
    className: i()(I.container, {
      [I.top]: "top" === t,
      [I.bottom]: "bottom" === t
    }),
    children: (0, l.jsx)(r.animated.div, {
      className: I.containerPadding,
      style: M,
      "aria-hidden": R,
      children: L === S.UnreadBarMode.HIDDEN ? (0, l.jsx)("div", {
        className: i()(I.bar, I.emptyBar)
      }) : L === S.UnreadBarMode.UNREAD ? (0, l.jsxs)(d.Clickable, {
        className: I.bar,
        onClick: O,
        children: ["bottom" === t ? (0, l.jsx)(p.default, {
          className: I.unreadIcon,
          height: 14,
          width: 14
        }) : (0, l.jsx)(m.default, {
          className: I.unreadIcon,
          height: 14,
          width: 14
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          className: I.barText,
          children: _.default.Messages.NEW_UNREADS
        })]
      }) : L === S.UnreadBarMode.MENTIONS ? (0, l.jsx)(d.Clickable, {
        className: i()(I.bar, I.mentionsBar),
        onClick: O,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: I.barText,
          children: _.default.Messages.NEW_MENTIONS_COUNT.format({
            count: v
          })
        })
      }) : L === S.UnreadBarMode.VOICE_CHANNELS ? (0, l.jsx)(T, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: s
      }) : void 0
    })
  })
}