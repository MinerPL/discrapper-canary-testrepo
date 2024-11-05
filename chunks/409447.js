n.d(t, {
    u: function () {
        return o;
    }
});
var r = n(192379),
    i = n(676062),
    a = n(749537);
let s = (e) => {
        let t = 'translate('.concat(e.x.toFixed(1), 'px, ').concat(e.y.toFixed(1), 'px)');
        return {
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            transform: t,
            WebkitTransform: t
        };
    },
    o = () => {
        let e = (0, r.useRef)(null),
            t = (0, i.f)((t) => ({
                currentOffset: (0, a.s)(t, e),
                isDragging: t.isDragging(),
                itemType: t.getItemType(),
                item: t.getItem(),
                monitor: t
            }));
        return t.isDragging && null !== t.currentOffset
            ? {
                  display: !0,
                  itemType: t.itemType,
                  item: t.item,
                  style: s(t.currentOffset),
                  monitor: t.monitor,
                  ref: e
              }
            : { display: !1 };
    };
