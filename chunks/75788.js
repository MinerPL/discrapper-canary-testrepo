n.d(s, {
  Z: function() {
return d;
  }
}), n(47120);
var t = n(735250),
  o = n(470079),
  a = n(442837),
  l = n(481060),
  r = n(479531),
  i = n(393869),
  E = n(25990),
  _ = n(689938),
  N = n(660817);

function d(e) {
  var s;
  let {
isSlideReady: n,
error: d,
setEmailToken: c,
setError: A,
onNext: u,
onClose: C
  } = e, [M, S] = o.useState(!1), [m, I] = o.useState(''), [x, T] = o.useState(!1), R = (0, a.e7)([E.Z], () => E.Z.getErrors()), O = o.useRef(null);
  o.useEffect(() => {
if (n) {
  var e;
  null === (e = O.current) || void 0 === e || e.focus();
}
  }, [n]);
  let h = async e => {
e.preventDefault(), A(null), S(!0);
try {
  let {
    token: e
  } = await (0, i.w)(m);
  c(e), u();
} catch (e) {
  A(new r.Z(e).getAnyErrorMessage());
} finally {
  S(!1);
}
  }, L = async () => {
if (!x) {
  T(!0);
  try {
    await (0, i.i)(!0), (0, l.showToast)((0, l.createToast)(_.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, l.ToastType.SUCCESS));
  } catch (s) {
    let e = new r.Z(s).getAnyErrorMessage();
    null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
  } finally {
    T(!1);
  }
}
  };
  return (0, t.jsxs)('form', {
onSubmit: h,
children: [
  (0, t.jsxs)(l.ModalHeader, {
    separator: !1,
    className: N.header,
    children: [
      (0, t.jsx)(l.Heading, {
        className: N.title,
        variant: 'heading-xl/extrabold',
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }),
      (0, t.jsx)(l.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: N.subtitle,
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }),
      (0, t.jsx)(l.ModalCloseButton, {
        onClick: C,
        className: N.modalCloseButton
      })
    ]
  }),
  (0, t.jsxs)(l.ModalContent, {
    className: N.content,
    children: [
      (0, t.jsx)(l.FormItem, {
        title: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != d ? d : null == R ? void 0 : null === (s = R.email_token) || void 0 === s ? void 0 : s[0],
        children: (0, t.jsx)(l.TextInput, {
          value: m,
          onChange: I,
          inputRef: O
        })
      }),
      (0, t.jsx)(l.Text, {
        className: N.help,
        variant: 'text-sm/normal',
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: L
        })
      })
    ]
  }),
  (0, t.jsx)(l.ModalFooter, {
    children: (0, t.jsx)(l.Button, {
      type: 'submit',
      color: l.Button.Colors.BRAND,
      size: l.Button.Sizes.MEDIUM,
      submitting: M,
      children: _.Z.Messages.NEXT
    })
  })
]
  });
}