"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("77078"),
  i = s("305961"),
  r = s("191814"),
  o = s("757715"),
  d = s("406876"),
  u = s("167109"),
  c = s("549590"),
  E = s("363966"),
  _ = s("851015"),
  I = s("988449"),
  T = s("782340"),
  S = s("325224");

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
        let t = e.roles.filter(e => e !== (null == N ? void 0 : N.id));
        t.length > 0 ? L(e.id) : (0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("140092").then(s.bind(s, "140092"));
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
          } = await s.el("500716").then(s.bind(s, "500716"));
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