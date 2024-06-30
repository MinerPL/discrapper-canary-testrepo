n.d(t, {
    B6: function () {
        return Q;
    },
    Ks: function () {
        return et;
    },
    Nm: function () {
        return J;
    },
    Ug: function () {
        return ei;
    },
    Y5: function () {
        return ee;
    },
    ip: function () {
        return K;
    },
    jS: function () {
        return $;
    },
    n_: function () {
        return en;
    }
});
var r = n(963663), i = n(910524), a = n(433668), o = n(231116), s = n(801900), l = n(434831), u = n(838253), c = n(337661), d = n(255894), _ = n(335436), E = n(476347), f = n(779138), h = n(81272), p = n(306670), m = n(320564), I = n(25163), T = n(869940), g = n(904838), S = n(740519), A = n(526622), N = n(826737), v = n(65275), O = n(235579), R = n(417443), C = n(42287), y = n(240362), D = n(836168), L = n(109465), b = n(348949), M = n(936443), P = n(542063), U = n(472315), w = n(461128), x = n(889249), G = n(275857), k = n(760607), B = n(182823), F = n(470079), V = n(616073), H = n(706682), Z = n(148836), Y = n(770003), j = n(612001);
function W(e) {
    return e && e.__esModule ? e.default : e;
}
class K {
    isCell(e) {
        return 'cell' === e.type;
    }
    isRow(e) {
        return 'row' === e.type || 'item' === e.type;
    }
    findPreviousKey(e, t) {
        let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
        for (; null != n;) {
            let e = this.collection.getItem(n);
            if (!this.disabledKeys.has(n) && (!t || t(e)))
                return n;
            n = this.collection.getKeyBefore(n);
        }
    }
    findNextKey(e, t) {
        let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
        for (; null != n;) {
            let e = this.collection.getItem(n);
            if (!this.disabledKeys.has(n) && (!t || t(e)))
                return n;
            n = this.collection.getKeyAfter(n);
        }
    }
    getKeyBelow(e) {
        let t = this.collection.getItem(e);
        if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findNextKey(e)))) {
            if (this.isCell(t)) {
                let n = this.collection.getItem(e);
                return (0, G.Em)((0, G._P)(n, this.collection), t.index).key;
            }
            if ('row' === this.focusMode)
                return e;
        }
    }
    getKeyAbove(e) {
        let t = this.collection.getItem(e);
        if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findPreviousKey(e)))) {
            if (this.isCell(t)) {
                let n = this.collection.getItem(e);
                return (0, G.Em)((0, G._P)(n, this.collection), t.index).key;
            }
            if ('row' === this.focusMode)
                return e;
        }
    }
    getKeyRightOf(e) {
        let t = this.collection.getItem(e);
        if (t) {
            if (this.isRow(t)) {
                let e = (0, G._P)(t, this.collection);
                return 'rtl' === this.direction ? (0, G.s)(e).key : (0, G.l8)(e).key;
            }
            if (this.isCell(t)) {
                let n = this.collection.getItem(t.parentKey), r = (0, G._P)(n, this.collection), i = 'rtl' === this.direction ? (0, G.Em)(r, t.index - 1) : (0, G.Em)(r, t.index + 1);
                return i ? i.key : 'row' === this.focusMode ? t.parentKey : 'rtl' === this.direction ? this.getFirstKey(e) : this.getLastKey(e);
            }
        }
    }
    getKeyLeftOf(e) {
        let t = this.collection.getItem(e);
        if (t) {
            if (this.isRow(t)) {
                let e = (0, G._P)(t, this.collection);
                return 'rtl' === this.direction ? (0, G.l8)(e).key : (0, G.s)(e).key;
            }
            if (this.isCell(t)) {
                let n = this.collection.getItem(t.parentKey), r = (0, G._P)(n, this.collection), i = 'rtl' === this.direction ? (0, G.Em)(r, t.index + 1) : (0, G.Em)(r, t.index - 1);
                return i ? i.key : 'row' === this.focusMode ? t.parentKey : 'rtl' === this.direction ? this.getLastKey(e) : this.getFirstKey(e);
            }
        }
    }
    getFirstKey(e, t) {
        let n;
        if (null != e) {
            if (!(n = this.collection.getItem(e)))
                return;
            if (this.isCell(n) && !t) {
                let e = this.collection.getItem(n.parentKey);
                return (0, G.l8)((0, G._P)(e, this.collection)).key;
            }
        }
        if (null != (e = this.findNextKey()) && n && this.isCell(n) && t || 'cell' === this.focusMode) {
            let t = this.collection.getItem(e);
            e = (0, G.l8)((0, G._P)(t, this.collection)).key;
        }
        return e;
    }
    getLastKey(e, t) {
        let n;
        if (null != e) {
            if (!(n = this.collection.getItem(e)))
                return;
            if (this.isCell(n) && !t) {
                let e = this.collection.getItem(n.parentKey), t = (0, G._P)(e, this.collection);
                return (0, G.s)(t).key;
            }
        }
        if (null != (e = this.findPreviousKey()) && n && this.isCell(n) && t || 'cell' === this.focusMode) {
            let t = this.collection.getItem(e), n = (0, G._P)(t, this.collection);
            e = (0, G.s)(n).key;
        }
        return e;
    }
    getItem(e) {
        return this.ref.current.querySelector(`[data-key="${ CSS.escape(e.toString()) }"]`);
    }
    getItemRect(e) {
        var t;
        if (this.layout)
            return null === (t = this.layout.getLayoutInfo(e)) || void 0 === t ? void 0 : t.rect;
        let n = this.getItem(e);
        if (n)
            return new k.UL(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight);
    }
    getPageHeight() {
        var e, t, n;
        return this.layout ? null === (e = this.layout.virtualizer) || void 0 === e ? void 0 : e.visibleRect.height : null === (n = this.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : t.offsetHeight;
    }
    getContentHeight() {
        var e, t;
        return this.layout ? this.layout.getContentSize().height : null === (t = this.ref) || void 0 === t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.scrollHeight;
    }
    getKeyPageAbove(e) {
        let t = this.getItemRect(e);
        if (!t)
            return null;
        let n = Math.max(0, t.maxY - this.getPageHeight());
        for (; t && t.y > n;)
            e = this.getKeyAbove(e), t = this.getItemRect(e);
        return e;
    }
    getKeyPageBelow(e) {
        let t = this.getItemRect(e);
        if (!t)
            return null;
        let n = this.getPageHeight(), r = Math.min(this.getContentHeight(), t.y + n);
        for (; t && t.maxY < r;) {
            let n = this.getKeyBelow(e);
            t = this.getItemRect(n), null != n && (e = n);
        }
        return e;
    }
    getKeyForSearch(e, t) {
        if (!this.collator)
            return null;
        let n = this.collection, r = null != t ? t : this.getFirstKey(), i = n.getItem(r);
        'cell' === i.type && (r = i.parentKey);
        let a = !1;
        for (; null != r;) {
            let t = n.getItem(r);
            if (t.textValue) {
                let n = t.textValue.slice(0, e.length);
                if (0 === this.collator.compare(n, e)) {
                    if (this.isRow(t) && 'cell' === this.focusMode)
                        return (0, G.l8)((0, G._P)(t, this.collection)).key;
                    return t.key;
                }
            }
            null == (r = this.findNextKey(r)) && !a && (r = this.getFirstKey(), a = !0);
        }
        return null;
    }
    constructor(e) {
        this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.ref = e.ref, this.direction = e.direction, this.collator = e.collator, this.layout = e.layout, this.focusMode = e.focusMode || 'row';
    }
}
let z = new WeakMap();
var q = {};
function Q(e, t) {
    let {
            getRowText: n = e => {
                var n, r, i, a;
                return null !== (a = null === (n = (r = t.collection).getTextValue) || void 0 === n ? void 0 : n.call(r, e)) && void 0 !== a ? a : null === (i = t.collection.getItem(e)) || void 0 === i ? void 0 : i.textValue;
            }
        } = e, r = (0, V.qb)(W(q), '@react-aria/grid'), i = t.selectionManager.rawSelection, a = (0, F.useRef)(i);
    (0, B.rf)(() => {
        var e;
        if (!t.selectionManager.isFocused) {
            a.current = i;
            return;
        }
        let o = X(i, a.current), s = X(a.current, i), l = 'replace' === t.selectionManager.selectionBehavior, u = [];
        if (1 === t.selectionManager.selectedKeys.size && l) {
            if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
                let e = n(t.selectionManager.selectedKeys.keys().next().value);
                e && u.push(r.format('selectedItem', { item: e }));
            }
        } else if (1 === o.size && 0 === s.size) {
            let e = n(o.keys().next().value);
            e && u.push(r.format('selectedItem', { item: e }));
        } else if (1 === s.size && 0 === o.size && t.collection.getItem(s.keys().next().value)) {
            let e = n(s.keys().next().value);
            e && u.push(r.format('deselectedItem', { item: e }));
        }
        'multiple' === t.selectionManager.selectionMode && (0 === u.length || 'all' === i || i.size > 1 || 'all' === a.current || (null === (e = a.current) || void 0 === e ? void 0 : e.size) > 1) && u.push('all' === i ? r.format('selectedAll') : r.format('selectedCount', { count: i.size })), u.length > 0 && (0, Y.xQ)(u.join(' ')), a.current = i;
    }, [i]);
}
function X(e, t) {
    let n = new Set();
    if ('all' === e || 'all' === t)
        return n;
    for (let r of e.keys())
        !t.has(r) && n.add(r);
    return n;
}
function $(e) {
    let t = (0, V.qb)(W(q), '@react-aria/grid'), n = (0, j.Kf)(), r = ('pointer' === n || 'virtual' === n || null == n) && 'undefined' != typeof window && 'ontouchstart' in window, i = (0, F.useMemo)(() => {
            let n, i = e.selectionManager.selectionMode, a = e.selectionManager.selectionBehavior;
            return r && (n = t.format('longPressToSelect')), 'replace' === a && 'none' !== i && e.hasItemActions ? n : void 0;
        }, [
            e.selectionManager.selectionMode,
            e.selectionManager.selectionBehavior,
            e.hasItemActions,
            t,
            r
        ]);
    return (0, B.PK)(i);
}
function J(e, t, n) {
    let {
            isVirtualized: r,
            keyboardDelegate: i,
            focusMode: a,
            scrollRef: o,
            getRowText: s,
            onRowAction: l,
            onCellAction: u
        } = e, {selectionManager: c} = t;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let d = (0, V.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }), {direction: _} = (0, V.bU)(), E = t.selectionManager.disabledBehavior, f = (0, F.useMemo)(() => i || new K({
            collection: t.collection,
            disabledKeys: 'selection' === E ? new Set() : t.disabledKeys,
            ref: n,
            direction: _,
            collator: d,
            focusMode: a
        }), [
            i,
            t.collection,
            t.disabledKeys,
            E,
            n,
            _,
            d,
            a
        ]), {collectionProps: h} = (0, Z.gq)({
            ref: n,
            selectionManager: c,
            keyboardDelegate: f,
            isVirtualized: r,
            scrollRef: o
        }), p = (0, B.Me)(e.id);
    z.set(t, {
        keyboardDelegate: f,
        actions: {
            onRowAction: l,
            onCellAction: u
        }
    });
    let m = $({
            selectionManager: c,
            hasItemActions: !!(l || u)
        }), I = (0, B.zL)(e, { labelable: !0 }), T = (0, F.useCallback)(e => {
            if (c.isFocused) {
                !e.currentTarget.contains(e.target) && c.setFocused(!1);
                return;
            }
            e.currentTarget.contains(e.target) && c.setFocused(!0);
        }, [c]), g = (0, F.useMemo)(() => ({
            onBlur: h.onBlur,
            onFocus: T
        }), [
            T,
            h.onBlur
        ]), S = (0, H.pu)(n, { isDisabled: 0 !== t.collection.size }), A = (0, B.dG)(I, {
            role: 'grid',
            id: p,
            'aria-multiselectable': 'multiple' === c.selectionMode ? 'true' : void 0
        }, t.isKeyboardNavigationDisabled ? g : h, 0 === t.collection.size && { tabIndex: S ? -1 : 0 }, m);
    return r && (A['aria-rowcount'] = t.collection.size, A['aria-colcount'] = t.collection.columnCount), Q({ getRowText: s }, t), { gridProps: A };
}
function ee() {
    return { rowGroupProps: { role: 'rowgroup' } };
}
function et(e, t, n) {
    let {
            node: r,
            isVirtualized: i,
            shouldSelectOnPressUp: a,
            onAction: o
        } = e, {
            actions: {onRowAction: s}
        } = z.get(t), {
            itemProps: l,
            ...u
        } = (0, Z.Cs)({
            selectionManager: t.selectionManager,
            key: r.key,
            ref: n,
            isVirtualized: i,
            shouldSelectOnPressUp: a,
            onAction: s ? () => s(r.key) : o,
            isDisabled: 0 === t.collection.size
        }), c = t.selectionManager.isSelected(r.key), d = {
            role: 'row',
            'aria-selected': 'none' !== t.selectionManager.selectionMode ? c : void 0,
            'aria-disabled': u.isDisabled || void 0,
            ...l
        };
    return i && (d['aria-rowindex'] = r.index + 1), {
        rowProps: d,
        ...u
    };
}
function en(e, t, n) {
    var r;
    let {
            node: i,
            isVirtualized: a,
            focusMode: o = 'child',
            shouldSelectOnPressUp: s,
            onAction: l
        } = e, {direction: u} = (0, V.bU)(), {
            keyboardDelegate: c,
            actions: {onCellAction: d}
        } = z.get(t), _ = (0, F.useRef)(null), E = () => {
            let e = (0, H.QL)(n.current);
            if ('child' === o) {
                if (n.current.contains(document.activeElement) && n.current !== document.activeElement)
                    return;
                let r = 'last' === t.selectionManager.childFocusStrategy ? er(e) : e.firstChild();
                if (r) {
                    (0, H.ex)(r);
                    return;
                }
            }
            (null != _.current && i.key !== _.current || !n.current.contains(document.activeElement)) && (0, H.ex)(n.current);
        }, {
            itemProps: f,
            isPressed: h
        } = (0, Z.Cs)({
            selectionManager: t.selectionManager,
            key: i.key,
            ref: n,
            isVirtualized: a,
            focus: E,
            shouldSelectOnPressUp: s,
            onAction: d ? () => d(i.key) : l,
            isDisabled: 0 === t.collection.size
        }), p = (0, B.dG)(f, {
            role: 'gridcell',
            onKeyDownCapture: e => {
                if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled)
                    return;
                let r = (0, H.QL)(n.current);
                switch (r.currentNode = document.activeElement, e.key) {
                case 'ArrowLeft': {
                        let t = 'rtl' === u ? r.nextNode() : r.previousNode();
                        if ('child' === o && t === n.current && (t = null), t)
                            e.preventDefault(), e.stopPropagation(), (0, H.ex)(t), (0, B.Gt)(t, { containingElement: (0, B.rP)(n.current) });
                        else {
                            if (c.getKeyLeftOf(i.key) !== i.key)
                                break;
                            e.preventDefault(), e.stopPropagation(), 'cell' === o && 'rtl' === u ? ((0, H.ex)(n.current), (0, B.Gt)(n.current, { containingElement: (0, B.rP)(n.current) })) : (r.currentNode = n.current, (t = 'rtl' === u ? r.firstChild() : er(r)) && ((0, H.ex)(t), (0, B.Gt)(t, { containingElement: (0, B.rP)(n.current) })));
                        }
                        break;
                    }
                case 'ArrowRight': {
                        let t = 'rtl' === u ? r.previousNode() : r.nextNode();
                        if ('child' === o && t === n.current && (t = null), t)
                            e.preventDefault(), e.stopPropagation(), (0, H.ex)(t), (0, B.Gt)(t, { containingElement: (0, B.rP)(n.current) });
                        else {
                            if (c.getKeyRightOf(i.key) !== i.key)
                                break;
                            e.preventDefault(), e.stopPropagation(), 'cell' === o && 'ltr' === u ? ((0, H.ex)(n.current), (0, B.Gt)(n.current, { containingElement: (0, B.rP)(n.current) })) : (r.currentNode = n.current, (t = 'rtl' === u ? er(r) : r.firstChild()) && ((0, H.ex)(t), (0, B.Gt)(t, { containingElement: (0, B.rP)(n.current) })));
                        }
                        break;
                    }
                case 'ArrowUp':
                case 'ArrowDown':
                    !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
                }
            },
            onFocus: e => {
                if (_.current = i.key, e.target !== n.current) {
                    !(0, j.E)() && t.selectionManager.setFocusedKey(i.key);
                    return;
                }
                requestAnimationFrame(() => {
                    'child' === o && document.activeElement === n.current && E();
                });
            }
        });
    return a && (p['aria-colindex'] = (null !== (r = i.colIndex) && void 0 !== r ? r : i.index) + 1), s && null != p.tabIndex && null == p.onPointerDown && (p.onPointerDown = e => {
        let t = e.currentTarget, n = t.getAttribute('tabindex');
        t.removeAttribute('tabindex'), requestAnimationFrame(() => {
            t.setAttribute('tabindex', n);
        });
    }), {
        gridCellProps: p,
        isPressed: h
    };
}
function er(e) {
    let t, n;
    do
        (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
function ei(e, t) {
    let {key: n} = e, r = t.selectionManager, i = (0, B.Me)(), a = !t.selectionManager.canSelectItem(n), o = t.selectionManager.isSelected(n);
    return {
        checkboxProps: {
            id: i,
            'aria-label': (0, V.qb)(W(q), '@react-aria/grid').format('select'),
            isSelected: o,
            isDisabled: a,
            onChange: () => r.select(n)
        }
    };
}
q = {
    'ar-AE': r.Z,
    'bg-BG': i.Z,
    'cs-CZ': a.Z,
    'da-DK': o.Z,
    'de-DE': s.Z,
    'el-GR': l.Z,
    'en-US': u.Z,
    'es-ES': c.Z,
    'et-EE': d.Z,
    'fi-FI': _.Z,
    'fr-FR': E.Z,
    'he-IL': f.Z,
    'hr-HR': h.Z,
    'hu-HU': p.Z,
    'it-IT': m.Z,
    'ja-JP': I.Z,
    'ko-KR': T.Z,
    'lt-LT': g.Z,
    'lv-LV': S.Z,
    'nb-NO': A.Z,
    'nl-NL': N.Z,
    'pl-PL': v.Z,
    'pt-BR': O.Z,
    'pt-PT': R.Z,
    'ro-RO': C.Z,
    'ru-RU': y.Z,
    'sk-SK': D.Z,
    'sl-SI': L.Z,
    'sr-SP': b.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
