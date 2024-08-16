n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(607070),
    c = n(617136),
    d = n(113434),
    u = n(569984),
    _ = n(497505),
    E = n(918701),
    h = n(667105),
    m = n(284851),
    I = n(46140),
    g = n(689938),
    p = n(839062);
let T = [
    {
        value: I.cd.DESKTOP,
        get label() {
            return g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
        }
    },
    {
        value: I.cd.CONSOLE,
        get label() {
            return g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
        }
    }
];
function S(e) {
    let t,
        n,
        { value: a } = e;
    switch (a) {
        case I.cd.DESKTOP:
            (n = (0, i.jsx)(l.ScreenIcon, {})), (t = g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
        case I.cd.CONSOLE:
            (n = (0, i.jsx)(l.GameControllerIcon, {})), (t = g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
        default:
            return null;
    }
    return (0, i.jsxs)('div', {
        className: p.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function f(e) {
    var t, n, a, f;
    let { quest: C, location: N, onReceiveErrorHints: A, contentPosition: v, rowIndex: Z } = e,
        L = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        O = (0, h.g2)({ useReducedMotion: L }),
        R = (0, d._s)({ quest: C }),
        x = (0, d.z)(C),
        b = (0, d.B6)(C.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: P, isEnrolling: M } = (0, r.cj)([u.Z], () => ({
            isClaiming: u.Z.isClaimingReward(C.id) || u.Z.isFetchingRewardCode(C.id),
            isEnrolling: u.Z.isEnrolling(C.id)
        })),
        D = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        y = (null === (n = C.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        j = y && (null === (a = C.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null,
        U = (0, E.iQ)(C),
        G = !(0, E.zi)(C),
        k = (0, d._Q)(C),
        w = (0, E.zK)(C, I.S7.IN_HOUSE_CONSOLE_QUEST),
        B = (0, E.Xv)(C.config),
        H = (0, d.Rf)(C),
        [V, F, Y] = (0, d.me)(C, H),
        W = G && k === d.OH.ACCEPTED,
        z = W && V === _.LI.SELECT,
        K = W && !z && F.length > 1,
        { text: q, onClick: Q } = (0, h.Ks)({
            progressState: k,
            quest: C,
            isInHouseQuest: w,
            location: N,
            isCollectibleQuest: B,
            questContentPosition: v,
            questContentRowIndex: Z,
            inGiftInventory: !0
        }),
        { startingConsoleQuest: X, startConsoleQuest: J } = (0, d.GI)({
            questId: C.id,
            beforeRequest: () => {
                O.startAnimation(),
                    (0, c._3)({
                        questId: C.id,
                        questContent: N,
                        questContentCTA: c.jZ.DEFIBRILLATOR,
                        questContentPosition: v,
                        questContentRowIndex: Z
                    });
            },
            afterRequest: (e) => {
                O.stopAnimation(), A(e);
            }
        }),
        $ = (null === (f = C.userStatus) || void 0 === f ? void 0 : f.claimedAt) != null,
        ee = null;
    return (U && j
        ? (ee = (0, i.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: P,
              onClick: null != Q ? Q : void 0,
              className: p.button,
              children: q
          }))
        : y
          ? (ee = (0, i.jsx)(l.Button, {
                color: l.ButtonColors.BRAND,
                className: p.button,
                onClick: null != Q ? Q : void 0,
                children: q
            }))
          : G
            ? G && j
                ? (ee = (0, i.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      submitting: P,
                      onClick: null != Q ? Q : void 0,
                      className: p.button,
                      children: q
                  }))
                : G && D && !$
                  ? (ee = z
                        ? (0, i.jsx)(l.Select, {
                              className: p.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: T,
                              placeholder: g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                              renderOptionLabel: S,
                              select: Y,
                              serialize: (e) => {
                                  switch (e) {
                                      case I.cd.DESKTOP:
                                          return g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                                      case I.cd.CONSOLE:
                                          return g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                                  }
                              }
                          })
                        : (0, E.$J)(C) && !x && V !== _.LI.DESKTOP
                          ? R
                              ? (0, i.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    className: p.button,
                                    onClick: null != Q ? Q : void 0,
                                    children: q
                                })
                              : (0, i.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    onClick: J,
                                    disabled: X,
                                    className: p.button,
                                    children: (0, i.jsxs)('div', {
                                        className: p.ctaInner,
                                        children: [O.render(), g.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                                    })
                                })
                          : (0, i.jsx)(l.Button, {
                                color: l.ButtonColors.PRIMARY,
                                disabled: !0,
                                className: p.button,
                                children: g.Z.Messages.QUEST_ACCEPTED
                            }))
                  : G &&
                    !D &&
                    (ee = (0, i.jsx)(l.Button, {
                        submitting: M,
                        color: l.ButtonColors.BRAND,
                        onClick: null != Q ? Q : void 0,
                        className: p.button,
                        children: q
                    }))
            : (ee = (0, i.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: p.button,
                  children: g.Z.Messages.QUESTS_ENDED_ON_DATE.format({ expiryDate: b })
              })),
    null == ee)
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  ee,
                  K &&
                      (0, i.jsx)(m.U, {
                          onSelect: Y,
                          quest: C,
                          questContent: _.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, i.jsx)(l.Button, {
                                  className: s()(p.button, p.platformSelectorSecondary),
                                  color: l.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, i.jsxs)('div', {
                                      className: p.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case _.LI.DESKTOP:
                                                      return (0, i.jsx)(l.ScreenIcon, { color: 'currentColor' });
                                                  case _.LI.CONSOLE:
                                                      return (0, i.jsx)(l.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(V),
                                          (0, i.jsx)(l.ChevronSmallDownIcon, {
                                              className: p.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
