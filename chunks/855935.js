l.d(t, {
	Z: function () {
		return E;
	}
});
var n = l(735250),
	a = l(470079),
	o = l(498607),
	s = l.n(o),
	i = l(399606),
	r = l(481060),
	C = l(588215),
	c = l(893966),
	d = l(527379),
	u = l(981631),
	m = l(689938);
let _ = [
	C.d$.ORDER_BY_GUILD_JOINED_AT_DESC,
	C.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
	C.d$.ORDER_BY_USER_ID_DESC,
	C.d$.ORDER_BY_USER_ID_ASC
];
function E(e) {
	let { guildId: t, onClose: l } = e,
		o = (0, i.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], s()),
		E = a.useCallback(
			(e) => {
				(0, d.Dr)(t, {
					...o,
					selectedSort: e
				});
			},
			[t, o]
		);
	return (0, n.jsx)(r.Menu, {
		navId: 'members-table-sort-menu',
		onClose: () => {
			null == l || l();
		},
		'aria-label': m.Z.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
		onSelect: u.dG4,
		children: (0, n.jsx)(r.MenuGroup, {
			children: _.map((e) => {
				var t, l;
				return (0, n.jsx)(
					r.MenuRadioItem,
					{
						id: 'members-table-sort-'.concat(e),
						label: (function (e) {
							switch (e) {
								case C.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
									return m.Z.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_DESC;
								case C.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
									return m.Z.Messages.MEMBER_SAFETY_GUILD_JOINED_AT_ASC;
								case C.d$.ORDER_BY_USER_ID_DESC:
									return m.Z.Messages.MEMBER_SAFETY_USER_JOINED_AT_DESC;
								case C.d$.ORDER_BY_USER_ID_ASC:
									return m.Z.Messages.MEMBER_SAFETY_USER_JOINED_AT_ASC;
								default:
									return null;
							}
						})(e),
						checked:
							((t = e),
							(l = o.selectedSort) === C.d$.ORDER_BY_UNSPECIFIED || null == l
								? t === C.d$.ORDER_BY_GUILD_JOINED_AT_DESC
								: t === l),
						disabled: !1,
						action: () => E(e),
						group: 'members-table-sort'
					},
					'members-table-sort-'.concat(e)
				);
			})
		})
	});
}
