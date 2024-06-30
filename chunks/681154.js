n.d(t, {
    Gx: function () {
        return u;
    },
    Op: function () {
        return m;
    },
    T4: function () {
        return d;
    },
    V_: function () {
        return c;
    }
});
var a, s, r = n(539573), l = n(689938);
function i(e, t) {
    return {
        type: e,
        message: null != t ? t : null
    };
}
function o(e) {
    return i(0, e);
}
function c() {
    return i(0, l.Z.Messages.FORUM_POST_EMPTY_TITLE_ERROR);
}
function d() {
    return i(0, l.Z.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR);
}
function u(e, t) {
    return i(1, (0, r.$q)(e, null == t ? void 0 : t.id));
}
function m(e, t) {
    var n;
    return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null !== (n = e.message) && void 0 !== n ? n : null;
}
(a = s || (s = {}))[a.EmptyContent = 0] = 'EmptyContent', a[a.AutomodViolation = 1] = 'AutomodViolation', a[a.EmptyTags = 2] = 'EmptyTags';
