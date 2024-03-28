"use strict";
E.r(t), E.d(t, {
  getLinkCodeForCurrentUser: function() {
    return A
  },
  removeLinkForUserId: function() {
    return i
  },
  updateLinkForUserId: function() {
    return a
  }
});
var _ = E("544891"),
  T = E("570140"),
  n = E("626135"),
  I = E("292352"),
  s = E("981631");
async function a(e, t) {
  await _.HTTP.patch({
    url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e,
      link_status: t
    }
  }).then(e => {
    let {
      body: t
    } = e;
    return T.default.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
      linkedUsers: t
    }), t
  })
}
async function i(e) {
  await _.HTTP.del({
    url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
    body: {
      linked_user_id: e
    }
  }).then(t => {
    let {
      body: E
    } = t;
    return T.default.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
      linkedUsers: E,
      deletedUserId: e
    }), E
  })
}
async function A() {
  await _.HTTP.get({
    url: s.Endpoints.FAMILY_CENTER_LINK_CODE
  }).then(e => {
    let {
      body: t
    } = e, E = t.link_code;
    return T.default.dispatch({
      type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
      linkCode: E
    }), E
  })
}
t.default = {
  async initialPageLoad() {
    var e, t, E, n;
    T.default.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let {
      body: I
    } = await _.HTTP.get({
      url: s.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY_ME
    }), {
      teen_audit_log: a,
      linked_users: i,
      users: A
    } = I, r = {
      teenId: null == a ? void 0 : a.teen_user_id,
      rangeStartId: null == a ? void 0 : a.range_start_id,
      totals: null !== (e = null == a ? void 0 : a.totals) && void 0 !== e ? e : {},
      actions: null !== (t = null == a ? void 0 : a.actions) && void 0 !== t ? t : [],
      users: null !== (E = null == a ? void 0 : a.users) && void 0 !== E ? E : [],
      guilds: null !== (n = null == a ? void 0 : a.guilds) && void 0 !== n ? n : []
    };
    return T.default.dispatch({
      type: "FAMILY_CENTER_INITIAL_LOAD",
      familyCenterTeenActivity: r,
      linkedUsers: i,
      users: A
    }), r
  },
  async fetchLinkedUsers() {
    let {
      body: e
    } = await _.HTTP.get({
      url: s.Endpoints.FAMILY_CENTER_LINKED_USERS
    }), t = {
      linkedUsers: e.linked_users,
      users: e.users
    };
    return T.default.dispatch({
      type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
      ...t
    }), t
  },
  async requestLink(e, t) {
    let {
      body: E
    } = await _.HTTP.post({
      url: s.Endpoints.FAMILY_CENTER_LINKED_USERS,
      body: {
        recipient_id: e,
        code: t
      }
    }), n = {
      linkedUsers: E.linked_users,
      users: E.users
    };
    return T.default.dispatch({
      type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS",
      ...n
    }), n
  },
  async fetchTeenActivity(e) {
    T.default.dispatch({
      type: "FAMILY_CENTER_FETCH_START"
    });
    let t = s.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY(e),
      {
        body: E
      } = await _.HTTP.get({
        url: t
      }),
      n = E.teen_audit_log,
      I = {
        teenId: n.teen_user_id,
        rangeStartId: n.range_start_id,
        totals: n.totals,
        actions: n.actions,
        users: n.users,
        guilds: n.guilds
      };
    return T.default.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
      familyCenterTeenActivity: I
    }), I
  },
  async fetchMoreTeenActivity(e, t, E, a) {
    let {
      body: i
    } = await _.HTTP.get({
      url: s.Endpoints.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, E, a)
    }), {
      teen_audit_log: A
    } = i, r = {
      teenId: A.teen_user_id,
      rangeStartId: A.range_start_id,
      actions: A.actions,
      users: A.users,
      guilds: A.guilds
    };
    return n.default.track(s.AnalyticEvents.FAMILY_CENTER_ACTION, {
      action: I.FamilyCenterAction.LoadMore,
      selected_teen_id: e,
      action_display_type: t
    }), T.default.dispatch({
      type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
      familyCenterTeenActivity: r
    }), A
  },
  selectTab(e) {
    T.default.dispatch({
      type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
      tab: e
    })
  }
}