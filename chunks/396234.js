r.d(t, {
	gi: function () {
		return _;
	},
	yo: function () {
		return E;
	}
});
var n = r(370336),
	a = r(394798),
	o = r(305625),
	i = r(696486);
function _(e, t) {
	let { fingerprint: r, span: _, breadcrumbs: E, sdkProcessingMetadata: s } = t;
	(function (e, t) {
		let { extra: r, tags: a, user: o, contexts: i, level: _, transactionName: E } = t,
			s = (0, n.Jr)(r);
		s &&
			Object.keys(s).length &&
			(e.extra = {
				...s,
				...e.extra
			});
		let c = (0, n.Jr)(a);
		c &&
			Object.keys(c).length &&
			(e.tags = {
				...c,
				...e.tags
			});
		let I = (0, n.Jr)(o);
		I &&
			Object.keys(I).length &&
			(e.user = {
				...I,
				...e.user
			});
		let u = (0, n.Jr)(i);
		u &&
			Object.keys(u).length &&
			(e.contexts = {
				...u,
				...e.contexts
			}),
			_ && (e.level = _),
			E && 'transaction' !== e.type && (e.transaction = E);
	})(e, t),
		_ &&
			(function (e, t) {
				(e.contexts = {
					trace: (0, i.wy)(t),
					...e.contexts
				}),
					(e.sdkProcessingMetadata = {
						dynamicSamplingContext: (0, o.jC)(t),
						...e.sdkProcessingMetadata
					});
				let r = (0, i.Gx)(t),
					n = (0, i.XU)(r).description;
				n && !e.transaction && 'transaction' === e.type && (e.transaction = n);
			})(e, _),
		(function (e, t) {
			(e.fingerprint = e.fingerprint ? (0, a.lE)(e.fingerprint) : []), t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
		})(e, r),
		(function (e, t) {
			let r = [...(e.breadcrumbs || []), ...t];
			e.breadcrumbs = r.length ? r : void 0;
		})(e, E),
		(function (e, t) {
			e.sdkProcessingMetadata = {
				...e.sdkProcessingMetadata,
				...t
			};
		})(e, s);
}
function E(e, t) {
	let { extra: r, tags: n, user: a, contexts: o, level: i, sdkProcessingMetadata: _, breadcrumbs: E, fingerprint: c, eventProcessors: I, attachments: u, propagationContext: l, transactionName: R, span: A } = t;
	s(e, 'extra', r),
		s(e, 'tags', n),
		s(e, 'user', a),
		s(e, 'contexts', o),
		s(e, 'sdkProcessingMetadata', _),
		i && (e.level = i),
		R && (e.transactionName = R),
		A && (e.span = A),
		E.length && (e.breadcrumbs = [...e.breadcrumbs, ...E]),
		c.length && (e.fingerprint = [...e.fingerprint, ...c]),
		I.length && (e.eventProcessors = [...e.eventProcessors, ...I]),
		u.length && (e.attachments = [...e.attachments, ...u]),
		(e.propagationContext = {
			...e.propagationContext,
			...l
		});
}
function s(e, t, r) {
	if (r && Object.keys(r).length) for (let n in ((e[t] = { ...e[t] }), r)) Object.prototype.hasOwnProperty.call(r, n) && (e[t][n] = r[n]);
}
