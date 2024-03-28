"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  o = s("481060"),
  i = s("479531"),
  r = s("393869"),
  d = s("25990"),
  u = s("689938"),
  c = s("92190");

function E(e) {
  var t;
  let {
    isSlideReady: s,
    error: E,
    setEmailToken: C,
    setError: _,
    onNext: N,
    onClose: m
  } = e, [S, T] = l.useState(!1), [f, A] = l.useState(""), [M, I] = l.useState(!1), h = (0, n.useStateFromStores)([d.default], () => d.default.getErrors()), x = l.useRef(null);
  l.useEffect(() => {
    if (s) {
      var e;
      null === (e = x.current) || void 0 === e || e.focus()
    }
  }, [s]);
  let p = async e => {
    e.preventDefault(), _(null), T(!0);
    try {
      let {
        token: e
      } = await (0, r.confirmEmailChange)(f);
      C(e), N()
    } catch (e) {
      _(new i.default(e).getAnyErrorMessage())
    } finally {
      T(!1)
    }
  }, R = async () => {
    if (!M) {
      I(!0);
      try {
        await (0, r.sendConfirmationCode)(!0), (0, o.showToast)((0, o.createToast)(u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, o.ToastType.SUCCESS))
      } catch (t) {
        let e = new i.default(t).getAnyErrorMessage();
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
      } finally {
        I(!1)
      }
    }
  };
  return (0, a.jsxs)("form", {
    onSubmit: p,
    children: [(0, a.jsxs)(o.ModalHeader, {
      separator: !1,
      className: c.header,
      children: [(0, a.jsx)(o.Heading, {
        className: c.title,
        variant: "heading-xl/extrabold",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }), (0, a.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: c.subtitle,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: m,
        className: c.modalCloseButton
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: c.content,
      children: [(0, a.jsx)(o.FormItem, {
        title: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != E ? E : null == h ? void 0 : null === (t = h.email_token) || void 0 === t ? void 0 : t[0],
        children: (0, a.jsx)(o.TextInput, {
          value: f,
          onChange: A,
          inputRef: x
        })
      }), (0, a.jsx)(o.Text, {
        className: c.help,
        variant: "text-sm/normal",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: R
        })
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsx)(o.Button, {
        type: "submit",
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.MEDIUM,
        submitting: S,
        children: u.default.Messages.NEXT
      })
    })]
  })
}