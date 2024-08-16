n.r(t),
    n.d(t, {
        default: function () {
            return L;
        }
    });
var i = n(735250),
    s = n(470079),
    a = n(442837),
    o = n(704215),
    r = n(481060),
    l = n(607070),
    c = n(313201),
    d = n(70097),
    m = n(434404),
    u = n(430824),
    h = n(626135),
    _ = n(150340),
    N = n(721012),
    x = n(819866),
    I = n(981631),
    C = n(921944),
    f = n(689938),
    g = n(58775);
function L(e) {
    let { guildId: t, transitionState: n, onClose: L } = e,
        D = (0, c.Dt)(),
        v = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        j = (0, a.e7)([u.Z], () => u.Z.getGuild(t));
    return (s.useEffect(() => {
        h.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
            type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
            guild_id: t
        });
    }, [t]),
    null == j)
        ? null
        : (0, i.jsxs)(r.ModalRoot, {
              transitionState: n,
              'aria-labelledby': D,
              size: r.ModalSize.LARGE,
              className: g.modal,
              children: [
                  (0, i.jsxs)('div', {
                      className: g.content,
                      children: [
                          (0, i.jsx)(r.Heading, {
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              className: g.header,
                              children: f.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: f.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format({ guildName: j.name })
                          }),
                          (0, i.jsxs)('div', {
                              className: g.testimonials,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: g.__invalid_designBuddiesContainer,
                                      children: (0, i.jsx)(N.Z, {
                                          message: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                                          adminTitle: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
                                          profilePic: 'https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg',
                                          emphasisColor: 'text-positive',
                                          arrowPosition: 'right'
                                      })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: g.__invalid_valorantContainer,
                                      children: (0, i.jsx)(N.Z, {
                                          message: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                                          adminTitle: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
                                          profilePic: 'https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg',
                                          emphasisColor: 'text-warning',
                                          arrowPosition: 'left'
                                      })
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: g.buttonContainer,
                              children: [
                                  (0, i.jsx)(r.Button, {
                                      onClick: () => L(),
                                      look: r.Button.Looks.OUTLINED,
                                      color: r.Button.Colors.PRIMARY,
                                      children: f.Z.Messages.CLOSE
                                  }),
                                  (0, i.jsx)(r.Button, {
                                      onClick: () => {
                                          h.default.track(I.rMx.UPSELL_CLICKED, {
                                              type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                                              action: 'primary'
                                          }),
                                              m.Z.open(t, I.pNK.ONBOARDING),
                                              L(C.L.PRIMARY),
                                              (0, _.G)(j.id, o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2);
                                      },
                                      children: f.Z.Messages.CHECK_IT_OUT
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: g.videoContainer,
                      children: (0, i.jsx)(d.Z, {
                          className: g.video,
                          loop: !v,
                          autoPlay: !v,
                          playsInline: !0,
                          'data-testid': 'onboarding-demo',
                          children: (0, i.jsx)(
                              'source',
                              {
                                  src: x,
                                  type: 'video/mp4'
                              },
                              'hevc'
                          )
                      })
                  })
              ]
          });
}
