n.d(t, {
    Fb: function () {
        return _;
    },
    c: function () {
        return f;
    },
    fQ: function () {
        return p;
    }
});
var r = n(661763),
    i = n(202616),
    a = n(662845),
    s = n(766203),
    o = n(921336),
    l = n(192379),
    u = n(649859);
let c = new WeakMap();
function d(e, t) {
    let { id: n } = c.get(e);
    if (!n) throw Error('Unknown list');
    return `${n}-${(function (e) {
        return 'string' == typeof e ? e.replace(/\s*/g, '') : '' + e;
    })(t)}`;
}
function f(e, t, n) {
    let { isVirtualized: o, keyboardDelegate: l, onAction: u, linkBehavior: d = 'action' } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: f } = (0, s._t)({
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            ref: n,
            keyboardDelegate: l,
            isVirtualized: o,
            selectOnFocus: 'replace' === t.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: d
        }),
        _ = (0, r.Me)(e.id);
    c.set(t, {
        id: _,
        onAction: u,
        linkBehavior: d
    });
    let h = (0, i.jS)({
            selectionManager: t.selectionManager,
            hasItemActions: !!u
        }),
        p = (0, a.pu)(n, { isDisabled: 0 !== t.collection.size }),
        m = (0, r.zL)(e, { labelable: !0 }),
        g = (0, r.dG)(
            m,
            {
                role: 'grid',
                id: _,
                'aria-multiselectable': 'multiple' === t.selectionManager.selectionMode ? 'true' : void 0
            },
            0 === t.collection.size ? { tabIndex: p ? -1 : 0 } : f,
            h
        );
    return o && ((g['aria-rowcount'] = t.collection.size), (g['aria-colcount'] = 1)), (0, i.B6)({}, t), { gridProps: g };
}
function _(e, t, n) {
    let { node: i, isVirtualized: f, shouldSelectOnPressUp: _ } = e,
        { direction: p } = (0, u.bU)(),
        { onAction: m, linkBehavior: g } = c.get(t),
        E = (0, r.mp)(),
        v = (0, l.useRef)(null),
        { itemProps: I, ...S } = (0, s.Cs)({
            selectionManager: t.selectionManager,
            key: i.key,
            ref: n,
            isVirtualized: f,
            shouldSelectOnPressUp: _,
            onAction: m ? () => m(i.key) : void 0,
            focus: () => {
                ((null != v.current && i.key !== v.current) || !n.current.contains(document.activeElement)) && (0, a.ex)(n.current);
            },
            linkBehavior: g
        }),
        T = S.hasAction ? (0, r.ib)(i.props) : {},
        b = (0, r.dG)(I, T, {
            role: 'row',
            onKeyDownCapture: (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, a.QL)(n.current);
                switch (((t.currentNode = document.activeElement), e.key)) {
                    case 'ArrowLeft': {
                        let i = 'rtl' === p ? t.nextNode() : t.previousNode();
                        if (i) e.preventDefault(), e.stopPropagation(), (0, a.ex)(i), (0, r.Gt)(i, { containingElement: (0, r.rP)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), 'rtl' === p)) (0, a.ex)(n.current), (0, r.Gt)(n.current, { containingElement: (0, r.rP)(n.current) });
                        else {
                            t.currentNode = n.current;
                            let e = h(t);
                            e && ((0, a.ex)(e), (0, r.Gt)(e, { containingElement: (0, r.rP)(n.current) }));
                        }
                        break;
                    }
                    case 'ArrowRight': {
                        let i = 'rtl' === p ? t.previousNode() : t.nextNode();
                        if (i) e.preventDefault(), e.stopPropagation(), (0, a.ex)(i), (0, r.Gt)(i, { containingElement: (0, r.rP)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), 'ltr' === p)) (0, a.ex)(n.current), (0, r.Gt)(n.current, { containingElement: (0, r.rP)(n.current) });
                        else {
                            t.currentNode = n.current;
                            let e = h(t);
                            e && ((0, a.ex)(e), (0, r.Gt)(e, { containingElement: (0, r.rP)(n.current) }));
                        }
                        break;
                    }
                    case 'ArrowUp':
                    case 'ArrowDown':
                        !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
                }
            },
            onFocus: (e) => {
                if (((v.current = i.key), e.target !== n.current)) {
                    !(0, o.E)() && t.selectionManager.setFocusedKey(i.key);
                    return;
                }
            },
            'aria-label': i.textValue || void 0,
            'aria-selected': t.selectionManager.canSelectItem(i.key) ? t.selectionManager.isSelected(i.key) : void 0,
            'aria-disabled': t.selectionManager.isDisabled(i.key) || void 0,
            'aria-labelledby': E && i.textValue ? `${d(t, i.key)} ${E}` : void 0,
            id: d(t, i.key)
        });
    return (
        f && (b['aria-rowindex'] = i.index + 1),
        {
            rowProps: b,
            gridCellProps: {
                role: 'gridcell',
                'aria-colindex': 1
            },
            descriptionProps: { id: E },
            ...S
        }
    );
}
function h(e) {
    let t, n;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
function p(e, t) {
    let { key: n } = e,
        { checkboxProps: r } = (0, i.Ug)(e, t);
    return {
        checkboxProps: {
            ...r,
            'aria-labelledby': `${r.id} ${d(t, n)}`
        }
    };
}
