"use strict";
n.r(t), n.d(t, {
  BenefitsConfirmationLite: function() {
    return u
  },
  PurchaseConfirmationLite: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("481060"),
  s = n("17894"),
  l = n("689938"),
  i = n("859930");
let u = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: u,
    subtitle: o,
    confirmCta: d,
    showOpenDiscord: c = !0
  } = e;
  return (0, a.jsxs)("div", {
    className: i.confirmationContainer,
    children: [(0, a.jsx)(r.Heading, {
      className: i.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u
    }), null != o ? (0, a.jsx)(r.Text, {
      className: i.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, a.jsxs)("div", {
      className: i.buttonContainer,
      children: [c && (0, a.jsx)(r.Button, {
        fullWidth: !0,
        onClick: () => (0, s.default)("application_sub_mweb_success_modal"),
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(r.Button, {
        fullWidth: !0,
        color: r.Button.Colors.PRIMARY,
        onClick: t,
        children: d
      }), null != n && (0, a.jsx)(r.Button, {
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
  return (0, a.jsxs)("div", {
    className: i.confirmationContainer,
    children: [(0, a.jsx)(r.Heading, {
      className: i.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n
      })
    }), (0, a.jsx)(r.Text, {
      className: i.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == u ? void 0 : u.currentPeriodEnd
      })
    }), (0, a.jsxs)("div", {
      className: i.buttonContainer,
      children: [(0, a.jsx)(r.Button, {
        className: i.__invalid_openDiscordButton,
        onClick: () => (0, s.default)("application_sub_mweb_success_modal"),
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(r.Button, {
        className: i.__invalid_doneButton,
        look: r.Button.Looks.BLANK,
        onClick: t,
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}