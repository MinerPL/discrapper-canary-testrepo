var l = a(470079),
	n = a(906732),
	s = a(407316),
	i = a(937784);
t.Z = (e) => {
	let { channelId: t, setExporting: a } = e,
		{ analyticsLocations: o } = (0, n.ZP)();
	return {
		onShareClick: l.useCallback(
			async (e) => {
				let { clip: l, cropData: n, applicationAudioEnabled: r, voiceAudioEnabled: c, onShareComplete: d } = e;
				a(l.id);
				try {
					var u, m, p, C, v, h, x, g, L, f;
					let e = (0, s.W)(t);
					await (0, i.e)(l, {
						channelId: e ? t : void 0,
						analyticsLocations: o,
						editMetadata: {
							start: null !== (h = null !== (v = null == n ? void 0 : n.start) && void 0 !== v ? v : null === (u = l.editMetadata) || void 0 === u ? void 0 : u.start) && void 0 !== h ? h : 0,
							end: null !== (g = null !== (x = null == n ? void 0 : n.end) && void 0 !== x ? x : null === (m = l.editMetadata) || void 0 === m ? void 0 : m.end) && void 0 !== g ? g : l.length / 1000,
							applicationAudio: null === (L = null != r ? r : null === (p = l.editMetadata) || void 0 === p ? void 0 : p.applicationAudio) || void 0 === L || L,
							voiceAudio: null === (f = null != c ? c : null === (C = l.editMetadata) || void 0 === C ? void 0 : C.voiceAudio) || void 0 === f || f
						}
					});
				} catch (e) {
				} finally {
					null == d || d(), a(null);
				}
			},
			[t, o, a]
		)
	};
};
