n.d(t, {
    V: function () {
        return b;
    }
}),
    n(411104),
    n(177593);
var r = n(990547),
    i = n(149765),
    a = n(544891),
    s = n(570140),
    o = n(34756),
    l = n(408987),
    u = n(280837),
    c = n(895886),
    d = n(35225),
    _ = n(703656),
    E = n(314897),
    f = n(664915),
    h = n(984933),
    p = n(430824),
    I = n(944486),
    m = n(914010),
    T = n(594174),
    S = n(626135),
    g = n(700785),
    A = n(74538),
    N = n(573261),
    O = n(668781),
    R = n(981631),
    v = n(689938);
let C = (e) => {
        O.Z.show({
            title: v.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
            body: v.Z.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({ quantity: e })
        });
    },
    L = (e) => {
        s.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    y = () => {
        O.Z.show({
            title: v.Z.Messages.SERVER_IS_CURRENTLY_FULL,
            body: v.Z.Messages.PLEASE_TRY_AGAIN_LATER
        });
    };
async function D(e) {
    var t, r, i, o, l;
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { source: d, loadId: f, lurkLocation: h } = u,
        S = null !== (t = u.lurker) && void 0 !== t && t,
        g = T.default.getCurrentUser();
    if (null !== (r = null == g ? void 0 : g.hasFlag(R.xW$.QUARANTINED)) && void 0 !== r && r) return (0, c.default)(), new Promise((e, t) => t(Error()));
    s.Z.wait(() =>
        s.Z.dispatch({
            type: 'GUILD_JOIN',
            guildId: e,
            lurker: S,
            source: d,
            loadId: f
        })
    );
    try {
        let t = m.Z.getGuildId(),
            r = e === t && null != p.Z.getGuild(e) ? I.Z.getChannelId(e) : null,
            i = await a.tn.put({
                url: R.ANM.GUILD_JOIN(e),
                query: {
                    lurker: S,
                    session_id: S ? E.default.getSessionId() : null,
                    recommendation_load_id: f,
                    location: S && null != h ? h : null
                },
                context: { source: d },
                oldFormErrors: !0,
                body: {}
            });
        if (
            (null != i.body.join_request &&
                s.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: i.body.join_request
                }),
            null == p.Z.getGuild(e) && i.body.show_verification_form)
        )
            return (0, _.uL)(R.Z5c.GUILD_MEMBER_VERIFICATION(e)), i;
        if (
            (null != i.body.welcome_screen &&
                s.Z.dispatch({
                    type: 'WELCOME_SCREEN_UPDATE',
                    guildId: i.body.id,
                    welcomeScreen: i.body.welcome_screen
                }),
            null != i.body.approximate_presence_count &&
                s.Z.dispatch({
                    type: 'ONLINE_GUILD_MEMBER_COUNT_UPDATE',
                    guildId: i.body.id,
                    count: i.body.approximate_presence_count
                }),
            !S)
        ) {
            let { default: t } = await Promise.resolve().then(n.bind(n, 17181));
            await t({
                guildId: e,
                returnChannelId: r
            });
        }
        return i;
    } catch (t) {
        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === R.evJ.TOO_MANY_USER_GUILDS) {
            let e = T.default.getCurrentUser();
            A.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? C(R.tHP) : C(R.DZw);
        }
        throw ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === R.evJ.GUILD_AT_CAPACITY && y(), S && (null === (l = t.body) || void 0 === l ? void 0 : l.code) === R.evJ.UNKNOWN_GUILD && L(e), t);
    }
}
function b(e) {
    return new Promise((t) =>
        p.Z.addConditionalChangeListener(() => {
            let n = p.Z.getGuild(e);
            return null == n || (t(n), !1);
        })
    );
}
t.Z = {
    joinGuild: D,
    waitForGuild: b,
    async transitionToGuildSync(e, t, n) {
        var r, i;
        let a = ((r = (await b(e)).id), null != (i = n) ? i : (0, d.V)(r)),
            s = t;
        (null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) &&
            null == t.welcomeModalChannelId &&
            (s = {
                ...t,
                welcomeModalChannelId: null != a ? a : void 0
            }),
            (0, _.uL)(R.Z5c.CHANNEL(e, a), s),
            await new Promise(setImmediate);
    },
    deleteGuild: L,
    selectGuild(e) {
        (0, u.a)(e);
    },
    createGuild(e) {
        s.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, t, n) =>
        a.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, t),
            body: { mute: n },
            oldFormErrors: !0
        }),
    setServerDeaf: (e, t, n) =>
        a.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, t),
            body: { deaf: n },
            oldFormErrors: !0
        }),
    setChannel(e, t, n) {
        a.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, t),
            body: { channel_id: n },
            oldFormErrors: !0
        });
    },
    setMemberFlags(e, t, n) {
        a.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, t),
            body: { flags: n },
            oldFormErrors: !0
        });
    },
    kickUser: (e, t, n) =>
        a.tn.del({
            url: R.ANM.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: i, duration: a, reason: s, location: o } = e;
        return N.Z.patch({
            url: R.ANM.GUILD_MEMBER(t, n),
            reason: s,
            body: { communication_disabled_until: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != a ? a : null,
                    reason: null != s ? s : null,
                    communication_disabled_until: i,
                    location: null != o ? o : null
                }
            }
        });
    },
    banUser: (e, t, n, r) =>
        a.tn.put({
            url: R.ANM.GUILD_BAN(e, t),
            reason: r,
            body: { delete_message_seconds: n },
            oldFormErrors: !0
        }),
    unbanUser: (e, t) =>
        a.tn.del({
            url: R.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0
        }),
    banMultipleUsers: (e, t, n, r) =>
        a.tn.post({
            url: R.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: r,
            oldFormErrors: !0
        }),
    async createRole(e, t, n) {
        let r = {
            name: null != t && '' !== t ? t : v.Z.Messages.NEW_ROLE,
            color: null != n ? n : 0,
            permissions: g.Hn
        };
        try {
            let t = await a.tn.post({
                    url: R.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: r
                }),
                n = t.body;
            return (
                (n.permissions = i.vB(n.permissions)),
                s.Z.dispatch({
                    type: 'GUILD_SETTINGS_ROLE_SELECT',
                    roleId: t.body.id,
                    role: n
                }),
                l.Z.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new o.Z(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: r, unicodeEmoji: i, ...s } = n,
            o = null === r || (null == r ? void 0 : r.startsWith('data:')) ? r : void 0,
            u = await a.tn.patch({
                url: R.ANM.GUILD_ROLE(e, t),
                body: {
                    ...s,
                    icon: o,
                    unicode_emoji: i
                },
                oldFormErrors: !0
            });
        return l.Z.checkGuildTemplateDirty(e), u;
    },
    updateRolePermissions: (e, t, n) =>
        a.tn.patch({
            url: R.ANM.GUILD_ROLE(e, t),
            body: { permissions: n },
            oldFormErrors: !0
        }),
    deleteRole(e, t) {
        a.tn
            .del({
                url: R.ANM.GUILD_ROLE(e, t),
                oldFormErrors: !0
            })
            .then(() => {
                l.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, t) {
        let n = await a.tn.patch({
            url: R.ANM.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0
        });
        return l.Z.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await a.tn.patch({
            url: R.ANM.GUILD_ROLES(e),
            body: t,
            oldFormErrors: !0
        });
        return l.Z.checkGuildTemplateDirty(e), n;
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return s.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = null != t ? t : {};
        return s.Z.dispatch({
            type: 'GUILD_SEARCH_RECENT_MEMBERS',
            guildId: e,
            query: n,
            continuationToken: r
        });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return s.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n
        });
    },
    move(e, t, n, r) {
        s.Z.dispatch({
            type: 'GUILD_MOVE',
            fromIndex: e,
            toIndex: t,
            fromFolderIndex: n,
            toFolderIndex: r
        });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t) throw Error('GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: '.concat(e));
        s.Z.dispatch({
            type: 'GUILD_MOVE_BY_ID',
            sourceId: e,
            targetId: t,
            moveToBelow: n,
            combine: r
        });
    },
    createGuildFolderLocal(e, t) {
        S.default.track(R.rMx.GUILD_FOLDER_CREATED),
            s.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: t
            });
    },
    editGuildFolderLocal(e, t, n) {
        s.Z.dispatch({
            type: 'GUILD_FOLDER_EDIT_LOCAL',
            targetId: e,
            sourceIds: t,
            name: n
        });
    },
    deleteGuildFolderLocal(e) {
        s.Z.dispatch({
            type: 'GUILD_FOLDER_DELETE_LOCAL',
            targetId: e
        });
    },
    toggleGuildFolderExpand(e) {
        let t = f.Z.isFolderExpanded(e);
        S.default.track(R.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: t ? 'collapsed' : 'expanded'
        }),
            s.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            });
    },
    setGuildFolderExpanded(e, t) {
        s.Z.dispatch({
            type: 'SET_GUILD_FOLDER_EXPANDED',
            folderId: e,
            expanded: t
        });
    },
    collapseAllFolders() {
        s.Z.dispatch({ type: 'GUILD_FOLDER_COLLAPSE' });
    },
    nsfwAgree(e) {
        s.Z.dispatch({
            type: 'GUILD_NSFW_AGREE',
            guildId: e
        });
    },
    nsfwReturnToSafety(e) {
        if (null == e) {
            (0, _.uL)(R.Z5c.FRIENDS);
            return;
        }
        let t = h.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() ? (0, _.uL)(R.Z5c.FRIENDS) : (0, _.uL)(R.Z5c.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = h.ZP.getDefaultChannel(e);
        null != t ? (0, _.uL)(R.Z5c.CHANNEL(e, t.id)) : (0, _.uL)(R.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: R.ANM.GUILD_APPLICATIONS(e),
            oldFormErrors: !0
        };
        null != t && (n.query = { channel_id: t });
        let r = (await a.tn.get(n)).body;
        s.Z.dispatch({
            type: 'GUILD_APPLICATIONS_FETCH_SUCCESS',
            guildId: e,
            applications: r
        });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = { limit: t };
        null != n && (r.after = n),
            await a.tn
                .get({
                    url: R.ANM.GUILD_BANS(e),
                    oldFormErrors: !0,
                    query: r
                })
                .then((t) => {
                    s.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = { limit: r };
        null != n && n.length > 0 && (i.user_ids = n),
            null != t && t.trim().length > 0 && (i.query = t),
            await a.tn
                .get({
                    url: R.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: i
                })
                .then((t) => {
                    s.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async fetchGuildBans(e) {
        await a.tn
            .get({
                url: R.ANM.GUILD_BANS(e),
                oldFormErrors: !0
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_BANS',
                    bans: e.body
                });
            });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        a.tn
            .get({
                url: R.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                oldFormErrors: !0
            })
            .then((e) => {
                let { body: n } = e;
                return (
                    s.Z.dispatch({
                        type: 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS',
                        roleId: t,
                        roleConnectionEligibility: n
                    }),
                    n
                );
            }),
    async assignGuildRoleConnection(e, t) {
        await a.tn.post({
            url: R.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0
        });
    },
    async unassignGuildRoleConnection(e, t) {
        await a.tn.post({
            url: R.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await a.tn.get({
                url: R.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0
            })
        ).body
};
