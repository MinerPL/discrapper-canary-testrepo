r.d(t, {
	CC: function () {
		return _;
	},
	GY: function () {
		return i;
	}
});
var n = r(899517);
let a = new Map(),
	o = new Set();
function i(e, t) {
	try {
		t.exception.values.forEach((t) => {
			if (!!t.stacktrace)
				for (let _ of t.stacktrace.frames || []) {
					var r, i;
					if (!_.filename || _.module_metadata) continue;
					let t =
						((r = e),
						(i = _.filename),
						!(function (e) {
							if (!!n.n._sentryModuleMetadata)
								for (let t of Object.keys(n.n._sentryModuleMetadata)) {
									let r = n.n._sentryModuleMetadata[t];
									if (!o.has(t)) {
										for (let n of (o.add(t), e(t).reverse()))
											if (n.filename) {
												a.set(n.filename, r);
												break;
											}
									}
								}
						})(r),
						a.get(i));
					t && (_.module_metadata = t);
				}
		});
	} catch (e) {}
}
function _(e) {
	try {
		e.exception.values.forEach((e) => {
			if (!!e.stacktrace) for (let t of e.stacktrace.frames || []) delete t.module_metadata;
		});
	} catch (e) {}
}
