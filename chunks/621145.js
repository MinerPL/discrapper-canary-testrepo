I.d(_, {
  Z: function() {
return m;
  }
}), I(47120), I(773603);
var A = I(735250),
  O = I(470079),
  T = I(392711),
  S = I(442837),
  C = I(481060),
  N = I(640108),
  D = I(406432),
  R = I(169525),
  e = I(786761),
  V = I(3148),
  i = I(492593),
  n = I(219797),
  P = I(524444),
  t = I(884182),
  a = I(546432),
  L = I(25015),
  l = I(963550),
  s = I(845080),
  o = I(594174),
  M = I(956664),
  r = I(709054),
  c = I(788080),
  Y = I(800530),
  U = I(981631),
  d = I(217702),
  G = I(512864);
let F = (E, _) => {
let I = E.attachments.map(E => {
  var I, A, O, T;
  let S = {
    ...E,
    filename: (0, c.eS)(E),
    size: 0,
    proxy_url: E.url
  };
  if (!((0, D.CO)(E.filename) || (0, D.NU)(E.filename)))
    return S;
  return {
    ...S,
    width: null !== (O = null === (I = _[E.id]) || void 0 === I ? void 0 : I.width) && void 0 !== O ? O : Y.Sv,
    height: null !== (T = null === (A = _[E.id]) || void 0 === A ? void 0 : A.height) && void 0 !== T ? T : Y.EY
  };
});
return (0, e.e5)({
  ...(0, V.ZP)({
    nonce: E.id,
    content: E.content,
    type: U.uaV.DEFAULT,
    channelId: U.lds
  }),
  timestamp: new Date(r.default.extractTimestamp(E.id)).toISOString(),
  attachments: I,
  state: U.yb.SENT
});
  },
  u = E => {
let {
  message: _
} = E, {
  attachments: I
} = _;
if (0 === I.length)
  return null;
let O = (E, _, I) => {
    let O = Y.Sv,
      S = Y.EY;
    if (null != _.width && null != _.height) {
      let E = (0, M.Dc)({
        width: _.width,
        height: _.height,
        maxWidth: Y.Sv,
        maxHeight: Y.EY
      });
      O = (0, T.clamp)(Math.round(_.width * E), 0, Y.Sv), S = (0, T.clamp)(Math.round(_.height * E), 0, Y.EY);
    }
    return (0, A.jsx)('div', {
      style: {
        width: I ? O : '100%',
        height: I ? S : '100%'
      },
      children: (0, A.jsx)(N.ZP, {
        className: E.className,
        forceExternal: !1,
        src: _.url,
        width: I ? O : '100%',
        height: I ? S : '100%',
        responsive: !0,
        volume: E.volume,
        autoPlay: !1,
        autoMute: !1,
        type: N.ZP.Types.VIDEO,
        mediaLayoutType: E.mediaLayoutType,
        fileName: _.filename,
        fileSize: null == _.size ? void 0 : _.size.toString(),
        playable: !0,
        renderLinkComponent: P.iT,
        onClick: E.onClick,
        onPlay: E.onPlay,
        onEnded: E.onEnded,
        onVolumeChange: E.onVolumeChange,
        onMute: E.onMute,
        downloadable: !1
      })
    });
  },
  S = 1 === I.length;

function C(E, _) {
  return (0, R.dn)(E.originalItem, _);
}
return (0, A.jsx)('div', {
  className: G.classificationEvidenceMessageAttachment,
  children: (0, A.jsx)(t.Z, {
    items: I.map(E => ({
      item: {
        uniqueId: E.id,
        originalItem: E,
        type: (0, a.aw)(E, !0),
        downloadUrl: E.proxy_url,
        height: E.height,
        width: E.width,
        spoiler: E.spoiler,
        contentType: E.content_type
      },
      message: _,
      mediaLayoutType: d.hV.MOSAIC,
      autoPlayGif: !1,
      canRemoveItem: !1,
      isSingleMosaicItem: S,
      onRemoveItem: T.noop,
      renderVideoComponent: _ => O(_, E, S),
      renderImageComponent: E => (0, A.jsx)(n.dS, {
        ...E,
        hiddenSpoilers: !0,
        shouldHideMediaOptions: !0,
        shouldLink: !1
      }),
      renderAudioComponent: n.q7,
      renderPlaintextFilePreview: n.d4,
      renderGenericFileComponent: n.ZK,
      renderMosaicItemFooter: n.L9,
      getObscureReason: C,
      gifFavoriteButton: () => null
    }))
  })
});
  };

function m(E) {
  var _;
  let {
flaggedContent: I
  } = E, T = (0, S.e7)([o.default], () => o.default.getCurrentUser()), [N, R] = O.useState({}), [e, V] = O.useState(!0), n = I[0], P = F(n, N), t = (0, L.Z)(P, {
hideSimpleEmbedContent: !1,
allowList: !1,
allowHeading: !1,
allowLinks: !1,
previewLinkTarget: !1
  });
  return (O.useEffect(() => {
Promise.all(n.attachments.filter(E => {
  let {
    filename: _
  } = E;
  return (0, D.CO)(_) || (0, D.NU)(_);
}).map(E => {
  var _;
  return (_ = E, new Promise((E, I) => {
    if ((0, D.CO)(_.filename)) {
      let A = new Image();
      A.src = _.url, A.onload = () => {
        E(A);
      }, A.onerror = () => {
        I();
      };
    } else if ((0, D.NU)(_.filename)) {
      let A = document.createElement('video');
      A.src = _.url, A.onloadedmetadata = () => {
        let _ = A.videoWidth;
        E({
          width: _,
          height: A.videoHeight
        });
      }, A.onerror = () => {
        I();
      };
    } else
      E({
        width: 0,
        height: 0
      });
  })).then(_ => R(I => ({
    ...I,
    [E.id]: _
  })));
})).finally(() => V(!1));
  }, [n.attachments]), '' === P.content && 0 === P.attachments.length) ? null : (0, A.jsx)('div', {
className: G.classificationEvidenceCard,
children: e ? (0, A.jsx)(C.Spinner, {}) : (0, A.jsx)(i.Z, {
  compact: !1,
  childrenHeader: (0, s.Z)({
    author: {
      ...T,
      colorString: '',
      nick: null !== (_ = null == T ? void 0 : T.username) && void 0 !== _ ? _ : ''
    },
    message: P,
    channel: void 0,
    guildId: void 0,
    compact: !1,
    animateAvatar: !1,
    isGroupStart: !0,
    roleIcon: void 0,
    hideTimestamp: !1
  }),
  childrenAccessories: (0, A.jsx)(u, {
    message: P
  }),
  childrenMessageContent: (0, l.Z)({
    message: P
  }, t.content),
  hasThread: !1,
  hasReply: !1
})
  });
}