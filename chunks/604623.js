"use strict";
s.r(t), s.d(t, {
  CreateEmojiWithRolesModal: function() {
    return N
  },
  UpdateEmojiRolesModal: function() {
    return v
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("803997"),
  n = s.n(i),
  r = s("392711"),
  d = s.n(r),
  o = s("153832"),
  u = s("481060"),
  c = s("80932"),
  _ = s("935369"),
  h = s("730089"),
  S = s("332475"),
  E = s("682864"),
  m = s("153124"),
  x = s("26290"),
  f = s("626135"),
  j = s("768581"),
  L = s("584825"),
  M = s("46887"),
  R = s("981631"),
  I = s("689938"),
  O = s("868797");
let g = e => {
  let {
    className: t,
    onChange: s,
    textVariant: l = "text-md/normal",
    label: i,
    value: r,
    isArchived: d = !1
  } = e;
  return (0, a.jsx)(u.Checkbox, {
    size: 24,
    className: n()(O.checklistRow, t),
    value: r,
    onChange: s,
    type: u.Checkbox.Types.INVERTED,
    children: (0, a.jsxs)("div", {
      className: O.checklistLabel,
      children: [(0, a.jsx)(u.Text, {
        color: "interactive-active",
        variant: l,
        children: i
      }), d && (0, a.jsx)(x.TextBadge, {
        text: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL
      })]
    })
  })
};

function A(e) {
  let {
    transitionState: t,
    onClose: s,
    initialRoleIds: i = [],
    listingChoices: n,
    emojiUrl: r,
    saving: o,
    onSave: c
  } = e, _ = (0, m.useUID)(), [h, x] = l.useState(() => new Set(i)), f = l.useMemo(() => d().isEqual(h, new Set(n.map(e => {
    let {
      role_id: t
    } = e;
    return t
  }))), [n, h]), j = h.size > 0, L = e => x(t => {
    let s = new Set(t);
    return t.has(e) ? s.delete(e) : s.add(e), s
  }), M = () => {
    c(Array.from(h), s)
  };
  return (0, a.jsxs)(u.ModalRoot, {
    transitionState: t,
    "aria-labelledby": _,
    children: [(0, a.jsxs)(u.ModalHeader, {
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: O.headerContent,
        children: [(0, a.jsx)(S.default, {
          src: r,
          width: 40,
          height: 40,
          alt: ""
        }), (0, a.jsx)(E.default, {
          size: 16,
          horizontal: !0
        }), (0, a.jsxs)("div", {
          className: O.__invalid_headerText,
          children: [(0, a.jsx)(u.Heading, {
            id: _,
            variant: "heading-md/semibold",
            children: I.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER
          }), (0, a.jsx)(E.default, {
            size: 2
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: I.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION
          })]
        })]
      }), (0, a.jsx)(u.ModalCloseButton, {
        className: O.closeButton,
        onClick: s
      })]
    }), (0, a.jsx)("div", {
      className: O.seperator
    }), (0, a.jsx)(u.ModalContent, {
      className: O.modalContent,
      children: (0, a.jsxs)("div", {
        className: O.checklistContainer,
        children: [(0, a.jsx)(g, {
          className: O.selectAllCheckbox,
          label: I.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,
          textVariant: "text-md/semibold",
          value: f,
          onChange: () => {
            f ? x(new Set) : x(new Set(n.map(e => {
              let {
                role_id: t
              } = e;
              return t
            })))
          }
        }, "allSubscriptionRoles"), n.map((e, t) => (0, a.jsxs)(a.Fragment, {
          children: [0 !== t && (0, a.jsx)("div", {
            className: O.seperator
          }), (0, a.jsx)(g, {
            onChange: () => L(e.role_id),
            value: h.has(e.role_id),
            label: e.name,
            isArchived: e.archived
          }, e.role_id)]
        }))]
      })
    }), (0, a.jsx)(u.ModalFooter, {
      children: (0, a.jsx)(u.Tooltip, {
        shouldShow: !j,
        text: I.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          "aria-label": I.default.Messages.SAVE,
          disabled: !j,
          submitting: o,
          onClick: M,
          children: I.default.Messages.SAVE
        })
      })
    })]
  })
}

function N(e) {
  let {
    guildId: t,
    data: s,
    file: i,
    ...n
  } = e, [r, d] = l.useState(!1), u = async (e, a) => {
    try {
      d(!0);
      let l = (0, o.v4)();
      f.default.track(R.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
        guild_id: t,
        upload_id: l
      }), await (0, h.uploadEmojiFile)({
        guildId: t,
        uploadId: l,
        data: s,
        file: i,
        roles: e
      }), a()
    } catch (e) {} finally {
      d(!1)
    }
  }, c = (0, L.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0,
    sortDeletedListingsLast: !0
  });
  return (0, a.jsx)(A, {
    emojiUrl: s,
    onSave: u,
    saving: r,
    listingChoices: c,
    ...n
  })
}

function v(e) {
  let {
    emoji: t,
    guildId: s,
    ...i
  } = e, n = j.default.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 40
  }), [r, {
    loading: d
  }] = (0, _.default)(c.updateEmoji), o = async (e, a) => {
    null != await r({
      guildId: s,
      emojiId: t.id,
      roles: e
    }) && a()
  }, u = (0, L.useSubscriptionListingsForGuild)(s, {
    includeSoftDeleted: !0
  });
  u.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
  let h = (0, M.default)(s),
    S = l.useMemo(() => {
      let e = new Set(h.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      return t.roles.filter(t => e.has(t))
    }, [t.roles, h]);
  return (0, a.jsx)(A, {
    emojiUrl: n,
    onSave: o,
    initialRoleIds: S,
    saving: d,
    listingChoices: u,
    ...i
  })
}