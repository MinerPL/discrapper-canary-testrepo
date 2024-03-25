"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("430568"),
  u = s("283167"),
  c = s("86678"),
  E = s("882641"),
  _ = s("381546"),
  I = s("900938"),
  T = s("958706"),
  S = s("782340"),
  f = s("478762");
let m = e => {
  var t;
  let {
    reason: s = "",
    emoji_name: n,
    onSetReason: u,
    onSelectEmoji: S,
    onClearPressed: m,
    reasonMinLength: N,
    reasonMaxLength: g,
    placeholder: h,
    position: C
  } = e, [R, x] = l.useState(!1), L = (0, r.useStateFromStores)([I.default], () => I.default.isGuildMetadataLoaded());
  return (0, a.jsxs)("div", {
    className: i(f.reasonContainer),
    children: [(0, a.jsx)(o.Popout, {
      onRequestClose: () => {
        x(!1)
      },
      shouldShow: R,
      position: "right",
      align: "top",
      animation: o.Popout.Animation.NONE,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(c.default, {
          pickerIntention: T.EmojiIntention.COMMUNITY_CONTENT,
          closePopout: t,
          onSelectEmoji: (e, s) => {
            null != e && S(e), s && t()
          }
        })
      },
      children: () => (0, a.jsx)("div", {
        className: f.background,
        children: (0, a.jsx)(E.default, {
          active: !1,
          onClick: () => {
            x(!0)
          },
          tabIndex: 0,
          renderButtonContents: null != n ? () => (0, a.jsx)(d.default, {
            emojiName: n,
            animated: !1
          }) : null
        })
      })
    }), (0, a.jsxs)("div", {
      className: f.inputContainer,
      children: [(0, a.jsx)(o.TextInput, {
        inputClassName: f.reason,
        placeholder: h,
        value: s,
        minLength: N,
        maxLength: g,
        onChange: e => {
          u(e)
        },
        defaultDirty: (null == s ? void 0 : s.length) > 0
      }, "text-input-".concat(C, "-").concat(L)), (null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0) > 0 || null != n ? (0, a.jsx)(o.Button, {
        className: f.clearStatusButton,
        onClick: m,
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        tabIndex: -1,
        "aria-hidden": !0,
        children: (0, a.jsx)(_.default, {
          className: f.clearStatusIcon
        })
      }) : null]
    })]
  })
};
var N = e => {
  let {
    reasonMinLength: t,
    reasonMaxLength: s,
    guildId: l,
    reasons: n
  } = e, i = [S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_ONE, S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_TWO, S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_THREE, S.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_FOUR], r = [];
  for (let e = 0; e < 4; e++) r.push((0, a.jsx)(m, {
    position: e,
    placeholder: i[e],
    ...n[e],
    onSetReason: t => {
      let s = [...n],
        a = Object.assign({}, n[e], {
          reason: t
        });
      s[e] = a, (0, u.updateGuildDiscoveryMetadataReasonsToJoin)(l, s)
    },
    onSelectEmoji: t => {
      let s = [...n],
        a = Object.assign({}, n[e], {
          emoji_name: t.optionallyDiverseSequence
        });
      s[e] = a, (0, u.updateGuildDiscoveryMetadataReasonsToJoin)(l, s)
    },
    onClearPressed: () => {
      let t = [...n],
        s = {
          reason: "",
          emoji_name: null
        };
      t[e] = s, (0, u.updateGuildDiscoveryMetadataReasonsToJoin)(l, t)
    },
    reasonMinLength: t,
    reasonMaxLength: s
  }, "reasonListItem-" + e));
  return (0, a.jsx)("div", {
    children: r
  })
}