n(47120);
var i = n(735250),
	a = n(470079),
	s = n(392711),
	r = n.n(s),
	l = n(442837),
	o = n(239091),
	c = n(476669),
	d = n(524331),
	u = n(768419),
	_ = n(831506),
	E = n(699516),
	h = n(594174),
	m = n(823379),
	I = n(824138),
	g = n(689938);
function p(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
class T extends a.PureComponent {
	hasParty(e) {
		return e.length > 1;
	}
	handleStopListening() {
		(0, d.Z)();
	}
	render() {
		let { currentUser: e, host: t, party: n } = this.props;
		return this.hasParty(n) && null != e
			? (0, i.jsx)(I.Z, {
					currentUser: e,
					host: t,
					party: n,
					renderOverflowPopout: this.renderOverflowPopout,
					onStopListening: this.handleStopListening,
					onUserContextMenu: this.handleUserContextMenu
				})
			: null;
	}
	constructor(...e) {
		super(...e),
			p(this, 'handleUserContextMenu', (e, t) => {
				(0, o.jW)(e, async () => {
					let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('740')]).then(n.bind(n, 881351));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							user: t
						});
				});
			}),
			p(this, 'renderOverflowPopout', () => {
				let { party: e } = this.props;
				return (0, i.jsx)(c.Z, {
					party: e,
					header: g.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({ count: e.length })
				});
			});
	}
}
t.Z = l.ZP.connectStores([u.Z, h.default, E.Z, _.Z], () => {
	let e, t;
	let n = u.Z.getSyncingWith(),
		i = u.Z.getActivity(),
		a = h.default.getCurrentUser(),
		s = [];
	if (
		(null != n
			? ((e = h.default.getUser(n.userId)), (t = n.partyId))
			: null != i && null != i.party && null != i.party.id && ((e = a), (t = i.party.id)),
		null != t)
	) {
		var l;
		s = r()(Array.from(null !== (l = _.Z.getParty(t)) && void 0 !== l ? l : []))
			.map((e) => h.default.getUser(e))
			.filter(m.lm)
			.orderBy([(t) => null == e || e.id === t.id, (e) => E.Z.isFriend(e.id)], ['desc', 'desc'])
			.value();
	}
	return {
		currentUser: a,
		host: e,
		party: s
	};
})(T);
