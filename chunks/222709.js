"use strict";
n.r(t);
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("528963"),
  o = n("143740"),
  u = n("696202"),
  d = n("316949"),
  c = n("727218"),
  f = n("212342"),
  E = n("689938"),
  _ = n("383923");
t.default = e => {
  let {
    channelId: t,
    messageId: n
  } = e, T = (0, l.useStateFromStores)([f.default], () => f.default.shouldShowBump(n), [n]), m = a.useCallback(() => {
    r.default.dismissPublishBump(n), (0, o.default)(t, n)
  }, [t, n]), I = a.useCallback(() => {
    r.default.dismissPublishBump(n)
  }, [n]), p = a.useCallback(() => {
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
        children: E.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP
      }), (0, s.jsx)(i.Button, {
        color: i.Button.Colors.LINK,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.MIN,
        className: _.publish,
        onClick: m,
        children: E.default.Messages.NEWS_CHANNEL_PUBLISH
      }), (0, s.jsx)(i.Clickable, {
        onClick: I,
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
        onClick: p,
        children: E.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
      })
    })]
  }) : null
}