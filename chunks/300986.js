"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("692547"),
  i = n("481060"),
  r = n("706454"),
  o = n("594174"),
  u = n("396525"),
  d = n("502568"),
  c = n("626135"),
  f = n("63063"),
  E = n("51144"),
  _ = n("981631"),
  T = n("689938");
let m = new Set(["ko", "ja"]);

function I() {
  let e = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([r.default], () => r.default.locale),
    n = (0, E.isNewUser)(e);
  return (0, s.jsx)(i.Anchor, {
    href: f.SUPPORT_LOCATION,
    target: "_blank",
    tabIndex: -1,
    children: (0, s.jsx)(d.Icon, {
      color: n ? l.default.unsafe_rawColors.GREEN_360.css : "currentColor",
      onClick: () => c.default.track(_.AnalyticEvents.HELP_CLICKED, {
        highlighted: n
      }),
      icon: u.default,
      tooltipPosition: m.has(t) ? "left" : void 0,
      tooltip: T.default.Messages.HELP
    })
  })
}