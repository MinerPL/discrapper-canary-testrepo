"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("735250");
n("470079");
var a = n("703656"),
  s = n("669405"),
  i = n("434479"),
  r = n("981631"),
  o = n("176505"),
  u = n("689938");

function d(e) {
  let {
    guild: t,
    selected: n
  } = e;
  return (0, l.jsx)(i.default, {
    renderIcon: e => (0, l.jsx)(s.default, {
      className: e,
      width: 24,
      height: 24
    }),
    text: u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
    selected: n,
    onClick: () => {
      (0, a.transitionTo)(r.Routes.CHANNEL(t.id, o.StaticChannelRoute.MEMBER_APPLICATIONS))
    }
  })
}