r.d(t, {
    Z: function () {
        return i;
    }
});
var n = r(192617);
function i(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, n.Z)(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return (0, n.Z)(e, t);
    }
}
