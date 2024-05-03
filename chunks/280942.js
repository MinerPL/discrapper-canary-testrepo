"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("178346"),
  l = s("481060"),
  i = s("230711"),
  r = s("267642"),
  o = s("981631"),
  d = s("689938"),
  u = s("683518");

function c(e) {
  let {
    guildBoostSlot: t,
    onClose: c,
    hasCancelableGuildBoostSlot: S,
    premiumSubscription: E,
    onSelect: T
  } = e, f = {
    transfer: {
      label: null != t.premiumGuildSubscription ? d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON : d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
      subtext: t.isOnCooldown() ? d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
      disabled: t.isOnCooldown()
    },
    cancel: {
      label: d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON,
      subtext: S ? null : d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_TOOLTIP,
      disabled: !S
    },
    uncancel: {
      label: d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON,
      subtext: null,
      disabled: !1
    }
  };
  switch (E.status) {
    case o.SubscriptionStatusTypes.PAST_DUE:
      f.cancel.disabled = !0, f.cancel.subtext = d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP, f.uncancel.disabled = !0;
      break;
    case o.SubscriptionStatusTypes.PAUSE_PENDING:
    case o.SubscriptionStatusTypes.PAUSED:
      f.transfer.disabled = !0, f.transfer.subtext = d.default.Messages.GUILD_BOOSTING_TRANSFER_DISABLED_FOR_PAUSED_SUBSCRIPTION, f.cancel.disabled = !0, f.cancel.subtext = d.default.Messages.GUILD_BOOSTING_CANCEL_DISABLED_FOR_PAUSED_SUBSCRIPTION, f.uncancel.disabled = !0
  }
  return (0, a.jsxs)(l.Menu, {
    onSelect: T,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: c,
    children: [(0, a.jsx)(l.MenuItem, {
      id: "apply",
      label: f.transfer.label,
      subtext: f.transfer.subtext,
      action: function() {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("49237"), s.e("99387"), s.e("62511"), s.e("8016"), s.e("22646"), s.e("68451")]).then(s.bind(s, "760558"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlots: [t],
            locationSection: o.AnalyticsSections.SETTINGS_PREMIUM
          })
        })
      },
      disabled: f.transfer.disabled
    }), (0, r.isGuildBoostSlotCanceled)(t) ? (0, a.jsx)(l.MenuItem, {
      id: "uncancel",
      label: f.uncancel.label,
      subtext: f.uncancel.subtext,
      action: function() {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("73049")]).then(s.bind(s, "450468"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlotId: t.id
          })
        })
      },
      disabled: f.uncancel.disabled
    }) : (0, a.jsx)(l.MenuItem, {
      id: "cancel",
      label: f.cancel.label,
      subtext: f.cancel.subtext,
      action: function() {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("55224")]).then(s.bind(s, "401786"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlot: t
          })
        })
      },
      disabled: f.cancel.disabled,
      color: "danger"
    }), E.isPausedOrPausePending ? (0, a.jsx)(l.MenuItem, {
      id: "manage-subscription",
      label: d.default.Messages.BILLING_MANAGE_SUBSCRIPTION,
      action: () => i.default.open(o.UserSettingsSections.SUBSCRIPTIONS),
      icon: n.LightbulbIcon,
      showIconFirst: !0,
      className: u.manageSubscription
    }) : null]
  })
}