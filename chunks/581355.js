t.r(n), t.d(n, {
  default: function() {
return x;
  }
});
var a = t(735250),
  l = t(470079),
  s = t(442837),
  i = t(481060),
  r = t(430824),
  o = t(153124),
  c = t(427679),
  d = t(939863),
  u = t(540186),
  _ = t(609776),
  E = t(289584),
  h = t(180899),
  T = t(157925),
  m = t(689938),
  I = t(782939);

function N(e) {
  let {
guild: n,
channel: t,
stageInstance: l,
headerId: s,
onClose: r,
loading: o,
error: c,
onSave: u,
defaultOptions: E,
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
        children: null == l ? m.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : m.Z.Messages.EDIT_STAGE_CHANNEL_TITLE
      }),
      (0, a.jsx)(i.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        className: I.headerSubtitle,
        children: null == l ? m.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : m.Z.Messages.EDIT_STAGE_SUBTITLE
      })
    ]
  }),
  (0, a.jsx)(_.Z, {
    guild: n,
    channel: t,
    onSave: u,
    error: c,
    loading: o,
    onClose: r,
    defaultOptions: E,
    isSlideReady: h
  })
]
  });
}

function x(e) {
  let {
channel: n,
onClose: t,
transitionState: d,
..._
  } = e, m = (0, o.Dt)(), x = (0, s.e7)([r.Z], () => r.Z.getGuild(n.guild_id)), f = l.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]), {
loading: g,
error: S,
onSave: C
  } = (0, E.Z)(n, t), {
modalStep: v,
setModalStep: A,
readySlide: p,
handleSlideReady: j,
savedOptions: R,
handleSettingsSave: M,
handleDelayedSave: L
  } = (0, h.Z)({
stageInstance: f,
defaultStep: T.lv.STAGE_CHANNEL_SETTINGS,
error: S,
onSave: C
  });
  return (l.useEffect(() => {
null == x && t();
  }, [
x,
t
  ]), null == x) ? null : (0, a.jsx)(i.ModalRoot, {
transitionState: d,
'aria-labelledby': m,
..._,
size: i.ModalSize.SMALL,
children: (0, a.jsxs)(i.Slides, {
  activeSlide: v,
  width: 440,
  onSlideReady: j,
  children: [
    (0, a.jsx)(i.Slide, {
      id: T.lv.STAGE_CHANNEL_SETTINGS,
      children: (0, a.jsx)('div', {
        className: I.slideContainer,
        children: (0, a.jsx)(N, {
          guild: x,
          channel: n,
          stageInstance: f,
          headerId: m,
          onClose: t,
          loading: g,
          error: S,
          onSave: M,
          defaultOptions: R,
          isSlideReady: p === T.lv.STAGE_CHANNEL_SETTINGS
        })
      })
    }),
    (0, a.jsx)(i.Slide, {
      id: T.lv.PUBLIC_STAGE_PREVIEW,
      children: (0, a.jsx)('div', {
        className: I.slideContainer,
        children: (0, a.jsx)(u.Z, {
          headerId: m,
          guild: x,
          channel: n,
          stageData: R,
          loading: g,
          onNext: L,
          onCancel: t,
          onBack: () => A(T.lv.STAGE_CHANNEL_SETTINGS)
        })
      })
    })
  ]
})
  });
}