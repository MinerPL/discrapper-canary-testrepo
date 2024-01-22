"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("77078"),
  i = s("945330"),
  o = s("153769"),
  u = s("266926"),
  d = s("867965"),
  c = s("152637"),
  m = s("953371"),
  h = s("994428"),
  f = s("782340"),
  g = s("761953"),
  x = s("241558"),
  C = s("260177"),
  T = s("714358");

function _(e) {
  let {
    onDismiss: t
  } = e;
  return (0, a.jsxs)(r.Clickable, {
    onClick: () => {
      open(m.COMMUNITY_PORTAL_FORUM_PAGE), (0, d.trackForumHelperCardClicked)({
        readGuideCta: !0
      })
    },
    className: l(C.container, x.container, g.mainCard),
    children: [(0, a.jsxs)("div", {
      className: x.inline,
      children: [(0, a.jsxs)("div", {
        className: x.author,
        children: [(0, a.jsx)(o.default, {
          className: x.discordIcon
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: f.default.Messages.DISCORD_NAME
        }), (0, a.jsxs)("div", {
          className: x.notice,
          children: [(0, a.jsx)(u.default, {
            className: x.infoIcon
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: f.default.Messages.FORUM_HELPER_CARD_NOTICE
          })]
        })]
      }), (0, a.jsx)(r.Clickable, {
        onClick: e => {
          e.stopPropagation(), t(h.ContentDismissActionType.DISMISS), (0, d.trackForumHelperCardClicked)({
            readGuideCta: !1
          })
        },
        children: (0, a.jsx)(i.default, {
          className: x.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, a.jsx)("hr", {
      className: x.separator
    }), (0, a.jsxs)("div", {
      className: x.inline,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.Heading, {
          className: l(C.channelName, x.title),
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: f.default.Messages.FORUM_HELPER_CARD_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: f.default.Messages.FORUM_HELPER_CARD_BODY
        })]
      }), (0, a.jsx)("img", {
        src: T,
        alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
        width: c.MAX_THUMBNAIL_WIDTH,
        height: c.MAX_THUMBNAIL_WIDTH
      })]
    })]
  })
}