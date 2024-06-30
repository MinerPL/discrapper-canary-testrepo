n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(442837), s = n(223892), a = n(430824), r = n(594174), l = n(981631);
function o(e) {
    var t;
    let n = (0, i.e7)([a.Z], () => a.Z.getGuild(e)), o = (0, i.e7)([r.default], () => r.default.getCurrentUser()), c = (null == n ? void 0 : n.ownerId) === (null == o ? void 0 : o.id), d = (0, s.Sd)();
    return c && null !== (t = null == n ? void 0 : n.hasFeature(l.oNc.COMMUNITY)) && void 0 !== t && t && d && !((null == n ? void 0 : n.hasFeature(l.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(l.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(l.oNc.CREATOR_MONETIZABLE_DISABLED)));
}
