l.d(t, {
	Z: function () {
		return m;
	}
});
var n = l(735250);
l(470079);
var a = l(498607),
	o = l.n(a),
	s = l(913527),
	i = l.n(s),
	r = l(399606),
	C = l(893966),
	c = l(527379),
	d = l(932039),
	u = l(689938);
function m(e) {
	let { guildId: t, onClose: l } = e,
		a = (0, r.e7)([C.Z], () => C.Z.getSearchStateByGuildId(t), [t], o()),
		{ selectedJoinDateOption: s } = a,
		{ afterDate: m, beforeDate: _, optionId: E } = s,
		h = E === d.Ol.CUSTOM,
		M = h && null != m ? i()(m).format(d.N2) : null,
		x = h && null != _ ? i()(_).format(d.N2) : null;
	return (0, n.jsx)(d.ZP, {
		startDateLabel: M,
		endDateLabel: x,
		afterDate: m,
		beforeDate: _,
		selectedOption: E,
		isCustomDateRange: h,
		menuName: 'joined-date',
		accessibilityLabel: u.Z.Messages.MEMBER_SAFETY_JOINED_DATE_LABEL,
		onClose: l,
		onSelectDateOption: function (e, l) {
			let n = null != l ? i()().subtract(l.input, l.unit).valueOf() : null;
			(0, c.Dr)(t, {
				...a,
				selectedJoinDateOption: {
					optionId: e,
					afterDate: n,
					beforeDate: null
				}
			});
		},
		onToggleCustomDateRange: function () {
			(0, c.Dr)(t, {
				...a,
				selectedJoinDateOption: {
					optionId: d.Ol.CUSTOM,
					afterDate: h ? m : null,
					beforeDate: h ? _ : null
				}
			});
		},
		onSelectStartDate: function (e) {
			(0, c.Dr)(t, {
				...a,
				selectedJoinDateOption: {
					optionId: d.Ol.CUSTOM,
					afterDate: e.valueOf(),
					beforeDate: _
				}
			});
		},
		onSelectEndDate: function (e) {
			(0, c.Dr)(t, {
				...a,
				selectedJoinDateOption: {
					optionId: d.Ol.CUSTOM,
					afterDate: m,
					beforeDate: e.valueOf()
				}
			});
		}
	});
}
