i.d(n, {
	Z: function () {
		return u;
	}
}),
	i(47120);
var l = i(735250);
i(470079);
var t = i(442837),
	s = i(481060),
	a = i(699516),
	o = i(689938);
function u(e) {
	let { user: n, onAction: u } = e,
		d = n.id,
		[r, c] = (0, t.Wu)(
			[a.Z],
			() => {
				var e;
				return [a.Z.isFriend(d), null !== (e = a.Z.getNickname(d)) && void 0 !== e ? e : null];
			},
			[d]
		);
	if (!r) return null;
	let Z = null == c ? o.Z.Messages.ADD_FRIEND_NICKNAME : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
	return (0, l.jsx)(s.MenuItem, {
		id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
		label: Z,
		action: () => {
			null == u || u(),
				(0, s.openModalLazy)(async () => {
					let { default: e } = await i.e('25070').then(i.bind(i, 670794));
					return (i) =>
						(0, l.jsx)(e, {
							user: n,
							nickname: c,
							...i
						});
				});
		}
	});
}
