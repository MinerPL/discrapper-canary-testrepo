r.d(t, {
	Pd: function () {
		return _;
	}
});
var n = r(622916),
	a = r(617726),
	o = r(14588),
	i = r(255768);
function _(e) {
	function t(...e) {
		i.X && n.kg.info('[Offline]:', ...e);
	}
	return (r) => {
		let n;
		let i = e(r);
		if (!r.createStore) throw Error('No `createStore` function was provided');
		let _ = r.createStore(r),
			E = 5000;
		function s(e) {
			n && clearTimeout(n),
				'number' !=
					typeof (n = setTimeout(async () => {
						n = void 0;
						let e = await _.shift();
						e &&
							(t('Attempting to send previously queued event'),
							(e[0].sent_at = new Date().toISOString()),
							I(e, !0).catch((e) => {
								t('Failed to retry sending', e);
							}));
					}, e)) &&
					n.unref &&
					n.unref();
		}
		function c() {
			if (!n) s(E), (E = Math.min(2 * E, 3600000));
		}
		async function I(e, n = !1) {
			if (!n && (0, a.R)(e, ['replay_event', 'replay_recording'])) return await _.push(e), s(100), {};
			try {
				let t = await i.send(e),
					r = 100;
				if (t) {
					if (t.headers && t.headers['retry-after']) r = (0, o.JY)(t.headers['retry-after']);
					else if (t.headers && t.headers['x-sentry-rate-limits']) r = 60000;
					else if ((t.statusCode || 0) >= 400) return t;
				}
				return s(r), (E = 5000), t;
			} catch (o) {
				var I, u, l;
				if (
					await ((I = e),
					(u = o),
					(l = E),
					!(0, a.R)(I, ['client_report']) && (!r.shouldStore || r.shouldStore(I, u, l)))
				)
					return n ? await _.unshift(e) : await _.push(e), c(), t('Error sending. Event queued.', o), {};
				throw o;
			}
		}
		return (
			r.flushAtStartup && c(),
			{
				send: I,
				flush: (e) => i.flush(e)
			}
		);
	};
}
