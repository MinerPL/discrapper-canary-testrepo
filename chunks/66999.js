n.d(t, {
    $: function () {
        return c;
    },
    Z: function () {
        return u;
    }
});
var r = n(442837),
    i = n(430198),
    a = n(592125),
    s = n(496675),
    o = n(981631);
let l = {
    needSubscriptionToAccess: !1,
    isSubscriptionGated: !1
};
function u(e) {
    return (0, r.cj)([a.Z, i.Z, s.Z], () => c(e, a.Z, i.Z, s.Z), [e]);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
        u = t.getChannel(e);
    return (null == u ? void 0 : u.isRoleSubscriptionTemplatePreviewChannel())
        ? {
              isSubscriptionGated: !0,
              needSubscriptionToAccess: !0
          }
        : null != u && n.isChannelGated(u.guild_id, u.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: u.isGuildVocal() ? !r.can(o.Plq.CONNECT, u) : !r.can(o.Plq.VIEW_CHANNEL, u)
            }
          : l;
}
