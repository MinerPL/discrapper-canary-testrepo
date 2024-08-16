t.d(n, {
    DK: function () {
        return Z;
    },
    Dx: function () {
        return _;
    },
    EJ: function () {
        return O;
    },
    Ee: function () {
        return v;
    },
    Hh: function () {
        return L;
    },
    II: function () {
        return C;
    },
    MC: function () {
        return j;
    },
    Vj: function () {
        return T;
    },
    gO: function () {
        return S;
    },
    i_: function () {
        return b;
    },
    jQ: function () {
        return A;
    },
    qE: function () {
        return I;
    },
    v6: function () {
        return M;
    },
    zx: function () {
        return E;
    }
}),
    t(536091);
var l = t(735250);
t(470079);
var i = t(120356),
    a = t.n(i),
    r = t(481060),
    s = t(43267),
    o = t(905656),
    u = t(600164),
    c = t(313201),
    d = t(565138),
    p = t(361207),
    m = t(63063),
    h = t(792125),
    f = t(981631),
    x = t(689938),
    g = t(986579);
let N = r.Avatar;
null == N && (N = () => null);
let _ = (e) => {
        let { className: n, id: t, children: i } = e;
        return (0, l.jsx)(r.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: a()(g.title, n),
            id: t,
            children: i
        });
    },
    Z = (e) => {
        let { className: n, children: t } = e;
        return (0, l.jsx)(r.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: n,
            children: t
        });
    },
    v = (e) => {
        let { className: n, src: t } = e;
        return (0, l.jsx)('img', {
            alt: '',
            src: t,
            className: a()(g.image, n)
        });
    },
    E = (e) => {
        let { className: n, ...t } = e,
            i = t.look === r.Button.Looks.LINK;
        return (0, l.jsx)(r.Button, {
            size: i ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !i,
            className: a()(n, {
                [g.button]: !i,
                [g.linkButton]: i
            }),
            ...t
        });
    };
(E.Looks = r.Button.Looks), (E.Colors = r.Button.Colors), (E.Sizes = r.Button.Sizes);
let I = (e) => {
        let { className: n, src: t, size: i } = e;
        return (0, l.jsx)(N, {
            src: t,
            size: i,
            className: a()(g.inviteLargeIcon, n),
            'aria-hidden': !0
        });
    },
    T = (e) => {
        let { guild: n, size: t, animate: i = !1, className: a } = e;
        return (0, l.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: a
        });
    };
T.Sizes = d.Z.Sizes;
let j = (e) => {
    let { className: n, channel: t, size: i } = e;
    return (0, l.jsx)(N, {
        src: (0, s.x)(t),
        size: i,
        className: a()(g.inviteIcon, n),
        'aria-hidden': !0
    });
};
j.Sizes = r.AvatarSizes;
let C = (e) => {
        let { label: n, error: t, placeholder: i, value: s, className: o, inputClassName: u, setRef: d, type: p = 'text', onChange: m, autoComplete: h, autoFocus: f, maxLength: x, spellCheck: N, name: _, description: Z, required: v, onFocus: E, onBlur: I } = e,
            T = (0, c.Dt)();
        return (0, l.jsxs)(r.FormItem, {
            title: n,
            error: t,
            className: o,
            required: v,
            tag: 'label',
            htmlFor: T,
            children: [
                (0, l.jsx)(r.TextInput, {
                    name: _,
                    type: p,
                    value: s,
                    inputRef: d,
                    placeholder: i,
                    inputClassName: a()(u, { [g.inputError]: null != t }),
                    'aria-label': n,
                    onChange: m,
                    autoComplete: h,
                    autoFocus: f,
                    maxLength: x,
                    spellCheck: N,
                    id: T,
                    onFocus: E,
                    onBlur: I
                }),
                null != Z
                    ? (0, l.jsx)(r.FormText, {
                          type: r.FormText.Types.DESCRIPTION,
                          className: g.description,
                          children: Z
                      })
                    : null
            ]
        });
    },
    S = (e) => {
        let { className: n, children: t } = e;
        return (0, l.jsx)('div', {
            className: a()(g.block, n),
            children: t
        });
    },
    b = (e) => {
        let { className: n, children: t, isProminent: i } = e;
        return (0, l.jsx)(r.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: a()(g.subText, n),
            children: t
        });
    },
    L = (e) => {
        let { className: n } = e;
        return (0, l.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: n,
            children: (0, l.jsx)(o.Z, { className: g.spinnerVideo })
        });
    },
    O = (e) => {
        let n,
            { online: t, total: i, className: s, flat: o, textClassName: c } = e;
        return null == i
            ? null
            : (null != t &&
                  t > 0 &&
                  (n = (0, l.jsxs)('div', {
                      className: a()(g.pill, g.pillOnline, o && g.pillFlat),
                      children: [
                          (0, l.jsx)('i', { className: g.pillIconOnline }),
                          (0, l.jsx)(r.Text, {
                              tag: 'span',
                              className: a()(g.pillMessage, c),
                              variant: 'text-sm/normal',
                              children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                          })
                      ]
                  })),
              (0, l.jsxs)(u.Z, {
                  justify: u.Z.Justify.CENTER,
                  className: s,
                  children: [
                      n,
                      (0, l.jsxs)('div', {
                          className: a()(g.pill, o && g.pillFlat),
                          children: [
                              (0, l.jsx)('i', { className: g.pillIconTotal }),
                              (0, l.jsx)(r.Text, {
                                  tag: 'span',
                                  className: a()(g.pillMessage, c),
                                  variant: 'text-sm/normal',
                                  children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    A = (e) => {
        let { user: n } = e;
        return null == n
            ? null
            : (0, l.jsxs)('div', {
                  className: g.joiningAs,
                  children: [
                      (0, l.jsx)(r.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: x.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                      }),
                      (0, l.jsx)(I, {
                          className: g.joiningAsAvatar,
                          src: n.getAvatarURL(void 0, 24),
                          size: r.AvatarSizes.SIZE_24,
                          'aria-label': n.username
                      }),
                      (0, l.jsx)(r.Text, {
                          className: g.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: n.username
                      })
                  ]
              });
    },
    M = (e) => {
        let { className: n } = e;
        return (0, l.jsxs)(S, {
            className: n,
            children: [
                (0, l.jsx)(E, {
                    onClick: () => window.open((0, p.t3)()),
                    children: x.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({ platform: (0, p.DW)() })
                }),
                (0, l.jsx)(b, {
                    className: g.downloadButtonSubtext,
                    children: x.Z.Messages.INCOMPATIBLE_BROWSER.format({ supportedBrowserURL: m.Z.getArticleURL(f.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
n.ZP = (e) => {
    let { className: n, contentClassName: t, tag: i = 'section', onSubmit: r, children: s, expanded: o = !1, theme: u = f.BRd.DARK, style: c } = e;
    return (0, l.jsxs)(i, {
        'data-theme': u,
        'data-disable-adaptive-theme': !0,
        onSubmit: r,
        style: c,
        className: a()(o ? g.authBoxExpanded : g.authBox, (0, h.Q)(u), n),
        children: [
            (0, l.jsx)('div', { className: g.discordLogo }),
            (0, l.jsx)('div', {
                className: a()(g.centeringWrapper, t),
                children: s
            })
        ]
    });
};
