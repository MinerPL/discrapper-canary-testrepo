"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("781738");
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  i = n("86678"),
  l = n("46829"),
  u = n("49111"),
  o = n("958706"),
  c = n("782340"),
  d = n("517184");
let m = {
    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  f = o.EmojiIntention.GIFT;

function p(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [u, o] = r.useState(!1), p = e => (0, s.jsxs)("div", {
    className: d.customGiftContent,
    children: [(0, s.jsxs)("div", {
      className: d.customGiftHeader,
      children: [(0, s.jsx)(a.Text, {
        variant: "text-md/bold",
        children: c.default.Messages.GIFT_SELECT_EMOJI
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), e]
  }), _ = e => {
    null != t && (t(e), o(!1))
  };
  return (0, s.jsx)(a.Popout, {
    shouldShow: u,
    position: "bottom",
    align: "left",
    autoInvert: !1,
    onRequestClose: () => o(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(a.Dialog, {
        children: (0, s.jsx)(i.default, {
          analyticsOverride: m,
          closePopout: t,
          onSelectEmoji: _,
          wrapper: "div",
          pickerIntention: f,
          renderHeader: p,
          headerClassName: d.emojiHeader,
          className: d.emojiList,
          listHeaderClassName: d.emojiList,
          searchProps: {
            accessory: (0, s.jsx)(s.Fragment, {})
          }
        })
      })
    },
    children: () => (0, s.jsx)("div", {
      className: d.container,
      children: (0, s.jsx)(a.Clickable, {
        className: d.emoji,
        onClick: () => o(!0),
        children: (null == n ? void 0 : n.name) == null ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(l.default, {
            className: d.emojiIcon,
            width: 14,
            height: 14
          }), (0, s.jsx)(a.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: c.default.Messages.GIFT_SELECT_EMOJI
          })]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(a.Text, {
            className: d.textSelected,
            variant: "text-sm/semibold",
            children: n.optionallyDiverseSequence
          }), (0, s.jsx)(a.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: n.name.replace(/_/g, " ")
          })]
        })
      })
    })
  })
}