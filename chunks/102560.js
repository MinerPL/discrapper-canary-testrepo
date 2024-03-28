"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  o = s("392711"),
  r = s.n(o),
  n = s("442837"),
  u = s("481060"),
  d = s("48210"),
  i = s("412899"),
  c = s("605436"),
  m = s("430824"),
  f = s("496675"),
  E = s("987134"),
  p = s("689938"),
  g = s("841443");
t.default = e => {
  let {
    guild: t,
    transitionState: s,
    onClose: o
  } = e, [_, R] = l.useState(7), [h, M] = l.useState(null), [S, v] = l.useState([]), x = l.useCallback(async () => {
    M(null), M(await d.default.updateEstimate(t.id, _, S))
  }, [_, t.id, S]);
  l.useEffect(() => {
    x()
  }, [x]);
  let N = (0, n.useStateFromStoresArray)([f.default, m.default], () => {
    let e = f.default.getHighestRole(t);
    return r()(m.default.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, c.isEveryoneRoleId)(t.id, e.id)).filter(s => f.default.isRoleHigher(t, e, s)).value().map(e => {
      let {
        id: t,
        name: s
      } = e;
      return {
        label: s,
        value: t
      }
    })
  }, [t]);
  return (0, a.jsxs)(u.ModalRoot, {
    transitionState: s,
    children: [(0, a.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)(u.Heading, {
        variant: "heading-lg/semibold",
        children: [p.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
      })
    }), (0, a.jsxs)("div", {
      className: g.content,
      children: [(0, a.jsx)(u.FormItem, {
        title: p.default.Messages.FORM_LABEL_LAST_SEEN,
        children: (0, a.jsx)(u.RadioGroup, {
          value: _,
          options: [{
            name: p.default.Messages.LAST_SEEN.format({
              days: 7
            }),
            value: 7
          }, {
            name: p.default.Messages.LAST_SEEN.format({
              days: 30
            }),
            value: 30
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            R(t)
          },
          className: g.spacing
        })
      }), (0, a.jsx)(u.FormItem, {
        title: p.default.Messages.PRUNE_WITH_ROLES,
        children: (0, a.jsx)(E.default, {
          isMulti: !0,
          options: N,
          onChange: e => {
            v(e.map(e => e.value))
          },
          value: S,
          multiValueRenderer: e => {
            let {
              value: s
            } = e, l = m.default.getRole(t.id, s);
            if (null == l) return null;
            let o = S.indexOf(s);
            return (0, a.jsx)(i.MemberRole, {
              className: g.role,
              role: l,
              canRemove: !0,
              onRemove: () => {
                v([...S.slice(0, o), ...S.slice(o + 1)])
              },
              onMouseDown: e => {
                e.stopPropagation(), e.preventDefault()
              },
              guildId: t.id
            })
          },
          maxMenuHeight: 200
        })
      }), (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        className: g.spacing,
        children: S.length > 0 ? p.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
          members: h,
          days: _
        }) : p.default.Messages.FORM_HELP_LAST_SEEN_1.format({
          members: h,
          days: _
        })
      })]
    }), (0, a.jsxs)(u.ModalFooter, {
      children: [(0, a.jsx)(u.Button, {
        onClick: () => {
          d.default.prune(t.id, _, S), o()
        },
        children: p.default.Messages.PRUNE
      }), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: o,
        children: p.default.Messages.CANCEL
      })]
    })]
  })
}