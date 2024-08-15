var r = n(470079),
	i = n(844303),
	a = n(958491),
	s =
		Object.assign ||
		function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		},
	o = function (e) {
		var t = e.white,
			n = e.grey,
			o = e.size,
			l = e.renderers,
			u = e.borderRadius,
			c = e.boxShadow,
			d = e.children,
			_ = (0, i.default)({
				default: {
					grid: {
						borderRadius: u,
						boxShadow: c,
						absolute: '0px 0px 0px 0px',
						background: 'url(' + a.U(t, n, o, l.canvas) + ') center left'
					}
				}
			});
		return (0, r.isValidElement)(d) ? r.cloneElement(d, s({}, d.props, { style: s({}, d.props.style, _.grid) })) : r.createElement('div', { style: _.grid });
	};
(o.defaultProps = {
	size: 8,
	white: 'transparent',
	grey: 'rgba(0,0,0,.08)',
	renderers: {}
}),
	(t.Z = o);
