n(47120), n(411104);
var r, i = n(442837), a = n(433517), o = n(570140), s = n(284737), l = n(490029), u = n(48481), c = n(131704), d = n(314897), _ = n(592125), E = n(984933), f = n(355863), h = n(914010), p = n(358085), m = n(998502), I = n(145597), T = n(451478), g = n(981631), S = n(987650);
function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let N = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: g.OYC.ALWAYS,
        displayNameMode: g.wC$.ALWAYS,
        avatarSizeMode: g.ipw.LARGE,
        notificationPositionMode: g._vf.TOP_LEFT,
        textChatNotifications: g.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        textWidgetOpacity: S.wF.LOWER
    }), v = null, O = {}, R = null, C = new Set(), y = !1, D = null, L = !1, b = !1, M = new Set(), P = !1;
function U(e) {
    let t = O[e];
    return null == t && (t = O[e] = { ...N }), t;
}
let w = { ...N }, x = new Set([
        'AUDIO_SET_INPUT_DEVICE',
        'AUDIO_SET_INPUT_VOLUME',
        'AUDIO_SET_LOCAL_VIDEO_DISABLED',
        'AUDIO_SET_LOCAL_VOLUME',
        'AUDIO_SET_MODE',
        'AUDIO_SET_NOISE_CANCELLATION',
        'AUDIO_SET_NOISE_SUPPRESSION',
        'AUDIO_SET_OUTPUT_DEVICE',
        'AUDIO_SET_OUTPUT_VOLUME',
        'AUDIO_TOGGLE_LOCAL_MUTE',
        'AUDIO_TOGGLE_SELF_DEAF',
        'AUDIO_TOGGLE_SELF_MUTE',
        'BILLING_SUBSCRIPTION_UPDATE_SUCCESS',
        'CATEGORY_COLLAPSE',
        'CATEGORY_EXPAND',
        'CHANNEL_ACK',
        'CHANNEL_PRELOAD',
        'GIFT_CODE_REDEEM',
        'GIFT_CODE_REDEEM_FAILURE',
        'GIFT_CODE_REDEEM_SUCCESS',
        'HOTSPOT_HIDE',
        'INVITE_MODAL_CLOSE',
        'LAYOUT_CREATE',
        'LAYOUT_CREATE_WIDGETS',
        'LAYOUT_DELETE_ALL_WIDGETS',
        'LAYOUT_DELETE_WIDGET',
        'LAYOUT_SET_PINNED',
        'LAYOUT_SET_TOP_WIDGET',
        'LAYOUT_UPDATE_WIDGET',
        'LOAD_MESSAGES',
        'LOAD_MESSAGES_FAILURE',
        'LOAD_MESSAGES_SUCCESS',
        'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
        'OVERLAY_ACTIVATE_REGION',
        'OVERLAY_DEACTIVATE_ALL_REGIONS',
        'OVERLAY_MESSAGE_EVENT_ACTION',
        'OVERLAY_SET_AVATAR_SIZE_MODE',
        'OVERLAY_SET_CLICK_ZONES',
        'OVERLAY_SET_DISPLAY_NAME_MODE',
        'OVERLAY_SET_DISPLAY_USER_MODE',
        'OVERLAY_SET_INPUT_LOCKED',
        'OVERLAY_SET_NOTIFICATION_POSITION_MODE',
        'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE',
        'OVERLAY_SET_SHOW_KEYBIND_INDICATORS',
        'OVERLAY_SET_TEXT_WIDGET_OPACITY',
        'OVERLAY_SET_UI_LOCKED',
        'OVERLAY_NOTIFY_READY_TO_SHOW',
        'PREMIUM_PAYMENT_ERROR_CLEAR',
        'PREMIUM_PAYMENT_MODAL_CLOSE',
        'PREMIUM_PAYMENT_MODAL_OPEN',
        'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
        'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
        'PREMIUM_PAYMENT_UPDATE_FAIL',
        'PREMIUM_PAYMENT_UPDATE_SUCCESS',
        'PREMIUM_REQUIRED_MODAL_CLOSE',
        'PREMIUM_REQUIRED_MODAL_OPEN',
        'PURCHASE_CONFIRMATION_MODAL_CLOSE',
        'PURCHASE_CONFIRMATION_MODAL_OPEN',
        'SKU_PURCHASE_CLEAR_ERROR',
        'SKU_PURCHASE_FAIL',
        'SKU_PURCHASE_MODAL_CLOSE',
        'SKU_PURCHASE_MODAL_OPEN',
        'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
        'SKU_PURCHASE_SHOW_CONFIRMATION_STEP',
        'SKU_PURCHASE_START',
        'SKU_PURCHASE_SUCCESS',
        'STREAM_CLOSE',
        'STREAM_START',
        'VOICE_CHANNEL_SELECT',
        'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
        'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY'
    ]), G = new Set([
        ...x.values(),
        'ACTIVITY_INVITE_MODAL_CLOSE',
        'CALL_DELETE',
        'CHANNEL_COLLAPSE',
        'CHANNEL_SELECT',
        'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
        'OVERLAY_CALL_PRIVATE_CHANNEL',
        'OVERLAY_JOIN_GAME',
        'OVERLAY_NOTIFICATION_EVENT',
        'OVERLAY_SELECT_CALL',
        'OVERLAY_SET_NOT_IDLE',
        'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST',
        'OVERLAY_WIDGET_CHANGED',
        'SOUNDBOARD_SET_OVERLAY_ENABLED',
        'STREAM_STOP'
    ]);
