n.d(t, {
	m: function () {
		return c;
	}
}),
	n(470079);
var i = n(442837);
n(565799), n(431328), n(501655);
var a = n(427679),
	s = n(517334);
n(199902);
var r = n(592125);
n(496675), n(938475);
var l = n(151864);
n(497656);
var o = n(554747);
function c(e) {
	var t;
	let n = (0, s.ZP)(e),
		c = r.Z.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
		d = (0, i.e7)([a.Z], () => a.Z.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
		u = (0, o.k5)(e),
		{ isStageNoticeHidden: _, isEventNoticeHidden: E } = (0, i.cj)(
			[l.Z],
			() => ({
				isStageNoticeHidden: l.Z.isLiveChannelNoticeHidden({ stageId: null == d ? void 0 : d.id }),
				isEventNoticeHidden: l.Z.isLiveChannelNoticeHidden({ eventId: null == u ? void 0 : u.id })
			}),
			[d, u]
		);
	if (null != u) return null != d ? !_ : !E;
	return null != d && !_;
}
n(231338);
