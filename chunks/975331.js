"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("481060"),
  o = s("682864"),
  d = s("153124"),
  u = s("584825"),
  c = s("723047"),
  E = s("727843"),
  _ = s("290348"),
  I = s("518470"),
  T = s("22902"),
  S = s("783454"),
  f = s("689938"),
  m = s("606353");

function N() {
  var e;
  let {
    editStateId: t
  } = (0, E.useEditStateContext)(), [s, n] = _.useTrialInterval(t), [N, g] = _.useTrialLimit(t), h = (0, u.useSubscriptionTrial)(t), {
    options: C
  } = (0, T.default)(null !== (e = null == h ? void 0 : h.active_trial) && void 0 !== e ? e : null), R = (0, I.default)(), x = null != s, L = l.useCallback(e => {
    let t = C.find(e => e.isDefault);
    i()(null != t, "Missing default trial duartion option"), n(e ? t.value : null)
  }, [n, C]), O = (0, c.useRoleSubscriptionSettingsDisabled)(), A = (0, d.useUID)(), p = (0, d.useUID)();
  return (0, a.jsxs)(S.default, {
    title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
    description: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DESCRIPTION,
    children: [(0, a.jsx)(r.FormSwitch, {
      onChange: (e, t) => L(e),
      value: x,
      disabled: O,
      hideBorder: !0,
      children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_ENABLE_FREE_TRIAL_CTA
    }), (0, a.jsxs)(r.FormSection, {
      title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_TITLE,
      titleId: A,
      disabled: !x || O,
      children: [(0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: m.formDescription,
        disabled: !x || O,
        children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_DESCRIPTION
      }), (0, a.jsx)(o.default, {
        size: 8
      }), (0, a.jsx)(r.SingleSelect, {
        "aria-labelledby": A,
        options: C,
        className: m.formInput,
        placeholder: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DISABLED,
        value: s,
        onChange: n,
        maxVisibleItems: 5,
        isDisabled: !x || O,
        look: r.SelectLooks.CUSTOM
      })]
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsxs)(r.FormSection, {
      title: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_TITLE,
      titleId: p,
      disabled: !x || O,
      children: [(0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: m.formDescription,
        disabled: !x || O,
        children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_DESCRIPTION
      }), (0, a.jsx)(r.SingleSelect, {
        "aria-labelledby": p,
        options: R,
        className: m.formInput,
        value: N,
        onChange: g,
        maxVisibleItems: 5,
        isDisabled: !x || O,
        look: r.SelectLooks.CUSTOM
      })]
    })]
  })
}