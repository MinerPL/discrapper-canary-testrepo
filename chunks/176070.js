n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(646391),
    o = n(871074),
    a = n(662939),
    i = n(299188),
    s = n(35972);
function c(e, t, n) {
    if ((0, s.Z)()) c = r(o).call(o);
    else
        c = function (e, t, n) {
            var o = [null];
            a(o).apply(o, t);
            var s = new (r(Function).apply(e, o))();
            return n && (0, i.Z)(s, n.prototype), s;
        };
    return c.apply(null, arguments);
}
