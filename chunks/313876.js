"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("314897"),
  i = n("197409"),
  r = n("782605"),
  o = n("689938");

function u(e) {
  var t, n;
  let {
    author: u,
    inviteError: d
  } = e, c = (0, a.useStateFromStores)([l.default], () => l.default.getId()) === u.id ? o.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : o.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, f = (0, r.getDescriptiveInviteError)(null == d ? void 0 : d.code);
  return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: c
    }), (0, s.jsxs)(i.default.Body, {
      children: [(0, s.jsx)(i.default.Icon, {
        expired: !0
      }), (0, s.jsx)(i.default.Info, {
        expired: !0,
        title: null !== (t = null == f ? void 0 : f.title) && void 0 !== t ? t : o.default.Messages.INVITE_BUTTON_INVALID,
        children: null !== (n = null == f ? void 0 : f.description) && void 0 !== n ? n : null == d ? void 0 : d.message
      })]
    })]
  })
}