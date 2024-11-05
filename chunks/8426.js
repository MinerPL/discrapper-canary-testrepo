n.d(t, {
    Hr: function () {
        return I;
    },
    Hz: function () {
        return j;
    },
    To: function () {
        return R;
    },
    XG: function () {
        return T;
    },
    _N: function () {
        return p;
    },
    ad: function () {
        return N;
    },
    bj: function () {
        return L;
    },
    el: function () {
        return C;
    },
    hS: function () {
        return _;
    },
    lq: function () {
        return E;
    },
    mM: function () {
        return S;
    },
    oo: function () {
        return b;
    },
    q6: function () {
        return A;
    },
    r2: function () {
        return v;
    },
    vR: function () {
        return f;
    }
}),
    n(390547);
var i = n(392711),
    r = n.n(i),
    l = n(544891),
    s = n(570140),
    a = n(668781),
    o = n(563534),
    c = n(734893),
    d = n(621923),
    u = n(626135),
    m = n(960048),
    h = n(969632),
    g = n(981631),
    x = n(388032);
function p(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE',
        welcomeMessage: e
    });
}
function f(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION',
        action: e
    });
}
function C(e, t) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION',
        channelId: e,
        action: t
    });
}
function I(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION',
        channelId: e
    });
}
function _(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION',
        actions: e
    });
}
async function N(e, t, n, i) {
    if (!i) return Promise.resolve();
    try {
        let i = await l.tn.patch({
                url: g.ANM.NEW_MEMBER_ACTION(e, t),
                body: { icon: n },
                oldFormErrors: !0
            }),
            r = (0, c.cq)(i.body);
        return (
            s.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS',
                guildId: e,
                action: r
            }),
            Promise.resolve(i.body)
        );
    } catch (t) {
        var o;
        let e = r().flatMap(null !== (o = t.body) && void 0 !== o ? o : {}, (e) => e);
        return (
            a.Z.show({
                title: x.intl.string(x.t['6nCZyM']),
                body: x.intl.format(x.t.dYCPDw, { errorMessage: e.join(', ') })
            }),
            m.Z.addBreadcrumb({ message: 'Error updating new member action icon' }),
            Promise.reject()
        );
    }
}
function v(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL',
        resourceChannel: e
    });
}
function T(e, t) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL',
        channelId: e,
        resourceChannel: t
    });
}
function j(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL',
        resourceChannelId: e
    });
}
function E(e) {
    s.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL',
        resourceChannels: e
    });
}
async function S(e, t, n) {
    try {
        let i = await l.tn.put({
                url: g.ANM.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0
            }),
            r = (0, c.vD)(i.body);
        return (
            s.Z.dispatch({
                type: 'GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS',
                guildId: e,
                resourceChannel: r
            }),
            i.body
        );
    } catch (t) {
        var i;
        let e = r().flatMap(null !== (i = t.body) && void 0 !== i ? i : {}, (e) => e);
        a.Z.show({
            title: x.intl.string(x.t['6nCZyM']),
            body: x.intl.format(x.t.dYCPDw, { errorMessage: e.join(', ') })
        });
    }
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!n && !h.Z.hasChanges()) return Promise.resolve();
    let { serverGuideOptional: i } = (0, d.FJ)(e);
    return (!i || o.Z.getEnabled(e)) && !(0, c.uo)(t)
        ? (a.Z.show({
              title: x.intl.string(x.t['6nCZyM']),
              body: x.intl.string(x.t.JuhUTU)
          }),
          m.Z.addBreadcrumb({ message: 'Error saving home settings' }),
          Promise.reject())
        : (!i && null != t && (t.enabled = !0), Z(e, t));
}
function R(e, t) {
    let n = o.Z.getSettings(e);
    if (t && !(0, c.uo)(n)) {
        a.Z.show({
            title: x.intl.string(x.t['6nCZyM']),
            body: x.intl.string(x.t.JuhUTU)
        });
        return;
    }
    return (
        s.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_TOGGLE_ENABLED',
            guildId: e,
            enabled: t
        }),
        Z(e, {
            ...n,
            enabled: t
        })
    );
}
async function Z(e, t) {
    var n, i, o, d, m, h, p, f, C;
    s.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_START' });
    try {
        let r = await l.tn.put({
                url: g.ANM.GUILD_HOME_SETTINGS(e),
                body: (0, c.HH)(e, t),
                oldFormErrors: !0
            }),
            a = (0, c.tB)(r.body);
        return (
            s.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_UPDATE_SUCCESS',
                guildId: e,
                homeSettings: a
            }),
            u.default.track(g.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null !== (d = null == a ? void 0 : null === (n = a.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) && void 0 !== d ? d : [])[0],
                welcome_message_length: null !== (m = null == a ? void 0 : null === (o = a.welcomeMessage) || void 0 === o ? void 0 : null === (i = o.message) || void 0 === i ? void 0 : i.length) && void 0 !== m ? m : 0,
                member_action_channel_ids: (null !== (h = null == a ? void 0 : a.newMemberActions) && void 0 !== h ? h : []).map((e) => e.channelId),
                member_action_channel_actions: (null !== (p = null == a ? void 0 : a.newMemberActions) && void 0 !== p ? p : []).map((e) => e.actionType),
                resource_channel_ids: (null !== (f = null == a ? void 0 : a.resourceChannels) && void 0 !== f ? f : []).map((e) => e.channelId),
                enabled: null == a ? void 0 : a.enabled
            }),
            r.body
        );
    } catch (t) {
        let e = r().flatMap(null !== (C = t.body) && void 0 !== C ? C : {}, (e) => e);
        s.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_FAIL' }),
            a.Z.show({
                title: x.intl.string(x.t['6nCZyM']),
                body: x.intl.format(x.t.dYCPDw, { errorMessage: e.join(', ') })
            });
    }
}
function A(e, t) {
    null != e &&
        s.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION',
            guildId: e,
            channelIds: t
        });
}
function L() {
    s.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET' });
}
