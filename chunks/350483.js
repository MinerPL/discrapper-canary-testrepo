t(47120);
var i = t(735250);
t(470079);
var l = t(392711),
	o = t.n(l),
	r = t(481060),
	E = t(718528),
	a = t(905423),
	u = t(984933),
	s = t(914010),
	d = t(771845),
	_ = t(55589),
	c = t(585483),
	C = t(475468),
	I = t(981631),
	A = t(490897);
function S(e, n) {
	var t, i;
	return [
		{
			resourceId: e,
			type: A.W.GUILD_EVENT
		},
		...((t = e),
		(i = n),
		t === I.ME
			? _.Z.getPrivateChannelIds()
			: (0, E.Z)(t, {
					withVoiceChannels: i,
					withCurrentVoiceChannel: !0
				}).map((e) => e.id))
	];
}
n.Z = o().throttle(function (e, n) {
	var l, o;
	let E,
		{ channelPredicate: _ = () => !0, guildPredicate: A = () => !0, guildFeaturePredicate: T = () => !1, ensureChatIsVisible: L = () => !1, withVoiceChannels: N = !1 } = n,
		O = null !== (l = a.Z.getState().guildId) && void 0 !== l ? l : I.ME,
		g = a.Z.getState().channelId,
		h = (function (e, n) {
			let t = [I.ME, ...d.ZP.getFlattenedGuildIds()],
				i = t.indexOf(e);
			return n > 0 ? t.slice(i).concat(t.slice(0, i), e) : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
		})(O, e),
		D = e > 0 ? 0 : h.length - 1,
		R = S(O, N),
		f = R.indexOf(g) + e;
	for (; null != O && '' !== O; ) {
		if (((E = R[f]), A(O)))
			for (; null != E && '' !== E; ) {
				if ('string' == typeof E) {
					if (_(O, E)) return (0, C.K)(O, E, !1, L(O, E));
				} else if ('object' == typeof E && T(E.resourceId, E.type))
					return (
						O !== s.Z.getGuildId() && (0, C.K)(O, null === (o = u.ZP.getDefaultChannel(O)) || void 0 === o ? void 0 : o.id),
						(0, r.openModalLazy)(async () => {
							let { default: e } = await Promise.all([t.e('18543'), t.e('53115'), t.e('22347'), t.e('56236'), t.e('47280')]).then(t.bind(t, 17671));
							return (n) =>
								(0, i.jsx)(e, {
									...n,
									guildId: O
								});
						})
					);
				(f += e), (E = R[f]);
			}
		if (((D += e), null == (O = h[D]) || '' === O)) break;
		(R = S(O, N)), (f = e < 0 ? R.length - 1 : 0);
	}
	c.S.dispatch(I.CkL.SHAKE_APP, {
		duration: 200,
		intensity: 2
	});
}, I.aZC);
