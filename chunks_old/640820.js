"use strict";
n.r(t), n.d(t, {
  BenefitsConfirmationLite: function() {
    return u
  },
  PurchaseConfirmationLite: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  a = n("724038"),
  l = n("782340"),
  s = n("664943");
let u = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: u,
    subtitle: o,
    confirmCta: c,
    showOpenDiscord: d = !0
  } = e;
  return (0, i.jsxs)("div", {
    className: s.confirmationContainer,
    children: [(0, i.jsx)(r.Heading, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u
    }), null != o ? (0, i.jsx)(r.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, i.jsxs)("div", {
      className: s.buttonContainer,
      children: [d && (0, i.jsx)(r.Button, {
        fullWidth: !0,
        onClick: () => (0, a.default)("application_sub_mweb_success_modal"),
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, i.jsx)(r.Button, {
        fullWidth: !0,
        color: r.Button.Colors.PRIMARY,
        onClick: t,
        children: c
      }), null != n && (0, i.jsx)(r.Button, {
        fullWidth: !0,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        onClick: n,
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
      })]
    })]
  })
};

function o(e) {
  let {
    onConfirm: t,
    tierName: n,
    subscription: u
  } = e;
  return (0, i.jsxs)("div", {
    className: s.confirmationContainer,
    children: [(0, i.jsx)(r.Heading, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n
      })
    }), (0, i.jsx)(r.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == u ? void 0 : u.currentPeriodEnd
      })
    }), (0, i.jsxs)("div", {
      className: s.buttonContainer,
      children: [(0, i.jsx)(r.Button, {
        className: s.openDiscordButton,
        onClick: () => (0, a.default)("application_sub_mweb_success_modal"),
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, i.jsx)(r.Button, {
        className: s.doneButton,
        look: r.Button.Looks.BLANK,
        onClick: t,
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}