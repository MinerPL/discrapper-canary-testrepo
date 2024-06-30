s.d(t, {
    b: function () {
        return _;
    }
});
var n = s(481060), a = s(358085), i = s(394644), r = s(295545), o = s(168308), l = s(726985), c = s(332325), d = s(689938);
function _() {
    let e = (0, o.bC)(), t = (0, i.Gj)(l.s6.GAMES);
    return function (e, t, s) {
        var i;
        let r = (i = e, [
            {
                id: c.Z.MY_GAMES,
                title: d.Z.Messages.MY_GAMES,
                icon: n.DpadIcon,
                predicate: () => !a.isPlatformEmbedded,
                setting: l.s6.GAMES_MY_GAMES
            },
            {
                id: c.Z.CLIPS,
                title: d.Z.Messages.CLIPS,
                icon: n.ClipsIcon,
                setting: l.s6.GAMES_CLIPS
            },
            {
                id: c.Z.OVERLAY,
                title: d.Z.Messages.SETTINGS_GAMES_OVERLAY,
                icon: n.ScreenSystemRequirementsIcon,
                predicate: () => !i,
                setting: l.s6.GAMES_OVERLAY
            },
            {
                id: c.Z.ACTIVITY_PRIVACY,
                title: d.Z.Messages.ACTIVITY_PRIVACY,
                icon: n.FlashIcon,
                setting: l.s6.GAMES_ACTIVITY_PRIVACY
            }
        ]).filter(e => null == e.predicate || !e.predicate());
        if (t && null != s && s.size > 0) {
            let e = r.filter(e => s.has(e.setting));
            return e.length > 0 ? e : r;
        }
        return r;
    }(e, (0, r.eA)({ location: 'settings' }), t);
}
