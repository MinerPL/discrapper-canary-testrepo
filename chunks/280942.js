t.d(s, {
	Z: function () {
		return d;
	}
});
var n = t(735250);
t(470079);
var a = t(481060),
	i = t(230711),
	r = t(267642),
	o = t(981631),
	l = t(689938),
	c = t(641280);
function d(e) {
	let { guildBoostSlot: s, onClose: d, hasCancelableGuildBoostSlot: _, premiumSubscription: E, onSelect: u } = e,
		I = {
			transfer: {
				label:
					null != s.premiumGuildSubscription
						? l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON
						: l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
				subtext: s.isOnCooldown() ? l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
				disabled: s.isOnCooldown()
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
			(I.cancel.disabled = !0),
				(I.cancel.subtext = l.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP),
				(I.uncancel.disabled = !0);
			break;
		case o.O0b.PAUSE_PENDING:
		case o.O0b.PAUSED:
			(I.transfer.disabled = !0),
				(I.transfer.subtext = l.Z.Messages.GUILD_BOOSTING_TRANSFER_DISABLED_FOR_PAUSED_SUBSCRIPTION),
				(I.cancel.disabled = !0),
				(I.cancel.subtext = l.Z.Messages.GUILD_BOOSTING_CANCEL_DISABLED_FOR_PAUSED_SUBSCRIPTION),
				(I.uncancel.disabled = !0);
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
				label: I.transfer.label,
				subtext: I.transfer.subtext,
				action: function () {
					(0, a.openModalLazy)(async () => {
						let { default: e } = await Promise.resolve().then(t.bind(t, 760558));
						return (t) =>
							(0, n.jsx)(e, {
								...t,
								guildBoostSlots: [s],
								locationSection: o.jXE.SETTINGS_PREMIUM
							});
					});
				},
				disabled: I.transfer.disabled
			}),
			(0, r.tl)(s)
				? (0, n.jsx)(a.MenuItem, {
						id: 'uncancel',
						label: I.uncancel.label,
						subtext: I.uncancel.subtext,
						action: function () {
							(0, a.openModalLazy)(async () => {
								let { default: e } = await Promise.resolve().then(t.bind(t, 450468));
								return (t) =>
									(0, n.jsx)(e, {
										...t,
										guildBoostSlotId: s.id
									});
							});
						},
						disabled: I.uncancel.disabled
					})
				: (0, n.jsx)(a.MenuItem, {
						id: 'cancel',
						label: I.cancel.label,
						subtext: I.cancel.subtext,
						action: function () {
							(0, a.openModalLazy)(async () => {
								let { default: e } = await Promise.resolve().then(t.bind(t, 401786));
								return (t) =>
									(0, n.jsx)(e, {
										...t,
										guildBoostSlot: s
									});
							});
						},
						disabled: I.cancel.disabled,
						color: 'danger'
					}),
			E.isPausedOrPausePending
				? (0, n.jsx)(a.MenuItem, {
						id: 'manage-subscription',
						label: l.Z.Messages.BILLING_MANAGE_SUBSCRIPTION,
						action: () => i.Z.open(o.oAB.SUBSCRIPTIONS),
						icon: a.LightbulbIcon,
						showIconFirst: !0,
						className: c.manageSubscription
					})
				: null
		]
	});
}
