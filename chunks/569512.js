"use strict";
i.r(t), i.d(t, {
  getBurstAnimation: function() {
    return l
  }
});
var n = i("103475");
let a = [{
    load: () => i.el("448779").then(i.t.bind(i, "448779", 19))
  }, {
    load: () => i.el("734436").then(i.t.bind(i, "734436", 19))
  }, {
    load: () => i.el("494925").then(i.t.bind(i, "494925", 19))
  }, {
    load: () => i.el("199777").then(i.t.bind(i, "199777", 19))
  }, {
    load: () => i.el("942466").then(i.t.bind(i, "942466", 19))
  }, {
    load: () => i.el("56957").then(i.t.bind(i, "56957", 19))
  }, {
    load: () => i.el("547173").then(i.t.bind(i, "547173", 19))
  }, {
    load: () => i.el("485996").then(i.t.bind(i, "485996", 19))
  }, {
    load: () => i.el("871996").then(i.t.bind(i, "871996", 19))
  }, {
    load: () => i.el("584037").then(i.t.bind(i, "584037", 19))
  }, {
    load: () => i.el("320512").then(i.t.bind(i, "320512", 19))
  }, {
    load: () => i.el("925536").then(i.t.bind(i, "925536", 19))
  }, {
    load: () => i.el("522373").then(i.t.bind(i, "522373", 19))
  }, {
    load: () => i.el("837366").then(i.t.bind(i, "837366", 19))
  }, {
    load: () => i.el("42949").then(i.t.bind(i, "42949", 19))
  }, {
    load: () => i.el("294705").then(i.t.bind(i, "294705", 19))
  }, {
    load: () => i.el("454599").then(i.t.bind(i, "454599", 19))
  }, {
    load: () => i.el("814738").then(i.t.bind(i, "814738", 19))
  }],
  l = async function(e, t, i) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    let l = (0, n.getBurstAnimationHash)("".concat(e).concat(t).concat(i)),
      o = a[l % a.length];
    return await o.load()
  }