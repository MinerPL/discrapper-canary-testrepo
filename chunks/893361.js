var a = r(870271),
	n = r(470079),
	s = r(639519),
	o = r.n(s),
	i = function (e) {
		var t = e.nodeType,
			r = e.styling,
			s = e.labelRenderer,
			o = e.keyPath,
			i = e.valueRenderer,
			c = e.value,
			u = e.valueGetter;
		return n.createElement(
			'li',
			r('value', t, o),
			n.createElement('label', r(['label', 'valueLabel'], t, o), s(o, t, !1, !1)),
			n.createElement(
				'span',
				r('valueText', t, o),
				i.apply(
					void 0,
					[
						(void 0 === u
							? function (e) {
									return e;
								}
							: u)(c),
						c
					].concat((0, a.Z)(o))
				)
			)
		);
	};
(i.propTypes = {
	nodeType: o().string.isRequired,
	styling: o().func.isRequired,
	labelRenderer: o().func.isRequired,
	keyPath: o().arrayOf(o().oneOfType([o().string, o().number]).isRequired).isRequired,
	valueRenderer: o().func.isRequired,
	value: o().any,
	valueGetter: o().func
}),
	(t.Z = i);
