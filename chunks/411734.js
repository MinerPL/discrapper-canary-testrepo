n.d(t, {
    R: function () {
        return o;
    },
    n: function () {
        return s;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079);
let a = 0;
function s(e, t) {
    let [n] = i.useState(() => a++),
        r = ''.concat('data-focus-blocked', '-').concat(n);
    i.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) {
                var n;
                let e = ((n = t), document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) })),
                    i = e.currentNode;
                for (; null !== i; ) {
                    let t = i,
                        n = t.tabIndex;
                    (t.tabIndex = -1), t.setAttribute(r, String(n)), (i = e.nextNode());
                }
                return () => {
                    t.querySelectorAll('['.concat(r, ']')).forEach((e) => {
                        let t = e.getAttribute(r);
                        if (null != t) {
                            let n = parseInt(t, 10);
                            e.tabIndex = n;
                        }
                    });
                };
            }
        }
    }, [t]);
}
function o(e) {
    let { children: t, className: n, enabled: a = !0 } = e,
        o = i.useRef(null);
    return (
        s(o, a),
        (0, r.jsx)('div', {
            ref: o,
            className: n,
            children: t
        })
    );
}
