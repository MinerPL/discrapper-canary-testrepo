"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("689938"),
  i = n("843809");
t.default = e => {
  let {
    guild: t,
    onClose: r
  } = e;
  return (0, a.jsxs)("div", {
    className: i.container,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: i.image,
      src: n("238980")
    }), (0, a.jsxs)("div", {
      className: i.content,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: s.default.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({
          guild: t.name
        })
      }), (0, a.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: s.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
      }), (0, a.jsx)("div", {
        className: i.buttonContainer,
        children: (0, a.jsx)(l.Button, {
          onClick: r,
          children: s.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
        })
      })]
    })]
  })
}