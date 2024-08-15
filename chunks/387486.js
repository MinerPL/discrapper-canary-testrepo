r.d(t, {
	f: function () {
		return i;
	}
});
var n = r(650093),
	a = r(867921),
	o = r(928541);
function i(e, t = (0, n.L2)('fetch')) {
	let r = 0,
		i = 0;
	return (0, a.q)(e, function (a) {
		let _ = a.body.length;
		(r += _), i++;
		let E = {
			body: a.body,
			method: 'POST',
			referrerPolicy: 'origin',
			headers: e.headers,
			keepalive: r <= 60000 && i < 15,
			...e.fetchOptions
		};
		if (!t) return (0, n._6)('fetch'), (0, o.$2)('No fetch implementation available');
		try {
			return t(e.url, E).then(
				(e) => (
					(r -= _),
					i--,
					{
						statusCode: e.status,
						headers: {
							'x-sentry-rate-limits': e.headers.get('X-Sentry-Rate-Limits'),
							'retry-after': e.headers.get('Retry-After')
						}
					}
				)
			);
		} catch (e) {
			return (0, n._6)('fetch'), (r -= _), i--, (0, o.$2)(e);
		}
	});
}
