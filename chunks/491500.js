t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(735250),
    a = t(470079),
    s = t(392711),
    l = t.n(s),
    r = t(481060),
    o = t(139387),
    c = t(835473),
    d = t(471445),
    u = t(925329),
    I = t(163400),
    m = t(327934),
    _ = t(981631),
    N = t(689938),
    E = t(778429);
function T(e) {
    let { applicationId: n, channels: t } = e,
        a = (0, c.q)(n);
    return 0 === t.length || null == a
        ? null
        : (0, i.jsxs)('div', {
              className: E.applicationGroup,
              children: [
                  (0, i.jsxs)('div', {
                      className: E.header,
                      children: [
                          (0, i.jsx)(u.Z, {
                              game: a,
                              size: u.Z.Sizes.XSMALL
                          }),
                          (0, i.jsx)(r.Heading, {
                              variant: 'heading-md/semibold',
                              children: null == a ? void 0 : a.name
                          })
                      ]
                  }),
                  t.map((e) => {
                      var n;
                      return (0, i.jsx)(
                          m.I,
                          {
                              channel: e,
                              application: a,
                              name: e.name,
                              icon: null !== (n = (0, d.KS)(e)) && void 0 !== n ? n : void 0,
                              iconWrapperClassName: E.iconwrapper,
                              hasNextSection: !0,
                              trailing: (0, i.jsx)(r.PencilIcon, { size: 'xs' })
                          },
                          e.id
                      );
                  })
              ]
          });
}
function h(e) {
    let { guild: n } = e,
        t = (0, I.F)(n.id),
        s = l().groupBy(t, (e) => {
            var n;
            return null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.application_id;
        }),
        c = Object.keys(s);
    return (
        a.useEffect(() => {
            0 === t.length && o.Z.setSection(_.b4C.OVERVIEW);
        }, [t]),
        (0, i.jsxs)(r.FormSection, {
            children: [
                (0, i.jsx)(r.FormText, {
                    type: r.FormTextTypes.DESCRIPTION,
                    children: N.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING_INFO.format({ helpdeskArticle: '#' })
                }),
                (0, i.jsx)(r.FormDivider, { className: E.headerDivider }),
                c.map((e) =>
                    (0, i.jsx)(
                        T,
                        {
                            applicationId: e,
                            channels: s[e]
                        },
                        e
                    )
                )
            ]
        })
    );
}
