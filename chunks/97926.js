t(47120), t(724458);
var n = t(735250),
	a = t(470079),
	i = t(481060),
	r = t(63063),
	o = t(686777),
	l = t(113434),
	c = t(497505),
	d = t(918701),
	_ = t(471985),
	E = t(625252),
	u = t(37303),
	I = t(46140),
	T = t(981631),
	S = t(689938),
	N = t(299021);
function C(e) {
	if (null == e) return !1;
	let { userStatus: s } = e,
		t = (null == s ? void 0 : s.completedAt) != null && (null == s ? void 0 : s.claimedAt) == null,
		n = (null == s ? void 0 : s.enrolledAt) != null && (null == s ? void 0 : s.completedAt) == null;
	return t || n || (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU);
}
s.Z = () => {
	(0, l.jU)();
	let { quests: e, isFetchingCurrentQuests: s } = (0, l.J2)({ fetchPolicy: 'cache-and-network' }),
		t = (0, l.EH)(),
		m = (0, o.q)({ location: I.dr.USER_SETTINGS_GIFT_INVENTORY }),
		A = (0, _.Z)(I.dr.USER_SETTINGS_GIFT_INVENTORY),
		[O, g] = a.useState(!0),
		[h, p] = a.useState([]),
		[R, x] = a.useState([]),
		M = a.useMemo(() => (O ? (s ? 'unsorted' : 'pending_sort') : 'sorted'), [O, s]);
	a.useEffect(() => {
		g(!0);
	}, [s, t]),
		a.useEffect(() => {
			if ('pending_sort' === M) {
				let { sortedQuestIds: s, sections: n } = (function (e) {
					let s = new Map(e.map((e) => [e.id, e])),
						t = e
							.sort((e, s) => {
								var t, n, a, i, r, o;
								let l = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
									_ = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
									E = (null === (a = s.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
									u = (null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
								if (l && !_ && E && !u) return 0;
								if (l && !_) return -1;
								if (E && !u) return 1;
								let I = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
									T = (null === (o = s.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
								if (I && !l && T && !E) {
									let { percentComplete: t } = (0, d.il)(e),
										{ percentComplete: n } = (0, d.il)(s);
									return n - t;
								}
								if (I && !l) return -1;
								if (T && !E) return 1;
								let S = (0, d.Mi)(e, c.jn.QUEST_BAR),
									N = (0, d.Mi)(s, c.jn.QUEST_BAR);
								if (S && N) return 0;
								if (S) return -1;
								if (N) return 1;
								let C = (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU),
									m = (0, d.Mi)(s, c.jn.GIFT_INVENTORY_FOR_YOU);
								if (C && !I && !l && m && !T && !E) return 0;
								if (C && !I && !l) return -1;
								if (m && !T && !E) return 1;
								let A = l && _,
									O = E && u;
								return A && !O ? 1 : !A && O ? -1 : 0;
							})
							.map((e) => e.id),
						n = [
							{
								location: c.jn.GIFT_INVENTORY_FOR_YOU,
								title: S.Z.Messages.QUESTS_FOR_YOU,
								questIds: t.filter((e) => C(s.get(e)))
							},
							{
								location: c.jn.GIFT_INVENTORY_OTHER,
								title: S.Z.Messages.QUESTS_OTHER,
								questIds: t.filter((e) => !C(s.get(e)))
							}
						];
					return {
						sortedQuestIds: t,
						sections: n
					};
				})(
					e.filter((e) => {
						var s, n;
						let a = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null;
						return !(null !== (n = t.get(e.id)) && void 0 !== n && n) || a;
					})
				);
				p(s), x(n), g(!1);
			}
		}, [e, t, M]);
	let f = R.every((e) => {
		let { questIds: s } = e;
		return s.length > 0;
	});
	return s || 'sorted' !== M
		? (0, n.jsx)(i.Spinner, { className: N.spinner })
		: 0 === h.length
			? null
			: A
				? (0, n.jsx)(E.Z, {})
				: (0, n.jsx)(i.FormSection, {
						className: N.questsContainer,
						children: (0, n.jsxs)(i.HeadingLevel, {
							component: (0, n.jsxs)('div', {
								className: N.questsHeading,
								children: [
									m && (0, n.jsx)(i.QuestsIcon, { className: N.questsIcon }),
									(0, n.jsx)(i.Heading, {
										variant: 'heading-md/semibold',
										className: N.questsHeading,
										children: S.Z.Messages.QUESTS
									}),
									(0, n.jsx)(i.Text, {
										variant: 'text-xs/normal',
										className: N.questsHeadingLearnMore,
										children: S.Z.Messages.QUESTS_LEARN_MORE_LINK.format({ questsLearnMoreLink: r.Z.getArticleURL(T.BhN.QUESTS_LEARN_MORE) })
									})
								]
							}),
							children: [
								(0, n.jsx)(i.FormDivider, { className: N.divider }),
								m
									? R.map((e, s, t) => {
											let { location: a, questIds: r, title: o } = e;
											if (0 === r.length) return null;
											let l =
												0 === s
													? 0
													: t.slice(0, s).reduce((e, s) => {
															let { questIds: t } = s;
															return e + t.length;
														}, 0);
											return (0, n.jsxs)(
												'section',
												{
													className: N.questsListContainer,
													children: [
														f &&
															(0, n.jsx)(i.Text, {
																variant: 'text-xs/semibold',
																color: 'header-secondary',
																className: N.sectionHeader,
																children: o
															}),
														r.map((e, s) =>
															(0, n.jsx)(
																u.D,
																{
																	questId: e,
																	location: a,
																	contentPosition: s + l,
																	initiallyExpanded: !f
																},
																e
															)
														)
													]
												},
												a
											);
										})
									: h.map((e, s) =>
											(0, n.jsx)(
												u.D,
												{
													questId: e,
													location: c.jn.GIFT_INVENTORY_FOR_YOU,
													contentPosition: s
												},
												e
											)
										)
							]
						})
					});
};
