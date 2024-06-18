"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(215569),
  l = t(481060),
  a = t(852860),
  r = t(236413),
  o = t(727072),
  c = t(65912),
  d = t(689938),
  u = t(817437);

function E(e) {
  let {
    guildId: s,
    existingRules: t
  } = e, {
    cancelEditingRule: E,
    isLoading: _,
    hasChanges: I,
    editingRule: T,
    errorMessage: N,
    saveEditingRule: m
  } = (0, c.w)(), {
    updateRule: S
  } = (0, o.pH)(s), h = null != T, g = h && !(0, r.Vb)(T), x = h || I || g, C = async () => {
    if (!I && !g) return E();
    null != T && !g && S(T);
    let e = t.find(e => {
      let {
        id: s
      } = e;
      return s === (null == T ? void 0 : T.id)
    });
    try {
      let e = await m(t);
      null != e && S(e)
    } catch (s) {
      null != e && S(e)
    }
  }, R = d.Z.Messages.CANCEL, L = !I && h ? d.Z.Messages.GUILD_AUTOMOD_EDIT_NO_CHANGES.format({
    ruleName: null == T ? void 0 : T.name
  }) : void 0;
  return null != N && (L = (0, n.jsx)(l.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: u.message,
    children: N
  })), (0, n.jsx)(i.W, {
    component: "div",
    className: u.saveNoticeContainer,
    children: x && (0, n.jsx)(l.SlideIn, {
      children: (0, n.jsx)(a.Z, {
        submitting: _,
        disabled: _,
        onSave: C,
        onReset: E,
        onResetText: R,
        message: L
      })
    })
  })
}