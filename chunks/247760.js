"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return s
  },
  default: function() {
    return g
  }
}), n("222007");
var s, r, a = n("37983"),
  l = n("884691"),
  i = n("627445"),
  o = n.n(i),
  u = n("446674"),
  d = n("77078"),
  c = n("583367"),
  f = n("735201"),
  m = n("305961"),
  E = n("625634"),
  p = n("751433"),
  I = n("599110"),
  _ = n("427459"),
  h = n("903016"),
  S = n("936992"),
  C = n("658206"),
  R = n("49111"),
  N = n("782340"),
  L = n("545480");
(r = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", r.GUILD_SELECT = "GUILD_SELECT", r.CONFIRM = "CONFIRM", r.SUCCESS = "SUCCESS";
var g = e => {
  var t, n;
  let {
    guildBoostSlots: s,
    selectedGuild: r,
    locationSection: i,
    transitionState: g,
    onClose: T
  } = e, x = (0, _.getAvailableGuildBoostSlots)(E.default.boostSlots);
  o(null != s || null != r, "Must either provide slots or an initial selected guild"), o(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let M = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == r ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [v, U] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
    [D, A] = l.useState(""),
    [P, O] = l.useState(M[0]),
    [y, B] = l.useState(!1),
    [j, G] = l.useState(r),
    [w, b] = l.useState(null != s ? s : x.slice(0, 1)),
    F = l.useMemo(() => null == w ? [] : w.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return m.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [w]),
    H = l.useMemo(() => {
      var e;
      return (null == w ? void 0 : null === (e = w[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [w]),
    V = () => {
      T("SUCCESS" === P), I.default.track(R.AnalyticEvents.MODAL_DISMISSED, {
        type: R.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: i
      })
    },
    k = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o(!(null == s && 0 === x.length), "Cannot provide no slots if there are no other available slots"), (0, a.jsxs)("div", {
          className: L.quantitySelectorBody,
          children: [(0, a.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: L.quantitySelectorHeader,
            children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, a.jsx)(d.Text, {
            variant: "text-md/normal",
            className: L.quantitySelectorDescription,
            children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, a.jsxs)("div", {
            className: L.quantitySelectorWrapper,
            children: [(0, a.jsx)(p.default, {
              value: w.length,
              onChange: e => b(x.slice(0, e)),
              minValue: 1,
              maxValue: x.length
            }), (0, a.jsx)(d.Text, {
              className: L.quantitySelectorLabel,
              variant: "text-md/normal",
              children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, a.jsxs)(d.ModalFooter, {
          children: [(0, a.jsx)(d.Button, {
            onClick: () => O("CONFIRM"),
            children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, a.jsx)(d.Button, {
            look: d.Button.Looks.LINK,
            color: d.Button.Colors.PRIMARY,
            onClick: V,
            children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, a.jsx)(S.GuildSelectModalHeader, {
          isTransfer: H,
          query: D,
          setQuery: A
        }),
        bodyClass: L.selectContent,
        body: () => (0, a.jsx)(S.GuildSelectModalBody, {
          onClose: V,
          onSelectGuild: e => {
            G(e), O("CONFIRM")
          },
          isTransfer: H,
          selectedSlotGuilds: F,
          query: D
        })
      },
      CONFIRM: {
        body() {
          if (null == j) return null;
          let e = w.filter(e => (0, _.isGuildBoostSlotCanceled)(e)).length,
            t = w.length,
            n = F.length;
          return H ? (0, a.jsx)(h.default.TransferBody, {
            fromGuilds: F,
            toGuild: j,
            blurb: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: n
            }),
            imageClass: L.transferConfirmImage,
            error: y ? U : null,
            onDismissError: () => B(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, a.jsx)(h.default.ApplyBody, {
            guild: j,
            blurb: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: R.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: L.confirmImage,
            error: y ? U : null,
            onDismissError: () => B(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = w.length,
            t = "CONFIRM" === M[0] ? V : () => O(M[M.indexOf(P) - 1]),
            n = async () => {
              if (null != j && (null == w ? void 0 : w.length) !== 0) {
                o(!w.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(w.map(e => {
                    let {
                      premiumGuildSubscription: t
                    } = e;
                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                  })), await (0, c.applyToGuild)(j.id, w.map(e => {
                    let {
                      id: t
                    } = e;
                    return t
                  })), O("SUCCESS")
                } catch (e) {
                  B(!0)
                }
              }
            };
          return (0, a.jsx)(h.default.Footer, {
            confirmation: H ? N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: H ? N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: n,
            onCancel: t,
            isModifyingSubscription: v
          })
        }
      },
      SUCCESS: {
        body: () => (0, a.jsx)(C.GuildBoostingConfirmation, {
          guild: j,
          isTransfer: H,
          guildBoostQuantity: w.length,
          onClose: V
        })
      }
    };
  l.useEffect(() => {
    I.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: R.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    })
  }, [i]);
  let Y = k[P];
  return (0, a.jsxs)(d.ModalRoot, {
    transitionState: g,
    className: L.modal,
    size: d.ModalSize.SMALL,
    children: [null === (t = Y.header) || void 0 === t ? void 0 : t.call(Y), (0, a.jsx)(d.ModalContent, {
      className: Y.bodyClass,
      children: (0, a.jsx)(d.Sequencer, {
        step: P,
        steps: M,
        children: Y.body()
      })
    }), null === (n = Y.footer) || void 0 === n ? void 0 : n.call(Y), (0, a.jsx)(d.ModalCloseButton, {
      className: L.modalCloseButton,
      onClick: V
    })]
  })
}