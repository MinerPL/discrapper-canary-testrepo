var n = r(837512),
    i = r(963107),
    o = r(221366),
    a = r(149808),
    u = r(624001),
    s = r(65183),
    c = r(360870),
    l = r(867864),
    f = r(581079),
    p = r(896775),
    h = r(351612),
    d = r(958594),
    g = r(81368),
    y = s.OrderedSet,
    v = {
        replaceText: function (t, e, r, i, o) {
            var a = d(h(t, e), e),
                u = n.create({
                    style: i || y(),
                    entity: o || null
                });
            return l(a, a.getSelectionAfter(), r, u);
        },
        insertText: function (t, e, r, n, i) {
            return e.isCollapsed() || f(!1), v.replaceText(t, e, r, n, i);
        },
        moveText: function (t, e, r) {
            var n = u(t, e),
                i = v.removeRange(t, e, 'backward');
            return v.replaceWithFragment(i, r, n);
        },
        replaceWithFragment: function (t, e, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'REPLACE_WITH_NEW_DATA',
                i = d(h(t, e), e);
            return c(i, i.getSelectionAfter(), r, n);
        },
        removeRange: function (t, e, r) {
            e.getIsBackward() &&
                (e = e.merge({
                    anchorKey: e.getFocusKey(),
                    anchorOffset: e.getFocusOffset(),
                    focusKey: e.getAnchorKey(),
                    focusOffset: e.getAnchorOffset(),
                    isBackward: !1
                })),
                (n = e.getAnchorKey()),
                (i = e.getFocusKey()),
                (o = t.getBlockForKey(n)),
                (u = t.getBlockForKey(i));
            var n,
                i,
                o,
                u,
                s = e.getStartOffset(),
                c = e.getEndOffset(),
                l = o.getEntityAt(s),
                f = u.getEntityAt(c - 1);
            if (n === i && l && l === f) {
                var p = a(t.getEntityMap(), o, u, e, r);
                return d(t, p);
            }
            return d(h(t, e), e);
        },
        splitBlock: function (t, e) {
            var r = d(h(t, e), e);
            return g(r, r.getSelectionAfter());
        },
        applyInlineStyle: function (t, e, r) {
            return i.add(t, e, r);
        },
        removeInlineStyle: function (t, e, r) {
            return i.remove(t, e, r);
        },
        setBlockType: function (t, e, r) {
            return p(t, e, function (t) {
                return t.merge({
                    type: r,
                    depth: 0
                });
            });
        },
        setBlockData: function (t, e, r) {
            return p(t, e, function (t) {
                return t.merge({ data: r });
            });
        },
        mergeBlockData: function (t, e, r) {
            return p(t, e, function (t) {
                return t.merge({ data: t.getData().merge(r) });
            });
        },
        applyEntity: function (t, e, r) {
            return o(h(t, e), e, r);
        }
    };
t.exports = v;
