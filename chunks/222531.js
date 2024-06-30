var e = r(581031), o = r(740362), i = r(299623), u = r(953326).indexOf, c = r(624906), f = e([].push);
t.exports = function (t, n) {
    var r, e = i(t), a = 0, s = [];
    for (r in e)
        !o(c, r) && o(e, r) && f(s, r);
    for (; n.length > a;)
        o(e, r = n[a++]) && (~u(s, r) || f(s, r));
    return s;
};
