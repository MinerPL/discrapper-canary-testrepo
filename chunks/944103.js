n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(470079), a = n(442837), l = n(131704), s = n(9156), r = n(423589), o = n(674190), c = n(624617), u = n(490897);
let d = Object.freeze({
    NOTICE_RENDER: {
        MAX: 1,
        PER_SECONDS: 600
    },
    CHANNEL_VISTS: {
        MIN: 2,
        PER_SECONDS: 86400
    }
});
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = (0, r.Mn)('useShouldRenderBanner'), h = (0, a.e7)([
            c.Z,
            s.ZP
        ], () => {
            let {
                guild_id: t,
                id: n
            } = e;
            if (!l.$N.has(e.type))
                return !1;
            let i = s.ZP.resolveUnreadSetting(e), a = s.ZP.getChannelUnreadSetting(t, n), r = c.Z.getNumberOfRendersSince(d.NOTICE_RENDER.PER_SECONDS), o = c.Z.getNumberOfChannelVisitsSince(t, n, d.CHANNEL_VISTS.PER_SECONDS);
            return a === u.i.UNSET && i !== u.i.ALL_MESSAGES && r <= d.NOTICE_RENDER.MAX && o >= d.CHANNEL_VISTS.MIN;
        }, [e]);
    return i.useEffect(() => {
        t && h && (0, o.g)(e.guild_id, e.id);
    }, [
        t,
        h,
        e.guild_id,
        e.id
    ]), i.useEffect(() => {
        l.$N.has(e.type) && (0, o.a)(e.guild_id, e.id);
    }, [
        e.guild_id,
        e.id,
        e.type
    ]), {
        canRenderNotice: h && n,
        recordNoticeRender: () => (0, o.g)(e.guild_id, e.id)
    };
}
