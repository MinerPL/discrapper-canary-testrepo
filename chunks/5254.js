n(47120);
var i, s, a, r, l = n(392711), o = n.n(l), c = n(442837), d = n(570140), u = n(598077), _ = n(594174), E = n(388380);
let h = {}, I = 0, m = !1, p = !1;
function g(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
        user: new u.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class T extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(_.default);
    }
    getSuggestionCount() {
        return I;
    }
    getSuggestions() {
        return Object.entries(h).map(e => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return h[e];
    }
}
r = 'FriendSuggestionStore', (a = 'displayName') in (s = T) ? Object.defineProperty(s, a, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[a] = r, t.Z = new T(d.Z, {
    CONNECTION_OPEN: function (e) {
        h = {}, (I = e.friendSuggestionCount) > 0 && (p = !0, m || !p || (m = !0, p = !1, E.Z.fetch()));
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = g(e.suggestion);
        if (null != h[t.key])
            return !1;
        I++, h = {
            ...h,
            [t.key]: t
        };
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        I = Math.max(0, --I), delete h[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        m = !1, t = e.suggestions, h = o().chain(t).map(e => g(e)).keyBy(e => e.key).value(), I = o().keys(h).length;
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        m = !1, h = {};
    }
});
