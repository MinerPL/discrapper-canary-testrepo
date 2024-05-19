"use strict";
n.r(t), n.d(t, {
  useGetSubscriptionListing__DO_NOT_USE: function() {
    return o
  }
}), n("789020");
var i = n("442837"),
  s = n("509545"),
  l = n("55563"),
  r = n("551428"),
  a = n("73346");

function o(e) {
  let t;
  let n = (0, i.useStateFromStores)([l.default], () => l.default.get(e), [e]),
    o = (0, i.useStateFromStores)([r.default], () => r.default.getForSKU(e), [e]),
    u = (0, i.useStateFromStores)([s.default], () => s.default.getForSKU(e), [e]);
  if (null != n && null != o && null != u) {
    if (null != o.thumbnail) {
      var d, c;
      t = {
        id: o.thumbnail.id,
        filename: o.thumbnail.filename,
        size: o.thumbnail.size,
        url: (0, a.getAssetURL)(n.applicationId, o.thumbnail, 256),
        mime_type: o.thumbnail.mimeType,
        width: null !== (d = o.thumbnail.width) && void 0 !== d ? d : void 0,
        height: null !== (c = o.thumbnail.height) && void 0 !== c ? c : void 0
      }
    }
    return {
      id: n.id,
      name: n.name,
      description: n.summary,
      image_asset: t,
      application_id: n.applicationId,
      subscription_plans: u.map(e => e.toServerData()),
      published: !!o.published,
      soft_deleted: !!n.deleted,
      store_listing_benefits: o.benefits,
      sku_benefits: {
        id: n.id,
        benefits: []
      },
      sku_flags: n.flags
    }
  }
}