n.d(t, {
  Z: function() {
return M;
  },
  u: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(392711),
  o = n(338545),
  c = n(481060),
  d = n(596454),
  u = n(727637),
  h = n(543241),
  p = n(907040),
  m = n(633302),
  _ = n(806966),
  f = n(401227),
  E = n(153124),
  C = n(176354),
  g = n(823379),
  I = n(354459),
  x = n(185923),
  T = n(420212),
  v = n(419477);
let N = x.Hz.CHAT,
  S = [
m.ZP.getByName('thumbsup'),
m.ZP.getByName('eyes'),
m.ZP.getByName('laughing'),
m.ZP.getByName('watermelon'),
m.ZP.getByName('fork_and_knife'),
m.ZP.getByName('yum')
  ].filter(g.lm);

function Z(e) {
  let {
emoji: t,
isDisabled: n = !1,
onClick: l,
className: r
  } = e, h = a.useRef(null), p = (0, u.Z)(h);
  return (0, i.jsx)('span', {
ref: h,
children: (0, i.jsx)(c.Button, {
  onClick: l,
  look: c.Button.Looks.BLANK,
  size: c.Button.Sizes.NONE,
  focusProps: {
    enabled: !n
  },
  children: (0, i.jsx)(o.Spring, {
    config: f.u,
    from: {
      value: 0
    },
    to: {
      value: p ? 1 : 0
    },
    children: e => {
      let {
        value: a
      } = e;
      return (0, i.jsx)(o.animated.div, {
        style: {
          transform: a.to([
            0,
            1
          ], [
            1,
            1.14
          ]).to(e => 'scale('.concat(e, ')'))
        },
        children: (0, i.jsx)(d.Z, {
          className: s()(v.emoji, r, {
            [v.emojiItemDisabled]: n
          }),
          emojiId: t.id,
          emojiName: null == t ? void 0 : t.surrogates,
          animated: t.animated
        })
      });
    }
  })
})
  });
}

function A(e) {
  let {
otherAccessories: t,
isEmojiPickerExpanded: n,
onSetExpanded: a,
onFocus: l
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  t,
  (0, i.jsx)(c.Clickable, {
    className: v.dropDownContainer,
    onClick: () => {
      a(!n), l();
    },
    children: (0, i.jsx)(c.ChevronSmallDownIcon, {
      size: 'md',
      color: 'currentColor',
      className: s()(v.dropDown, {
        [v.dropDownOpen]: n
      })
    })
  })
]
  });
}

function M(e) {
  let {
channel: t,
title: n,
closePopout: l,
onFocus: o,
onSelectEmoji: d,
onSelectDisabledEmoji: u,
onExpandedToggle: m,
emojiSearchProps: f,
recentlyUsedEmojis: g,
analyticsOverride: M
  } = e, b = (0, E.Dt)(), [R, j] = a.useState(!1), L = (0, h.wC)(t.guild_id), P = (0, r.uniqBy)([
...L,
...S
  ], 'name').filter(e => !C.ZP.isEmojiFilteredOrLocked({
emoji: e,
channel: t,
intention: N
  })).slice(0, I.e5);
  null != g && g.length > 0 && P.splice(P.length - 1, 1, g[0]);
  let O = e => {
  j(e), null == m || m(e);
},
y = (e, t) => {
  if (null == e && t) {
    l();
    return;
  }
  null != e && d(e);
  O(!t), t && _.kJ.setSearchPlaceholder(null);
};
  return (0, i.jsxs)(c.Dialog, {
'aria-labelledby': b,
children: [
  (0, i.jsx)(c.HeadingLevel, {
    forceLevel: 2,
    children: (0, i.jsx)(c.HiddenVisually, {
      children: (0, i.jsx)(c.H, {
        id: b,
        children: n
      })
    })
  }),
  (0, i.jsxs)('div', {
    className: v.container,
    children: [
      (0, i.jsx)(p.Z, {
        analyticsOverride: M,
        channel: t,
        className: s()(v.animatedPicker, {
          [v.animatedPickerTall]: R
        }),
        headerClassName: s()(v.emojiPickerHeader, {
          [v.emojiPickerHeaderExpanded]: R
        }),
        closePopout: l,
        onSelectEmoji: R ? y : () => {},
        shouldHidePickerActions: !R,
        wrapper: 'div',
        pickerIntention: N,
        searchProps: {
          ...f,
          accessory: (0, i.jsx)(A, {
            otherAccessories: null == f ? void 0 : f.accessory,
            isEmojiPickerExpanded: R,
            onSetExpanded: O,
            onFocus: o
          }),
          onKeyDown: e => {
            null != e && e.key !== T.vn.TAB && (e.key !== T.vn.ENTER || e.shiftKey ? O(!0) : O(!R));
          }
        }
      }),
      (0, i.jsx)('div', {
        className: v.slotsContainer,
        children: (0, i.jsx)('div', {
          className: s()(v.slots, v.slotsWide),
          children: P.map(e => {
            let n = C.ZP.isEmojiDisabled({
              emoji: e,
              channel: t,
              intention: x.Hz.CHAT
            });
            return (0, i.jsx)('div', {
              className: v.slot,
              children: (0, i.jsx)(c.TooltipContainer, {
                text: e.name,
                position: 'top',
                'aria-label': e.name,
                tooltipClassName: v.tooltipContainer,
                color: c.Tooltip.Colors.BRAND,
                children: (0, i.jsx)(Z, {
                  emoji: e,
                  isDisabled: n,
                  onClick: () => {
                    n ? null == u || u(e) : y(e, !0);
                  }
                })
              })
            }, e.name);
          })
        })
      })
    ]
  })
]
  });
}