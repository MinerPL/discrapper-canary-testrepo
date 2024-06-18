"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(278297),
  l = n(138599),
  u = n(897353),
  _ = n(689938),
  d = n(875170);
t.Z = e => {
  let {
    onPlay: t,
    externalURL: n,
    className: r,
    renderLinkComponent: c,
    inactive: E,
    messageId: I,
    channelId: T
  } = e;
  return (0, i.jsx)(a.G.Consumer, {
    children: e => (0, i.jsxs)("div", {
      className: s()(r, d.wrapper, {
        [d.disableInteractions]: e.disableInteractions
      }),
      children: [E && null == t ? (0, i.jsx)("div", {
        className: d.iconWrapper,
        children: (0, i.jsx)(u.Z, {
          className: d.iconPlay
        })
      }) : null, null != t ? (0, i.jsx)(o.Clickable, {
        onClick: t,
        className: s()(d.iconWrapperActive),
        tabIndex: E ? -1 : 0,
        "aria-label": _.Z.Messages.PLAY,
        children: (0, i.jsx)(u.Z, {
          className: d.iconPlay
        })
      }) : null, null != n ? c({
        href: n,
        target: "_blank",
        rel: "noreferrer noopener",
        className: d.iconWrapperActive,
        children: (0, i.jsx)(l.Z, {
          "aria-label": _.Z.Messages.OPEN_LINK,
          className: null != t ? d.iconExternalMargins : d.iconExternal
        }),
        messageId: I,
        channelId: T
      }) : null]
    })
  })
}