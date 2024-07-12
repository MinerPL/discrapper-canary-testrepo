n(411104), n(47120);
var r = n(772848),
  i = n(570140),
  a = n(318885),
  o = n(355863),
  s = n(449224),
  l = n(451478),
  u = n(434529),
  c = n(145597),
  d = n(765250),
  _ = n(981631);
let E = {
  track(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
if (!__OVERLAY__)
  throw Error('OverlayActionCreators.track: Must be called within Overlay context');
(0, a.Q)(e, t, n);
  },
  overlayReady(e) {
i.Z.dispatch({
  type: 'OVERLAY_READY',
  pid: e
});
  },
  overlayMounted(e) {
i.Z.dispatch({
  type: 'OVERLAY_MOUNTED',
  nudge: e
});
  },
  setFocusedPID(e) {
i.Z.dispatch({
  type: 'OVERLAY_FOCUSED',
  pid: e
});
  },
  setInputLocked(e, t) {
i.Z.dispatch({
  type: 'OVERLAY_SET_INPUT_LOCKED',
  locked: e,
  pid: t
});
  },
  setUILocked(e, t) {
i.Z.dispatch({
  type: 'OVERLAY_SET_UI_LOCKED',
  locked: e,
  pid: t
});
  },
  setLocked(e, t) {
i.Z.dispatch({
  type: 'OVERLAY_SET_INPUT_LOCKED',
  locked: e,
  pid: t
}), i.Z.dispatch({
  type: 'OVERLAY_SET_UI_LOCKED',
  locked: e,
  pid: t
});
  },
  setInstanceLocked(e) {
if (!__OVERLAY__)
  throw Error('OverlayActionCreators.setInstanceLocked: Must be called within Overlay context');
E.setLocked(e, (0, c.QF)());
  },
  setEnabled(e, t) {
i.Z.dispatch({
  type: 'OVERLAY_SET_ENABLED',
  enabled: e,
  legacyEnabled: t
});
  },
  selectCall(e) {
i.Z.dispatch({
  type: 'OVERLAY_SELECT_CALL',
  callId: e
});
  },
  setDisplayNameMode(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_DISPLAY_NAME_MODE',
  mode: e
});
  },
  setDisplayUserMode(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_DISPLAY_USER_MODE',
  mode: e
});
  },
  setAvatarSizeMode(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_AVATAR_SIZE_MODE',
  mode: e
});
  },
  setNotificationPositionMode(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
  mode: e
});
  },
  setTextChatNotificationMode(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE',
  mode: e
});
  },
  setShowKeybindIndicators(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
  shouldShow: e
});
  },
  callPrivateChannel(e, t) {
i.Z.dispatch({
  type: 'OVERLAY_CALL_PRIVATE_CHANNEL',
  channelId: e,
  ring: t
});
  },
  setTextWidgetOpacity(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_TEXT_WIDGET_OPACITY',
  opacity: e
});
  },
  disableExternalLinkAlert() {
i.Z.dispatch({
  type: 'OVERLAY_DISABLE_EXTERNAL_LINK_ALERT'
});
  },
  startSession() {
if (!__OVERLAY__)
  throw Error('Attempting to start an overlay session outside of the overlay context');
i.Z.dispatch({
  type: 'OVERLAY_START_SESSION'
});
  },
  activateRegion(e) {
i.Z.dispatch({
  type: 'OVERLAY_ACTIVATE_REGION',
  region: e
});
  },
  deactivateAllRegions() {
i.Z.dispatch({
  type: 'OVERLAY_DEACTIVATE_ALL_REGIONS'
});
  },
  setPreviewInGameMode(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_PREVIEW_IN_GAME_MODE',
  isPreviewingInGame: e
});
  },
  updateNotificationStatus(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _._1z.DISMISSED;
i.Z.dispatch({
  type: 'OVERLAY_UPDATE_NOTIFICATION_STATUS',
  notificationId: e,
  status: t
});
  },
  notificationEvent(e, t) {
var n, r;
let a = s.Z.getGame();
i.Z.dispatch({
  type: 'OVERLAY_NOTIFICATION_EVENT',
  notificationType: e,
  action: t,
  gameName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : null,
  gameId: null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : null
});
  },
  setPinChat(e) {
let t = c.qU,
  n = o.Z.getWidgetsForLayout(t),
  i = o.Z.getWidgetConfig(_.Odu.GUILDS),
  a = o.Z.getWidgetConfig(_.Odu.TEXT),
  s = o.Z.getWidgetConfig(_.Odu.GUILDS_TEXT);
if (0 === n.length || null == i || null == a || null == s)
  return;
let E = l.Z.windowSize(),
  f = {
    width: 0,
    height: 0
  },
  h = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  p = {
    width: 312,
    height: 0
  },
  m = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  I = {
    width: 0,
    height: 0
  };
if (n.forEach(e => {
    let {
      type: t,
      id: n,
      anchor: r,
      size: i
    } = e;
    switch (t) {
      case _.Odu.TEXT:
        f = (0, u.w_)(i, E), (0, d.E9)(n);
        break;
      case _.Odu.GUILDS:
        h = (0, u.vS)(r, i, E), p = (0, u.w_)(i, E), (0, d.E9)(n);
        break;
      case _.Odu.GUILDS_TEXT:
        m = (0, u.vS)(r, i, E), I = (0, u.w_)(i, E), (0, d.E9)(n);
    }
  }), e) {
  let e = 'auto' === I.width ? s.minSize.width : I.width;
  e -= i.minSize.width;
  let [n, a] = (0, u.o4)(m, {
    ...I,
    width: i.minSize.width
  }, E), [l, c] = (0, u.uq)(m, {
    ...I,
    width: e
  }, E, {
    x: 10,
    y: 10
  }), f = o.Z.getWidgetDefaultSettings(_.Odu.TEXT);
  if (null == f)
    throw Error('OverlayActionCreators.setPinChat: No config for TEXT exists');
  (0, d.A4)({
    ...f,
    type: _.Odu.TEXT,
    id: (0, r.Z)(),
    size: c,
    anchor: l,
    layoutId: t
  });
  let h = o.Z.getWidgetDefaultSettings(_.Odu.GUILDS);
  if (null == h)
    throw Error('OverlayActionCreators.setPinChat: No config for GUILDS exists');
  (0, d.A4)({
    ...h,
    type: _.Odu.GUILDS,
    id: (0, r.Z)(),
    size: a,
    anchor: n,
    layoutId: t
  });
} else {
  let e = 'auto' === f.width ? a.minSize.width : f.width;
  e += i.minSize.width;
  let [n, s] = (0, u.o4)(h, {
    height: p.height,
    width: e
  }, E), l = o.Z.getWidgetDefaultSettings(_.Odu.GUILDS_TEXT);
  if (null == l)
    throw Error('OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists');
  (0, d.A4)({
    ...l,
    type: _.Odu.GUILDS_TEXT,
    id: (0, r.Z)(),
    layoutId: t,
    anchor: n,
    size: s
  });
}
  },
  resetDefaultLayout(e) {
if (null != o.Z.getLayout(e))
  (0, d.sz)(e), (0, d.jx)(o.Z.getDefaultLayout(e));
  },
  setClickZones(e) {
i.Z.dispatch({
  type: 'OVERLAY_SET_CLICK_ZONES',
  zones: e
});
  },
  relayClickZoneClicked(e, t, n) {
i.Z.dispatch({
  type: 'OVERLAY_RELAY_CLICK_ZONE_CLICKED',
  zoneName: e,
  normalizedMouseX: t,
  normalizedMouseY: n
});
  },
  setAssociatedGame(e, t, n) {
i.Z.dispatch({
  type: 'OVERLAY_SET_ASSOCIATED_GAME',
  previousAssociatedGamePID: e,
  associatedGamePID: t,
  associatedGame: n
});
  },
  notifyReadyToShow(e) {
i.Z.dispatch({
  type: 'OVERLAY_NOTIFY_READY_TO_SHOW',
  pid: e
});
  },
  successfullyShown(e) {
i.Z.dispatch({
  type: 'OVERLAY_SUCCESSFULLY_SHOWN',
  pid: e
});
  }
};
t.Z = E;