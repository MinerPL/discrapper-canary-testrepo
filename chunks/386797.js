r.d(t, {
	S: function () {
		return E;
	}
});
var n = r(151122),
	a = r(899517),
	o = r(873567),
	i = r(394798);
let _ = a.n,
	E = (0, n._I)((e = {}) => {
		let t = null != e.frameContextLines ? e.frameContextLines : 7;
		return {
			name: 'ContextLines',
			processEvent: (e) =>
				(function (e, t) {
					let r = _.document,
						n = _.location && (0, o.rt)(_.location.href);
					if (!r || !n) return e;
					let a = e.exception && e.exception.values;
					if (!a || !a.length) return e;
					let E = r.documentElement.innerHTML;
					if (!E) return e;
					let s = ['<!DOCTYPE html>', '<html>', ...E.split('\n'), '</html>'];
					return (
						a.forEach((e) => {
							let r = e.stacktrace;
							r &&
								r.frames &&
								(r.frames = r.frames.map((e) =>
									(function (e, t, r, n) {
										return e.filename === r && e.lineno && t.length ? ((0, i.go)(t, e, n), e) : e;
									})(e, s, n, t)
								));
						}),
						e
					);
				})(e, t)
		};
	});
