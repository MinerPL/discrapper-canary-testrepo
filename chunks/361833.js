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
  i = s("809206"),
  r = s("25990"),
  d = s("155433"),
  u = s("689938"),
  c = s("414899");

function E(e) {
  var t, s;
  let {
    emailToken: E,
    isSlideReady: C,
    onClose: _,
    onBack: N,
    onNext: m
  } = e, [S, T] = l.useState(""), [A, f] = l.useState(""), [M, I] = l.useState(!1), h = (0, n.useStateFromStores)([r.default], () => r.default.getErrors()), x = l.useRef(null);
  async function R(e) {
    e.preventDefault(), I(!0);
    let t = await (0, i.saveAccountChanges)({
      email: S,
      emailToken: E,
      password: A
    });
    if (I(!1), null == t ? void 0 : t.ok) m(S);
    else {
      var s, a;
      (null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.username) != null ? (0, d.showInvalidUsernameToast)() : (null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.email_token) != null && (null == N || N())
    }
  }
  return l.useEffect(() => {
    if (C) {
      var e;
      null === (e = x.current) || void 0 === e || e.focus()
    }
  }, [C]), (0, a.jsxs)("form", {
    onSubmit: R,
    children: [(0, a.jsxs)(o.ModalHeader, {
      separator: !1,
      className: c.header,
      children: [(0, a.jsx)(o.Heading, {
        className: c.title,
        variant: "heading-xl/extrabold",
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }), (0, a.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: c.subtitle,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: _,
        className: c.modalCloseButton
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: c.content,
      children: [(0, a.jsx)(o.FormItem, {
        title: u.default.Messages.EMAIL,
        error: null == h ? void 0 : null === (t = h.email) || void 0 === t ? void 0 : t[0],
        children: (0, a.jsx)(o.TextInput, {
          type: "email",
          value: S,
          onChange: T,
          inputRef: x
        })
      }), (0, a.jsx)(o.FormItem, {
        className: c.password,
        title: u.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == h ? void 0 : null === (s = h.password) || void 0 === s ? void 0 : s[0],
        children: (0, a.jsx)(o.TextInput, {
          type: "password",
          value: A,
          onChange: f
        })
      })]
    }), (0, a.jsxs)(o.ModalFooter, {
      children: [(0, a.jsx)(o.Button, {
        type: "submit",
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.MEDIUM,
        submitting: M,
        children: u.default.Messages.DONE
      }), null != N ? (0, a.jsx)(o.Button, {
        className: c.__invalid_cancel,
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: N,
        children: u.default.Messages.BACK
      }) : (0, a.jsx)(o.Button, {
        className: c.__invalid_cancel,
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: _,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}