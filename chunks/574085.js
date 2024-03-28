"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120"), s("653041");
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("682864"),
  i = s("723047"),
  r = s("727843"),
  o = s("290348"),
  d = s("764163"),
  u = s("155758"),
  c = s("293810"),
  E = s("689938");

function _() {
  let {
    editStateId: e,
    guildId: t
  } = (0, r.useEditStateContext)(), [s, _] = o.useIntangibleBenefits(e);

  function I(e, t) {
    let {
      name: a,
      description: l,
      emojiId: n,
      emojiName: i
    } = e, r = [...s], o = {
      name: a,
      description: l,
      emoji_id: n,
      emoji_name: i,
      ref_type: c.GuildRoleSubscriptionBenefitTypes.INTANGIBLE,
      ref_id: void 0
    };
    null != t ? r[t] = o : r.push(o), _(r)
  }
  let T = (0, i.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.EditableBenefitsList, {
      benefits: s,
      onEdit: function(e) {
        (0, l.openModal)(l => (0, a.jsx)(d.EditIntangibleBenefitModal, {
          ...l,
          guildId: t,
          initialData: s[e],
          onSave: t => I(t, e),
          onDelete: () => (function(e) {
            let t = [...s];
            t.splice(e, 1), _(t)
          })(e)
        }))
      },
      onMove: function(e, t) {
        let a = [...s],
          [l] = a.splice(e, 1);
        a.splice(t, 0, l), _(a)
      },
      guildId: t
    }), s.length > 0 ? (0, a.jsx)(n.default, {
      size: 8
    }) : null, (0, a.jsx)(u.AddBenefitCard, {
      onClick: function() {
        (0, l.openModal)(e => (0, a.jsx)(d.EditIntangibleBenefitModal, {
          ...e,
          guildId: t,
          onSave: e => I(e)
        }))
      },
      disabled: T,
      children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_ADD_BUTTON_TEXT
    })]
  })
}