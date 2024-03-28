"use strict";
a.r(e), a.d(e, {
  default: function() {
    return o
  }
}), a("47120");
var n = a("470079"),
  s = a("668781"),
  l = a("881052"),
  i = a("824389"),
  r = a("179838"),
  u = a("689938");

function o(t, e) {
  let [a, o] = n.useState(!1);
  return {
    isLoading: a,
    downloadAttachment: n.useCallback(async a => {
      if (null != t && null != e) {
        o(!0);
        try {
          let {
            url: n
          } = await i.requestDownloadUrl({
            guildId: t,
            productId: e,
            attachmentId: a
          });
          await r.download(n)
        } catch (e) {
          let t = e instanceof l.APIError ? e.getAnyErrorMessage() : void 0;
          s.default.show({
            title: u.default.Messages.ERROR_GENERIC_TITLE,
            body: null != t ? t : u.default.Messages.GENERIC_ERROR_BODY
          })
        } finally {
          o(!1)
        }
      }
    }, [t, e])
  }
}