"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n("146606"),
  o = n("77078"),
  d = n("430568"),
  c = n("252744"),
  f = n("788506"),
  h = n("86678"),
  m = n("867805"),
  p = n("986632"),
  E = n("882641"),
  g = n("476765"),
  S = n("837899"),
  C = n("402671"),
  _ = n("449008"),
  I = n("99795"),
  T = n("958706"),
  v = n("894282"),
  x = n("448765");
let N = T.EmojiIntention.CHAT,
  A = [m.default.getByName("thumbsup"), m.default.getByName("eyes"), m.default.getByName("laughing"), m.default.getByName("watermelon"), m.default.getByName("fork_and_knife"), m.default.getByName("yum")].filter(_.isNotNullish);

function M(e) {
  let {
    emoji: t,
    isDisabled: n = !1,
    onClick: s
  } = e, r = l.useRef(null), f = (0, c.default)(r);
  return (0, a.jsx)("span", {
    ref: r,
    children: (0, a.jsx)(o.Button, {
      onClick: s,
      look: o.Button.Looks.BLANK,
      size: o.Button.Sizes.NONE,
      children: (0, a.jsx)(u.Spring, {
        config: E.EMOJI_BUTTON_SPRING_CONFIG,
        from: {
          value: 0
        },
        to: {
          value: f ? 1 : 0
        },
        children: e => {
          let {
            value: l
          } = e;
          return (0, a.jsx)(u.animated.div, {
            style: {
              transform: l.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            },
            children: (0, a.jsx)(d.default, {
              className: i(x.emoji, {
                [x.emojiItemDisabled]: n
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
    children: [t, (0, a.jsx)(o.Clickable, {
      className: x.dropDownContainer,
      onClick: () => {
        l(!n), s()
      },
      children: (0, a.jsx)(S.default, {
        className: i(x.dropDown, {
          [x.dropDownOpen]: n
        })
      })
    })]
  })
}

function j(e) {
  let {
    channel: t,
    title: n,
    closePopout: s,
    onFocus: u,
    onSelectEmoji: d,
    onSelectDisabledEmoji: c,
    onExpandedToggle: m,
    emojiSearchProps: E,
    recentlyUsedEmojis: S,
    analyticsOverride: _
  } = e, j = (0, g.useUID)(), [L, y] = l.useState(!1), O = (0, f.useFrequentlyUsedEmojis)(t.guild_id), P = (0, r.uniqBy)([...O, ...A], "name").filter(e => !C.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: N
  })).slice(0, I.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT);
  null != S && S.length > 0 && P.splice(P.length - 1, 1, S[0]);
  let D = e => {
      y(e), null == m || m(e)
    },
    b = (e, t) => {
      if (null == e && t) {
        s();
        return
      }
      null != e && d(e);
      D(!t), t && p.EmojiPickerStore.setSearchPlaceholder(null)
    };
  return (0, a.jsxs)(o.Dialog, {
    "aria-labelledby": j,
    children: [(0, a.jsx)(o.HeadingLevel, {
      forceLevel: 2,
      children: (0, a.jsx)(o.HiddenVisually, {
        children: (0, a.jsx)(o.H, {
          id: j,
          children: n
        })
      })
    }), (0, a.jsxs)("div", {
      className: x.container,
      children: [(0, a.jsx)(h.default, {
        analyticsOverride: _,
        channel: t,
        className: i(x.animatedPicker, {
          [x.animatedPickerTall]: L
        }),
        headerClassName: i(x.emojiPickerHeader, {
          [x.emojiPickerHeaderExpanded]: L
        }),
        closePopout: s,
        onSelectEmoji: L ? b : () => {},
        shouldHidePickerActions: !L,
        wrapper: "div",
        pickerIntention: N,
        searchProps: {
          ...E,
          accessory: (0, a.jsx)(R, {
            otherAccessories: null == E ? void 0 : E.accessory,
            isEmojiPickerExpanded: L,
            onSetExpanded: D,
            onFocus: u
          }),
          onKeyDown: e => {
            null != e && e.key !== v.KeyboardKeysUpdated.TAB && (e.key !== v.KeyboardKeysUpdated.ENTER || e.shiftKey ? D(!0) : D(!L))
          }
        }
      }), (0, a.jsx)("div", {
        className: x.slotsContainer,
        children: (0, a.jsx)("div", {
          className: i(x.slots, x.slotsWide),
          children: P.map(e => {
            let n = C.default.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: T.EmojiIntention.CHAT
            });
            return (0, a.jsx)("div", {
              className: x.slot,
              children: (0, a.jsx)(o.TooltipContainer, {
                text: e.name,
                position: "top",
                "aria-label": e.name,
                tooltipClassName: x.tooltipContainer,
                color: o.Tooltip.Colors.BRAND,
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