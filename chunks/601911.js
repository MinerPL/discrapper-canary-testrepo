t.d(e, {
    y: function () {
        return l;
    }
});
var i = t(591759);
function l(n, e) {
    let t = n.getIconSource(e);
    if (null != t && 'number' != typeof t) {
        let n;
        if ((Array.isArray(t) ? t.length > 0 && (n = t[0].uri) : (n = t.uri), null != n)) {
            var l;
            return null !== (l = i.Z.toURLSafe(n)) && void 0 !== l ? l : void 0;
        }
    }
}
