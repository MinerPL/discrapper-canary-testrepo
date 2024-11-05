n(47120), n(411104);
var r,
    i = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(284737),
    l = n(490029),
    u = n(48481),
    c = n(131704),
    d = n(314897),
    f = n(592125),
    _ = n(984933),
    h = n(355863),
    p = n(914010),
    m = n(358085),
    g = n(998502),
    E = n(145597),
    v = n(451478),
    I = n(981631),
    S = n(987650);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: I.OYC.ALWAYS,
        displayNameMode: I.wC$.ALWAYS,
        avatarSizeMode: I.ipw.LARGE,
        notificationPositionMode: I._vf.TOP_LEFT,
        textChatNotifications: I.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        textWidgetOpacity: S.wF.LOWER
    }),
    y = null,
    A = {},
    N = null,
    C = new Set(),
    R = !1,
    O = null,
    D = !1,
    L = !1,
    x = new Set(),
    w = !1;
function M(e) {
    let t = A[e];
    return null == t && (t = A[e] = { ...b }), t;
}
let P = { ...b },
    k = new Set(['AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_INPUT_VOLUME', 'AUDIO_SET_LOCAL_VIDEO_DISABLED', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_SET_MODE', 'AUDIO_SET_NOISE_CANCELLATION', 'AUDIO_SET_NOISE_SUPPRESSION', 'AUDIO_SET_OUTPUT_DEVICE', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS', 'CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CHANNEL_ACK', 'CHANNEL_PRELOAD', 'GIFT_CODE_REDEEM', 'GIFT_CODE_REDEEM_FAILURE', 'GIFT_CODE_REDEEM_SUCCESS', 'HOTSPOT_HIDE', 'INVITE_MODAL_CLOSE', 'LAYOUT_CREATE', 'LAYOUT_CREATE_WIDGETS', 'LAYOUT_DELETE_ALL_WIDGETS', 'LAYOUT_DELETE_WIDGET', 'LAYOUT_SET_PINNED', 'LAYOUT_SET_TOP_WIDGET', 'LAYOUT_UPDATE_WIDGET', 'LOAD_MESSAGES', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES_SUCCESS', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'OVERLAY_ACTIVATE_REGION', 'OVERLAY_DEACTIVATE_ALL_REGIONS', 'OVERLAY_MESSAGE_EVENT_ACTION', 'OVERLAY_SET_AVATAR_SIZE_MODE', 'OVERLAY_SET_CLICK_ZONES', 'OVERLAY_SET_DISPLAY_NAME_MODE', 'OVERLAY_SET_DISPLAY_USER_MODE', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_SET_NOTIFICATION_POSITION_MODE', 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE', 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS', 'OVERLAY_SET_TEXT_WIDGET_OPACITY', 'OVERLAY_NOTIFY_READY_TO_SHOW', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', 'PREMIUM_PAYMENT_ERROR_CLEAR', 'PREMIUM_PAYMENT_MODAL_CLOSE', 'PREMIUM_PAYMENT_MODAL_OPEN', 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL', 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS', 'PREMIUM_PAYMENT_UPDATE_FAIL', 'PREMIUM_PAYMENT_UPDATE_SUCCESS', 'PREMIUM_REQUIRED_MODAL_CLOSE', 'PREMIUM_REQUIRED_MODAL_OPEN', 'PURCHASE_CONFIRMATION_MODAL_CLOSE', 'PURCHASE_CONFIRMATION_MODAL_OPEN', 'SKU_PURCHASE_CLEAR_ERROR', 'SKU_PURCHASE_FAIL', 'SKU_PURCHASE_MODAL_CLOSE', 'SKU_PURCHASE_MODAL_OPEN', 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS', 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP', 'SKU_PURCHASE_START', 'SKU_PURCHASE_SUCCESS', 'STREAM_CLOSE', 'STREAM_START', 'VOICE_CHANNEL_SELECT', 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE', 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY']),
    U = new Set([...k.values(), 'ACTIVITY_INVITE_MODAL_CLOSE', 'CALL_DELETE', 'CHANNEL_COLLAPSE', 'CHANNEL_SELECT', 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', 'OVERLAY_CALL_PRIVATE_CHANNEL', 'OVERLAY_JOIN_GAME', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SELECT_CALL', 'OVERLAY_SET_NOT_IDLE', 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', 'OVERLAY_WIDGET_CHANGED', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'STREAM_STOP']);
function G() {
    if (!__OVERLAY__) return !1;
    let e = y === (0, E.QF)(),
        t = C.has((0, E.QF)()) || x.size > 0;
    e && t ? (0, o.T_)(window, !0) : (0, o.T_)(window, !1);
}
function B() {
    if (y !== (0, E.QF)()) return !1;
    x.clear();
}
function Z(e) {
    let t = (0, E.QF)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case I.BmY.STORAGE_SYNC:
                i.ZP.PersistedStore.initializeAll(e.states);
                break;
            case I.BmY.DISPATCH:
                null != e.payloads &&
                    ((D = !0),
                    e.payloads.forEach((e) =>
                        (function (e) {
                            var t, n, r, i, a, o;
                            if ('OVERLAY_INITIALIZE' === e.type && ((null == (t = e).version && 1 === E.Tq) || t.version === E.Tq || (s.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, l.zP)(), 0))) L = !0;
                            if (L) {
                                switch (e.type) {
                                    case 'CHANNEL_CREATE':
                                    case 'THREAD_CREATE':
                                    case 'THREAD_UPDATE':
                                    case 'CHANNEL_DELETE':
                                    case 'THREAD_DELETE':
                                        let t = (0, c.kt)(e.channel);
                                        if (!c.AW.has(t.type)) break;
                                        s.Z.dispatch({
                                            type: e.type,
                                            channel: t
                                        });
                                        break;
                                    case 'CHANNEL_UPDATES':
                                        s.Z.dispatch({
                                            type: e.type,
                                            channels: e.channels.map((e) => (0, c.kt)(e))
                                        });
                                        break;
                                    case 'CONNECTION_OPEN_SUPPLEMENTAL':
                                        (e.lazyPrivateChannels = (null !== (n = e.lazyPrivateChannels) && void 0 !== n ? n : []).map((e) => (0, c.kt)(e))), s.Z.dispatch(e);
                                        break;
                                    case 'THREAD_LIST_SYNC':
                                        s.Z.dispatch({
                                            ...e,
                                            threads: e.threads.map((e) => (0, c.kt)(e))
                                        });
                                        break;
                                    case 'GUILD_CREATE':
                                        let l = (e) => (0, c.kt)(e),
                                            d = e.guild;
                                        (d.channels = null !== (a = null === (r = d.channels) || void 0 === r ? void 0 : r.map(l)) && void 0 !== a ? a : null),
                                            (d.threads = null === (i = d.threads) || void 0 === i ? void 0 : i.map(l)),
                                            null != d.channelUpdates && (d.channelUpdates.writes = null === (o = d.channelUpdates.writes) || void 0 === o ? void 0 : o.map(l)),
                                            s.Z.dispatch({
                                                type: 'GUILD_CREATE',
                                                guild: d
                                            });
                                        break;
                                    case 'USER_SETTINGS_PROTO_UPDATE':
                                        s.Z.dispatch({
                                            ...e,
                                            settings: {
                                                proto: (0, u.kI)(e.settings.type, e.settings.proto),
                                                type: e.settings.type
                                            }
                                        });
                                        break;
                                    default:
                                        s.Z.dispatch(e);
                                }
                            }
                        })(e)
                    ),
                    (D = !1));
        }
}
class F extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(d.default),
            this.syncWith([d.default], () => {
                let e = d.default.getId();
                P = null != e ? M(e) : { ...b };
            }),
            __OVERLAY__ && (m.isPlatformEmbedded && g.ZP.requireModule('discord_overlay2'), C.delete((0, E.QF)())),
            null != e)
        ) {
            A = e;
            let t = d.default.getId();
            null != t && (null == (P = M(t)).textChatNotifications && (P.textChatNotifications = b.textChatNotifications), null == P.textWidgetOpacity && (P.textWidgetOpacity = b.textWidgetOpacity));
        }
    }
    getState() {
        return A;
    }
    isLocked(e) {
        return !C.has(e);
    }
    isInstanceLocked() {
        return !C.has((0, E.QF)());
    }
    isInstanceFocused() {
        return y === (0, E.QF)();
    }
    isFocused(e) {
        return y === e;
    }
    isPinned(e) {
        let t = h.Z.getLayout(E.qU);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = h.Z.getWidget(t);
                    return (null != n && n.type === e && !!n.pinned) || !1;
                })
        );
    }
    getSelectedGuildId() {
        return P.selectedGuildId;
    }
    getSelectedChannelId() {
        return P.selectedChannelId;
    }
    getSelectedCallId() {
        return N;
    }
    getDisplayUserMode() {
        return P.displayUserMode;
    }
    getDisplayNameMode() {
        return P.displayNameMode;
    }
    getAvatarSizeMode() {
        return P.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return P.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return P.notificationPositionMode === I._vf.DISABLED ? I.Ypu.DISABLED : P.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == P.showKeybindIndicators || P.showKeybindIndicators;
    }
    getDisableExternalLinkAlert() {
        return P.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return y;
    }
    get initialized() {
        return L;
    }
    get incompatibleApp() {
        return R;
    }
    getActiveRegions() {
        return x;
    }
    getTextWidgetOpacity() {
        return P.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return w;
    }
}
T(F, 'displayName', 'OverlayStore'),
    T(F, 'persistKey', 'OverlayStoreV2'),
    T(F, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r, ...i } = { ...a.K.get('OverlayStore') };
            return {
                ...b,
                ...(5 === r ? i : null)
            };
        },
        (e) => {
            let t = d.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        }
    ]),
    (t.Z = new F(s.Z, {
        LOGOUT: function (e) {
            !e.isSwitchingAccount && (A = {});
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
            e.userId in A && delete A[e.userId];
        },
        CONNECTION_CLOSED: function () {
            C.clear();
        },
        OVERLAY_START_SESSION: function () {
            s.Z.addInterceptor((e) => {
                if (D || !U.has(e.type)) return !1;
                if ('CHANNEL_SELECT' === e.type) {
                    let { guildId: t, channelId: n } = e;
                    return (
                        null != n &&
                        ((0, l.lW)({
                            type: I.BmY.DISPATCH,
                            pid: (0, E.QF)(),
                            token: (0, E.Ht)(),
                            payloads: [
                                {
                                    type: 'CHANNEL_PRELOAD',
                                    guildId: t === I.ME ? null : t,
                                    channelId: n,
                                    context: I.e3s
                                },
                                {
                                    type: 'OVERLAY_SELECT_CHANNEL',
                                    guildId: t,
                                    channelId: n
                                }
                            ]
                        }),
                        !1)
                    );
                }
                return (
                    (0, l.lW)({
                        type: I.BmY.DISPATCH,
                        pid: (0, E.QF)(),
                        token: (0, E.Ht)(),
                        payloads: [e]
                    }),
                    !k.has(e.type)
                );
            }),
                (0, l.Ty)(Z, (0, E.Ht)()),
                (0, l.$j)(),
                (0, l.lW)({
                    type: I.BmY.CONNECT,
                    pid: (0, E.QF)(),
                    token: (0, E.Ht)()
                });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { focusedPID: t } = e;
            y = t;
        },
        OVERLAY_READY: function () {
            let e = P.selectedGuildId,
                t = P.selectedChannelId;
            if ((null != e && (!_.ZP.hasChannels(e) || (null != t && !_.ZP.hasSelectableChannel(e, t))) && ((e = null), (t = null)), null != t && null == f.Z.getChannel(t) && ((e = null), (t = null)), null == e && null == t && (e = p.Z.getGuildId()), null != e && null == t)) {
                let n = _.ZP.getDefaultChannel(e);
                null != n && (t = n.id);
            }
            (P.selectedGuildId = e), (P.selectedChannelId = t);
        },
        OVERLAY_FOCUSED: function (e) {
            let { pid: t } = e;
            (y = t), G();
        },
        OVERLAY_SELECT_CHANNEL: function (e) {
            let { guildId: t, channelId: n } = e;
            (P.selectedGuildId = t), (P.selectedChannelId = n);
        },
        OVERLAY_SELECT_CALL: function (e) {
            let { callId: t } = e;
            N = t;
        },
        CALL_DELETE: function () {
            N = null;
        },
        LAYOUT_CREATE: function () {},
        OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
            let { mode: t } = e;
            P.displayNameMode = t;
        },
        OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
            let { mode: t } = e;
            P.displayUserMode = t;
        },
        OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
            let { mode: t } = e;
            P.avatarSizeMode = t;
        },
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
            let { mode: t } = e;
            P.notificationPositionMode = t;
        },
        OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function (e) {
            let { mode: t } = e;
            P.textChatNotifications = t;
        },
        OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function (e) {
            let { shouldShow: t } = e;
            P.showKeybindIndicators = t;
        },
        OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
            let { opacity: t } = e,
                n = P.textWidgetOpacity !== t;
            return (P.textWidgetOpacity = t), n;
        },
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
            P.disableExternalLinkAlert = !0;
        },
        OVERLAY_INCOMPATIBLE_APP: function () {
            R = !0;
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t, pid: n } = e;
            t ? C.delete(n) : C.add(n), B(), G(), (w = !1);
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
            let { region: t } = e;
            if (y !== (0, E.QF)() || x.has(t)) return !1;
            x.add(t);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: B,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
            w = e.isPreviewingInGame;
        },
        WINDOW_RESIZED: function () {
            if (__OVERLAY__) {
                let e = v.Z.windowSize();
                !(0, E.Te)(e) && (w = !1);
            }
        },
        OVERLAY_SET_ASSOCIATED_GAME: function (e) {
            C.delete(e.previousAssociatedGamePID);
        }
    }));
