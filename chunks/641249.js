"use strict";
t.d(s, {
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(430824),
  r = t(723047),
  o = t(727843),
  c = t(290348),
  d = t(971792),
  u = t(155758),
  E = t(331146),
  _ = t(798680),
  I = t(689938),
  T = t(169769);

function N() {
  let {
    editStateId: e,
    guildId: s
  } = (0, o.N)(), [N, m] = c.XZ(e, s), S = (0, d.Z)(s, e), {
    setCurrentTab: h
  } = (0, _.dw)(), g = () => h(_.ue.EMOJIS), x = (0, i.e7)([a.Z], () => a.Z.getGuild(s)), C = null == x ? void 0 : x.getMaxRoleSubscriptionEmojiSlots();

  function R(e) {
    null == N ? m(new Set(e)) : m(new Set([...N, ...e]))
  }

  function L(e) {
    let s = new Set(N);
    s.delete(e), m(s)
  }
  let O = (0, r.mY)();
  return (0, n.jsxs)(l.FormSection, {
    title: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_TITLE,
    disabled: O,
    children: [(0, n.jsxs)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      className: T.formDescription,
      disabled: O,
      children: [I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_DESCRIPTION.format({
        premiumEmojiMaximum: C
      }), (0, n.jsx)("br", {}), I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_MANAGE_LINK.format({
        handleTransitionToManageEmoji: g
      })]
    }), (0, n.jsx)(E.E, {
      tierEmojiIds: N,
      guildId: s,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == S ? void 0 : S.id)).length > 0 ? L(e.id) : (0, l.openModalLazy)(async () => {
          let {
            default: s
          } = await t.e("59128").then(t.bind(t, 28564));
          return t => (0, n.jsx)(s, {
            ...t,
            onConfirmDelete: () => {
              L(e.id), t.onClose()
            }
          })
        })
      }
    }), null != N && N.size > 0 ? (0, n.jsx)(l.Spacer, {
      size: 8
    }) : null, (0, n.jsx)(u.s, {
      onClick: function() {
        (0, l.openModalLazy)(async () => {
          let {
            EmojiAddModal: e
          } = await Promise.all([t.e("99387"), t.e("21112")]).then(t.bind(t, 301160));
          return t => (0, n.jsx)(e, {
            ...t,
            guildId: s,
            initialTierEmojiIds: N,
            onSubmit: R,
            transitionToManageEmoji: () => {
              g(), t.onClose()
            }
          })
        })
      },
      disabled: O,
      children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_ADD_BUTTON_TEXT
    })]
  })
}