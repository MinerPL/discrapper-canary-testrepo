"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("794252"), n("222007");
var a = n("37983"),
  i = n("884691"),
  s = n("414456"),
  o = n.n(s),
  r = n("627445"),
  l = n.n(r),
  u = n("483366"),
  d = n.n(u),
  c = n("506838"),
  g = n("446674"),
  m = n("77078"),
  E = n("152584"),
  f = n("644417"),
  S = n("92201"),
  _ = n("79345"),
  v = n("447997"),
  h = n("790618"),
  p = n("697218"),
  T = n("258078"),
  O = n("719923"),
  R = n("49111"),
  M = n("782340"),
  L = n("304124"),
  N = n("182893");
let U = e => {
  let {
    usernameStatus: t,
    showHint: n
  } = e;
  return (0, c.match)(t).with({
    type: f.NameValidationState.ERROR,
    message: c.P.select()
  }, e => (0, a.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-danger",
    children: e
  })).with({
    type: f.NameValidationState.AVAILABLE,
    message: c.P.select()
  }, e => (0, a.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-positive",
    children: e
  })).otherwise(() => n ? (0, a.jsx)(m.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: M.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }) : null)
};

function x(e) {
  var t;
  let {
    transitionState: n,
    onClose: s
  } = e, r = (0, g.useStateFromStores)([p.default], () => {
    let e = p.default.getCurrentUser();
    return l(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), u = i.useMemo(() => O.default.canEditDiscriminator(r) && !r.isPomelo(), [r]), [c, x] = i.useState(!1), [I, P] = i.useState(r.username), [A, C] = i.useState(r.discriminator), [b, y] = i.useState(""), [k, G] = i.useState(!1), w = (0, g.useStateFromStores)([h.default], () => h.default.getErrors()), D = (0, S.useChangeUsernameLivecheckEnabled)(), j = r.isPomelo() && D, F = (0, _.useUsernameStatus)(I, j, !1, r.username), B = i.useRef(null), H = i.useMemo(() => {
    var e, t, n;
    return null !== (n = null == w ? void 0 : null === (e = w.username) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null == w ? void 0 : null === (t = w.discriminator) || void 0 === t ? void 0 : t[0]
  }, [w]);
  i.useEffect(() => {
    if (n === m.ModalTransitionState.ENTERED) {
      var e;
      null === (e = B.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let q = A !== r.discriminator;
  async function V(e) {
    e.preventDefault(), G(!0);
    let t = await (0, E.saveAccountChanges)({
      username: I,
      discriminator: u ? A : void 0,
      password: b
    });
    G(!1), (null == t ? void 0 : t.ok) && s()
  }
  let W = i.useMemo(() => d(x, 50), []);
  return (0, a.jsxs)(m.ModalRoot, {
    transitionState: n,
    children: [(0, a.jsxs)(m.ModalHeader, {
      separator: !1,
      className: L.header,
      children: [(0, a.jsx)(T.default, {
        color: T.default.Colors.HEADER_PRIMARY,
        size: T.default.Sizes.SIZE_24,
        className: L.title,
        children: M.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP
      }), (0, a.jsx)(m.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: L.subtitle,
        children: M.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP
      }), (0, a.jsx)(m.ModalCloseButton, {
        onClick: s,
        className: L.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: V,
      children: [(0, a.jsxs)(m.ModalContent, {
        className: L.content,
        children: [(0, a.jsx)(m.FormItem, {
          title: M.default.Messages.FORM_LABEL_USERNAME,
          error: H,
          children: (0, a.jsxs)("div", {
            className: o(N.input, L.multiInput, {
              [N.error]: null != H,
              [N.focused]: c
            }),
            children: [(0, a.jsx)(m.TextInput, {
              name: "username",
              "aria-label": M.default.Messages.USER_SETTINGS_LABEL_USERNAME,
              value: I,
              maxLength: R.USERNAME_MAX_LENGTH,
              onChange: P,
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              inputRef: B,
              className: L.multiInputFirst,
              inputClassName: o(L.multiInputField, {
                [L.lowercase]: r.isPomelo()
              })
            }), !r.isPomelo() && (0, a.jsx)(m.TextInput, {
              name: "discriminator",
              "aria-label": M.default.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
              maxLength: 4,
              value: A,
              onChange: C,
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              inputPrefix: "#",
              disabled: !u,
              className: L.multiInputLast,
              inputClassName: L.multiInputField
            })]
          })
        }), q ? (0, a.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: L.discriminatorChangeWarning,
          children: M.default.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
        }) : null, j ? (0, a.jsx)(v.default, {
          show: (null == F ? void 0 : F.type) === f.NameValidationState.ERROR || c,
          top: 8,
          bottom: 4,
          children: (0, a.jsx)(U, {
            usernameStatus: F,
            showHint: r.isPomelo()
          })
        }) : null, (0, a.jsx)(m.FormItem, {
          className: L.password,
          title: M.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
          error: null == w ? void 0 : null === (t = w.password) || void 0 === t ? void 0 : t[0],
          children: (0, a.jsx)(m.TextInput, {
            type: "password",
            value: b,
            onChange: y
          })
        })]
      }), (0, a.jsxs)(m.ModalFooter, {
        children: [(0, a.jsx)(m.Button, {
          type: "submit",
          color: m.Button.Colors.BRAND,
          size: m.Button.Sizes.MEDIUM,
          submitting: k,
          children: M.default.Messages.DONE
        }), (0, a.jsx)(m.Button, {
          className: L.cancel,
          look: m.Button.Looks.LINK,
          color: m.Button.Colors.PRIMARY,
          onClick: s,
          children: M.default.Messages.CANCEL
        })]
      })]
    })]
  })
}