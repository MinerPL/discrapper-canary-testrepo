n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(626135),
    a = n(188471),
    s = n(360347),
    r = n(981631);
function l(e) {
    var t, n, l;
    let { tab_opened: o, source: c } = e,
        d = (0, s.Z)();
    i.default.track(r.rMx.FRIENDS_LIST_VIEWED, {
        tab_opened: o,
        source: c,
        ...d
    }),
        (0, a.a)(r.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
            tab_opened: null != o ? o : 'tabless',
            num_friends: null !== (t = d.num_friends) && void 0 !== t ? t : 0,
            now_playing_visible: null !== (n = d.now_playing_visible) && void 0 !== n && n,
            now_playing_num_cards: null !== (l = d.now_playing_num_cards) && void 0 !== l ? l : 0
        });
}
