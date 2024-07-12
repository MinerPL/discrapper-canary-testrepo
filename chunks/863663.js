t.d(n, {
  NB: function() {
return l;
  },
  ar: function() {
return c;
  },
  fG: function() {
return a;
  },
  kg: function() {
return u;
  },
  pM: function() {
return s;
  }
});
var i = t(881052);
t(496675);
var r = t(981631),
  o = t(689938);
let l = '_role';

function u(e) {
  if (!(e >= 0))
switch (-e) {
  case r.evJ.ENTITY_TOO_LARGE:
    return o.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
  case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
    return o.Z.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
  case 1:
    return o.Z.Messages.ERROR_GENERIC_TITLE;
  default:
    return o.Z.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
      code: -e
    });
}
}

function s(e) {
  let {
newRoleParams: n
  } = e;
  if (null != n && '' === n.name.trim()) {
var t, r;
return t = l, r = o.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new i.Hx({
  status: 400,
  body: {
    message: 'Invalid form body',
    errors: {
      [t]: {
        _errors: [{
          code: '',
          message: r
        }]
      }
    }
  }
});
  }
}

function a(e) {
  var n;
  let {
guildProductListing: t,
name: i,
priceTier: r,
description: o,
image: l,
imageName: u,
isImageChanged: s,
newRoleParams: a,
hasUnsavedAttachmentChanges: c
  } = e, d = {};
  (null == t ? void 0 : t.name) !== i && '' !== i.trim() && (d.name = i), (null !== (n = null == t ? void 0 : t.description) && void 0 !== n ? n : '') !== o && (d.description = o), (null == t ? void 0 : t.price_tier) !== r && null != r && (d.priceTier = r), null != a && '' !== a.name.trim() ? d.createNewRole = !0 : null === a && (d.unlinkRole = !0), l.startsWith('data:') && (s || null == t && (Object.keys(d).length > 0 || c)) && (d.image = l, d.imageName = u);
  let _ = Object.keys(d).length > 0 || c;
  return {
changes: d,
hasUnsavedChanges: _,
canSaveForDraft: _,
canSaveForPublished: _,
canPublishOrUnpublish: !(null == t || _)
  };
}

function c(e, n) {
  return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.GUILD_PRODUCT(e, n));
}