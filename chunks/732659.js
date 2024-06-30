n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(470079), i = n(519953), a = n(887490);
function o(e, t, n) {
    r.useEffect(() => {
        let r = i.F3.findDocumentOrShadowRoot(e).defaultView;
        if ((null == r ? void 0 : r.ResizeObserver) == null)
            return;
        let o = a.bN.toDOMNode(e, e), s = o.offsetHeight, l = new r.ResizeObserver(() => {
                let r = a.bN.toDOMNode(e, e).offsetHeight;
                s !== r && (null != t.current && (t.current.style.height = ''.concat(r, 'px')), s = r, null == n || n(r));
            });
        return l.observe(o), () => l.disconnect();
    }, [
        t,
        e,
        n
    ]);
}
