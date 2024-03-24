"use strict";
n.r(t), n.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return N
  },
  PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY: function() {
    return R
  },
  default: function() {
    return O
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("759843"),
  i = n("446674"),
  r = n("872717"),
  o = n("77078"),
  u = n("437822"),
  d = n("54239"),
  c = n("152584"),
  f = n("84339"),
  E = n("485328"),
  h = n("428958"),
  _ = n("878720"),
  C = n("161778"),
  S = n("330387"),
  I = n("642400"),
  m = n("668596"),
  p = n("892313"),
  T = n("49111"),
  g = n("482931"),
  A = n("782340");
let N = "Email Verification",
  R = "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY";

function O() {
  let {
    action: e,
    theme: t
  } = (0, i.useStateFromStoresObject)([S.default, C.default], () => ({
    action: S.default.getAction(),
    theme: C.default.theme
  })), O = p.default.getVerificationTypes(e), [v, L] = s.useState(0), M = (0, f.default)(O);
  (0, h.default)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: O[0],
      verification_types: O
    }
  }, {}, [O.toString()]);
  let P = () => {
      (0, c.accountDetailsInit)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("126667").then(n.bind(n, "126667"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }, {
        modalKey: N,
        Layer: m.default
      })
    },
    y = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("601745").then(n.bind(n, "601745"));
        return t => (0, a.jsx)(e, {
          reason: _.ChangePhoneReason.USER_ACTION_REQUIRED,
          ...t
        })
      }, {
        modalKey: g.PHONE_VERIFICATION_MODAL_KEY,
        Layer: m.default
      })
    };
  return s.useEffect(() => (E.default.disable(), () => {
    E.default.enable()
  }), []), s.useEffect(() => {
    (null == M ? void 0 : M[0]) === T.VerificationTypes.PHONE && (null == O ? void 0 : O[0]) === T.VerificationTypes.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("135230").then(n.bind(n, "135230"));
      return t => (0, a.jsx)(e, {
        ...t,
        title: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: R,
      Layer: m.default,
      onCloseCallback: P
    })
  }, [O, M]), (0, a.jsx)(I.default, {
    types: O,
    captchaKey: v,
    onCaptchaVerify: e => {
      r.HTTP.post({
        url: T.Endpoints.CAPTCHA,
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
      e === T.VerificationTypes.EMAIL_OR_PHONE || e === T.VerificationTypes.EMAIL || e === T.VerificationTypes.REVERIFY_EMAIL ? P() : y()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, a.jsx)(e, {
          header: A.default.Messages.LOGOUT,
          confirmText: A.default.Messages.LOGOUT,
          cancelText: A.default.Messages.CANCEL,
          onConfirm: () => u.default.logout(),
          ...t,
          children: (0, a.jsx)(Text, {
            variant: "text-md/normal",
            children: A.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
          })
        })
      }, {
        Layer: m.default
      })
    }
  })
}