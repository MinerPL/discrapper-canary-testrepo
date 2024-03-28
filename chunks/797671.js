"use strict";
l.r(a), l.d(a, {
  default: function() {
    return j
  }
}), l("653041"), l("47120"), l("773603");
var t = l("735250"),
  s = l("470079"),
  n = l("990547"),
  i = l("442837"),
  d = l("283693"),
  r = l("481060"),
  o = l("218613"),
  u = l("911969"),
  c = l("456269"),
  E = l("408987"),
  _ = l("312146"),
  C = l("60222"),
  N = l("131704"),
  p = l("324067"),
  f = l("430824"),
  h = l("285952"),
  m = l("153124"),
  T = l("259580"),
  A = l("93879"),
  I = l("481479"),
  g = l("908434"),
  L = l("632184"),
  b = l("170039"),
  M = l("934415"),
  v = l("700785"),
  x = l("573261"),
  y = l("981631"),
  D = l("231338"),
  R = l("689938"),
  S = l("761372");

function j(e) {
  var a, l;
  let {
    guildId: j,
    transitionState: G,
    onSubmit: O,
    onClose: H
  } = e, P = (0, m.useUID)(), F = (0, m.useUID)(), U = (0, m.useUID)(), k = (0, m.useUID)(), [B, Y] = s.useState(y.NULL_STRING_CHANNEL_ID), [w, V] = s.useState(y.ChannelTypes.GUILD_TEXT), [W, X] = s.useState(""), [K, z] = s.useState(!1), J = (0, i.useStateFromStores)([f.default], () => f.default.getGuild(j), [j]), q = (0, C.useGuildEligibleForStageChannels)(j), Q = (0, c.useCanCreateForumChannel)(j), Z = (0, _.useGuildEligibleForMediaChannels)(J), $ = s.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: a,
      canCreateForumChannel: l,
      canCreateMediaChannel: s
    } = e, n = [{
      icon: A.default,
      label: R.default.Messages.TEXT_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_TEXT,
      description: R.default.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
    }, {
      icon: L.default,
      label: R.default.Messages.VOICE_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_VOICE,
      description: R.default.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
    }];
    return a && n.push({
      icon: b.default,
      label: R.default.Messages.STAGE_VOICE_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_STAGE_VOICE,
      description: R.default.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
    }), l && (n.push({
      icon: I.default,
      label: R.default.Messages.FORUM_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_FORUM,
      description: R.default.Messages.FORUM_CHANNEL_DESCRIPTION
    }), s && n.push({
      icon: g.default,
      label: R.default.Messages.MEDIA_CHANNEL_TYPE,
      value: y.ChannelTypes.GUILD_MEDIA,
      description: R.default.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
      isBeta: !0
    })), n.map(e => {
      let {
        icon: a,
        label: l,
        value: s,
        description: n,
        isBeta: i
      } = e;
      return {
        name: (0, t.jsxs)("div", {
          className: S.channelOptionWrapper,
          children: [(0, t.jsx)(a, {
            className: S.icon
          }), (0, t.jsxs)("div", {
            children: [(0, t.jsxs)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [l, (0, t.jsx)(o.ChannelTypeBadge, {
                isBeta: i
              })]
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: n
            })]
          })]
        }),
        value: s,
        channelIcon: a
      }
    })
  })({
    canCreateStageChannel: q,
    canCreateForumChannel: Q,
    canCreateMediaChannel: Z
  }), [q, Q, Z]), ee = (0, i.useStateFromStores)([p.default], () => p.default.getCategories(j)._categories, [j]), ea = s.useMemo(() => ee.map(e => {
    let {
      channel: a
    } = e;
    return {
      value: a.id,
      label: a.name
    }
  }), [ee]), el = null !== (l = null === (a = $.find(e => e.value === w)) || void 0 === a ? void 0 : a.channelIcon) && void 0 !== l ? l : D.NOOP_NULL, et = "" !== W;
  return (0, t.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !et) return;
      z(!0);
      let a = {
        type: w,
        name: W,
        parent_id: "null" !== B ? B : void 0,
        permission_overwrites: [{
          id: j,
          type: u.PermissionOverwriteType.ROLE,
          allow: v.NONE,
          deny: y.Permissions.VIEW_CHANNEL
        }]
      };
      x.default.post({
        url: y.Endpoints.GUILD_CHANNELS(j),
        body: a,
        oldFormErrors: !0,
        trackedActionData: {
          event: n.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var a, l;
            return (0, d.exact)({
              is_private: !0,
              channel_id: null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.id,
              channel_type: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.type
            })
          }
        }
      }).then(e => {
        E.default.checkGuildTemplateDirty(j), O(e.body.id), H()
      }, e => {}).finally(() => {
        z(!1)
      })
    },
    children: (0, t.jsxs)(r.ModalRoot, {
      transitionState: G,
      "aria-labelledby": P,
      children: [(0, t.jsxs)(r.ModalHeader, {
        children: [(0, t.jsx)(r.Heading, {
          id: P,
          variant: "heading-md/semibold",
          children: R.default.Messages.CREATE_CHANNEL
        }), (0, t.jsx)(r.ModalCloseButton, {
          className: S.closeButton,
          onClick: H
        })]
      }), (0, t.jsxs)(r.ModalContent, {
        className: S.modalContent,
        children: [(0, t.jsx)(r.FormItem, {
          title: R.default.Messages.CATEGORY,
          titleId: F,
          children: (0, t.jsx)(r.SingleSelect, {
            placeholder: R.default.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
            value: B,
            options: ea,
            onChange: e => Y(e),
            "aria-labelledby": F
          })
        }), (0, t.jsx)("div", {
          className: S.spacer
        }), (0, t.jsx)(r.FormItem, {
          title: R.default.Messages.CHANNEL_TYPE,
          titleId: U,
          children: (0, t.jsx)(r.RadioGroup, {
            options: $,
            value: w,
            onChange: e => {
              let {
                value: a
              } = e;
              return V(a)
            },
            "aria-labelledby": U
          })
        }), (0, t.jsx)("div", {
          className: S.spacer
        }), (0, t.jsx)(r.FormItem, {
          title: R.default.Messages.FORM_LABEL_CHANNEL_NAME,
          titleId: k,
          children: (0, t.jsx)(r.TextInput, {
            value: W,
            onChange: function(e) {
              (0, N.isGuildTextChannelType)(w) && (e = (0, M.sanitizeGuildTextChannelName)(e)), X(e)
            },
            maxLength: y.MAX_CHANNEL_NAME_LENGTH,
            placeholder: R.default.Messages.CHANNEL_NAME_PLACEHOLDER,
            className: S.inputWrapper,
            inputClassName: S.inputInner,
            prefixElement: (0, t.jsx)(el, {
              className: S.inputPrefix,
              "aria-hidden": !0
            }),
            "aria-labelledby": k,
            autoFocus: !0
          })
        })]
      }), (0, t.jsxs)(r.ModalFooter, {
        justify: h.default.Justify.BETWEEN,
        children: [(0, t.jsx)(r.Button, {
          type: "submit",
          submitting: K,
          disabled: !et,
          children: R.default.Messages.SAVE
        }), (0, t.jsxs)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          className: S.backButton,
          innerClassName: S.backButtonInner,
          onClick: H,
          children: [(0, t.jsx)(T.default, {
            direction: T.default.Directions.LEFT
          }), R.default.Messages.BACK]
        })]
      })]
    })
  })
}