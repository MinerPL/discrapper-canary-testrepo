"use strict";
n.d(t, {
  z: function() {
    return u
  }
});
var i = n(544891),
  r = n(570140),
  s = n(881052),
  o = n(25251),
  a = n(981631);
let l = e => {
    let {
      sku_id: t,
      ...n
    } = e;
    return {
      id: n.id,
      skuId: t,
      config: {
        ...n,
        skuId: t
      }
    }
  },
  u = async function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!(!e && (o.Z.hasFetched() || o.Z.isFetching))) {
      if (o.Z.canFetch()) {
        r.Z.dispatch({
          type: "USER_PROFILE_EFFECTS_FETCH"
        });
        try {
          let {
            body: e
          } = await i.tn.get(a.ANM.USER_PROFILE_EFFECTS), t = (null == e ? void 0 : e.profile_effect_configs).map(l);
          r.Z.dispatch({
            type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
            profileEffects: t
          })
        } catch (e) {
          throw r.Z.dispatch({
            type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
            error: e
          }), new s.Hx(e)
        }
      }
    }
  }