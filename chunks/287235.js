n.d(t, {
    JD: function () {
        return E;
    },
    Wd: function () {
        return d;
    },
    mF: function () {
        return c;
    }
}), n(735250);
var r = n(470079), i = n(372817), a = n(5967), o = n(420212);
let s = 'data-jump-section', l = 'global', u = r.createContext(l);
function c() {
    let e = r.useContext(u);
    return r.useMemo(() => ({ [s]: e }), [e]);
}
function d(e) {
    let t = c();
    return e.children(t);
}
async function _(e) {
    var t, n, r, u;
    if (e.key !== o.LT)
        return;
    let c = (0, a.uB)(e);
    if (null == c)
        return;
    let d = null, _ = null, E = e.target;
    for (; null != E;) {
        if (E.hasAttribute(s)) {
            d = E.getAttribute(s), _ = E;
            break;
        }
        E = E.parentElement;
    }
    let f = (0, i.E)({
        getFocusableElements: () => Array.from(c.querySelectorAll('['.concat(s, '="').concat(null != d ? d : l, '"]'))),
        getActiveElement: () => c.activeElement
    });
    if ((null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == _) {
        null === (n = f.getFirstFocusableElement()) || void 0 === n || n.focus();
        return;
    }
    e.getModifierState('Shift') ? null === (r = await f.getPreviousFocusableElement({
        wrap: !0,
        from: _
    })) || void 0 === r || r.focus() : null === (u = await f.getNextFocusableElement({
        wrap: !0,
        from: _
    })) || void 0 === u || u.focus();
}
function E(e) {
    r.useEffect(() => {
        if (e)
            return window.addEventListener('keydown', _), () => {
                window.removeEventListener('keydown', _);
            };
    }, [e]);
}
