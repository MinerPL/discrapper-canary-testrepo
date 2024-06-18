"use strict";
n(47120), n(773603);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(285952),
  a = n(185625),
  l = n(273389),
  u = n(596891),
  _ = n(15667),
  d = n(76264),
  c = n(822686),
  E = n(356110),
  I = n(730719),
  T = n(996701),
  h = n(320596),
  S = n(273514),
  f = n(995712),
  N = n(234937),
  A = n(473121),
  m = n(449413),
  O = n(266080),
  R = n(316617),
  C = n(15682),
  p = n(905434),
  g = n(196627),
  L = n(739319),
  v = n(842401),
  D = n(375790),
  M = n(981631),
  P = n(689938),
  y = n(284447);

function U(e, t) {
  let {
    elements: n
  } = e;
  return n.find(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}

function b(e, t) {
  let {
    elements: n
  } = e;
  return n.filter(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}
t.Z = e => {
  let {
    node: t,
    reportType: n,
    history: G,
    onSelectChild: w,
    onModalClose: k,
    onSubmit: B,
    multiSelect: x,
    reportId: V,
    textInput: Z
  } = e, H = U(t, "checkbox"), F = U(t, "text_line_resource"), Y = b(t, "external_link"), j = b(t, "free_text"), W = b(t, "dropdown"), [K, z] = r.useState(!1), [q, X] = r.useState(!1), [Q, J] = r.useState(""), [$, ee] = r.useState(() => ({})), [et, en] = r.useState(() => ({})), [ei, er] = r.useState((0, a.VP)(j, W, H, Z, x)), es = function(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = {
        ...et
      };
    i[e] = {
      value: t,
      isValid: n
    }, en(i), er((0, a.VP)(j, W, H, i, $))
  }, eo = r.useMemo(() => e => {
    w({
      nodeRef: t.id,
      destination: e,
      textInput: null != j || null != W ? et : void 0,
      multiSelect: null != H ? {
        name: H.name,
        state: $
      } : void 0
    })
  }, [t, w, H, $, et, j, W]);
  r.useEffect(() => {
    null != x && ee(x), null != Z && en(Z)
  }, [x, Z]);
  let ea = e => {
      if (e === M.evJ.INVALID_FORM_BODY) J(P.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
      else J(P.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED)
    },
    el = () => B({
      nodeRef: t.id,
      destination: ["", e.successNodeId]
    }).then(() => {
      J(""), eo(["", e.successNodeId])
    }).catch(e => {
      var t;
      ea(null === (t = e.body) || void 0 === t ? void 0 : t.code)
    }).finally(() => {
      z(!1)
    });
  return r.useEffect(() => {
    t.is_auto_submit && !q && (X(!0), B({
      nodeRef: t.id,
      destination: ["", t.id]
    }))
  }, [t.is_auto_submit, q, B, t.id]), (0, i.jsxs)("div", {
    className: y.container,
    children: [(0, i.jsxs)(s.ModalHeader, {
      separator: !1,
      direction: o.Z.Direction.VERTICAL,
      className: y.header,
      children: [(0, i.jsx)(g.Z, {
        element: U(t, "success")
      }), (0, i.jsx)(A.Z, {
        node: t
      }), (0, i.jsx)(m.Z, {
        node: t
      })]
    }), (0, i.jsxs)(s.ModalContent, {
      className: y.body,
      children: [null != F ? (0, i.jsx)(L.Z, {
        element: F
      }) : null, null != U(t, "breadcrumbs") && (0, i.jsx)(_.Z, {
        history: G
      }), null != U(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, i.jsx)(R.Z, {
        message: n.record
      }), null != U(t, "user_preview") && "user" === n.name ? (0, i.jsx)(v.Z, {
        user: n.record
      }) : null, function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return D.O.includes(t)
        })
      }(t) && (0, i.jsx)(s.Heading, {
        className: y.remediationElementsHeader,
        variant: "heading-sm/semibold",
        children: P.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
      }), (null != U(t, "block_users") || null != U(t, "mute_users")) && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, i.jsx)(u.Z, {
        userId: "user" === n.name ? n.record.id : n.record.author.id,
        reportId: V,
        reportName: n.name,
        showBlock: null != U(t, "block_users"),
        showMute: null != U(t, "mute_users")
      }), null != U(t, "delete_message") && "message" === n.name && (0, i.jsx)(c.Z, {
        message: n.record,
        reportId: V
      }), null != U(t, "leave_guild") && "guild" === n.name && (0, i.jsx)(O.Z, {
        guildId: n.record.id,
        reportId: V
      }), null != U(t, "channel_preview") && "stage_channel" === n.name && (0, i.jsx)(p.Z, {
        stageInstance: n.record
      }), null != U(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, i.jsx)(N.Z, {
        event: n.record
      }), null != U(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, i.jsx)(S.Z, {
        entry: n.record
      }), null != U(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, i.jsx)(f.Z, {
        entry: n.record
      }), null != H && (0, i.jsx)(C.Z, {
        element: H,
        onChange: (e, t) => {
          let n = {
            ...$
          };
          e in $ ? delete n[e] : n[e] = t, ee(n), er((0, a.VP)(j, W, H, et, n))
        },
        state: $
      }), ("user_urf" === n.name || "message_urf" === n.name) && null != W && W.length > 0 && (0, i.jsx)(E.Z, {
        elements: W,
        onChange: es,
        state: et
      }), ("user_urf" === n.name || "message_urf" === n.name) && null != j && j.length > 0 && (0, i.jsx)(h.Z, {
        elements: j,
        onChange: es,
        state: et
      }), (0, i.jsx)(d.Z, {
        node: t,
        onSelectChild: eo
      }), null != Y && Y.length > 0 ? (0, i.jsx)(T.Z, {
        elements: Y
      }) : null, (0, i.jsx)(I.Z, {
        errorMessage: Q,
        onClose: () => {
          J("")
        }
      })]
    }), (0, i.jsx)(l.Z, {
      button: t.button,
      submitting: K,
      disableNext: ei,
      onClick: e => {
        switch (e.type) {
          case "done":
          case "cancel":
            k();
            break;
          case "next":
            eo(["", e.target]);
            break;
          case "submit":
            z(!0), el()
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: G.length > 0
    }), (0, i.jsx)(s.ModalCloseButton, {
      className: y.closeButton,
      onClick: k
    })]
  })
}