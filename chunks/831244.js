"use strict";
i.r(t), i.d(t, {
  getBurstAnimation: function() {
    return s
  }
});
var n = i("347904");
let a = [{
    load: () => i.e("59642").then(i.t.bind(i, "759983", 19))
  }, {
    load: () => i.e("54931").then(i.t.bind(i, "488583", 19))
  }, {
    load: () => i.e("22523").then(i.t.bind(i, "420183", 19))
  }, {
    load: () => i.e("35247").then(i.t.bind(i, "782543", 19))
  }, {
    load: () => i.e("69923").then(i.t.bind(i, "267858", 19))
  }, {
    load: () => i.e("96246").then(i.t.bind(i, "108035", 19))
  }, {
    load: () => i.e("30997").then(i.t.bind(i, "299665", 19))
  }, {
    load: () => i.e("50987").then(i.t.bind(i, "545755", 19))
  }, {
    load: () => i.e("14192").then(i.t.bind(i, "412825", 19))
  }, {
    load: () => i.e("78073").then(i.t.bind(i, "82134", 19))
  }, {
    load: () => i.e("54021").then(i.t.bind(i, "913837", 19))
  }, {
    load: () => i.e("7573").then(i.t.bind(i, "403249", 19))
  }, {
    load: () => i.e("219").then(i.t.bind(i, "36302", 19))
  }, {
    load: () => i.e("70528").then(i.t.bind(i, "181976", 19))
  }, {
    load: () => i.e("74294").then(i.t.bind(i, "654947", 19))
  }, {
    load: () => i.e("91199").then(i.t.bind(i, "945518", 19))
  }, {
    load: () => i.e("66071").then(i.t.bind(i, "634794", 19))
  }, {
    load: () => i.e("73921").then(i.t.bind(i, "558619", 19))
  }],
  s = async function(e, t, i) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    let s = a[(0, n.getBurstAnimationHash)("".concat(e).concat(t).concat(i)) % a.length];
    return await s.load()
  }