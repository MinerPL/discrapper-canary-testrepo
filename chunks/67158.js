n(47120);
var a = n(735250),
	s = n(470079),
	r = n(120356),
	l = n.n(r),
	i = n(143927),
	o = n(318766),
	c = n(28546),
	d = n(957825),
	u = n(305489);
t.Z = s.memo(
	s.forwardRef(function (e, t) {
		let { disabled: n, type: r, className: m, onClick: h } = e,
			[_, g] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], i.Z),
			x = s.useCallback(() => {
				(0, c.j9)(r), null == h || h();
			}, [r, h]);
		return n
			? null
			: (0, a.jsx)('div', {
					className: l()(d.CT, u.buttonContainer),
					ref: t,
					children: (0, a.jsx)(o.Z, {
						className: l()(u.emojiButton, m),
						onClick: x,
						active: (_ === d.X1.GIF || _ === d.X1.EMOJI || _ === d.X1.STICKER) && g === r,
						tabIndex: 0,
						focusProps: {
							offset: {
								top: 4,
								bottom: 4,
								left: -4,
								right: -4
							}
						}
					})
				});
	})
);
