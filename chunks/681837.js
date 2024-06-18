"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(692547),
  o = n(981729),
  a = n(759231),
  l = n(621853),
  u = n(228168),
  _ = n(689938),
  d = n(295847);

function c(e) {
  let {
    userId: t
  } = e;
  return (0, r.e7)([l.Z], () => {
    var e, n;
    return null !== (n = null === (e = l.Z.getUserProfile(t)) || void 0 === e ? void 0 : e.profileFetchFailed) && void 0 !== n && n
  }) ? (0, i.jsx)(o.DY, {
    className: d.container,
    text: _.Z.Messages.USER_PROFILE_LOAD_ERROR,
    delay: u.vB,
    children: (0, i.jsx)(a.Z, {
      color: s.Z.colors.STATUS_WARNING.css,
      width: 16,
      height: 16
    })
  }) : null
}