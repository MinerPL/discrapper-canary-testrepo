n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var a = n(470079),
  r = n(668781),
  i = n(881052),
  o = n(824389),
  s = n(179838),
  l = n(689938);

function c(e, t) {
  let [n, c] = a.useState(!1);
  return {
isLoading: n,
downloadAttachment: a.useCallback(async n => {
  if (null != e && null != t) {
    c(!0);
    try {
      let {
        url: a
      } = await o.gs({
        guildId: e,
        productId: t,
        attachmentId: n
      });
      await s.L(a);
    } catch (t) {
      let e = t instanceof i.Hx ? t.getAnyErrorMessage() : void 0;
      r.Z.show({
        title: l.Z.Messages.ERROR_GENERIC_TITLE,
        body: null != e ? e : l.Z.Messages.GENERIC_ERROR_BODY
      });
    } finally {
      c(!1);
    }
  }
}, [
  e,
  t
])
  };
}