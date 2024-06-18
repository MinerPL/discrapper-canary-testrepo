"use strict";
t.d(s, {
  DI: function() {
    return A
  },
  x3: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(596454),
  d = t(907040),
  u = t(339085),
  E = t(633302),
  _ = t(984933),
  I = t(401227),
  T = t(285952),
  N = t(474333),
  m = t(153124),
  S = t(740727),
  h = t(691886),
  g = t(185923),
  x = t(689938),
  C = t(643738);

function R(e) {
  let {
    guildId: s,
    emojiData: t,
    "aria-labelledby": l,
    onSelectEmoji: a
  } = e, T = (0, r.e7)([u.Z], () => null != t.id ? u.Z.getCustomEmojiById(t.id) : void 0), N = (0, r.e7)([_.ZP], () => _.ZP.getDefaultChannel(s)), m = i.useCallback(e => {
    let {
      closePopout: s
    } = e;
    return (0, n.jsx)(d.Z, {
      pickerIntention: g.Hz.GUILD_ROLE_BENEFIT_EMOJI,
      channel: N,
      closePopout: s,
      onNavigateAway: s,
      onSelectEmoji: (e, t) => {
        null != e && a(null != e.id ? {
          id: e.id,
          name: void 0
        } : {
          id: void 0,
          name: e.optionallyDiverseSequence
        }), t && s()
      }
    })
  }, [a, N]), S = i.useMemo(() => null == T && null == t.name ? null : function() {
    return (0, n.jsx)(c.Z, {
      className: C.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: null == T ? void 0 : T.animated
    })
  }, [t, T]), h = "";
  return null != T ? h = ":".concat(T.name, ":") : null != t.name && (h = E.ZP.convertSurrogateToName(t.name)), (0, n.jsx)(o.Popout, {
    animation: o.Popout.Animation.NONE,
    position: "top",
    renderPopout: m,
    children: (e, s) => {
      let {
        isShown: t
      } = s;
      return (0, n.jsxs)("div", {
        className: C.emojiInputContainer,
        ...e,
        children: [(0, n.jsx)(I.Z, {
          className: C.emojiButton,
          active: t,
          tabIndex: 0,
          renderButtonContents: S
        }), (0, n.jsx)(o.TextInput, {
          inputClassName: C.emojiText,
          placeholder: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
          value: h,
          "aria-labelledby": l,
          readOnly: !0
        })]
      })
    }
  })
}

function L(e) {
  var s;
  let {
    guildId: t,
    initialData: l,
    benefitTypeInput: a,
    descriptionPlaceholder: r,
    canSubmit: c,
    onSave: d,
    onDelete: u,
    transitionState: E,
    onClose: _
  } = e, I = (0, m.Dt)(), N = (0, m.Dt)(), h = (0, m.Dt)(), [g, L] = i.useState(null !== (s = null == l ? void 0 : l.description) && void 0 !== s ? s : ""), [O, A] = i.useState(() => ({
    id: null == l ? void 0 : l.emoji_id,
    name: null == l ? void 0 : l.emoji_name
  })), p = c && "" !== g && (null != O.id || null != O.name);
  return (0, n.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), p && (d({
        description: g,
        emojiId: O.id,
        emojiName: O.name
      }), _())
    },
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: E,
      "aria-labelledby": I,
      children: [(0, n.jsxs)(o.ModalHeader, {
        children: [(0, n.jsx)(o.Heading, {
          id: I,
          variant: "heading-md/semibold",
          children: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
        }), (0, n.jsx)(o.ModalCloseButton, {
          className: C.closeButton,
          onClick: _
        })]
      }), (0, n.jsxs)(o.ModalContent, {
        className: C.modalContent,
        children: [a, (0, n.jsx)(o.Spacer, {
          size: 24
        }), (0, n.jsx)(o.FormSection, {
          title: x.Z.Messages.DESCRIPTION,
          titleId: N,
          children: (0, n.jsx)(o.TextArea, {
            placeholder: r,
            value: g,
            rows: 1,
            autosize: !0,
            onChange: L,
            "aria-labelledby": N
          })
        }), (0, n.jsx)(o.Spacer, {
          size: 24
        }), (0, n.jsx)(o.FormSection, {
          title: x.Z.Messages.EMOJI,
          titleId: h,
          children: (0, n.jsx)(R, {
            guildId: t,
            emojiData: O,
            onSelectEmoji: A,
            "aria-labelledby": h
          })
        })]
      }), (0, n.jsxs)(o.ModalFooter, {
        justify: T.Z.Justify.BETWEEN,
        children: [(0, n.jsxs)("div", {
          className: C.primaryButtons,
          children: [(0, n.jsx)(o.Button, {
            type: "submit",
            disabled: !p,
            children: null == l ? x.Z.Messages.ADD : x.Z.Messages.SAVE
          }), null != u && (0, n.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            className: C.deleteButton,
            onClick: () => {
              u(), _()
            },
            children: (0, n.jsx)(S.Z, {
              "aria-label": x.Z.Messages.DELETE
            })
          })]
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: C.cancelButton,
          onClick: _,
          children: x.Z.Messages.CANCEL
        })]
      })]
    })
  })
}

function O(e) {
  let {
    guildId: s,
    omitChannelIds: t,
    initialData: l,
    onSave: r,
    onDelete: c,
    transitionState: d,
    onClose: u
  } = e, [E, _] = i.useState(null == l ? void 0 : l.ref_id), I = (0, m.Dt)(), T = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(N.Z, {
      messageType: N.Q.WARNING,
      children: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
    }), (0, n.jsx)(o.Spacer, {
      size: 24
    }), (0, n.jsx)(o.FormSection, {
      title: x.Z.Messages.CHANNEL,
      titleId: I,
      children: (0, n.jsx)(h.Z, {
        guildId: s,
        value: E,
        initialChannelId: null == l ? void 0 : l.ref_id,
        omitChannelIds: t,
        onChange: function(e) {
          _(e)
        },
        "aria-labelledby": I
      })
    })]
  });
  return (0, n.jsx)(L, {
    guildId: s,
    initialData: l,
    benefitTypeInput: T,
    descriptionPlaceholder: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
    canSubmit: null != E,
    onSave: function(e) {
      a()(null != E, "Cannot submit null channel"), r({
        ...e,
        channelId: E
      })
    },
    transitionState: d,
    onClose: u,
    onDelete: c
  })
}

function A(e) {
  var s;
  let {
    initialData: t,
    onSave: l,
    transitionState: r,
    onClose: c,
    onDelete: d,
    guildId: u
  } = e, [E, _] = i.useState(null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : ""), I = (0, m.Dt)(), T = (0, n.jsx)(o.FormSection, {
    title: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
    titleId: I,
    children: (0, n.jsx)(o.TextArea, {
      placeholder: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
      value: E,
      rows: 1,
      onChange: function(e) {
        _(e)
      },
      "aria-labelledby": I
    })
  });
  return (0, n.jsx)(L, {
    guildId: u,
    initialData: t,
    benefitTypeInput: T,
    descriptionPlaceholder: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
    canSubmit: "" !== E,
    onSave: function(e) {
      a()("" !== E, "Cannot submit empty name"), l({
        ...e,
        name: E
      })
    },
    transitionState: r,
    onClose: c,
    onDelete: d
  })
}