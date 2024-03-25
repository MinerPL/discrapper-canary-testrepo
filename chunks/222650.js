"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("429224"),
  o = n("550762"),
  u = n("381546"),
  d = n("733160"),
  c = n("713573"),
  E = n("850642"),
  f = n("782340"),
  _ = n("382051"),
  T = e => {
    let {
      channelId: t,
      messageId: n
    } = e, T = (0, l.useStateFromStores)([E.default], () => E.default.shouldShowBump(n), [n]), I = a.useCallback(() => {
      r.default.dismissPublishBump(n), (0, o.default)(t, n)
    }, [t, n]), m = a.useCallback(() => {
      r.default.dismissPublishBump(n)
    }, [n]), N = a.useCallback(() => {
      r.default.permanentlyHidePublishBump(t)
    }, [t]);
    return T ? (0, s.jsxs)("div", {
      className: _.container,
      children: [(0, s.jsxs)("div", {
        className: _.bumpBox,
        children: [(0, s.jsx)(d.default, {
          className: _.icon
        }), (0, s.jsx)(c.default, {
          className: _.tagline,
          size: c.default.Sizes.SIZE_14,
          children: f.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP
        }), (0, s.jsx)(i.Button, {
          color: i.Button.Colors.LINK,
          look: i.Button.Looks.LINK,
          size: i.Button.Sizes.MIN,
          className: _.publish,
          onClick: I,
          children: f.default.Messages.NEWS_CHANNEL_PUBLISH
        }), (0, s.jsx)(i.Clickable, {
          onClick: m,
          children: (0, s.jsx)(u.default, {
            className: _.closeIcon,
            width: 16,
            height: 16
          })
        })]
      }), (0, s.jsx)(i.Text, {
        color: "text-muted",
        className: _.hidePermanently,
        variant: "text-sm/normal",
        children: (0, s.jsx)(i.Clickable, {
          onClick: N,
          children: f.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
        })
      })]
    }) : null
  }