"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("142833"),
  c = n("448993"),
  d = n("42203"),
  u = n("476765"),
  _ = n("238055"),
  E = n("49111"),
  N = n("782340"),
  I = n("406742");
let m = (0, u.uid)();
var f = e => {
  let {
    setStep: t,
    setGuildsInfo: n,
    email: l,
    setEmail: u,
    setGuildId: f,
    invite: C,
    onClose: T,
    isNUXFlow: S
  } = e, [g, h] = s.useState(null), [A, p] = s.useState(!1), x = async e => {
    e.preventDefault(), h(null), p(!0);
    try {
      var a, s, i, r, u;
      let e = null !== (u = null !== (r = null == C ? void 0 : null === (a = C.guild) || void 0 === a ? void 0 : a.id) && void 0 !== r ? r : null === (s = d.default.getChannel(null == C ? void 0 : null === (i = C.channel) || void 0 === i ? void 0 : i.id)) || void 0 === s ? void 0 : s.getGuildId()) && void 0 !== u ? u : void 0;
      e === _.INVITE_ROUTING_HUB_GUILD_ID && (e = void 0);
      let c = await o.default.sendVerificationEmail(l, !0, e),
        E = c.guilds_info,
        N = c.has_matching_guild;
      N ? (f(e), t(_.HubEmailConnectionSteps.VERIFY_PIN)) : 0 === E.length ? t(_.HubEmailConnectionSteps.SUBMIT_SCHOOL) : 1 === E.length ? (f(E[0].id), await o.default.sendVerificationEmail(l, !0, E[0].id), t(_.HubEmailConnectionSteps.VERIFY_PIN)) : (n(E), t(_.HubEmailConnectionSteps.SELECT_SCHOOL))
    } catch (e) {
      h(new c.APIError(e))
    } finally {
      p(!1)
    }
  }, v = N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER, O = N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
  if (S) v = N.default.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER, O = N.default.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION;
  else if ((null == C ? void 0 : C.guild) != null && C.guild.id !== _.INVITE_ROUTING_HUB_GUILD_ID && (null == C ? void 0 : C.approximate_member_count) != null) {
    let {
      name: e
    } = C.guild;
    v = N.default.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
      guildName: e,
      count: C.approximate_member_count
    })
  }
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)("div", {
      className: I.topImage
    }), (0, a.jsx)(r.Heading, {
      className: i(I.centerText, I.header),
      variant: "heading-xl/semibold",
      children: v
    }), (0, a.jsx)("div", {
      className: I.descriptionWidth,
      children: (0, a.jsx)(r.Text, {
        className: I.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: O
      })
    }), (0, a.jsxs)("form", {
      className: I.formContent,
      onSubmit: x,
      children: [(0, a.jsxs)(r.FormItem, {
        children: [(0, a.jsx)(r.FormTitle, {
          id: m,
          children: N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER
        }), (0, a.jsx)(r.TextInput, {
          placeholder: N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
          onChange: e => {
            u(e)
          },
          error: null == g ? void 0 : g.getAnyErrorMessage(),
          "aria-labelledby": m
        })]
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        className: I.formDescription,
        variant: "text-sm/normal",
        children: N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION
      }), (0, a.jsx)(r.Button, {
        type: "submit",
        size: r.Button.Sizes.LARGE,
        color: r.Button.Colors.BRAND,
        className: I.submitButton,
        submitting: A,
        children: N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON
      }), (0, a.jsx)(r.Text, {
        className: I.termsPhrase,
        color: "header-secondary",
        variant: "text-xs/normal",
        children: N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format({
          termsURL: E.MarketingURLs.TERMS,
          privacyURL: E.MarketingURLs.PRIVACY
        })
      }), S && (0, a.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: T,
        className: I.cancelButton,
        children: N.default.Messages.HUB_EMAIL_CONNECTION_CANCEL
      })]
    })]
  })
}