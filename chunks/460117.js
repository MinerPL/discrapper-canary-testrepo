t.d(n, {
	Z: function () {
		return u;
	}
});
var s = t(735250);
t(470079);
var o = t(481060),
	i = t(596454),
	l = t(318766),
	a = t(907040),
	r = t(273039),
	d = t(185923);
function u(e) {
	let { className: n, emojiClassName: t, emoji: u, setEmoji: c, channel: m } = e,
		N = (e) => (n, t) => {
			var s, o;
			null != n &&
				(null == n.id
					? c({ name: null !== (s = n.optionallyDiverseSequence) && void 0 !== s ? s : '' })
					: c({
							id: n.id,
							name: null !== (o = n.originalName) && void 0 !== o ? o : n.name,
							animated: n.animated
						}),
				t && e());
		},
		_ =
			null == u || null == u.name
				? null
				: () => {
						var e;
						return (0, s.jsx)(i.Z, {
							className: t,
							animated: null !== (e = u.animated) && void 0 !== e && e,
							emojiId: u.id,
							emojiName: u.name
						});
					};
	return (0, s.jsx)(r.Z, {
		hasSetEmoji: null != u && null != u.name,
		onClick: () => {
			c(null);
		},
		children: (0, s.jsx)(o.Popout, {
			position: 'bottom',
			renderPopout: (e) => {
				let { closePopout: n } = e;
				return (0, s.jsx)(a.Z, {
					closePopout: n,
					onSelectEmoji: N(n),
					pickerIntention: d.Hz.COMMUNITY_CONTENT,
					channel: m
				});
			},
			children: (e, t) => {
				let { isShown: o } = t;
				return (0, s.jsx)(l.Z, {
					...e,
					tabIndex: 0,
					active: o,
					className: n,
					renderButtonContents: _
				});
			}
		})
	});
}
