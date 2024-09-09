n.d(t, {
    G: function () {
        return l;
    },
    u: function () {
        return o;
    }
}),
    n(47120);
var r = n(470079),
    a = n(617136),
    s = n(272008);
function o(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: o, requiresPlatformSelection: l, rewardCode: i, selectedPlatformType: d } = e,
        [c, u] = r.useState(!1),
        p = r.useCallback((e, t, n) => {
            u(!1);
            try {
                (0, s.QB)(e, t, n);
            } catch (e) {
                u(!0);
            }
        }, []),
        m = r.useCallback((e) => {
            u(!1);
            try {
                (0, s.pf)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            if (null == i && !c && !t && !n && !l) (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? p(o.id, d, a) : (null === (r = o.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null && m(o.id);
        }, [p, m, c, t, n, a, o, l, i, d]),
        {
            claimCode: p,
            fetchCode: m,
            hasError: c,
            setHasError: u
        }
    );
}
function l(e) {
    let { claimCode: t, fetchCode: n, hasError: s, onDismiss: o, quest: l, questContent: i, questContentCTA: d = a.jZ.GET_REWARD_CODE, questContentPosition: c, requiresPlatformSelection: u, selectedPlatformType: p } = e;
    return r.useCallback(() => {
        var e;
        u && null != p
            ? (t(l.id, p, i),
              (0, a._3)({
                  questId: l.id,
                  questContent: i,
                  questContentCTA: d,
                  questContentPosition: c
              }))
            : s
              ? (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? n(l.id)
                  : null != p &&
                    (t(l.id, p, i),
                    (0, a._3)({
                        questId: l.id,
                        questContent: i,
                        questContentCTA: d,
                        questContentPosition: c
                    }))
              : o();
    }, [t, n, s, o, l, i, d, c, u, p]);
}
