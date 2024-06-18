"use strict";
t.d(s, {
  Z: function() {
    return S
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(442837),
  r = t(481060),
  o = t(471445),
  c = t(977258),
  d = t(637853),
  u = t(816436),
  E = t(259580),
  _ = t(93879),
  I = t(889369),
  T = t(838324),
  N = t(689938),
  m = t(521763);

function S(e) {
  let {
    guild: s,
    scrollToQuestions: t
  } = e, i = (0, a.e7)([I.Z], () => I.Z.editedDefaultChannelIds), l = (0, u.b)(s.id, i).filter(e => e.isCategory() || (0, c.s)(e.guild_id, e.id));
  return (0, n.jsxs)("div", {
    className: m.container,
    children: [(0, n.jsx)("div", {
      className: m.header,
      children: (0, n.jsx)(T.Z, {
        guildId: s.id,
        scrollToQuestions: t
      })
    }), (0, n.jsxs)("div", {
      className: m.channelList,
      children: [(0, n.jsx)(x, {}), 0 === l.length && (0, n.jsx)(h, {}), (0, n.jsx)(g, {
        channels: l
      })]
    })]
  })
}

function h() {
  return (0, n.jsxs)("div", {
    className: m.emptyState,
    children: [(0, n.jsx)("div", {
      className: m.emptyStateIcon,
      children: (0, n.jsx)(_.Z, {
        width: 24,
        height: 24
      })
    }), (0, n.jsx)(r.Text, {
      className: m.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: N.Z.Messages.DEFAULT_CHANNELS_PREVIEW_EMPTY_STATE
    })]
  })
}

function g(e) {
  let {
    channels: s
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: s.map(e => e.isCategory() ? (0, n.jsx)(C, {
      label: e.name
    }, e.id) : (0, n.jsx)(R, {
      channel: e
    }, e.id))
  })
}

function x() {
  return (0, n.jsx)("div", {
    className: m.divider
  })
}

function C(e) {
  let {
    label: s
  } = e;
  return (0, n.jsxs)("div", {
    className: m.category,
    children: [(0, n.jsx)(E.Z, {
      className: m.caret,
      width: 12,
      height: 12,
      direction: E.Z.Directions.DOWN
    }), (0, n.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: s
    })]
  })
}

function R(e) {
  var s;
  let {
    channel: t
  } = e, i = (0, d.iF)(t), a = null !== (s = (0, o.KS)(t)) && void 0 !== s ? s : _.Z;
  return (0, n.jsxs)("div", {
    className: m.channel,
    children: [(0, n.jsx)(a, {
      className: m.channelIcon,
      width: 16,
      height: 16
    }), (0, n.jsx)(r.Text, {
      className: m.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: t.name
    }), (0, n.jsx)("div", {
      className: l()({
        [m.chattableIndicator]: i
      })
    })]
  })
}