"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  s = n("95410"),
  a = n("77078"),
  o = n("430568"),
  u = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  h = n("145106"),
  E = n("385976"),
  C = n("42203"),
  v = n("923959"),
  m = n("27618"),
  _ = n("697218"),
  p = n("882641"),
  S = n("145131"),
  N = n("476765"),
  I = n("593195"),
  T = n("991170"),
  g = n("59811"),
  A = n("310457"),
  x = n("805828"),
  L = n("49111"),
  M = n("958706"),
  R = n("782340"),
  P = n("977611"),
  y = e => {
    var t, n;
    let {
      guildId: y,
      welcomeChannel: b,
      transitionState: O,
      onSave: j,
      onClose: w
    } = e, V = (0, N.useUID)(), [D, U] = r.useState(null != b ? b.channel_id : null), [H, G] = r.useState(null != b ? b.description : ""), [B, F] = r.useState(null != b ? {
      id: b.emoji_id,
      name: b.emoji_name
    } : null), [k, W] = r.useState(!1), Z = (0, l.useStateFromStores)([E.default], () => (null == B ? void 0 : B.id) != null ? E.default.getUsableCustomEmojiById(B.id) : null), z = (0, l.useStateFromStores)([v.default], () => v.default.getChannels(y)[v.GUILD_SELECTABLE_CHANNELS_KEY], [y]), Y = (0, l.useStateFromStores)([g.default], () => g.default.get(y)), K = null !== (n = null == Y ? void 0 : null === (t = Y.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [J, X] = r.useState(!1);
    r.useEffect(() => {
      !s.default.get(x.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => X(!0), 300)
    }, []);
    let q = [];
    z.forEach(e => {
      let {
        channel: t
      } = e;
      T.canEveryoneRole(L.Permissions.VIEW_CHANNEL, t) && ((null == b ? void 0 : b.channel_id) === t.id || !K.includes(t.id)) && q.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, _.default, m.default)
      })
    });
    let Q = () => {
        X(!1), w()
      },
      $ = r.useCallback(e => G(e), []),
      ee = e => {
        var t, n, i;
        if (null == e) {
          F(null);
          return
        }
        F(null != e.id ? {
          id: null !== (t = e.id) && void 0 !== t ? t : null,
          name: null !== (n = e.name) && void 0 !== n ? n : null
        } : {
          id: null,
          name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
        })
      },
      et = r.useCallback(() => {
        s.default.set(x.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), X(!1)
      }, []);
    return (0, i.jsx)(u.default, {
      page: L.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(a.ModalRoot, {
        transitionState: O,
        "aria-labelledby": V,
        children: [(0, i.jsxs)("div", {
          className: P.modalContents,
          children: [(0, i.jsx)(a.ModalCloseButton, {
            onClick: Q,
            className: P.closeButton
          }), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            id: V,
            children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(a.FormSection, {
            className: P.formGroup,
            children: [(0, i.jsx)(a.SearchableSelect, {
              options: q,
              onChange: e => U(e),
              value: D,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = C.default.getChannel(n),
                  l = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : I.default;
                return (0, i.jsx)(l, {
                  className: P.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: P.formDescription,
              children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(a.FormSection, {
            className: P.formGroup,
            children: (0, i.jsx)(a.TextInput, {
              maxLength: 42,
              value: H,
              inputClassName: P.input,
              placeholder: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.FormSection, {
            className: P.formGroup,
            children: (0, i.jsxs)("div", {
              className: P.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: P.emojiTitleContainer,
                children: [(0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(h.default, {
                hasSetEmoji: null != B,
                onClick: ee,
                children: (0, i.jsx)(a.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = v.default.getDefaultChannel(y);
                    return (0, i.jsx)(f.default, {
                      guildId: y,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && Q())
                      },
                      pickerIntention: M.EmojiIntention.COMMUNITY_CONTENT,
                      onNavigateAway: Q,
                      channel: n
                    })
                  },
                  position: "left",
                  animation: a.Popout.Animation.NONE,
                  align: "bottom",
                  children: (e, t) => {
                    let {
                      isShown: n
                    } = t;
                    return (0, i.jsx)(a.TooltipContainer, {
                      color: a.TooltipColors.BRAND,
                      tooltipClassName: P.tooltip,
                      position: "left",
                      text: J ? R.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: J,
                      children: (0, i.jsx)(p.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: P.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != B && (null != B.id || null != B.name) ? () => (0, i.jsx)(o.default, {
                          className: P.emoji,
                          emojiId: B.id,
                          emojiName: B.name,
                          animated: !!(null == Z ? void 0 : Z.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(a.ModalFooter, {
          className: P.footer,
          justify: S.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(S.default, {
            grow: 0,
            align: S.default.Align.CENTER,
            children: [(0, i.jsx)(a.Button, {
              onClick: Q,
              size: a.Button.Sizes.SMALL,
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              children: R.default.Messages.CANCEL
            }), (0, i.jsx)(a.Button, {
              onClick: () => {
                null != D && H.length > 0 && j({
                  channel_id: D,
                  description: H,
                  emoji_id: null == B ? void 0 : B.id,
                  emoji_name: null == B ? void 0 : B.name
                }), Q()
              },
              disabled: null == D || 0 === H.length,
              children: R.default.Messages.SAVE
            })]
          }), null != b && (0, i.jsx)(a.Button, {
            onClick: () => {
              W(!0)
            },
            size: a.Button.Sizes.MIN,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.RED,
            children: R.default.Messages.REMOVE
          })]
        }), k && (0, i.jsx)(A.default, {
          onConfirm: () => {
            j(), Q()
          },
          onCancel: () => W(!1),
          channelId: D
        })]
      })
    })
  }