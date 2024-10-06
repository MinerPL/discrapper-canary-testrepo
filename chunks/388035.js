n.d(t, {
    U: function () {
        return T;
    }
}),
    n(47120);
var i = n(735250),
    a = n(704215),
    s = n(481060),
    l = n(243778),
    r = n(970731),
    o = n(2818),
    c = n(921944),
    d = n(689938),
    u = n(413859),
    _ = n(235810);
let E = a.z.FOR_LATER_POPOUT_COACHMARK,
    I = () =>
        (0, i.jsx)('div', {
            className: u.imageContainer,
            children: (0, i.jsx)('img', {
                className: u.image,
                src: _,
                alt: ''
            })
        }),
    m = (e) =>
        (0, i.jsx)(r.ZP, {
            className: u.container,
            asset: (0, i.jsx)(I, {}),
            header: d.Z.Messages.FOR_LATER_COACHMARK_TITLE,
            content: d.Z.Messages.FOR_LATER_COACHMARK_BODY,
            buttonCTA: d.Z.Messages.GOT_IT,
            buttonProps: {
                color: s.ButtonColors.WHITE,
                innerClassName: u.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: r.DF.TOP_RIGHT
        });
function T(e) {
    let { location: t, children: n } = e,
        { enabled: a, inInbox: r } = o.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [c, d] = (0, l.US)(a && t === (r ? 'inbox-button' : 'bookmarks-button') ? [E] : [], void 0);
    return c !== E
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(s.Popout, {
              renderPopout: () => m(d),
              position: 'bottom',
              align: 'right',
              animation: s.Popout.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
