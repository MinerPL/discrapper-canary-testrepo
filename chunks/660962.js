"use strict";
t.d(s, {
  ZP: function() {
    return y
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(605436),
  E = t(663993),
  _ = t(518738),
  I = t(786761),
  T = t(3148),
  N = t(753206),
  m = t(598077),
  S = t(496675),
  h = t(792125),
  g = t(764260),
  x = t(95242),
  C = t(541575),
  R = t(420966),
  L = t(337344),
  O = t(275296),
  A = t(203377),
  p = t(981631),
  M = t(689938),
  f = t(75518),
  v = t(585512),
  D = t(179517),
  Z = t(79829);
let j = (0, E.Un)({
    createPromise: () => t.e("5609").then(t.bind(t, 336231)),
    webpackId: 336231
  }),
  U = o().debounce((e, s) => (0, g.Uv)(e, s), 200);

function G(e) {
  let {
    role: s,
    disabled: t
  } = e, [l, a] = i.useState(s.name);
  return i.useEffect(() => {
    a(s.name)
  }, [s.name]), (0, n.jsx)(d.FormItem, {
    title: M.Z.Messages.FORM_LABEL_ROLE_NAME,
    required: !0,
    children: (0, n.jsx)(d.TextInput, {
      type: "text",
      value: l,
      maxLength: p.VKK,
      onChange: function(e) {
        a(e), U(s.id, e)
      },
      disabled: t
    })
  })
}

function P(e) {
  let {
    role: s,
    disabled: t
  } = e;
  return (0, n.jsxs)(d.FormItem, {
    className: f.colorPicker,
    title: M.Z.Messages.FORM_LABEL_ROLE_COLOR,
    required: !0,
    children: [(0, n.jsx)(d.FormText, {
      className: f.colorDescription,
      children: M.Z.Messages.ROLE_COLOR_HELP
    }), (0, n.jsx)(j, {
      defaultColor: p.p6O,
      colors: p.pmI,
      value: s.color,
      disabled: t,
      onChange: e => (function(e, s) {
        if (e.color !== s && (s !== p.p6O || 0 !== e.color)) s === p.p6O && (s = 0), (0, g.OW)(e.id, s)
      })(s, e),
      customPickerPosition: "right"
    }, s.id)]
  })
}

function b(e) {
  var s, l;
  let {
    role: a,
    guildId: r
  } = e;
  let o = (l = M.Z.Messages.ROLE_SAMPLE_MESSAGE, i.useMemo(() => {
      let e = (0, I.e5)({
        ...(0, T.ZP)({
          channelId: "1337",
          content: l
        }),
        state: p.yb.SENT,
        id: "31337"
      });
      return e.author = new m.Z({
        id: "313337",
        username: M.Z.Messages.WUMPUS,
        discriminator: "0000",
        bot: !1
      }), e.author.getAvatarURL = () => t(52008), e
    }, [l])),
    c = {
      nick: o.author.username,
      colorString: null !== (s = a.colorString) && void 0 !== s ? s : void 0
    },
    u = {
      src: D,
      name: a.name
    },
    E = {
      src: Z,
      name: a.name
    },
    S = (0, _.oC)(r, a);
  return (0, n.jsx)(d.FocusBlock, {
    children: (0, n.jsxs)("div", {
      className: f.previewContainer,
      "aria-hidden": !0,
      "data-disable-adaptive-theme": !0,
      children: [(0, n.jsx)("div", {
        className: (0, h.Q)(p.BRd.LIGHT),
        children: (0, n.jsx)("div", {
          className: f.messageContainer,
          children: (0, n.jsx)(N.Z, {
            author: c,
            message: o,
            roleIcon: null != S ? S : E,
            isGroupStart: !0
          })
        })
      }), (0, n.jsx)("div", {
        className: (0, h.Q)(p.BRd.DARK),
        children: (0, n.jsx)("div", {
          className: f.messageContainer,
          children: (0, n.jsx)(N.Z, {
            author: c,
            message: o,
            roleIcon: null != S ? S : u,
            isGroupStart: !0
          })
        })
      })]
    })
  })
}

function B(e) {
  let {
    role: s,
    disabled: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.FormSwitch, {
      disabled: t,
      value: s.hoist,
      onChange: e => (0, g.we)(s.id, e, s.mentionable),
      hideBorder: !0,
      children: M.Z.Messages.FORM_LABEL_HOIST_DESCRIPTION
    }), (0, n.jsx)(d.FormDivider, {
      className: f.divider
    }), (0, n.jsx)(d.FormSwitch, {
      disabled: t,
      value: s.mentionable,
      onChange: e => (0, g.we)(s.id, s.hoist, e),
      note: M.Z.Messages.FORM_LABEL_MENTIONABLE_DESCRIPTION,
      hideBorder: !0,
      children: M.Z.Messages.FORM_LABEL_MENTIONABLE.format()
    })]
  })
}

function y(e) {
  let {
    guild: s,
    role: t,
    locked: i,
    setSelectedSection: l
  } = e, r = (0, u.pM)(null == s ? void 0 : s.id, t.id), o = i || r, E = (0, c.e7)([S.Z], () => S.Z.canImpersonateRole(s, t)), {
    headerHeight: _,
    headerRef: I
  } = (0, x.Z)(0), {
    scrolledToTop: T,
    handleScroll: N
  } = (0, R.V)();
  return (0, n.jsx)(d.AdvancedScrollerAuto, {
    className: f.scroller,
    style: {
      scrollPaddingTop: _
    },
    onScroll: N,
    children: (0, n.jsxs)("div", {
      className: v.contentWidth,
      children: [(0, n.jsx)("div", {
        className: a()(v.header, v.stickyHeader, {
          [v.stickyHeaderElevated]: !T
        }),
        ref: I,
        children: (0, n.jsx)(R.Z, {
          guild: s,
          role: t,
          selectedSection: A.ZI.DISPLAY,
          setSelectedSection: l
        })
      }), (0, n.jsx)(G, {
        role: t,
        disabled: o
      }), (0, n.jsx)("div", {
        className: f.noticeContainer,
        children: (0, n.jsx)(O.Z, {
          role: t
        })
      }), (0, n.jsx)(d.FormDivider, {
        className: f.divider
      }), (0, n.jsx)(P, {
        role: t,
        disabled: o
      }), (0, n.jsx)(C.Z, {
        guild: s,
        disabled: o,
        role: t
      }), (0, n.jsx)(b, {
        role: t,
        guildId: s.id
      }), (0, n.jsx)(d.FormDivider, {
        className: f.divider
      }), (0, n.jsx)(B, {
        role: t,
        disabled: o
      }), E ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.FormDivider, {
          className: f.divider
        }), (0, n.jsx)(L.L, {
          guildId: s.id,
          role: t
        })]
      }) : null]
    })
  })
}