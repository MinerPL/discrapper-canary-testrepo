"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var l = s("266491"),
  n = s("77078"),
  i = s("45299"),
  r = s("965397"),
  o = s("454686"),
  d = s("353575"),
  u = s("151866"),
  c = s("782340"),
  E = s("869451");

function _(e) {
  let {
    guildId: t,
    existingRules: s
  } = e, {
    cancelEditingRule: _,
    isLoading: I,
    hasChanges: T,
    editingRule: S,
    errorMessage: f,
    saveEditingRule: m
  } = (0, u.useAutomodEditingRuleActions)(), {
    updateRule: N
  } = (0, d.useAutomodRulesList)(t), g = null != S, h = g && !(0, o.isBackendPersistedRule)(S), C = g || T || h, R = async () => {
    if (!T && !h) return _();
    null != S && !h && N(S);
    let e = s.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    });
    try {
      let e = await m(s);
      null != e && N(e)
    } catch (t) {
      null != e && N(e)
    }
  }, x = c.default.Messages.CANCEL, L = !T && g ? c.default.Messages.GUILD_AUTOMOD_EDIT_NO_CHANGES.format({
    ruleName: null == S ? void 0 : S.name
  }) : void 0;
  return null != f && (L = (0, a.jsx)(n.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: E.message,
    children: f
  })), (0, a.jsx)(l.TransitionGroup, {
    component: "div",
    className: E.saveNoticeContainer,
    children: C && (0, a.jsx)(r.default, {
      children: (0, a.jsx)(i.default, {
        submitting: I,
        disabled: I,
        onSave: R,
        onReset: _,
        onResetText: x,
        message: L
      })
    })
  })
}