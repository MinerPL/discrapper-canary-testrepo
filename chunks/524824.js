n.d(t, {
    r: function () {
        return l;
    }
});
var i = n(358085), a = n(918701), s = n(46140);
function l(e) {
    var t;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, l = (0, a.zK)(e, s.S7.IN_HOUSE_CONSOLE_QUEST), r = (0, a.zK)(e, s.S7.MOBILE_CONSOLE_QUEST);
    return (0, i.isWeb)() && !n && !l && !r;
}