function k() {
    if (!__OVERLAY__)
        return !1;
    let e = v === (0, I.QF)(), t = C.has((0, I.QF)()) || M.size > 0;
    e && t ? (0, s.T_)(window, !0) : (0, s.T_)(window, !1);
}
function B() {
    if (v !== (0, I.QF)())
        return !1;
    M.clear();
}
function F(e) {
    let t = (0, I.QF)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
        case g.BmY.STORAGE_SYNC:
            i.ZP.PersistedStore.initializeAll(e.states);
            break;
        case g.BmY.DISPATCH:
            null != e.payloads && (L = !0, e.payloads.forEach(e => function (e) {
                var t, n, r, i, a, s;
                if ('OVERLAY_INITIALIZE' === e.type && (null == (t = e).version && 1 === I.Tq || t.version === I.Tq || (o.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, l.zP)(), 0)))
                    b = !0;
                if (b) {
                    ;
                    switch (e.type) {
                    case 'CHANNEL_CREATE':
                    case 'THREAD_CREATE':
                    case 'THREAD_UPDATE':
                    case 'CHANNEL_DELETE':
                    case 'THREAD_DELETE':
                        let t = (0, c.kt)(e.channel);
                        if (!c.AW.has(t.type))
                            break;
                        o.Z.dispatch({
                            type: e.type,
                            channel: t
                        });
                        break;
                    case 'CHANNEL_UPDATES':
                        o.Z.dispatch({
                            type: e.type,
                            channels: e.channels.map(e => (0, c.kt)(e))
                        });
                        break;
                    case 'CONNECTION_OPEN_SUPPLEMENTAL':
                        e.lazyPrivateChannels = (null !== (n = e.lazyPrivateChannels) && void 0 !== n ? n : []).map(e => (0, c.kt)(e)), o.Z.dispatch(e);
                        break;
                    case 'THREAD_LIST_SYNC':
                        o.Z.dispatch({
                            ...e,
                            threads: e.threads.map(e => (0, c.kt)(e))
                        });
                        break;
                    case 'GUILD_CREATE':
                        let l = e => (0, c.kt)(e), d = e.guild;
                        d.channels = null !== (a = null === (r = d.channels) || void 0 === r ? void 0 : r.map(l)) && void 0 !== a ? a : null, d.threads = null === (i = d.threads) || void 0 === i ? void 0 : i.map(l), null != d.channelUpdates && (d.channelUpdates.writes = null === (s = d.channelUpdates.writes) || void 0 === s ? void 0 : s.map(l)), o.Z.dispatch({
                            type: 'GUILD_CREATE',
                            guild: d
                        });
                        break;
                    case 'USER_SETTINGS_PROTO_UPDATE':
                        o.Z.dispatch({
                            ...e,
                            settings: {
                                proto: (0, u.kI)(e.settings.type, e.settings.proto),
                                type: e.settings.type
                            }
                        });
                        break;
                    default:
                        o.Z.dispatch(e);
                    }
                }
            }(e)), L = !1);
        }
}
class V extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (this.waitFor(d.default), this.syncWith([d.default], () => {
                let e = d.default.getId();
                w = null != e ? U(e) : { ...N };
            }), __OVERLAY__ && (p.isPlatformEmbedded && m.ZP.requireModule('discord_overlay2'), C.delete((0, I.QF)())), null != e) {
            O = e;
            let t = d.default.getId();
            null != t && (null == (w = U(t)).textChatNotifications && (w.textChatNotifications = N.textChatNotifications), null == w.textWidgetOpacity && (w.textWidgetOpacity = N.textWidgetOpacity));
        }
    }
    getState() {
        return O;
    }
    isUILocked(e) {
        return !C.has(e);
    }
    isInstanceUILocked() {
        if (!__OVERLAY__)
            throw Error('OverlayStore: App instance should never call .isInstanceUILocked()');
        return !C.has((0, I.QF)());
    }
    isInstanceFocused() {
        if (!__OVERLAY__)
            throw Error('OverlayStore: App instance should never call .isInstanceFocused()');
        return v === (0, I.QF)();
    }
    isFocused(e) {
        return v === e;
    }
    isPinned(e) {
        let t = f.Z.getLayout(I.qU);
        return null != t && null != t.widgets.find(t => {
            let n = f.Z.getWidget(t);
            return null != n && n.type === e && !!n.pinned || !1;
        });
    }
    getSelectedGuildId() {
        return w.selectedGuildId;
    }
    getSelectedChannelId() {
        return w.selectedChannelId;
    }
    getSelectedCallId() {
        return R;
    }
    getDisplayUserMode() {
        return w.displayUserMode;
    }
    getDisplayNameMode() {
        return w.displayNameMode;
    }
    getAvatarSizeMode() {
        return w.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return w.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return w.notificationPositionMode === g._vf.DISABLED ? g.Ypu.DISABLED : w.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == w.showKeybindIndicators || w.showKeybindIndicators;
    }
    getDisableExternalLinkAlert() {
        return w.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return v;
    }
    get initialized() {
        return b;
    }
    get incompatibleApp() {
        return y;
    }
    getActiveRegions() {
        return M;
    }
    getTextWidgetOpacity() {
        return w.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return P;
    }
}
A(V, 'displayName', 'OverlayStore'), A(V, 'persistKey', 'OverlayStoreV2'), A(V, 'migrations', [
    () => {
        let {
            pinnedWidgets: e,
            positions: t,
            sizes: n,
            v: r,
            ...i
        } = { ...a.K.get('OverlayStore') };
        return {
            ...N,
            ...5 === r ? i : null
        };
    },
    e => {
        let t = d.default.getId();
        return null == e || null == t ? {} : { [t]: { ...e } };
    }
]), t.Z = new V(o.Z, {
    LOGOUT: function (e) {
        !e.isSwitchingAccount && (O = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in O && delete O[e.userId];
    },
    CONNECTION_CLOSED: function () {
        C.clear();
    },
    OVERLAY_START_SESSION: function () {
        o.Z.addInterceptor(e => {
            if (L || !G.has(e.type))
                return !1;
            if ('CHANNEL_SELECT' === e.type) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                return null != n && ((0, l.lW)({
                    type: g.BmY.DISPATCH,
                    pid: (0, I.QF)(),
                    token: (0, I.Ht)(),
                    payloads: [
                        {
                            type: 'CHANNEL_PRELOAD',
                            guildId: t === g.ME ? null : t,
                            channelId: n,
                            context: g.e3s
                        },
                        {
                            type: 'OVERLAY_SELECT_CHANNEL',
                            guildId: t,
                            channelId: n
                        }
                    ]
                }), !1);
            }
            return (0, l.lW)({
                type: g.BmY.DISPATCH,
                pid: (0, I.QF)(),
                token: (0, I.Ht)(),
                payloads: [e]
            }), !x.has(e.type);
        }), (0, l.Ty)(F, (0, I.Ht)()), (0, l.$j)(), (0, l.lW)({
            type: g.BmY.CONNECT,
            pid: (0, I.QF)(),
            token: (0, I.Ht)()
        });
    },
    OVERLAY_INITIALIZE: function (e) {
        let {focusedPID: t} = e;
        v = t;
    },
    OVERLAY_READY: function () {
        let e = w.selectedGuildId, t = w.selectedChannelId;
        if (null != e && (!E.ZP.hasChannels(e) || null != t && !E.ZP.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == _.Z.getChannel(t) && (e = null, t = null), null == e && null == t && (e = h.Z.getGuildId()), null != e && null == t) {
            let n = E.ZP.getDefaultChannel(e);
            null != n && (t = n.id);
        }
        w.selectedGuildId = e, w.selectedChannelId = t;
    },
    OVERLAY_FOCUSED: function (e) {
        let {pid: t} = e;
        v = t, k();
    },
    OVERLAY_SELECT_CHANNEL: function (e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        w.selectedGuildId = t, w.selectedChannelId = n;
    },
    OVERLAY_SELECT_CALL: function (e) {
        let {callId: t} = e;
        R = t;
    },
    CALL_DELETE: function () {
        R = null;
    },
    LAYOUT_CREATE: function () {
    },
    OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
        let {mode: t} = e;
        w.displayNameMode = t;
    },
    OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
        let {mode: t} = e;
        w.displayUserMode = t;
    },
    OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
        let {mode: t} = e;
        w.avatarSizeMode = t;
    },
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
        let {mode: t} = e;
        w.notificationPositionMode = t;
    },
    OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function (e) {
        let {mode: t} = e;
        w.textChatNotifications = t;
    },
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function (e) {
        let {shouldShow: t} = e;
        w.showKeybindIndicators = t;
    },
    OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
        let {opacity: t} = e, n = w.textWidgetOpacity !== t;
        return w.textWidgetOpacity = t, n;
    },
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
        w.disableExternalLinkAlert = !0;
    },
    OVERLAY_INCOMPATIBLE_APP: function () {
        y = !0;
    },
    OVERLAY_SET_UI_LOCKED: function (e) {
        let {
            locked: t,
            pid: n
        } = e;
        t ? C.delete(n) : C.add(n), B(), k(), P = !1;
    },
    OVERLAY_ACTIVATE_REGION: function (e) {
        let {region: t} = e;
        if (v !== (0, I.QF)() || M.has(t))
            return !1;
        M.add(t);
    },
    OVERLAY_DEACTIVATE_ALL_REGIONS: B,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
        P = e.isPreviewingInGame;
    },
    WINDOW_RESIZED: function () {
        if (__OVERLAY__) {
            let e = T.Z.windowSize();
            !(0, I.Te)(e) && (P = !1);
        }
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        C.delete(e.previousAssociatedGamePID);
    }
});
