n.d(t, {
  Ld: function() {
return P;
  },
  OB: function() {
return S;
  },
  R_: function() {
return j;
  },
  aw: function() {
return R;
  },
  pU: function() {
return b;
  }
}), n(789020), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(481060),
  s = n(162609),
  u = n(370298),
  d = n(167080),
  c = n(163268),
  m = n(25610),
  p = n(124347),
  h = n(976853),
  _ = n(592125),
  E = n(68588),
  I = n(941797),
  x = n(626135),
  g = n(630388),
  C = n(956664),
  M = n(406432),
  f = n(169525),
  N = n(65838),
  T = n(217702),
  O = n(981631),
  A = n(689938),
  v = n(62233);
let y = /\.(mp3|m4a|ogg|wav|flac)$/i,
  j = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  P = e => 'IMAGE' === e || 'VIDEO' === e;

function S(e, t) {
  return {
uniqueId: e.id,
originalItem: e,
type: R(e, t),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function R(e, t) {
  let {
filename: n,
width: i,
height: o
  } = e;
  if (t && null != i && i > 0 && null != o && o > 0) {
if ((0, M.CO)(n))
  return 'IMAGE';
if (!(0, M.NU)(n) || null == e.proxy_url)
  return 'INVALID';
else {
  var a;
  return (0, g.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, O.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != t && y.test(n) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, N.O)(n))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function b(e, t) {
  let {
contentType: n,
width: i,
height: o
  } = e;
  if (t && i > 0 && o > 0)
return (0, M.tw)(n) ? 'IMAGE' : (0, M.X2)(n) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let w = e => {
  let t, n, a, {
mimeType: s,
downloadURL: c,
onRemoveItem: m,
showDownload: p,
showImageAppPicker: h,
isVisualMediaType: _,
channelId: E
  } = e;
  p && (t = (0, i.jsx)(r.Tooltip, {
text: A.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(d.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: v.hoverButton,
  iconClassName: v.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: c,
  mimeType: s
})
  })), null != m && (n = (0, i.jsx)(r.Tooltip, {
text: A.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(r.Clickable, {
  ...e,
  className: l()(v.hoverButton, v.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(r.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [I, x] = o.useState(!1), g = o.useCallback(() => x(e => !e), []);
  return (h && (a = (0, i.jsx)(u.Z, {
toggleShowMenu: g,
showMenu: I,
channelId: E,
className: l()(v.hoverButton, {
  [v.selected]: I
}),
imageUrl: c,
mimeType: s
  })), null == n && null == t && null == a) ? null : (0, i.jsxs)('div', {
className: l()(v.hoverButtonGroup, {
  [v.nonMediaMosaicItem]: !_,
  [v.forceShowHover]: I
}),
children: [
  a,
  t,
  n
]
  });
};

function F(e) {
  let {
message: t,
item: n,
autoPlayGif: a,
canRemoveItem: u,
onRemoveItem: d,
onClick: c,
onContextMenu: m,
onPlay: E,
renderImageComponent: g,
renderVideoComponent: M,
renderAudioComponent: f,
renderPlaintextFilePreview: N,
renderGenericFileComponent: y,
className: j,
imgContainerClassName: P,
imgClassName: S,
focusable: R,
hiddenSpoilers: b,
mediaLayoutType: F,
maxWidth: D,
maxHeight: L,
hasFooter: Z,
useFullWidth: H,
isVisualMediaType: k,
onVideoControlsShow: V,
onVideoControlsHide: G
  } = e, {
width: U,
height: B,
spoiler: W,
type: X,
contentType: $
  } = n, [q, z] = o.useState(!1), [J, Y] = o.useState(!1), Q = t.getChannelId(), K = _.Z.getChannel(Q), ee = (0, h.Z)(Q), et = s.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, en = o.useMemo(() => null != $ && -1 !== $.indexOf('/') ? $.split('/') : [
'unknown',
'unknown'
  ], [$]), ei = 'IMAGE' === X && !p.u.test(n.downloadUrl), eo = !1;
  if (k) {
(null == U || null == B) && (eo = !0);
let e = (0, C.Dc)({
  width: null != U ? U : 0,
  height: null != B ? B : 0,
  maxWidth: T.mT,
  maxHeight: T.Jj
});
!H && (e * (null != U ? U : 0) < T.OF || e * (null != B ? B : 0) < T.OF) && (eo = !0);
  }
  let ea = o.useCallback(() => {
  d(n);
}, [
  n,
  d
]),
el = o.useCallback(e => {
  ei && !eo && (e && !J ? (Y(!0), x.default.track(O.rMx.IMAGE_HOVERED, {
    guild_id: null == K ? void 0 : K.guild_id,
    channel_id: null == K ? void 0 : K.id,
    image_recommendations_shown: et
  })) : !e && J && Y(!1));
}, [
  J,
  K,
  et,
  ei,
  eo
]),
er = o.useCallback(() => {
  if (F === T.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(X) || 'OTHER' === X;
    return eo ? null : !q && (0, i.jsx)(w, {
      mimeType: en,
      downloadURL: n.downloadUrl,
      showDownload: e,
      showImageAppPicker: ei && et,
      onRemoveItem: u ? ea : void 0,
      isVisualMediaType: k,
      channelId: Q
    });
  }
  return u && (0, i.jsx)(r.Clickable, {
    className: W ? v.spoilerRemoveMosaicItemButton : v.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => d(n),
    'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(r.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  F,
  u,
  W,
  X,
  k,
  q,
  n,
  en,
  ea,
  d,
  et,
  ee,
  Q,
  ei,
  eo
]);
  switch (X) {
case 'IMAGE':
  return (0, i.jsx)(I.h.Consumer, {
    children: e => (0, i.jsx)(g, {
      item: n,
      message: t,
      width: U,
      height: B,
      autoPlay: a && !b,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: er,
      containerClassName: j,
      className: P,
      imageClassName: S,
      shouldLink: R,
      hiddenSpoilers: b,
      responsive: !0,
      mediaLayoutType: F,
      maxWidth: D,
      maxHeight: L,
      useFullWidth: H,
      onMouseEnter: () => el(!0),
      onMouseLeave: () => el(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(M, {
    item: n,
    message: t,
    width: U,
    height: B,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: er,
    naturalWidth: U,
    naturalHeight: B,
    className: l()(j, {
      [v.hasFooter]: Z
    }),
    playable: R,
    responsive: !0,
    mediaLayoutType: F,
    maxWidth: D,
    maxHeight: L,
    useFullWidth: H,
    mimeType: en,
    onControlsShow: V,
    onControlsHide: G,
    downloadable: !ee,
    mediaPlayerClassName: Z ? v.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(f, {
    item: n,
    message: t,
    className: j,
    playable: R,
    mimeType: en,
    renderAdjacentContent: er,
    onVolumeShow: () => z(!0),
    onVolumeHide: () => z(!1),
    onPlay: E
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(N, {
    item: n,
    message: t,
    className: j,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: er
  });
case 'OTHER':
  return (0, i.jsx)(y, {
    item: n,
    message: t,
    className: j,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: er
  });
case 'INVALID':
  return null;
  }
}
t.ZP = function(e) {
  var t;
  let {
className: n,
item: a,
message: r,
getObscureReason: s,
useFullWidth: u,
mediaLayoutType: d,
isSingleMosaicItem: p,
footer: h,
..._
  } = e, {
width: I,
height: x,
type: g
  } = a, M = s(a, (0, m.V)(r.channel_id, r.author.id)), [N, O] = o.useState(null != M), A = d === T.hV.MOSAIC, y = !A && (null != I && I < 200 || null != x && x < 50);
  let P = 'IMAGE' === (t = g) || 'VIDEO' === t,
S = j(g),
R = p && null != M && (0, c.bR)(I, x),
[b, w] = o.useState(!1),
D = () => {
  w(!0);
},
L = () => {
  w(!1);
},
Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(F, {
    ..._,
    item: a,
    message: r,
    getObscureReason: s,
    hiddenSpoilers: e,
    className: l()(n, v.mosaicItemContent, {
      [v.obscured]: N && !y,
      [v.hiddenSpoiler]: N && M === f.wk.SPOILER,
      [v.hiddenExplicit]: N && null != M && [
        f.wk.EXPLICIT_CONTENT,
        f.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(M),
      [v.hiddenMosaicItem]: N && e,
      [v.inline]: N && y
    }),
    focusable: !e,
    mediaLayoutType: d,
    hasFooter: null != h,
    useFullWidth: !!R || u,
    isVisualMediaType: S,
    onVideoControlsShow: D,
    onVideoControlsHide: L
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: l()(v.mosaicItem, {
    [v.mosaicItemNoJustify]: P,
    [v.mosaicItemFullWidth]: u,
    [v.mosaicItemMediaMosaic]: A,
    [v.hideOverflow]: A && S,
    [v.mosaicItemWithFooter]: null != h
  }),
  children: [
    null != M ? (0, i.jsx)(E.Z, {
      type: E.Z.Types.ATTACHMENT,
      inline: y,
      reason: M,
      isSingleMosaicItem: p,
      obscured: N,
      containerStyles: function(e, t, n) {
        if (!t)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: t
          } = (0, C.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = t;
        }
        return {
          ...n !== T.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(a, P, d),
      obscurityControlClassName: l()({
        [v.obscureVideoSpacing]: 'VIDEO' === g && p && !N && b
      }),
      onToggleObscurity: () => O(e => !e),
      children: e => Z(e)
    }) : Z(),
    h
  ]
})
  });
};