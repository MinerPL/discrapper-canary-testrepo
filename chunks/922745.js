n.d(t, {
  Z: function() {
return S;
  },
  r: function() {
return g;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(692547),
  l = n(215569),
  u = n(481060),
  c = n(312956),
  d = n(19780),
  _ = n(285952),
  E = n(470441),
  f = n(727218),
  h = n(540028),
  p = n(507675),
  m = n(273716),
  I = n(689938),
  T = n(666922);

function g(e) {
  let {
title: t,
onJumpToChannel: n,
onHide: i,
idle: a,
preventIdleComponent: l
  } = e, _ = (0, s.e7)([d.Z], () => d.Z.getChannelId()), E = null != _ ? (0, r.jsx)(h.Z, {
voiceChannelId: _,
idle: a
  }) : null, {
enabled: p
  } = c.Z.useExperiment({
location: 'PictureInPicturePlayer'
  });
  return (0, r.jsxs)(l, {
className: T.headerIdleContainer,
children: [
  (0, r.jsxs)(u.Clickable, {
    className: T.headerTitle,
    onClick: n,
    children: [
      (0, r.jsx)(u.ArrowSmallLeftIcon, {
        size: 'custom',
        color: 'currentColor',
        'aria-label': I.Z.Messages.OPEN_IN_THEATER,
        className: T.backButton,
        width: 20,
        height: 20
      }),
      (0, r.jsx)(f.Z, {
        className: T.headerText,
        size: f.Z.Sizes.SIZE_16,
        color: o.Z.unsafe_rawColors.WHITE_500.css,
        children: t
      })
    ]
  }),
  p && null != i ? (0, r.jsx)(m.Z, {
    onClick: i,
    label: I.Z.Messages.PICTURE_IN_PICTURE_CLOSE_PIP
  }) : null,
  E
]
  });
}

function S(e) {
  let {
children: t,
idle: n,
onJumpToChannel: i,
onHide: s,
backgroundKey: o,
onActive: u,
onForceIdle: c,
renderBottomLeftControls: d,
renderBottomRightControls: f,
screenMessage: h,
hideControls: m = !1,
className: I,
innerClassName: S,
...A
  } = e;
  return (0, r.jsxs)('div', {
onMouseMove: u,
onMouseDown: u,
onMouseLeave: c,
className: a()(T.pictureInPictureVideo, {
  [T.idle]: n
}, I),
onDoubleClick: i,
children: [
  (0, r.jsx)(l.W, {
    children: (0, r.jsx)(E.B, {
      className: S,
      children: t
    }, o)
  }),
  null != h ? (0, r.jsx)(p.Z, {
    size: 'small',
    ...h
  }) : null,
  !m && (0, r.jsxs)('div', {
    className: a()(T.videoControls, 'theme-dark'),
    children: [
      (0, r.jsx)('div', {
        className: T.topControls,
        children: (0, r.jsx)(g, {
          idle: n,
          onJumpToChannel: i,
          onHide: s,
          ...A
        })
      }),
      (0, r.jsxs)('div', {
        className: T.bottomControls,
        children: [
          (0, r.jsx)(_.Z, {
            grow: 0,
            shrink: 1,
            basis: '50%',
            align: _.Z.Align.CENTER,
            className: T.bottomLeftControls,
            children: null == d ? void 0 : d()
          }),
          (0, r.jsx)(_.Z, {
            grow: 0,
            shrink: 1,
            justify: _.Z.Justify.END,
            basis: '50%',
            align: _.Z.Align.CENTER,
            children: null == f ? void 0 : f()
          })
        ]
      })
    ]
  })
]
  });
}