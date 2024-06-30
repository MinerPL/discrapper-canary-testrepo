n.d(t, {
    Z: function () {
        return _;
    },
    v: function () {
        return u;
    }
});
var s = n(704215), a = n(605236), r = n(391110), i = n(75077), l = n(595878), o = n(314684), c = n(735825), d = n(689938);
function _() {
    let e = (0, o.yQ)(), t = (0, l.c)({ location: r.MQ.HOME });
    if (null != e && !!t)
        return {
            title: (0, i.k3)(e.nitroTenureStatus),
            subtitle: (0, i.vZ)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
            description: (0, i.BS)(e.nitroTenureStatus),
            ctaDescription: (0, i.t2)(e.nitroTenureStatus, e.redeemableInDays),
            pillText: e.nitroTenureStatus === c.EB.PENDING ? d.Z.Messages.REWARD.toLocaleUpperCase() : void 0,
            dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? s.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
        };
}
function u(e) {
    return (null == e ? void 0 : e.showNotification) === !0 && (0, o.rM)(e).some(e => !(0, a.un)(e));
}
