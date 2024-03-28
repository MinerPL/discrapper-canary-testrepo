"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("809206"),
  o = s("25990"),
  d = s("154921"),
  u = s("155433"),
  c = s("981631"),
  S = s("689938"),
  E = s("370362");

function T(e) {
  var t, s, T, _;
  let {
    transitionState: f,
    onSuccess: m,
    onClose: g,
    requirementsUpdated: h,
    noSkip: N = !1
  } = e, [I, p] = n.useState(""), [C, A] = n.useState(""), [O, x] = n.useState(""), [R, M] = n.useState(null), [v, D] = n.useState(null), L = (0, l.useStateFromStores)([o.default], () => o.default.getErrors()), P = (0, l.useStateFromStores)([o.default], () => o.default.getFormState()), j = n.useRef(null);
  async function b(e) {
    e.preventDefault(), (0, r.clearErrors)();
    let t = !1;
    if ("" === C ? (M(S.default.Messages.PASSWORD_REQUIREMENTS_EMPTY), t = !0) : M(null), C !== O ? (D(S.default.Messages.FORM_LABEL_NEW_PASSWORD_MISMATCH), t = !0) : D(null), t) return;
    let s = await (0, r.saveAccountChanges)({
      password: I,
      newPassword: C
    });
    if (null == s ? void 0 : s.ok) m();
    else {
      var a;
      (null == s ? void 0 : null === (a = s.body) || void 0 === a ? void 0 : a.username) != null && (0, u.showInvalidUsernameToast)()
    }
  }
  return n.useEffect(() => {
    if (f === i.ModalTransitionState.ENTERED) {
      var e;
      null === (e = j.current) || void 0 === e || e.focus()
    }
  }, [f]), (0, a.jsxs)(i.ModalRoot, {
    transitionState: f,
    children: [(0, a.jsxs)(i.ModalHeader, {
      separator: !1,
      className: E.header,
      children: [(0, a.jsx)(d.default, {
        color: d.default.Colors.HEADER_PRIMARY,
        size: d.default.Sizes.SIZE_24,
        className: E.title,
        children: S.default.Messages.UPDATE_PASSWORD
      }), (0, a.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: E.subtitle,
        children: h ? S.default.Messages.FORCE_PASSWORD_UPDATE_DESCRIPTION : S.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_PASSWORD_PROMPT_DESKTOP
      }), !0 !== N && (0, a.jsx)(i.ModalCloseButton, {
        onClick: g,
        className: E.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: b,
      children: [(0, a.jsxs)(i.ModalContent, {
        className: E.content,
        children: [(0, a.jsx)(i.FormItem, {
          title: S.default.Messages.FORM_LABEL_CURRENT_PASSWORD,
          error: null == L ? void 0 : null === (t = L.password) || void 0 === t ? void 0 : t[0],
          children: (0, a.jsx)(i.TextInput, {
            type: "password",
            value: I,
            onChange: p,
            inputRef: j
          })
        }), (0, a.jsx)(i.FormItem, {
          className: E.newPassword,
          title: S.default.Messages.FORM_LABEL_NEW_PASSWORD,
          error: null !== (_ = null !== (T = null == L ? void 0 : null === (s = L.new_password) || void 0 === s ? void 0 : s[0]) && void 0 !== T ? T : R) && void 0 !== _ ? _ : void 0,
          children: (0, a.jsx)(i.TextInput, {
            type: "password",
            value: C,
            onChange: A
          })
        }), (0, a.jsx)(i.FormItem, {
          className: E.newPassword,
          title: S.default.Messages.FORM_LABEL_CONFIRM_NEW_PASSWORD,
          error: null != v ? v : void 0,
          children: (0, a.jsx)(i.TextInput, {
            type: "password",
            value: O,
            onChange: x
          })
        })]
      }), (0, a.jsxs)(i.ModalFooter, {
        children: [(0, a.jsx)(i.Button, {
          type: "submit",
          color: i.Button.Colors.BRAND,
          size: i.Button.Sizes.MEDIUM,
          submitting: P === c.FormStates.SUBMITTING,
          children: S.default.Messages.DONE
        }), !0 !== N && (0, a.jsx)(i.Button, {
          className: E.cancel,
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: g,
          children: S.default.Messages.CANCEL
        })]
      })]
    })]
  })
}