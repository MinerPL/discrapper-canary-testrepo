"use strict";
n.r(l), n("47120"), n("653041");
var t = n("735250"),
  a = n("470079"),
  o = n("442837"),
  i = n("433517"),
  s = n("481060"),
  u = n("596454"),
  d = n("410575"),
  r = n("933557"),
  c = n("471445"),
  E = n("907040"),
  m = n("273039"),
  _ = n("339085"),
  C = n("592125"),
  f = n("984933"),
  h = n("699516"),
  N = n("594174"),
  L = n("401227"),
  I = n("285952"),
  S = n("153124"),
  j = n("93879"),
  x = n("700785"),
  T = n("995532"),
  v = n("514698"),
  M = n("845606"),
  O = n("981631"),
  g = n("185923"),
  p = n("689938"),
  P = n("650710");
l.default = e => {
  var l, n;
  let {
    guildId: A,
    welcomeChannel: B,
    transitionState: k,
    onSave: G,
    onClose: D
  } = e, R = (0, S.useUID)(), [U, W] = a.useState(null != B ? B.channel_id : null), [b, H] = a.useState(null != B ? B.description : ""), [F, K] = a.useState(null != B ? {
    id: B.emoji_id,
    name: B.emoji_name
  } : null), [y, Y] = a.useState(!1), J = (0, o.useStateFromStores)([_.default], () => (null == F ? void 0 : F.id) != null ? _.default.getUsableCustomEmojiById(F.id) : null), w = (0, o.useStateFromStores)([f.default], () => f.default.getChannels(A)[f.GUILD_SELECTABLE_CHANNELS_KEY], [A]), z = (0, o.useStateFromStores)([T.default], () => T.default.get(A)), V = null !== (n = null == z ? void 0 : null === (l = z.welcome_channels) || void 0 === l ? void 0 : l.map(e => e.channel_id)) && void 0 !== n ? n : [], [q, Q] = a.useState(!1);
  a.useEffect(() => {
    !i.Storage.get(M.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => Q(!0), 300)
  }, []);
  let X = [];
  w.forEach(e => {
    let {
      channel: l
    } = e;
    x.canEveryoneRole(O.Permissions.VIEW_CHANNEL, l) && ((null == B ? void 0 : B.channel_id) === l.id || !V.includes(l.id)) && X.push({
      value: l.id,
      label: (0, r.computeChannelName)(l, N.default, h.default)
    })
  });
  let Z = () => {
      Q(!1), D()
    },
    $ = a.useCallback(e => H(e), []),
    ee = e => {
      var l, n, t;
      if (null == e) {
        K(null);
        return
      }
      K(null != e.id ? {
        id: null !== (l = e.id) && void 0 !== l ? l : null,
        name: null !== (n = e.name) && void 0 !== n ? n : null
      } : {
        id: null,
        name: null !== (t = e.optionallyDiverseSequence) && void 0 !== t ? t : null
      })
    },
    el = a.useCallback(() => {
      i.Storage.set(M.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), Q(!1)
    }, []);
  return (0, t.jsx)(d.default, {
    page: O.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
    children: (0, t.jsxs)(s.ModalRoot, {
      transitionState: k,
      "aria-labelledby": R,
      children: [(0, t.jsxs)("div", {
        className: P.modalContents,
        children: [(0, t.jsx)(s.ModalCloseButton, {
          onClick: Z,
          className: P.closeButton
        }), (0, t.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: P.headerText,
          id: R,
          children: p.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
        }), (0, t.jsxs)(s.FormSection, {
          className: P.__invalid_formGroup,
          children: [(0, t.jsx)(s.SearchableSelect, {
            options: X,
            onChange: e => W(e),
            value: U,
            renderOptionPrefix: e => {
              var l;
              if (null === e) return null;
              let n = e.value,
                a = C.default.getChannel(n),
                o = null !== (l = (0, c.getChannelIconComponent)(a)) && void 0 !== l ? l : j.default;
              return (0, t.jsx)(o, {
                className: P.channelTitleIcon,
                width: 16,
                height: 16
              })
            }
          }), (0, t.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: P.formDescription,
            children: p.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
          })]
        }), (0, t.jsx)(s.FormDivider, {}), (0, t.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: P.headerText,
          children: p.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
        }), (0, t.jsx)(s.FormSection, {
          className: P.__invalid_formGroup,
          children: (0, t.jsx)(s.TextInput, {
            maxLength: 42,
            value: b,
            inputClassName: P.input,
            placeholder: p.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
            onChange: $
          })
        }), (0, t.jsx)(s.FormDivider, {}), (0, t.jsx)(s.FormSection, {
          className: P.__invalid_formGroup,
          children: (0, t.jsxs)("div", {
            className: P.emojiSectionContainer,
            children: [(0, t.jsxs)("div", {
              className: P.emojiTitleContainer,
              children: [(0, t.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                children: p.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
              }), (0, t.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
              })]
            }), (0, t.jsx)(m.default, {
              hasSetEmoji: null != F,
              onClick: ee,
              children: (0, t.jsx)(s.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: l
                  } = e, n = f.default.getDefaultChannel(A);
                  return (0, t.jsx)(E.default, {
                    guildId: A,
                    closePopout: l,
                    onSelectEmoji: (e, n) => {
                      ee(e), n && (l(), null == e && Z())
                    },
                    pickerIntention: g.EmojiIntention.COMMUNITY_CONTENT,
                    onNavigateAway: Z,
                    channel: n
                  })
                },
                position: "left",
                animation: s.Popout.Animation.NONE,
                align: "bottom",
                children: (e, l) => {
                  let {
                    isShown: n
                  } = l;
                  return (0, t.jsx)(s.TooltipContainer, {
                    color: s.TooltipColors.BRAND,
                    tooltipClassName: P.tooltip,
                    position: "left",
                    text: q ? p.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                    forceOpen: q,
                    children: (0, t.jsx)(L.default, {
                      ...e,
                      onClick: l => {
                        var n;
                        el(), null === (n = e.onClick) || void 0 === n || n.call(e, l)
                      },
                      active: n,
                      className: P.emojiButton,
                      tabIndex: 0,
                      renderButtonContents: null != F && (null != F.id || null != F.name) ? () => (0, t.jsx)(u.default, {
                        className: P.emoji,
                        emojiId: F.id,
                        emojiName: F.name,
                        animated: !!(null == J ? void 0 : J.animated)
                      }) : null
                    })
                  })
                }
              })
            })]
          })
        })]
      }), (0, t.jsxs)(s.ModalFooter, {
        className: P.footer,
        justify: I.default.Justify.BETWEEN,
        children: [(0, t.jsxs)(I.default, {
          grow: 0,
          align: I.default.Align.CENTER,
          children: [(0, t.jsx)(s.Button, {
            onClick: Z,
            size: s.Button.Sizes.SMALL,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.PRIMARY,
            children: p.default.Messages.CANCEL
          }), (0, t.jsx)(s.Button, {
            onClick: () => {
              null != U && b.length > 0 && G({
                channel_id: U,
                description: b,
                emoji_id: null == F ? void 0 : F.id,
                emoji_name: null == F ? void 0 : F.name
              }), Z()
            },
            disabled: null == U || 0 === b.length,
            children: p.default.Messages.SAVE
          })]
        }), null != B && (0, t.jsx)(s.Button, {
          onClick: () => {
            Y(!0)
          },
          size: s.Button.Sizes.MIN,
          look: s.Button.Looks.LINK,
          color: s.Button.Colors.RED,
          children: p.default.Messages.REMOVE
        })]
      }), y && (0, t.jsx)(v.default, {
        onConfirm: () => {
          G(), Z()
        },
        onCancel: () => Y(!1),
        channelId: U
      })]
    })
  })
}