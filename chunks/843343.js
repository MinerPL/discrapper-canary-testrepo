"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("299379"),
  r = n("486472"),
  o = n("430824"),
  u = n("682662"),
  d = n("662146"),
  c = n("981631"),
  f = n("689938"),
  h = n("646612");

function C() {
  let e = (0, a.useStateFromStores)([r.default, o.default], () => r.default.unavailableGuilds.filter(e => null == o.default.getGuild(e)).length);
  return e <= 0 ? null : (0, l.jsx)(u.ListItem, {
    children: (0, l.jsx)(d.default, {
      text: f.default.Messages.PARTIAL_OUTAGE.format({
        count: e
      }),
      color: s.Tooltip.Colors.RED,
      children: (0, l.jsx)(s.Anchor, {
        href: (0, i.default)(c.LocalizedLinks.TWITTER),
        target: "_blank",
        className: h.guildsError,
        "aria-label": f.default.Messages.PARTIAL_OUTAGE_A11Y.format({
          count: e
        }),
        children: (0, l.jsx)("span", {
          "aria-hidden": !0,
          className: h.errorInner,
          children: "!"
        })
      })
    })
  })
}