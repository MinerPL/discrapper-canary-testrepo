"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("471613"),
  r = s("29605"),
  o = s("682864"),
  d = s("540086"),
  u = s("723047"),
  c = s("796814"),
  E = s("689938");

function _(e) {
  let {
    guild: t
  } = e, _ = (0, l.useStateFromStores)([i.default], () => i.default.isUploadingEmoji()), I = (0, c.default)(t.id), T = t.getMaxRoleSubscriptionEmojiSlots() - I.length, S = (0, u.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(n.FormSection, {
      title: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_TITLE,
      disabled: S,
      children: [(0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        disabled: S,
        children: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_DESCRIPTION.format({
          maxSlots: t.getMaxRoleSubscriptionEmojiSlots()
        })
      }), (0, a.jsx)(o.default, {
        size: 16
      }), (0, a.jsx)(d.default, {
        onChange: (e, l) => {
          null != e && null != l && (0, n.openModalLazy)(async () => {
            let {
              CreateEmojiWithRolesModal: n
            } = await Promise.all([s.e("99387"), s.e("9007")]).then(s.bind(s, "604623"));
            return s => (0, a.jsx)(n, {
              ...s,
              data: e,
              file: l,
              guildId: t.id
            })
          })
        },
        buttonCTA: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_CTA,
        submitting: _,
        disabled: S || _ || 0 === T
      }), (0, a.jsx)(o.default, {
        size: 24
      }), (0, a.jsx)(r.EmojiTableTitle, {
        title: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_EMOJI_SECTION_TITLE,
        maxSlots: t.getMaxRoleSubscriptionEmojiSlots(),
        emojiCount: I.length
      }), (0, a.jsx)(r.EmojiTable, {
        guild: t,
        emojis: I,
        onEdit: (e, t) => {
          (0, n.openModalLazy)(async () => {
            let {
              UpdateEmojiRolesModal: l
            } = await Promise.all([s.e("99387"), s.e("9007")]).then(s.bind(s, "604623"));
            return s => (0, a.jsx)(l, {
              ...s,
              emoji: e,
              guildId: t
            })
          })
        },
        editingDisabled: S
      })]
    })
  })
}