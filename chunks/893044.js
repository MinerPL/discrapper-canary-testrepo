"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var o = n("37983"),
  s = n("884691"),
  a = n("446674"),
  r = n("77078"),
  l = n("599417"),
  i = n("734990"),
  E = n("790618"),
  _ = n("258078"),
  u = n("782340"),
  T = n("679012");

function S(e) {
  var t;
  let {
    isSlideReady: n,
    error: S,
    setEmailToken: d,
    setError: N,
    onNext: c,
    onClose: C
  } = e, [A, I] = s.useState(!1), [f, R] = s.useState(""), [U, O] = s.useState(!1), m = (0, a.useStateFromStores)([E.default], () => E.default.getErrors()), p = s.useRef(null);
  s.useEffect(() => {
    if (n) {
      var e;
      null === (e = p.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let v = async e => {
    e.preventDefault(), N(null), I(!0);
    try {
      let {
        token: e
      } = await (0, i.confirmEmailChange)(f);
      d(e), c()
    } catch (t) {
      let e = new l.default(t);
      N(e.getAnyErrorMessage())
    } finally {
      I(!1)
    }
  }, M = async () => {
    if (!U) {
      O(!0);
      try {
        await (0, i.sendConfirmationCode)(!0), (0, r.showToast)((0, r.createToast)(u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, r.ToastType.SUCCESS))
      } catch (n) {
        let e = new l.default(n),
          t = e.getAnyErrorMessage();
        null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
      } finally {
        O(!1)
      }
    }
  };
  return (0, o.jsxs)("form", {
    onSubmit: v,
    children: [(0, o.jsxs)(r.ModalHeader, {
      separator: !1,
      className: T.header,
      children: [(0, o.jsx)(_.default, {
        color: _.default.Colors.HEADER_PRIMARY,
        size: _.default.Sizes.SIZE_24,
        className: T.title,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }), (0, o.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: T.subtitle,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }), (0, o.jsx)(r.ModalCloseButton, {
        onClick: C,
        className: T.modalCloseButton
      })]
    }), (0, o.jsxs)(r.ModalContent, {
      className: T.content,
      children: [(0, o.jsx)(r.FormItem, {
        title: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != S ? S : null == m ? void 0 : null === (t = m.email_token) || void 0 === t ? void 0 : t[0],
        children: (0, o.jsx)(r.TextInput, {
          value: f,
          onChange: R,
          inputRef: p
        })
      }), (0, o.jsx)(r.Text, {
        className: T.help,
        variant: "text-sm/normal",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: M
        })
      })]
    }), (0, o.jsx)(r.ModalFooter, {
      children: (0, o.jsx)(r.Button, {
        type: "submit",
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.MEDIUM,
        submitting: A,
        children: u.default.Messages.NEXT
      })
    })]
  })
}