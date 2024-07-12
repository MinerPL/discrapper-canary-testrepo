t.d(s, {
  Z: function() {
return _;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  o = t(442837),
  l = t(481060),
  r = t(479531),
  i = t(393869),
  d = t(25990),
  c = t(689938),
  u = t(660817);

function _(e) {
  var s;
  let {
isSlideReady: t,
error: _,
setEmailToken: E,
setError: N,
onNext: C,
onClose: A
  } = e, [m, S] = a.useState(!1), [T, M] = a.useState(''), [x, I] = a.useState(!1), R = (0, o.e7)([d.Z], () => d.Z.getErrors()), h = a.useRef(null);
  a.useEffect(() => {
if (t) {
  var e;
  null === (e = h.current) || void 0 === e || e.focus();
}
  }, [t]);
  let v = async e => {
e.preventDefault(), N(null), S(!0);
try {
  let {
    token: e
  } = await (0, i.w)(T);
  E(e), C();
} catch (e) {
  N(new r.Z(e).getAnyErrorMessage());
} finally {
  S(!1);
}
  }, O = async () => {
if (!x) {
  I(!0);
  try {
    await (0, i.i)(!0), (0, l.showToast)((0, l.createToast)(c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, l.ToastType.SUCCESS));
  } catch (s) {
    let e = new r.Z(s).getAnyErrorMessage();
    null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
  } finally {
    I(!1);
  }
}
  };
  return (0, n.jsxs)('form', {
onSubmit: v,
children: [
  (0, n.jsxs)(l.ModalHeader, {
    separator: !1,
    className: u.header,
    children: [
      (0, n.jsx)(l.Heading, {
        className: u.title,
        variant: 'heading-xl/extrabold',
        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }),
      (0, n.jsx)(l.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: u.subtitle,
        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }),
      (0, n.jsx)(l.ModalCloseButton, {
        onClick: A,
        className: u.modalCloseButton
      })
    ]
  }),
  (0, n.jsxs)(l.ModalContent, {
    className: u.content,
    children: [
      (0, n.jsx)(l.FormItem, {
        title: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != _ ? _ : null == R ? void 0 : null === (s = R.email_token) || void 0 === s ? void 0 : s[0],
        children: (0, n.jsx)(l.TextInput, {
          value: T,
          onChange: M,
          inputRef: h
        })
      }),
      (0, n.jsx)(l.Text, {
        className: u.help,
        variant: 'text-sm/normal',
        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: O
        })
      })
    ]
  }),
  (0, n.jsx)(l.ModalFooter, {
    children: (0, n.jsx)(l.Button, {
      type: 'submit',
      color: l.Button.Colors.BRAND,
      size: l.Button.Sizes.MEDIUM,
      submitting: m,
      children: c.Z.Messages.NEXT
    })
  })
]
  });
}