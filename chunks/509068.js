r.d(t, {
	Eg: function () {
		return M;
	},
	Jd: function () {
		return m;
	},
	S1: function () {
		return C;
	},
	jp: function () {
		return g;
	},
	lA: function () {
		return P;
	},
	nV: function () {
		return h;
	}
});
var n = r(636361),
	a = r(502990),
	o = r(907765),
	i = r(151122),
	_ = r(511906),
	E = r(263449),
	s = r(233517),
	c = r(510529),
	I = r(622916),
	u = r(694043),
	l = r(688838),
	R = r(393523),
	A = r(833772),
	T = r(454463),
	d = r(163162),
	N = r(408720),
	p = r(515737),
	O = r(804410),
	f = r(376457),
	S = r(42367),
	D = r(297117),
	L = r(387486);
function h(e) {
	return [(0, n.S)(), (0, a.C)(), (0, p.t)(), (0, N.f)(), (0, O.k)(), (0, S.O)(), (0, o.R)(), (0, f.s)()];
}
function C(e = {}) {
	let t = (function (e = {}) {
		return {
			defaultIntegrations: h(),
			release: 'string' == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : d.m9.SENTRY_RELEASE && d.m9.SENTRY_RELEASE.id ? d.m9.SENTRY_RELEASE.id : void 0,
			autoSessionTracking: !0,
			sendClientReports: !0,
			...e
		};
	})(e);
	if (
		(function () {
			let e = d.m9,
				t = e.chrome ? 'chrome' : 'browser',
				r = e[t],
				n = r && r.runtime && r.runtime.id,
				a = (d.m9.location && d.m9.location.href) || '',
				o = !!n && d.m9 === d.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((e) => a.startsWith(`${e}//`)),
				i = void 0 !== e.nw;
			return !!n && !o && !i;
		})()
	) {
		(0, I.Cf)(() => {
			console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
		});
		return;
	}
	T.X && !(0, u.Ak)() && I.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
	let r = {
			...t,
			stackParser: (0, l.Sq)(t.stackParser || D.Dt),
			integrations: (0, i.m8)(t),
			transport: t.transport || L.f
		},
		n = (0, _.M)(A.R, r);
	return (
		t.autoSessionTracking &&
			(function () {
				if (void 0 === d.m9.document) {
					T.X && I.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
					return;
				}
				(0, s.yj)({ ignoreDuration: !0 }),
					(0, s.cg)(),
					(0, R.a)(({ from: e, to: t }) => {
						void 0 !== e && e !== t && ((0, s.yj)({ ignoreDuration: !0 }), (0, s.cg)());
					});
			})(),
		n
	);
}
function g(e = {}) {
	if (!d.m9.document) {
		T.X && I.kg.error('Global document not defined in showReportDialog call');
		return;
	}
	let t = (0, E.nZ)(),
		r = t.getClient(),
		n = r && r.getDsn();
	if (!n) {
		T.X && I.kg.error('DSN not configured for showReportDialog call');
		return;
	}
	if (
		(t &&
			(e.user = {
				...t.getUser(),
				...e.user
			}),
		!e.eventId)
	) {
		let t = (0, s.eW)();
		t && (e.eventId = t);
	}
	let a = d.m9.document.createElement('script');
	(a.async = !0), (a.crossOrigin = 'anonymous'), (a.src = (0, c.h)(n, e)), e.onLoad && (a.onload = e.onLoad);
	let { onClose: o } = e;
	if (o) {
		let e = (t) => {
			if ('__sentry_reportdialog_closed__' === t.data)
				try {
					o();
				} finally {
					d.m9.removeEventListener('message', e);
				}
		};
		d.m9.addEventListener('message', e);
	}
	let i = d.m9.document.head || d.m9.document.body;
	i ? i.appendChild(a) : T.X && I.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function M() {}
function P(e) {
	e();
}
function m(e) {
	let t = (0, E.s3)();
	t && t.captureUserFeedback(e);
}
