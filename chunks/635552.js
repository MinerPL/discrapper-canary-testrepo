n.d(t, {
  W: function() {
return s;
  }
}), n(47120);
var r = n(470079),
  a = n(809206),
  o = n(350327),
  l = n(328456),
  i = n(689938);
let s = e => {
  let {
product: t,
onSuccess: s,
onError: c
  } = e, [d, u] = r.useState(!1), {
firstAvatarDecoration: f,
firstProfileEffect: p
  } = (0, l.R)(t);
  return {
handleUseNow: r.useCallback(async () => {
  u(!0);
  try {
    if (null != f && await (0, a.Mn)({
        avatarDecoration: f
      }), null != p) {
      let e = {
        profile_effect_id: p.id
      };
      await (0, o.Z)(e);
    } {
      let {
        ToastPosition: e,
        ToastType: t,
        createToast: r,
        popToast: a,
        showToast: o
      } = await Promise.resolve().then(n.bind(n, 481060));
      a(), o(r(i.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION, t.MESSAGE, {
        duration: 6000,
        position: e.TOP
      }));
    }
    null == s || s();
  } catch (e) {
    null == c || c(e);
  } finally {
    u(!1);
  }
}, [
  f,
  p,
  s,
  c
]),
isApplying: d
  };
};