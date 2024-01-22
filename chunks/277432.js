"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  o = n("95410"),
  s = n("77078"),
  a = n("430568"),
  u = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  E = n("145106"),
  _ = n("385976"),
  I = n("42203"),
  h = n("923959"),
  p = n("27618"),
  S = n("697218"),
  C = n("882641"),
  T = n("145131"),
  N = n("476765"),
  v = n("593195"),
  m = n("991170"),
  g = n("59811"),
  A = n("310457"),
  L = n("805828"),
  R = n("49111"),
  O = n("958706"),
  U = n("782340"),
  P = n("306978"),
  y = e => {
    var t, n;
    let {
      guildId: y,
      welcomeChannel: M,
      transitionState: D,
      onSave: b,
      onClose: x
    } = e, w = (0, N.useUID)(), [G, V] = r.useState(null != M ? M.channel_id : null), [j, F] = r.useState(null != M ? M.description : ""), [H, B] = r.useState(null != M ? {
      id: M.emoji_id,
      name: M.emoji_name
    } : null), [k, Z] = r.useState(!1), Y = (0, l.useStateFromStores)([_.default], () => (null == H ? void 0 : H.id) != null ? _.default.getUsableCustomEmojiById(H.id) : null), W = (0, l.useStateFromStores)([h.default], () => h.default.getChannels(y)[h.GUILD_SELECTABLE_CHANNELS_KEY], [y]), K = (0, l.useStateFromStores)([g.default], () => g.default.get(y)), z = null !== (n = null == K ? void 0 : null === (t = K.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [J, q] = r.useState(!1);
    r.useEffect(() => {
      !o.default.get(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => q(!0), 300)
    }, []);
    let X = [];
    W.forEach(e => {
      let {
        channel: t
      } = e;
      m.default.canEveryoneRole(R.Permissions.VIEW_CHANNEL, t) && ((null == M ? void 0 : M.channel_id) === t.id || !z.includes(t.id)) && X.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, S.default, p.default)
      })
    });
    let Q = () => {
        q(!1), x()
      },
      $ = r.useCallback(e => F(e), []),
      ee = e => {
        var t, n, i;
        if (null == e) {
          B(null);
          return
        }
        B(null != e.id ? {
          id: null !== (t = e.id) && void 0 !== t ? t : null,
          name: null !== (n = e.name) && void 0 !== n ? n : null
        } : {
          id: null,
          name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
        })
      },
      et = r.useCallback(() => {
        o.default.set(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), q(!1)
      }, []);
    return (0, i.jsx)(u.default, {
      page: R.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(s.ModalRoot, {
        transitionState: D,
        "aria-labelledby": w,
        children: [(0, i.jsxs)("div", {
          className: P.modalContents,
          children: [(0, i.jsx)(s.ModalCloseButton, {
            onClick: Q,
            className: P.closeButton
          }), (0, i.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            id: w,
            children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(s.FormSection, {
            className: P.formGroup,
            children: [(0, i.jsx)(s.SearchableSelect, {
              options: X,
              onChange: e => V(e),
              value: G,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = I.default.getChannel(n),
                  l = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : v.default;
                return (0, i.jsx)(l, {
                  className: P.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: P.formDescription,
              children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(s.FormSection, {
            className: P.formGroup,
            children: (0, i.jsx)(s.TextInput, {
              maxLength: 42,
              value: j,
              inputClassName: P.input,
              placeholder: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.FormSection, {
            className: P.formGroup,
            children: (0, i.jsxs)("div", {
              className: P.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: P.emojiTitleContainer,
                children: [(0, i.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(E.default, {
                hasSetEmoji: null != H,
                onClick: ee,
                children: (0, i.jsx)(s.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = h.default.getDefaultChannel(y);
                    return (0, i.jsx)(f.default, {
                      guildId: y,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && Q())
                      },
                      pickerIntention: O.EmojiIntention.COMMUNITY_CONTENT,
                      onNavigateAway: Q,
                      channel: n
                    })
                  },
                  position: "left",
                  animation: s.Popout.Animation.NONE,
                  align: "bottom",
                  children: (e, t) => {
                    let {
                      isShown: n
                    } = t;
                    return (0, i.jsx)(s.TooltipContainer, {
                      color: s.TooltipColors.BRAND,
                      tooltipClassName: P.tooltip,
                      position: "left",
                      text: J ? U.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: J,
                      children: (0, i.jsx)(C.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: P.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != H && (null != H.id || null != H.name) ? () => (0, i.jsx)(a.default, {
                          className: P.emoji,
                          emojiId: H.id,
                          emojiName: H.name,
                          animated: !!(null == Y ? void 0 : Y.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(s.ModalFooter, {
          className: P.footer,
          justify: T.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(T.default, {
            grow: 0,
            align: T.default.Align.CENTER,
            children: [(0, i.jsx)(s.Button, {
              onClick: Q,
              size: s.Button.Sizes.SMALL,
              look: s.Button.Looks.LINK,
              color: s.Button.Colors.PRIMARY,
              children: U.default.Messages.CANCEL
            }), (0, i.jsx)(s.Button, {
              onClick: () => {
                null != G && j.length > 0 && b({
                  channel_id: G,
                  description: j,
                  emoji_id: null == H ? void 0 : H.id,
                  emoji_name: null == H ? void 0 : H.name
                }), Q()
              },
              disabled: null == G || 0 === j.length,
              children: U.default.Messages.SAVE
            })]
          }), null != M && (0, i.jsx)(s.Button, {
            onClick: () => {
              Z(!0)
            },
            size: s.Button.Sizes.MIN,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.RED,
            children: U.default.Messages.REMOVE
          })]
        }), k && (0, i.jsx)(A.default, {
          onConfirm: () => {
            b(), Q()
          },
          onCancel: () => Z(!1),
          channelId: G
        })]
      })
    })
  }