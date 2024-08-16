n.d(t, {
    M: function () {
        return s;
    }
});
var i = n(470079),
    a = n(660384);
function s() {
    let e = i.useRef(new a.Z()),
        t = i.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: i.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t
    };
}
