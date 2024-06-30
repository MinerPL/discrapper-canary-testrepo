function n() {
    let t = 'function' == typeof WeakSet, e = t ? new WeakSet() : [];
    return [
        function (r) {
            if (t)
                return !!e.has(r) || (e.add(r), !1);
            for (let t = 0; t < e.length; t++)
                if (e[t] === r)
                    return !0;
            return e.push(r), !1;
        },
        function (r) {
            if (t)
                e.delete(r);
            else
                for (let t = 0; t < e.length; t++)
                    if (e[t] === r) {
                        e.splice(t, 1);
                        break;
                    }
        }
    ];
}
r.d(e, {
    i: function () {
        return n;
    }
});
