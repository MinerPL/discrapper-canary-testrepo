"use strict";
n.r(t), n.d(t, {
  HotBarEmoji: function() {
    return M
  },
  default: function() {
    return L
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n("718017"),
  u = n("481060"),
  d = n("596454"),
  c = n("727637"),
  f = n("543241"),
  h = n("907040"),
  m = n("633302"),
  p = n("806966"),
  E = n("401227"),
  C = n("153124"),
  g = n("86813"),
  S = n("176354"),
  _ = n("823379"),
  T = n("354459"),
  I = n("185923"),
  A = n("420212"),
  N = n("695357");
let v = I.EmojiIntention.CHAT,
  x = [m.default.getByName("thumbsup"), m.default.getByName("eyes"), m.default.getByName("laughing"), m.default.getByName("watermelon"), m.default.getByName("fork_and_knife"), m.default.getByName("yum")].filter(_.isNotNullish);

function M(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: s,
    className: r
  } = e, f = l.useRef(null), h = (0, c.default)(f);
  return (0, a.jsx)("span", {
    ref: f,
    children: (0, a.jsx)(u.Button, {
      onClick: s,
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      children: (0, a.jsx)(o.Spring, {
        config: E.EMOJI_BUTTON_SPRING_CONFIG,
        from: {
          value: 0
        },
        to: {
          value: h ? 1 : 0
        },
        children: e => {
          let {
            value: l
          } = e;
          return (0, a.jsx)(o.animated.div, {
            style: {
              transform: l.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, a.jsx)(d.default, {
              className: i()(N.emoji, r, {
                [N.emojiItemDisabled]: n
              }),
              emojiId: t.id,
              emojiName: null == t ? void 0 : t.surrogates,
              animated: t.animated
            })
          })
        }
      })
    })
  })
}

function R(e) {
  let {
    otherAccessories: t,
    isEmojiPickerExpanded: n,
    onSetExpanded: l,
    onFocus: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [t, (0, a.jsx)(u.Clickable, {
      className: N.dropDownContainer,
      onClick: () => {
        l(!n), s()
      },
      children: (0, a.jsx)(g.default, {
        className: i()(N.dropDown, {
          [N.dropDownOpen]: n
        })
      })
    })]
  })
}

function L(e) {
  let {
    channel: t,
    title: n,
    closePopout: s,
    onFocus: o,
    onSelectEmoji: d,
    onSelectDisabledEmoji: c,
    onExpandedToggle: m,
    emojiSearchProps: E,
    recentlyUsedEmojis: g,
    analyticsOverride: _
  } = e, L = (0, C.useUID)(), [y, O] = l.useState(!1), j = (0, f.useFrequentlyUsedEmojis)(t.guild_id), P = (0, r.uniqBy)([...j, ...x], "name").filter(e => !S.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: v
  })).slice(0, T.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT);
  null != g && g.length > 0 && P.splice(P.length - 1, 1, g[0]);
  let D = e => {
      O(e), null == m || m(e)
    },
    b = (e, t) => {
      if (null == e && t) {
        s();
        return
      }
      null != e && d(e);
      D(!t), t && p.EmojiPickerStore.setSearchPlaceholder(null)
    };
  return (0, a.jsxs)(u.Dialog, {
    "aria-labelledby": L,
    children: [(0, a.jsx)(u.HeadingLevel, {
      forceLevel: 2,
      children: (0, a.jsx)(u.HiddenVisually, {
        children: (0, a.jsx)(u.H, {
          id: L,
          children: n
        })
      })
    }), (0, a.jsxs)("div", {
      className: N.container,
      children: [(0, a.jsx)(h.default, {
        analyticsOverride: _,
        channel: t,
        className: i()(N.animatedPicker, {
          [N.animatedPickerTall]: y
        }),
        headerClassName: i()(N.emojiPickerHeader, {
          [N.emojiPickerHeaderExpanded]: y
        }),
        closePopout: s,
        onSelectEmoji: y ? b : () => {},
        shouldHidePickerActions: !y,
        wrapper: "div",
        pickerIntention: v,
        searchProps: {
          ...E,
          accessory: (0, a.jsx)(R, {
            otherAccessories: null == E ? void 0 : E.accessory,
            isEmojiPickerExpanded: y,
            onSetExpanded: D,
            onFocus: o
          }),
          onKeyDown: e => {
            null != e && e.key !== A.KeyboardKeysUpdated.TAB && (e.key !== A.KeyboardKeysUpdated.ENTER || e.shiftKey ? D(!0) : D(!y))
          }
        }
      }), (0, a.jsx)("div", {
        className: N.slotsContainer,
        children: (0, a.jsx)("div", {
          className: i()(N.slots, N.slotsWide),
          children: P.map(e => {
            let n = S.default.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: I.EmojiIntention.CHAT
            });
            return (0, a.jsx)("div", {
              className: N.slot,
              children: (0, a.jsx)(u.TooltipContainer, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: N.tooltipContainer,
                color: u.Tooltip.Colors.BRAND,
                children: (0, a.jsx)(M, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == c || c(e) : b(e, !0)
                  }
                })
              })
            }, e.name)
          })
        })
      })]
    })]
  })
}