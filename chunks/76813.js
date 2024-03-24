"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("550410"),
  o = n("778588"),
  u = n("42887"),
  d = n("522049"),
  c = n("664336"),
  f = n("56947"),
  h = n("386045"),
  E = n("18346"),
  m = n("728658"),
  p = n("389535"),
  S = n("80028"),
  g = n("782340");

function N(e) {
  let {
    canShowReminder: t = !1,
    className: N
  } = e, _ = (0, E.default)(u.default), {
    showClipsHeaderEntrypoint: T
  } = f.ClipsExperiment.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    hasClips: I,
    hasNewClips: C,
    lastClipsSession: A,
    remindersEnabled: M,
    hasAnyClipAnimations: v
  } = (0, s.useStateFromStoresObject)([h.default], () => ({
    hasClips: h.default.hasClips(),
    hasNewClips: h.default.getNewClipIds().length > 0,
    lastClipsSession: h.default.getLastClipsSession(),
    remindersEnabled: h.default.getSettings().remindersEnabled,
    hasAnyClipAnimations: h.default.hasAnyClipAnimations()
  })), R = null != A && A.newClipIds.length > 0, x = (0, m.useClipsButtonStore)(e => e.clipsButtonRef), L = (0, m.useClipsButtonStore)(e => e.setClipsButtonRef), O = (0, s.useStateFromStores)([o.default], () => o.default.hasLayers()), {
    preventIdle: b,
    allowIdle: y
  } = (0, r.usePreventIdle)("animation");

  function j() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("167573").then(n.bind(n, "167573"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }, {
      modalKey: S.CLIPS_GALLERY_MODAL_KEY
    })
  }
  return (l.useEffect(() => (v ? b() : y(), () => y()), [v, b, y]), T && _ && I) ? (0, a.jsxs)(a.Fragment, {
    children: [null != x && t && M && R && !(0, i.hasAnyModalOpen)() && !O && (0, a.jsx)(p.default, {
      clipIconRef: x,
      lastClipsSession: A,
      onOpenClipsGallery: j
    }), (0, a.jsx)("div", {
      ref: L,
      children: (0, a.jsx)(c.Icon, {
        className: N,
        icon: d.default,
        showBadge: C,
        tooltip: g.default.Messages.CLIPS_GALLERY_TOOLTIP,
        onClick: j
      })
    })]
  }) : null
}