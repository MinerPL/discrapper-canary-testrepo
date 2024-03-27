"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("450911"),
  r = n("970728"),
  o = n("766274"),
  u = n("271938"),
  d = n("42203"),
  c = n("27618"),
  E = n("174622"),
  f = n("158998"),
  _ = n("49111"),
  T = n("782340"),
  I = n("599541");

function m(e) {
  var t;
  let {
    invite: n,
    getAcceptInviteContext: m
  } = e, N = (0, l.useStateFromStores)([u.default], () => u.default.getId()), p = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === N, S = n.state === _.InviteStates.ACCEPTING, C = (0, l.useStateFromStores)([c.default], () => {
    var e;
    return null != n.inviter && c.default.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id)
  }), A = a.useCallback(() => {
    if (null != n.inviter) {
      let e = d.default.getDMFromUserId(n.inviter.id);
      null != e && i.default.openPrivateChannel([n.inviter.id])
    }
  }, [n.inviter]), h = a.useCallback(() => {
    let e = m("Invite Button Embed");
    r.default.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n.code, m]);
  if (null == n.inviter) return null;
  let g = C ? A : h,
    M = T.default.Messages.INVITE_BUTTON_ADD_FRIEND,
    O = E.default.Button.Colors.GREEN;
  C ? (M = T.default.Messages.INVITE_BUTTON_ALREADY_FRIENDS, O = E.default.Button.Colors.PRIMARY) : p && (M = T.default.Messages.INVITE_BUTTON_ADD_FRIEND, O = E.default.Button.Colors.PRIMARY);
  let R = p ? T.default.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : T.default.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
    L = null != n.inviter ? "".concat(n.inviter.username) : "",
    v = null != n.inviter ? f.default.getUserTag(n.inviter) : "";
  return (0, s.jsxs)(E.default, {
    children: [(0, s.jsx)(E.default.Header, {
      text: R
    }), (0, s.jsxs)(E.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: I.headerLine,
        children: [(0, s.jsx)(E.default.Icon, {
          user: new o.default(n.inviter),
          onClick: C ? g : void 0
        }), (0, s.jsx)(E.default.Info, {
          title: L,
          onClick: C ? g : void 0,
          children: v
        })]
      }), (0, s.jsx)(E.default.Button, {
        onClick: g,
        submitting: S,
        isDisabled: p,
        color: O,
        children: M
      })]
    })]
  })
}