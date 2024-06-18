"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(806519),
  o = n(768581),
  a = n(689938),
  l = n(359959);
t.Z = e => {
  var t;
  let {
    entry: n
  } = e, {
    id: u,
    icon: _,
    name: d
  } = n, c = null !== (t = o.ZP.getGuildIconURL({
    id: u,
    icon: _,
    size: 32
  })) && void 0 !== t ? t : void 0;
  return (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsx)(r.Heading, {
      className: l.header,
      variant: "heading-sm/semibold",
      children: a.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
    }), (0, i.jsx)("div", {
      className: l.guildContainer,
      children: (0, i.jsxs)("div", {
        className: l.guildInfo,
        children: [(0, i.jsx)(s.ZP, {
          mask: s.ZP.Masks.SQUIRCLE,
          width: 32,
          height: 32,
          className: l.guildIconMask,
          children: (0, i.jsx)("img", {
            src: c,
            alt: "",
            className: l.guildIcon
          })
        }), (0, i.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: d
        })]
      })
    })]
  })
}