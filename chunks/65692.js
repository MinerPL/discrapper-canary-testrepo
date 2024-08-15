n.d(t, {
	q: function () {
		return l;
	}
}),
	n(47120),
	n(518263),
	n(970173),
	n(520712),
	n(268111),
	n(941497),
	n(32026),
	n(480839),
	n(744285),
	n(492257),
	n(873817);
var r = n(470079),
	i = n(512722),
	a = n.n(i),
	s = n(442837),
	o = n(253135),
	E = n(314897),
	u = n(19780),
	c = n(760373);
function l(e) {
	let { userId: t } = e,
		n = (0, s.e7)([E.default], () => E.default.getId());
	a()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
	let [i, l] = r.useState(null),
		[d, _] = r.useState(!1),
		f = (0, s.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)),
		I = (0, s.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(n)),
		S = r.useCallback(async (e, t, n, r) => {
			_(!0), l(await (0, o.Il)(c.Xj, new Uint8Array(t), e, new Uint8Array(r), n, c.KN, c.iQ)), _(!1);
		}, []);
	return (
		r.useEffect(() => {
			null != f && null != I && S(n, I, t, f);
		}, [n, I, S, t, f]),
		r.useMemo(
			() => ({
				fingerprint: i,
				userKey: f,
				loading: d
			}),
			[i, d, f]
		)
	);
}
