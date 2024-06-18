"use strict";
n.d(t, {
  ZP: function() {
    return g
  },
  wz: function() {
    return p
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(555573),
  l = n(10718),
  u = n(895924),
  _ = n(665906),
  d = n(695346),
  c = n(592125),
  E = n(703558),
  I = n(496675),
  T = n(944486),
  h = n(797053),
  S = n(585483),
  f = n(981631),
  N = n(689079),
  A = n(665692),
  m = n(689938),
  O = n(471898);

function R(e, t, n, r) {
  if (null == e) return;
  let s = () => {
    let i = c.Z.getChannel(e);
    if (null == i) return;
    let {
      command: s,
      application: o
    } = l.Xq(i, n);
    if (null != s && s.name === t) {
      var _, d;
      S.S.dispatch(f.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      });
      let t = null != o ? {
        type: u.Qi.APPLICATION,
        id: o.id,
        icon: null !== (d = null == o ? void 0 : null === (_ = o.bot) || void 0 === _ ? void 0 : _.username) && void 0 !== d ? d : o.icon,
        name: o.name,
        application: o
      } : null;
      a.Po({
        channelId: e,
        command: null,
        section: null
      }), a.Po({
        channelId: e,
        command: s,
        section: t,
        location: r
      })
    }
  };
  "" !== E.Z.getDraft(e, E.d.ChannelMessage) ? (0, o.openModal)(t => (0, i.jsx)(o.ConfirmModal, {
    header: m.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
    confirmText: m.Z.Messages.CLEAR,
    cancelText: m.Z.Messages.CANCEL,
    onConfirm: () => s(),
    confirmButtonColor: o.Button.Colors.BRAND,
    onCloseCallback: () => {
      S.S.dispatch(f.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    },
    ...t,
    children: (0, i.jsx)(o.Text, {
      variant: "text-md/normal",
      children: m.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
    })
  })) : s()
}

function C(e) {
  var t;
  let {
    node: n,
    output: a,
    state: E
  } = e, S = (0, s.e7)([c.Z, T.Z], () => {
    var e;
    return c.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : T.Z.getChannelId())
  }, [n.channelId]), {
    hasSendMessagePerm: m,
    hasUseAppCommandsPerm: O
  } = (0, s.cj)([I.Z], () => {
    let e = I.Z.can(f.Plq.SEND_MESSAGES, S);
    return {
      hasSendMessagePerm: e,
      hasUseAppCommandsPerm: I.Z.can(f.Plq.USE_APPLICATION_COMMANDS, S)
    }
  }), {
    command: C
  } = l.YZ(S, null !== (t = n.commandKey) && void 0 !== t ? t : ""), p = d.dN.useSetting(), g = r.useMemo(() => {
    if (null == C || null == S || C.name !== n.commandName || p) return !1;
    let e = S.isPrivate();
    if ((0, _.xl)(S) || !e && !m) return !1;
    let t = (null == C ? void 0 : C.applicationId) === N.bi.BUILT_IN;
    return !!e || !!t || !!O || !1
  }, [S, C, m, O, n.commandName, p]), L = r.useCallback(e => {
    null == e || e.stopPropagation(), null != S && null != n.commandName && null != n.commandKey && R(S.id, n.commandName, n.commandKey, u.Vh.MENTION)
  }, [S, n.commandKey, n.commandName]);
  return g ? (0, i.jsx)(o.Tooltip, {
    text: n.output,
    position: "top",
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: r
      } = e;
      return (0, i.jsxs)(h.Z, {
        role: "link",
        onClick: L,
        onMouseEnter: t,
        onMouseLeave: r,
        children: [A.GI, a(n.content, E)]
      }, E.key)
    }
  }, E.key) : (0, i.jsxs)("span", {
    children: [A.GI, a(n.content, E)]
  })
}

function p(e) {
  let {
    commandId: t,
    commandName: n,
    commandDescription: r,
    onClick: a
  } = e, l = (0, s.e7)([T.Z], () => T.Z.getChannelId()), _ = e => {
    null == e || e.stopPropagation(), R(l, n, t, u.Vh.POPULAR_COMMANDS), null == a || a(t)
  };
  return (0, i.jsx)(o.Tooltip, {
    text: r,
    position: "top",
    tooltipContentClassName: O.tooltip,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: r
      } = e;
      return (0, i.jsxs)(o.Button, {
        color: o.ButtonColors.PRIMARY,
        size: o.ButtonSizes.ICON,
        onClick: _,
        onMouseEnter: t,
        onMouseLeave: r,
        children: ["/", n]
      })
    }
  })
}

function g(e) {
  return {
    react: (e, t, n) => (0, i.jsx)(C, {
      node: e,
      output: t,
      state: n
    })
  }
}