"use strict";
n.r(t), n.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return N
  },
  default: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("759843"),
  l = n("446674"),
  r = n("872717"),
  o = n("77078"),
  u = n("437822"),
  d = n("54239"),
  c = n("152584"),
  f = n("84339"),
  E = n("485328"),
  _ = n("428958"),
  h = n("878720"),
  C = n("161778"),
  I = n("330387"),
  T = n("642400"),
  S = n("668596"),
  p = n("892313"),
  m = n("49111"),
  A = n("482931"),
  g = n("782340");
let N = "Email Verification";

function R() {
  let {
    action: e,
    theme: t
  } = (0, l.useStateFromStoresObject)([I.default, C.default], () => ({
    action: I.default.getAction(),
    theme: C.default.theme
  })), R = p.default.getVerificationTypes(e), [O, L] = s.useState(0), v = (0, f.default)(R);
  (0, _.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: R[0],
      verification_types: R
    }
  }, {}, [R.toString()]);
  let M = () => {
      (0, c.accountDetailsInit)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("126667").then(n.bind(n, "126667"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }, {
        modalKey: N,
        Layer: S.default
      })
    },
    P = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("601745").then(n.bind(n, "601745"));
        return t => (0, a.jsx)(e, {
          reason: h.ChangePhoneReason.USER_ACTION_REQUIRED,
          ...t
        })
      }, {
        modalKey: A.PHONE_VERIFICATION_MODAL_KEY,
        Layer: S.default
      })
    };
  return s.useEffect(() => (E.default.disable(), () => {
    E.default.enable()
  }), []), s.useEffect(() => {
    (null == v ? void 0 : v[0]) === m.VerificationTypes.PHONE && (null == R ? void 0 : R[0]) === m.VerificationTypes.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("135230").then(n.bind(n, "135230"));
      return t => (0, a.jsx)(e, {
        ...t,
        title: g.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: g.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: g.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY",
      Layer: S.default,
      onCloseCallback: M
    })
  }, [R, v]), (0, a.jsx)(T.default, {
    types: R,
    captchaKey: O,
    onCaptchaVerify: e => {
      r.default.post({
        url: m.Endpoints.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: !0
      }).then(d.popLayer, () => {
        L(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === m.VerificationTypes.EMAIL_OR_PHONE || e === m.VerificationTypes.EMAIL || e === m.VerificationTypes.REVERIFY_EMAIL ? M() : P()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, a.jsx)(e, {
          header: g.default.Messages.LOGOUT,
          confirmText: g.default.Messages.LOGOUT,
          cancelText: g.default.Messages.CANCEL,
          onConfirm: () => u.default.logout(),
          ...t,
          children: (0, a.jsx)(Text, {
            variant: "text-md/normal",
            children: g.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
          })
        })
      }, {
        Layer: S.default
      })
    }
  })
}