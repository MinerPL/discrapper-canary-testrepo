n.d(s, {
    DK: function () {
        return T;
    },
    Dx: function () {
        return p;
    },
    EJ: function () {
        return O;
    },
    Ee: function () {
        return g;
    },
    Hh: function () {
        return R;
    },
    II: function () {
        return S;
    },
    MC: function () {
        return A;
    },
    Vj: function () {
        return f;
    },
    gO: function () {
        return v;
    },
    i_: function () {
        return M;
    },
    jQ: function () {
        return D;
    },
    qE: function () {
        return h;
    },
    v6: function () {
        return L;
    },
    zx: function () {
        return j;
    }
}),
    n(536091);
var t = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    r = n(481060),
    i = n(43267),
    u = n(905656),
    o = n(600164),
    c = n(313201),
    m = n(565138),
    d = n(361207),
    I = n(63063),
    N = n(981631),
    _ = n(689938),
    E = n(986579);
let x = r.Avatar;
null == x && (x = () => null);
let p = (e) => {
        let { className: s, id: n, children: a } = e;
        return (0, t.jsx)(r.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: l()(E.title, s),
            id: n,
            children: a
        });
    },
    T = (e) => {
        let { className: s, children: n } = e;
        return (0, t.jsx)(r.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: s,
            children: n
        });
    },
    g = (e) => {
        let { className: s, src: n } = e;
        return (0, t.jsx)('img', {
            alt: '',
            src: n,
            className: l()(E.image, s)
        });
    },
    j = (e) => {
        let { className: s, ...n } = e,
            a = n.look === r.Button.Looks.LINK;
        return (0, t.jsx)(r.Button, {
            size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !a,
            className: l()(s, {
                [E.button]: !a,
                [E.linkButton]: a
            }),
            ...n
        });
    };
(j.Looks = r.Button.Looks), (j.Colors = r.Button.Colors), (j.Sizes = r.Button.Sizes);
let h = (e) => {
        let { className: s, src: n, size: a } = e;
        return (0, t.jsx)(x, {
            src: n,
            size: a,
            className: l()(E.inviteLargeIcon, s),
            'aria-hidden': !0
        });
    },
    f = (e) => {
        let { guild: s, size: n, animate: a = !1, className: l } = e;
        return (0, t.jsx)(m.Z, {
            active: !0,
            guild: s,
            size: n,
            animate: a,
            className: l
        });
    };
f.Sizes = m.Z.Sizes;
let A = (e) => {
    let { className: s, channel: n, size: a } = e;
    return (0, t.jsx)(x, {
        src: (0, i.x)(n),
        size: a,
        className: l()(E.inviteIcon, s),
        'aria-hidden': !0
    });
};
A.Sizes = r.AvatarSizes;
let S = (e) => {
        let { label: s, error: n, placeholder: a, value: i, className: u, inputClassName: o, setRef: m, type: d = 'text', onChange: I, autoComplete: N, autoFocus: _, maxLength: x, spellCheck: p, name: T, description: g, required: j, onFocus: h, onBlur: f } = e,
            A = (0, c.Dt)();
        return (0, t.jsxs)(r.FormItem, {
            title: s,
            error: n,
            className: u,
            required: j,
            tag: 'label',
            htmlFor: A,
            children: [
                (0, t.jsx)(r.TextInput, {
                    name: T,
                    type: d,
                    value: i,
                    inputRef: m,
                    placeholder: a,
                    inputClassName: l()(o, { [E.inputError]: null != n }),
                    'aria-label': s,
                    onChange: I,
                    autoComplete: N,
                    autoFocus: _,
                    maxLength: x,
                    spellCheck: p,
                    id: A,
                    onFocus: h,
                    onBlur: f
                }),
                null != g
                    ? (0, t.jsx)(r.FormText, {
                          type: r.FormText.Types.DESCRIPTION,
                          className: E.description,
                          children: g
                      })
                    : null
            ]
        });
    },
    v = (e) => {
        let { className: s, children: n } = e;
        return (0, t.jsx)('div', {
            className: l()(E.block, s),
            children: n
        });
    },
    M = (e) => {
        let { className: s, children: n, isProminent: a } = e;
        return (0, t.jsx)(r.Text, {
            variant: a ? 'text-sm/normal' : 'text-xs/normal',
            className: l()(E.subText, s),
            children: n
        });
    },
    R = (e) => {
        let { className: s } = e;
        return (0, t.jsx)(o.Z, {
            direction: o.Z.Direction.VERTICAL,
            align: o.Z.Align.CENTER,
            className: s,
            children: (0, t.jsx)(u.Z, { className: E.spinnerVideo })
        });
    },
    O = (e) => {
        let s,
            { online: n, total: a, className: i, flat: u, textClassName: c } = e;
        return null == a
            ? null
            : (null != n &&
                  n > 0 &&
                  (s = (0, t.jsxs)('div', {
                      className: l()(E.pill, E.pillOnline, u && E.pillFlat),
                      children: [
                          (0, t.jsx)('i', { className: E.pillIconOnline }),
                          (0, t.jsx)(r.Text, {
                              tag: 'span',
                              className: l()(E.pillMessage, c),
                              variant: 'text-sm/normal',
                              children: _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                          })
                      ]
                  })),
              (0, t.jsxs)(o.Z, {
                  justify: o.Z.Justify.CENTER,
                  className: i,
                  children: [
                      s,
                      (0, t.jsxs)('div', {
                          className: l()(E.pill, u && E.pillFlat),
                          children: [
                              (0, t.jsx)('i', { className: E.pillIconTotal }),
                              (0, t.jsx)(r.Text, {
                                  tag: 'span',
                                  className: l()(E.pillMessage, c),
                                  variant: 'text-sm/normal',
                                  children: _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: a })
                              })
                          ]
                      })
                  ]
              }));
    },
    D = (e) => {
        let { user: s } = e;
        return null == s
            ? null
            : (0, t.jsxs)('div', {
                  className: E.joiningAs,
                  children: [
                      (0, t.jsx)(r.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: _.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                      }),
                      (0, t.jsx)(h, {
                          className: E.joiningAsAvatar,
                          src: s.getAvatarURL(void 0, 24),
                          size: r.AvatarSizes.SIZE_24,
                          'aria-label': s.username
                      }),
                      (0, t.jsx)(r.Text, {
                          className: E.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: s.username
                      })
                  ]
              });
    },
    L = (e) => {
        let { className: s } = e;
        return (0, t.jsxs)(v, {
            className: s,
            children: [
                (0, t.jsx)(j, {
                    onClick: () => window.open((0, d.t3)()),
                    children: _.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({ platform: (0, d.DW)() })
                }),
                (0, t.jsx)(M, {
                    className: E.downloadButtonSubtext,
                    children: _.Z.Messages.INCOMPATIBLE_BROWSER.format({ supportedBrowserURL: I.Z.getArticleURL(N.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
s.ZP = (e) => {
    let { className: s, contentClassName: n, tag: a = 'section', onSubmit: i, children: u, expanded: o = !1, theme: c = N.BRd.DARK, style: m } = e;
    return (0, t.jsx)(r.ThemeProvider, {
        theme: c,
        children: (e) =>
            (0, t.jsxs)(a, {
                'data-theme': c,
                'data-disable-adaptive-theme': !0,
                onSubmit: i,
                style: m,
                className: l()(o ? E.authBoxExpanded : E.authBox, e, s),
                children: [
                    (0, t.jsx)('div', { className: E.discordLogo }),
                    (0, t.jsx)('div', {
                        className: l()(E.centeringWrapper, n),
                        children: u
                    })
                ]
            })
    });
};
