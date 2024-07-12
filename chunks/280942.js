s.d(t, {
  Z: function() {
return d;
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(230711),
  r = s(267642),
  o = s(981631),
  l = s(689938),
  c = s(707817);

function d(e) {
  let {
guildBoostSlot: t,
onClose: d,
hasCancelableGuildBoostSlot: _,
premiumSubscription: E,
onSelect: u
  } = e, T = {
transfer: {
  label: null != t.premiumGuildSubscription ? l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON : l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
  subtext: t.isOnCooldown() ? l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
  disabled: t.isOnCooldown()
},
cancel: {
  label: l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON,
  subtext: _ ? null : l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_TOOLTIP,
  disabled: !_
},
uncancel: {
  label: l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON,
  subtext: null,
  disabled: !1
}
  };
  switch (E.status) {
case o.O0b.PAST_DUE:
  T.cancel.disabled = !0, T.cancel.subtext = l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP, T.uncancel.disabled = !0;
  break;
case o.O0b.PAUSE_PENDING:
case o.O0b.PAUSED:
  T.transfer.disabled = !0, T.transfer.subtext = l.Z.Messages.GUILD_BOOSTING_TRANSFER_DISABLED_FOR_PAUSED_SUBSCRIPTION, T.cancel.disabled = !0, T.cancel.subtext = l.Z.Messages.GUILD_BOOSTING_CANCEL_DISABLED_FOR_PAUSED_SUBSCRIPTION, T.uncancel.disabled = !0;
  }
  return (0, n.jsxs)(a.Menu, {
onSelect: u,
navId: 'subscription-context',
variant: 'fixed',
'aria-label': l.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: d,
children: [
  (0, n.jsx)(a.MenuItem, {
    id: 'apply',
    label: T.transfer.label,
    subtext: T.transfer.subtext,
    action: function() {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(s.bind(s, 760558));
        return s => (0, n.jsx)(e, {
          ...s,
          guildBoostSlots: [t],
          locationSection: o.jXE.SETTINGS_PREMIUM
        });
      });
    },
    disabled: T.transfer.disabled
  }),
  (0, r.tl)(t) ? (0, n.jsx)(a.MenuItem, {
    id: 'uncancel',
    label: T.uncancel.label,
    subtext: T.uncancel.subtext,
    action: function() {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(s.bind(s, 450468));
        return s => (0, n.jsx)(e, {
          ...s,
          guildBoostSlotId: t.id
        });
      });
    },
    disabled: T.uncancel.disabled
  }) : (0, n.jsx)(a.MenuItem, {
    id: 'cancel',
    label: T.cancel.label,
    subtext: T.cancel.subtext,
    action: function() {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(s.bind(s, 401786));
        return s => (0, n.jsx)(e, {
          ...s,
          guildBoostSlot: t
        });
      });
    },
    disabled: T.cancel.disabled,
    color: 'danger'
  }),
  E.isPausedOrPausePending ? (0, n.jsx)(a.MenuItem, {
    id: 'manage-subscription',
    label: l.Z.Messages.BILLING_MANAGE_SUBSCRIPTION,
    action: () => i.Z.open(o.oAB.SUBSCRIPTIONS),
    icon: a.LightbulbIcon,
    showIconFirst: !0,
    className: c.manageSubscription
  }) : null
]
  });
}