"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  i = s.n(n),
  r = s("77078"),
  o = s("191814"),
  d = s("476765"),
  u = s("837008"),
  c = s("757715"),
  E = s("406876"),
  _ = s("167109"),
  I = s("979778"),
  T = s("59767"),
  S = s("561205"),
  f = s("782340"),
  m = s("325224");

function N() {
  var e;
  let {
    editStateId: t
  } = (0, E.useEditStateContext)(), [s, n] = _.useTrialInterval(t), [N, g] = _.useTrialLimit(t), h = (0, u.useSubscriptionTrial)(t), {
    options: C
  } = (0, T.default)(null !== (e = null == h ? void 0 : h.active_trial) && void 0 !== e ? e : null), R = (0, I.default)(), x = null != s, L = l.useCallback(e => {
    let t = C.find(e => e.isDefault);
    i(null != t, "Missing default trial duartion option"), n(e ? t.value : null)
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