n.r(t), n.d(t, {
    contextMenuCallbackNative: function () {
        return o;
    },
    contextMenuCallbackWeb: function () {
        return s;
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
    } else
        null != document.selection && 'Control' !== document.selection.type && (e = document.selection.createRange().text);
    return null != e ? e : '';
}
function o(e) {
    let t = a(), o = e.target;
    if ((null == o ? void 0 : o.tagName) === 'TEXTAREA' || (null == o ? void 0 : o.tagName) === 'INPUT') {
        if ((null == o ? void 0 : o.type) !== 'checkbox')
            return (0, i.jW)(e, async () => {
                let {default: e} = await n.e('99989').then(n.bind(n, 889662));
                return n => (0, r.jsx)(e, {
                    ...n,
                    text: t
                });
            }, { enableSpellCheck: !0 });
    } else if ('none' === window.getComputedStyle(o).getPropertyValue('-webkit-user-select')) {
        e.preventDefault();
        return;
    } else {
        let a, o, s, l = e.target;
        for (; null != l;)
            'src' in l && null != l.src && (o = l.src), 'href' in l && null != l.href && (a = l.href, s = l.textContent), l = null == l ? void 0 : l.parentNode;
        if (null != o)
            return (0, i.jW)(e, async () => {
                let {default: e} = await n.e('12241').then(n.bind(n, 115512));
                return t => (0, r.jsx)(e, {
                    ...t,
                    src: null != o ? o : ''
                });
            });
        if (null != a)
            return (0, i.jW)(e, async () => {
                let {default: e} = await n.e('96473').then(n.bind(n, 805362));
                return t => (0, r.jsx)(e, {
                    ...t,
                    href: a,
                    textContent: s
                });
            });
        else if (null != t && '' !== t)
            return (0, i.jW)(e, async () => {
                let {default: e} = await n.e('3865').then(n.bind(n, 745763));
                return n => (0, r.jsx)(e, {
                    ...n,
                    text: t
                });
            });
    }
    return e.preventDefault(), null;
}
function s(e) {
    let t = !1, n = e.target;
    if ((null == n ? void 0 : n.tagName) === 'INPUT' || (null == n ? void 0 : n.tagName) === 'TEXTAREA')
        t = !0;
    else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest('[contenteditable=true]')) != null)
        t = !0;
    else if (null != a() && '' !== a())
        t = !0;
    else {
        let n, r, i = e.target;
        for (; null != i;)
            'src' in i && null != i.src && (r = i.src), 'href' in i && null != i.href && (n = i.href), i = null == i ? void 0 : i.parentNode;
        (null != n || null != r) && (t = !0);
    }
    !t && e.preventDefault();
}
