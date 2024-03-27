"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("37983"),
  n = a("884691"),
  r = a("759843"),
  i = a("77078"),
  s = a("477566"),
  u = a("49671"),
  o = a("812204"),
  d = a("685665"),
  c = a("803725"),
  f = a("758946"),
  m = a("430481"),
  v = a("135284"),
  p = a("712652"),
  h = a("488673"),
  x = a("141210"),
  C = a("782340"),
  g = a("204839");

function E(e) {
  var t, a, E, L, N, I, M, j;
  let {
    clip: T,
    channelId: S,
    transitionState: _,
    onClose: b
  } = e, [w, R] = n.useState(!0), [A, y] = n.useState(null), [k, D] = n.useState(null), {
    analyticsLocations: P
  } = (0, d.default)(o.default.CLIPS_EDITOR);
  n.useEffect(() => {
    (async function e() {
      let e;
      try {
        e = await u.default.clips.loadClip(T.filepath)
      } catch {
        b(), s.default.show({
          title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
          body: C.default.Messages.CLIPS_LOAD_ERROR_BODY
        });
        return
      }
      let t = e.data.buffer,
        a = await (0, f.createAudioMP4FromVideoMP4)(t),
        l = URL.createObjectURL(new Blob([a], {
          type: "audio/mp4"
        })),
        n = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      D(l), y(n)
    })()
  }, [T.filepath, b]), n.useEffect(() => () => {
    null != A && URL.revokeObjectURL(A)
  }, [A]), n.useEffect(() => () => {
    null != k && URL.revokeObjectURL(k)
  }, [k]);
  let [O, F] = n.useState(null === (N = null === (t = T.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === N || N), [B, U] = n.useState(null === (I = null === (a = T.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === I || I), [H, z] = n.useState({
    start: null !== (M = null === (E = T.editMetadata) || void 0 === E ? void 0 : E.start) && void 0 !== M ? M : 0,
    end: null !== (j = null === (L = T.editMetadata) || void 0 === L ? void 0 : L.end) && void 0 !== j ? j : 0
  }), [Z, V] = n.useState(T.name), G = n.useRef({
    name: Z,
    editMetadata: {
      start: H.start,
      end: H.end,
      voiceAudio: O,
      applicationAudio: B
    }
  });
  G.current = {
    name: Z,
    editMetadata: {
      start: H.start,
      end: H.end,
      voiceAudio: O,
      applicationAudio: B
    }
  };
  let K = (0, v.useClipProtocolURL)(T);
  n.useEffect(() => {
    async function e() {
      let e = {};
      null != K && (e = {
        thumbnail: await (0, m.createThumbnailFromVideo)(K, G.current.editMetadata.start)
      }), (0, c.updateClipMetadata)(T.id, {
        ...G.current,
        ...e
      })
    }
    return () => {
      e()
    }
  }, [T.id, K]);
  let Y = n.useRef(null),
    W = n.useMemo(() => ({
      videoPlayerRef: Y,
      applicationAudioEnabled: B,
      setApplicationAudioEnabled: U,
      voiceAudioEnabled: O,
      setVoiceAudioEnabled: F,
      cropData: H,
      setCropData: z
    }), [B, O, H]);
  return (0, l.jsx)(i.ModalRoot, {
    impression: {
      impressionName: r.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: i.ModalSize.DYNAMIC,
    className: g.modalRoot,
    transitionState: _,
    children: (0, l.jsx)(d.AnalyticsLocationProvider, {
      value: P,
      children: (0, l.jsx)(i.ModalContent, {
        className: g.modalContent,
        children: (0, l.jsx)(x.EditModalContext.Provider, {
          value: W,
          children: null == A || null == k ? (0, l.jsx)("div", {
            className: g.spinnerContainer,
            children: (0, l.jsx)(i.Spinner, {})
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(p.default, {
              videoURL: A,
              isLoading: w,
              onDoneLoading: () => R(!1),
              audioURL: k,
              transitionState: _
            }), !w && (0, l.jsx)(h.default, {
              channelId: S,
              onSetClipName: V,
              clipName: Z,
              clip: T,
              onClose: b
            })]
          })
        })
      })
    })
  })
}