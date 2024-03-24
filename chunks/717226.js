"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  i = s.n(l),
  o = s("77078"),
  r = s("49111"),
  n = s("782340"),
  u = s("124085");

function c(e) {
  let {
    className: t,
    ...s
  } = e;
  return (0, a.jsx)(o.Button, {
    ...s,
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.SMALL,
    className: i(u.actionButton, t)
  })
}

function d(e) {
  let {
    isCurrentUser: t,
    user: s,
    relationshipType: l,
    onAddFriend: i,
    onIgnoreFriend: d,
    onSendMessage: f
  } = e;
  return t || l === r.RelationshipTypes.BLOCKED ? null : l === r.RelationshipTypes.FRIEND || s.bot ? (0, a.jsx)(c, {
    color: o.Button.Colors.GREEN,
    onClick: f,
    children: n.default.Messages.SEND_MESSAGE
  }) : l === r.RelationshipTypes.PENDING_OUTGOING ? (0, a.jsx)(c, {
    color: o.Button.Colors.GREEN,
    disabled: !0,
    children: n.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : l === r.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)("div", {
    className: u.pendingIncoming,
    children: [(0, a.jsx)(c, {
      color: o.Button.Colors.GREEN,
      onClick: i,
      children: n.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, a.jsx)(c, {
      color: o.Button.Colors.PRIMARY,
      onClick: d,
      className: u.actionRightButton,
      children: n.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, a.jsx)(c, {
    color: o.Button.Colors.GREEN,
    onClick: i,
    children: n.default.Messages.ADD_FRIEND_BUTTON
  })
}