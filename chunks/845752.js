n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(392711),
	a = n.n(i),
	s = n(243814),
	r = n(186901),
	l = n(981631);
function o(e, t) {
	return {
		[l.zMe.VOICE_SETTINGS_UPDATE]: {
			scope: {
				[r.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
			},
			handler: () => (t) => {
				let { prevState: n, dispatch: i } = t,
					s = e();
				return !a().isEqual(s, n) && i(s), s;
			}
		},
		[l.zMe.VOICE_SETTINGS_UPDATE_2]: {
			scope: r.lH,
			handler(e) {
				let { socket: n } = e;
				return (e) => {
					let { prevState: i, dispatch: s } = e;
					if (null == n.application.id) return i;
					let r = t(n.application.id);
					return !a().isEqual(r, i) && s(r), r;
				};
			}
		}
	};
}
