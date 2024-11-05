n.d(t, {
    ZP: function () {
        return y;
    },
    _1: function () {
        return S;
    },
    jd: function () {
        return T;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(951394),
    d = n(605236),
    f = n(314897),
    _ = n(785717),
    h = n(837411),
    p = n(448197),
    m = n(510659),
    g = n(652853),
    E = n(228168),
    v = n(388032),
    I = n(727747);
let S = 2700,
    T = '> -# *',
    b = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: E.P.REPLY,
                    sourceType: E.n_.AVATAR
                },
                () => v.intl.string(v.t.xvN0fX)
            )
            .with(
                {
                    interactionType: E.P.REACT,
                    sourceType: E.n_.AVATAR
                },
                () => v.intl.string(v.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: E.P.REPLY,
                    sourceType: E.n_.STATUS
                },
                () => v.intl.string(v.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: E.P.REACT,
                    sourceType: E.n_.STATUS
                },
                () => v.intl.string(v.t.TKdBCw)
            )
            .with(
                {
                    interactionType: E.P.REPLY,
                    sourceType: E.n_.ACTIVITY
                },
                () => v.intl.string(v.t.ObfsSk)
            )
            .with(
                {
                    interactionType: E.P.REACT,
                    sourceType: E.n_.ACTIVITY
                },
                () => v.intl.string(v.t.bSe71N)
            )
            .exhaustive();
function y(e) {
    let { user: t, sourceType: n, isVisible: i, isExpandable: s, interactionSourceId: S } = e,
        { trackUserProfileAction: T } = (0, _.KZ)(),
        { pressReact: y, pressReply: A } = (0, p.Q)(n),
        N = (0, o.e7)([f.default], () => f.default.getId() === t.id),
        C = (0, h.Z)(t.id),
        { profileType: R } = (0, g.z)(),
        { onInteraction: O } = (0, m.Xo)();
    return t.bot || N || !C
        ? null
        : (0, r.jsxs)(c.ZP, {
              className: a()(I.popover, {
                  [I.visible]: i,
                  [I.expandable]: s,
                  [I.statusPopover]: n === E.n_.STATUS,
                  [I.avatarPopover]: n === E.n_.AVATAR,
                  [I.activityPopover]: n === E.n_.ACTIVITY
              }),
              children: [
                  (0, r.jsx)(u.TooltipContainer, {
                      text: v.intl.string(v.t.nhaI4e),
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(c.zx, {
                          onClick: () => {
                              T({ action: y }),
                                  null == O ||
                                      O({
                                          interactionType: E.P.REACT,
                                          interactionSource: n,
                                          interactionSourceId: S
                                      }),
                                  R === E.y0.BITE_SIZE && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: a()(I.button, I.left),
                          'aria-label': b(E.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(u.ReactionIcon, {
                              size: 'xs',
                              className: I.icon
                          })
                      })
                  }),
                  (0, r.jsx)(u.TooltipContainer, {
                      text: v.intl.string(v.t.RmDYKC),
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(c.zx, {
                          onClick: () => {
                              T({ action: A }),
                                  null == O ||
                                      O({
                                          interactionType: E.P.REPLY,
                                          interactionSource: n,
                                          interactionSourceId: S
                                      }),
                                  R === E.y0.BITE_SIZE && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: a()(I.button, I.right),
                          'aria-label': b(E.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(u.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: I.icon
                          })
                      })
                  })
              ]
          });
}
