var e = n(566885),
    o = n(470592),
    i = n(339718),
    u = n(49693),
    f = function (t) {
        var r = 1 === t;
        return function (n, f, a) {
            for (var c, s = i(n), y = o(s), p = e(f, a), h = u(y); h-- > 0; )
                if (p((c = y[h]), h, s))
                    switch (t) {
                        case 0:
                            return c;
                        case 1:
                            return h;
                    }
            return r ? -1 : void 0;
        };
    };
t.exports = {
    findLast: f(0),
    findLastIndex: f(1)
};
