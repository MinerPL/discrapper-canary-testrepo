"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(466111),
  l = n(689938),
  u = n(243172);

function _(e) {
  let {
    text: t = l.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: n
  } = e;
  return (0, i.jsx)(o.Tooltip, {
    text: t,
    children: e => (0, i.jsx)(o.Clickable, {
      ...e,
      children: (0, i.jsx)(a.Z, {
        className: s()(u.nitroWheel, n)
      })
    })
  })
}