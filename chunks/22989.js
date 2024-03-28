"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var l = a("735250"),
  n = a("470079"),
  i = a("990547"),
  r = a("481060"),
  s = a("240872"),
  u = a("579806"),
  o = a("100527"),
  d = a("906732"),
  c = a("39604"),
  m = a("212039"),
  f = a("259612"),
  v = a("572720"),
  p = a("362693"),
  h = a("674908"),
  x = a("20437"),
  C = a("689938"),
  E = a("573233");

function g(e) {
  var t, a, g, N, I, _, L, j;
  let {
    clip: M,
    channelId: S,
    transitionState: T,
    onClose: b
  } = e, [R, y] = n.useState(!0), [A, w] = n.useState(null), [P, k] = n.useState(null), {
    analyticsLocations: D
  } = (0, d.default)(o.default.CLIPS_EDITOR);
  n.useEffect(() => {
    (async function e() {
      let e;
      try {
        e = await u.default.clips.loadClip(M.filepath)
      } catch {
        b(), s.default.show({
          title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
          body: C.default.Messages.CLIPS_LOAD_ERROR_BODY
        });
        return
      }
      let t = e.data.buffer,
        a = await (0, m.createAudioMP4FromVideoMP4)(t),
        l = URL.createObjectURL(new Blob([a], {
          type: "audio/mp4"
        })),
        n = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      k(l), w(n)
    })()
  }, [M.filepath, b]), n.useEffect(() => () => {
    null != A && URL.revokeObjectURL(A)
  }, [A]), n.useEffect(() => () => {
    null != P && URL.revokeObjectURL(P)
  }, [P]);
  let [O, F] = n.useState(null === (I = null === (t = M.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === I || I), [B, U] = n.useState(null === (_ = null === (a = M.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === _ || _), [H, z] = n.useState({
    start: null !== (L = null === (g = M.editMetadata) || void 0 === g ? void 0 : g.start) && void 0 !== L ? L : 0,
    end: null !== (j = null === (N = M.editMetadata) || void 0 === N ? void 0 : N.end) && void 0 !== j ? j : 0
  }), [G, K] = n.useState(M.name), V = n.useRef({
    name: G,
    editMetadata: {
      start: H.start,
      end: H.end,
      voiceAudio: O,
      applicationAudio: B
    }
  });
  V.current = {
    name: G,
    editMetadata: {
      start: H.start,
      end: H.end,
      voiceAudio: O,
      applicationAudio: B
    }
  };
  let Y = (0, v.useClipProtocolURL)(M);
  n.useEffect(() => {
    async function e() {
      let e = {};
      null != Y && (e = {
        thumbnail: await (0, f.createThumbnailFromVideo)(Y, V.current.editMetadata.start)
      }), (0, c.updateClipMetadata)(M.id, {
        ...V.current,
        ...e
      })
    }
    return () => {
      e()
    }
  }, [M.id, Y]);
  let W = n.useRef(null),
    X = n.useMemo(() => ({
      videoPlayerRef: W,
      applicationAudioEnabled: B,
      setApplicationAudioEnabled: U,
      voiceAudioEnabled: O,
      setVoiceAudioEnabled: F,
      cropData: H,
      setCropData: z
    }), [B, O, H]);
  return (0, l.jsx)(r.ModalRoot, {
    impression: {
      impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: r.ModalSize.DYNAMIC,
    className: E.modalRoot,
    transitionState: T,
    children: (0, l.jsx)(d.AnalyticsLocationProvider, {
      value: D,
      children: (0, l.jsx)(r.ModalContent, {
        className: E.modalContent,
        children: (0, l.jsx)(x.EditModalContext.Provider, {
          value: X,
          children: null == A || null == P ? (0, l.jsx)("div", {
            className: E.spinnerContainer,
            children: (0, l.jsx)(r.Spinner, {})
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(p.default, {
              videoURL: A,
              isLoading: R,
              onDoneLoading: () => y(!1),
              audioURL: P,
              transitionState: T
            }), !R && (0, l.jsx)(h.default, {
              channelId: S,
              onSetClipName: K,
              clipName: G,
              clip: M,
              onClose: b
            })]
          })
        })
      })
    })
  })
}