var a = n(470079),
  l = n(906732),
  s = n(407316),
  i = n(937784);
t.Z = e => {
  let {
channelId: t,
setExporting: n
  } = e, {
analyticsLocations: o
  } = (0, l.ZP)();
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
    var u, m, p, C, g, h, v, x, f, E;
    let e = (0, s.W)(t);
    await (0, i.e)(a, {
      channelId: e ? t : void 0,
      analyticsLocations: o,
      editMetadata: {
        start: null !== (h = null !== (g = null == l ? void 0 : l.start) && void 0 !== g ? g : null === (u = a.editMetadata) || void 0 === u ? void 0 : u.start) && void 0 !== h ? h : 0,
        end: null !== (x = null !== (v = null == l ? void 0 : l.end) && void 0 !== v ? v : null === (m = a.editMetadata) || void 0 === m ? void 0 : m.end) && void 0 !== x ? x : a.length / 1000,
        applicationAudio: null === (f = null != r ? r : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.applicationAudio) || void 0 === f || f,
        voiceAudio: null === (E = null != c ? c : null === (C = a.editMetadata) || void 0 === C ? void 0 : C.voiceAudio) || void 0 === E || E
      }
    });
  } catch (e) {} finally {
    null == d || d(), n(null);
  }
}, [
  t,
  o,
  n
])
  };
};