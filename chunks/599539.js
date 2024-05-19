"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("543882"),
  d = n("592125"),
  _ = n("718582"),
  c = n("837771"),
  E = n("126134"),
  I = n("181096");

function T(e) {
  let {
    cardData: t,
    guildId: n
  } = e, {
    category: a
  } = t, [T, f] = r.useState(!1), S = (0, o.useStateFromStores)([u.default], () => a === E.CardCategory.HANGOUT && t.streamUserIds.length > 0 ? u.default.getPreviewURL(n, t.channelId, t.streamUserIds[0]) : null), h = (0, o.useStateFromStores)([d.default], () => {
    let e = a === E.CardCategory.HANGOUT || a === E.CardCategory.GAMING ? t.channelId : a === E.CardCategory.EVENT ? t.event.channel_id : a === E.CardCategory.EMBEDDED_ACTIVITY ? t.embeddedActivities[0].channelId : null;
    return d.default.getChannel(e)
  }), {
    usersToShow: A
  } = (0, _.useGetEventCardUsers)(h), m = (0, c.useImage)(t, n, S), N = (0, c.useCardTitle)(t, n), p = (0, c.getSubtitle)(t), O = (0, c.useCount)(t), C = (0, c.getCategoryIcon)(t), R = (0, c.getClickHandler)(t, n), g = (0, c.getJoinButton)(t, n), L = !!(null == h ? void 0 : h.isGuildStageVoice()) && A.length > 0, v = a === E.CardCategory.HANGOUT && 0 === t.streamUserIds.length && !(null == h ? void 0 : h.isGuildStageVoice());
  return (0, i.jsxs)(l.Clickable, {
    onClick: () => null == R ? void 0 : R(),
    tag: "div",
    className: I.container,
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [(0, i.jsx)("div", {
      className: s()(I.image, {
        [I.streamContainer]: null != S && !(null == h ? void 0 : h.isGuildStageVoice()),
        [I.groupAvatar]: L || v
      }),
      children: m
    }), (0, i.jsxs)("div", {
      className: I.content,
      children: [null != N && (0, i.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === O.length ? I.multiLineTitle : I.singleLineTitle,
        children: N
      }), null != p && (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: I.singleLineTitle,
        children: p
      }), O.length > 0 && (0, i.jsx)("div", {
        className: I.pillContainer,
        children: O.map((e, t) => {
          let {
            icon: n,
            count: r
          } = e;
          return null != r && (0, i.jsxs)("div", {
            className: I.pill,
            children: [(0, i.jsx)(n, {
              className: I.pillIcon
            }), (0, i.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-normal",
              children: r
            })]
          }, t)
        })
      })]
    }), (0, i.jsx)(C, {
      className: I.categoryIcon
    }), T && g]
  })
}