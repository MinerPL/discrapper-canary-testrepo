"use strict";
i.r(t), i("47120");
var o = i("735250"),
  a = i("470079"),
  l = i("481060"),
  s = i("787014"),
  n = i("907040"),
  d = i("946458"),
  r = i("185923"),
  u = i("689938"),
  c = i("192602");
t.default = e => {
  var t, i, m;
  let {
    channel: j,
    onClose: N,
    transitionState: x
  } = e, [h, v] = a.useState(null !== (m = j.defaultReactionEmoji) && void 0 !== m ? m : null), [E, _] = a.useState(!1), [f, M] = a.useState(!1), I = (null === (t = j.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId) !== (null == h ? void 0 : h.emojiId) || (null === (i = j.defaultReactionEmoji) || void 0 === i ? void 0 : i.emojiName) !== (null == h ? void 0 : h.emojiName), A = e => {
    v(null == e ? null : (null == e ? void 0 : e.id) != null ? {
      emojiId: e.id,
      emojiName: void 0
    } : {
      emojiId: void 0,
      emojiName: e.optionallyDiverseSequence
    })
  }, R = async () => {
    if (I) {
      _(!0), M(!1);
      try {
        await (0, s.saveChannel)(j.id, {
          defaultReactionEmoji: h
        }), N()
      } catch (e) {
        M(!0)
      } finally {
        _(!1)
      }
    }
  };
  return (0, o.jsxs)(l.ModalRoot, {
    transitionState: x,
    "aria-label": u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
    children: [(0, o.jsx)(l.ModalHeader, {
      separator: !1,
      className: c.modalHeader,
      children: (0, o.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE
      })
    }), (0, o.jsxs)(l.ModalContent, {
      children: [(0, o.jsx)(l.Text, {
        variant: "text-sm/medium",
        className: c.subtitle,
        children: u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_DESCRIPTION
      }), (0, o.jsx)(d.default, {
        reactionEmoji: h
      }), (0, o.jsxs)("div", {
        className: c.buttonRow,
        children: [(0, o.jsx)(l.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, o.jsx)(n.default, {
              guildId: null == j ? void 0 : j.guild_id,
              closePopout: t,
              onSelectEmoji: (e, i) => {
                A(e), i && t()
              },
              pickerIntention: r.EmojiIntention.COMMUNITY_CONTENT,
              channel: j
            })
          },
          position: "right",
          animation: l.Popout.Animation.NONE,
          align: "center",
          children: e => (0, o.jsx)(l.Button, {
            ...e,
            size: l.Button.Sizes.SMALL,
            onClick: t => {
              var i;
              null === (i = e.onClick) || void 0 === i || i.call(e, t)
            },
            children: u.default.Messages.SELECT_EMOJI
          })
        }), null != j.defaultReactionEmoji ? (0, o.jsx)(l.Button, {
          className: c.removeButton,
          onClick: () => A(null),
          size: l.Button.Sizes.MIN,
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.RED,
          children: u.default.Messages.REMOVE
        }) : null]
      }), f ? (0, o.jsx)("div", {
        className: c.__invalid_row,
        children: (0, o.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-danger",
          children: u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_ERROR
        })
      }) : null]
    }), (0, o.jsxs)(l.ModalFooter, {
      className: c.__invalid_footer,
      children: [(0, o.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND_NEW,
        size: l.Button.Sizes.SMALL,
        className: c.button,
        onClick: R,
        disabled: !I,
        submitting: E,
        autoFocus: !0,
        children: u.default.Messages.SAVE
      }), (0, o.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        className: c.button,
        onClick: N,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}