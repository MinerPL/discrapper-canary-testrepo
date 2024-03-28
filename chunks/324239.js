"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var l = n("735250"),
  o = n("470079"),
  a = n("803997"),
  s = n.n(a),
  r = n("481060"),
  i = n("893776"),
  u = n("809206"),
  c = n("390885"),
  d = n("285952"),
  f = n("626135"),
  m = n("361207"),
  p = n("792125"),
  g = n("981631"),
  _ = n("630724"),
  C = n("689938"),
  A = n("737292");

function S(e) {
  let {
    email: t,
    setEmail: n,
    claimRequired: a,
    onSuccess: f,
    onClose: m
  } = e, [S, T] = o.useState(), [N, w] = o.useState(""), [I, E] = o.useState(""), [h, O] = o.useState(!1);
  o.useEffect(() => c.default.flowStep(_.FlowType.ANY, _.ClaimAccountSteps.CLAIM_ACCOUNT), []);
  let v = async e => {
    e.preventDefault(), O(!0), T(""), E("");
    try {
      await (0, u.saveAccountRequest)({
        email: t,
        password: N
      }), O(!1), f()
    } catch (e) {
      var n, l;
      (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && T(e.body.email), (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.password) && E(e.body.password), O(!1)
    }
  };
  return (0, l.jsxs)("div", {
    className: s()(A.modalLight, (0, p.getThemeClass)(g.ThemeTypes.LIGHT)),
    children: [(0, l.jsxs)(r.ModalHeader, {
      className: A.formHeader,
      direction: d.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: A.formImage
      }), (0, l.jsx)(r.Heading, {
        className: A.formTitle,
        variant: "heading-xl/semibold",
        children: C.default.Messages.FINISH_SIGNING_UP
      }), (0, l.jsx)(r.Text, {
        className: A.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: a ? C.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : C.default.Messages.CLAIM_ACCOUNT_BODY_2
      }), (0, l.jsx)(r.ModalCloseButton, {
        className: A.closeButton,
        onClick: m
      })]
    }), (0, l.jsx)(r.ModalContent, {
      children: (0, l.jsxs)("form", {
        className: A.formContent,
        onSubmit: v,
        children: [(0, l.jsx)(r.FormItem, {
          title: C.default.Messages.FORM_LABEL_EMAIL,
          className: A.formItem,
          children: (0, l.jsx)(r.TextInput, {
            value: t,
            error: S,
            onChange: e => n(e),
            autoFocus: !0
          })
        }), (0, l.jsx)(r.FormItem, {
          title: C.default.Messages.FORM_LABEL_PASSWORD,
          className: A.formItem,
          children: (0, l.jsx)(r.TextInput, {
            type: "password",
            value: N,
            error: I,
            onChange: e => w(e)
          })
        }), (0, l.jsx)(r.Button, {
          type: "submit",
          size: r.Button.Sizes.LARGE,
          fullWidth: !0,
          submitting: h,
          disabled: 0 === t.length || 0 === N.length,
          children: C.default.Messages.CLAIM_ACCOUNT
        }), a && (0, l.jsx)(r.Button, {
          className: A.logoutButton,
          color: r.Button.Colors.PRIMARY,
          look: r.Button.Looks.LINK,
          size: r.Button.Sizes.NONE,
          onClick: () => {
            i.default.logout(), m()
          },
          children: C.default.Messages.LOGOUT
        })]
      })
    })]
  })
}

function T(e) {
  let {
    email: t,
    claimRequired: n,
    onClose: a
  } = e, i = n ? C.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : C.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;

  function u() {
    window.open((0, m.getCurrentPlatformDownloadURL)(), "_blank"), f.default.track(g.AnalyticEvents.DOWNLOAD_APP, {
      platform: (0, m.getPlatformReadableName)(),
      ptb: !1,
      released: !0,
      has_e_mail: !0,
      referring_location: "Claim Modal",
      qr_code: !1
    })
  }
  return o.useEffect(() => c.default.flowStep(_.FlowType.ANY, _.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS), []), (0, l.jsxs)("div", {
    className: s()(A.modalLight, (0, p.getThemeClass)(g.ThemeTypes.LIGHT)),
    children: [(0, l.jsxs)(r.ModalContent, {
      className: A.successContent,
      children: [!n && (0, l.jsx)(r.ModalCloseButton, {
        className: A.closeButton,
        onClick: a
      }), (0, l.jsx)("div", {
        className: A.successImage
      }), (0, l.jsx)(r.Text, {
        className: A.successTitle,
        variant: "text-lg/semibold",
        children: i.format({
          email: t
        })
      }), (0, l.jsx)(r.Text, {
        className: A.successPromotion,
        variant: "text-md/normal",
        children: C.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
      })]
    }), n ? (0, l.jsx)(r.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, l.jsx)(r.Button, {
        size: r.Button.Sizes.LARGE,
        onClick: a,
        children: C.default.Messages.OKAY
      })
    }) : (0, l.jsx)(r.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, l.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.LARGE,
        onClick: u,
        children: C.default.Messages.CLAIM_ACCOUNT_GET_APP
      })
    })]
  })
}

function N(e) {
  let {
    onClose: t,
    transitionState: n,
    claimRequired: a = !1
  } = e, [s, i] = o.useState(""), [u, c] = o.useState(!1);
  return u ? (0, l.jsx)(r.ModalRoot, {
    transitionState: n,
    children: (0, l.jsx)(T, {
      email: s,
      claimRequired: a,
      onClose: t
    })
  }) : (0, l.jsx)(r.ModalRoot, {
    transitionState: n,
    children: (0, l.jsx)(S, {
      email: s,
      setEmail: i,
      claimRequired: a,
      onSuccess: () => c(!0),
      onClose: t
    })
  })
}