"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("446674"),
  r = s("77078"),
  o = s("419830"),
  d = s("648747"),
  u = s("380710"),
  c = s("843323"),
  E = s("461380"),
  _ = s("593195"),
  I = s("653274"),
  T = s("34654"),
  S = s("782340"),
  f = s("402013");

function m(e) {
  let {
    guild: t,
    scrollToQuestions: s
  } = e, l = (0, i.useStateFromStores)([I.default], () => I.default.editedDefaultChannelIds), n = (0, c.useFlattenedChannels)(t.id, l), r = n.filter(e => e.isCategory() || (0, d.canChannelBeDefault)(e.guild_id, e.id));
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("div", {
      className: f.header,
      children: (0, a.jsx)(T.default, {
        guildId: t.id,
        scrollToQuestions: s
      })
    }), (0, a.jsxs)("div", {
      className: f.channelList,
      children: [(0, a.jsx)(h, {}), 0 === r.length && (0, a.jsx)(N, {}), (0, a.jsx)(g, {
        channels: r
      })]
    })]
  })
}

function N() {
  return (0, a.jsxs)("div", {
    className: f.emptyState,
    children: [(0, a.jsx)("div", {
      className: f.emptyStateIcon,
      children: (0, a.jsx)(_.default, {
        width: 24,
        height: 24
      })
    }), (0, a.jsx)(r.Text, {
      className: f.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: S.default.Messages.DEFAULT_CHANNELS_PREVIEW_EMPTY_STATE
    })]
  })
}

function g(e) {
  let {
    channels: t
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.map(e => e.isCategory() ? (0, a.jsx)(C, {
      label: e.name
    }, e.id) : (0, a.jsx)(R, {
      channel: e
    }, e.id))
  })
}

function h() {
  return (0, a.jsx)("div", {
    className: f.divider
  })
}

function C(e) {
  let {
    label: t
  } = e;
  return (0, a.jsxs)("div", {
    className: f.category,
    children: [(0, a.jsx)(E.default, {
      className: f.caret,
      width: 12,
      height: 12,
      direction: E.default.Directions.DOWN
    }), (0, a.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: t
    })]
  })
}

function R(e) {
  var t;
  let {
    channel: s
  } = e, l = (0, u.isChattableChannel)(s), i = null !== (t = (0, o.getChannelIconComponent)(s)) && void 0 !== t ? t : _.default;
  return (0, a.jsxs)("div", {
    className: f.channel,
    children: [(0, a.jsx)(i, {
      className: f.channelIcon,
      width: 16,
      height: 16
    }), (0, a.jsx)(r.Text, {
      className: f.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: s.name
    }), (0, a.jsx)("div", {
      className: n({
        [f.chattableIndicator]: l
      })
    })]
  })
}