"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("598165"),
  r = n("386045"),
  u = n("803725"),
  o = n("103979"),
  d = n("981913"),
  c = n("373469"),
  f = n("271938"),
  h = n("191145"),
  m = n("99795"),
  p = n("782340"),
  E = n("960863");

function g(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([h.default], () => h.default.getSelectedParticipant(t.id)), g = (null == n ? void 0 : n.type) === m.ParticipantTypes.STREAM, S = (0, s.useStateFromStores)([c.default], () => g ? c.default.getActiveStreamForStreamKey(n.id) : null), {
    ignoreSenderPreference: C
  } = o.default.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    viewerClippingAllowed: _,
    isAtMaxSavingClipOperations: I
  } = (0, s.useStateFromStoresObject)([r.default], () => ({
    viewerClippingAllowed: null != S && (r.default.isViewerClippingAllowedForUser(S.ownerId) || C),
    isAtMaxSavingClipOperations: r.default.getIsAtMaxSaveClipOperations()
  })), T = r.default.getSettings().clipsEnabled, v = (null == S ? void 0 : S.ownerId) === f.default.getId(), x = !T || !(v || _) || I || null == n, N = l.useCallback(e => (0, a.jsx)(i.CameraIcon, {
    ...e,
    color: "currentColor"
  }), []);
  return (0, a.jsx)(d.default, {
    className: E.actionBarButton,
    onClick: () => {
      !x && (v ? (0, u.saveClip)() : (0, u.saveClip)(n.id))
    },
    disabled: x,
    iconComponent: N,
    label: null == S ? p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : v || _ ? T ? I ? void 0 : p.default.Messages.CLIPS_SAVE : p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_ENABLE_CLIPS_TOOLTIP : p.default.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP,
    grow: !1
  })
}