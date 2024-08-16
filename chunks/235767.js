var n = r(310176),
    i = r(316103)('draft_tree_data_support');
t.exports = function (t, e, r) {
    var o = t.getSelection(),
        a = t.getCurrentContent(),
        u = o,
        s = o.getAnchorKey(),
        c = o.getFocusKey(),
        l = a.getBlockForKey(s);
    if (i && 'forward' === r && s !== c) return a;
    if (o.isCollapsed()) {
        if ('forward' === r) {
            if (t.isSelectionAtEndOfContent()) return a;
            if (i && o.getAnchorOffset() === a.getBlockForKey(s).getLength()) {
                var f = a.getBlockForKey(l.nextSibling);
                if (!f || 0 === f.getLength()) return a;
            }
        } else if (t.isSelectionAtStartOfContent()) return a;
        if ((u = e(t)) === o) return a;
    }
    return n.removeRange(a, u, r);
};
