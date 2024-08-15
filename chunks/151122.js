r.d(t, {
	M5: function () {
		return u;
	},
	_I: function () {
		return l;
	},
	m7: function () {
		return I;
	},
	m8: function () {
		return E;
	},
	q4: function () {
		return s;
	},
	uf: function () {
		return c;
	}
});
var n = r(394798),
	a = r(622916),
	o = r(263449),
	i = r(255768);
let _ = [];
function E(e) {
	let t;
	let r = e.defaultIntegrations || [],
		a = e.integrations;
	r.forEach((e) => {
		e.isDefaultInstance = !0;
	});
	let o = (function (e) {
			let t = {};
			return (
				e.forEach((e) => {
					let { name: r } = e,
						n = t[r];
					if (!n || !!n.isDefaultInstance || !e.isDefaultInstance) t[r] = e;
				}),
				Object.values(t)
			);
		})((t = Array.isArray(a) ? [...r, ...a] : 'function' == typeof a ? (0, n.lE)(a(r)) : r)),
		i = o.findIndex((e) => 'Debug' === e.name);
	if (i > -1) {
		let [e] = o.splice(i, 1);
		o.push(e);
	}
	return o;
}
function s(e, t) {
	let r = {};
	return (
		t.forEach((t) => {
			t && I(e, t, r);
		}),
		r
	);
}
function c(e, t) {
	for (let r of t) r && r.afterAllSetup && r.afterAllSetup(e);
}
function I(e, t, r) {
	if (r[t.name]) {
		i.X && a.kg.log(`Integration skipped because it was already installed: ${t.name}`);
		return;
	}
	if (((r[t.name] = t), -1 === _.indexOf(t.name) && 'function' == typeof t.setupOnce && (t.setupOnce(), _.push(t.name)), t.setup && 'function' == typeof t.setup && t.setup(e), 'function' == typeof t.preprocessEvent)) {
		let r = t.preprocessEvent.bind(t);
		e.on('preprocessEvent', (t, n) => r(t, n, e));
	}
	if ('function' == typeof t.processEvent) {
		let r = t.processEvent.bind(t),
			n = Object.assign((t, n) => r(t, n, e), { id: t.name });
		e.addEventProcessor(n);
	}
	i.X && a.kg.log(`Integration installed: ${t.name}`);
}
function u(e) {
	let t = (0, o.s3)();
	if (!t) {
		i.X && a.kg.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
		return;
	}
	t.addIntegration(e);
}
function l(e) {
	return e;
}
