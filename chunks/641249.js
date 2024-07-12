n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var s = n(735250);
n(470079);
var a = n(442837),
  i = n(481060),
  r = n(430824),
  l = n(723047),
  o = n(727843),
  c = n(290348),
  d = n(971792),
  u = n(155758),
  _ = n(331146),
  I = n(798680),
  E = n(689938),
  T = n(552052);

function m() {
  let {
editStateId: e,
guildId: t
  } = (0, o.N)(), [m, N] = c.XZ(e, t), S = (0, d.Z)(t, e), {
setCurrentTab: h
  } = (0, I.dw)(), g = () => h(I.ue.EMOJIS), C = (0, a.e7)([r.Z], () => r.Z.getGuild(t)), x = null == C ? void 0 : C.getMaxRoleSubscriptionEmojiSlots();

  function p(e) {
null == m ? N(new Set(e)) : N(new Set([
  ...m,
  ...e
]));
  }

  function R(e) {
let t = new Set(m);
t.delete(e), N(t);
  }
  let f = (0, l.mY)();
  return (0, s.jsxs)(i.FormSection, {
title: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_TITLE,
disabled: f,
children: [
  (0, s.jsxs)(i.FormText, {
    type: i.FormText.Types.DESCRIPTION,
    className: T.formDescription,
    disabled: f,
    children: [
      E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_DESCRIPTION.format({
        premiumEmojiMaximum: x
      }),
      (0, s.jsx)('br', {}),
      E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_MANAGE_LINK.format({
        handleTransitionToManageEmoji: g
      })
    ]
  }),
  (0, s.jsx)(_.E, {
    tierEmojiIds: m,
    guildId: t,
    onRemoveEmoji: function(e) {
      e.roles.filter(e => e !== (null == S ? void 0 : S.id)).length > 0 ? R(e.id) : (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await n.e('59128').then(n.bind(n, 28564));
        return n => (0, s.jsx)(t, {
          ...n,
          onConfirmDelete: () => {
            R(e.id), n.onClose();
          }
        });
      });
    }
  }),
  null != m && m.size > 0 ? (0, s.jsx)(i.Spacer, {
    size: 8
  }) : null,
  (0, s.jsx)(u.s, {
    onClick: function() {
      (0, i.openModalLazy)(async () => {
        let {
          EmojiAddModal: e
        } = await n.e('21112').then(n.bind(n, 301160));
        return n => (0, s.jsx)(e, {
          ...n,
          guildId: t,
          initialTierEmojiIds: m,
          onSubmit: p,
          transitionToManageEmoji: () => {
            g(), n.onClose();
          }
        });
      });
    },
    disabled: f,
    children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_ADD_BUTTON_TEXT
  })
]
  });
}