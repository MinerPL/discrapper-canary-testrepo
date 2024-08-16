n.d(t, {
    p: function () {
        return a;
    }
});
var r = n(470079),
    i = n(913122);
function a(e) {
    var t;
    let n = (0, i.BA)({
            ...e,
            suppressTextValueWarning: !0,
            defaultSelectedKey: null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : s(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set())
        }),
        { selectionManager: a, collection: o, selectedKey: l } = n,
        u = (0, r.useRef)(l);
    return (
        (0, r.useEffect)(() => {
            let e = l;
            (a.isEmpty || !o.getItem(e)) && null != (e = s(o, n.disabledKeys)) && a.setSelectedKeys([e]), ((null != e && null == a.focusedKey) || (!a.isFocused && e !== u.current)) && a.setFocusedKey(e), (u.current = e);
        }),
        {
            ...n,
            isDisabled: e.isDisabled || !1
        }
    );
}
function s(e, t) {
    let n = null;
    if (e) {
        for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey(); ) n = e.getKeyAfter(n);
        t.has(n) && n === e.getLastKey() && (n = e.getFirstKey());
    }
    return n;
}
