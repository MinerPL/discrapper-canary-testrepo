n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(314897),
  r = n(197409),
  l = n(782605),
  o = n(689938);

function c(e) {
  var t, n;
  let {
author: c,
inviteError: d
  } = e, u = (0, a.e7)([s.default], () => s.default.getId()) === c.id ? o.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : o.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, _ = (0, l.l)(null == d ? void 0 : d.code);
  return (0, i.jsxs)(r.Z, {
children: [
  (0, i.jsx)(r.Z.Header, {
    text: u
  }),
  (0, i.jsxs)(r.Z.Body, {
    children: [
      (0, i.jsx)(r.Z.Icon, {
        expired: !0
      }),
      (0, i.jsx)(r.Z.Info, {
        expired: !0,
        title: null !== (t = null == _ ? void 0 : _.title) && void 0 !== t ? t : o.Z.Messages.INVITE_BUTTON_INVALID,
        children: null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : null == d ? void 0 : d.message
      })
    ]
  })
]
  });
}