t.d(n, {
    Z: function () {
        return c;
    }
});
var s = t(470079),
    i = t(442837),
    o = t(726542),
    l = t(122021),
    r = t(621853);
let a = [];
function c(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }),
        t = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
    return (0, s.useMemo)(
        () =>
            (null == t ? void 0 : t.connectedAccounts) == null
                ? a
                : t.connectedAccounts.filter((e) => {
                      let { type: t } = e,
                          s = o.Z.get(t);
                      return null != s && n(s);
                  }),
        [null == t ? void 0 : t.connectedAccounts, n]
    );
}
