t.d(n, {
  C: function() {
return l;
  },
  k: function() {
return u;
  }
});
var r = t(470079),
  i = t(937615),
  o = t(689938);

function l(e) {
  return r.useMemo(() => {
if (null == e)
  return;
let n = null != e.role_id,
  t = e.attachments_count > 0;
if (n && t)
  return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
if (n)
  return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
if (t)
  return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
  }, [e]);
}

function u(e) {
  return r.useMemo(() => {
if ((null == e ? void 0 : e.price) == null)
  return;
let {
  amount: n,
  currency: t
} = e.price;
return (0, i.T4)(n, t);
  }, [e]);
}