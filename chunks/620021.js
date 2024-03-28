"use strict";
t.r(l), t("47120");
var a = t("735250"),
  n = t("470079"),
  s = t("803997"),
  i = t.n(s),
  o = t("442837"),
  d = t("544891"),
  u = t("481060"),
  r = t("910693"),
  c = t("314897"),
  N = t("271383"),
  E = t("430824"),
  A = t("496675"),
  v = t("594174"),
  M = t("626135"),
  C = t("51144"),
  f = t("981631"),
  m = t("689938"),
  _ = t("169078");

function I(e) {
  let {
    disabled: l = !1,
    user: t,
    setNickname: s,
    nickname: o,
    error: d,
    hasNick: r
  } = e, N = n.useRef(null), E = n.useCallback(() => {
    var e;
    s(""), null === (e = N.current) || void 0 === e || e.focus()
  }, [s]);
  return (0, a.jsxs)(a.Fragment, {
    children: [l || null == t || t.id === c.default.getId() ? null : (0, a.jsx)(u.Card, {
      type: u.Card.Types.WARNING,
      className: _.card,
      children: (0, a.jsx)(u.Text, {
        className: _.warning,
        variant: "text-md/normal",
        children: m.default.Messages.CHANGE_NICKNAME_WARNING
      })
    }), (0, a.jsx)(u.FormTitle, {
      className: i()(_.itemGroup, {
        [_.disabled]: l
      }),
      children: l ? m.default.Messages.CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED : m.default.Messages.NICKNAME
    }), (0, a.jsx)(u.TextInput, {
      disabled: l,
      inputRef: N,
      maxLength: f.USERNAME_MAX_LENGTH,
      value: o,
      placeholder: C.default.getName(t),
      onChange: s,
      autoFocus: !0
    }), null != d ? (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: _.nickError,
      children: d
    }) : null, r && !l ? (0, a.jsx)(u.Button, {
      look: u.Button.Looks.LINK,
      color: u.Button.Colors.LINK,
      size: u.Button.Sizes.NONE,
      onClick: E,
      className: _.reset,
      children: m.default.Messages.RESET_NICKNAME
    }) : null]
  })
}
l.default = function(e) {
  var l;
  let {
    transitionState: t,
    user: s,
    guildId: i,
    onClose: c,
    analyticsSource: C,
    analyticsLocations: g
  } = e, h = (0, o.useStateFromStores)([N.default], () => null != i ? N.default.getMember(i, s.id) : null), k = (0, o.useStateFromStores)([A.default, v.default, E.default], () => {
    var e;
    let l = E.default.getGuild(i);
    return null != l && ((null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === s.id ? A.default.can(f.Permissions.CHANGE_NICKNAME, l) || A.default.can(f.Permissions.MANAGE_NICKNAMES, l) : A.default.canManageUser(f.Permissions.MANAGE_NICKNAMES, s.id, l))
  }), [x, p] = n.useState(!1), [T, G] = n.useState(null !== (l = null == h ? void 0 : h.nick) && void 0 !== l ? l : ""), [S, j] = n.useState({});
  n.useEffect(() => {
    M.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Change Server Identity",
      location: f.AnalyticsPages.GUILD_CHANNEL,
      source: C
    })
  }, []);
  let L = (0, r.useTrackModerationAction)(i, {
      location: null == g ? void 0 : g[0],
      targetUserId: s.id
    }),
    R = n.useCallback(async e => {
      var l, t, a, n, o, u, N, E, A;
      e.preventDefault();
      let v = null;
      if (T !== (null !== (l = null == h ? void 0 : h.nick) && void 0 !== l ? l : "") && ((v = null != v ? v : {}).nick = T), null == v) {
        c();
        return
      }
      try {
        p(!0), await d.HTTP.patch({
          url: f.Endpoints.GUILD_MEMBER(i, s.id),
          body: v
        }), L(r.ModerationActionType.CHANGE_NICKNAME), c()
      } catch (s) {
        let e;
        p(!1);
        let l = null !== (a = null === (t = s.body) || void 0 === t ? void 0 : t.errors) && void 0 !== a ? a : null;
        (null == l ? void 0 : l.nick) != null ? e = (null === (u = l.nick) || void 0 === u ? void 0 : null === (o = u._errors) || void 0 === o ? void 0 : null === (n = o[0]) || void 0 === n ? void 0 : n.message) || m.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR : (null == l ? void 0 : l.username) != null && (e = (null === (A = l.username) || void 0 === A ? void 0 : null === (E = A._errors) || void 0 === E ? void 0 : null === (N = E[0]) || void 0 === N ? void 0 : N.message) || m.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR), j({
          nick: e
        })
      }
    }, [i, T, c, s, h, L]);
  return (0, a.jsx)(u.ModalRoot, {
    "aria-label": m.default.Messages.CHANGE_IDENTITY,
    transitionState: t,
    children: (0, a.jsxs)("form", {
      onSubmit: R,
      children: [(0, a.jsx)(u.ModalHeader, {
        separator: !1,
        children: (0, a.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          children: m.default.Messages.CHANGE_NICKNAME
        })
      }), (0, a.jsx)(u.ModalContent, {
        className: _.modalContent,
        children: (0, a.jsx)(I, {
          disabled: !k,
          user: s,
          error: S.nick,
          nickname: T,
          setNickname: G,
          hasNick: (null == h ? void 0 : h.nick) != null
        })
      }), (0, a.jsxs)(u.ModalFooter, {
        children: [(0, a.jsx)(u.Button, {
          type: "submit",
          disabled: x,
          children: m.default.Messages.SAVE
        }), (0, a.jsx)(u.Button, {
          onClick: c,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          children: m.default.Messages.CANCEL
        })]
      })]
    })
  })
}