"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return l
  },
  default: function() {
    return N
  }
}), n("222007");
var l, s, i = n("37983"),
  r = n("884691"),
  a = n("627445"),
  o = n.n(a),
  u = n("446674"),
  d = n("77078"),
  c = n("583367"),
  f = n("735201"),
  p = n("305961"),
  m = n("625634"),
  h = n("751433"),
  E = n("599110"),
  I = n("427459"),
  S = n("903016"),
  g = n("936992"),
  _ = n("658206"),
  C = n("49111"),
  L = n("782340"),
  R = n("822841");
(s = l || (l = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", s.GUILD_SELECT = "GUILD_SELECT", s.CONFIRM = "CONFIRM", s.SUCCESS = "SUCCESS";
var N = e => {
  var t, n;
  let {
    guildBoostSlots: l,
    selectedGuild: s,
    locationSection: a,
    transitionState: N,
    onClose: v
  } = e, x = (0, I.getAvailableGuildBoostSlots)(m.default.boostSlots);
  o(null != l || null != s, "Must either provide slots or an initial selected guild"), o(!(null == l ? void 0 : l.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let T = [null == l ? "UNUSED_QUANTITY_SELECT" : null, null == s ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [A, M] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
    [U, D] = r.useState(""),
    [O, P] = r.useState(T[0]),
    [y, w] = r.useState(!1),
    [B, b] = r.useState(s),
    [j, G] = r.useState(null != l ? l : x.slice(0, 1)),
    F = r.useMemo(() => null == j ? [] : j.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return p.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [j]),
    k = r.useMemo(() => {
      var e;
      return (null == j ? void 0 : null === (e = j[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [j]),
    V = () => {
      v("SUCCESS" === O), E.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: a
      })
    },
    H = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o(!(null == l && 0 === x.length), "Cannot provide no slots if there are no other available slots"), (0, i.jsxs)("div", {
          className: R.quantitySelectorBody,
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: R.quantitySelectorHeader,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            className: R.quantitySelectorDescription,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, i.jsxs)("div", {
            className: R.quantitySelectorWrapper,
            children: [(0, i.jsx)(h.default, {
              value: j.length,
              onChange: e => G(x.slice(0, e)),
              minValue: 1,
              maxValue: x.length
            }), (0, i.jsx)(d.Text, {
              className: R.quantitySelectorLabel,
              variant: "text-md/normal",
              children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, i.jsxs)(d.ModalFooter, {
          children: [(0, i.jsx)(d.Button, {
            onClick: () => P("CONFIRM"),
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, i.jsx)(d.Button, {
            look: d.Button.Looks.LINK,
            color: d.Button.Colors.PRIMARY,
            onClick: V,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, i.jsx)(g.GuildSelectModalHeader, {
          isTransfer: k,
          query: U,
          setQuery: D
        }),
        bodyClass: R.selectContent,
        body: () => (0, i.jsx)(g.GuildSelectModalBody, {
          onClose: V,
          onSelectGuild: e => {
            b(e), P("CONFIRM")
          },
          isTransfer: k,
          selectedSlotGuilds: F,
          query: U
        })
      },
      CONFIRM: {
        body() {
          if (null == B) return null;
          let e = j.filter(e => (0, I.isGuildBoostSlotCanceled)(e)).length,
            t = j.length,
            n = F.length;
          return k ? (0, i.jsx)(S.default.TransferBody, {
            fromGuilds: F,
            toGuild: B,
            blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: n
            }),
            imageClass: R.transferConfirmImage,
            error: y ? M : null,
            onDismissError: () => w(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, i.jsx)(S.default.ApplyBody, {
            guild: B,
            blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: R.confirmImage,
            error: y ? M : null,
            onDismissError: () => w(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = j.length,
            t = "CONFIRM" === T[0] ? V : () => P(T[T.indexOf(O) - 1]),
            n = async () => {
              if (null != B && (null == j ? void 0 : j.length) !== 0) {
                o(!j.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(j.map(e => {
                    let {
                      premiumGuildSubscription: t
                    } = e;
                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                  })), await (0, c.applyToGuild)(B.id, j.map(e => {
                    let {
                      id: t
                    } = e;
                    return t
                  })), P("SUCCESS")
                } catch (e) {
                  w(!0)
                }
              }
            };
          return (0, i.jsx)(S.default.Footer, {
            confirmation: k ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: k ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: n,
            onCancel: t,
            isModifyingSubscription: A
          })
        }
      },
      SUCCESS: {
        body: () => (0, i.jsx)(_.GuildBoostingConfirmation, {
          guild: B,
          isTransfer: k,
          guildBoostQuantity: j.length,
          onClose: V
        })
      }
    };
  r.useEffect(() => {
    E.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    })
  }, [a]);
  let W = H[O];
  return (0, i.jsxs)(d.ModalRoot, {
    transitionState: N,
    className: R.modal,
    size: d.ModalSize.SMALL,
    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, i.jsx)(d.ModalContent, {
      className: W.bodyClass,
      children: (0, i.jsx)(d.Sequencer, {
        step: O,
        steps: T,
        children: W.body()
      })
    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, i.jsx)(d.ModalCloseButton, {
      className: R.modalCloseButton,
      onClick: V
    })]
  })
}