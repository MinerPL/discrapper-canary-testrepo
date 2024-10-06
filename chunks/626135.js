n.r(t),
    n.d(t, {
        AnalyticEventConfigs: function () {
            return A;
        },
        AnalyticsContext: function () {
            return I;
        },
        AnalyticsSchema: function () {
            return d;
        },
        addExtraAnalyticsDecorator: function () {
            return g;
        },
        debugLogEvent: function () {
            return L;
        },
        expandEventProperties: function () {
            return C;
        },
        expandLocation: function () {
            return N;
        },
        getNewAnalyticsLoadId: function () {
            return b;
        },
        setUTMContext: function () {
            return v;
        },
        trackNetworkAction: function () {
            return D;
        }
    }),
    n(653041),
    n(47120);
var r = n(470079),
    i = n(772848),
    a = n(990547),
    s = n(570140),
    o = n(565384),
    l = n(569611),
    u = n(97145),
    c = n(857192),
    d = n(747161),
    _ = n(848479),
    E = n(960048),
    f = n(981631),
    h = n(94752),
    p = n(689938);
let I = r.createContext({ location: {} }),
    m = {},
    T = performance.now(),
    S = [];
function g(e) {
    S.push(e);
}
let A = {
    [f.rMx.APP_OPENED]: {
        throttlePeriod: 300000,
        throttleKeys: () => []
    },
    [f.rMx.APP_BACKGROUND]: {
        throttlePeriod: 120000,
        throttleKeys: () => []
    },
    [f.rMx.ACK_MESSAGES]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [f.rMx.GUILD_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [f.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab_opened]
    },
    [f.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab_opened]
    },
    [f.rMx.START_SPEAKING]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.server]
    },
    [f.rMx.START_LISTENING]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.server]
    },
    [f.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [f.rMx.CHANNEL_OPENED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [f.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.channel_id]
    },
    [f.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.notif_type]
    },
    [f.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [f.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [f.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [f.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: 120000,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null !== (t = e.source_class_list) && void 0 !== t ? t : [])];
        }
    },
    [f.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: 10000,
        throttleKeys: () => []
    },
    [f.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.type]
    },
    [f.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: 120000,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [f.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: 300000,
        throttleKeys: () => []
    },
    [f.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [f.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [f.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: 86400000,
        throttleKeys: () => []
    },
    [f.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: 0.001
    },
    [f.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: 0.001
    },
    [f.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id]
    },
    [f.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [f.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.type]
    },
    [f.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [f.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [f.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.user_id]
    },
    [f.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePercent: 0.01 },
    [f.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.channel_id]
    },
    [f.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [f.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id]
    },
    [f.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [f.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab]
    },
    [f.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id]
    },
    [f.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [f.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: 3600000,
        throttleKeys: () => []
    },
    [f.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.message_id]
    },
    [f.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.location_stack]
    },
    [f.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.location_stack]
    }
};
function N(e) {
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
let O = () => h.E.NONE,
    R = (0, a.trackMaker)({
        analyticEventConfigs: A,
        dispatcher: s.Z,
        TRACK_ACTION_NAME: 'TRACK'
    });
function v(e) {
    return (m = e);
}
function C(e) {
    var t, n, r, i, a;
    let s = e;
    if ((!s && (s = {}), null != s.location)) {
        let { location: e, ...t } = s;
        s = {
            ...t,
            ...N(e)
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
    (s.client_performance_cpu = _.Z.getCurrentCPUUsagePercent()), (s.client_performance_memory = _.Z.getCurrentMemoryUsageKB()), (s.cpu_core_count = _.Z.getCPUCoreCount()), (s.accessibility_features = O()), (s.rendered_locale = p.Z.getLocale()), (s.uptime_app = Math.floor((performance.now() - T) / 1000));
    let o = _.Z.getProcessUptime();
    null != o && (s.uptime_process_renderer = Math.floor(o));
    let { utmSource: l, utmMedium: u, utmCampaign: c, utmContent: d } = m;
    return (s.utm_source = null !== (t = s.utm_source) && void 0 !== t ? t : l), (s.utm_medium = null !== (n = s.utm_medium) && void 0 !== n ? n : u), (s.utm_campaign = null !== (r = s.utm_campaign) && void 0 !== r ? r : c), (s.utm_content = null !== (i = s.utm_content) && void 0 !== i ? i : d), S.forEach((e) => e(s)), s;
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? l.Hj('Analytics', e, t) : l.Hj('Analytics', e);
}
let y = (0, a.trackMaker)({
    analyticEventConfigs: A,
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
        L(e, n),
        y(e, n);
}
function b() {
    return (0, i.Z)();
}
t.default = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: function (e) {
        O = e;
    },
    expandEventProperties: C,
    track: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (
            (!u.R.includes(e) &&
                E.Z.addBreadcrumb({
                    category: 'analytics',
                    message: ''.concat(e)
                }),
            null != n.throttlePercent && Math.random() > n.throttlePercent)
        )
            return Promise.resolve();
        let r = C(t);
        return (
            L(e, r, n.logEventProperties),
            R(e, r, {
                flush: n.flush,
                fingerprint: n.fingerprint
            })
        );
    }
};
