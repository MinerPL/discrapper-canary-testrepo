let n, a;
r.d(t, {
	Fv: function () {
		return S;
	},
	Jk: function () {
		return D;
	},
	PR: function () {
		return f;
	},
	f7: function () {
		return h;
	},
	sn: function () {
		return L;
	}
});
var o = r(696486),
	i = r(152228),
	_ = r(988097),
	E = r(241225),
	s = r(101284),
	c = r(467510),
	I = r(622916),
	u = r(873567),
	l = r(665909),
	R = r(395848),
	A = r(501684),
	T = r(108185),
	d = r(896247),
	N = r(416987);
let p = 0,
	O = {};
function f() {
	let e = (0, T.QV)();
	if (e && s.Z1) {
		e.mark && R.m.performance.mark('sentry-tracing-init');
		let t = (function () {
				return (0, A.to)(({ metric: e }) => {
					let t = e.entries[e.entries.length - 1];
					if (!t) return;
					let r = (0, T.XL)(s.Z1),
						n = (0, T.XL)(t.startTime);
					l.X && I.kg.log('[Measurements] Adding FID'),
						(O.fid = {
							value: e.value,
							unit: 'millisecond'
						}),
						(O['mark.fid'] = {
							value: r + n,
							unit: 'second'
						});
				});
			})(),
			r = (function () {
				return (0, A.PR)(({ metric: e }) => {
					let t = e.entries[e.entries.length - 1];
					if (!!t)
						l.X && I.kg.log('[Measurements] Adding CLS'),
							(O.cls = {
								value: e.value,
								unit: ''
							}),
							(a = t);
				}, !0);
			})(),
			o = (function () {
				return (0, A.$A)(({ metric: e }) => {
					let t = e.entries[e.entries.length - 1];
					if (!!t)
						l.X && I.kg.log('[Measurements] Adding LCP'),
							(O.lcp = {
								value: e.value,
								unit: 'millisecond'
							}),
							(n = t);
				}, !0);
			})(),
			i = (function () {
				return (0, A._4)(({ metric: e }) => {
					if (!!e.entries[e.entries.length - 1])
						l.X && I.kg.log('[Measurements] Adding TTFB'),
							(O.ttfb = {
								value: e.value,
								unit: 'millisecond'
							});
				});
			})();
		return () => {
			t(), r(), o(), i();
		};
	}
	return () => void 0;
}
function S() {
	(0, A._j)('longtask', ({ entries: e }) => {
		for (let t of e) {
			if (!(0, o.HN)()) return;
			let e = (0, T.XL)(s.Z1 + t.startTime),
				r = (0, T.XL)(t.duration),
				n = (0, i.qp)({
					name: 'Main UI thread blocked',
					op: 'ui.long-task',
					startTime: e,
					attributes: { [_.S3]: 'auto.ui.browser.metrics' }
				});
			n && n.end(e + r);
		}
	});
}
function D() {
	new PerformanceObserver((e) => {
		for (let t of e.getEntries()) {
			if (!(0, o.HN)() || !t.scripts[0]) return;
			let e = (0, T.XL)(s.Z1 + t.startTime),
				r = (0, T.XL)(t.duration),
				n = { [_.S3]: 'auto.ui.browser.metrics' },
				a = t.scripts[0];
			if (a) {
				let { invoker: e, invokerType: t, sourceURL: r, sourceFunctionName: o, sourceCharPosition: i } = a;
				(n['browser.script.invoker'] = e),
					(n['browser.script.invoker_type'] = t),
					r && (n['code.filepath'] = r),
					o && (n['code.function'] = o),
					-1 !== i && (n['browser.script.source_char_position'] = i);
			}
			let E = (0, i.qp)({
				name: 'Main UI thread blocked',
				op: 'ui.long-animation-frame',
				startTime: e,
				attributes: n
			});
			E && E.end(e + r);
		}
	}).observe({
		type: 'long-animation-frame',
		buffered: !0
	});
}
function L() {
	(0, A._j)('event', ({ entries: e }) => {
		for (let t of e) {
			if (!(0, o.HN)()) return;
			if ('click' === t.name) {
				let e = (0, T.XL)(s.Z1 + t.startTime),
					r = (0, T.XL)(t.duration),
					n = {
						name: (0, c.Rt)(t.target),
						op: `ui.interaction.${t.name}`,
						startTime: e,
						attributes: { [_.S3]: 'auto.ui.browser.metrics' }
					},
					a = (0, c.iY)(t.target);
				a && (n.attributes['ui.component_name'] = a);
				let o = (0, i.qp)(n);
				o && o.end(e + r);
			}
		}
	});
}
function h(e) {
	let t = (0, T.QV)();
	if (!t || !R.m.performance.getEntries || !s.Z1) return;
	l.X && I.kg.log('[Tracing] Adding & adjusting spans using Performance API');
	let r = (0, T.XL)(s.Z1),
		i = t.getEntries(),
		{ op: A, start_timestamp: f } = (0, o.XU)(e);
	if (
		(i.slice(p).forEach((t) => {
			let n = (0, T.XL)(t.startTime),
				a = (0, T.XL)(Math.max(0, t.duration));
			if ('navigation' !== A || !f || !(r + n < f))
				switch (t.entryType) {
					case 'navigation':
						(function (e, t, r) {
							['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((n) => {
								C(e, t, n, r);
							}),
								C(e, t, 'secureConnection', r, 'TLS/SSL', 'connectEnd'),
								C(e, t, 'fetch', r, 'cache', 'domainLookupStart'),
								C(e, t, 'domainLookup', r, 'DNS'),
								(function (e, t, r) {
									let n = r + (0, T.XL)(t.requestStart),
										a = r + (0, T.XL)(t.responseEnd),
										o = r + (0, T.XL)(t.responseStart);
									t.responseEnd &&
										((0, T.Y)(e, n, a, {
											op: 'browser',
											name: 'request',
											attributes: { [_.S3]: 'auto.ui.browser.metrics' }
										}),
										(0, T.Y)(e, o, a, {
											op: 'browser',
											name: 'response',
											attributes: { [_.S3]: 'auto.ui.browser.metrics' }
										}));
								})(e, t, r);
						})(e, t, r);
						break;
					case 'mark':
					case 'paint':
					case 'measure': {
						(function (e, t, r, n, a) {
							let o = (0, d.W)(),
								i = a + Math.max(r, (0, T.XL)(o ? o.requestStart : 0)),
								E = a + r,
								s = { [_.S3]: 'auto.resource.browser.metrics' };
							i !== E &&
								((s['sentry.browser.measure_happened_before_request'] = !0),
								(s['sentry.browser.measure_start_time'] = i)),
								(0, T.Y)(e, i, E + n, {
									name: t.name,
									op: t.entryType,
									attributes: s
								});
						})(e, t, n, a, r);
						let o = (0, N.Y)(),
							i = t.startTime < o.firstHiddenTime;
						'first-paint' === t.name &&
							i &&
							(l.X && I.kg.log('[Measurements] Adding FP'),
							(O.fp = {
								value: t.startTime,
								unit: 'millisecond'
							})),
							'first-contentful-paint' === t.name &&
								i &&
								(l.X && I.kg.log('[Measurements] Adding FCP'),
								(O.fcp = {
									value: t.startTime,
									unit: 'millisecond'
								}));
						break;
					}
					case 'resource':
						(function (e, t, r, n, a, o) {
							if ('xmlhttprequest' === t.initiatorType || 'fetch' === t.initiatorType) return;
							let i = (0, u.en)(r),
								E = { [_.S3]: 'auto.resource.browser.metrics' };
							g(E, t, 'transferSize', 'http.response_transfer_size'),
								g(E, t, 'encodedBodySize', 'http.response_content_length'),
								g(E, t, 'decodedBodySize', 'http.decoded_response_content_length'),
								'renderBlockingStatus' in t && (E['resource.render_blocking_status'] = t.renderBlockingStatus),
								i.protocol && (E['url.scheme'] = i.protocol.split(':').pop()),
								i.host && (E['server.address'] = i.host),
								(E['url.same_origin'] = r.includes(R.m.location.origin));
							let s = o + n;
							(0, T.Y)(e, s, s + a, {
								name: r.replace(R.m.location.origin, ''),
								op: t.initiatorType ? `resource.${t.initiatorType}` : 'resource.other',
								attributes: E
							});
						})(e, t, t.name, n, a, r);
				}
		}),
		(p = Math.max(i.length - 1, 0)),
		(function (e) {
			let t = R.m.navigator;
			if (!t) return;
			let r = t.connection;
			r &&
				(r.effectiveType && e.setAttribute('effectiveConnectionType', r.effectiveType),
				r.type && e.setAttribute('connectionType', r.type),
				(0, T.nl)(r.rtt) &&
					(O['connection.rtt'] = {
						value: r.rtt,
						unit: 'millisecond'
					})),
				(0, T.nl)(t.deviceMemory) && e.setAttribute('deviceMemory', `${t.deviceMemory} GB`),
				(0, T.nl)(t.hardwareConcurrency) && e.setAttribute('hardwareConcurrency', String(t.hardwareConcurrency));
		})(e),
		'pageload' === A)
	) {
		(function (e) {
			let t = (0, d.W)();
			if (!t) return;
			let { responseStart: r, requestStart: n } = t;
			n <= r &&
				(l.X && I.kg.log('[Measurements] Adding TTFB Request Time'),
				(e['ttfb.requestTime'] = {
					value: r - n,
					unit: 'millisecond'
				}));
		})(O),
			['fcp', 'fp', 'lcp'].forEach((e) => {
				let t = O[e];
				if (!t || !f || r >= f) return;
				let n = t.value,
					a = Math.abs((r + (0, T.XL)(n) - f) * 1000),
					o = a - n;
				l.X && I.kg.log(`[Measurements] Normalized ${e} from ${n} to ${a} (${o})`), (t.value = a);
			});
		let t = O['mark.fid'];
		t &&
			O.fid &&
			((0, T.Y)(e, t.value, t.value + (0, T.XL)(O.fid.value), {
				name: 'first input delay',
				op: 'ui.action',
				attributes: { [_.S3]: 'auto.ui.browser.metrics' }
			}),
			delete O['mark.fid']),
			!('fcp' in O) && delete O.cls,
			Object.entries(O).forEach(([e, t]) => {
				(0, E.o)(e, t.value, t.unit);
			}),
			(function (e) {
				n &&
					(l.X && I.kg.log('[Measurements] Adding LCP Data'),
					n.element && e.setAttribute('lcp.element', (0, c.Rt)(n.element)),
					n.id && e.setAttribute('lcp.id', n.id),
					n.url && e.setAttribute('lcp.url', n.url.trim().slice(0, 200)),
					e.setAttribute('lcp.size', n.size)),
					a &&
						a.sources &&
						(l.X && I.kg.log('[Measurements] Adding CLS Data'),
						a.sources.forEach((t, r) => e.setAttribute(`cls.source.${r + 1}`, (0, c.Rt)(t.node))));
			})(e);
	}
	(n = void 0), (a = void 0), (O = {});
}
function C(e, t, r, n, a, o) {
	let i = o ? t[o] : t[`${r}End`],
		E = t[`${r}Start`];
	if (!!E && !!i)
		(0, T.Y)(e, n + (0, T.XL)(E), n + (0, T.XL)(i), {
			op: 'browser',
			name: a || r,
			attributes: { [_.S3]: 'auto.ui.browser.metrics' }
		});
}
function g(e, t, r, n) {
	let a = t[r];
	null != a && a < 2147483647 && (e[n] = a);
}
