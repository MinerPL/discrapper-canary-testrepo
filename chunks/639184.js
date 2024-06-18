"use strict";
n.d(t, {
  Z: function() {
    return N
  }
});
var s = n(735250);
n(470079);
var l = n(120356),
  a = n.n(l),
  i = n(481060),
  r = n(465670),
  o = n(68972),
  c = n(507893),
  d = n(228392),
  u = n(404616),
  h = n(710352),
  m = n(921944),
  g = n(689938),
  x = n(993772),
  _ = n(385092),
  f = n(861186),
  E = n(504764);

function N(e) {
  let {
    onDismiss: t
  } = e;
  return (0, s.jsxs)(i.Clickable, {
    onClick: () => {
      open(h.V8), (0, d.GX)({
        readGuideCta: !0
      })
    },
    className: a()(f.container, _.container, x.mainCard),
    children: [(0, s.jsxs)("div", {
      className: _.inline,
      children: [(0, s.jsxs)("div", {
        className: _.author,
        children: [(0, s.jsx)(o.Z, {
          className: _.discordIcon
        }), (0, s.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: g.Z.Messages.DISCORD_NAME
        }), (0, s.jsxs)("div", {
          className: _.notice,
          children: [(0, s.jsx)(c.Z, {
            className: _.infoIcon
          }), (0, s.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: g.Z.Messages.FORUM_HELPER_CARD_NOTICE
          })]
        })]
      }), (0, s.jsx)(i.Clickable, {
        onClick: e => {
          e.stopPropagation(), t(m.L.DISMISS), (0, d.GX)({
            readGuideCta: !1
          })
        },
        children: (0, s.jsx)(r.Z, {
          className: _.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, s.jsx)("hr", {
      className: _.separator
    }), (0, s.jsxs)("div", {
      className: _.inline,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Heading, {
          className: a()(f.__invalid_channelName, _.title),
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: g.Z.Messages.FORUM_HELPER_CARD_TITLE
        }), (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: g.Z.Messages.FORUM_HELPER_CARD_BODY
        })]
      }), (0, s.jsx)("img", {
        src: E,
        alt: g.Z.Messages.FORUM_HELPER_CARD_ALT_TEXT,
        width: u.TJ,
        height: u.TJ
      })]
    })]
  })
}