var i = t(544891),
	s = t(570140),
	l = t(346479),
	a = t(624453),
	r = t(668781),
	o = t(981631),
	u = t(689938);
let d = {
	async pinMessage(e, n) {
		let { id: t, name: s } = e;
		await l.Z.unarchiveThreadIfNecessary(e.id),
			i.tn
				.put({
					url: o.ANM.PIN(t, n),
					oldFormErrors: !0
				})
				.catch(() => {
					let n;
					(n = e.isPrivate()
						? u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({ maxPins: o.tG9 })
						: u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
								maxPins: o.tG9,
								channelName: s
							})),
						r.Z.show({
							title: u.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
							body: n,
							confirmText: u.Z.Messages.OKAY
						});
				});
	},
	async unpinMessage(e, n) {
		await l.Z.unarchiveThreadIfNecessary(e.id),
			i.tn
				.del({
					url: o.ANM.PIN(e.id, n),
					oldFormErrors: !0
				})
				.catch(() =>
					r.Z.show({
						title: u.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
						body: u.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
						confirmText: u.Z.Messages.TRY_AGAIN,
						cancelText: u.Z.Messages.CANCEL,
						onConfirm: d.unpinMessage.bind(d, e, n)
					})
				);
	},
	ackPins(e) {
		s.Z.dispatch({
			type: 'CHANNEL_PINS_ACK',
			channelId: e
		});
	},
	fetchPins(e) {
		let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			t = a.Z.getPinnedMessages(e);
		if (!!n || null == t || (!t.loaded && !t.loading))
			s.Z.dispatch({
				type: 'LOAD_PINNED_MESSAGES',
				channelId: e
			}),
				i.tn
					.get({
						url: o.ANM.PINS(e),
						retries: 2,
						oldFormErrors: !0
					})
					.then(
						(n) => {
							s.Z.dispatch({
								type: 'LOAD_PINNED_MESSAGES_SUCCESS',
								messages: n.body,
								channelId: e
							});
						},
						() => {
							s.Z.dispatch({
								type: 'LOAD_PINNED_MESSAGES_FAILURE',
								channelId: e
							});
						}
					);
	}
};
n.Z = d;
