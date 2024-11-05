n.d(t, {
    GL: function () {
        return l;
    }
});
var r = n(633064),
    i = n(192379),
    a = n(942069);
let s = 'row-header-column-' + Math.random().toString(36).slice(2),
    o = 'row-header-column-' + Math.random().toString(36).slice(2);
for (; s === o; ) o = 'row-header-column-' + Math.random().toString(36).slice(2);
function l(e, t) {
    if (0 === t.length) return [];
    let n = [],
        r = new Map();
    for (let i of t) {
        let t = i.parentKey,
            a = [i];
        for (; t; ) {
            let n = e.get(t);
            if (!n) break;
            if (r.has(n)) {
                n.colspan++;
                let { column: e, index: t } = r.get(n);
                if (t > a.length) break;
                for (let n = t; n < a.length; n++) e.splice(n, 0, null);
                for (let t = a.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
            } else
                (n.colspan = 1),
                    a.push(n),
                    r.set(n, {
                        column: a,
                        index: a.length - 1
                    });
            t = n.parentKey;
        }
        n.push(a), (i.index = n.length - 1);
    }
    let i = Math.max(...n.map((e) => e.length)),
        a = Array(i)
            .fill(0)
            .map(() => []),
        s = 0;
    for (let e of n) {
        let t = i - 1;
        for (let n of e) {
            if (n) {
                let e = a[t],
                    r = e.reduce((e, t) => e + t.colspan, 0);
                if (r < s) {
                    let i = {
                        type: 'placeholder',
                        key: 'placeholder-' + n.key,
                        colspan: s - r,
                        index: r,
                        value: null,
                        rendered: null,
                        level: t,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: null
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = i.key), (i.prevKey = e[e.length - 1].key)), e.push(i);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = n.key), (n.prevKey = e[e.length - 1].key)), (n.level = t), (n.colIndex = s), e.push(n);
            }
            t--;
        }
        s++;
    }
    let o = 0;
    for (let e of a) {
        let n = e.reduce((e, t) => e + t.colspan, 0);
        if (n < t.length) {
            let r = {
                type: 'placeholder',
                key: 'placeholder-' + e[e.length - 1].key,
                colspan: t.length - n,
                index: n,
                value: null,
                rendered: null,
                level: o,
                hasChildNodes: !1,
                childNodes: [],
                textValue: null,
                prevKey: e[e.length - 1].key
            };
            e.push(r);
        }
        o++;
    }
    return a.map((e, t) => ({
        type: 'headerrow',
        key: 'headerrow-' + t,
        index: t,
        value: null,
        rendered: null,
        level: 0,
        hasChildNodes: !0,
        childNodes: e,
        textValue: null
    }));
}
a.V, Symbol.iterator;
function u(e) {
    return null;
}
u.getCollectionNode = function* (e, t) {
    let { children: n, textValue: r, UNSTABLE_childItems: a } = e;
    yield {
        type: 'item',
        props: e,
        textValue: r,
        'aria-label': e['aria-label'],
        hasChildNodes: !0,
        *childNodes() {
            if (
                (t.showDragButtons &&
                    (yield {
                        type: 'cell',
                        key: 'header-drag',
                        props: { isDragButtonCell: !0 }
                    }),
                t.showSelectionCheckboxes &&
                    'none' !== t.selectionMode &&
                    (yield {
                        type: 'cell',
                        key: 'header',
                        props: { isSelectionCell: !0 }
                    }),
                'function' == typeof n)
            ) {
                for (let e of t.columns)
                    yield {
                        type: 'cell',
                        element: n(e.key),
                        key: e.key
                    };
                if (a)
                    for (let e of a)
                        yield {
                            type: 'item',
                            value: e
                        };
            } else {
                let e = [],
                    r = [];
                if (
                    (i.Children.forEach(n, (n) => {
                        if (n.type === u) {
                            if (e.length < t.columns.length) throw Error("All of a Row's child Cells must be positioned before any child Rows.");
                            r.push({
                                type: 'item',
                                element: n
                            });
                        } else
                            e.push({
                                type: 'cell',
                                element: n
                            });
                    }),
                    e.length !== t.columns.length)
                )
                    throw Error(`Cell count must match column count. Found ${e.length} cells and ${t.columns.length} columns.`);
                yield* e, yield* r;
            }
        },
        shouldInvalidate: (e) => e.columns.length !== t.columns.length || e.columns.some((e, n) => e.key !== t.columns[n].key) || e.showSelectionCheckboxes !== t.showSelectionCheckboxes || e.showDragButtons !== t.showDragButtons || e.selectionMode !== t.selectionMode
    };
};
