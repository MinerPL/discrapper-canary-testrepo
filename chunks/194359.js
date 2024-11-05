n(47120);
var r,
    i,
    a = n(544891),
    s = n(780384),
    o = n(570140),
    l = n(391650),
    u = n(877215),
    c = n(895886),
    d = n(397550),
    f = n(594174),
    _ = n(657682),
    h = n(51144),
    p = n(668781),
    m = n(239091),
    g = n(981631),
    E = n(388032);
function v(e) {
    (0, m.Zy)(), p.Z.show(e);
}
function I(e, t, n) {
    let { status: r, body: i } = e,
        a = i && i.code;
    switch (r) {
        case 429:
            0 === t &&
                v({
                    title: E.intl.string(E.t['3D5eo6']),
                    body: E.intl.string(E.t.TuJriI),
                    confirmText: E.intl.string(E.t.DppXIy)
                });
            break;
        case 403:
            if (a === g.evJ.EMAIL_VERIFICATION_REQUIRED) {
                v({
                    title: E.intl.string(E.t.Gqf33N),
                    body: E.intl.string(E.t.GHOBd3),
                    confirmText: E.intl.string(E.t.HbTSEx),
                    onConfirm: () => {
                        l.j();
                    }
                });
                break;
            }
        default:
            if (a === g.evJ.USER_QUARANTINED) (0, m.Zy)(), (0, c.default)();
            else if ((0, d.b)(r, a)) break;
            else if (0 === t) {
                let e = null != n ? (0, _.NF)(a || 0, n) : E.intl.string(E.t.paDJBA);
                v({
                    title: E.intl.string(E.t['6moJ8v']),
                    body: e,
                    confirmText: E.intl.string(E.t.BddRzc)
                });
            }
    }
    throw e;
}
((i = r || (r = {}))[(i.SHOW_ALWAYS = 0)] = 'SHOW_ALWAYS'), (i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = 'SHOW_ONLY_IF_ACTION_NEEDED');
let S = {
    sendRequest(e) {
        let { discordTag: t, context: n, captchaPayload: r, errorUxConfig: i = 0 } = e,
            [s, o] = t.split('#');
        return a.tn
            .post({
                url: g.ANM.USER_RELATIONSHIPS(),
                body: {
                    username: s,
                    discriminator: parseInt(o),
                    ...r
                },
                context: n,
                oldFormErrors: !0
            })
            .catch((e) => {
                I(e, i, t);
            });
    },
    addRelationship(e, t) {
        let { userId: n, context: r, type: i, friendToken: s, fromFriendSuggestion: o, captchaPayload: l } = e,
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            c = f.default.getUser(n);
        return a.tn
            .put({
                url: g.ANM.USER_RELATIONSHIP(n),
                body: {
                    type: i,
                    friend_token: s,
                    from_friend_suggestion: o,
                    ...l
                },
                context: r,
                oldFormErrors: !0
            })
            .then(() => {
                null == t || t();
            })
            .catch((e) => {
                I(e, u, h.ZP.getUserTag(c));
            });
    },
    acceptFriendRequest: (e) =>
        S.addRelationship(e, function () {
            s.uv.announce(E.intl.string(E.t['3goNa2']));
        }),
    cancelFriendRequest: (e, t) =>
        S.removeRelationship(e, t, function () {
            s.uv.announce(E.intl.string(E.t.pLUaxc));
        }),
    removeFriend(e, t) {
        S.removeRelationship(e, t, function () {
            s.uv.announce(E.intl.string(E.t.vGSLa2));
        });
    },
    unblockUser(e, t) {
        S.removeRelationship(e, t, function () {
            s.uv.announce(E.intl.string(E.t['9t1au7']));
        });
    },
    removeRelationship: (e, t, n) =>
        a.tn
            .del({
                url: g.ANM.USER_RELATIONSHIP(e),
                context: t,
                oldFormErrors: !0
            })
            .then(() => {
                null == n || n();
            })
            .catch(() => {
                s.uv.announce(E.intl.string(E.t.n6Jo3N));
            }),
    updateRelationship: (e, t) =>
        a.tn.patch({
            url: g.ANM.USER_RELATIONSHIP(e),
            body: { nickname: t }
        }),
    fetchRelationships() {
        a.tn
            .get({
                url: g.ANM.USER_RELATIONSHIPS(),
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    o.Z.dispatch({
                        type: 'LOAD_RELATIONSHIPS_SUCCESS',
                        relationships: e.body
                    }),
                () => o.Z.dispatch({ type: 'LOAD_RELATIONSHIPS_FAILURE' })
            );
    },
    confirmClearPendingRelationships(e) {
        (0, u.Z)(e);
    },
    clearPendingRelationships: () =>
        a.tn
            .del({
                url: g.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: g.OGo.PENDING_INCOMING }
            })
            .then(() => {
                o.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(E.intl.string(E.t.n6Jo3N));
            }),
    clearPendingSpam: () =>
        a.tn
            .del({
                url: g.ANM.USER_RELATIONSHIPS(),
                query: {
                    relationship_type: g.OGo.PENDING_INCOMING,
                    only_spam: !0
                }
            })
            .then(() => {
                o.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(E.intl.string(E.t.n6Jo3N));
            }),
    ignoreUser: (e, t) =>
        a.tn.put({
            url: g.ANM.IGNORE_USER(e),
            context: { location: t }
        }),
    unignoreUser: (e, t) =>
        a.tn.del({
            url: g.ANM.IGNORE_USER(e),
            context: { location: t }
        })
};
t.Z = S;
