r.d(t, {
	i: function () {
		return _;
	}
});
var n = r(573736),
	a = r(886115),
	o = r(151122);
function i(e) {
	return {
		...e,
		path: 'path' in e && Array.isArray(e.path) ? e.path.join('.') : void 0,
		keys: 'keys' in e ? JSON.stringify(e.keys) : void 0,
		unionErrors: 'unionErrors' in e ? JSON.stringify(e.unionErrors) : void 0
	};
}
let _ = (0, o._I)((e = {}) => {
	let t = e.limit || 10;
	return {
		name: 'ZodErrors',
		processEvent(e, r) {
			var o, _, E, s;
			return (
				(o = t),
				(_ = e),
				(E = r),
				_.exception && _.exception.values && E && E.originalException && ((s = E.originalException), (0, n.VZ)(s) && 'ZodError' === s.name && Array.isArray(s.errors)) && 0 !== E.originalException.issues.length
					? {
							..._,
							exception: {
								..._.exception,
								values: [
									{
										..._.exception.values[0],
										value: (function (e) {
											let t = new Set();
											for (let r of e.issues) r.path && r.path[0] && t.add(r.path[0]);
											let r = Array.from(t);
											return `Failed to validate keys: ${(0, a.$G)(r.join(', '), 100)}`;
										})(E.originalException)
									},
									..._.exception.values.slice(1)
								]
							},
							extra: {
								..._.extra,
								'zoderror.issues': E.originalException.errors.slice(0, o).map(i)
							}
						}
					: _
			);
		}
	};
});
