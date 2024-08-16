var a = {
        about: 'körülbelül',
        over: 'több mint',
        almost: 'majdnem',
        lessthan: 'kevesebb mint'
    },
    i = {
        xseconds: ' másodperc',
        halfaminute: 'fél perc',
        xminutes: ' perc',
        xhours: ' óra',
        xdays: ' nap',
        xweeks: ' hét',
        xmonths: ' hónap',
        xyears: ' év'
    },
    n = {
        xseconds: {
            '-1': ' másodperccel ezelőtt',
            1: ' másodperc múlva',
            0: ' másodperce'
        },
        halfaminute: {
            '-1': 'fél perccel ezelőtt',
            1: 'fél perc múlva',
            0: 'fél perce'
        },
        xminutes: {
            '-1': ' perccel ezelőtt',
            1: ' perc múlva',
            0: ' perce'
        },
        xhours: {
            '-1': ' órával ezelőtt',
            1: ' óra múlva',
            0: ' órája'
        },
        xdays: {
            '-1': ' nappal ezelőtt',
            1: ' nap múlva',
            0: ' napja'
        },
        xweeks: {
            '-1': ' héttel ezelőtt',
            1: ' hét múlva',
            0: ' hete'
        },
        xmonths: {
            '-1': ' hónappal ezelőtt',
            1: ' hónap múlva',
            0: ' hónapja'
        },
        xyears: {
            '-1': ' évvel ezelőtt',
            1: ' év múlva',
            0: ' éve'
        }
    };
t.Z = function (e, t, r) {
    var s = e.match(/about|over|almost|lessthan/i),
        d = s ? e.replace(s[0], '') : e,
        o = (null == r ? void 0 : r.addSuffix) === !0,
        l = d.toLowerCase(),
        u = (null == r ? void 0 : r.comparison) || 0,
        m = o ? n[l][u] : i[l],
        c = 'halfaminute' === l ? m : t + m;
    return s && (c = a[s[0].toLowerCase()] + ' ' + c), c;
};
