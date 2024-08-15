n.r(t),
	n.d(t, {
		navigateToQuestHome: function () {
			return h;
		},
		openDisclosureModal: function () {
			return f;
		},
		openQuestInGameRewardModal: function () {
			return E;
		},
		openQuestsRewardCodeModal: function () {
			return _;
		}
	});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(212093),
	s = n(230711),
	o = n(703656),
	l = n(617136),
	u = n(282421),
	c = n(981631),
	d = n(731455);
function _(e) {
	let { questId: t, location: a, questContentPosition: s } = e;
	(0, i.openModalLazy)(async () => {
		let { default: e } = await Promise.all([n.e('26138'), n.e('54535'), n.e('26089')]).then(n.bind(n, 985866));
		return (n) =>
			(0, r.jsx)(e, {
				...n,
				questId: t,
				questContentPosition: s,
				location: a
			});
	});
}
function E(e, t) {
	(0, i.openModalLazy)(async () => {
		let { default: i } = await n.e('88938').then(n.bind(n, 390238));
		return (n) =>
			(0, r.jsx)(i, {
				...n,
				quest: e,
				location: t
			});
	});
}
function f(e, t) {
	(0, l._3)({
		questId: e.id,
		questContent: t.content,
		questContentPosition: t.position,
		questContentCTA: t.ctaContent
	}),
		(0, i.openModalLazy)(async () => {
			let { default: i } = await n.e('4266').then(n.bind(n, 316210));
			return (n) =>
				(0, r.jsx)(i, {
					...n,
					questContent: t.content,
					quest: e
				});
		});
}
function h(e, t) {
	u.B.getCurrentConfig({ location: e }).enabled ? ((0, a.uY)(d.Gj.Quests), (0, o.uL)(c.Z5c.QUEST_HOME + (null != t ? '#'.concat(t) : ''))) : s.Z.open(c.oAB.INVENTORY);
}
