"use strict";
l.r(t), l.d(t, {
  Steps: function() {
    return s
  }
}), l("47120");
var s, n, a = l("735250"),
  r = l("470079"),
  i = l("512722"),
  o = l.n(i),
  d = l("442837"),
  u = l("481060"),
  c = l("179360"),
  C = l("899667"),
  m = l("430824"),
  f = l("314884"),
  S = l("298193"),
  I = l("626135"),
  _ = l("267642"),
  M = l("395199"),
  E = l("719228"),
  x = l("4434"),
  N = l("981631"),
  R = l("689938"),
  U = l("408669");
(n = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", n.GUILD_SELECT = "GUILD_SELECT", n.CONFIRM = "CONFIRM", n.SUCCESS = "SUCCESS";
t.default = e => {
  var t, l;
  let {
    guildBoostSlots: s,
    selectedGuild: n,
    locationSection: i,
    transitionState: p,
    onClose: h
  } = e, g = (0, _.getAvailableGuildBoostSlots)(f.default.boostSlots);
  o()(null != s || null != n, "Must either provide slots or an initial selected guild"), o()(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let L = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == n ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [j, B] = (0, d.useStateFromStoresArray)([C.default], () => [C.default.isModifyingAppliedBoost, C.default.applyBoostError]),
    [v, T] = r.useState(""),
    [G, D] = r.useState(L[0]),
    [O, P] = r.useState(!1),
    [b, y] = r.useState(n),
    [A, F] = r.useState(null != s ? s : g.slice(0, 1)),
    H = r.useMemo(() => null == A ? [] : A.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return m.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [A]),
    k = r.useMemo(() => {
      var e;
      return (null == A ? void 0 : null === (e = A[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [A]),
    w = () => {
      h("SUCCESS" === G), I.default.track(N.AnalyticEvents.MODAL_DISMISSED, {
        type: N.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: i
      })
    },
    Y = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o()(!(null == s && 0 === g.length), "Cannot provide no slots if there are no other available slots"), (0, a.jsxs)("div", {
          className: U.quantitySelectorBody,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: U.quantitySelectorHeader,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, a.jsx)(u.Text, {
            variant: "text-md/normal",
            className: U.quantitySelectorDescription,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, a.jsxs)("div", {
            className: U.quantitySelectorWrapper,
            children: [(0, a.jsx)(S.default, {
              value: A.length,
              onChange: e => F(g.slice(0, e)),
              minValue: 1,
              maxValue: g.length
            }), (0, a.jsx)(u.Text, {
              className: U.quantitySelectorLabel,
              variant: "text-md/normal",
              children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, a.jsxs)(u.ModalFooter, {
          children: [(0, a.jsx)(u.Button, {
            onClick: () => D("CONFIRM"),
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, a.jsx)(u.Button, {
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.PRIMARY,
            onClick: w,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, a.jsx)(E.GuildSelectModalHeader, {
          isTransfer: k,
          query: v,
          setQuery: T
        }),
        bodyClass: U.selectContent,
        body: () => (0, a.jsx)(E.GuildSelectModalBody, {
          onClose: w,
          onSelectGuild: e => {
            y(e), D("CONFIRM")
          },
          isTransfer: k,
          selectedSlotGuilds: H,
          query: v
        })
      },
      CONFIRM: {
        body() {
          if (null == b) return null;
          let e = A.filter(e => (0, _.isGuildBoostSlotCanceled)(e)).length,
            t = A.length,
            l = H.length;
          return k ? (0, a.jsx)(M.default.TransferBody, {
            fromGuilds: H,
            toGuild: b,
            blurb: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: l
            }),
            imageClass: U.transferConfirmImage,
            error: O ? B : null,
            onDismissError: () => P(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, a.jsx)(M.default.ApplyBody, {
            guild: b,
            blurb: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: N.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: U.confirmImage,
            error: O ? B : null,
            onDismissError: () => P(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = A.length,
            t = "CONFIRM" === L[0] ? w : () => D(L[L.indexOf(G) - 1]),
            l = async () => {
              if (null != b && (null == A ? void 0 : A.length) !== 0) {
                o()(!A.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(A.map(e => {
                    let {
                      premiumGuildSubscription: t
                    } = e;
                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                  })), await (0, c.applyToGuild)(b.id, A.map(e => {
                    let {
                      id: t
                    } = e;
                    return t
                  })), D("SUCCESS")
                } catch (e) {
                  P(!0)
                }
              }
            };
          return (0, a.jsx)(M.default.Footer, {
            confirmation: k ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: k ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: l,
            onCancel: t,
            isModifyingSubscription: j
          })
        }
      },
      SUCCESS: {
        body: () => (0, a.jsx)(x.GuildBoostingConfirmation, {
          guild: b,
          isTransfer: k,
          guildBoostQuantity: A.length,
          onClose: w
        })
      }
    };
  r.useEffect(() => {
    I.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: N.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    })
  }, [i]);
  let q = Y[G];
  return (0, a.jsxs)(u.ModalRoot, {
    transitionState: p,
    className: U.modal,
    size: u.ModalSize.SMALL,
    children: [null === (t = q.header) || void 0 === t ? void 0 : t.call(q), (0, a.jsx)(u.ModalContent, {
      className: q.bodyClass,
      children: (0, a.jsx)(u.Sequencer, {
        step: G,
        steps: L,
        children: q.body()
      })
    }), null === (l = q.footer) || void 0 === l ? void 0 : l.call(q), (0, a.jsx)(u.ModalCloseButton, {
      className: U.modalCloseButton,
      onClick: w
    })]
  })
}