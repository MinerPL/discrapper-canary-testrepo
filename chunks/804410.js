r.d(t, {
	k: function () {
		return A;
	}
});
var n = r(151122),
	a = r(263449),
	o = r(233517),
	i = r(824851),
	_ = r(753642),
	E = r(573736),
	s = r(467510),
	c = r(688838),
	I = r(622916),
	u = r(454463),
	l = r(878719),
	R = r(163162);
let A = (0, n._I)((e = {}) => {
	let t = {
		onerror: !0,
		onunhandledrejection: !0,
		...e
	};
	return {
		name: 'GlobalHandlers',
		setupOnce() {
			Error.stackTraceLimit = 50;
		},
		setup(e) {
			t.onerror &&
				((function (e) {
					(0, i.V)((t) => {
						let { stackParser: r, attachStacktrace: n } = d();
						if ((0, a.s3)() !== e || (0, R.Wz)()) return;
						let { msg: i, url: _, line: I, column: u, error: A } = t,
							T = (function (e, t, r, n) {
								let a = (e.exception = e.exception || {}),
									o = (a.values = a.values || []),
									i = (o[0] = o[0] || {}),
									_ = (i.stacktrace = i.stacktrace || {}),
									I = (_.frames = _.frames || []),
									u = isNaN(parseInt(n, 10)) ? void 0 : n,
									l = isNaN(parseInt(r, 10)) ? void 0 : r,
									R = (0, E.HD)(t) && t.length > 0 ? t : (0, s.l4)();
								return (
									0 === I.length &&
										I.push({
											colno: u,
											filename: R,
											function: c.Fi,
											in_app: !0,
											lineno: l
										}),
									e
								);
							})((0, l.ME)(r, A || i, void 0, n, !1), _, I, u);
						(T.level = 'error'),
							(0, o.eN)(T, {
								originalException: A,
								mechanism: {
									handled: !1,
									type: 'onerror'
								}
							});
					});
				})(e),
				T('onerror')),
				t.onunhandledrejection &&
					((function (e) {
						(0, _.h)((t) => {
							let { stackParser: r, attachStacktrace: n } = d();
							if ((0, a.s3)() !== e || (0, R.Wz)()) return;
							let i = (function (e) {
									if ((0, E.pt)(e)) return e;
									try {
										if ('reason' in e) return e.reason;
										if ('detail' in e && 'reason' in e.detail) return e.detail.reason;
									} catch (e) {}
									return e;
								})(t),
								_ = (0, E.pt)(i)
									? (function (e) {
											return {
												exception: {
													values: [
														{
															type: 'UnhandledRejection',
															value: `Non-Error promise rejection captured with value: ${String(e)}`
														}
													]
												}
											};
										})(i)
									: (0, l.ME)(r, i, void 0, n, !0);
							(_.level = 'error'),
								(0, o.eN)(_, {
									originalException: i,
									mechanism: {
										handled: !1,
										type: 'onunhandledrejection'
									}
								});
						});
					})(e),
					T('onunhandledrejection'));
		}
	};
});
function T(e) {
	u.X && I.kg.log(`Global Handler attached: ${e}`);
}
function d() {
	let e = (0, a.s3)();
	return (
		(e && e.getOptions()) || {
			stackParser: () => [],
			attachStacktrace: !1
		}
	);
}
