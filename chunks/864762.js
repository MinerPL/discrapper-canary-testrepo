t.d(a, {
	k: function () {
		return c;
	}
}),
	t(47120);
var n = t(470079),
	r = t(110924),
	s = t(626135),
	o = t(798930),
	l = t(981631);
function c(e, a) {
	let [t, c] = n.useState(o.O.LANDING),
		i = (0, r.Z)(t),
		[d, u] = n.useState(null),
		[x, N] = n.useState(null),
		[h, m] = n.useState(void 0),
		C = n.useCallback(() => {
			switch (t) {
				case o.O.LANDING:
					c(o.O.PRE_CONNECT);
					break;
				case o.O.DISCORD_CONSENT:
					c(o.O.SUCCESS);
					break;
				case o.O.ERROR:
					c(o.O.PRE_CONNECT);
			}
		}, [t]),
		j = n.useCallback((e) => {
			u(null), m(e), c(o.O.ERROR);
		}, []),
		E = n.useCallback((e) => {
			u(e), c(o.O.PRE_CONNECT_WAITING);
		}, []),
		v = n.useCallback((e) => {
			u(null), N(e), c(o.O.DISCORD_CONSENT);
		}, []);
	return (
		n.useEffect(() => {
			if (t !== i)
				s.default.track(l.rMx.ACCOUNT_LINK_STEP, {
					location_stack: e,
					previous_step: i,
					current_step: t,
					platform_type: a
				});
		}, [t, i, e, a]),
		{
			slide: t,
			gotoNext: C,
			gotoError: j,
			handleWaitingForConnection: E,
			handleAuthToken: v,
			expectedCallbackState: d,
			callbackData: x,
			errorCode: h
		}
	);
}
