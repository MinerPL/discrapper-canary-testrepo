n.d(t, {
    T: function () {
        return i;
    }
});
var r = n(987790);
function i(e, t) {
    for (var n = '', i = 0; i < e.length; i++) {
        var a = e.charAt(i);
        if ('j' === a) {
            for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === a; ) s++, i++;
            var o = 1 + (1 & s),
                l = s < 2 ? 1 : 3 + (s >> 1),
                u = (function (e) {
                    var t,
                        n = e.hourCycle;
                    if ((void 0 === n && e.hourCycles && e.hourCycles.length && (n = e.hourCycles[0]), n))
                        switch (n) {
                            case 'h24':
                                return 'k';
                            case 'h23':
                                return 'H';
                            case 'h12':
                                return 'h';
                            case 'h11':
                                return 'K';
                            default:
                                throw Error('Invalid hourCycle');
                        }
                    var i = e.language;
                    return 'root' !== i && (t = e.maximize().region), (r._[t || ''] || r._[i || ''] || r._[''.concat(i, '-001')] || r._['001'])[0];
                })(t);
            for (('H' == u || 'k' == u) && (l = 0); l-- > 0; ) n += 'a';
            for (; o-- > 0; ) n = u + n;
        } else 'J' === a ? (n += 'H') : (n += a);
    }
    return n;
}
