n.d(t, {
    VG: function () {
        return a;
    },
    uB: function () {
        return o;
    }
});
let r = /input/i, i = /textarea/i;
function a(e) {
    if (null == e)
        return !1;
    if ('true' === e.getAttribute('contenteditable') || i.test(e.tagName))
        return !0;
    if (r.test(e.tagName)) {
        var t;
        let n = null !== (t = e.getAttribute('type')) && void 0 !== t ? t : 'text';
        if ('text' === n || 'password' === n)
            return !0;
    }
    return !1;
}
function o(e) {
    let {target: t} = e;
    return null == t ? null : 'ownerDocument' in t ? t.ownerDocument : 'document' in t ? t.document : (console.warn('Unable to get owner document from event', e.type), null);
}
