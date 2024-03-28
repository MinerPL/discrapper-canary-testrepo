"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  l = a("990547"),
  o = a("442837"),
  s = a("481060"),
  i = a("390885"),
  u = a("594174"),
  c = a("626135"),
  d = a("63063"),
  f = a("771308"),
  p = a("13430"),
  A = a("723359"),
  h = a("981631"),
  E = a("630724"),
  _ = a("689938"),
  m = a("475512");

function v(e) {
  let {
    transitionState: t,
    onClose: a
  } = e, [v, g] = r.useState(null), [b, y] = r.useState(null), [T, G] = r.useState(!1), x = r.createRef(), M = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser()), O = r.createRef();
  r.useEffect(() => {
    i.default.flowStep(E.FlowType.ANY, E.AgeGateSteps.AGE_GATE), c.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), r.useEffect(() => {
    (null == M ? void 0 : M.nsfwAllowed) != null && a()
  }, [M, a]);
  let S = async e => {
    if (e.preventDefault(), null != v) {
      G(!0);
      try {
        await f.submitDateOfBirth(v, h.AnalyticsSections.CLAIM_ACCOUNT_MODAL)
      } catch (e) {
        if (null != e.body && null != e.body.date_of_birth) i.default.flowStep(E.FlowType.ANY, E.AgeGateSteps.AGE_GATE_UNDERAGE), f.preventUnderageRegistration(A.AgeGateSource.CLAIM_ACCOUNT), f.logoutUnderageNewUser(A.AgeGateSource.CLAIM_ACCOUNT), a();
        else {
          var t;
          (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? y(_.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : y(null == e ? void 0 : e.body.message)
        }
      }
      G(!1)
    }
  }, R = r.useCallback(() => {
    var e;
    null === (e = O.current) || void 0 === e || e.focus()
  }, [O]);
  return (0, n.jsx)(s.ModalRoot, {
    transitionState: t,
    size: s.ModalSize.DYNAMIC,
    "aria-label": _.default.Messages.AGE_GATE_HEADER,
    className: m.modal,
    impression: {
      impressionName: l.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !1
      }
    },
    children: (0, n.jsxs)(s.ModalContent, {
      className: m.content,
      children: [(0, n.jsx)("div", {
        className: m.image
      }), (0, n.jsxs)("form", {
        onSubmit: S,
        children: [(0, n.jsx)(s.Heading, {
          className: m.title,
          variant: "heading-xl/semibold",
          children: _.default.Messages.AGE_GATE_HEADER
        }), (0, n.jsx)(s.Text, {
          color: "header-secondary",
          className: m.description,
          variant: "text-md/normal",
          children: _.default.Messages.AGE_GATE_BODY.format({
            helpURL: d.default.getArticleURL(h.HelpdeskArticles.AGE_GATE)
          })
        }), (0, n.jsx)(p.default, {
          required: !0,
          autoFocus: !0,
          wrapperClassName: m.formItem,
          label: _.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
          name: "birthday",
          onChange: e => g(e),
          onPopulated: R,
          error: b,
          value: v,
          ref: x
        }), (0, n.jsx)(s.Button, {
          buttonRef: O,
          type: "submit",
          size: s.Button.Sizes.LARGE,
          submitting: T,
          disabled: null == v,
          fullWidth: !0,
          children: _.default.Messages.DONE
        })]
      })]
    })
  })
}