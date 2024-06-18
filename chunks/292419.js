"use strict";
n.d(t, {
  SD: function() {
    return c
  },
  uZ: function() {
    return I
  }
}), n(47120);
var i = n(911969),
  r = n(622449),
  s = n(768494),
  o = n(768581),
  a = n(823379),
  l = n(280501),
  u = n(689938);
let _ = (e, t) => ({
    id: e.id,
    name: e.name,
    animated: e.animated,
    src: t && null != e.id ? o.ZP.getEmojiURL({
      id: e.id,
      animated: e.animated || !1,
      size: 48
    }) : void 0
  }),
  d = e => (null == e ? void 0 : e.errorCode) === 429 ? u.Z.Messages.INTERACTION_RATE_LIMITED : u.Z.Messages.APPLICATION_COMMAND_FAILED,
  c = (e, t, n) => {
    let s = (null == e ? void 0 : e.data.interactionType) === i.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === r.F.FAILED ? e.data.componentId : null;
    if (null != (null != s ? function(e, t) {
        if (e.type === i.re.ACTION_ROW) {
          var n;
          return null !== (n = e.components.find(e => e.id === t)) && void 0 !== n ? n : null
        }
      }(n, s) : null)) {
      var o;
      return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : d(e)
    }
  },
  E = e => {
    switch (e) {
      case i.re.ACTION_ROW:
      case i.re.BUTTON:
      case i.re.STRING_SELECT:
      case i.re.INPUT_TEXT:
      case i.re.USER_SELECT:
      case i.re.ROLE_SELECT:
      case i.re.MENTIONABLE_SELECT:
      case i.re.CHANNEL_SELECT:
      case i.re.TEXT:
      case i.re.MEDIA_GALLERY:
      case i.re.SEPARATOR:
        return !0
    }
  };

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e.map((e, n) => (function e(t, n, r) {
    var o, d, c, I, h, S, f, N;
    if (!E(t.type)) return null;
    let {
      includeEmojiSrc: A
    } = n;
    switch (t.type) {
      case i.re.ACTION_ROW: {
        let s = t.components.map((t, i) => (function(t, i) {
          let s = e(t, n, [...r, i]);
          return null == s ? null : s
        })(t, i)).filter(a.lm);
        return {
          type: i.re.ACTION_ROW,
          id: T(r),
          components: s
        }
      }
      case i.re.BUTTON: {
        let e = null != t.emoji ? _(t.emoji, A) : void 0;
        return {
          type: i.re.BUTTON,
          id: T(r),
          customId: t.custom_id,
          style: t.style,
          disabled: t.disabled,
          url: t.url,
          label: t.label,
          emoji: e,
          skuId: t.sku_id
        }
      }
      case i.re.STRING_SELECT:
        return {
          type: i.re.STRING_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
            type: l.tM.STRING,
            label: e.label,
            value: e.value,
            default: e.default,
            description: e.description,
            emoji: null != e.emoji ? _(e.emoji, A) : void 0
          })), placeholder: null !== (o = t.placeholder) && void 0 !== o ? o : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values
        };
      case i.re.INPUT_TEXT:
        return {
          type: t.type, id: T(r), style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: null !== (d = t.required) && void 0 !== d && d, minLength: t.min_length, maxLength: t.max_length
        };
      case i.re.USER_SELECT:
        return {
          type: i.re.USER_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (c = t.placeholder) && void 0 !== c ? c : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
        };
      case i.re.ROLE_SELECT:
        return {
          type: i.re.ROLE_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (I = t.placeholder) && void 0 !== I ? I : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
        };
      case i.re.MENTIONABLE_SELECT:
        return {
          type: i.re.MENTIONABLE_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (h = t.placeholder) && void 0 !== h ? h : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
        };
      case i.re.CHANNEL_SELECT:
        return {
          type: i.re.CHANNEL_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (S = t.placeholder) && void 0 !== S ? S : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, channelTypes: t.channel_types, defaultValues: t.default_values
        };
      case i.re.TEXT:
        return {
          type: i.re.TEXT, id: T(r), content: t.content
        };
      case i.re.MEDIA_GALLERY:
        return {
          type: i.re.MEDIA_GALLERY, id: T(r), items: t.items.map(e => ({
            media: (0, s.ym)(e.media),
            description: e.description,
            spoiler: e.spoiler
          }))
        };
      case i.re.SEPARATOR:
        return {
          type: i.re.SEPARATOR, id: T(r), divider: null === (f = t.divider) || void 0 === f || f, spacing: null !== (N = t.spacing) && void 0 !== N ? N : i.US.SMALL
        };
      default:
        return null
    }
  })(e, t, [n])).filter(e => null != e)
}

function T(e) {
  return (0, l.FF)(e.join(","))
}