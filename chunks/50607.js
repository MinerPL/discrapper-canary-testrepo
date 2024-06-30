n.d(t, {
    B: function () {
        return o;
    }
});
var r = n(519953), i = n(436660), a = n(887490);
let o = (e, t) => {
    let {
        addMark: n,
        removeMark: o,
        deleteBackward: s,
        deleteForward: l,
        setFragmentData: u,
        insertData: c,
        insertFragmentData: d,
        insertTextData: _
    } = e;
    return (e = (0, r.BU)(e)).addMark = n, e.removeMark = o, e.setFragmentData = u, e.insertData = c, e.insertFragmentData = d, e.insertTextData = _, e.deleteBackward = n => {
        if ('line' !== n || t)
            s(n);
        else {
            let t = a.lP.getLineActionRange(e, !0);
            null != t && i.Q.delete(e, { at: t });
        }
    }, e.deleteForward = n => {
        if ('line' !== n || t)
            l(n);
        else {
            let t = a.lP.getLineActionRange(e, !1);
            null != t && i.Q.delete(e, { at: t });
        }
    }, e;
};
