"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("803997"),
  i = t.n(n),
  o = t("481060"),
  r = t("231239"),
  d = t("881052"),
  c = t("592125"),
  u = t("153124"),
  N = t("888592"),
  m = t("981631"),
  _ = t("689938"),
  E = t("730366");
let I = (0, u.uid)();
s.default = e => {
  let {
    setStep: s,
    setGuildsInfo: t,
    email: n,
    setEmail: u,
    setGuildId: C,
    invite: x,
    onClose: f,
    isNUXFlow: h
  } = e, [T, g] = l.useState(null), [S, O] = l.useState(!1), v = async e => {
    e.preventDefault(), g(null), O(!0);
    try {
      var a, l, i, o, u;
      let e = null !== (u = null !== (o = null == x ? void 0 : null === (a = x.guild) || void 0 === a ? void 0 : a.id) && void 0 !== o ? o : null === (l = c.default.getChannel(null == x ? void 0 : null === (i = x.channel) || void 0 === i ? void 0 : i.id)) || void 0 === l ? void 0 : l.getGuildId()) && void 0 !== u ? u : void 0;
      e === N.INVITE_ROUTING_HUB_GUILD_ID && (e = void 0);
      let d = await r.default.sendVerificationEmail(n, !0, e),
        m = d.guilds_info;
      d.has_matching_guild ? (C(e), s(N.HubEmailConnectionSteps.VERIFY_PIN)) : 0 === m.length ? s(N.HubEmailConnectionSteps.SUBMIT_SCHOOL) : 1 === m.length ? (C(m[0].id), await r.default.sendVerificationEmail(n, !0, m[0].id), s(N.HubEmailConnectionSteps.VERIFY_PIN)) : (t(m), s(N.HubEmailConnectionSteps.SELECT_SCHOOL))
    } catch (e) {
      g(new d.APIError(e))
    } finally {
      O(!1)
    }
  }, L = _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER, A = _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
  if (h) L = _.default.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER, A = _.default.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION;
  else if ((null == x ? void 0 : x.guild) != null && x.guild.id !== N.INVITE_ROUTING_HUB_GUILD_ID && (null == x ? void 0 : x.approximate_member_count) != null) {
    let {
      name: e
    } = x.guild;
    L = _.default.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
      guildName: e,
      count: x.approximate_member_count
    })
  }
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("div", {
      className: E.topImage
    }), (0, a.jsx)(o.Heading, {
      className: i()(E.centerText, E.header),
      variant: "heading-xl/semibold",
      children: L
    }), (0, a.jsx)("div", {
      className: E.descriptionWidth,
      children: (0, a.jsx)(o.Text, {
        className: E.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: A
      })
    }), (0, a.jsxs)("form", {
      className: E.formContent,
      onSubmit: v,
      children: [(0, a.jsxs)(o.FormItem, {
        children: [(0, a.jsx)(o.FormTitle, {
          id: I,
          children: _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER
        }), (0, a.jsx)(o.TextInput, {
          placeholder: _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
          onChange: e => {
            u(e)
          },
          error: null == T ? void 0 : T.getAnyErrorMessage(),
          "aria-labelledby": I
        })]
      }), (0, a.jsx)(o.Text, {
        color: "header-secondary",
        className: E.formDescription,
        variant: "text-sm/normal",
        children: _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION
      }), (0, a.jsx)(o.Button, {
        type: "submit",
        size: o.Button.Sizes.LARGE,
        color: o.Button.Colors.BRAND,
        className: E.submitButton,
        submitting: S,
        children: _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON
      }), (0, a.jsx)(o.Text, {
        className: E.termsPhrase,
        color: "header-secondary",
        variant: "text-xs/normal",
        children: _.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format({
          termsURL: m.MarketingURLs.TERMS,
          privacyURL: m.MarketingURLs.PRIVACY
        })
      }), h && (0, a.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        onClick: f,
        className: E.cancelButton,
        children: _.default.Messages.HUB_EMAIL_CONNECTION_CANCEL
      })]
    })]
  })
}