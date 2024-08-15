n.d(t, {
	Q: function () {
		return s;
	}
});
var r = n(470079),
	i = n(612001),
	a = n(182823);
function s(e, t, n) {
	let { validationBehavior: s, focus: o } = e;
	(0, a.bt)(() => {
		if ('native' === s && (null == n ? void 0 : n.current)) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
			n.current.setCustomValidity(e),
				!n.current.hasAttribute('title') && (n.current.title = ''),
				!t.realtimeValidation.isInvalid &&
					t.updateValidation(
						(function (e) {
							let t;
							return {
								isInvalid: !e.validity.valid,
								validationDetails: {
									badInput: (t = e.validity).badInput,
									customError: t.customError,
									patternMismatch: t.patternMismatch,
									rangeOverflow: t.rangeOverflow,
									rangeUnderflow: t.rangeUnderflow,
									stepMismatch: t.stepMismatch,
									tooLong: t.tooLong,
									tooShort: t.tooShort,
									typeMismatch: t.typeMismatch,
									valueMissing: t.valueMissing,
									valid: t.valid
								},
								validationErrors: e.validationMessage ? [e.validationMessage] : []
							};
						})(n.current)
					);
		}
	});
	let l = (0, a.iW)(() => {
			t.resetValidation();
		}),
		u = (0, a.iW)((e) => {
			var r, a;
			!t.displayValidation.isInvalid && t.commitValidation();
			let s = null == n ? void 0 : null === (r = n.current) || void 0 === r ? void 0 : r.form;
			!e.defaultPrevented &&
				n &&
				s &&
				(function (e) {
					for (let t = 0; t < e.elements.length; t++) {
						let n = e.elements[t];
						if (!n.validity.valid) return n;
					}
					return null;
				})(s) === n.current &&
				(o ? o() : null === (a = n.current) || void 0 === a || a.focus(), (0, i._w)('keyboard')),
				e.preventDefault();
		}),
		c = (0, a.iW)(() => {
			t.commitValidation();
		});
	(0, r.useEffect)(() => {
		let e = null == n ? void 0 : n.current;
		if (!e) return;
		let t = e.form;
		return (
			e.addEventListener('invalid', u),
			e.addEventListener('change', c),
			null == t || t.addEventListener('reset', l),
			() => {
				e.removeEventListener('invalid', u),
					e.removeEventListener('change', c),
					null == t || t.removeEventListener('reset', l);
			}
		);
	}, [n, u, c, l, s]);
}
