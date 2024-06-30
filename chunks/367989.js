var r = n(911331);
function i(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
t.Z = function (e, t) {
    var n, a = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (i(t) && 'function' == typeof t.behavior)
        return t.behavior(a ? (0, r.Z)(e, t) : []);
    if (!!a) {
        var o = !1 === (n = t) ? {
            block: 'end',
            inline: 'nearest'
        } : i(n) ? n : {
            block: 'start',
            inline: 'nearest'
        };
        return function (e, t) {
            void 0 === t && (t = 'auto');
            var n = 'scrollBehavior' in document.body.style;
            e.forEach(function (e) {
                var r = e.el, i = e.top, a = e.left;
                r.scroll && n ? r.scroll({
                    top: i,
                    left: a,
                    behavior: t
                }) : (r.scrollTop = i, r.scrollLeft = a);
            });
        }((0, r.Z)(e, o), o.behavior);
    }
};
