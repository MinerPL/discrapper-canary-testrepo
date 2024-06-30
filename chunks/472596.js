E.d(_, {
    RE: function () {
        return S;
    },
    RN: function () {
        return l;
    },
    po: function () {
        return T;
    },
    qr: function () {
        return D;
    },
    xb: function () {
        return G;
    },
    zq: function () {
        return U;
    }
});
var s, T, I = E(470079), n = E(399606), A = E(906732), t = E(171368), a = E(430824), r = E(594174), N = E(91047), L = E(981631);
let S = (e, _) => {
    let {
        guildId: E,
        userId: s,
        colorRoleId: T
    } = e;
    (0, t.openUserProfileModal)({
        userId: s,
        guildId: E,
        sourceAnalyticsLocations: _,
        roleId: T,
        analyticsLocation: {
            section: L.jXE.MEMBER_SAFETY_PAGE,
            object: L.qAy.ACTIONED_BY_USER
        }
    });
};
function D(e, _, E) {
    let {analyticsLocations: s} = (0, A.ZP)();
    return I.useCallback(T => {
        if (null == e)
            return;
        let I = r.default.getUser(e.userId);
        if (null != I)
            T.stopPropagation(), (0, N.n8)(T, {
                user: I,
                guildId: e.guildId,
                analyticsLocations: null != _ ? [_] : s,
                onCloseContextMenu: E
            });
    }, [
        e,
        s,
        E,
        _
    ]);
}
function l(e, _, E) {
    let {analyticsLocations: s} = (0, A.ZP)();
    return I.useCallback(T => {
        if (null == e)
            return;
        let I = r.default.getUser(e.userId);
        if (null != I)
            T.stopPropagation(), (0, N._j)(T, {
                user: I,
                guildId: e.guildId,
                analyticsLocations: null != _ ? [_] : s,
                onCloseContextMenu: E,
                showTransferOwnershipItem: !0
            });
    }, [
        e,
        E,
        s,
        _
    ]);
}
function U(e) {
    return (0, n.e7)([a.Z], () => {
        var _;
        if (null == e)
            return null;
        let E = a.Z.getGuild(e.guildId);
        return null == E || null == e.highestRoleId ? null : null !== (_ = a.Z.getRole(E.id, e.highestRoleId)) && void 0 !== _ ? _ : null;
    }, [e]);
}
function G(e, _, E) {
    return _ ? 0 : e ? 1 : E <= 0 ? 2 : 3;
}
(s = T || (T = {}))[s.LOADING = 0] = 'LOADING', s[s.SUCCESS_STILL_INDEXING = 1] = 'SUCCESS_STILL_INDEXING', s[s.SUCCESS_EMPTY = 2] = 'SUCCESS_EMPTY', s[s.SUCCESS_FULL = 3] = 'SUCCESS_FULL';
