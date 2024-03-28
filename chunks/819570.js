"use strict";
n.r(t), n.d(t, {
  ActivityCount: function() {
    return L
  },
  AuthSpinner: function() {
    return A
  },
  Avatar: function() {
    return j
  },
  Block: function() {
    return R
  },
  Button: function() {
    return S
  },
  ChannelIcon: function() {
    return E
  },
  GuildIcon: function() {
    return I
  },
  Image: function() {
    return v
  },
  IncompatibleBrowser: function() {
    return D
  },
  Input: function() {
    return _
  },
  JoiningAs: function() {
    return y
  },
  SubText: function() {
    return C
  },
  SubTitle: function() {
    return T
  },
  Title: function() {
    return N
  }
}), n("536091");
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("43267"),
  o = n("285952"),
  u = n("346656"),
  c = n("153124"),
  d = n("838949"),
  f = n("361207"),
  m = n("63063"),
  p = n("792125"),
  g = n("981631"),
  x = n("689938"),
  h = n("885399");
let b = i.Avatar;
null == b && (b = () => null);
let N = e => {
    let {
      className: t,
      id: n,
      children: a
    } = e;
    return (0, s.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: l()(h.title, t),
      id: n,
      children: a
    })
  },
  T = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, s.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: t,
      children: n
    })
  },
  v = e => {
    let {
      className: t,
      src: n
    } = e;
    return (0, s.jsx)("img", {
      alt: "",
      src: n,
      className: l()(h.image, t)
    })
  },
  S = e => {
    let {
      className: t,
      ...n
    } = e, a = n.look === i.Button.Looks.LINK;
    return (0, s.jsx)(i.Button, {
      size: a ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
      fullWidth: !a,
      className: l()(t, {
        [h.button]: !a,
        [h.linkButton]: a
      }),
      ...n
    })
  };
S.Looks = i.Button.Looks, S.Colors = i.Button.Colors, S.Sizes = i.Button.Sizes;
let j = e => {
    let {
      className: t,
      src: n,
      size: a
    } = e;
    return (0, s.jsx)(b, {
      src: n,
      size: a,
      className: l()(h.inviteLargeIcon, t),
      "aria-hidden": !0
    })
  },
  I = e => {
    let {
      guild: t,
      size: n,
      animate: a = !1,
      className: l
    } = e;
    return (0, s.jsx)(u.default, {
      active: !0,
      guild: t,
      size: n,
      animate: a,
      className: l
    })
  };
I.Sizes = u.default.Sizes;
let E = e => {
  let {
    className: t,
    channel: n,
    size: a
  } = e;
  return (0, s.jsx)(b, {
    src: (0, r.getChannelIconURL)(n),
    size: a,
    className: l()(h.inviteIcon, t),
    "aria-hidden": !0
  })
};
E.Sizes = i.AvatarSizes;
let _ = e => {
    let {
      label: t,
      error: n,
      placeholder: a,
      value: r,
      className: o,
      inputClassName: u,
      setRef: d,
      type: f = "text",
      onChange: m,
      autoComplete: p,
      autoFocus: g,
      maxLength: x,
      spellCheck: b,
      name: N,
      description: T,
      required: v,
      onFocus: S,
      onBlur: j
    } = e, I = (0, c.useUID)();
    return (0, s.jsxs)(i.FormItem, {
      title: t,
      error: n,
      className: o,
      required: v,
      tag: "label",
      htmlFor: I,
      children: [(0, s.jsx)(i.TextInput, {
        name: N,
        type: f,
        value: r,
        inputRef: d,
        placeholder: a,
        inputClassName: l()(u, {
          [h.inputError]: null != n
        }),
        "aria-label": t,
        onChange: m,
        autoComplete: p,
        autoFocus: g,
        maxLength: x,
        spellCheck: b,
        id: I,
        onFocus: S,
        onBlur: j
      }), null != T ? (0, s.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        className: h.description,
        children: T
      }) : null]
    })
  },
  R = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, s.jsx)("div", {
      className: l()(h.block, t),
      children: n
    })
  },
  C = e => {
    let {
      className: t,
      children: n,
      isProminent: a
    } = e;
    return (0, s.jsx)(i.Text, {
      variant: a ? "text-sm/normal" : "text-xs/normal",
      className: l()(h.subText, t),
      children: n
    })
  },
  A = e => {
    let {
      className: t
    } = e;
    return (0, s.jsx)(o.default, {
      direction: o.default.Direction.VERTICAL,
      align: o.default.Align.CENTER,
      className: t,
      children: (0, s.jsx)(d.default, {
        className: h.spinnerVideo
      })
    })
  },
  L = e => {
    let t, {
      online: n,
      total: a,
      className: r,
      flat: u,
      textClassName: c
    } = e;
    return null == a ? null : (null != n && n > 0 && (t = (0, s.jsxs)("div", {
      className: l()(h.pill, h.pillOnline, u && h.pillFlat),
      children: [(0, s.jsx)("i", {
        className: h.pillIconOnline
      }), (0, s.jsx)(i.Text, {
        tag: "span",
        className: l()(h.pillMessage, c),
        variant: "text-sm/normal",
        children: x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: n
        })
      })]
    })), (0, s.jsxs)(o.default, {
      justify: o.default.Justify.CENTER,
      className: r,
      children: [t, (0, s.jsxs)("div", {
        className: l()(h.pill, u && h.pillFlat),
        children: [(0, s.jsx)("i", {
          className: h.pillIconTotal
        }), (0, s.jsx)(i.Text, {
          tag: "span",
          className: l()(h.pillMessage, c),
          variant: "text-sm/normal",
          children: x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
            count: a
          })
        })]
      })]
    }))
  },
  y = e => {
    let {
      user: t
    } = e;
    return null == t ? null : (0, s.jsxs)("div", {
      className: h.joiningAs,
      children: [(0, s.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
        children: x.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
      }), (0, s.jsx)(j, {
        className: h.joiningAsAvatar,
        src: t.getAvatarURL(void 0, 24),
        size: i.AvatarSizes.SIZE_24,
        "aria-label": t.username
      }), (0, s.jsx)(i.Text, {
        className: h.joiningAsUsername,
        tag: "span",
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.username
      })]
    })
  },
  D = e => {
    let {
      className: t
    } = e;
    return (0, s.jsxs)(R, {
      className: t,
      children: [(0, s.jsx)(S, {
        onClick: () => window.open((0, f.getCurrentPlatformDownloadURL)()),
        children: x.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
          platform: (0, f.getPlatformReadableName)()
        })
      }), (0, s.jsx)(C, {
        className: h.downloadButtonSubtext,
        children: x.default.Messages.INCOMPATIBLE_BROWSER.format({
          supportedBrowserURL: m.default.getArticleURL(g.HelpdeskArticles.SUPPORTED_BROWSERS)
        })
      })]
    })
  };
t.default = e => {
  let {
    className: t,
    contentClassName: n,
    tag: a = "section",
    onSubmit: i,
    children: r,
    expanded: o = !1,
    theme: u = g.ThemeTypes.DARK,
    style: c
  } = e;
  return (0, s.jsxs)(a, {
    "data-theme": u,
    onSubmit: i,
    style: c,
    className: l()(o ? h.authBoxExpanded : h.authBox, (0, p.getThemeClass)(u), t),
    children: [(0, s.jsx)("div", {
      className: h.discordLogo
    }), (0, s.jsx)("div", {
      className: l()(h.centeringWrapper, n),
      children: r
    })]
  })
}