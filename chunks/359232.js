"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var l = n("512722"),
  u = n.n(l),
  a = n("911969"),
  o = n("689938");
let i = (e, t) => {
    let {
      minValues: n,
      maxValues: l
    } = e;
    if (null == t) return 0 === n ? null : o.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({
      count: n
    });
    if (t.type === a.ComponentType.STRING_SELECT) {
      if (t.values.length < n) return o.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({
        count: n
      });
      if (t.values.length > l) return o.default.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({
        count: l
      })
    } else {
      if (t.selectedOptions.length < n) return o.default.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({
        count: n
      });
      if (t.selectedOptions.length > l) return o.default.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({
        count: l
      })
    }
    return null
  },
  r = (e, t) => {
    let {
      minLength: n,
      maxLength: l,
      required: u
    } = e;
    if (null == t || 0 === t.value.length) return u ? o.default.Messages.FORM_LENGTH_ERROR.format({
      min: n,
      max: l
    }) : null;
    return t.value.length < n || t.value.length > l ? o.default.Messages.FORM_LENGTH_ERROR.format({
      min: n,
      max: l
    }) : null
  };

function d(e, t) {
  switch (null != t && u()(t.type === e.type, "component type matches state"), e.type) {
    case a.ComponentType.BUTTON:
      return null;
    case a.ComponentType.STRING_SELECT:
    case a.ComponentType.USER_SELECT:
    case a.ComponentType.ROLE_SELECT:
    case a.ComponentType.MENTIONABLE_SELECT:
    case a.ComponentType.CHANNEL_SELECT:
      return i(e, t);
    case a.ComponentType.INPUT_TEXT:
      return r(e, t);
    default:
      u()(!1, "missing validator for this component")
  }
}