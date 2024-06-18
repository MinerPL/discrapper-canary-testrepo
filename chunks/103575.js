"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(594174),
  l = n(447452),
  u = n(877485),
  _ = n(788197),
  d = n(969835);

function c(e) {
  let {
    location: t,
    userId: n,
    user: r,
    ...c
  } = e, {
    basicsEnabled: E
  } = (0, l.t)({
    location: t
  }), {
    originalFriendingEnabled: I,
    improvedFriendingEnabled: T
  } = (0, u.V)({
    location: t
  }), h = (0, o.e7)([a.default], () => a.default.getUser(n), [n]), S = null != r ? r : h;
  return (s()(null != S, "Unexpected missing user"), (E || I || T) && !S.bot && !S.isNonUserBot() && !S.isClyde()) ? (0, i.jsx)(d.Z, {
    ...c,
    user: S
  }) : (0, i.jsx)(_.Z, {
    ...c,
    user: S
  })
}