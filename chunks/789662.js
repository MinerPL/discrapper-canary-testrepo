var r, i, a, o;
n.d(t, {
    AR: function () {
        return r;
    },
    XR: function () {
        return i;
    },
    nf: function () {
        return s;
    }
}), (a = r || (r = {}))[a.KeepAsIs = 0] = 'KeepAsIs', a[a.UseGreyDot = 1] = 'UseGreyDot', (o = i || (i = {}))[o.Low = 0] = 'Low', o[o.Medium = 1] = 'Medium', o[o.High = 2] = 'High';
let s = {
    careALot: {
        monthOpenPerc: 0.01,
        yearOpenPerc: 0.01,
        sentMessages: 1000
    },
    careALittle: {
        monthOpenPerc: 0.001,
        yearOpenPerc: 0.001,
        sentMessages: 5,
        minOpens: 2
    },
    smallServerSize: 50,
    mediumServerSize: 200,
    frecency: {
        yearMinOpensSmallServer: 10,
        yearMinOpensLargeServer: 50,
        monthMinOpens: 2,
        totalOpensPercent: 0.1
    }
};
