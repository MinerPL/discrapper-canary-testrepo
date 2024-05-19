"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("692547"),
  s = n("981729"),
  o = n("759231"),
  l = n("621853"),
  u = n("228168"),
  d = n("689938"),
  _ = n("295847");

function c(e) {
  let {
    userId: t
  } = e;
  return (0, r.useStateFromStores)([l.default], () => {
    var e, n;
    return null !== (n = null === (e = l.default.getUserProfile(t)) || void 0 === e ? void 0 : e.profileFetchFailed) && void 0 !== n && n
  }) ? (0, i.jsx)(s.TooltipContainer, {
    className: _.container,
    text: d.default.Messages.USER_PROFILE_LOAD_ERROR,
    delay: u.USER_PROFILE_TOOLTIP_DELAY,
    children: (0, i.jsx)(o.default, {
      color: a.default.colors.STATUS_WARNING.css,
      width: 16,
      height: 16
    })
  }) : null
}