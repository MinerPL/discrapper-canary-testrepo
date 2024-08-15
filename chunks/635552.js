n.d(t, {
  W: function() {
return d;
  }
}), n(47120);
var a = n(470079),
  r = n(979554),
  s = n(809206),
  o = n(350327),
  l = n(884697),
  i = n(328456),
  c = n(689938);
let d = e => {
  let {
product: t,
onSuccess: d,
onError: u
  } = e, [f, g] = a.useState(!1), {
firstAvatarDecoration: p,
firstProfileEffect: C
  } = (0, i.R)(t), v = (0, l.x6)(t) ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION : t.type === r.Z.AVATAR_DECORATION ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
  return {
handleUseNow: a.useCallback(async () => {
  g(!0);
  try {
    if (null != p && await (0, s.Mn)({
        avatarDecoration: p
      }), null != C) {
      let e = {
        profile_effect_id: C.id
      };
      await (0, o.Z)(e);
    } {
      let {
        ToastPosition: e,
        ToastType: t,
        createToast: a,
        popToast: r,
        showToast: s
      } = await Promise.resolve().then(n.bind(n, 481060));
      r(), s(a(v, t.MESSAGE, {
        duration: 6000,
        position: e.TOP
      }));
    }
    null == d || d();
  } catch (e) {
    null == u || u(e);
  } finally {
    g(!1);
  }
}, [
  p,
  C,
  d,
  v,
  u
]),
isApplying: f
  };
};