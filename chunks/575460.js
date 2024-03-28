"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("259580"),
  i = n("528027"),
  r = n("686807"),
  o = n("113318"),
  u = n("710539");

function d(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: d
  } = e, c = (0, o.default)(n, t.ref_id), f = (0, a.jsx)(i.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, a.jsxs)(l.Clickable, {
    className: u.container,
    onClick: () => {
      null == c || c.navigateToChannel(), d()
    },
    "aria-label": null == c ? void 0 : c.ariaLabel,
    role: "link",
    children: [(0, a.jsx)("div", {
      className: u.emojiContainer,
      children: f
    }), (0, a.jsxs)("div", {
      className: u.infoContainer,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: u.name,
        children: (0, r.default)(t)
      }), (0, a.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, a.jsx)(s.default, {
      direction: s.default.Directions.RIGHT,
      className: u.caret
    })]
  })
}