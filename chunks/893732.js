"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("789695"),
  i = n("689938"),
  r = n("692214");

function o(e) {
  let {
    onClose: t,
    guildName: n
  } = e;
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)("div", {
      className: r.iconContainer,
      children: (0, a.jsx)(s.default, {
        className: r.icon,
        width: 20,
        height: 20
      })
    }), (0, a.jsxs)("div", {
      className: r.header,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        className: r.headerText,
        children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
          guildName: n
        })
      }), (0, a.jsx)(l.Button, {
        onClick: t,
        className: r.button,
        children: i.default.Messages.OKAY
      })]
    })]
  })
}