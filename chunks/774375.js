r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(693598), n = r(15393);
function s(e, t) {
    if (t && ('object' === (0, a.Z)(t) || 'function' == typeof t))
        return t;
    if (void 0 !== t)
        throw TypeError('Derived constructors may only return object or undefined');
    return (0, n.Z)(e);
}
