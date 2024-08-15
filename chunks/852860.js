s(47120);
var n = s(735250),
	l = s(470079),
	a = s(338545),
	i = s(692547),
	r = s(481060),
	o = s(585483),
	d = s(981631),
	c = s(689938),
	u = s(591318);
t.Z = function (e) {
	var t;
	let { message: s, errorMessage: h, submitting: m, onReset: g, onSave: E, onSaveText: T, onResetText: p, onSaveButtonColor: N, disabled: _, saveButtonTooltip: S } = e,
		x = l.useRef(null),
		[{ spring: f }, C] = (0, r.useSpring)(() => ({ spring: 0 }));
	l.useEffect(() => {
		function e() {
			C({
				spring: 1,
				config: a.config.gentle
			}),
				C({
					spring: 0,
					config: a.config.gentle,
					delay: 1000
				});
		}
		return (
			o.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e),
			() => {
				o.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e);
			}
		);
	}, [C]);
	let I = f.to({
			range: [0, 1],
			output: [(0, r.useToken)(i.Z.colors.TEXT_NORMAL).hex(), (0, r.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex()]
		}),
		M = f.to({
			range: [0, 1],
			output: [(0, r.useToken)(i.Z.colors.BACKGROUND_FLOATING).hex(), (0, r.useToken)(i.Z.colors.STATUS_DANGER).hex()]
		}),
		R = f.to({
			range: [0, 1],
			output: [(0, r.useToken)(i.Z.colors.TEXT_DANGER).hex(), (0, r.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex()]
		});
	return (0, n.jsx)(a.animated.div, {
		className: u.container,
		style: { backgroundColor: M },
		children: (0, n.jsx)('div', {
			className: u.flexContainer,
			ref: x,
			children: (0, n.jsxs)(r.FocusRingScope, {
				containerRef: x,
				children: [
					(0, n.jsx)('div', {
						className: u.shrinkingContainer,
						children: (0, n.jsx)(a.animated.div, {
							className: u.message,
							style: { color: null != h ? R : I },
							children: null !== (t = null != h ? h : s) && void 0 !== t ? t : c.Z.Messages.SETTINGS_NOTICE_MESSAGE
						})
					}),
					(0, n.jsxs)('div', {
						className: u.actions,
						children: [
							null != g &&
								(0, n.jsx)(r.Button, {
									className: u.resetButton,
									size: r.Button.Sizes.SMALL,
									color: r.Button.Colors.PRIMARY,
									look: r.Button.Looks.LINK,
									onClick: g,
									children: (0, n.jsx)(a.animated.span, {
										style: { color: I },
										children: null != p ? p : c.Z.Messages.RESET
									})
								}),
							null != E
								? (0, n.jsx)(r.Tooltip, {
										text: S,
										children: (e) =>
											(0, n.jsx)(r.Button, {
												size: r.Button.Sizes.SMALL,
												color: null != N ? N : r.Button.Colors.GREEN,
												submitting: m,
												disabled: _,
												onClick: E,
												...e,
												children: null != T ? T : c.Z.Messages.SAVE_CHANGES
											})
									})
								: null
						]
					})
				]
			})
		})
	});
};
