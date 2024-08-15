n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(399606),
	l = n(481060),
	u = n(596454),
	c = n(315744),
	d = n(208049),
	_ = n(135869),
	E = n(763296),
	f = n(22382),
	h = n(747071),
	p = n(850485);
t.Z = function (e) {
	let { soundId: t, jumbo: n = !1 } = e,
		{ currentPreviewRef: a } = i.useContext(_.Z),
		m = (0, o.e7)([E.Z], () => E.Z.getSoundById(t)),
		I = (null == m ? void 0 : m.emojiId) != null || (null == m ? void 0 : m.emojiName) != null,
		[T, g] = i.useState(!1),
		S = (0, c.P)('soundmoji_chat_mention'),
		A = i.useCallback(() => {
			var e;
			null == m && (0, d.w)();
			let n = new Audio((0, f.Z)(t));
			null != a.current && a.current.pause(),
				(a.current = n),
				(n.currentTime = 0),
				(n.volume = (0, h.Z)(null !== (e = null == m ? void 0 : m.volume) && void 0 !== e ? e : 0.5)),
				g(!0),
				n.play(),
				n.addEventListener(
					'ended',
					() => {
						g(!1);
					},
					{ once: !0 }
				);
		}, [t, m, a, g]);
	return S
		? null == m
			? (0, r.jsxs)(l.Clickable, {
					title: 'Risky Click',
					tag: 'span',
					onClick: A,
					className: p.container,
					children: [
						(0, r.jsx)(l.VoiceNormalIcon, {
							size: 'md',
							color: 'currentColor',
							className: p.unknownSound
						}),
						(0, r.jsx)(l.Text, {
							tag: 'span',
							variant: 'text-md/normal',
							color: 'none',
							className: p.text,
							children: 'Unknown'
						})
					]
				})
			: n
				? (0, r.jsxs)(l.Clickable, {
						onClick: A,
						className: p.jumboContainer,
						children: [
							(0, r.jsx)('div', {
								className: s()(p.jumboOverlay, { [p.playing]: T }),
								children: (0, r.jsx)(l.CirclePlayIcon, {
									size: 'md',
									color: 'currentColor',
									className: p.__invalid_jumboPlayIcon
								})
							}),
							I &&
								(0, r.jsx)(u.Z, {
									emojiId: null == m ? void 0 : m.emojiId,
									emojiName: null == m ? void 0 : m.emojiName,
									className: p.jumboEmoji
								}),
							(0, r.jsx)(l.Text, {
								tag: 'span',
								variant: 'text-lg/normal',
								color: 'none',
								className: p.text,
								children: m.name
							})
						]
					})
				: (0, r.jsxs)(l.Clickable, {
						tag: 'span',
						onClick: A,
						className: p.container,
						children: [
							I &&
								(0, r.jsx)(u.Z, {
									emojiId: null == m ? void 0 : m.emojiId,
									emojiName: null == m ? void 0 : m.emojiName,
									className: p.emoji
								}),
							(0, r.jsx)(l.Text, {
								tag: 'span',
								variant: 'text-md/normal',
								color: 'none',
								className: p.text,
								children: m.name
							})
						]
					})
		: null;
};
