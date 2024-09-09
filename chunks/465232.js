e.exports = function (e, t) {
    var r,
        i,
        a,
        s,
        o,
        l,
        u = [];
    for (a = 0, r = n(727729)(e), s = n(862546), o = n(861391), l = n(64000); a < r.length; ++a) s[(i = r[a])] && (i = s[i]), t && 'keypress' !== t && o[i] && ((i = o[i]), u.push('shift')), l(i) && u.push(i);
    return (
        (t = this.pickBestAction(i, u, t)),
        {
            key: i,
            modifiers: u,
            action: t
        }
    );
};
