"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(471613),
  r = t(29605),
  o = t(345861),
  c = t(723047),
  d = t(796814),
  u = t(689938);

function E(e) {
  let {
    guild: s
  } = e, E = (0, i.e7)([a.Z], () => a.Z.isUploadingEmoji()), _ = (0, d.Z)(s.id), I = s.getMaxRoleSubscriptionEmojiSlots() - _.length, T = (0, c.mY)();
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(l.FormSection, {
      title: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_TITLE,
      disabled: T,
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        disabled: T,
        children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_DESCRIPTION.format({
          maxSlots: s.getMaxRoleSubscriptionEmojiSlots()
        })
      }), (0, n.jsx)(l.Spacer, {
        size: 16
      }), (0, n.jsx)(o.Z, {
        onChange: (e, i) => {
          null != e && null != i && (0, l.openModalLazy)(async () => {
            let {
              CreateEmojiWithRolesModal: l
            } = await Promise.all([t.e("99387"), t.e("9007")]).then(t.bind(t, 142774));
            return t => (0, n.jsx)(l, {
              ...t,
              data: e,
              file: i,
              guildId: s.id
            })
          })
        },
        buttonCTA: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_CTA,
        submitting: E,
        disabled: T || E || 0 === I
      }), (0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(r.L3, {
        title: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_EMOJI_SECTION_TITLE,
        maxSlots: s.getMaxRoleSubscriptionEmojiSlots(),
        emojiCount: _.length
      }), (0, n.jsx)(r.FT, {
        guild: s,
        emojis: _,
        onEdit: (e, s) => {
          (0, l.openModalLazy)(async () => {
            let {
              UpdateEmojiRolesModal: i
            } = await Promise.all([t.e("99387"), t.e("9007")]).then(t.bind(t, 142774));
            return t => (0, n.jsx)(i, {
              ...t,
              emoji: e,
              guildId: s
            })
          })
        },
        editingDisabled: T
      })]
    })
  })
}