n.d(t, {
    RM: function () {
        return tK;
    },
    X2: function () {
        return tz;
    },
    bL: function () {
        return tq;
    },
    iA: function () {
        return tZ;
    },
    sg: function () {
        return tW;
    },
    xD: function () {
        return tj;
    },
    zx: function () {
        return ew;
    }
});
var r = n(230012),
    i = n(75520),
    a = n(612001),
    s = n(706682),
    o = n(182823),
    l = n(283004),
    u = n(473873),
    c = n(616073),
    d = n(219560),
    _ = n(297821),
    E = n(448253),
    f = n(823867),
    h = n(753264),
    p = n(148836),
    m = n(795250),
    I = n(975994),
    T = n(608773),
    g = n(358049),
    S = n(912059),
    A = n(370225),
    N = n(470210),
    v = n(930423),
    O = n(652222),
    R = n(247674),
    C = n(917177),
    y = n(158005),
    D = n(159257),
    L = n(363964),
    b = n(681772),
    M = n(711792),
    P = n(640900),
    U = n(242550),
    w = n(414948),
    x = n(470079),
    G = n(430370),
    k = n(699581),
    B = n(31178),
    F = n(903646),
    V = n(33412),
    H = n(988501),
    Z = n(897145),
    Y = n(437296),
    j = n(850559),
    W = n(687379),
    K = n(984102),
    z = n(552145),
    q = n(677263),
    Q = n(423902),
    X = n(28693),
    $ = n(483729),
    J = n(235574),
    ee = n(772566),
    et = n(343015);
