function r(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
n.d(t, {
    E: function () {
        return r;
    }
});
