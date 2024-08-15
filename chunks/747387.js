n(47120);
var a = n(735250),
	r = n(470079),
	i = n(745625),
	o = n(14199),
	c = n(772848),
	s = n(286379),
	p = n(343817),
	d = n(797614),
	h = n(626135),
	l = n(981631);
t.Z = (e) => {
	let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: u, onRender: f, onVerify: v, onError: m, onOpen: y, onClose: C, onChalExpired: E, ...R } = e,
		_ = r.useRef(null),
		b = (0, c.Z)(),
		[x, g] = r.useState(!1),
		w = r.useCallback(
			(e) => {
				h.default.track(l.rMx.CAPTCHA_EVENT, {
					captcha_event_name: e,
					captcha_service: t,
					sitekey: n,
					captcha_flow_key: b
				});
			},
			[b, t, n]
		),
		k = r.useCallback(
			(e) => {
				d.Z.increment({
					name: s.V.CAPTCHA_EVENT,
					tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
				});
			},
			[t]
		),
		A = r.useCallback(() => {
			if (null != u && '' !== u && null != _.current) {
				var e;
				null === (e = _.current) || void 0 === e || e.setData({ rqdata: u });
			}
		}, [u, _]),
		I = r.useCallback(() => {
			!x && (w('initial-load'), k('initial-load'), g(!0)), A();
		}, [k, x, w, A]);
	r.useEffect(() => {
		A();
	}, [A]),
		r.useEffect(() => {
			I();
		}, [I]);
	let S = r.useCallback(() => {
			w('error'), k('error'), A(), null == m || m();
		}, [w, k, A, m]),
		j = r.useCallback(
			(e) => {
				w('verify'), k('verify'), v(e);
			},
			[k, v, w]
		),
		O = r.useCallback(() => {
			w('render'), null == f || f();
		}, [f, w]),
		P = r.useCallback(() => {
			w('open'), k('open'), null == y || y();
		}, [k, y, w]),
		Z = r.useCallback(() => {
			w('close'), A(), null == C || C();
		}, [C, w, A]),
		T = r.useCallback(() => {
			w('chal-expire'), null == E || E();
		}, [E, w]);
	return ((null == n || '' === n) && (n = l.OL7), t === p.hP.RECAPTCHA)
		? (0, a.jsx)(o.Z, {
				...R,
				onLoad: I,
				onRender: O,
				onVerify: j,
				onError: S,
				sitekey: n
			})
		: t === p.hP.HCAPTCHA
			? (0, a.jsx)(i.Z, {
					ref: _,
					...R,
					sitekey: n,
					onLoad: I,
					onError: S,
					onVerify: j,
					onChalExpired: T,
					onOpen: P,
					onClose: Z
				})
			: (0, a.jsx)(o.Z, {
					...R,
					sitekey: n,
					onLoad: I,
					onRender: O,
					onVerify: j,
					onError: S
				});
};
