"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("144144"),
  i = n("314897"),
  r = n("944486"),
  o = n("197409"),
  u = n("585483"),
  d = n("51144"),
  c = n("981631"),
  f = n("689938"),
  E = n("558338");

function _(e) {
  let t, n, _, {
      author: T,
      banned: m
    } = e,
    I = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
    p = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId()),
    h = d.default.useName(T),
    N = I === T.id;
  return N ? (t = f.default.Messages.INVITE_BUTTON_INVALID_OWNER, _ = f.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (_ = f.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, m ? t = f.default.Messages.INSTANT_INVITE_BANNED_INFO : null != h ? (t = f.default.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
    username: h
  }), n = (0, s.jsx)(o.default.Button, {
    onClick: function() {
      let {
        id: e
      } = T, t = "@".concat(d.default.getUserTag(T, {
        decoration: "never"
      }));
      u.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
        plainText: t,
        rawText: "<@".concat(e, ">")
      }), null != p && l.default.startTyping(p)
    },
    children: f.default.Messages.MENTION
  })) : t = f.default.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, s.jsxs)(o.default, {
    children: [(0, s.jsx)(o.default.Header, {
      text: _
    }), (0, s.jsxs)(o.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: E.headerLine,
        children: [(0, s.jsx)(o.default.Icon, {
          expired: !0
        }), (0, s.jsx)(o.default.Info, {
          expired: !0,
          title: f.default.Messages.INVITE_BUTTON_INVALID,
          children: t
        })]
      }), n]
    })]
  })
}