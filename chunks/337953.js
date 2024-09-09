a.d(t, {
    Z: function () {
        return o;
    }
});
var s = a(512722),
    n = a.n(s),
    l = a(875425);
function o(e) {
    if (e !== l.F.TODAY) return n()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
