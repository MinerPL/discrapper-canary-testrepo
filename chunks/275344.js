n.d(t, {
    Z: function () {
        return m;
    },
    v: function () {
        return _;
    }
});
var i = n(735250), a = n(470079), s = n(512722), l = n.n(s), r = n(399606), o = n(904245), c = n(375954), d = n(918088);
let u = a.createContext(void 0);
function _(e) {
    var t;
    let n = null !== (t = a.useContext(u)) && void 0 !== t ? t : e;
    return l()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function E(e) {
    let {
            message: t,
            children: n
        } = e, s = (0, r.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [
            t.channel_id,
            t.id
        ]), l = null != s;
    return a.useEffect(() => {
        !l && o.Z.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        });
    }, [
        l,
        t.channel_id,
        t.id
    ]), (0, i.jsx)(u.Provider, {
        value: null != s ? s : t,
        children: n
    });
}
function m(e) {
    let {
        message: t,
        children: n
    } = e;
    return (0, d.r8)(t) ? (0, i.jsx)(i.Fragment, { children: n }) : (0, i.jsx)(E, {
        message: t,
        children: n
    });
}
