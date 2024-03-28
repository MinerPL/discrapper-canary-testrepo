"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var s = a("735250");
a("470079");
var n = a("803997"),
  l = a.n(n),
  r = a("481060"),
  i = a("465670"),
  o = a("68972"),
  d = a("507893"),
  u = a("228392"),
  c = a("404616"),
  m = a("710352"),
  h = a("921944"),
  f = a("689938"),
  g = a("258148"),
  x = a("836974"),
  C = a("426863"),
  _ = a("504764");

function S(e) {
  let {
    onDismiss: t
  } = e;
  return (0, s.jsxs)(r.Clickable, {
    onClick: () => {
      open(m.COMMUNITY_PORTAL_FORUM_PAGE), (0, u.trackForumHelperCardClicked)({
        readGuideCta: !0
      })
    },
    className: l()(C.container, x.container, g.mainCard),
    children: [(0, s.jsxs)("div", {
      className: x.inline,
      children: [(0, s.jsxs)("div", {
        className: x.author,
        children: [(0, s.jsx)(o.default, {
          className: x.discordIcon
        }), (0, s.jsx)(r.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: f.default.Messages.DISCORD_NAME
        }), (0, s.jsxs)("div", {
          className: x.notice,
          children: [(0, s.jsx)(d.default, {
            className: x.infoIcon
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: f.default.Messages.FORUM_HELPER_CARD_NOTICE
          })]
        })]
      }), (0, s.jsx)(r.Clickable, {
        onClick: e => {
          e.stopPropagation(), t(h.ContentDismissActionType.DISMISS), (0, u.trackForumHelperCardClicked)({
            readGuideCta: !1
          })
        },
        children: (0, s.jsx)(i.default, {
          className: x.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, s.jsx)("hr", {
      className: x.separator
    }), (0, s.jsxs)("div", {
      className: x.inline,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.Heading, {
          className: l()(C.__invalid_channelName, x.title),
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: f.default.Messages.FORUM_HELPER_CARD_TITLE
        }), (0, s.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: f.default.Messages.FORUM_HELPER_CARD_BODY
        })]
      }), (0, s.jsx)("img", {
        src: _,
        alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
        width: c.MAX_THUMBNAIL_WIDTH,
        height: c.MAX_THUMBNAIL_WIDTH
      })]
    })]
  })
}