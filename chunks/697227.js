t.d(n, {
    V: function () {
        return l;
    },
    W: function () {
        return o;
    }
});
var r = t(512722),
    i = t.n(r);
function o(e) {
    let n = e.items;
    return i()(1 === n.length, 'more than 1 subscription item for role subscription'), n[0].planId;
}
function l(e) {
    var n;
    let t = null == e ? void 0 : null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items;
    if (null != t) return i()(t.length <= 1, 'more than 1 renewal mutation for role subscription'), null == t ? void 0 : t[0].planId;
}
