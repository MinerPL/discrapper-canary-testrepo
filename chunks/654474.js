var r = n(470079),
	i = n(844303),
	a = n(476400),
	s = n.n(a),
	o = function (e) {
		var t = (0, i.default)({
			default: {
				picker: {
					width: '20px',
					height: '20px',
					borderRadius: '22px',
					border: '2px #fff solid',
					transform: 'translate(-12px, -13px)',
					background: 'hsl(' + Math.round(e.hsl.h) + ', ' + Math.round(100 * e.hsl.s) + '%, ' + Math.round(100 * e.hsl.l) + '%)'
				}
			}
		});
		return r.createElement('div', { style: t.picker });
	};
(o.propTypes = {
	hsl: s().shape({
		h: s().number,
		s: s().number,
		l: s().number,
		a: s().number
	})
}),
	(o.defaultProps = {
		hsl: {
			a: 1,
			h: 249.94,
			l: 0.2,
			s: 0.5
		}
	}),
	(t.C = o);
