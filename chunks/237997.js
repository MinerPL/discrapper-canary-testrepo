"use strict";
n(47120), n(411104);
var i, r = n(442837),
  s = n(433517),
  o = n(570140),
  a = n(284737),
  l = n(490029),
  u = n(48481),
  _ = n(131704),
  d = n(314897),
  c = n(592125),
  E = n(984933),
  I = n(355863),
  T = n(914010),
  h = n(358085),
  S = n(998502),
  f = n(145597),
  N = n(451478),
  A = n(981631),
  m = n(987650);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = Object.freeze({
    selectedGuildId: null,
    selectedChannelId: null,
    displayUserMode: A.OYC.ALWAYS,
    displayNameMode: A.wC$.ALWAYS,
    avatarSizeMode: A.ipw.LARGE,
    notificationPositionMode: A._vf.TOP_LEFT,
    textChatNotifications: A.Ypu.ENABLED,
    disableExternalLinkAlert: !1,
    disablePinTutorial: !1,
    showKeybindIndicators: !0,
    textWidgetOpacity: m.wF.LOWER
  }),
  C = null,
  p = {},
  g = null,
  L = new Set,
  v = !1,
  D = null,
  M = !1,
  P = !1,
  y = new Set,
  U = !1;

function b(e) {
  let t = p[e];
  return null == t && (t = p[e] = {
    ...R
  }), t
}
let G = {
    ...R
  },
  w = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "OVERLAY_NOTIFY_READY_TO_SHOW", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
  k = new Set([...w.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

function B() {
  if (!__OVERLAY__) return !1;
  let e = C === (0, f.QF)(),
    t = L.has((0, f.QF)()) || y.size > 0;
  e && t ? (0, a.T_)(window, !0) : (0, a.T_)(window, !1)
}

function x() {
  if (C !== (0, f.QF)()) return !1;
  y.clear()
}

function V(e) {
  let t = (0, f.QF)();
  if (null == e.pid || e.pid === t) switch (e.type) {
    case A.BmY.STORAGE_SYNC:
      r.ZP.PersistedStore.initializeAll(e.states);
      break;
    case A.BmY.DISPATCH:
      null != e.payloads && (M = !0, e.payloads.forEach(e => (function(e) {
        var t, n, i, r, s, a;
        if ("OVERLAY_INITIALIZE" === e.type && (null == (t = e).version && 1 === f.Tq || t.version === f.Tq || (o.Z.dispatch({
            type: "OVERLAY_INCOMPATIBLE_APP"
          }), (0, l.zP)(), 0))) P = !0;
        if (P) {
          ;
          switch (e.type) {
            case "CHANNEL_CREATE":
            case "THREAD_CREATE":
            case "THREAD_UPDATE":
            case "CHANNEL_DELETE":
            case "THREAD_DELETE":
              let t = (0, _.kt)(e.channel);
              if (!_.AW.has(t.type)) break;
              o.Z.dispatch({
                type: e.type,
                channel: t
              });
              break;
            case "CHANNEL_UPDATES":
              o.Z.dispatch({
                type: e.type,
                channels: e.channels.map(e => (0, _.kt)(e))
              });
              break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
              e.lazyPrivateChannels = (null !== (n = e.lazyPrivateChannels) && void 0 !== n ? n : []).map(e => (0, _.kt)(e)), o.Z.dispatch(e);
              break;
            case "THREAD_LIST_SYNC":
              o.Z.dispatch({
                ...e,
                threads: e.threads.map(e => (0, _.kt)(e))
              });
              break;
            case "GUILD_CREATE":
              let l = e => (0, _.kt)(e),
                d = e.guild;
              d.channels = null !== (s = null === (i = d.channels) || void 0 === i ? void 0 : i.map(l)) && void 0 !== s ? s : null, d.threads = null === (r = d.threads) || void 0 === r ? void 0 : r.map(l), null != d.channelUpdates && (d.channelUpdates.writes = null === (a = d.channelUpdates.writes) || void 0 === a ? void 0 : a.map(l)), o.Z.dispatch({
                type: "GUILD_CREATE",
                guild: d
              });
              break;
            case "USER_SETTINGS_PROTO_UPDATE":
              o.Z.dispatch({
                ...e,
                settings: {
                  proto: (0, u.kI)(e.settings.type, e.settings.proto),
                  type: e.settings.type
                }
              });
              break;
            default:
              o.Z.dispatch(e)
          }
        }
      })(e)), M = !1)
  }
}
class Z extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(d.default), this.syncWith([d.default], () => {
        let e = d.default.getId();
        G = null != e ? b(e) : {
          ...R
        }
      }), __OVERLAY__ && (h.isPlatformEmbedded && S.ZP.requireModule("discord_overlay2"), L.delete((0, f.QF)())), null != e) {
      p = e;
      let t = d.default.getId();
      null != t && (null == (G = b(t)).textChatNotifications && (G.textChatNotifications = R.textChatNotifications), null == G.textWidgetOpacity && (G.textWidgetOpacity = R.textWidgetOpacity))
    }
  }
  getState() {
    return p
  }
  isUILocked(e) {
    return !L.has(e)
  }
  isInstanceUILocked() {
    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
    return !L.has((0, f.QF)())
  }
  isInstanceFocused() {
    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
    return C === (0, f.QF)()
  }
  isFocused(e) {
    return C === e
  }
  isPinned(e) {
    let t = I.Z.getLayout(f.qU);
    return null != t && null != t.widgets.find(t => {
      let n = I.Z.getWidget(t);
      return null != n && n.type === e && !!n.pinned || !1
    })
  }
  getSelectedGuildId() {
    return G.selectedGuildId
  }
  getSelectedChannelId() {
    return G.selectedChannelId
  }
  getSelectedCallId() {
    return g
  }
  getDisplayUserMode() {
    return G.displayUserMode
  }
  getDisplayNameMode() {
    return G.displayNameMode
  }
  getAvatarSizeMode() {
    return G.avatarSizeMode
  }
  getNotificationPositionMode() {
    return G.notificationPositionMode
  }
  getTextChatNotificationMode() {
    return G.notificationPositionMode === A._vf.DISABLED ? A.Ypu.DISABLED : G.textChatNotifications
  }
  get showKeybindIndicators() {
    return null == G.showKeybindIndicators || G.showKeybindIndicators
  }
  getDisableExternalLinkAlert() {
    return G.disableExternalLinkAlert
  }
  getFocusedPID() {
    return C
  }
  get initialized() {
    return P
  }
  get incompatibleApp() {
    return v
  }
  getActiveRegions() {
    return y
  }
  getTextWidgetOpacity() {
    return G.textWidgetOpacity
  }
  isPreviewingInGame() {
    return U
  }
}
O(Z, "displayName", "OverlayStore"), O(Z, "persistKey", "OverlayStoreV2"), O(Z, "migrations", [() => {
  let {
    pinnedWidgets: e,
    positions: t,
    sizes: n,
    v: i,
    ...r
  } = {
    ...s.K.get("OverlayStore")
  };
  return {
    ...R,
    ...5 === i ? r : null
  }
}, e => {
  let t = d.default.getId();
  return null == e || null == t ? {} : {
    [t]: {
      ...e
    }
  }
}]), t.Z = new Z(o.Z, {
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (p = {})
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    e.userId in p && delete p[e.userId]
  },
  CONNECTION_CLOSED: function() {
    L.clear()
  },
  OVERLAY_START_SESSION: function() {
    o.Z.addInterceptor(e => {
      if (M || !k.has(e.type)) return !1;
      if ("CHANNEL_SELECT" === e.type) {
        let {
          guildId: t,
          channelId: n
        } = e;
        return null != n && ((0, l.lW)({
          type: A.BmY.DISPATCH,
          pid: (0, f.QF)(),
          token: (0, f.Ht)(),
          payloads: [{
            type: "CHANNEL_PRELOAD",
            guildId: t === A.ME ? null : t,
            channelId: n,
            context: A.e3s
          }, {
            type: "OVERLAY_SELECT_CHANNEL",
            guildId: t,
            channelId: n
          }]
        }), !1)
      }
      return (0, l.lW)({
        type: A.BmY.DISPATCH,
        pid: (0, f.QF)(),
        token: (0, f.Ht)(),
        payloads: [e]
      }), !w.has(e.type)
    }), (0, l.Ty)(V, (0, f.Ht)()), (0, l.$j)(), (0, l.lW)({
      type: A.BmY.CONNECT,
      pid: (0, f.QF)(),
      token: (0, f.Ht)()
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      focusedPID: t
    } = e;
    C = t
  },
  OVERLAY_READY: function() {
    let e = G.selectedGuildId,
      t = G.selectedChannelId;
    if (null != e && (!E.ZP.hasChannels(e) || null != t && !E.ZP.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == c.Z.getChannel(t) && (e = null, t = null), null == e && null == t && (e = T.Z.getGuildId()), null != e && null == t) {
      let n = E.ZP.getDefaultChannel(e);
      null != n && (t = n.id)
    }
    G.selectedGuildId = e, G.selectedChannelId = t
  },
  OVERLAY_FOCUSED: function(e) {
    let {
      pid: t
    } = e;
    C = t, B()
  },
  OVERLAY_SELECT_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    G.selectedGuildId = t, G.selectedChannelId = n
  },
  OVERLAY_SELECT_CALL: function(e) {
    let {
      callId: t
    } = e;
    g = t
  },
  CALL_DELETE: function() {
    g = null
  },
  LAYOUT_CREATE: function() {},
  OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
    let {
      mode: t
    } = e;
    G.displayNameMode = t
  },
  OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
    let {
      mode: t
    } = e;
    G.displayUserMode = t
  },
  OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
    let {
      mode: t
    } = e;
    G.avatarSizeMode = t
  },
  OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
    let {
      mode: t
    } = e;
    G.notificationPositionMode = t
  },
  OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
    let {
      mode: t
    } = e;
    G.textChatNotifications = t
  },
  OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
    let {
      shouldShow: t
    } = e;
    G.showKeybindIndicators = t
  },
  OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
    let {
      opacity: t
    } = e, n = G.textWidgetOpacity !== t;
    return G.textWidgetOpacity = t, n
  },
  OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
    G.disableExternalLinkAlert = !0
  },
  OVERLAY_INCOMPATIBLE_APP: function() {
    v = !0
  },
  OVERLAY_SET_UI_LOCKED: function(e) {
    let {
      locked: t,
      pid: n
    } = e;
    t ? L.delete(n) : L.add(n), x(), B(), U = !1
  },
  OVERLAY_ACTIVATE_REGION: function(e) {
    let {
      region: t
    } = e;
    if (C !== (0, f.QF)() || y.has(t)) return !1;
    y.add(t)
  },
  OVERLAY_DEACTIVATE_ALL_REGIONS: x,
  OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
    U = e.isPreviewingInGame
  },
  WINDOW_RESIZED: function() {
    if (__OVERLAY__) {
      let e = N.Z.windowSize();
      !(0, f.Te)(e) && (U = !1)
    }
  },
  OVERLAY_SET_ASSOCIATED_GAME: function(e) {
    L.delete(e.previousAssociatedGamePID)
  }
})