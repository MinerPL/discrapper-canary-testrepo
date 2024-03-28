"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("692547"),
  l = n("467949"),
  r = n("481060"),
  u = n("697426"),
  o = n("603074"),
  c = n("689938"),
  d = n("285897");
let m = [54, 8, 8, 8];

function f(e) {
  let {
    onSelect: t,
    sound: n
  } = e, [f, p] = s.useState(!1);

  function S(e) {
    p(!1), null == t || t(e)
  }
  let _ = e => (0, i.jsxs)("div", {
    className: d.customGiftHeader,
    children: [(0, i.jsxs)("div", {
      className: d.__invalid_customGiftHeaderText,
      children: [(0, i.jsx)(r.Text, {
        variant: "text-md/bold",
        children: c.default.Messages.GIFT_SELECT_SOUND
      }), (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), (0, i.jsx)("div", {
      className: d.searchAndSound,
      children: e
    })]
  });
  return (0, i.jsx)(r.Popout, {
    shouldShow: f,
    position: "bottom",
    align: "left",
    onRequestClose: () => p(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(r.Dialog, {
        children: (0, i.jsx)(o.default, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: S,
          analyticsSource: "gift soundboard",
          soundButtonOverlay: u.SoundButtonOverlay.ADD,
          listPadding: m,
          renderHeader: _,
          defaultSoundsOnly: !0
        })
      })
    },
    children: () => (0, i.jsx)(r.Clickable, {
      className: d.sound,
      onClick: () => p(!0),
      children: null == n ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.SoundboardIcon, {
          color: a.default.colors.WHITE,
          className: d.soundIcon,
          width: 14,
          height: 14
        }), (0, i.jsx)(r.Text, {
          className: d.text,
          variant: "text-sm/semibold",
          children: c.default.Messages.GIFT_SELECT_SOUND
        })]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.Text, {
          className: d.textSelected,
          variant: "text-sm/semibold",
          children: n.emojiName
        }), (0, i.jsx)(r.Text, {
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
  return (0, i.jsx)("div", {
    className: d.container,
    children: (0, i.jsx)(f, {
      onSelect: n,
      sound: t
    })
  })
}