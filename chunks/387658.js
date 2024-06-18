"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(140835),
  o = n(246521),
  a = n(481060),
  l = n(911969),
  u = n(555573),
  _ = n(10718),
  d = n(895924),
  c = n(585483),
  E = n(499254),
  I = n(496158),
  T = n(676161),
  h = n(660090),
  S = n(783097),
  f = n(870205),
  N = n(981631),
  A = n(689079),
  m = n(689938),
  O = n(831330);

function R(e) {
  var t, n;
  let {
    channel: o,
    command: l,
    section: _,
    sectionName: I
  } = e, T = r.useCallback(() => {
    E.y(), u.Po({
      channelId: o.id,
      command: l,
      section: _,
      location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW
    }), c.S.dispatch(N.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: o.id
    })
  }, [o, l, _]), h = (null !== (n = null === (t = l.options) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0;
  return (0, i.jsxs)(a.Clickable, {
    className: O.command,
    onClick: T,
    children: [(0, i.jsxs)("div", {
      className: O.commandTextContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: l.displayName
      }), (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        lineClamp: 1,
        children: l.displayDescription
      })]
    }), h ? (0, i.jsx)(s.F, {
      width: 24,
      height: 24
    }) : (0, i.jsx)(C, {
      channel: o,
      command: l,
      sectionName: I
    })]
  })
}

function C(e) {
  let {
    channel: t,
    command: n,
    sectionName: s
  } = e, l = (0, I.D)(t), [u, _] = r.useState(!1), d = r.useCallback(async e => {
    e.stopPropagation();
    try {
      await (0, S.Y$)({
        command: n,
        optionValues: {},
        context: l,
        sectionName: s
      }), E.y()
    } finally {
      _(!1)
    }
  }, [n, l, s]);
  return (0, i.jsxs)(a.Button, {
    type: "submit",
    onClick: d,
    disabled: u,
    size: a.ButtonSizes.ICON,
    color: a.Button.Colors.PRIMARY,
    className: O.commandSentCTAButton,
    innerClassName: O.commandSentCTAButtonInner,
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "redesign-button-primary-text",
      children: m.Z.Messages.SEND
    }), (0, i.jsx)(o.U, {
      width: 16,
      height: 16,
      color: a.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
    })]
  })
}

function p(e) {
  let {
    channel: t,
    commands: n,
    section: r,
    headerName: s,
    sectionName: o,
    children: l
  } = e;
  return 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: O.commandListHeader,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-sm/semibold",
        children: s
      }), l]
    }), (0, i.jsx)("ul", {
      className: O.commandContainer,
      children: n.map(e => (0, i.jsx)(R, {
        channel: t,
        command: e,
        section: r,
        sectionName: o
      }, e.id))
    })]
  })
}

function g(e) {
  var t;
  let {
    channel: n,
    application: s,
    sectionName: o
  } = e, {
    filterSection: a,
    commandsByActiveSection: u,
    sectionDescriptors: d
  } = _.wi(n, {
    commandType: l.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: A.tn,
    includeFrecency: !0
  }), c = null !== (t = d.find(e => e.id === s.id)) && void 0 !== t ? t : null, {
    sortOrder: E,
    setSortOrder: I,
    commands: S,
    canSort: N
  } = (0, h.Z)({
    sectionId: s.id,
    commandsByActiveSection: u
  });
  r.useEffect(() => {
    a(s.id)
  }, [s.id, a]);
  let R = (0, T.Z)({
    channel: n,
    commands: S,
    limit: 5
  });
  return (0, i.jsxs)("ul", {
    className: O.contentContainer,
    children: [(0, i.jsx)(p, {
      channel: n,
      section: c,
      commands: R,
      headerName: m.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
      sectionName: o
    }), (0, i.jsx)(p, {
      channel: n,
      section: c,
      commands: S,
      headerName: m.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
      sectionName: o,
      children: N && (0, i.jsx)(f.Z, {
        sortOrder: E,
        onSortOptionClick: I
      })
    })]
  })
}