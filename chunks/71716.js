var n = r(379846);
t.exports = function (t) {
    var e = t.getSelection(),
        r = e.getEndKey(),
        i = t.getCurrentContent().getBlockForKey(r).getLength();
    return n.set(t, {
        selection: e.merge({
            anchorKey: r,
            anchorOffset: i,
            focusKey: r,
            focusOffset: i,
            isBackward: !1
        }),
        forceSelection: !0
    });
};
