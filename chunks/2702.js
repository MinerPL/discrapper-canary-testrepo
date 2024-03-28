"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("627341"), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("803997"),
  o = n.n(a),
  r = n("512722"),
  l = n.n(r),
  u = n("954955"),
  d = n.n(u),
  c = n("278074"),
  g = n("442837"),
  m = n("481060"),
  E = n("809206"),
  f = n("219496"),
  S = n("575681"),
  _ = n("807369"),
  h = n("180529"),
  v = n("25990"),
  p = n("594174"),
  T = n("154921"),
  O = n("74538"),
  R = n("981631"),
  M = n("689938"),
  L = n("403432"),
  N = n("717897");
let U = e => {
  let {
    usernameStatus: t,
    showHint: n
  } = e;
  return (0, c.match)(t).with({
    type: f.NameValidationState.ERROR,
    message: c.P.select()
  }, e => (0, i.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-danger",
    children: e
  })).with({
    type: f.NameValidationState.AVAILABLE,
    message: c.P.select()
  }, e => (0, i.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-positive",
    children: e
  })).otherwise(() => n ? (0, i.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: M.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }) : null)
};

function x(e) {
  var t;
  let {
    transitionState: n,
    onClose: a
  } = e, r = (0, g.useStateFromStores)([p.default], () => {
    let e = p.default.getCurrentUser();
    return l()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), u = s.useMemo(() => O.default.canEditDiscriminator(r) && !r.isPomelo(), [r]), [c, x] = s.useState(!1), [b, P] = s.useState(r.username), [I, A] = s.useState(r.discriminator), [C, y] = s.useState(""), [k, G] = s.useState(!1), w = (0, g.useStateFromStores)([v.default], () => v.default.getErrors()), D = (0, S.useChangeUsernameLivecheckEnabled)(), j = r.isPomelo() && D, F = (0, _.useUsernameStatus)(b, j, !1, r.username), B = s.useRef(null), H = s.useMemo(() => {
    var e, t, n;
    return null !== (n = null == w ? void 0 : null === (e = w.username) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null == w ? void 0 : null === (t = w.discriminator) || void 0 === t ? void 0 : t[0]
  }, [w]);
  s.useEffect(() => {
    if (n === m.ModalTransitionState.ENTERED) {
      var e;
      null === (e = B.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let q = I !== r.discriminator;
  async function V(e) {
    e.preventDefault(), G(!0);
    let t = await (0, E.saveAccountChanges)({
      username: b,
      discriminator: u ? I : void 0,
      password: C
    });
    G(!1), (null == t ? void 0 : t.ok) && a()
  }
  let W = s.useMemo(() => d()(x, 50), []);
  return (0, i.jsxs)(m.ModalRoot, {
    transitionState: n,
    children: [(0, i.jsxs)(m.ModalHeader, {
      separator: !1,
      className: L.header,
      children: [(0, i.jsx)(T.default, {
        color: T.default.Colors.HEADER_PRIMARY,
        size: T.default.Sizes.SIZE_24,
        className: L.title,
        children: M.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP
      }), (0, i.jsx)(m.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: L.subtitle,
        children: M.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP
      }), (0, i.jsx)(m.ModalCloseButton, {
        onClick: a,
        className: L.modalCloseButton
      })]
    }), (0, i.jsxs)("form", {
      onSubmit: V,
      children: [(0, i.jsxs)(m.ModalContent, {
        className: L.content,
        children: [(0, i.jsx)(m.FormItem, {
          title: M.default.Messages.FORM_LABEL_USERNAME,
          error: H,
          children: (0, i.jsxs)("div", {
            className: o()(N.input, L.multiInput, {
              [N.error]: null != H,
              [N.focused]: c
            }),
            children: [(0, i.jsx)(m.TextInput, {
              name: "username",
              "aria-label": M.default.Messages.USER_SETTINGS_LABEL_USERNAME,
              value: b,
              maxLength: R.USERNAME_MAX_LENGTH,
              onChange: P,
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              inputRef: B,
              className: L.multiInputFirst,
              inputClassName: o()(L.multiInputField, {
                [L.lowercase]: r.isPomelo()
              })
            }), !r.isPomelo() && (0, i.jsx)(m.TextInput, {
              name: "discriminator",
              "aria-label": M.default.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
              maxLength: 4,
              value: I,
              onChange: A,
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              inputPrefix: "#",
              disabled: !u,
              className: L.multiInputLast,
              inputClassName: L.multiInputField
            })]
          })
        }), q ? (0, i.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: L.discriminatorChangeWarning,
          children: M.default.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
        }) : null, j ? (0, i.jsx)(h.default, {
          show: (null == F ? void 0 : F.type) === f.NameValidationState.ERROR || c,
          top: 8,
          bottom: 4,
          children: (0, i.jsx)(U, {
            usernameStatus: F,
            showHint: r.isPomelo()
          })
        }) : null, (0, i.jsx)(m.FormItem, {
          className: L.password,
          title: M.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
          error: null == w ? void 0 : null === (t = w.password) || void 0 === t ? void 0 : t[0],
          children: (0, i.jsx)(m.TextInput, {
            type: "password",
            value: C,
            onChange: y
          })
        })]
      }), (0, i.jsxs)(m.ModalFooter, {
        children: [(0, i.jsx)(m.Button, {
          type: "submit",
          color: m.Button.Colors.BRAND,
          size: m.Button.Sizes.MEDIUM,
          submitting: k,
          children: M.default.Messages.DONE
        }), (0, i.jsx)(m.Button, {
          className: L.cancel,
          look: m.Button.Looks.LINK,
          color: m.Button.Colors.PRIMARY,
          onClick: a,
          children: M.default.Messages.CANCEL
        })]
      })]
    })]
  })
}