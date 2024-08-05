n.d(s, {
  Z: function() {
return A;
  }
}), n(47120);
var t = n(735250),
  o = n(470079),
  a = n(442837),
  l = n(481060),
  r = n(809206),
  i = n(25990),
  E = n(626135),
  _ = n(155433),
  N = n(981631),
  d = n(689938),
  c = n(660817);

function A(e) {
  var s, n;
  let {
emailToken: A,
isSlideReady: u,
onClose: C,
onBack: M,
onNext: S,
reason: m
  } = e, [I, x] = o.useState(''), [T, R] = o.useState(''), [O, h] = o.useState(!1), L = (0, a.e7)([i.Z], () => i.Z.getErrors()), f = o.useRef(null);
  async function g(e) {
e.preventDefault(), h(!0);
let s = await (0, r.Mn)({
  email: I,
  emailToken: A,
  password: T
});
if (h(!1), null == s ? void 0 : s.ok)
  E.default.track(N.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
    change_email_reason_enum: m
  }), S(I);
else {
  var n, t;
  (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.username) != null ? (0, _.P)() : (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.email_token) != null && (null == M || M());
}
  }
  return o.useEffect(() => {
if (u) {
  var e;
  null === (e = f.current) || void 0 === e || e.focus();
}
  }, [u]), (0, t.jsxs)('form', {
onSubmit: g,
children: [
  (0, t.jsxs)(l.ModalHeader, {
    separator: !1,
    className: c.header,
    children: [
      (0, t.jsx)(l.Heading, {
        className: c.title,
        variant: 'heading-xl/extrabold',
        children: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }),
      (0, t.jsx)(l.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: c.subtitle,
        children: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }),
      (0, t.jsx)(l.ModalCloseButton, {
        onClick: C,
        className: c.modalCloseButton
      })
    ]
  }),
  (0, t.jsxs)(l.ModalContent, {
    className: c.content,
    children: [
      (0, t.jsx)(l.FormItem, {
        title: d.Z.Messages.EMAIL,
        error: null == L ? void 0 : null === (s = L.email) || void 0 === s ? void 0 : s[0],
        children: (0, t.jsx)(l.TextInput, {
          type: 'email',
          value: I,
          onChange: x,
          inputRef: f
        })
      }),
      (0, t.jsx)(l.FormItem, {
        className: c.password,
        title: d.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == L ? void 0 : null === (n = L.password) || void 0 === n ? void 0 : n[0],
        children: (0, t.jsx)(l.TextInput, {
          type: 'password',
          value: T,
          onChange: R
        })
      })
    ]
  }),
  (0, t.jsxs)(l.ModalFooter, {
    children: [
      (0, t.jsx)(l.Button, {
        type: 'submit',
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: O,
        children: d.Z.Messages.DONE
      }),
      null != M ? (0, t.jsx)(l.Button, {
        className: c.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: M,
        children: d.Z.Messages.BACK
      }) : (0, t.jsx)(l.Button, {
        className: c.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: C,
        children: d.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}