t.d(n, {
  EB: function() {
return l;
  },
  Je: function() {
return s;
  },
  cf: function() {
return u;
  },
  mh: function() {
return a;
  }
});
var i = t(570140),
  r = t(881052),
  o = t(824389);
let l = async e => {
  i.Z.dispatch({
type: 'GUILD_PRODUCTS_FETCH',
guildId: e
  });
  try {
let n = await o.uV(e);
i.Z.dispatch({
  type: 'GUILD_PRODUCTS_FETCH_SUCCESS',
  guildId: e,
  products: n
});
  } catch (n) {
i.Z.dispatch({
  type: 'GUILD_PRODUCTS_FETCH_FAILURE',
  guildId: e
});
  }
}, u = async (e, n) => {
  i.Z.dispatch({
type: 'GUILD_PRODUCT_FETCH',
productId: n
  });
  try {
let t = await o.p9(e, n);
return i.Z.dispatch({
  type: 'GUILD_PRODUCT_FETCH_SUCCESS',
  product: t
}), t;
  } catch (e) {
throw i.Z.dispatch({
  type: 'GUILD_PRODUCT_FETCH_FAILURE',
  productId: n,
  error: new r.Hx(e)
}), e;
  }
};
async function s(e, n, t) {
  let r = await o.Je(e, n, t);
  return i.Z.dispatch({
type: 'GUILD_PRODUCT_UPDATE',
product: r
  }), r;
}
async function a(e, n) {
  return await o.mh(e, n), i.Z.dispatch({
type: 'GUILD_PRODUCT_DELETE',
productId: n
  }), !0;
}