class en {
    get childNodes() {
        throw Error('childNodes is not supported');
    }
    clone() {
        let e = new en(this.type, this.key);
        return (e.value = this.value), (e.level = this.level), (e.hasChildNodes = this.hasChildNodes), (e.rendered = this.rendered), (e.textValue = this.textValue), (e['aria-label'] = this['aria-label']), (e.index = this.index), (e.parentKey = this.parentKey), (e.prevKey = this.prevKey), (e.nextKey = this.nextKey), (e.firstChildKey = this.firstChildKey), (e.lastChildKey = this.lastChildKey), (e.props = this.props), e;
    }
    constructor(e, t) {
        (0, G._)(this, 'value', null), (0, G._)(this, 'level', 0), (0, G._)(this, 'hasChildNodes', !1), (0, G._)(this, 'rendered', null), (0, G._)(this, 'textValue', ''), (0, G._)(this, 'aria-label', void 0), (0, G._)(this, 'index', 0), (0, G._)(this, 'parentKey', null), (0, G._)(this, 'prevKey', null), (0, G._)(this, 'nextKey', null), (0, G._)(this, 'firstChildKey', null), (0, G._)(this, 'lastChildKey', null), (0, G._)(this, 'props', {}), (this.type = e), (this.key = t);
    }
}
let er = Symbol.iterator;
class ei {
    *[er]() {
        let e = this.firstChild;
        for (; e; ) yield e, (e = e.nextSibling);
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(e) {
        (this._firstChild = e), this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(e) {
        (this._lastChild = e), this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(e) {
        (this._previousSibling = e), this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(e) {
        (this._nextSibling = e), this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(e) {
        (this._parentNode = e), this.ownerDocument.markDirty(this);
    }
    appendChild(e) {
        this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? ((this.lastChild.nextSibling = e), (e.index = this.lastChild.index + 1), (e.previousSibling = this.lastChild)) : ((e.previousSibling = null), (e.index = 0)), (e.parentNode = this), (e.nextSibling = null), (this.lastChild = e), this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    insertBefore(e, t) {
        if (null == t) return this.appendChild(e);
        this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), (e.nextSibling = t), (e.previousSibling = t.previousSibling), (e.index = t.index), this.firstChild === t ? (this.firstChild = e) : t.previousSibling && (t.previousSibling.nextSibling = e), (t.previousSibling = e), (e.parentNode = t.parentNode);
        let n = t;
        for (; n; ) n.index++, (n = n.nextSibling);
        e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    removeChild(e) {
        if (e.parentNode !== this) return;
        this.ownerDocument.startTransaction();
        let t = e.nextSibling;
        for (; t; ) t.index--, (t = t.nextSibling);
        e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), (e.parentNode = null), (e.nextSibling = null), (e.previousSibling = null), (e.index = 0), this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    constructor(e) {
        (0, G._)(this, '_firstChild', null), (0, G._)(this, '_lastChild', null), (0, G._)(this, '_previousSibling', null), (0, G._)(this, '_nextSibling', null), (0, G._)(this, '_parentNode', null), (this.ownerDocument = e);
    }
}
let ea = 0;
class es extends ei {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        return this.parentNode instanceof es ? this.parentNode.level + ('item' === this.node.type ? 1 : 0) : 0;
    }
    updateNode() {
        var e, t, n, r, i, a, s, o;
        let l = this.ownerDocument.getMutableNode(this);
        (l.index = this.index), (l.level = this.level), (l.parentKey = this.parentNode instanceof es ? this.parentNode.node.key : null), (l.prevKey = null !== (i = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== i ? i : null), (l.nextKey = null !== (a = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== a ? a : null), (l.hasChildNodes = !!this.firstChild), (l.firstChildKey = null !== (s = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== s ? s : null), (l.lastChildKey = null !== (o = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== o ? o : null);
    }
    setProps(e, t, n) {
        let r = this.ownerDocument.getMutableNode(this),
            { value: i, textValue: a, id: s, ...o } = e;
        if (((o.ref = t), (r.props = o), (r.rendered = n), (r.value = i), (r.textValue = a || ('string' == typeof n ? n : '') || e['aria-label'] || ''), null != s && s !== r.key)) {
            if (this.hasSetProps) throw Error('Cannot change the id of an item');
            r.key = s;
        }
        !this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), (this.hasSetProps = !0)), this.ownerDocument.queueUpdate();
    }
    get style() {
        return {};
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(e, t) {
        super(t), (0, G._)(this, 'nodeType', 8), (0, G._)(this, '_index', 0), (0, G._)(this, 'hasSetProps', !1), (this.node = new en(e, `react-aria-${++ea}`)), this.ownerDocument.startTransaction();
    }
}
let eo = Symbol.iterator;
class el {
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[eo]() {
        let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
        for (; e; ) yield e, (e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0);
    }
    getChildren(e) {
        let t = this.keyMap;
        return {
            *[Symbol.iterator]() {
                let n = t.get(e),
                    r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
                for (; r; ) yield r, (r = null != r.nextKey ? t.get(r.nextKey) : void 0);
            }
        };
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if (null != t.prevKey) {
            var n;
            for (t = this.keyMap.get(t.prevKey); t && 'item' !== t.type && null != t.lastChildKey; ) t = this.keyMap.get(t.lastChildKey);
            return null !== (n = null == t ? void 0 : t.key) && void 0 !== n ? n : null;
        }
        return t.parentKey;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if ('item' !== t.type && null != t.firstChildKey) return t.firstChildKey;
        for (; t; ) {
            if (null != t.nextKey) return t.nextKey;
            if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
            else break;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        var e;
        let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
        for (; (null == t ? void 0 : t.lastChildKey) != null; ) t = this.keyMap.get(t.lastChildKey);
        return null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null;
    }
    getItem(e) {
        var t;
        return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null;
    }
    at() {
        throw Error('Not implemented');
    }
    clone() {
        let e = new this.constructor();
        return (e.keyMap = new Map(this.keyMap)), (e.firstKey = this.firstKey), (e.lastKey = this.lastKey), e;
    }
    addNode(e) {
        if (this.frozen) throw Error('Cannot add a node to a frozen collection');
        this.keyMap.set(e.key, e);
    }
    removeNode(e) {
        if (this.frozen) throw Error('Cannot remove a node to a frozen collection');
        this.keyMap.delete(e);
    }
    commit(e, t) {
        if (this.frozen) throw Error('Cannot commit a frozen collection');
        (this.firstKey = e), (this.lastKey = t), (this.frozen = !0);
    }
    constructor() {
        (0, G._)(this, 'keyMap', new Map()), (0, G._)(this, 'firstKey', null), (0, G._)(this, 'lastKey', null), (0, G._)(this, 'frozen', !1);
    }
}
class eu extends ei {
    createElement(e) {
        return new es(e, this);
    }
    getMutableNode(e) {
        let t = e.node;
        return !this.mutatedNodes.has(e) && ((t = e.node.clone()), this.mutatedNodes.add(e), (e.node = t)), this.markDirty(e), t;
    }
    getMutableCollection() {
        return !this.collectionMutated && ((this.collection = this.collection.clone()), (this.collectionMutated = !0)), this.collection;
    }
    markDirty(e) {
        this.dirtyNodes.add(e);
    }
    startTransaction() {
        this.transactionCount++;
    }
    endTransaction() {
        this.transactionCount--;
    }
    addNode(e) {
        let t = this.getMutableCollection();
        if (!t.getItem(e.node.key)) for (let n of (t.addNode(e.node), e)) this.addNode(n);
        this.markDirty(e);
    }
    removeNode(e) {
        for (let t of e) (t.parentNode = null), this.removeNode(t);
        this.getMutableCollection().removeNode(e.node.key), this.markDirty(e);
    }
    getCollection() {
        if (this.transactionCount > 0) return this.collection;
        for (let e of this.dirtyNodes) e instanceof es && e.parentNode && e.updateNode();
        if ((this.dirtyNodes.clear(), this.mutatedNodes.size)) {
            var e, t, n, r;
            let i = this.getMutableCollection();
            for (let e of this.mutatedNodes) e.parentNode && i.addNode(e.node);
            i.commit(null !== (n = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== n ? n : null, null !== (r = null === (t = this.lastChild) || void 0 === t ? void 0 : t.node.key) && void 0 !== r ? r : null), this.mutatedNodes.clear();
        }
        return (this.collectionMutated = !1), this.collection;
    }
    queueUpdate() {
        if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0)) for (let e of this.subscriptions) e();
    }
    subscribe(e) {
        return this.subscriptions.add(e), () => this.subscriptions.delete(e);
    }
    constructor(e) {
        super(null), (0, G._)(this, 'nodeType', 11), (0, G._)(this, 'ownerDocument', this), (0, G._)(this, 'dirtyNodes', new Set()), (0, G._)(this, 'mutatedNodes', new Set()), (0, G._)(this, 'subscriptions', new Set()), (0, G._)(this, 'transactionCount', 0), (this.collection = e), (this.collectionMutated = !0);
    }
}
function ec(e) {
    let { children: t, items: n, idScope: r, addIdAndValue: i } = e,
        a = (0, x.useMemo)(() => new WeakMap(), []);
    return (0, x.useMemo)(() => {
        if (!n || 'function' != typeof t) return t;
        {
            let o = [];
            for (let l of n) {
                let n = a.get(l);
                if (!n) {
                    if (null == (n = t(l)).key) {
                        var e, s;
                        let t = null !== (s = null !== (e = n.props.id) && void 0 !== e ? e : l.key) && void 0 !== s ? s : l.id;
                        if (null == t) throw Error('Could not determine key for item');
                        r && (t = r + ':' + t),
                            (n = (0, x.cloneElement)(
                                n,
                                i
                                    ? {
                                          key: t,
                                          id: t,
                                          value: l
                                      }
                                    : { key: t }
                            ));
                    }
                    a.set(l, n);
                }
                o.push(n);
            }
            return o;
        }
    }, [t, n, a, r, i]);
}
function ed(e) {
    return ec({
        ...e,
        addIdAndValue: !0
    });
}
let e_ = (0, x.createContext)(!1);
function eE(e, t) {
    let n = (0, x.useMemo)(() => new eu(t || new el()), [t]),
        i = (0, x.useCallback)((e) => n.subscribe(e), [n]),
        a = (0, x.useCallback)(() => n.getCollection(), [n]),
        s = (0, B.useSyncExternalStore)(i, a, a),
        o = ed(e),
        l = (0, x.useMemo)(() => x.createElement(e_.Provider, { value: !0 }, o), [o]);
    return {
        portal: (0, r.Av)() ? null : (0, k.createPortal)(l, n),
        collection: s
    };
}
function ef(e, t, n) {
    let r = (0, x.useContext)(e_);
    return ((n = eh(t, n, t.children)), r) ? x.createElement(e, { ref: n }) : null;
}
function eh(e, t, n) {
    return (0, x.useCallback)(
        (r) => {
            null == r || r.setProps(e, t, n);
        },
        [e, t, n]
    );
}
let ep = (0, x.forwardRef)(function (e, t) {
        return x.createElement('item', { ref: eh(e, t, e.children) });
    }),
    em = (0, x.createContext)(null),
    eI = (0, x.createContext)(null),
    eT = Symbol('callback'),
    eg = Symbol('default');
function eS({ values: e, children: t }) {
    for (let [n, r] of e) t = x.createElement(n.Provider, { value: r }, t);
    return t;
}
function eA(e) {
    let { className: t, style: n, children: r, defaultClassName: i, defaultChildren: a, values: s } = e;
    return (0, x.useMemo)(() => {
        let e, o, l;
        return (
            (e = 'function' == typeof t ? t(s) : t),
            (o = 'function' == typeof n ? n(s) : n),
            {
                className: null != e ? e : i,
                style: o,
                children: (l = 'function' == typeof r ? r(s) : null == r ? a : r)
            }
        );
    }, [t, n, r, i, a, s]);
}
function eN(e, t, n) {
    let r = (0, x.useContext)(n) || {};
    if ('slots' in r && r.slots) {
        if (!e.slot && !r.slots[eg]) throw Error('A slot prop is required');
        let t = e.slot || eg;
        if (!r.slots[t]) throw Error(`Invalid slot "${e.slot}". Valid slot names are ` + new Intl.ListFormat().format(Object.keys(r.slots).map((e) => `"${e}"`)) + '.');
        r = r.slots[t];
    }
    let { ref: i, [eT]: a, ...s } = r,
        o = (0, w.B3)((0, w.lq)(t, i)),
        l = (0, w.dG)(s, e);
    return (
        (0, x.useEffect)(() => {
            a && a(e);
        }, [a, e]),
        [l, o]
    );
}
function ev() {
    let [e, t] = (0, x.useState)(!0),
        n = (0, x.useRef)(!1),
        r = (0, x.useCallback)((e) => {
            (n.current = !0), t(!!e);
        }, []);
    return (
        (0, w.bt)(() => {
            !n.current && t(!1);
        }, []),
        [r, e]
    );
}
function eO(e, t = !0) {
    let [n, r] = (0, x.useState)(!0);
    return (
        eC(
            e,
            n && t,
            (0, x.useCallback)(() => r(!1), [])
        ),
        n && t
    );
}
function eR(e, t) {
    let [n, r] = (0, x.useState)(!1),
        i = (0, x.useRef)('idle');
    return (
        !t && e.current && 'idle' === i.current && ((n = !0), r(!0), (i.current = 'exiting')),
        !e.current && 'exited' === i.current && (i.current = 'idle'),
        eC(
            e,
            n,
            (0, x.useCallback)(() => {
                (i.current = 'exited'), r(!1);
            }, [])
        ),
        n
    );
}
function eC(e, t, n) {
    let r = (0, x.useRef)(null);
    t && e.current && (r.current = window.getComputedStyle(e.current).animation),
        (0, w.bt)(() => {
            if (t && e.current) {
                let t = window.getComputedStyle(e.current);
                if ('none' !== t.animationName && t.animation !== r.current) {
                    let t = (i) => {
                            i.target === e.current &&
                                (r.removeEventListener('animationend', t),
                                k.flushSync(() => {
                                    n();
                                }));
                        },
                        r = e.current;
                    return (
                        r.addEventListener('animationend', t),
                        () => {
                            r.removeEventListener('animationend', t);
                        }
                    );
                }
                n();
            }
        }, [e, t, n]);
}
let ey = (0, x.createContext)(!1),
    eD = (0, x.createContext)({}),
    eL = (0, x.createContext)(null),
    eb = (0, x.createContext)(null);
function eM({ node: e, isCurrent: t, isDisabled: n }) {
    var r;
    return x.createElement(
        'li',
        {
            ...(0, w.zL)(e.props),
            style: e.props.style,
            className: null !== (r = e.props.className) && void 0 !== r ? r : 'react-aria-Item'
        },
        x.createElement(
            eS,
            {
                values: [
                    [
                        eL,
                        {
                            'aria-current': t ? 'page' : null,
                            isDisabled: n || t
                        }
                    ],
                    [eD, t ? { 'aria-current': 'page' } : null]
                ]
            },
            e.rendered
        )
    );
}
let eP = new Set(['form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'value']),
    eU = (0, x.createContext)({}),
    ew = (0, x.forwardRef)(function (e, t) {
        [e, t] = eN(e, t, eU);
        let n = e,
            { buttonProps: r, isPressed: i } = (0, u.U)(e, t),
            { focusProps: l, isFocused: c, isFocusVisible: d } = (0, s.Fx)(e),
            { hoverProps: _, isHovered: E } = (0, a.XI)(e),
            f = eA({
                ...e,
                values: {
                    isHovered: E,
                    isPressed: i,
                    isFocused: c,
                    isFocusVisible: d,
                    isDisabled: e.isDisabled || !1
                },
                defaultClassName: 'react-aria-Button'
            });
        return x.createElement('button', {
            ...(0, w.zL)(e, { propNames: eP }),
            ...(0, o.dG)(r, l, _),
            ...f,
            ref: t,
            slot: e.slot,
            'data-pressed': n.isPressed || i || void 0,
            'data-hovered': E || void 0,
            'data-focus-visible': d || void 0
        });
    }),
    ex = (0, x.createContext)({}),
    eG = (0, x.createContext)({}),
    ek = (0, x.createContext)({}),
    eB = (0, x.createContext)(null),
    eF = (0, x.createContext)(null),
    eV = (0, x.forwardRef)(function (e, t) {
        let { children: n, style: r, className: i } = e,
            { headerProps: a, weekDays: s } = (0, x.useContext)(eF);
        return x.createElement(
            'thead',
            {
                ...(0, w.zL)(e),
                ...a,
                ref: t,
                style: r,
                className: i || 'react-aria-CalendarGridHeader'
            },
            x.createElement(
                'tr',
                null,
                s.map((e, t) => x.cloneElement(n(e), { key: t }))
            )
        );
    }),
    eH = (0, x.forwardRef)(function (e, t) {
        let { children: n, style: r, className: i } = e;
        return x.createElement(
            'th',
            {
                ...(0, w.zL)(e),
                ref: t,
                style: r,
                className: i || 'react-aria-CalendarHeaderCell'
            },
            n
        );
    }),
    eZ = (0, x.forwardRef)(function (e, t) {
        let { children: n, style: r, className: i } = e,
            a = (0, x.useContext)(eB),
            { startDate: s } = (0, x.useContext)(eF),
            { locale: o } = (0, c.bU)(),
            l = (0, F.Rn)(s, o);
        return x.createElement(
            'tbody',
            {
                ...(0, w.zL)(e),
                ref: t,
                style: r,
                className: i || 'react-aria-CalendarGridBody'
            },
            [...Array(l).keys()].map((e) =>
                x.createElement(
                    'tr',
                    { key: e },
                    a.getDatesInWeek(e, s).map((e, t) => (e ? x.cloneElement(n(e), { key: t }) : x.createElement('td', { key: t })))
                )
            )
        );
    }),
    eY = (0, x.createContext)({}),
    ej = (0, x.createContext)(null),
    eW = (0, x.createContext)(null),
    eK = (0, x.createContext)(null),
    ez = (0, x.createContext)({}),
    eq = (0, x.createContext)(null),
    eQ = (0, x.forwardRef)(function (e, t) {
        let { render: n } = (0, x.useContext)(eq);
        return x.createElement(x.Fragment, null, n(e, t));
    }),
    eX = (0, x.createContext)({}),
    e$ = (0, x.forwardRef)(function (e, t) {
        [e, t] = eN(e, t, eX);
        let n = ef('header', e, t);
        return n
            ? n
            : x.createElement(
                  'header',
                  {
                      className: 'react-aria-Header',
                      ...e,
                      ref: t
                  },
                  e.children
              );
    }),
    eJ = (0, x.createContext)({}),
    e0 = (0, x.forwardRef)(function (e, t) {
        [e, t] = eN(e, t, eJ);
        let { elementType: n, orientation: r, style: i, className: a } = e,
            s = n || 'hr';
        'hr' === s && 'vertical' === r && (s = 'div');
        let { separatorProps: o } = (0, f.z)({
                elementType: n,
                orientation: r
            }),
            l = ef('separator', e, t);
        return l
            ? l
            : x.createElement(s, {
                  ...(0, w.zL)(e),
                  ...o,
                  style: i,
                  className: null != a ? a : 'react-aria-Separator',
                  ref: t,
                  slot: e.slot
              });
    }),
    e1 = (0, x.createContext)(null),
    e2 = (0, x.createContext)(null);
function e3({ props: e, listBoxRef: t }) {
    let { portal: n, collection: r } = eE(e);
    e = {
        ...e,
        collection: r,
        children: null,
        items: null
    };
    let i = (0, Y.n_)(e);
    return x.createElement(
        x.Fragment,
        null,
        n,
        x.createElement(e4, {
            state: i,
            props: e,
            listBoxRef: t
        })
    );
}
function e4({ state: e, props: t, listBoxRef: n }) {
    let r,
        i,
        a,
        { dragAndDropHooks: l } = t,
        { collection: u, selectionManager: c } = e,
        d = !!(null == l ? void 0 : l.useDraggableCollectionState),
        _ = !!(null == l ? void 0 : l.useDroppableCollectionState),
        { listBoxProps: E } = (0, h.co)(
            {
                ...t,
                shouldSelectOnPressUp: d || t.shouldSelectOnPressUp
            },
            e,
            n
        ),
        f = ec({
            items: u,
            children: (e) => {
                switch (e.type) {
                    case 'section':
                        return x.createElement(e5, { section: e });
                    case 'separator':
                        return x.createElement(e0, e.props);
                    case 'item':
                        return x.createElement(e6, { item: e });
                    default:
                        throw Error('Unsupported node type in Menu: ' + e.type);
                }
            }
        }),
        m = (0, x.useRef)(d),
        I = (0, x.useRef)(_);
    m.current !== d && console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'), I.current !== _ && console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    let T = !1,
        g = null,
        S = (0, x.useRef)(null);
    if (d && l) {
        (r = l.useDraggableCollectionState({
            collection: u,
            selectionManager: c,
            preview: l.renderDragPreview ? S : void 0
        })),
            l.useDraggableCollection({}, r, n);
        let e = l.DragPreview;
        g = l.renderDragPreview ? x.createElement(e, { ref: S }, l.renderDragPreview) : null;
    }
    if (_ && l) {
        i = l.useDroppableCollectionState({
            collection: u,
            selectionManager: c
        });
        let e = t.keyboardDelegate || new p.dp(u, 'selection' === c.disabledBehavior ? new Set() : c.disabledKeys, n),
            r = l.dropTargetDelegate || new l.ListDropTargetDelegate(u, n);
        (a = l.useDroppableCollection(
            {
                keyboardDelegate: e,
                dropTargetDelegate: r
            },
            i,
            n
        )),
            (T = i.isDropTarget({ type: 'root' }));
    }
    let { focusProps: A, isFocused: N, isFocusVisible: v } = (0, s.Fx)(),
        O = eA({
            className: t.className,
            style: t.style,
            defaultClassName: 'react-aria-ListBox',
            values: {
                isDropTarget: T,
                isEmpty: 0 === e.collection.size,
                isFocused: N,
                isFocusVisible: v
            }
        }),
        R = null;
    return (
        0 === e.collection.size &&
            t.renderEmptyState &&
            (R = x.createElement(
                'div',
                {
                    role: 'option',
                    style: { display: 'contents' }
                },
                t.renderEmptyState()
            )),
        x.createElement(
            s.MT,
            null,
            x.createElement(
                'div',
                {
                    ...(0, w.zL)(t),
                    ...(0, o.dG)(E, A, null == a ? void 0 : a.collectionProps),
                    ...O,
                    ref: n,
                    slot: t.slot,
                    'data-drop-target': T || void 0,
                    'data-empty': 0 === e.collection.size || void 0,
                    'data-focused': N || void 0,
                    'data-focus-visible': v || void 0
                },
                x.createElement(
                    eS,
                    {
                        values: [
                            [
                                e2,
                                {
                                    state: e,
                                    shouldFocusOnHover: t.shouldFocusOnHover,
                                    dragAndDropHooks: l,
                                    dragState: r,
                                    dropState: i
                                }
                            ],
                            [eJ, { elementType: 'li' }],
                            [eq, { render: e7 }]
                        ]
                    },
                    f
                ),
                R,
                g
            )
        )
    );
}
function e5({ section: e, className: t, style: n, ...r }) {
    var i, a, s;
    let { state: o } = (0, x.useContext)(e2),
        [l, u] = ev(),
        { headingProps: c, groupProps: d } = (0, h.TV)({
            heading: u,
            'aria-label': null !== (s = e['aria-label']) && void 0 !== s ? s : void 0
        }),
        _ = ec({
            items: o.collection.getChildren(e.key),
            children: (e) => {
                switch (e.type) {
                    case 'header': {
                        let { ref: t, ...n } = e.props;
                        return x.createElement(
                            e$,
                            {
                                ...c,
                                ...n,
                                ref: (0, w.lq)(l, t)
                            },
                            e.rendered
                        );
                    }
                    case 'item':
                        return x.createElement(e6, { item: e });
                    default:
                        throw Error('Unsupported element type in Section: ' + e.type);
                }
            }
        });
    return x.createElement(
        'section',
        {
            ...(0, w.zL)(r),
            ...d,
            className: t || (null === (i = e.props) || void 0 === i ? void 0 : i.className) || 'react-aria-Section',
            style: n || (null === (a = e.props) || void 0 === a ? void 0 : a.style),
            ref: e.props.ref
        },
        _
    );
}
function e6({ item: e }) {
    let t = (0, w.B3)(e.props.ref),
        { state: n, shouldFocusOnHover: r, dragAndDropHooks: i, dragState: s, dropState: l } = (0, x.useContext)(e2),
        { optionProps: u, labelProps: c, descriptionProps: d, ..._ } = (0, h.Fv)({ key: e.key }, n, t),
        { hoverProps: E, isHovered: f } = (0, a.XI)({ isDisabled: r || (!_.allowsSelection && !_.hasAction) });
    r && ((E = {}), (f = _.isFocused));
    let p = null;
    s && i && (p = i.useDraggableItem({ key: e.key }, s));
    let m = null;
    l &&
        i &&
        (m = i.useDroppableItem(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            l,
            t
        ));
    let I = e.props,
        T = s && s.isDragging(e.key),
        g = eA({
            ...I,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ..._,
                isHovered: f,
                selectionMode: n.selectionManager.selectionMode,
                selectionBehavior: n.selectionManager.selectionBehavior,
                allowsDragging: !!s,
                isDragging: T,
                isDropTarget: null == m ? void 0 : m.isDropTarget
            }
        }),
        S = (null == i ? void 0 : i.renderDropIndicator) || ((e) => x.createElement(eQ, { target: e }));
    return (
        (0, x.useEffect)(() => {
            !e.textValue && console.warn('A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.');
        }, [e.textValue]),
        x.createElement(
            x.Fragment,
            null,
            (null == i ? void 0 : i.useDropIndicator) &&
                S({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'before'
                }),
            x.createElement(
                'div',
                {
                    ...(0, o.dG)((0, w.zL)(I), u, E, null == p ? void 0 : p.dragProps, null == m ? void 0 : m.dropProps),
                    ...g,
                    ref: t,
                    'data-hovered': f || void 0,
                    'data-focused': _.isFocused || void 0,
                    'data-focus-visible': _.isFocusVisible || void 0,
                    'data-pressed': _.isPressed || void 0,
                    'data-dragging': T || void 0,
                    'data-drop-target': (null == m ? void 0 : m.isDropTarget) || void 0
                },
                x.createElement(
                    eS,
                    {
                        values: [
                            [
                                ex,
                                {
                                    slots: {
                                        label: c,
                                        description: d
                                    }
                                }
                            ]
                        ]
                    },
                    g.children
                )
            ),
            (null == i ? void 0 : i.useDropIndicator) &&
                null == n.collection.getKeyAfter(e.key) &&
                S({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'after'
                })
        )
    );
}
function e7(e, t) {
    t = (0, w.B3)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, x.useContext)(e2),
        { dropIndicatorProps: i, isHidden: a, isDropTarget: s } = n.useDropIndicator(e, r, t);
    return a
        ? null
        : x.createElement(e8, {
              ...e,
              dropIndicatorProps: i,
              isDropTarget: s,
              ref: t
          });
}
let e8 = (0, x.forwardRef)(function (e, t) {
        let { dropIndicatorProps: n, isDropTarget: r, ...i } = e,
            a = eA({
                ...i,
                defaultClassName: 'react-aria-DropIndicator',
                values: { isDropTarget: r }
            });
        return x.createElement('div', {
            ...n,
            ...a,
            role: 'option',
            ref: t,
            'data-drop-target': r || void 0
        });
    }),
    e9 = (0, x.createContext)(null),
    te = (0, x.createContext)(null);
function tt({ state: e, isExiting: t, ...n }) {
    var r;
    let {
            popoverProps: i,
            underlayProps: a,
            arrowProps: s,
            placement: o
        } = (0, m.Sv)(
            {
                ...n,
                offset: null !== (r = n.offset) && void 0 !== r ? r : 8
            },
            e
        ),
        l = n.popoverRef,
        u = eO(l, !!o),
        c = eA({
            ...n,
            defaultClassName: 'react-aria-Popover',
            values: {
                placement: o,
                isEntering: u,
                isExiting: t
            }
        }),
        d = {
            ...c.style,
            ...i.style
        };
    return x.createElement(
        m.aV,
        null,
        !n.isNonModal &&
            x.createElement('div', {
                ...a,
                style: {
                    position: 'fixed',
                    inset: 0
                }
            }),
        x.createElement(
            'div',
            {
                ...(0, w.dG)((0, w.zL)(n), i),
                ...c,
                ref: l,
                slot: n.slot,
                style: d,
                'data-placement': o,
                'data-entering': u || void 0,
                'data-exiting': t || void 0
            },
            !n.isNonModal && x.createElement(m.U4, { onDismiss: e.close }),
            x.createElement(
                e9.Provider,
                {
                    value: {
                        arrowProps: s,
                        placement: o
                    }
                },
                c.children
            ),
            x.createElement(m.U4, { onDismiss: e.close })
        )
    );
}
let tn = (0, x.createContext)(null),
    tr = (0, x.createContext)(null),
    ti = (0, x.createContext)(null),
    ta = (0, x.createContext)(null),
    ts = (0, x.createContext)(null),
    to = (0, x.createContext)(null),
    tl = (0, x.createContext)(null),
    tu = (0, x.forwardRef)((e, t) => {
        var n;
        let r = (0, x.useContext)(to),
            i = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, K.d)(e),
            a = (0, w.B3)(t),
            s = (0, x.useRef)(null),
            o = eR(a, i.isOpen),
            l = eR(s, i.isOpen),
            u = o || l;
        return i.isOpen || u
            ? x.createElement(tc, {
                  ...e,
                  state: i,
                  isExiting: u,
                  overlayRef: a,
                  modalRef: s
              })
            : null;
    });
function tc(e) {
    let t = e.modalRef,
        { state: n } = e,
        { modalProps: r, underlayProps: i } = (0, m.NE)(e, n, t),
        a = eO(e.overlayRef),
        s = eA({
            ...e,
            defaultClassName: 'react-aria-ModalOverlay',
            values: {
                isEntering: a,
                isExiting: e.isExiting
            }
        }),
        o = (0, w.nP)(),
        l = {
            ...s.style,
            '--visual-viewport-height': o.height + 'px'
        };
    return x.createElement(
        m.aV,
        null,
        x.createElement(
            'div',
            {
                ...(0, w.dG)((0, w.zL)(e), i),
                ...s,
                style: l,
                ref: e.overlayRef,
                'data-entering': a || void 0,
                'data-exiting': e.isExiting || void 0
            },
            x.createElement(
                tl.Provider,
                {
                    value: {
                        modalProps: r,
                        modalRef: t,
                        state: n,
                        isExiting: e.isExiting,
                        isDismissable: e.isDismissable
                    }
                },
                s.children
            )
        )
    );
}
function td(e) {
    let { modalProps: t, modalRef: n, isExiting: r, isDismissable: i, state: a } = (0, x.useContext)(tl),
        s = (0, x.useMemo)(() => (0, w.lq)(e.modalRef, n), [e.modalRef, n]),
        o = (0, w.B3)(s),
        l = eO(o),
        u = eA({
            ...e,
            defaultClassName: 'react-aria-Modal',
            values: {
                isEntering: l,
                isExiting: r
            }
        });
    return x.createElement(
        'div',
        {
            ...(0, w.dG)((0, w.zL)(e), t),
            ...u,
            ref: o,
            'data-entering': l || void 0,
            'data-exiting': r || void 0
        },
        i && x.createElement(m.U4, { onDismiss: a.close }),
        u.children
    );
}
let t_ = (0, x.createContext)(null),
    tE = (0, x.createContext)({}),
    tf = (0, x.createContext)(null),
    th = (0, x.createContext)(null),
    tp = (0, x.createContext)(null),
    tm = (0, x.createContext)(null);
function tI({ item: e }) {
    let { state: t, dragAndDropHooks: n, dragState: r, dropState: i } = (0, x.useContext)(tm),
        l = (0, w.B3)(e.props.ref),
        {
            rowProps: u,
            gridCellProps: c,
            descriptionProps: d,
            ...E
        } = (0, S.Fb)(
            {
                node: e,
                shouldSelectOnPressUp: !!r
            },
            t,
            l
        ),
        { hoverProps: f, isHovered: h } = (0, a.XI)({ isDisabled: !E.allowsSelection && !E.hasAction }),
        { isFocusVisible: p, focusProps: m } = (0, s.Fx)(),
        { checkboxProps: I } = (0, S.fQ)({ key: e.key }, t),
        T = null;
    r &&
        n &&
        (T = n.useDraggableItem(
            {
                key: e.key,
                hasDragButton: !0
            },
            r
        ));
    let g = null,
        A = (0, x.useRef)(null),
        { visuallyHiddenProps: N } = (0, _.S)();
    i &&
        n &&
        (g = n.useDropIndicator(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            i,
            A
        ));
    let v = e.props,
        O = r && r.isDragging(e.key),
        R = eA({
            ...v,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...E,
                isHovered: h,
                isFocusVisible: p,
                selectionMode: t.selectionManager.selectionMode,
                selectionBehavior: t.selectionManager.selectionBehavior,
                allowsDragging: !!r,
                isDragging: O,
                isDropTarget: null == g ? void 0 : g.isDropTarget
            }
        }),
        C = (null == n ? void 0 : n.renderDropIndicator) || ((e) => x.createElement(eQ, { target: e })),
        y = (0, x.useRef)(null);
    return (
        (0, x.useEffect)(() => {
            r && !y.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
        }, []),
        (0, x.useEffect)(() => {
            !e.textValue && console.warn('A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.');
        }, [e.textValue]),
        x.createElement(
            x.Fragment,
            null,
            (null == n ? void 0 : n.useDropIndicator) &&
                C({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'before'
                }),
            g &&
                !g.isHidden &&
                x.createElement(
                    'div',
                    {
                        role: 'row',
                        style: { position: 'absolute' }
                    },
                    x.createElement(
                        'div',
                        { role: 'gridcell' },
                        x.createElement('div', {
                            role: 'button',
                            ...N,
                            ...(null == g ? void 0 : g.dropIndicatorProps),
                            ref: A
                        })
                    )
                ),
            x.createElement(
                'div',
                {
                    ...(0, o.dG)((0, w.zL)(v), u, m, f, null == T ? void 0 : T.dragProps),
                    ...R,
                    ref: l,
                    'data-hovered': h || void 0,
                    'data-focused': E.isFocused || void 0,
                    'data-focus-visible': p || void 0,
                    'data-pressed': E.isPressed || void 0,
                    'data-dragging': O || void 0,
                    'data-drop-target': (null == g ? void 0 : g.isDropTarget) || void 0
                },
                x.createElement(
                    'div',
                    c,
                    x.createElement(
                        eS,
                        {
                            values: [
                                [eK, I],
                                [
                                    eU,
                                    {
                                        slots: {
                                            [eg]: {},
                                            drag: {
                                                ...(null == T ? void 0 : T.dragButtonProps),
                                                ref: y,
                                                style: { pointerEvents: 'none' }
                                            }
                                        }
                                    }
                                ],
                                [ex, { slots: { description: d } }]
                            ]
                        },
                        R.children
                    )
                )
            ),
            (null == n ? void 0 : n.useDropIndicator) &&
                null == t.collection.getKeyAfter(e.key) &&
                C({
                    type: 'item',
                    key: e.key,
                    dropPosition: 'after'
                })
        )
    );
}
function tT(e, t) {
    t = (0, w.B3)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, x.useContext)(tm),
        i = (0, x.useRef)(null),
        { dropIndicatorProps: a, isHidden: s, isDropTarget: o } = n.useDropIndicator(e, r, i);
    return s
        ? null
        : x.createElement(tg, {
              ...e,
              dropIndicatorProps: a,
              isDropTarget: o,
              buttonRef: i,
              ref: t
          });
}
let tg = (0, x.forwardRef)(function (e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e,
        { visuallyHiddenProps: s } = (0, _.S)(),
        o = eA({
            ...a,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: r }
        });
    return x.createElement(
        'div',
        {
            ...o,
            role: 'row',
            ref: t,
            'data-drop-target': r || void 0
        },
        x.createElement(
            'div',
            { role: 'gridcell' },
            x.createElement('div', {
                ...s,
                role: 'button',
                ...n,
                ref: i
            })
        )
    );
});
function tS() {
    let { dragAndDropHooks: e, dropState: t } = (0, x.useContext)(tm),
        n = (0, x.useRef)(null),
        { dropIndicatorProps: r } = e.useDropIndicator({ target: { type: 'root' } }, t, n),
        i = t.isDropTarget({ type: 'root' }),
        { visuallyHiddenProps: a } = (0, _.S)();
    return !i && r['aria-hidden']
        ? null
        : x.createElement(
              'div',
              {
                  role: 'row',
                  'aria-hidden': r['aria-hidden'],
                  style: { position: 'absolute' }
              },
              x.createElement(
                  'div',
                  { role: 'gridcell' },
                  x.createElement('div', {
                      role: 'button',
                      ...a,
                      ...r,
                      ref: n
                  })
              )
          );
}
let tA = (0, x.createContext)({}),
    tN = (0, x.createContext)(null),
    tv = (0, x.createContext)(null);
function tO({ props: e, collection: t, menuRef: n }) {
    var r;
    let i = (0, z.D)({
            ...e,
            collection: t,
            children: void 0
        }),
        { menuProps: a } = (0, A.H9)(e, i, n),
        s = ec({
            items: i.collection,
            children: (e) => {
                switch (e.type) {
                    case 'section':
                        return x.createElement(tR, { section: e });
                    case 'separator':
                        return x.createElement(e0, e.props);
                    case 'item':
                        return x.createElement(tC, { item: e });
                    default:
                        throw Error('Unsupported node type in Menu: ' + e.type);
                }
            }
        });
    return x.createElement(
        'div',
        {
            ...(0, w.zL)(e),
            ...a,
            ref: n,
            slot: e.slot,
            style: e.style,
            className: null !== (r = e.className) && void 0 !== r ? r : 'react-aria-Menu'
        },
        x.createElement(
            eS,
            {
                values: [
                    [tv, i],
                    [eJ, { elementType: 'div' }]
                ]
            },
            s
        )
    );
}
function tR({ section: e, className: t, style: n, ...r }) {
    var i, a, s;
    let o = (0, x.useContext)(tv),
        [l, u] = ev(),
        { headingProps: c, groupProps: d } = (0, A.x7)({
            heading: u,
            'aria-label': null !== (s = e['aria-label']) && void 0 !== s ? s : void 0
        }),
        _ = ec({
            items: o.collection.getChildren(e.key),
            children: (e) => {
                switch (e.type) {
                    case 'header': {
                        let { ref: t, ...n } = e.props;
                        return x.createElement(
                            e$,
                            {
                                ...c,
                                ...n,
                                ref: (0, w.lq)(l, t)
                            },
                            e.rendered
                        );
                    }
                    case 'item':
                        return x.createElement(tC, { item: e });
                    default:
                        throw Error('Unsupported element type in Section: ' + e.type);
                }
            }
        });
    return x.createElement(
        'section',
        {
            ...(0, w.zL)(r),
            ...d,
            className: t || (null === (i = e.props) || void 0 === i ? void 0 : i.className) || 'react-aria-Section',
            style: n || (null === (a = e.props) || void 0 === a ? void 0 : a.style),
            ref: e.props.ref
        },
        _
    );
}
function tC({ item: e }) {
    let t = (0, x.useContext)(tv),
        n = (0, w.B3)(e.props.ref),
        { menuItemProps: r, labelProps: i, descriptionProps: a, keyboardShortcutProps: l, ...u } = (0, A.iX)({ key: e.key }, t, n),
        c = e.props,
        { isFocusVisible: d, focusProps: _ } = (0, s.Fx)(),
        E = eA({
            ...c,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Item',
            values: {
                ...u,
                isHovered: u.isFocused,
                isFocusVisible: d,
                selectionMode: t.selectionManager.selectionMode,
                selectionBehavior: t.selectionManager.selectionBehavior
            }
        }),
        f = (0, w.zL)(c);
    return (
        delete f.id,
        x.createElement(
            'div',
            {
                ...(0, o.dG)(f, r, _),
                ...E,
                ref: n,
                'data-hovered': u.isFocused || void 0,
                'data-focused': u.isFocused || void 0,
                'data-focus-visible': d || void 0,
                'data-pressed': u.isPressed || void 0
            },
            x.createElement(
                eS,
                {
                    values: [
                        [
                            ex,
                            {
                                slots: {
                                    label: i,
                                    description: a
                                }
                            }
                        ],
                        [tA, l]
                    ]
                },
                E.children
            )
        )
    );
}
let ty = (0, x.createContext)(null),
    tD = (0, x.createContext)(null),
    tL = (0, x.createContext)(null),
    tb = (0, x.createContext)(null),
    tM = (0, x.createContext)(null),
    tP = (0, x.createContext)(null),
    tU = (0, x.createContext)(null),
    tw = (0, x.createContext)(null),
    tx = (0, x.createContext)(null),
    tG = (0, x.createContext)(null),
    tk = (0, x.createContext)(null),
    tB = Symbol.iterator;
class tF extends el {
    addNode(e) {
        super.addNode(e), this.columnsDirty || (this.columnsDirty = 'column' === e.type), 'tableheader' === e.type && (this.head = e), 'tablebody' === e.type && (this.body = e);
    }
    commit(e, t) {
        this.updateColumns(), super.commit(e, t);
    }
    updateColumns() {
        if (!this.columnsDirty) return;
        (this.rowHeaderColumnKeys = new Set()), (this.columns = []);
        let e = new Map(),
            t = (n) => {
                if ('column' === n.type) e.set(n.key, n), !n.hasChildNodes && ((n.index = this.columns.length), this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
                for (let e of this.getChildren(n.key)) t(e);
            };
        for (let e of this.getChildren(this.head.key)) t(e);
        if (((this.headerRows = (0, ee.GL)(e, this.columns)), (this.columnsDirty = !1), 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0)) throw Error('A table must have at least one Column with the isRowHeader prop set to true');
    }
    get columnCount() {
        return this.columns.length;
    }
    get rows() {
        return [...this.getChildren(this.body.key)];
    }
    *[tB]() {
        yield* this.getChildren(this.body.key);
    }
    get size() {
        return [...this.getChildren(this.body.key)].length;
    }
    getFirstKey() {
        var e;
        return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let t = [...this.getChildren(this.body.key)];
        return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key;
    }
    getKeyAfter(e) {
        var t;
        let n = this.getItem(e);
        return (null == n ? void 0 : n.type) === 'column' ? (null !== (t = n.nextKey) && void 0 !== t ? t : null) : super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        var t, n;
        let r = this.getItem(e);
        if ((null == r ? void 0 : r.type) === 'column') return null !== (n = r.prevKey) && void 0 !== n ? n : null;
        let i = super.getKeyBefore(e);
        return null != i && (null === (t = this.getItem(i)) || void 0 === t ? void 0 : t.type) === 'tablebody' ? null : i;
    }
    getChildren(e) {
        if (!this.getItem(e)) {
            for (let t of this.headerRows) if (t.key === e) return t.childNodes;
        }
        return super.getChildren(e);
    }
    clone() {
        let e = super.clone();
        return (e.headerRows = this.headerRows), (e.columns = this.columns), (e.rowHeaderColumnKeys = this.rowHeaderColumnKeys), (e.head = this.head), (e.body = this.body), e;
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return '';
        if (t.textValue) return t.textValue;
        let n = this.rowHeaderColumnKeys,
            r = [];
        for (let t of this.getChildren(e)) {
            let e = this.columns[t.index];
            if ((n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size)) break;
        }
        return r.join(' ');
    }
    constructor(...e) {
        super(...e), (0, G._)(this, 'headerRows', []), (0, G._)(this, 'columns', []), (0, G._)(this, 'rowHeaderColumnKeys', new Set()), (0, G._)(this, 'head', new en('tableheader', -1)), (0, G._)(this, 'body', new en('tablebody', -2)), (0, G._)(this, 'columnsDirty', !0);
    }
}
let tV = (0, x.createContext)(null),
    tH = (0, x.createContext)(null),
    tZ = (0, x.forwardRef)(function (e, t) {
        let n, r, i;
        [e, t] = eN(e, t, tV);
        let { portal: a, collection: l } = eE(
                e,
                (0, x.useMemo)(() => new tF(), [])
            ),
            u = (0, ee.oy)({
                ...e,
                collection: l,
                children: void 0
            }),
            { gridProps: c } = (0, b.x6)(e, u, t),
            { dragAndDropHooks: d } = e,
            _ = u.selectionManager,
            E = !!(null == d ? void 0 : d.useDraggableCollectionState),
            f = !!(null == d ? void 0 : d.useDroppableCollectionState),
            h = (0, x.useRef)(E),
            m = (0, x.useRef)(f);
        h.current !== E && console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'), m.current !== f && console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        let I = !1,
            T = null,
            g = (0, x.useRef)(null);
        if (E && d) {
            (n = d.useDraggableCollectionState({
                collection: l,
                selectionManager: _,
                preview: d.renderDragPreview ? g : void 0
            })),
                d.useDraggableCollection({}, n, t);
            let e = d.DragPreview;
            T = d.renderDragPreview ? x.createElement(e, { ref: g }, d.renderDragPreview) : null;
        }
        if (f && d) {
            r = d.useDroppableCollectionState({
                collection: l,
                selectionManager: _
            });
            let e = new p.dp(l, 'selection' === _.disabledBehavior ? new Set() : _.disabledKeys, t),
                n = d.dropTargetDelegate || new d.ListDropTargetDelegate(l, t);
            (i = d.useDroppableCollection(
                {
                    keyboardDelegate: e,
                    dropTargetDelegate: n
                },
                r,
                t
            )),
                (I = r.isDropTarget({ type: 'root' }));
        }
        let { focusProps: S, isFocused: A, isFocusVisible: N } = (0, s.Fx)(),
            v = eA({
                className: e.className,
                style: e.style,
                defaultClassName: 'react-aria-Table',
                values: {
                    isDropTarget: I,
                    isFocused: A,
                    isFocusVisible: N
                }
            }),
            { selectionBehavior: O, selectionMode: R, disallowEmptySelection: C } = u.selectionManager,
            y = (0, x.useMemo)(
                () => ({
                    selectionBehavior: 'none' === R ? null : O,
                    selectionMode: R,
                    disallowEmptySelection: C,
                    allowsDragging: E
                }),
                [O, R, C, E]
            );
        return x.createElement(
            x.Fragment,
            null,
            x.createElement(
                eS,
                {
                    values: [
                        [
                            tH,
                            {
                                state: u,
                                dragAndDropHooks: d,
                                dragState: n,
                                dropState: r
                            }
                        ],
                        [eq, { render: t2 }]
                    ]
                },
                x.createElement(
                    s.MT,
                    null,
                    x.createElement(
                        'table',
                        {
                            ...(0, w.zL)(e),
                            ...v,
                            ...(0, o.dG)(c, S, null == i ? void 0 : i.collectionProps),
                            ref: t,
                            slot: e.slot,
                            'data-drop-target': I || void 0,
                            'data-focused': A || void 0,
                            'data-focus-visible': N || void 0
                        },
                        x.createElement(tQ, { collection: l }),
                        x.createElement(tX, {
                            collection: l,
                            isDroppable: f
                        })
                    )
                ),
                T
            ),
            x.createElement(tY.Provider, { value: y }, a)
        );
    }),
    tY = (0, x.createContext)(null),
    tj = (0, x.forwardRef)(function (e, t) {
        let n = ed({
                children: e.children,
                items: e.columns
            }),
            r = 'function' == typeof e.children ? e.children : null;
        return x.createElement(eI.Provider, { value: r }, x.createElement('tableheader', { ref: eh(e, t) }, n));
    }),
    tW = (0, x.forwardRef)(function (e, t) {
        var n;
        let r = (0, x.useContext)(eI),
            i = 'function' == typeof r ? r : e.children,
            a = ed({
                children: e.title || e.childColumns ? i : null,
                items: e.childColumns
            });
        return x.createElement('column', { ref: eh(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children) }, a);
    }),
    tK = (0, x.forwardRef)(function (e, t) {
        let n = ed(e);
        return x.createElement('tablebody', { ref: eh(e, t) }, n);
    }),
    tz = (0, x.forwardRef)(function (e, t) {
        let n = ed({
                children: e.children,
                items: e.columns,
                idScope: e.id
            }),
            r = (0, x.useMemo)(() => ({ idScope: e.id }), [e.id]);
        return x.createElement('item', { ref: eh(e, t) }, x.createElement(em.Provider, { value: r }, n));
    }),
    tq = (0, x.forwardRef)(function (e, t) {
        return x.createElement('cell', { ref: eh(e, t, e.children) });
    });
function tQ({ collection: e }) {
    var t;
    let n = ec({
            items: e.headerRows,
            children: (0, x.useCallback)((e) => {
                if ('headerrow' === e.type) return x.createElement(t$, { item: e });
                throw Error('Unsupported node type in TableHeader: ' + e.type);
            }, [])
        }),
        { rowGroupProps: r } = (0, b.LA)();
    return x.createElement(
        'thead',
        {
            ...(0, w.zL)(e.head.props),
            ...r,
            ref: e.head.props.ref,
            className: null !== (t = e.head.props.className) && void 0 !== t ? t : 'react-aria-TableHeader',
            style: e.head.props.style
        },
        n
    );
}
function tX({ collection: e, isDroppable: t }) {
    let n,
        r = ec({
            items: e.rows,
            children: (0, x.useCallback)((e) => {
                if ('item' === e.type) return x.createElement(t0, { item: e });
                throw Error('Unsupported node type in TableBody: ' + e.type);
            }, [])
        }),
        i = e.body.props,
        a = eA({
            ...i,
            id: void 0,
            children: void 0,
            defaultClassName: 'react-aria-TableBody',
            values: { isEmpty: 0 === e.size }
        });
    0 === e.size &&
        i.renderEmptyState &&
        (n = x.createElement(
            'tr',
            { role: 'row' },
            x.createElement(
                'td',
                {
                    role: 'gridcell',
                    colSpan: e.columnCount
                },
                i.renderEmptyState()
            )
        ));
    let { rowGroupProps: s } = (0, b.LA)();
    return x.createElement(
        'tbody',
        {
            ...(0, o.dG)((0, w.zL)(i), s),
            ...a,
            ref: e.body.props.ref,
            'data-empty': 0 === e.size || void 0
        },
        t && x.createElement(t4, null),
        r,
        n
    );
}
function t$({ item: e }) {
    let t = (0, x.useRef)(null),
        { state: n } = (0, x.useContext)(tH),
        { rowProps: r } = (0, b.Qm)({ node: e }, n, t),
        { checkboxProps: i } = (0, b.jp)(n),
        a = ec({
            items: n.collection.getChildren(e.key),
            children: (e) => {
                if ('column' === e.type) return x.createElement(tJ, { column: e });
                throw Error('Unsupported node type in Row: ' + e.type);
            }
        });
    return x.createElement(
        'tr',
        {
            ...r,
            ref: t
        },
        x.createElement(
            eS,
            {
                values: [[eK, { slots: { selection: i } }]]
            },
            a
        )
    );
}
function tJ({ column: e }) {
    var t;
    let n = (0, w.B3)(e.props.ref),
        { state: r } = (0, x.useContext)(tH),
        { columnHeaderProps: i } = (0, b.WY)({ node: e }, r, n),
        { isFocused: a, isFocusVisible: l, focusProps: u } = (0, s.Fx)(),
        c = e.props,
        d = eA({
            ...c,
            id: void 0,
            children: e.rendered,
            defaultClassName: 'react-aria-Column',
            values: {
                isFocused: a,
                isFocusVisible: l,
                allowsSorting: e.props.allowsSorting,
                sortDirection: (null === (t = r.sortDescriptor) || void 0 === t ? void 0 : t.column) === e.key ? r.sortDescriptor.direction : void 0
            }
        });
    return x.createElement(
        'th',
        {
            ...(0, o.dG)((0, w.zL)(c), i, u),
            ...d,
            colSpan: e.colspan,
            ref: n,
            'data-focused': a || void 0,
            'data-focus-visible': l || void 0
        },
        d.children
    );
}
function t0({ item: e }) {
    let t,
        n,
        r = (0, w.B3)(e.props.ref),
        { state: i, dragAndDropHooks: l, dragState: u, dropState: c } = (0, x.useContext)(tH),
        { rowProps: d, ...E } = (0, b.U)(
            {
                node: e,
                shouldSelectOnPressUp: !!u
            },
            i,
            r
        ),
        { isFocused: f, isFocusVisible: h, focusProps: p } = (0, s.Fx)(),
        { hoverProps: m, isHovered: I } = (0, a.XI)({ isDisabled: !E.allowsSelection && !E.hasAction }),
        { checkboxProps: T } = (0, b.M$)({ key: e.key }, i);
    u &&
        l &&
        (t = l.useDraggableItem(
            {
                key: e.key,
                hasDragButton: !0
            },
            u
        ));
    let g = (0, x.useRef)(null),
        { visuallyHiddenProps: S } = (0, _.S)();
    c &&
        l &&
        (n = l.useDropIndicator(
            {
                target: {
                    type: 'item',
                    key: e.key,
                    dropPosition: 'on'
                }
            },
            c,
            g
        ));
    let A = (null == l ? void 0 : l.renderDropIndicator) || ((e) => x.createElement(eQ, { target: e })),
        N = (0, x.useRef)(null);
    (0, x.useEffect)(() => {
        u && !N.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    }, []);
    let v = e.props,
        O = u && u.isDragging(e.key),
        R = eA({
            ...v,
            id: void 0,
            defaultClassName: 'react-aria-Row',
            values: {
                ...E,
                isHovered: I,
                isFocused: f,
                isFocusVisible: h,
                selectionMode: i.selectionManager.selectionMode,
                selectionBehavior: i.selectionManager.selectionBehavior,
                isDragging: O,
                isDropTarget: null == n ? void 0 : n.isDropTarget
            }
        }),
        C = ec({
            items: i.collection.getChildren(e.key),
            children: (e) => {
                if ('cell' === e.type) return x.createElement(t1, { cell: e });
                throw Error('Unsupported node type in Row: ' + e.type);
            }
        });
    return x.createElement(
        x.Fragment,
        null,
        (null == l ? void 0 : l.useDropIndicator) &&
            A({
                type: 'item',
                key: e.key,
                dropPosition: 'before'
            }),
        n &&
            !n.isHidden &&
            x.createElement(
                'tr',
                {
                    role: 'row',
                    style: { height: 0 }
                },
                x.createElement(
                    'td',
                    {
                        role: 'gridcell',
                        colSpan: i.collection.columnCount,
                        style: { padding: 0 }
                    },
                    x.createElement('div', {
                        role: 'button',
                        ...S,
                        ...n.dropIndicatorProps,
                        ref: g
                    })
                )
            ),
        x.createElement(
            'tr',
            {
                ...(0, o.dG)((0, w.zL)(v), d, p, m, null == t ? void 0 : t.dragProps),
                ...R,
                ref: r,
                'data-hovered': I || void 0,
                'data-focused': E.isFocused || void 0,
                'data-focus-visible': h || void 0,
                'data-pressed': E.isPressed || void 0,
                'data-dragging': O || void 0,
                'data-drop-target': (null == n ? void 0 : n.isDropTarget) || void 0
            },
            x.createElement(
                eS,
                {
                    values: [
                        [eK, { slots: { selection: T } }],
                        [
                            eU,
                            {
                                slots: {
                                    [eg]: {},
                                    drag: {
                                        ...(null == t ? void 0 : t.dragButtonProps),
                                        ref: N,
                                        style: { pointerEvents: 'none' }
                                    }
                                }
                            }
                        ]
                    ]
                },
                C
            )
        ),
        (null == l ? void 0 : l.useDropIndicator) &&
            null == i.collection.getKeyAfter(e.key) &&
            A({
                type: 'item',
                key: e.key,
                dropPosition: 'after'
            })
    );
}
function t1({ cell: e }) {
    let t = (0, w.B3)(e.props.ref),
        { state: n, dragState: r } = (0, x.useContext)(tH);
    e.column = n.collection.columns[e.index];
    let { gridCellProps: i, isPressed: a } = (0, b.fs)(
            {
                node: e,
                shouldSelectOnPressUp: !!r
            },
            n,
            t
        ),
        { isFocused: l, isFocusVisible: u, focusProps: c } = (0, s.Fx)(),
        d = e.props,
        _ = eA({
            ...d,
            id: void 0,
            defaultClassName: 'react-aria-Cell',
            values: {
                isFocused: l,
                isFocusVisible: u,
                isPressed: a
            }
        });
    return x.createElement(
        'td',
        {
            ...(0, o.dG)((0, w.zL)(d), i, c),
            ..._,
            ref: t,
            'data-focused': l || void 0,
            'data-focus-visible': u || void 0,
            'data-pressed': a || void 0
        },
        _.children
    );
}
function t2(e, t) {
    t = (0, w.B3)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, x.useContext)(tH),
        i = (0, x.useRef)(null),
        { dropIndicatorProps: a, isHidden: s, isDropTarget: o } = n.useDropIndicator(e, r, i);
    return s
        ? null
        : x.createElement(t3, {
              ...e,
              dropIndicatorProps: a,
              isDropTarget: o,
              buttonRef: i,
              ref: t
          });
}
let t3 = (0, x.forwardRef)(function (e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e,
        { state: s } = (0, x.useContext)(tH),
        { visuallyHiddenProps: o } = (0, _.S)(),
        l = eA({
            ...a,
            defaultClassName: 'react-aria-DropIndicator',
            values: { isDropTarget: r }
        });
    return x.createElement(
        'tr',
        {
            ...(0, w.zL)(e),
            ...l,
            role: 'row',
            ref: t,
            'data-drop-target': r || void 0
        },
        x.createElement(
            'td',
            {
                role: 'gridcell',
                colSpan: s.collection.columnCount,
                style: { padding: 0 }
            },
            x.createElement('div', {
                ...o,
                role: 'button',
                ...n,
                ref: i
            })
        )
    );
});
function t4() {
    let { state: e, dragAndDropHooks: t, dropState: n } = (0, x.useContext)(tH),
        r = (0, x.useRef)(null),
        { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: 'root' } }, n, r),
        a = n.isDropTarget({ type: 'root' }),
        { visuallyHiddenProps: s } = (0, _.S)();
    return !a && i['aria-hidden']
        ? null
        : x.createElement(
              'tr',
              {
                  role: 'row',
                  'aria-hidden': i['aria-hidden'],
                  style: { height: 0 }
              },
              x.createElement(
                  'td',
                  {
                      role: 'gridcell',
                      colSpan: e.collection.columnCount,
                      style: { padding: 0 }
                  },
                  x.createElement('div', {
                      role: 'button',
                      ...s,
                      ...i,
                      ref: r
                  })
              )
          );
}
let t5 = (0, x.createContext)(null),
    t6 = (0, x.createContext)(null);
function t7({ item: e, state: t }) {
    let { key: n } = e,
        r = (0, w.B3)(e.props.ref),
        { tabProps: i, isSelected: l, isDisabled: u, isPressed: c } = (0, M.xD)({ key: n }, t, r),
        { focusProps: d, isFocused: _, isFocusVisible: E } = (0, s.Fx)(),
        { hoverProps: f, isHovered: h } = (0, a.XI)({ isDisabled: u }),
        p = eA({
            ...e.props,
            children: e.rendered,
            defaultClassName: 'react-aria-Tab',
            values: {
                isSelected: l,
                isDisabled: u,
                isFocused: _,
                isFocusVisible: E,
                isPressed: c,
                isHovered: h
            }
        }),
        m = (0, w.zL)(e.props);
    return (
        delete m.id,
        x.createElement('div', {
            ...(0, o.dG)(m, i, d, f, p),
            ref: r,
            'data-focus-visible': E || void 0,
            'data-pressed': c || void 0,
            'data-hovered': h || void 0
        })
    );
}
let t8 = (0, x.createContext)(null),
    t9 = (0, x.createContext)({}),
    ne = (0, x.createContext)(null);
function nt(e) {
    let { state: t, triggerRef: n, tooltipProps: r } = (0, x.useContext)(ne),
        i = (0, x.useRef)(null),
        {
            overlayProps: a,
            arrowProps: s,
            placement: l
        } = (0, m.tN)({
            placement: e.placement || 'top',
            targetRef: n,
            overlayRef: i,
            offset: e.offset,
            crossOffset: e.crossOffset,
            isOpen: t.isOpen
        }),
        u = eO(i, !!l),
        c = eA({
            ...e,
            defaultClassName: 'react-aria-Tooltip',
            values: {
                placement: l,
                isEntering: u,
                isExiting: e.isExiting
            }
        });
    e = (0, o.dG)(e, a);
    let { tooltipProps: d } = (0, U.l)(e, t);
    return x.createElement(
        'div',
        {
            ...(0, o.dG)(r, d),
            ref: (0, w.lq)(i, e.tooltipRef),
            ...c,
            style: {
                ...c.style,
                ...a.style
            },
            'data-placement': l,
            'data-entering': u || void 0,
            'data-exiting': e.isExiting || void 0
        },
        x.createElement(
            e9.Provider,
            {
                value: {
                    arrowProps: s,
                    placement: l
                }
            },
            c.children
        )
    );
}
