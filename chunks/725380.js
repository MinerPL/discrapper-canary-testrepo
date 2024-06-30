n.d(t, {
    $E: function () {
        return s;
    },
    Ky: function () {
        return a;
    },
    RF: function () {
        return o;
    }
}), n(47120);
let r = {};
function i(e, t) {
    return ''.concat(e, ':').concat(t);
}
function a(e, t) {
    return r[i(e, t)];
}
function o(e, t, n) {
    let a = i(e, t);
    r[a] = {
        ...r[a],
        ...n
    };
}
function s(e) {
    for (let t in r) {
        let [n, i] = function (e) {
            let [t, n] = e.split(':');
            return [
                t,
                n
            ];
        }(t);
        e(n, i, r[t]);
    }
    r = {};
}
