"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(441319),
  s = n(689938);

function o(e) {
  let {
    id: t,
    width: n = r.M9
  } = e, o = r.QA[t];
  return null == o ? null : (0, i.jsx)("img", {
    src: o.iconSource,
    width: n,
    alt: s.Z.Messages.SETTINGS_CUSTOM_APP_ICONS,
    draggable: !1
  })
}