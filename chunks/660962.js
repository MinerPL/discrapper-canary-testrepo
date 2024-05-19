"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("605436"),
  E = s("663993"),
  _ = s("518738"),
  I = s("786761"),
  T = s("3148"),
  S = s("753206"),
  f = s("598077"),
  m = s("496675"),
  N = s("792125"),
  g = s("764260"),
  h = s("95242"),
  C = s("541575"),
  R = s("420966"),
  x = s("337344"),
  L = s("275296"),
  O = s("203377"),
  A = s("981631"),
  p = s("689938"),
  M = s("75518"),
  D = s("585512"),
  v = s("179517"),
  G = s("79829");
let j = (0, E.makeLazy)({
    createPromise: () => s.e("5609").then(s.bind(s, "336231")),
    webpackId: "336231"
  }),
  U = o().debounce((e, t) => (0, g.updateRoleName)(e, t), 200);

function P(e) {
  let {
    role: t,
    disabled: s
  } = e, [n, i] = l.useState(t.name);
  return l.useEffect(() => {
    i(t.name)
  }, [t.name]), (0, a.jsx)(u.FormItem, {
    title: p.default.Messages.FORM_LABEL_ROLE_NAME,
    required: !0,
    children: (0, a.jsx)(u.TextInput, {
      type: "text",
      value: n,
      maxLength: A.ROLE_NAME_MAX_LENGTH,
      onChange: function(e) {
        i(e), U(t.id, e)
      },
      disabled: s
    })
  })
}

function b(e) {
  let {
    role: t,
    disabled: s
  } = e;
  return (0, a.jsxs)(u.FormItem, {
    className: M.colorPicker,
    title: p.default.Messages.FORM_LABEL_ROLE_COLOR,
    required: !0,
    children: [(0, a.jsx)(u.FormText, {
      className: M.colorDescription,
      children: p.default.Messages.ROLE_COLOR_HELP
    }), (0, a.jsx)(j, {
      defaultColor: A.DEFAULT_ROLE_COLOR,
      colors: A.ROLE_COLORS,
      value: t.color,
      disabled: s,
      onChange: e => {
        var s, a;
        return s = t, a = e, void(s.color !== a && (a !== A.DEFAULT_ROLE_COLOR || 0 !== s.color) && (a === A.DEFAULT_ROLE_COLOR && (a = 0), (0, g.updateRoleColor)(s.id, a)))
      },
      customPickerPosition: "right"
    }, t.id)]
  })
}

function B(e) {
  var t, n;
  let {
    role: i,
    guildId: r
  } = e;
  let o = (n = p.default.Messages.ROLE_SAMPLE_MESSAGE, l.useMemo(() => {
      let e = (0, I.createMessageRecord)({
        ...(0, T.default)({
          channelId: "1337",
          content: n
        }),
        state: A.MessageStates.SENT,
        id: "31337"
      });
      return e.author = new f.default({
        id: "313337",
        username: p.default.Messages.WUMPUS,
        discriminator: "0000",
        bot: !1
      }), e.author.getAvatarURL = () => s("52008"), e
    }, [n])),
    d = {
      nick: o.author.username,
      colorString: null !== (t = i.colorString) && void 0 !== t ? t : void 0
    },
    c = {
      src: v,
      name: i.name
    },
    E = {
      src: G,
      name: i.name
    },
    m = (0, _.useRoleIconForPreview)(r, i);
  return (0, a.jsx)(u.FocusBlock, {
    children: (0, a.jsxs)("div", {
      className: M.previewContainer,
      "aria-hidden": !0,
      children: [(0, a.jsx)("div", {
        className: (0, N.getThemeClass)(A.ThemeTypes.LIGHT),
        children: (0, a.jsx)("div", {
          className: M.messageContainer,
          children: (0, a.jsx)(S.default, {
            author: d,
            message: o,
            roleIcon: null != m ? m : E,
            isGroupStart: !0
          })
        })
      }), (0, a.jsx)("div", {
        className: (0, N.getThemeClass)(A.ThemeTypes.DARK),
        children: (0, a.jsx)("div", {
          className: M.messageContainer,
          children: (0, a.jsx)(S.default, {
            author: d,
            message: o,
            roleIcon: null != m ? m : c,
            isGroupStart: !0
          })
        })
      })]
    })
  })
}

function y(e) {
  let {
    role: t,
    disabled: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.FormSwitch, {
      disabled: s,
      value: t.hoist,
      onChange: e => (0, g.toggleRoleSettings)(t.id, e, t.mentionable),
      hideBorder: !0,
      children: p.default.Messages.FORM_LABEL_HOIST_DESCRIPTION
    }), (0, a.jsx)(u.FormDivider, {
      className: M.divider
    }), (0, a.jsx)(u.FormSwitch, {
      disabled: s,
      value: t.mentionable,
      onChange: e => (0, g.toggleRoleSettings)(t.id, t.hoist, e),
      note: p.default.Messages.FORM_LABEL_MENTIONABLE_DESCRIPTION,
      hideBorder: !0,
      children: p.default.Messages.FORM_LABEL_MENTIONABLE.format()
    })]
  })
}

function F(e) {
  let {
    guild: t,
    role: s,
    locked: l,
    setSelectedSection: n
  } = e, r = (0, c.isEveryoneRoleId)(null == t ? void 0 : t.id, s.id), o = l || r, E = (0, d.useStateFromStores)([m.default], () => m.default.canImpersonateRole(t, s)), {
    headerHeight: _,
    headerRef: I
  } = (0, h.default)(0), {
    scrolledToTop: T,
    handleScroll: S
  } = (0, R.useScrolledToTop)();
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: M.scroller,
    style: {
      scrollPaddingTop: _
    },
    onScroll: S,
    children: (0, a.jsxs)("div", {
      className: D.contentWidth,
      children: [(0, a.jsx)("div", {
        className: i()(D.header, D.stickyHeader, {
          [D.stickyHeaderElevated]: !T
        }),
        ref: I,
        children: (0, a.jsx)(R.default, {
          guild: t,
          role: s,
          selectedSection: O.GuildSettingsRoleEditSections.DISPLAY,
          setSelectedSection: n
        })
      }), (0, a.jsx)(P, {
        role: s,
        disabled: o
      }), (0, a.jsx)("div", {
        className: M.noticeContainer,
        children: (0, a.jsx)(L.default, {
          role: s
        })
      }), (0, a.jsx)(u.FormDivider, {
        className: M.divider
      }), (0, a.jsx)(b, {
        role: s,
        disabled: o
      }), (0, a.jsx)(C.default, {
        guild: t,
        disabled: o,
        role: s
      }), (0, a.jsx)(B, {
        role: s,
        guildId: t.id
      }), (0, a.jsx)(u.FormDivider, {
        className: M.divider
      }), (0, a.jsx)(y, {
        role: s,
        disabled: o
      }), E ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormDivider, {
          className: M.divider
        }), (0, a.jsx)(x.ImpersonateRoleDescription, {
          guildId: t.id,
          role: s
        })]
      }) : null]
    })
  })
}