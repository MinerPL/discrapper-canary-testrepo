n.d(t, {
  z: function() {
return u;
  }
});
var r = n(544891),
  i = n(570140),
  a = n(881052),
  o = n(25251),
  s = n(981631);
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
};
  },
  u = async function() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
if (!(!e && (o.Z.hasFetched() || o.Z.isFetching))) {
  if (o.Z.canFetch()) {
    i.Z.dispatch({
      type: 'USER_PROFILE_EFFECTS_FETCH'
    });
    try {
      let {
        body: e
      } = await r.tn.get(s.ANM.USER_PROFILE_EFFECTS), t = (null == e ? void 0 : e.profile_effect_configs).map(l);
      i.Z.dispatch({
        type: 'USER_PROFILE_EFFECTS_FETCH_SUCCESS',
        profileEffects: t
      });
    } catch (e) {
      throw i.Z.dispatch({
        type: 'USER_PROFILE_EFFECTS_FETCH_FAILURE',
        error: e
      }), new a.Hx(e);
    }
  }
}
  };