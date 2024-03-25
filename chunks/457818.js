"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  a = n("446674"),
  r = n("77078"),
  l = n("152584"),
  i = n("790618"),
  E = n("648661"),
  _ = n("782340"),
  u = n("917908");

function T(e) {
  var t, n;
  let {
    emailToken: T,
    isSlideReady: d,
    onClose: S,
    onBack: N,
    onNext: c
  } = e, [C, A] = o.useState(""), [I, f] = o.useState(""), [R, U] = o.useState(!1), O = (0, a.useStateFromStores)([i.default], () => i.default.getErrors()), m = o.useRef(null);
  async function p(e) {
    e.preventDefault(), U(!0);
    let t = await (0, l.saveAccountChanges)({
      email: C,
      emailToken: T,
      password: I
    });
    if (U(!1), null == t ? void 0 : t.ok) c(C);
    else {
      var n, s;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, E.showInvalidUsernameToast)() : (null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.email_token) != null && (null == N || N())
    }
  }
  return o.useEffect(() => {
    if (d) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [d]), (0, s.jsxs)("form", {
    onSubmit: p,
    children: [(0, s.jsxs)(r.ModalHeader, {
      separator: !1,
      className: u.header,
      children: [(0, s.jsx)(r.Heading, {
        className: u.title,
        variant: "heading-xl/extrabold",
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: u.subtitle,
        children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }), (0, s.jsx)(r.ModalCloseButton, {
        onClick: S,
        className: u.modalCloseButton
      })]
    }), (0, s.jsxs)(r.ModalContent, {
      className: u.content,
      children: [(0, s.jsx)(r.FormItem, {
        title: _.default.Messages.EMAIL,
        error: null == O ? void 0 : null === (t = O.email) || void 0 === t ? void 0 : t[0],
        children: (0, s.jsx)(r.TextInput, {
          type: "email",
          value: C,
          onChange: A,
          inputRef: m
        })
      }), (0, s.jsx)(r.FormItem, {
        className: u.password,
        title: _.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == O ? void 0 : null === (n = O.password) || void 0 === n ? void 0 : n[0],
        children: (0, s.jsx)(r.TextInput, {
          type: "password",
          value: I,
          onChange: f
        })
      })]
    }), (0, s.jsxs)(r.ModalFooter, {
      children: [(0, s.jsx)(r.Button, {
        type: "submit",
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.MEDIUM,
        submitting: R,
        children: _.default.Messages.DONE
      }), null != N ? (0, s.jsx)(r.Button, {
        className: u.cancel,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: N,
        children: _.default.Messages.BACK
      }) : (0, s.jsx)(r.Button, {
        className: u.cancel,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        onClick: S,
        children: _.default.Messages.CANCEL
      })]
    })]
  })
}