r.d(t, {
	RA: function () {
		return i;
	},
	U4: function () {
		return _;
	},
	vK: function () {
		return s;
	}
});
var n = r(309544),
	a = r(622916);
let o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function i(e, t = !1) {
	let { host: r, path: n, pass: a, port: o, projectId: i, protocol: _, publicKey: E } = e;
	return `${_}://${E}${t && a ? `:${a}` : ''}@${r}${o ? `:${o}` : ''}/${n ? `${n}/` : n}${i}`;
}
function _(e) {
	let t = o.exec(e);
	if (!t) {
		(0, a.Cf)(() => {
			console.error(`Invalid Sentry Dsn: ${e}`);
		});
		return;
	}
	let [r, n, i = '', _ = '', s = '', c = ''] = t.slice(1),
		I = '',
		u = c,
		l = u.split('/');
	if ((l.length > 1 && ((I = l.slice(0, -1).join('/')), (u = l.pop())), u)) {
		let e = u.match(/^\d+/);
		e && (u = e[0]);
	}
	return E({
		host: _,
		pass: i,
		path: I,
		projectId: u,
		port: s,
		protocol: r,
		publicKey: n
	});
}
function E(e) {
	return {
		protocol: e.protocol,
		publicKey: e.publicKey || '',
		pass: e.pass || '',
		host: e.host,
		port: e.port || '',
		path: e.path || '',
		projectId: e.projectId
	};
}
function s(e) {
	let t = 'string' == typeof e ? _(e) : E(e);
	if (
		!!t &&
		!!(function (e) {
			var t;
			if (!n.X) return !0;
			let { port: r, projectId: o, protocol: i } = e;
			if (['protocol', 'publicKey', 'host', 'projectId'].find((t) => !e[t] && (a.kg.error(`Invalid Sentry Dsn: ${t} missing`), !0))) return !1;
			if (!o.match(/^\d+$/)) return a.kg.error(`Invalid Sentry Dsn: Invalid projectId ${o}`), !1;
			return 'http' === (t = i) || 'https' === t ? !(r && isNaN(parseInt(r, 10))) || (a.kg.error(`Invalid Sentry Dsn: Invalid port ${r}`), !1) : (a.kg.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1);
		})(t)
	)
		return t;
}
