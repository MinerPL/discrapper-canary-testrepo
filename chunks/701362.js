n.d(t, {
	Z: function () {
		return b;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(481060),
	c = n(717881),
	u = n(58540),
	d = n(850827),
	h = n(951844),
	m = n(258609),
	p = n(199902),
	_ = n(314897),
	f = n(430824),
	E = n(496675),
	C = n(158776),
	g = n(979651),
	I = n(626135),
	x = n(382182),
	T = n(687516),
	N = n(718805),
	v = n(871118),
	S = n(981631),
	Z = n(689938),
	A = n(403144);
class M extends a.PureComponent {
	componentDidMount() {
		let { user: e, streamApplication: t } = this.props;
		I.default.track(S.rMx.OPEN_POPOUT, {
			type: 'Stream Preview',
			other_user_id: e.id,
			application_id: null != t ? t.id : null,
			application_name: null != t ? t.name : null,
			game_id: null != t ? t.id : null,
			is_streaming: !0
		});
	}
	renderPreview(e) {
		let { onWatch: t, activeStream: n, currentUserId: a, canWatch: s, unavailableReason: l } = this.props;
		return (0, i.jsxs)(o.Clickable, {
			onClick: t,
			className: A.previewContainer,
			children: [
				(0, i.jsx)(v.Z, {
					className: A.previewImage,
					stream: e
				}),
				s
					? (0, i.jsx)('div', {
							className: A.previewHover,
							children: (0, i.jsx)(o.Text, {
								variant: 'text-sm/normal',
								color: 'none',
								className: A.white,
								children: (0, N.Z)(e, n, a, l)
							})
						})
					: null
			]
		});
	}
	render() {
		let { activity: e, user: t, stream: n, previewIsOpen: a } = this.props;
		return null == n
			? null
			: (0, i.jsx)('div', {
					className: l()(A.streamPreviewWrapper, { [A.mounted]: a }),
					children: (0, i.jsxs)('div', {
						className: A.streamPreview,
						children: [
							this.renderPreview(n),
							(0, i.jsxs)('div', {
								className: A.body,
								children: [
									null != e
										? (0, i.jsx)(c.Z, {
												hideHeader: !0,
												type: c.P.STREAM_PREVIEW,
												activity: e,
												user: t,
												guildId: n.guildId,
												channelId: n.channelId,
												analyticsParams: {
													location: {
														page: S.ZY5.GO_LIVE_MODAL,
														section: S.jXE.STREAM_VIEWER_POPOUT
													}
												}
											})
										: (0, i.jsx)(d.Z, {
												type: c.P.STREAM_PREVIEW,
												applicationStream: n,
												user: t,
												guildId: n.guildId,
												channelId: n.channelId,
												className: A.activityActions,
												color: A.watchButton
											}),
									(0, i.jsx)(h.Z, {
										type: h.Z.Types.INLINE,
										className: A.protip,
										children: __OVERLAY__ ? Z.Z.Messages.WATCH_STREAM_IN_APP : Z.Z.Messages.WATCH_STREAM_TIP
									})
								]
							})
						]
					})
				});
	}
}
function b(e) {
	let { user: t, channel: n, ...s } = e,
		[l, o] = (0, r.Wu)([g.Z, f.Z, E.Z, m.Z], () => (0, x.p9)(n, g.Z, f.Z, E.Z, m.Z)),
		c = (0, r.e7)([p.Z], () => p.Z.getStreamForUser(t.id, n.getGuildId())),
		d = (0, r.e7)([p.Z], () => p.Z.getActiveStreamForApplicationStream(c)),
		h = (0, r.e7)([_.default], () => _.default.getId()),
		I = (0, T.Cf)(c),
		N = (0, r.e7)([C.Z], () => (0, T.Um)(c, C.Z)),
		v = a.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
	return (
		(0, u.$)(v),
		(0, i.jsx)(M, {
			...s,
			canWatch: l,
			unavailableReason: o,
			user: t,
			streamApplication: I,
			stream: c,
			activeStream: d,
			currentUserId: h,
			activity: N
		})
	);
}
