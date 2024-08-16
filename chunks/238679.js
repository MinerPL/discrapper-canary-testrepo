n.d(t, {
    HU: function () {
        return m;
    },
    KW: function () {
        return E;
    },
    dO: function () {
        return _;
    },
    gQ: function () {
        return h;
    }
});
var i = n(392711),
    a = n.n(i),
    s = n(570140),
    r = n(317381),
    l = n(594174),
    o = n(823379),
    c = n(5192),
    d = n(863141),
    u = n(186901);
function _() {
    let e = r.ZP.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let { guildId: t, channelId: n } = e;
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = l.default.getUser(e);
            if (null == i) return;
            let a = (0, c.y)(t, n, i);
            return {
                ...(0, d.Z)(i),
                nickname: null != a ? a : void 0
            };
        }).filter(o.lm)
    };
}
let E = { [u.Gp.ANY]: [u.wE] },
    h = {
        scope: E,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = _();
            return !a().isEqual(i, t) && n(i), i;
        }
    };
function m(e) {
    let t = 'EMBEDDED_ACTIVITY_UPDATE',
        n = () => {
            e(_());
        };
    return s.Z.subscribe(t, n), () => s.Z.unsubscribe(t, n);
}
