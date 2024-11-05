n.d(t, {
    hp: function () {
        return d;
    },
    xD: function () {
        return u;
    }
});
var r = n(661763),
    i = n(766203),
    a = n(192379),
    s = n(649859);
let o = new WeakMap();
function l(e, t, n) {
    'string' == typeof t && (t = t.replace(/\s+/g, ''));
    let r = o.get(e);
    return `${r}-${n}-${t}`;
}
function u(e, t, n) {
    var a;
    let { key: s, isDisabled: o, shouldSelectOnPressUp: u } = e,
        { selectionManager: c, selectedKey: d } = t,
        f = s === d,
        _ = o || t.isDisabled || t.disabledKeys.has(s),
        { itemProps: h, isPressed: p } = (0, i.Cs)({
            selectionManager: c,
            key: s,
            ref: n,
            isDisabled: _,
            shouldSelectOnPressUp: u,
            linkBehavior: 'selection'
        }),
        m = l(t, s, 'tab'),
        g = l(t, s, 'tabpanel'),
        { tabIndex: E } = h,
        v = t.collection.getItem(s),
        I = (0, r.zL)(null == v ? void 0 : v.props, {
            isLink: !!(null == v ? void 0 : null === (a = v.props) || void 0 === a ? void 0 : a.href),
            labelable: !0
        });
    return (
        delete I.id,
        {
            tabProps: (0, r.dG)(I, h, {
                id: m,
                'aria-selected': f,
                'aria-disabled': _ || void 0,
                'aria-controls': f ? g : void 0,
                tabIndex: _ ? void 0 : E,
                role: 'tab'
            }),
            isSelected: f,
            isDisabled: _,
            isPressed: p
        }
    );
}
class c {
    getKeyLeftOf(e) {
        return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
    }
    getKeyRightOf(e) {
        return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return this.getPreviousKey(e);
    }
    getKeyBelow(e) {
        return this.getNextKey(e);
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        return null != e && this.disabledKeys.has(e) && (e = this.getNextKey(e)), e;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        return null != e && this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e;
    }
    getNextKey(e) {
        do null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey());
        while (this.disabledKeys.has(e));
        return e;
    }
    getPreviousKey(e) {
        do null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey());
        while (this.disabledKeys.has(e));
        return e;
    }
    constructor(e, t, n, r = new Set()) {
        (this.collection = e), (this.flipDirection = 'rtl' === t && 'horizontal' === n), (this.disabledKeys = r);
    }
}
function d(e, t, n) {
    let { orientation: l = 'horizontal', keyboardActivation: u = 'automatic' } = e,
        { collection: d, selectionManager: f, disabledKeys: _ } = t,
        { direction: h } = (0, s.bU)(),
        p = (0, a.useMemo)(() => new c(d, h, l, _), [d, _, l, h]),
        { collectionProps: m } = (0, i.gq)({
            ref: n,
            selectionManager: f,
            keyboardDelegate: p,
            selectOnFocus: 'automatic' === u,
            disallowEmptySelection: !0,
            scrollRef: n,
            linkBehavior: 'selection'
        }),
        g = (0, r.Me)();
    o.set(t, g);
    let E = (0, r.bE)({
        ...e,
        id: g
    });
    return {
        tabListProps: {
            ...(0, r.dG)(m, E),
            role: 'tablist',
            'aria-orientation': l,
            tabIndex: void 0
        }
    };
}
