"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120"), n("757143");
var i = n("735250"),
  s = n("470079"),
  a = n("481060"),
  l = n("907040"),
  r = n("642113"),
  u = n("981631"),
  o = n("185923"),
  c = n("689938"),
  d = n("930898");
let m = {
    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  f = o.EmojiIntention.GIFT;

function p(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [u, o] = s.useState(!1), p = e => (0, i.jsxs)("div", {
    className: d.customGiftContent,
    children: [(0, i.jsxs)("div", {
      className: d.customGiftHeader,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-md/bold",
        children: c.default.Messages.GIFT_SELECT_EMOJI
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), e]
  }), S = e => {
    null != t && (t(e), o(!1))
  };
  return (0, i.jsx)(a.Popout, {
    shouldShow: u,
    position: "bottom",
    align: "left",
    autoInvert: !1,
    onRequestClose: () => o(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(a.Dialog, {
        children: (0, i.jsx)(l.default, {
          analyticsOverride: m,
          closePopout: t,
          onSelectEmoji: S,
          wrapper: "div",
          pickerIntention: f,
          renderHeader: p,
          headerClassName: d.emojiHeader,
          className: d.emojiList,
          listHeaderClassName: d.emojiList,
          searchProps: {
            accessory: (0, i.jsx)(i.Fragment, {})
          }
        })
      })
    },
    children: () => (0, i.jsx)("div", {
      className: d.container,
      children: (0, i.jsx)(a.Clickable, {
        className: d.emoji,
        onClick: () => o(!0),
        children: (null == n ? void 0 : n.name) == null ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(r.default, {
            className: d.emojiIcon,
            width: 14,
            height: 14
          }), (0, i.jsx)(a.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: c.default.Messages.GIFT_SELECT_EMOJI
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.Text, {
            className: d.textSelected,
            variant: "text-sm/semibold",
            children: n.optionallyDiverseSequence
          }), (0, i.jsx)(a.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: n.name.replace(/_/g, " ")
          })]
        })
      })
    })
  })
}