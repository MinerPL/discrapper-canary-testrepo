n.d(t, {
	Z: function () {
		return _;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(44315),
	r = n(554300),
	l = n(471985),
	o = n(46140),
	c = n(981631),
	d = n(689938),
	u = n(612260);
function _(e) {
	let { isSelected: t, onClick: n } = e,
		_ = (0, l.Z)(o.dr.QUEST_HOME_DESKTOP),
		E = (0, s.Sl)(c.Ilk.WHITE);
	return _
		? (0, i.jsx)(
				r.Z,
				{
					avatar: (0, i.jsx)(a.QuestsIcon, { color: t ? E.hex : void 0 }),
					name: d.Z.Messages.QUESTS,
					focusProps: {
						offset: {
							right: 4,
							top: 1,
							bottom: 1
						}
					},
					onClick: n,
					wrapContent: !0,
					selected: t,
					className: u.categoryItem,
					selectedClassName: u.selectedCategoryItem,
					innerClassName: u.itemInner
				},
				'quest-home'
			)
		: null;
}
