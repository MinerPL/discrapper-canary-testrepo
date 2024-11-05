n.d(t, {
    Fv: function () {
        return d;
    },
    Oj: function () {
        return l;
    },
    TV: function () {
        return f;
    },
    co: function () {
        return c;
    },
    x3: function () {
        return u;
    }
});
var r = n(661763),
    i = n(921336),
    a = n(523603),
    s = n(766203),
    o = n(989103);
let l = new WeakMap();
function u(e, t) {
    var n;
    let r = l.get(e);
    if (!r) throw Error('Unknown list');
    return `${r.id}-option-${'string' == typeof (n = t) ? n.replace(/\s*/g, '') : '' + n}`;
}
function c(e, t, n) {
    let o = (0, r.zL)(e, { labelable: !0 }),
        u = e.selectionBehavior || 'toggle',
        c = e.linkBehavior || ('replace' === u ? 'action' : 'override');
    'toggle' === u && 'action' === c && (c = 'override');
    let { listProps: d } = (0, s._t)({
            ...e,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            linkBehavior: c
        }),
        { focusWithinProps: f } = (0, i.L_)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }),
        _ = (0, r.Me)(e.id);
    l.set(t, {
        id: _,
        shouldUseVirtualFocus: e.shouldUseVirtualFocus,
        shouldSelectOnPressUp: e.shouldSelectOnPressUp,
        shouldFocusOnHover: e.shouldFocusOnHover,
        isVirtualized: e.isVirtualized,
        onAction: e.onAction,
        linkBehavior: c
    });
    let { labelProps: h, fieldProps: p } = (0, a.N)({
        ...e,
        id: _,
        labelElementType: 'span'
    });
    return {
        labelProps: h,
        listBoxProps: (0, r.dG)(o, f, 'multiple' === t.selectionManager.selectionMode ? { 'aria-multiselectable': 'true' } : {}, {
            role: 'listbox',
            ...(0, r.dG)(p, d)
        })
    };
}
function d(e, t, n) {
    var a, c, d, f, _, h, p;
    let { key: m } = e,
        g = l.get(t),
        E = null !== (c = e.isDisabled) && void 0 !== c ? c : t.disabledKeys.has(m),
        v = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(m),
        I = null !== (f = e.shouldSelectOnPressUp) && void 0 !== f ? f : null == g ? void 0 : g.shouldSelectOnPressUp,
        S = null !== (_ = e.shouldFocusOnHover) && void 0 !== _ ? _ : null == g ? void 0 : g.shouldFocusOnHover,
        T = null !== (h = e.shouldUseVirtualFocus) && void 0 !== h ? h : null == g ? void 0 : g.shouldUseVirtualFocus,
        b = null !== (p = e.isVirtualized) && void 0 !== p ? p : null == g ? void 0 : g.isVirtualized,
        y = (0, r.mp)(),
        A = (0, r.mp)(),
        N = {
            role: 'option',
            'aria-disabled': E || void 0,
            'aria-selected': 'none' !== t.selectionManager.selectionMode ? v : void 0
        };
    !((0, r.V5)() && (0, r.Pf)()) && ((N['aria-label'] = e['aria-label']), (N['aria-labelledby'] = y), (N['aria-describedby'] = A));
    let C = t.collection.getItem(m);
    if (b) {
        let e = Number(null == C ? void 0 : C.index);
        (N['aria-posinset'] = Number.isNaN(e) ? void 0 : e + 1), (N['aria-setsize'] = (0, o.is)(t.collection));
    }
    let {
            itemProps: R,
            isPressed: O,
            isFocused: D,
            hasAction: L,
            allowsSelection: x
        } = (0, s.Cs)({
            selectionManager: t.selectionManager,
            key: m,
            ref: n,
            shouldSelectOnPressUp: I,
            allowsDifferentPressOrigin: I && S,
            isVirtualized: b,
            shouldUseVirtualFocus: T,
            isDisabled: E,
            onAction: (null == g ? void 0 : g.onAction)
                ? () => {
                      var e;
                      return null == g ? void 0 : null === (e = g.onAction) || void 0 === e ? void 0 : e.call(g, m);
                  }
                : void 0,
            linkBehavior: null == g ? void 0 : g.linkBehavior
        }),
        { hoverProps: w } = (0, i.XI)({
            isDisabled: E || !S,
            onHoverStart() {
                !(0, i.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(m));
            }
        }),
        M = (0, r.zL)(null == C ? void 0 : C.props, { isLink: !!(null == C ? void 0 : null === (a = C.props) || void 0 === a ? void 0 : a.href) });
    return (
        delete M.id,
        {
            optionProps: {
                ...N,
                ...(0, r.dG)(M, R, w),
                id: u(t, m)
            },
            labelProps: { id: y },
            descriptionProps: { id: A },
            isFocused: D,
            isFocusVisible: D && (0, i.E)(),
            isSelected: v,
            isDisabled: E,
            isPressed: O,
            allowsSelection: x,
            hasAction: L
        }
    );
}
function f(e) {
    let { heading: t, 'aria-label': n } = e,
        i = (0, r.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: t
            ? {
                  id: i,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': n,
            'aria-labelledby': t ? i : void 0
        }
    };
}
