"use strict";
n(411104), n(47120);
var i = n(772848),
  r = n(570140),
  s = n(318885),
  o = n(355863),
  a = n(449224),
  l = n(451478),
  u = n(434529),
  _ = n(145597),
  d = n(765250),
  c = n(981631);
let E = {
  track(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!__OVERLAY__) throw Error("OverlayActionCreators.track: Must be called within Overlay context");
    (0, s.Q)(e, t, n)
  },
  overlayReady(e) {
    r.Z.dispatch({
      type: "OVERLAY_READY",
      pid: e
    })
  },
  overlayMounted(e) {
    r.Z.dispatch({
      type: "OVERLAY_MOUNTED",
      nudge: e
    })
  },
  setFocusedPID(e) {
    r.Z.dispatch({
      type: "OVERLAY_FOCUSED",
      pid: e
    })
  },
  setInputLocked(e, t) {
    r.Z.dispatch({
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: e,
      pid: t
    })
  },
  setUILocked(e, t) {
    r.Z.dispatch({
      type: "OVERLAY_SET_UI_LOCKED",
      locked: e,
      pid: t
    })
  },
  setLocked(e, t) {
    r.Z.dispatch({
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: e,
      pid: t
    }), r.Z.dispatch({
      type: "OVERLAY_SET_UI_LOCKED",
      locked: e,
      pid: t
    })
  },
  setInstanceLocked(e) {
    if (!__OVERLAY__) throw Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
    E.setLocked(e, (0, _.QF)())
  },
  setEnabled(e, t) {
    r.Z.dispatch({
      type: "OVERLAY_SET_ENABLED",
      enabled: e,
      legacyEnabled: t
    })
  },
  selectCall(e) {
    r.Z.dispatch({
      type: "OVERLAY_SELECT_CALL",
      callId: e
    })
  },
  setDisplayNameMode(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_DISPLAY_NAME_MODE",
      mode: e
    })
  },
  setDisplayUserMode(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_DISPLAY_USER_MODE",
      mode: e
    })
  },
  setAvatarSizeMode(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_AVATAR_SIZE_MODE",
      mode: e
    })
  },
  setNotificationPositionMode(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
      mode: e
    })
  },
  setTextChatNotificationMode(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
      mode: e
    })
  },
  setShowKeybindIndicators(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
      shouldShow: e
    })
  },
  callPrivateChannel(e, t) {
    r.Z.dispatch({
      type: "OVERLAY_CALL_PRIVATE_CHANNEL",
      channelId: e,
      ring: t
    })
  },
  setTextWidgetOpacity(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
      opacity: e
    })
  },
  disableExternalLinkAlert() {
    r.Z.dispatch({
      type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
    })
  },
  startSession() {
    if (!__OVERLAY__) throw Error("Attempting to start an overlay session outside of the overlay context");
    r.Z.dispatch({
      type: "OVERLAY_START_SESSION"
    })
  },
  activateRegion(e) {
    r.Z.dispatch({
      type: "OVERLAY_ACTIVATE_REGION",
      region: e
    })
  },
  deactivateAllRegions() {
    r.Z.dispatch({
      type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
    })
  },
  setPreviewInGameMode(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
      isPreviewingInGame: e
    })
  },
  updateNotificationStatus(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c._1z.DISMISSED;
    r.Z.dispatch({
      type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
      notificationId: e,
      status: t
    })
  },
  notificationEvent(e, t) {
    var n, i;
    let s = a.Z.getGame();
    r.Z.dispatch({
      type: "OVERLAY_NOTIFICATION_EVENT",
      notificationType: e,
      action: t,
      gameName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : null,
      gameId: null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : null
    })
  },
  setPinChat(e) {
    let t = _.qU,
      n = o.Z.getWidgetsForLayout(t),
      r = o.Z.getWidgetConfig(c.Odu.GUILDS),
      s = o.Z.getWidgetConfig(c.Odu.TEXT),
      a = o.Z.getWidgetConfig(c.Odu.GUILDS_TEXT);
    if (0 === n.length || null == r || null == s || null == a) return;
    let E = l.Z.windowSize(),
      I = {
        width: 0,
        height: 0
      },
      T = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      h = {
        width: 312,
        height: 0
      },
      S = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      f = {
        width: 0,
        height: 0
      };
    if (n.forEach(e => {
        let {
          type: t,
          id: n,
          anchor: i,
          size: r
        } = e;
        switch (t) {
          case c.Odu.TEXT:
            I = (0, u.w_)(r, E), (0, d.E9)(n);
            break;
          case c.Odu.GUILDS:
            T = (0, u.vS)(i, r, E), h = (0, u.w_)(r, E), (0, d.E9)(n);
            break;
          case c.Odu.GUILDS_TEXT:
            S = (0, u.vS)(i, r, E), f = (0, u.w_)(r, E), (0, d.E9)(n)
        }
      }), e) {
      let e = "auto" === f.width ? a.minSize.width : f.width;
      e -= r.minSize.width;
      let [n, s] = (0, u.o4)(S, {
        ...f,
        width: r.minSize.width
      }, E), [l, _] = (0, u.uq)(S, {
        ...f,
        width: e
      }, E, {
        x: 10,
        y: 10
      }), I = o.Z.getWidgetDefaultSettings(c.Odu.TEXT);
      if (null == I) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
      (0, d.A4)({
        ...I,
        type: c.Odu.TEXT,
        id: (0, i.Z)(),
        size: _,
        anchor: l,
        layoutId: t
      });
      let T = o.Z.getWidgetDefaultSettings(c.Odu.GUILDS);
      if (null == T) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
      (0, d.A4)({
        ...T,
        type: c.Odu.GUILDS,
        id: (0, i.Z)(),
        size: s,
        anchor: n,
        layoutId: t
      })
    } else {
      let e = "auto" === I.width ? s.minSize.width : I.width;
      e += r.minSize.width;
      let [n, a] = (0, u.o4)(T, {
        height: h.height,
        width: e
      }, E), l = o.Z.getWidgetDefaultSettings(c.Odu.GUILDS_TEXT);
      if (null == l) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
      (0, d.A4)({
        ...l,
        type: c.Odu.GUILDS_TEXT,
        id: (0, i.Z)(),
        layoutId: t,
        anchor: n,
        size: a
      })
    }
  },
  resetDefaultLayout(e) {
    if (null != o.Z.getLayout(e))(0, d.sz)(e), (0, d.jx)(o.Z.getDefaultLayout(e))
  },
  setClickZones(e) {
    r.Z.dispatch({
      type: "OVERLAY_SET_CLICK_ZONES",
      zones: e
    })
  },
  relayClickZoneClicked(e, t, n) {
    r.Z.dispatch({
      type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
      zoneName: e,
      normalizedMouseX: t,
      normalizedMouseY: n
    })
  },
  setAssociatedGame(e, t, n) {
    r.Z.dispatch({
      type: "OVERLAY_SET_ASSOCIATED_GAME",
      previousAssociatedGamePID: e,
      associatedGamePID: t,
      associatedGame: n
    })
  },
  notifyReadyToShow(e) {
    r.Z.dispatch({
      type: "OVERLAY_NOTIFY_READY_TO_SHOW",
      pid: e
    })
  },
  successfullyShown(e) {
    r.Z.dispatch({
      type: "OVERLAY_SUCCESSFULLY_SHOWN",
      pid: e
    })
  }
};
t.Z = E