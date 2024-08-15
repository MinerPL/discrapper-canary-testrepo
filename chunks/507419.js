t(47120);
var l = t(735250),
	a = t(470079),
	i = t(481060),
	s = t(22382),
	r = t(747071),
	u = t(586826),
	o = t(174727),
	c = t(990792),
	d = t(689938),
	f = t(196997);
n.Z = a.memo(function (e) {
	let { sound: n, volume: t, disabled: m } = e,
		[h, g] = a.useState(!1),
		p = a.useRef(null),
		{ file: N, audio: _, loadAudioFromFile: v } = (0, u.p)(),
		D = a.useMemo(() => (0, s.Z)(n.soundId), [n]);
	return (
		a.useEffect(() => {
			null == p.current && (p.current = (0, o.XG)(D, n.name).then(v));
		}, [D, v, n.name]),
		(0, l.jsxs)('div', {
			className: f.previewContainer,
			children: [
				(0, l.jsx)(i.Clickable, {
					onClick: m
						? void 0
						: function () {
								null != _ &&
									(_.paused
										? ((_.volume = (0, r.Z)(t)),
											(_.currentTime = 0),
											_.play(),
											g(!0),
											_.addEventListener('ended', () => g(!1), { once: !0 }))
										: (_.pause(), g(!1)));
							},
					className: f.playButton,
					'aria-label': h ? d.Z.Messages.STOP : d.Z.Messages.PLAY,
					children: h
						? (0, l.jsx)(i.StopIcon, {
								size: 'xs',
								color: 'currentColor',
								className: f.playIcon
							})
						: (0, l.jsx)(i.PlayIcon, {
								size: 'xs',
								color: 'currentColor',
								className: f.playIcon
							})
				}),
				(0, l.jsx)('div', {
					className: f.waveformContainer,
					children: (0, l.jsx)(c.Z, {
						className: f.waveform,
						file: N,
						audio: _
					})
				})
			]
		})
	);
});
