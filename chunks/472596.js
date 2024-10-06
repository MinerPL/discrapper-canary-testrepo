E.d(_, {
    RE: function () {
        return i;
    },
    RN: function () {
        return D;
    },
    po: function () {
        return n;
    },
    vN: function () {
        return N;
    },
    xb: function () {
        return S;
    },
    zq: function () {
        return L;
    }
});
var s,
    n,
    t = E(470079),
    r = E(399606),
    a = E(906732),
    T = E(171368),
    I = E(430824),
    l = E(594174),
    o = E(91047),
    A = E(981631);
let i = (e, _) => {
    let { guildId: E, userId: s, colorRoleId: n } = e;
    (0, T.openUserProfileModal)({
        userId: s,
        guildId: E,
        sourceAnalyticsLocations: _,
        roleId: n,
        analyticsLocation: {
            section: A.jXE.MEMBER_SAFETY_PAGE,
            object: A.qAy.ACTIONED_BY_USER
        }
    });
};
function N(e, _, E, s) {
    let { analyticsLocations: n } = (0, a.ZP)();
    return t.useCallback(
        (t) => {
            if (null == e) return;
            let r = l.default.getUser(e.userId);
            if (null != r)
                t.stopPropagation(),
                    (0, o.nm)(t, {
                        user: r,
                        guildId: e.guildId,
                        analyticsLocations: null != E ? [E] : n,
                        onCloseContextMenu: s,
                        isViewOnly: _
                    });
        },
        [e, n, s, E, _]
    );
}
function D(e, _, E) {
    let { analyticsLocations: s } = (0, a.ZP)();
    return t.useCallback(
        (n) => {
            if (null == e) return;
            let t = l.default.getUser(e.userId);
            if (null != t)
                n.stopPropagation(),
                    (0, o._j)(n, {
                        user: t,
                        guildId: e.guildId,
                        analyticsLocations: null != _ ? [_] : s,
                        onCloseContextMenu: E,
                        showTransferOwnershipItem: !0
                    });
        },
        [e, E, s, _]
    );
}
function L(e) {
    return (0, r.e7)(
        [I.Z],
        () => {
            var _;
            if (null == e) return null;
            let E = I.Z.getGuild(e.guildId);
            return null == E || null == e.highestRoleId ? null : null !== (_ = I.Z.getRole(E.id, e.highestRoleId)) && void 0 !== _ ? _ : null;
        },
        [e]
    );
}
function S(e, _, E) {
    return _ ? 0 : e ? 1 : E <= 0 ? 2 : 3;
}
((s = n || (n = {}))[(s.LOADING = 0)] = 'LOADING'), (s[(s.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'), (s[(s.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'), (s[(s.SUCCESS_FULL = 3)] = 'SUCCESS_FULL');
