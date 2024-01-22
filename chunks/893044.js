"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  a = n("446674"),
  r = n("77078"),
  l = n("599417"),
  i = n("734990"),
  E = n("790618"),
  _ = n("782340"),
  u = n("679012");

function d(e) {
  var t;
  let {
    isSlideReady: n,
    error: d,
    setEmailToken: T,
    setError: S,
    onNext: N,
    onClose: c
  } = e, [C, A] = o.useState(!1), [I, f] = o.useState(""), [R, U] = o.useState(!1), O = (0, a.useStateFromStores)([E.default], () => E.default.getErrors()), m = o.useRef(null);
  o.useEffect(() => {
    if (n) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let p = async e => {
    e.preventDefault(), S(null), A(!0);
    try {
      let {
        token: e
      } = await (0, i.confirmEmailChange)(I);
      T(e), N()
    } catch (t) {
      let e = new l.default(t);
      S(e.getAnyErrorMessage())
    } finally {
      A(!1)
    }
  }, M = async () => {
    if (!R) {
      U(!0);
      try {
        await (0, i.sendConfirmationCode)(!0), (0, r.showToast)((0, r.createToast)(_.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, r.ToastType.SUCCESS))
      } catch (n) {
        let e = new l.default(n),
          t = e.getAnyErrorMessage();
        null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
      } finally {
        U(!1)
      }
    }
  };
  return (0, s.jsxs)("form", {
    onSubmit: p,
    children: [(0, s.jsxs)(r.ModalHeader, {
      separator: !1,
      className: u.header,
      children: [(0, s.jsx)(r.Heading, {
        className: u.title,
        variant: "heading-xl/extrabold",
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: u.subtitle,
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }), (0, s.jsx)(r.ModalCloseButton, {
        onClick: c,
        className: u.modalCloseButton
      })]
    }), (0, s.jsxs)(r.ModalContent, {
      className: u.content,
      children: [(0, s.jsx)(r.FormItem, {
        title: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != d ? d : null == O ? void 0 : null === (t = O.email_token) || void 0 === t ? void 0 : t[0],
        children: (0, s.jsx)(r.TextInput, {
          value: I,
          onChange: f,
          inputRef: m
        })
      }), (0, s.jsx)(r.Text, {
        className: u.help,
        variant: "text-sm/normal",
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: M
        })
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsx)(r.Button, {
        type: "submit",
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.MEDIUM,
        submitting: C,
        children: _.default.Messages.NEXT
      })
    })]
  })
}