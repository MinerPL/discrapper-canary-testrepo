var r = n(316138),
	i = n(882159);
t.Z = {
	name: 'applyStyles',
	enabled: !0,
	phase: 'write',
	fn: function (e) {
		var t = e.state;
		Object.keys(t.elements).forEach(function (e) {
			var n = t.styles[e] || {},
				a = t.attributes[e] || {},
				s = t.elements[e];
			if (!!(0, i.Re)(s) && !!(0, r.Z)(s))
				Object.assign(s.style, n),
					Object.keys(a).forEach(function (e) {
						var t = a[e];
						!1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? '' : t);
					});
		});
	},
	effect: function (e) {
		var t = e.state,
			n = {
				popper: {
					position: t.options.strategy,
					left: '0',
					top: '0',
					margin: '0'
				},
				arrow: { position: 'absolute' },
				reference: {}
			};
		return (
			Object.assign(t.elements.popper.style, n.popper),
			(t.styles = n),
			t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
			function () {
				Object.keys(t.elements).forEach(function (e) {
					var a = t.elements[e],
						s = t.attributes[e] || {},
						o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
							return (e[t] = ''), e;
						}, {});
					if (!!(0, i.Re)(a) && !!(0, r.Z)(a))
						Object.assign(a.style, o),
							Object.keys(s).forEach(function (e) {
								a.removeAttribute(e);
							});
				});
			}
		);
	},
	requires: ['computeStyles']
};
