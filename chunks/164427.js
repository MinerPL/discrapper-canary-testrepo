n.d(t, {
    J: function () {
        return l;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(765091);
function l(e) {
    let {
            scrollManager: t,
            children: n
        } = e, l = s.useCallback(e => {
            var n;
            null === (n = t.current) || void 0 === n || n.handleScroll(e);
        }, [t]);
    return (0, i.jsx)(a.AdvancedScroller, {
        onScroll: l,
        className: r.scroller,
        children: n
    });
}
