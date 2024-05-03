"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
});
var n = l("735250");
l("470079");
var a = l("442837"),
  u = l("481060"),
  d = l("846027"),
  o = l("239091"),
  s = l("287734"),
  r = l("872810"),
  i = l("410575"),
  c = l("441061"),
  f = l("431368"),
  S = l("418469"),
  M = l("435064"),
  g = l("779618"),
  m = l("39604"),
  p = l("258609"),
  E = l("441167"),
  C = l("700994"),
  I = l("199902"),
  h = l("314897"),
  T = l("592125"),
  x = l("131951"),
  A = l("594174"),
  v = l("569545"),
  U = l("981631"),
  _ = l("65154"),
  b = l("689938");

function w(e) {
  return (0, a.useStateFromStores)([I.default], () => {
    let t = I.default.getActiveStreamForApplicationStream(e);
    return null != t && (0, v.encodeStreamKey)(t) === (0, v.encodeStreamKey)(e)
  })
}

function j(e) {
  let {
    stream: t,
    analyticsContext: l,
    appContext: I,
    exitFullscreen: j,
    onSelect: L
  } = e, R = function(e) {
    let t = w(e),
      l = (0, g.default)(x.default),
      d = M.default.getSettings().clipsEnabled,
      o = e.ownerId === h.default.getId(),
      {
        enableViewerClipping: s,
        ignoreSenderPreference: r
      } = E.default.useExperiment({
        location: "StreamContextMenu"
      }, {
        autoTrackExposure: !1
      }),
      i = (0, a.useStateFromStores)([M.default], () => M.default.getIsAtMaxSaveClipOperations()),
      c = (0, a.useStateFromStores)([M.default], () => M.default.isViewerClippingAllowedForUser(e.ownerId)) || r;
    return l && s && t ? (0, n.jsx)(u.MenuItem, {
      id: "clip-stream",
      disabled: !d || !(o || c) || i,
      label: b.default.Messages.CLIPS_SAVE,
      action: () => o ? (0, m.saveClip)() : (0, m.saveClip)((0, v.encodeStreamKey)(e))
    }) : null
  }(t), V = w(t), F = function(e) {
    let t = w(e),
      l = (0, C.default)(e.ownerId, _.MediaEngineContextTypes.STREAM);
    return t ? l : null
  }(t), O = function(e) {
    let t;
    let l = (0, a.useStateFromStores)([p.default], () => null != p.default.getRemoteSessionId()),
      d = (0, a.useStateFromStores)([T.default], () => T.default.getChannel(e.channelId), [e.channelId]),
      o = w(e),
      i = A.default.getCurrentUser(),
      c = null != i && e.ownerId === i.id;
    return (t = c ? b.default.Messages.STOP_STREAMING : o ? b.default.Messages.STOP_WATCHING : b.default.Messages.WATCH_STREAM, l || !c && o && (null == d ? void 0 : d.isGuildStageVoice())) ? null : (0, n.jsx)(u.MenuItem, {
      id: "watch",
      label: t,
      action: o ? function() {
        (0, r.stopStream)((0, v.encodeStreamKey)(e))
      } : function() {
        s.default.selectVoiceChannel(e.channelId), (0, r.watchStream)(e)
      }
    })
  }(t), y = function(e) {
    let t = w(e),
      l = (0, a.useStateFromStores)([x.default], () => x.default.isLocalMute(e.ownerId, _.MediaEngineContextTypes.STREAM)),
      o = A.default.getCurrentUser(),
      s = null != o && e.ownerId === o.id;
    return !t || s ? null : (0, n.jsx)(u.MenuCheckboxItem, {
      id: "mute",
      label: b.default.Messages.SOUND_MUTE,
      action: function() {
        d.default.toggleLocalMute(e.ownerId, _.MediaEngineContextTypes.STREAM)
      },
      checked: l
    })
  }(t), k = (0, S.default)(t, I, j), G = (0, f.default)(t.channelId, t.ownerId), N = (0, c.default)(t.channelId), P = (0, a.useStateFromStores)([T.default], () => T.default.getChannel(t.channelId), [t.channelId]);
  return (0, n.jsx)(i.default, {
    context: l,
    object: U.AnalyticsObjects.CONTEXT_MENU,
    children: (0, n.jsxs)(u.Menu, {
      navId: "stream-context",
      onClose: o.closeContextMenu,
      "aria-label": b.default.Messages.STREAM_ACTIONS_MENU_LABEL,
      onSelect: L,
      children: [(0, n.jsxs)(u.MenuGroup, {
        children: [O, R, y]
      }), (0, n.jsx)(u.MenuGroup, {
        children: F
      }), (0, n.jsxs)(u.MenuGroup, {
        children: [(null == P ? void 0 : P.isGuildStageVoice()) ? null : N, G, V && k]
      })]
    })
  })
}