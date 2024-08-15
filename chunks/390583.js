n.d(t, {
	Z: function () {
		return I;
	}
}),
	n(47120),
	n(653041);
var s = n(735250),
	a = n(470079),
	i = n(481060);
n(674180);
var r = n(723047),
	l = n(727843),
	o = n(290348),
	c = n(764163),
	d = n(155758),
	u = n(293810),
	_ = n(689938);
function I() {
	let { editStateId: e, guildId: t } = (0, l.N)(),
		[n, I] = o.UE(e),
		E = a.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
	function T(e, t) {
		let { channelId: s, description: a, emojiId: i, emojiName: r } = e,
			l = [...n],
			o = {
				name: '',
				description: a,
				emoji_id: i,
				emoji_name: r,
				ref_type: u.Qs.CHANNEL,
				ref_id: s
			};
		null != t ? (l[t] = o) : l.push(o), I(l);
	}
	let m = (0, r.mY)();
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(d.p, {
				benefits: n,
				onEdit: function (e) {
					(0, i.openModal)((a) =>
						(0, s.jsx)(c.x3, {
							...a,
							guildId: t,
							omitChannelIds: E,
							initialData: n[e],
							onSave: (t) => T(t, e),
							onDelete: () =>
								(function (e) {
									let t = [...n];
									t.splice(e, 1), I(t);
								})(e)
						})
					);
				},
				onMove: function (e, t) {
					let s = [...n],
						[a] = s.splice(e, 1);
					s.splice(t, 0, a), I(s);
				},
				guildId: t
			}),
			n.length > 0 && (0, s.jsx)(i.Spacer, { size: 8 }),
			(0, s.jsx)(d.s, {
				onClick: function () {
					(0, i.openModal)((e) =>
						(0, s.jsx)(c.x3, {
							...e,
							guildId: t,
							omitChannelIds: E,
							onSave: (e) => T(e)
						})
					);
				},
				disabled: m,
				children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_ADD_BUTTON_TEXT
			})
		]
	});
}
