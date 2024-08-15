n(411104);
var r = n(735250),
	a = n(470079),
	i = n(442837),
	o = n(481060),
	s = n(271383),
	l = n(19780),
	c = n(226961),
	d = n(594174),
	u = n(51144),
	m = n(481250),
	p = n(689938);
class h extends a.PureComponent {
	render() {
		let { streams: e, context: t, userId: n, mediaEngineConnectionId: a, videoStreams: i } = this.props;
		if (null == n || null == e || 0 === e.length) return (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE });
		let c = l.Z.getGuildId(),
			h = d.default.getUser(n),
			g = s.ZP.getNick(c, n),
			f = null == h ? p.Z.Messages.RTC_DEBUG_RTP_INBOUND : ''.concat(p.Z.Messages.RTC_DEBUG_RTP_INBOUND, ' \u2014 ').concat(null != g ? g : u.ZP.getName(h));
		return (0, r.jsx)(o.FormSection, {
			tag: o.FormTitleTags.H2,
			title: f,
			children: (0, m.V)(e, t, a, n, i)
		});
	}
}
t.Z = i.ZP.connectStores([c.ZP], (e) => {
	let { context: t, index: n, videoStreams: r } = e,
		a = c.ZP.getAllStats(t)[n],
		{ section: i } = (0, c.fZ)(c.ZP.getSection());
	if (null == i) throw Error('Unrecognized section format');
	let o = null;
	if (null != a && null != a.rtp.inbound) {
		var s;
		o = null !== (s = a.rtp.inbound[i]) && void 0 !== s ? s : [];
	}
	return {
		mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
		userId: i,
		streams: o,
		videoStreams: r
	};
})(h);
