a.r(t), a.d(t, {
  default: function() {
return C;
  }
}), a(47120), a(315314), a(610138), a(216116), a(78328), a(815648);
var n = a(735250),
  l = a(470079),
  i = a(990547),
  r = a(481060),
  o = a(240872),
  s = a(579806),
  u = a(100527),
  d = a(906732),
  c = a(39604),
  m = a(212039),
  p = a(259612),
  v = a(572720),
  f = a(362693),
  b = a(674908),
  h = a(20437),
  x = a(689938),
  g = a(163102);

function C(e) {
  var t, a, C, _, j, S, I, E;
  let {
clip: T,
channelId: y,
transitionState: w,
onClose: N
  } = e, [L, k] = l.useState(!0), [R, M] = l.useState(null), [P, Z] = l.useState(null), {
analyticsLocations: A
  } = (0, d.ZP)(u.Z.CLIPS_EDITOR);
  l.useEffect(() => {
(async function e() {
  let e;
  try {
    e = await s.Z.clips.loadClip(T.filepath);
  } catch {
    N(), o.Z.show({
      title: x.Z.Messages.CLIPS_LOAD_ERROR_TITLE,
      body: x.Z.Messages.CLIPS_LOAD_ERROR_BODY
    });
    return;
  }
  let t = e.data.buffer,
    a = await (0, m.w)(t),
    n = URL.createObjectURL(new Blob([a], {
      type: 'audio/mp4'
    })),
    l = URL.createObjectURL(new Blob([e.data], {
      type: 'video/mp4'
    }));
  Z(n), M(l);
}());
  }, [
T.filepath,
N
  ]), l.useEffect(() => () => {
null != R && URL.revokeObjectURL(R);
  }, [R]), l.useEffect(() => () => {
null != P && URL.revokeObjectURL(P);
  }, [P]);
  let [F, D] = l.useState(null === (j = null === (t = T.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === j || j), [B, O] = l.useState(null === (S = null === (a = T.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === S || S), [H, U] = l.useState({
start: null !== (I = null === (C = T.editMetadata) || void 0 === C ? void 0 : C.start) && void 0 !== I ? I : 0,
end: null !== (E = null === (_ = T.editMetadata) || void 0 === _ ? void 0 : _.end) && void 0 !== E ? E : 0
  }), [z, W] = l.useState(T.name), V = l.useRef({
name: z,
editMetadata: {
  start: H.start,
  end: H.end,
  voiceAudio: F,
  applicationAudio: B
}
  });
  V.current = {
name: z,
editMetadata: {
  start: H.start,
  end: H.end,
  voiceAudio: F,
  applicationAudio: B
}
  };
  let G = (0, v.l)(T);
  l.useEffect(() => {
async function e() {
  let e = {};
  null != G && (e = {
    thumbnail: await (0, p.R)(G, V.current.editMetadata.start)
  }), (0, c.Tm)(T.id, {
    ...V.current,
    ...e
  });
}
return () => {
  e();
};
  }, [
T.id,
G
  ]);
  let K = l.useRef(null),
Y = l.useMemo(() => ({
  videoPlayerRef: K,
  applicationAudioEnabled: B,
  setApplicationAudioEnabled: O,
  voiceAudioEnabled: F,
  setVoiceAudioEnabled: D,
  cropData: H,
  setCropData: U
}), [
  B,
  F,
  H
]);
  return (0, n.jsx)(r.ModalRoot, {
impression: {
  impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
},
size: r.ModalSize.DYNAMIC,
className: g.modalRoot,
transitionState: w,
children: (0, n.jsx)(d.Gt, {
  value: A,
  children: (0, n.jsx)(r.ModalContent, {
    className: g.modalContent,
    children: (0, n.jsx)(h.Q.Provider, {
      value: Y,
      children: null == R || null == P ? (0, n.jsx)('div', {
        className: g.spinnerContainer,
        children: (0, n.jsx)(r.Spinner, {})
      }) : (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(f.Z, {
            videoURL: R,
            isLoading: L,
            onDoneLoading: () => k(!1),
            audioURL: P,
            transitionState: w
          }),
          !L && (0, n.jsx)(b.Z, {
            channelId: y,
            onSetClipName: W,
            clipName: z,
            clip: T,
            onClose: N
          })
        ]
      })
    })
  })
})
  });
}