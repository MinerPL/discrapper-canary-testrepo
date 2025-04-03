function r(e, n, r) {
    let i = 0,
        a = e.length;
    for (; a > 0; ) {
        let s = (a / 2) | 0,
            o = i + s;
        0 >= r(e[o], n) ? ((i = ++o), (a -= s + 1)) : (a = s);
    }
    return i;
}
Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = r);
