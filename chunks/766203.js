n.d(t, {
    Cs: function () {
        return _;
    },
    _t: function () {
        return g;
    },
    dp: function () {
        return m;
    },
    gq: function () {
        return f;
    },
    ip: function () {
        return d;
    }
});
var r = n(995295),
    i = n(192379),
    a = n(662845),
    s = n(661763),
    o = n(921336),
    l = n(649859);
function u(e) {
    return (0, s.ad)() ? e.altKey : e.ctrlKey;
}
function c(e) {
    return (0, s.V5)() ? e.metaKey : e.ctrlKey;
}
function d(e) {
    let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e,
        a = (0, i.useRef)({
            search: '',
            timeout: null
        }).current;
    return {
        typeSelectProps: {
            onKeyDownCapture: t.getKeyForSearch
                ? (e) => {
                      let i = (function (e) {
                          return 1 !== e.length && /^[A-Z]/i.test(e) ? '' : e;
                      })(e.key);
                      if (!i || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
                      ' ' === i && a.search.trim().length > 0 && (e.preventDefault(), !('continuePropagation' in e) && e.stopPropagation()), (a.search += i);
                      let s = t.getKeyForSearch(a.search, n.focusedKey);
                      null == s && (s = t.getKeyForSearch(a.search)),
                          null != s && (n.setFocusedKey(s), r && r(s)),
                          clearTimeout(a.timeout),
                          (a.timeout = setTimeout(() => {
                              a.search = '';
                          }, 1000));
                  }
                : null
        }
    };
}
function f(e) {
    let t,
        { selectionManager: n, keyboardDelegate: f, ref: _, autoFocus: h = !1, shouldFocusWrap: p = !1, disallowEmptySelection: m = !1, disallowSelectAll: g = !1, selectOnFocus: E = 'replace' === n.selectionBehavior, disallowTypeAhead: v = !1, shouldUseVirtualFocus: I, allowsTabNavigation: S = !1, isVirtualized: T, scrollRef: b = _, linkBehavior: y = 'action' } = e,
        { direction: A } = (0, l.bU)(),
        N = (0, s.tv)(),
        C = (0, i.useRef)({
            top: 0,
            left: 0
        });
    (0, s.zX)(
        b,
        'scroll',
        T
            ? null
            : () => {
                  C.current = {
                      top: b.current.scrollTop,
                      left: b.current.scrollLeft
                  };
              }
    );
    let R = (0, i.useRef)(h);
    (0, i.useEffect)(() => {
        if (R.current) {
            let e = null;
            'first' === h && (e = f.getFirstKey()), 'last' === h && (e = f.getLastKey());
            let t = n.selectedKeys;
            if (t.size) {
                for (let r of t)
                    if (n.canSelectItem(r)) {
                        e = r;
                        break;
                    }
            }
            n.setFocused(!0), n.setFocusedKey(e), null == e && !I && (0, a.ex)(_.current);
        }
    }, []);
    let O = (0, i.useRef)(n.focusedKey);
    (0, i.useEffect)(() => {
        let e = (0, o.Jz)();
        if (n.isFocused && null != n.focusedKey && (null == b ? void 0 : b.current)) {
            let t = b.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
            t && ('keyboard' === e || R.current) && (!T && (0, s.zT)(b.current, t), (0, s.Gt)(t, { containingElement: _.current }));
        }
        n.isFocused && null == n.focusedKey && null != O.current && (0, a.ex)(_.current), (O.current = n.focusedKey), (R.current = !1);
    }, [T, b, n.focusedKey, n.isFocused, _]);
    let D = {
            onKeyDown: (e) => {
                var t, i, o, l, d, h, v, I;
                if ((e.altKey && 'Tab' === e.key && e.preventDefault(), !_.current.contains(e.target))) return;
                let T = (t, i) => {
                    if (null != t) {
                        if (n.isLink(t) && 'selection' === y && E && !u(e)) {
                            (0, r.flushSync)(() => {
                                n.setFocusedKey(t, i);
                            });
                            let a = b.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
                            N.open(a, e);
                            return;
                        }
                        n.setFocusedKey(t, i), (!n.isLink(t) || 'override' !== y) && (e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : E && !u(e) && n.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case 'ArrowDown':
                        if (f.getKeyBelow) {
                            e.preventDefault();
                            let r = null != n.focusedKey ? f.getKeyBelow(n.focusedKey) : null === (t = f.getFirstKey) || void 0 === t ? void 0 : t.call(f);
                            null == r && p && (r = null === (i = f.getFirstKey) || void 0 === i ? void 0 : i.call(f, n.focusedKey)), T(r);
                        }
                        break;
                    case 'ArrowUp':
                        if (f.getKeyAbove) {
                            e.preventDefault();
                            let t = null != n.focusedKey ? f.getKeyAbove(n.focusedKey) : null === (o = f.getLastKey) || void 0 === o ? void 0 : o.call(f);
                            null == t && p && (t = null === (l = f.getLastKey) || void 0 === l ? void 0 : l.call(f, n.focusedKey)), T(t);
                        }
                        break;
                    case 'ArrowLeft':
                        if (f.getKeyLeftOf) {
                            e.preventDefault();
                            let t = f.getKeyLeftOf(n.focusedKey);
                            null == t && p && (t = 'rtl' === A ? (null === (d = f.getFirstKey) || void 0 === d ? void 0 : d.call(f, n.focusedKey)) : null === (h = f.getLastKey) || void 0 === h ? void 0 : h.call(f, n.focusedKey)), T(t, 'rtl' === A ? 'first' : 'last');
                        }
                        break;
                    case 'ArrowRight':
                        if (f.getKeyRightOf) {
                            e.preventDefault();
                            let t = f.getKeyRightOf(n.focusedKey);
                            null == t && p && (t = 'rtl' === A ? (null === (v = f.getLastKey) || void 0 === v ? void 0 : v.call(f, n.focusedKey)) : null === (I = f.getFirstKey) || void 0 === I ? void 0 : I.call(f, n.focusedKey)), T(t, 'rtl' === A ? 'last' : 'first');
                        }
                        break;
                    case 'Home':
                        if (f.getFirstKey) {
                            e.preventDefault();
                            let t = f.getFirstKey(n.focusedKey, c(e));
                            n.setFocusedKey(t), c(e) && e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : E && n.replaceSelection(t);
                        }
                        break;
                    case 'End':
                        if (f.getLastKey) {
                            e.preventDefault();
                            let t = f.getLastKey(n.focusedKey, c(e));
                            n.setFocusedKey(t), c(e) && e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : E && n.replaceSelection(t);
                        }
                        break;
                    case 'PageDown':
                        f.getKeyPageBelow && (e.preventDefault(), T(f.getKeyPageBelow(n.focusedKey)));
                        break;
                    case 'PageUp':
                        f.getKeyPageAbove && (e.preventDefault(), T(f.getKeyPageAbove(n.focusedKey)));
                        break;
                    case 'a':
                        c(e) && 'multiple' === n.selectionMode && !0 !== g && (e.preventDefault(), n.selectAll());
                        break;
                    case 'Escape':
                        e.preventDefault(), !m && n.clearSelection();
                        break;
                    case 'Tab':
                        if (!S) {
                            if (e.shiftKey) _.current.focus();
                            else {
                                let e,
                                    t,
                                    n = (0, a.QL)(_.current, { tabbable: !0 });
                                do (t = n.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, s.Ao)(e);
                            }
                        }
                }
            },
            onFocus: (e) => {
                if (n.isFocused) {
                    !e.currentTarget.contains(e.target) && n.setFocused(!1);
                    return;
                }
                if (e.currentTarget.contains(e.target)) {
                    if ((n.setFocused(!0), null == n.focusedKey)) {
                        var t, r;
                        let i = (e) => {
                                null != e && (n.setFocusedKey(e), E && n.replaceSelection(e));
                            },
                            a = e.relatedTarget;
                        a && e.currentTarget.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING ? i(null !== (t = n.lastSelectedKey) && void 0 !== t ? t : f.getLastKey()) : i(null !== (r = n.firstSelectedKey) && void 0 !== r ? r : f.getFirstKey());
                    } else !T && ((b.current.scrollTop = C.current.top), (b.current.scrollLeft = C.current.left));
                    if (!T && null != n.focusedKey) {
                        let e = b.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
                        e && (!e.contains(document.activeElement) && (0, s.Ao)(e), 'keyboard' === (0, o.Jz)() && (0, s.Gt)(e, { containingElement: _.current }));
                    }
                }
            },
            onBlur: (e) => {
                !e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1);
            },
            onMouseDown(e) {
                b.current === e.target && e.preventDefault();
            }
        },
        { typeSelectProps: L } = d({
            keyboardDelegate: f,
            selectionManager: n
        });
    return (
        !v && (D = (0, s.dG)(L, D)),
        !I && (t = null == n.focusedKey ? 0 : -1),
        {
            collectionProps: {
                ...D,
                tabIndex: t
            }
        }
    );
}
function _(e) {
    let { selectionManager: t, key: n, ref: r, shouldSelectOnPressUp: l, shouldUseVirtualFocus: d, focus: f, isDisabled: _, onAction: m, allowsDifferentPressOrigin: g, linkBehavior: E = 'action' } = e,
        v = (0, s.tv)(),
        I = (e) => {
            if ('keyboard' === e.pointerType && u(e)) t.toggleSelection(n);
            else {
                if ('none' === t.selectionMode) return;
                if (t.isLink(n)) {
                    if ('selection' === E) {
                        v.open(r.current, e), t.setSelectedKeys(t.selectedKeys);
                        return;
                    }
                    if ('override' === E || 'none' === E) return;
                }
                'single' === t.selectionMode ? (t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n)) : e && e.shiftKey ? t.extendSelection(n) : 'toggle' === t.selectionBehavior || (e && (c(e) || 'touch' === e.pointerType || 'virtual' === e.pointerType)) ? t.toggleSelection(n) : t.replaceSelection(n);
            }
        };
    (0, i.useEffect)(() => {
        n === t.focusedKey && t.isFocused && !d && (f ? f() : document.activeElement !== r.current && (0, a.ex)(r.current));
    }, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, d]),
        (_ = _ || t.isDisabled(n));
    let S = {};
    d || _
        ? _ &&
          (S.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (S = {
              tabIndex: n === t.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === r.current && t.setFocusedKey(n);
              }
          });
    let T = t.isLink(n) && 'override' === E,
        b = t.isLink(n) && 'selection' !== E && 'none' !== E,
        y = !_ && t.canSelectItem(n) && !T,
        A = (m || b) && !_,
        N = A && ('replace' === t.selectionBehavior ? !y : !y || t.isEmpty),
        C = A && y && 'replace' === t.selectionBehavior,
        R = N || C,
        O = (0, i.useRef)(null),
        D = R && y,
        L = (0, i.useRef)(!1),
        x = (0, i.useRef)(!1),
        w = (e) => {
            m && m(), b && v.open(r.current, e);
        },
        M = {};
    l
        ? ((M.onPressStart = (e) => {
              (O.current = e.pointerType), (L.current = D), 'keyboard' === e.pointerType && (!R || p()) && I(e);
          }),
          g
              ? ((M.onPressUp = N
                    ? null
                    : (e) => {
                          'keyboard' !== e.pointerType && y && I(e);
                      }),
                (M.onPress = N ? w : null))
              : (M.onPress = (e) => {
                    N || (C && 'mouse' !== e.pointerType) ? ('keyboard' !== e.pointerType || !!h()) && w(e) : 'keyboard' !== e.pointerType && y && I(e);
                }))
        : ((M.onPressStart = (e) => {
              (O.current = e.pointerType), (L.current = D), (x.current = N), y && (('mouse' === e.pointerType && !N) || ('keyboard' === e.pointerType && (!A || p()))) && I(e);
          }),
          (M.onPress = (e) => {
              ('touch' === e.pointerType || 'pen' === e.pointerType || 'virtual' === e.pointerType || ('keyboard' === e.pointerType && R && h()) || ('mouse' === e.pointerType && x.current)) && (R ? w(e) : y && I(e));
          })),
        (S['data-key'] = n),
        (M.preventFocusOnPress = d);
    let { pressProps: P, isPressed: k } = (0, o.r7)(M),
        U = C
            ? (e) => {
                  'mouse' === O.current && (e.stopPropagation(), e.preventDefault(), w(e));
              }
            : void 0,
        { longPressProps: G } = (0, o.TA)({
            isDisabled: !D,
            onLongPress(e) {
                'touch' === e.pointerType && (I(e), t.setSelectionBehavior('toggle'));
            }
        }),
        B = t.isLink(n)
            ? (e) => {
                  !s.nG.isOpening && e.preventDefault();
              }
            : void 0;
    return {
        itemProps: (0, s.dG)(S, y || N ? P : {}, D ? G : {}, {
            onDoubleClick: U,
            onDragStartCapture: (e) => {
                'touch' === O.current && L.current && e.preventDefault();
            },
            onClick: B
        }),
        isPressed: k,
        isSelected: t.isSelected(n),
        isFocused: t.isFocused && t.focusedKey === n,
        isDisabled: _,
        allowsSelection: y,
        hasAction: R
    };
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === 'Enter';
}
function p() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === ' ' || (null == e ? void 0 : e.code) === 'Space';
}
class m {
    getNextKey(e) {
        for (e = this.collection.getKeyAfter(e); null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyAfter(e);
        }
        return null;
    }
    getPreviousKey(e) {
        for (e = this.collection.getKeyBefore(e); null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyBefore(e);
        }
        return null;
    }
    findKey(e, t, n) {
        let r = this.getItem(e);
        if (!r) return null;
        let i = r.getBoundingClientRect();
        do (e = t(e)), (r = this.getItem(e));
        while (r && n(i, r.getBoundingClientRect()));
        return e;
    }
    isSameRow(e, t) {
        return e.top === t.top || e.left !== t.left;
    }
    isSameColumn(e, t) {
        return e.left === t.left || e.top !== t.top;
    }
    getKeyBelow(e) {
        return 'grid' === this.layout && 'vertical' === this.orientation ? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow) : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return 'grid' === this.layout && 'vertical' === this.orientation ? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow) : this.getPreviousKey(e);
    }
    getNextColumn(e, t) {
        return t ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyRightOf(e) {
        if ('grid' === this.layout) return 'vertical' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : this.findKey(e, (e) => this.getNextColumn(e, 'rtl' === this.direction), this.isSameColumn);
        return 'horizontal' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : null;
    }
    getKeyLeftOf(e) {
        if ('grid' === this.layout) return 'vertical' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : this.findKey(e, (e) => this.getNextColumn(e, 'ltr' === this.direction), this.isSameColumn);
        return 'horizontal' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : null;
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        for (; null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyAfter(e);
        }
        return null;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        for (; null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyBefore(e);
        }
        return null;
    }
    getItem(e) {
        return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`);
    }
    getKeyPageAbove(e) {
        let t = this.ref.current,
            n = this.getItem(e);
        if (!n) return null;
        if (!(0, s.a9)(t)) return this.getFirstKey();
        let r = t.getBoundingClientRect(),
            i = n.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let a = r.x - t.scrollLeft,
                s = Math.max(0, i.x - a + i.width - r.width);
            for (; n && i.x - a > s; ) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        } else {
            let a = r.y - t.scrollTop,
                s = Math.max(0, i.y - a + i.height - r.height);
            for (; n && i.y - a > s; ) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        }
        return null != e ? e : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let t = this.ref.current,
            n = this.getItem(e);
        if (!n) return null;
        if (!(0, s.a9)(t)) return this.getLastKey();
        let r = t.getBoundingClientRect(),
            i = n.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let a = r.x - t.scrollLeft,
                s = Math.min(t.scrollWidth, i.x - a - i.width + r.width);
            for (; n && i.x - a < s; ) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        } else {
            let a = r.y - t.scrollTop,
                s = Math.min(t.scrollHeight, i.y - a - i.height + r.height);
            for (; n && i.y - a < s; ) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        }
        return null != e ? e : this.getLastKey();
    }
    getKeyForSearch(e, t) {
        if (!this.collator) return null;
        let n = this.collection,
            r = t || this.getFirstKey();
        for (; null != r; ) {
            let t = n.getItem(r),
                i = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(i, e)) return r;
            r = this.getKeyBelow(r);
        }
        return null;
    }
    constructor(...e) {
        if (1 === e.length) {
            let t = e[0];
            (this.collection = t.collection), (this.ref = t.ref), (this.collator = t.collator), (this.disabledKeys = t.disabledKeys || new Set()), (this.orientation = t.orientation), (this.direction = t.direction), (this.layout = t.layout || 'stack');
        } else (this.collection = e[0]), (this.disabledKeys = e[1]), (this.ref = e[2]), (this.collator = e[3]), (this.layout = 'stack'), (this.orientation = 'vertical');
        'stack' === this.layout && 'vertical' === this.orientation && ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
    }
}
function g(e) {
    let { selectionManager: t, collection: n, disabledKeys: r, ref: a, keyboardDelegate: s } = e,
        o = (0, l.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        u = t.disabledBehavior,
        c = (0, i.useMemo)(() => s || new m(n, 'selection' === u ? new Set() : r, a, o), [s, n, r, a, o, u]),
        { collectionProps: d } = f({
            ...e,
            ref: a,
            selectionManager: t,
            keyboardDelegate: c
        });
    return { listProps: d };
}
