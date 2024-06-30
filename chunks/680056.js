var a = n(470079), l = n(906732), i = n(407316), s = n(937784);
t.Z = e => {
    let {
            channelId: t,
            setExporting: n
        } = e, {analyticsLocations: o} = (0, l.ZP)();
    return {
        onShareClick: a.useCallback(async e => {
            let {
                clip: a,
                cropData: l,
                applicationAudioEnabled: r,
                voiceAudioEnabled: c,
                onShareComplete: d
            } = e;
            n(a.id);
            try {
                var u, m, p, C, v, g, h, x, E, f;
                let e = (0, i.W)(t);
                await (0, s.e)(a, {
                    channelId: e ? t : void 0,
                    analyticsLocations: o,
                    editMetadata: {
                        start: null !== (g = null !== (v = null == l ? void 0 : l.start) && void 0 !== v ? v : null === (u = a.editMetadata) || void 0 === u ? void 0 : u.start) && void 0 !== g ? g : 0,
                        end: null !== (x = null !== (h = null == l ? void 0 : l.end) && void 0 !== h ? h : null === (m = a.editMetadata) || void 0 === m ? void 0 : m.end) && void 0 !== x ? x : a.length / 1000,
                        applicationAudio: null === (E = null != r ? r : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.applicationAudio) || void 0 === E || E,
                        voiceAudio: null === (f = null != c ? c : null === (C = a.editMetadata) || void 0 === C ? void 0 : C.voiceAudio) || void 0 === f || f
                    }
                });
            } catch (e) {
            } finally {
                null == d || d(), n(null);
            }
        }, [
            t,
            o,
            n
        ])
    };
};
