"use strict";
i.r(a), i("47120");
var l = i("735250"),
  s = i("470079"),
  t = i("481060"),
  d = i("442837"),
  r = i("863249"),
  o = i("944163"),
  n = i("983736"),
  c = i("200305"),
  u = i("594174"),
  f = i("153124"),
  m = i("231467"),
  v = i("981631"),
  h = i("689938"),
  x = i("461456");

function C(e) {
  let {
    guildId: a,
    formState: i,
    updateFormState: s
  } = e;
  return (0, l.jsxs)("div", {
    className: x.verificationForm,
    children: [(0, l.jsx)(t.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: h.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, l.jsx)(t.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: h.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, l.jsx)(c.MemberVerificationFormRenderer, {
      guildId: a,
      formState: i,
      updateFormState: s
    })]
  })
}
a.default = function(e) {
  var a, i;
  let {
    clan: c,
    transitionState: S,
    onClose: F
  } = e, I = (0, f.useUID)(), N = (0, d.useStateFromStores)([o.default], () => o.default.get(c.id)), [j, p] = s.useState(null !== (i = null == N ? void 0 : N.formFields) && void 0 !== i ? i : []), E = (0, d.useStateFromStores)([u.default], () => u.default.getCurrentUser()), R = null == E ? void 0 : E.verified, _ = null == E ? void 0 : E.isPhoneVerified();
  s.useEffect(() => {
    r.default.fetchVerificationForm(c.id)
  }, [c.id]), s.useEffect(() => {
    null != N && p(N.formFields)
  }, [N]);
  let M = s.useCallback(async e => {
      await r.default.submitVerificationForm(c.id, e)
    }, [c.id]),
    b = s.useCallback(async () => {
      await M({
        ...null != N ? N : o.NO_MEMBER_VERIFICATION_FORM,
        formFields: j
      }), F()
    }, [M, F, N, j]),
    g = !((null == N ? void 0 : null === (a = N.guild) || void 0 === a ? void 0 : a.verification_level) === v.VerificationLevels.VERY_HIGH ? _ : R || _) || j.some(e => !(0, n.isValidFormResponse)(e));
  return (0, l.jsxs)(t.ModalRoot, {
    transitionState: S,
    "aria-labelledby": I,
    size: t.ModalSize.DYNAMIC,
    className: x.container,
    hideShadow: !0,
    children: [(0, l.jsxs)("div", {
      className: x.body,
      children: [(0, l.jsx)("div", {
        className: x.applicationContainer,
        children: (0, l.jsx)(t.ScrollerNone, {
          fade: !0,
          className: x.scroller,
          children: (0, l.jsx)(C, {
            guildId: c.id,
            formState: j,
            updateFormState: p
          })
        })
      }), (0, l.jsx)("div", {
        className: x.verticalRule
      }), (0, l.jsxs)("div", {
        className: x.clanContainer,
        children: [(0, l.jsx)(m.ClanDiscoveryCardView, {
          clan: c,
          className: x.card,
          expanded: !0
        }), (0, l.jsx)(t.Button, {
          type: "submit",
          onClick: b,
          disabled: g,
          children: h.default.Messages.APPLY
        })]
      })]
    }), (0, l.jsx)("div", {
      className: x.closeButtonContainer,
      children: (0, l.jsx)(t.Button, {
        onClick: F,
        look: t.ButtonLooks.OUTLINED,
        color: t.ButtonColors.PRIMARY,
        children: h.default.Messages.CLOSE
      })
    })]
  })
}