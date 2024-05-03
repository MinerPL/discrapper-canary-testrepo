"use strict";
a.r(t), a.d(t, {
  ACTIVE_NOW_ICON_SIZE: function() {
    return _
  },
  ActiveChannelBase: function() {
    return x
  },
  ActiveNowBase: function() {
    return I
  },
  ActiveNowFiller: function() {
    return S
  },
  DISPLAYED_PARTICIPANT_AVATARS: function() {
    return g
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  d = a("924826"),
  r = a("481060"),
  u = a("131388"),
  o = a("471445"),
  c = a("602623"),
  f = a("369701"),
  m = a("689938"),
  h = a("240217"),
  E = a("571805");
let g = 3,
  _ = 16,
  I = n.forwardRef(function(e, t) {
    let {
      shouldUseCollapsedLayout: a = !0,
      listItemId: n,
      onClick: s,
      icon: o,
      iconTooltipText: c,
      textNode: m,
      header: E,
      accessoryNode: g,
      children: _
    } = e, I = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY), x = (0, d.useListItem)(null != n ? n : "");
    return (0, l.jsxs)("div", {
      ref: t,
      className: i()(h.container, {
        [h.containerCard]: I,
        [h.collapsedLayout]: I && a
      }),
      children: [(0, l.jsxs)(r.Clickable, {
        className: h.body,
        onClick: s,
        ...null != n ? x : void 0,
        children: [(0, l.jsxs)("div", {
          className: h.details,
          children: [null != o ? (0, l.jsx)(r.Tooltip, {
            text: c,
            delay: 500,
            children: e => (0, l.jsx)("div", {
              ...e,
              className: h.iconContainer,
              children: o
            })
          }) : null, (0, l.jsx)(r.Heading, {
            className: h.title,
            variant: "heading-sm/semibold",
            lineClamp: 1,
            children: E
          }), (0, l.jsx)("div", {
            className: h.subtitle,
            children: m
          })]
        }), null != g && (0, l.jsx)("div", {
          className: h.accessoryContainer,
          children: g
        })]
      }), _]
    })
  }),
  x = n.forwardRef(function(e, t) {
    let {
      children: a,
      guildId: n,
      channel: s,
      text: i,
      activityIndicator: d,
      usersInSummary: m,
      onChannelClick: E,
      channelIconOptions: x
    } = e, S = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY), v = (0, o.getChannelIconComponent)(s, null, x);
    return (0, l.jsx)(I, {
      ref: t,
      textNode: null != i ? (0, l.jsx)(r.Text, {
        className: h.channelSubtitle,
        variant: "text-xs/normal",
        children: i
      }) : null,
      listItemId: s.id,
      accessoryNode: (0, l.jsx)(c.default, {
        guildId: n,
        users: m,
        size: S ? c.Sizes.SIZE_24 : c.Sizes.SIZE_16,
        max: S ? 5 : g,
        extraDetail: d
      }),
      onClick: E,
      icon: null != v && (0, l.jsx)(v, {
        width: _,
        height: _
      }),
      iconTooltipText: (0, o.getChannelIconTooltipText)(s),
      header: s.name,
      children: a
    })
  });

function S() {
  return (0, l.jsxs)("div", {
    className: i()(h.container, h.containerCard, h.fillerCard),
    children: [(0, l.jsx)("img", {
      src: E,
      className: h.__invalid_spacerChannelImg,
      alt: "",
      "aria-hidden": !0
    }), (0, l.jsxs)("div", {
      className: h.fillerText,
      children: [(0, l.jsx)(r.Heading, {
        className: h.title,
        variant: "heading-sm/semibold",
        children: m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_TITLE
      }), (0, l.jsx)(r.Text, {
        variant: "text-xs/normal",
        children: m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_SUBTITLE
      })]
    })]
  })
}