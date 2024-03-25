"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("77078");
s("465869");
var i = s("191814"),
  r = s("757715"),
  o = s("406876"),
  d = s("167109"),
  u = s("989210"),
  c = s("363966"),
  E = s("677795"),
  _ = s("782340");

function I() {
  let {
    editStateId: e,
    guildId: t
  } = (0, o.useEditStateContext)(), [s, I] = d.useChannelBenefits(e), T = l.useMemo(() => new Set(s.map(e => e.ref_id)), [s]);

  function S(e, t) {
    let {
      channelId: a,
      description: l,
      emojiId: n,
      emojiName: i
    } = e, r = [...s], o = {
      name: "",
      description: l,
      emoji_id: n,
      emoji_name: i,
      ref_type: E.GuildRoleSubscriptionBenefitTypes.CHANNEL,
      ref_id: a
    };
    null != t ? r[t] = o : r.push(o), I(r)
  }
  let f = (0, r.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.EditableBenefitsList, {
      benefits: s,
      onEdit: function(e) {
        (0, n.openModal)(l => (0, a.jsx)(u.EditChannelBenefitModal, {
          ...l,
          guildId: t,
          omitChannelIds: T,
          initialData: s[e],
          onSave: t => S(t, e),
          onDelete: () => (function(e) {
            let t = [...s];
            t.splice(e, 1), I(t)
          })(e)
        }))
      },
      onMove: function(e, t) {
        let a = [...s],
          [l] = a.splice(e, 1);
        a.splice(t, 0, l), I(a)
      },
      guildId: t
    }), s.length > 0 && (0, a.jsx)(i.default, {
      size: 8
    }), (0, a.jsx)(c.AddBenefitCard, {
      onClick: function() {
        (0, n.openModal)(e => (0, a.jsx)(u.EditChannelBenefitModal, {
          ...e,
          guildId: t,
          omitChannelIds: T,
          onSave: e => S(e)
        }))
      },
      disabled: f,
      children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_ADD_BUTTON_TEXT
    })]
  })
}