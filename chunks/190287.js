"use strict";
t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(596454),
  d = t(296386),
  u = t(907040),
  E = t(401227),
  _ = t(696202),
  I = t(999382),
  T = t(185923),
  N = t(689938),
  m = t(84815);
let S = e => {
  var s;
  let {
    reason: t = "",
    emoji_name: l,
    onSetReason: d,
    onSelectEmoji: N,
    onClearPressed: S,
    reasonMinLength: h,
    reasonMaxLength: g,
    placeholder: x,
    position: C
  } = e, [R, L] = i.useState(!1), O = (0, r.e7)([I.Z], () => I.Z.isGuildMetadataLoaded());
  return (0, n.jsxs)("div", {
    className: a()(m.reasonContainer),
    children: [(0, n.jsx)(o.Popout, {
      onRequestClose: () => {
        L(!1)
      },
      shouldShow: R,
      position: "right",
      align: "top",
      animation: o.Popout.Animation.NONE,
      renderPopout: e => {
        let {
          closePopout: s
        } = e;
        return (0, n.jsx)(u.Z, {
          pickerIntention: T.Hz.COMMUNITY_CONTENT,
          closePopout: s,
          onSelectEmoji: (e, t) => {
            null != e && N(e), t && s()
          }
        })
      },
      children: () => (0, n.jsx)("div", {
        className: m.background,
        children: (0, n.jsx)(E.Z, {
          active: !1,
          onClick: () => {
            L(!0)
          },
          tabIndex: 0,
          renderButtonContents: null != l ? () => (0, n.jsx)(c.Z, {
            emojiName: l,
            animated: !1
          }) : null
        })
      })
    }), (0, n.jsxs)("div", {
      className: m.inputContainer,
      children: [(0, n.jsx)(o.TextInput, {
        inputClassName: m.reason,
        placeholder: x,
        value: t,
        minLength: h,
        maxLength: g,
        onChange: e => {
          d(e)
        },
        defaultDirty: (null == t ? void 0 : t.length) > 0
      }, "text-input-".concat(C, "-").concat(O)), (null !== (s = null == t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0 || null != l ? (0, n.jsx)(o.Button, {
        className: m.clearStatusButton,
        onClick: S,
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        tabIndex: -1,
        "aria-hidden": !0,
        children: (0, n.jsx)(_.Z, {
          className: m.clearStatusIcon
        })
      }) : null]
    })]
  })
};
s.Z = e => {
  let {
    reasonMinLength: s,
    reasonMaxLength: t,
    guildId: i,
    reasons: l
  } = e, a = [N.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_ONE, N.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_TWO, N.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_THREE, N.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_FOUR], r = [];
  for (let e = 0; e < 4; e++) r.push((0, n.jsx)(S, {
    position: e,
    placeholder: a[e],
    ...l[e],
    onSetReason: s => {
      let t = [...l],
        n = Object.assign({}, l[e], {
          reason: s
        });
      t[e] = n, (0, d.P$)(i, t)
    },
    onSelectEmoji: s => {
      let t = [...l],
        n = Object.assign({}, l[e], {
          emoji_name: s.optionallyDiverseSequence
        });
      t[e] = n, (0, d.P$)(i, t)
    },
    onClearPressed: () => {
      let s = [...l],
        t = {
          reason: "",
          emoji_name: null
        };
      s[e] = t, (0, d.P$)(i, s)
    },
    reasonMinLength: s,
    reasonMaxLength: t
  }, "reasonListItem-" + e));
  return (0, n.jsx)("div", {
    children: r
  })
}