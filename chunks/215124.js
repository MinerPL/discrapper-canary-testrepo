n.d(t, {
	Z: function () {
		return _;
	}
});
var s = n(735250);
n(470079);
var a = n(399606),
	i = n(481060),
	r = n(674180),
	l = n(267101),
	o = n(430824),
	c = n(584825),
	d = n(198139),
	u = n(689938);
function _(e) {
	let { guildId: t, allPeriods: _ } = e,
		I = (0, a.e7)([o.Z], () => o.Z.getGuild(t)),
		E = (0, c.qi)(t, { includeSoftDeleted: !0 }),
		T = (0, l.ue)(t, { publishedOnly: !1 }),
		{ allowSelfRemoveMonetization: m } = (0, r.gX)(t),
		N = _.filter((e) => {
			var t;
			let n = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
			return (null == n ? void 0 : n.status) === d.x_.OPEN || (null == n ? void 0 : n.status) === d.x_.PAYOUT_DEFERRED;
		}),
		S = E.length > 0,
		h = T.length > 0,
		g = N.length > 0;
	return null == I
		? null
		: (0, s.jsxs)('div', {
				children: [
					(0, s.jsx)(i.FormText, {
						type: i.FormText.Types.DESCRIPTION,
						children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_DESCRIPTION.format({
							guildName: I.toString()
						})
					}),
					(0, s.jsx)(i.Spacer, { size: 16 }),
					(0, s.jsx)(i.Button, {
						disabled: !m || S || h || g,
						look: i.Button.Looks.FILLED,
						color: i.Button.Colors.RED,
						onClick: () => {
							var e;
							return (
								(e = I),
								void (0, i.openModalLazy)(async () => {
									let { default: t } = await n.e('35282').then(n.bind(n, 157429));
									return (n) =>
										(0, s.jsx)(t, {
											...n,
											guild: e
										});
								})
							);
						},
						children: u.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_CTA
					})
				]
			});
}
