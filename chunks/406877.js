n.d(t, {
    Z: function () {
        return c;
    }
}), n(47120);
var i = n(470079), a = n(668781), s = n(881052), l = n(824389), r = n(179838), o = n(689938);
function c(e, t) {
    let [n, c] = i.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: i.useCallback(async n => {
            if (null != e && null != t) {
                c(!0);
                try {
                    let {url: i} = await l.gs({
                        guildId: e,
                        productId: t,
                        attachmentId: n
                    });
                    await r.L(i);
                } catch (t) {
                    let e = t instanceof s.Hx ? t.getAnyErrorMessage() : void 0;
                    a.Z.show({
                        title: o.Z.Messages.ERROR_GENERIC_TITLE,
                        body: null != e ? e : o.Z.Messages.GENERIC_ERROR_BODY
                    });
                } finally {
                    c(!1);
                }
            }
        }, [
            e,
            t
        ])
    };
}
