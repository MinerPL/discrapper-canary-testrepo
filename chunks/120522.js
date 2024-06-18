"use strict";
n.d(t, {
  S: function() {
    return _
  },
  z: function() {
    return u
  }
});
var i = n(544891),
  r = n(570140),
  s = n(168232),
  o = n(594174),
  a = n(114064),
  l = n(981631);
async function u() {
  let e = o.default.getCurrentUser();
  try {
    let {
      body: t
    } = await i.tn.get({
      url: l.ANM.USER_PERKS_DEMOS
    });
    (0, s.QI)(e) && (t = {
      ...t,
      ... function() {
        let e = a.Z.overrides(),
          t = {};
        for (let r in e) {
          var n, i;
          t[r] = null !== (i = null === (n = e[r]) || void 0 === n ? void 0 : n.available) && void 0 !== i ? i : void 0
        }
        return t
      }()
    }), r.Z.dispatch({
      type: "PREMIUM_PERKS_DEMOS_FETCH_SUCCESS",
      demos: t
    })
  } catch (e) {
    r.Z.dispatch({
      type: "PREMIUM_PERKS_DEMOS_FETCH_FAILURE"
    })
  }
}
async function _(e) {
  if (a.Z.getActivated()[e]) return !0;
  let t = o.default.getCurrentUser();
  try {
    return await i.tn.post({
      url: l.ANM.USER_PERKS_DEMOS_ACTIVATE(e)
    }), d(e), !0
  } catch {
    if ((0, s.QI)(t) && function(e) {
        var t;
        return (null === (t = a.Z.overrides()[e]) || void 0 === t ? void 0 : t.activateSuccess) === !0
      }(e)) return d(e), !0;
    return r.Z.dispatch({
      type: "PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE",
      perkType: e
    }), !1
  }
}

function d(e) {
  r.Z.dispatch({
    type: "PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS",
    perkType: e
  })
}