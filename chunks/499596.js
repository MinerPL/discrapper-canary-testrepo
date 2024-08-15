t.d(n, {
	Z: function () {
		return E;
	}
});
var l = t(735250);
t(470079);
var s = t(120356),
	a = t.n(s),
	r = t(481060),
	i = t(884338),
	o = t(933557),
	c = t(471445),
	u = t(5192),
	d = t(689938),
	m = t(640436);
function E(e) {
	let { channel: n, users: t, selected: s = !1 } = e,
		E = (0, o.ZP)(n),
		_ = null;
	null != t &&
		t.length > 0 &&
		(_ = (0, l.jsx)(i.Z, {
			guildId: n.guild_id,
			className: m.voiceUserList,
			users: t,
			renderUser: (e) => {
				if (null == e) return null;
				let t = u.ZP.getName(n.guild_id, n.id, e),
					s = e.getAvatarURL(n.guild_id, 24);
				return (0, l.jsx)(r.TooltipContainer, {
					text: t,
					children: (0, l.jsx)('img', {
						src: null != s ? s : void 0,
						'aria-label': e.username,
						alt: '',
						className: m.avatar
					})
				});
			},
			renderMoreUsers: (e) => {
				let s = (function (e, n) {
					let t = n.id,
						l = n.guild_id;
					return e.length <= 1
						? null
						: 2 === e.length
							? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
									nickname0: u.ZP.getName(l, t, e[0]),
									nickname1: u.ZP.getName(l, t, e[1])
								})
							: 3 === e.length
								? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
										nickname0: u.ZP.getName(l, t, e[0]),
										nickname1: u.ZP.getName(l, t, e[1]),
										nickname2: u.ZP.getName(l, t, e[2])
									})
								: d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
										nickname0: u.ZP.getName(l, t, e[0]),
										nickname1: u.ZP.getName(l, t, e[1]),
										remainingCount: e.length - 2
									});
				})(t.slice(4), n);
				return (0, l.jsx)('div', {
					children: (0, l.jsx)(r.TooltipContainer, {
						text: s,
						children: (0, l.jsx)('div', {
							className: m.userListOverflow,
							children: e
						})
					})
				});
			},
			max: 5,
			showUserPopout: !1
		}));
	let S = (0, c.KS)(n);
	return (0, l.jsxs)('div', {
		className: a()(m.channelInfo, { [m.selected]: s }),
		children: [
			(0, l.jsx)(S, { className: m.channelIcon }),
			(0, l.jsx)('div', {
				className: m.channelName,
				children: E
			}),
			_
		]
	});
}
