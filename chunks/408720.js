r.d(t, {
	f: function () {
		return p;
	}
});
var n = r(469359),
	a = r(157079),
	o = r(393523),
	i = r(151122),
	_ = r(263449),
	E = r(572299),
	s = r(910731),
	c = r(64685),
	I = r(394798),
	u = r(622916),
	l = r(467510),
	R = r(954211),
	A = r(886115),
	T = r(873567),
	d = r(454463),
	N = r(163162);
let p = (0, i._I)((e = {}) => {
	let t = {
		console: !0,
		dom: !0,
		fetch: !0,
		history: !0,
		sentry: !0,
		xhr: !0,
		...e
	};
	return {
		name: 'Breadcrumbs',
		setup(e) {
			t.console &&
				(0, s.e)(
					(function (e) {
						return function (t) {
							if ((0, _.s3)() !== e) return;
							let r = {
								category: 'console',
								data: {
									arguments: t.args,
									logger: 'console'
								},
								level: (0, R.V)(t.level),
								message: (0, A.nK)(t.args, ' ')
							};
							if ('assert' === t.level) {
								if (!1 !== t.args[0]) return;
								(r.message = `Assertion failed: ${(0, A.nK)(t.args.slice(1), ' ') || 'console.assert'}`),
									(r.data.arguments = t.args.slice(1));
							}
							(0, E.n)(r, {
								input: t.args,
								level: t.level
							});
						};
					})(e)
				),
				t.dom &&
					(0, n.O)(
						(function (e, t) {
							return function (r) {
								let n, a;
								if ((0, _.s3)() !== e) return;
								let o = 'object' == typeof t ? t.serializeAttribute : void 0,
									i = 'object' == typeof t && 'number' == typeof t.maxStringLength ? t.maxStringLength : void 0;
								i &&
									i > 1024 &&
									(d.X &&
										u.kg.warn(
											`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`
										),
									(i = 1024)),
									'string' == typeof o && (o = [o]);
								try {
									let e = r.event,
										t = (function (e) {
											return !!e && !!e.target;
										})(e)
											? e.target
											: e;
									(n = (0, l.Rt)(t, {
										keyAttrs: o,
										maxStringLength: i
									})),
										(a = (0, l.iY)(t));
								} catch (e) {
									n = '<unknown>';
								}
								if (0 === n.length) return;
								let s = {
									category: `ui.${r.name}`,
									message: n
								};
								a && (s.data = { 'ui.component_name': a }),
									(0, E.n)(s, {
										event: r.event,
										name: r.name,
										global: r.global
									});
							};
						})(e, t.dom)
					),
				t.xhr &&
					(0, a.UK)(
						(function (e) {
							return function (t) {
								if ((0, _.s3)() !== e) return;
								let { startTimestamp: r, endTimestamp: n } = t,
									o = t.xhr[a.xU];
								if (!r || !n || !o) return;
								let { method: i, url: s, status_code: c, body: I } = o,
									u = {
										xhr: t.xhr,
										input: I,
										startTimestamp: r,
										endTimestamp: n
									};
								(0, E.n)(
									{
										category: 'xhr',
										data: {
											method: i,
											url: s,
											status_code: c
										},
										type: 'http'
									},
									u
								);
							};
						})(e)
					),
				t.fetch &&
					(0, c.Uf)(
						(function (e) {
							return function (t) {
								if ((0, _.s3)() !== e) return;
								let { startTimestamp: r, endTimestamp: n } = t;
								if (!(!n || (t.fetchData.url.match(/sentry_key/) && 'POST' === t.fetchData.method)))
									if (t.error) {
										let e = t.fetchData,
											a = {
												data: t.error,
												input: t.args,
												startTimestamp: r,
												endTimestamp: n
											};
										(0, E.n)(
											{
												category: 'fetch',
												data: e,
												level: 'error',
												type: 'http'
											},
											a
										);
									} else {
										let e = t.response,
											a = {
												...t.fetchData,
												status_code: e && e.status
											},
											o = {
												input: t.args,
												response: e,
												startTimestamp: r,
												endTimestamp: n
											};
										(0, E.n)(
											{
												category: 'fetch',
												data: a,
												type: 'http'
											},
											o
										);
									}
							};
						})(e)
					),
				t.history &&
					(0, o.a)(
						(function (e) {
							return function (t) {
								if ((0, _.s3)() !== e) return;
								let r = t.from,
									n = t.to,
									a = (0, T.en)(N.m9.location.href),
									o = r ? (0, T.en)(r) : void 0,
									i = (0, T.en)(n);
								(!o || !o.path) && (o = a),
									a.protocol === i.protocol && a.host === i.host && (n = i.relative),
									a.protocol === o.protocol && a.host === o.host && (r = o.relative),
									(0, E.n)({
										category: 'navigation',
										data: {
											from: r,
											to: n
										}
									});
							};
						})(e)
					),
				t.sentry &&
					e.on(
						'beforeSendEvent',
						(function (e) {
							return function (t) {
								if ((0, _.s3)() === e)
									(0, E.n)(
										{
											category: `sentry.${'transaction' === t.type ? 'transaction' : 'event'}`,
											event_id: t.event_id,
											level: t.level,
											message: (0, I.jH)(t)
										},
										{ event: t }
									);
							};
						})(e)
					);
		}
	};
});
