t.d(n, {
    b: function () {
        return c;
    }
});
var i = t(981631);
function c(e, n, t, c) {
    let r = null != t ? t : n;
    return null != r && e.can(i.Plq.CREATE_INSTANT_INVITE, r) || null != n && null != n.vanityURLCode || (null == c ? void 0 : c.invite_code) != null;
}
