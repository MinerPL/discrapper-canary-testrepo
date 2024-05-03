"use strict";
t.r(s), t.d(s, {
  default: function() {
    return o
  }
});
var a = t("735250");
t("470079");
var r = t("120356"),
  l = t.n(r),
  i = t("481060"),
  n = t("204197"),
  C = t("985004");

function o(e) {
  var s;
  let {
    user: t,
    checked: r,
    onChange: o,
    disabled: d
  } = e, {
    avatarSrc: c,
    eventHandlers: u
  } = (0, n.default)({
    user: t,
    size: i.AvatarSizes.SIZE_32
  }), f = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsxs)("div", {
      className: C.user,
      children: [(0, a.jsx)(i.Avatar, {
        className: l()({
          [C.muted]: d
        }),
        src: c,
        "aria-label": f,
        size: i.AvatarSizes.SIZE_32,
        ...u
      }), (0, a.jsx)(i.Text, {
        color: d ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, a.jsx)("div", {
      className: C.checkbox,
      children: (0, a.jsx)(i.Checkbox, {
        disabled: d,
        value: r,
        onChange: (e, s) => o(t, s)
      })
    })]
  })
}