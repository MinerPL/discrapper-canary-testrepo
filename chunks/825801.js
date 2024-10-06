n.d(t, {
    ZP: function () {
        return O;
    },
    _1: function () {
        return g;
    },
    jd: function () {
        return A;
    }
}),
    n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(951394),
    d = n(605236),
    _ = n(314897),
    E = n(785717),
    f = n(837411),
    h = n(448197),
    p = n(510659),
    I = n(652853),
    m = n(228168),
    T = n(689938),
    S = n(374729);
let g = 2700,
    A = '> -# *',
    N = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: m.P.REPLY,
                    sourceType: m.n_.AVATAR
                },
                () => T.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: m.P.REACT,
                    sourceType: m.n_.AVATAR
                },
                () => T.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: m.P.REPLY,
                    sourceType: m.n_.STATUS
                },
                () => T.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: m.P.REACT,
                    sourceType: m.n_.STATUS
                },
                () => T.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: m.P.REPLY,
                    sourceType: m.n_.ACTIVITY
                },
                () => T.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: m.P.REACT,
                    sourceType: m.n_.ACTIVITY
                },
                () => T.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function O(e) {
    let { user: t, sourceType: n, isVisible: i, isExpandable: s } = e,
        { trackUserProfileAction: g } = (0, E.KZ)(),
        { pressReact: A, pressReply: O } = (0, h.Q)(n),
        R = (0, o.e7)([_.default], () => _.default.getId() === t.id),
        v = (0, f.Z)(t.id),
        { profileType: C } = (0, I.z)(),
        { onInteraction: L } = (0, p.Xo)();
    return t.bot || R || !v
        ? null
        : (0, r.jsxs)(c.ZP, {
              className: a()(S.popover, {
                  [S.visible]: i,
                  [S.expandable]: s,
                  [S.statusPopover]: n === m.n_.STATUS,
                  [S.avatarPopover]: n === m.n_.AVATAR
              }),
              children: [
                  (0, r.jsx)(u.TooltipContainer, {
                      text: T.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(c.zx, {
                          onClick: () => {
                              g({ action: A }),
                                  null == L ||
                                      L({
                                          interactionType: m.P.REACT,
                                          interactionSource: n
                                      }),
                                  C === m.y0.BITE_SIZE && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: a()(S.button, S.left),
                          'aria-label': N(m.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(u.ReactionIcon, {
                              size: 'xs',
                              className: S.icon
                          })
                      })
                  }),
                  (0, r.jsx)(u.TooltipContainer, {
                      text: T.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(c.zx, {
                          onClick: () => {
                              g({ action: O }),
                                  null == L ||
                                      L({
                                          interactionType: m.P.REPLY,
                                          interactionSource: n
                                      }),
                                  C === m.y0.BITE_SIZE && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: a()(S.button, S.right),
                          'aria-label': N(m.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(u.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: S.icon
                          })
                      })
                  })
              ]
          });
}
