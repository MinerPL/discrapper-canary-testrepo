n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(955415),
  r = n(314897),
  l = n(782605),
  o = n(689938);

function c(e) {
  var t, n;
  let {
author: c,
inviteError: u
  } = e, d = (0, s.e7)([r.default], () => r.default.getId()) === c.id ? o.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : o.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, _ = (0, l.l)(null == u ? void 0 : u.code);
  return (0, i.jsxs)(a.Z, {
children: [
  (0, i.jsx)(a.Z.Header, {
    text: d
  }),
  (0, i.jsxs)(a.Z.Body, {
    children: [
      (0, i.jsx)(a.Z.Icon, {
        expired: !0
      }),
      (0, i.jsx)(a.Z.Info, {
        expired: !0,
        title: null !== (t = null == _ ? void 0 : _.title) && void 0 !== t ? t : o.Z.Messages.INVITE_BUTTON_INVALID,
        children: null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : null == u ? void 0 : u.message
      })
    ]
  })
]
  });
}