a.d(t, {
	e: function () {
		return C;
	}
});
var l = a(735250);
a(470079);
var n = a(481060),
	s = a(592125),
	i = a(703558),
	o = a(626135),
	r = a(709054),
	c = a(127654),
	d = a(61994),
	u = a(39604),
	m = a(356659),
	p = a(981631);
async function C(e, t) {
	let { channelId: C, editMetadata: v, analyticsLocations: h } = t,
		x = s.Z.getChannel(C);
	if (null != x)
		try {
			var g;
			let t = await (0, u.rO)(e, v),
				a = null !== (g = e.name) && void 0 !== g ? g : (0, m.yl)(r.default.extractTimestamp(e.id)),
				l = (0, d.Z)(a);
			(0, c.d)(
				[new File([t], ''.concat('' !== l ? l : 'clip', '.mp4'), { type: 'video/mp4' })],
				x,
				i.d.ChannelMessage,
				{ filesMetadata: [{ clip: e }] }
			),
				o.default.track(p.rMx.CLIP_SHARED, {
					location_stack: h,
					guild_id: x.guild_id,
					channel_id: x.id,
					channel_type: x.type,
					application_id: e.applicationId,
					clip_id: e.id
				});
		} catch (e) {
			throw (m.jF.error(e), e);
		}
	else
		(0, n.openModalLazy)(async () => {
			let { default: t } = await a.e('99617').then(a.bind(a, 502801));
			return (a) =>
				(0, l.jsx)(t, {
					...a,
					clip: e,
					editMetadata: v
				});
		});
}
