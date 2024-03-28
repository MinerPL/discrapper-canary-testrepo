"use strict";
n.r(t), n.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return N
  },
  PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY: function() {
    return v
  },
  default: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("990547"),
  i = n("442837"),
  r = n("544891"),
  o = n("481060"),
  u = n("893776"),
  d = n("37234"),
  c = n("809206"),
  f = n("110924"),
  E = n("714338"),
  h = n("213609"),
  _ = n("144114"),
  C = n("210887"),
  m = n("23434"),
  S = n("610001"),
  I = n("78415"),
  p = n("1964"),
  T = n("981631"),
  g = n("815660"),
  A = n("689938");
let N = "Email Verification",
  v = "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY";

function O() {
  let {
    action: e,
    theme: t
  } = (0, i.useStateFromStoresObject)([m.default, C.default], () => ({
    action: m.default.getAction(),
    theme: C.default.theme
  })), O = p.default.getVerificationTypes(e), [R, L] = s.useState(0), P = (0, f.default)(O);
  (0, h.default)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: O[0],
      verification_types: O
    }
  }, {}, [O.toString()]);
  let M = () => {
      (0, c.accountDetailsInit)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("35401")]).then(n.bind(n, "284549"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }, {
        modalKey: N,
        Layer: I.default
      })
    },
    y = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540")]).then(n.bind(n, "607018"));
        return t => (0, a.jsx)(e, {
          reason: _.ChangePhoneReason.USER_ACTION_REQUIRED,
          ...t
        })
      }, {
        modalKey: g.PHONE_VERIFICATION_MODAL_KEY,
        Layer: I.default
      })
    };
  return s.useEffect(() => (E.default.disable(), () => {
    E.default.enable()
  }), []), s.useEffect(() => {
    (null == P ? void 0 : P[0]) === T.VerificationTypes.PHONE && (null == O ? void 0 : O[0]) === T.VerificationTypes.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, "468026"));
      return t => (0, a.jsx)(e, {
        ...t,
        title: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: v,
      Layer: I.default,
      onCloseCallback: M
    })
  }, [O, P]), (0, a.jsx)(S.default, {
    types: O,
    captchaKey: R,
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
      e === T.VerificationTypes.EMAIL_OR_PHONE || e === T.VerificationTypes.EMAIL || e === T.VerificationTypes.REVERIFY_EMAIL ? M() : y()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(n.bind(n, "481060"));
        return n => (0, a.jsx)(e, {
          header: A.default.Messages.LOGOUT,
          confirmText: A.default.Messages.LOGOUT,
          cancelText: A.default.Messages.CANCEL,
          onConfirm: () => u.default.logout(),
          ...n,
          children: (0, a.jsx)(t, {
            variant: "text-md/normal",
            children: A.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
          })
        })
      }, {
        Layer: I.default
      })
    }
  })
}