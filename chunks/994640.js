"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("231239"),
  c = s("881052"),
  d = s("592125"),
  u = s("153124"),
  _ = s("888592"),
  N = s("981631"),
  E = s("689938"),
  m = s("45963");
let I = (0, u.uid)();
t.default = e => {
  let {
    setStep: t,
    setGuildsInfo: s,
    email: l,
    setEmail: u,
    setGuildId: f,
    invite: C,
    onClose: T,
    isNUXFlow: S
  } = e, [g, h] = n.useState(null), [p, x] = n.useState(!1), A = async e => {
    e.preventDefault(), h(null), x(!0);
    try {
      var a, n, i, r, u;
      let e = null !== (u = null !== (r = null == C ? void 0 : null === (a = C.guild) || void 0 === a ? void 0 : a.id) && void 0 !== r ? r : null === (n = d.default.getChannel(null == C ? void 0 : null === (i = C.channel) || void 0 === i ? void 0 : i.id)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== u ? u : void 0;
      e === _.INVITE_ROUTING_HUB_GUILD_ID && (e = void 0);
      let c = await o.default.sendVerificationEmail(l, !0, e),
        N = c.guilds_info;
      c.has_matching_guild ? (f(e), t(_.HubEmailConnectionSteps.VERIFY_PIN)) : 0 === N.length ? t(_.HubEmailConnectionSteps.SUBMIT_SCHOOL) : 1 === N.length ? (f(N[0].id), await o.default.sendVerificationEmail(l, !0, N[0].id), t(_.HubEmailConnectionSteps.VERIFY_PIN)) : (s(N), t(_.HubEmailConnectionSteps.SELECT_SCHOOL))
    } catch (e) {
      h(new c.APIError(e))
    } finally {
      x(!1)
    }
  }, v = E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER, O = E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
  if (S) v = E.default.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER, O = E.default.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION;
  else if ((null == C ? void 0 : C.guild) != null && C.guild.id !== _.INVITE_ROUTING_HUB_GUILD_ID && (null == C ? void 0 : C.approximate_member_count) != null) {
    let {
      name: e
    } = C.guild;
    v = E.default.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
      guildName: e,
      count: C.approximate_member_count
    })
  }
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)("div", {
      className: m.topImage
    }), (0, a.jsx)(r.Heading, {
      className: i()(m.centerText, m.header),
      variant: "heading-xl/semibold",
      children: v
    }), (0, a.jsx)("div", {
      className: m.descriptionWidth,
      children: (0, a.jsx)(r.Text, {
        className: m.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: O
      })
    }), (0, a.jsxs)("form", {
      className: m.formContent,
      onSubmit: A,
      children: [(0, a.jsxs)(r.FormItem, {
        children: [(0, a.jsx)(r.FormTitle, {
          id: I,
          children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER
        }), (0, a.jsx)(r.TextInput, {
          placeholder: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
          onChange: e => {
            u(e)
          },
          error: null == g ? void 0 : g.getAnyErrorMessage(),
          "aria-labelledby": I
        })]
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        className: m.formDescription,
        variant: "text-sm/normal",
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION
      }), (0, a.jsx)(r.Button, {
        type: "submit",
        size: r.Button.Sizes.LARGE,
        color: r.Button.Colors.BRAND,
        className: m.submitButton,
        submitting: p,
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON
      }), (0, a.jsx)(r.Text, {
        className: m.termsPhrase,
        color: "header-secondary",
        variant: "text-xs/normal",
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format({
          termsURL: N.MarketingURLs.TERMS,
          privacyURL: N.MarketingURLs.PRIVACY
        })
      }), S && (0, a.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: T,
        className: m.cancelButton,
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CANCEL
      })]
    })]
  })
}