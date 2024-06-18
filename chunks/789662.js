"use strict";
var i, r, s, o;
n.d(t, {
  AR: function() {
    return i
  },
  XR: function() {
    return r
  },
  nf: function() {
    return a
  }
}), (s = i || (i = {}))[s.KeepAsIs = 0] = "KeepAsIs", s[s.UseGreyDot = 1] = "UseGreyDot", (o = r || (r = {}))[o.Low = 0] = "Low", o[o.Medium = 1] = "Medium", o[o.High = 2] = "High";
let a = {
  careALot: {
    monthOpenPerc: .01,
    yearOpenPerc: .01,
    sentMessages: 1e3
  },
  careALittle: {
    monthOpenPerc: .001,
    yearOpenPerc: .001,
    sentMessages: 5,
    minOpens: 2
  },
  smallServerSize: 50,
  mediumServerSize: 200,
  frecency: {
    yearMinOpensSmallServer: 10,
    yearMinOpensLargeServer: 50,
    monthMinOpens: 2,
    totalOpensPercent: .1
  }
}