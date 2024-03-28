    "use strict";
    e.r(r), e("47120"), e("312677");
    var n = e("8048"),
      o = e("647425");
    let i = new Map,
      u = t => {
        let {
          canvas: r,
          canvasId: e,
          animationId: u,
          assetUrl: c,
          assetData: s,
          isVisible: a,
          shouldAnimate: f
        } = t, p = new n.default({
          canvas: r,
          id: u,
          assetUrl: c,
          assetData: s,
          isVisible: a,
          shouldAnimate: f,
          onInitialDraw: () => {
            self.postMessage({
              type: o.MessageTypes.FIRST_DRAW,
              canvasId: e
            })
          },
          onError: () => {
            self.postMessage({
              type: o.MessageTypes.ERROR,
              canvasId: e
            })
          }
        });
        i.set(e, p)
      },
      c = t => {
        var r;
        let {
          canvasId: e
        } = t;
        null === (r = i.get(e)) || void 0 === r || r.drop(), i.delete(e)
      },
      s = t => {
        var r;
        let {
          canvasId: e,
          isVisible: n
        } = t;
        null === (r = i.get(e)) || void 0 === r || r.setVisibility(n)
      },
      a = t => {
        var r;
        let {
          canvasId: e,
          shouldAnimate: n,
          nextFrame: o
        } = t;
        null === (r = i.get(e)) || void 0 === r || r.setState(n, o)
      };
    self.addEventListener("message", t => {
      let {
        data: r
      } = t;
      switch (r.type) {
        case o.MessageTypes.INITIALIZE:
          u(r);
          break;
        case o.MessageTypes.DROP:
          c(r);
          break;
        case o.MessageTypes.VISIBILITY_CHANGE:
          s(r);
          break;
        case o.MessageTypes.STATE_CHANGE:
          a(r)
      }
    })