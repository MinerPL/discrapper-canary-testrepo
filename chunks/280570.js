_.d(E, {
    Yw: function () {
        return A;
    },
    fc: function () {
        return r;
    },
    qd: function () {
        return a;
    }
});
var t = _(544891), T = _(570140), I = _(626135), n = _(292352), s = _(981631);
async function A(e, E) {
    await t.tn.patch({
        url: s.ANM.FAMILY_CENTER_LINKED_USERS,
        body: {
            linked_user_id: e,
            link_status: E
        }
    }).then(e => {
        let {body: E} = e;
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS',
            linkedUsers: E
        }), E;
    });
}
async function r(e) {
    await t.tn.del({
        url: s.ANM.FAMILY_CENTER_LINKED_USERS,
        body: { linked_user_id: e }
    }).then(E => {
        let {body: _} = E;
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS',
            linkedUsers: _,
            deletedUserId: e
        }), _;
    });
}
async function a() {
    await t.tn.get({ url: s.ANM.FAMILY_CENTER_LINK_CODE }).then(e => {
        let {body: E} = e, _ = E.link_code;
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS',
            linkCode: _
        }), _;
    });
}
E.ZP = {
    async initialPageLoad() {
        var e, E, _, I;
        T.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let {body: n} = await t.tn.get({ url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME }), {
                teen_audit_log: A,
                linked_users: r,
                users: a
            } = n, i = {
                teenId: null == A ? void 0 : A.teen_user_id,
                rangeStartId: null == A ? void 0 : A.range_start_id,
                totals: null !== (e = null == A ? void 0 : A.totals) && void 0 !== e ? e : {},
                actions: null !== (E = null == A ? void 0 : A.actions) && void 0 !== E ? E : [],
                users: null !== (_ = null == A ? void 0 : A.users) && void 0 !== _ ? _ : [],
                guilds: null !== (I = null == A ? void 0 : A.guilds) && void 0 !== I ? I : []
            };
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_INITIAL_LOAD',
            familyCenterTeenActivity: i,
            linkedUsers: r,
            users: a
        }), i;
    },
    async fetchLinkedUsers() {
        let {body: e} = await t.tn.get({ url: s.ANM.FAMILY_CENTER_LINKED_USERS }), E = {
                linkedUsers: e.linked_users,
                users: e.users
            };
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS',
            ...E
        }), E;
    },
    async requestLink(e, E) {
        let {body: _} = await t.tn.post({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: e,
                    code: E
                }
            }), I = {
                linkedUsers: _.linked_users,
                users: _.users
            };
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS',
            ...I
        }), I;
    },
    async fetchTeenActivity(e) {
        T.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let E = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e), {body: _} = await t.tn.get({ url: E }), I = _.teen_audit_log, n = {
                teenId: I.teen_user_id,
                rangeStartId: I.range_start_id,
                totals: I.totals,
                actions: I.actions,
                users: I.users,
                guilds: I.guilds
            };
        return T.Z.dispatch({
            type: 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS',
            familyCenterTeenActivity: n
        }), n;
    },
    async fetchMoreTeenActivity(e, E, _, A) {
        let {body: r} = await t.tn.get({ url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, E, _, A) }), {teen_audit_log: a} = r, i = {
                teenId: a.teen_user_id,
                rangeStartId: a.range_start_id,
                actions: a.actions,
                users: a.users,
                guilds: a.guilds
            };
        return I.default.track(s.rMx.FAMILY_CENTER_ACTION, {
            action: n.YC.LoadMore,
            selected_teen_id: e,
            action_display_type: E
        }), T.Z.dispatch({
            type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
            familyCenterTeenActivity: i
        }), a;
    },
    selectTab(e) {
        T.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: e
        });
    }
};
