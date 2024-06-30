E(653041), E(47120), E(733860);
var s, T, I, n, A = E(392711), t = E.n(A), a = E(149765), r = E(442837), N = E(570140), L = E(387667), S = E(131704), D = E(271383), l = E(430824), U = E(981631);
let G = [
        U.Plq.KICK_MEMBERS,
        U.Plq.BAN_MEMBERS,
        U.Plq.ADMINISTRATOR,
        U.Plq.MANAGE_CHANNELS,
        U.Plq.MANAGE_GUILD,
        U.Plq.MANAGE_MESSAGES,
        U.Plq.MANAGE_NICKNAMES,
        U.Plq.MANAGE_ROLES,
        U.Plq.MANAGE_WEBHOOKS,
        U.Plq.MANAGE_GUILD_EXPRESSIONS,
        U.Plq.MOVE_MEMBERS,
        U.Plq.MUTE_MEMBERS,
        U.Plq.DEAFEN_MEMBERS
    ], O = null, i = [], M = [], R = [], o = [], u = [], c = [], C = [], g = [], d = !0, f = !1, Z = !1, P = !0, p = !1, H = null, h = U.rsA.ALL, m = null, F = {}, v = 0;
function V(e) {
    let _ = [], E = 0;
    return e.reverse().forEach(e => {
        var s, T, I;
        let n = [], A = null, a = null, r = null;
        if (null != e.reason && n.push(new L.ms(U.zUn.REASON, null, e.reason)), null != e.changes)
            for (let _ of e.changes) {
                let e = new L.ms(_.key, _.old_value, _.new_value);
                n.push(e), e.key === U.zUn.NAME ? A = e : e.key === U.zUn.TYPE ? r = e : e.key === U.zUn.TITLE && (a = e);
            }
        if (e.action_type === U.rsA.MEMBER_PRUNE) {
            let _ = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1, E = new L.ms(U.zUn.PRUNE_DELETE_DAYS, null, _);
            n.push(E);
        }
        e.action_type === U.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (T = e.options) || void 0 === T ? void 0 : T.auto_moderation_rule_name) != null && n.push(new L.ms(U.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === U.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (s = e.options) || void 0 === s ? void 0 : s.status) != null && n.push(new L.ms(U.zUn.STATUS, null, e.options.status));
        let N = new L.ZP({
                id: e.id,
                action: e.action_type,
                targetId: e.target_id,
                userId: e.user_id,
                changes: n,
                options: e.options
            }), D = _[0];
        if (function (e, _, E) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30, T = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                return null != e && e.action === _.action && e.targetId === _.targetId && e.userId === _.userId && t().isEqual(e.options, _.options) && _.timestampStart.diff(e.timestampStart, 'minutes') < s && E < T && _.targetType !== U.KFR.INVITE && _.action !== U.rsA.MESSAGE_DELETE && _.action !== U.rsA.MESSAGE_BULK_DELETE && _.action !== U.rsA.MESSAGE_PIN && _.action !== U.rsA.MESSAGE_UNPIN && _.action !== U.rsA.MEMBER_MOVE && _.action !== U.rsA.MEMBER_DISCONNECT && _.action !== U.rsA.BOT_ADD && _.action !== U.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && _.action !== U.rsA.MEMBER_PRUNE;
            }(D, N, E)) {
            _[0] = D.merge({
                changes: [
                    ...D.changes,
                    ...N.changes
                ],
                timestampEnd: N.timestampStart
            }), E++;
            return;
        }
        if (N.actionType === U.vB8.DELETE && (null != A || null != a)) {
            let e = null !== (I = null == A ? void 0 : A.oldValue) && void 0 !== I ? I : null == a ? void 0 : a.oldValue;
            (N.targetType === U.KFR.CHANNEL || N.targetType === U.KFR.CHANNEL_OVERWRITE) && null !== r && (0, S.r8)(r.oldValue) && (e = '#'.concat(e)), null == F[N.targetType] ? F[N.targetType] = { [N.targetId]: e } : F[N.targetType][N.targetId] = e;
        }
        E = 0, _.unshift(N);
    }), _;
}
function B(e) {
    let {section: _} = e;
    if (_ !== U.pNK.AUDIT_LOG)
        return !1;
    let E = D.ZP.getMembers(O), s = l.Z.getGuild(O), T = null != O ? l.Z.getRoles(O) : void 0;
    R = t()(E).filter(e => e.roles.some(_ => {
        if (null != s) {
            if (e.userId === s.ownerId)
                return !0;
            let E = null == T ? void 0 : T[_];
            return null != E && G.some(e => a.e$(E.permissions, e));
        }
    })).map(e => e.userId).value();
}
class b extends (s = r.ZP.Store) {
    get logs() {
        return i;
    }
    get integrations() {
        return M;
    }
    get webhooks() {
        return o;
    }
    get guildScheduledEvents() {
        return u;
    }
    get automodRules() {
        return c;
    }
    get threads() {
        return C;
    }
    get applicationCommands() {
        return g;
    }
    get isInitialLoading() {
        return d;
    }
    get isLoading() {
        return f;
    }
    get isLoadingNextPage() {
        return Z;
    }
    get hasOlderLogs() {
        return P;
    }
    get hasError() {
        return p;
    }
    get userIds() {
        return R;
    }
    get userIdFilter() {
        return H;
    }
    get targetIdFilter() {
        return m;
    }
    get actionFilter() {
        return h;
    }
    get deletedTargets() {
        return F;
    }
    get groupedFetchCount() {
        return v;
    }
}
n = 'GuildSettingsAuditLogStore', (I = 'displayName') in (T = b) ? Object.defineProperty(T, I, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : T[I] = n, _.Z = new b(N.Z, {
    AUDIT_LOG_FETCH_START: function () {
        f = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var _;
        v = 0, d = !1, f = !1, P = !0, p = !1, i = V(e.logs), M = e.integrations, o = e.webhooks, u = e.guildScheduledEvents, c = null !== (_ = e.automodRules) && void 0 !== _ ? _ : [], C = e.threads, g = e.applicationCommands, e.logs.length < U.Rg9 && (P = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        f = !1, p = !0, i = [];
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let {isGroupedFetch: _} = e;
        Z = !0, _ && v++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let {
            logs: _,
            integrations: E,
            webhooks: s,
            guildScheduledEvents: T,
            automodRules: I,
            threads: n,
            applicationCommands: A
        } = e;
        if (Z = !1, M = E, o = s, u = T, c = I, C = n, g = A, (0 === _.length || _.length < U.Rg9) && (P = !1), _.length > 0) {
            let e = V(_);
            i = [
                ...i,
                ...e
            ];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        Z = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let {action: _} = e;
        h = _;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let {userId: _} = e;
        H = _;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let {targetId: _} = e;
        m = _;
    },
    GUILD_SETTINGS_SET_SECTION: B,
    GUILD_SETTINGS_INIT: function (e) {
        let {
            guildId: _,
            section: E
        } = e;
        return O = _, m = null, B({ section: E });
    },
    GUILD_SETTINGS_CLOSE: function () {
        i = [], R = [], h = U.rsA.ALL, H = null, m = null, F = {}, v = 0, d = !0, M = [], o = [], u = [], c = [], C = [];
    }
});
