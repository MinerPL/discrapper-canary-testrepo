"use strict";
s.r(t), s.d(t, {
  EditChannelBenefitModal: function() {
    return O
  },
  EditIntangibleBenefitModal: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("596454"),
  u = s("907040"),
  c = s("339085"),
  E = s("633302"),
  _ = s("984933"),
  I = s("401227"),
  T = s("285952"),
  S = s("474333"),
  f = s("682864"),
  m = s("153124"),
  N = s("740727"),
  g = s("691886"),
  h = s("185923"),
  C = s("689938"),
  R = s("729038");

function x(e) {
  let {
    guildId: t,
    emojiData: s,
    "aria-labelledby": n,
    onSelectEmoji: i
  } = e, T = (0, r.useStateFromStores)([c.default], () => null != s.id ? c.default.getCustomEmojiById(s.id) : void 0), S = (0, r.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t)), f = l.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, a.jsx)(u.default, {
      pickerIntention: h.EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
      channel: S,
      closePopout: t,
      onNavigateAway: t,
      onSelectEmoji: (e, s) => {
        null != e && i(null != e.id ? {
          id: e.id,
          name: void 0
        } : {
          id: void 0,
          name: e.optionallyDiverseSequence
        }), s && t()
      }
    })
  }, [i, S]), m = l.useMemo(() => null == T && null == s.name ? null : function() {
    return (0, a.jsx)(d.default, {
      className: R.emoji,
      emojiId: s.id,
      emojiName: s.name,
      animated: null == T ? void 0 : T.animated
    })
  }, [s, T]), N = "";
  return null != T ? N = ":".concat(T.name, ":") : null != s.name && (N = E.default.convertSurrogateToName(s.name)), (0, a.jsx)(o.Popout, {
    animation: o.Popout.Animation.NONE,
    position: "top",
    renderPopout: f,
    children: (e, t) => {
      let {
        isShown: s
      } = t;
      return (0, a.jsxs)("div", {
        className: R.emojiInputContainer,
        ...e,
        children: [(0, a.jsx)(I.default, {
          className: R.emojiButton,
          active: s,
          tabIndex: 0,
          renderButtonContents: m
        }), (0, a.jsx)(o.TextInput, {
          inputClassName: R.emojiText,
          placeholder: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
          value: N,
          "aria-labelledby": n,
          readOnly: !0
        })]
      })
    }
  })
}

function L(e) {
  var t;
  let {
    guildId: s,
    initialData: n,
    benefitTypeInput: i,
    descriptionPlaceholder: r,
    canSubmit: d,
    onSave: u,
    onDelete: c,
    transitionState: E,
    onClose: _
  } = e, I = (0, m.useUID)(), S = (0, m.useUID)(), g = (0, m.useUID)(), [h, L] = l.useState(null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : ""), [O, A] = l.useState(() => ({
    id: null == n ? void 0 : n.emoji_id,
    name: null == n ? void 0 : n.emoji_name
  })), p = d && "" !== h && (null != O.id || null != O.name);
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), p && (u({
        description: h,
        emojiId: O.id,
        emojiName: O.name
      }), _())
    },
    children: (0, a.jsxs)(o.ModalRoot, {
      transitionState: E,
      "aria-labelledby": I,
      children: [(0, a.jsxs)(o.ModalHeader, {
        children: [(0, a.jsx)(o.Heading, {
          id: I,
          variant: "heading-md/semibold",
          children: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
        }), (0, a.jsx)(o.ModalCloseButton, {
          className: R.closeButton,
          onClick: _
        })]
      }), (0, a.jsxs)(o.ModalContent, {
        className: R.modalContent,
        children: [i, (0, a.jsx)(f.default, {
          size: 24
        }), (0, a.jsx)(o.FormSection, {
          title: C.default.Messages.DESCRIPTION,
          titleId: S,
          children: (0, a.jsx)(o.TextArea, {
            placeholder: r,
            value: h,
            rows: 1,
            autosize: !0,
            onChange: L,
            "aria-labelledby": S
          })
        }), (0, a.jsx)(f.default, {
          size: 24
        }), (0, a.jsx)(o.FormSection, {
          title: C.default.Messages.EMOJI,
          titleId: g,
          children: (0, a.jsx)(x, {
            guildId: s,
            emojiData: O,
            onSelectEmoji: A,
            "aria-labelledby": g
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        justify: T.default.Justify.BETWEEN,
        children: [(0, a.jsxs)("div", {
          className: R.primaryButtons,
          children: [(0, a.jsx)(o.Button, {
            type: "submit",
            disabled: !p,
            children: null == n ? C.default.Messages.ADD : C.default.Messages.SAVE
          }), null != c && (0, a.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            className: R.deleteButton,
            onClick: () => {
              c(), _()
            },
            children: (0, a.jsx)(N.default, {
              "aria-label": C.default.Messages.DELETE
            })
          })]
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: R.cancelButton,
          onClick: _,
          children: C.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function O(e) {
  let {
    guildId: t,
    omitChannelIds: s,
    initialData: n,
    onSave: r,
    onDelete: d,
    transitionState: u,
    onClose: c
  } = e, [E, _] = l.useState(null == n ? void 0 : n.ref_id), I = (0, m.useUID)(), T = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      messageType: S.HelpMessageTypes.WARNING,
      children: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
    }), (0, a.jsx)(f.default, {
      size: 24
    }), (0, a.jsx)(o.FormSection, {
      title: C.default.Messages.CHANNEL,
      titleId: I,
      children: (0, a.jsx)(g.default, {
        guildId: t,
        value: E,
        initialChannelId: null == n ? void 0 : n.ref_id,
        omitChannelIds: s,
        onChange: function(e) {
          _(e)
        },
        "aria-labelledby": I
      })
    })]
  });
  return (0, a.jsx)(L, {
    guildId: t,
    initialData: n,
    benefitTypeInput: T,
    descriptionPlaceholder: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
    canSubmit: null != E,
    onSave: function(e) {
      i()(null != E, "Cannot submit null channel"), r({
        ...e,
        channelId: E
      })
    },
    transitionState: u,
    onClose: c,
    onDelete: d
  })
}

function A(e) {
  var t;
  let {
    initialData: s,
    onSave: n,
    transitionState: r,
    onClose: d,
    onDelete: u,
    guildId: c
  } = e, [E, _] = l.useState(null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : ""), I = (0, m.useUID)(), T = (0, a.jsx)(o.FormSection, {
    title: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
    titleId: I,
    children: (0, a.jsx)(o.TextArea, {
      placeholder: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
      value: E,
      rows: 1,
      onChange: function(e) {
        _(e)
      },
      "aria-labelledby": I
    })
  });
  return (0, a.jsx)(L, {
    guildId: c,
    initialData: s,
    benefitTypeInput: T,
    descriptionPlaceholder: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
    canSubmit: "" !== E,
    onSave: function(e) {
      i()("" !== E, "Cannot submit empty name"), n({
        ...e,
        name: E
      })
    },
    transitionState: r,
    onClose: d,
    onDelete: u
  })
}