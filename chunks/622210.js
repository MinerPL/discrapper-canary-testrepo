"use strict";
s.r(a), s.d(a, {
  useCustomizeGuildSlide: function() {
    return p
  },
  default: function() {
    return N
  }
}), s("222007");
var n = s("37983"),
  t = s("884691"),
  l = s("414456"),
  E = s.n(l),
  _ = s("77078"),
  i = s("851387"),
  d = s("68130"),
  T = s("177769"),
  r = s("740822"),
  u = s("697218"),
  L = s("145131"),
  C = s("476765"),
  M = s("651879"),
  o = s("326678"),
  c = s("49111"),
  I = s("782340"),
  A = s("674637");

function p(e) {
  var a;
  let {
    guildTemplate: s,
    onClose: l,
    onBack: p,
    onHubGuildInfoSet: N,
    onGuildCreated: G,
    isSlideReady: m,
    hasFooter: f = !0,
    isCommunity: U = !1
  } = e, [D, O] = t.useState(M.default.getGuildNameSuggestion()), [h, g] = t.useState(null), [y, R] = t.useState(!1), [x, S] = t.useState(null), P = !!(null === (a = u.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()), [j, H] = t.useState(P), [V, F] = t.useState(!1), v = T.ClanExperiment.useExperiment({
    location: "customize-guild-slide"
  }).enableClanCreation, B = (0, C.useUID)(), Y = t.useRef(null);
  t.useEffect(() => {
    var e;
    m && (null === (e = Y.current) || void 0 === e || e.focus())
  }, [m]);
  let b = t.useCallback(async e => {
      if (e.preventDefault(), null != s) {
        R(!0), S(null);
        try {
          if (null != N) N(D, h);
          else {
            let e = await o.default.createGuildFromTemplate(D, h, s, U, j, V);
            i.default.transitionToGuildSync(e.id), null == G || G(e.id)
          }
        } catch (e) {
          S(e)
        }
        R(!1)
      }
    }, [s, h, D, G, N, U, j, V]),
    k = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(_.Button, {
        color: _.Button.Colors.BRAND,
        onClick: b,
        disabled: 0 === D.length,
        submitting: y,
        children: null != N ? I.default.Messages.NEXT : I.default.Messages.CREATE
      }), (0, n.jsx)(_.Button, {
        className: A.backButton,
        look: _.Button.Looks.BLANK,
        size: _.Button.Sizes.MIN,
        onClick: p,
        children: I.default.Messages.BACK
      })]
    }),
    X = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(_.ModalHeader, {
        direction: L.default.Direction.VERTICAL,
        className: A.header,
        separator: !1,
        children: [(0, n.jsx)(_.Heading, {
          className: E(A.title),
          variant: "heading-xl/semibold",
          children: I.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
        }), (0, n.jsx)(_.Text, {
          className: A.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: I.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
        }), null != l && (0, n.jsx)(_.ModalCloseButton, {
          className: A.closeButton,
          onClick: l
        })]
      }), (0, n.jsxs)(_.ModalContent, {
        className: A.createGuild,
        children: [(0, n.jsx)("div", {
          className: A.uploadIcon,
          children: (0, n.jsx)(d.default, {
            icon: h,
            onChange: g
          })
        }), (0, n.jsxs)("form", {
          onSubmit: b,
          children: [(0, n.jsxs)(_.FormItem, {
            className: A.nameInput,
            error: null == x ? void 0 : x.getFirstFieldErrorMessage("name"),
            children: [(0, n.jsx)(_.FormTitle, {
              tag: "label",
              htmlFor: B,
              children: I.default.Messages.FORM_LABEL_SERVER_NAME
            }), (0, n.jsx)(_.TextInput, {
              type: "text",
              value: D,
              maxLength: 100,
              onChange: O,
              inputRef: Y,
              id: B
            })]
          }), P && (0, n.jsx)(_.FormSwitch, {
            hideBorder: !0,
            value: j,
            onChange: e => H(e),
            note: I.default.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
            className: A.formItemSpaced,
            children: (0, n.jsx)(_.FormTitle, {
              tag: "label",
              children: "Staff Only"
            })
          }), v && (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(_.FormSwitch, {
              hideBorder: !0,
              value: V,
              onChange: e => F(e),
              note: "Creates a special gaming clan guild",
              className: A.formItemSpaced,
              children: (0, n.jsxs)("div", {
                className: A.clanLabel,
                children: [(0, n.jsx)(_.FormTitle, {
                  tag: "label",
                  children: "Clan"
                }), (0, n.jsx)(r.default, {})]
              })
            })
          }), (0, n.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: A.guidelines,
            children: I.default.Messages.CREATE_SERVER_GUIDELINES.format({
              guidelinesURL: c.MarketingURLs.GUIDELINES
            })
          })]
        }), null == x || x.hasFieldErrors() ? null : (0, n.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: x.message
        })]
      }), f && (0, n.jsx)(_.ModalFooter, {
        justify: L.default.Justify.BETWEEN,
        children: k
      })]
    });
  return {
    content: X,
    footer: k
  }
}

function N(e) {
  let {
    content: a
  } = p(e);
  return a
}