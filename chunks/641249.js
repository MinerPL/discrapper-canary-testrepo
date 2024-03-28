"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("430824"),
  r = s("682864"),
  o = s("723047"),
  d = s("727843"),
  u = s("290348"),
  c = s("971792"),
  E = s("155758"),
  _ = s("331146"),
  I = s("798680"),
  T = s("689938"),
  S = s("606353");

function f() {
  let {
    editStateId: e,
    guildId: t
  } = (0, d.useEditStateContext)(), [f, m] = u.useTierEmojiIds(e, t), N = (0, c.default)(t, e), {
    setCurrentTab: g
  } = (0, I.useTabBarState)(), h = () => g(I.TabBarSection.EMOJIS), C = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t)), R = null == C ? void 0 : C.getMaxRoleSubscriptionEmojiSlots();

  function x(e) {
    null == f ? m(new Set(e)) : m(new Set([...f, ...e]))
  }

  function L(e) {
    let t = new Set(f);
    t.delete(e), m(t)
  }
  let O = (0, o.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(n.FormSection, {
    title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_TITLE,
    disabled: O,
    children: [(0, a.jsxs)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      className: S.formDescription,
      disabled: O,
      children: [T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_DESCRIPTION.format({
        premiumEmojiMaximum: R
      }), (0, a.jsx)("br", {}), T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_MANAGE_LINK.format({
        handleTransitionToManageEmoji: h
      })]
    }), (0, a.jsx)(_.EmojiList, {
      tierEmojiIds: f,
      guildId: t,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == N ? void 0 : N.id)).length > 0 ? L(e.id) : (0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await s.e("59128").then(s.bind(s, "28564"));
          return s => (0, a.jsx)(t, {
            ...s,
            onConfirmDelete: () => {
              L(e.id), s.onClose()
            }
          })
        })
      }
    }), null != f && f.size > 0 ? (0, a.jsx)(r.default, {
      size: 8
    }) : null, (0, a.jsx)(E.AddBenefitCard, {
      onClick: function() {
        (0, n.openModalLazy)(async () => {
          let {
            EmojiAddModal: e
          } = await Promise.all([s.e("99387"), s.e("21112")]).then(s.bind(s, "301160"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildId: t,
            initialTierEmojiIds: f,
            onSubmit: x,
            transitionToManageEmoji: () => {
              h(), s.onClose()
            }
          })
        })
      },
      disabled: O,
      children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_ADD_BUTTON_TEXT
    })]
  })
}