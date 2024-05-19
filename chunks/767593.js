"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("481060"),
  o = n("442837"),
  a = n("963202"),
  l = n("863249"),
  d = n("944163"),
  u = n("983736"),
  c = n("200305"),
  f = n("594174"),
  h = n("153124"),
  m = n("231467"),
  p = n("981631"),
  E = n("689938"),
  _ = n("209423");

function x(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: i
  } = e;
  return (0, r.jsxs)("div", {
    className: _.verificationForm,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: E.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: E.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(c.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: i
    })]
  })
}
t.default = function(e) {
  var t, n;
  let {
    clan: c,
    prioritizedGameIds: v,
    transitionState: N,
    onClose: I
  } = e, T = (0, h.useUID)(), R = (0, o.useStateFromStores)([d.default], () => d.default.get(c.id)), [F, C] = i.useState(null !== (n = null == R ? void 0 : R.formFields) && void 0 !== n ? n : []), g = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), P = null == g ? void 0 : g.verified, j = null == g ? void 0 : g.isPhoneVerified(), {
    enableApplication: O
  } = (0, a.useClanPrePilotApplicationExperiment)("discovery");
  i.useEffect(() => {
    l.default.fetchVerificationForm(c.id)
  }, [c.id]), i.useEffect(() => {
    null != R && C(R.formFields)
  }, [R]);
  let A = i.useCallback(async e => {
      await l.default.submitVerificationForm(c.id, e)
    }, [c.id]),
    y = i.useCallback(async () => {
      await A({
        ...null != R ? R : d.NO_MEMBER_VERIFICATION_FORM,
        formFields: F
      }), I()
    }, [A, I, R, F]),
    b = !((null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.verification_level) === p.VerificationLevels.VERY_HIGH ? j : P || j) || F.some(e => !(0, u.isValidFormResponse)(e));
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: N,
    "aria-labelledby": T,
    size: s.ModalSize.DYNAMIC,
    className: _.container,
    hideShadow: !0,
    children: [(0, r.jsxs)("div", {
      className: _.body,
      children: [(0, r.jsx)("div", {
        className: _.applicationContainer,
        children: (0, r.jsx)(s.ScrollerNone, {
          fade: !0,
          className: _.scroller,
          children: (0, r.jsx)(x, {
            guildId: c.id,
            formState: F,
            updateFormState: C
          })
        })
      }), (0, r.jsx)("div", {
        className: _.verticalRule
      }), (0, r.jsxs)("div", {
        className: _.clanContainer,
        children: [(0, r.jsx)(m.ClanDiscoveryCardView, {
          clan: c,
          className: _.card,
          prioritizedGameIds: v
        }), (0, r.jsx)(s.Tooltip, {
          text: E.default.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !O,
          children: e => (0, r.jsx)(s.Button, {
            ...e,
            type: "submit",
            onClick: y,
            disabled: b || !O,
            children: E.default.Messages.APPLY
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: _.closeButtonContainer,
      children: (0, r.jsx)(s.Button, {
        onClick: I,
        look: s.ButtonLooks.OUTLINED,
        color: s.ButtonColors.PRIMARY,
        children: E.default.Messages.CLOSE
      })
    })]
  })
}