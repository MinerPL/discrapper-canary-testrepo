n.d(t, {
	U: function () {
		return p;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(399606),
	a = n(481060),
	s = n(592125),
	o = n(922482),
	c = n(750154),
	u = n(427679),
	d = n(689938);
function h(e) {
	var t, n;
	let { activity: h } = e,
		{ channelId: p } = null !== (t = (0, c.rq)(h)) && void 0 !== t ? t : {},
		_ = (0, r.e7)([u.Z], () => u.Z.getStageInstanceByChannel(p), [p]),
		f = l.useRef(null),
		g = l.useCallback(() => {
			let e = s.Z.getChannel(p);
			null != e && o.Cq(e);
		}, [p]),
		m = null !== (n = null == _ ? void 0 : _.topic) && void 0 !== n ? n : h.name,
		C = d.Z.Messages.STAGE_CHANNEL_ACTIVITY_FEED_JOIN.format({ channel: m });
	return (0, i.jsx)('div', {
		ref: f,
		children: (0, i.jsx)(a.Clickable, {
			onClick: g,
			focusProps: { ringTarget: f },
			children: (0, i.jsx)(a.Heading, {
				variant: 'heading-sm/semibold',
				children: C
			})
		})
	});
}
class p {
	shouldShow(e) {
		return (0, c.JE)(e);
	}
	createHeader(e) {
		return {
			subtitle: d.Z.Messages.STAGE_CHANNEL_ACTIVITY_FEED_DEFAULT,
			icon: null
		};
	}
	constructor() {
		var e, t, n;
		(e = this),
			(t = 'body'),
			(n = h),
			t in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (e[t] = n);
	}
}
