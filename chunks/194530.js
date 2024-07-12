s.r(t), s.d(t, {
  default: function() {
return T;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(809206),
  l = s(25990),
  c = s(154921),
  d = s(155433),
  _ = s(981631),
  E = s(689938),
  u = s(440478);

function T(e) {
  var t, s, T, I;
  let {
transitionState: S,
onSuccess: N,
onClose: C,
requirementsUpdated: m,
noSkip: A = !1
  } = e, [h, g] = a.useState(''), [O, p] = a.useState(''), [R, x] = a.useState(''), [M, D] = a.useState(null), [f, P] = a.useState(null), L = (0, i.e7)([l.Z], () => l.Z.getErrors()), Z = (0, i.e7)([l.Z], () => l.Z.getFormState()), b = a.useRef(null);
  async function v(e) {
e.preventDefault(), (0, o.b9)();
let t = !1;
if ('' === O ? (D(E.Z.Messages.PASSWORD_REQUIREMENTS_EMPTY), t = !0) : D(null), O !== R ? (P(E.Z.Messages.FORM_LABEL_NEW_PASSWORD_MISMATCH), t = !0) : P(null), t)
  return;
let s = await (0, o.Mn)({
  password: h,
  newPassword: O
});
if (null == s ? void 0 : s.ok)
  N();
else {
  var n;
  (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.username) != null && (0, d.P)();
}
  }
  return a.useEffect(() => {
if (S === r.ModalTransitionState.ENTERED) {
  var e;
  null === (e = b.current) || void 0 === e || e.focus();
}
  }, [S]), (0, n.jsxs)(r.ModalRoot, {
transitionState: S,
children: [
  (0, n.jsxs)(r.ModalHeader, {
    separator: !1,
    className: u.header,
    children: [
      (0, n.jsx)(c.Z, {
        color: c.Z.Colors.HEADER_PRIMARY,
        size: c.Z.Sizes.SIZE_24,
        className: u.title,
        children: E.Z.Messages.UPDATE_PASSWORD
      }),
      (0, n.jsx)(r.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: u.subtitle,
        children: m ? E.Z.Messages.FORCE_PASSWORD_UPDATE_DESCRIPTION : E.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_PASSWORD_PROMPT_DESKTOP
      }),
      !0 !== A && (0, n.jsx)(r.ModalCloseButton, {
        onClick: C,
        className: u.modalCloseButton
      })
    ]
  }),
  (0, n.jsxs)('form', {
    onSubmit: v,
    children: [
      (0, n.jsxs)(r.ModalContent, {
        className: u.content,
        children: [
          (0, n.jsx)(r.FormItem, {
            title: E.Z.Messages.FORM_LABEL_CURRENT_PASSWORD,
            error: null == L ? void 0 : null === (t = L.password) || void 0 === t ? void 0 : t[0],
            children: (0, n.jsx)(r.TextInput, {
              type: 'password',
              value: h,
              onChange: g,
              inputRef: b
            })
          }),
          (0, n.jsx)(r.FormItem, {
            className: u.newPassword,
            title: E.Z.Messages.FORM_LABEL_NEW_PASSWORD,
            error: null !== (I = null !== (T = null == L ? void 0 : null === (s = L.new_password) || void 0 === s ? void 0 : s[0]) && void 0 !== T ? T : M) && void 0 !== I ? I : void 0,
            children: (0, n.jsx)(r.TextInput, {
              type: 'password',
              value: O,
              onChange: p
            })
          }),
          (0, n.jsx)(r.FormItem, {
            className: u.newPassword,
            title: E.Z.Messages.FORM_LABEL_CONFIRM_NEW_PASSWORD,
            error: null != f ? f : void 0,
            children: (0, n.jsx)(r.TextInput, {
              type: 'password',
              value: R,
              onChange: x
            })
          })
        ]
      }),
      (0, n.jsxs)(r.ModalFooter, {
        children: [
          (0, n.jsx)(r.Button, {
            type: 'submit',
            color: r.Button.Colors.BRAND,
            size: r.Button.Sizes.MEDIUM,
            submitting: Z === _.QZA.SUBMITTING,
            children: E.Z.Messages.DONE
          }),
          !0 !== A && (0, n.jsx)(r.Button, {
            className: u.cancel,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: C,
            children: E.Z.Messages.CANCEL
          })
        ]
      })
    ]
  })
]
  });
}