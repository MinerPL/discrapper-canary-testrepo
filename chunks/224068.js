"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("627341");
var a = l("735250");
l("470079");
var s = l("803997"),
  i = l.n(s),
  n = l("278074"),
  r = l("979554"),
  o = l("481060"),
  d = l("689938"),
  c = l("457188");

function u(e) {
  var t;
  let {
    item: l,
    isDarkText: s = !1
  } = e;
  let u = (t = null == l ? void 0 : l.type, (0, n.match)(t).with(r.CollectiblesItemType.AVATAR_DECORATION, () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.CollectiblesItemType.PROFILE_EFFECT, () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === u ? null : (0, a.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: i()([c.container, s ? c.darkText : c.lightText]),
    children: u
  })
}