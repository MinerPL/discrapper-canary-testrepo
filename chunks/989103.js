n.d(t, {
    Em: function () {
        return c;
    },
    Kx: function () {
        return o;
    },
    _P: function () {
        return l;
    },
    eg: function () {
        return f;
    },
    is: function () {
        return p;
    },
    l8: function () {
        return u;
    },
    s: function () {
        return d;
    }
});
var r = n(192379);
class i {
    build(e, t) {
        return (this.context = t), a(() => this.iterateCollection(e));
    }
    *iterateCollection(e) {
        let { children: t, items: n } = e;
        if ('function' == typeof t) {
            if (!n) throw Error('props.children was a function but props.items is missing');
            for (let n of e.items) yield* this.getFullNode({ value: n }, { renderer: t });
        } else {
            let e = [];
            r.Children.forEach(t, (t) => {
                e.push(t);
            });
            let n = 0;
            for (let t of e)
                for (let e of this.getFullNode(
                    {
                        element: t,
                        index: n
                    },
                    {}
                ))
                    n++, yield e;
        }
    }
    getKey(e, t, n, r) {
        if (null != e.key) return e.key;
        if ('cell' === t.type && null != t.key) return `${r}${t.key}`;
        let i = t.value;
        if (null != i) {
            var a;
            let e = null !== (a = i.key) && void 0 !== a ? a : i.id;
            if (null == e) throw Error('No key found for item');
            return e;
        }
        return r ? `${r}.${t.index}` : `$.${t.index}`;
    }
    getChildState(e, t) {
        return { renderer: t.renderer || e.renderer };
    }
    *getFullNode(e, t, n, i) {
        let o = e.element;
        if (!o && e.value && t && t.renderer) {
            let n = this.cache.get(e.value);
            if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
                (n.index = e.index), (n.parentKey = i ? i.key : null), yield n;
                return;
            }
            o = t.renderer(e.value);
        }
        if (r.isValidElement(o)) {
            let r = o.type;
            if ('function' != typeof r && 'function' != typeof r.getCollectionNode) {
                let e = 'function' == typeof o.type ? o.type.name : o.type;
                throw Error(`Unknown element <${e}> in collection.`);
            }
            let a = r.getCollectionNode(o.props, this.context),
                l = e.index,
                u = a.next();
            for (; !u.done && u.value; ) {
                let r = u.value;
                e.index = l;
                let c = r.key;
                !c && (c = r.element ? null : this.getKey(o, e, t, n));
                let d = [
                    ...this.getFullNode(
                        {
                            ...r,
                            key: c,
                            index: l,
                            wrapper: (function (e, t) {
                                return e && t ? (n) => e(t(n)) : e ? e : t ? t : void 0;
                            })(e.wrapper, r.wrapper)
                        },
                        this.getChildState(t, r),
                        n ? `${n}${o.key}` : o.key,
                        i
                    )
                ];
                for (let t of d) {
                    if (((t.value = r.value || e.value), t.value && this.cache.set(t.value, t), e.type && t.type !== e.type)) throw Error(`Unsupported type <${s(t.type)}> in <${s(i.type)}>. Only <${s(e.type)}> is supported.`);
                    l++, yield t;
                }
                u = a.next(d);
            }
            return;
        }
        if (null == e.key) return;
        let l = this,
            u = {
                type: e.type,
                props: e.props,
                key: e.key,
                parentKey: i ? i.key : null,
                value: e.value,
                level: i ? i.level + 1 : 0,
                index: e.index,
                rendered: e.rendered,
                textValue: e.textValue,
                'aria-label': e['aria-label'],
                wrapper: e.wrapper,
                shouldInvalidate: e.shouldInvalidate,
                hasChildNodes: e.hasChildNodes,
                childNodes: a(function* () {
                    if (!e.hasChildNodes) return;
                    let n = 0;
                    for (let r of e.childNodes()) for (let e of (null != r.key && (r.key = `${u.key}${r.key}`), (r.index = n), l.getFullNode(r, l.getChildState(t, r), u.key, u))) n++, yield e;
                })
            };
        yield u;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function a(e) {
    let t = [],
        n = null;
    return {
        *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let r of (!n && (n = e()), n)) t.push(r), yield r;
        }
    };
}
function s(e) {
    return e[0].toUpperCase() + e.slice(1);
}
function o(e, t, n) {
    let a = (0, r.useMemo)(() => new i(), []),
        { children: s, items: o, collection: l } = e;
    return (0, r.useMemo)(
        () =>
            l
                ? l
                : t(
                      a.build(
                          {
                              children: s,
                              items: o
                          },
                          n
                      )
                  ),
        [a, s, o, l, n, t]
    );
}
function l(e, t) {
    return 'function' == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
}
function u(e) {
    return c(e, 0);
}
function c(e, t) {
    if (t < 0) return;
    let n = 0;
    for (let r of e) {
        if (n === t) return r;
        n++;
    }
}
function d(e) {
    let t;
    for (let n of e) t = n;
    return t;
}
function f(e, t, n) {
    if (t.parentKey === n.parentKey) return t.index - n.index;
    let r = [..._(e, t), t],
        i = [..._(e, n), n],
        a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
    return -1 !== a ? ((t = r[a]), (n = i[a]), t.index - n.index) : r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1);
}
function _(e, t) {
    let n = [];
    for (; (null == t ? void 0 : t.parentKey) != null; ) (t = e.getItem(t.parentKey)), n.unshift(t);
    return n;
}
let h = new WeakMap();
function p(e) {
    let t = h.get(e);
    if (null != t) return t;
    t = 0;
    let n = (r) => {
        for (let i of r) 'section' === i.type ? n(l(i, e)) : t++;
    };
    return n(e), h.set(e, t), t;
}
