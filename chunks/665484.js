"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("794252");
var a = l("37983");
l("884691");
var s = l("414456"),
  i = l.n(s),
  n = l("506838"),
  r = l("265586"),
  o = l("77078"),
  d = l("782340"),
  u = l("483665");

function c(e) {
  var t;
  let {
    item: l,
    isDarkText: s = !1
  } = e;
  let c = (t = null == l ? void 0 : l.type, (0, n.match)(t).with(r.CollectiblesItemType.AVATAR_DECORATION, () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.CollectiblesItemType.PROFILE_EFFECT, () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === c ? null : (0, a.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: i([u.container, s ? u.darkText : u.lightText]),
    children: c
  })
}