i.d(n, {
    Z: function () {
        return c;
    }
});
var t = i(470079), o = i(442837), s = i(726542), l = i(122021), a = i(621853);
let r = [];
function c(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }), i = (0, o.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, t.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? r : i.connectedAccounts.filter(e => {
        let {type: i} = e, t = s.Z.get(i);
        return null != t && n(t);
    }), [
        null == i ? void 0 : i.connectedAccounts,
        n
    ]);
}
