"use strict";
t.d(s, {
  Z: function() {
    return S
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(481060),
  o = t(153124),
  c = t(584825),
  d = t(723047),
  u = t(727843),
  E = t(290348),
  _ = t(518470),
  I = t(22902),
  T = t(783454),
  N = t(689938),
  m = t(169769);

function S() {
  var e;
  let {
    editStateId: s
  } = (0, u.N)(), [t, l] = E.TT(s), [S, h] = E.F2(s), g = (0, c.oC)(s), {
    options: x
  } = (0, I.Z)(null !== (e = null == g ? void 0 : g.active_trial) && void 0 !== e ? e : null), C = (0, _.Z)(), R = null != t, L = i.useCallback(e => {
    let s = x.find(e => e.isDefault);
    a()(null != s, "Missing default trial duartion option"), l(e ? s.value : null)
  }, [l, x]), O = (0, d.mY)(), A = (0, o.Dt)(), p = (0, o.Dt)();
  return (0, n.jsxs)(T.Z, {
    title: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
    description: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DESCRIPTION,
    children: [(0, n.jsx)(r.FormSwitch, {
      onChange: (e, s) => L(e),
      value: R,
      disabled: O,
      hideBorder: !0,
      children: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_ENABLE_FREE_TRIAL_CTA
    }), (0, n.jsxs)(r.FormSection, {
      title: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_TITLE,
      titleId: A,
      disabled: !R || O,
      children: [(0, n.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: m.formDescription,
        disabled: !R || O,
        children: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_DESCRIPTION
      }), (0, n.jsx)(r.Spacer, {
        size: 8
      }), (0, n.jsx)(r.SingleSelect, {
        "aria-labelledby": A,
        options: x,
        className: m.formInput,
        placeholder: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DISABLED,
        value: t,
        onChange: l,
        maxVisibleItems: 5,
        isDisabled: !R || O,
        look: r.SelectLooks.CUSTOM
      })]
    }), (0, n.jsx)(r.Spacer, {
      size: 24
    }), (0, n.jsxs)(r.FormSection, {
      title: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_TITLE,
      titleId: p,
      disabled: !R || O,
      children: [(0, n.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: m.formDescription,
        disabled: !R || O,
        children: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_DESCRIPTION
      }), (0, n.jsx)(r.SingleSelect, {
        "aria-labelledby": p,
        options: C,
        className: m.formInput,
        value: S,
        onChange: h,
        maxVisibleItems: 5,
        isDisabled: !R || O,
        look: r.SelectLooks.CUSTOM
      })]
    })]
  })
}