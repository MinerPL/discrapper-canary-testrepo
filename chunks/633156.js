"use strict";
n.r(e), n.d(e, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  o = n("414456"),
  r = n.n(o),
  s = n("77078"),
  u = n("437822"),
  i = n("152584"),
  c = n("42963"),
  d = n("145131"),
  _ = n("599110"),
  f = n("98013"),
  E = n("439932"),
  T = n("49111"),
  p = n("149806"),
  A = n("782340"),
  S = n("528414");

function N(t) {
  let {
    email: e,
    setEmail: n,
    claimRequired: o,
    onSuccess: _,
    onClose: f
  } = t, [N, C] = a.useState(), [m, I] = a.useState(""), [g, U] = a.useState(""), [O, R] = a.useState(!1);
  a.useEffect(() => c.default.flowStep(p.FlowType.ANY, p.ClaimAccountSteps.CLAIM_ACCOUNT), []);
  let h = async t => {
    t.preventDefault(), R(!0), C(""), U("");
    try {
      await (0, i.saveAccountRequest)({
        email: e,
        password: m
      }), R(!1), _()
    } catch (t) {
      var n, l;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.email) && C(t.body.email), (null == t ? void 0 : null === (l = t.body) || void 0 === l ? void 0 : l.password) && U(t.body.password), R(!1)
    }
  };
  return (0, l.jsxs)("div", {
    className: r(S.modalLight, (0, E.getThemeClass)(T.ThemeTypes.LIGHT)),
    children: [(0, l.jsxs)(s.ModalHeader, {
      className: S.formHeader,
      direction: d.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: S.formImage
      }), (0, l.jsx)(s.Heading, {
        className: S.formTitle,
        variant: "heading-xl/semibold",
        children: A.default.Messages.FINISH_SIGNING_UP
      }), (0, l.jsx)(s.Text, {
        className: S.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: o ? A.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : A.default.Messages.CLAIM_ACCOUNT_BODY_2
      }), (0, l.jsx)(s.ModalCloseButton, {
        className: S.closeButton,
        onClick: f
      })]
    }), (0, l.jsx)(s.ModalContent, {
      children: (0, l.jsxs)("form", {
        className: S.formContent,
        onSubmit: h,
        children: [(0, l.jsx)(s.FormItem, {
          title: A.default.Messages.FORM_LABEL_EMAIL,
          className: S.formItem,
          children: (0, l.jsx)(s.TextInput, {
            value: e,
            error: N,
            onChange: t => n(t),
            autoFocus: !0
          })
        }), (0, l.jsx)(s.FormItem, {
          title: A.default.Messages.FORM_LABEL_PASSWORD,
          className: S.formItem,
          children: (0, l.jsx)(s.TextInput, {
            type: "password",
            value: m,
            error: g,
            onChange: t => I(t)
          })
        }), (0, l.jsx)(s.Button, {
          type: "submit",
          size: s.Button.Sizes.LARGE,
          fullWidth: !0,
          submitting: O,
          disabled: 0 === e.length || 0 === m.length,
          children: A.default.Messages.CLAIM_ACCOUNT
        }), o && (0, l.jsx)(s.Button, {
          className: S.logoutButton,
          color: s.Button.Colors.PRIMARY,
          look: s.Button.Looks.LINK,
          size: s.Button.Sizes.NONE,
          onClick: () => {
            u.default.logout(), f()
          },
          children: A.default.Messages.LOGOUT
        })]
      })
    })]
  })
}

function C(t) {
  let {
    email: e,
    claimRequired: n,
    onClose: o
  } = t, u = n ? A.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : A.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;

  function i() {
    window.open((0, f.getCurrentPlatformDownloadURL)(), "_blank"), _.default.track(T.AnalyticEvents.DOWNLOAD_APP, {
      platform: (0, f.getPlatformReadableName)(),
      ptb: !1,
      released: !0,
      has_e_mail: !0,
      referring_location: "Claim Modal",
      qr_code: !1
    })
  }
  return a.useEffect(() => c.default.flowStep(p.FlowType.ANY, p.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS), []), (0, l.jsxs)("div", {
    className: r(S.modalLight, (0, E.getThemeClass)(T.ThemeTypes.LIGHT)),
    children: [(0, l.jsxs)(s.ModalContent, {
      className: S.successContent,
      children: [!n && (0, l.jsx)(s.ModalCloseButton, {
        className: S.closeButton,
        onClick: o
      }), (0, l.jsx)("div", {
        className: S.successImage
      }), (0, l.jsx)(s.Text, {
        className: S.successTitle,
        variant: "text-lg/semibold",
        children: u.format({
          email: e
        })
      }), (0, l.jsx)(s.Text, {
        className: S.successPromotion,
        variant: "text-md/normal",
        children: A.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
      })]
    }), n ? (0, l.jsx)(s.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, l.jsx)(s.Button, {
        size: s.Button.Sizes.LARGE,
        onClick: o,
        children: A.default.Messages.OKAY
      })
    }) : (0, l.jsx)(s.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.LARGE,
        onClick: i,
        children: A.default.Messages.CLAIM_ACCOUNT_GET_APP
      })
    })]
  })
}

function m(t) {
  let {
    onClose: e,
    transitionState: n,
    claimRequired: o = !1
  } = t, [r, u] = a.useState(""), [i, c] = a.useState(!1);
  return i ? (0, l.jsx)(s.ModalRoot, {
    transitionState: n,
    children: (0, l.jsx)(C, {
      email: r,
      claimRequired: o,
      onClose: e
    })
  }) : (0, l.jsx)(s.ModalRoot, {
    transitionState: n,
    children: (0, l.jsx)(N, {
      email: r,
      setEmail: u,
      claimRequired: o,
      onSuccess: () => c(!0),
      onClose: e
    })
  })
}