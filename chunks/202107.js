n(47120);
var r = n(570140), i = n(147913), a = n(271383), o = n(594174), s = n(69882);
let l = null, u = () => {
        let e = a.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach(t => {
            let n = (0, a.O5)(t), r = (0, a.V6)(t), i = e[t];
            !(0, s.J)(i) && c(n, r);
        });
    }, c = (e, t) => {
        var n, i, l, u, c, d;
        let _ = a.ZP.getMember(e, t), E = o.default.getUser(t);
        if (null == _ || null == E || (0, s.b)(_))
            return;
        let f = {
            ..._,
            guildId: e,
            nick: null !== (n = _.nick) && void 0 !== n ? n : E.username,
            avatar: null !== (i = _.avatar) && void 0 !== i ? i : void 0,
            avatarDecoration: null != _.avatarDecoration ? { ..._.avatarDecoration } : void 0,
            premiumSince: null !== (l = _.premiumSince) && void 0 !== l ? l : void 0,
            isPending: null !== (u = _.isPending) && void 0 !== u && u,
            user: {
                ...E,
                email: null !== (c = E.email) && void 0 !== c ? c : void 0,
                phone: null !== (d = E.phone) && void 0 !== d ? d : void 0
            },
            communicationDisabledUntil: null
        };
        r.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE',
            ...f
        });
    };
class d extends i.Z {
    _initialize() {
        l = setInterval(() => u(), 10000);
    }
    _terminate() {
        clearInterval(l);
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'clearGuildMemberTimeout', r = c, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new d();
