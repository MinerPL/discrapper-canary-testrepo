"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("669491"),
  i = n("292915"),
  l = n("77078"),
  u = n("389480"),
  o = n("191191"),
  c = n("782340"),
  d = n("969242");
let m = [54, 8, 8, 8];

function f(e) {
  let {
    onSelect: t,
    sound: n
  } = e, [f, p] = r.useState(!1);

  function _(e) {
    p(!1), null == t || t(e)
  }
  let S = e => (0, s.jsxs)("div", {
    className: d.customGiftHeader,
    children: [(0, s.jsxs)("div", {
      className: d.customGiftHeaderText,
      children: [(0, s.jsx)(l.Text, {
        variant: "text-md/bold",
        children: c.default.Messages.GIFT_SELECT_SOUND
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), (0, s.jsx)("div", {
      className: d.searchAndSound,
      children: e
    })]
  });
  return (0, s.jsx)(l.Popout, {
    shouldShow: f,
    position: "bottom",
    align: "left",
    onRequestClose: () => p(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(l.Dialog, {
        children: (0, s.jsx)(o.default, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: _,
          analyticsSource: "gift soundboard",
          soundButtonOverlay: u.SoundButtonOverlay.ADD,
          listPadding: m,
          renderHeader: S,
          defaultSoundsOnly: !0
        })
      })
    },
    children: () => (0, s.jsx)(l.Clickable, {
      className: d.sound,
      onClick: () => p(!0),
      children: null == n ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(i.SoundboardIcon, {
          color: a.default.colors.WHITE,
          className: d.soundIcon,
          width: 14,
          height: 14
        }), (0, s.jsx)(l.Text, {
          className: d.text,
          variant: "text-sm/semibold",
          children: c.default.Messages.GIFT_SELECT_SOUND
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.Text, {
          className: d.textSelected,
          variant: "text-sm/semibold",
          children: n.emojiName
        }), (0, s.jsx)(l.Text, {
          className: d.text,
          variant: "text-sm/semibold",
          children: n.name
        })]
      })
    })
  })
}

function p(e) {
  let {
    sound: t,
    onSelect: n
  } = e;
  return (0, s.jsx)("div", {
    className: d.container,
    children: (0, s.jsx)(f, {
      onSelect: n,
      sound: t
    })
  })
}