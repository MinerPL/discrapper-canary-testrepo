"use strict";
n.r(e), n.d(e, {
  default: function() {
    return m
  }
}), n("222007");
var o = n("37983"),
  l = n("884691"),
  a = n("414456"),
  r = n.n(a),
  s = n("77078"),
  u = n("437822"),
  i = n("152584"),
  c = n("42963"),
  d = n("145131"),
  _ = n("599110"),
  f = n("98013"),
  E = n("439932"),
  T = n("49111"),
  S = n("149806"),
  p = n("782340"),
  A = n("314238");

function N(t) {
  let {
    email: e,
    setEmail: n,
    claimRequired: a,
    onSuccess: _,
    onClose: f
  } = t, [N, C] = l.useState(), [m, g] = l.useState(""), [I, U] = l.useState(""), [O, R] = l.useState(!1);
  l.useEffect(() => c.default.flowStep(S.FlowType.ANY, S.ClaimAccountSteps.CLAIM_ACCOUNT), []);
  let h = async t => {
    t.preventDefault(), R(!0), C(""), U("");
    try {
      await (0, i.saveAccountRequest)({
        email: e,
        password: m
      }), R(!1), _()
    } catch (t) {
      var n, o;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.email) && C(t.body.email), (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.password) && U(t.body.password), R(!1)
    }
  };
  return (0, o.jsxs)("div", {
    className: r(A.modalLight, (0, E.getThemeClass)(T.ThemeTypes.LIGHT)),
    children: [(0, o.jsxs)(s.ModalHeader, {
      className: A.formHeader,
      direction: d.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, o.jsx)("div", {
        className: A.formImage
      }), (0, o.jsx)(s.Heading, {
        className: A.formTitle,
        variant: "heading-xl/semibold",
        children: p.default.Messages.FINISH_SIGNING_UP
      }), (0, o.jsx)(s.Text, {
        className: A.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: a ? p.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : p.default.Messages.CLAIM_ACCOUNT_BODY_2
      }), (0, o.jsx)(s.ModalCloseButton, {
        className: A.closeButton,
        onClick: f
      })]
    }), (0, o.jsx)(s.ModalContent, {
      children: (0, o.jsxs)("form", {
        className: A.formContent,
        onSubmit: h,
        children: [(0, o.jsx)(s.FormItem, {
          title: p.default.Messages.FORM_LABEL_EMAIL,
          className: A.formItem,
          children: (0, o.jsx)(s.TextInput, {
            value: e,
            error: N,
            onChange: t => n(t),
            autoFocus: !0
          })
        }), (0, o.jsx)(s.FormItem, {
          title: p.default.Messages.FORM_LABEL_PASSWORD,
          className: A.formItem,
          children: (0, o.jsx)(s.TextInput, {
            type: "password",
            value: m,
            error: I,
            onChange: t => g(t)
          })
        }), (0, o.jsx)(s.Button, {
          type: "submit",
          size: s.Button.Sizes.LARGE,
          fullWidth: !0,
          submitting: O,
          disabled: 0 === e.length || 0 === m.length,
          children: p.default.Messages.CLAIM_ACCOUNT
        }), a && (0, o.jsx)(s.Button, {
          className: A.logoutButton,
          color: s.Button.Colors.PRIMARY,
          look: s.Button.Looks.LINK,
          size: s.Button.Sizes.NONE,
          onClick: () => {
            u.default.logout(), f()
          },
          children: p.default.Messages.LOGOUT
        })]
      })
    })]
  })
}

function C(t) {
  let {
    email: e,
    claimRequired: n,
    onClose: a
  } = t, u = n ? p.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : p.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;

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
  return l.useEffect(() => c.default.flowStep(S.FlowType.ANY, S.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS), []), (0, o.jsxs)("div", {
    className: r(A.modalLight, (0, E.getThemeClass)(T.ThemeTypes.LIGHT)),
    children: [(0, o.jsxs)(s.ModalContent, {
      className: A.successContent,
      children: [!n && (0, o.jsx)(s.ModalCloseButton, {
        className: A.closeButton,
        onClick: a
      }), (0, o.jsx)("div", {
        className: A.successImage
      }), (0, o.jsx)(s.Text, {
        className: A.successTitle,
        variant: "text-lg/semibold",
        children: u.format({
          email: e
        })
      }), (0, o.jsx)(s.Text, {
        className: A.successPromotion,
        variant: "text-md/normal",
        children: p.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
      })]
    }), n ? (0, o.jsx)(s.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, o.jsx)(s.Button, {
        size: s.Button.Sizes.LARGE,
        onClick: a,
        children: p.default.Messages.OKAY
      })
    }) : (0, o.jsx)(s.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, o.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.LARGE,
        onClick: i,
        children: p.default.Messages.CLAIM_ACCOUNT_GET_APP
      })
    })]
  })
}

function m(t) {
  let {
    onClose: e,
    transitionState: n,
    claimRequired: a = !1
  } = t, [r, u] = l.useState(""), [i, c] = l.useState(!1);
  return i ? (0, o.jsx)(s.ModalRoot, {
    transitionState: n,
    children: (0, o.jsx)(C, {
      email: r,
      claimRequired: a,
      onClose: e
    })
  }) : (0, o.jsx)(s.ModalRoot, {
    transitionState: n,
    children: (0, o.jsx)(N, {
      email: r,
      setEmail: u,
      claimRequired: a,
      onSuccess: () => c(!0),
      onClose: e
    })
  })
}