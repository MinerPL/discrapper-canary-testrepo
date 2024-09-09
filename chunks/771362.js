s.d(n, {
    Z: function () {
        return c;
    }
});
var t = s(470079),
    i = s(442837),
    o = s(726542),
    l = s(122021),
    r = s(621853);
let a = [];
function c(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }),
        s = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
    return (0, t.useMemo)(
        () =>
            (null == s ? void 0 : s.connectedAccounts) == null
                ? a
                : s.connectedAccounts.filter((e) => {
                      let { type: s } = e,
                          t = o.Z.get(s);
                      return null != t && n(t);
                  }),
        [null == s ? void 0 : s.connectedAccounts, n]
    );
}
