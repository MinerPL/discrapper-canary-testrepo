t.r(n), t.d(n, {
  default: function() {
return N;
  }
});
var a = t(735250),
  l = t(470079),
  s = t(442837),
  i = t(481060),
  o = t(313201),
  r = t(430824),
  c = t(427679),
  d = t(939863),
  u = t(540186),
  _ = t(609776),
  m = t(289584),
  h = t(180899),
  E = t(157925),
  x = t(689938),
  I = t(469433);

function T(e) {
  let {
guild: n,
channel: t,
stageInstance: l,
headerId: s,
onClose: o,
loading: r,
error: c,
onSave: u,
defaultOptions: m,
isSlideReady: h
  } = e;
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)('div', {
    className: I.content,
    children: [
      (0, a.jsx)(d.Z, {
        children: (0, a.jsx)('div', {
          className: I.stageIconBackground,
          children: (0, a.jsx)(i.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 32,
            height: 32,
            className: I.stageIcon
          })
        })
      }),
      (0, a.jsx)(i.Heading, {
        id: s,
        variant: 'heading-xl/semibold',
        color: 'header-primary',
        className: I.headerTitle,
        children: null == l ? x.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : x.Z.Messages.EDIT_STAGE_CHANNEL_TITLE
      }),
      (0, a.jsx)(i.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        className: I.headerSubtitle,
        children: null == l ? x.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : x.Z.Messages.EDIT_STAGE_SUBTITLE
      })
    ]
  }),
  (0, a.jsx)(_.Z, {
    guild: n,
    channel: t,
    onSave: u,
    error: c,
    loading: r,
    onClose: o,
    defaultOptions: m,
    isSlideReady: h
  })
]
  });
}

function N(e) {
  let {
channel: n,
onClose: t,
transitionState: d,
..._
  } = e, x = (0, o.Dt)(), N = (0, s.e7)([r.Z], () => r.Z.getGuild(n.guild_id)), g = l.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]), {
loading: C,
error: f,
onSave: v
  } = (0, m.Z)(n, t), {
modalStep: S,
setModalStep: j,
readySlide: A,
handleSlideReady: p,
savedOptions: L,
handleSettingsSave: Z,
handleDelayedSave: R
  } = (0, h.Z)({
stageInstance: g,
defaultStep: E.lv.STAGE_CHANNEL_SETTINGS,
error: f,
onSave: v
  });
  return (l.useEffect(() => {
null == N && t();
  }, [
N,
t
  ]), null == N) ? null : (0, a.jsx)(i.ModalRoot, {
transitionState: d,
'aria-labelledby': x,
..._,
size: i.ModalSize.SMALL,
children: (0, a.jsxs)(i.Slides, {
  activeSlide: S,
  width: 440,
  onSlideReady: p,
  children: [
    (0, a.jsx)(i.Slide, {
      id: E.lv.STAGE_CHANNEL_SETTINGS,
      children: (0, a.jsx)('div', {
        className: I.slideContainer,
        children: (0, a.jsx)(T, {
          guild: N,
          channel: n,
          stageInstance: g,
          headerId: x,
          onClose: t,
          loading: C,
          error: f,
          onSave: Z,
          defaultOptions: L,
          isSlideReady: A === E.lv.STAGE_CHANNEL_SETTINGS
        })
      })
    }),
    (0, a.jsx)(i.Slide, {
      id: E.lv.PUBLIC_STAGE_PREVIEW,
      children: (0, a.jsx)('div', {
        className: I.slideContainer,
        children: (0, a.jsx)(u.Z, {
          headerId: x,
          guild: N,
          channel: n,
          stageData: L,
          loading: C,
          onNext: R,
          onCancel: t,
          onBack: () => j(E.lv.STAGE_CHANNEL_SETTINGS)
        })
      })
    })
  ]
})
  });
}