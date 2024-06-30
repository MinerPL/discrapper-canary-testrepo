n(47120);
var i = n(735250), a = n(470079), l = n(399606), s = n(704215), r = n(952265), o = n(481060), c = n(243778), u = n(38618), d = n(914010), h = n(921944);
function p(e) {
    return 'dismissible_content_'.concat(h.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
t.Z = a.memo(function () {
    return !function () {
        let e = (0, l.e7)([u.Z], () => u.Z.isConnected()) ? [] : [], [t, m] = (0, c.U)(e, h.R.GUILD_TAKEOVER_MODAL), _ = (0, r.f9)(), f = a.useRef(null);
        a.useEffect(() => {
            if (null == t) {
                f.current = null;
                return;
            }
            if (!_ && f.current !== t)
                !function (e) {
                    let {
                            dismissibleContent: t,
                            markAsDismissed: a
                        } = e, l = {
                            onCloseCallback: e => a(null != e ? e : h.L.UNKNOWN),
                            modalKey: p(t)
                        }, r = d.Z.getGuildId();
                    if (t === s.z.SERVER_SHOP_UPSELL)
                        null != r && (0, o.openModalLazy)(async () => {
                            let {default: e} = await n.e('7302').then(n.bind(n, 756779));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                guildId: r,
                                markAsDismissed: a
                            });
                        }, l);
                }({
                    dismissibleContent: t,
                    markAsDismissed: m
                }), f.current = t;
        }, [
            t,
            _,
            m
        ]), a.useEffect(() => () => {
            null != t && (0, r.Mr)(p(t));
        }, [t]);
    }(), null;
});
