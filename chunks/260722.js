e.d(n, {
    Yw: function () {
        return a;
    },
    fc: function () {
        return u;
    },
    qd: function () {
        return s;
    }
});
var i = e(544891),
    r = e(570140),
    l = e(626135),
    o = e(292352),
    E = e(981631);
async function a(t, n) {
    await i.tn
        .patch({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: t,
                link_status: n
            }
        })
        .then((t) => {
            let { body: n } = t;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS',
                    linkedUsers: n
                }),
                n
            );
        });
}
async function u(t) {
    await i.tn
        .del({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t }
        })
        .then((n) => {
            let { body: e } = n;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS',
                    linkedUsers: e,
                    deletedUserId: t
                }),
                e
            );
        });
}
async function s() {
    await i.tn.get({ url: E.ANM.FAMILY_CENTER_LINK_CODE }).then((t) => {
        let { body: n } = t,
            e = n.link_code;
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS',
                linkCode: e
            }),
            e
        );
    });
}
n.ZP = {
    async initialPageLoad() {
        var t, n, e, l;
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let { body: o } = await i.tn.get({ url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME }),
            { teen_audit_log: a, linked_users: u, users: s } = o,
            _ = {
                teenId: null == a ? void 0 : a.teen_user_id,
                rangeStartId: null == a ? void 0 : a.range_start_id,
                totals: null !== (t = null == a ? void 0 : a.totals) && void 0 !== t ? t : {},
                actions: null !== (n = null == a ? void 0 : a.actions) && void 0 !== n ? n : [],
                users: null !== (e = null == a ? void 0 : a.users) && void 0 !== e ? e : [],
                guilds: null !== (l = null == a ? void 0 : a.guilds) && void 0 !== l ? l : []
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_INITIAL_LOAD',
                familyCenterTeenActivity: _,
                linkedUsers: u,
                users: s
            }),
            _
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await i.tn.get({ url: E.ANM.FAMILY_CENTER_LINKED_USERS }),
            n = {
                linkedUsers: t.linked_users,
                users: t.users
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS',
                ...n
            }),
            n
        );
    },
    async requestLink(t, n) {
        let { body: e } = await i.tn.post({
                url: E.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: t,
                    code: n
                }
            }),
            l = {
                linkedUsers: e.linked_users,
                users: e.users
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS',
                ...l
            }),
            l
        );
    },
    async fetchTeenActivity(t) {
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let n = E.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: e } = await i.tn.get({ url: n }),
            l = e.teen_audit_log,
            o = {
                teenId: l.teen_user_id,
                rangeStartId: l.range_start_id,
                totals: l.totals,
                actions: l.actions,
                users: l.users,
                guilds: l.guilds
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS',
                familyCenterTeenActivity: o
            }),
            o
        );
    },
    async fetchMoreTeenActivity(t, n, e, a) {
        let { body: u } = await i.tn.get({ url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, n, e, a) }),
            { teen_audit_log: s } = u,
            _ = {
                teenId: s.teen_user_id,
                rangeStartId: s.range_start_id,
                actions: s.actions,
                users: s.users,
                guilds: s.guilds
            };
        return (
            l.default.track(E.rMx.FAMILY_CENTER_ACTION, {
                action: o.YC.LoadMore,
                selected_teen_id: t,
                action_display_type: n
            }),
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
                familyCenterTeenActivity: _
            }),
            s
        );
    },
    selectTab(t) {
        r.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: t
        });
    }
};
