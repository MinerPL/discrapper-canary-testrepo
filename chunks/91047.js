t.d(n, {
	Pv: function () {
		return o;
	},
	_j: function () {
		return l;
	},
	n8: function () {
		return u;
	},
	xS: function () {
		return a;
	}
}),
	t(411104);
var r = t(735250);
t(470079);
var i = t(239091);
function o(e, n, o) {
	o.isGroupDM()
		? (0, i.jW)(e, async () => {
				let { default: e } = await Promise.all([t.e('79695'), t.e('70474'), t.e('15324')]).then(t.bind(t, 354589));
				return (t) =>
					(0, r.jsx)(e, {
						...t,
						user: n,
						channel: o
					});
			})
		: o.isDM()
			? (0, i.jW)(e, async () => {
					let { default: e } = await Promise.all([
						t.e('79695'),
						t.e('59743'),
						t.e('70474'),
						t.e('22036'),
						t.e('56826'),
						t.e('46679')
					]).then(t.bind(t, 131404));
					return (t) =>
						(0, r.jsx)(e, {
							...t,
							user: n,
							channel: o,
							showMute: !1,
							targetIsUser: !0
						});
				})
			: null != o.guild_id
				? (0, i.jW)(e, async () => {
						let { default: e } = await Promise.all([t.e('79695'), t.e('70474'), t.e('12435'), t.e('62348')]).then(
							t.bind(t, 757387)
						);
						return (t) =>
							(0, r.jsx)(e, {
								...t,
								user: n,
								channel: o,
								guildId: o.guild_id
							});
					})
				: (0, i.jW)(e, async () => {
						let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('46611')]).then(t.bind(t, 881351));
						return (t) =>
							(0, r.jsx)(e, {
								...t,
								user: n
							});
					});
}
function l(e, n) {
	let { user: o, channel: l, moderationAlertId: u, guildId: a, ...s } = n;
	if ((null == l ? void 0 : l.isGroupDM()) || (null == l ? void 0 : l.isDM()))
		throw Error('Cannot moderate user in DM or group DM');
	let c = null != a ? a : null == l ? void 0 : l.getGuildId();
	null != c &&
		(0, i.jW)(e, async () => {
			let { default: e } = await Promise.all([t.e('12435'), t.e('6632')]).then(t.bind(t, 833737));
			return (n) =>
				(0, r.jsx)(e, {
					...n,
					user: o,
					channelId: null == l ? void 0 : l.id,
					guildId: c,
					moderationAlertId: u,
					...s
				});
		});
}
function u(e, n) {
	let { user: o, guildId: l, analyticsLocations: u, onCloseContextMenu: a } = n;
	(0, i.jW)(e, async () => {
		let { default: e } = await t.e('45130').then(t.bind(t, 246389));
		return (n) =>
			(0, r.jsx)(e, {
				...n,
				user: o,
				guildId: l,
				analyticsLocations: u,
				onCloseContextMenu: a
			});
	});
}
function a(e, n, o) {
	null != o &&
		(0, i.jW)(e, async () => {
			let { default: e } = await t.e('50331').then(t.bind(t, 158195));
			return (n) =>
				(0, r.jsx)(e, {
					...n,
					guildId: o
				});
		});
}
