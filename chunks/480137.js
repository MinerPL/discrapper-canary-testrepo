E.d(_, {
    OY: function () {
        return r;
    },
    ZX: function () {
        return N;
    },
    bY: function () {
        return a;
    },
    gV: function () {
        return S;
    },
    uo: function () {
        return L;
    }
});
var s = E(544891), T = E(570140), I = E(987707), n = E(981631);
function A() {
    return I.Z.isLoading || I.Z.isLoadingNextPage;
}
function t(e, _) {
    let E = function (e) {
        let {
                before: _,
                userId: E,
                targetId: s,
                action: T
            } = e, A = null == E ? I.Z.userIdFilter : E, t = null == T ? I.Z.actionFilter : T, a = null == s ? I.Z.targetIdFilter : s, r = { limit: n.Rg9 };
        return null != _ && (r.before = _), null != A && (r.user_id = A), null != t && (r.action_type = t), null != a && (r.target_id = a), r;
    }(_);
    return s.tn.get({
        url: n.ANM.GUILD_AUDIT_LOG(e),
        query: E,
        oldFormErrors: !0
    });
}
function a(e, _, E, s) {
    if (!A() && null != e)
        return T.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }), t(e, {
            userId: _,
            action: s,
            targetId: E
        }).then(e => {
            let {
                audit_log_entries: _,
                integrations: E,
                users: s,
                webhooks: I,
                guild_scheduled_events: n,
                auto_moderation_rules: A,
                threads: t,
                application_commands: a
            } = e.body;
            T.Z.dispatch({
                type: 'AUDIT_LOG_FETCH_SUCCESS',
                logs: _,
                integrations: E,
                users: s,
                webhooks: I,
                guildScheduledEvents: n,
                automodRules: A,
                threads: t,
                applicationCommands: a
            });
        }, () => T.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' }));
}
function r(e) {
    let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!I.Z.hasOlderLogs || A() || null == e)
        return;
    let E = I.Z.logs, s = E[E.length - 1], n = null;
    return null != s && (n = s.id), T.Z.dispatch({
        type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
        before: n,
        isGroupedFetch: _
    }), t(e, { before: n }).then(e => {
        let {
            audit_log_entries: _,
            integrations: E,
            users: s,
            webhooks: I,
            guild_scheduled_events: n,
            auto_moderation_rules: A,
            threads: t,
            application_commands: a
        } = e.body;
        T.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
            logs: _,
            integrations: E,
            users: s,
            webhooks: I,
            guildScheduledEvents: n,
            automodRules: A,
            threads: t,
            applicationCommands: a
        });
    }, () => T.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' }));
}
function N(e, _) {
    if (!A() && null != _)
        return T.Z.dispatch({
            type: 'AUDIT_LOG_FILTER_BY_ACTION',
            action: e
        }), a(_, null, null, e);
}
function L(e, _) {
    if (!A() && null != _)
        return T.Z.dispatch({
            type: 'AUDIT_LOG_FILTER_BY_USER',
            userId: e
        }), a(_, e);
}
function S(e, _) {
    if (!A() && null != _)
        return T.Z.dispatch({
            type: 'AUDIT_LOG_FILTER_BY_TARGET',
            targetId: e
        }), a(_, null, e);
}
