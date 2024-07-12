n.d(t, {
  r: function() {
return u;
  },
  u: function() {
return l;
  }
});
var r = n(674180),
  i = n(994592),
  a = n(652515),
  o = n(550951),
  s = n(981631);

function l(e) {
  let t = (0, a.pX)(),
n = (0, a.RF)(null == e ? void 0 : e.id, 'channel_list'),
l = (0, i.mY)(null == e ? void 0 : e.id),
u = (0, o.g)(e, 'channel_list'),
{
  shouldHideGuildPurchaseEntryPoints: c
} = (0, r.uP)(null == e ? void 0 : e.id);
  return !!t && null != e && !c && (e.hasFeature(s.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && l || u);
}

function u(e, t) {
  let n = (0, a.vw)(),
r = (0, a.C4)(null == e ? void 0 : e.id, 'channel_list'),
o = (0, i.on)(null == e ? void 0 : e.id, t);
  return !!n && null != e && (e.hasFeature(s.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || r && o);
}