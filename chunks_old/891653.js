"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  l = n("77078"),
  o = n("216422"),
  s = n("782340"),
  u = n("321562");

function d(e) {
  let {
    text: t = s.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: n
  } = e;
  return (0, r.jsx)(l.Tooltip, {
    text: t,
    children: e => (0, r.jsx)(l.Clickable, {
      ...e,
      children: (0, r.jsx)(o.default, {
        className: i(u.nitroWheel, n)
      })
    })
  })
}