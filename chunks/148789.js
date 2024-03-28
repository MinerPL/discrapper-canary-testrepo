"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("194359"),
  r = n("689938"),
  o = n("533342");

function u(e) {
  let {
    userId: t
  } = e, n = a.useCallback(e => {
    e.stopPropagation(), i.default.cancelFriendRequest(t)
  }, [t]), u = a.useCallback(e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t
    })
  }, [t]);
  return (0, s.jsxs)("div", {
    className: o.friendRequestContainer,
    children: [(0, s.jsx)(l.Button, {
      className: o.acceptButton,
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.GREEN,
      size: l.Button.Sizes.NONE,
      onClick: u,
      children: (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_ACCEPT
      })
    }), (0, s.jsx)(l.Button, {
      className: o.ignoreButton,
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.PRIMARY,
      size: l.Button.Sizes.NONE,
      onClick: n,
      children: (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_IGNORE
      })
    })]
  })
}