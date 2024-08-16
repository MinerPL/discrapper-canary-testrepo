l.r(s),
    l.d(s, {
        Steps: function () {
            return n;
        }
    }),
    l(47120);
var n,
    t,
    r = l(735250),
    a = l(470079),
    i = l(512722),
    o = l.n(i),
    d = l(442837),
    u = l(481060),
    c = l(179360),
    C = l(899667),
    m = l(430824),
    S = l(314884),
    I = l(626135),
    M = l(267642),
    _ = l(395199),
    x = l(719228),
    E = l(4434),
    U = l(981631),
    R = l(689938),
    h = l(222162);
((t = n || (n = {})).UNUSED_QUANTITY_SELECT = 'UNUSED_QUANTITY_SELECT'), (t.GUILD_SELECT = 'GUILD_SELECT'), (t.CONFIRM = 'CONFIRM'), (t.SUCCESS = 'SUCCESS');
s.default = (e) => {
    var s, l;
    let { guildBoostSlots: n, selectedGuild: t, locationSection: i, transitionState: N, onClose: g } = e,
        L = (0, M.vx)(S.Z.boostSlots);
    o()(null != n || null != t, 'Must either provide slots or an initial selected guild'), o()(!(null == n ? void 0 : n.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown');
    let f = [null == n ? 'UNUSED_QUANTITY_SELECT' : null, null == t ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [p, j] = (0, d.Wu)([C.Z], () => [C.Z.isModifyingAppliedBoost, C.Z.applyBoostError]),
        [B, v] = a.useState(''),
        [D, G] = a.useState(f[0]),
        [T, b] = a.useState(!1),
        [P, O] = a.useState(t),
        [Z, y] = a.useState(null != n ? n : L.slice(0, 1)),
        A = a.useMemo(
            () =>
                null == Z
                    ? []
                    : Z.map((e) => {
                          let { premiumGuildSubscription: s } = e;
                          return m.Z.getGuild(null == s ? void 0 : s.guildId);
                      }).filter((e) => null != e),
            [Z]
        ),
        F = a.useMemo(() => {
            var e;
            return (null == Z ? void 0 : null === (e = Z[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null;
        }, [Z]),
        k = () => {
            g('SUCCESS' === D),
                I.default.track(U.rMx.MODAL_DISMISSED, {
                    type: U.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: i
                });
        },
        H = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    o()(!(null == n && 0 === L.length), 'Cannot provide no slots if there are no other available slots'),
                    (0, r.jsxs)('div', {
                        className: h.quantitySelectorBody,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: 'heading-md/semibold',
                                className: h.quantitySelectorHeader,
                                children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                className: h.quantitySelectorDescription,
                                children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                            }),
                            (0, r.jsxs)('div', {
                                className: h.quantitySelectorWrapper,
                                children: [
                                    (0, r.jsx)(u.NumberInputStepper, {
                                        value: Z.length,
                                        onChange: (e) => y(L.slice(0, e)),
                                        minValue: 1,
                                        maxValue: L.length
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: h.quantitySelectorLabel,
                                        variant: 'text-md/normal',
                                        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })
                                ]
                            })
                        ]
                    })
                ),
                footer: () =>
                    (0, r.jsxs)(u.ModalFooter, {
                        children: [
                            (0, r.jsx)(u.Button, {
                                onClick: () => G('CONFIRM'),
                                children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                            }),
                            (0, r.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: k,
                                children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                            })
                        ]
                    })
            },
            GUILD_SELECT: {
                header: () =>
                    (0, r.jsx)(x.GuildSelectModalHeader, {
                        isTransfer: F,
                        query: B,
                        setQuery: v
                    }),
                bodyClass: h.selectContent,
                body: () =>
                    (0, r.jsx)(x.GuildSelectModalBody, {
                        onClose: k,
                        onSelectGuild: (e) => {
                            O(e), G('CONFIRM');
                        },
                        isTransfer: F,
                        selectedSlotGuilds: A,
                        query: B
                    })
            },
            CONFIRM: {
                body() {
                    if (null == P) return null;
                    let e = Z.filter((e) => (0, M.tl)(e)).length,
                        s = Z.length,
                        l = A.length;
                    return F
                        ? (0, r.jsx)(_.Z.TransferBody, {
                              fromGuilds: A,
                              toGuild: P,
                              blurb: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                  slotCount: s,
                                  guildCount: l
                              }),
                              imageClass: h.transferConfirmImage,
                              error: T ? j : null,
                              onDismissError: () => b(!1),
                              slotCount: s,
                              canceledCount: e
                          })
                        : (0, r.jsx)(_.Z.ApplyBody, {
                              guild: P,
                              blurb: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                              warning: R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                  days: U.o3l,
                                  slotCount: s
                              }),
                              imageClass: h.confirmImage,
                              error: T ? j : null,
                              onDismissError: () => b(!1),
                              slotCount: s,
                              canceledCount: e
                          });
                },
                footer() {
                    let e = Z.length,
                        s = 'CONFIRM' === f[0] ? k : () => G(f[f.indexOf(D) - 1]),
                        l = async () => {
                            if (null != P && (null == Z ? void 0 : Z.length) !== 0) {
                                o()(!Z.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    await Promise.all(
                                        Z.map((e) => {
                                            let { premiumGuildSubscription: s } = e;
                                            return null != s ? (0, c.dG)(s.guildId, s.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, c.W3)(
                                            P.id,
                                            Z.map((e) => {
                                                let { id: s } = e;
                                                return s;
                                            })
                                        ),
                                        G('SUCCESS');
                                } catch (e) {
                                    b(!0);
                                }
                            }
                        };
                    return (0, r.jsx)(_.Z.Footer, {
                        confirmation: F ? R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({ slotCount: e }) : R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({ slotCount: e }),
                        confirmationLabel: F ? R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({ slotCount: e }) : R.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({ slotCount: e }),
                        onConfirm: l,
                        onCancel: s,
                        isModifyingSubscription: p
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, r.jsx)(E.R7, {
                        guild: P,
                        isTransfer: F,
                        guildBoostQuantity: Z.length,
                        onClose: k
                    })
            }
        };
    a.useEffect(() => {
        I.default.track(U.rMx.OPEN_MODAL, {
            type: U.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: i
        });
    }, [i]);
    let w = H[D];
    return (0, r.jsxs)(u.ModalRoot, {
        transitionState: N,
        className: h.modal,
        size: u.ModalSize.SMALL,
        children: [
            null === (s = w.header) || void 0 === s ? void 0 : s.call(w),
            (0, r.jsx)(u.ModalContent, {
                className: w.bodyClass,
                children: (0, r.jsx)(u.Sequencer, {
                    step: D,
                    steps: f,
                    children: w.body()
                })
            }),
            null === (l = w.footer) || void 0 === l ? void 0 : l.call(w),
            (0, r.jsx)(u.ModalCloseButton, {
                className: h.modalCloseButton,
                onClick: k
            })
        ]
    });
};
