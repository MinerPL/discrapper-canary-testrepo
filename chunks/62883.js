n.r(t),
    n.d(t, {
        contextMenuCallbackNative: function () {
            return s;
        },
        contextMenuCallbackWeb: function () {
            return o;
        },
        getSelectionText: function () {
            return a;
        }
    });
var r = n(735250);
n(470079);
var i = n(239091);
function a() {
    let e;
    if (null != window.getSelection) {
        var t;
        e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString();
    } else null != document.selection && 'Control' !== document.selection.type && (e = document.selection.createRange().text);
    return null != e ? e : '';
}
function s(e) {
    let t = a(),
        s = e.target;
    if ((null == s ? void 0 : s.tagName) === 'TEXTAREA' || (null == s ? void 0 : s.tagName) === 'INPUT') {
        if ((null == s ? void 0 : s.type) !== 'checkbox')
            return (0, i.jW)(
                e,
                async () => {
                    let { default: e } = await n.e('99989').then(n.bind(n, 889662));
                    return (n) =>
                        (0, r.jsx)(e, {
                            ...n,
                            text: t
                        });
                },
                { enableSpellCheck: !0 }
            );
    } else if ('none' === window.getComputedStyle(s).getPropertyValue('-webkit-user-select')) {
        e.preventDefault();
        return;
    } else {
        let a,
            s,
            o,
            l = e.target;
        for (; null != l; ) 'src' in l && null != l.src && (s = l.src), 'href' in l && null != l.href && ((a = l.href), (o = l.textContent)), (l = null == l ? void 0 : l.parentNode);
        if (null != s)
            return (0, i.jW)(e, async () => {
                let { default: e } = await n.e('12241').then(n.bind(n, 115512));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        src: null != s ? s : ''
                    });
            });
        if (null != a)
            return (0, i.jW)(e, async () => {
                let { default: e } = await n.e('96473').then(n.bind(n, 805362));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        href: a,
                        textContent: o
                    });
            });
        else if (null != t && '' !== t)
            return (0, i.jW)(e, async () => {
                let { default: e } = await n.e('3865').then(n.bind(n, 745763));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        text: t
                    });
            });
    }
    return e.preventDefault(), null;
}
function o(e) {
    let t = !1,
        n = e.target;
    if ((null == n ? void 0 : n.tagName) === 'INPUT' || (null == n ? void 0 : n.tagName) === 'TEXTAREA') t = !0;
    else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest('[contenteditable=true]')) != null) t = !0;
    else if (null != a() && '' !== a()) t = !0;
    else {
        let n,
            r,
            i = e.target;
        for (; null != i; ) 'src' in i && null != i.src && (r = i.src), 'href' in i && null != i.href && (n = i.href), (i = null == i ? void 0 : i.parentNode);
        (null != n || null != r) && (t = !0);
    }
    !t && e.preventDefault();
}
