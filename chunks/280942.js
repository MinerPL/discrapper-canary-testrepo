"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("267642"),
  i = s("981631"),
  r = s("689938");

function o(e) {
  let {
    guildBoostSlot: t,
    onClose: o,
    hasCancelableGuildBoostSlot: d,
    premiumSubscription: u,
    onSelect: c
  } = e, S = u.status === i.SubscriptionStatusTypes.PAST_DUE;
  return (0, a.jsxs)(n.Menu, {
    onSelect: c,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": r.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: o,
    children: [(0, a.jsx)(n.MenuItem, {
      id: "apply",
      label: null != t.premiumGuildSubscription ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON : r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
      subtext: t.isOnCooldown() ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
      action: function() {
        (0, n.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("49237"), s.e("99387"), s.e("62511"), s.e("8016"), s.e("22646"), s.e("68451")]).then(s.bind(s, "760558"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlots: [t],
            locationSection: i.AnalyticsSections.SETTINGS_PREMIUM
          })
        })
      },
      disabled: t.isOnCooldown()
    }), (0, l.isGuildBoostSlotCanceled)(t) ? (0, a.jsx)(n.MenuItem, {
      id: "uncancel",
      label: r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON,
      subtext: S ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP : null,
      action: function() {
        (0, n.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("73049")]).then(s.bind(s, "450468"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlotId: t.id
          })
        })
      },
      disabled: S
    }) : (0, a.jsx)(n.MenuItem, {
      id: "cancel",
      label: r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON,
      subtext: d ? S ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP : null : r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_TOOLTIP,
      action: function() {
        (0, n.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("55224")]).then(s.bind(s, "401786"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlot: t
          })
        })
      },
      disabled: !d || S,
      color: "danger"
    })]
  })
}