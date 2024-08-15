n.d(t, {
	O8: function () {
		return f;
	},
	V: function () {
		return _;
	},
	tV: function () {
		return E;
	}
});
var r = n(981631),
	i = n(689938),
	a = n(337258),
	s = n(705196),
	o = n(190878),
	l = n(991254),
	u = n(485686),
	c = n(400976),
	d = n(443909);
let _ = () => ({
		[r.tNA.CHILLING]: {
			title: i.Z.Messages.STATUS_CHILLING,
			icon: s,
			color: '#567C7E'
		},
		[r.tNA.GAMING]: {
			title: i.Z.Messages.STATUS_GAMING,
			icon: o,
			color: '#685F8C'
		},
		[r.tNA.FOCUSING]: {
			title: i.Z.Messages.STATUS_FOCUSING,
			icon: u,
			color: '#7F6956'
		},
		[r.tNA.BRB]: {
			title: i.Z.Messages.STATUS_BRB,
			icon: a,
			color: '#76567E'
		},
		[r.tNA.EATING]: {
			title: i.Z.Messages.STATUS_EATING,
			icon: l,
			color: '#717B54'
		},
		[r.tNA.IN_TRANSIT]: {
			title: i.Z.Messages.STATUS_IN_TRANSIT,
			icon: c,
			color: '#56697F'
		},
		[r.tNA.WATCHING]: {
			title: i.Z.Messages.STATUS_WATCHING,
			icon: d,
			color: '#7C5571'
		}
	}),
	E = (e) => {
		if ((null == e ? void 0 : e.type) !== r.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
		let t = e.state;
		return t === r.tNA.CUSTOM ? null : _()[t];
	},
	f = (e) => {
		var t;
		return ((null == e ? void 0 : e.state) != null ? e.state : null) === r.tNA.CUSTOM
			? null == e
				? void 0
				: e.details
			: null === (t = E(e)) || void 0 === t
				? void 0
				: t.title;
	};
