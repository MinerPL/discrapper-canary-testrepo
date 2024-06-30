var i = n(735250);
n(470079);
var s = n(704215), a = n(481060), r = n(570140), l = n(317770), o = n(605236), c = n(650774), d = n(430824), u = n(496675), _ = n(228392), E = n(981631), h = n(921944);
let I = e => {
    var t;
    let n = d.Z.getGuild(e), i = !!(null == n ? void 0 : n.hasFeature(E.oNc.COMMUNITY)), a = u.Z.can(E.Plq.MANAGE_CHANNELS, n), r = (0, o.un)(s.z.FORUM_CHANNEL_UPSELL_MODAL), l = null !== (t = c.Z.getMemberCount(e)) && void 0 !== t ? t : 0;
    return i && a && !r && l >= 200;
};
class m extends l.Z {
    _initialize() {
        r.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect);
    }
    _terminate() {
        r.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let {guildId: t} = e;
        if (null == t || !I(t))
            return;
        (0, _.qz)(), (0, o.kk)(s.z.FORUM_CHANNEL_UPSELL_MODAL);
        let r = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.L.DISMISS;
            (0, o.EW)(s.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, a.openModalLazy)(async () => {
            let {default: e} = await n.e('18417').then(n.bind(n, 740696));
            return n => (0, i.jsx)(e, {
                ...n,
                onClose: e => {
                    r(e), n.onClose();
                },
                guildId: t,
                shouldUpsellCreation: !0
            });
        }, {
            onCloseCallback: () => (0, o.EW)(s.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: h.L.DISMISS }),
            onCloseRequest: E.VqG
        });
    }
}
t.Z = new m();
