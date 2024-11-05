n.r(t),
    n.d(t, {
        AnalyticEventConfigs: function () {
            return T;
        },
        AnalyticsContext: function () {
            return g;
        },
        AnalyticsSchema: function () {
            return d;
        },
        addExtraAnalyticsDecorator: function () {
            return S;
        },
        debugLogEvent: function () {
            return R;
        },
        expandEventProperties: function () {
            return C;
        },
        expandLocation: function () {
            return b;
        },
        getNewAnalyticsLoadId: function () {
            return L;
        },
        setUTMContext: function () {
            return N;
        },
        trackNetworkAction: function () {
            return D;
        }
    }),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(772848),
    a = n(990547),
    s = n(570140),
    o = n(565384),
    l = n(569611),
    u = n(97145),
    c = n(857192),
    d = n(747161),
    f = n(848479),
    _ = n(960048),
    h = n(981631),
    p = n(94752),
    m = n(388032);
let g = r.createContext({ location: {} }),
    E = {},
    v = performance.now(),
    I = [];
function S(e) {
    I.push(e);
}
let T = {
    [h.rMx.APP_OPENED]: {
        throttlePeriod: 300000,
        throttleKeys: () => []
    },
    [h.rMx.APP_BACKGROUND]: {
        throttlePeriod: 120000,
        throttleKeys: () => []
    },
    [h.rMx.ACK_MESSAGES]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [h.rMx.GUILD_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [h.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab_opened]
    },
    [h.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab_opened]
    },
    [h.rMx.START_SPEAKING]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.server]
    },
    [h.rMx.START_LISTENING]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.server]
    },
    [h.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [h.rMx.CHANNEL_OPENED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [h.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.channel_id]
    },
    [h.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.notif_type]
    },
    [h.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [h.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [h.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [h.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: 120000,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null !== (t = e.source_class_list) && void 0 !== t ? t : [])];
        }
    },
    [h.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: 10000,
        throttleKeys: () => []
    },
    [h.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.type]
    },
    [h.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: 120000,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [h.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: 300000,
        throttleKeys: () => []
    },
    [h.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [h.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [h.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: 86400000,
        throttleKeys: () => []
    },
    [h.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: 0.001
    },
    [h.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: 0.001
    },
    [h.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id]
    },
    [h.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [h.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.type]
    },
    [h.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [h.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [h.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.user_id]
    },
    [h.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePercent: 0.01 },
    [h.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.channel_id]
    },
    [h.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [h.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id]
    },
    [h.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [h.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab]
    },
    [h.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id]
    },
    [h.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [h.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: 3600000,
        throttleKeys: () => []
    },
    [h.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.message_id]
    },
    [h.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.location_stack]
    },
    [h.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.location_stack]
    },
    [h.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [h.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [h.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    }
};
function b(e) {
    return 'string' == typeof e
        ? { location: e }
        : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType
          };
}
let y = () => p.E.NONE,
    A = (0, a.trackMaker)({
        analyticEventConfigs: T,
        dispatcher: s.Z,
        TRACK_ACTION_NAME: 'TRACK'
    });
function N(e) {
    return (E = e);
}
function C(e) {
    var t, n, r, i, a;
    let s = e;
    if ((!s && (s = {}), null != s.location)) {
        let { location: e, ...t } = s;
        s = {
            ...t,
            ...b(e)
        };
    }
    if (null != s.source) {
        let { source: e, ...t } = s;
        s = {
            ...t,
            ...('string' == typeof (a = e)
                ? { source: a }
                : {
                      source_page: a.page,
                      source_section: a.section,
                      source_object: a.object,
                      source_object_type: a.objectType,
                      source_promotion_id: a.promotionId
                  })
        };
    }
    (s.client_performance_cpu = f.Z.getCurrentCPUUsagePercent()), (s.client_performance_memory = f.Z.getCurrentMemoryUsageKB()), (s.cpu_core_count = f.Z.getCPUCoreCount()), (s.accessibility_features = y()), (s.rendered_locale = m.intl.currentLocale), (s.uptime_app = Math.floor((performance.now() - v) / 1000));
    let o = f.Z.getProcessUptime();
    null != o && (s.uptime_process_renderer = Math.floor(o));
    let { utmSource: l, utmMedium: u, utmCampaign: c, utmContent: d } = E;
    return (s.utm_source = null !== (t = s.utm_source) && void 0 !== t ? t : l), (s.utm_medium = null !== (n = s.utm_medium) && void 0 !== n ? n : u), (s.utm_campaign = null !== (r = s.utm_campaign) && void 0 !== r ? r : c), (s.utm_content = null !== (i = s.utm_content) && void 0 !== i ? i : d), I.forEach((e) => e(s)), s;
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? l.Hj('Analytics', e, t) : l.Hj('Analytics', e);
}
let O = (0, a.trackMaker)({
    analyticEventConfigs: T,
    dispatcher: s.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function D(e, t) {
    let n = C({
        location: (0, o.k$)(),
        ...t
    });
    (0, o.dT)(e, {
        type: 'action',
        ...t
    }),
        R(e, n),
        O(e, n);
}
function L() {
    return (0, i.Z)();
}
t.default = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: function (e) {
        y = e;
    },
    expandEventProperties: C,
    track: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (
            (!u.R.includes(e) &&
                _.Z.addBreadcrumb({
                    category: 'analytics',
                    message: ''.concat(e)
                }),
            null != n.throttlePercent && Math.random() > n.throttlePercent)
        )
            return Promise.resolve();
        let r = C(t);
        return (
            R(e, r, n.logEventProperties),
            A(e, r, {
                flush: n.flush,
                fingerprint: n.fingerprint
            })
        );
    }
};
