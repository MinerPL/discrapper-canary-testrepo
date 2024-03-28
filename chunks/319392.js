"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var o = n("481060"),
  i = n("726542"),
  r = n("277390"),
  a = n("63063"),
  l = n("376340"),
  d = n("981631"),
  u = n("927923"),
  c = n("689938"),
  f = n("59737"),
  C = n("418811");

function T() {
  return (0, s.jsxs)("div", {
    className: f.getXboxApp,
    children: [(0, s.jsxs)("div", {
      className: f.getXboxAppBody,
      children: [(0, s.jsxs)(o.Heading, {
        className: f.getXboxAppHeading,
        variant: "text-lg/semibold",
        children: [(0, s.jsx)("div", {
          className: f.xboxLogoBox,
          children: (0, s.jsx)("img", {
            src: i.default.get(d.PlatformTypes.XBOX).icon.whiteSVG,
            alt: ""
          })
        }), c.default.Messages.GET_XBOX_APP]
      }), (0, s.jsx)(o.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: c.default.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, s.jsx)(o.Anchor, {
          href: a.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION),
          children: c.default.Messages.LEARN_MORE
        })
      })]
    }), (0, s.jsx)(r.default, {
      className: f.getXboxAppQR,
      text: u.XBOX_APP_WEB_LINK,
      size: 90
    })]
  })
}

function _(e) {
  let {
    onClose: t
  } = e;
  return (0, s.jsx)(l.TwoWayLinkSuccess, {
    img: (0, s.jsx)("img", {
      src: C,
      width: "232",
      height: "113",
      alt: ""
    }),
    title: c.default.Messages.CONNECT_XBOX_SUCCESS_TITLE,
    body: c.default.Messages.CONNECT_XBOX_SUCCESS_BODY,
    content: (0, s.jsx)(T, {}),
    onClose: t
  })
}