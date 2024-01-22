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
  l = n("152584"),
  i = n("790618"),
  E = n("258078"),
  _ = n("648661"),
  u = n("782340"),
  T = n("679012");

function S(e) {
  var t, n;
  let {
    emailToken: S,
    isSlideReady: d,
    onClose: N,
    onBack: c
  } = e, [C, A] = s.useState(""), [I, f] = s.useState(""), [R, U] = s.useState(!1), O = (0, a.useStateFromStores)([i.default], () => i.default.getErrors()), m = s.useRef(null);
  async function p(e) {
    e.preventDefault(), U(!0);
    let t = await (0, l.saveAccountChanges)({
      email: C,
      emailToken: S,
      password: I
    });
    if (U(!1), null == t ? void 0 : t.ok) N();
    else {
      var n, o;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, _.showInvalidUsernameToast)() : (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.email_token) != null && (null == c || c())
    }
  }
  return s.useEffect(() => {
    if (d) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [d]), (0, o.jsxs)("form", {
    onSubmit: p,
    children: [(0, o.jsxs)(r.ModalHeader, {
      separator: !1,
      className: T.header,
      children: [(0, o.jsx)(E.default, {
        color: E.default.Colors.HEADER_PRIMARY,
        size: E.default.Sizes.SIZE_24,
        className: T.title,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }), (0, o.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: T.subtitle,
        children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }), (0, o.jsx)(r.ModalCloseButton, {
        onClick: N,
        className: T.modalCloseButton
      })]
    }), (0, o.jsxs)(r.ModalContent, {
      className: T.content,
      children: [(0, o.jsx)(r.FormItem, {
        title: u.default.Messages.EMAIL,
        error: null == O ? void 0 : null === (t = O.email) || void 0 === t ? void 0 : t[0],
        children: (0, o.jsx)(r.TextInput, {
          type: "email",
          value: C,
          onChange: A,
          inputRef: m
        })
      }), (0, o.jsx)(r.FormItem, {
        className: T.password,
        title: u.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == O ? void 0 : null === (n = O.password) || void 0 === n ? void 0 : n[0],
        children: (0, o.jsx)(r.TextInput, {
          type: "password",
          value: I,
          onChange: f
        })
      })]
    }), (0, o.jsxs)(r.ModalFooter, {
      children: [(0, o.jsx)(r.Button, {
        type: "submit",
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.MEDIUM,
        submitting: R,
        children: u.default.Messages.DONE
      }), null != c ? (0, o.jsx)(r.Button, {
        className: T.cancel,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: c,
        children: u.default.Messages.BACK
      }) : (0, o.jsx)(r.Button, {
        className: T.cancel,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: N,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}