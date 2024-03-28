"use strict";
l.r(t), l.d(t, {
  default: function() {
    return P
  }
}), l("47120");
var s = l("735250"),
  n = l("470079"),
  a = l("392711"),
  o = l.n(a),
  i = l("442837"),
  r = l("481060"),
  d = l("706371"),
  u = l("563115"),
  c = l("984933"),
  N = l("430824"),
  O = l("153124"),
  m = l("759231"),
  _ = l("132338"),
  E = l("823379"),
  I = l("402148"),
  f = l("570961"),
  R = l("208665"),
  h = l("460117"),
  v = l("290511"),
  T = l("689938"),
  x = l("414805");

function P(e) {
  let {
    transitionState: t,
    onClose: l,
    onSave: a,
    onDelete: N,
    option: m,
    guild: E,
    prompt: I,
    index: P
  } = e, j = (0, O.useUID)(), g = (0, i.useStateFromStores)([c.default], () => c.default.getDefaultChannel(E.id)), [A, L] = n.useState(() => {
    var e;
    return null !== (e = null == m ? void 0 : m.emoji) && void 0 !== e ? e : null
  }), [p, C] = n.useState(() => {
    var e;
    return null !== (e = null == m ? void 0 : m.title) && void 0 !== e ? e : ""
  }), [S, D] = n.useState(() => {
    var e;
    return null !== (e = null == m ? void 0 : m.description) && void 0 !== e ? e : ""
  }), [B, H] = n.useState(() => {
    var e;
    return new Set(null !== (e = null == m ? void 0 : m.channelIds) && void 0 !== e ? e : [])
  }), [k, G] = n.useState(() => {
    var e;
    return new Set(null !== (e = null == m ? void 0 : m.roleIds) && void 0 !== e ? e : [])
  }), [b, U] = n.useState({}), y = n.useRef(null);
  return n.useLayoutEffect(() => {
    var e;
    return null === (e = y.current) || void 0 === e ? void 0 : e.focus()
  }, []), (0, s.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": j,
    children: [(0, s.jsxs)("div", {
      className: x.container,
      children: [(0, s.jsx)(r.ModalCloseButton, {
        className: x.closeButton,
        onClick: l
      }), (0, s.jsx)(r.Text, {
        className: x.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: T.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: P + 1
        })
      }), (0, s.jsx)(r.Heading, {
        id: j,
        className: x.header,
        variant: "heading-lg/semibold",
        children: null != I.title && I.title.length > 0 ? I.title : T.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
      }), (0, s.jsx)(r.Heading, {
        className: x.nameHeader,
        variant: "heading-md/semibold",
        children: T.default.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
      }), (0, s.jsx)(r.TextInput, {
        inputRef: y,
        placeholder: T.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
        value: p,
        onChange: e => C(e),
        maxLength: v.MAX_PROMPT_OPTION_TITLE_LENGTH,
        autoFocus: !0
      }), (0, s.jsx)(r.InputError, {
        error: b.title
      }), (0, s.jsx)(r.TextInput, {
        className: x.descriptionInput,
        placeholder: T.default.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
        value: S,
        onChange: e => D(e),
        maxLength: v.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH
      }), (0, s.jsx)(_.default, {
        className: x.divider
      }), (0, s.jsx)(r.Heading, {
        className: x.rolesHeader,
        variant: "heading-md/semibold",
        children: T.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
      }), (0, s.jsx)(d.default, {
        guildId: E.id,
        selectedChannelIds: B,
        placeholder: T.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
        onChange: H,
        helperText: T.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS,
        className: x.searchInput
      }), (0, s.jsx)(u.default, {
        guildId: E.id,
        selectedRoleIds: k,
        disableEveryoneRole: !0,
        placeholder: T.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
        onChange: G,
        helperText: T.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT,
        className: x.searchInput
      }), null == b.roles ? null : (0, s.jsx)(r.InputError, {
        error: b.roles
      }), (0, s.jsx)(M, {
        guild: E,
        roleIds: k
      }), (0, s.jsx)(_.default, {
        className: x.divider
      }), (0, s.jsxs)("div", {
        className: x.emojiQuestionContainer,
        children: [(0, s.jsxs)("div", {
          className: x.emojiQuestionText,
          children: [(0, s.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: T.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: T.default.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
          })]
        }), (0, s.jsx)(h.default, {
          emoji: A,
          setEmoji: L,
          channel: g
        })]
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsxs)("div", {
        className: x.footerButtons,
        children: [(0, s.jsx)("div", {
          className: x.removeButton,
          children: (0, s.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.RED,
            onClick: () => {
              N(), l()
            },
            children: T.default.Messages.REMOVE
          })
        }), (0, s.jsxs)("div", {
          className: x.rightButtons,
          children: [(0, s.jsx)(r.Button, {
            onClick: l,
            size: r.Button.Sizes.SMALL,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            children: T.default.Messages.CANCEL
          }), (0, s.jsx)(r.Button, {
            onClick: () => {
              var e;
              let t = {
                  id: null !== (e = null == m ? void 0 : m.id) && void 0 !== e ? e : "".concat(Date.now()),
                  title: p,
                  description: S,
                  channelIds: Array.from(B).sort(),
                  roleIds: Array.from(k).sort(),
                  emoji: null == A ? void 0 : A
                },
                s = function(e, t, l, s) {
                  let n = {};
                  s.title.length <= 0 && (n.title = T.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                  let a = (0, f.validateOptionRoles)(e, t, l, s);
                  return null != a && (n.roles = a), n
                }(E, R.default.editedOnboardingPrompts, I, t);
              U(s), o().isEmpty(s) && (a(t), l())
            },
            children: T.default.Messages.SAVE
          })]
        })]
      })
    })]
  })
}

function M(e) {
  let {
    guild: t,
    roleIds: l
  } = e, n = (0, i.useStateFromStores)([N.default], () => N.default.getRoles(t.id)), a = Array.from(l).map(e => n[e]).filter(E.isNotNullish).find(I.isRolePowerful);
  return null == a ? null : (0, s.jsx)("div", {
    className: x.notice,
    children: (0, s.jsxs)("div", {
      className: x.noticeMessage,
      children: [(0, s.jsx)(m.default, {
        className: x.noticeIcon
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: T.default.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
          permissions: (0, I.getPowerfulPermissionTitles)(t, a).join(", ")
        })
      })]
    })
  })
}