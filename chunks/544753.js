var r = n(470079),
	i = n(844303),
	a = n(464854),
	s = function (e) {
		var t = e.color,
			n = e.onClick,
			s = e.onSwatchHover,
			o = e.hover,
			l = e.active,
			u = e.circleSize,
			c = e.circleSpacing,
			d = (0, i.default)(
				{
					default: {
						swatch: {
							width: u,
							height: u,
							marginRight: c,
							marginBottom: c,
							transform: 'scale(1)',
							transition: '100ms transform ease'
						},
						Swatch: {
							borderRadius: '50%',
							background: 'transparent',
							boxShadow: 'inset 0 0 0 ' + (u / 2 + 1) + 'px ' + t,
							transition: '100ms box-shadow ease'
						}
					},
					hover: { swatch: { transform: 'scale(1.2)' } },
					active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + t } }
				},
				{
					hover: o,
					active: l
				}
			);
		return r.createElement(
			'div',
			{ style: d.swatch },
			r.createElement(a.m4, {
				style: d.Swatch,
				color: t,
				onClick: n,
				onHover: s,
				focusStyle: { boxShadow: d.Swatch.boxShadow + ', 0 0 5px ' + t }
			})
		);
	};
(s.defaultProps = {
	circleSize: 28,
	circleSpacing: 14
}),
	(t.Z = (0, i.handleHover)(s));
