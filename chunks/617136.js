n.d(t, {
    Ic: function () {
        return v;
    },
    _3: function () {
        return E;
    },
    _b: function () {
        return _;
    },
    dA: function () {
        return g;
    },
    jZ: function () {
        return i;
    },
    mH: function () {
        return m;
    },
    uk: function () {
        return h;
    }
});
var r,
    i,
    a = n(367907),
    s = n(857192),
    o = n(626135),
    l = n(569984),
    u = n(497505),
    c = n(566078),
    d = n(981631);
let f = Object.keys(u.jn);
function _(e) {
    var t;
    return null !== (t = f.find((t) => u.jn[t] === e)) && void 0 !== t ? t : '';
}
function h(e) {
    var t, n, r;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function p(e) {
    let t = c.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: t.questType,
        game_id: t.application.id,
        game_name: t.application.name
    };
}
function m(e, t, n) {
    return {
        content_id: e,
        content_name: _(e),
        content_position: t,
        row_index: n
    };
}
function g(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1 } = e,
        u = l.Z.quests.get(t);
    if (null != u) {
        if (
            (s.default.isLoggingAnalyticsEvents &&
                console.info('[Quest] AnalyticsUtils.track', n, {
                    ...p(u),
                    ...r
                }),
            u.preview)
        )
            return;
        if (i)
            return a.ZP.trackWithMetadata(n, {
                ...p(u),
                ...r
            });
        o.default.track(n, {
            ...p(u),
            ...r
        });
    }
}
function E(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: i, questContentRowIndex: a, trackGuildAndChannelMetadata: s = !1 } = e;
    g({
        questId: t,
        event: d.rMx.QUEST_CONTENT_CLICKED,
        properties: {
            ...m(n, i, a),
            cta_name: r
        },
        trackGuildAndChannelMetadata: s
    });
}
function v(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    g({
        questId: n,
        event: d.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            ...m(t),
            mode: r,
            previous_mode: i
        }
    });
}
((r = i || (i = {})).LEARN_MORE = 'LEARN_MORE'), (r.SHOW_REWARD = 'SHOW_REWARD'), (r.CLAIM_REWARD = 'CLAIM_REWARD'), (r.GET_REWARD_CODE = 'GET_REWARD_CODE'), (r.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (r.ACCEPT_QUEST = 'ACCEPT_QUEST'), (r.COPY_QUEST_URL = 'COPY_QUEST_URL'), (r.TRACK_PROGRESS = 'TRACK_PROGRESS'), (r.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (r.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (r.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (r.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (r.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (r.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (r.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (r.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (r.DEFIBRILLATOR = 'DEFIBRILLATOR'), (r.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (r.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (r.WATCH_STREAM = 'WATCH_STREAM'), (r.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (r.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (r.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (r.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (r.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (r.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (r.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (r.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (r.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (r.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (r.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (r.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (r.VIEW_QUESTS = 'VIEW_QUESTS'), (r.EXPAND = 'EXPAND'), (r.COLLAPSE = 'COLLAPSE'), (r.START_QUEST = 'START_QUEST'), (r.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK = 'VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK');
