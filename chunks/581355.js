"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("430824"),
  d = n("153124"),
  u = n("170039"),
  o = n("427679"),
  c = n("939863"),
  E = n("540186"),
  f = n("609776"),
  h = n("289584"),
  _ = n("180899"),
  S = n("157925"),
  T = n("689938"),
  N = n("174423");

function g(e) {
  let {
    guild: t,
    channel: n,
    stageInstance: s,
    headerId: l,
    onClose: r,
    loading: d,
    error: o,
    onSave: E,
    defaultOptions: h,
    isSlideReady: _
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: N.content,
      children: [(0, a.jsx)(c.default, {
        children: (0, a.jsx)("div", {
          className: N.stageIconBackground,
          children: (0, a.jsx)(u.default, {
            width: 32,
            height: 32,
            className: N.stageIcon
          })
        })
      }), (0, a.jsx)(i.Heading, {
        id: l,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: N.headerTitle,
        children: null == s ? T.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : T.default.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: N.headerSubtitle,
        children: null == s ? T.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : T.default.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, a.jsx)(f.default, {
      guild: t,
      channel: n,
      onSave: E,
      error: o,
      loading: d,
      onClose: r,
      defaultOptions: h,
      isSlideReady: _
    })]
  })
}

function v(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: u,
    ...c
  } = e, f = (0, d.useUID)(), T = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), v = s.useMemo(() => o.default.getStageInstanceByChannel(t.id), [t.id]), {
    loading: x,
    error: I,
    onSave: C
  } = (0, h.default)(t, n), {
    modalStep: m,
    setModalStep: A,
    readySlide: p,
    handleSlideReady: L,
    savedOptions: R,
    handleSettingsSave: M,
    handleDelayedSave: j
  } = (0, _.default)({
    stageInstance: v,
    defaultStep: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
    error: I,
    onSave: C
  });
  return (s.useEffect(() => {
    null == T && n()
  }, [T, n]), null == T) ? null : (0, a.jsx)(i.ModalRoot, {
    transitionState: u,
    "aria-labelledby": f,
    ...c,
    size: i.ModalSize.SMALL,
    children: (0, a.jsxs)(i.Slides, {
      activeSlide: m,
      width: 440,
      onSlideReady: L,
      children: [(0, a.jsx)(i.Slide, {
        id: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
        children: (0, a.jsx)("div", {
          className: N.slideContainer,
          children: (0, a.jsx)(g, {
            guild: T,
            channel: t,
            stageInstance: v,
            headerId: f,
            onClose: n,
            loading: x,
            error: I,
            onSave: M,
            defaultOptions: R,
            isSlideReady: p === S.StartStageSteps.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, a.jsx)(i.Slide, {
        id: S.StartStageSteps.PUBLIC_STAGE_PREVIEW,
        children: (0, a.jsx)("div", {
          className: N.slideContainer,
          children: (0, a.jsx)(E.default, {
            headerId: f,
            guild: T,
            channel: t,
            stageData: R,
            loading: x,
            onNext: j,
            onCancel: n,
            onBack: () => A(S.StartStageSteps.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}