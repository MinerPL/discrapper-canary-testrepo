n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    d = n(617136),
    u = n(113434),
    p = n(569984),
    m = n(497505),
    x = n(918701),
    g = n(667105),
    f = n(341907),
    h = n(284851),
    C = n(46140),
    v = n(388032),
    j = n(632946);
let _ = [
    {
        value: C.cd.DESKTOP,
        get label() {
            return v.intl.string(v.t.QXc019);
        }
    },
    {
        value: C.cd.CONSOLE,
        get label() {
            return v.intl.string(v.t['8lAfuL']);
        }
    }
];
function E(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case C.cd.DESKTOP:
            (n = (0, o.jsx)(l.ScreenIcon, {})), (t = v.intl.string(v.t.QXc019));
            break;
        case C.cd.CONSOLE:
            (n = (0, o.jsx)(l.GameControllerIcon, {})), (t = v.intl.string(v.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: j.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function b(e) {
    var t, n, s, b;
    let { quest: N, location: S, onReceiveErrorHints: T, contentPosition: B, rowIndex: A } = e,
        y = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        R = (0, g.g2)({ useReducedMotion: y }),
        w = (0, u._s)({ quest: N }),
        I = (0, u.z)(N),
        k = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: q, isEnrolling: P } = (0, i.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id)
        })),
        O = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        M = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        W = M && (null === (s = N.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        L = (0, x.iQ)(N),
        Q = !(0, x.zi)(N),
        Z = (0, u._Q)(N),
        D = (0, x.zK)(N, C.S7.IN_HOUSE_CONSOLE_QUEST),
        H = (0, x.Xv)(N.config),
        U = (0, x.cr)(N),
        V = (0, u.Rf)(N),
        [z, F, G] = (0, u.me)(N, V),
        K = Q && Z === u.OH.ACCEPTED,
        Y = K && z === m.LI.SELECT,
        X = K && !Y && F.length > 1,
        J = r.useCallback(
            (e) => {
                G(e), e === C.cd.DESKTOP && T([]);
            },
            [G, T]
        ),
        { text: $, onClick: ee } = (0, g.Ks)({
            progressState: Z,
            quest: N,
            isInHouseQuest: D,
            location: S,
            isCollectibleQuest: H,
            questContentPosition: B,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: U
        }),
        { startingConsoleQuest: et, startConsoleQuest: en } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
                R.startAnimation(),
                    (0, d._3)({
                        questId: N.id,
                        questContent: S,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: B,
                        questContentRowIndex: A
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), T(e);
            }
        }),
        eo = (null === (b = N.userStatus) || void 0 === b ? void 0 : b.claimedAt) != null,
        er = null;
    return (L && W
        ? (er = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: q,
              onClick: null != ee ? ee : void 0,
              className: j.button,
              children: $
          }))
        : M
          ? (er = U
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, f.openVideoQuestModal)(N);
                              },
                              children: (0, o.jsxs)('div', {
                                  className: j.ctaInner,
                                  children: [
                                      (0, o.jsx)(l.RetryIcon, {
                                          color: l.tokens.colors.WHITE,
                                          className: j.videoQuestPlayIcon
                                      }),
                                      (0, o.jsx)('span', { children: v.intl.string(v.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.BRAND,
                              className: j.button,
                              onClick: null != ee ? ee : void 0,
                              children: $
                          })
                      ]
                  })
                : (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      className: j.button,
                      onClick: null != ee ? ee : void 0,
                      children: $
                  }))
          : Q
            ? Q && W
                ? (er = (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      submitting: q,
                      onClick: null != ee ? ee : void 0,
                      className: j.button,
                      children: $
                  }))
                : Q && O && !eo
                  ? (er = Y
                        ? (0, o.jsx)(l.Select, {
                              className: j.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: _,
                              placeholder: v.intl.string(v.t.drVw4e),
                              renderOptionLabel: E,
                              select: J,
                              serialize: (e) => {
                                  switch (e) {
                                      case C.cd.DESKTOP:
                                          return v.intl.string(v.t.QXc019);
                                      case C.cd.CONSOLE:
                                          return v.intl.string(v.t['8lAfuL']);
                                  }
                              }
                          })
                        : (0, x.$J)(N) && !I && z !== m.LI.DESKTOP
                          ? w
                              ? (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    className: j.button,
                                    onClick: null != ee ? ee : void 0,
                                    children: $
                                })
                              : (0, o.jsx)(l.Button, {
                                    color: l.ButtonColors.PRIMARY,
                                    onClick: en,
                                    disabled: et,
                                    className: j.button,
                                    children: (0, o.jsxs)('div', {
                                        className: j.ctaInner,
                                        children: [R.render(), v.intl.string(v.t.nPThNT)]
                                    })
                                })
                          : U
                            ? (0, o.jsx)(l.Button, {
                                  color: l.ButtonColors.BRAND,
                                  onClick: null != ee ? ee : void 0,
                                  className: j.button,
                                  children: $
                              })
                            : (0, o.jsx)(l.Button, {
                                  color: l.ButtonColors.PRIMARY,
                                  disabled: !0,
                                  className: j.button,
                                  children: v.intl.string(v.t['9KoPyM'])
                              }))
                  : Q &&
                    !O &&
                    (er = (0, o.jsx)(l.Button, {
                        submitting: P,
                        color: l.ButtonColors.BRAND,
                        onClick: null != ee ? ee : void 0,
                        className: j.button,
                        children: $
                    }))
            : (er = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t['14o6QU'], { expiryDate: k })
              })),
    null == er)
        ? null
        : (0, o.jsxs)('div', {
              className: j.container,
              children: [
                  er,
                  X &&
                      (0, o.jsx)(h.U, {
                          onSelect: J,
                          quest: N,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, o.jsx)(l.Button, {
                                  className: a()(j.button, j.platformSelectorSecondary),
                                  color: l.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, o.jsxs)('div', {
                                      className: j.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case m.LI.DESKTOP:
                                                      return (0, o.jsx)(l.ScreenIcon, { color: 'currentColor' });
                                                  case m.LI.CONSOLE:
                                                      return (0, o.jsx)(l.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(z),
                                          (0, o.jsx)(l.ChevronSmallDownIcon, {
                                              className: j.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
