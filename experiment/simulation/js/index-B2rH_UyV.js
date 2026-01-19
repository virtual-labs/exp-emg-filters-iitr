(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const c of o)
      if (c.type === "childList")
        for (const u of c.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && l(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = a(o);
    fetch(o.href, c);
  }
})();
function lb(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var mf = { exports: {} },
  wl = {};
var Cm;
function sv() {
  if (Cm) return wl;
  Cm = 1;
  var i = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function a(l, o, c) {
    var u = null;
    if (
      (c !== void 0 && (u = "" + c),
      o.key !== void 0 && (u = "" + o.key),
      "key" in o)
    ) {
      c = {};
      for (var h in o) h !== "key" && (c[h] = o[h]);
    } else c = o;
    return (
      (o = c.ref),
      { $$typeof: i, type: l, key: u, ref: o !== void 0 ? o : null, props: c }
    );
  }
  return ((wl.Fragment = e), (wl.jsx = a), (wl.jsxs = a), wl);
}
var Em;
function lv() {
  return (Em || ((Em = 1), (mf.exports = sv())), mf.exports);
}
var U = lv(),
  bf = { exports: {} },
  yt = {};
var Am;
function ov() {
  if (Am) return yt;
  Am = 1;
  var i = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    u = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    d = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function _(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (S && O[S]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    A = {};
  function C(O, k, V) {
    ((this.props = O),
      (this.context = k),
      (this.refs = A),
      (this.updater = V || w));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (O, k) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, O, k, "setState");
    }),
    (C.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    }));
  function I() {}
  I.prototype = C.prototype;
  function tt(O, k, V) {
    ((this.props = O),
      (this.context = k),
      (this.refs = A),
      (this.updater = V || w));
  }
  var Z = (tt.prototype = new I());
  ((Z.constructor = tt), E(Z, C.prototype), (Z.isPureReactComponent = !0));
  var F = Array.isArray;
  function $() {}
  var T = { H: null, A: null, T: null, S: null },
    x = Object.prototype.hasOwnProperty;
  function v(O, k, V) {
    var nt = V.ref;
    return {
      $$typeof: i,
      type: O,
      key: k,
      ref: nt !== void 0 ? nt : null,
      props: V,
    };
  }
  function H(O, k) {
    return v(O.type, k, O.props);
  }
  function R(O) {
    return typeof O == "object" && O !== null && O.$$typeof === i;
  }
  function B(O) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (V) {
        return k[V];
      })
    );
  }
  var J = /\/+/g;
  function st(O, k) {
    return typeof O == "object" && O !== null && O.key != null
      ? B("" + O.key)
      : k.toString(36);
  }
  function at(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then($, $)
            : ((O.status = "pending"),
              O.then(
                function (k) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = k));
                },
                function (k) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = k));
                },
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function j(O, k, V, nt, lt) {
    var ot = typeof O;
    (ot === "undefined" || ot === "boolean") && (O = null);
    var bt = !1;
    if (O === null) bt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case i:
            case e:
              bt = !0;
              break;
            case m:
              return ((bt = O._init), j(bt(O._payload), k, V, nt, lt));
          }
      }
    if (bt)
      return (
        (lt = lt(O)),
        (bt = nt === "" ? "." + st(O, 0) : nt),
        F(lt)
          ? ((V = ""),
            bt != null && (V = bt.replace(J, "$&/") + "/"),
            j(lt, k, V, "", function (Yt) {
              return Yt;
            }))
          : lt != null &&
            (R(lt) &&
              (lt = H(
                lt,
                V +
                  (lt.key == null || (O && O.key === lt.key)
                    ? ""
                    : ("" + lt.key).replace(J, "$&/") + "/") +
                  bt,
              )),
            k.push(lt)),
        1
      );
    bt = 0;
    var pt = nt === "" ? "." : nt + ":";
    if (F(O))
      for (var dt = 0; dt < O.length; dt++)
        ((nt = O[dt]), (ot = pt + st(nt, dt)), (bt += j(nt, k, V, ot, lt)));
    else if (((dt = _(O)), typeof dt == "function"))
      for (O = dt.call(O), dt = 0; !(nt = O.next()).done; )
        ((nt = nt.value),
          (ot = pt + st(nt, dt++)),
          (bt += j(nt, k, V, ot, lt)));
    else if (ot === "object") {
      if (typeof O.then == "function") return j(at(O), k, V, nt, lt);
      throw (
        (k = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return bt;
  }
  function G(O, k, V) {
    if (O == null) return O;
    var nt = [],
      lt = 0;
    return (
      j(O, nt, "", "", function (ot) {
        return k.call(V, ot, lt++);
      }),
      nt
    );
  }
  function et(O) {
    if (O._status === -1) {
      var k = O._result;
      ((k = k()),
        k.then(
          function (V) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = V));
          },
          function (V) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = V));
          },
        ),
        O._status === -1 && ((O._status = 0), (O._result = k)));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var k = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" &&
                  O !== null &&
                  typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(k)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          },
    rt = {
      map: G,
      forEach: function (O, k, V) {
        G(
          O,
          function () {
            k.apply(this, arguments);
          },
          V,
        );
      },
      count: function (O) {
        var k = 0;
        return (
          G(O, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (O) {
        return (
          G(O, function (k) {
            return k;
          }) || []
        );
      },
      only: function (O) {
        if (!R(O))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return O;
      },
    };
  return (
    (yt.Activity = b),
    (yt.Children = rt),
    (yt.Component = C),
    (yt.Fragment = a),
    (yt.Profiler = o),
    (yt.PureComponent = tt),
    (yt.StrictMode = l),
    (yt.Suspense = p),
    (yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
    (yt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return T.H.useMemoCache(O);
      },
    }),
    (yt.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (yt.cacheSignal = function () {
      return null;
    }),
    (yt.cloneElement = function (O, k, V) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + ".",
        );
      var nt = E({}, O.props),
        lt = O.key;
      if (k != null)
        for (ot in (k.key !== void 0 && (lt = "" + k.key), k))
          !x.call(k, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && k.ref === void 0) ||
            (nt[ot] = k[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) nt.children = V;
      else if (1 < ot) {
        for (var bt = Array(ot), pt = 0; pt < ot; pt++)
          bt[pt] = arguments[pt + 2];
        nt.children = bt;
      }
      return v(O.type, lt, nt);
    }),
    (yt.createContext = function (O) {
      return (
        (O = {
          $$typeof: u,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: c, _context: O }),
        O
      );
    }),
    (yt.createElement = function (O, k, V) {
      var nt,
        lt = {},
        ot = null;
      if (k != null)
        for (nt in (k.key !== void 0 && (ot = "" + k.key), k))
          x.call(k, nt) &&
            nt !== "key" &&
            nt !== "__self" &&
            nt !== "__source" &&
            (lt[nt] = k[nt]);
      var bt = arguments.length - 2;
      if (bt === 1) lt.children = V;
      else if (1 < bt) {
        for (var pt = Array(bt), dt = 0; dt < bt; dt++)
          pt[dt] = arguments[dt + 2];
        lt.children = pt;
      }
      if (O && O.defaultProps)
        for (nt in ((bt = O.defaultProps), bt))
          lt[nt] === void 0 && (lt[nt] = bt[nt]);
      return v(O, ot, lt);
    }),
    (yt.createRef = function () {
      return { current: null };
    }),
    (yt.forwardRef = function (O) {
      return { $$typeof: h, render: O };
    }),
    (yt.isValidElement = R),
    (yt.lazy = function (O) {
      return { $$typeof: m, _payload: { _status: -1, _result: O }, _init: et };
    }),
    (yt.memo = function (O, k) {
      return { $$typeof: d, type: O, compare: k === void 0 ? null : k };
    }),
    (yt.startTransition = function (O) {
      var k = T.T,
        V = {};
      T.T = V;
      try {
        var nt = O(),
          lt = T.S;
        (lt !== null && lt(V, nt),
          typeof nt == "object" &&
            nt !== null &&
            typeof nt.then == "function" &&
            nt.then($, it));
      } catch (ot) {
        it(ot);
      } finally {
        (k !== null && V.types !== null && (k.types = V.types), (T.T = k));
      }
    }),
    (yt.unstable_useCacheRefresh = function () {
      return T.H.useCacheRefresh();
    }),
    (yt.use = function (O) {
      return T.H.use(O);
    }),
    (yt.useActionState = function (O, k, V) {
      return T.H.useActionState(O, k, V);
    }),
    (yt.useCallback = function (O, k) {
      return T.H.useCallback(O, k);
    }),
    (yt.useContext = function (O) {
      return T.H.useContext(O);
    }),
    (yt.useDebugValue = function () {}),
    (yt.useDeferredValue = function (O, k) {
      return T.H.useDeferredValue(O, k);
    }),
    (yt.useEffect = function (O, k) {
      return T.H.useEffect(O, k);
    }),
    (yt.useEffectEvent = function (O) {
      return T.H.useEffectEvent(O);
    }),
    (yt.useId = function () {
      return T.H.useId();
    }),
    (yt.useImperativeHandle = function (O, k, V) {
      return T.H.useImperativeHandle(O, k, V);
    }),
    (yt.useInsertionEffect = function (O, k) {
      return T.H.useInsertionEffect(O, k);
    }),
    (yt.useLayoutEffect = function (O, k) {
      return T.H.useLayoutEffect(O, k);
    }),
    (yt.useMemo = function (O, k) {
      return T.H.useMemo(O, k);
    }),
    (yt.useOptimistic = function (O, k) {
      return T.H.useOptimistic(O, k);
    }),
    (yt.useReducer = function (O, k, V) {
      return T.H.useReducer(O, k, V);
    }),
    (yt.useRef = function (O) {
      return T.H.useRef(O);
    }),
    (yt.useState = function (O) {
      return T.H.useState(O);
    }),
    (yt.useSyncExternalStore = function (O, k, V) {
      return T.H.useSyncExternalStore(O, k, V);
    }),
    (yt.useTransition = function () {
      return T.H.useTransition();
    }),
    (yt.version = "19.2.0"),
    yt
  );
}
var Tm;
function Zf() {
  return (Tm || ((Tm = 1), (bf.exports = ov())), bf.exports);
}
var ft = Zf(),
  yf = { exports: {} },
  _l = {},
  vf = { exports: {} },
  wf = {};
var Om;
function rv() {
  return (
    Om ||
      ((Om = 1),
      (function (i) {
        function e(j, G) {
          var et = j.length;
          j.push(G);
          t: for (; 0 < et; ) {
            var it = (et - 1) >>> 1,
              rt = j[it];
            if (0 < o(rt, G)) ((j[it] = G), (j[et] = rt), (et = it));
            else break t;
          }
        }
        function a(j) {
          return j.length === 0 ? null : j[0];
        }
        function l(j) {
          if (j.length === 0) return null;
          var G = j[0],
            et = j.pop();
          if (et !== G) {
            j[0] = et;
            t: for (var it = 0, rt = j.length, O = rt >>> 1; it < O; ) {
              var k = 2 * (it + 1) - 1,
                V = j[k],
                nt = k + 1,
                lt = j[nt];
              if (0 > o(V, et))
                nt < rt && 0 > o(lt, V)
                  ? ((j[it] = lt), (j[nt] = et), (it = nt))
                  : ((j[it] = V), (j[k] = et), (it = k));
              else if (nt < rt && 0 > o(lt, et))
                ((j[it] = lt), (j[nt] = et), (it = nt));
              else break t;
            }
          }
          return G;
        }
        function o(j, G) {
          var et = j.sortIndex - G.sortIndex;
          return et !== 0 ? et : j.id - G.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          i.unstable_now = function () {
            return c.now();
          };
        } else {
          var u = Date,
            h = u.now();
          i.unstable_now = function () {
            return u.now() - h;
          };
        }
        var p = [],
          d = [],
          m = 1,
          b = null,
          S = 3,
          _ = !1,
          w = !1,
          E = !1,
          A = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          tt = typeof setImmediate < "u" ? setImmediate : null;
        function Z(j) {
          for (var G = a(d); G !== null; ) {
            if (G.callback === null) l(d);
            else if (G.startTime <= j)
              (l(d), (G.sortIndex = G.expirationTime), e(p, G));
            else break;
            G = a(d);
          }
        }
        function F(j) {
          if (((E = !1), Z(j), !w))
            if (a(p) !== null) ((w = !0), $ || (($ = !0), B()));
            else {
              var G = a(d);
              G !== null && at(F, G.startTime - j);
            }
        }
        var $ = !1,
          T = -1,
          x = 5,
          v = -1;
        function H() {
          return A ? !0 : !(i.unstable_now() - v < x);
        }
        function R() {
          if (((A = !1), $)) {
            var j = i.unstable_now();
            v = j;
            var G = !0;
            try {
              t: {
                ((w = !1), E && ((E = !1), I(T), (T = -1)), (_ = !0));
                var et = S;
                try {
                  e: {
                    for (
                      Z(j), b = a(p);
                      b !== null && !(b.expirationTime > j && H());
                    ) {
                      var it = b.callback;
                      if (typeof it == "function") {
                        ((b.callback = null), (S = b.priorityLevel));
                        var rt = it(b.expirationTime <= j);
                        if (((j = i.unstable_now()), typeof rt == "function")) {
                          ((b.callback = rt), Z(j), (G = !0));
                          break e;
                        }
                        (b === a(p) && l(p), Z(j));
                      } else l(p);
                      b = a(p);
                    }
                    if (b !== null) G = !0;
                    else {
                      var O = a(d);
                      (O !== null && at(F, O.startTime - j), (G = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (S = et), (_ = !1));
                }
                G = void 0;
              }
            } finally {
              G ? B() : ($ = !1);
            }
          }
        }
        var B;
        if (typeof tt == "function")
          B = function () {
            tt(R);
          };
        else if (typeof MessageChannel < "u") {
          var J = new MessageChannel(),
            st = J.port2;
          ((J.port1.onmessage = R),
            (B = function () {
              st.postMessage(null);
            }));
        } else
          B = function () {
            C(R, 0);
          };
        function at(j, G) {
          T = C(function () {
            j(i.unstable_now());
          }, G);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (i.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (x = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (i.unstable_next = function (j) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = S;
            }
            var et = S;
            S = G;
            try {
              return j();
            } finally {
              S = et;
            }
          }),
          (i.unstable_requestPaint = function () {
            A = !0;
          }),
          (i.unstable_runWithPriority = function (j, G) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var et = S;
            S = j;
            try {
              return G();
            } finally {
              S = et;
            }
          }),
          (i.unstable_scheduleCallback = function (j, G, et) {
            var it = i.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? it + et : it))
                : (et = it),
              j)
            ) {
              case 1:
                var rt = -1;
                break;
              case 2:
                rt = 250;
                break;
              case 5:
                rt = 1073741823;
                break;
              case 4:
                rt = 1e4;
                break;
              default:
                rt = 5e3;
            }
            return (
              (rt = et + rt),
              (j = {
                id: m++,
                callback: G,
                priorityLevel: j,
                startTime: et,
                expirationTime: rt,
                sortIndex: -1,
              }),
              et > it
                ? ((j.sortIndex = et),
                  e(d, j),
                  a(p) === null &&
                    j === a(d) &&
                    (E ? (I(T), (T = -1)) : (E = !0), at(F, et - it)))
                : ((j.sortIndex = rt),
                  e(p, j),
                  w || _ || ((w = !0), $ || (($ = !0), B()))),
              j
            );
          }),
          (i.unstable_shouldYield = H),
          (i.unstable_wrapCallback = function (j) {
            var G = S;
            return function () {
              var et = S;
              S = G;
              try {
                return j.apply(this, arguments);
              } finally {
                S = et;
              }
            };
          }));
      })(wf)),
    wf
  );
}
var Dm;
function cv() {
  return (Dm || ((Dm = 1), (vf.exports = rv())), vf.exports);
}
var _f = { exports: {} },
  Te = {};
var zm;
function uv() {
  if (zm) return Te;
  zm = 1;
  var i = Zf();
  function e(p) {
    var d = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        d += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      d +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var l = {
      d: {
        f: a,
        r: function () {
          throw Error(e(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function c(p, d, m) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: d,
      implementation: m,
    };
  }
  var u = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, d) {
    if (p === "font") return "";
    if (typeof d == "string") return d === "use-credentials" ? d : "";
  }
  return (
    (Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (Te.createPortal = function (p, d) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11))
        throw Error(e(299));
      return c(p, d, null, m);
    }),
    (Te.flushSync = function (p) {
      var d = u.T,
        m = l.p;
      try {
        if (((u.T = null), (l.p = 2), p)) return p();
      } finally {
        ((u.T = d), (l.p = m), l.d.f());
      }
    }),
    (Te.preconnect = function (p, d) {
      typeof p == "string" &&
        (d
          ? ((d = d.crossOrigin),
            (d =
              typeof d == "string"
                ? d === "use-credentials"
                  ? d
                  : ""
                : void 0))
          : (d = null),
        l.d.C(p, d));
    }),
    (Te.prefetchDNS = function (p) {
      typeof p == "string" && l.d.D(p);
    }),
    (Te.preinit = function (p, d) {
      if (typeof p == "string" && d && typeof d.as == "string") {
        var m = d.as,
          b = h(m, d.crossOrigin),
          S = typeof d.integrity == "string" ? d.integrity : void 0,
          _ = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        m === "style"
          ? l.d.S(p, typeof d.precedence == "string" ? d.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: _,
            })
          : m === "script" &&
            l.d.X(p, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: _,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
      }
    }),
    (Te.preinitModule = function (p, d) {
      if (typeof p == "string")
        if (typeof d == "object" && d !== null) {
          if (d.as == null || d.as === "script") {
            var m = h(d.as, d.crossOrigin);
            l.d.M(p, {
              crossOrigin: m,
              integrity: typeof d.integrity == "string" ? d.integrity : void 0,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
          }
        } else d == null && l.d.M(p);
    }),
    (Te.preload = function (p, d) {
      if (
        typeof p == "string" &&
        typeof d == "object" &&
        d !== null &&
        typeof d.as == "string"
      ) {
        var m = d.as,
          b = h(m, d.crossOrigin);
        l.d.L(p, m, {
          crossOrigin: b,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority:
            typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy:
            typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet:
            typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0,
        });
      }
    }),
    (Te.preloadModule = function (p, d) {
      if (typeof p == "string")
        if (d) {
          var m = h(d.as, d.crossOrigin);
          l.d.m(p, {
            as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
            crossOrigin: m,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          });
        } else l.d.m(p);
    }),
    (Te.requestFormReset = function (p) {
      l.d.r(p);
    }),
    (Te.unstable_batchedUpdates = function (p, d) {
      return p(d);
    }),
    (Te.useFormState = function (p, d, m) {
      return u.H.useFormState(p, d, m);
    }),
    (Te.useFormStatus = function () {
      return u.H.useHostTransitionStatus();
    }),
    (Te.version = "19.2.0"),
    Te
  );
}
var km;
function fv() {
  if (km) return _f.exports;
  km = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return (i(), (_f.exports = uv()), _f.exports);
}
var Rm;
function hv() {
  if (Rm) return _l;
  Rm = 1;
  var i = cv(),
    e = Zf(),
    a = fv();
  function l(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        n += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function c(t) {
    var n = t,
      s = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do ((n = t), (n.flags & 4098) !== 0 && (s = n.return), (t = n.return));
      while (t);
    }
    return n.tag === 3 ? s : null;
  }
  function u(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (c(t) !== t) throw Error(l(188));
  }
  function d(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = c(t)), n === null)) throw Error(l(188));
      return n !== t ? null : t;
    }
    for (var s = t, r = n; ; ) {
      var f = s.return;
      if (f === null) break;
      var g = f.alternate;
      if (g === null) {
        if (((r = f.return), r !== null)) {
          s = r;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === s) return (p(f), t);
          if (g === r) return (p(f), n);
          g = g.sibling;
        }
        throw Error(l(188));
      }
      if (s.return !== r.return) ((s = f), (r = g));
      else {
        for (var y = !1, M = f.child; M; ) {
          if (M === s) {
            ((y = !0), (s = f), (r = g));
            break;
          }
          if (M === r) {
            ((y = !0), (r = f), (s = g));
            break;
          }
          M = M.sibling;
        }
        if (!y) {
          for (M = g.child; M; ) {
            if (M === s) {
              ((y = !0), (s = g), (r = f));
              break;
            }
            if (M === r) {
              ((y = !0), (r = g), (s = f));
              break;
            }
            M = M.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (s.alternate !== r) throw Error(l(190));
    }
    if (s.tag !== 3) throw Error(l(188));
    return s.stateNode.current === s ? t : n;
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = m(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    I = Symbol.for("react.consumer"),
    tt = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    $ = Symbol.for("react.suspense_list"),
    T = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    H = Symbol.for("react.memo_cache_sentinel"),
    R = Symbol.iterator;
  function B(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (R && t[R]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var J = Symbol.for("react.client.reference");
  function st(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === J ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case C:
        return "Profiler";
      case A:
        return "StrictMode";
      case F:
        return "Suspense";
      case $:
        return "SuspenseList";
      case v:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return "Portal";
        case tt:
          return t.displayName || "Context";
        case I:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case T:
          return (
            (n = t.displayName || null),
            n !== null ? n : st(t.type) || "Memo"
          );
        case x:
          ((n = t._payload), (t = t._init));
          try {
            return st(t(n));
          } catch {}
      }
    return null;
  }
  var at = Array.isArray,
    j = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    it = [],
    rt = -1;
  function O(t) {
    return { current: t };
  }
  function k(t) {
    0 > rt || ((t.current = it[rt]), (it[rt] = null), rt--);
  }
  function V(t, n) {
    (rt++, (it[rt] = t.current), (t.current = n));
  }
  var nt = O(null),
    lt = O(null),
    ot = O(null),
    bt = O(null);
  function pt(t, n) {
    switch ((V(ot, n), V(lt, t), V(nt, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Kp(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          ((n = Kp(n)), (t = Pp(n, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (k(nt), V(nt, t));
  }
  function dt() {
    (k(nt), k(lt), k(ot));
  }
  function Yt(t) {
    t.memoizedState !== null && V(bt, t);
    var n = nt.current,
      s = Pp(n, t.type);
    n !== s && (V(lt, t), V(nt, s));
  }
  function vt(t) {
    (lt.current === t && (k(nt), k(lt)),
      bt.current === t && (k(bt), (ml._currentValue = et)));
  }
  var Vt, ae;
  function Dt(t) {
    if (Vt === void 0)
      try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        ((Vt = (n && n[1]) || ""),
          (ae =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Vt +
      t +
      ae
    );
  }
  var zt = !1;
  function _t(t, n) {
    if (!t || zt) return "";
    zt = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var W = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(W.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(W, []);
                } catch (X) {
                  var Y = X;
                }
                Reflect.construct(t, [], W);
              } else {
                try {
                  W.call();
                } catch (X) {
                  Y = X;
                }
                t.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                Y = X;
              }
              (W = t()) &&
                typeof W.catch == "function" &&
                W.catch(function () {});
            }
          } catch (X) {
            if (X && Y && typeof X.stack == "string") return [X.stack, Y.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var g = r.DetermineComponentFrameRoot(),
        y = g[0],
        M = g[1];
      if (y && M) {
        var D = y.split(`
`),
          q = M.split(`
`);
        for (
          f = r = 0;
          r < D.length && !D[r].includes("DetermineComponentFrameRoot");
        )
          r++;
        for (; f < q.length && !q[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (r === D.length || f === q.length)
          for (
            r = D.length - 1, f = q.length - 1;
            1 <= r && 0 <= f && D[r] !== q[f];
          )
            f--;
        for (; 1 <= r && 0 <= f; r--, f--)
          if (D[r] !== q[f]) {
            if (r !== 1 || f !== 1)
              do
                if ((r--, f--, 0 > f || D[r] !== q[f])) {
                  var K =
                    `
` + D[r].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      K.includes("<anonymous>") &&
                      (K = K.replace("<anonymous>", t.displayName)),
                    K
                  );
                }
              while (1 <= r && 0 <= f);
            break;
          }
      }
    } finally {
      ((zt = !1), (Error.prepareStackTrace = s));
    }
    return (s = t ? t.displayName || t.name : "") ? Dt(s) : "";
  }
  function me(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Dt(t.type);
      case 16:
        return Dt("Lazy");
      case 13:
        return t.child !== n && n !== null
          ? Dt("Suspense Fallback")
          : Dt("Suspense");
      case 19:
        return Dt("SuspenseList");
      case 0:
      case 15:
        return _t(t.type, !1);
      case 11:
        return _t(t.type.render, !1);
      case 1:
        return _t(t.type, !0);
      case 31:
        return Dt("Activity");
      default:
        return "";
    }
  }
  function Ot(t) {
    try {
      var n = "",
        s = null;
      do ((n += me(t, s)), (s = t), (t = t.return));
      while (t);
      return n;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  var Gt = Object.prototype.hasOwnProperty,
    ee = i.unstable_scheduleCallback,
    Tn = i.unstable_cancelCallback,
    sn = i.unstable_shouldYield,
    Qi = i.unstable_requestPaint,
    Nt = i.unstable_now,
    ln = i.unstable_getCurrentPriorityLevel,
    se = i.unstable_ImmediatePriority,
    we = i.unstable_UserBlockingPriority,
    Be = i.unstable_NormalPriority,
    As = i.unstable_LowPriority,
    Ts = i.unstable_IdlePriority,
    ui = i.log,
    on = i.unstable_setDisableYieldValue,
    xn = null,
    Ae = null;
  function fi(t) {
    if (
      (typeof ui == "function" && on(t),
      Ae && typeof Ae.setStrictMode == "function")
    )
      try {
        Ae.setStrictMode(xn, t);
      } catch {}
  }
  var Qe = Math.clz32 ? Math.clz32 : X2,
    V2 = Math.log,
    G2 = Math.LN2;
  function X2(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((V2(t) / G2) | 0)) | 0);
  }
  var Wl = 256,
    $l = 262144,
    Jl = 4194304;
  function Zi(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function to(t, n, s) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var f = 0,
      g = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var M = r & 134217727;
    return (
      M !== 0
        ? ((r = M & ~g),
          r !== 0
            ? (f = Zi(r))
            : ((y &= M),
              y !== 0
                ? (f = Zi(y))
                : s || ((s = M & ~t), s !== 0 && (f = Zi(s)))))
        : ((M = r & ~g),
          M !== 0
            ? (f = Zi(M))
            : y !== 0
              ? (f = Zi(y))
              : s || ((s = r & ~t), s !== 0 && (f = Zi(s)))),
      f === 0
        ? 0
        : n !== 0 &&
            n !== f &&
            (n & g) === 0 &&
            ((g = f & -f),
            (s = n & -n),
            g >= s || (g === 32 && (s & 4194048) !== 0))
          ? n
          : f
    );
  }
  function Os(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Q2(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Oh() {
    var t = Jl;
    return ((Jl <<= 1), (Jl & 62914560) === 0 && (Jl = 4194304), t);
  }
  function ic(t) {
    for (var n = [], s = 0; 31 > s; s++) n.push(t);
    return n;
  }
  function Ds(t, n) {
    ((t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Z2(t, n, s, r, f, g) {
    var y = t.pendingLanes;
    ((t.pendingLanes = s),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= s),
      (t.entangledLanes &= s),
      (t.errorRecoveryDisabledLanes &= s),
      (t.shellSuspendCounter = 0));
    var M = t.entanglements,
      D = t.expirationTimes,
      q = t.hiddenUpdates;
    for (s = y & ~s; 0 < s; ) {
      var K = 31 - Qe(s),
        W = 1 << K;
      ((M[K] = 0), (D[K] = -1));
      var Y = q[K];
      if (Y !== null)
        for (q[K] = null, K = 0; K < Y.length; K++) {
          var X = Y[K];
          X !== null && (X.lane &= -536870913);
        }
      s &= ~W;
    }
    (r !== 0 && Dh(t, r, 0),
      g !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= g & ~(y & ~n)));
  }
  function Dh(t, n, s) {
    ((t.pendingLanes |= n), (t.suspendedLanes &= ~n));
    var r = 31 - Qe(n);
    ((t.entangledLanes |= n),
      (t.entanglements[r] = t.entanglements[r] | 1073741824 | (s & 261930)));
  }
  function zh(t, n) {
    var s = (t.entangledLanes |= n);
    for (t = t.entanglements; s; ) {
      var r = 31 - Qe(s),
        f = 1 << r;
      ((f & n) | (t[r] & n) && (t[r] |= n), (s &= ~f));
    }
  }
  function kh(t, n) {
    var s = n & -n;
    return (
      (s = (s & 42) !== 0 ? 1 : ac(s)),
      (s & (t.suspendedLanes | n)) !== 0 ? 0 : s
    );
  }
  function ac(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function sc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Rh() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ym(t.type));
  }
  function Bh(t, n) {
    var s = G.p;
    try {
      return ((G.p = t), n());
    } finally {
      G.p = s;
    }
  }
  var hi = Math.random().toString(36).slice(2),
    _e = "__reactFiber$" + hi,
    Le = "__reactProps$" + hi,
    Ta = "__reactContainer$" + hi,
    lc = "__reactEvents$" + hi,
    K2 = "__reactListeners$" + hi,
    P2 = "__reactHandles$" + hi,
    Lh = "__reactResources$" + hi,
    zs = "__reactMarker$" + hi;
  function oc(t) {
    (delete t[_e], delete t[Le], delete t[lc], delete t[K2], delete t[P2]);
  }
  function Oa(t) {
    var n = t[_e];
    if (n) return n;
    for (var s = t.parentNode; s; ) {
      if ((n = s[Ta] || s[_e])) {
        if (
          ((s = n.alternate),
          n.child !== null || (s !== null && s.child !== null))
        )
          for (t = nm(t); t !== null; ) {
            if ((s = t[_e])) return s;
            t = nm(t);
          }
        return n;
      }
      ((t = s), (s = t.parentNode));
    }
    return null;
  }
  function Da(t) {
    if ((t = t[_e] || t[Ta])) {
      var n = t.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return t;
    }
    return null;
  }
  function ks(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(l(33));
  }
  function za(t) {
    var n = t[Lh];
    return (
      n ||
        (n = t[Lh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function be(t) {
    t[zs] = !0;
  }
  var jh = new Set(),
    Hh = {};
  function Ki(t, n) {
    (ka(t, n), ka(t + "Capture", n));
  }
  function ka(t, n) {
    for (Hh[t] = n, t = 0; t < n.length; t++) jh.add(n[t]);
  }
  var I2 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Nh = {},
    Uh = {};
  function W2(t) {
    return Gt.call(Uh, t)
      ? !0
      : Gt.call(Nh, t)
        ? !1
        : I2.test(t)
          ? (Uh[t] = !0)
          : ((Nh[t] = !0), !1);
  }
  function eo(t, n, s) {
    if (W2(n))
      if (s === null) t.removeAttribute(n);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var r = n.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + s);
      }
  }
  function no(t, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + s);
    }
  }
  function qn(t, n, s, r) {
    if (r === null) t.removeAttribute(s);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return;
      }
      t.setAttributeNS(n, s, "" + r);
    }
  }
  function rn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function qh(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function $2(t, n, s) {
    var r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (
      !t.hasOwnProperty(n) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var f = r.get,
        g = r.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (y) {
            ((s = "" + y), g.call(this, y));
          },
        }),
        Object.defineProperty(t, n, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (y) {
            s = "" + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[n]);
          },
        }
      );
    }
  }
  function rc(t) {
    if (!t._valueTracker) {
      var n = qh(t) ? "checked" : "value";
      t._valueTracker = $2(t, n, "" + t[n]);
    }
  }
  function Fh(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      r = "";
    return (
      t && (r = qh(t) ? (t.checked ? "true" : "false") : t.value),
      (t = r),
      t !== s ? (n.setValue(t), !0) : !1
    );
  }
  function io(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var J2 = /[\n"\\]/g;
  function cn(t) {
    return t.replace(J2, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function cc(t, n, s, r, f, g, y, M) {
    ((t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      n != null
        ? y === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + rn(n))
          : t.value !== "" + rn(n) && (t.value = "" + rn(n))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      n != null
        ? uc(t, y, rn(n))
        : s != null
          ? uc(t, y, rn(s))
          : r != null && t.removeAttribute("value"),
      f == null && g != null && (t.defaultChecked = !!g),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      M != null &&
      typeof M != "function" &&
      typeof M != "symbol" &&
      typeof M != "boolean"
        ? (t.name = "" + rn(M))
        : t.removeAttribute("name"));
  }
  function Yh(t, n, s, r, f, g, y, M) {
    if (
      (g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.type = g),
      n != null || s != null)
    ) {
      if (!((g !== "submit" && g !== "reset") || n != null)) {
        rc(t);
        return;
      }
      ((s = s != null ? "" + rn(s) : ""),
        (n = n != null ? "" + rn(n) : s),
        M || n === t.value || (t.value = n),
        (t.defaultValue = n));
    }
    ((r = r ?? f),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (t.checked = M ? t.checked : !!r),
      (t.defaultChecked = !!r),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y),
      rc(t));
  }
  function uc(t, n, s) {
    (n === "number" && io(t.ownerDocument) === t) ||
      t.defaultValue === "" + s ||
      (t.defaultValue = "" + s);
  }
  function Ra(t, n, s, r) {
    if (((t = t.options), n)) {
      n = {};
      for (var f = 0; f < s.length; f++) n["$" + s[f]] = !0;
      for (s = 0; s < t.length; s++)
        ((f = n.hasOwnProperty("$" + t[s].value)),
          t[s].selected !== f && (t[s].selected = f),
          f && r && (t[s].defaultSelected = !0));
    } else {
      for (s = "" + rn(s), n = null, f = 0; f < t.length; f++) {
        if (t[f].value === s) {
          ((t[f].selected = !0), r && (t[f].defaultSelected = !0));
          return;
        }
        n !== null || t[f].disabled || (n = t[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Vh(t, n, s) {
    if (
      n != null &&
      ((n = "" + rn(n)), n !== t.value && (t.value = n), s == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = s != null ? "" + rn(s) : "";
  }
  function Gh(t, n, s, r) {
    if (n == null) {
      if (r != null) {
        if (s != null) throw Error(l(92));
        if (at(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        s = r;
      }
      (s == null && (s = ""), (n = s));
    }
    ((s = rn(n)),
      (t.defaultValue = s),
      (r = t.textContent),
      r === s && r !== "" && r !== null && (t.value = r),
      rc(t));
  }
  function Ba(t, n) {
    if (n) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var ty = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Xh(t, n, s) {
    var r = n.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? r
        ? t.setProperty(n, "")
        : n === "float"
          ? (t.cssFloat = "")
          : (t[n] = "")
      : r
        ? t.setProperty(n, s)
        : typeof s != "number" || s === 0 || ty.has(n)
          ? n === "float"
            ? (t.cssFloat = s)
            : (t[n] = ("" + s).trim())
          : (t[n] = s + "px");
  }
  function Qh(t, n, s) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((t = t.style), s != null)) {
      for (var r in s)
        !s.hasOwnProperty(r) ||
          (n != null && n.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? t.setProperty(r, "")
            : r === "float"
              ? (t.cssFloat = "")
              : (t[r] = ""));
      for (var f in n)
        ((r = n[f]), n.hasOwnProperty(f) && s[f] !== r && Xh(t, f, r));
    } else for (var g in n) n.hasOwnProperty(g) && Xh(t, g, n[g]);
  }
  function fc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ey = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ny =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ao(t) {
    return ny.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Fn() {}
  var hc = null;
  function dc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var La = null,
    ja = null;
  function Zh(t) {
    var n = Da(t);
    if (n && (t = n.stateNode)) {
      var s = t[Le] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (cc(
              t,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name,
            ),
            (n = s.name),
            s.type === "radio" && n != null)
          ) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + cn("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < s.length;
              n++
            ) {
              var r = s[n];
              if (r !== t && r.form === t.form) {
                var f = r[Le] || null;
                if (!f) throw Error(l(90));
                cc(
                  r,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (n = 0; n < s.length; n++)
              ((r = s[n]), r.form === t.form && Fh(r));
          }
          break t;
        case "textarea":
          Vh(t, s.value, s.defaultValue);
          break t;
        case "select":
          ((n = s.value), n != null && Ra(t, !!s.multiple, n, !1));
      }
    }
  }
  var gc = !1;
  function Kh(t, n, s) {
    if (gc) return t(n, s);
    gc = !0;
    try {
      var r = t(n);
      return r;
    } finally {
      if (
        ((gc = !1),
        (La !== null || ja !== null) &&
          (Qo(), La && ((n = La), (t = ja), (ja = La = null), Zh(n), t)))
      )
        for (n = 0; n < t.length; n++) Zh(t[n]);
    }
  }
  function Rs(t, n) {
    var s = t.stateNode;
    if (s === null) return null;
    var r = s[Le] || null;
    if (r === null) return null;
    s = r[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((t = t.type),
          (r = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !r));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(l(231, n, typeof s));
    return s;
  }
  var Yn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    pc = !1;
  if (Yn)
    try {
      var Bs = {};
      (Object.defineProperty(Bs, "passive", {
        get: function () {
          pc = !0;
        },
      }),
        window.addEventListener("test", Bs, Bs),
        window.removeEventListener("test", Bs, Bs));
    } catch {
      pc = !1;
    }
  var di = null,
    mc = null,
    so = null;
  function Ph() {
    if (so) return so;
    var t,
      n = mc,
      s = n.length,
      r,
      f = "value" in di ? di.value : di.textContent,
      g = f.length;
    for (t = 0; t < s && n[t] === f[t]; t++);
    var y = s - t;
    for (r = 1; r <= y && n[s - r] === f[g - r]; r++);
    return (so = f.slice(t, 1 < r ? 1 - r : void 0));
  }
  function lo(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function oo() {
    return !0;
  }
  function Ih() {
    return !1;
  }
  function je(t) {
    function n(s, r, f, g, y) {
      ((this._reactName = s),
        (this._targetInst = f),
        (this.type = r),
        (this.nativeEvent = g),
        (this.target = y),
        (this.currentTarget = null));
      for (var M in t)
        t.hasOwnProperty(M) && ((s = t[M]), (this[M] = s ? s(g) : g[M]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? oo
          : Ih),
        (this.isPropagationStopped = Ih),
        this
      );
    }
    return (
      b(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = oo));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = oo));
        },
        persist: function () {},
        isPersistent: oo,
      }),
      n
    );
  }
  var Pi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ro = je(Pi),
    Ls = b({}, Pi, { view: 0, detail: 0 }),
    iy = je(Ls),
    bc,
    yc,
    js,
    co = b({}, Ls, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== js &&
              (js && t.type === "mousemove"
                ? ((bc = t.screenX - js.screenX), (yc = t.screenY - js.screenY))
                : (yc = bc = 0),
              (js = t)),
            bc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : yc;
      },
    }),
    Wh = je(co),
    ay = b({}, co, { dataTransfer: 0 }),
    sy = je(ay),
    ly = b({}, Ls, { relatedTarget: 0 }),
    vc = je(ly),
    oy = b({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ry = je(oy),
    cy = b({}, Pi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    uy = je(cy),
    fy = b({}, Pi, { data: 0 }),
    $h = je(fy),
    hy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function py(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = gy[t])
        ? !!n[t]
        : !1;
  }
  function wc() {
    return py;
  }
  var my = b({}, Ls, {
      key: function (t) {
        if (t.key) {
          var n = hy[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = lo(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? dy[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wc,
      charCode: function (t) {
        return t.type === "keypress" ? lo(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? lo(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    by = je(my),
    yy = b({}, co, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Jh = je(yy),
    vy = b({}, Ls, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wc,
    }),
    wy = je(vy),
    _y = b({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xy = je(_y),
    Sy = b({}, co, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    My = je(Sy),
    Cy = b({}, Pi, { newState: 0, oldState: 0 }),
    Ey = je(Cy),
    Ay = [9, 13, 27, 32],
    _c = Yn && "CompositionEvent" in window,
    Hs = null;
  Yn && "documentMode" in document && (Hs = document.documentMode);
  var Ty = Yn && "TextEvent" in window && !Hs,
    td = Yn && (!_c || (Hs && 8 < Hs && 11 >= Hs)),
    ed = " ",
    nd = !1;
  function id(t, n) {
    switch (t) {
      case "keyup":
        return Ay.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ad(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Ha = !1;
  function Oy(t, n) {
    switch (t) {
      case "compositionend":
        return ad(n);
      case "keypress":
        return n.which !== 32 ? null : ((nd = !0), ed);
      case "textInput":
        return ((t = n.data), t === ed && nd ? null : t);
      default:
        return null;
    }
  }
  function Dy(t, n) {
    if (Ha)
      return t === "compositionend" || (!_c && id(t, n))
        ? ((t = Ph()), (so = mc = di = null), (Ha = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return td && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!zy[t.type] : n === "textarea";
  }
  function ld(t, n, s, r) {
    (La ? (ja ? ja.push(r) : (ja = [r])) : (La = r),
      (n = Jo(n, "onChange")),
      0 < n.length &&
        ((s = new ro("onChange", "change", null, s, r)),
        t.push({ event: s, listeners: n })));
  }
  var Ns = null,
    Us = null;
  function ky(t) {
    Yp(t, 0);
  }
  function uo(t) {
    var n = ks(t);
    if (Fh(n)) return t;
  }
  function od(t, n) {
    if (t === "change") return n;
  }
  var rd = !1;
  if (Yn) {
    var xc;
    if (Yn) {
      var Sc = "oninput" in document;
      if (!Sc) {
        var cd = document.createElement("div");
        (cd.setAttribute("oninput", "return;"),
          (Sc = typeof cd.oninput == "function"));
      }
      xc = Sc;
    } else xc = !1;
    rd = xc && (!document.documentMode || 9 < document.documentMode);
  }
  function ud() {
    Ns && (Ns.detachEvent("onpropertychange", fd), (Us = Ns = null));
  }
  function fd(t) {
    if (t.propertyName === "value" && uo(Us)) {
      var n = [];
      (ld(n, Us, t, dc(t)), Kh(ky, n));
    }
  }
  function Ry(t, n, s) {
    t === "focusin"
      ? (ud(), (Ns = n), (Us = s), Ns.attachEvent("onpropertychange", fd))
      : t === "focusout" && ud();
  }
  function By(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return uo(Us);
  }
  function Ly(t, n) {
    if (t === "click") return uo(n);
  }
  function jy(t, n) {
    if (t === "input" || t === "change") return uo(n);
  }
  function Hy(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Ze = typeof Object.is == "function" ? Object.is : Hy;
  function qs(t, n) {
    if (Ze(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var s = Object.keys(t),
      r = Object.keys(n);
    if (s.length !== r.length) return !1;
    for (r = 0; r < s.length; r++) {
      var f = s[r];
      if (!Gt.call(n, f) || !Ze(t[f], n[f])) return !1;
    }
    return !0;
  }
  function hd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function dd(t, n) {
    var s = hd(t);
    t = 0;
    for (var r; s; ) {
      if (s.nodeType === 3) {
        if (((r = t + s.textContent.length), t <= n && r >= n))
          return { node: s, offset: n - t };
        t = r;
      }
      t: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break t;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = hd(s);
    }
  }
  function gd(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? gd(t, n.parentNode)
            : "contains" in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function pd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = io(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = n.contentWindow;
      else break;
      n = io(t.document);
    }
    return n;
  }
  function Mc(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ny = Yn && "documentMode" in document && 11 >= document.documentMode,
    Na = null,
    Cc = null,
    Fs = null,
    Ec = !1;
  function md(t, n, s) {
    var r =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Ec ||
      Na == null ||
      Na !== io(r) ||
      ((r = Na),
      "selectionStart" in r && Mc(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Fs && qs(Fs, r)) ||
        ((Fs = r),
        (r = Jo(Cc, "onSelect")),
        0 < r.length &&
          ((n = new ro("onSelect", "select", null, n, s)),
          t.push({ event: n, listeners: r }),
          (n.target = Na))));
  }
  function Ii(t, n) {
    var s = {};
    return (
      (s[t.toLowerCase()] = n.toLowerCase()),
      (s["Webkit" + t] = "webkit" + n),
      (s["Moz" + t] = "moz" + n),
      s
    );
  }
  var Ua = {
      animationend: Ii("Animation", "AnimationEnd"),
      animationiteration: Ii("Animation", "AnimationIteration"),
      animationstart: Ii("Animation", "AnimationStart"),
      transitionrun: Ii("Transition", "TransitionRun"),
      transitionstart: Ii("Transition", "TransitionStart"),
      transitioncancel: Ii("Transition", "TransitionCancel"),
      transitionend: Ii("Transition", "TransitionEnd"),
    },
    Ac = {},
    bd = {};
  Yn &&
    ((bd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ua.animationend.animation,
      delete Ua.animationiteration.animation,
      delete Ua.animationstart.animation),
    "TransitionEvent" in window || delete Ua.transitionend.transition);
  function Wi(t) {
    if (Ac[t]) return Ac[t];
    if (!Ua[t]) return t;
    var n = Ua[t],
      s;
    for (s in n) if (n.hasOwnProperty(s) && s in bd) return (Ac[t] = n[s]);
    return t;
  }
  var yd = Wi("animationend"),
    vd = Wi("animationiteration"),
    wd = Wi("animationstart"),
    Uy = Wi("transitionrun"),
    qy = Wi("transitionstart"),
    Fy = Wi("transitioncancel"),
    _d = Wi("transitionend"),
    xd = new Map(),
    Tc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Tc.push("scrollEnd");
  function Sn(t, n) {
    (xd.set(t, n), Ki(n, [t]));
  }
  var fo =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    un = [],
    qa = 0,
    Oc = 0;
  function ho() {
    for (var t = qa, n = (Oc = qa = 0); n < t; ) {
      var s = un[n];
      un[n++] = null;
      var r = un[n];
      un[n++] = null;
      var f = un[n];
      un[n++] = null;
      var g = un[n];
      if (((un[n++] = null), r !== null && f !== null)) {
        var y = r.pending;
        (y === null ? (f.next = f) : ((f.next = y.next), (y.next = f)),
          (r.pending = f));
      }
      g !== 0 && Sd(s, f, g);
    }
  }
  function go(t, n, s, r) {
    ((un[qa++] = t),
      (un[qa++] = n),
      (un[qa++] = s),
      (un[qa++] = r),
      (Oc |= r),
      (t.lanes |= r),
      (t = t.alternate),
      t !== null && (t.lanes |= r));
  }
  function Dc(t, n, s, r) {
    return (go(t, n, s, r), po(t));
  }
  function $i(t, n) {
    return (go(t, null, null, n), po(t));
  }
  function Sd(t, n, s) {
    t.lanes |= s;
    var r = t.alternate;
    r !== null && (r.lanes |= s);
    for (var f = !1, g = t.return; g !== null; )
      ((g.childLanes |= s),
        (r = g.alternate),
        r !== null && (r.childLanes |= s),
        g.tag === 22 &&
          ((t = g.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = g),
        (g = g.return));
    return t.tag === 3
      ? ((g = t.stateNode),
        f &&
          n !== null &&
          ((f = 31 - Qe(s)),
          (t = g.hiddenUpdates),
          (r = t[f]),
          r === null ? (t[f] = [n]) : r.push(n),
          (n.lane = s | 536870912)),
        g)
      : null;
  }
  function po(t) {
    if (50 < cl) throw ((cl = 0), (Uu = null), Error(l(185)));
    for (var n = t.return; n !== null; ) ((t = n), (n = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Fa = {};
  function Yy(t, n, s, r) {
    ((this.tag = t),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ke(t, n, s, r) {
    return new Yy(t, n, s, r);
  }
  function zc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Vn(t, n) {
    var s = t.alternate;
    return (
      s === null
        ? ((s = Ke(t.tag, n, t.key, t.mode)),
          (s.elementType = t.elementType),
          (s.type = t.type),
          (s.stateNode = t.stateNode),
          (s.alternate = t),
          (t.alternate = s))
        : ((s.pendingProps = n),
          (s.type = t.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = t.flags & 65011712),
      (s.childLanes = t.childLanes),
      (s.lanes = t.lanes),
      (s.child = t.child),
      (s.memoizedProps = t.memoizedProps),
      (s.memoizedState = t.memoizedState),
      (s.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (s.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (s.sibling = t.sibling),
      (s.index = t.index),
      (s.ref = t.ref),
      (s.refCleanup = t.refCleanup),
      s
    );
  }
  function Md(t, n) {
    t.flags &= 65011714;
    var s = t.alternate;
    return (
      s === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = s.childLanes),
          (t.lanes = s.lanes),
          (t.child = s.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = s.memoizedProps),
          (t.memoizedState = s.memoizedState),
          (t.updateQueue = s.updateQueue),
          (t.type = s.type),
          (n = s.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function mo(t, n, s, r, f, g) {
    var y = 0;
    if (((r = t), typeof t == "function")) zc(t) && (y = 1);
    else if (typeof t == "string")
      y = Z1(t, s, nt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case v:
          return ((t = Ke(31, s, n, f)), (t.elementType = v), (t.lanes = g), t);
        case E:
          return Ji(s.children, f, g, n);
        case A:
          ((y = 8), (f |= 24));
          break;
        case C:
          return (
            (t = Ke(12, s, n, f | 2)),
            (t.elementType = C),
            (t.lanes = g),
            t
          );
        case F:
          return ((t = Ke(13, s, n, f)), (t.elementType = F), (t.lanes = g), t);
        case $:
          return ((t = Ke(19, s, n, f)), (t.elementType = $), (t.lanes = g), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case tt:
                y = 10;
                break t;
              case I:
                y = 9;
                break t;
              case Z:
                y = 11;
                break t;
              case T:
                y = 14;
                break t;
              case x:
                ((y = 16), (r = null));
                break t;
            }
          ((y = 29),
            (s = Error(l(130, t === null ? "null" : typeof t, ""))),
            (r = null));
      }
    return (
      (n = Ke(y, s, n, f)),
      (n.elementType = t),
      (n.type = r),
      (n.lanes = g),
      n
    );
  }
  function Ji(t, n, s, r) {
    return ((t = Ke(7, t, r, n)), (t.lanes = s), t);
  }
  function kc(t, n, s) {
    return ((t = Ke(6, t, null, n)), (t.lanes = s), t);
  }
  function Cd(t) {
    var n = Ke(18, null, null, 0);
    return ((n.stateNode = t), n);
  }
  function Rc(t, n, s) {
    return (
      (n = Ke(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = s),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var Ed = new WeakMap();
  function fn(t, n) {
    if (typeof t == "object" && t !== null) {
      var s = Ed.get(t);
      return s !== void 0
        ? s
        : ((n = { value: t, source: n, stack: Ot(n) }), Ed.set(t, n), n);
    }
    return { value: t, source: n, stack: Ot(n) };
  }
  var Ya = [],
    Va = 0,
    bo = null,
    Ys = 0,
    hn = [],
    dn = 0,
    gi = null,
    On = 1,
    Dn = "";
  function Gn(t, n) {
    ((Ya[Va++] = Ys), (Ya[Va++] = bo), (bo = t), (Ys = n));
  }
  function Ad(t, n, s) {
    ((hn[dn++] = On), (hn[dn++] = Dn), (hn[dn++] = gi), (gi = t));
    var r = On;
    t = Dn;
    var f = 32 - Qe(r) - 1;
    ((r &= ~(1 << f)), (s += 1));
    var g = 32 - Qe(n) + f;
    if (30 < g) {
      var y = f - (f % 5);
      ((g = (r & ((1 << y) - 1)).toString(32)),
        (r >>= y),
        (f -= y),
        (On = (1 << (32 - Qe(n) + f)) | (s << f) | r),
        (Dn = g + t));
    } else ((On = (1 << g) | (s << f) | r), (Dn = t));
  }
  function Bc(t) {
    t.return !== null && (Gn(t, 1), Ad(t, 1, 0));
  }
  function Lc(t) {
    for (; t === bo; )
      ((bo = Ya[--Va]), (Ya[Va] = null), (Ys = Ya[--Va]), (Ya[Va] = null));
    for (; t === gi; )
      ((gi = hn[--dn]),
        (hn[dn] = null),
        (Dn = hn[--dn]),
        (hn[dn] = null),
        (On = hn[--dn]),
        (hn[dn] = null));
  }
  function Td(t, n) {
    ((hn[dn++] = On),
      (hn[dn++] = Dn),
      (hn[dn++] = gi),
      (On = n.id),
      (Dn = n.overflow),
      (gi = t));
  }
  var xe = null,
    Wt = null,
    At = !1,
    pi = null,
    gn = !1,
    jc = Error(l(519));
  function mi(t) {
    var n = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Vs(fn(n, t)), jc);
  }
  function Od(t) {
    var n = t.stateNode,
      s = t.type,
      r = t.memoizedProps;
    switch (((n[_e] = t), (n[Le] = r), s)) {
      case "dialog":
        (Mt("cancel", n), Mt("close", n));
        break;
      case "iframe":
      case "object":
      case "embed":
        Mt("load", n);
        break;
      case "video":
      case "audio":
        for (s = 0; s < fl.length; s++) Mt(fl[s], n);
        break;
      case "source":
        Mt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        (Mt("error", n), Mt("load", n));
        break;
      case "details":
        Mt("toggle", n);
        break;
      case "input":
        (Mt("invalid", n),
          Yh(
            n,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0,
          ));
        break;
      case "select":
        Mt("invalid", n);
        break;
      case "textarea":
        (Mt("invalid", n), Gh(n, r.value, r.defaultValue, r.children));
    }
    ((s = r.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      n.textContent === "" + s ||
      r.suppressHydrationWarning === !0 ||
      Qp(n.textContent, s)
        ? (r.popover != null && (Mt("beforetoggle", n), Mt("toggle", n)),
          r.onScroll != null && Mt("scroll", n),
          r.onScrollEnd != null && Mt("scrollend", n),
          r.onClick != null && (n.onclick = Fn),
          (n = !0))
        : (n = !1),
      n || mi(t, !0));
  }
  function Dd(t) {
    for (xe = t.return; xe; )
      switch (xe.tag) {
        case 5:
        case 31:
        case 13:
          gn = !1;
          return;
        case 27:
        case 3:
          gn = !0;
          return;
        default:
          xe = xe.return;
      }
  }
  function Ga(t) {
    if (t !== xe) return !1;
    if (!At) return (Dd(t), (At = !0), !1);
    var n = t.tag,
      s;
    if (
      ((s = n !== 3 && n !== 27) &&
        ((s = n === 5) &&
          ((s = t.type),
          (s =
            !(s !== "form" && s !== "button") || tf(t.type, t.memoizedProps))),
        (s = !s)),
      s && Wt && mi(t),
      Dd(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      Wt = em(t);
    } else if (n === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      Wt = em(t);
    } else
      n === 27
        ? ((n = Wt), Di(t.type) ? ((t = lf), (lf = null), (Wt = t)) : (Wt = n))
        : (Wt = xe ? mn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ta() {
    ((Wt = xe = null), (At = !1));
  }
  function Hc() {
    var t = pi;
    return (
      t !== null &&
        (qe === null ? (qe = t) : qe.push.apply(qe, t), (pi = null)),
      t
    );
  }
  function Vs(t) {
    pi === null ? (pi = [t]) : pi.push(t);
  }
  var Nc = O(null),
    ea = null,
    Xn = null;
  function bi(t, n, s) {
    (V(Nc, n._currentValue), (n._currentValue = s));
  }
  function Qn(t) {
    ((t._currentValue = Nc.current), k(Nc));
  }
  function Uc(t, n, s) {
    for (; t !== null; ) {
      var r = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        t === s)
      )
        break;
      t = t.return;
    }
  }
  function qc(t, n, s, r) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var g = f.dependencies;
      if (g !== null) {
        var y = f.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var M = g;
          g = f;
          for (var D = 0; D < n.length; D++)
            if (M.context === n[D]) {
              ((g.lanes |= s),
                (M = g.alternate),
                M !== null && (M.lanes |= s),
                Uc(g.return, s, t),
                r || (y = null));
              break t;
            }
          g = M.next;
        }
      } else if (f.tag === 18) {
        if (((y = f.return), y === null)) throw Error(l(341));
        ((y.lanes |= s),
          (g = y.alternate),
          g !== null && (g.lanes |= s),
          Uc(y, s, t),
          (y = null));
      } else y = f.child;
      if (y !== null) y.return = f;
      else
        for (y = f; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((f = y.sibling), f !== null)) {
            ((f.return = y.return), (y = f));
            break;
          }
          y = y.return;
        }
      f = y;
    }
  }
  function Xa(t, n, s, r) {
    t = null;
    for (var f = n, g = !1; f !== null; ) {
      if (!g) {
        if ((f.flags & 524288) !== 0) g = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var M = f.type;
          Ze(f.pendingProps.value, y.value) ||
            (t !== null ? t.push(M) : (t = [M]));
        }
      } else if (f === bt.current) {
        if (((y = f.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(ml) : (t = [ml]));
      }
      f = f.return;
    }
    (t !== null && qc(n, t, s, r), (n.flags |= 262144));
  }
  function yo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ze(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function na(t) {
    ((ea = t),
      (Xn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Se(t) {
    return zd(ea, t);
  }
  function vo(t, n) {
    return (ea === null && na(t), zd(t, n));
  }
  function zd(t, n) {
    var s = n._currentValue;
    if (((n = { context: n, memoizedValue: s, next: null }), Xn === null)) {
      if (t === null) throw Error(l(308));
      ((Xn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288));
    } else Xn = Xn.next = n;
    return s;
  }
  var Vy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (s, r) {
                  t.push(r);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                t.forEach(function (s) {
                  return s();
                }));
            };
          },
    Gy = i.unstable_scheduleCallback,
    Xy = i.unstable_NormalPriority,
    fe = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Fc() {
    return { controller: new Vy(), data: new Map(), refCount: 0 };
  }
  function Gs(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Gy(Xy, function () {
          t.controller.abort();
        }));
  }
  var Xs = null,
    Yc = 0,
    Qa = 0,
    Za = null;
  function Qy(t, n) {
    if (Xs === null) {
      var s = (Xs = []);
      ((Yc = 0),
        (Qa = Xu()),
        (Za = {
          status: "pending",
          value: void 0,
          then: function (r) {
            s.push(r);
          },
        }));
    }
    return (Yc++, n.then(kd, kd), n);
  }
  function kd() {
    if (--Yc === 0 && Xs !== null) {
      Za !== null && (Za.status = "fulfilled");
      var t = Xs;
      ((Xs = null), (Qa = 0), (Za = null));
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function Zy(t, n) {
    var s = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          s.push(f);
        },
      };
    return (
      t.then(
        function () {
          ((r.status = "fulfilled"), (r.value = n));
          for (var f = 0; f < s.length; f++) (0, s[f])(n);
        },
        function (f) {
          for (r.status = "rejected", r.reason = f, f = 0; f < s.length; f++)
            (0, s[f])(void 0);
        },
      ),
      r
    );
  }
  var Rd = j.S;
  j.S = function (t, n) {
    ((mp = Nt()),
      typeof n == "object" &&
        n !== null &&
        typeof n.then == "function" &&
        Qy(t, n),
      Rd !== null && Rd(t, n));
  };
  var ia = O(null);
  function Vc() {
    var t = ia.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function wo(t, n) {
    n === null ? V(ia, ia.current) : V(ia, n.pool);
  }
  function Bd() {
    var t = Vc();
    return t === null ? null : { parent: fe._currentValue, pool: t };
  }
  var Ka = Error(l(460)),
    Gc = Error(l(474)),
    _o = Error(l(542)),
    xo = { then: function () {} };
  function Ld(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function jd(t, n, s) {
    switch (
      ((s = t[s]),
      s === void 0 ? t.push(n) : s !== n && (n.then(Fn, Fn), (n = s)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Nd(t), t);
      default:
        if (typeof n.status == "string") n.then(Fn, Fn);
        else {
          if (((t = Kt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(l(482));
          ((t = n),
            (t.status = "pending"),
            t.then(
              function (r) {
                if (n.status === "pending") {
                  var f = n;
                  ((f.status = "fulfilled"), (f.value = r));
                }
              },
              function (r) {
                if (n.status === "pending") {
                  var f = n;
                  ((f.status = "rejected"), (f.reason = r));
                }
              },
            ));
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Nd(t), t);
        }
        throw ((sa = n), Ka);
    }
  }
  function aa(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (s) {
      throw s !== null && typeof s == "object" && typeof s.then == "function"
        ? ((sa = s), Ka)
        : s;
    }
  }
  var sa = null;
  function Hd() {
    if (sa === null) throw Error(l(459));
    var t = sa;
    return ((sa = null), t);
  }
  function Nd(t) {
    if (t === Ka || t === _o) throw Error(l(483));
  }
  var Pa = null,
    Qs = 0;
  function So(t) {
    var n = Qs;
    return ((Qs += 1), Pa === null && (Pa = []), jd(Pa, t, n));
  }
  function Zs(t, n) {
    ((n = n.props.ref), (t.ref = n !== void 0 ? n : null));
  }
  function Mo(t, n) {
    throw n.$$typeof === S
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Ud(t) {
    function n(L, z) {
      if (t) {
        var N = L.deletions;
        N === null ? ((L.deletions = [z]), (L.flags |= 16)) : N.push(z);
      }
    }
    function s(L, z) {
      if (!t) return null;
      for (; z !== null; ) (n(L, z), (z = z.sibling));
      return null;
    }
    function r(L) {
      for (var z = new Map(); L !== null; )
        (L.key !== null ? z.set(L.key, L) : z.set(L.index, L), (L = L.sibling));
      return z;
    }
    function f(L, z) {
      return ((L = Vn(L, z)), (L.index = 0), (L.sibling = null), L);
    }
    function g(L, z, N) {
      return (
        (L.index = N),
        t
          ? ((N = L.alternate),
            N !== null
              ? ((N = N.index), N < z ? ((L.flags |= 67108866), z) : N)
              : ((L.flags |= 67108866), z))
          : ((L.flags |= 1048576), z)
      );
    }
    function y(L) {
      return (t && L.alternate === null && (L.flags |= 67108866), L);
    }
    function M(L, z, N, P) {
      return z === null || z.tag !== 6
        ? ((z = kc(N, L.mode, P)), (z.return = L), z)
        : ((z = f(z, N)), (z.return = L), z);
    }
    function D(L, z, N, P) {
      var gt = N.type;
      return gt === E
        ? K(L, z, N.props.children, P, N.key)
        : z !== null &&
            (z.elementType === gt ||
              (typeof gt == "object" &&
                gt !== null &&
                gt.$$typeof === x &&
                aa(gt) === z.type))
          ? ((z = f(z, N.props)), Zs(z, N), (z.return = L), z)
          : ((z = mo(N.type, N.key, N.props, null, L.mode, P)),
            Zs(z, N),
            (z.return = L),
            z);
    }
    function q(L, z, N, P) {
      return z === null ||
        z.tag !== 4 ||
        z.stateNode.containerInfo !== N.containerInfo ||
        z.stateNode.implementation !== N.implementation
        ? ((z = Rc(N, L.mode, P)), (z.return = L), z)
        : ((z = f(z, N.children || [])), (z.return = L), z);
    }
    function K(L, z, N, P, gt) {
      return z === null || z.tag !== 7
        ? ((z = Ji(N, L.mode, P, gt)), (z.return = L), z)
        : ((z = f(z, N)), (z.return = L), z);
    }
    function W(L, z, N) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((z = kc("" + z, L.mode, N)), (z.return = L), z);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case _:
            return (
              (N = mo(z.type, z.key, z.props, null, L.mode, N)),
              Zs(N, z),
              (N.return = L),
              N
            );
          case w:
            return ((z = Rc(z, L.mode, N)), (z.return = L), z);
          case x:
            return ((z = aa(z)), W(L, z, N));
        }
        if (at(z) || B(z))
          return ((z = Ji(z, L.mode, N, null)), (z.return = L), z);
        if (typeof z.then == "function") return W(L, So(z), N);
        if (z.$$typeof === tt) return W(L, vo(L, z), N);
        Mo(L, z);
      }
      return null;
    }
    function Y(L, z, N, P) {
      var gt = z !== null ? z.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return gt !== null ? null : M(L, z, "" + N, P);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case _:
            return N.key === gt ? D(L, z, N, P) : null;
          case w:
            return N.key === gt ? q(L, z, N, P) : null;
          case x:
            return ((N = aa(N)), Y(L, z, N, P));
        }
        if (at(N) || B(N)) return gt !== null ? null : K(L, z, N, P, null);
        if (typeof N.then == "function") return Y(L, z, So(N), P);
        if (N.$$typeof === tt) return Y(L, z, vo(L, N), P);
        Mo(L, N);
      }
      return null;
    }
    function X(L, z, N, P, gt) {
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return ((L = L.get(N) || null), M(z, L, "" + P, gt));
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case _:
            return (
              (L = L.get(P.key === null ? N : P.key) || null),
              D(z, L, P, gt)
            );
          case w:
            return (
              (L = L.get(P.key === null ? N : P.key) || null),
              q(z, L, P, gt)
            );
          case x:
            return ((P = aa(P)), X(L, z, N, P, gt));
        }
        if (at(P) || B(P))
          return ((L = L.get(N) || null), K(z, L, P, gt, null));
        if (typeof P.then == "function") return X(L, z, N, So(P), gt);
        if (P.$$typeof === tt) return X(L, z, N, vo(z, P), gt);
        Mo(z, P);
      }
      return null;
    }
    function ct(L, z, N, P) {
      for (
        var gt = null, kt = null, ut = z, xt = (z = 0), Et = null;
        ut !== null && xt < N.length;
        xt++
      ) {
        ut.index > xt ? ((Et = ut), (ut = null)) : (Et = ut.sibling);
        var Rt = Y(L, ut, N[xt], P);
        if (Rt === null) {
          ut === null && (ut = Et);
          break;
        }
        (t && ut && Rt.alternate === null && n(L, ut),
          (z = g(Rt, z, xt)),
          kt === null ? (gt = Rt) : (kt.sibling = Rt),
          (kt = Rt),
          (ut = Et));
      }
      if (xt === N.length) return (s(L, ut), At && Gn(L, xt), gt);
      if (ut === null) {
        for (; xt < N.length; xt++)
          ((ut = W(L, N[xt], P)),
            ut !== null &&
              ((z = g(ut, z, xt)),
              kt === null ? (gt = ut) : (kt.sibling = ut),
              (kt = ut)));
        return (At && Gn(L, xt), gt);
      }
      for (ut = r(ut); xt < N.length; xt++)
        ((Et = X(ut, L, xt, N[xt], P)),
          Et !== null &&
            (t &&
              Et.alternate !== null &&
              ut.delete(Et.key === null ? xt : Et.key),
            (z = g(Et, z, xt)),
            kt === null ? (gt = Et) : (kt.sibling = Et),
            (kt = Et)));
      return (
        t &&
          ut.forEach(function (Li) {
            return n(L, Li);
          }),
        At && Gn(L, xt),
        gt
      );
    }
    function mt(L, z, N, P) {
      if (N == null) throw Error(l(151));
      for (
        var gt = null,
          kt = null,
          ut = z,
          xt = (z = 0),
          Et = null,
          Rt = N.next();
        ut !== null && !Rt.done;
        xt++, Rt = N.next()
      ) {
        ut.index > xt ? ((Et = ut), (ut = null)) : (Et = ut.sibling);
        var Li = Y(L, ut, Rt.value, P);
        if (Li === null) {
          ut === null && (ut = Et);
          break;
        }
        (t && ut && Li.alternate === null && n(L, ut),
          (z = g(Li, z, xt)),
          kt === null ? (gt = Li) : (kt.sibling = Li),
          (kt = Li),
          (ut = Et));
      }
      if (Rt.done) return (s(L, ut), At && Gn(L, xt), gt);
      if (ut === null) {
        for (; !Rt.done; xt++, Rt = N.next())
          ((Rt = W(L, Rt.value, P)),
            Rt !== null &&
              ((z = g(Rt, z, xt)),
              kt === null ? (gt = Rt) : (kt.sibling = Rt),
              (kt = Rt)));
        return (At && Gn(L, xt), gt);
      }
      for (ut = r(ut); !Rt.done; xt++, Rt = N.next())
        ((Rt = X(ut, L, xt, Rt.value, P)),
          Rt !== null &&
            (t &&
              Rt.alternate !== null &&
              ut.delete(Rt.key === null ? xt : Rt.key),
            (z = g(Rt, z, xt)),
            kt === null ? (gt = Rt) : (kt.sibling = Rt),
            (kt = Rt)));
      return (
        t &&
          ut.forEach(function (av) {
            return n(L, av);
          }),
        At && Gn(L, xt),
        gt
      );
    }
    function Zt(L, z, N, P) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === E &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case _:
            t: {
              for (var gt = N.key; z !== null; ) {
                if (z.key === gt) {
                  if (((gt = N.type), gt === E)) {
                    if (z.tag === 7) {
                      (s(L, z.sibling),
                        (P = f(z, N.props.children)),
                        (P.return = L),
                        (L = P));
                      break t;
                    }
                  } else if (
                    z.elementType === gt ||
                    (typeof gt == "object" &&
                      gt !== null &&
                      gt.$$typeof === x &&
                      aa(gt) === z.type)
                  ) {
                    (s(L, z.sibling),
                      (P = f(z, N.props)),
                      Zs(P, N),
                      (P.return = L),
                      (L = P));
                    break t;
                  }
                  s(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              N.type === E
                ? ((P = Ji(N.props.children, L.mode, P, N.key)),
                  (P.return = L),
                  (L = P))
                : ((P = mo(N.type, N.key, N.props, null, L.mode, P)),
                  Zs(P, N),
                  (P.return = L),
                  (L = P));
            }
            return y(L);
          case w:
            t: {
              for (gt = N.key; z !== null; ) {
                if (z.key === gt)
                  if (
                    z.tag === 4 &&
                    z.stateNode.containerInfo === N.containerInfo &&
                    z.stateNode.implementation === N.implementation
                  ) {
                    (s(L, z.sibling),
                      (P = f(z, N.children || [])),
                      (P.return = L),
                      (L = P));
                    break t;
                  } else {
                    s(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              ((P = Rc(N, L.mode, P)), (P.return = L), (L = P));
            }
            return y(L);
          case x:
            return ((N = aa(N)), Zt(L, z, N, P));
        }
        if (at(N)) return ct(L, z, N, P);
        if (B(N)) {
          if (((gt = B(N)), typeof gt != "function")) throw Error(l(150));
          return ((N = gt.call(N)), mt(L, z, N, P));
        }
        if (typeof N.then == "function") return Zt(L, z, So(N), P);
        if (N.$$typeof === tt) return Zt(L, z, vo(L, N), P);
        Mo(L, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          z !== null && z.tag === 6
            ? (s(L, z.sibling), (P = f(z, N)), (P.return = L), (L = P))
            : (s(L, z), (P = kc(N, L.mode, P)), (P.return = L), (L = P)),
          y(L))
        : s(L, z);
    }
    return function (L, z, N, P) {
      try {
        Qs = 0;
        var gt = Zt(L, z, N, P);
        return ((Pa = null), gt);
      } catch (ut) {
        if (ut === Ka || ut === _o) throw ut;
        var kt = Ke(29, ut, null, L.mode);
        return ((kt.lanes = P), (kt.return = L), kt);
      } finally {
      }
    };
  }
  var la = Ud(!0),
    qd = Ud(!1),
    yi = !1;
  function Xc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Qc(t, n) {
    ((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function vi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wi(t, n, s) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Bt & 2) !== 0)) {
      var f = r.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (r.pending = n),
        (n = po(t)),
        Sd(t, null, s),
        n
      );
    }
    return (go(t, r, n, s), po(t));
  }
  function Ks(t, n, s) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194048) !== 0))
    ) {
      var r = n.lanes;
      ((r &= t.pendingLanes), (s |= r), (n.lanes = s), zh(t, s));
    }
  }
  function Zc(t, n) {
    var s = t.updateQueue,
      r = t.alternate;
    if (r !== null && ((r = r.updateQueue), s === r)) {
      var f = null,
        g = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var y = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          (g === null ? (f = g = y) : (g = g.next = y), (s = s.next));
        } while (s !== null);
        g === null ? (f = g = n) : (g = g.next = n);
      } else f = g = n;
      ((s = {
        baseState: r.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: g,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (t.updateQueue = s));
      return;
    }
    ((t = s.lastBaseUpdate),
      t === null ? (s.firstBaseUpdate = n) : (t.next = n),
      (s.lastBaseUpdate = n));
  }
  var Kc = !1;
  function Ps() {
    if (Kc) {
      var t = Za;
      if (t !== null) throw t;
    }
  }
  function Is(t, n, s, r) {
    Kc = !1;
    var f = t.updateQueue;
    yi = !1;
    var g = f.firstBaseUpdate,
      y = f.lastBaseUpdate,
      M = f.shared.pending;
    if (M !== null) {
      f.shared.pending = null;
      var D = M,
        q = D.next;
      ((D.next = null), y === null ? (g = q) : (y.next = q), (y = D));
      var K = t.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (M = K.lastBaseUpdate),
        M !== y &&
          (M === null ? (K.firstBaseUpdate = q) : (M.next = q),
          (K.lastBaseUpdate = D)));
    }
    if (g !== null) {
      var W = f.baseState;
      ((y = 0), (K = q = D = null), (M = g));
      do {
        var Y = M.lane & -536870913,
          X = Y !== M.lane;
        if (X ? (Ct & Y) === Y : (r & Y) === Y) {
          (Y !== 0 && Y === Qa && (Kc = !0),
            K !== null &&
              (K = K.next =
                {
                  lane: 0,
                  tag: M.tag,
                  payload: M.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var ct = t,
              mt = M;
            Y = n;
            var Zt = s;
            switch (mt.tag) {
              case 1:
                if (((ct = mt.payload), typeof ct == "function")) {
                  W = ct.call(Zt, W, Y);
                  break t;
                }
                W = ct;
                break t;
              case 3:
                ct.flags = (ct.flags & -65537) | 128;
              case 0:
                if (
                  ((ct = mt.payload),
                  (Y = typeof ct == "function" ? ct.call(Zt, W, Y) : ct),
                  Y == null)
                )
                  break t;
                W = b({}, W, Y);
                break t;
              case 2:
                yi = !0;
            }
          }
          ((Y = M.callback),
            Y !== null &&
              ((t.flags |= 64),
              X && (t.flags |= 8192),
              (X = f.callbacks),
              X === null ? (f.callbacks = [Y]) : X.push(Y)));
        } else
          ((X = {
            lane: Y,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null,
          }),
            K === null ? ((q = K = X), (D = W)) : (K = K.next = X),
            (y |= Y));
        if (((M = M.next), M === null)) {
          if (((M = f.shared.pending), M === null)) break;
          ((X = M),
            (M = X.next),
            (X.next = null),
            (f.lastBaseUpdate = X),
            (f.shared.pending = null));
        }
      } while (!0);
      (K === null && (D = W),
        (f.baseState = D),
        (f.firstBaseUpdate = q),
        (f.lastBaseUpdate = K),
        g === null && (f.shared.lanes = 0),
        (Ci |= y),
        (t.lanes = y),
        (t.memoizedState = W));
    }
  }
  function Fd(t, n) {
    if (typeof t != "function") throw Error(l(191, t));
    t.call(n);
  }
  function Yd(t, n) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null, t = 0; t < s.length; t++) Fd(s[t], n);
  }
  var Ia = O(null),
    Co = O(0);
  function Vd(t, n) {
    ((t = ei), V(Co, t), V(Ia, n), (ei = t | n.baseLanes));
  }
  function Pc() {
    (V(Co, ei), V(Ia, Ia.current));
  }
  function Ic() {
    ((ei = Co.current), k(Ia), k(Co));
  }
  var Pe = O(null),
    pn = null;
  function _i(t) {
    var n = t.alternate;
    (V(le, le.current & 1),
      V(Pe, t),
      pn === null &&
        (n === null || Ia.current !== null || n.memoizedState !== null) &&
        (pn = t));
  }
  function Wc(t) {
    (V(le, le.current), V(Pe, t), pn === null && (pn = t));
  }
  function Gd(t) {
    t.tag === 22
      ? (V(le, le.current), V(Pe, t), pn === null && (pn = t))
      : xi();
  }
  function xi() {
    (V(le, le.current), V(Pe, Pe.current));
  }
  function Ie(t) {
    (k(Pe), pn === t && (pn = null), k(le));
  }
  var le = O(0);
  function Eo(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (s !== null && ((s = s.dehydrated), s === null || af(s) || sf(s)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === "forwards" ||
          n.memoizedProps.revealOrder === "backwards" ||
          n.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          n.memoizedProps.revealOrder === "together")
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var Zn = 0,
    wt = null,
    Xt = null,
    he = null,
    Ao = !1,
    Wa = !1,
    oa = !1,
    To = 0,
    Ws = 0,
    $a = null,
    Ky = 0;
  function ne() {
    throw Error(l(321));
  }
  function $c(t, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < t.length; s++)
      if (!Ze(t[s], n[s])) return !1;
    return !0;
  }
  function Jc(t, n, s, r, f, g) {
    return (
      (Zn = g),
      (wt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? Ag : gu),
      (oa = !1),
      (g = s(r, f)),
      (oa = !1),
      Wa && (g = Qd(n, s, r, f)),
      Xd(t),
      g
    );
  }
  function Xd(t) {
    j.H = tl;
    var n = Xt !== null && Xt.next !== null;
    if (((Zn = 0), (he = Xt = wt = null), (Ao = !1), (Ws = 0), ($a = null), n))
      throw Error(l(300));
    t === null ||
      de ||
      ((t = t.dependencies), t !== null && yo(t) && (de = !0));
  }
  function Qd(t, n, s, r) {
    wt = t;
    var f = 0;
    do {
      if ((Wa && ($a = null), (Ws = 0), (Wa = !1), 25 <= f))
        throw Error(l(301));
      if (((f += 1), (he = Xt = null), t.updateQueue != null)) {
        var g = t.updateQueue;
        ((g.lastEffect = null),
          (g.events = null),
          (g.stores = null),
          g.memoCache != null && (g.memoCache.index = 0));
      }
      ((j.H = Tg), (g = n(s, r)));
    } while (Wa);
    return g;
  }
  function Py() {
    var t = j.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? $s(n) : n),
      (t = t.useState()[0]),
      (Xt !== null ? Xt.memoizedState : null) !== t && (wt.flags |= 1024),
      n
    );
  }
  function tu() {
    var t = To !== 0;
    return ((To = 0), t);
  }
  function eu(t, n, s) {
    ((n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~s));
  }
  function nu(t) {
    if (Ao) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        (n !== null && (n.pending = null), (t = t.next));
      }
      Ao = !1;
    }
    ((Zn = 0), (he = Xt = wt = null), (Wa = !1), (Ws = To = 0), ($a = null));
  }
  function ze() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (he === null ? (wt.memoizedState = he = t) : (he = he.next = t), he);
  }
  function oe() {
    if (Xt === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Xt.next;
    var n = he === null ? wt.memoizedState : he.next;
    if (n !== null) ((he = n), (Xt = t));
    else {
      if (t === null)
        throw wt.alternate === null ? Error(l(467)) : Error(l(310));
      ((Xt = t),
        (t = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        he === null ? (wt.memoizedState = he = t) : (he = he.next = t));
    }
    return he;
  }
  function Oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $s(t) {
    var n = Ws;
    return (
      (Ws += 1),
      $a === null && ($a = []),
      (t = jd($a, t, n)),
      (n = wt),
      (he === null ? n.memoizedState : he.next) === null &&
        ((n = n.alternate),
        (j.H = n === null || n.memoizedState === null ? Ag : gu)),
      t
    );
  }
  function Do(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $s(t);
      if (t.$$typeof === tt) return Se(t);
    }
    throw Error(l(438, String(t)));
  }
  function iu(t) {
    var n = null,
      s = wt.updateQueue;
    if ((s !== null && (n = s.memoCache), n == null)) {
      var r = wt.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (n = {
              data: r.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      s === null && ((s = Oo()), (wt.updateQueue = s)),
      (s.memoCache = n),
      (s = n.data[n.index]),
      s === void 0)
    )
      for (s = n.data[n.index] = Array(t), r = 0; r < t; r++) s[r] = H;
    return (n.index++, s);
  }
  function Kn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function zo(t) {
    var n = oe();
    return au(n, Xt, t);
  }
  function au(t, n, s) {
    var r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = s;
    var f = t.baseQueue,
      g = r.pending;
    if (g !== null) {
      if (f !== null) {
        var y = f.next;
        ((f.next = g.next), (g.next = y));
      }
      ((n.baseQueue = f = g), (r.pending = null));
    }
    if (((g = t.baseState), f === null)) t.memoizedState = g;
    else {
      n = f.next;
      var M = (y = null),
        D = null,
        q = n,
        K = !1;
      do {
        var W = q.lane & -536870913;
        if (W !== q.lane ? (Ct & W) === W : (Zn & W) === W) {
          var Y = q.revertLane;
          if (Y === 0)
            (D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: q.action,
                  hasEagerState: q.hasEagerState,
                  eagerState: q.eagerState,
                  next: null,
                }),
              W === Qa && (K = !0));
          else if ((Zn & Y) === Y) {
            ((q = q.next), Y === Qa && (K = !0));
            continue;
          } else
            ((W = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null,
            }),
              D === null ? ((M = D = W), (y = g)) : (D = D.next = W),
              (wt.lanes |= Y),
              (Ci |= Y));
          ((W = q.action),
            oa && s(g, W),
            (g = q.hasEagerState ? q.eagerState : s(g, W)));
        } else
          ((Y = {
            lane: W,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null,
          }),
            D === null ? ((M = D = Y), (y = g)) : (D = D.next = Y),
            (wt.lanes |= W),
            (Ci |= W));
        q = q.next;
      } while (q !== null && q !== n);
      if (
        (D === null ? (y = g) : (D.next = M),
        !Ze(g, t.memoizedState) && ((de = !0), K && ((s = Za), s !== null)))
      )
        throw s;
      ((t.memoizedState = g),
        (t.baseState = y),
        (t.baseQueue = D),
        (r.lastRenderedState = g));
    }
    return (f === null && (r.lanes = 0), [t.memoizedState, r.dispatch]);
  }
  function su(t) {
    var n = oe(),
      s = n.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = t;
    var r = s.dispatch,
      f = s.pending,
      g = n.memoizedState;
    if (f !== null) {
      s.pending = null;
      var y = (f = f.next);
      do ((g = t(g, y.action)), (y = y.next));
      while (y !== f);
      (Ze(g, n.memoizedState) || (de = !0),
        (n.memoizedState = g),
        n.baseQueue === null && (n.baseState = g),
        (s.lastRenderedState = g));
    }
    return [g, r];
  }
  function Zd(t, n, s) {
    var r = wt,
      f = oe(),
      g = At;
    if (g) {
      if (s === void 0) throw Error(l(407));
      s = s();
    } else s = n();
    var y = !Ze((Xt || f).memoizedState, s);
    if (
      (y && ((f.memoizedState = s), (de = !0)),
      (f = f.queue),
      ru(Id.bind(null, r, f, t), [t]),
      f.getSnapshot !== n || y || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Ja(9, { destroy: void 0 }, Pd.bind(null, r, f, s, n), null),
        Kt === null)
      )
        throw Error(l(349));
      g || (Zn & 127) !== 0 || Kd(r, n, s);
    }
    return s;
  }
  function Kd(t, n, s) {
    ((t.flags |= 16384),
      (t = { getSnapshot: n, value: s }),
      (n = wt.updateQueue),
      n === null
        ? ((n = Oo()), (wt.updateQueue = n), (n.stores = [t]))
        : ((s = n.stores), s === null ? (n.stores = [t]) : s.push(t)));
  }
  function Pd(t, n, s, r) {
    ((n.value = s), (n.getSnapshot = r), Wd(n) && $d(t));
  }
  function Id(t, n, s) {
    return s(function () {
      Wd(n) && $d(t);
    });
  }
  function Wd(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var s = n();
      return !Ze(t, s);
    } catch {
      return !0;
    }
  }
  function $d(t) {
    var n = $i(t, 2);
    n !== null && Fe(n, t, 2);
  }
  function lu(t) {
    var n = ze();
    if (typeof t == "function") {
      var s = t;
      if (((t = s()), oa)) {
        fi(!0);
        try {
          s();
        } finally {
          fi(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Jd(t, n, s, r) {
    return ((t.baseState = s), au(t, Xt, typeof r == "function" ? r : Kn));
  }
  function Iy(t, n, s, r, f) {
    if (Bo(t)) throw Error(l(485));
    if (((t = n.action), t !== null)) {
      var g = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          g.listeners.push(y);
        },
      };
      (j.T !== null ? s(!0) : (g.isTransition = !1),
        r(g),
        (s = n.pending),
        s === null
          ? ((g.next = n.pending = g), tg(n, g))
          : ((g.next = s.next), (n.pending = s.next = g)));
    }
  }
  function tg(t, n) {
    var s = n.action,
      r = n.payload,
      f = t.state;
    if (n.isTransition) {
      var g = j.T,
        y = {};
      j.T = y;
      try {
        var M = s(f, r),
          D = j.S;
        (D !== null && D(y, M), eg(t, n, M));
      } catch (q) {
        ou(t, n, q);
      } finally {
        (g !== null && y.types !== null && (g.types = y.types), (j.T = g));
      }
    } else
      try {
        ((g = s(f, r)), eg(t, n, g));
      } catch (q) {
        ou(t, n, q);
      }
  }
  function eg(t, n, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (r) {
            ng(t, n, r);
          },
          function (r) {
            return ou(t, n, r);
          },
        )
      : ng(t, n, s);
  }
  function ng(t, n, s) {
    ((n.status = "fulfilled"),
      (n.value = s),
      ig(n),
      (t.state = s),
      (n = t.pending),
      n !== null &&
        ((s = n.next),
        s === n ? (t.pending = null) : ((s = s.next), (n.next = s), tg(t, s))));
  }
  function ou(t, n, s) {
    var r = t.pending;
    if (((t.pending = null), r !== null)) {
      r = r.next;
      do ((n.status = "rejected"), (n.reason = s), ig(n), (n = n.next));
      while (n !== r);
    }
    t.action = null;
  }
  function ig(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function ag(t, n) {
    return n;
  }
  function sg(t, n) {
    if (At) {
      var s = Kt.formState;
      if (s !== null) {
        t: {
          var r = wt;
          if (At) {
            if (Wt) {
              e: {
                for (var f = Wt, g = gn; f.nodeType !== 8; ) {
                  if (!g) {
                    f = null;
                    break e;
                  }
                  if (((f = mn(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                ((g = f.data), (f = g === "F!" || g === "F" ? f : null));
              }
              if (f) {
                ((Wt = mn(f.nextSibling)), (r = f.data === "F!"));
                break t;
              }
            }
            mi(r);
          }
          r = !1;
        }
        r && (n = s[0]);
      }
    }
    return (
      (s = ze()),
      (s.memoizedState = s.baseState = n),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ag,
        lastRenderedState: n,
      }),
      (s.queue = r),
      (s = Mg.bind(null, wt, r)),
      (r.dispatch = s),
      (r = lu(!1)),
      (g = du.bind(null, wt, !1, r.queue)),
      (r = ze()),
      (f = { state: n, dispatch: null, action: t, pending: null }),
      (r.queue = f),
      (s = Iy.bind(null, wt, f, g, s)),
      (f.dispatch = s),
      (r.memoizedState = t),
      [n, s, !1]
    );
  }
  function lg(t) {
    var n = oe();
    return og(n, Xt, t);
  }
  function og(t, n, s) {
    if (
      ((n = au(t, n, ag)[0]),
      (t = zo(Kn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var r = $s(n);
      } catch (y) {
        throw y === Ka ? _o : y;
      }
    else r = n;
    n = oe();
    var f = n.queue,
      g = f.dispatch;
    return (
      s !== n.memoizedState &&
        ((wt.flags |= 2048),
        Ja(9, { destroy: void 0 }, Wy.bind(null, f, s), null)),
      [r, g, t]
    );
  }
  function Wy(t, n) {
    t.action = n;
  }
  function rg(t) {
    var n = oe(),
      s = Xt;
    if (s !== null) return og(n, s, t);
    (oe(), (n = n.memoizedState), (s = oe()));
    var r = s.queue.dispatch;
    return ((s.memoizedState = t), [n, r, !1]);
  }
  function Ja(t, n, s, r) {
    return (
      (t = { tag: t, create: s, deps: r, inst: n, next: null }),
      (n = wt.updateQueue),
      n === null && ((n = Oo()), (wt.updateQueue = n)),
      (s = n.lastEffect),
      s === null
        ? (n.lastEffect = t.next = t)
        : ((r = s.next), (s.next = t), (t.next = r), (n.lastEffect = t)),
      t
    );
  }
  function cg() {
    return oe().memoizedState;
  }
  function ko(t, n, s, r) {
    var f = ze();
    ((wt.flags |= t),
      (f.memoizedState = Ja(
        1 | n,
        { destroy: void 0 },
        s,
        r === void 0 ? null : r,
      )));
  }
  function Ro(t, n, s, r) {
    var f = oe();
    r = r === void 0 ? null : r;
    var g = f.memoizedState.inst;
    Xt !== null && r !== null && $c(r, Xt.memoizedState.deps)
      ? (f.memoizedState = Ja(n, g, s, r))
      : ((wt.flags |= t), (f.memoizedState = Ja(1 | n, g, s, r)));
  }
  function ug(t, n) {
    ko(8390656, 8, t, n);
  }
  function ru(t, n) {
    Ro(2048, 8, t, n);
  }
  function $y(t) {
    wt.flags |= 4;
    var n = wt.updateQueue;
    if (n === null) ((n = Oo()), (wt.updateQueue = n), (n.events = [t]));
    else {
      var s = n.events;
      s === null ? (n.events = [t]) : s.push(t);
    }
  }
  function fg(t) {
    var n = oe().memoizedState;
    return (
      $y({ ref: n, nextImpl: t }),
      function () {
        if ((Bt & 2) !== 0) throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function hg(t, n) {
    return Ro(4, 2, t, n);
  }
  function dg(t, n) {
    return Ro(4, 4, t, n);
  }
  function gg(t, n) {
    if (typeof n == "function") {
      t = t();
      var s = n(t);
      return function () {
        typeof s == "function" ? s() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function pg(t, n, s) {
    ((s = s != null ? s.concat([t]) : null), Ro(4, 4, gg.bind(null, n, t), s));
  }
  function cu() {}
  function mg(t, n) {
    var s = oe();
    n = n === void 0 ? null : n;
    var r = s.memoizedState;
    return n !== null && $c(n, r[1]) ? r[0] : ((s.memoizedState = [t, n]), t);
  }
  function bg(t, n) {
    var s = oe();
    n = n === void 0 ? null : n;
    var r = s.memoizedState;
    if (n !== null && $c(n, r[1])) return r[0];
    if (((r = t()), oa)) {
      fi(!0);
      try {
        t();
      } finally {
        fi(!1);
      }
    }
    return ((s.memoizedState = [r, n]), r);
  }
  function uu(t, n, s) {
    return s === void 0 || ((Zn & 1073741824) !== 0 && (Ct & 261930) === 0)
      ? (t.memoizedState = n)
      : ((t.memoizedState = s), (t = yp()), (wt.lanes |= t), (Ci |= t), s);
  }
  function yg(t, n, s, r) {
    return Ze(s, n)
      ? s
      : Ia.current !== null
        ? ((t = uu(t, s, r)), Ze(t, n) || (de = !0), t)
        : (Zn & 42) === 0 || ((Zn & 1073741824) !== 0 && (Ct & 261930) === 0)
          ? ((de = !0), (t.memoizedState = s))
          : ((t = yp()), (wt.lanes |= t), (Ci |= t), n);
  }
  function vg(t, n, s, r, f) {
    var g = G.p;
    G.p = g !== 0 && 8 > g ? g : 8;
    var y = j.T,
      M = {};
    ((j.T = M), du(t, !1, n, s));
    try {
      var D = f(),
        q = j.S;
      if (
        (q !== null && q(M, D),
        D !== null && typeof D == "object" && typeof D.then == "function")
      ) {
        var K = Zy(D, r);
        Js(t, n, K, Je(t));
      } else Js(t, n, r, Je(t));
    } catch (W) {
      Js(t, n, { then: function () {}, status: "rejected", reason: W }, Je());
    } finally {
      ((G.p = g),
        y !== null && M.types !== null && (y.types = M.types),
        (j.T = y));
    }
  }
  function Jy() {}
  function fu(t, n, s, r) {
    if (t.tag !== 5) throw Error(l(476));
    var f = wg(t).queue;
    vg(
      t,
      f,
      n,
      et,
      s === null
        ? Jy
        : function () {
            return (_g(t), s(r));
          },
    );
  }
  function wg(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: et,
      },
      next: null,
    };
    var s = {};
    return (
      (n.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Kn,
          lastRenderedState: s,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function _g(t) {
    var n = wg(t);
    (n.next === null && (n = t.alternate.memoizedState),
      Js(t, n.next.queue, {}, Je()));
  }
  function hu() {
    return Se(ml);
  }
  function xg() {
    return oe().memoizedState;
  }
  function Sg() {
    return oe().memoizedState;
  }
  function t1(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var s = Je();
          t = vi(s);
          var r = wi(n, t, s);
          (r !== null && (Fe(r, n, s), Ks(r, n, s)),
            (n = { cache: Fc() }),
            (t.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function e1(t, n, s) {
    var r = Je();
    ((s = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Bo(t)
        ? Cg(n, s)
        : ((s = Dc(t, n, s, r)), s !== null && (Fe(s, t, r), Eg(s, n, r))));
  }
  function Mg(t, n, s) {
    var r = Je();
    Js(t, n, s, r);
  }
  function Js(t, n, s, r) {
    var f = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Bo(t)) Cg(n, f);
    else {
      var g = t.alternate;
      if (
        t.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = n.lastRenderedReducer), g !== null)
      )
        try {
          var y = n.lastRenderedState,
            M = g(y, s);
          if (((f.hasEagerState = !0), (f.eagerState = M), Ze(M, y)))
            return (go(t, n, f, 0), Kt === null && ho(), !1);
        } catch {
        } finally {
        }
      if (((s = Dc(t, n, f, r)), s !== null))
        return (Fe(s, t, r), Eg(s, n, r), !0);
    }
    return !1;
  }
  function du(t, n, s, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: Xu(),
        gesture: null,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bo(t))
    ) {
      if (n) throw Error(l(479));
    } else ((n = Dc(t, s, r, 2)), n !== null && Fe(n, t, 2));
  }
  function Bo(t) {
    var n = t.alternate;
    return t === wt || (n !== null && n === wt);
  }
  function Cg(t, n) {
    Wa = Ao = !0;
    var s = t.pending;
    (s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
      (t.pending = n));
  }
  function Eg(t, n, s) {
    if ((s & 4194048) !== 0) {
      var r = n.lanes;
      ((r &= t.pendingLanes), (s |= r), (n.lanes = s), zh(t, s));
    }
  }
  var tl = {
    readContext: Se,
    use: Do,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useLayoutEffect: ne,
    useInsertionEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useSyncExternalStore: ne,
    useId: ne,
    useHostTransitionStatus: ne,
    useFormState: ne,
    useActionState: ne,
    useOptimistic: ne,
    useMemoCache: ne,
    useCacheRefresh: ne,
  };
  tl.useEffectEvent = ne;
  var Ag = {
      readContext: Se,
      use: Do,
      useCallback: function (t, n) {
        return ((ze().memoizedState = [t, n === void 0 ? null : n]), t);
      },
      useContext: Se,
      useEffect: ug,
      useImperativeHandle: function (t, n, s) {
        ((s = s != null ? s.concat([t]) : null),
          ko(4194308, 4, gg.bind(null, n, t), s));
      },
      useLayoutEffect: function (t, n) {
        return ko(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        ko(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var s = ze();
        n = n === void 0 ? null : n;
        var r = t();
        if (oa) {
          fi(!0);
          try {
            t();
          } finally {
            fi(!1);
          }
        }
        return ((s.memoizedState = [r, n]), r);
      },
      useReducer: function (t, n, s) {
        var r = ze();
        if (s !== void 0) {
          var f = s(n);
          if (oa) {
            fi(!0);
            try {
              s(n);
            } finally {
              fi(!1);
            }
          }
        } else f = n;
        return (
          (r.memoizedState = r.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (r.queue = t),
          (t = t.dispatch = e1.bind(null, wt, t)),
          [r.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = ze();
        return ((t = { current: t }), (n.memoizedState = t));
      },
      useState: function (t) {
        t = lu(t);
        var n = t.queue,
          s = Mg.bind(null, wt, n);
        return ((n.dispatch = s), [t.memoizedState, s]);
      },
      useDebugValue: cu,
      useDeferredValue: function (t, n) {
        var s = ze();
        return uu(s, t, n);
      },
      useTransition: function () {
        var t = lu(!1);
        return (
          (t = vg.bind(null, wt, t.queue, !0, !1)),
          (ze().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, s) {
        var r = wt,
          f = ze();
        if (At) {
          if (s === void 0) throw Error(l(407));
          s = s();
        } else {
          if (((s = n()), Kt === null)) throw Error(l(349));
          (Ct & 127) !== 0 || Kd(r, n, s);
        }
        f.memoizedState = s;
        var g = { value: s, getSnapshot: n };
        return (
          (f.queue = g),
          ug(Id.bind(null, r, g, t), [t]),
          (r.flags |= 2048),
          Ja(9, { destroy: void 0 }, Pd.bind(null, r, g, s, n), null),
          s
        );
      },
      useId: function () {
        var t = ze(),
          n = Kt.identifierPrefix;
        if (At) {
          var s = Dn,
            r = On;
          ((s = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + s),
            (n = "_" + n + "R_" + s),
            (s = To++),
            0 < s && (n += "H" + s.toString(32)),
            (n += "_"));
        } else ((s = Ky++), (n = "_" + n + "r_" + s.toString(32) + "_"));
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: hu,
      useFormState: sg,
      useActionState: sg,
      useOptimistic: function (t) {
        var n = ze();
        n.memoizedState = n.baseState = t;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = s),
          (n = du.bind(null, wt, !0, s)),
          (s.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: iu,
      useCacheRefresh: function () {
        return (ze().memoizedState = t1.bind(null, wt));
      },
      useEffectEvent: function (t) {
        var n = ze(),
          s = { impl: t };
        return (
          (n.memoizedState = s),
          function () {
            if ((Bt & 2) !== 0) throw Error(l(440));
            return s.impl.apply(void 0, arguments);
          }
        );
      },
    },
    gu = {
      readContext: Se,
      use: Do,
      useCallback: mg,
      useContext: Se,
      useEffect: ru,
      useImperativeHandle: pg,
      useInsertionEffect: hg,
      useLayoutEffect: dg,
      useMemo: bg,
      useReducer: zo,
      useRef: cg,
      useState: function () {
        return zo(Kn);
      },
      useDebugValue: cu,
      useDeferredValue: function (t, n) {
        var s = oe();
        return yg(s, Xt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = zo(Kn)[0],
          n = oe().memoizedState;
        return [typeof t == "boolean" ? t : $s(t), n];
      },
      useSyncExternalStore: Zd,
      useId: xg,
      useHostTransitionStatus: hu,
      useFormState: lg,
      useActionState: lg,
      useOptimistic: function (t, n) {
        var s = oe();
        return Jd(s, Xt, t, n);
      },
      useMemoCache: iu,
      useCacheRefresh: Sg,
    };
  gu.useEffectEvent = fg;
  var Tg = {
    readContext: Se,
    use: Do,
    useCallback: mg,
    useContext: Se,
    useEffect: ru,
    useImperativeHandle: pg,
    useInsertionEffect: hg,
    useLayoutEffect: dg,
    useMemo: bg,
    useReducer: su,
    useRef: cg,
    useState: function () {
      return su(Kn);
    },
    useDebugValue: cu,
    useDeferredValue: function (t, n) {
      var s = oe();
      return Xt === null ? uu(s, t, n) : yg(s, Xt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = su(Kn)[0],
        n = oe().memoizedState;
      return [typeof t == "boolean" ? t : $s(t), n];
    },
    useSyncExternalStore: Zd,
    useId: xg,
    useHostTransitionStatus: hu,
    useFormState: rg,
    useActionState: rg,
    useOptimistic: function (t, n) {
      var s = oe();
      return Xt !== null
        ? Jd(s, Xt, t, n)
        : ((s.baseState = t), [t, s.queue.dispatch]);
    },
    useMemoCache: iu,
    useCacheRefresh: Sg,
  };
  Tg.useEffectEvent = fg;
  function pu(t, n, s, r) {
    ((n = t.memoizedState),
      (s = s(r, n)),
      (s = s == null ? n : b({}, n, s)),
      (t.memoizedState = s),
      t.lanes === 0 && (t.updateQueue.baseState = s));
  }
  var mu = {
    enqueueSetState: function (t, n, s) {
      t = t._reactInternals;
      var r = Je(),
        f = vi(r);
      ((f.payload = n),
        s != null && (f.callback = s),
        (n = wi(t, f, r)),
        n !== null && (Fe(n, t, r), Ks(n, t, r)));
    },
    enqueueReplaceState: function (t, n, s) {
      t = t._reactInternals;
      var r = Je(),
        f = vi(r);
      ((f.tag = 1),
        (f.payload = n),
        s != null && (f.callback = s),
        (n = wi(t, f, r)),
        n !== null && (Fe(n, t, r), Ks(n, t, r)));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var s = Je(),
        r = vi(s);
      ((r.tag = 2),
        n != null && (r.callback = n),
        (n = wi(t, r, s)),
        n !== null && (Fe(n, t, s), Ks(n, t, s)));
    },
  };
  function Og(t, n, s, r, f, g, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(r, g, y)
        : n.prototype && n.prototype.isPureReactComponent
          ? !qs(s, r) || !qs(f, g)
          : !0
    );
  }
  function Dg(t, n, s, r) {
    ((t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(s, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(s, r),
      n.state !== t && mu.enqueueReplaceState(n, n.state, null));
  }
  function ra(t, n) {
    var s = n;
    if ("ref" in n) {
      s = {};
      for (var r in n) r !== "ref" && (s[r] = n[r]);
    }
    if ((t = t.defaultProps)) {
      s === n && (s = b({}, s));
      for (var f in t) s[f] === void 0 && (s[f] = t[f]);
    }
    return s;
  }
  function zg(t) {
    fo(t);
  }
  function kg(t) {
    console.error(t);
  }
  function Rg(t) {
    fo(t);
  }
  function Lo(t, n) {
    try {
      var s = t.onUncaughtError;
      s(n.value, { componentStack: n.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Bg(t, n, s) {
    try {
      var r = t.onCaughtError;
      r(s.value, {
        componentStack: s.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function bu(t, n, s) {
    return (
      (s = vi(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        Lo(t, n);
      }),
      s
    );
  }
  function Lg(t) {
    return ((t = vi(t)), (t.tag = 3), t);
  }
  function jg(t, n, s, r) {
    var f = s.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var g = r.value;
      ((t.payload = function () {
        return f(g);
      }),
        (t.callback = function () {
          Bg(n, s, r);
        }));
    }
    var y = s.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        (Bg(n, s, r),
          typeof f != "function" &&
            (Ei === null ? (Ei = new Set([this])) : Ei.add(this)));
        var M = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: M !== null ? M : "",
        });
      });
  }
  function n1(t, n, s, r, f) {
    if (
      ((s.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      if (
        ((n = s.alternate),
        n !== null && Xa(n, s, f, !0),
        (s = Pe.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 31:
          case 13:
            return (
              pn === null ? Zo() : s.alternate === null && ie === 0 && (ie = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = f),
              r === xo
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null ? (s.updateQueue = new Set([r])) : n.add(r),
                  Yu(t, r, f)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              r === xo
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (s.updateQueue = n))
                    : ((s = n.retryQueue),
                      s === null ? (n.retryQueue = new Set([r])) : s.add(r)),
                  Yu(t, r, f)),
              !1
            );
        }
        throw Error(l(435, s.tag));
      }
      return (Yu(t, r, f), Zo(), !1);
    }
    if (At)
      return (
        (n = Pe.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            r !== jc && ((t = Error(l(422), { cause: r })), Vs(fn(t, s))))
          : (r !== jc && ((n = Error(l(423), { cause: r })), Vs(fn(n, s))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (r = fn(r, s)),
            (f = bu(t.stateNode, r, f)),
            Zc(t, f),
            ie !== 4 && (ie = 2)),
        !1
      );
    var g = Error(l(520), { cause: r });
    if (
      ((g = fn(g, s)),
      rl === null ? (rl = [g]) : rl.push(g),
      ie !== 4 && (ie = 2),
      n === null)
    )
      return !0;
    ((r = fn(r, s)), (s = n));
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (t = f & -f),
            (s.lanes |= t),
            (t = bu(s.stateNode, r, t)),
            Zc(s, t),
            !1
          );
        case 1:
          if (
            ((n = s.type),
            (g = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (g !== null &&
                  typeof g.componentDidCatch == "function" &&
                  (Ei === null || !Ei.has(g)))))
          )
            return (
              (s.flags |= 65536),
              (f &= -f),
              (s.lanes |= f),
              (f = Lg(f)),
              jg(f, t, s, r),
              Zc(s, f),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var yu = Error(l(461)),
    de = !1;
  function Me(t, n, s, r) {
    n.child = t === null ? qd(n, null, s, r) : la(n, t.child, s, r);
  }
  function Hg(t, n, s, r, f) {
    s = s.render;
    var g = n.ref;
    if ("ref" in r) {
      var y = {};
      for (var M in r) M !== "ref" && (y[M] = r[M]);
    } else y = r;
    return (
      na(n),
      (r = Jc(t, n, s, y, g, f)),
      (M = tu()),
      t !== null && !de
        ? (eu(t, n, f), Pn(t, n, f))
        : (At && M && Bc(n), (n.flags |= 1), Me(t, n, r, f), n.child)
    );
  }
  function Ng(t, n, s, r, f) {
    if (t === null) {
      var g = s.type;
      return typeof g == "function" &&
        !zc(g) &&
        g.defaultProps === void 0 &&
        s.compare === null
        ? ((n.tag = 15), (n.type = g), Ug(t, n, g, r, f))
        : ((t = mo(s.type, null, r, n, n.mode, f)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((g = t.child), !Eu(t, f))) {
      var y = g.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : qs), s(y, r) && t.ref === n.ref)
      )
        return Pn(t, n, f);
    }
    return (
      (n.flags |= 1),
      (t = Vn(g, r)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Ug(t, n, s, r, f) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (qs(g, r) && t.ref === n.ref)
        if (((de = !1), (n.pendingProps = r = g), Eu(t, f)))
          (t.flags & 131072) !== 0 && (de = !0);
        else return ((n.lanes = t.lanes), Pn(t, n, f));
    }
    return vu(t, n, s, r, f);
  }
  function qg(t, n, s, r) {
    var f = r.children,
      g = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.mode === "hidden")
    ) {
      if ((n.flags & 128) !== 0) {
        if (((g = g !== null ? g.baseLanes | s : s), t !== null)) {
          for (r = n.child = t.child, f = 0; r !== null; )
            ((f = f | r.lanes | r.childLanes), (r = r.sibling));
          r = f & ~g;
        } else ((r = 0), (n.child = null));
        return Fg(t, n, g, s, r);
      }
      if ((s & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && wo(n, g !== null ? g.cachePool : null),
          g !== null ? Vd(n, g) : Pc(),
          Gd(n));
      else
        return (
          (r = n.lanes = 536870912),
          Fg(t, n, g !== null ? g.baseLanes | s : s, s, r)
        );
    } else
      g !== null
        ? (wo(n, g.cachePool), Vd(n, g), xi(), (n.memoizedState = null))
        : (t !== null && wo(n, null), Pc(), xi());
    return (Me(t, n, f, s), n.child);
  }
  function el(t, n) {
    return (
      (t !== null && t.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function Fg(t, n, s, r, f) {
    var g = Vc();
    return (
      (g = g === null ? null : { parent: fe._currentValue, pool: g }),
      (n.memoizedState = { baseLanes: s, cachePool: g }),
      t !== null && wo(n, null),
      Pc(),
      Gd(n),
      t !== null && Xa(t, n, r, !0),
      (n.childLanes = f),
      null
    );
  }
  function jo(t, n) {
    return (
      (n = No({ mode: n.mode, children: n.children }, t.mode)),
      (n.ref = t.ref),
      (t.child = n),
      (n.return = t),
      n
    );
  }
  function Yg(t, n, s) {
    return (
      la(n, t.child, null, s),
      (t = jo(n, n.pendingProps)),
      (t.flags |= 2),
      Ie(n),
      (n.memoizedState = null),
      t
    );
  }
  function i1(t, n, s) {
    var r = n.pendingProps,
      f = (n.flags & 128) !== 0;
    if (((n.flags &= -129), t === null)) {
      if (At) {
        if (r.mode === "hidden")
          return ((t = jo(n, r)), (n.lanes = 536870912), el(null, t));
        if (
          (Wc(n),
          (t = Wt)
            ? ((t = tm(t, gn)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gi !== null ? { id: On, overflow: Dn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = Cd(t)),
                (s.return = n),
                (n.child = s),
                (xe = n),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw mi(n);
        return ((n.lanes = 536870912), null);
      }
      return jo(n, r);
    }
    var g = t.memoizedState;
    if (g !== null) {
      var y = g.dehydrated;
      if ((Wc(n), f))
        if (n.flags & 256) ((n.flags &= -257), (n = Yg(t, n, s)));
        else if (n.memoizedState !== null)
          ((n.child = t.child), (n.flags |= 128), (n = null));
        else throw Error(l(558));
      else if (
        (de || Xa(t, n, s, !1), (f = (s & t.childLanes) !== 0), de || f)
      ) {
        if (
          ((r = Kt),
          r !== null && ((y = kh(r, s)), y !== 0 && y !== g.retryLane))
        )
          throw ((g.retryLane = y), $i(t, y), Fe(r, t, y), yu);
        (Zo(), (n = Yg(t, n, s)));
      } else
        ((t = g.treeContext),
          (Wt = mn(y.nextSibling)),
          (xe = n),
          (At = !0),
          (pi = null),
          (gn = !1),
          t !== null && Td(n, t),
          (n = jo(n, r)),
          (n.flags |= 4096));
      return n;
    }
    return (
      (t = Vn(t.child, { mode: r.mode, children: r.children })),
      (t.ref = n.ref),
      (n.child = t),
      (t.return = n),
      t
    );
  }
  function Ho(t, n) {
    var s = n.ref;
    if (s === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(l(284));
      (t === null || t.ref !== s) && (n.flags |= 4194816);
    }
  }
  function vu(t, n, s, r, f) {
    return (
      na(n),
      (s = Jc(t, n, s, r, void 0, f)),
      (r = tu()),
      t !== null && !de
        ? (eu(t, n, f), Pn(t, n, f))
        : (At && r && Bc(n), (n.flags |= 1), Me(t, n, s, f), n.child)
    );
  }
  function Vg(t, n, s, r, f, g) {
    return (
      na(n),
      (n.updateQueue = null),
      (s = Qd(n, r, s, f)),
      Xd(t),
      (r = tu()),
      t !== null && !de
        ? (eu(t, n, g), Pn(t, n, g))
        : (At && r && Bc(n), (n.flags |= 1), Me(t, n, s, g), n.child)
    );
  }
  function Gg(t, n, s, r, f) {
    if ((na(n), n.stateNode === null)) {
      var g = Fa,
        y = s.contextType;
      (typeof y == "object" && y !== null && (g = Se(y)),
        (g = new s(r, g)),
        (n.memoizedState =
          g.state !== null && g.state !== void 0 ? g.state : null),
        (g.updater = mu),
        (n.stateNode = g),
        (g._reactInternals = n),
        (g = n.stateNode),
        (g.props = r),
        (g.state = n.memoizedState),
        (g.refs = {}),
        Xc(n),
        (y = s.contextType),
        (g.context = typeof y == "object" && y !== null ? Se(y) : Fa),
        (g.state = n.memoizedState),
        (y = s.getDerivedStateFromProps),
        typeof y == "function" && (pu(n, s, y, r), (g.state = n.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function" ||
          (typeof g.UNSAFE_componentWillMount != "function" &&
            typeof g.componentWillMount != "function") ||
          ((y = g.state),
          typeof g.componentWillMount == "function" && g.componentWillMount(),
          typeof g.UNSAFE_componentWillMount == "function" &&
            g.UNSAFE_componentWillMount(),
          y !== g.state && mu.enqueueReplaceState(g, g.state, null),
          Is(n, r, g, f),
          Ps(),
          (g.state = n.memoizedState)),
        typeof g.componentDidMount == "function" && (n.flags |= 4194308),
        (r = !0));
    } else if (t === null) {
      g = n.stateNode;
      var M = n.memoizedProps,
        D = ra(s, M);
      g.props = D;
      var q = g.context,
        K = s.contextType;
      ((y = Fa), typeof K == "object" && K !== null && (y = Se(K)));
      var W = s.getDerivedStateFromProps;
      ((K =
        typeof W == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function"),
        (M = n.pendingProps !== M),
        K ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((M || q !== y) && Dg(n, g, r, y)),
        (yi = !1));
      var Y = n.memoizedState;
      ((g.state = Y),
        Is(n, r, g, f),
        Ps(),
        (q = n.memoizedState),
        M || Y !== q || yi
          ? (typeof W == "function" && (pu(n, s, W, r), (q = n.memoizedState)),
            (D = yi || Og(n, s, D, r, Y, q, y))
              ? (K ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = q)),
            (g.props = r),
            (g.state = q),
            (g.context = y),
            (r = D))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1)));
    } else {
      ((g = n.stateNode),
        Qc(t, n),
        (y = n.memoizedProps),
        (K = ra(s, y)),
        (g.props = K),
        (W = n.pendingProps),
        (Y = g.context),
        (q = s.contextType),
        (D = Fa),
        typeof q == "object" && q !== null && (D = Se(q)),
        (M = s.getDerivedStateFromProps),
        (q =
          typeof M == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((y !== W || Y !== D) && Dg(n, g, r, D)),
        (yi = !1),
        (Y = n.memoizedState),
        (g.state = Y),
        Is(n, r, g, f),
        Ps());
      var X = n.memoizedState;
      y !== W ||
      Y !== X ||
      yi ||
      (t !== null && t.dependencies !== null && yo(t.dependencies))
        ? (typeof M == "function" && (pu(n, s, M, r), (X = n.memoizedState)),
          (K =
            yi ||
            Og(n, s, K, r, Y, X, D) ||
            (t !== null && t.dependencies !== null && yo(t.dependencies)))
            ? (q ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(r, X, D),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(r, X, D)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (y === t.memoizedProps && Y === t.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && Y === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = X)),
          (g.props = r),
          (g.state = X),
          (g.context = D),
          (r = K))
        : (typeof g.componentDidUpdate != "function" ||
            (y === t.memoizedProps && Y === t.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && Y === t.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return (
      (g = r),
      Ho(t, n),
      (r = (n.flags & 128) !== 0),
      g || r
        ? ((g = n.stateNode),
          (s =
            r && typeof s.getDerivedStateFromError != "function"
              ? null
              : g.render()),
          (n.flags |= 1),
          t !== null && r
            ? ((n.child = la(n, t.child, null, f)),
              (n.child = la(n, null, s, f)))
            : Me(t, n, s, f),
          (n.memoizedState = g.state),
          (t = n.child))
        : (t = Pn(t, n, f)),
      t
    );
  }
  function Xg(t, n, s, r) {
    return (ta(), (n.flags |= 256), Me(t, n, s, r), n.child);
  }
  var wu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function _u(t) {
    return { baseLanes: t, cachePool: Bd() };
  }
  function xu(t, n, s) {
    return ((t = t !== null ? t.childLanes & ~s : 0), n && (t |= $e), t);
  }
  function Qg(t, n, s) {
    var r = n.pendingProps,
      f = !1,
      g = (n.flags & 128) !== 0,
      y;
    if (
      ((y = g) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (le.current & 2) !== 0),
      y && ((f = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (At) {
        if (
          (f ? _i(n) : xi(),
          (t = Wt)
            ? ((t = tm(t, gn)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gi !== null ? { id: On, overflow: Dn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = Cd(t)),
                (s.return = n),
                (n.child = s),
                (xe = n),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw mi(n);
        return (sf(t) ? (n.lanes = 32) : (n.lanes = 536870912), null);
      }
      var M = r.children;
      return (
        (r = r.fallback),
        f
          ? (xi(),
            (f = n.mode),
            (M = No({ mode: "hidden", children: M }, f)),
            (r = Ji(r, f, s, null)),
            (M.return = n),
            (r.return = n),
            (M.sibling = r),
            (n.child = M),
            (r = n.child),
            (r.memoizedState = _u(s)),
            (r.childLanes = xu(t, y, s)),
            (n.memoizedState = wu),
            el(null, r))
          : (_i(n), Su(n, M))
      );
    }
    var D = t.memoizedState;
    if (D !== null && ((M = D.dehydrated), M !== null)) {
      if (g)
        n.flags & 256
          ? (_i(n), (n.flags &= -257), (n = Mu(t, n, s)))
          : n.memoizedState !== null
            ? (xi(), (n.child = t.child), (n.flags |= 128), (n = null))
            : (xi(),
              (M = r.fallback),
              (f = n.mode),
              (r = No({ mode: "visible", children: r.children }, f)),
              (M = Ji(M, f, s, null)),
              (M.flags |= 2),
              (r.return = n),
              (M.return = n),
              (r.sibling = M),
              (n.child = r),
              la(n, t.child, null, s),
              (r = n.child),
              (r.memoizedState = _u(s)),
              (r.childLanes = xu(t, y, s)),
              (n.memoizedState = wu),
              (n = el(null, r)));
      else if ((_i(n), sf(M))) {
        if (((y = M.nextSibling && M.nextSibling.dataset), y)) var q = y.dgst;
        ((y = q),
          (r = Error(l(419))),
          (r.stack = ""),
          (r.digest = y),
          Vs({ value: r, source: null, stack: null }),
          (n = Mu(t, n, s)));
      } else if (
        (de || Xa(t, n, s, !1), (y = (s & t.childLanes) !== 0), de || y)
      ) {
        if (
          ((y = Kt),
          y !== null && ((r = kh(y, s)), r !== 0 && r !== D.retryLane))
        )
          throw ((D.retryLane = r), $i(t, r), Fe(y, t, r), yu);
        (af(M) || Zo(), (n = Mu(t, n, s)));
      } else
        af(M)
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = D.treeContext),
            (Wt = mn(M.nextSibling)),
            (xe = n),
            (At = !0),
            (pi = null),
            (gn = !1),
            t !== null && Td(n, t),
            (n = Su(n, r.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (xi(),
        (M = r.fallback),
        (f = n.mode),
        (D = t.child),
        (q = D.sibling),
        (r = Vn(D, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = D.subtreeFlags & 65011712),
        q !== null ? (M = Vn(q, M)) : ((M = Ji(M, f, s, null)), (M.flags |= 2)),
        (M.return = n),
        (r.return = n),
        (r.sibling = M),
        (n.child = r),
        el(null, r),
        (r = n.child),
        (M = t.child.memoizedState),
        M === null
          ? (M = _u(s))
          : ((f = M.cachePool),
            f !== null
              ? ((D = fe._currentValue),
                (f = f.parent !== D ? { parent: D, pool: D } : f))
              : (f = Bd()),
            (M = { baseLanes: M.baseLanes | s, cachePool: f })),
        (r.memoizedState = M),
        (r.childLanes = xu(t, y, s)),
        (n.memoizedState = wu),
        el(t.child, r))
      : (_i(n),
        (s = t.child),
        (t = s.sibling),
        (s = Vn(s, { mode: "visible", children: r.children })),
        (s.return = n),
        (s.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = s),
        (n.memoizedState = null),
        s);
  }
  function Su(t, n) {
    return (
      (n = No({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function No(t, n) {
    return ((t = Ke(22, t, null, n)), (t.lanes = 0), t);
  }
  function Mu(t, n, s) {
    return (
      la(n, t.child, null, s),
      (t = Su(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Zg(t, n, s) {
    t.lanes |= n;
    var r = t.alternate;
    (r !== null && (r.lanes |= n), Uc(t.return, n, s));
  }
  function Cu(t, n, s, r, f, g) {
    var y = t.memoizedState;
    y === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: s,
          tailMode: f,
          treeForkCount: g,
        })
      : ((y.isBackwards = n),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = r),
        (y.tail = s),
        (y.tailMode = f),
        (y.treeForkCount = g));
  }
  function Kg(t, n, s) {
    var r = n.pendingProps,
      f = r.revealOrder,
      g = r.tail;
    r = r.children;
    var y = le.current,
      M = (y & 2) !== 0;
    if (
      (M ? ((y = (y & 1) | 2), (n.flags |= 128)) : (y &= 1),
      V(le, y),
      Me(t, n, r, s),
      (r = At ? Ys : 0),
      !M && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Zg(t, s, n);
        else if (t.tag === 19) Zg(t, s, n);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === n) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (f) {
      case "forwards":
        for (s = n.child, f = null; s !== null; )
          ((t = s.alternate),
            t !== null && Eo(t) === null && (f = s),
            (s = s.sibling));
        ((s = f),
          s === null
            ? ((f = n.child), (n.child = null))
            : ((f = s.sibling), (s.sibling = null)),
          Cu(n, !1, f, s, g, r));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (s = null, f = n.child, n.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && Eo(t) === null)) {
            n.child = f;
            break;
          }
          ((t = f.sibling), (f.sibling = s), (s = f), (f = t));
        }
        Cu(n, !0, s, null, g, r);
        break;
      case "together":
        Cu(n, !1, null, null, void 0, r);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pn(t, n, s) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Ci |= n.lanes),
      (s & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Xa(t, n, s, !1), (s & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        t = n.child, s = Vn(t, t.pendingProps), n.child = s, s.return = n;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (s = s.sibling = Vn(t, t.pendingProps)),
          (s.return = n));
      s.sibling = null;
    }
    return n.child;
  }
  function Eu(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && yo(t)));
  }
  function a1(t, n, s) {
    switch (n.tag) {
      case 3:
        (pt(n, n.stateNode.containerInfo),
          bi(n, fe, t.memoizedState.cache),
          ta());
        break;
      case 27:
      case 5:
        Yt(n);
        break;
      case 4:
        pt(n, n.stateNode.containerInfo);
        break;
      case 10:
        bi(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Wc(n), null);
        break;
      case 13:
        var r = n.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (_i(n), (n.flags |= 128), null)
            : (s & n.child.childLanes) !== 0
              ? Qg(t, n, s)
              : (_i(n), (t = Pn(t, n, s)), t !== null ? t.sibling : null);
        _i(n);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((r = (s & n.childLanes) !== 0),
          r || (Xa(t, n, s, !1), (r = (s & n.childLanes) !== 0)),
          f)
        ) {
          if (r) return Kg(t, n, s);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          V(le, le.current),
          r)
        )
          break;
        return null;
      case 22:
        return ((n.lanes = 0), qg(t, n, s, n.pendingProps));
      case 24:
        bi(n, fe, t.memoizedState.cache);
    }
    return Pn(t, n, s);
  }
  function Pg(t, n, s) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) de = !0;
      else {
        if (!Eu(t, s) && (n.flags & 128) === 0) return ((de = !1), a1(t, n, s));
        de = (t.flags & 131072) !== 0;
      }
    else ((de = !1), At && (n.flags & 1048576) !== 0 && Ad(n, Ys, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          var r = n.pendingProps;
          if (((t = aa(n.elementType)), (n.type = t), typeof t == "function"))
            zc(t)
              ? ((r = ra(t, r)), (n.tag = 1), (n = Gg(null, n, t, r, s)))
              : ((n.tag = 0), (n = vu(null, n, t, r, s)));
          else {
            if (t != null) {
              var f = t.$$typeof;
              if (f === Z) {
                ((n.tag = 11), (n = Hg(null, n, t, r, s)));
                break t;
              } else if (f === T) {
                ((n.tag = 14), (n = Ng(null, n, t, r, s)));
                break t;
              }
            }
            throw ((n = st(t) || t), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return vu(t, n, n.type, n.pendingProps, s);
      case 1:
        return ((r = n.type), (f = ra(r, n.pendingProps)), Gg(t, n, r, f, s));
      case 3:
        t: {
          if ((pt(n, n.stateNode.containerInfo), t === null))
            throw Error(l(387));
          r = n.pendingProps;
          var g = n.memoizedState;
          ((f = g.element), Qc(t, n), Is(n, r, null, s));
          var y = n.memoizedState;
          if (
            ((r = y.cache),
            bi(n, fe, r),
            r !== g.cache && qc(n, [fe], s, !0),
            Ps(),
            (r = y.element),
            g.isDehydrated)
          )
            if (
              ((g = { element: r, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = g),
              (n.memoizedState = g),
              n.flags & 256)
            ) {
              n = Xg(t, n, r, s);
              break t;
            } else if (r !== f) {
              ((f = fn(Error(l(424)), n)), Vs(f), (n = Xg(t, n, r, s)));
              break t;
            } else {
              switch (((t = n.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Wt = mn(t.firstChild),
                  xe = n,
                  At = !0,
                  pi = null,
                  gn = !0,
                  s = qd(n, null, r, s),
                  n.child = s;
                s;
              )
                ((s.flags = (s.flags & -3) | 4096), (s = s.sibling));
            }
          else {
            if ((ta(), r === f)) {
              n = Pn(t, n, s);
              break t;
            }
            Me(t, n, r, s);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Ho(t, n),
          t === null
            ? (s = lm(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = s)
              : At ||
                ((s = n.type),
                (t = n.pendingProps),
                (r = tr(ot.current).createElement(s)),
                (r[_e] = n),
                (r[Le] = t),
                Ce(r, s, t),
                be(r),
                (n.stateNode = r))
            : (n.memoizedState = lm(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Yt(n),
          t === null &&
            At &&
            ((r = n.stateNode = im(n.type, n.pendingProps, ot.current)),
            (xe = n),
            (gn = !0),
            (f = Wt),
            Di(n.type) ? ((lf = f), (Wt = mn(r.firstChild))) : (Wt = f)),
          Me(t, n, n.pendingProps.children, s),
          Ho(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            At &&
            ((f = r = Wt) &&
              ((r = B1(r, n.type, n.pendingProps, gn)),
              r !== null
                ? ((n.stateNode = r),
                  (xe = n),
                  (Wt = mn(r.firstChild)),
                  (gn = !1),
                  (f = !0))
                : (f = !1)),
            f || mi(n)),
          Yt(n),
          (f = n.type),
          (g = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (r = g.children),
          tf(f, g) ? (r = null) : y !== null && tf(f, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = Jc(t, n, Py, null, null, s)), (ml._currentValue = f)),
          Ho(t, n),
          Me(t, n, r, s),
          n.child
        );
      case 6:
        return (
          t === null &&
            At &&
            ((t = s = Wt) &&
              ((s = L1(s, n.pendingProps, gn)),
              s !== null
                ? ((n.stateNode = s), (xe = n), (Wt = null), (t = !0))
                : (t = !1)),
            t || mi(n)),
          null
        );
      case 13:
        return Qg(t, n, s);
      case 4:
        return (
          pt(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          t === null ? (n.child = la(n, null, r, s)) : Me(t, n, r, s),
          n.child
        );
      case 11:
        return Hg(t, n, n.type, n.pendingProps, s);
      case 7:
        return (Me(t, n, n.pendingProps, s), n.child);
      case 8:
        return (Me(t, n, n.pendingProps.children, s), n.child);
      case 12:
        return (Me(t, n, n.pendingProps.children, s), n.child);
      case 10:
        return (
          (r = n.pendingProps),
          bi(n, n.type, r.value),
          Me(t, n, r.children, s),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (r = n.pendingProps.children),
          na(n),
          (f = Se(f)),
          (r = r(f)),
          (n.flags |= 1),
          Me(t, n, r, s),
          n.child
        );
      case 14:
        return Ng(t, n, n.type, n.pendingProps, s);
      case 15:
        return Ug(t, n, n.type, n.pendingProps, s);
      case 19:
        return Kg(t, n, s);
      case 31:
        return i1(t, n, s);
      case 22:
        return qg(t, n, s, n.pendingProps);
      case 24:
        return (
          na(n),
          (r = Se(fe)),
          t === null
            ? ((f = Vc()),
              f === null &&
                ((f = Kt),
                (g = Fc()),
                (f.pooledCache = g),
                g.refCount++,
                g !== null && (f.pooledCacheLanes |= s),
                (f = g)),
              (n.memoizedState = { parent: r, cache: f }),
              Xc(n),
              bi(n, fe, f))
            : ((t.lanes & s) !== 0 && (Qc(t, n), Is(n, null, null, s), Ps()),
              (f = t.memoizedState),
              (g = n.memoizedState),
              f.parent !== r
                ? ((f = { parent: r, cache: r }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  bi(n, fe, r))
                : ((r = g.cache),
                  bi(n, fe, r),
                  r !== f.cache && qc(n, [fe], s, !0))),
          Me(t, n, n.pendingProps.children, s),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function In(t) {
    t.flags |= 4;
  }
  function Au(t, n, s, r, f) {
    if (((n = (t.mode & 32) !== 0) && (n = !1), n)) {
      if (((t.flags |= 16777216), (f & 335544128) === f))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (xp()) t.flags |= 8192;
        else throw ((sa = xo), Gc);
    } else t.flags &= -16777217;
  }
  function Ig(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !fm(n)))
      if (xp()) t.flags |= 8192;
      else throw ((sa = xo), Gc);
  }
  function Uo(t, n) {
    (n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? Oh() : 536870912), (t.lanes |= n), (is |= n)));
  }
  function nl(t, n) {
    if (!At)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var s = null; n !== null; )
            (n.alternate !== null && (s = n), (n = n.sibling));
          s === null ? (t.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = t.tail;
          for (var r = null; s !== null; )
            (s.alternate !== null && (r = s), (s = s.sibling));
          r === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function $t(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      s = 0,
      r = 0;
    if (n)
      for (var f = t.child; f !== null; )
        ((s |= f.lanes | f.childLanes),
          (r |= f.subtreeFlags & 65011712),
          (r |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling));
    else
      for (f = t.child; f !== null; )
        ((s |= f.lanes | f.childLanes),
          (r |= f.subtreeFlags),
          (r |= f.flags),
          (f.return = t),
          (f = f.sibling));
    return ((t.subtreeFlags |= r), (t.childLanes = s), n);
  }
  function s1(t, n, s) {
    var r = n.pendingProps;
    switch ((Lc(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ($t(n), null);
      case 1:
        return ($t(n), null);
      case 3:
        return (
          (s = n.stateNode),
          (r = null),
          t !== null && (r = t.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          Qn(fe),
          dt(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ga(n)
              ? In(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Hc())),
          $t(n),
          null
        );
      case 26:
        var f = n.type,
          g = n.memoizedState;
        return (
          t === null
            ? (In(n),
              g !== null ? ($t(n), Ig(n, g)) : ($t(n), Au(n, f, null, r, s)))
            : g
              ? g !== t.memoizedState
                ? (In(n), $t(n), Ig(n, g))
                : ($t(n), (n.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== r && In(n),
                $t(n),
                Au(n, f, t, r, s)),
          null
        );
      case 27:
        if (
          (vt(n),
          (s = ot.current),
          (f = n.type),
          t !== null && n.stateNode != null)
        )
          t.memoizedProps !== r && In(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(l(166));
            return ($t(n), null);
          }
          ((t = nt.current),
            Ga(n) ? Od(n) : ((t = im(f, r, s)), (n.stateNode = t), In(n)));
        }
        return ($t(n), null);
      case 5:
        if ((vt(n), (f = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== r && In(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(l(166));
            return ($t(n), null);
          }
          if (((g = nt.current), Ga(n))) Od(n);
          else {
            var y = tr(ot.current);
            switch (g) {
              case 1:
                g = y.createElementNS("http://www.w3.org/2000/svg", f);
                break;
              case 2:
                g = y.createElementNS("http://www.w3.org/1998/Math/MathML", f);
                break;
              default:
                switch (f) {
                  case "svg":
                    g = y.createElementNS("http://www.w3.org/2000/svg", f);
                    break;
                  case "math":
                    g = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      f,
                    );
                    break;
                  case "script":
                    ((g = y.createElement("div")),
                      (g.innerHTML = "<script><\/script>"),
                      (g = g.removeChild(g.firstChild)));
                    break;
                  case "select":
                    ((g =
                      typeof r.is == "string"
                        ? y.createElement("select", { is: r.is })
                        : y.createElement("select")),
                      r.multiple
                        ? (g.multiple = !0)
                        : r.size && (g.size = r.size));
                    break;
                  default:
                    g =
                      typeof r.is == "string"
                        ? y.createElement(f, { is: r.is })
                        : y.createElement(f);
                }
            }
            ((g[_e] = n), (g[Le] = r));
            t: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) g.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                ((y.child.return = y), (y = y.child));
                continue;
              }
              if (y === n) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n) break t;
                y = y.return;
              }
              ((y.sibling.return = y.return), (y = y.sibling));
            }
            n.stateNode = g;
            t: switch ((Ce(g, f, r), f)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break t;
              case "img":
                r = !0;
                break t;
              default:
                r = !1;
            }
            r && In(n);
          }
        }
        return (
          $t(n),
          Au(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, s),
          null
        );
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== r && In(n);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(l(166));
          if (((t = ot.current), Ga(n))) {
            if (
              ((t = n.stateNode),
              (s = n.memoizedProps),
              (r = null),
              (f = xe),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  r = f.memoizedProps;
              }
            ((t[_e] = n),
              (t = !!(
                t.nodeValue === s ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                Qp(t.nodeValue, s)
              )),
              t || mi(n, !0));
          } else
            ((t = tr(t).createTextNode(r)), (t[_e] = n), (n.stateNode = t));
        }
        return ($t(n), null);
      case 31:
        if (((s = n.memoizedState), t === null || t.memoizedState !== null)) {
          if (((r = Ga(n)), s !== null)) {
            if (t === null) {
              if (!r) throw Error(l(318));
              if (
                ((t = n.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(l(557));
              t[_e] = n;
            } else
              (ta(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            ($t(n), (t = !1));
          } else
            ((s = Hc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (t = !0));
          if (!t) return n.flags & 256 ? (Ie(n), n) : (Ie(n), null);
          if ((n.flags & 128) !== 0) throw Error(l(558));
        }
        return ($t(n), null);
      case 13:
        if (
          ((r = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ga(n)), r !== null && r.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(l(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(l(317));
              f[_e] = n;
            } else
              (ta(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            ($t(n), (f = !1));
          } else
            ((f = Hc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return n.flags & 256 ? (Ie(n), n) : (Ie(n), null);
        }
        return (
          Ie(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = s), n)
            : ((s = r !== null),
              (t = t !== null && t.memoizedState !== null),
              s &&
                ((r = n.child),
                (f = null),
                r.alternate !== null &&
                  r.alternate.memoizedState !== null &&
                  r.alternate.memoizedState.cachePool !== null &&
                  (f = r.alternate.memoizedState.cachePool.pool),
                (g = null),
                r.memoizedState !== null &&
                  r.memoizedState.cachePool !== null &&
                  (g = r.memoizedState.cachePool.pool),
                g !== f && (r.flags |= 2048)),
              s !== t && s && (n.child.flags |= 8192),
              Uo(n, n.updateQueue),
              $t(n),
              null)
        );
      case 4:
        return (dt(), t === null && Pu(n.stateNode.containerInfo), $t(n), null);
      case 10:
        return (Qn(n.type), $t(n), null);
      case 19:
        if ((k(le), (r = n.memoizedState), r === null)) return ($t(n), null);
        if (((f = (n.flags & 128) !== 0), (g = r.rendering), g === null))
          if (f) nl(r, !1);
          else {
            if (ie !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((g = Eo(t)), g !== null)) {
                  for (
                    n.flags |= 128,
                      nl(r, !1),
                      t = g.updateQueue,
                      n.updateQueue = t,
                      Uo(n, t),
                      n.subtreeFlags = 0,
                      t = s,
                      s = n.child;
                    s !== null;
                  )
                    (Md(s, t), (s = s.sibling));
                  return (
                    V(le, (le.current & 1) | 2),
                    At && Gn(n, r.treeForkCount),
                    n.child
                  );
                }
                t = t.sibling;
              }
            r.tail !== null &&
              Nt() > Go &&
              ((n.flags |= 128), (f = !0), nl(r, !1), (n.lanes = 4194304));
          }
        else {
          if (!f)
            if (((t = Eo(g)), t !== null)) {
              if (
                ((n.flags |= 128),
                (f = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                Uo(n, t),
                nl(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !g.alternate &&
                  !At)
              )
                return ($t(n), null);
            } else
              2 * Nt() - r.renderingStartTime > Go &&
                s !== 536870912 &&
                ((n.flags |= 128), (f = !0), nl(r, !1), (n.lanes = 4194304));
          r.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((t = r.last),
              t !== null ? (t.sibling = g) : (n.child = g),
              (r.last = g));
        }
        return r.tail !== null
          ? ((t = r.tail),
            (r.rendering = t),
            (r.tail = t.sibling),
            (r.renderingStartTime = Nt()),
            (t.sibling = null),
            (s = le.current),
            V(le, f ? (s & 1) | 2 : s & 1),
            At && Gn(n, r.treeForkCount),
            t)
          : ($t(n), null);
      case 22:
      case 23:
        return (
          Ie(n),
          Ic(),
          (r = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== r && (n.flags |= 8192)
            : r && (n.flags |= 8192),
          r
            ? (s & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              ($t(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : $t(n),
          (s = n.updateQueue),
          s !== null && Uo(n, s.retryQueue),
          (s = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          (r = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (r = n.memoizedState.cachePool.pool),
          r !== s && (n.flags |= 2048),
          t !== null && k(ia),
          null
        );
      case 24:
        return (
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          n.memoizedState.cache !== s && (n.flags |= 2048),
          Qn(fe),
          $t(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function l1(t, n) {
    switch ((Lc(n), n.tag)) {
      case 1:
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Qn(fe),
          dt(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (vt(n), null);
      case 31:
        if (n.memoizedState !== null) {
          if ((Ie(n), n.alternate === null)) throw Error(l(340));
          ta();
        }
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 13:
        if (
          (Ie(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          ta();
        }
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return (k(le), null);
      case 4:
        return (dt(), null);
      case 10:
        return (Qn(n.type), null);
      case 22:
      case 23:
        return (
          Ie(n),
          Ic(),
          t !== null && k(ia),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return (Qn(fe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wg(t, n) {
    switch ((Lc(n), n.tag)) {
      case 3:
        (Qn(fe), dt());
        break;
      case 26:
      case 27:
      case 5:
        vt(n);
        break;
      case 4:
        dt();
        break;
      case 31:
        n.memoizedState !== null && Ie(n);
        break;
      case 13:
        Ie(n);
        break;
      case 19:
        k(le);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        (Ie(n), Ic(), t !== null && k(ia));
        break;
      case 24:
        Qn(fe);
    }
  }
  function il(t, n) {
    try {
      var s = n.updateQueue,
        r = s !== null ? s.lastEffect : null;
      if (r !== null) {
        var f = r.next;
        s = f;
        do {
          if ((s.tag & t) === t) {
            r = void 0;
            var g = s.create,
              y = s.inst;
            ((r = g()), (y.destroy = r));
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (M) {
      qt(n, n.return, M);
    }
  }
  function Si(t, n, s) {
    try {
      var r = n.updateQueue,
        f = r !== null ? r.lastEffect : null;
      if (f !== null) {
        var g = f.next;
        r = g;
        do {
          if ((r.tag & t) === t) {
            var y = r.inst,
              M = y.destroy;
            if (M !== void 0) {
              ((y.destroy = void 0), (f = n));
              var D = s,
                q = M;
              try {
                q();
              } catch (K) {
                qt(f, D, K);
              }
            }
          }
          r = r.next;
        } while (r !== g);
      }
    } catch (K) {
      qt(n, n.return, K);
    }
  }
  function $g(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var s = t.stateNode;
      try {
        Yd(n, s);
      } catch (r) {
        qt(t, t.return, r);
      }
    }
  }
  function Jg(t, n, s) {
    ((s.props = ra(t.type, t.memoizedProps)), (s.state = t.memoizedState));
    try {
      s.componentWillUnmount();
    } catch (r) {
      qt(t, n, r);
    }
  }
  function al(t, n) {
    try {
      var s = t.ref;
      if (s !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof s == "function" ? (t.refCleanup = s(r)) : (s.current = r);
      }
    } catch (f) {
      qt(t, n, f);
    }
  }
  function zn(t, n) {
    var s = t.ref,
      r = t.refCleanup;
    if (s !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (f) {
          qt(t, n, f);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          qt(t, n, f);
        }
      else s.current = null;
  }
  function tp(t) {
    var n = t.type,
      s = t.memoizedProps,
      r = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && r.focus();
          break t;
        case "img":
          s.src ? (r.src = s.src) : s.srcSet && (r.srcset = s.srcSet);
      }
    } catch (f) {
      qt(t, t.return, f);
    }
  }
  function Tu(t, n, s) {
    try {
      var r = t.stateNode;
      (T1(r, t.type, s, n), (r[Le] = n));
    } catch (f) {
      qt(t, t.return, f);
    }
  }
  function ep(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Di(t.type)) ||
      t.tag === 4
    );
  }
  function Ou(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ep(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Di(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Du(t, n, s) {
    var r = t.tag;
    if (r === 5 || r === 6)
      ((t = t.stateNode),
        n
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s
            ).insertBefore(t, n)
          : ((n =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                  ? s.ownerDocument.body
                  : s),
            n.appendChild(t),
            (s = s._reactRootContainer),
            s != null || n.onclick !== null || (n.onclick = Fn)));
    else if (
      r !== 4 &&
      (r === 27 && Di(t.type) && ((s = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (Du(t, n, s), t = t.sibling; t !== null; )
        (Du(t, n, s), (t = t.sibling));
  }
  function qo(t, n, s) {
    var r = t.tag;
    if (r === 5 || r === 6)
      ((t = t.stateNode), n ? s.insertBefore(t, n) : s.appendChild(t));
    else if (
      r !== 4 &&
      (r === 27 && Di(t.type) && (s = t.stateNode), (t = t.child), t !== null)
    )
      for (qo(t, n, s), t = t.sibling; t !== null; )
        (qo(t, n, s), (t = t.sibling));
  }
  function np(t) {
    var n = t.stateNode,
      s = t.memoizedProps;
    try {
      for (var r = t.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      (Ce(n, r, s), (n[_e] = t), (n[Le] = s));
    } catch (g) {
      qt(t, t.return, g);
    }
  }
  var Wn = !1,
    ge = !1,
    zu = !1,
    ip = typeof WeakSet == "function" ? WeakSet : Set,
    ye = null;
  function o1(t, n) {
    if (((t = t.containerInfo), ($u = or), (t = pd(t)), Mc(t))) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          s = ((s = t.ownerDocument) && s.defaultView) || window;
          var r = s.getSelection && s.getSelection();
          if (r && r.rangeCount !== 0) {
            s = r.anchorNode;
            var f = r.anchorOffset,
              g = r.focusNode;
            r = r.focusOffset;
            try {
              (s.nodeType, g.nodeType);
            } catch {
              s = null;
              break t;
            }
            var y = 0,
              M = -1,
              D = -1,
              q = 0,
              K = 0,
              W = t,
              Y = null;
            e: for (;;) {
              for (
                var X;
                W !== s || (f !== 0 && W.nodeType !== 3) || (M = y + f),
                  W !== g || (r !== 0 && W.nodeType !== 3) || (D = y + r),
                  W.nodeType === 3 && (y += W.nodeValue.length),
                  (X = W.firstChild) !== null;
              )
                ((Y = W), (W = X));
              for (;;) {
                if (W === t) break e;
                if (
                  (Y === s && ++q === f && (M = y),
                  Y === g && ++K === r && (D = y),
                  (X = W.nextSibling) !== null)
                )
                  break;
                ((W = Y), (Y = W.parentNode));
              }
              W = X;
            }
            s = M === -1 || D === -1 ? null : { start: M, end: D };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Ju = { focusedElem: t, selectionRange: s }, or = !1, ye = n;
      ye !== null;
    )
      if (
        ((n = ye), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = n), (ye = t));
      else
        for (; ye !== null; ) {
          switch (((n = ye), (g = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = n.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (s = 0; s < t.length; s++)
                  ((f = t[s]), (f.ref.impl = f.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && g !== null) {
                ((t = void 0),
                  (s = n),
                  (f = g.memoizedProps),
                  (g = g.memoizedState),
                  (r = s.stateNode));
                try {
                  var ct = ra(s.type, f);
                  ((t = r.getSnapshotBeforeUpdate(ct, g)),
                    (r.__reactInternalSnapshotBeforeUpdate = t));
                } catch (mt) {
                  qt(s, s.return, mt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (s = t.nodeType), s === 9)
                )
                  nf(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(l(163));
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (ye = t));
            break;
          }
          ye = n.return;
        }
  }
  function ap(t, n, s) {
    var r = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        (Jn(t, s), r & 4 && il(5, s));
        break;
      case 1:
        if ((Jn(t, s), r & 4))
          if (((t = s.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (y) {
              qt(s, s.return, y);
            }
          else {
            var f = ra(s.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(f, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              qt(s, s.return, y);
            }
          }
        (r & 64 && $g(s), r & 512 && al(s, s.return));
        break;
      case 3:
        if ((Jn(t, s), r & 64 && ((t = s.updateQueue), t !== null))) {
          if (((n = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode;
            }
          try {
            Yd(t, n);
          } catch (y) {
            qt(s, s.return, y);
          }
        }
        break;
      case 27:
        n === null && r & 4 && np(s);
      case 26:
      case 5:
        (Jn(t, s), n === null && r & 4 && tp(s), r & 512 && al(s, s.return));
        break;
      case 12:
        Jn(t, s);
        break;
      case 31:
        (Jn(t, s), r & 4 && op(t, s));
        break;
      case 13:
        (Jn(t, s),
          r & 4 && rp(t, s),
          r & 64 &&
            ((t = s.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((s = m1.bind(null, s)), j1(t, s)))));
        break;
      case 22:
        if (((r = s.memoizedState !== null || Wn), !r)) {
          ((n = (n !== null && n.memoizedState !== null) || ge), (f = Wn));
          var g = ge;
          ((Wn = r),
            (ge = n) && !g ? ti(t, s, (s.subtreeFlags & 8772) !== 0) : Jn(t, s),
            (Wn = f),
            (ge = g));
        }
        break;
      case 30:
        break;
      default:
        Jn(t, s);
    }
  }
  function sp(t) {
    var n = t.alternate;
    (n !== null && ((t.alternate = null), sp(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && oc(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var te = null,
    He = !1;
  function $n(t, n, s) {
    for (s = s.child; s !== null; ) (lp(t, n, s), (s = s.sibling));
  }
  function lp(t, n, s) {
    if (Ae && typeof Ae.onCommitFiberUnmount == "function")
      try {
        Ae.onCommitFiberUnmount(xn, s);
      } catch {}
    switch (s.tag) {
      case 26:
        (ge || zn(s, n),
          $n(t, n, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s)));
        break;
      case 27:
        ge || zn(s, n);
        var r = te,
          f = He;
        (Di(s.type) && ((te = s.stateNode), (He = !1)),
          $n(t, n, s),
          dl(s.stateNode),
          (te = r),
          (He = f));
        break;
      case 5:
        ge || zn(s, n);
      case 6:
        if (
          ((r = te),
          (f = He),
          (te = null),
          $n(t, n, s),
          (te = r),
          (He = f),
          te !== null)
        )
          if (He)
            try {
              (te.nodeType === 9
                ? te.body
                : te.nodeName === "HTML"
                  ? te.ownerDocument.body
                  : te
              ).removeChild(s.stateNode);
            } catch (g) {
              qt(s, n, g);
            }
          else
            try {
              te.removeChild(s.stateNode);
            } catch (g) {
              qt(s, n, g);
            }
        break;
      case 18:
        te !== null &&
          (He
            ? ((t = te),
              $p(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                s.stateNode,
              ),
              fs(t))
            : $p(te, s.stateNode));
        break;
      case 4:
        ((r = te),
          (f = He),
          (te = s.stateNode.containerInfo),
          (He = !0),
          $n(t, n, s),
          (te = r),
          (He = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Si(2, s, n), ge || Si(4, s, n), $n(t, n, s));
        break;
      case 1:
        (ge ||
          (zn(s, n),
          (r = s.stateNode),
          typeof r.componentWillUnmount == "function" && Jg(s, n, r)),
          $n(t, n, s));
        break;
      case 21:
        $n(t, n, s);
        break;
      case 22:
        ((ge = (r = ge) || s.memoizedState !== null), $n(t, n, s), (ge = r));
        break;
      default:
        $n(t, n, s);
    }
  }
  function op(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        fs(t);
      } catch (s) {
        qt(n, n.return, s);
      }
    }
  }
  function rp(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        fs(t);
      } catch (s) {
        qt(n, n.return, s);
      }
  }
  function r1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return (n === null && (n = t.stateNode = new ip()), n);
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new ip()),
          n
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function Fo(t, n) {
    var s = r1(t);
    n.forEach(function (r) {
      if (!s.has(r)) {
        s.add(r);
        var f = b1.bind(null, t, r);
        r.then(f, f);
      }
    });
  }
  function Ne(t, n) {
    var s = n.deletions;
    if (s !== null)
      for (var r = 0; r < s.length; r++) {
        var f = s[r],
          g = t,
          y = n,
          M = y;
        t: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (Di(M.type)) {
                ((te = M.stateNode), (He = !1));
                break t;
              }
              break;
            case 5:
              ((te = M.stateNode), (He = !1));
              break t;
            case 3:
            case 4:
              ((te = M.stateNode.containerInfo), (He = !0));
              break t;
          }
          M = M.return;
        }
        if (te === null) throw Error(l(160));
        (lp(g, y, f),
          (te = null),
          (He = !1),
          (g = f.alternate),
          g !== null && (g.return = null),
          (f.return = null));
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) (cp(n, t), (n = n.sibling));
  }
  var Mn = null;
  function cp(t, n) {
    var s = t.alternate,
      r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ne(n, t),
          Ue(t),
          r & 4 && (Si(3, t, t.return), il(3, t), Si(5, t, t.return)));
        break;
      case 1:
        (Ne(n, t),
          Ue(t),
          r & 512 && (ge || s === null || zn(s, s.return)),
          r & 64 &&
            Wn &&
            ((t = t.updateQueue),
            t !== null &&
              ((r = t.callbacks),
              r !== null &&
                ((s = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = s === null ? r : s.concat(r))))));
        break;
      case 26:
        var f = Mn;
        if (
          (Ne(n, t),
          Ue(t),
          r & 512 && (ge || s === null || zn(s, s.return)),
          r & 4)
        ) {
          var g = s !== null ? s.memoizedState : null;
          if (((r = t.memoizedState), s === null))
            if (r === null)
              if (t.stateNode === null) {
                t: {
                  ((r = t.type),
                    (s = t.memoizedProps),
                    (f = f.ownerDocument || f));
                  e: switch (r) {
                    case "title":
                      ((g = f.getElementsByTagName("title")[0]),
                        (!g ||
                          g[zs] ||
                          g[_e] ||
                          g.namespaceURI === "http://www.w3.org/2000/svg" ||
                          g.hasAttribute("itemprop")) &&
                          ((g = f.createElement(r)),
                          f.head.insertBefore(
                            g,
                            f.querySelector("head > title"),
                          )),
                        Ce(g, r, s),
                        (g[_e] = t),
                        be(g),
                        (r = g));
                      break t;
                    case "link":
                      var y = cm("link", "href", f).get(r + (s.href || ""));
                      if (y) {
                        for (var M = 0; M < y.length; M++)
                          if (
                            ((g = y[M]),
                            g.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              g.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              g.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              g.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            y.splice(M, 1);
                            break e;
                          }
                      }
                      ((g = f.createElement(r)),
                        Ce(g, r, s),
                        f.head.appendChild(g));
                      break;
                    case "meta":
                      if (
                        (y = cm("meta", "content", f).get(
                          r + (s.content || ""),
                        ))
                      ) {
                        for (M = 0; M < y.length; M++)
                          if (
                            ((g = y[M]),
                            g.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              g.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              g.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              g.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              g.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            y.splice(M, 1);
                            break e;
                          }
                      }
                      ((g = f.createElement(r)),
                        Ce(g, r, s),
                        f.head.appendChild(g));
                      break;
                    default:
                      throw Error(l(468, r));
                  }
                  ((g[_e] = t), be(g), (r = g));
                }
                t.stateNode = r;
              } else um(f, t.type, t.stateNode);
            else t.stateNode = rm(f, r, t.memoizedProps);
          else
            g !== r
              ? (g === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : g.count--,
                r === null
                  ? um(f, t.type, t.stateNode)
                  : rm(f, r, t.memoizedProps))
              : r === null &&
                t.stateNode !== null &&
                Tu(t, t.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        (Ne(n, t),
          Ue(t),
          r & 512 && (ge || s === null || zn(s, s.return)),
          s !== null && r & 4 && Tu(t, t.memoizedProps, s.memoizedProps));
        break;
      case 5:
        if (
          (Ne(n, t),
          Ue(t),
          r & 512 && (ge || s === null || zn(s, s.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            Ba(f, "");
          } catch (ct) {
            qt(t, t.return, ct);
          }
        }
        (r & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), Tu(t, f, s !== null ? s.memoizedProps : f)),
          r & 1024 && (zu = !0));
        break;
      case 6:
        if ((Ne(n, t), Ue(t), r & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          ((r = t.memoizedProps), (s = t.stateNode));
          try {
            s.nodeValue = r;
          } catch (ct) {
            qt(t, t.return, ct);
          }
        }
        break;
      case 3:
        if (
          ((ir = null),
          (f = Mn),
          (Mn = er(n.containerInfo)),
          Ne(n, t),
          (Mn = f),
          Ue(t),
          r & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            fs(n.containerInfo);
          } catch (ct) {
            qt(t, t.return, ct);
          }
        zu && ((zu = !1), up(t));
        break;
      case 4:
        ((r = Mn),
          (Mn = er(t.stateNode.containerInfo)),
          Ne(n, t),
          Ue(t),
          (Mn = r));
        break;
      case 12:
        (Ne(n, t), Ue(t));
        break;
      case 31:
        (Ne(n, t),
          Ue(t),
          r & 4 &&
            ((r = t.updateQueue),
            r !== null && ((t.updateQueue = null), Fo(t, r))));
        break;
      case 13:
        (Ne(n, t),
          Ue(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (Vo = Nt()),
          r & 4 &&
            ((r = t.updateQueue),
            r !== null && ((t.updateQueue = null), Fo(t, r))));
        break;
      case 22:
        f = t.memoizedState !== null;
        var D = s !== null && s.memoizedState !== null,
          q = Wn,
          K = ge;
        if (
          ((Wn = q || f),
          (ge = K || D),
          Ne(n, t),
          (ge = K),
          (Wn = q),
          Ue(t),
          r & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = f ? n._visibility & -2 : n._visibility | 1,
              f && (s === null || D || Wn || ge || ca(t)),
              s = null,
              n = t;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (s === null) {
                D = s = n;
                try {
                  if (((g = D.stateNode), f))
                    ((y = g.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none"));
                  else {
                    M = D.stateNode;
                    var W = D.memoizedProps.style,
                      Y =
                        W != null && W.hasOwnProperty("display")
                          ? W.display
                          : null;
                    M.style.display =
                      Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (ct) {
                  qt(D, D.return, ct);
                }
              }
            } else if (n.tag === 6) {
              if (s === null) {
                D = n;
                try {
                  D.stateNode.nodeValue = f ? "" : D.memoizedProps;
                } catch (ct) {
                  qt(D, D.return, ct);
                }
              }
            } else if (n.tag === 18) {
              if (s === null) {
                D = n;
                try {
                  var X = D.stateNode;
                  f ? Jp(X, !0) : Jp(D.stateNode, !1);
                } catch (ct) {
                  qt(D, D.return, ct);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              (s === n && (s = null), (n = n.return));
            }
            (s === n && (s = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        r & 4 &&
          ((r = t.updateQueue),
          r !== null &&
            ((s = r.retryQueue),
            s !== null && ((r.retryQueue = null), Fo(t, s))));
        break;
      case 19:
        (Ne(n, t),
          Ue(t),
          r & 4 &&
            ((r = t.updateQueue),
            r !== null && ((t.updateQueue = null), Fo(t, r))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ne(n, t), Ue(t));
    }
  }
  function Ue(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var s, r = t.return; r !== null; ) {
          if (ep(r)) {
            s = r;
            break;
          }
          r = r.return;
        }
        if (s == null) throw Error(l(160));
        switch (s.tag) {
          case 27:
            var f = s.stateNode,
              g = Ou(t);
            qo(t, g, f);
            break;
          case 5:
            var y = s.stateNode;
            s.flags & 32 && (Ba(y, ""), (s.flags &= -33));
            var M = Ou(t);
            qo(t, M, y);
            break;
          case 3:
          case 4:
            var D = s.stateNode.containerInfo,
              q = Ou(t);
            Du(t, q, D);
            break;
          default:
            throw Error(l(161));
        }
      } catch (K) {
        qt(t, t.return, K);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function up(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        (up(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Jn(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (ap(t, n.alternate, n), (n = n.sibling));
  }
  function ca(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Si(4, n, n.return), ca(n));
          break;
        case 1:
          zn(n, n.return);
          var s = n.stateNode;
          (typeof s.componentWillUnmount == "function" && Jg(n, n.return, s),
            ca(n));
          break;
        case 27:
          dl(n.stateNode);
        case 26:
        case 5:
          (zn(n, n.return), ca(n));
          break;
        case 22:
          n.memoizedState === null && ca(n);
          break;
        case 30:
          ca(n);
          break;
        default:
          ca(n);
      }
      t = t.sibling;
    }
  }
  function ti(t, n, s) {
    for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var r = n.alternate,
        f = t,
        g = n,
        y = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          (ti(f, g, s), il(4, g));
          break;
        case 1:
          if (
            (ti(f, g, s),
            (r = g),
            (f = r.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (q) {
              qt(r, r.return, q);
            }
          if (((r = g), (f = r.updateQueue), f !== null)) {
            var M = r.stateNode;
            try {
              var D = f.shared.hiddenCallbacks;
              if (D !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < D.length; f++)
                  Fd(D[f], M);
            } catch (q) {
              qt(r, r.return, q);
            }
          }
          (s && y & 64 && $g(g), al(g, g.return));
          break;
        case 27:
          np(g);
        case 26:
        case 5:
          (ti(f, g, s), s && r === null && y & 4 && tp(g), al(g, g.return));
          break;
        case 12:
          ti(f, g, s);
          break;
        case 31:
          (ti(f, g, s), s && y & 4 && op(f, g));
          break;
        case 13:
          (ti(f, g, s), s && y & 4 && rp(f, g));
          break;
        case 22:
          (g.memoizedState === null && ti(f, g, s), al(g, g.return));
          break;
        case 30:
          break;
        default:
          ti(f, g, s);
      }
      n = n.sibling;
    }
  }
  function ku(t, n) {
    var s = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (s = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++, s != null && Gs(s)));
  }
  function Ru(t, n) {
    ((t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Gs(t)));
  }
  function Cn(t, n, s, r) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (fp(t, n, s, r), (n = n.sibling));
  }
  function fp(t, n, s, r) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Cn(t, n, s, r), f & 2048 && il(9, n));
        break;
      case 1:
        Cn(t, n, s, r);
        break;
      case 3:
        (Cn(t, n, s, r),
          f & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Gs(t))));
        break;
      case 12:
        if (f & 2048) {
          (Cn(t, n, s, r), (t = n.stateNode));
          try {
            var g = n.memoizedProps,
              y = g.id,
              M = g.onPostCommit;
            typeof M == "function" &&
              M(
                y,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (D) {
            qt(n, n.return, D);
          }
        } else Cn(t, n, s, r);
        break;
      case 31:
        Cn(t, n, s, r);
        break;
      case 13:
        Cn(t, n, s, r);
        break;
      case 23:
        break;
      case 22:
        ((g = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null
            ? g._visibility & 2
              ? Cn(t, n, s, r)
              : sl(t, n)
            : g._visibility & 2
              ? Cn(t, n, s, r)
              : ((g._visibility |= 2),
                ts(t, n, s, r, (n.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && ku(y, n));
        break;
      case 24:
        (Cn(t, n, s, r), f & 2048 && Ru(n.alternate, n));
        break;
      default:
        Cn(t, n, s, r);
    }
  }
  function ts(t, n, s, r, f) {
    for (
      f = f && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;
    ) {
      var g = t,
        y = n,
        M = s,
        D = r,
        q = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (ts(g, y, M, D, f), il(8, y));
          break;
        case 23:
          break;
        case 22:
          var K = y.stateNode;
          (y.memoizedState !== null
            ? K._visibility & 2
              ? ts(g, y, M, D, f)
              : sl(g, y)
            : ((K._visibility |= 2), ts(g, y, M, D, f)),
            f && q & 2048 && ku(y.alternate, y));
          break;
        case 24:
          (ts(g, y, M, D, f), f && q & 2048 && Ru(y.alternate, y));
          break;
        default:
          ts(g, y, M, D, f);
      }
      n = n.sibling;
    }
  }
  function sl(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var s = t,
          r = n,
          f = r.flags;
        switch (r.tag) {
          case 22:
            (sl(s, r), f & 2048 && ku(r.alternate, r));
            break;
          case 24:
            (sl(s, r), f & 2048 && Ru(r.alternate, r));
            break;
          default:
            sl(s, r);
        }
        n = n.sibling;
      }
  }
  var ll = 8192;
  function es(t, n, s) {
    if (t.subtreeFlags & ll)
      for (t = t.child; t !== null; ) (hp(t, n, s), (t = t.sibling));
  }
  function hp(t, n, s) {
    switch (t.tag) {
      case 26:
        (es(t, n, s),
          t.flags & ll &&
            t.memoizedState !== null &&
            K1(s, Mn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        es(t, n, s);
        break;
      case 3:
      case 4:
        var r = Mn;
        ((Mn = er(t.stateNode.containerInfo)), es(t, n, s), (Mn = r));
        break;
      case 22:
        t.memoizedState === null &&
          ((r = t.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = ll), (ll = 16777216), es(t, n, s), (ll = r))
            : es(t, n, s));
        break;
      default:
        es(t, n, s);
    }
  }
  function dp(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do ((n = t.sibling), (t.sibling = null), (t = n));
      while (t !== null);
    }
  }
  function ol(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var r = n[s];
          ((ye = r), pp(r, t));
        }
      dp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (gp(t), (t = t.sibling));
  }
  function gp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ol(t), t.flags & 2048 && Si(9, t, t.return));
        break;
      case 3:
        ol(t);
        break;
      case 12:
        ol(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), Yo(t))
          : ol(t);
        break;
      default:
        ol(t);
    }
  }
  function Yo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var r = n[s];
          ((ye = r), pp(r, t));
        }
      dp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          (Si(8, n, n.return), Yo(n));
          break;
        case 22:
          ((s = n.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Yo(n)));
          break;
        default:
          Yo(n);
      }
      t = t.sibling;
    }
  }
  function pp(t, n) {
    for (; ye !== null; ) {
      var s = ye;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, s, n);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var r = s.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Gs(s.memoizedState.cache);
      }
      if (((r = s.child), r !== null)) ((r.return = s), (ye = r));
      else
        t: for (s = t; ye !== null; ) {
          r = ye;
          var f = r.sibling,
            g = r.return;
          if ((sp(r), r === s)) {
            ye = null;
            break t;
          }
          if (f !== null) {
            ((f.return = g), (ye = f));
            break t;
          }
          ye = g;
        }
    }
  }
  var c1 = {
      getCacheForType: function (t) {
        var n = Se(fe),
          s = n.data.get(t);
        return (s === void 0 && ((s = t()), n.data.set(t, s)), s);
      },
      cacheSignal: function () {
        return Se(fe).controller.signal;
      },
    },
    u1 = typeof WeakMap == "function" ? WeakMap : Map,
    Bt = 0,
    Kt = null,
    St = null,
    Ct = 0,
    Ut = 0,
    We = null,
    Mi = !1,
    ns = !1,
    Bu = !1,
    ei = 0,
    ie = 0,
    Ci = 0,
    ua = 0,
    Lu = 0,
    $e = 0,
    is = 0,
    rl = null,
    qe = null,
    ju = !1,
    Vo = 0,
    mp = 0,
    Go = 1 / 0,
    Xo = null,
    Ei = null,
    pe = 0,
    Ai = null,
    as = null,
    ni = 0,
    Hu = 0,
    Nu = null,
    bp = null,
    cl = 0,
    Uu = null;
  function Je() {
    return (Bt & 2) !== 0 && Ct !== 0 ? Ct & -Ct : j.T !== null ? Xu() : Rh();
  }
  function yp() {
    if ($e === 0)
      if ((Ct & 536870912) === 0 || At) {
        var t = $l;
        (($l <<= 1), ($l & 3932160) === 0 && ($l = 262144), ($e = t));
      } else $e = 536870912;
    return ((t = Pe.current), t !== null && (t.flags |= 32), $e);
  }
  function Fe(t, n, s) {
    (((t === Kt && (Ut === 2 || Ut === 9)) || t.cancelPendingCommit !== null) &&
      (ss(t, 0), Ti(t, Ct, $e, !1)),
      Ds(t, s),
      ((Bt & 2) === 0 || t !== Kt) &&
        (t === Kt &&
          ((Bt & 2) === 0 && (ua |= s), ie === 4 && Ti(t, Ct, $e, !1)),
        kn(t)));
  }
  function vp(t, n, s) {
    if ((Bt & 6) !== 0) throw Error(l(327));
    var r = (!s && (n & 127) === 0 && (n & t.expiredLanes) === 0) || Os(t, n),
      f = r ? d1(t, n) : Fu(t, n, !0),
      g = r;
    do {
      if (f === 0) {
        ns && !r && Ti(t, n, 0, !1);
        break;
      } else {
        if (((s = t.current.alternate), g && !f1(s))) {
          ((f = Fu(t, n, !1)), (g = !1));
          continue;
        }
        if (f === 2) {
          if (((g = n), t.errorRecoveryDisabledLanes & g)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            n = y;
            t: {
              var M = t;
              f = rl;
              var D = M.current.memoizedState.isDehydrated;
              if ((D && (ss(M, y).flags |= 256), (y = Fu(M, y, !1)), y !== 2)) {
                if (Bu && !D) {
                  ((M.errorRecoveryDisabledLanes |= g), (ua |= g), (f = 4));
                  break t;
                }
                ((g = qe),
                  (qe = f),
                  g !== null &&
                    (qe === null ? (qe = g) : qe.push.apply(qe, g)));
              }
              f = y;
            }
            if (((g = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (ss(t, 0), Ti(t, n, 0, !0));
          break;
        }
        t: {
          switch (((r = t), (g = f), g)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ti(r, n, $e, !Mi);
              break t;
            case 2:
              qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((f = Vo + 300 - Nt()), 10 < f)) {
            if ((Ti(r, n, $e, !Mi), to(r, 0, !0) !== 0)) break t;
            ((ni = n),
              (r.timeoutHandle = Ip(
                wp.bind(
                  null,
                  r,
                  s,
                  qe,
                  Xo,
                  ju,
                  n,
                  $e,
                  ua,
                  is,
                  Mi,
                  g,
                  "Throttled",
                  -0,
                  0,
                ),
                f,
              )));
            break t;
          }
          wp(r, s, qe, Xo, ju, n, $e, ua, is, Mi, g, null, -0, 0);
        }
      }
      break;
    } while (!0);
    kn(t);
  }
  function wp(t, n, s, r, f, g, y, M, D, q, K, W, Y, X) {
    if (
      ((t.timeoutHandle = -1),
      (W = n.subtreeFlags),
      W & 8192 || (W & 16785408) === 16785408)
    ) {
      ((W = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Fn,
      }),
        hp(n, g, W));
      var ct =
        (g & 62914560) === g ? Vo - Nt() : (g & 4194048) === g ? mp - Nt() : 0;
      if (((ct = P1(W, ct)), ct !== null)) {
        ((ni = g),
          (t.cancelPendingCommit = ct(
            Tp.bind(null, t, n, g, s, r, f, y, M, D, K, W, null, Y, X),
          )),
          Ti(t, g, y, !q));
        return;
      }
    }
    Tp(t, n, g, s, r, f, y, M, D);
  }
  function f1(t) {
    for (var n = t; ; ) {
      var s = n.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        n.flags & 16384 &&
        ((s = n.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var r = 0; r < s.length; r++) {
          var f = s[r],
            g = f.getSnapshot;
          f = f.value;
          try {
            if (!Ze(g(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
        ((s.return = n), (n = s));
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function Ti(t, n, s, r) {
    ((n &= ~Lu),
      (n &= ~ua),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      r && (t.warmLanes |= n),
      (r = t.expirationTimes));
    for (var f = n; 0 < f; ) {
      var g = 31 - Qe(f),
        y = 1 << g;
      ((r[g] = -1), (f &= ~y));
    }
    s !== 0 && Dh(t, s, n);
  }
  function Qo() {
    return (Bt & 6) === 0 ? (ul(0), !1) : !0;
  }
  function qu() {
    if (St !== null) {
      if (Ut === 0) var t = St.return;
      else ((t = St), (Xn = ea = null), nu(t), (Pa = null), (Qs = 0), (t = St));
      for (; t !== null; ) (Wg(t.alternate, t), (t = t.return));
      St = null;
    }
  }
  function ss(t, n) {
    var s = t.timeoutHandle;
    (s !== -1 && ((t.timeoutHandle = -1), z1(s)),
      (s = t.cancelPendingCommit),
      s !== null && ((t.cancelPendingCommit = null), s()),
      (ni = 0),
      qu(),
      (Kt = t),
      (St = s = Vn(t.current, null)),
      (Ct = n),
      (Ut = 0),
      (We = null),
      (Mi = !1),
      (ns = Os(t, n)),
      (Bu = !1),
      (is = $e = Lu = ua = Ci = ie = 0),
      (qe = rl = null),
      (ju = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= n; 0 < r; ) {
        var f = 31 - Qe(r),
          g = 1 << f;
        ((n |= t[f]), (r &= ~g));
      }
    return ((ei = n), ho(), s);
  }
  function _p(t, n) {
    ((wt = null),
      (j.H = tl),
      n === Ka || n === _o
        ? ((n = Hd()), (Ut = 3))
        : n === Gc
          ? ((n = Hd()), (Ut = 4))
          : (Ut =
              n === yu
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (We = n),
      St === null && ((ie = 1), Lo(t, fn(n, t.current))));
  }
  function xp() {
    var t = Pe.current;
    return t === null
      ? !0
      : (Ct & 4194048) === Ct
        ? pn === null
        : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0
          ? t === pn
          : !1;
  }
  function Sp() {
    var t = j.H;
    return ((j.H = tl), t === null ? tl : t);
  }
  function Mp() {
    var t = j.A;
    return ((j.A = c1), t);
  }
  function Zo() {
    ((ie = 4),
      Mi || ((Ct & 4194048) !== Ct && Pe.current !== null) || (ns = !0),
      ((Ci & 134217727) === 0 && (ua & 134217727) === 0) ||
        Kt === null ||
        Ti(Kt, Ct, $e, !1));
  }
  function Fu(t, n, s) {
    var r = Bt;
    Bt |= 2;
    var f = Sp(),
      g = Mp();
    ((Kt !== t || Ct !== n) && ((Xo = null), ss(t, n)), (n = !1));
    var y = ie;
    t: do
      try {
        if (Ut !== 0 && St !== null) {
          var M = St,
            D = We;
          switch (Ut) {
            case 8:
              (qu(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (n = !0);
              var q = Ut;
              if (((Ut = 0), (We = null), ls(t, M, D, q), s && ns)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((q = Ut), (Ut = 0), (We = null), ls(t, M, D, q));
          }
        }
        (h1(), (y = ie));
        break;
      } catch (K) {
        _p(t, K);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Xn = ea = null),
      (Bt = r),
      (j.H = f),
      (j.A = g),
      St === null && ((Kt = null), (Ct = 0), ho()),
      y
    );
  }
  function h1() {
    for (; St !== null; ) Cp(St);
  }
  function d1(t, n) {
    var s = Bt;
    Bt |= 2;
    var r = Sp(),
      f = Mp();
    Kt !== t || Ct !== n
      ? ((Xo = null), (Go = Nt() + 500), ss(t, n))
      : (ns = Os(t, n));
    t: do
      try {
        if (Ut !== 0 && St !== null) {
          n = St;
          var g = We;
          e: switch (Ut) {
            case 1:
              ((Ut = 0), (We = null), ls(t, n, g, 1));
              break;
            case 2:
            case 9:
              if (Ld(g)) {
                ((Ut = 0), (We = null), Ep(n));
                break;
              }
              ((n = function () {
                ((Ut !== 2 && Ut !== 9) || Kt !== t || (Ut = 7), kn(t));
              }),
                g.then(n, n));
              break t;
            case 3:
              Ut = 7;
              break t;
            case 4:
              Ut = 5;
              break t;
            case 7:
              Ld(g)
                ? ((Ut = 0), (We = null), Ep(n))
                : ((Ut = 0), (We = null), ls(t, n, g, 7));
              break;
            case 5:
              var y = null;
              switch (St.tag) {
                case 26:
                  y = St.memoizedState;
                case 5:
                case 27:
                  var M = St;
                  if (y ? fm(y) : M.stateNode.complete) {
                    ((Ut = 0), (We = null));
                    var D = M.sibling;
                    if (D !== null) St = D;
                    else {
                      var q = M.return;
                      q !== null ? ((St = q), Ko(q)) : (St = null);
                    }
                    break e;
                  }
              }
              ((Ut = 0), (We = null), ls(t, n, g, 5));
              break;
            case 6:
              ((Ut = 0), (We = null), ls(t, n, g, 6));
              break;
            case 8:
              (qu(), (ie = 6));
              break t;
            default:
              throw Error(l(462));
          }
        }
        g1();
        break;
      } catch (K) {
        _p(t, K);
      }
    while (!0);
    return (
      (Xn = ea = null),
      (j.H = r),
      (j.A = f),
      (Bt = s),
      St !== null ? 0 : ((Kt = null), (Ct = 0), ho(), ie)
    );
  }
  function g1() {
    for (; St !== null && !sn(); ) Cp(St);
  }
  function Cp(t) {
    var n = Pg(t.alternate, t, ei);
    ((t.memoizedProps = t.pendingProps), n === null ? Ko(t) : (St = n));
  }
  function Ep(t) {
    var n = t,
      s = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Vg(s, n, n.pendingProps, n.type, void 0, Ct);
        break;
      case 11:
        n = Vg(s, n, n.pendingProps, n.type.render, n.ref, Ct);
        break;
      case 5:
        nu(n);
      default:
        (Wg(s, n), (n = St = Md(n, ei)), (n = Pg(s, n, ei)));
    }
    ((t.memoizedProps = t.pendingProps), n === null ? Ko(t) : (St = n));
  }
  function ls(t, n, s, r) {
    ((Xn = ea = null), nu(n), (Pa = null), (Qs = 0));
    var f = n.return;
    try {
      if (n1(t, f, n, s, Ct)) {
        ((ie = 1), Lo(t, fn(s, t.current)), (St = null));
        return;
      }
    } catch (g) {
      if (f !== null) throw ((St = f), g);
      ((ie = 1), Lo(t, fn(s, t.current)), (St = null));
      return;
    }
    n.flags & 32768
      ? (At || r === 1
          ? (t = !0)
          : ns || (Ct & 536870912) !== 0
            ? (t = !1)
            : ((Mi = t = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = Pe.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
        Ap(n, t))
      : Ko(n);
  }
  function Ko(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Ap(n, Mi);
        return;
      }
      t = n.return;
      var s = s1(n.alternate, n, ei);
      if (s !== null) {
        St = s;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        St = n;
        return;
      }
      St = n = t;
    } while (n !== null);
    ie === 0 && (ie = 5);
  }
  function Ap(t, n) {
    do {
      var s = l1(t.alternate, t);
      if (s !== null) {
        ((s.flags &= 32767), (St = s));
        return;
      }
      if (
        ((s = t.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        St = t;
        return;
      }
      St = t = s;
    } while (t !== null);
    ((ie = 6), (St = null));
  }
  function Tp(t, n, s, r, f, g, y, M, D) {
    t.cancelPendingCommit = null;
    do Po();
    while (pe !== 0);
    if ((Bt & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === t.current) throw Error(l(177));
      if (
        ((g = n.lanes | n.childLanes),
        (g |= Oc),
        Z2(t, s, g, y, M, D),
        t === Kt && ((St = Kt = null), (Ct = 0)),
        (as = n),
        (Ai = t),
        (ni = s),
        (Hu = g),
        (Nu = f),
        (bp = r),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            y1(Be, function () {
              return (Rp(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (r = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || r)
      ) {
        ((r = j.T), (j.T = null), (f = G.p), (G.p = 2), (y = Bt), (Bt |= 4));
        try {
          o1(t, n, s);
        } finally {
          ((Bt = y), (G.p = f), (j.T = r));
        }
      }
      ((pe = 1), Op(), Dp(), zp());
    }
  }
  function Op() {
    if (pe === 1) {
      pe = 0;
      var t = Ai,
        n = as,
        s = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || s) {
        ((s = j.T), (j.T = null));
        var r = G.p;
        G.p = 2;
        var f = Bt;
        Bt |= 4;
        try {
          cp(n, t);
          var g = Ju,
            y = pd(t.containerInfo),
            M = g.focusedElem,
            D = g.selectionRange;
          if (
            y !== M &&
            M &&
            M.ownerDocument &&
            gd(M.ownerDocument.documentElement, M)
          ) {
            if (D !== null && Mc(M)) {
              var q = D.start,
                K = D.end;
              if ((K === void 0 && (K = q), "selectionStart" in M))
                ((M.selectionStart = q),
                  (M.selectionEnd = Math.min(K, M.value.length)));
              else {
                var W = M.ownerDocument || document,
                  Y = (W && W.defaultView) || window;
                if (Y.getSelection) {
                  var X = Y.getSelection(),
                    ct = M.textContent.length,
                    mt = Math.min(D.start, ct),
                    Zt = D.end === void 0 ? mt : Math.min(D.end, ct);
                  !X.extend && mt > Zt && ((y = Zt), (Zt = mt), (mt = y));
                  var L = dd(M, mt),
                    z = dd(M, Zt);
                  if (
                    L &&
                    z &&
                    (X.rangeCount !== 1 ||
                      X.anchorNode !== L.node ||
                      X.anchorOffset !== L.offset ||
                      X.focusNode !== z.node ||
                      X.focusOffset !== z.offset)
                  ) {
                    var N = W.createRange();
                    (N.setStart(L.node, L.offset),
                      X.removeAllRanges(),
                      mt > Zt
                        ? (X.addRange(N), X.extend(z.node, z.offset))
                        : (N.setEnd(z.node, z.offset), X.addRange(N)));
                  }
                }
              }
            }
            for (W = [], X = M; (X = X.parentNode); )
              X.nodeType === 1 &&
                W.push({ element: X, left: X.scrollLeft, top: X.scrollTop });
            for (
              typeof M.focus == "function" && M.focus(), M = 0;
              M < W.length;
              M++
            ) {
              var P = W[M];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((or = !!$u), (Ju = $u = null));
        } finally {
          ((Bt = f), (G.p = r), (j.T = s));
        }
      }
      ((t.current = n), (pe = 2));
    }
  }
  function Dp() {
    if (pe === 2) {
      pe = 0;
      var t = Ai,
        n = as,
        s = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || s) {
        ((s = j.T), (j.T = null));
        var r = G.p;
        G.p = 2;
        var f = Bt;
        Bt |= 4;
        try {
          ap(t, n.alternate, n);
        } finally {
          ((Bt = f), (G.p = r), (j.T = s));
        }
      }
      pe = 3;
    }
  }
  function zp() {
    if (pe === 4 || pe === 3) {
      ((pe = 0), Qi());
      var t = Ai,
        n = as,
        s = ni,
        r = bp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (pe = 5)
        : ((pe = 0), (as = Ai = null), kp(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Ei = null),
        sc(s),
        (n = n.stateNode),
        Ae && typeof Ae.onCommitFiberRoot == "function")
      )
        try {
          Ae.onCommitFiberRoot(xn, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        ((n = j.T), (f = G.p), (G.p = 2), (j.T = null));
        try {
          for (var g = t.onRecoverableError, y = 0; y < r.length; y++) {
            var M = r[y];
            g(M.value, { componentStack: M.stack });
          }
        } finally {
          ((j.T = n), (G.p = f));
        }
      }
      ((ni & 3) !== 0 && Po(),
        kn(t),
        (f = t.pendingLanes),
        (s & 261930) !== 0 && (f & 42) !== 0
          ? t === Uu
            ? cl++
            : ((cl = 0), (Uu = t))
          : (cl = 0),
        ul(0));
    }
  }
  function kp(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Gs(n)));
  }
  function Po() {
    return (Op(), Dp(), zp(), Rp());
  }
  function Rp() {
    if (pe !== 5) return !1;
    var t = Ai,
      n = Hu;
    Hu = 0;
    var s = sc(ni),
      r = j.T,
      f = G.p;
    try {
      ((G.p = 32 > s ? 32 : s), (j.T = null), (s = Nu), (Nu = null));
      var g = Ai,
        y = ni;
      if (((pe = 0), (as = Ai = null), (ni = 0), (Bt & 6) !== 0))
        throw Error(l(331));
      var M = Bt;
      if (
        ((Bt |= 4),
        gp(g.current),
        fp(g, g.current, y, s),
        (Bt = M),
        ul(0, !1),
        Ae && typeof Ae.onPostCommitFiberRoot == "function")
      )
        try {
          Ae.onPostCommitFiberRoot(xn, g);
        } catch {}
      return !0;
    } finally {
      ((G.p = f), (j.T = r), kp(t, n));
    }
  }
  function Bp(t, n, s) {
    ((n = fn(s, n)),
      (n = bu(t.stateNode, n, 2)),
      (t = wi(t, n, 2)),
      t !== null && (Ds(t, 2), kn(t)));
  }
  function qt(t, n, s) {
    if (t.tag === 3) Bp(t, t, s);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Bp(n, t, s);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ei === null || !Ei.has(r)))
          ) {
            ((t = fn(s, t)),
              (s = Lg(2)),
              (r = wi(n, s, 2)),
              r !== null && (jg(s, r, n, t), Ds(r, 2), kn(r)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Yu(t, n, s) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new u1();
      var f = new Set();
      r.set(n, f);
    } else ((f = r.get(n)), f === void 0 && ((f = new Set()), r.set(n, f)));
    f.has(s) ||
      ((Bu = !0), f.add(s), (t = p1.bind(null, t, n, s)), n.then(t, t));
  }
  function p1(t, n, s) {
    var r = t.pingCache;
    (r !== null && r.delete(n),
      (t.pingedLanes |= t.suspendedLanes & s),
      (t.warmLanes &= ~s),
      Kt === t &&
        (Ct & s) === s &&
        (ie === 4 || (ie === 3 && (Ct & 62914560) === Ct && 300 > Nt() - Vo)
          ? (Bt & 2) === 0 && ss(t, 0)
          : (Lu |= s),
        is === Ct && (is = 0)),
      kn(t));
  }
  function Lp(t, n) {
    (n === 0 && (n = Oh()), (t = $i(t, n)), t !== null && (Ds(t, n), kn(t)));
  }
  function m1(t) {
    var n = t.memoizedState,
      s = 0;
    (n !== null && (s = n.retryLane), Lp(t, s));
  }
  function b1(t, n) {
    var s = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var r = t.stateNode,
          f = t.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    (r !== null && r.delete(n), Lp(t, s));
  }
  function y1(t, n) {
    return ee(t, n);
  }
  var Io = null,
    os = null,
    Vu = !1,
    Wo = !1,
    Gu = !1,
    Oi = 0;
  function kn(t) {
    (t !== os &&
      t.next === null &&
      (os === null ? (Io = os = t) : (os = os.next = t)),
      (Wo = !0),
      Vu || ((Vu = !0), w1()));
  }
  function ul(t, n) {
    if (!Gu && Wo) {
      Gu = !0;
      do
        for (var s = !1, r = Io; r !== null; ) {
          if (t !== 0) {
            var f = r.pendingLanes;
            if (f === 0) var g = 0;
            else {
              var y = r.suspendedLanes,
                M = r.pingedLanes;
              ((g = (1 << (31 - Qe(42 | t) + 1)) - 1),
                (g &= f & ~(y & ~M)),
                (g = g & 201326741 ? (g & 201326741) | 1 : g ? g | 2 : 0));
            }
            g !== 0 && ((s = !0), Up(r, g));
          } else
            ((g = Ct),
              (g = to(
                r,
                r === Kt ? g : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
              )),
              (g & 3) === 0 || Os(r, g) || ((s = !0), Up(r, g)));
          r = r.next;
        }
      while (s);
      Gu = !1;
    }
  }
  function v1() {
    jp();
  }
  function jp() {
    Wo = Vu = !1;
    var t = 0;
    Oi !== 0 && D1() && (t = Oi);
    for (var n = Nt(), s = null, r = Io; r !== null; ) {
      var f = r.next,
        g = Hp(r, n);
      (g === 0
        ? ((r.next = null),
          s === null ? (Io = f) : (s.next = f),
          f === null && (os = s))
        : ((s = r), (t !== 0 || (g & 3) !== 0) && (Wo = !0)),
        (r = f));
    }
    ((pe !== 0 && pe !== 5) || ul(t), Oi !== 0 && (Oi = 0));
  }
  function Hp(t, n) {
    for (
      var s = t.suspendedLanes,
        r = t.pingedLanes,
        f = t.expirationTimes,
        g = t.pendingLanes & -62914561;
      0 < g;
    ) {
      var y = 31 - Qe(g),
        M = 1 << y,
        D = f[y];
      (D === -1
        ? ((M & s) === 0 || (M & r) !== 0) && (f[y] = Q2(M, n))
        : D <= n && (t.expiredLanes |= M),
        (g &= ~M));
    }
    if (
      ((n = Kt),
      (s = Ct),
      (s = to(
        t,
        t === n ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (r = t.callbackNode),
      s === 0 ||
        (t === n && (Ut === 2 || Ut === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && Tn(r),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((s & 3) === 0 || Os(t, s)) {
      if (((n = s & -s), n === t.callbackPriority)) return n;
      switch ((r !== null && Tn(r), sc(s))) {
        case 2:
        case 8:
          s = we;
          break;
        case 32:
          s = Be;
          break;
        case 268435456:
          s = Ts;
          break;
        default:
          s = Be;
      }
      return (
        (r = Np.bind(null, t)),
        (s = ee(s, r)),
        (t.callbackPriority = n),
        (t.callbackNode = s),
        n
      );
    }
    return (
      r !== null && r !== null && Tn(r),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Np(t, n) {
    if (pe !== 0 && pe !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var s = t.callbackNode;
    if (Po() && t.callbackNode !== s) return null;
    var r = Ct;
    return (
      (r = to(
        t,
        t === Kt ? r : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      r === 0
        ? null
        : (vp(t, r, n),
          Hp(t, Nt()),
          t.callbackNode != null && t.callbackNode === s
            ? Np.bind(null, t)
            : null)
    );
  }
  function Up(t, n) {
    if (Po()) return null;
    vp(t, n, !0);
  }
  function w1() {
    k1(function () {
      (Bt & 6) !== 0 ? ee(se, v1) : jp();
    });
  }
  function Xu() {
    if (Oi === 0) {
      var t = Qa;
      (t === 0 && ((t = Wl), (Wl <<= 1), (Wl & 261888) === 0 && (Wl = 256)),
        (Oi = t));
    }
    return Oi;
  }
  function qp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : ao("" + t);
  }
  function Fp(t, n) {
    var s = n.ownerDocument.createElement("input");
    return (
      (s.name = n.name),
      (s.value = n.value),
      t.id && s.setAttribute("form", t.id),
      n.parentNode.insertBefore(s, n),
      (t = new FormData(t)),
      s.parentNode.removeChild(s),
      t
    );
  }
  function _1(t, n, s, r, f) {
    if (n === "submit" && s && s.stateNode === f) {
      var g = qp((f[Le] || null).action),
        y = r.submitter;
      y &&
        ((n = (n = y[Le] || null)
          ? qp(n.formAction)
          : y.getAttribute("formAction")),
        n !== null && ((g = n), (y = null)));
      var M = new ro("action", "action", null, r, f);
      t.push({
        event: M,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Oi !== 0) {
                  var D = y ? Fp(f, y) : new FormData(f);
                  fu(
                    s,
                    { pending: !0, data: D, method: f.method, action: g },
                    null,
                    D,
                  );
                }
              } else
                typeof g == "function" &&
                  (M.preventDefault(),
                  (D = y ? Fp(f, y) : new FormData(f)),
                  fu(
                    s,
                    { pending: !0, data: D, method: f.method, action: g },
                    g,
                    D,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Qu = 0; Qu < Tc.length; Qu++) {
    var Zu = Tc[Qu],
      x1 = Zu.toLowerCase(),
      S1 = Zu[0].toUpperCase() + Zu.slice(1);
    Sn(x1, "on" + S1);
  }
  (Sn(yd, "onAnimationEnd"),
    Sn(vd, "onAnimationIteration"),
    Sn(wd, "onAnimationStart"),
    Sn("dblclick", "onDoubleClick"),
    Sn("focusin", "onFocus"),
    Sn("focusout", "onBlur"),
    Sn(Uy, "onTransitionRun"),
    Sn(qy, "onTransitionStart"),
    Sn(Fy, "onTransitionCancel"),
    Sn(_d, "onTransitionEnd"),
    ka("onMouseEnter", ["mouseout", "mouseover"]),
    ka("onMouseLeave", ["mouseout", "mouseover"]),
    ka("onPointerEnter", ["pointerout", "pointerover"]),
    ka("onPointerLeave", ["pointerout", "pointerover"]),
    Ki(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ki(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ki("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ki(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ki(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ki(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var fl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    M1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(fl),
    );
  function Yp(t, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var r = t[s],
        f = r.event;
      r = r.listeners;
      t: {
        var g = void 0;
        if (n)
          for (var y = r.length - 1; 0 <= y; y--) {
            var M = r[y],
              D = M.instance,
              q = M.currentTarget;
            if (((M = M.listener), D !== g && f.isPropagationStopped()))
              break t;
            ((g = M), (f.currentTarget = q));
            try {
              g(f);
            } catch (K) {
              fo(K);
            }
            ((f.currentTarget = null), (g = D));
          }
        else
          for (y = 0; y < r.length; y++) {
            if (
              ((M = r[y]),
              (D = M.instance),
              (q = M.currentTarget),
              (M = M.listener),
              D !== g && f.isPropagationStopped())
            )
              break t;
            ((g = M), (f.currentTarget = q));
            try {
              g(f);
            } catch (K) {
              fo(K);
            }
            ((f.currentTarget = null), (g = D));
          }
      }
    }
  }
  function Mt(t, n) {
    var s = n[lc];
    s === void 0 && (s = n[lc] = new Set());
    var r = t + "__bubble";
    s.has(r) || (Vp(n, t, 2, !1), s.add(r));
  }
  function Ku(t, n, s) {
    var r = 0;
    (n && (r |= 4), Vp(s, t, r, n));
  }
  var $o = "_reactListening" + Math.random().toString(36).slice(2);
  function Pu(t) {
    if (!t[$o]) {
      ((t[$o] = !0),
        jh.forEach(function (s) {
          s !== "selectionchange" && (M1.has(s) || Ku(s, !1, t), Ku(s, !0, t));
        }));
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[$o] || ((n[$o] = !0), Ku("selectionchange", !1, n));
    }
  }
  function Vp(t, n, s, r) {
    switch (ym(n)) {
      case 2:
        var f = $1;
        break;
      case 8:
        f = J1;
        break;
      default:
        f = ff;
    }
    ((s = f.bind(null, n, s, t)),
      (f = void 0),
      !pc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      r
        ? f !== void 0
          ? t.addEventListener(n, s, { capture: !0, passive: f })
          : t.addEventListener(n, s, !0)
        : f !== void 0
          ? t.addEventListener(n, s, { passive: f })
          : t.addEventListener(n, s, !1));
  }
  function Iu(t, n, s, r, f) {
    var g = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
      t: for (;;) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var M = r.stateNode.containerInfo;
          if (M === f) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var D = y.tag;
              if ((D === 3 || D === 4) && y.stateNode.containerInfo === f)
                return;
              y = y.return;
            }
          for (; M !== null; ) {
            if (((y = Oa(M)), y === null)) return;
            if (((D = y.tag), D === 5 || D === 6 || D === 26 || D === 27)) {
              r = g = y;
              continue t;
            }
            M = M.parentNode;
          }
        }
        r = r.return;
      }
    Kh(function () {
      var q = g,
        K = dc(s),
        W = [];
      t: {
        var Y = xd.get(t);
        if (Y !== void 0) {
          var X = ro,
            ct = t;
          switch (t) {
            case "keypress":
              if (lo(s) === 0) break t;
            case "keydown":
            case "keyup":
              X = by;
              break;
            case "focusin":
              ((ct = "focus"), (X = vc));
              break;
            case "focusout":
              ((ct = "blur"), (X = vc));
              break;
            case "beforeblur":
            case "afterblur":
              X = vc;
              break;
            case "click":
              if (s.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = Wh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = sy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = wy;
              break;
            case yd:
            case vd:
            case wd:
              X = ry;
              break;
            case _d:
              X = xy;
              break;
            case "scroll":
            case "scrollend":
              X = iy;
              break;
            case "wheel":
              X = My;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = uy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Jh;
              break;
            case "toggle":
            case "beforetoggle":
              X = Ey;
          }
          var mt = (n & 4) !== 0,
            Zt = !mt && (t === "scroll" || t === "scrollend"),
            L = mt ? (Y !== null ? Y + "Capture" : null) : Y;
          mt = [];
          for (var z = q, N; z !== null; ) {
            var P = z;
            if (
              ((N = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                N === null ||
                L === null ||
                ((P = Rs(z, L)), P != null && mt.push(hl(z, P, N))),
              Zt)
            )
              break;
            z = z.return;
          }
          0 < mt.length &&
            ((Y = new X(Y, ct, null, s, K)),
            W.push({ event: Y, listeners: mt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((Y = t === "mouseover" || t === "pointerover"),
            (X = t === "mouseout" || t === "pointerout"),
            Y &&
              s !== hc &&
              (ct = s.relatedTarget || s.fromElement) &&
              (Oa(ct) || ct[Ta]))
          )
            break t;
          if (
            (X || Y) &&
            ((Y =
              K.window === K
                ? K
                : (Y = K.ownerDocument)
                  ? Y.defaultView || Y.parentWindow
                  : window),
            X
              ? ((ct = s.relatedTarget || s.toElement),
                (X = q),
                (ct = ct ? Oa(ct) : null),
                ct !== null &&
                  ((Zt = c(ct)),
                  (mt = ct.tag),
                  ct !== Zt || (mt !== 5 && mt !== 27 && mt !== 6)) &&
                  (ct = null))
              : ((X = null), (ct = q)),
            X !== ct)
          ) {
            if (
              ((mt = Wh),
              (P = "onMouseLeave"),
              (L = "onMouseEnter"),
              (z = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((mt = Jh),
                (P = "onPointerLeave"),
                (L = "onPointerEnter"),
                (z = "pointer")),
              (Zt = X == null ? Y : ks(X)),
              (N = ct == null ? Y : ks(ct)),
              (Y = new mt(P, z + "leave", X, s, K)),
              (Y.target = Zt),
              (Y.relatedTarget = N),
              (P = null),
              Oa(K) === q &&
                ((mt = new mt(L, z + "enter", ct, s, K)),
                (mt.target = N),
                (mt.relatedTarget = Zt),
                (P = mt)),
              (Zt = P),
              X && ct)
            )
              e: {
                for (mt = C1, L = X, z = ct, N = 0, P = L; P; P = mt(P)) N++;
                P = 0;
                for (var gt = z; gt; gt = mt(gt)) P++;
                for (; 0 < N - P; ) ((L = mt(L)), N--);
                for (; 0 < P - N; ) ((z = mt(z)), P--);
                for (; N--; ) {
                  if (L === z || (z !== null && L === z.alternate)) {
                    mt = L;
                    break e;
                  }
                  ((L = mt(L)), (z = mt(z)));
                }
                mt = null;
              }
            else mt = null;
            (X !== null && Gp(W, Y, X, mt, !1),
              ct !== null && Zt !== null && Gp(W, Zt, ct, mt, !0));
          }
        }
        t: {
          if (
            ((Y = q ? ks(q) : window),
            (X = Y.nodeName && Y.nodeName.toLowerCase()),
            X === "select" || (X === "input" && Y.type === "file"))
          )
            var kt = od;
          else if (sd(Y))
            if (rd) kt = jy;
            else {
              kt = By;
              var ut = Ry;
            }
          else
            ((X = Y.nodeName),
              !X ||
              X.toLowerCase() !== "input" ||
              (Y.type !== "checkbox" && Y.type !== "radio")
                ? q && fc(q.elementType) && (kt = od)
                : (kt = Ly));
          if (kt && (kt = kt(t, q))) {
            ld(W, kt, s, K);
            break t;
          }
          (ut && ut(t, Y, q),
            t === "focusout" &&
              q &&
              Y.type === "number" &&
              q.memoizedProps.value != null &&
              uc(Y, "number", Y.value));
        }
        switch (((ut = q ? ks(q) : window), t)) {
          case "focusin":
            (sd(ut) || ut.contentEditable === "true") &&
              ((Na = ut), (Cc = q), (Fs = null));
            break;
          case "focusout":
            Fs = Cc = Na = null;
            break;
          case "mousedown":
            Ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ec = !1), md(W, s, K));
            break;
          case "selectionchange":
            if (Ny) break;
          case "keydown":
          case "keyup":
            md(W, s, K);
        }
        var xt;
        if (_c)
          t: {
            switch (t) {
              case "compositionstart":
                var Et = "onCompositionStart";
                break t;
              case "compositionend":
                Et = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Et = "onCompositionUpdate";
                break t;
            }
            Et = void 0;
          }
        else
          Ha
            ? id(t, s) && (Et = "onCompositionEnd")
            : t === "keydown" &&
              s.keyCode === 229 &&
              (Et = "onCompositionStart");
        (Et &&
          (td &&
            s.locale !== "ko" &&
            (Ha || Et !== "onCompositionStart"
              ? Et === "onCompositionEnd" && Ha && (xt = Ph())
              : ((di = K),
                (mc = "value" in di ? di.value : di.textContent),
                (Ha = !0))),
          (ut = Jo(q, Et)),
          0 < ut.length &&
            ((Et = new $h(Et, t, null, s, K)),
            W.push({ event: Et, listeners: ut }),
            xt
              ? (Et.data = xt)
              : ((xt = ad(s)), xt !== null && (Et.data = xt)))),
          (xt = Ty ? Oy(t, s) : Dy(t, s)) &&
            ((Et = Jo(q, "onBeforeInput")),
            0 < Et.length &&
              ((ut = new $h("onBeforeInput", "beforeinput", null, s, K)),
              W.push({ event: ut, listeners: Et }),
              (ut.data = xt))),
          _1(W, t, q, s, K));
      }
      Yp(W, n);
    });
  }
  function hl(t, n, s) {
    return { instance: t, listener: n, currentTarget: s };
  }
  function Jo(t, n) {
    for (var s = n + "Capture", r = []; t !== null; ) {
      var f = t,
        g = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          g === null ||
          ((f = Rs(t, s)),
          f != null && r.unshift(hl(t, f, g)),
          (f = Rs(t, n)),
          f != null && r.push(hl(t, f, g))),
        t.tag === 3)
      )
        return r;
      t = t.return;
    }
    return [];
  }
  function C1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gp(t, n, s, r, f) {
    for (var g = n._reactName, y = []; s !== null && s !== r; ) {
      var M = s,
        D = M.alternate,
        q = M.stateNode;
      if (((M = M.tag), D !== null && D === r)) break;
      ((M !== 5 && M !== 26 && M !== 27) ||
        q === null ||
        ((D = q),
        f
          ? ((q = Rs(s, g)), q != null && y.unshift(hl(s, q, D)))
          : f || ((q = Rs(s, g)), q != null && y.push(hl(s, q, D)))),
        (s = s.return));
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var E1 = /\r\n?/g,
    A1 = /\u0000|\uFFFD/g;
  function Xp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        E1,
        `
`,
      )
      .replace(A1, "");
  }
  function Qp(t, n) {
    return ((n = Xp(n)), Xp(t) === n);
  }
  function Qt(t, n, s, r, f, g) {
    switch (s) {
      case "children":
        typeof r == "string"
          ? n === "body" || (n === "textarea" && r === "") || Ba(t, r)
          : (typeof r == "number" || typeof r == "bigint") &&
            n !== "body" &&
            Ba(t, "" + r);
        break;
      case "className":
        no(t, "class", r);
        break;
      case "tabIndex":
        no(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        no(t, s, r);
        break;
      case "style":
        Qh(t, r, g);
        break;
      case "data":
        if (n !== "object") {
          no(t, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (n !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break;
        }
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          t.removeAttribute(s);
          break;
        }
        ((r = ao("" + r)), t.setAttribute(s, r));
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          t.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof g == "function" &&
            (s === "formAction"
              ? (n !== "input" && Qt(t, n, "name", f.name, f, null),
                Qt(t, n, "formEncType", f.formEncType, f, null),
                Qt(t, n, "formMethod", f.formMethod, f, null),
                Qt(t, n, "formTarget", f.formTarget, f, null))
              : (Qt(t, n, "encType", f.encType, f, null),
                Qt(t, n, "method", f.method, f, null),
                Qt(t, n, "target", f.target, f, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(s);
          break;
        }
        ((r = ao("" + r)), t.setAttribute(s, r));
        break;
      case "onClick":
        r != null && (t.onclick = Fn);
        break;
      case "onScroll":
        r != null && Mt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && Mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(l(61));
          if (((s = r.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = s;
          }
        }
        break;
      case "multiple":
        t.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        t.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((s = ao("" + r)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? t.setAttribute(s, "" + r)
          : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? t.setAttribute(s, "")
          : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        r === !0
          ? t.setAttribute(s, "")
          : r !== !1 &&
              r != null &&
              typeof r != "function" &&
              typeof r != "symbol"
            ? t.setAttribute(s, r)
            : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? t.setAttribute(s, r)
          : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? t.removeAttribute(s)
          : t.setAttribute(s, r);
        break;
      case "popover":
        (Mt("beforetoggle", t), Mt("toggle", t), eo(t, "popover", r));
        break;
      case "xlinkActuate":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        eo(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = ey.get(s) || s), eo(t, s, r));
    }
  }
  function Wu(t, n, s, r, f, g) {
    switch (s) {
      case "style":
        Qh(t, r, g);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(l(61));
          if (((s = r.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof r == "string"
          ? Ba(t, r)
          : (typeof r == "number" || typeof r == "bigint") && Ba(t, "" + r);
        break;
      case "onScroll":
        r != null && Mt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && Mt("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = Fn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hh.hasOwnProperty(s))
          t: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((f = s.endsWith("Capture")),
              (n = s.slice(2, f ? s.length - 7 : void 0)),
              (g = t[Le] || null),
              (g = g != null ? g[s] : null),
              typeof g == "function" && t.removeEventListener(n, g, f),
              typeof r == "function")
            ) {
              (typeof g != "function" &&
                g !== null &&
                (s in t
                  ? (t[s] = null)
                  : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(n, r, f));
              break t;
            }
            s in t
              ? (t[s] = r)
              : r === !0
                ? t.setAttribute(s, "")
                : eo(t, s, r);
          }
    }
  }
  function Ce(t, n, s) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Mt("error", t), Mt("load", t));
        var r = !1,
          f = !1,
          g;
        for (g in s)
          if (s.hasOwnProperty(g)) {
            var y = s[g];
            if (y != null)
              switch (g) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  Qt(t, n, g, y, s, null);
              }
          }
        (f && Qt(t, n, "srcSet", s.srcSet, s, null),
          r && Qt(t, n, "src", s.src, s, null));
        return;
      case "input":
        Mt("invalid", t);
        var M = (g = y = f = null),
          D = null,
          q = null;
        for (r in s)
          if (s.hasOwnProperty(r)) {
            var K = s[r];
            if (K != null)
              switch (r) {
                case "name":
                  f = K;
                  break;
                case "type":
                  y = K;
                  break;
                case "checked":
                  D = K;
                  break;
                case "defaultChecked":
                  q = K;
                  break;
                case "value":
                  g = K;
                  break;
                case "defaultValue":
                  M = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null) throw Error(l(137, n));
                  break;
                default:
                  Qt(t, n, r, K, s, null);
              }
          }
        Yh(t, g, M, D, q, y, f, !1);
        return;
      case "select":
        (Mt("invalid", t), (r = y = g = null));
        for (f in s)
          if (s.hasOwnProperty(f) && ((M = s[f]), M != null))
            switch (f) {
              case "value":
                g = M;
                break;
              case "defaultValue":
                y = M;
                break;
              case "multiple":
                r = M;
              default:
                Qt(t, n, f, M, s, null);
            }
        ((n = g),
          (s = y),
          (t.multiple = !!r),
          n != null ? Ra(t, !!r, n, !1) : s != null && Ra(t, !!r, s, !0));
        return;
      case "textarea":
        (Mt("invalid", t), (g = f = r = null));
        for (y in s)
          if (s.hasOwnProperty(y) && ((M = s[y]), M != null))
            switch (y) {
              case "value":
                r = M;
                break;
              case "defaultValue":
                f = M;
                break;
              case "children":
                g = M;
                break;
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(l(91));
                break;
              default:
                Qt(t, n, y, M, s, null);
            }
        Gh(t, r, f, g);
        return;
      case "option":
        for (D in s)
          if (s.hasOwnProperty(D) && ((r = s[D]), r != null))
            switch (D) {
              case "selected":
                t.selected =
                  r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Qt(t, n, D, r, s, null);
            }
        return;
      case "dialog":
        (Mt("beforetoggle", t),
          Mt("toggle", t),
          Mt("cancel", t),
          Mt("close", t));
        break;
      case "iframe":
      case "object":
        Mt("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < fl.length; r++) Mt(fl[r], t);
        break;
      case "image":
        (Mt("error", t), Mt("load", t));
        break;
      case "details":
        Mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Mt("error", t), Mt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in s)
          if (s.hasOwnProperty(q) && ((r = s[q]), r != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                Qt(t, n, q, r, s, null);
            }
        return;
      default:
        if (fc(n)) {
          for (K in s)
            s.hasOwnProperty(K) &&
              ((r = s[K]), r !== void 0 && Wu(t, n, K, r, s, void 0));
          return;
        }
    }
    for (M in s)
      s.hasOwnProperty(M) && ((r = s[M]), r != null && Qt(t, n, M, r, s, null));
  }
  function T1(t, n, s, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          g = null,
          y = null,
          M = null,
          D = null,
          q = null,
          K = null;
        for (X in s) {
          var W = s[X];
          if (s.hasOwnProperty(X) && W != null)
            switch (X) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = W;
              default:
                r.hasOwnProperty(X) || Qt(t, n, X, null, r, W);
            }
        }
        for (var Y in r) {
          var X = r[Y];
          if (((W = s[Y]), r.hasOwnProperty(Y) && (X != null || W != null)))
            switch (Y) {
              case "type":
                g = X;
                break;
              case "name":
                f = X;
                break;
              case "checked":
                q = X;
                break;
              case "defaultChecked":
                K = X;
                break;
              case "value":
                y = X;
                break;
              case "defaultValue":
                M = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(l(137, n));
                break;
              default:
                X !== W && Qt(t, n, Y, X, r, W);
            }
        }
        cc(t, y, M, D, q, K, g, f);
        return;
      case "select":
        X = y = M = Y = null;
        for (g in s)
          if (((D = s[g]), s.hasOwnProperty(g) && D != null))
            switch (g) {
              case "value":
                break;
              case "multiple":
                X = D;
              default:
                r.hasOwnProperty(g) || Qt(t, n, g, null, r, D);
            }
        for (f in r)
          if (
            ((g = r[f]),
            (D = s[f]),
            r.hasOwnProperty(f) && (g != null || D != null))
          )
            switch (f) {
              case "value":
                Y = g;
                break;
              case "defaultValue":
                M = g;
                break;
              case "multiple":
                y = g;
              default:
                g !== D && Qt(t, n, f, g, r, D);
            }
        ((n = M),
          (s = y),
          (r = X),
          Y != null
            ? Ra(t, !!s, Y, !1)
            : !!r != !!s &&
              (n != null ? Ra(t, !!s, n, !0) : Ra(t, !!s, s ? [] : "", !1)));
        return;
      case "textarea":
        X = Y = null;
        for (M in s)
          if (
            ((f = s[M]),
            s.hasOwnProperty(M) && f != null && !r.hasOwnProperty(M))
          )
            switch (M) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qt(t, n, M, null, r, f);
            }
        for (y in r)
          if (
            ((f = r[y]),
            (g = s[y]),
            r.hasOwnProperty(y) && (f != null || g != null))
          )
            switch (y) {
              case "value":
                Y = f;
                break;
              case "defaultValue":
                X = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== g && Qt(t, n, y, f, r, g);
            }
        Vh(t, Y, X);
        return;
      case "option":
        for (var ct in s)
          if (
            ((Y = s[ct]),
            s.hasOwnProperty(ct) && Y != null && !r.hasOwnProperty(ct))
          )
            switch (ct) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Qt(t, n, ct, null, r, Y);
            }
        for (D in r)
          if (
            ((Y = r[D]),
            (X = s[D]),
            r.hasOwnProperty(D) && Y !== X && (Y != null || X != null))
          )
            switch (D) {
              case "selected":
                t.selected =
                  Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                Qt(t, n, D, Y, r, X);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var mt in s)
          ((Y = s[mt]),
            s.hasOwnProperty(mt) &&
              Y != null &&
              !r.hasOwnProperty(mt) &&
              Qt(t, n, mt, null, r, Y));
        for (q in r)
          if (
            ((Y = r[q]),
            (X = s[q]),
            r.hasOwnProperty(q) && Y !== X && (Y != null || X != null))
          )
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(l(137, n));
                break;
              default:
                Qt(t, n, q, Y, r, X);
            }
        return;
      default:
        if (fc(n)) {
          for (var Zt in s)
            ((Y = s[Zt]),
              s.hasOwnProperty(Zt) &&
                Y !== void 0 &&
                !r.hasOwnProperty(Zt) &&
                Wu(t, n, Zt, void 0, r, Y));
          for (K in r)
            ((Y = r[K]),
              (X = s[K]),
              !r.hasOwnProperty(K) ||
                Y === X ||
                (Y === void 0 && X === void 0) ||
                Wu(t, n, K, Y, r, X));
          return;
        }
    }
    for (var L in s)
      ((Y = s[L]),
        s.hasOwnProperty(L) &&
          Y != null &&
          !r.hasOwnProperty(L) &&
          Qt(t, n, L, null, r, Y));
    for (W in r)
      ((Y = r[W]),
        (X = s[W]),
        !r.hasOwnProperty(W) ||
          Y === X ||
          (Y == null && X == null) ||
          Qt(t, n, W, Y, r, X));
  }
  function Zp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function O1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, n = 0, s = performance.getEntriesByType("resource"), r = 0;
        r < s.length;
        r++
      ) {
        var f = s[r],
          g = f.transferSize,
          y = f.initiatorType,
          M = f.duration;
        if (g && M && Zp(y)) {
          for (y = 0, M = f.responseEnd, r += 1; r < s.length; r++) {
            var D = s[r],
              q = D.startTime;
            if (q > M) break;
            var K = D.transferSize,
              W = D.initiatorType;
            K &&
              Zp(W) &&
              ((D = D.responseEnd), (y += K * (D < M ? 1 : (M - q) / (D - q))));
          }
          if ((--r, (n += (8 * (g + y)) / (f.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var $u = null,
    Ju = null;
  function tr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Kp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pp(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function tf(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ef = null;
  function D1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === ef
        ? !1
        : ((ef = t), !0)
      : ((ef = null), !1);
  }
  var Ip = typeof setTimeout == "function" ? setTimeout : void 0,
    z1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wp = typeof Promise == "function" ? Promise : void 0,
    k1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wp < "u"
          ? function (t) {
              return Wp.resolve(null).then(t).catch(R1);
            }
          : Ip;
  function R1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Di(t) {
    return t === "head";
  }
  function $p(t, n) {
    var s = n,
      r = 0;
    do {
      var f = s.nextSibling;
      if ((t.removeChild(s), f && f.nodeType === 8))
        if (((s = f.data), s === "/$" || s === "/&")) {
          if (r === 0) {
            (t.removeChild(f), fs(n));
            return;
          }
          r--;
        } else if (
          s === "$" ||
          s === "$?" ||
          s === "$~" ||
          s === "$!" ||
          s === "&"
        )
          r++;
        else if (s === "html") dl(t.ownerDocument.documentElement);
        else if (s === "head") {
          ((s = t.ownerDocument.head), dl(s));
          for (var g = s.firstChild; g; ) {
            var y = g.nextSibling,
              M = g.nodeName;
            (g[zs] ||
              M === "SCRIPT" ||
              M === "STYLE" ||
              (M === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
              s.removeChild(g),
              (g = y));
          }
        } else s === "body" && dl(t.ownerDocument.body);
      s = f;
    } while (s);
    fs(n);
  }
  function Jp(t, n) {
    var s = t;
    t = 0;
    do {
      var r = s.nextSibling;
      if (
        (s.nodeType === 1
          ? n
            ? ((s._stashedDisplay = s.style.display),
              (s.style.display = "none"))
            : ((s.style.display = s._stashedDisplay || ""),
              s.getAttribute("style") === "" && s.removeAttribute("style"))
          : s.nodeType === 3 &&
            (n
              ? ((s._stashedText = s.nodeValue), (s.nodeValue = ""))
              : (s.nodeValue = s._stashedText || "")),
        r && r.nodeType === 8)
      )
        if (((s = r.data), s === "/$")) {
          if (t === 0) break;
          t--;
        } else (s !== "$" && s !== "$?" && s !== "$~" && s !== "$!") || t++;
      s = r;
    } while (s);
  }
  function nf(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var s = n;
      switch (((n = n.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (nf(s), oc(s));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(s);
    }
  }
  function B1(t, n, s, r) {
    for (; t.nodeType === 1; ) {
      var f = s;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (r) {
        if (!t[zs])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((g = t.getAttribute("rel")),
                g === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                g !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((g = t.getAttribute("src")),
                (g !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  g &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var g = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === g) return t;
      } else return t;
      if (((t = mn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function L1(t, n, s) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !s) ||
        ((t = mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function tm(t, n) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function af(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function sf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function j1(t, n) {
    var s = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || s.readyState !== "loading") n();
    else {
      var r = function () {
        (n(), s.removeEventListener("DOMContentLoaded", r));
      };
      (s.addEventListener("DOMContentLoaded", r), (t._reactRetry = r));
    }
  }
  function mn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&" ||
            n === "F!" ||
            n === "F")
        )
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var lf = null;
  function em(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "/$" || s === "/&") {
          if (n === 0) return mn(t.nextSibling);
          n--;
        } else
          (s !== "$" && s !== "$!" && s !== "$?" && s !== "$~" && s !== "&") ||
            n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function nm(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&") {
          if (n === 0) return t;
          n--;
        } else (s !== "/$" && s !== "/&") || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function im(t, n, s) {
    switch (((n = tr(s)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(l(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(l(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  function dl(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    oc(t);
  }
  var bn = new Map(),
    am = new Set();
  function er(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var ii = G.d;
  G.d = { f: H1, r: N1, D: U1, C: q1, L: F1, m: Y1, X: G1, S: V1, M: X1 };
  function H1() {
    var t = ii.f(),
      n = Qo();
    return t || n;
  }
  function N1(t) {
    var n = Da(t);
    n !== null && n.tag === 5 && n.type === "form" ? _g(n) : ii.r(t);
  }
  var rs = typeof document > "u" ? null : document;
  function sm(t, n, s) {
    var r = rs;
    if (r && typeof n == "string" && n) {
      var f = cn(n);
      ((f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof s == "string" && (f += '[crossorigin="' + s + '"]'),
        am.has(f) ||
          (am.add(f),
          (t = { rel: t, crossOrigin: s, href: n }),
          r.querySelector(f) === null &&
            ((n = r.createElement("link")),
            Ce(n, "link", t),
            be(n),
            r.head.appendChild(n))));
    }
  }
  function U1(t) {
    (ii.D(t), sm("dns-prefetch", t, null));
  }
  function q1(t, n) {
    (ii.C(t, n), sm("preconnect", t, n));
  }
  function F1(t, n, s) {
    ii.L(t, n, s);
    var r = rs;
    if (r && t && n) {
      var f = 'link[rel="preload"][as="' + cn(n) + '"]';
      n === "image" && s && s.imageSrcSet
        ? ((f += '[imagesrcset="' + cn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (f += '[imagesizes="' + cn(s.imageSizes) + '"]'))
        : (f += '[href="' + cn(t) + '"]');
      var g = f;
      switch (n) {
        case "style":
          g = cs(t);
          break;
        case "script":
          g = us(t);
      }
      bn.has(g) ||
        ((t = b(
          {
            rel: "preload",
            href: n === "image" && s && s.imageSrcSet ? void 0 : t,
            as: n,
          },
          s,
        )),
        bn.set(g, t),
        r.querySelector(f) !== null ||
          (n === "style" && r.querySelector(gl(g))) ||
          (n === "script" && r.querySelector(pl(g))) ||
          ((n = r.createElement("link")),
          Ce(n, "link", t),
          be(n),
          r.head.appendChild(n)));
    }
  }
  function Y1(t, n) {
    ii.m(t, n);
    var s = rs;
    if (s && t) {
      var r = n && typeof n.as == "string" ? n.as : "script",
        f =
          'link[rel="modulepreload"][as="' + cn(r) + '"][href="' + cn(t) + '"]',
        g = f;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = us(t);
      }
      if (
        !bn.has(g) &&
        ((t = b({ rel: "modulepreload", href: t }, n)),
        bn.set(g, t),
        s.querySelector(f) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(pl(g))) return;
        }
        ((r = s.createElement("link")),
          Ce(r, "link", t),
          be(r),
          s.head.appendChild(r));
      }
    }
  }
  function V1(t, n, s) {
    ii.S(t, n, s);
    var r = rs;
    if (r && t) {
      var f = za(r).hoistableStyles,
        g = cs(t);
      n = n || "default";
      var y = f.get(g);
      if (!y) {
        var M = { loading: 0, preload: null };
        if ((y = r.querySelector(gl(g)))) M.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": n }, s)),
            (s = bn.get(g)) && of(t, s));
          var D = (y = r.createElement("link"));
          (be(D),
            Ce(D, "link", t),
            (D._p = new Promise(function (q, K) {
              ((D.onload = q), (D.onerror = K));
            })),
            D.addEventListener("load", function () {
              M.loading |= 1;
            }),
            D.addEventListener("error", function () {
              M.loading |= 2;
            }),
            (M.loading |= 4),
            nr(y, n, r));
        }
        ((y = { type: "stylesheet", instance: y, count: 1, state: M }),
          f.set(g, y));
      }
    }
  }
  function G1(t, n) {
    ii.X(t, n);
    var s = rs;
    if (s && t) {
      var r = za(s).hoistableScripts,
        f = us(t),
        g = r.get(f);
      g ||
        ((g = s.querySelector(pl(f))),
        g ||
          ((t = b({ src: t, async: !0 }, n)),
          (n = bn.get(f)) && rf(t, n),
          (g = s.createElement("script")),
          be(g),
          Ce(g, "link", t),
          s.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        r.set(f, g));
    }
  }
  function X1(t, n) {
    ii.M(t, n);
    var s = rs;
    if (s && t) {
      var r = za(s).hoistableScripts,
        f = us(t),
        g = r.get(f);
      g ||
        ((g = s.querySelector(pl(f))),
        g ||
          ((t = b({ src: t, async: !0, type: "module" }, n)),
          (n = bn.get(f)) && rf(t, n),
          (g = s.createElement("script")),
          be(g),
          Ce(g, "link", t),
          s.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        r.set(f, g));
    }
  }
  function lm(t, n, s, r) {
    var f = (f = ot.current) ? er(f) : null;
    if (!f) throw Error(l(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((n = cs(s.href)),
            (s = za(f).hoistableStyles),
            (r = s.get(n)),
            r ||
              ((r = { type: "style", instance: null, count: 0, state: null }),
              s.set(n, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          t = cs(s.href);
          var g = za(f).hoistableStyles,
            y = g.get(t);
          if (
            (y ||
              ((f = f.ownerDocument || f),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              g.set(t, y),
              (g = f.querySelector(gl(t))) &&
                !g._p &&
                ((y.instance = g), (y.state.loading = 5)),
              bn.has(t) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                bn.set(t, s),
                g || Q1(f, t, s, y.state))),
            n && r === null)
          )
            throw Error(l(528, ""));
          return y;
        }
        if (n && r !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = s.async),
          (s = s.src),
          typeof s == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = us(s)),
              (s = za(f).hoistableScripts),
              (r = s.get(n)),
              r ||
                ((r = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(n, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function cs(t) {
    return 'href="' + cn(t) + '"';
  }
  function gl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function om(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Q1(t, n, s, r) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (r.loading = 1)
      : ((n = t.createElement("link")),
        (r.preload = n),
        n.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        Ce(n, "link", s),
        be(n),
        t.head.appendChild(n));
  }
  function us(t) {
    return '[src="' + cn(t) + '"]';
  }
  function pl(t) {
    return "script[async]" + t;
  }
  function rm(t, n, s) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var r = t.querySelector('style[data-href~="' + cn(s.href) + '"]');
          if (r) return ((n.instance = r), be(r), r);
          var f = b({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (t.ownerDocument || t).createElement("style")),
            be(r),
            Ce(r, "style", f),
            nr(r, s.precedence, t),
            (n.instance = r)
          );
        case "stylesheet":
          f = cs(s.href);
          var g = t.querySelector(gl(f));
          if (g) return ((n.state.loading |= 4), (n.instance = g), be(g), g);
          ((r = om(s)),
            (f = bn.get(f)) && of(r, f),
            (g = (t.ownerDocument || t).createElement("link")),
            be(g));
          var y = g;
          return (
            (y._p = new Promise(function (M, D) {
              ((y.onload = M), (y.onerror = D));
            })),
            Ce(g, "link", r),
            (n.state.loading |= 4),
            nr(g, s.precedence, t),
            (n.instance = g)
          );
        case "script":
          return (
            (g = us(s.src)),
            (f = t.querySelector(pl(g)))
              ? ((n.instance = f), be(f), f)
              : ((r = s),
                (f = bn.get(g)) && ((r = b({}, s)), rf(r, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                be(f),
                Ce(f, "link", r),
                t.head.appendChild(f),
                (n.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((r = n.instance), (n.state.loading |= 4), nr(r, s.precedence, t));
    return n.instance;
  }
  function nr(t, n, s) {
    for (
      var r = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = r.length ? r[r.length - 1] : null,
        g = f,
        y = 0;
      y < r.length;
      y++
    ) {
      var M = r[y];
      if (M.dataset.precedence === n) g = M;
      else if (g !== f) break;
    }
    g
      ? g.parentNode.insertBefore(t, g.nextSibling)
      : ((n = s.nodeType === 9 ? s.head : s), n.insertBefore(t, n.firstChild));
  }
  function of(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title));
  }
  function rf(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity));
  }
  var ir = null;
  function cm(t, n, s) {
    if (ir === null) {
      var r = new Map(),
        f = (ir = new Map());
      f.set(s, r);
    } else ((f = ir), (r = f.get(s)), r || ((r = new Map()), f.set(s, r)));
    if (r.has(t)) return r;
    for (
      r.set(t, null), s = s.getElementsByTagName(t), f = 0;
      f < s.length;
      f++
    ) {
      var g = s[f];
      if (
        !(
          g[zs] ||
          g[_e] ||
          (t === "link" && g.getAttribute("rel") === "stylesheet")
        ) &&
        g.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = g.getAttribute(n) || "";
        y = t + y;
        var M = r.get(y);
        M ? M.push(g) : r.set(y, [g]);
      }
    }
    return r;
  }
  function um(t, n, s) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        s,
        n === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Z1(t, n, s) {
    if (s === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled),
              typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function K1(t, n, s, r) {
    if (
      s.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (s.state.loading & 4) === 0
    ) {
      if (s.instance === null) {
        var f = cs(r.href),
          g = n.querySelector(gl(f));
        if (g) {
          ((n = g._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (t.count++, (t = ar.bind(t)), n.then(t, t)),
            (s.state.loading |= 4),
            (s.instance = g),
            be(g));
          return;
        }
        ((g = n.ownerDocument || n),
          (r = om(r)),
          (f = bn.get(f)) && of(r, f),
          (g = g.createElement("link")),
          be(g));
        var y = g;
        ((y._p = new Promise(function (M, D) {
          ((y.onload = M), (y.onerror = D));
        })),
          Ce(g, "link", r),
          (s.instance = g));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(s, n),
        (n = s.state.preload) &&
          (s.state.loading & 3) === 0 &&
          (t.count++,
          (s = ar.bind(t)),
          n.addEventListener("load", s),
          n.addEventListener("error", s)));
    }
  }
  var cf = 0;
  function P1(t, n) {
    return (
      t.stylesheets && t.count === 0 && lr(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (s) {
            var r = setTimeout(function () {
              if ((t.stylesheets && lr(t, t.stylesheets), t.unsuspend)) {
                var g = t.unsuspend;
                ((t.unsuspend = null), g());
              }
            }, 6e4 + n);
            0 < t.imgBytes && cf === 0 && (cf = 62500 * O1());
            var f = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && lr(t, t.stylesheets), t.unsuspend))
                ) {
                  var g = t.unsuspend;
                  ((t.unsuspend = null), g());
                }
              },
              (t.imgBytes > cf ? 50 : 800) + n,
            );
            return (
              (t.unsuspend = s),
              function () {
                ((t.unsuspend = null), clearTimeout(r), clearTimeout(f));
              }
            );
          }
        : null
    );
  }
  function ar() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) lr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var sr = null;
  function lr(t, n) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (sr = new Map()),
        n.forEach(I1, t),
        (sr = null),
        ar.call(t)));
  }
  function I1(t, n) {
    if (!(n.state.loading & 4)) {
      var s = sr.get(t);
      if (s) var r = s.get(null);
      else {
        ((s = new Map()), sr.set(t, s));
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var y = f[g];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (s.set(y.dataset.precedence, y), (r = y));
        }
        r && s.set(null, r);
      }
      ((f = n.instance),
        (y = f.getAttribute("data-precedence")),
        (g = s.get(y) || r),
        g === r && s.set(null, f),
        s.set(y, f),
        this.count++,
        (r = ar.bind(this)),
        f.addEventListener("load", r),
        f.addEventListener("error", r),
        g
          ? g.parentNode.insertBefore(f, g.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var ml = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function W1(t, n, s, r, f, g, y, M, D) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ic(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ic(0)),
      (this.hiddenUpdates = ic(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = f),
      (this.onCaughtError = g),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = D),
      (this.incompleteTransitions = new Map()));
  }
  function hm(t, n, s, r, f, g, y, M, D, q, K, W) {
    return (
      (t = new W1(t, n, s, y, D, q, K, W, M)),
      (n = 1),
      g === !0 && (n |= 24),
      (g = Ke(3, null, null, n)),
      (t.current = g),
      (g.stateNode = t),
      (n = Fc()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (g.memoizedState = { element: r, isDehydrated: s, cache: n }),
      Xc(g),
      t
    );
  }
  function dm(t) {
    return t ? ((t = Fa), t) : Fa;
  }
  function gm(t, n, s, r, f, g) {
    ((f = dm(f)),
      r.context === null ? (r.context = f) : (r.pendingContext = f),
      (r = vi(n)),
      (r.payload = { element: s }),
      (g = g === void 0 ? null : g),
      g !== null && (r.callback = g),
      (s = wi(t, r, n)),
      s !== null && (Fe(s, t, n), Ks(s, t, n)));
  }
  function pm(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function uf(t, n) {
    (pm(t, n), (t = t.alternate) && pm(t, n));
  }
  function mm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = $i(t, 67108864);
      (n !== null && Fe(n, t, 67108864), uf(t, 67108864));
    }
  }
  function bm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Je();
      n = ac(n);
      var s = $i(t, n);
      (s !== null && Fe(s, t, n), uf(t, n));
    }
  }
  var or = !0;
  function $1(t, n, s, r) {
    var f = j.T;
    j.T = null;
    var g = G.p;
    try {
      ((G.p = 2), ff(t, n, s, r));
    } finally {
      ((G.p = g), (j.T = f));
    }
  }
  function J1(t, n, s, r) {
    var f = j.T;
    j.T = null;
    var g = G.p;
    try {
      ((G.p = 8), ff(t, n, s, r));
    } finally {
      ((G.p = g), (j.T = f));
    }
  }
  function ff(t, n, s, r) {
    if (or) {
      var f = hf(r);
      if (f === null) (Iu(t, n, r, rr, s), vm(t, r));
      else if (ev(f, t, n, s, r)) r.stopPropagation();
      else if ((vm(t, r), n & 4 && -1 < tv.indexOf(t))) {
        for (; f !== null; ) {
          var g = Da(f);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (((g = g.stateNode), g.current.memoizedState.isDehydrated)) {
                  var y = Zi(g.pendingLanes);
                  if (y !== 0) {
                    var M = g;
                    for (M.pendingLanes |= 2, M.entangledLanes |= 2; y; ) {
                      var D = 1 << (31 - Qe(y));
                      ((M.entanglements[1] |= D), (y &= ~D));
                    }
                    (kn(g), (Bt & 6) === 0 && ((Go = Nt() + 500), ul(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((M = $i(g, 2)), M !== null && Fe(M, g, 2), Qo(), uf(g, 2));
            }
          if (((g = hf(r)), g === null && Iu(t, n, r, rr, s), g === f)) break;
          f = g;
        }
        f !== null && r.stopPropagation();
      } else Iu(t, n, r, null, s);
    }
  }
  function hf(t) {
    return ((t = dc(t)), df(t));
  }
  var rr = null;
  function df(t) {
    if (((rr = null), (t = Oa(t)), t !== null)) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var s = n.tag;
        if (s === 13) {
          if (((t = u(n)), t !== null)) return t;
          t = null;
        } else if (s === 31) {
          if (((t = h(n)), t !== null)) return t;
          t = null;
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return ((rr = t), null);
  }
  function ym(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ln()) {
          case se:
            return 2;
          case we:
            return 8;
          case Be:
          case As:
            return 32;
          case Ts:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1,
    zi = null,
    ki = null,
    Ri = null,
    bl = new Map(),
    yl = new Map(),
    Bi = [],
    tv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function vm(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        zi = null;
        break;
      case "dragenter":
      case "dragleave":
        ki = null;
        break;
      case "mouseover":
      case "mouseout":
        Ri = null;
        break;
      case "pointerover":
      case "pointerout":
        bl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(n.pointerId);
    }
  }
  function vl(t, n, s, r, f, g) {
    return t === null || t.nativeEvent !== g
      ? ((t = {
          blockedOn: n,
          domEventName: s,
          eventSystemFlags: r,
          nativeEvent: g,
          targetContainers: [f],
        }),
        n !== null && ((n = Da(n)), n !== null && mm(n)),
        t)
      : ((t.eventSystemFlags |= r),
        (n = t.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        t);
  }
  function ev(t, n, s, r, f) {
    switch (n) {
      case "focusin":
        return ((zi = vl(zi, t, n, s, r, f)), !0);
      case "dragenter":
        return ((ki = vl(ki, t, n, s, r, f)), !0);
      case "mouseover":
        return ((Ri = vl(Ri, t, n, s, r, f)), !0);
      case "pointerover":
        var g = f.pointerId;
        return (bl.set(g, vl(bl.get(g) || null, t, n, s, r, f)), !0);
      case "gotpointercapture":
        return (
          (g = f.pointerId),
          yl.set(g, vl(yl.get(g) || null, t, n, s, r, f)),
          !0
        );
    }
    return !1;
  }
  function wm(t) {
    var n = Oa(t.target);
    if (n !== null) {
      var s = c(n);
      if (s !== null) {
        if (((n = s.tag), n === 13)) {
          if (((n = u(s)), n !== null)) {
            ((t.blockedOn = n),
              Bh(t.priority, function () {
                bm(s);
              }));
            return;
          }
        } else if (n === 31) {
          if (((n = h(s)), n !== null)) {
            ((t.blockedOn = n),
              Bh(t.priority, function () {
                bm(s);
              }));
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function cr(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var s = hf(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var r = new s.constructor(s.type, s);
        ((hc = r), s.target.dispatchEvent(r), (hc = null));
      } else return ((n = Da(s)), n !== null && mm(n), (t.blockedOn = s), !1);
      n.shift();
    }
    return !0;
  }
  function _m(t, n, s) {
    cr(t) && s.delete(n);
  }
  function nv() {
    ((gf = !1),
      zi !== null && cr(zi) && (zi = null),
      ki !== null && cr(ki) && (ki = null),
      Ri !== null && cr(Ri) && (Ri = null),
      bl.forEach(_m),
      yl.forEach(_m));
  }
  function ur(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      gf ||
        ((gf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, nv)));
  }
  var fr = null;
  function xm(t) {
    fr !== t &&
      ((fr = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        fr === t && (fr = null);
        for (var n = 0; n < t.length; n += 3) {
          var s = t[n],
            r = t[n + 1],
            f = t[n + 2];
          if (typeof r != "function") {
            if (df(r || s) === null) continue;
            break;
          }
          var g = Da(s);
          g !== null &&
            (t.splice(n, 3),
            (n -= 3),
            fu(g, { pending: !0, data: f, method: s.method, action: r }, r, f));
        }
      }));
  }
  function fs(t) {
    function n(D) {
      return ur(D, t);
    }
    (zi !== null && ur(zi, t),
      ki !== null && ur(ki, t),
      Ri !== null && ur(Ri, t),
      bl.forEach(n),
      yl.forEach(n));
    for (var s = 0; s < Bi.length; s++) {
      var r = Bi[s];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < Bi.length && ((s = Bi[0]), s.blockedOn === null); )
      (wm(s), s.blockedOn === null && Bi.shift());
    if (((s = (t.ownerDocument || t).$$reactFormReplay), s != null))
      for (r = 0; r < s.length; r += 3) {
        var f = s[r],
          g = s[r + 1],
          y = f[Le] || null;
        if (typeof g == "function") y || xm(s);
        else if (y) {
          var M = null;
          if (g && g.hasAttribute("formAction")) {
            if (((f = g), (y = g[Le] || null))) M = y.formAction;
            else if (df(f) !== null) continue;
          } else M = y.action;
          (typeof M == "function" ? (s[r + 1] = M) : (s.splice(r, 3), (r -= 3)),
            xm(s));
        }
      }
  }
  function Sm() {
    function t(g) {
      g.canIntercept &&
        g.info === "react-transition" &&
        g.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (f = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function n() {
      (f !== null && (f(), (f = null)), r || setTimeout(s, 20));
    }
    function s() {
      if (!r && !navigation.transition) {
        var g = navigation.currentEntry;
        g &&
          g.url != null &&
          navigation.navigate(g.url, {
            state: g.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var r = !1,
        f = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", n),
        navigation.addEventListener("navigateerror", n),
        setTimeout(s, 100),
        function () {
          ((r = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", n),
            navigation.removeEventListener("navigateerror", n),
            f !== null && (f(), (f = null)));
        }
      );
    }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  ((hr.prototype.render = pf.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var s = n.current,
        r = Je();
      gm(s, r, t, n, null, null);
    }),
    (hr.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          (gm(t.current, 2, null, t, null, null), Qo(), (n[Ta] = null));
        }
      }));
  function hr(t) {
    this._internalRoot = t;
  }
  hr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Rh();
      t = { blockedOn: null, target: t, priority: n };
      for (var s = 0; s < Bi.length && n !== 0 && n < Bi[s].priority; s++);
      (Bi.splice(s, 0, t), s === 0 && wm(t));
    }
  };
  var Mm = e.version;
  if (Mm !== "19.2.0") throw Error(l(527, Mm, "19.2.0"));
  G.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(l(188))
        : ((t = Object.keys(t).join(",")), Error(l(268, t)));
    return (
      (t = d(n)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var iv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dr.isDisabled && dr.supportsFiber)
      try {
        ((xn = dr.inject(iv)), (Ae = dr));
      } catch {}
  }
  return (
    (_l.createRoot = function (t, n) {
      if (!o(t)) throw Error(l(299));
      var s = !1,
        r = "",
        f = zg,
        g = kg,
        y = Rg;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (n = hm(t, 1, !1, null, null, s, r, null, f, g, y, Sm)),
        (t[Ta] = n.current),
        Pu(t),
        new pf(n)
      );
    }),
    (_l.hydrateRoot = function (t, n, s) {
      if (!o(t)) throw Error(l(299));
      var r = !1,
        f = "",
        g = zg,
        y = kg,
        M = Rg,
        D = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (r = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (g = s.onUncaughtError),
          s.onCaughtError !== void 0 && (y = s.onCaughtError),
          s.onRecoverableError !== void 0 && (M = s.onRecoverableError),
          s.formState !== void 0 && (D = s.formState)),
        (n = hm(t, 1, !0, n, s ?? null, r, f, D, g, y, M, Sm)),
        (n.context = dm(null)),
        (s = n.current),
        (r = Je()),
        (r = ac(r)),
        (f = vi(r)),
        (f.callback = null),
        wi(s, f, r),
        (s = r),
        (n.current.lanes = s),
        Ds(n, s),
        kn(n),
        (t[Ta] = n.current),
        Pu(t),
        new hr(n)
      );
    }),
    (_l.version = "19.2.0"),
    _l
  );
}
var Bm;
function dv() {
  if (Bm) return yf.exports;
  Bm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return (i(), (yf.exports = hv()), yf.exports);
}
var gv = dv();
const pv = "_grandContainer_9ptvi_1",
  mv = "_parentContainer_9ptvi_21",
  bv = "_topContainer_9ptvi_47",
  yv = "_middleContainer_9ptvi_69",
  vv = "_instructionContainer_9ptvi_89",
  wv = "_footerContainer_9ptvi_115",
  ji = {
    grandContainer: pv,
    parentContainer: mv,
    topContainer: bv,
    middleContainer: yv,
    instructionContainer: vv,
    footerContainer: wv,
  },
  _v = "_Container_12oti_1",
  xv = "_panelContainer_12oti_13",
  Sv = "_panelButton_12oti_35",
  Mv = "_buttonIcon_12oti_87",
  xl = { Container: _v, panelContainer: xv, panelButton: Sv, buttonIcon: Mv };
var Or = { exports: {} };
var Cv = Or.exports,
  Lm;
function Ev() {
  return (
    Lm ||
      ((Lm = 1),
      (function (i, e) {
        ((a, l) => {
          i.exports = l();
        })(Cv, function a() {
          var l =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : l !== void 0
                    ? l
                    : {},
            o,
            c = !l.document && !!l.postMessage,
            u = l.IS_PAPA_WORKER || !1,
            h = {},
            p = 0,
            d = {};
          function m(x) {
            ((this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (v) {
                var H = F(v);
                ((H.chunkSize = parseInt(H.chunkSize)),
                  v.step || v.chunk || (H.chunkSize = null),
                  (this._handle = new E(H)),
                  ((this._handle.streamer = this)._config = H));
              }.call(this, x),
              (this.parseChunk = function (v, H) {
                var R = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < R) {
                  let J = this._config.newline;
                  (J ||
                    ((B = this._config.quoteChar || '"'),
                    (J = this._handle.guessLineEndings(v, B))),
                    (v = [...v.split(J).slice(R)].join(J)));
                }
                (this.isFirstChunk &&
                  T(this._config.beforeFirstChunk) &&
                  (B = this._config.beforeFirstChunk(v)) !== void 0 &&
                  (v = B),
                  (this.isFirstChunk = !1),
                  (this._halted = !1));
                var R = this._partialLine + v,
                  B =
                    ((this._partialLine = ""),
                    this._handle.parse(R, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((v = B.meta.cursor),
                    (R =
                      (this._finished ||
                        ((this._partialLine = R.substring(v - this._baseIndex)),
                        (this._baseIndex = v)),
                      B && B.data && (this._rowCount += B.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    u)
                  )
                    l.postMessage({
                      results: B,
                      workerId: d.WORKER_ID,
                      finished: R,
                    });
                  else if (T(this._config.chunk) && !H) {
                    if (
                      (this._config.chunk(B, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = B = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(B.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(B.errors)),
                      (this._completeResults.meta = B.meta)),
                    this._completed ||
                      !R ||
                      !T(this._config.complete) ||
                      (B && B.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    R || (B && B.meta.paused) || this._nextChunk(),
                    B
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (v) {
                T(this._config.error)
                  ? this._config.error(v)
                  : u &&
                    this._config.error &&
                    l.postMessage({
                      workerId: d.WORKER_ID,
                      error: v,
                      finished: !1,
                    });
              }));
          }
          function b(x) {
            var v;
            ((x = x || {}).chunkSize || (x.chunkSize = d.RemoteChunkSize),
              m.call(this, x),
              (this._nextChunk = c
                ? function () {
                    (this._readChunk(), this._chunkLoaded());
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (H) {
                ((this._input = H), this._nextChunk());
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((v = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (v.withCredentials = this._config.withCredentials),
                    c ||
                      ((v.onload = $(this._chunkLoaded, this)),
                      (v.onerror = $(this._chunkError, this))),
                    v.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !c,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var H,
                      R = this._config.downloadRequestHeaders;
                    for (H in R) v.setRequestHeader(H, R[H]);
                  }
                  var B;
                  this._config.chunkSize &&
                    ((B = this._start + this._config.chunkSize - 1),
                    v.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + B,
                    ));
                  try {
                    v.send(this._config.downloadRequestBody);
                  } catch (J) {
                    this._chunkError(J.message);
                  }
                  c && v.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                v.readyState === 4 &&
                  (v.status < 200 || 400 <= v.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || v.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((H) =>
                            (H = H.getResponseHeader("Content-Range")) !== null
                              ? parseInt(H.substring(H.lastIndexOf("/") + 1))
                              : -1)(v)),
                      this.parseChunk(v.responseText)));
              }),
              (this._chunkError = function (H) {
                ((H = v.statusText || H), this._sendError(new Error(H)));
              }));
          }
          function S(x) {
            ((x = x || {}).chunkSize || (x.chunkSize = d.LocalChunkSize),
              m.call(this, x));
            var v,
              H,
              R = typeof FileReader < "u";
            ((this.stream = function (B) {
              ((this._input = B),
                (H = B.slice || B.webkitSlice || B.mozSlice),
                R
                  ? (((v = new FileReader()).onload = $(
                      this._chunkLoaded,
                      this,
                    )),
                    (v.onerror = $(this._chunkError, this)))
                  : (v = new FileReaderSync()),
                this._nextChunk());
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var B = this._input,
                  J =
                    (this._config.chunkSize &&
                      ((J = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (B = H.call(B, this._start, J))),
                    v.readAsText(B, this._config.encoding));
                R || this._chunkLoaded({ target: { result: J } });
              }),
              (this._chunkLoaded = function (B) {
                ((this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(B.target.result));
              }),
              (this._chunkError = function () {
                this._sendError(v.error);
              }));
          }
          function _(x) {
            var v;
            (m.call(this, (x = x || {})),
              (this.stream = function (H) {
                return ((v = H), this._nextChunk());
              }),
              (this._nextChunk = function () {
                var H, R;
                if (!this._finished)
                  return (
                    (H = this._config.chunkSize),
                    (v = H
                      ? ((R = v.substring(0, H)), v.substring(H))
                      : ((R = v), "")),
                    (this._finished = !v),
                    this.parseChunk(R)
                  );
              }));
          }
          function w(x) {
            m.call(this, (x = x || {}));
            var v = [],
              H = !0,
              R = !1;
            ((this.pause = function () {
              (m.prototype.pause.apply(this, arguments), this._input.pause());
            }),
              (this.resume = function () {
                (m.prototype.resume.apply(this, arguments),
                  this._input.resume());
              }),
              (this.stream = function (B) {
                ((this._input = B),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError));
              }),
              (this._checkIsFinished = function () {
                R && v.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                (this._checkIsFinished(),
                  v.length ? this.parseChunk(v.shift()) : (H = !0));
              }),
              (this._streamData = $(function (B) {
                try {
                  (v.push(
                    typeof B == "string"
                      ? B
                      : B.toString(this._config.encoding),
                  ),
                    H &&
                      ((H = !1),
                      this._checkIsFinished(),
                      this.parseChunk(v.shift())));
                } catch (J) {
                  this._streamError(J);
                }
              }, this)),
              (this._streamError = $(function (B) {
                (this._streamCleanUp(), this._sendError(B));
              }, this)),
              (this._streamEnd = $(function () {
                (this._streamCleanUp(), (R = !0), this._streamData(""));
              }, this)),
              (this._streamCleanUp = $(function () {
                (this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError));
              }, this)));
          }
          function E(x) {
            var v,
              H,
              R,
              B,
              J = Math.pow(2, 53),
              st = -J,
              at = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              j =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              G = this,
              et = 0,
              it = 0,
              rt = !1,
              O = !1,
              k = [],
              V = { data: [], errors: [], meta: {} };
            function nt(pt) {
              return x.skipEmptyLines === "greedy"
                ? pt.join("").trim() === ""
                : pt.length === 1 && pt[0].length === 0;
            }
            function lt() {
              if (
                (V &&
                  R &&
                  (bt(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      d.DefaultDelimiter +
                      "'",
                  ),
                  (R = !1)),
                x.skipEmptyLines &&
                  (V.data = V.data.filter(function (Vt) {
                    return !nt(Vt);
                  })),
                ot())
              ) {
                let Vt = function (ae, Dt) {
                  (T(x.transformHeader) && (ae = x.transformHeader(ae, Dt)),
                    k.push(ae));
                };
                var vt = Vt;
                if (V)
                  if (Array.isArray(V.data[0])) {
                    for (var pt = 0; ot() && pt < V.data.length; pt++)
                      V.data[pt].forEach(Vt);
                    V.data.splice(0, 1);
                  } else V.data.forEach(Vt);
              }
              function dt(Vt, ae) {
                for (
                  var Dt = x.header ? {} : [], zt = 0;
                  zt < Vt.length;
                  zt++
                ) {
                  var _t = zt,
                    me = Vt[zt],
                    me = ((Ot, Gt) =>
                      ((ee) => (
                        x.dynamicTypingFunction &&
                          x.dynamicTyping[ee] === void 0 &&
                          (x.dynamicTyping[ee] = x.dynamicTypingFunction(ee)),
                        (x.dynamicTyping[ee] || x.dynamicTyping) === !0
                      ))(Ot)
                        ? Gt === "true" ||
                          Gt === "TRUE" ||
                          (Gt !== "false" &&
                            Gt !== "FALSE" &&
                            (((ee) => {
                              if (
                                at.test(ee) &&
                                ((ee = parseFloat(ee)), st < ee && ee < J)
                              )
                                return 1;
                            })(Gt)
                              ? parseFloat(Gt)
                              : j.test(Gt)
                                ? new Date(Gt)
                                : Gt === ""
                                  ? null
                                  : Gt))
                        : Gt)(
                      (_t = x.header
                        ? zt >= k.length
                          ? "__parsed_extra"
                          : k[zt]
                        : _t),
                      (me = x.transform ? x.transform(me, _t) : me),
                    );
                  _t === "__parsed_extra"
                    ? ((Dt[_t] = Dt[_t] || []), Dt[_t].push(me))
                    : (Dt[_t] = me);
                }
                return (
                  x.header &&
                    (zt > k.length
                      ? bt(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            k.length +
                            " fields but parsed " +
                            zt,
                          it + ae,
                        )
                      : zt < k.length &&
                        bt(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            k.length +
                            " fields but parsed " +
                            zt,
                          it + ae,
                        )),
                  Dt
                );
              }
              var Yt;
              V &&
                (x.header || x.dynamicTyping || x.transform) &&
                ((Yt = 1),
                !V.data.length || Array.isArray(V.data[0])
                  ? ((V.data = V.data.map(dt)), (Yt = V.data.length))
                  : (V.data = dt(V.data, 0)),
                x.header && V.meta && (V.meta.fields = k),
                (it += Yt));
            }
            function ot() {
              return x.header && k.length === 0;
            }
            function bt(pt, dt, Yt, vt) {
              ((pt = { type: pt, code: dt, message: Yt }),
                vt !== void 0 && (pt.row = vt),
                V.errors.push(pt));
            }
            (T(x.step) &&
              ((B = x.step),
              (x.step = function (pt) {
                ((V = pt),
                  ot()
                    ? lt()
                    : (lt(),
                      V.data.length !== 0 &&
                        ((et += pt.data.length),
                        x.preview && et > x.preview
                          ? H.abort()
                          : ((V.data = V.data[0]), B(V, G)))));
              })),
              (this.parse = function (pt, dt, Yt) {
                var vt = x.quoteChar || '"',
                  vt =
                    (x.newline || (x.newline = this.guessLineEndings(pt, vt)),
                    (R = !1),
                    x.delimiter
                      ? T(x.delimiter) &&
                        ((x.delimiter = x.delimiter(pt)),
                        (V.meta.delimiter = x.delimiter))
                      : ((vt = ((Vt, ae, Dt, zt, _t) => {
                          var me, Ot, Gt, ee;
                          _t = _t || [
                            ",",
                            "	",
                            "|",
                            ";",
                            d.RECORD_SEP,
                            d.UNIT_SEP,
                          ];
                          for (var Tn = 0; Tn < _t.length; Tn++) {
                            for (
                              var sn,
                                Qi = _t[Tn],
                                Nt = 0,
                                ln = 0,
                                se = 0,
                                we =
                                  ((Gt = void 0),
                                  new C({
                                    comments: zt,
                                    delimiter: Qi,
                                    newline: ae,
                                    preview: 10,
                                  }).parse(Vt)),
                                Be = 0;
                              Be < we.data.length;
                              Be++
                            )
                              Dt && nt(we.data[Be])
                                ? se++
                                : ((sn = we.data[Be].length),
                                  (ln += sn),
                                  Gt === void 0
                                    ? (Gt = sn)
                                    : 0 < sn &&
                                      ((Nt += Math.abs(sn - Gt)), (Gt = sn)));
                            (0 < we.data.length && (ln /= we.data.length - se),
                              (Ot === void 0 || Nt <= Ot) &&
                                (ee === void 0 || ee < ln) &&
                                1.99 < ln &&
                                ((Ot = Nt), (me = Qi), (ee = ln)));
                          }
                          return {
                            successful: !!(x.delimiter = me),
                            bestDelimiter: me,
                          };
                        })(
                          pt,
                          x.newline,
                          x.skipEmptyLines,
                          x.comments,
                          x.delimitersToGuess,
                        )).successful
                          ? (x.delimiter = vt.bestDelimiter)
                          : ((R = !0), (x.delimiter = d.DefaultDelimiter)),
                        (V.meta.delimiter = x.delimiter)),
                    F(x));
                return (
                  x.preview && x.header && vt.preview++,
                  (v = pt),
                  (H = new C(vt)),
                  (V = H.parse(v, dt, Yt)),
                  lt(),
                  rt ? { meta: { paused: !0 } } : V || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return rt;
              }),
              (this.pause = function () {
                ((rt = !0),
                  H.abort(),
                  (v = T(x.chunk) ? "" : v.substring(H.getCharIndex())));
              }),
              (this.resume = function () {
                G.streamer._halted
                  ? ((rt = !1), G.streamer.parseChunk(v, !0))
                  : setTimeout(G.resume, 3);
              }),
              (this.aborted = function () {
                return O;
              }),
              (this.abort = function () {
                ((O = !0),
                  H.abort(),
                  (V.meta.aborted = !0),
                  T(x.complete) && x.complete(V),
                  (v = ""));
              }),
              (this.guessLineEndings = function (Vt, vt) {
                Vt = Vt.substring(0, 1048576);
                var vt = new RegExp(A(vt) + "([^]*?)" + A(vt), "gm"),
                  Yt = (Vt = Vt.replace(vt, "")).split("\r"),
                  vt = Vt.split(`
`),
                  Vt = 1 < vt.length && vt[0].length < Yt[0].length;
                if (Yt.length === 1 || Vt)
                  return `
`;
                for (var ae = 0, Dt = 0; Dt < Yt.length; Dt++)
                  Yt[Dt][0] ===
                    `
` && ae++;
                return ae >= Yt.length / 2
                  ? `\r
`
                  : "\r";
              }));
          }
          function A(x) {
            return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function C(x) {
            var v = (x = x || {}).delimiter,
              H = x.newline,
              R = x.comments,
              B = x.step,
              J = x.preview,
              st = x.fastMode,
              at = null,
              j = !1,
              G = x.quoteChar == null ? '"' : x.quoteChar,
              et = G;
            if (
              (x.escapeChar !== void 0 && (et = x.escapeChar),
              (typeof v != "string" || -1 < d.BAD_DELIMITERS.indexOf(v)) &&
                (v = ","),
              R === v)
            )
              throw new Error("Comment character same as delimiter");
            (R === !0
              ? (R = "#")
              : (typeof R != "string" || -1 < d.BAD_DELIMITERS.indexOf(R)) &&
                (R = !1),
              H !==
                `
` &&
                H !== "\r" &&
                H !==
                  `\r
` &&
                (H = `
`));
            var it = 0,
              rt = !1;
            ((this.parse = function (O, k, V) {
              if (typeof O != "string")
                throw new Error("Input must be a string");
              var nt = O.length,
                lt = v.length,
                ot = H.length,
                bt = R.length,
                pt = T(B),
                dt = [],
                Yt = [],
                vt = [],
                Vt = (it = 0);
              if (!O) return Nt();
              if (st || (st !== !1 && O.indexOf(G) === -1)) {
                for (var ae = O.split(H), Dt = 0; Dt < ae.length; Dt++) {
                  if (((vt = ae[Dt]), (it += vt.length), Dt !== ae.length - 1))
                    it += H.length;
                  else if (V) return Nt();
                  if (!R || vt.substring(0, bt) !== R) {
                    if (pt) {
                      if (((dt = []), ee(vt.split(v)), ln(), rt)) return Nt();
                    } else ee(vt.split(v));
                    if (J && J <= Dt) return ((dt = dt.slice(0, J)), Nt(!0));
                  }
                }
                return Nt();
              }
              for (
                var zt = O.indexOf(v, it),
                  _t = O.indexOf(H, it),
                  me = new RegExp(A(et) + A(G), "g"),
                  Ot = O.indexOf(G, it);
                ;
              )
                if (O[it] === G)
                  for (Ot = it, it++; ; ) {
                    if ((Ot = O.indexOf(G, Ot + 1)) === -1)
                      return (
                        V ||
                          Yt.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: dt.length,
                            index: it,
                          }),
                        sn()
                      );
                    if (Ot === nt - 1)
                      return sn(O.substring(it, Ot).replace(me, G));
                    if (G === et && O[Ot + 1] === et) Ot++;
                    else if (G === et || Ot === 0 || O[Ot - 1] !== et) {
                      zt !== -1 && zt < Ot + 1 && (zt = O.indexOf(v, Ot + 1));
                      var Gt = Tn(
                        (_t =
                          _t !== -1 && _t < Ot + 1
                            ? O.indexOf(H, Ot + 1)
                            : _t) === -1
                          ? zt
                          : Math.min(zt, _t),
                      );
                      if (O.substr(Ot + 1 + Gt, lt) === v) {
                        (vt.push(O.substring(it, Ot).replace(me, G)),
                          O[(it = Ot + 1 + Gt + lt)] !== G &&
                            (Ot = O.indexOf(G, it)),
                          (zt = O.indexOf(v, it)),
                          (_t = O.indexOf(H, it)));
                        break;
                      }
                      if (
                        ((Gt = Tn(_t)),
                        O.substring(Ot + 1 + Gt, Ot + 1 + Gt + ot) === H)
                      ) {
                        if (
                          (vt.push(O.substring(it, Ot).replace(me, G)),
                          Qi(Ot + 1 + Gt + ot),
                          (zt = O.indexOf(v, it)),
                          (Ot = O.indexOf(G, it)),
                          pt && (ln(), rt))
                        )
                          return Nt();
                        if (J && dt.length >= J) return Nt(!0);
                        break;
                      }
                      (Yt.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: dt.length,
                        index: it,
                      }),
                        Ot++);
                    }
                  }
                else if (
                  R &&
                  vt.length === 0 &&
                  O.substring(it, it + bt) === R
                ) {
                  if (_t === -1) return Nt();
                  ((it = _t + ot),
                    (_t = O.indexOf(H, it)),
                    (zt = O.indexOf(v, it)));
                } else if (zt !== -1 && (zt < _t || _t === -1))
                  (vt.push(O.substring(it, zt)),
                    (it = zt + lt),
                    (zt = O.indexOf(v, it)));
                else {
                  if (_t === -1) break;
                  if (
                    (vt.push(O.substring(it, _t)),
                    Qi(_t + ot),
                    pt && (ln(), rt))
                  )
                    return Nt();
                  if (J && dt.length >= J) return Nt(!0);
                }
              return sn();
              function ee(se) {
                (dt.push(se), (Vt = it));
              }
              function Tn(se) {
                var we = 0;
                return (we =
                  se !== -1 &&
                  (se = O.substring(Ot + 1, se)) &&
                  se.trim() === ""
                    ? se.length
                    : we);
              }
              function sn(se) {
                return (
                  V ||
                    (se === void 0 && (se = O.substring(it)),
                    vt.push(se),
                    (it = nt),
                    ee(vt),
                    pt && ln()),
                  Nt()
                );
              }
              function Qi(se) {
                ((it = se), ee(vt), (vt = []), (_t = O.indexOf(H, it)));
              }
              function Nt(se) {
                if (x.header && !k && dt.length && !j) {
                  var we = dt[0],
                    Be = Object.create(null),
                    As = new Set(we);
                  let Ts = !1;
                  for (let ui = 0; ui < we.length; ui++) {
                    let on = we[ui];
                    if (
                      Be[
                        (on = T(x.transformHeader)
                          ? x.transformHeader(on, ui)
                          : on)
                      ]
                    ) {
                      let xn,
                        Ae = Be[on];
                      for (; (xn = on + "_" + Ae), Ae++, As.has(xn); );
                      (As.add(xn),
                        (we[ui] = xn),
                        Be[on]++,
                        (Ts = !0),
                        ((at = at === null ? {} : at)[xn] = on));
                    } else ((Be[on] = 1), (we[ui] = on));
                    As.add(on);
                  }
                  (Ts && console.warn("Duplicate headers found and renamed."),
                    (j = !0));
                }
                return {
                  data: dt,
                  errors: Yt,
                  meta: {
                    delimiter: v,
                    linebreak: H,
                    aborted: rt,
                    truncated: !!se,
                    cursor: Vt + (k || 0),
                    renamedHeaders: at,
                  },
                };
              }
              function ln() {
                (B(Nt()), (dt = []), (Yt = []));
              }
            }),
              (this.abort = function () {
                rt = !0;
              }),
              (this.getCharIndex = function () {
                return it;
              }));
          }
          function I(x) {
            var v = x.data,
              H = h[v.workerId],
              R = !1;
            if (v.error) H.userError(v.error, v.file);
            else if (v.results && v.results.data) {
              var B = {
                abort: function () {
                  ((R = !0),
                    tt(v.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    }));
                },
                pause: Z,
                resume: Z,
              };
              if (T(H.userStep)) {
                for (
                  var J = 0;
                  J < v.results.data.length &&
                  (H.userStep(
                    {
                      data: v.results.data[J],
                      errors: v.results.errors,
                      meta: v.results.meta,
                    },
                    B,
                  ),
                  !R);
                  J++
                );
                delete v.results;
              } else
                T(H.userChunk) &&
                  (H.userChunk(v.results, B, v.file), delete v.results);
            }
            v.finished && !R && tt(v.workerId, v.results);
          }
          function tt(x, v) {
            var H = h[x];
            (T(H.userComplete) && H.userComplete(v),
              H.terminate(),
              delete h[x]);
          }
          function Z() {
            throw new Error("Not implemented.");
          }
          function F(x) {
            if (typeof x != "object" || x === null) return x;
            var v,
              H = Array.isArray(x) ? [] : {};
            for (v in x) H[v] = F(x[v]);
            return H;
          }
          function $(x, v) {
            return function () {
              x.apply(v, arguments);
            };
          }
          function T(x) {
            return typeof x == "function";
          }
          return (
            (d.parse = function (x, v) {
              var H = (v = v || {}).dynamicTyping || !1;
              if (
                (T(H) && ((v.dynamicTypingFunction = H), (H = {})),
                (v.dynamicTyping = H),
                (v.transform = !!T(v.transform) && v.transform),
                !v.worker || !d.WORKERS_SUPPORTED)
              )
                return (
                  (H = null),
                  d.NODE_STREAM_INPUT,
                  typeof x == "string"
                    ? ((x = ((R) =>
                        R.charCodeAt(0) !== 65279 ? R : R.slice(1))(x)),
                      (H = new (v.download ? b : _)(v)))
                    : x.readable === !0 && T(x.read) && T(x.on)
                      ? (H = new w(v))
                      : ((l.File && x instanceof File) ||
                          x instanceof Object) &&
                        (H = new S(v)),
                  H.stream(x)
                );
              (((H = (() => {
                var R;
                return (
                  !!d.WORKERS_SUPPORTED &&
                  ((R = (() => {
                    var B = l.URL || l.webkitURL || null,
                      J = a.toString();
                    return (
                      d.BLOB_URL ||
                      (d.BLOB_URL = B.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            J,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((R = new l.Worker(R)).onmessage = I),
                  (R.id = p++),
                  (h[R.id] = R))
                );
              })()).userStep = v.step),
                (H.userChunk = v.chunk),
                (H.userComplete = v.complete),
                (H.userError = v.error),
                (v.step = T(v.step)),
                (v.chunk = T(v.chunk)),
                (v.complete = T(v.complete)),
                (v.error = T(v.error)),
                delete v.worker,
                H.postMessage({ input: x, config: v, workerId: H.id }));
            }),
            (d.unparse = function (x, v) {
              var H = !1,
                R = !0,
                B = ",",
                J = `\r
`,
                st = '"',
                at = st + st,
                j = !1,
                G = null,
                et = !1,
                it =
                  ((() => {
                    if (typeof v == "object") {
                      if (
                        (typeof v.delimiter != "string" ||
                          d.BAD_DELIMITERS.filter(function (k) {
                            return v.delimiter.indexOf(k) !== -1;
                          }).length ||
                          (B = v.delimiter),
                        (typeof v.quotes != "boolean" &&
                          typeof v.quotes != "function" &&
                          !Array.isArray(v.quotes)) ||
                          (H = v.quotes),
                        (typeof v.skipEmptyLines != "boolean" &&
                          typeof v.skipEmptyLines != "string") ||
                          (j = v.skipEmptyLines),
                        typeof v.newline == "string" && (J = v.newline),
                        typeof v.quoteChar == "string" && (st = v.quoteChar),
                        typeof v.header == "boolean" && (R = v.header),
                        Array.isArray(v.columns))
                      ) {
                        if (v.columns.length === 0)
                          throw new Error("Option columns is empty");
                        G = v.columns;
                      }
                      (v.escapeChar !== void 0 && (at = v.escapeChar + st),
                        v.escapeFormulae instanceof RegExp
                          ? (et = v.escapeFormulae)
                          : typeof v.escapeFormulae == "boolean" &&
                            v.escapeFormulae &&
                            (et = /^[=+\-@\t\r].*$/));
                    }
                  })(),
                  new RegExp(A(st), "g"));
              if (
                (typeof x == "string" && (x = JSON.parse(x)), Array.isArray(x))
              ) {
                if (!x.length || Array.isArray(x[0])) return rt(null, x, j);
                if (typeof x[0] == "object")
                  return rt(G || Object.keys(x[0]), x, j);
              } else if (typeof x == "object")
                return (
                  typeof x.data == "string" && (x.data = JSON.parse(x.data)),
                  Array.isArray(x.data) &&
                    (x.fields || (x.fields = (x.meta && x.meta.fields) || G),
                    x.fields ||
                      (x.fields = Array.isArray(x.data[0])
                        ? x.fields
                        : typeof x.data[0] == "object"
                          ? Object.keys(x.data[0])
                          : []),
                    Array.isArray(x.data[0]) ||
                      typeof x.data[0] == "object" ||
                      (x.data = [x.data])),
                  rt(x.fields || [], x.data || [], j)
                );
              throw new Error("Unable to serialize unrecognized input");
              function rt(k, V, nt) {
                var lt = "",
                  ot =
                    (typeof k == "string" && (k = JSON.parse(k)),
                    typeof V == "string" && (V = JSON.parse(V)),
                    Array.isArray(k) && 0 < k.length),
                  bt = !Array.isArray(V[0]);
                if (ot && R) {
                  for (var pt = 0; pt < k.length; pt++)
                    (0 < pt && (lt += B), (lt += O(k[pt], pt)));
                  0 < V.length && (lt += J);
                }
                for (var dt = 0; dt < V.length; dt++) {
                  var Yt = (ot ? k : V[dt]).length,
                    vt = !1,
                    Vt = ot
                      ? Object.keys(V[dt]).length === 0
                      : V[dt].length === 0;
                  if (
                    (nt &&
                      !ot &&
                      (vt =
                        nt === "greedy"
                          ? V[dt].join("").trim() === ""
                          : V[dt].length === 1 && V[dt][0].length === 0),
                    nt === "greedy" && ot)
                  ) {
                    for (var ae = [], Dt = 0; Dt < Yt; Dt++) {
                      var zt = bt ? k[Dt] : Dt;
                      ae.push(V[dt][zt]);
                    }
                    vt = ae.join("").trim() === "";
                  }
                  if (!vt) {
                    for (var _t = 0; _t < Yt; _t++) {
                      0 < _t && !Vt && (lt += B);
                      var me = ot && bt ? k[_t] : _t;
                      lt += O(V[dt][me], _t);
                    }
                    dt < V.length - 1 && (!nt || (0 < Yt && !Vt)) && (lt += J);
                  }
                }
                return lt;
              }
              function O(k, V) {
                var nt, lt;
                return k == null
                  ? ""
                  : k.constructor === Date
                    ? JSON.stringify(k).slice(1, 25)
                    : ((lt = !1),
                      et &&
                        typeof k == "string" &&
                        et.test(k) &&
                        ((k = "'" + k), (lt = !0)),
                      (nt = k.toString().replace(it, at)),
                      (lt =
                        lt ||
                        H === !0 ||
                        (typeof H == "function" && H(k, V)) ||
                        (Array.isArray(H) && H[V]) ||
                        ((ot, bt) => {
                          for (var pt = 0; pt < bt.length; pt++)
                            if (-1 < ot.indexOf(bt[pt])) return !0;
                          return !1;
                        })(nt, d.BAD_DELIMITERS) ||
                        -1 < nt.indexOf(B) ||
                        nt.charAt(0) === " " ||
                        nt.charAt(nt.length - 1) === " ")
                        ? st + nt + st
                        : nt);
              }
            }),
            (d.RECORD_SEP = ""),
            (d.UNIT_SEP = ""),
            (d.BYTE_ORDER_MARK = "\uFEFF"),
            (d.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              d.BYTE_ORDER_MARK,
            ]),
            (d.WORKERS_SUPPORTED = !c && !!l.Worker),
            (d.NODE_STREAM_INPUT = 1),
            (d.LocalChunkSize = 10485760),
            (d.RemoteChunkSize = 5242880),
            (d.DefaultDelimiter = ","),
            (d.Parser = C),
            (d.ParserHandle = E),
            (d.NetworkStreamer = b),
            (d.FileStreamer = S),
            (d.StringStreamer = _),
            (d.ReadableStreamStreamer = w),
            l.jQuery &&
              ((o = l.jQuery).fn.parse = function (x) {
                var v = x.config || {},
                  H = [];
                return (
                  this.each(function (J) {
                    if (
                      !(
                        o(this).prop("tagName").toUpperCase() === "INPUT" &&
                        o(this).attr("type").toLowerCase() === "file" &&
                        l.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var st = 0; st < this.files.length; st++)
                      H.push({
                        file: this.files[st],
                        inputElem: this,
                        instanceConfig: o.extend({}, v),
                      });
                  }),
                  R(),
                  this
                );
                function R() {
                  if (H.length === 0) T(x.complete) && x.complete();
                  else {
                    var J,
                      st,
                      at,
                      j,
                      G = H[0];
                    if (T(x.before)) {
                      var et = x.before(G.file, G.inputElem);
                      if (typeof et == "object") {
                        if (et.action === "abort")
                          return (
                            (J = "AbortError"),
                            (st = G.file),
                            (at = G.inputElem),
                            (j = et.reason),
                            void (T(x.error) && x.error({ name: J }, st, at, j))
                          );
                        if (et.action === "skip") return void B();
                        typeof et.config == "object" &&
                          (G.instanceConfig = o.extend(
                            G.instanceConfig,
                            et.config,
                          ));
                      } else if (et === "skip") return void B();
                    }
                    var it = G.instanceConfig.complete;
                    ((G.instanceConfig.complete = function (rt) {
                      (T(it) && it(rt, G.file, G.inputElem), B());
                    }),
                      d.parse(G.file, G.instanceConfig));
                  }
                }
                function B() {
                  (H.splice(0, 1), R());
                }
              }),
            u &&
              (l.onmessage = function (x) {
                ((x = x.data),
                  d.WORKER_ID === void 0 && x && (d.WORKER_ID = x.workerId),
                  typeof x.input == "string"
                    ? l.postMessage({
                        workerId: d.WORKER_ID,
                        results: d.parse(x.input, x.config),
                        finished: !0,
                      })
                    : ((l.File && x.input instanceof File) ||
                        x.input instanceof Object) &&
                      (x = d.parse(x.input, x.config)) &&
                      l.postMessage({
                        workerId: d.WORKER_ID,
                        results: x,
                        finished: !0,
                      }));
              }),
            ((b.prototype = Object.create(m.prototype)).constructor = b),
            ((S.prototype = Object.create(m.prototype)).constructor = S),
            ((_.prototype = Object.create(_.prototype)).constructor = _),
            ((w.prototype = Object.create(m.prototype)).constructor = w),
            d
          );
        });
      })(Or)),
    Or.exports
  );
}
var Av = Ev();
const Tv = lb(Av),
  Un = ft.createContext(),
  Ov = ({ children: i }) => {
    const [e, a] = ft.useState(!1),
      l = ft.useRef(null),
      [o, c] = ft.useState("vlabEMGnormalAndContraction.csv"),
      u = ft.useRef(o),
      [h, p] = ft.useState(80),
      [d, m] = ft.useState({
        Powerline: !1,
        muscleNoise: !1,
        motionArtifact: !1,
        baselineDrift: !1,
      }),
      [b, S] = ft.useState(!1),
      [_, w] = ft.useState(!1),
      [E, A] = ft.useState(!1),
      [C, I] = ft.useState(!1),
      [tt, Z] = ft.useState([]),
      [F, $] = ft.useState([]),
      [T, x] = ft.useState({
        order: 5,
        characteristic: "IIR",
        filterType: "bandpass",
        windowMode: "windowSync",
        preGain: !1,
        Fs: 500,
        Fc: 10,
        F1: null,
        F2: null,
        Fa: null,
        Fb: null,
        Att: 100,
      }),
      [v, H] = ft.useState([]),
      [R, B] = ft.useState(300),
      [J, st] = ft.useState(null),
      [at, j] = ft.useState([]),
      [G, et] = ft.useState(!1);
    ft.useEffect(() => {
      Tv.parse(o, {
        download: !0,
        skipEmptyLines: !0,
        complete: (rt) => {
          const O = rt.data;
          if (!O.length) return;
          const k = O[0],
            V = k.indexOf("Time"),
            nt = k.indexOf("X3:EMGLE");
          if (V === -1 || nt === -1) {
            console.error("Required columns not found");
            return;
          }
          const lt = parseFloat(O[1][V]) || 0,
            ot = O.slice(1).map((dt) => ({
              x: parseFloat(dt[V]) - lt,
              y: parseFloat(dt[nt]) || 0,
            }));
          H(ot);
          const bt = ot.length > 1 ? ot[1].x - ot[0].x : 0.002,
            pt = Number((bt > 0 ? 1 / bt : 300).toFixed(2));
          B(pt);
        },
        error: (rt) => console.error("CSV parse error", rt),
      });
    }, [o]);
    const it = () => {};
    return U.jsx(Un.Provider, {
      value: {
        showInstruction: e,
        setShowInstruction: a,
        buttonRef: l,
        generateECG: b,
        setGenerateECG: S,
        noisyECG: tt,
        setNoisyECG: Z,
        filteredECG: E,
        setFilteredECG: A,
        config: T,
        setConfig: x,
        time: h,
        setTime: p,
        csvFilePath: o,
        prevPathRef: u,
        setCsvFilePath: c,
        rawSamples: v,
        originalFs: R,
        noise: d,
        setNoise: m,
        applyNoise: it,
        applyNoiseTrigger: _,
        setApplyNoiseTrigger: w,
        freqResponse: J,
        setFreqResponse: st,
        applyFreqTrigger: G,
        setApplyFreqTrigger: et,
        applypsdTrigger: C,
        setApplypsdTrigger: I,
        noisySamples: at,
        setNoisySamples: j,
        filteredSamples: F,
        setFilteredSamples: $,
      },
      children: i,
    });
  },
  Dv = () => {
    const {
        showInstruction: i,
        setShowInstruction: e,
        buttonRef: a,
      } = ft.useContext(Un),
      l = () => {
        e(!i);
      };
    return U.jsx("div", {
      className: xl.Container,
      children: U.jsxs("div", {
        className: xl.panelContainer,
        children: [
          U.jsx("h1", {
            children: "Application and Usage of Filters on EMG Signal",
          }),
          U.jsx("div", {
            className: xl.buttonContainer,
            children: U.jsxs("button", {
              ref: a,
              className: xl.panelButton,
              onClick: l,
              children: [
                U.jsx("span", { className: xl.buttonIcon, children: "ℹ️" }),
                "Instruction",
              ],
            }),
          }),
        ],
      }),
    });
  },
  zv = "_box_xbv2t_15",
  kv = "_container_xbv2t_25",
  Rv = "_card_xbv2t_115",
  fa = { box: zv, container: kv, card: Rv },
  Bv = () =>
    U.jsx("div", {
      className: fa.box,
      children: U.jsxs("div", {
        className: fa.container,
        children: [
          U.jsx("div", {
            className: fa.card,
            children: U.jsx("h1", { children: "INSTRUCTIONS" }),
          }),
          U.jsx("div", {
            className: fa.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 1: " }),
                "Select an ",
                U.jsx("b", { children: "EMG Dataset" }),
                " from the dropdown menu. Adjust the ",
                U.jsx("b", { children: "Duration" }),
                " and ",
                U.jsx("b", { children: "Sampling Rate" }),
                " sliders as needed. Click the ",
                U.jsx("b", { children: '"Generate EMG Signal"' }),
                " button to visualize the original unfiltered EMG signal.",
              ],
            }),
          }),
          U.jsx("div", {
            className: fa.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 2: " }),
                "Select one or more noise types (",
                U.jsx("b", { children: "Baseline Drift" }),
                ", ",
                U.jsx("b", { children: "Powerline Noise" }),
                ", ",
                U.jsx("b", { children: "Muscle Noise" }),
                ", ",
                U.jsx("b", { children: "Motion Artifact" }),
                ") using the checkboxes. Click the ",
                U.jsx("b", { children: '"Add Noise to Signal"' }),
                " button to observe the corrupted signal.",
              ],
            }),
          }),
          U.jsx("div", {
            className: fa.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 3: " }),
                "Configure the filter settings in the",
                " ",
                U.jsx("b", { children: "Filter Design" }),
                " section. Choose the ",
                U.jsx("b", { children: "Algorithm" }),
                " (IIR/FIR),",
                " ",
                U.jsx("b", { children: "Filter Type" }),
                " (Lowpass, Highpass, etc.), and set the",
                " ",
                U.jsx("b", { children: "Cutoff Frequencies" }),
                " and ",
                U.jsx("b", { children: "Order" }),
                ".",
              ],
            }),
          }),
          U.jsx("div", {
            className: fa.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 4: " }),
                "Click the ",
                U.jsx("b", { children: "Compute PSD" }),
                " button to visualize the Power Spectral Density (PSD) of the Noisy, and Filtered signals. Observe the frequency components and compare the filter's effect on the signal's spectrum.",
              ],
            }),
          }),
        ],
      }),
    }),
  Lv = "_leftPanelContainer_nct8j_1",
  jv = "_container_nct8j_29",
  Hv = "_psdContainer_nct8j_49",
  xf = { leftPanelContainer: Lv, container: jv, psdContainer: Hv },
  Nv = "_signalContainer_s8uz9_1",
  Uv = { signalContainer: Nv };
function Vl(i) {
  return (i + 0.5) | 0;
}
const Ni = (i, e, a) => Math.max(Math.min(i, a), e);
function Tl(i) {
  return Ni(Vl(i * 2.55), 0, 255);
}
function Gi(i) {
  return Ni(Vl(i * 255), 0, 255);
}
function ri(i) {
  return Ni(Vl(i / 2.55) / 100, 0, 1);
}
function jm(i) {
  return Ni(Vl(i * 100), 0, 100);
}
const yn = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  jf = [..."0123456789ABCDEF"],
  qv = (i) => jf[i & 15],
  Fv = (i) => jf[(i & 240) >> 4] + jf[i & 15],
  gr = (i) => (i & 240) >> 4 === (i & 15),
  Yv = (i) => gr(i.r) && gr(i.g) && gr(i.b) && gr(i.a);
function Vv(i) {
  var e = i.length,
    a;
  return (
    i[0] === "#" &&
      (e === 4 || e === 5
        ? (a = {
            r: 255 & (yn[i[1]] * 17),
            g: 255 & (yn[i[2]] * 17),
            b: 255 & (yn[i[3]] * 17),
            a: e === 5 ? yn[i[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (a = {
            r: (yn[i[1]] << 4) | yn[i[2]],
            g: (yn[i[3]] << 4) | yn[i[4]],
            b: (yn[i[5]] << 4) | yn[i[6]],
            a: e === 9 ? (yn[i[7]] << 4) | yn[i[8]] : 255,
          })),
    a
  );
}
const Gv = (i, e) => (i < 255 ? e(i) : "");
function Xv(i) {
  var e = Yv(i) ? qv : Fv;
  return i ? "#" + e(i.r) + e(i.g) + e(i.b) + Gv(i.a, e) : void 0;
}
const Qv =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ob(i, e, a) {
  const l = e * Math.min(a, 1 - a),
    o = (c, u = (c + i / 30) % 12) =>
      a - l * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  return [o(0), o(8), o(4)];
}
function Zv(i, e, a) {
  const l = (o, c = (o + i / 60) % 6) =>
    a - a * e * Math.max(Math.min(c, 4 - c, 1), 0);
  return [l(5), l(3), l(1)];
}
function Kv(i, e, a) {
  const l = ob(i, 1, 0.5);
  let o;
  for (e + a > 1 && ((o = 1 / (e + a)), (e *= o), (a *= o)), o = 0; o < 3; o++)
    ((l[o] *= 1 - e - a), (l[o] += e));
  return l;
}
function Pv(i, e, a, l, o) {
  return i === o
    ? (e - a) / l + (e < a ? 6 : 0)
    : e === o
      ? (a - i) / l + 2
      : (i - e) / l + 4;
}
function Kf(i) {
  const a = i.r / 255,
    l = i.g / 255,
    o = i.b / 255,
    c = Math.max(a, l, o),
    u = Math.min(a, l, o),
    h = (c + u) / 2;
  let p, d, m;
  return (
    c !== u &&
      ((m = c - u),
      (d = h > 0.5 ? m / (2 - c - u) : m / (c + u)),
      (p = Pv(a, l, o, m, c)),
      (p = p * 60 + 0.5)),
    [p | 0, d || 0, h]
  );
}
function Pf(i, e, a, l) {
  return (Array.isArray(e) ? i(e[0], e[1], e[2]) : i(e, a, l)).map(Gi);
}
function If(i, e, a) {
  return Pf(ob, i, e, a);
}
function Iv(i, e, a) {
  return Pf(Kv, i, e, a);
}
function Wv(i, e, a) {
  return Pf(Zv, i, e, a);
}
function rb(i) {
  return ((i % 360) + 360) % 360;
}
function $v(i) {
  const e = Qv.exec(i);
  let a = 255,
    l;
  if (!e) return;
  e[5] !== l && (a = e[6] ? Tl(+e[5]) : Gi(+e[5]));
  const o = rb(+e[2]),
    c = +e[3] / 100,
    u = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (l = Iv(o, c, u))
      : e[1] === "hsv"
        ? (l = Wv(o, c, u))
        : (l = If(o, c, u)),
    { r: l[0], g: l[1], b: l[2], a }
  );
}
function Jv(i, e) {
  var a = Kf(i);
  ((a[0] = rb(a[0] + e)),
    (a = If(a)),
    (i.r = a[0]),
    (i.g = a[1]),
    (i.b = a[2]));
}
function tw(i) {
  if (!i) return;
  const e = Kf(i),
    a = e[0],
    l = jm(e[1]),
    o = jm(e[2]);
  return i.a < 255
    ? `hsla(${a}, ${l}%, ${o}%, ${ri(i.a)})`
    : `hsl(${a}, ${l}%, ${o}%)`;
}
const Hm = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Nm = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function ew() {
  const i = {},
    e = Object.keys(Nm),
    a = Object.keys(Hm);
  let l, o, c, u, h;
  for (l = 0; l < e.length; l++) {
    for (u = h = e[l], o = 0; o < a.length; o++)
      ((c = a[o]), (h = h.replace(c, Hm[c])));
    ((c = parseInt(Nm[u], 16)),
      (i[h] = [(c >> 16) & 255, (c >> 8) & 255, c & 255]));
  }
  return i;
}
let pr;
function nw(i) {
  pr || ((pr = ew()), (pr.transparent = [0, 0, 0, 0]));
  const e = pr[i.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const iw =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function aw(i) {
  const e = iw.exec(i);
  let a = 255,
    l,
    o,
    c;
  if (e) {
    if (e[7] !== l) {
      const u = +e[7];
      a = e[8] ? Tl(u) : Ni(u * 255, 0, 255);
    }
    return (
      (l = +e[1]),
      (o = +e[3]),
      (c = +e[5]),
      (l = 255 & (e[2] ? Tl(l) : Ni(l, 0, 255))),
      (o = 255 & (e[4] ? Tl(o) : Ni(o, 0, 255))),
      (c = 255 & (e[6] ? Tl(c) : Ni(c, 0, 255))),
      { r: l, g: o, b: c, a }
    );
  }
}
function sw(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ri(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const Sf = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  hs = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function lw(i, e, a) {
  const l = hs(ri(i.r)),
    o = hs(ri(i.g)),
    c = hs(ri(i.b));
  return {
    r: Gi(Sf(l + a * (hs(ri(e.r)) - l))),
    g: Gi(Sf(o + a * (hs(ri(e.g)) - o))),
    b: Gi(Sf(c + a * (hs(ri(e.b)) - c))),
    a: i.a + a * (e.a - i.a),
  };
}
function mr(i, e, a) {
  if (i) {
    let l = Kf(i);
    ((l[e] = Math.max(0, Math.min(l[e] + l[e] * a, e === 0 ? 360 : 1))),
      (l = If(l)),
      (i.r = l[0]),
      (i.g = l[1]),
      (i.b = l[2]));
  }
}
function cb(i, e) {
  return i && Object.assign(e || {}, i);
}
function Um(i) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((e = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (e.a = Gi(i[3])))
      : ((e = cb(i, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Gi(e.a))),
    e
  );
}
function ow(i) {
  return i.charAt(0) === "r" ? aw(i) : $v(i);
}
class Hl {
  constructor(e) {
    if (e instanceof Hl) return e;
    const a = typeof e;
    let l;
    (a === "object"
      ? (l = Um(e))
      : a === "string" && (l = Vv(e) || nw(e) || ow(e)),
      (this._rgb = l),
      (this._valid = !!l));
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = cb(this._rgb);
    return (e && (e.a = ri(e.a)), e);
  }
  set rgb(e) {
    this._rgb = Um(e);
  }
  rgbString() {
    return this._valid ? sw(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Xv(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? tw(this._rgb) : void 0;
  }
  mix(e, a) {
    if (e) {
      const l = this.rgb,
        o = e.rgb;
      let c;
      const u = a === c ? 0.5 : a,
        h = 2 * u - 1,
        p = l.a - o.a,
        d = ((h * p === -1 ? h : (h + p) / (1 + h * p)) + 1) / 2;
      ((c = 1 - d),
        (l.r = 255 & (d * l.r + c * o.r + 0.5)),
        (l.g = 255 & (d * l.g + c * o.g + 0.5)),
        (l.b = 255 & (d * l.b + c * o.b + 0.5)),
        (l.a = u * l.a + (1 - u) * o.a),
        (this.rgb = l));
    }
    return this;
  }
  interpolate(e, a) {
    return (e && (this._rgb = lw(this._rgb, e._rgb, a)), this);
  }
  clone() {
    return new Hl(this.rgb);
  }
  alpha(e) {
    return ((this._rgb.a = Gi(e)), this);
  }
  clearer(e) {
    const a = this._rgb;
    return ((a.a *= 1 - e), this);
  }
  greyscale() {
    const e = this._rgb,
      a = Vl(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return ((e.r = e.g = e.b = a), this);
  }
  opaquer(e) {
    const a = this._rgb;
    return ((a.a *= 1 + e), this);
  }
  negate() {
    const e = this._rgb;
    return ((e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this);
  }
  lighten(e) {
    return (mr(this._rgb, 2, e), this);
  }
  darken(e) {
    return (mr(this._rgb, 2, -e), this);
  }
  saturate(e) {
    return (mr(this._rgb, 1, e), this);
  }
  desaturate(e) {
    return (mr(this._rgb, 1, -e), this);
  }
  rotate(e) {
    return (Jv(this._rgb, e), this);
  }
}
function ai() {}
const rw = (() => {
  let i = 0;
  return () => i++;
})();
function Pt(i) {
  return i == null;
}
function Ee(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const e = Object.prototype.toString.call(i);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function Lt(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function wn(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Rn(i, e) {
  return wn(i) ? i : e;
}
function Tt(i, e) {
  return typeof i > "u" ? e : i;
}
const cw = (i, e) =>
  typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * e : +i;
function Jt(i, e, a) {
  if (i && typeof i.call == "function") return i.apply(a, e);
}
function Ft(i, e, a, l) {
  let o, c, u;
  if (Ee(i)) for (c = i.length, o = 0; o < c; o++) e.call(a, i[o], o);
  else if (Lt(i))
    for (u = Object.keys(i), c = u.length, o = 0; o < c; o++)
      e.call(a, i[u[o]], u[o]);
}
function kr(i, e) {
  let a, l, o, c;
  if (!i || !e || i.length !== e.length) return !1;
  for (a = 0, l = i.length; a < l; ++a)
    if (
      ((o = i[a]),
      (c = e[a]),
      o.datasetIndex !== c.datasetIndex || o.index !== c.index)
    )
      return !1;
  return !0;
}
function Rr(i) {
  if (Ee(i)) return i.map(Rr);
  if (Lt(i)) {
    const e = Object.create(null),
      a = Object.keys(i),
      l = a.length;
    let o = 0;
    for (; o < l; ++o) e[a[o]] = Rr(i[a[o]]);
    return e;
  }
  return i;
}
function ub(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function uw(i, e, a, l) {
  if (!ub(i)) return;
  const o = e[i],
    c = a[i];
  Lt(o) && Lt(c) ? Nl(o, c, l) : (e[i] = Rr(c));
}
function Nl(i, e, a) {
  const l = Ee(e) ? e : [e],
    o = l.length;
  if (!Lt(i)) return i;
  a = a || {};
  const c = a.merger || uw;
  let u;
  for (let h = 0; h < o; ++h) {
    if (((u = l[h]), !Lt(u))) continue;
    const p = Object.keys(u);
    for (let d = 0, m = p.length; d < m; ++d) c(p[d], i, u, a);
  }
  return i;
}
function kl(i, e) {
  return Nl(i, e, { merger: fw });
}
function fw(i, e, a) {
  if (!ub(i)) return;
  const l = e[i],
    o = a[i];
  Lt(l) && Lt(o)
    ? kl(l, o)
    : Object.prototype.hasOwnProperty.call(e, i) || (e[i] = Rr(o));
}
const qm = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function hw(i) {
  const e = i.split("."),
    a = [];
  let l = "";
  for (const o of e)
    ((l += o),
      l.endsWith("\\") ? (l = l.slice(0, -1) + ".") : (a.push(l), (l = "")));
  return a;
}
function dw(i) {
  const e = hw(i);
  return (a) => {
    for (const l of e) {
      if (l === "") break;
      a = a && a[l];
    }
    return a;
  };
}
function Br(i, e) {
  return (qm[e] || (qm[e] = dw(e)))(i);
}
function Wf(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Lr = (i) => typeof i < "u",
  Xi = (i) => typeof i == "function",
  Fm = (i, e) => {
    if (i.size !== e.size) return !1;
    for (const a of i) if (!e.has(a)) return !1;
    return !0;
  };
function gw(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const Oe = Math.PI,
  Hn = 2 * Oe,
  pw = Hn + Oe,
  jr = Number.POSITIVE_INFINITY,
  mw = Oe / 180,
  En = Oe / 2,
  ha = Oe / 4,
  Ym = (Oe * 2) / 3,
  fb = Math.log10,
  ps = Math.sign;
function Rl(i, e, a) {
  return Math.abs(i - e) < a;
}
function Vm(i) {
  const e = Math.round(i);
  i = Rl(i, e, i / 1e3) ? e : i;
  const a = Math.pow(10, Math.floor(fb(i))),
    l = i / a;
  return (l <= 1 ? 1 : l <= 2 ? 2 : l <= 5 ? 5 : 10) * a;
}
function bw(i) {
  const e = [],
    a = Math.sqrt(i);
  let l;
  for (l = 1; l < a; l++) i % l === 0 && (e.push(l), e.push(i / l));
  return (a === (a | 0) && e.push(a), e.sort((o, c) => o - c).pop(), e);
}
function yw(i) {
  return (
    typeof i == "symbol" ||
    (typeof i == "object" &&
      i !== null &&
      !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i))
  );
}
function Ul(i) {
  return !yw(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function vw(i, e) {
  const a = Math.round(i);
  return a - e <= i && a + e >= i;
}
function ww(i, e, a) {
  let l, o, c;
  for (l = 0, o = i.length; l < o; l++)
    ((c = i[l][a]),
      isNaN(c) || ((e.min = Math.min(e.min, c)), (e.max = Math.max(e.max, c))));
}
function ya(i) {
  return i * (Oe / 180);
}
function _w(i) {
  return i * (180 / Oe);
}
function Gm(i) {
  if (!wn(i)) return;
  let e = 1,
    a = 0;
  for (; Math.round(i * e) / e !== i; ) ((e *= 10), a++);
  return a;
}
function xw(i, e) {
  const a = e.x - i.x,
    l = e.y - i.y,
    o = Math.sqrt(a * a + l * l);
  let c = Math.atan2(l, a);
  return (c < -0.5 * Oe && (c += Hn), { angle: c, distance: o });
}
function Hf(i, e) {
  return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
}
function Sw(i, e) {
  return ((i - e + pw) % Hn) - Oe;
}
function Hi(i) {
  return ((i % Hn) + Hn) % Hn;
}
function hb(i, e, a, l) {
  const o = Hi(i),
    c = Hi(e),
    u = Hi(a),
    h = Hi(c - o),
    p = Hi(u - o),
    d = Hi(o - c),
    m = Hi(o - u);
  return o === c || o === u || (l && c === u) || (h > p && d < m);
}
function vn(i, e, a) {
  return Math.max(e, Math.min(a, i));
}
function Mw(i) {
  return vn(i, -32768, 32767);
}
function Ol(i, e, a, l = 1e-6) {
  return i >= Math.min(e, a) - l && i <= Math.max(e, a) + l;
}
function $f(i, e, a) {
  a = a || ((u) => i[u] < e);
  let l = i.length - 1,
    o = 0,
    c;
  for (; l - o > 1; ) ((c = (o + l) >> 1), a(c) ? (o = c) : (l = c));
  return { lo: o, hi: l };
}
const va = (i, e, a, l) =>
    $f(
      i,
      a,
      l
        ? (o) => {
            const c = i[o][e];
            return c < a || (c === a && i[o + 1][e] === a);
          }
        : (o) => i[o][e] < a,
    ),
  Cw = (i, e, a) => $f(i, a, (l) => i[l][e] >= a);
function Ew(i, e, a) {
  let l = 0,
    o = i.length;
  for (; l < o && i[l] < e; ) l++;
  for (; o > l && i[o - 1] > a; ) o--;
  return l > 0 || o < i.length ? i.slice(l, o) : i;
}
const db = ["push", "pop", "shift", "splice", "unshift"];
function Aw(i, e) {
  if (i._chartjs) {
    i._chartjs.listeners.push(e);
    return;
  }
  (Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    db.forEach((a) => {
      const l = "_onData" + Wf(a),
        o = i[a];
      Object.defineProperty(i, a, {
        configurable: !0,
        enumerable: !1,
        value(...c) {
          const u = o.apply(this, c);
          return (
            i._chartjs.listeners.forEach((h) => {
              typeof h[l] == "function" && h[l](...c);
            }),
            u
          );
        },
      });
    }));
}
function Xm(i, e) {
  const a = i._chartjs;
  if (!a) return;
  const l = a.listeners,
    o = l.indexOf(e);
  (o !== -1 && l.splice(o, 1),
    !(l.length > 0) &&
      (db.forEach((c) => {
        delete i[c];
      }),
      delete i._chartjs));
}
function Tw(i) {
  const e = new Set(i);
  return e.size === i.length ? i : Array.from(e);
}
const gb = (function () {
  return typeof window > "u"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function pb(i, e) {
  let a = [],
    l = !1;
  return function (...o) {
    ((a = o),
      l ||
        ((l = !0),
        gb.call(window, () => {
          ((l = !1), i.apply(e, a));
        })));
  };
}
function Ow(i, e) {
  let a;
  return function (...l) {
    return (
      e ? (clearTimeout(a), (a = setTimeout(i, e, l))) : i.apply(this, l),
      e
    );
  };
}
const mb = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  tn = (i, e, a) => (i === "start" ? e : i === "end" ? a : (e + a) / 2),
  Dw = (i, e, a, l) =>
    i === (l ? "left" : "right") ? a : i === "center" ? (e + a) / 2 : e;
function zw(i, e, a) {
  const l = e.length;
  let o = 0,
    c = l;
  if (i._sorted) {
    const { iScale: u, vScale: h, _parsed: p } = i,
      d = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
      m = u.axis,
      { min: b, max: S, minDefined: _, maxDefined: w } = u.getUserBounds();
    if (_) {
      if (
        ((o = Math.min(
          va(p, m, b).lo,
          a ? l : va(e, m, u.getPixelForValue(b)).lo,
        )),
        d)
      ) {
        const E = p
          .slice(0, o + 1)
          .reverse()
          .findIndex((A) => !Pt(A[h.axis]));
        o -= Math.max(0, E);
      }
      o = vn(o, 0, l - 1);
    }
    if (w) {
      let E = Math.max(
        va(p, u.axis, S, !0).hi + 1,
        a ? 0 : va(e, m, u.getPixelForValue(S), !0).hi + 1,
      );
      if (d) {
        const A = p.slice(E - 1).findIndex((C) => !Pt(C[h.axis]));
        E += Math.max(0, A);
      }
      c = vn(E, o, l) - o;
    } else c = l - o;
  }
  return { start: o, count: c };
}
function kw(i) {
  const { xScale: e, yScale: a, _scaleRanges: l } = i,
    o = { xmin: e.min, xmax: e.max, ymin: a.min, ymax: a.max };
  if (!l) return ((i._scaleRanges = o), !0);
  const c =
    l.xmin !== e.min ||
    l.xmax !== e.max ||
    l.ymin !== a.min ||
    l.ymax !== a.max;
  return (Object.assign(l, o), c);
}
const br = (i) => i === 0 || i === 1,
  Qm = (i, e, a) =>
    -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - e) * Hn) / a)),
  Zm = (i, e, a) => Math.pow(2, -10 * i) * Math.sin(((i - e) * Hn) / a) + 1,
  Bl = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * En) + 1,
    easeOutSine: (i) => Math.sin(i * En),
    easeInOutSine: (i) => -0.5 * (Math.cos(Oe * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      br(i)
        ? i
        : i < 0.5
          ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (br(i) ? i : Qm(i, 0.075, 0.3)),
    easeOutElastic: (i) => (br(i) ? i : Zm(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return br(i)
        ? i
        : i < 0.5
          ? 0.5 * Qm(i * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * Zm(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let e = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((e *= 1.525) + 1) * i - e))
        : 0.5 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2);
    },
    easeInBounce: (i) => 1 - Bl.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
          ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
          : i < 2.5 / 2.75
            ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
            : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? Bl.easeInBounce(i * 2) * 0.5
        : Bl.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function Jf(i) {
  if (i && typeof i == "object") {
    const e = i.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Km(i) {
  return Jf(i) ? i : new Hl(i);
}
function Mf(i) {
  return Jf(i) ? i : new Hl(i).saturate(0.5).darken(0.1).hexString();
}
const Rw = ["x", "y", "borderWidth", "radius", "tension"],
  Bw = ["color", "borderColor", "backgroundColor"];
function Lw(i) {
  (i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    i.set("animations", {
      colors: { type: "color", properties: Bw },
      numbers: { type: "number", properties: Rw },
    }),
    i.describe("animations", { _fallback: "animation" }),
    i.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
        },
      },
    }));
}
function jw(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Pm = new Map();
function Hw(i, e) {
  e = e || {};
  const a = i + JSON.stringify(e);
  let l = Pm.get(a);
  return (l || ((l = new Intl.NumberFormat(i, e)), Pm.set(a, l)), l);
}
function bb(i, e, a) {
  return Hw(e, a).format(i);
}
const Nw = {
  values(i) {
    return Ee(i) ? i : "" + i;
  },
  numeric(i, e, a) {
    if (i === 0) return "0";
    const l = this.chart.options.locale;
    let o,
      c = i;
    if (a.length > 1) {
      const d = Math.max(Math.abs(a[0].value), Math.abs(a[a.length - 1].value));
      ((d < 1e-4 || d > 1e15) && (o = "scientific"), (c = Uw(i, a)));
    }
    const u = fb(Math.abs(c)),
      h = isNaN(u) ? 1 : Math.max(Math.min(-1 * Math.floor(u), 20), 0),
      p = { notation: o, minimumFractionDigits: h, maximumFractionDigits: h };
    return (Object.assign(p, this.options.ticks.format), bb(i, l, p));
  },
};
function Uw(i, e) {
  let a = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return (
    Math.abs(a) >= 1 && i !== Math.floor(i) && (a = i - Math.floor(i)),
    a
  );
}
var yb = { formatters: Nw };
function qw(i) {
  (i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, a) => a.lineWidth,
      tickColor: (e, a) => a.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: yb.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    i.route("scale.ticks", "color", "", "color"),
    i.route("scale.grid", "color", "", "borderColor"),
    i.route("scale.border", "color", "", "borderColor"),
    i.route("scale.title", "color", "", "color"),
    i.describe("scale", {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith("before") &&
        !e.startsWith("after") &&
        e !== "callback" &&
        e !== "parser",
      _indexable: (e) =>
        e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    i.describe("scales", { _fallback: "scale" }),
    i.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    }));
}
const Sa = Object.create(null),
  Nf = Object.create(null);
function Ll(i, e) {
  if (!e) return i;
  const a = e.split(".");
  for (let l = 0, o = a.length; l < o; ++l) {
    const c = a[l];
    i = i[c] || (i[c] = Object.create(null));
  }
  return i;
}
function Cf(i, e, a) {
  return typeof e == "string" ? Nl(Ll(i, e), a) : Nl(Ll(i, ""), e);
}
class Fw {
  constructor(e, a) {
    ((this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (l) => l.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (l, o) => Mf(o.backgroundColor)),
      (this.hoverBorderColor = (l, o) => Mf(o.borderColor)),
      (this.hoverColor = (l, o) => Mf(o.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(a));
  }
  set(e, a) {
    return Cf(this, e, a);
  }
  get(e) {
    return Ll(this, e);
  }
  describe(e, a) {
    return Cf(Nf, e, a);
  }
  override(e, a) {
    return Cf(Sa, e, a);
  }
  route(e, a, l, o) {
    const c = Ll(this, e),
      u = Ll(this, l),
      h = "_" + a;
    Object.defineProperties(c, {
      [h]: { value: c[a], writable: !0 },
      [a]: {
        enumerable: !0,
        get() {
          const p = this[h],
            d = u[o];
          return Lt(p) ? Object.assign({}, d, p) : Tt(p, d);
        },
        set(p) {
          this[h] = p;
        },
      },
    });
  }
  apply(e) {
    e.forEach((a) => a(this));
  }
}
var ce = new Fw(
  {
    _scriptable: (i) => !i.startsWith("on"),
    _indexable: (i) => i !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Lw, jw, qw],
);
function Yw(i) {
  return !i || Pt(i.size) || Pt(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function Im(i, e, a, l, o) {
  let c = e[o];
  return (
    c || ((c = e[o] = i.measureText(o).width), a.push(o)),
    c > l && (l = c),
    l
  );
}
function da(i, e, a) {
  const l = i.currentDevicePixelRatio,
    o = a !== 0 ? Math.max(a / 2, 0.5) : 0;
  return Math.round((e - o) * l) / l + o;
}
function Wm(i, e) {
  (!e && !i) ||
    ((e = e || i.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, i.width, i.height),
    e.restore());
}
function Uf(i, e, a, l) {
  vb(i, e, a, l, null);
}
function vb(i, e, a, l, o) {
  let c, u, h, p, d, m, b, S;
  const _ = e.pointStyle,
    w = e.rotation,
    E = e.radius;
  let A = (w || 0) * mw;
  if (
    _ &&
    typeof _ == "object" &&
    ((c = _.toString()),
    c === "[object HTMLImageElement]" || c === "[object HTMLCanvasElement]")
  ) {
    (i.save(),
      i.translate(a, l),
      i.rotate(A),
      i.drawImage(_, -_.width / 2, -_.height / 2, _.width, _.height),
      i.restore());
    return;
  }
  if (!(isNaN(E) || E <= 0)) {
    switch ((i.beginPath(), _)) {
      default:
        (o ? i.ellipse(a, l, o / 2, E, 0, 0, Hn) : i.arc(a, l, E, 0, Hn),
          i.closePath());
        break;
      case "triangle":
        ((m = o ? o / 2 : E),
          i.moveTo(a + Math.sin(A) * m, l - Math.cos(A) * E),
          (A += Ym),
          i.lineTo(a + Math.sin(A) * m, l - Math.cos(A) * E),
          (A += Ym),
          i.lineTo(a + Math.sin(A) * m, l - Math.cos(A) * E),
          i.closePath());
        break;
      case "rectRounded":
        ((d = E * 0.516),
          (p = E - d),
          (u = Math.cos(A + ha) * p),
          (b = Math.cos(A + ha) * (o ? o / 2 - d : p)),
          (h = Math.sin(A + ha) * p),
          (S = Math.sin(A + ha) * (o ? o / 2 - d : p)),
          i.arc(a - b, l - h, d, A - Oe, A - En),
          i.arc(a + S, l - u, d, A - En, A),
          i.arc(a + b, l + h, d, A, A + En),
          i.arc(a - S, l + u, d, A + En, A + Oe),
          i.closePath());
        break;
      case "rect":
        if (!w) {
          ((p = Math.SQRT1_2 * E),
            (m = o ? o / 2 : p),
            i.rect(a - m, l - p, 2 * m, 2 * p));
          break;
        }
        A += ha;
      case "rectRot":
        ((b = Math.cos(A) * (o ? o / 2 : E)),
          (u = Math.cos(A) * E),
          (h = Math.sin(A) * E),
          (S = Math.sin(A) * (o ? o / 2 : E)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + S, l - u),
          i.lineTo(a + b, l + h),
          i.lineTo(a - S, l + u),
          i.closePath());
        break;
      case "crossRot":
        A += ha;
      case "cross":
        ((b = Math.cos(A) * (o ? o / 2 : E)),
          (u = Math.cos(A) * E),
          (h = Math.sin(A) * E),
          (S = Math.sin(A) * (o ? o / 2 : E)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + S, l - u),
          i.lineTo(a - S, l + u));
        break;
      case "star":
        ((b = Math.cos(A) * (o ? o / 2 : E)),
          (u = Math.cos(A) * E),
          (h = Math.sin(A) * E),
          (S = Math.sin(A) * (o ? o / 2 : E)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + S, l - u),
          i.lineTo(a - S, l + u),
          (A += ha),
          (b = Math.cos(A) * (o ? o / 2 : E)),
          (u = Math.cos(A) * E),
          (h = Math.sin(A) * E),
          (S = Math.sin(A) * (o ? o / 2 : E)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + S, l - u),
          i.lineTo(a - S, l + u));
        break;
      case "line":
        ((u = o ? o / 2 : Math.cos(A) * E),
          (h = Math.sin(A) * E),
          i.moveTo(a - u, l - h),
          i.lineTo(a + u, l + h));
        break;
      case "dash":
        (i.moveTo(a, l),
          i.lineTo(a + Math.cos(A) * (o ? o / 2 : E), l + Math.sin(A) * E));
        break;
      case !1:
        i.closePath();
        break;
    }
    (i.fill(), e.borderWidth > 0 && i.stroke());
  }
}
function ql(i, e, a) {
  return (
    (a = a || 0.5),
    !e ||
      (i &&
        i.x > e.left - a &&
        i.x < e.right + a &&
        i.y > e.top - a &&
        i.y < e.bottom + a)
  );
}
function th(i, e) {
  (i.save(),
    i.beginPath(),
    i.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    i.clip());
}
function eh(i) {
  i.restore();
}
function Vw(i, e, a, l, o) {
  if (!e) return i.lineTo(a.x, a.y);
  if (o === "middle") {
    const c = (e.x + a.x) / 2;
    (i.lineTo(c, e.y), i.lineTo(c, a.y));
  } else (o === "after") != !!l ? i.lineTo(e.x, a.y) : i.lineTo(a.x, e.y);
  i.lineTo(a.x, a.y);
}
function Gw(i, e, a, l) {
  if (!e) return i.lineTo(a.x, a.y);
  i.bezierCurveTo(
    l ? e.cp1x : e.cp2x,
    l ? e.cp1y : e.cp2y,
    l ? a.cp2x : a.cp1x,
    l ? a.cp2y : a.cp1y,
    a.x,
    a.y,
  );
}
function Xw(i, e) {
  (e.translation && i.translate(e.translation[0], e.translation[1]),
    Pt(e.rotation) || i.rotate(e.rotation),
    e.color && (i.fillStyle = e.color),
    e.textAlign && (i.textAlign = e.textAlign),
    e.textBaseline && (i.textBaseline = e.textBaseline));
}
function Qw(i, e, a, l, o) {
  if (o.strikethrough || o.underline) {
    const c = i.measureText(l),
      u = e - c.actualBoundingBoxLeft,
      h = e + c.actualBoundingBoxRight,
      p = a - c.actualBoundingBoxAscent,
      d = a + c.actualBoundingBoxDescent,
      m = o.strikethrough ? (p + d) / 2 : d;
    ((i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = o.decorationWidth || 2),
      i.moveTo(u, m),
      i.lineTo(h, m),
      i.stroke());
  }
}
function Zw(i, e) {
  const a = i.fillStyle;
  ((i.fillStyle = e.color),
    i.fillRect(e.left, e.top, e.width, e.height),
    (i.fillStyle = a));
}
function Hr(i, e, a, l, o, c = {}) {
  const u = Ee(e) ? e : [e],
    h = c.strokeWidth > 0 && c.strokeColor !== "";
  let p, d;
  for (i.save(), i.font = o.string, Xw(i, c), p = 0; p < u.length; ++p)
    ((d = u[p]),
      c.backdrop && Zw(i, c.backdrop),
      h &&
        (c.strokeColor && (i.strokeStyle = c.strokeColor),
        Pt(c.strokeWidth) || (i.lineWidth = c.strokeWidth),
        i.strokeText(d, a, l, c.maxWidth)),
      i.fillText(d, a, l, c.maxWidth),
      Qw(i, a, l, d, c),
      (l += Number(o.lineHeight)));
  i.restore();
}
function qf(i, e) {
  const { x: a, y: l, w: o, h: c, radius: u } = e;
  (i.arc(a + u.topLeft, l + u.topLeft, u.topLeft, 1.5 * Oe, Oe, !0),
    i.lineTo(a, l + c - u.bottomLeft),
    i.arc(a + u.bottomLeft, l + c - u.bottomLeft, u.bottomLeft, Oe, En, !0),
    i.lineTo(a + o - u.bottomRight, l + c),
    i.arc(
      a + o - u.bottomRight,
      l + c - u.bottomRight,
      u.bottomRight,
      En,
      0,
      !0,
    ),
    i.lineTo(a + o, l + u.topRight),
    i.arc(a + o - u.topRight, l + u.topRight, u.topRight, 0, -En, !0),
    i.lineTo(a + u.topLeft, l));
}
const Kw = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Pw = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Iw(i, e) {
  const a = ("" + i).match(Kw);
  if (!a || a[1] === "normal") return e * 1.2;
  switch (((i = +a[2]), a[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return e * i;
}
const Ww = (i) => +i || 0;
function wb(i, e) {
  const a = {},
    l = Lt(e),
    o = l ? Object.keys(e) : e,
    c = Lt(i) ? (l ? (u) => Tt(i[u], i[e[u]]) : (u) => i[u]) : () => i;
  for (const u of o) a[u] = Ww(c(u));
  return a;
}
function $w(i) {
  return wb(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function jl(i) {
  return wb(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function An(i) {
  const e = $w(i);
  return ((e.width = e.left + e.right), (e.height = e.top + e.bottom), e);
}
function Ge(i, e) {
  ((i = i || {}), (e = e || ce.font));
  let a = Tt(i.size, e.size);
  typeof a == "string" && (a = parseInt(a, 10));
  let l = Tt(i.style, e.style);
  l &&
    !("" + l).match(Pw) &&
    (console.warn('Invalid font style specified: "' + l + '"'), (l = void 0));
  const o = {
    family: Tt(i.family, e.family),
    lineHeight: Iw(Tt(i.lineHeight, e.lineHeight), a),
    size: a,
    style: l,
    weight: Tt(i.weight, e.weight),
    string: "",
  };
  return ((o.string = Yw(o)), o);
}
function yr(i, e, a, l) {
  let o, c, u;
  for (o = 0, c = i.length; o < c; ++o)
    if (((u = i[o]), u !== void 0 && u !== void 0)) return u;
}
function Jw(i, e, a) {
  const { min: l, max: o } = i,
    c = cw(e, (o - l) / 2),
    u = (h, p) => (a && h === 0 ? 0 : h + p);
  return { min: u(l, -Math.abs(c)), max: u(o, c) };
}
function Ca(i, e) {
  return Object.assign(Object.create(i), e);
}
function nh(i, e = [""], a, l, o = () => i[0]) {
  const c = a || i;
  typeof l > "u" && (l = Mb("_fallback", i));
  const u = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: c,
    _fallback: l,
    _getTarget: o,
    override: (h) => nh([h, ...i], e, c, l),
  };
  return new Proxy(u, {
    deleteProperty(h, p) {
      return (delete h[p], delete h._keys, delete i[0][p], !0);
    },
    get(h, p) {
      return xb(h, p, () => o_(p, e, i, h));
    },
    getOwnPropertyDescriptor(h, p) {
      return Reflect.getOwnPropertyDescriptor(h._scopes[0], p);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(h, p) {
      return Jm(h).includes(p);
    },
    ownKeys(h) {
      return Jm(h);
    },
    set(h, p, d) {
      const m = h._storage || (h._storage = o());
      return ((h[p] = m[p] = d), delete h._keys, !0);
    },
  });
}
function ms(i, e, a, l) {
  const o = {
    _cacheable: !1,
    _proxy: i,
    _context: e,
    _subProxy: a,
    _stack: new Set(),
    _descriptors: _b(i, l),
    setContext: (c) => ms(i, c, a, l),
    override: (c) => ms(i.override(c), e, a, l),
  };
  return new Proxy(o, {
    deleteProperty(c, u) {
      return (delete c[u], delete i[u], !0);
    },
    get(c, u, h) {
      return xb(c, u, () => e_(c, u, h));
    },
    getOwnPropertyDescriptor(c, u) {
      return c._descriptors.allKeys
        ? Reflect.has(i, u)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, u);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(c, u) {
      return Reflect.has(i, u);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(c, u, h) {
      return ((i[u] = h), delete c[u], !0);
    },
  });
}
function _b(i, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: a = e.scriptable,
    _indexable: l = e.indexable,
    _allKeys: o = e.allKeys,
  } = i;
  return {
    allKeys: o,
    scriptable: a,
    indexable: l,
    isScriptable: Xi(a) ? a : () => a,
    isIndexable: Xi(l) ? l : () => l,
  };
}
const t_ = (i, e) => (i ? i + Wf(e) : e),
  ih = (i, e) =>
    Lt(e) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function xb(i, e, a) {
  if (Object.prototype.hasOwnProperty.call(i, e) || e === "constructor")
    return i[e];
  const l = a();
  return ((i[e] = l), l);
}
function e_(i, e, a) {
  const { _proxy: l, _context: o, _subProxy: c, _descriptors: u } = i;
  let h = l[e];
  return (
    Xi(h) && u.isScriptable(e) && (h = n_(e, h, i, a)),
    Ee(h) && h.length && (h = i_(e, h, i, u.isIndexable)),
    ih(e, h) && (h = ms(h, o, c && c[e], u)),
    h
  );
}
function n_(i, e, a, l) {
  const { _proxy: o, _context: c, _subProxy: u, _stack: h } = a;
  if (h.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(h).join("->") + "->" + i,
    );
  h.add(i);
  let p = e(c, u || l);
  return (h.delete(i), ih(i, p) && (p = ah(o._scopes, o, i, p)), p);
}
function i_(i, e, a, l) {
  const { _proxy: o, _context: c, _subProxy: u, _descriptors: h } = a;
  if (typeof c.index < "u" && l(i)) return e[c.index % e.length];
  if (Lt(e[0])) {
    const p = e,
      d = o._scopes.filter((m) => m !== p);
    e = [];
    for (const m of p) {
      const b = ah(d, o, i, m);
      e.push(ms(b, c, u && u[i], h));
    }
  }
  return e;
}
function Sb(i, e, a) {
  return Xi(i) ? i(e, a) : i;
}
const a_ = (i, e) => (i === !0 ? e : typeof i == "string" ? Br(e, i) : void 0);
function s_(i, e, a, l, o) {
  for (const c of e) {
    const u = a_(a, c);
    if (u) {
      i.add(u);
      const h = Sb(u._fallback, a, o);
      if (typeof h < "u" && h !== a && h !== l) return h;
    } else if (u === !1 && typeof l < "u" && a !== l) return null;
  }
  return !1;
}
function ah(i, e, a, l) {
  const o = e._rootScopes,
    c = Sb(e._fallback, a, l),
    u = [...i, ...o],
    h = new Set();
  h.add(l);
  let p = $m(h, u, a, c || a, l);
  return p === null ||
    (typeof c < "u" && c !== a && ((p = $m(h, u, c, p, l)), p === null))
    ? !1
    : nh(Array.from(h), [""], o, c, () => l_(e, a, l));
}
function $m(i, e, a, l, o) {
  for (; a; ) a = s_(i, e, a, l, o);
  return a;
}
function l_(i, e, a) {
  const l = i._getTarget();
  e in l || (l[e] = {});
  const o = l[e];
  return Ee(o) && Lt(a) ? a : o || {};
}
function o_(i, e, a, l) {
  let o;
  for (const c of e)
    if (((o = Mb(t_(c, i), a)), typeof o < "u"))
      return ih(i, o) ? ah(a, l, i, o) : o;
}
function Mb(i, e) {
  for (const a of e) {
    if (!a) continue;
    const l = a[i];
    if (typeof l < "u") return l;
  }
}
function Jm(i) {
  let e = i._keys;
  return (e || (e = i._keys = r_(i._scopes)), e);
}
function r_(i) {
  const e = new Set();
  for (const a of i)
    for (const l of Object.keys(a).filter((o) => !o.startsWith("_"))) e.add(l);
  return Array.from(e);
}
const c_ = Number.EPSILON || 1e-14,
  bs = (i, e) => e < i.length && !i[e].skip && i[e],
  Cb = (i) => (i === "x" ? "y" : "x");
function u_(i, e, a, l) {
  const o = i.skip ? e : i,
    c = e,
    u = a.skip ? e : a,
    h = Hf(c, o),
    p = Hf(u, c);
  let d = h / (h + p),
    m = p / (h + p);
  ((d = isNaN(d) ? 0 : d), (m = isNaN(m) ? 0 : m));
  const b = l * d,
    S = l * m;
  return {
    previous: { x: c.x - b * (u.x - o.x), y: c.y - b * (u.y - o.y) },
    next: { x: c.x + S * (u.x - o.x), y: c.y + S * (u.y - o.y) },
  };
}
function f_(i, e, a) {
  const l = i.length;
  let o,
    c,
    u,
    h,
    p,
    d = bs(i, 0);
  for (let m = 0; m < l - 1; ++m)
    if (((p = d), (d = bs(i, m + 1)), !(!p || !d))) {
      if (Rl(e[m], 0, c_)) {
        a[m] = a[m + 1] = 0;
        continue;
      }
      ((o = a[m] / e[m]),
        (c = a[m + 1] / e[m]),
        (h = Math.pow(o, 2) + Math.pow(c, 2)),
        !(h <= 9) &&
          ((u = 3 / Math.sqrt(h)),
          (a[m] = o * u * e[m]),
          (a[m + 1] = c * u * e[m])));
    }
}
function h_(i, e, a = "x") {
  const l = Cb(a),
    o = i.length;
  let c,
    u,
    h,
    p = bs(i, 0);
  for (let d = 0; d < o; ++d) {
    if (((u = h), (h = p), (p = bs(i, d + 1)), !h)) continue;
    const m = h[a],
      b = h[l];
    (u &&
      ((c = (m - u[a]) / 3),
      (h[`cp1${a}`] = m - c),
      (h[`cp1${l}`] = b - c * e[d])),
      p &&
        ((c = (p[a] - m) / 3),
        (h[`cp2${a}`] = m + c),
        (h[`cp2${l}`] = b + c * e[d])));
  }
}
function d_(i, e = "x") {
  const a = Cb(e),
    l = i.length,
    o = Array(l).fill(0),
    c = Array(l);
  let u,
    h,
    p,
    d = bs(i, 0);
  for (u = 0; u < l; ++u)
    if (((h = p), (p = d), (d = bs(i, u + 1)), !!p)) {
      if (d) {
        const m = d[e] - p[e];
        o[u] = m !== 0 ? (d[a] - p[a]) / m : 0;
      }
      c[u] = h
        ? d
          ? ps(o[u - 1]) !== ps(o[u])
            ? 0
            : (o[u - 1] + o[u]) / 2
          : o[u - 1]
        : o[u];
    }
  (f_(i, o, c), h_(i, c, e));
}
function vr(i, e, a) {
  return Math.max(Math.min(i, a), e);
}
function g_(i, e) {
  let a,
    l,
    o,
    c,
    u,
    h = ql(i[0], e);
  for (a = 0, l = i.length; a < l; ++a)
    ((u = c),
      (c = h),
      (h = a < l - 1 && ql(i[a + 1], e)),
      c &&
        ((o = i[a]),
        u &&
          ((o.cp1x = vr(o.cp1x, e.left, e.right)),
          (o.cp1y = vr(o.cp1y, e.top, e.bottom))),
        h &&
          ((o.cp2x = vr(o.cp2x, e.left, e.right)),
          (o.cp2y = vr(o.cp2y, e.top, e.bottom)))));
}
function p_(i, e, a, l, o) {
  let c, u, h, p;
  if (
    (e.spanGaps && (i = i.filter((d) => !d.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    d_(i, o);
  else {
    let d = l ? i[i.length - 1] : i[0];
    for (c = 0, u = i.length; c < u; ++c)
      ((h = i[c]),
        (p = u_(d, h, i[Math.min(c + 1, u - (l ? 0 : 1)) % u], e.tension)),
        (h.cp1x = p.previous.x),
        (h.cp1y = p.previous.y),
        (h.cp2x = p.next.x),
        (h.cp2y = p.next.y),
        (d = h));
  }
  e.capBezierPoints && g_(i, a);
}
function sh() {
  return typeof window < "u" && typeof document < "u";
}
function lh(i) {
  let e = i.parentNode;
  return (e && e.toString() === "[object ShadowRoot]" && (e = e.host), e);
}
function Nr(i, e, a) {
  let l;
  return (
    typeof i == "string"
      ? ((l = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (l = (l / 100) * e.parentNode[a]))
      : (l = i),
    l
  );
}
const Pr = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function m_(i, e) {
  return Pr(i).getPropertyValue(e);
}
const b_ = ["top", "right", "bottom", "left"];
function _a(i, e, a) {
  const l = {};
  a = a ? "-" + a : "";
  for (let o = 0; o < 4; o++) {
    const c = b_[o];
    l[c] = parseFloat(i[e + "-" + c + a]) || 0;
  }
  return ((l.width = l.left + l.right), (l.height = l.top + l.bottom), l);
}
const y_ = (i, e, a) => (i > 0 || e > 0) && (!a || !a.shadowRoot);
function v_(i, e) {
  const a = i.touches,
    l = a && a.length ? a[0] : i,
    { offsetX: o, offsetY: c } = l;
  let u = !1,
    h,
    p;
  if (y_(o, c, i.target)) ((h = o), (p = c));
  else {
    const d = e.getBoundingClientRect();
    ((h = l.clientX - d.left), (p = l.clientY - d.top), (u = !0));
  }
  return { x: h, y: p, box: u };
}
function ma(i, e) {
  if ("native" in i) return i;
  const { canvas: a, currentDevicePixelRatio: l } = e,
    o = Pr(a),
    c = o.boxSizing === "border-box",
    u = _a(o, "padding"),
    h = _a(o, "border", "width"),
    { x: p, y: d, box: m } = v_(i, a),
    b = u.left + (m && h.left),
    S = u.top + (m && h.top);
  let { width: _, height: w } = e;
  return (
    c && ((_ -= u.width + h.width), (w -= u.height + h.height)),
    {
      x: Math.round((((p - b) / _) * a.width) / l),
      y: Math.round((((d - S) / w) * a.height) / l),
    }
  );
}
function w_(i, e, a) {
  let l, o;
  if (e === void 0 || a === void 0) {
    const c = i && lh(i);
    if (!c) ((e = i.clientWidth), (a = i.clientHeight));
    else {
      const u = c.getBoundingClientRect(),
        h = Pr(c),
        p = _a(h, "border", "width"),
        d = _a(h, "padding");
      ((e = u.width - d.width - p.width),
        (a = u.height - d.height - p.height),
        (l = Nr(h.maxWidth, c, "clientWidth")),
        (o = Nr(h.maxHeight, c, "clientHeight")));
    }
  }
  return { width: e, height: a, maxWidth: l || jr, maxHeight: o || jr };
}
const Ui = (i) => Math.round(i * 10) / 10;
function __(i, e, a, l) {
  const o = Pr(i),
    c = _a(o, "margin"),
    u = Nr(o.maxWidth, i, "clientWidth") || jr,
    h = Nr(o.maxHeight, i, "clientHeight") || jr,
    p = w_(i, e, a);
  let { width: d, height: m } = p;
  if (o.boxSizing === "content-box") {
    const S = _a(o, "border", "width"),
      _ = _a(o, "padding");
    ((d -= _.width + S.width), (m -= _.height + S.height));
  }
  return (
    (d = Math.max(0, d - c.width)),
    (m = Math.max(0, l ? d / l : m - c.height)),
    (d = Ui(Math.min(d, u, p.maxWidth))),
    (m = Ui(Math.min(m, h, p.maxHeight))),
    d && !m && (m = Ui(d / 2)),
    (e !== void 0 || a !== void 0) &&
      l &&
      p.height &&
      m > p.height &&
      ((m = p.height), (d = Ui(Math.floor(m * l)))),
    { width: d, height: m }
  );
}
function t0(i, e, a) {
  const l = e || 1,
    o = Ui(i.height * l),
    c = Ui(i.width * l);
  ((i.height = Ui(i.height)), (i.width = Ui(i.width)));
  const u = i.canvas;
  return (
    u.style &&
      (a || (!u.style.height && !u.style.width)) &&
      ((u.style.height = `${i.height}px`), (u.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== l || u.height !== o || u.width !== c
      ? ((i.currentDevicePixelRatio = l),
        (u.height = o),
        (u.width = c),
        i.ctx.setTransform(l, 0, 0, l, 0, 0),
        !0)
      : !1
  );
}
const x_ = (function () {
  let i = !1;
  try {
    const e = {
      get passive() {
        return ((i = !0), !1);
      },
    };
    sh() &&
      (window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e));
  } catch {}
  return i;
})();
function e0(i, e) {
  const a = m_(i, e),
    l = a && a.match(/^(\d+)(\.\d+)?px$/);
  return l ? +l[1] : void 0;
}
function ba(i, e, a, l) {
  return { x: i.x + a * (e.x - i.x), y: i.y + a * (e.y - i.y) };
}
function S_(i, e, a, l) {
  return {
    x: i.x + a * (e.x - i.x),
    y:
      l === "middle"
        ? a < 0.5
          ? i.y
          : e.y
        : l === "after"
          ? a < 1
            ? i.y
            : e.y
          : a > 0
            ? e.y
            : i.y,
  };
}
function M_(i, e, a, l) {
  const o = { x: i.cp2x, y: i.cp2y },
    c = { x: e.cp1x, y: e.cp1y },
    u = ba(i, o, a),
    h = ba(o, c, a),
    p = ba(c, e, a),
    d = ba(u, h, a),
    m = ba(h, p, a);
  return ba(d, m, a);
}
const C_ = function (i, e) {
    return {
      x(a) {
        return i + i + e - a;
      },
      setWidth(a) {
        e = a;
      },
      textAlign(a) {
        return a === "center" ? a : a === "right" ? "left" : "right";
      },
      xPlus(a, l) {
        return a - l;
      },
      leftForLtr(a, l) {
        return a - l;
      },
    };
  },
  E_ = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, e) {
        return i + e;
      },
      leftForLtr(i, e) {
        return i;
      },
    };
  };
function ds(i, e, a) {
  return i ? C_(e, a) : E_();
}
function Eb(i, e) {
  let a, l;
  (e === "ltr" || e === "rtl") &&
    ((a = i.canvas.style),
    (l = [a.getPropertyValue("direction"), a.getPropertyPriority("direction")]),
    a.setProperty("direction", e, "important"),
    (i.prevTextDirection = l));
}
function Ab(i, e) {
  e !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", e[0], e[1]));
}
function Tb(i) {
  return i === "angle"
    ? { between: hb, compare: Sw, normalize: Hi }
    : { between: Ol, compare: (e, a) => e - a, normalize: (e) => e };
}
function n0({ start: i, end: e, count: a, loop: l, style: o }) {
  return {
    start: i % a,
    end: e % a,
    loop: l && (e - i + 1) % a === 0,
    style: o,
  };
}
function A_(i, e, a) {
  const { property: l, start: o, end: c } = a,
    { between: u, normalize: h } = Tb(l),
    p = e.length;
  let { start: d, end: m, loop: b } = i,
    S,
    _;
  if (b) {
    for (d += p, m += p, S = 0, _ = p; S < _ && u(h(e[d % p][l]), o, c); ++S)
      (d--, m--);
    ((d %= p), (m %= p));
  }
  return (m < d && (m += p), { start: d, end: m, loop: b, style: i.style });
}
function T_(i, e, a) {
  if (!a) return [i];
  const { property: l, start: o, end: c } = a,
    u = e.length,
    { compare: h, between: p, normalize: d } = Tb(l),
    { start: m, end: b, loop: S, style: _ } = A_(i, e, a),
    w = [];
  let E = !1,
    A = null,
    C,
    I,
    tt;
  const Z = () => p(o, tt, C) && h(o, tt) !== 0,
    F = () => h(c, C) === 0 || p(c, tt, C),
    $ = () => E || Z(),
    T = () => !E || F();
  for (let x = m, v = m; x <= b; ++x)
    ((I = e[x % u]),
      !I.skip &&
        ((C = d(I[l])),
        C !== tt &&
          ((E = p(C, o, c)),
          A === null && $() && (A = h(C, o) === 0 ? x : v),
          A !== null &&
            T() &&
            (w.push(n0({ start: A, end: x, loop: S, count: u, style: _ })),
            (A = null)),
          (v = x),
          (tt = C))));
  return (
    A !== null && w.push(n0({ start: A, end: b, loop: S, count: u, style: _ })),
    w
  );
}
function O_(i, e) {
  const a = [],
    l = i.segments;
  for (let o = 0; o < l.length; o++) {
    const c = T_(l[o], i.points, e);
    c.length && a.push(...c);
  }
  return a;
}
function D_(i, e, a, l) {
  let o = 0,
    c = e - 1;
  if (a && !l) for (; o < e && !i[o].skip; ) o++;
  for (; o < e && i[o].skip; ) o++;
  for (o %= e, a && (c += o); c > o && i[c % e].skip; ) c--;
  return ((c %= e), { start: o, end: c });
}
function z_(i, e, a, l) {
  const o = i.length,
    c = [];
  let u = e,
    h = i[e],
    p;
  for (p = e + 1; p <= a; ++p) {
    const d = i[p % o];
    (d.skip || d.stop
      ? h.skip ||
        ((l = !1),
        c.push({ start: e % o, end: (p - 1) % o, loop: l }),
        (e = u = d.stop ? p : null))
      : ((u = p), h.skip && (e = p)),
      (h = d));
  }
  return (u !== null && c.push({ start: e % o, end: u % o, loop: l }), c);
}
function k_(i, e) {
  const a = i.points,
    l = i.options.spanGaps,
    o = a.length;
  if (!o) return [];
  const c = !!i._loop,
    { start: u, end: h } = D_(a, o, c, l);
  if (l === !0) return i0(i, [{ start: u, end: h, loop: c }], a, e);
  const p = h < u ? h + o : h,
    d = !!i._fullLoop && u === 0 && h === o - 1;
  return i0(i, z_(a, u, p, d), a, e);
}
function i0(i, e, a, l) {
  return !l || !l.setContext || !a ? e : R_(i, e, a, l);
}
function R_(i, e, a, l) {
  const o = i._chart.getContext(),
    c = a0(i.options),
    {
      _datasetIndex: u,
      options: { spanGaps: h },
    } = i,
    p = a.length,
    d = [];
  let m = c,
    b = e[0].start,
    S = b;
  function _(w, E, A, C) {
    const I = h ? -1 : 1;
    if (w !== E) {
      for (w += p; a[w % p].skip; ) w -= I;
      for (; a[E % p].skip; ) E += I;
      w % p !== E % p &&
        (d.push({ start: w % p, end: E % p, loop: A, style: C }),
        (m = C),
        (b = E % p));
    }
  }
  for (const w of e) {
    b = h ? b : w.start;
    let E = a[b % p],
      A;
    for (S = b + 1; S <= w.end; S++) {
      const C = a[S % p];
      ((A = a0(
        l.setContext(
          Ca(o, {
            type: "segment",
            p0: E,
            p1: C,
            p0DataIndex: (S - 1) % p,
            p1DataIndex: S % p,
            datasetIndex: u,
          }),
        ),
      )),
        B_(A, m) && _(b, S - 1, w.loop, m),
        (E = C),
        (m = A));
    }
    b < S - 1 && _(b, S - 1, w.loop, m);
  }
  return d;
}
function a0(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function B_(i, e) {
  if (!e) return !1;
  const a = [],
    l = function (o, c) {
      return Jf(c) ? (a.includes(c) || a.push(c), a.indexOf(c)) : c;
    };
  return JSON.stringify(i, l) !== JSON.stringify(e, l);
}
function wr(i, e, a) {
  return i.options.clip ? i[a] : e[a];
}
function L_(i, e) {
  const { xScale: a, yScale: l } = i;
  return a && l
    ? {
        left: wr(a, e, "left"),
        right: wr(a, e, "right"),
        top: wr(l, e, "top"),
        bottom: wr(l, e, "bottom"),
      }
    : e;
}
function j_(i, e) {
  const a = e._clip;
  if (a.disabled) return !1;
  const l = L_(e, i.chartArea);
  return {
    left: a.left === !1 ? 0 : l.left - (a.left === !0 ? 0 : a.left),
    right: a.right === !1 ? i.width : l.right + (a.right === !0 ? 0 : a.right),
    top: a.top === !1 ? 0 : l.top - (a.top === !0 ? 0 : a.top),
    bottom:
      a.bottom === !1 ? i.height : l.bottom + (a.bottom === !0 ? 0 : a.bottom),
  };
}
class H_ {
  constructor() {
    ((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0));
  }
  _notify(e, a, l, o) {
    const c = a.listeners[o],
      u = a.duration;
    c.forEach((h) =>
      h({
        chart: e,
        initial: a.initial,
        numSteps: u,
        currentStep: Math.min(l - a.start, u),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = gb.call(window, () => {
        (this._update(),
          (this._request = null),
          this._running && this._refresh());
      })));
  }
  _update(e = Date.now()) {
    let a = 0;
    (this._charts.forEach((l, o) => {
      if (!l.running || !l.items.length) return;
      const c = l.items;
      let u = c.length - 1,
        h = !1,
        p;
      for (; u >= 0; --u)
        ((p = c[u]),
          p._active
            ? (p._total > l.duration && (l.duration = p._total),
              p.tick(e),
              (h = !0))
            : ((c[u] = c[c.length - 1]), c.pop()));
      (h && (o.draw(), this._notify(o, l, e, "progress")),
        c.length ||
          ((l.running = !1),
          this._notify(o, l, e, "complete"),
          (l.initial = !1)),
        (a += c.length));
    }),
      (this._lastDate = e),
      a === 0 && (this._running = !1));
  }
  _getAnims(e) {
    const a = this._charts;
    let l = a.get(e);
    return (
      l ||
        ((l = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        a.set(e, l)),
      l
    );
  }
  listen(e, a, l) {
    this._getAnims(e).listeners[a].push(l);
  }
  add(e, a) {
    !a || !a.length || this._getAnims(e).items.push(...a);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const a = this._charts.get(e);
    a &&
      ((a.running = !0),
      (a.start = Date.now()),
      (a.duration = a.items.reduce((l, o) => Math.max(l, o._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const a = this._charts.get(e);
    return !(!a || !a.running || !a.items.length);
  }
  stop(e) {
    const a = this._charts.get(e);
    if (!a || !a.items.length) return;
    const l = a.items;
    let o = l.length - 1;
    for (; o >= 0; --o) l[o].cancel();
    ((a.items = []), this._notify(e, a, Date.now(), "complete"));
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var li = new H_();
const s0 = "transparent",
  N_ = {
    boolean(i, e, a) {
      return a > 0.5 ? e : i;
    },
    color(i, e, a) {
      const l = Km(i || s0),
        o = l.valid && Km(e || s0);
      return o && o.valid ? o.mix(l, a).hexString() : e;
    },
    number(i, e, a) {
      return i + (e - i) * a;
    },
  };
class U_ {
  constructor(e, a, l, o) {
    const c = a[l];
    o = yr([e.to, o, c, e.from]);
    const u = yr([e.from, c, o]);
    ((this._active = !0),
      (this._fn = e.fn || N_[e.type || typeof u]),
      (this._easing = Bl[e.easing] || Bl.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = a),
      (this._prop = l),
      (this._from = u),
      (this._to = o),
      (this._promises = void 0));
  }
  active() {
    return this._active;
  }
  update(e, a, l) {
    if (this._active) {
      this._notify(!1);
      const o = this._target[this._prop],
        c = l - this._start,
        u = this._duration - c;
      ((this._start = l),
        (this._duration = Math.floor(Math.max(u, e.duration))),
        (this._total += c),
        (this._loop = !!e.loop),
        (this._to = yr([e.to, a, o, e.from])),
        (this._from = yr([e.from, o, a])));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const a = e - this._start,
      l = this._duration,
      o = this._prop,
      c = this._from,
      u = this._loop,
      h = this._to;
    let p;
    if (((this._active = c !== h && (u || a < l)), !this._active)) {
      ((this._target[o] = h), this._notify(!0));
      return;
    }
    if (a < 0) {
      this._target[o] = c;
      return;
    }
    ((p = (a / l) % 2),
      (p = u && p > 1 ? 2 - p : p),
      (p = this._easing(Math.min(1, Math.max(0, p)))),
      (this._target[o] = this._fn(c, h, p)));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((a, l) => {
      e.push({ res: a, rej: l });
    });
  }
  _notify(e) {
    const a = e ? "res" : "rej",
      l = this._promises || [];
    for (let o = 0; o < l.length; o++) l[o][a]();
  }
}
class Ob {
  constructor(e, a) {
    ((this._chart = e), (this._properties = new Map()), this.configure(a));
  }
  configure(e) {
    if (!Lt(e)) return;
    const a = Object.keys(ce.animation),
      l = this._properties;
    Object.getOwnPropertyNames(e).forEach((o) => {
      const c = e[o];
      if (!Lt(c)) return;
      const u = {};
      for (const h of a) u[h] = c[h];
      ((Ee(c.properties) && c.properties) || [o]).forEach((h) => {
        (h === o || !l.has(h)) && l.set(h, u);
      });
    });
  }
  _animateOptions(e, a) {
    const l = a.options,
      o = F_(e, l);
    if (!o) return [];
    const c = this._createAnimations(o, l);
    return (
      l.$shared &&
        q_(e.options.$animations, l).then(
          () => {
            e.options = l;
          },
          () => {},
        ),
      c
    );
  }
  _createAnimations(e, a) {
    const l = this._properties,
      o = [],
      c = e.$animations || (e.$animations = {}),
      u = Object.keys(a),
      h = Date.now();
    let p;
    for (p = u.length - 1; p >= 0; --p) {
      const d = u[p];
      if (d.charAt(0) === "$") continue;
      if (d === "options") {
        o.push(...this._animateOptions(e, a));
        continue;
      }
      const m = a[d];
      let b = c[d];
      const S = l.get(d);
      if (b)
        if (S && b.active()) {
          b.update(S, m, h);
          continue;
        } else b.cancel();
      if (!S || !S.duration) {
        e[d] = m;
        continue;
      }
      ((c[d] = b = new U_(S, e, d, m)), o.push(b));
    }
    return o;
  }
  update(e, a) {
    if (this._properties.size === 0) {
      Object.assign(e, a);
      return;
    }
    const l = this._createAnimations(e, a);
    if (l.length) return (li.add(this._chart, l), !0);
  }
}
function q_(i, e) {
  const a = [],
    l = Object.keys(e);
  for (let o = 0; o < l.length; o++) {
    const c = i[l[o]];
    c && c.active() && a.push(c.wait());
  }
  return Promise.all(a);
}
function F_(i, e) {
  if (!e) return;
  let a = i.options;
  if (!a) {
    i.options = e;
    return;
  }
  return (
    a.$shared &&
      (i.options = a = Object.assign({}, a, { $shared: !1, $animations: {} })),
    a
  );
}
function l0(i, e) {
  const a = (i && i.options) || {},
    l = a.reverse,
    o = a.min === void 0 ? e : 0,
    c = a.max === void 0 ? e : 0;
  return { start: l ? c : o, end: l ? o : c };
}
function Y_(i, e, a) {
  if (a === !1) return !1;
  const l = l0(i, a),
    o = l0(e, a);
  return { top: o.end, right: l.end, bottom: o.start, left: l.start };
}
function V_(i) {
  let e, a, l, o;
  return (
    Lt(i)
      ? ((e = i.top), (a = i.right), (l = i.bottom), (o = i.left))
      : (e = a = l = o = i),
    { top: e, right: a, bottom: l, left: o, disabled: i === !1 }
  );
}
function Db(i, e) {
  const a = [],
    l = i._getSortedDatasetMetas(e);
  let o, c;
  for (o = 0, c = l.length; o < c; ++o) a.push(l[o].index);
  return a;
}
function o0(i, e, a, l = {}) {
  const o = i.keys,
    c = l.mode === "single";
  let u, h, p, d;
  if (e === null) return;
  let m = !1;
  for (u = 0, h = o.length; u < h; ++u) {
    if (((p = +o[u]), p === a)) {
      if (((m = !0), l.all)) continue;
      break;
    }
    ((d = i.values[p]), wn(d) && (c || e === 0 || ps(e) === ps(d)) && (e += d));
  }
  return !m && !l.all ? 0 : e;
}
function G_(i, e) {
  const { iScale: a, vScale: l } = e,
    o = a.axis === "x" ? "x" : "y",
    c = l.axis === "x" ? "x" : "y",
    u = Object.keys(i),
    h = new Array(u.length);
  let p, d, m;
  for (p = 0, d = u.length; p < d; ++p)
    ((m = u[p]), (h[p] = { [o]: m, [c]: i[m] }));
  return h;
}
function Ef(i, e) {
  const a = i && i.options.stacked;
  return a || (a === void 0 && e.stack !== void 0);
}
function X_(i, e, a) {
  return `${i.id}.${e.id}.${a.stack || a.type}`;
}
function Q_(i) {
  const { min: e, max: a, minDefined: l, maxDefined: o } = i.getUserBounds();
  return {
    min: l ? e : Number.NEGATIVE_INFINITY,
    max: o ? a : Number.POSITIVE_INFINITY,
  };
}
function Z_(i, e, a) {
  const l = i[e] || (i[e] = {});
  return l[a] || (l[a] = {});
}
function r0(i, e, a, l) {
  for (const o of e.getMatchingVisibleMetas(l).reverse()) {
    const c = i[o.index];
    if ((a && c > 0) || (!a && c < 0)) return o.index;
  }
  return null;
}
function c0(i, e) {
  const { chart: a, _cachedMeta: l } = i,
    o = a._stacks || (a._stacks = {}),
    { iScale: c, vScale: u, index: h } = l,
    p = c.axis,
    d = u.axis,
    m = X_(c, u, l),
    b = e.length;
  let S;
  for (let _ = 0; _ < b; ++_) {
    const w = e[_],
      { [p]: E, [d]: A } = w,
      C = w._stacks || (w._stacks = {});
    ((S = C[d] = Z_(o, m, E)),
      (S[h] = A),
      (S._top = r0(S, u, !0, l.type)),
      (S._bottom = r0(S, u, !1, l.type)));
    const I = S._visualValues || (S._visualValues = {});
    I[h] = A;
  }
}
function Af(i, e) {
  const a = i.scales;
  return Object.keys(a)
    .filter((l) => a[l].axis === e)
    .shift();
}
function K_(i, e) {
  return Ca(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function P_(i, e, a) {
  return Ca(i, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: a,
    index: e,
    mode: "default",
    type: "data",
  });
}
function Sl(i, e) {
  const a = i.controller.index,
    l = i.vScale && i.vScale.axis;
  if (l) {
    e = e || i._parsed;
    for (const o of e) {
      const c = o._stacks;
      if (!c || c[l] === void 0 || c[l][a] === void 0) return;
      (delete c[l][a],
        c[l]._visualValues !== void 0 &&
          c[l]._visualValues[a] !== void 0 &&
          delete c[l]._visualValues[a]);
    }
  }
}
const Tf = (i) => i === "reset" || i === "none",
  u0 = (i, e) => (e ? i : Object.assign({}, i)),
  I_ = (i, e, a) =>
    i && !e.hidden && e._stacked && { keys: Db(a, !0), values: null };
class zb {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(e, a) {
    ((this.chart = e),
      (this._ctx = e.ctx),
      (this.index = a),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize());
  }
  initialize() {
    const e = this._cachedMeta;
    (this.configure(),
      this.linkScales(),
      (e._stacked = Ef(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        ));
  }
  updateIndex(e) {
    (this.index !== e && Sl(this._cachedMeta), (this.index = e));
  }
  linkScales() {
    const e = this.chart,
      a = this._cachedMeta,
      l = this.getDataset(),
      o = (b, S, _, w) => (b === "x" ? S : b === "r" ? w : _),
      c = (a.xAxisID = Tt(l.xAxisID, Af(e, "x"))),
      u = (a.yAxisID = Tt(l.yAxisID, Af(e, "y"))),
      h = (a.rAxisID = Tt(l.rAxisID, Af(e, "r"))),
      p = a.indexAxis,
      d = (a.iAxisID = o(p, c, u, h)),
      m = (a.vAxisID = o(p, u, c, h));
    ((a.xScale = this.getScaleForId(c)),
      (a.yScale = this.getScaleForId(u)),
      (a.rScale = this.getScaleForId(h)),
      (a.iScale = this.getScaleForId(d)),
      (a.vScale = this.getScaleForId(m)));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const a = this._cachedMeta;
    return e === a.iScale ? a.vScale : a.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    (this._data && Xm(this._data, this), e._stacked && Sl(e));
  }
  _dataCheck() {
    const e = this.getDataset(),
      a = e.data || (e.data = []),
      l = this._data;
    if (Lt(a)) {
      const o = this._cachedMeta;
      this._data = G_(a, o);
    } else if (l !== a) {
      if (l) {
        Xm(l, this);
        const o = this._cachedMeta;
        (Sl(o), (o._parsed = []));
      }
      (a && Object.isExtensible(a) && Aw(a, this),
        (this._syncList = []),
        (this._data = a));
    }
  }
  addElements() {
    const e = this._cachedMeta;
    (this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType()));
  }
  buildOrUpdateElements(e) {
    const a = this._cachedMeta,
      l = this.getDataset();
    let o = !1;
    this._dataCheck();
    const c = a._stacked;
    ((a._stacked = Ef(a.vScale, a)),
      a.stack !== l.stack && ((o = !0), Sl(a), (a.stack = l.stack)),
      this._resyncElements(e),
      (o || c !== a._stacked) &&
        (c0(this, a._parsed), (a._stacked = Ef(a.vScale, a))));
  }
  configure() {
    const e = this.chart.config,
      a = e.datasetScopeKeys(this._type),
      l = e.getOptionScopes(this.getDataset(), a, !0);
    ((this.options = e.createResolver(l, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}));
  }
  parse(e, a) {
    const { _cachedMeta: l, _data: o } = this,
      { iScale: c, _stacked: u } = l,
      h = c.axis;
    let p = e === 0 && a === o.length ? !0 : l._sorted,
      d = e > 0 && l._parsed[e - 1],
      m,
      b,
      S;
    if (this._parsing === !1) ((l._parsed = o), (l._sorted = !0), (S = o));
    else {
      Ee(o[e])
        ? (S = this.parseArrayData(l, o, e, a))
        : Lt(o[e])
          ? (S = this.parseObjectData(l, o, e, a))
          : (S = this.parsePrimitiveData(l, o, e, a));
      const _ = () => b[h] === null || (d && b[h] < d[h]);
      for (m = 0; m < a; ++m)
        ((l._parsed[m + e] = b = S[m]), p && (_() && (p = !1), (d = b)));
      l._sorted = p;
    }
    u && c0(this, S);
  }
  parsePrimitiveData(e, a, l, o) {
    const { iScale: c, vScale: u } = e,
      h = c.axis,
      p = u.axis,
      d = c.getLabels(),
      m = c === u,
      b = new Array(o);
    let S, _, w;
    for (S = 0, _ = o; S < _; ++S)
      ((w = S + l),
        (b[S] = { [h]: m || c.parse(d[w], w), [p]: u.parse(a[w], w) }));
    return b;
  }
  parseArrayData(e, a, l, o) {
    const { xScale: c, yScale: u } = e,
      h = new Array(o);
    let p, d, m, b;
    for (p = 0, d = o; p < d; ++p)
      ((m = p + l),
        (b = a[m]),
        (h[p] = { x: c.parse(b[0], m), y: u.parse(b[1], m) }));
    return h;
  }
  parseObjectData(e, a, l, o) {
    const { xScale: c, yScale: u } = e,
      { xAxisKey: h = "x", yAxisKey: p = "y" } = this._parsing,
      d = new Array(o);
    let m, b, S, _;
    for (m = 0, b = o; m < b; ++m)
      ((S = m + l),
        (_ = a[S]),
        (d[m] = { x: c.parse(Br(_, h), S), y: u.parse(Br(_, p), S) }));
    return d;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, a, l) {
    const o = this.chart,
      c = this._cachedMeta,
      u = a[e.axis],
      h = { keys: Db(o, !0), values: a._stacks[e.axis]._visualValues };
    return o0(h, u, c.index, { mode: l });
  }
  updateRangeFromParsed(e, a, l, o) {
    const c = l[a.axis];
    let u = c === null ? NaN : c;
    const h = o && l._stacks[a.axis];
    (o && h && ((o.values = h), (u = o0(o, c, this._cachedMeta.index))),
      (e.min = Math.min(e.min, u)),
      (e.max = Math.max(e.max, u)));
  }
  getMinMax(e, a) {
    const l = this._cachedMeta,
      o = l._parsed,
      c = l._sorted && e === l.iScale,
      u = o.length,
      h = this._getOtherScale(e),
      p = I_(a, l, this.chart),
      d = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: m, max: b } = Q_(h);
    let S, _;
    function w() {
      _ = o[S];
      const E = _[h.axis];
      return !wn(_[e.axis]) || m > E || b < E;
    }
    for (
      S = 0;
      S < u && !(!w() && (this.updateRangeFromParsed(d, e, _, p), c));
      ++S
    );
    if (c) {
      for (S = u - 1; S >= 0; --S)
        if (!w()) {
          this.updateRangeFromParsed(d, e, _, p);
          break;
        }
    }
    return d;
  }
  getAllParsedValues(e) {
    const a = this._cachedMeta._parsed,
      l = [];
    let o, c, u;
    for (o = 0, c = a.length; o < c; ++o)
      ((u = a[o][e.axis]), wn(u) && l.push(u));
    return l;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const a = this._cachedMeta,
      l = a.iScale,
      o = a.vScale,
      c = this.getParsed(e);
    return {
      label: l ? "" + l.getLabelForValue(c[l.axis]) : "",
      value: o ? "" + o.getLabelForValue(c[o.axis]) : "",
    };
  }
  _update(e) {
    const a = this._cachedMeta;
    (this.update(e || "default"),
      (a._clip = V_(
        Tt(this.options.clip, Y_(a.xScale, a.yScale, this.getMaxOverflow())),
      )));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      a = this.chart,
      l = this._cachedMeta,
      o = l.data || [],
      c = a.chartArea,
      u = [],
      h = this._drawStart || 0,
      p = this._drawCount || o.length - h,
      d = this.options.drawActiveElementsOnTop;
    let m;
    for (l.dataset && l.dataset.draw(e, c, h, p), m = h; m < h + p; ++m) {
      const b = o[m];
      b.hidden || (b.active && d ? u.push(b) : b.draw(e, c));
    }
    for (m = 0; m < u.length; ++m) u[m].draw(e, c);
  }
  getStyle(e, a) {
    const l = a ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(l)
      : this.resolveDataElementOptions(e || 0, l);
  }
  getContext(e, a, l) {
    const o = this.getDataset();
    let c;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const u = this._cachedMeta.data[e];
      ((c = u.$context || (u.$context = P_(this.getContext(), e, u))),
        (c.parsed = this.getParsed(e)),
        (c.raw = o.data[e]),
        (c.index = c.dataIndex = e));
    } else
      ((c =
        this.$context ||
        (this.$context = K_(this.chart.getContext(), this.index))),
        (c.dataset = o),
        (c.index = c.datasetIndex = this.index));
    return ((c.active = !!a), (c.mode = l), c);
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, a) {
    return this._resolveElementOptions(this.dataElementType.id, a, e);
  }
  _resolveElementOptions(e, a = "default", l) {
    const o = a === "active",
      c = this._cachedDataOpts,
      u = e + "-" + a,
      h = c[u],
      p = this.enableOptionSharing && Lr(l);
    if (h) return u0(h, p);
    const d = this.chart.config,
      m = d.datasetElementScopeKeys(this._type, e),
      b = o ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      S = d.getOptionScopes(this.getDataset(), m),
      _ = Object.keys(ce.elements[e]),
      w = () => this.getContext(l, o, a),
      E = d.resolveNamedOptions(S, _, w, b);
    return (
      E.$shared && ((E.$shared = p), (c[u] = Object.freeze(u0(E, p)))),
      E
    );
  }
  _resolveAnimations(e, a, l) {
    const o = this.chart,
      c = this._cachedDataOpts,
      u = `animation-${a}`,
      h = c[u];
    if (h) return h;
    let p;
    if (o.options.animation !== !1) {
      const m = this.chart.config,
        b = m.datasetAnimationScopeKeys(this._type, a),
        S = m.getOptionScopes(this.getDataset(), b);
      p = m.createResolver(S, this.getContext(e, l, a));
    }
    const d = new Ob(o, p && p.animations);
    return (p && p._cacheable && (c[u] = Object.freeze(d)), d);
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, a) {
    return !a || Tf(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, a) {
    const l = this.resolveDataElementOptions(e, a),
      o = this._sharedOptions,
      c = this.getSharedOptions(l),
      u = this.includeOptions(a, c) || c !== o;
    return (
      this.updateSharedOptions(c, a, l),
      { sharedOptions: c, includeOptions: u }
    );
  }
  updateElement(e, a, l, o) {
    Tf(o) ? Object.assign(e, l) : this._resolveAnimations(a, o).update(e, l);
  }
  updateSharedOptions(e, a, l) {
    e && !Tf(a) && this._resolveAnimations(void 0, a).update(e, l);
  }
  _setStyle(e, a, l, o) {
    e.active = o;
    const c = this.getStyle(a, o);
    this._resolveAnimations(a, l, o).update(e, {
      options: (!o && this.getSharedOptions(c)) || c,
    });
  }
  removeHoverStyle(e, a, l) {
    this._setStyle(e, l, "active", !1);
  }
  setHoverStyle(e, a, l) {
    this._setStyle(e, l, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const a = this._data,
      l = this._cachedMeta.data;
    for (const [h, p, d] of this._syncList) this[h](p, d);
    this._syncList = [];
    const o = l.length,
      c = a.length,
      u = Math.min(c, o);
    (u && this.parse(0, u),
      c > o
        ? this._insertElements(o, c - o, e)
        : c < o && this._removeElements(c, o - c));
  }
  _insertElements(e, a, l = !0) {
    const o = this._cachedMeta,
      c = o.data,
      u = e + a;
    let h;
    const p = (d) => {
      for (d.length += a, h = d.length - 1; h >= u; h--) d[h] = d[h - a];
    };
    for (p(c), h = e; h < u; ++h) c[h] = new this.dataElementType();
    (this._parsing && p(o._parsed),
      this.parse(e, a),
      l && this.updateElements(c, e, a, "reset"));
  }
  updateElements(e, a, l, o) {}
  _removeElements(e, a) {
    const l = this._cachedMeta;
    if (this._parsing) {
      const o = l._parsed.splice(e, a);
      l._stacked && Sl(l, o);
    }
    l.data.splice(e, a);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [a, l, o] = e;
      this[a](l, o);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, a) {
    a && this._sync(["_removeElements", e, a]);
    const l = arguments.length - 2;
    l && this._sync(["_insertElements", e, l]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
class W_ extends zb {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  };
  static overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  };
  initialize() {
    ((this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize());
  }
  update(e) {
    const a = this._cachedMeta,
      { dataset: l, data: o = [], _dataset: c } = a,
      u = this.chart._animationsDisabled;
    let { start: h, count: p } = zw(a, o, u);
    ((this._drawStart = h),
      (this._drawCount = p),
      kw(a) && ((h = 0), (p = o.length)),
      (l._chart = this.chart),
      (l._datasetIndex = this.index),
      (l._decimated = !!c._decimated),
      (l.points = o));
    const d = this.resolveDatasetElementOptions(e);
    (this.options.showLine || (d.borderWidth = 0),
      (d.segment = this.options.segment),
      this.updateElement(l, void 0, { animated: !u, options: d }, e),
      this.updateElements(o, h, p, e));
  }
  updateElements(e, a, l, o) {
    const c = o === "reset",
      { iScale: u, vScale: h, _stacked: p, _dataset: d } = this._cachedMeta,
      { sharedOptions: m, includeOptions: b } = this._getSharedOptions(a, o),
      S = u.axis,
      _ = h.axis,
      { spanGaps: w, segment: E } = this.options,
      A = Ul(w) ? w : Number.POSITIVE_INFINITY,
      C = this.chart._animationsDisabled || c || o === "none",
      I = a + l,
      tt = e.length;
    let Z = a > 0 && this.getParsed(a - 1);
    for (let F = 0; F < tt; ++F) {
      const $ = e[F],
        T = C ? $ : {};
      if (F < a || F >= I) {
        T.skip = !0;
        continue;
      }
      const x = this.getParsed(F),
        v = Pt(x[_]),
        H = (T[S] = u.getPixelForValue(x[S], F)),
        R = (T[_] =
          c || v
            ? h.getBasePixel()
            : h.getPixelForValue(p ? this.applyStack(h, x, p) : x[_], F));
      ((T.skip = isNaN(H) || isNaN(R) || v),
        (T.stop = F > 0 && Math.abs(x[S] - Z[S]) > A),
        E && ((T.parsed = x), (T.raw = d.data[F])),
        b &&
          (T.options =
            m || this.resolveDataElementOptions(F, $.active ? "active" : o)),
        C || this.updateElement($, F, T, o),
        (Z = x));
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      a = e.dataset,
      l = (a.options && a.options.borderWidth) || 0,
      o = e.data || [];
    if (!o.length) return l;
    const c = o[0].size(this.resolveDataElementOptions(0)),
      u = o[o.length - 1].size(this.resolveDataElementOptions(o.length - 1));
    return Math.max(l, c, u) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    (e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw());
  }
}
function ga() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  );
}
class oh {
  static override(e) {
    Object.assign(oh.prototype, e);
  }
  options;
  constructor(e) {
    this.options = e || {};
  }
  init() {}
  formats() {
    return ga();
  }
  parse() {
    return ga();
  }
  format() {
    return ga();
  }
  add() {
    return ga();
  }
  diff() {
    return ga();
  }
  startOf() {
    return ga();
  }
  endOf() {
    return ga();
  }
}
var $_ = { _date: oh };
function J_(i, e, a, l) {
  const { controller: o, data: c, _sorted: u } = i,
    h = o._cachedMeta.iScale,
    p = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (h && e === h.axis && e !== "r" && u && c.length) {
    const d = h._reversePixels ? Cw : va;
    if (l) {
      if (o._sharedOptions) {
        const m = c[0],
          b = typeof m.getRange == "function" && m.getRange(e);
        if (b) {
          const S = d(c, e, a - b),
            _ = d(c, e, a + b);
          return { lo: S.lo, hi: _.hi };
        }
      }
    } else {
      const m = d(c, e, a);
      if (p) {
        const { vScale: b } = o._cachedMeta,
          { _parsed: S } = i,
          _ = S.slice(0, m.lo + 1)
            .reverse()
            .findIndex((E) => !Pt(E[b.axis]));
        m.lo -= Math.max(0, _);
        const w = S.slice(m.hi).findIndex((E) => !Pt(E[b.axis]));
        m.hi += Math.max(0, w);
      }
      return m;
    }
  }
  return { lo: 0, hi: c.length - 1 };
}
function Ir(i, e, a, l, o) {
  const c = i.getSortedVisibleDatasetMetas(),
    u = a[e];
  for (let h = 0, p = c.length; h < p; ++h) {
    const { index: d, data: m } = c[h],
      { lo: b, hi: S } = J_(c[h], e, u, o);
    for (let _ = b; _ <= S; ++_) {
      const w = m[_];
      w.skip || l(w, d, _);
    }
  }
}
function tx(i) {
  const e = i.indexOf("x") !== -1,
    a = i.indexOf("y") !== -1;
  return function (l, o) {
    const c = e ? Math.abs(l.x - o.x) : 0,
      u = a ? Math.abs(l.y - o.y) : 0;
    return Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2));
  };
}
function Of(i, e, a, l, o) {
  const c = [];
  return (
    (!o && !i.isPointInArea(e)) ||
      Ir(
        i,
        a,
        e,
        function (h, p, d) {
          (!o && !ql(h, i.chartArea, 0)) ||
            (h.inRange(e.x, e.y, l) &&
              c.push({ element: h, datasetIndex: p, index: d }));
        },
        !0,
      ),
    c
  );
}
function ex(i, e, a, l) {
  let o = [];
  function c(u, h, p) {
    const { startAngle: d, endAngle: m } = u.getProps(
        ["startAngle", "endAngle"],
        l,
      ),
      { angle: b } = xw(u, { x: e.x, y: e.y });
    hb(b, d, m) && o.push({ element: u, datasetIndex: h, index: p });
  }
  return (Ir(i, a, e, c), o);
}
function nx(i, e, a, l, o, c) {
  let u = [];
  const h = tx(a);
  let p = Number.POSITIVE_INFINITY;
  function d(m, b, S) {
    const _ = m.inRange(e.x, e.y, o);
    if (l && !_) return;
    const w = m.getCenterPoint(o);
    if (!(!!c || i.isPointInArea(w)) && !_) return;
    const A = h(e, w);
    A < p
      ? ((u = [{ element: m, datasetIndex: b, index: S }]), (p = A))
      : A === p && u.push({ element: m, datasetIndex: b, index: S });
  }
  return (Ir(i, a, e, d), u);
}
function Df(i, e, a, l, o, c) {
  return !c && !i.isPointInArea(e)
    ? []
    : a === "r" && !l
      ? ex(i, e, a, o)
      : nx(i, e, a, l, o, c);
}
function f0(i, e, a, l, o) {
  const c = [],
    u = a === "x" ? "inXRange" : "inYRange";
  let h = !1;
  return (
    Ir(i, a, e, (p, d, m) => {
      p[u] &&
        p[u](e[a], o) &&
        (c.push({ element: p, datasetIndex: d, index: m }),
        (h = h || p.inRange(e.x, e.y, o)));
    }),
    l && !h ? [] : c
  );
}
var ix = {
  modes: {
    index(i, e, a, l) {
      const o = ma(e, i),
        c = a.axis || "x",
        u = a.includeInvisible || !1,
        h = a.intersect ? Of(i, o, c, l, u) : Df(i, o, c, !1, l, u),
        p = [];
      return h.length
        ? (i.getSortedVisibleDatasetMetas().forEach((d) => {
            const m = h[0].index,
              b = d.data[m];
            b &&
              !b.skip &&
              p.push({ element: b, datasetIndex: d.index, index: m });
          }),
          p)
        : [];
    },
    dataset(i, e, a, l) {
      const o = ma(e, i),
        c = a.axis || "xy",
        u = a.includeInvisible || !1;
      let h = a.intersect ? Of(i, o, c, l, u) : Df(i, o, c, !1, l, u);
      if (h.length > 0) {
        const p = h[0].datasetIndex,
          d = i.getDatasetMeta(p).data;
        h = [];
        for (let m = 0; m < d.length; ++m)
          h.push({ element: d[m], datasetIndex: p, index: m });
      }
      return h;
    },
    point(i, e, a, l) {
      const o = ma(e, i),
        c = a.axis || "xy",
        u = a.includeInvisible || !1;
      return Of(i, o, c, l, u);
    },
    nearest(i, e, a, l) {
      const o = ma(e, i),
        c = a.axis || "xy",
        u = a.includeInvisible || !1;
      return Df(i, o, c, a.intersect, l, u);
    },
    x(i, e, a, l) {
      const o = ma(e, i);
      return f0(i, o, "x", a.intersect, l);
    },
    y(i, e, a, l) {
      const o = ma(e, i);
      return f0(i, o, "y", a.intersect, l);
    },
  },
};
const kb = ["left", "top", "right", "bottom"];
function Ml(i, e) {
  return i.filter((a) => a.pos === e);
}
function h0(i, e) {
  return i.filter((a) => kb.indexOf(a.pos) === -1 && a.box.axis === e);
}
function Cl(i, e) {
  return i.sort((a, l) => {
    const o = e ? l : a,
      c = e ? a : l;
    return o.weight === c.weight ? o.index - c.index : o.weight - c.weight;
  });
}
function ax(i) {
  const e = [];
  let a, l, o, c, u, h;
  for (a = 0, l = (i || []).length; a < l; ++a)
    ((o = i[a]),
      ({
        position: c,
        options: { stack: u, stackWeight: h = 1 },
      } = o),
      e.push({
        index: a,
        box: o,
        pos: c,
        horizontal: o.isHorizontal(),
        weight: o.weight,
        stack: u && c + u,
        stackWeight: h,
      }));
  return e;
}
function sx(i) {
  const e = {};
  for (const a of i) {
    const { stack: l, pos: o, stackWeight: c } = a;
    if (!l || !kb.includes(o)) continue;
    const u = e[l] || (e[l] = { count: 0, placed: 0, weight: 0, size: 0 });
    (u.count++, (u.weight += c));
  }
  return e;
}
function lx(i, e) {
  const a = sx(i),
    { vBoxMaxWidth: l, hBoxMaxHeight: o } = e;
  let c, u, h;
  for (c = 0, u = i.length; c < u; ++c) {
    h = i[c];
    const { fullSize: p } = h.box,
      d = a[h.stack],
      m = d && h.stackWeight / d.weight;
    h.horizontal
      ? ((h.width = m ? m * l : p && e.availableWidth), (h.height = o))
      : ((h.width = l), (h.height = m ? m * o : p && e.availableHeight));
  }
  return a;
}
function ox(i) {
  const e = ax(i),
    a = Cl(
      e.filter((d) => d.box.fullSize),
      !0,
    ),
    l = Cl(Ml(e, "left"), !0),
    o = Cl(Ml(e, "right")),
    c = Cl(Ml(e, "top"), !0),
    u = Cl(Ml(e, "bottom")),
    h = h0(e, "x"),
    p = h0(e, "y");
  return {
    fullSize: a,
    leftAndTop: l.concat(c),
    rightAndBottom: o.concat(p).concat(u).concat(h),
    chartArea: Ml(e, "chartArea"),
    vertical: l.concat(o).concat(p),
    horizontal: c.concat(u).concat(h),
  };
}
function d0(i, e, a, l) {
  return Math.max(i[a], e[a]) + Math.max(i[l], e[l]);
}
function Rb(i, e) {
  ((i.top = Math.max(i.top, e.top)),
    (i.left = Math.max(i.left, e.left)),
    (i.bottom = Math.max(i.bottom, e.bottom)),
    (i.right = Math.max(i.right, e.right)));
}
function rx(i, e, a, l) {
  const { pos: o, box: c } = a,
    u = i.maxPadding;
  if (!Lt(o)) {
    a.size && (i[o] -= a.size);
    const b = l[a.stack] || { size: 0, count: 1 };
    ((b.size = Math.max(b.size, a.horizontal ? c.height : c.width)),
      (a.size = b.size / b.count),
      (i[o] += a.size));
  }
  c.getPadding && Rb(u, c.getPadding());
  const h = Math.max(0, e.outerWidth - d0(u, i, "left", "right")),
    p = Math.max(0, e.outerHeight - d0(u, i, "top", "bottom")),
    d = h !== i.w,
    m = p !== i.h;
  return (
    (i.w = h),
    (i.h = p),
    a.horizontal ? { same: d, other: m } : { same: m, other: d }
  );
}
function cx(i) {
  const e = i.maxPadding;
  function a(l) {
    const o = Math.max(e[l] - i[l], 0);
    return ((i[l] += o), o);
  }
  ((i.y += a("top")), (i.x += a("left")), a("right"), a("bottom"));
}
function ux(i, e) {
  const a = e.maxPadding;
  function l(o) {
    const c = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      o.forEach((u) => {
        c[u] = Math.max(e[u], a[u]);
      }),
      c
    );
  }
  return l(i ? ["left", "right"] : ["top", "bottom"]);
}
function Dl(i, e, a, l) {
  const o = [];
  let c, u, h, p, d, m;
  for (c = 0, u = i.length, d = 0; c < u; ++c) {
    ((h = i[c]),
      (p = h.box),
      p.update(h.width || e.w, h.height || e.h, ux(h.horizontal, e)));
    const { same: b, other: S } = rx(e, a, h, l);
    ((d |= b && o.length), (m = m || S), p.fullSize || o.push(h));
  }
  return (d && Dl(o, e, a, l)) || m;
}
function _r(i, e, a, l, o) {
  ((i.top = a),
    (i.left = e),
    (i.right = e + l),
    (i.bottom = a + o),
    (i.width = l),
    (i.height = o));
}
function g0(i, e, a, l) {
  const o = a.padding;
  let { x: c, y: u } = e;
  for (const h of i) {
    const p = h.box,
      d = l[h.stack] || { placed: 0, weight: 1 },
      m = h.stackWeight / d.weight || 1;
    if (h.horizontal) {
      const b = e.w * m,
        S = d.size || p.height;
      (Lr(d.start) && (u = d.start),
        p.fullSize
          ? _r(p, o.left, u, a.outerWidth - o.right - o.left, S)
          : _r(p, e.left + d.placed, u, b, S),
        (d.start = u),
        (d.placed += b),
        (u = p.bottom));
    } else {
      const b = e.h * m,
        S = d.size || p.width;
      (Lr(d.start) && (c = d.start),
        p.fullSize
          ? _r(p, c, o.top, S, a.outerHeight - o.bottom - o.top)
          : _r(p, c, e.top + d.placed, S, b),
        (d.start = c),
        (d.placed += b),
        (c = p.right));
    }
  }
  ((e.x = c), (e.y = u));
}
var qi = {
  addBox(i, e) {
    (i.boxes || (i.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(a) {
                e.draw(a);
              },
            },
          ];
        }),
      i.boxes.push(e));
  },
  removeBox(i, e) {
    const a = i.boxes ? i.boxes.indexOf(e) : -1;
    a !== -1 && i.boxes.splice(a, 1);
  },
  configure(i, e, a) {
    ((e.fullSize = a.fullSize),
      (e.position = a.position),
      (e.weight = a.weight));
  },
  update(i, e, a, l) {
    if (!i) return;
    const o = An(i.options.layout.padding),
      c = Math.max(e - o.width, 0),
      u = Math.max(a - o.height, 0),
      h = ox(i.boxes),
      p = h.vertical,
      d = h.horizontal;
    Ft(i.boxes, (E) => {
      typeof E.beforeLayout == "function" && E.beforeLayout();
    });
    const m =
        p.reduce(
          (E, A) => (A.box.options && A.box.options.display === !1 ? E : E + 1),
          0,
        ) || 1,
      b = Object.freeze({
        outerWidth: e,
        outerHeight: a,
        padding: o,
        availableWidth: c,
        availableHeight: u,
        vBoxMaxWidth: c / 2 / m,
        hBoxMaxHeight: u / 2,
      }),
      S = Object.assign({}, o);
    Rb(S, An(l));
    const _ = Object.assign(
        { maxPadding: S, w: c, h: u, x: o.left, y: o.top },
        o,
      ),
      w = lx(p.concat(d), b);
    (Dl(h.fullSize, _, b, w),
      Dl(p, _, b, w),
      Dl(d, _, b, w) && Dl(p, _, b, w),
      cx(_),
      g0(h.leftAndTop, _, b, w),
      (_.x += _.w),
      (_.y += _.h),
      g0(h.rightAndBottom, _, b, w),
      (i.chartArea = {
        left: _.left,
        top: _.top,
        right: _.left + _.w,
        bottom: _.top + _.h,
        height: _.h,
        width: _.w,
      }),
      Ft(h.chartArea, (E) => {
        const A = E.box;
        (Object.assign(A, i.chartArea),
          A.update(_.w, _.h, { left: 0, top: 0, right: 0, bottom: 0 }));
      }));
  },
};
class Bb {
  acquireContext(e, a) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, a, l) {}
  removeEventListener(e, a, l) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, a, l, o) {
    return (
      (a = Math.max(0, a || e.width)),
      (l = l || e.height),
      { width: a, height: Math.max(0, o ? Math.floor(a / o) : l) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class fx extends Bb {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const Dr = "$chartjs",
  hx = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  p0 = (i) => i === null || i === "";
function dx(i, e) {
  const a = i.style,
    l = i.getAttribute("height"),
    o = i.getAttribute("width");
  if (
    ((i[Dr] = {
      initial: {
        height: l,
        width: o,
        style: { display: a.display, height: a.height, width: a.width },
      },
    }),
    (a.display = a.display || "block"),
    (a.boxSizing = a.boxSizing || "border-box"),
    p0(o))
  ) {
    const c = e0(i, "width");
    c !== void 0 && (i.width = c);
  }
  if (p0(l))
    if (i.style.height === "") i.height = i.width / (e || 2);
    else {
      const c = e0(i, "height");
      c !== void 0 && (i.height = c);
    }
  return i;
}
const Lb = x_ ? { passive: !0 } : !1;
function gx(i, e, a) {
  i && i.addEventListener(e, a, Lb);
}
function px(i, e, a) {
  i && i.canvas && i.canvas.removeEventListener(e, a, Lb);
}
function mx(i, e) {
  const a = hx[i.type] || i.type,
    { x: l, y: o } = ma(i, e);
  return {
    type: a,
    chart: e,
    native: i,
    x: l !== void 0 ? l : null,
    y: o !== void 0 ? o : null,
  };
}
function Ur(i, e) {
  for (const a of i) if (a === e || a.contains(e)) return !0;
}
function bx(i, e, a) {
  const l = i.canvas,
    o = new MutationObserver((c) => {
      let u = !1;
      for (const h of c)
        ((u = u || Ur(h.addedNodes, l)), (u = u && !Ur(h.removedNodes, l)));
      u && a();
    });
  return (o.observe(document, { childList: !0, subtree: !0 }), o);
}
function yx(i, e, a) {
  const l = i.canvas,
    o = new MutationObserver((c) => {
      let u = !1;
      for (const h of c)
        ((u = u || Ur(h.removedNodes, l)), (u = u && !Ur(h.addedNodes, l)));
      u && a();
    });
  return (o.observe(document, { childList: !0, subtree: !0 }), o);
}
const Fl = new Map();
let m0 = 0;
function jb() {
  const i = window.devicePixelRatio;
  i !== m0 &&
    ((m0 = i),
    Fl.forEach((e, a) => {
      a.currentDevicePixelRatio !== i && e();
    }));
}
function vx(i, e) {
  (Fl.size || window.addEventListener("resize", jb), Fl.set(i, e));
}
function wx(i) {
  (Fl.delete(i), Fl.size || window.removeEventListener("resize", jb));
}
function _x(i, e, a) {
  const l = i.canvas,
    o = l && lh(l);
  if (!o) return;
  const c = pb((h, p) => {
      const d = o.clientWidth;
      (a(h, p), d < o.clientWidth && a());
    }, window),
    u = new ResizeObserver((h) => {
      const p = h[0],
        d = p.contentRect.width,
        m = p.contentRect.height;
      (d === 0 && m === 0) || c(d, m);
    });
  return (u.observe(o), vx(i, c), u);
}
function zf(i, e, a) {
  (a && a.disconnect(), e === "resize" && wx(i));
}
function xx(i, e, a) {
  const l = i.canvas,
    o = pb((c) => {
      i.ctx !== null && a(mx(c, i));
    }, i);
  return (gx(l, e, o), o);
}
class Sx extends Bb {
  acquireContext(e, a) {
    const l = e && e.getContext && e.getContext("2d");
    return l && l.canvas === e ? (dx(e, a), l) : null;
  }
  releaseContext(e) {
    const a = e.canvas;
    if (!a[Dr]) return !1;
    const l = a[Dr].initial;
    ["height", "width"].forEach((c) => {
      const u = l[c];
      Pt(u) ? a.removeAttribute(c) : a.setAttribute(c, u);
    });
    const o = l.style || {};
    return (
      Object.keys(o).forEach((c) => {
        a.style[c] = o[c];
      }),
      (a.width = a.width),
      delete a[Dr],
      !0
    );
  }
  addEventListener(e, a, l) {
    this.removeEventListener(e, a);
    const o = e.$proxies || (e.$proxies = {}),
      u = { attach: bx, detach: yx, resize: _x }[a] || xx;
    o[a] = u(e, a, l);
  }
  removeEventListener(e, a) {
    const l = e.$proxies || (e.$proxies = {}),
      o = l[a];
    if (!o) return;
    ((({ attach: zf, detach: zf, resize: zf })[a] || px)(e, a, o),
      (l[a] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, a, l, o) {
    return __(e, a, l, o);
  }
  isAttached(e) {
    const a = e && lh(e);
    return !!(a && a.isConnected);
  }
}
function Mx(i) {
  return !sh() || (typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas)
    ? fx
    : Sx;
}
let ws = class {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(e) {
    const { x: a, y: l } = this.getProps(["x", "y"], e);
    return { x: a, y: l };
  }
  hasValue() {
    return Ul(this.x) && Ul(this.y);
  }
  getProps(e, a) {
    const l = this.$animations;
    if (!a || !l) return this;
    const o = {};
    return (
      e.forEach((c) => {
        o[c] = l[c] && l[c].active() ? l[c]._to : this[c];
      }),
      o
    );
  }
};
function Cx(i, e) {
  const a = i.options.ticks,
    l = Ex(i),
    o = Math.min(a.maxTicksLimit || l, l),
    c = a.major.enabled ? Tx(e) : [],
    u = c.length,
    h = c[0],
    p = c[u - 1],
    d = [];
  if (u > o) return (Ox(e, d, c, u / o), d);
  const m = Ax(c, e, o);
  if (u > 0) {
    let b, S;
    const _ = u > 1 ? Math.round((p - h) / (u - 1)) : null;
    for (xr(e, d, m, Pt(_) ? 0 : h - _, h), b = 0, S = u - 1; b < S; b++)
      xr(e, d, m, c[b], c[b + 1]);
    return (xr(e, d, m, p, Pt(_) ? e.length : p + _), d);
  }
  return (xr(e, d, m), d);
}
function Ex(i) {
  const e = i.options.offset,
    a = i._tickSize(),
    l = i._length / a + (e ? 0 : 1),
    o = i._maxLength / a;
  return Math.floor(Math.min(l, o));
}
function Ax(i, e, a) {
  const l = Dx(i),
    o = e.length / a;
  if (!l) return Math.max(o, 1);
  const c = bw(l);
  for (let u = 0, h = c.length - 1; u < h; u++) {
    const p = c[u];
    if (p > o) return p;
  }
  return Math.max(o, 1);
}
function Tx(i) {
  const e = [];
  let a, l;
  for (a = 0, l = i.length; a < l; a++) i[a].major && e.push(a);
  return e;
}
function Ox(i, e, a, l) {
  let o = 0,
    c = a[0],
    u;
  for (l = Math.ceil(l), u = 0; u < i.length; u++)
    u === c && (e.push(i[u]), o++, (c = a[o * l]));
}
function xr(i, e, a, l, o) {
  const c = Tt(l, 0),
    u = Math.min(Tt(o, i.length), i.length);
  let h = 0,
    p,
    d,
    m;
  for (
    a = Math.ceil(a), o && ((p = o - l), (a = p / Math.floor(p / a))), m = c;
    m < 0;
  )
    (h++, (m = Math.round(c + h * a)));
  for (d = Math.max(c, 0); d < u; d++)
    d === m && (e.push(i[d]), h++, (m = Math.round(c + h * a)));
}
function Dx(i) {
  const e = i.length;
  let a, l;
  if (e < 2) return !1;
  for (l = i[0], a = 1; a < e; ++a) if (i[a] - i[a - 1] !== l) return !1;
  return l;
}
const zx = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  b0 = (i, e, a) => (e === "top" || e === "left" ? i[e] + a : i[e] - a),
  y0 = (i, e) => Math.min(e || i, i);
function v0(i, e) {
  const a = [],
    l = i.length / e,
    o = i.length;
  let c = 0;
  for (; c < o; c += l) a.push(i[Math.floor(c)]);
  return a;
}
function kx(i, e, a) {
  const l = i.ticks.length,
    o = Math.min(e, l - 1),
    c = i._startPixel,
    u = i._endPixel,
    h = 1e-6;
  let p = i.getPixelForTick(o),
    d;
  if (
    !(
      a &&
      (l === 1
        ? (d = Math.max(p - c, u - p))
        : e === 0
          ? (d = (i.getPixelForTick(1) - p) / 2)
          : (d = (p - i.getPixelForTick(o - 1)) / 2),
      (p += o < e ? d : -d),
      p < c - h || p > u + h)
    )
  )
    return p;
}
function Rx(i, e) {
  Ft(i, (a) => {
    const l = a.gc,
      o = l.length / 2;
    let c;
    if (o > e) {
      for (c = 0; c < o; ++c) delete a.data[l[c]];
      l.splice(0, o);
    }
  });
}
function El(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function w0(i, e) {
  if (!i.display) return 0;
  const a = Ge(i.font, e),
    l = An(i.padding);
  return (Ee(i.text) ? i.text.length : 1) * a.lineHeight + l.height;
}
function Bx(i, e) {
  return Ca(i, { scale: e, type: "scale" });
}
function Lx(i, e, a) {
  return Ca(i, { tick: a, index: e, type: "tick" });
}
function jx(i, e, a) {
  let l = mb(i);
  return (((a && e !== "right") || (!a && e === "right")) && (l = zx(l)), l);
}
function Hx(i, e, a, l) {
  const { top: o, left: c, bottom: u, right: h, chart: p } = i,
    { chartArea: d, scales: m } = p;
  let b = 0,
    S,
    _,
    w;
  const E = u - o,
    A = h - c;
  if (i.isHorizontal()) {
    if (((_ = tn(l, c, h)), Lt(a))) {
      const C = Object.keys(a)[0],
        I = a[C];
      w = m[C].getPixelForValue(I) + E - e;
    } else
      a === "center" ? (w = (d.bottom + d.top) / 2 + E - e) : (w = b0(i, a, e));
    S = h - c;
  } else {
    if (Lt(a)) {
      const C = Object.keys(a)[0],
        I = a[C];
      _ = m[C].getPixelForValue(I) - A + e;
    } else
      a === "center" ? (_ = (d.left + d.right) / 2 - A + e) : (_ = b0(i, a, e));
    ((w = tn(l, u, o)), (b = a === "left" ? -En : En));
  }
  return { titleX: _, titleY: w, maxWidth: S, rotation: b };
}
class _s extends ws {
  constructor(e) {
    (super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0));
  }
  init(e) {
    ((this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax)));
  }
  parse(e, a) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: a, _suggestedMin: l, _suggestedMax: o } = this;
    return (
      (e = Rn(e, Number.POSITIVE_INFINITY)),
      (a = Rn(a, Number.NEGATIVE_INFINITY)),
      (l = Rn(l, Number.POSITIVE_INFINITY)),
      (o = Rn(o, Number.NEGATIVE_INFINITY)),
      { min: Rn(e, l), max: Rn(a, o), minDefined: wn(e), maxDefined: wn(a) }
    );
  }
  getMinMax(e) {
    let { min: a, max: l, minDefined: o, maxDefined: c } = this.getUserBounds(),
      u;
    if (o && c) return { min: a, max: l };
    const h = this.getMatchingVisibleMetas();
    for (let p = 0, d = h.length; p < d; ++p)
      ((u = h[p].controller.getMinMax(this, e)),
        o || (a = Math.min(a, u.min)),
        c || (l = Math.max(l, u.max)));
    return (
      (a = c && a > l ? l : a),
      (l = o && a > l ? a : l),
      { min: Rn(a, Rn(l, a)), max: Rn(l, Rn(a, l)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    ((this._cache = {}), (this._dataLimitsCached = !1));
  }
  beforeUpdate() {
    Jt(this.options.beforeUpdate, [this]);
  }
  update(e, a, l) {
    const { beginAtZero: o, grace: c, ticks: u } = this.options,
      h = u.sampleSize;
    (this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = l =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, l)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + l.left + l.right
        : this.height + l.top + l.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Jw(this, c, o)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks());
    const p = h < this.ticks.length;
    (this._convertTicksToLabels(p ? v0(this.ticks, h) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      u.display &&
        (u.autoSkip || u.source === "auto") &&
        ((this.ticks = Cx(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      p && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate());
  }
  configure() {
    let e = this.options.reverse,
      a,
      l;
    (this.isHorizontal()
      ? ((a = this.left), (l = this.right))
      : ((a = this.top), (l = this.bottom), (e = !e)),
      (this._startPixel = a),
      (this._endPixel = l),
      (this._reversePixels = e),
      (this._length = l - a),
      (this._alignToPixels = this.options.alignToPixels));
  }
  afterUpdate() {
    Jt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Jt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    (this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0));
  }
  afterSetDimensions() {
    Jt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    (this.chart.notifyPlugins(e, this.getContext()),
      Jt(this.options[e], [this]));
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Jt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const a = this.options.ticks;
    let l, o, c;
    for (l = 0, o = e.length; l < o; l++)
      ((c = e[l]), (c.label = Jt(a.callback, [c.value, l, e], this)));
  }
  afterTickToLabelConversion() {
    Jt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Jt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      a = e.ticks,
      l = y0(this.ticks.length, e.ticks.maxTicksLimit),
      o = a.minRotation || 0,
      c = a.maxRotation;
    let u = o,
      h,
      p,
      d;
    if (
      !this._isVisible() ||
      !a.display ||
      o >= c ||
      l <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = o;
      return;
    }
    const m = this._getLabelSizes(),
      b = m.widest.width,
      S = m.highest.height,
      _ = vn(this.chart.width - b, 0, this.maxWidth);
    ((h = e.offset ? this.maxWidth / l : _ / (l - 1)),
      b + 6 > h &&
        ((h = _ / (l - (e.offset ? 0.5 : 1))),
        (p =
          this.maxHeight -
          El(e.grid) -
          a.padding -
          w0(e.title, this.chart.options.font)),
        (d = Math.sqrt(b * b + S * S)),
        (u = _w(
          Math.min(
            Math.asin(vn((m.highest.height + 6) / h, -1, 1)),
            Math.asin(vn(p / d, -1, 1)) - Math.asin(vn(S / d, -1, 1)),
          ),
        )),
        (u = Math.max(o, Math.min(c, u)))),
      (this.labelRotation = u));
  }
  afterCalculateLabelRotation() {
    Jt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Jt(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: a,
        options: { ticks: l, title: o, grid: c },
      } = this,
      u = this._isVisible(),
      h = this.isHorizontal();
    if (u) {
      const p = w0(o, a.options.font);
      if (
        (h
          ? ((e.width = this.maxWidth), (e.height = El(c) + p))
          : ((e.height = this.maxHeight), (e.width = El(c) + p)),
        l.display && this.ticks.length)
      ) {
        const {
            first: d,
            last: m,
            widest: b,
            highest: S,
          } = this._getLabelSizes(),
          _ = l.padding * 2,
          w = ya(this.labelRotation),
          E = Math.cos(w),
          A = Math.sin(w);
        if (h) {
          const C = l.mirror ? 0 : A * b.width + E * S.height;
          e.height = Math.min(this.maxHeight, e.height + C + _);
        } else {
          const C = l.mirror ? 0 : E * b.width + A * S.height;
          e.width = Math.min(this.maxWidth, e.width + C + _);
        }
        this._calculatePadding(d, m, A, E);
      }
    }
    (this._handleMargins(),
      h
        ? ((this.width = this._length =
            a.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            a.height - this._margins.top - this._margins.bottom)));
  }
  _calculatePadding(e, a, l, o) {
    const {
        ticks: { align: c, padding: u },
        position: h,
      } = this.options,
      p = this.labelRotation !== 0,
      d = h !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const m = this.getPixelForTick(0) - this.left,
        b = this.right - this.getPixelForTick(this.ticks.length - 1);
      let S = 0,
        _ = 0;
      (p
        ? d
          ? ((S = o * e.width), (_ = l * a.height))
          : ((S = l * e.height), (_ = o * a.width))
        : c === "start"
          ? (_ = a.width)
          : c === "end"
            ? (S = e.width)
            : c !== "inner" && ((S = e.width / 2), (_ = a.width / 2)),
        (this.paddingLeft = Math.max(
          ((S - m + u) * this.width) / (this.width - m),
          0,
        )),
        (this.paddingRight = Math.max(
          ((_ - b + u) * this.width) / (this.width - b),
          0,
        )));
    } else {
      let m = a.height / 2,
        b = e.height / 2;
      (c === "start"
        ? ((m = 0), (b = e.height))
        : c === "end" && ((m = a.height), (b = 0)),
        (this.paddingTop = m + u),
        (this.paddingBottom = b + u));
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    Jt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: a } = this.options;
    return a === "top" || a === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    (this.beforeTickToLabelConversion(), this.generateTickLabels(e));
    let a, l;
    for (a = 0, l = e.length; a < l; a++)
      Pt(e[a].label) && (e.splice(a, 1), l--, a--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const a = this.options.ticks.sampleSize;
      let l = this.ticks;
      (a < l.length && (l = v0(l, a)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            l,
            l.length,
            this.options.ticks.maxTicksLimit,
          )));
    }
    return e;
  }
  _computeLabelSizes(e, a, l) {
    const { ctx: o, _longestTextCache: c } = this,
      u = [],
      h = [],
      p = Math.floor(a / y0(a, l));
    let d = 0,
      m = 0,
      b,
      S,
      _,
      w,
      E,
      A,
      C,
      I,
      tt,
      Z,
      F;
    for (b = 0; b < a; b += p) {
      if (
        ((w = e[b].label),
        (E = this._resolveTickFontOptions(b)),
        (o.font = A = E.string),
        (C = c[A] = c[A] || { data: {}, gc: [] }),
        (I = E.lineHeight),
        (tt = Z = 0),
        !Pt(w) && !Ee(w))
      )
        ((tt = Im(o, C.data, C.gc, tt, w)), (Z = I));
      else if (Ee(w))
        for (S = 0, _ = w.length; S < _; ++S)
          ((F = w[S]),
            !Pt(F) && !Ee(F) && ((tt = Im(o, C.data, C.gc, tt, F)), (Z += I)));
      (u.push(tt), h.push(Z), (d = Math.max(tt, d)), (m = Math.max(Z, m)));
    }
    Rx(c, a);
    const $ = u.indexOf(d),
      T = h.indexOf(m),
      x = (v) => ({ width: u[v] || 0, height: h[v] || 0 });
    return {
      first: x(0),
      last: x(a - 1),
      widest: x($),
      highest: x(T),
      widths: u,
      heights: h,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, a) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const a = this._startPixel + e * this._length;
    return Mw(this._alignToPixels ? da(this.chart, a, 0) : a);
  }
  getDecimalForPixel(e) {
    const a = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - a : a;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: a } = this;
    return e < 0 && a < 0 ? a : e > 0 && a > 0 ? e : 0;
  }
  getContext(e) {
    const a = this.ticks || [];
    if (e >= 0 && e < a.length) {
      const l = a[e];
      return l.$context || (l.$context = Lx(this.getContext(), e, l));
    }
    return this.$context || (this.$context = Bx(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      a = ya(this.labelRotation),
      l = Math.abs(Math.cos(a)),
      o = Math.abs(Math.sin(a)),
      c = this._getLabelSizes(),
      u = e.autoSkipPadding || 0,
      h = c ? c.widest.width + u : 0,
      p = c ? c.highest.height + u : 0;
    return this.isHorizontal()
      ? p * l > h * o
        ? h / l
        : p / o
      : p * o < h * l
        ? p / l
        : h / o;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const a = this.axis,
      l = this.chart,
      o = this.options,
      { grid: c, position: u, border: h } = o,
      p = c.offset,
      d = this.isHorizontal(),
      b = this.ticks.length + (p ? 1 : 0),
      S = El(c),
      _ = [],
      w = h.setContext(this.getContext()),
      E = w.display ? w.width : 0,
      A = E / 2,
      C = function (j) {
        return da(l, j, E);
      };
    let I, tt, Z, F, $, T, x, v, H, R, B, J;
    if (u === "top")
      ((I = C(this.bottom)),
        (T = this.bottom - S),
        (v = I - A),
        (R = C(e.top) + A),
        (J = e.bottom));
    else if (u === "bottom")
      ((I = C(this.top)),
        (R = e.top),
        (J = C(e.bottom) - A),
        (T = I + A),
        (v = this.top + S));
    else if (u === "left")
      ((I = C(this.right)),
        ($ = this.right - S),
        (x = I - A),
        (H = C(e.left) + A),
        (B = e.right));
    else if (u === "right")
      ((I = C(this.left)),
        (H = e.left),
        (B = C(e.right) - A),
        ($ = I + A),
        (x = this.left + S));
    else if (a === "x") {
      if (u === "center") I = C((e.top + e.bottom) / 2 + 0.5);
      else if (Lt(u)) {
        const j = Object.keys(u)[0],
          G = u[j];
        I = C(this.chart.scales[j].getPixelForValue(G));
      }
      ((R = e.top), (J = e.bottom), (T = I + A), (v = T + S));
    } else if (a === "y") {
      if (u === "center") I = C((e.left + e.right) / 2);
      else if (Lt(u)) {
        const j = Object.keys(u)[0],
          G = u[j];
        I = C(this.chart.scales[j].getPixelForValue(G));
      }
      (($ = I - A), (x = $ - S), (H = e.left), (B = e.right));
    }
    const st = Tt(o.ticks.maxTicksLimit, b),
      at = Math.max(1, Math.ceil(b / st));
    for (tt = 0; tt < b; tt += at) {
      const j = this.getContext(tt),
        G = c.setContext(j),
        et = h.setContext(j),
        it = G.lineWidth,
        rt = G.color,
        O = et.dash || [],
        k = et.dashOffset,
        V = G.tickWidth,
        nt = G.tickColor,
        lt = G.tickBorderDash || [],
        ot = G.tickBorderDashOffset;
      ((Z = kx(this, tt, p)),
        Z !== void 0 &&
          ((F = da(l, Z, it)),
          d ? ($ = x = H = B = F) : (T = v = R = J = F),
          _.push({
            tx1: $,
            ty1: T,
            tx2: x,
            ty2: v,
            x1: H,
            y1: R,
            x2: B,
            y2: J,
            width: it,
            color: rt,
            borderDash: O,
            borderDashOffset: k,
            tickWidth: V,
            tickColor: nt,
            tickBorderDash: lt,
            tickBorderDashOffset: ot,
          })));
    }
    return ((this._ticksLength = b), (this._borderValue = I), _);
  }
  _computeLabelItems(e) {
    const a = this.axis,
      l = this.options,
      { position: o, ticks: c } = l,
      u = this.isHorizontal(),
      h = this.ticks,
      { align: p, crossAlign: d, padding: m, mirror: b } = c,
      S = El(l.grid),
      _ = S + m,
      w = b ? -m : _,
      E = -ya(this.labelRotation),
      A = [];
    let C,
      I,
      tt,
      Z,
      F,
      $,
      T,
      x,
      v,
      H,
      R,
      B,
      J = "middle";
    if (o === "top")
      (($ = this.bottom - w), (T = this._getXAxisLabelAlignment()));
    else if (o === "bottom")
      (($ = this.top + w), (T = this._getXAxisLabelAlignment()));
    else if (o === "left") {
      const at = this._getYAxisLabelAlignment(S);
      ((T = at.textAlign), (F = at.x));
    } else if (o === "right") {
      const at = this._getYAxisLabelAlignment(S);
      ((T = at.textAlign), (F = at.x));
    } else if (a === "x") {
      if (o === "center") $ = (e.top + e.bottom) / 2 + _;
      else if (Lt(o)) {
        const at = Object.keys(o)[0],
          j = o[at];
        $ = this.chart.scales[at].getPixelForValue(j) + _;
      }
      T = this._getXAxisLabelAlignment();
    } else if (a === "y") {
      if (o === "center") F = (e.left + e.right) / 2 - _;
      else if (Lt(o)) {
        const at = Object.keys(o)[0],
          j = o[at];
        F = this.chart.scales[at].getPixelForValue(j);
      }
      T = this._getYAxisLabelAlignment(S).textAlign;
    }
    a === "y" && (p === "start" ? (J = "top") : p === "end" && (J = "bottom"));
    const st = this._getLabelSizes();
    for (C = 0, I = h.length; C < I; ++C) {
      ((tt = h[C]), (Z = tt.label));
      const at = c.setContext(this.getContext(C));
      ((x = this.getPixelForTick(C) + c.labelOffset),
        (v = this._resolveTickFontOptions(C)),
        (H = v.lineHeight),
        (R = Ee(Z) ? Z.length : 1));
      const j = R / 2,
        G = at.color,
        et = at.textStrokeColor,
        it = at.textStrokeWidth;
      let rt = T;
      u
        ? ((F = x),
          T === "inner" &&
            (C === I - 1
              ? (rt = this.options.reverse ? "left" : "right")
              : C === 0
                ? (rt = this.options.reverse ? "right" : "left")
                : (rt = "center")),
          o === "top"
            ? d === "near" || E !== 0
              ? (B = -R * H + H / 2)
              : d === "center"
                ? (B = -st.highest.height / 2 - j * H + H)
                : (B = -st.highest.height + H / 2)
            : d === "near" || E !== 0
              ? (B = H / 2)
              : d === "center"
                ? (B = st.highest.height / 2 - j * H)
                : (B = st.highest.height - R * H),
          b && (B *= -1),
          E !== 0 && !at.showLabelBackdrop && (F += (H / 2) * Math.sin(E)))
        : (($ = x), (B = ((1 - R) * H) / 2));
      let O;
      if (at.showLabelBackdrop) {
        const k = An(at.backdropPadding),
          V = st.heights[C],
          nt = st.widths[C];
        let lt = B - k.top,
          ot = 0 - k.left;
        switch (J) {
          case "middle":
            lt -= V / 2;
            break;
          case "bottom":
            lt -= V;
            break;
        }
        switch (T) {
          case "center":
            ot -= nt / 2;
            break;
          case "right":
            ot -= nt;
            break;
          case "inner":
            C === I - 1 ? (ot -= nt) : C > 0 && (ot -= nt / 2);
            break;
        }
        O = {
          left: ot,
          top: lt,
          width: nt + k.width,
          height: V + k.height,
          color: at.backdropColor,
        };
      }
      A.push({
        label: Z,
        font: v,
        textOffset: B,
        options: {
          rotation: E,
          color: G,
          strokeColor: et,
          strokeWidth: it,
          textAlign: rt,
          textBaseline: J,
          translation: [F, $],
          backdrop: O,
        },
      });
    }
    return A;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: a } = this.options;
    if (-ya(this.labelRotation)) return e === "top" ? "left" : "right";
    let o = "center";
    return (
      a.align === "start"
        ? (o = "left")
        : a.align === "end"
          ? (o = "right")
          : a.align === "inner" && (o = "inner"),
      o
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: a,
        ticks: { crossAlign: l, mirror: o, padding: c },
      } = this.options,
      u = this._getLabelSizes(),
      h = e + c,
      p = u.widest.width;
    let d, m;
    return (
      a === "left"
        ? o
          ? ((m = this.right + c),
            l === "near"
              ? (d = "left")
              : l === "center"
                ? ((d = "center"), (m += p / 2))
                : ((d = "right"), (m += p)))
          : ((m = this.right - h),
            l === "near"
              ? (d = "right")
              : l === "center"
                ? ((d = "center"), (m -= p / 2))
                : ((d = "left"), (m = this.left)))
        : a === "right"
          ? o
            ? ((m = this.left + c),
              l === "near"
                ? (d = "right")
                : l === "center"
                  ? ((d = "center"), (m -= p / 2))
                  : ((d = "left"), (m -= p)))
            : ((m = this.left + h),
              l === "near"
                ? (d = "left")
                : l === "center"
                  ? ((d = "center"), (m += p / 2))
                  : ((d = "right"), (m = this.right)))
          : (d = "right"),
      { textAlign: d, x: m }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      a = this.options.position;
    if (a === "left" || a === "right")
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (a === "top" || a === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: a },
      left: l,
      top: o,
      width: c,
      height: u,
    } = this;
    a && (e.save(), (e.fillStyle = a), e.fillRect(l, o, c, u), e.restore());
  }
  getLineWidthForValue(e) {
    const a = this.options.grid;
    if (!this._isVisible() || !a.display) return 0;
    const o = this.ticks.findIndex((c) => c.value === e);
    return o >= 0 ? a.setContext(this.getContext(o)).lineWidth : 0;
  }
  drawGrid(e) {
    const a = this.options.grid,
      l = this.ctx,
      o =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let c, u;
    const h = (p, d, m) => {
      !m.width ||
        !m.color ||
        (l.save(),
        (l.lineWidth = m.width),
        (l.strokeStyle = m.color),
        l.setLineDash(m.borderDash || []),
        (l.lineDashOffset = m.borderDashOffset),
        l.beginPath(),
        l.moveTo(p.x, p.y),
        l.lineTo(d.x, d.y),
        l.stroke(),
        l.restore());
    };
    if (a.display)
      for (c = 0, u = o.length; c < u; ++c) {
        const p = o[c];
        (a.drawOnChartArea && h({ x: p.x1, y: p.y1 }, { x: p.x2, y: p.y2 }, p),
          a.drawTicks &&
            h(
              { x: p.tx1, y: p.ty1 },
              { x: p.tx2, y: p.ty2 },
              {
                color: p.tickColor,
                width: p.tickWidth,
                borderDash: p.tickBorderDash,
                borderDashOffset: p.tickBorderDashOffset,
              },
            ));
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: a,
        options: { border: l, grid: o },
      } = this,
      c = l.setContext(this.getContext()),
      u = l.display ? c.width : 0;
    if (!u) return;
    const h = o.setContext(this.getContext(0)).lineWidth,
      p = this._borderValue;
    let d, m, b, S;
    (this.isHorizontal()
      ? ((d = da(e, this.left, u) - u / 2),
        (m = da(e, this.right, h) + h / 2),
        (b = S = p))
      : ((b = da(e, this.top, u) - u / 2),
        (S = da(e, this.bottom, h) + h / 2),
        (d = m = p)),
      a.save(),
      (a.lineWidth = c.width),
      (a.strokeStyle = c.color),
      a.beginPath(),
      a.moveTo(d, b),
      a.lineTo(m, S),
      a.stroke(),
      a.restore());
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const l = this.ctx,
      o = this._computeLabelArea();
    o && th(l, o);
    const c = this.getLabelItems(e);
    for (const u of c) {
      const h = u.options,
        p = u.font,
        d = u.label,
        m = u.textOffset;
      Hr(l, d, 0, m, p, h);
    }
    o && eh(l);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: a, title: l, reverse: o },
    } = this;
    if (!l.display) return;
    const c = Ge(l.font),
      u = An(l.padding),
      h = l.align;
    let p = c.lineHeight / 2;
    a === "bottom" || a === "center" || Lt(a)
      ? ((p += u.bottom),
        Ee(l.text) && (p += c.lineHeight * (l.text.length - 1)))
      : (p += u.top);
    const {
      titleX: d,
      titleY: m,
      maxWidth: b,
      rotation: S,
    } = Hx(this, p, a, h);
    Hr(e, l.text, 0, 0, c, {
      color: l.color,
      maxWidth: b,
      rotation: S,
      textAlign: jx(h, a, o),
      textBaseline: "middle",
      translation: [d, m],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      a = (e.ticks && e.ticks.z) || 0,
      l = Tt(e.grid && e.grid.z, -1),
      o = Tt(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== _s.prototype.draw
      ? [
          {
            z: a,
            draw: (c) => {
              this.draw(c);
            },
          },
        ]
      : [
          {
            z: l,
            draw: (c) => {
              (this.drawBackground(), this.drawGrid(c), this.drawTitle());
            },
          },
          {
            z: o,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: a,
            draw: (c) => {
              this.drawLabels(c);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const a = this.chart.getSortedVisibleDatasetMetas(),
      l = this.axis + "AxisID",
      o = [];
    let c, u;
    for (c = 0, u = a.length; c < u; ++c) {
      const h = a[c];
      h[l] === this.id && (!e || h.type === e) && o.push(h);
    }
    return o;
  }
  _resolveTickFontOptions(e) {
    const a = this.options.ticks.setContext(this.getContext(e));
    return Ge(a.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Sr {
  constructor(e, a, l) {
    ((this.type = e),
      (this.scope = a),
      (this.override = l),
      (this.items = Object.create(null)));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype,
    );
  }
  register(e) {
    const a = Object.getPrototypeOf(e);
    let l;
    qx(a) && (l = this.register(a));
    const o = this.items,
      c = e.id,
      u = this.scope + "." + c;
    if (!c) throw new Error("class does not have id: " + e);
    return (
      c in o ||
        ((o[c] = e),
        Nx(e, u, l),
        this.override && ce.override(e.id, e.overrides)),
      u
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const a = this.items,
      l = e.id,
      o = this.scope;
    (l in a && delete a[l],
      o && l in ce[o] && (delete ce[o][l], this.override && delete Sa[l]));
  }
}
function Nx(i, e, a) {
  const l = Nl(Object.create(null), [
    a ? ce.get(a) : {},
    ce.get(e),
    i.defaults,
  ]);
  (ce.set(e, l),
    i.defaultRoutes && Ux(e, i.defaultRoutes),
    i.descriptors && ce.describe(e, i.descriptors));
}
function Ux(i, e) {
  Object.keys(e).forEach((a) => {
    const l = a.split("."),
      o = l.pop(),
      c = [i].concat(l).join("."),
      u = e[a].split("."),
      h = u.pop(),
      p = u.join(".");
    ce.route(c, o, p, h);
  });
}
function qx(i) {
  return "id" in i && "defaults" in i;
}
class Fx {
  constructor() {
    ((this.controllers = new Sr(zb, "datasets", !0)),
      (this.elements = new Sr(ws, "elements")),
      (this.plugins = new Sr(Object, "plugins")),
      (this.scales = new Sr(_s, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]));
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, a, l) {
    [...a].forEach((o) => {
      const c = l || this._getRegistryForType(o);
      l || c.isForType(o) || (c === this.plugins && o.id)
        ? this._exec(e, c, o)
        : Ft(o, (u) => {
            const h = l || this._getRegistryForType(u);
            this._exec(e, h, u);
          });
    });
  }
  _exec(e, a, l) {
    const o = Wf(e);
    (Jt(l["before" + o], [], l), a[e](l), Jt(l["after" + o], [], l));
  }
  _getRegistryForType(e) {
    for (let a = 0; a < this._typedRegistries.length; a++) {
      const l = this._typedRegistries[a];
      if (l.isForType(e)) return l;
    }
    return this.plugins;
  }
  _get(e, a, l) {
    const o = a.get(e);
    if (o === void 0)
      throw new Error('"' + e + '" is not a registered ' + l + ".");
    return o;
  }
}
var Ln = new Fx();
class Yx {
  constructor() {
    this._init = void 0;
  }
  notify(e, a, l, o) {
    if (
      (a === "beforeInit" &&
        ((this._init = this._createDescriptors(e, !0)),
        this._notify(this._init, e, "install")),
      this._init === void 0)
    )
      return;
    const c = o ? this._descriptors(e).filter(o) : this._descriptors(e),
      u = this._notify(c, e, a, l);
    return (
      a === "afterDestroy" &&
        (this._notify(c, e, "stop"),
        this._notify(this._init, e, "uninstall"),
        (this._init = void 0)),
      u
    );
  }
  _notify(e, a, l, o) {
    o = o || {};
    for (const c of e) {
      const u = c.plugin,
        h = u[l],
        p = [a, o, c.options];
      if (Jt(h, p, u) === !1 && o.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Pt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const a = (this._cache = this._createDescriptors(e));
    return (this._notifyStateChanges(e), a);
  }
  _createDescriptors(e, a) {
    const l = e && e.config,
      o = Tt(l.options && l.options.plugins, {}),
      c = Vx(l);
    return o === !1 && !a ? [] : Xx(e, c, o, a);
  }
  _notifyStateChanges(e) {
    const a = this._oldCache || [],
      l = this._cache,
      o = (c, u) =>
        c.filter((h) => !u.some((p) => h.plugin.id === p.plugin.id));
    (this._notify(o(a, l), e, "stop"), this._notify(o(l, a), e, "start"));
  }
}
function Vx(i) {
  const e = {},
    a = [],
    l = Object.keys(Ln.plugins.items);
  for (let c = 0; c < l.length; c++) a.push(Ln.getPlugin(l[c]));
  const o = i.plugins || [];
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a.indexOf(u) === -1 && (a.push(u), (e[u.id] = !0));
  }
  return { plugins: a, localIds: e };
}
function Gx(i, e) {
  return !e && i === !1 ? null : i === !0 ? {} : i;
}
function Xx(i, { plugins: e, localIds: a }, l, o) {
  const c = [],
    u = i.getContext();
  for (const h of e) {
    const p = h.id,
      d = Gx(l[p], o);
    d !== null &&
      c.push({
        plugin: h,
        options: Qx(i.config, { plugin: h, local: a[p] }, d, u),
      });
  }
  return c;
}
function Qx(i, { plugin: e, local: a }, l, o) {
  const c = i.pluginScopeKeys(e),
    u = i.getOptionScopes(l, c);
  return (
    a && e.defaults && u.push(e.defaults),
    i.createResolver(u, o, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Ff(i, e) {
  const a = ce.datasets[i] || {};
  return (
    ((e.datasets || {})[i] || {}).indexAxis || e.indexAxis || a.indexAxis || "x"
  );
}
function Zx(i, e) {
  let a = i;
  return (
    i === "_index_" ? (a = e) : i === "_value_" && (a = e === "x" ? "y" : "x"),
    a
  );
}
function Kx(i, e) {
  return i === e ? "_index_" : "_value_";
}
function _0(i) {
  if (i === "x" || i === "y" || i === "r") return i;
}
function Px(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function Yf(i, ...e) {
  if (_0(i)) return i;
  for (const a of e) {
    const l =
      a.axis || Px(a.position) || (i.length > 1 && _0(i[0].toLowerCase()));
    if (l) return l;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function x0(i, e, a) {
  if (a[e + "AxisID"] === i) return { axis: e };
}
function Ix(i, e) {
  if (e.data && e.data.datasets) {
    const a = e.data.datasets.filter((l) => l.xAxisID === i || l.yAxisID === i);
    if (a.length) return x0(i, "x", a[0]) || x0(i, "y", a[0]);
  }
  return {};
}
function Wx(i, e) {
  const a = Sa[i.type] || { scales: {} },
    l = e.scales || {},
    o = Ff(i.type, e),
    c = Object.create(null);
  return (
    Object.keys(l).forEach((u) => {
      const h = l[u];
      if (!Lt(h))
        return console.error(`Invalid scale configuration for scale: ${u}`);
      if (h._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${u}`,
        );
      const p = Yf(u, h, Ix(u, i), ce.scales[h.type]),
        d = Kx(p, o),
        m = a.scales || {};
      c[u] = kl(Object.create(null), [{ axis: p }, h, m[p], m[d]]);
    }),
    i.data.datasets.forEach((u) => {
      const h = u.type || i.type,
        p = u.indexAxis || Ff(h, e),
        m = (Sa[h] || {}).scales || {};
      Object.keys(m).forEach((b) => {
        const S = Zx(b, p),
          _ = u[S + "AxisID"] || S;
        ((c[_] = c[_] || Object.create(null)),
          kl(c[_], [{ axis: S }, l[_], m[b]]));
      });
    }),
    Object.keys(c).forEach((u) => {
      const h = c[u];
      kl(h, [ce.scales[h.type], ce.scale]);
    }),
    c
  );
}
function Hb(i) {
  const e = i.options || (i.options = {});
  ((e.plugins = Tt(e.plugins, {})), (e.scales = Wx(i, e)));
}
function Nb(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function $x(i) {
  return ((i = i || {}), (i.data = Nb(i.data)), Hb(i), i);
}
const S0 = new Map(),
  Ub = new Set();
function Mr(i, e) {
  let a = S0.get(i);
  return (a || ((a = e()), S0.set(i, a), Ub.add(a)), a);
}
const Al = (i, e, a) => {
  const l = Br(e, a);
  l !== void 0 && i.add(l);
};
class Jx {
  constructor(e) {
    ((this._config = $x(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map()));
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = Nb(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    (this.clearCache(), Hb(e));
  }
  clearCache() {
    (this._scopeCache.clear(), this._resolverCache.clear());
  }
  datasetScopeKeys(e) {
    return Mr(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, a) {
    return Mr(`${e}.transition.${a}`, () => [
      [`datasets.${e}.transitions.${a}`, `transitions.${a}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, a) {
    return Mr(`${e}-${a}`, () => [
      [`datasets.${e}.elements.${a}`, `datasets.${e}`, `elements.${a}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const a = e.id,
      l = this.type;
    return Mr(`${l}-plugin-${a}`, () => [
      [`plugins.${a}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, a) {
    const l = this._scopeCache;
    let o = l.get(e);
    return ((!o || a) && ((o = new Map()), l.set(e, o)), o);
  }
  getOptionScopes(e, a, l) {
    const { options: o, type: c } = this,
      u = this._cachedScopes(e, l),
      h = u.get(a);
    if (h) return h;
    const p = new Set();
    a.forEach((m) => {
      (e && (p.add(e), m.forEach((b) => Al(p, e, b))),
        m.forEach((b) => Al(p, o, b)),
        m.forEach((b) => Al(p, Sa[c] || {}, b)),
        m.forEach((b) => Al(p, ce, b)),
        m.forEach((b) => Al(p, Nf, b)));
    });
    const d = Array.from(p);
    return (
      d.length === 0 && d.push(Object.create(null)),
      Ub.has(a) && u.set(a, d),
      d
    );
  }
  chartOptionScopes() {
    const { options: e, type: a } = this;
    return [e, Sa[a] || {}, ce.datasets[a] || {}, { type: a }, ce, Nf];
  }
  resolveNamedOptions(e, a, l, o = [""]) {
    const c = { $shared: !0 },
      { resolver: u, subPrefixes: h } = M0(this._resolverCache, e, o);
    let p = u;
    if (eS(u, a)) {
      ((c.$shared = !1), (l = Xi(l) ? l() : l));
      const d = this.createResolver(e, l, h);
      p = ms(u, l, d);
    }
    for (const d of a) c[d] = p[d];
    return c;
  }
  createResolver(e, a, l = [""], o) {
    const { resolver: c } = M0(this._resolverCache, e, l);
    return Lt(a) ? ms(c, a, void 0, o) : c;
  }
}
function M0(i, e, a) {
  let l = i.get(e);
  l || ((l = new Map()), i.set(e, l));
  const o = a.join();
  let c = l.get(o);
  return (
    c ||
      ((c = {
        resolver: nh(e, a),
        subPrefixes: a.filter((h) => !h.toLowerCase().includes("hover")),
      }),
      l.set(o, c)),
    c
  );
}
const tS = (i) => Lt(i) && Object.getOwnPropertyNames(i).some((e) => Xi(i[e]));
function eS(i, e) {
  const { isScriptable: a, isIndexable: l } = _b(i);
  for (const o of e) {
    const c = a(o),
      u = l(o),
      h = (u || c) && i[o];
    if ((c && (Xi(h) || tS(h))) || (u && Ee(h))) return !0;
  }
  return !1;
}
var nS = "4.5.1";
const iS = ["top", "bottom", "left", "right", "chartArea"];
function C0(i, e) {
  return i === "top" || i === "bottom" || (iS.indexOf(i) === -1 && e === "x");
}
function E0(i, e) {
  return function (a, l) {
    return a[i] === l[i] ? a[e] - l[e] : a[i] - l[i];
  };
}
function A0(i) {
  const e = i.chart,
    a = e.options.animation;
  (e.notifyPlugins("afterRender"), Jt(a && a.onComplete, [i], e));
}
function aS(i) {
  const e = i.chart,
    a = e.options.animation;
  Jt(a && a.onProgress, [i], e);
}
function qb(i) {
  return (
    sh() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const zr = {},
  T0 = (i) => {
    const e = qb(i);
    return Object.values(zr)
      .filter((a) => a.canvas === e)
      .pop();
  };
function sS(i, e, a) {
  const l = Object.keys(i);
  for (const o of l) {
    const c = +o;
    if (c >= e) {
      const u = i[o];
      (delete i[o], (a > 0 || c > e) && (i[c + a] = u));
    }
  }
}
function lS(i, e, a, l) {
  return !a || i.type === "mouseout" ? null : l ? e : i;
}
let xs = class {
  static defaults = ce;
  static instances = zr;
  static overrides = Sa;
  static registry = Ln;
  static version = nS;
  static getChart = T0;
  static register(...e) {
    (Ln.add(...e), O0());
  }
  static unregister(...e) {
    (Ln.remove(...e), O0());
  }
  constructor(e, a) {
    const l = (this.config = new Jx(a)),
      o = qb(e),
      c = T0(o);
    if (c)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          c.id +
          "' must be destroyed before the canvas with ID '" +
          c.canvas.id +
          "' can be reused.",
      );
    const u = l.createResolver(l.chartOptionScopes(), this.getContext());
    ((this.platform = new (l.platform || Mx(o))()),
      this.platform.updateConfig(l));
    const h = this.platform.acquireContext(o, u.aspectRatio),
      p = h && h.canvas,
      d = p && p.height,
      m = p && p.width;
    if (
      ((this.id = rw()),
      (this.ctx = h),
      (this.canvas = p),
      (this.width = m),
      (this.height = d),
      (this._options = u),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Yx()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Ow((b) => this.update(b), u.resizeDelay || 0)),
      (this._dataChanges = []),
      (zr[this.id] = this),
      !h || !p)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    (li.listen(this, "complete", A0),
      li.listen(this, "progress", aS),
      this._initialize(),
      this.attached && this.update());
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: e, maintainAspectRatio: a },
      width: l,
      height: o,
      _aspectRatio: c,
    } = this;
    return Pt(e) ? (a && c ? c : o ? l / o : null) : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return Ln;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : t0(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return (Wm(this.canvas, this.ctx), this);
  }
  stop() {
    return (li.stop(this), this);
  }
  resize(e, a) {
    li.running(this)
      ? (this._resizeBeforeDraw = { width: e, height: a })
      : this._resize(e, a);
  }
  _resize(e, a) {
    const l = this.options,
      o = this.canvas,
      c = l.maintainAspectRatio && this.aspectRatio,
      u = this.platform.getMaximumSize(o, e, a, c),
      h = l.devicePixelRatio || this.platform.getDevicePixelRatio(),
      p = this.width ? "resize" : "attach";
    ((this.width = u.width),
      (this.height = u.height),
      (this._aspectRatio = this.aspectRatio),
      t0(this, h, !0) &&
        (this.notifyPlugins("resize", { size: u }),
        Jt(l.onResize, [this, u], this),
        this.attached && this._doResize(p) && this.render()));
  }
  ensureScalesHaveIDs() {
    const a = this.options.scales || {};
    Ft(a, (l, o) => {
      l.id = o;
    });
  }
  buildOrUpdateScales() {
    const e = this.options,
      a = e.scales,
      l = this.scales,
      o = Object.keys(l).reduce((u, h) => ((u[h] = !1), u), {});
    let c = [];
    (a &&
      (c = c.concat(
        Object.keys(a).map((u) => {
          const h = a[u],
            p = Yf(u, h),
            d = p === "r",
            m = p === "x";
          return {
            options: h,
            dposition: d ? "chartArea" : m ? "bottom" : "left",
            dtype: d ? "radialLinear" : m ? "category" : "linear",
          };
        }),
      )),
      Ft(c, (u) => {
        const h = u.options,
          p = h.id,
          d = Yf(p, h),
          m = Tt(h.type, u.dtype);
        ((h.position === void 0 || C0(h.position, d) !== C0(u.dposition)) &&
          (h.position = u.dposition),
          (o[p] = !0));
        let b = null;
        if (p in l && l[p].type === m) b = l[p];
        else {
          const S = Ln.getScale(m);
          ((b = new S({ id: p, type: m, ctx: this.ctx, chart: this })),
            (l[b.id] = b));
        }
        b.init(h, e);
      }),
      Ft(o, (u, h) => {
        u || delete l[h];
      }),
      Ft(l, (u) => {
        (qi.configure(this, u, u.options), qi.addBox(this, u));
      }));
  }
  _updateMetasets() {
    const e = this._metasets,
      a = this.data.datasets.length,
      l = e.length;
    if ((e.sort((o, c) => o.index - c.index), l > a)) {
      for (let o = a; o < l; ++o) this._destroyDatasetMeta(o);
      e.splice(a, l - a);
    }
    this._sortedMetasets = e.slice(0).sort(E0("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: e,
      data: { datasets: a },
    } = this;
    (e.length > a.length && delete this._stacks,
      e.forEach((l, o) => {
        a.filter((c) => c === l._dataset).length === 0 &&
          this._destroyDatasetMeta(o);
      }));
  }
  buildOrUpdateControllers() {
    const e = [],
      a = this.data.datasets;
    let l, o;
    for (this._removeUnreferencedMetasets(), l = 0, o = a.length; l < o; l++) {
      const c = a[l];
      let u = this.getDatasetMeta(l);
      const h = c.type || this.config.type;
      if (
        (u.type &&
          u.type !== h &&
          (this._destroyDatasetMeta(l), (u = this.getDatasetMeta(l))),
        (u.type = h),
        (u.indexAxis = c.indexAxis || Ff(h, this.options)),
        (u.order = c.order || 0),
        (u.index = l),
        (u.label = "" + c.label),
        (u.visible = this.isDatasetVisible(l)),
        u.controller)
      )
        (u.controller.updateIndex(l), u.controller.linkScales());
      else {
        const p = Ln.getController(h),
          { datasetElementType: d, dataElementType: m } = ce.datasets[h];
        (Object.assign(p, {
          dataElementType: Ln.getElement(m),
          datasetElementType: d && Ln.getElement(d),
        }),
          (u.controller = new p(this, l)),
          e.push(u.controller));
      }
    }
    return (this._updateMetasets(), e);
  }
  _resetElements() {
    Ft(
      this.data.datasets,
      (e, a) => {
        this.getDatasetMeta(a).controller.reset();
      },
      this,
    );
  }
  reset() {
    (this._resetElements(), this.notifyPlugins("reset"));
  }
  update(e) {
    const a = this.config;
    a.update();
    const l = (this._options = a.createResolver(
        a.chartOptionScopes(),
        this.getContext(),
      )),
      o = (this._animationsDisabled = !l.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
    )
      return;
    const c = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let u = 0;
    for (let d = 0, m = this.data.datasets.length; d < m; d++) {
      const { controller: b } = this.getDatasetMeta(d),
        S = !o && c.indexOf(b) === -1;
      (b.buildOrUpdateElements(S), (u = Math.max(+b.getMaxOverflow(), u)));
    }
    ((u = this._minPadding = l.layout.autoPadding ? u : 0),
      this._updateLayout(u),
      o ||
        Ft(c, (d) => {
          d.reset();
        }),
      this._updateDatasets(e),
      this.notifyPlugins("afterUpdate", { mode: e }),
      this._layers.sort(E0("z", "_idx")));
    const { _active: h, _lastEvent: p } = this;
    (p
      ? this._eventHandler(p, !0)
      : h.length && this._updateHoverStyles(h, h, !0),
      this.render());
  }
  _updateScales() {
    (Ft(this.scales, (e) => {
      qi.removeBox(this, e);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales());
  }
  _checkEventBindings() {
    const e = this.options,
      a = new Set(Object.keys(this._listeners)),
      l = new Set(e.events);
    (!Fm(a, l) || !!this._responsiveListeners !== e.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this,
      a = this._getUniformDataChanges() || [];
    for (const { method: l, start: o, count: c } of a) {
      const u = l === "_removeElements" ? -c : c;
      sS(e, o, u);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length) return;
    this._dataChanges = [];
    const a = this.data.datasets.length,
      l = (c) =>
        new Set(
          e
            .filter((u) => u[0] === c)
            .map((u, h) => h + "," + u.splice(1).join(",")),
        ),
      o = l(0);
    for (let c = 1; c < a; c++) if (!Fm(o, l(c))) return;
    return Array.from(o)
      .map((c) => c.split(","))
      .map((c) => ({ method: c[1], start: +c[2], count: +c[3] }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    qi.update(this, this.width, this.height, e);
    const a = this.chartArea,
      l = a.width <= 0 || a.height <= 0;
    ((this._layers = []),
      Ft(
        this.boxes,
        (o) => {
          (l && o.position === "chartArea") ||
            (o.configure && o.configure(), this._layers.push(...o._layers()));
        },
        this,
      ),
      this._layers.forEach((o, c) => {
        o._idx = c;
      }),
      this.notifyPlugins("afterLayout"));
  }
  _updateDatasets(e) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: e,
        cancelable: !0,
      }) !== !1
    ) {
      for (let a = 0, l = this.data.datasets.length; a < l; ++a)
        this.getDatasetMeta(a).controller.configure();
      for (let a = 0, l = this.data.datasets.length; a < l; ++a)
        this._updateDataset(a, Xi(e) ? e({ datasetIndex: a }) : e);
      this.notifyPlugins("afterDatasetsUpdate", { mode: e });
    }
  }
  _updateDataset(e, a) {
    const l = this.getDatasetMeta(e),
      o = { meta: l, index: e, mode: a, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", o) !== !1 &&
      (l.controller._update(a),
      (o.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", o));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (li.has(this)
        ? this.attached && !li.running(this) && li.start(this)
        : (this.draw(), A0({ chart: this })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: l, height: o } = this._resizeBeforeDraw;
      ((this._resizeBeforeDraw = null), this._resize(l, o));
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const a = this._layers;
    for (e = 0; e < a.length && a[e].z <= 0; ++e) a[e].draw(this.chartArea);
    for (this._drawDatasets(); e < a.length; ++e) a[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const a = this._sortedMetasets,
      l = [];
    let o, c;
    for (o = 0, c = a.length; o < c; ++o) {
      const u = a[o];
      (!e || u.visible) && l.push(u);
    }
    return l;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let a = e.length - 1; a >= 0; --a) this._drawDataset(e[a]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const a = this.ctx,
      l = { meta: e, index: e.index, cancelable: !0 },
      o = j_(this, e);
    this.notifyPlugins("beforeDatasetDraw", l) !== !1 &&
      (o && th(a, o),
      e.controller.draw(),
      o && eh(a),
      (l.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", l));
  }
  isPointInArea(e) {
    return ql(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, a, l, o) {
    const c = ix.modes[a];
    return typeof c == "function" ? c(this, e, l, o) : [];
  }
  getDatasetMeta(e) {
    const a = this.data.datasets[e],
      l = this._metasets;
    let o = l.filter((c) => c && c._dataset === a).pop();
    return (
      o ||
        ((o = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (a && a.order) || 0,
          index: e,
          _dataset: a,
          _parsed: [],
          _sorted: !1,
        }),
        l.push(o)),
      o
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Ca(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const a = this.data.datasets[e];
    if (!a) return !1;
    const l = this.getDatasetMeta(e);
    return typeof l.hidden == "boolean" ? !l.hidden : !a.hidden;
  }
  setDatasetVisibility(e, a) {
    const l = this.getDatasetMeta(e);
    l.hidden = !a;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, a, l) {
    const o = l ? "show" : "hide",
      c = this.getDatasetMeta(e),
      u = c.controller._resolveAnimations(void 0, o);
    Lr(a)
      ? ((c.data[a].hidden = !l), this.update())
      : (this.setDatasetVisibility(e, l),
        u.update(c, { visible: l }),
        this.update((h) => (h.datasetIndex === e ? o : void 0)));
  }
  hide(e, a) {
    this._updateVisibility(e, a, !1);
  }
  show(e, a) {
    this._updateVisibility(e, a, !0);
  }
  _destroyDatasetMeta(e) {
    const a = this._metasets[e];
    (a && a.controller && a.controller._destroy(), delete this._metasets[e]);
  }
  _stop() {
    let e, a;
    for (
      this.stop(), li.remove(this), e = 0, a = this.data.datasets.length;
      e < a;
      ++e
    )
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: a } = this;
    (this._stop(),
      this.config.clearCache(),
      e &&
        (this.unbindEvents(),
        Wm(e, a),
        this.platform.releaseContext(a),
        (this.canvas = null),
        (this.ctx = null)),
      delete zr[this.id],
      this.notifyPlugins("afterDestroy"));
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    (this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0));
  }
  bindUserEvents() {
    const e = this._listeners,
      a = this.platform,
      l = (c, u) => {
        (a.addEventListener(this, c, u), (e[c] = u));
      },
      o = (c, u, h) => {
        ((c.offsetX = u), (c.offsetY = h), this._eventHandler(c));
      };
    Ft(this.options.events, (c) => l(c, o));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners,
      a = this.platform,
      l = (p, d) => {
        (a.addEventListener(this, p, d), (e[p] = d));
      },
      o = (p, d) => {
        e[p] && (a.removeEventListener(this, p, d), delete e[p]);
      },
      c = (p, d) => {
        this.canvas && this.resize(p, d);
      };
    let u;
    const h = () => {
      (o("attach", h),
        (this.attached = !0),
        this.resize(),
        l("resize", c),
        l("detach", u));
    };
    ((u = () => {
      ((this.attached = !1),
        o("resize", c),
        this._stop(),
        this._resize(0, 0),
        l("attach", h));
    }),
      a.isAttached(this.canvas) ? h() : u());
  }
  unbindEvents() {
    (Ft(this._listeners, (e, a) => {
      this.platform.removeEventListener(this, a, e);
    }),
      (this._listeners = {}),
      Ft(this._responsiveListeners, (e, a) => {
        this.platform.removeEventListener(this, a, e);
      }),
      (this._responsiveListeners = void 0));
  }
  updateHoverStyle(e, a, l) {
    const o = l ? "set" : "remove";
    let c, u, h, p;
    for (
      a === "dataset" &&
        ((c = this.getDatasetMeta(e[0].datasetIndex)),
        c.controller["_" + o + "DatasetHoverStyle"]()),
        h = 0,
        p = e.length;
      h < p;
      ++h
    ) {
      u = e[h];
      const d = u && this.getDatasetMeta(u.datasetIndex).controller;
      d && d[o + "HoverStyle"](u.element, u.datasetIndex, u.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const a = this._active || [],
      l = e.map(({ datasetIndex: c, index: u }) => {
        const h = this.getDatasetMeta(c);
        if (!h) throw new Error("No dataset found at index " + c);
        return { datasetIndex: c, element: h.data[u], index: u };
      });
    !kr(l, a) &&
      ((this._active = l),
      (this._lastEvent = null),
      this._updateHoverStyles(l, a));
  }
  notifyPlugins(e, a, l) {
    return this._plugins.notify(this, e, a, l);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((a) => a.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, a, l) {
    const o = this.options.hover,
      c = (p, d) =>
        p.filter(
          (m) =>
            !d.some(
              (b) => m.datasetIndex === b.datasetIndex && m.index === b.index,
            ),
        ),
      u = c(a, e),
      h = l ? e : c(e, a);
    (u.length && this.updateHoverStyle(u, o.mode, !1),
      h.length && o.mode && this.updateHoverStyle(h, o.mode, !0));
  }
  _eventHandler(e, a) {
    const l = {
        event: e,
        replay: a,
        cancelable: !0,
        inChartArea: this.isPointInArea(e),
      },
      o = (u) =>
        (u.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", l, o) === !1) return;
    const c = this._handleEvent(e, a, l.inChartArea);
    return (
      (l.cancelable = !1),
      this.notifyPlugins("afterEvent", l, o),
      (c || l.changed) && this.render(),
      this
    );
  }
  _handleEvent(e, a, l) {
    const { _active: o = [], options: c } = this,
      u = a,
      h = this._getActiveElements(e, o, l, u),
      p = gw(e),
      d = lS(e, this._lastEvent, l, p);
    l &&
      ((this._lastEvent = null),
      Jt(c.onHover, [e, h, this], this),
      p && Jt(c.onClick, [e, h, this], this));
    const m = !kr(h, o);
    return (
      (m || a) && ((this._active = h), this._updateHoverStyles(h, o, a)),
      (this._lastEvent = d),
      m
    );
  }
  _getActiveElements(e, a, l, o) {
    if (e.type === "mouseout") return [];
    if (!l) return a;
    const c = this.options.hover;
    return this.getElementsAtEventForMode(e, c.mode, c, o);
  }
};
function O0() {
  return Ft(xs.instances, (i) => i._plugins.invalidate());
}
function Fb(i, e, a = e) {
  ((i.lineCap = Tt(a.borderCapStyle, e.borderCapStyle)),
    i.setLineDash(Tt(a.borderDash, e.borderDash)),
    (i.lineDashOffset = Tt(a.borderDashOffset, e.borderDashOffset)),
    (i.lineJoin = Tt(a.borderJoinStyle, e.borderJoinStyle)),
    (i.lineWidth = Tt(a.borderWidth, e.borderWidth)),
    (i.strokeStyle = Tt(a.borderColor, e.borderColor)));
}
function oS(i, e, a) {
  i.lineTo(a.x, a.y);
}
function rS(i) {
  return i.stepped
    ? Vw
    : i.tension || i.cubicInterpolationMode === "monotone"
      ? Gw
      : oS;
}
function Yb(i, e, a = {}) {
  const l = i.length,
    { start: o = 0, end: c = l - 1 } = a,
    { start: u, end: h } = e,
    p = Math.max(o, u),
    d = Math.min(c, h),
    m = (o < u && c < u) || (o > h && c > h);
  return {
    count: l,
    start: p,
    loop: e.loop,
    ilen: d < p && !m ? l + d - p : d - p,
  };
}
function cS(i, e, a, l) {
  const { points: o, options: c } = e,
    { count: u, start: h, loop: p, ilen: d } = Yb(o, a, l),
    m = rS(c);
  let { move: b = !0, reverse: S } = l || {},
    _,
    w,
    E;
  for (_ = 0; _ <= d; ++_)
    ((w = o[(h + (S ? d - _ : _)) % u]),
      !w.skip &&
        (b ? (i.moveTo(w.x, w.y), (b = !1)) : m(i, E, w, S, c.stepped),
        (E = w)));
  return (p && ((w = o[(h + (S ? d : 0)) % u]), m(i, E, w, S, c.stepped)), !!p);
}
function uS(i, e, a, l) {
  const o = e.points,
    { count: c, start: u, ilen: h } = Yb(o, a, l),
    { move: p = !0, reverse: d } = l || {};
  let m = 0,
    b = 0,
    S,
    _,
    w,
    E,
    A,
    C;
  const I = (Z) => (u + (d ? h - Z : Z)) % c,
    tt = () => {
      E !== A && (i.lineTo(m, A), i.lineTo(m, E), i.lineTo(m, C));
    };
  for (p && ((_ = o[I(0)]), i.moveTo(_.x, _.y)), S = 0; S <= h; ++S) {
    if (((_ = o[I(S)]), _.skip)) continue;
    const Z = _.x,
      F = _.y,
      $ = Z | 0;
    ($ === w
      ? (F < E ? (E = F) : F > A && (A = F), (m = (b * m + Z) / ++b))
      : (tt(), i.lineTo(Z, F), (w = $), (b = 0), (E = A = F)),
      (C = F));
  }
  tt();
}
function Vf(i) {
  const e = i.options,
    a = e.borderDash && e.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !a
    ? uS
    : cS;
}
function fS(i) {
  return i.stepped
    ? S_
    : i.tension || i.cubicInterpolationMode === "monotone"
      ? M_
      : ba;
}
function hS(i, e, a, l) {
  let o = e._path;
  (o || ((o = e._path = new Path2D()), e.path(o, a, l) && o.closePath()),
    Fb(i, e.options),
    i.stroke(o));
}
function dS(i, e, a, l) {
  const { segments: o, options: c } = e,
    u = Vf(e);
  for (const h of o)
    (Fb(i, c, h.style),
      i.beginPath(),
      u(i, e, h, { start: a, end: a + l - 1 }) && i.closePath(),
      i.stroke());
}
const gS = typeof Path2D == "function";
function pS(i, e, a, l) {
  gS && !e.options.segment ? hS(i, e, a, l) : dS(i, e, a, l);
}
class rh extends ws {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  };
  constructor(e) {
    (super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e));
  }
  updateControlPoints(e, a) {
    const l = this.options;
    if (
      (l.tension || l.cubicInterpolationMode === "monotone") &&
      !l.stepped &&
      !this._pointsUpdated
    ) {
      const o = l.spanGaps ? this._loop : this._fullLoop;
      (p_(this._points, l, e, o, a), (this._pointsUpdated = !0));
    }
  }
  set points(e) {
    ((this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1));
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = k_(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      a = this.points;
    return e.length && a[e[0].start];
  }
  last() {
    const e = this.segments,
      a = this.points,
      l = e.length;
    return l && a[e[l - 1].end];
  }
  interpolate(e, a) {
    const l = this.options,
      o = e[a],
      c = this.points,
      u = O_(this, { property: a, start: o, end: o });
    if (!u.length) return;
    const h = [],
      p = fS(l);
    let d, m;
    for (d = 0, m = u.length; d < m; ++d) {
      const { start: b, end: S } = u[d],
        _ = c[b],
        w = c[S];
      if (_ === w) {
        h.push(_);
        continue;
      }
      const E = Math.abs((o - _[a]) / (w[a] - _[a])),
        A = p(_, w, E, l.stepped);
      ((A[a] = e[a]), h.push(A));
    }
    return h.length === 1 ? h[0] : h;
  }
  pathSegment(e, a, l) {
    return Vf(this)(e, this, a, l);
  }
  path(e, a, l) {
    const o = this.segments,
      c = Vf(this);
    let u = this._loop;
    ((a = a || 0), (l = l || this.points.length - a));
    for (const h of o) u &= c(e, this, h, { start: a, end: a + l - 1 });
    return !!u;
  }
  draw(e, a, l, o) {
    const c = this.options || {};
    ((this.points || []).length &&
      c.borderWidth &&
      (e.save(), pS(e, this, l, o), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
  }
}
function D0(i, e, a, l) {
  const o = i.options,
    { [a]: c } = i.getProps([a], l);
  return Math.abs(e - c) < o.radius + o.hitRadius;
}
class ch extends ws {
  static id = "point";
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  constructor(e) {
    (super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e));
  }
  inRange(e, a, l) {
    const o = this.options,
      { x: c, y: u } = this.getProps(["x", "y"], l);
    return (
      Math.pow(e - c, 2) + Math.pow(a - u, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    );
  }
  inXRange(e, a) {
    return D0(this, e, "x", a);
  }
  inYRange(e, a) {
    return D0(this, e, "y", a);
  }
  getCenterPoint(e) {
    const { x: a, y: l } = this.getProps(["x", "y"], e);
    return { x: a, y: l };
  }
  size(e) {
    e = e || this.options || {};
    let a = e.radius || 0;
    a = Math.max(a, (a && e.hoverRadius) || 0);
    const l = (a && e.borderWidth) || 0;
    return (a + l) * 2;
  }
  draw(e, a) {
    const l = this.options;
    this.skip ||
      l.radius < 0.1 ||
      !ql(this, a, this.size(l) / 2) ||
      ((e.strokeStyle = l.borderColor),
      (e.lineWidth = l.borderWidth),
      (e.fillStyle = l.backgroundColor),
      Uf(e, l, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
const z0 = (i, e) => {
    let { boxHeight: a = e, boxWidth: l = e } = i;
    return (
      i.usePointStyle &&
        ((a = Math.min(a, e)), (l = i.pointStyleWidth || Math.min(l, e))),
      { boxWidth: l, boxHeight: a, itemHeight: Math.max(e, a) }
    );
  },
  mS = (i, e) =>
    i !== null &&
    e !== null &&
    i.datasetIndex === e.datasetIndex &&
    i.index === e.index;
class k0 extends ws {
  constructor(e) {
    (super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(e, a, l) {
    ((this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = l),
      this.setDimensions(),
      this.buildLabels(),
      this.fit());
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let a = Jt(e.generateLabels, [this.chart], this) || [];
    (e.filter && (a = a.filter((l) => e.filter(l, this.chart.data))),
      e.sort && (a = a.sort((l, o) => e.sort(l, o, this.chart.data))),
      this.options.reverse && a.reverse(),
      (this.legendItems = a));
  }
  fit() {
    const { options: e, ctx: a } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const l = e.labels,
      o = Ge(l.font),
      c = o.size,
      u = this._computeTitleHeight(),
      { boxWidth: h, itemHeight: p } = z0(l, c);
    let d, m;
    ((a.font = o.string),
      this.isHorizontal()
        ? ((d = this.maxWidth), (m = this._fitRows(u, c, h, p) + 10))
        : ((m = this.maxHeight), (d = this._fitCols(u, o, h, p) + 10)),
      (this.width = Math.min(d, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(m, e.maxHeight || this.maxHeight)));
  }
  _fitRows(e, a, l, o) {
    const {
        ctx: c,
        maxWidth: u,
        options: {
          labels: { padding: h },
        },
      } = this,
      p = (this.legendHitBoxes = []),
      d = (this.lineWidths = [0]),
      m = o + h;
    let b = e;
    ((c.textAlign = "left"), (c.textBaseline = "middle"));
    let S = -1,
      _ = -m;
    return (
      this.legendItems.forEach((w, E) => {
        const A = l + a / 2 + c.measureText(w.text).width;
        ((E === 0 || d[d.length - 1] + A + 2 * h > u) &&
          ((b += m), (d[d.length - (E > 0 ? 0 : 1)] = 0), (_ += m), S++),
          (p[E] = { left: 0, top: _, row: S, width: A, height: o }),
          (d[d.length - 1] += A + h));
      }),
      b
    );
  }
  _fitCols(e, a, l, o) {
    const {
        ctx: c,
        maxHeight: u,
        options: {
          labels: { padding: h },
        },
      } = this,
      p = (this.legendHitBoxes = []),
      d = (this.columnSizes = []),
      m = u - e;
    let b = h,
      S = 0,
      _ = 0,
      w = 0,
      E = 0;
    return (
      this.legendItems.forEach((A, C) => {
        const { itemWidth: I, itemHeight: tt } = bS(l, a, c, A, o);
        (C > 0 &&
          _ + tt + 2 * h > m &&
          ((b += S + h),
          d.push({ width: S, height: _ }),
          (w += S + h),
          E++,
          (S = _ = 0)),
          (p[C] = { left: w, top: _, col: E, width: I, height: tt }),
          (S = Math.max(S, I)),
          (_ += tt + h));
      }),
      (b += S),
      d.push({ width: S, height: _ }),
      b
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: a,
        options: {
          align: l,
          labels: { padding: o },
          rtl: c,
        },
      } = this,
      u = ds(c, this.left, this.width);
    if (this.isHorizontal()) {
      let h = 0,
        p = tn(l, this.left + o, this.right - this.lineWidths[h]);
      for (const d of a)
        (h !== d.row &&
          ((h = d.row),
          (p = tn(l, this.left + o, this.right - this.lineWidths[h]))),
          (d.top += this.top + e + o),
          (d.left = u.leftForLtr(u.x(p), d.width)),
          (p += d.width + o));
    } else {
      let h = 0,
        p = tn(l, this.top + e + o, this.bottom - this.columnSizes[h].height);
      for (const d of a)
        (d.col !== h &&
          ((h = d.col),
          (p = tn(
            l,
            this.top + e + o,
            this.bottom - this.columnSizes[h].height,
          ))),
          (d.top = p),
          (d.left += this.left + o),
          (d.left = u.leftForLtr(u.x(d.left), d.width)),
          (p += d.height + o));
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      (th(e, this), this._draw(), eh(e));
    }
  }
  _draw() {
    const { options: e, columnSizes: a, lineWidths: l, ctx: o } = this,
      { align: c, labels: u } = e,
      h = ce.color,
      p = ds(e.rtl, this.left, this.width),
      d = Ge(u.font),
      { padding: m } = u,
      b = d.size,
      S = b / 2;
    let _;
    (this.drawTitle(),
      (o.textAlign = p.textAlign("left")),
      (o.textBaseline = "middle"),
      (o.lineWidth = 0.5),
      (o.font = d.string));
    const { boxWidth: w, boxHeight: E, itemHeight: A } = z0(u, b),
      C = function ($, T, x) {
        if (isNaN(w) || w <= 0 || isNaN(E) || E < 0) return;
        o.save();
        const v = Tt(x.lineWidth, 1);
        if (
          ((o.fillStyle = Tt(x.fillStyle, h)),
          (o.lineCap = Tt(x.lineCap, "butt")),
          (o.lineDashOffset = Tt(x.lineDashOffset, 0)),
          (o.lineJoin = Tt(x.lineJoin, "miter")),
          (o.lineWidth = v),
          (o.strokeStyle = Tt(x.strokeStyle, h)),
          o.setLineDash(Tt(x.lineDash, [])),
          u.usePointStyle)
        ) {
          const H = {
              radius: (E * Math.SQRT2) / 2,
              pointStyle: x.pointStyle,
              rotation: x.rotation,
              borderWidth: v,
            },
            R = p.xPlus($, w / 2),
            B = T + S;
          vb(o, H, R, B, u.pointStyleWidth && w);
        } else {
          const H = T + Math.max((b - E) / 2, 0),
            R = p.leftForLtr($, w),
            B = jl(x.borderRadius);
          (o.beginPath(),
            Object.values(B).some((J) => J !== 0)
              ? qf(o, { x: R, y: H, w, h: E, radius: B })
              : o.rect(R, H, w, E),
            o.fill(),
            v !== 0 && o.stroke());
        }
        o.restore();
      },
      I = function ($, T, x) {
        Hr(o, x.text, $, T + A / 2, d, {
          strikethrough: x.hidden,
          textAlign: p.textAlign(x.textAlign),
        });
      },
      tt = this.isHorizontal(),
      Z = this._computeTitleHeight();
    (tt
      ? (_ = {
          x: tn(c, this.left + m, this.right - l[0]),
          y: this.top + m + Z,
          line: 0,
        })
      : (_ = {
          x: this.left + m,
          y: tn(c, this.top + Z + m, this.bottom - a[0].height),
          line: 0,
        }),
      Eb(this.ctx, e.textDirection));
    const F = A + m;
    (this.legendItems.forEach(($, T) => {
      ((o.strokeStyle = $.fontColor), (o.fillStyle = $.fontColor));
      const x = o.measureText($.text).width,
        v = p.textAlign($.textAlign || ($.textAlign = u.textAlign)),
        H = w + S + x;
      let R = _.x,
        B = _.y;
      (p.setWidth(this.width),
        tt
          ? T > 0 &&
            R + H + m > this.right &&
            ((B = _.y += F),
            _.line++,
            (R = _.x = tn(c, this.left + m, this.right - l[_.line])))
          : T > 0 &&
            B + F > this.bottom &&
            ((R = _.x = R + a[_.line].width + m),
            _.line++,
            (B = _.y =
              tn(c, this.top + Z + m, this.bottom - a[_.line].height))));
      const J = p.x(R);
      if (
        (C(J, B, $),
        (R = Dw(v, R + w + S, tt ? R + H : this.right, e.rtl)),
        I(p.x(R), B, $),
        tt)
      )
        _.x += H + m;
      else if (typeof $.text != "string") {
        const st = d.lineHeight;
        _.y += Vb($, st) + m;
      } else _.y += F;
    }),
      Ab(this.ctx, e.textDirection));
  }
  drawTitle() {
    const e = this.options,
      a = e.title,
      l = Ge(a.font),
      o = An(a.padding);
    if (!a.display) return;
    const c = ds(e.rtl, this.left, this.width),
      u = this.ctx,
      h = a.position,
      p = l.size / 2,
      d = o.top + p;
    let m,
      b = this.left,
      S = this.width;
    if (this.isHorizontal())
      ((S = Math.max(...this.lineWidths)),
        (m = this.top + d),
        (b = tn(e.align, b, this.right - S)));
    else {
      const w = this.columnSizes.reduce((E, A) => Math.max(E, A.height), 0);
      m =
        d +
        tn(
          e.align,
          this.top,
          this.bottom - w - e.labels.padding - this._computeTitleHeight(),
        );
    }
    const _ = tn(h, b, b + S);
    ((u.textAlign = c.textAlign(mb(h))),
      (u.textBaseline = "middle"),
      (u.strokeStyle = a.color),
      (u.fillStyle = a.color),
      (u.font = l.string),
      Hr(u, a.text, _, m, l));
  }
  _computeTitleHeight() {
    const e = this.options.title,
      a = Ge(e.font),
      l = An(e.padding);
    return e.display ? a.lineHeight + l.height : 0;
  }
  _getLegendItemAt(e, a) {
    let l, o, c;
    if (Ol(e, this.left, this.right) && Ol(a, this.top, this.bottom)) {
      for (c = this.legendHitBoxes, l = 0; l < c.length; ++l)
        if (
          ((o = c[l]),
          Ol(e, o.left, o.left + o.width) && Ol(a, o.top, o.top + o.height))
        )
          return this.legendItems[l];
    }
    return null;
  }
  handleEvent(e) {
    const a = this.options;
    if (!wS(e.type, a)) return;
    const l = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const o = this._hoveredItem,
        c = mS(o, l);
      (o && !c && Jt(a.onLeave, [e, o, this], this),
        (this._hoveredItem = l),
        l && !c && Jt(a.onHover, [e, l, this], this));
    } else l && Jt(a.onClick, [e, l, this], this);
  }
}
function bS(i, e, a, l, o) {
  const c = yS(l, i, e, a),
    u = vS(o, l, e.lineHeight);
  return { itemWidth: c, itemHeight: u };
}
function yS(i, e, a, l) {
  let o = i.text;
  return (
    o &&
      typeof o != "string" &&
      (o = o.reduce((c, u) => (c.length > u.length ? c : u))),
    e + a.size / 2 + l.measureText(o).width
  );
}
function vS(i, e, a) {
  let l = i;
  return (typeof e.text != "string" && (l = Vb(e, a)), l);
}
function Vb(i, e) {
  const a = i.text ? i.text.length : 0;
  return e * a;
}
function wS(i, e) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (i === "click" || i === "mouseup"))
  );
}
var uh = {
  id: "legend",
  _element: k0,
  start(i, e, a) {
    const l = (i.legend = new k0({ ctx: i.ctx, options: a, chart: i }));
    (qi.configure(i, l, a), qi.addBox(i, l));
  },
  stop(i) {
    (qi.removeBox(i, i.legend), delete i.legend);
  },
  beforeUpdate(i, e, a) {
    const l = i.legend;
    (qi.configure(i, l, a), (l.options = a));
  },
  afterUpdate(i) {
    const e = i.legend;
    (e.buildLabels(), e.adjustHitBoxes());
  },
  afterEvent(i, e) {
    e.replay || i.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, e, a) {
      const l = e.datasetIndex,
        o = a.chart;
      o.isDatasetVisible(l)
        ? (o.hide(l), (e.hidden = !0))
        : (o.show(l), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const e = i.data.datasets,
          {
            labels: {
              usePointStyle: a,
              pointStyle: l,
              textAlign: o,
              color: c,
              useBorderRadius: u,
              borderRadius: h,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((p) => {
          const d = p.controller.getStyle(a ? 0 : void 0),
            m = An(d.borderWidth);
          return {
            text: e[p.index].label,
            fillStyle: d.backgroundColor,
            fontColor: c,
            hidden: !p.visible,
            lineCap: d.borderCapStyle,
            lineDash: d.borderDash,
            lineDashOffset: d.borderDashOffset,
            lineJoin: d.borderJoinStyle,
            lineWidth: (m.width + m.height) / 4,
            strokeStyle: d.borderColor,
            pointStyle: l || d.pointStyle,
            rotation: d.rotation,
            textAlign: o || d.textAlign,
            borderRadius: u && (h || d.borderRadius),
            datasetIndex: p.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
const zl = {
  average(i) {
    if (!i.length) return !1;
    let e,
      a,
      l = new Set(),
      o = 0,
      c = 0;
    for (e = 0, a = i.length; e < a; ++e) {
      const h = i[e].element;
      if (h && h.hasValue()) {
        const p = h.tooltipPosition();
        (l.add(p.x), (o += p.y), ++c);
      }
    }
    return c === 0 || l.size === 0
      ? !1
      : { x: [...l].reduce((h, p) => h + p) / l.size, y: o / c };
  },
  nearest(i, e) {
    if (!i.length) return !1;
    let a = e.x,
      l = e.y,
      o = Number.POSITIVE_INFINITY,
      c,
      u,
      h;
    for (c = 0, u = i.length; c < u; ++c) {
      const p = i[c].element;
      if (p && p.hasValue()) {
        const d = p.getCenterPoint(),
          m = Hf(e, d);
        m < o && ((o = m), (h = p));
      }
    }
    if (h) {
      const p = h.tooltipPosition();
      ((a = p.x), (l = p.y));
    }
    return { x: a, y: l };
  },
};
function Bn(i, e) {
  return (e && (Ee(e) ? Array.prototype.push.apply(i, e) : i.push(e)), i);
}
function oi(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function _S(i, e) {
  const { element: a, datasetIndex: l, index: o } = e,
    c = i.getDatasetMeta(l).controller,
    { label: u, value: h } = c.getLabelAndValue(o);
  return {
    chart: i,
    label: u,
    parsed: c.getParsed(o),
    raw: i.data.datasets[l].data[o],
    formattedValue: h,
    dataset: c.getDataset(),
    dataIndex: o,
    datasetIndex: l,
    element: a,
  };
}
function R0(i, e) {
  const a = i.chart.ctx,
    { body: l, footer: o, title: c } = i,
    { boxWidth: u, boxHeight: h } = e,
    p = Ge(e.bodyFont),
    d = Ge(e.titleFont),
    m = Ge(e.footerFont),
    b = c.length,
    S = o.length,
    _ = l.length,
    w = An(e.padding);
  let E = w.height,
    A = 0,
    C = l.reduce(
      (Z, F) => Z + F.before.length + F.lines.length + F.after.length,
      0,
    );
  if (
    ((C += i.beforeBody.length + i.afterBody.length),
    b &&
      (E += b * d.lineHeight + (b - 1) * e.titleSpacing + e.titleMarginBottom),
    C)
  ) {
    const Z = e.displayColors ? Math.max(h, p.lineHeight) : p.lineHeight;
    E += _ * Z + (C - _) * p.lineHeight + (C - 1) * e.bodySpacing;
  }
  S && (E += e.footerMarginTop + S * m.lineHeight + (S - 1) * e.footerSpacing);
  let I = 0;
  const tt = function (Z) {
    A = Math.max(A, a.measureText(Z).width + I);
  };
  return (
    a.save(),
    (a.font = d.string),
    Ft(i.title, tt),
    (a.font = p.string),
    Ft(i.beforeBody.concat(i.afterBody), tt),
    (I = e.displayColors ? u + 2 + e.boxPadding : 0),
    Ft(l, (Z) => {
      (Ft(Z.before, tt), Ft(Z.lines, tt), Ft(Z.after, tt));
    }),
    (I = 0),
    (a.font = m.string),
    Ft(i.footer, tt),
    a.restore(),
    (A += w.width),
    { width: A, height: E }
  );
}
function xS(i, e) {
  const { y: a, height: l } = e;
  return a < l / 2 ? "top" : a > i.height - l / 2 ? "bottom" : "center";
}
function SS(i, e, a, l) {
  const { x: o, width: c } = l,
    u = a.caretSize + a.caretPadding;
  if ((i === "left" && o + c + u > e.width) || (i === "right" && o - c - u < 0))
    return !0;
}
function MS(i, e, a, l) {
  const { x: o, width: c } = a,
    {
      width: u,
      chartArea: { left: h, right: p },
    } = i;
  let d = "center";
  return (
    l === "center"
      ? (d = o <= (h + p) / 2 ? "left" : "right")
      : o <= c / 2
        ? (d = "left")
        : o >= u - c / 2 && (d = "right"),
    SS(d, i, e, a) && (d = "center"),
    d
  );
}
function B0(i, e, a) {
  const l = a.yAlign || e.yAlign || xS(i, a);
  return { xAlign: a.xAlign || e.xAlign || MS(i, e, a, l), yAlign: l };
}
function CS(i, e) {
  let { x: a, width: l } = i;
  return (e === "right" ? (a -= l) : e === "center" && (a -= l / 2), a);
}
function ES(i, e, a) {
  let { y: l, height: o } = i;
  return (
    e === "top" ? (l += a) : e === "bottom" ? (l -= o + a) : (l -= o / 2),
    l
  );
}
function L0(i, e, a, l) {
  const { caretSize: o, caretPadding: c, cornerRadius: u } = i,
    { xAlign: h, yAlign: p } = a,
    d = o + c,
    { topLeft: m, topRight: b, bottomLeft: S, bottomRight: _ } = jl(u);
  let w = CS(e, h);
  const E = ES(e, p, d);
  return (
    p === "center"
      ? h === "left"
        ? (w += d)
        : h === "right" && (w -= d)
      : h === "left"
        ? (w -= Math.max(m, S) + o)
        : h === "right" && (w += Math.max(b, _) + o),
    { x: vn(w, 0, l.width - e.width), y: vn(E, 0, l.height - e.height) }
  );
}
function Cr(i, e, a) {
  const l = An(a.padding);
  return e === "center"
    ? i.x + i.width / 2
    : e === "right"
      ? i.x + i.width - l.right
      : i.x + l.left;
}
function j0(i) {
  return Bn([], oi(i));
}
function AS(i, e, a) {
  return Ca(i, { tooltip: e, tooltipItems: a, type: "tooltip" });
}
function H0(i, e) {
  const a = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return a ? i.override(a) : i;
}
const Gb = {
  beforeTitle: ai,
  title(i) {
    if (i.length > 0) {
      const e = i[0],
        a = e.chart.data.labels,
        l = a ? a.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (l > 0 && e.dataIndex < l) return a[e.dataIndex];
    }
    return "";
  },
  afterTitle: ai,
  beforeBody: ai,
  beforeLabel: ai,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let e = i.dataset.label || "";
    e && (e += ": ");
    const a = i.formattedValue;
    return (Pt(a) || (e += a), e);
  },
  labelColor(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: a.borderColor,
      backgroundColor: a.backgroundColor,
      borderWidth: a.borderWidth,
      borderDash: a.borderDash,
      borderDashOffset: a.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: a.pointStyle, rotation: a.rotation };
  },
  afterLabel: ai,
  afterBody: ai,
  beforeFooter: ai,
  footer: ai,
  afterFooter: ai,
};
function Ye(i, e, a, l) {
  const o = i[e].call(a, l);
  return typeof o > "u" ? Gb[e].call(a, l) : o;
}
class N0 extends ws {
  static positioners = zl;
  constructor(e) {
    (super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0));
  }
  initialize(e) {
    ((this.options = e),
      (this._cachedAnimations = void 0),
      (this.$context = void 0));
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const a = this.chart,
      l = this.options.setContext(this.getContext()),
      o = l.enabled && a.options.animation && l.animations,
      c = new Ob(this.chart, o);
    return (o._cacheable && (this._cachedAnimations = Object.freeze(c)), c);
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = AS(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(e, a) {
    const { callbacks: l } = a,
      o = Ye(l, "beforeTitle", this, e),
      c = Ye(l, "title", this, e),
      u = Ye(l, "afterTitle", this, e);
    let h = [];
    return ((h = Bn(h, oi(o))), (h = Bn(h, oi(c))), (h = Bn(h, oi(u))), h);
  }
  getBeforeBody(e, a) {
    return j0(Ye(a.callbacks, "beforeBody", this, e));
  }
  getBody(e, a) {
    const { callbacks: l } = a,
      o = [];
    return (
      Ft(e, (c) => {
        const u = { before: [], lines: [], after: [] },
          h = H0(l, c);
        (Bn(u.before, oi(Ye(h, "beforeLabel", this, c))),
          Bn(u.lines, Ye(h, "label", this, c)),
          Bn(u.after, oi(Ye(h, "afterLabel", this, c))),
          o.push(u));
      }),
      o
    );
  }
  getAfterBody(e, a) {
    return j0(Ye(a.callbacks, "afterBody", this, e));
  }
  getFooter(e, a) {
    const { callbacks: l } = a,
      o = Ye(l, "beforeFooter", this, e),
      c = Ye(l, "footer", this, e),
      u = Ye(l, "afterFooter", this, e);
    let h = [];
    return ((h = Bn(h, oi(o))), (h = Bn(h, oi(c))), (h = Bn(h, oi(u))), h);
  }
  _createItems(e) {
    const a = this._active,
      l = this.chart.data,
      o = [],
      c = [],
      u = [];
    let h = [],
      p,
      d;
    for (p = 0, d = a.length; p < d; ++p) h.push(_S(this.chart, a[p]));
    return (
      e.filter && (h = h.filter((m, b, S) => e.filter(m, b, S, l))),
      e.itemSort && (h = h.sort((m, b) => e.itemSort(m, b, l))),
      Ft(h, (m) => {
        const b = H0(e.callbacks, m);
        (o.push(Ye(b, "labelColor", this, m)),
          c.push(Ye(b, "labelPointStyle", this, m)),
          u.push(Ye(b, "labelTextColor", this, m)));
      }),
      (this.labelColors = o),
      (this.labelPointStyles = c),
      (this.labelTextColors = u),
      (this.dataPoints = h),
      h
    );
  }
  update(e, a) {
    const l = this.options.setContext(this.getContext()),
      o = this._active;
    let c,
      u = [];
    if (!o.length) this.opacity !== 0 && (c = { opacity: 0 });
    else {
      const h = zl[l.position].call(this, o, this._eventPosition);
      ((u = this._createItems(l)),
        (this.title = this.getTitle(u, l)),
        (this.beforeBody = this.getBeforeBody(u, l)),
        (this.body = this.getBody(u, l)),
        (this.afterBody = this.getAfterBody(u, l)),
        (this.footer = this.getFooter(u, l)));
      const p = (this._size = R0(this, l)),
        d = Object.assign({}, h, p),
        m = B0(this.chart, l, d),
        b = L0(l, d, m, this.chart);
      ((this.xAlign = m.xAlign),
        (this.yAlign = m.yAlign),
        (c = {
          opacity: 1,
          x: b.x,
          y: b.y,
          width: p.width,
          height: p.height,
          caretX: h.x,
          caretY: h.y,
        }));
    }
    ((this._tooltipItems = u),
      (this.$context = void 0),
      c && this._resolveAnimations().update(this, c),
      e &&
        l.external &&
        l.external.call(this, { chart: this.chart, tooltip: this, replay: a }));
  }
  drawCaret(e, a, l, o) {
    const c = this.getCaretPosition(e, l, o);
    (a.lineTo(c.x1, c.y1), a.lineTo(c.x2, c.y2), a.lineTo(c.x3, c.y3));
  }
  getCaretPosition(e, a, l) {
    const { xAlign: o, yAlign: c } = this,
      { caretSize: u, cornerRadius: h } = l,
      { topLeft: p, topRight: d, bottomLeft: m, bottomRight: b } = jl(h),
      { x: S, y: _ } = e,
      { width: w, height: E } = a;
    let A, C, I, tt, Z, F;
    return (
      c === "center"
        ? ((Z = _ + E / 2),
          o === "left"
            ? ((A = S), (C = A - u), (tt = Z + u), (F = Z - u))
            : ((A = S + w), (C = A + u), (tt = Z - u), (F = Z + u)),
          (I = A))
        : (o === "left"
            ? (C = S + Math.max(p, m) + u)
            : o === "right"
              ? (C = S + w - Math.max(d, b) - u)
              : (C = this.caretX),
          c === "top"
            ? ((tt = _), (Z = tt - u), (A = C - u), (I = C + u))
            : ((tt = _ + E), (Z = tt + u), (A = C + u), (I = C - u)),
          (F = tt)),
      { x1: A, x2: C, x3: I, y1: tt, y2: Z, y3: F }
    );
  }
  drawTitle(e, a, l) {
    const o = this.title,
      c = o.length;
    let u, h, p;
    if (c) {
      const d = ds(l.rtl, this.x, this.width);
      for (
        e.x = Cr(this, l.titleAlign, l),
          a.textAlign = d.textAlign(l.titleAlign),
          a.textBaseline = "middle",
          u = Ge(l.titleFont),
          h = l.titleSpacing,
          a.fillStyle = l.titleColor,
          a.font = u.string,
          p = 0;
        p < c;
        ++p
      )
        (a.fillText(o[p], d.x(e.x), e.y + u.lineHeight / 2),
          (e.y += u.lineHeight + h),
          p + 1 === c && (e.y += l.titleMarginBottom - h));
    }
  }
  _drawColorBox(e, a, l, o, c) {
    const u = this.labelColors[l],
      h = this.labelPointStyles[l],
      { boxHeight: p, boxWidth: d } = c,
      m = Ge(c.bodyFont),
      b = Cr(this, "left", c),
      S = o.x(b),
      _ = p < m.lineHeight ? (m.lineHeight - p) / 2 : 0,
      w = a.y + _;
    if (c.usePointStyle) {
      const E = {
          radius: Math.min(d, p) / 2,
          pointStyle: h.pointStyle,
          rotation: h.rotation,
          borderWidth: 1,
        },
        A = o.leftForLtr(S, d) + d / 2,
        C = w + p / 2;
      ((e.strokeStyle = c.multiKeyBackground),
        (e.fillStyle = c.multiKeyBackground),
        Uf(e, E, A, C),
        (e.strokeStyle = u.borderColor),
        (e.fillStyle = u.backgroundColor),
        Uf(e, E, A, C));
    } else {
      ((e.lineWidth = Lt(u.borderWidth)
        ? Math.max(...Object.values(u.borderWidth))
        : u.borderWidth || 1),
        (e.strokeStyle = u.borderColor),
        e.setLineDash(u.borderDash || []),
        (e.lineDashOffset = u.borderDashOffset || 0));
      const E = o.leftForLtr(S, d),
        A = o.leftForLtr(o.xPlus(S, 1), d - 2),
        C = jl(u.borderRadius);
      Object.values(C).some((I) => I !== 0)
        ? (e.beginPath(),
          (e.fillStyle = c.multiKeyBackground),
          qf(e, { x: E, y: w, w: d, h: p, radius: C }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = u.backgroundColor),
          e.beginPath(),
          qf(e, { x: A, y: w + 1, w: d - 2, h: p - 2, radius: C }),
          e.fill())
        : ((e.fillStyle = c.multiKeyBackground),
          e.fillRect(E, w, d, p),
          e.strokeRect(E, w, d, p),
          (e.fillStyle = u.backgroundColor),
          e.fillRect(A, w + 1, d - 2, p - 2));
    }
    e.fillStyle = this.labelTextColors[l];
  }
  drawBody(e, a, l) {
    const { body: o } = this,
      {
        bodySpacing: c,
        bodyAlign: u,
        displayColors: h,
        boxHeight: p,
        boxWidth: d,
        boxPadding: m,
      } = l,
      b = Ge(l.bodyFont);
    let S = b.lineHeight,
      _ = 0;
    const w = ds(l.rtl, this.x, this.width),
      E = function (x) {
        (a.fillText(x, w.x(e.x + _), e.y + S / 2), (e.y += S + c));
      },
      A = w.textAlign(u);
    let C, I, tt, Z, F, $, T;
    for (
      a.textAlign = u,
        a.textBaseline = "middle",
        a.font = b.string,
        e.x = Cr(this, A, l),
        a.fillStyle = l.bodyColor,
        Ft(this.beforeBody, E),
        _ = h && A !== "right" ? (u === "center" ? d / 2 + m : d + 2 + m) : 0,
        Z = 0,
        $ = o.length;
      Z < $;
      ++Z
    ) {
      for (
        C = o[Z],
          I = this.labelTextColors[Z],
          a.fillStyle = I,
          Ft(C.before, E),
          tt = C.lines,
          h &&
            tt.length &&
            (this._drawColorBox(a, e, Z, w, l),
            (S = Math.max(b.lineHeight, p))),
          F = 0,
          T = tt.length;
        F < T;
        ++F
      )
        (E(tt[F]), (S = b.lineHeight));
      Ft(C.after, E);
    }
    ((_ = 0), (S = b.lineHeight), Ft(this.afterBody, E), (e.y -= c));
  }
  drawFooter(e, a, l) {
    const o = this.footer,
      c = o.length;
    let u, h;
    if (c) {
      const p = ds(l.rtl, this.x, this.width);
      for (
        e.x = Cr(this, l.footerAlign, l),
          e.y += l.footerMarginTop,
          a.textAlign = p.textAlign(l.footerAlign),
          a.textBaseline = "middle",
          u = Ge(l.footerFont),
          a.fillStyle = l.footerColor,
          a.font = u.string,
          h = 0;
        h < c;
        ++h
      )
        (a.fillText(o[h], p.x(e.x), e.y + u.lineHeight / 2),
          (e.y += u.lineHeight + l.footerSpacing));
    }
  }
  drawBackground(e, a, l, o) {
    const { xAlign: c, yAlign: u } = this,
      { x: h, y: p } = e,
      { width: d, height: m } = l,
      {
        topLeft: b,
        topRight: S,
        bottomLeft: _,
        bottomRight: w,
      } = jl(o.cornerRadius);
    ((a.fillStyle = o.backgroundColor),
      (a.strokeStyle = o.borderColor),
      (a.lineWidth = o.borderWidth),
      a.beginPath(),
      a.moveTo(h + b, p),
      u === "top" && this.drawCaret(e, a, l, o),
      a.lineTo(h + d - S, p),
      a.quadraticCurveTo(h + d, p, h + d, p + S),
      u === "center" && c === "right" && this.drawCaret(e, a, l, o),
      a.lineTo(h + d, p + m - w),
      a.quadraticCurveTo(h + d, p + m, h + d - w, p + m),
      u === "bottom" && this.drawCaret(e, a, l, o),
      a.lineTo(h + _, p + m),
      a.quadraticCurveTo(h, p + m, h, p + m - _),
      u === "center" && c === "left" && this.drawCaret(e, a, l, o),
      a.lineTo(h, p + b),
      a.quadraticCurveTo(h, p, h + b, p),
      a.closePath(),
      a.fill(),
      o.borderWidth > 0 && a.stroke());
  }
  _updateAnimationTarget(e) {
    const a = this.chart,
      l = this.$animations,
      o = l && l.x,
      c = l && l.y;
    if (o || c) {
      const u = zl[e.position].call(this, this._active, this._eventPosition);
      if (!u) return;
      const h = (this._size = R0(this, e)),
        p = Object.assign({}, u, this._size),
        d = B0(a, e, p),
        m = L0(e, p, d, a);
      (o._to !== m.x || c._to !== m.y) &&
        ((this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (this.width = h.width),
        (this.height = h.height),
        (this.caretX = u.x),
        (this.caretY = u.y),
        this._resolveAnimations().update(this, m));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const a = this.options.setContext(this.getContext());
    let l = this.opacity;
    if (!l) return;
    this._updateAnimationTarget(a);
    const o = { width: this.width, height: this.height },
      c = { x: this.x, y: this.y };
    l = Math.abs(l) < 0.001 ? 0 : l;
    const u = An(a.padding),
      h =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    a.enabled &&
      h &&
      (e.save(),
      (e.globalAlpha = l),
      this.drawBackground(c, e, o, a),
      Eb(e, a.textDirection),
      (c.y += u.top),
      this.drawTitle(c, e, a),
      this.drawBody(c, e, a),
      this.drawFooter(c, e, a),
      Ab(e, a.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, a) {
    const l = this._active,
      o = e.map(({ datasetIndex: h, index: p }) => {
        const d = this.chart.getDatasetMeta(h);
        if (!d) throw new Error("Cannot find a dataset at index " + h);
        return { datasetIndex: h, element: d.data[p], index: p };
      }),
      c = !kr(l, o),
      u = this._positionChanged(o, a);
    (c || u) &&
      ((this._active = o),
      (this._eventPosition = a),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, a, l = !0) {
    if (a && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const o = this.options,
      c = this._active || [],
      u = this._getActiveElements(e, c, a, l),
      h = this._positionChanged(u, e),
      p = a || !kr(u, c) || h;
    return (
      p &&
        ((this._active = u),
        (o.enabled || o.external) &&
          ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, a))),
      p
    );
  }
  _getActiveElements(e, a, l, o) {
    const c = this.options;
    if (e.type === "mouseout") return [];
    if (!o)
      return a.filter(
        (h) =>
          this.chart.data.datasets[h.datasetIndex] &&
          this.chart
            .getDatasetMeta(h.datasetIndex)
            .controller.getParsed(h.index) !== void 0,
      );
    const u = this.chart.getElementsAtEventForMode(e, c.mode, c, l);
    return (c.reverse && u.reverse(), u);
  }
  _positionChanged(e, a) {
    const { caretX: l, caretY: o, options: c } = this,
      u = zl[c.position].call(this, e, a);
    return u !== !1 && (l !== u.x || o !== u.y);
  }
}
var fh = {
  id: "tooltip",
  _element: N0,
  positioners: zl,
  afterInit(i, e, a) {
    a && (i.tooltip = new N0({ chart: i, options: a }));
  },
  beforeUpdate(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  reset(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  afterDraw(i) {
    const e = i.tooltip;
    if (e && e._willRender()) {
      const a = { tooltip: e };
      if (i.notifyPlugins("beforeTooltipDraw", { ...a, cancelable: !0 }) === !1)
        return;
      (e.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", a));
    }
  },
  afterEvent(i, e) {
    if (i.tooltip) {
      const a = e.replay;
      i.tooltip.handleEvent(e.event, a, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, e) => e.bodyFont.size,
    boxWidth: (i, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Gb,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const TS = (i, e, a, l) => (
  typeof e == "string"
    ? ((a = i.push(e) - 1), l.unshift({ index: a, label: e }))
    : isNaN(e) && (a = null),
  a
);
function OS(i, e, a, l) {
  const o = i.indexOf(e);
  if (o === -1) return TS(i, e, a, l);
  const c = i.lastIndexOf(e);
  return o !== c ? a : o;
}
const DS = (i, e) => (i === null ? null : vn(Math.round(i), 0, e));
function U0(i) {
  const e = this.getLabels();
  return i >= 0 && i < e.length ? e[i] : i;
}
class hh extends _s {
  static id = "category";
  static defaults = { ticks: { callback: U0 } };
  constructor(e) {
    (super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []));
  }
  init(e) {
    const a = this._addedLabels;
    if (a.length) {
      const l = this.getLabels();
      for (const { index: o, label: c } of a) l[o] === c && l.splice(o, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, a) {
    if (Pt(e)) return null;
    const l = this.getLabels();
    return (
      (a =
        isFinite(a) && l[a] === e ? a : OS(l, e, Tt(a, e), this._addedLabels)),
      DS(a, l.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: a } = this.getUserBounds();
    let { min: l, max: o } = this.getMinMax(!0);
    (this.options.bounds === "ticks" &&
      (e || (l = 0), a || (o = this.getLabels().length - 1)),
      (this.min = l),
      (this.max = o));
  }
  buildTicks() {
    const e = this.min,
      a = this.max,
      l = this.options.offset,
      o = [];
    let c = this.getLabels();
    ((c = e === 0 && a === c.length - 1 ? c : c.slice(e, a + 1)),
      (this._valueRange = Math.max(c.length - (l ? 0 : 1), 1)),
      (this._startValue = this.min - (l ? 0.5 : 0)));
    for (let u = e; u <= a; u++) o.push({ value: u });
    return o;
  }
  getLabelForValue(e) {
    return U0.call(this, e);
  }
  configure() {
    (super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels));
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function zS(i, e) {
  const a = [],
    {
      bounds: o,
      step: c,
      min: u,
      max: h,
      precision: p,
      count: d,
      maxTicks: m,
      maxDigits: b,
      includeBounds: S,
    } = i,
    _ = c || 1,
    w = m - 1,
    { min: E, max: A } = e,
    C = !Pt(u),
    I = !Pt(h),
    tt = !Pt(d),
    Z = (A - E) / (b + 1);
  let F = Vm((A - E) / w / _) * _,
    $,
    T,
    x,
    v;
  if (F < 1e-14 && !C && !I) return [{ value: E }, { value: A }];
  ((v = Math.ceil(A / F) - Math.floor(E / F)),
    v > w && (F = Vm((v * F) / w / _) * _),
    Pt(p) || (($ = Math.pow(10, p)), (F = Math.ceil(F * $) / $)),
    o === "ticks"
      ? ((T = Math.floor(E / F) * F), (x = Math.ceil(A / F) * F))
      : ((T = E), (x = A)),
    C && I && c && vw((h - u) / c, F / 1e3)
      ? ((v = Math.round(Math.min((h - u) / F, m))),
        (F = (h - u) / v),
        (T = u),
        (x = h))
      : tt
        ? ((T = C ? u : T), (x = I ? h : x), (v = d - 1), (F = (x - T) / v))
        : ((v = (x - T) / F),
          Rl(v, Math.round(v), F / 1e3)
            ? (v = Math.round(v))
            : (v = Math.ceil(v))));
  const H = Math.max(Gm(F), Gm(T));
  (($ = Math.pow(10, Pt(p) ? H : p)),
    (T = Math.round(T * $) / $),
    (x = Math.round(x * $) / $));
  let R = 0;
  for (
    C &&
    (S && T !== u
      ? (a.push({ value: u }),
        T < u && R++,
        Rl(Math.round((T + R * F) * $) / $, u, q0(u, Z, i)) && R++)
      : T < u && R++);
    R < v;
    ++R
  ) {
    const B = Math.round((T + R * F) * $) / $;
    if (I && B > h) break;
    a.push({ value: B });
  }
  return (
    I && S && x !== h
      ? a.length && Rl(a[a.length - 1].value, h, q0(h, Z, i))
        ? (a[a.length - 1].value = h)
        : a.push({ value: h })
      : (!I || x === h) && a.push({ value: x }),
    a
  );
}
function q0(i, e, { horizontal: a, minRotation: l }) {
  const o = ya(l),
    c = (a ? Math.sin(o) : Math.cos(o)) || 0.001,
    u = 0.75 * e * ("" + i).length;
  return Math.min(e / c, u);
}
class kS extends _s {
  constructor(e) {
    (super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0));
  }
  parse(e, a) {
    return Pt(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: a, maxDefined: l } = this.getUserBounds();
    let { min: o, max: c } = this;
    const u = (p) => (o = a ? o : p),
      h = (p) => (c = l ? c : p);
    if (e) {
      const p = ps(o),
        d = ps(c);
      p < 0 && d < 0 ? h(0) : p > 0 && d > 0 && u(0);
    }
    if (o === c) {
      let p = c === 0 ? 1 : Math.abs(c * 0.05);
      (h(c + p), e || u(o - p));
    }
    ((this.min = o), (this.max = c));
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: a, stepSize: l } = e,
      o;
    return (
      l
        ? ((o = Math.ceil(this.max / l) - Math.floor(this.min / l) + 1),
          o > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${l} would result generating up to ${o} ticks. Limiting to 1000.`,
            ),
            (o = 1e3)))
        : ((o = this.computeTickLimit()), (a = a || 11)),
      a && (o = Math.min(a, o)),
      o
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      a = e.ticks;
    let l = this.getTickLimit();
    l = Math.max(2, l);
    const o = {
        maxTicks: l,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: a.precision,
        step: a.stepSize,
        count: a.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: a.minRotation || 0,
        includeBounds: a.includeBounds !== !1,
      },
      c = this._range || this,
      u = zS(o, c);
    return (
      e.bounds === "ticks" && ww(u, this, "value"),
      e.reverse
        ? (u.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      u
    );
  }
  configure() {
    const e = this.ticks;
    let a = this.min,
      l = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const o = (l - a) / Math.max(e.length - 1, 1) / 2;
      ((a -= o), (l += o));
    }
    ((this._startValue = a), (this._endValue = l), (this._valueRange = l - a));
  }
  getLabelForValue(e) {
    return bb(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class dh extends kS {
  static id = "linear";
  static defaults = { ticks: { callback: yb.formatters.numeric } };
  determineDataLimits() {
    const { min: e, max: a } = this.getMinMax(!0);
    ((this.min = wn(e) ? e : 0),
      (this.max = wn(a) ? a : 1),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      a = e ? this.width : this.height,
      l = ya(this.options.ticks.minRotation),
      o = (e ? Math.sin(l) : Math.cos(l)) || 0.001,
      c = this._resolveTickFontOptions(0);
    return Math.ceil(a / Math.min(40, c.lineHeight / o));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
const Wr = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ve = Object.keys(Wr);
function F0(i, e) {
  return i - e;
}
function Y0(i, e) {
  if (Pt(e)) return null;
  const a = i._adapter,
    { parser: l, round: o, isoWeekday: c } = i._parseOpts;
  let u = e;
  return (
    typeof l == "function" && (u = l(u)),
    wn(u) || (u = typeof l == "string" ? a.parse(u, l) : a.parse(u)),
    u === null
      ? null
      : (o &&
          (u =
            o === "week" && (Ul(c) || c === !0)
              ? a.startOf(u, "isoWeek", c)
              : a.startOf(u, o)),
        +u)
  );
}
function V0(i, e, a, l) {
  const o = Ve.length;
  for (let c = Ve.indexOf(i); c < o - 1; ++c) {
    const u = Wr[Ve[c]],
      h = u.steps ? u.steps : Number.MAX_SAFE_INTEGER;
    if (u.common && Math.ceil((a - e) / (h * u.size)) <= l) return Ve[c];
  }
  return Ve[o - 1];
}
function RS(i, e, a, l, o) {
  for (let c = Ve.length - 1; c >= Ve.indexOf(a); c--) {
    const u = Ve[c];
    if (Wr[u].common && i._adapter.diff(o, l, u) >= e - 1) return u;
  }
  return Ve[a ? Ve.indexOf(a) : 0];
}
function BS(i) {
  for (let e = Ve.indexOf(i) + 1, a = Ve.length; e < a; ++e)
    if (Wr[Ve[e]].common) return Ve[e];
}
function G0(i, e, a) {
  if (!a) i[e] = !0;
  else if (a.length) {
    const { lo: l, hi: o } = $f(a, e),
      c = a[l] >= e ? a[l] : a[o];
    i[c] = !0;
  }
}
function LS(i, e, a, l) {
  const o = i._adapter,
    c = +o.startOf(e[0].value, l),
    u = e[e.length - 1].value;
  let h, p;
  for (h = c; h <= u; h = +o.add(h, 1, l))
    ((p = a[h]), p >= 0 && (e[p].major = !0));
  return e;
}
function X0(i, e, a) {
  const l = [],
    o = {},
    c = e.length;
  let u, h;
  for (u = 0; u < c; ++u)
    ((h = e[u]), (o[h] = u), l.push({ value: h, major: !1 }));
  return c === 0 || !a ? l : LS(i, l, o, a);
}
class Q0 extends _s {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  };
  constructor(e) {
    (super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0));
  }
  init(e, a = {}) {
    const l = e.time || (e.time = {}),
      o = (this._adapter = new $_._date(e.adapters.date));
    (o.init(a),
      kl(l.displayFormats, o.formats()),
      (this._parseOpts = {
        parser: l.parser,
        round: l.round,
        isoWeekday: l.isoWeekday,
      }),
      super.init(e),
      (this._normalized = a.normalized));
  }
  parse(e, a) {
    return e === void 0 ? null : Y0(this, e);
  }
  beforeLayout() {
    (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
  }
  determineDataLimits() {
    const e = this.options,
      a = this._adapter,
      l = e.time.unit || "day";
    let { min: o, max: c, minDefined: u, maxDefined: h } = this.getUserBounds();
    function p(d) {
      (!u && !isNaN(d.min) && (o = Math.min(o, d.min)),
        !h && !isNaN(d.max) && (c = Math.max(c, d.max)));
    }
    ((!u || !h) &&
      (p(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        p(this.getMinMax(!1))),
      (o = wn(o) && !isNaN(o) ? o : +a.startOf(Date.now(), l)),
      (c = wn(c) && !isNaN(c) ? c : +a.endOf(Date.now(), l) + 1),
      (this.min = Math.min(o, c - 1)),
      (this.max = Math.max(o + 1, c)));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let a = Number.POSITIVE_INFINITY,
      l = Number.NEGATIVE_INFINITY;
    return (
      e.length && ((a = e[0]), (l = e[e.length - 1])),
      { min: a, max: l }
    );
  }
  buildTicks() {
    const e = this.options,
      a = e.time,
      l = e.ticks,
      o = l.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      o.length &&
      ((this.min = this._userMin || o[0]),
      (this.max = this._userMax || o[o.length - 1]));
    const c = this.min,
      u = this.max,
      h = Ew(o, c, u);
    return (
      (this._unit =
        a.unit ||
        (l.autoSkip
          ? V0(a.minUnit, this.min, this.max, this._getLabelCapacity(c))
          : RS(this, h.length, a.minUnit, this.min, this.max))),
      (this._majorUnit =
        !l.major.enabled || this._unit === "year" ? void 0 : BS(this._unit)),
      this.initOffsets(o),
      e.reverse && h.reverse(),
      X0(this, h, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let a = 0,
      l = 0,
      o,
      c;
    this.options.offset &&
      e.length &&
      ((o = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (a = 1 - o)
        : (a = (this.getDecimalForValue(e[1]) - o) / 2),
      (c = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (l = c)
        : (l = (c - this.getDecimalForValue(e[e.length - 2])) / 2));
    const u = e.length < 3 ? 0.5 : 0.25;
    ((a = vn(a, 0, u)),
      (l = vn(l, 0, u)),
      (this._offsets = { start: a, end: l, factor: 1 / (a + 1 + l) }));
  }
  _generate() {
    const e = this._adapter,
      a = this.min,
      l = this.max,
      o = this.options,
      c = o.time,
      u = c.unit || V0(c.minUnit, a, l, this._getLabelCapacity(a)),
      h = Tt(o.ticks.stepSize, 1),
      p = u === "week" ? c.isoWeekday : !1,
      d = Ul(p) || p === !0,
      m = {};
    let b = a,
      S,
      _;
    if (
      (d && (b = +e.startOf(b, "isoWeek", p)),
      (b = +e.startOf(b, d ? "day" : u)),
      e.diff(l, a, u) > 1e5 * h)
    )
      throw new Error(
        a + " and " + l + " are too far apart with stepSize of " + h + " " + u,
      );
    const w = o.ticks.source === "data" && this.getDataTimestamps();
    for (S = b, _ = 0; S < l; S = +e.add(S, h, u), _++) G0(m, S, w);
    return (
      (S === l || o.bounds === "ticks" || _ === 1) && G0(m, S, w),
      Object.keys(m)
        .sort(F0)
        .map((E) => +E)
    );
  }
  getLabelForValue(e) {
    const a = this._adapter,
      l = this.options.time;
    return l.tooltipFormat
      ? a.format(e, l.tooltipFormat)
      : a.format(e, l.displayFormats.datetime);
  }
  format(e, a) {
    const o = this.options.time.displayFormats,
      c = this._unit,
      u = a || o[c];
    return this._adapter.format(e, u);
  }
  _tickFormatFunction(e, a, l, o) {
    const c = this.options,
      u = c.ticks.callback;
    if (u) return Jt(u, [e, a, l], this);
    const h = c.time.displayFormats,
      p = this._unit,
      d = this._majorUnit,
      m = p && h[p],
      b = d && h[d],
      S = l[a],
      _ = d && b && S && S.major;
    return this._adapter.format(e, o || (_ ? b : m));
  }
  generateTickLabels(e) {
    let a, l, o;
    for (a = 0, l = e.length; a < l; ++a)
      ((o = e[a]), (o.label = this._tickFormatFunction(o.value, a, e)));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const a = this._offsets,
      l = this.getDecimalForValue(e);
    return this.getPixelForDecimal((a.start + l) * a.factor);
  }
  getValueForPixel(e) {
    const a = this._offsets,
      l = this.getDecimalForPixel(e) / a.factor - a.end;
    return this.min + l * (this.max - this.min);
  }
  _getLabelSize(e) {
    const a = this.options.ticks,
      l = this.ctx.measureText(e).width,
      o = ya(this.isHorizontal() ? a.maxRotation : a.minRotation),
      c = Math.cos(o),
      u = Math.sin(o),
      h = this._resolveTickFontOptions(0).size;
    return { w: l * c + h * u, h: l * u + h * c };
  }
  _getLabelCapacity(e) {
    const a = this.options.time,
      l = a.displayFormats,
      o = l[a.unit] || l.millisecond,
      c = this._tickFormatFunction(e, 0, X0(this, [e], this._majorUnit), o),
      u = this._getLabelSize(c),
      h =
        Math.floor(this.isHorizontal() ? this.width / u.w : this.height / u.h) -
        1;
    return h > 0 ? h : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      a,
      l;
    if (e.length) return e;
    const o = this.getMatchingVisibleMetas();
    if (this._normalized && o.length)
      return (this._cache.data = o[0].controller.getAllParsedValues(this));
    for (a = 0, l = o.length; a < l; ++a)
      e = e.concat(o[a].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let a, l;
    if (e.length) return e;
    const o = this.getLabels();
    for (a = 0, l = o.length; a < l; ++a) e.push(Y0(this, o[a]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return Tw(e.sort(F0));
  }
}
function Er(i, e, a) {
  let l = 0,
    o = i.length - 1,
    c,
    u,
    h,
    p;
  a
    ? (e >= i[l].pos && e <= i[o].pos && ({ lo: l, hi: o } = va(i, "pos", e)),
      ({ pos: c, time: h } = i[l]),
      ({ pos: u, time: p } = i[o]))
    : (e >= i[l].time &&
        e <= i[o].time &&
        ({ lo: l, hi: o } = va(i, "time", e)),
      ({ time: c, pos: h } = i[l]),
      ({ time: u, pos: p } = i[o]));
  const d = u - c;
  return d ? h + ((p - h) * (e - c)) / d : h;
}
class mM extends Q0 {
  static id = "timeseries";
  static defaults = Q0.defaults;
  constructor(e) {
    (super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0));
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      a = (this._table = this.buildLookupTable(e));
    ((this._minPos = Er(a, this.min)),
      (this._tableRange = Er(a, this.max) - this._minPos),
      super.initOffsets(e));
  }
  buildLookupTable(e) {
    const { min: a, max: l } = this,
      o = [],
      c = [];
    let u, h, p, d, m;
    for (u = 0, h = e.length; u < h; ++u)
      ((d = e[u]), d >= a && d <= l && o.push(d));
    if (o.length < 2)
      return [
        { time: a, pos: 0 },
        { time: l, pos: 1 },
      ];
    for (u = 0, h = o.length; u < h; ++u)
      ((m = o[u + 1]),
        (p = o[u - 1]),
        (d = o[u]),
        Math.round((m + p) / 2) !== d && c.push({ time: d, pos: u / (h - 1) }));
    return c;
  }
  _generate() {
    const e = this.min,
      a = this.max;
    let l = super.getDataTimestamps();
    return (
      (!l.includes(e) || !l.length) && l.splice(0, 0, e),
      (!l.includes(a) || l.length === 1) && l.push(a),
      l.sort((o, c) => o - c)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const a = this.getDataTimestamps(),
      l = this.getLabelTimestamps();
    return (
      a.length && l.length
        ? (e = this.normalize(a.concat(l)))
        : (e = a.length ? a : l),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (Er(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const a = this._offsets,
      l = this.getDecimalForPixel(e) / a.factor - a.end;
    return Er(this._table, l * this._tableRange + this._minPos, !0);
  }
}
const Xb = "label";
function Z0(i, e) {
  typeof i == "function" ? i(e) : i && (i.current = e);
}
function jS(i, e) {
  const a = i.options;
  a && e && Object.assign(a, e);
}
function Qb(i, e) {
  i.labels = e;
}
function Zb(i, e, a = Xb) {
  const l = [];
  i.datasets = e.map((o) => {
    const c = i.datasets.find((u) => u[a] === o[a]);
    return !c || !o.data || l.includes(c)
      ? { ...o }
      : (l.push(c), Object.assign(c, o), c);
  });
}
function HS(i, e = Xb) {
  const a = { labels: [], datasets: [] };
  return (Qb(a, i.labels), Zb(a, i.datasets, e), a);
}
function NS(i, e) {
  const {
      height: a = 150,
      width: l = 300,
      redraw: o = !1,
      datasetIdKey: c,
      type: u,
      data: h,
      options: p,
      plugins: d = [],
      fallbackContent: m,
      updateMode: b,
      ...S
    } = i,
    _ = ft.useRef(null),
    w = ft.useRef(null),
    E = () => {
      _.current &&
        ((w.current = new xs(_.current, {
          type: u,
          data: HS(h, c),
          options: p && { ...p },
          plugins: d,
        })),
        Z0(e, w.current));
    },
    A = () => {
      (Z0(e, null), w.current && (w.current.destroy(), (w.current = null)));
    };
  return (
    ft.useEffect(() => {
      !o && w.current && p && jS(w.current, p);
    }, [o, p]),
    ft.useEffect(() => {
      !o && w.current && Qb(w.current.config.data, h.labels);
    }, [o, h.labels]),
    ft.useEffect(() => {
      !o && w.current && h.datasets && Zb(w.current.config.data, h.datasets, c);
    }, [o, h.datasets]),
    ft.useEffect(() => {
      w.current && (o ? (A(), setTimeout(E)) : w.current.update(b));
    }, [o, p, h.labels, h.datasets, b]),
    ft.useEffect(() => {
      w.current && (A(), setTimeout(E));
    }, [u]),
    ft.useEffect(() => (E(), () => A()), []),
    U.jsx("canvas", {
      ref: _,
      role: "img",
      height: a,
      width: l,
      ...S,
      children: m,
    })
  );
}
const US = ft.forwardRef(NS);
function qS(i, e) {
  return (
    xs.register(e),
    ft.forwardRef((a, l) => U.jsx(US, { ...a, ref: l, type: i }))
  );
}
const Gl = qS("line", W_);
xs.register(rh, ch, dh, hh, fh, uh);
function FS(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const o = [];
  for (let c = 0; c < i.length; c += l) o.push(i[Math.floor(c)]);
  return o;
}
function YS(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const VS = () => {
    const {
        time: i,
        originalFs: e,
        generateECG: a,
        rawSamples: l,
      } = ft.useContext(Un),
      c = {
        datasets: [
          {
            label: "EMG Signal",
            data: ft.useMemo(() => {
              if (!l.length || !a) return [];
              const h = YS(l);
              return FS(l, h, e).filter((d) => d.x <= i);
            }, [i, e, a, l]),
            borderColor: "#0078d4",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      u = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            title: {
              display: !0,
              text: "Time (s)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            title: {
              display: !0,
              text: "Amplitude (mV)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: Uv.signalContainer,
      children: [
        U.jsx("h3", { children: "EMG Signal (Unfiltered)" }),
        U.jsx(Gl, { data: c, options: u }),
      ],
    });
  },
  GS = "_signalContainer_sipfw_1",
  XS = { signalContainer: GS };
function Ar(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var kf = { exports: {} };
var K0;
function QS() {
  return (
    K0 ||
      ((K0 = 1),
      (function (i, e) {
        (function (a) {
          i.exports = a();
        })(function () {
          return (function a(l, o, c) {
            function u(d, m) {
              if (!o[d]) {
                if (!l[d]) {
                  var b = typeof Ar == "function" && Ar;
                  if (!m && b) return b(d, !0);
                  if (h) return h(d, !0);
                  var S = new Error("Cannot find module '" + d + "'");
                  throw ((S.code = "MODULE_NOT_FOUND"), S);
                }
                var _ = (o[d] = { exports: {} });
                l[d][0].call(
                  _.exports,
                  function (w) {
                    var E = l[d][1][w];
                    return u(E || w);
                  },
                  _,
                  _.exports,
                  a,
                  l,
                  o,
                  c,
                );
              }
              return o[d].exports;
            }
            for (
              var h = typeof Ar == "function" && Ar, p = 0;
              p < c.length;
              p++
            )
              u(c[p]);
            return u;
          })(
            {
              1: [
                function (a, l, o) {
                  l.exports = {
                    CalcCascades: a("./src/calcCascades"),
                    Fft: a("./src/fft"),
                    FirCoeffs: a("./src/firCoeffs"),
                    FirFilter: a("./src/firFilter"),
                    IirCoeffs: a("./src/iirCoeffs"),
                    IirFilter: a("./src/iirFilter"),
                    TestFilter: a("./src/testFilter"),
                  };
                },
                {
                  "./src/calcCascades": 2,
                  "./src/fft": 3,
                  "./src/firCoeffs": 4,
                  "./src/firFilter": 5,
                  "./src/iirCoeffs": 6,
                  "./src/iirFilter": 7,
                  "./src/testFilter": 8,
                },
              ],
              2: [
                function (a, l, o) {
                  var c = a("./iirCoeffs"),
                    u = new c(),
                    h = {
                      bessel: {
                        q: [
                          [0.57735026919],
                          [0.805538281842, 0.521934581669],
                          [1.02331395383, 0.611194546878, 0.510317824749],
                          [
                            1.22566942541, 0.710852074442, 0.559609164796,
                            0.505991069397,
                          ],
                          [
                            1.41530886916, 0.809790964842, 0.620470155556,
                            0.537552151325, 0.503912727276,
                          ],
                          [
                            1.59465693507, 0.905947107025, 0.684008068137,
                            0.579367238641, 0.525936202016, 0.502755558204,
                          ],
                          [
                            1.76552743493, 0.998998442993, 0.747625068271,
                            0.624777082395, 0.556680772868, 0.519027293158,
                            0.502045428643,
                          ],
                          [
                            1.9292718407, 1.08906376917, 0.810410302962,
                            0.671382379377, 0.591144659703, 0.542678365981,
                            0.514570953471, 0.501578400482,
                          ],
                          [
                            2.08691792612, 1.17637337045, 0.872034231424,
                            0.718163551101, 0.627261751983, 0.569890924765,
                            0.533371782078, 0.511523796759, 0.50125489338,
                          ],
                          [
                            2.23926560629, 1.26117120993, 0.932397288146,
                            0.764647810579, 0.664052481472, 0.598921924986,
                            0.555480327396, 0.526848630061, 0.509345928377,
                            0.501021580965,
                          ],
                          [
                            2.38695091667, 1.34368488961, 0.991497755204,
                            0.81060830488, 0.701011199665, 0.628878390935,
                            0.57943181849, 0.545207253735, 0.52208637596,
                            0.507736060535, 0.500847111042,
                          ],
                          [
                            2.53048919562, 1.42411783481, 1.04937620183,
                            0.85593899901, 0.737862159044, 0.659265671705,
                            0.604435823473, 0.565352679646, 0.537608804383,
                            0.51849505465, 0.506508536474, 0.500715908905,
                          ],
                        ],
                        f3dB: [
                          [1.27201964951],
                          [1.60335751622, 1.43017155999],
                          [1.9047076123, 1.68916826762, 1.60391912877],
                          [
                            2.18872623053, 1.95319575902, 1.8320926012,
                            1.77846591177,
                          ],
                          [
                            2.45062684305, 2.20375262593, 2.06220731793,
                            1.98055310881, 1.94270419166,
                          ],
                          [
                            2.69298925084, 2.43912611431, 2.28431825401,
                            2.18496722634, 2.12472538477, 2.09613322542,
                          ],
                          [
                            2.91905714471, 2.66069088948, 2.49663434571,
                            2.38497976939, 2.30961462222, 2.26265746534,
                            2.24005716132,
                          ],
                          [
                            3.13149167404, 2.87016099416, 2.69935018044,
                            2.57862945683, 2.49225505119, 2.43227707449,
                            2.39427710712, 2.37582307687,
                          ],
                          [
                            3.33237300564, 3.06908580184, 2.89318259511,
                            2.76551588399, 2.67073340527, 2.60094950474,
                            2.55161764546, 2.52001358804, 2.50457164552,
                          ],
                          [
                            3.52333123464, 3.25877569704, 3.07894353744,
                            2.94580435024, 2.84438325189, 2.76691082498,
                            2.70881411245, 2.66724655259, 2.64040228249,
                            2.62723439989,
                          ],
                          [
                            3.70566068548, 3.44032173223, 3.2574059854,
                            3.11986367838, 3.01307175388, 2.92939234605,
                            2.86428726094, 2.81483068055, 2.77915465405,
                            2.75596888377, 2.74456638588,
                          ],
                          [
                            3.88040469682, 3.61463243697, 3.4292654707,
                            3.28812274966, 3.17689762788, 3.08812364257,
                            3.01720732972, 2.96140104561, 2.91862858495,
                            2.88729479473, 2.8674198668, 2.8570800015,
                          ],
                        ],
                        f1dB: [
                          [2.16477559371],
                          [2.70320928596, 2.41122332505],
                          [3.25676581436, 2.88822569572, 2.74246238837],
                          [
                            3.76153580353, 3.35675411406, 3.14862673032,
                            3.05646412475,
                          ],
                          [
                            4.22174260104, 3.79644757806, 3.55260471864,
                            3.41193742197, 3.34673435508,
                          ],
                          [
                            4.64584812552, 4.20789257981, 3.94082363122,
                            3.76942681446, 3.66549975744, 3.61617359345,
                          ],
                          [
                            5.04060395196, 4.5944592201, 4.3111677248,
                            4.11836351827, 3.98822359814, 3.90713836715,
                            3.86811234525,
                          ],
                          [
                            5.41107948467, 4.95951159709, 4.66435804468,
                            4.45575796102, 4.30650679478, 4.20286750045,
                            4.13720522991, 4.10531748119,
                          ],
                          [
                            5.76110791853, 5.30592898465, 5.00182215701,
                            4.7811081045, 4.61724509926, 4.49660100894,
                            4.41131378918, 4.35667671372, 4.32997951075,
                          ],
                          [
                            6.09364309488, 5.63609116014, 5.32506930789,
                            5.09480346139, 4.91939504255, 4.78540258409,
                            4.68493280536, 4.61302286993, 4.56661931366,
                            4.54382759952,
                          ],
                          [
                            6.41100731543, 5.95195558182, 5.63550073656,
                            5.39754464742, 5.21278891332, 5.06801430334,
                            4.95539684456, 4.8697869429, 4.80814951843,
                            4.76793469612, 4.74828032403,
                          ],
                          [
                            6.71506056052, 6.25514029778, 5.9343616072,
                            5.69011422355, 5.49763642361, 5.34401973764,
                            5.22125973611, 5.12485045619, 5.05037962112,
                            4.99699982231, 4.96155789635, 4.94441828777,
                          ],
                        ],
                      },
                    },
                    p = {
                      bessel: {
                        as: [
                          [1.3617],
                          [1.3397, 0.7743],
                          [1.2217, 0.9686, 0.5131],
                          [1.1112, 0.9754, 0.7202, 0.3728],
                          [1.0215, 0.9393, 0.7815, 0.5604, 0.2883],
                        ],
                        bs: [
                          [0.618],
                          [0.4889, 0.389],
                          [0.3887, 0.3505, 0.2756],
                          [0.3162, 0.2979, 0.2621, 0.2087],
                          [0.265, 0.2549, 0.2351, 0.2059, 0.1665],
                        ],
                      },
                      butterworth: {
                        as: [
                          [1.4142],
                          [1.8478, 0.7654],
                          [1.9319, 1.4142, 0.5176],
                          [1.9616, 1.6629, 1.1111, 0.3902],
                          [1.9754, 1.782, 1.4142, 0.908, 0.3129],
                        ],
                        bs: [
                          [1],
                          [1, 1],
                          [1, 1, 1],
                          [1, 1, 1, 1],
                          [1, 1, 1, 1, 1],
                        ],
                      },
                      tschebyscheff05: {
                        as: [
                          [1.3614],
                          [2.6282, 0.3648],
                          [3.8645, 0.7528, 0.1589],
                          [5.1117, 1.0639, 0.3439, 0.0885],
                          [6.3648, 1.3582, 0.4822, 0.1994, 0.0563],
                        ],
                        bs: [
                          [1.3827],
                          [3.4341, 1.1509],
                          [6.9797, 1.8573, 1.0711],
                          [11.9607, 2.9365, 1.4206, 1.0407],
                          [18.3695, 4.3453, 1.944, 1.252, 1.0263],
                        ],
                      },
                      tschebyscheff1: {
                        as: [
                          [1.3022],
                          [2.5904, 0.3039],
                          [3.8437, 0.6292, 0.1296],
                          [5.1019, 0.8916, 0.2806, 0.0717],
                          [6.3634, 1.1399, 0.3939, 0.1616, 0.0455],
                        ],
                        bs: [
                          [1.5515],
                          [4.1301, 1.1697],
                          [8.5529, 1.9124, 1.0766],
                          [14.7608, 3.0426, 1.4334, 1.0432],
                          [22.7468, 4.5167, 1.9665, 1.2569, 1.0277],
                        ],
                      },
                      tschebyscheff2: {
                        as: [
                          [1.1813],
                          [2.4025, 0.2374],
                          [3.588, 0.4925, 0.0995],
                          [4.7743, 0.6991, 0.2153, 0.0547],
                          [5.9618, 0.8947, 0.3023, 0.1233, 0.0347],
                        ],
                        bs: [
                          [1.7775],
                          [4.9862, 1.1896],
                          [10.4648, 1.9622, 1.0826],
                          [18.151, 3.1353, 1.4449, 1.0461],
                          [28.0376, 4.6644, 1.9858, 1.2614, 1.0294],
                        ],
                      },
                      tschebyscheff3: {
                        as: [
                          [1.065],
                          [2.1853, 0.1964],
                          [3.2721, 0.4077, 0.0815],
                          [4.3583, 0.5791, 0.1765, 0.0448],
                          [5.4449, 0.7414, 0.2479, 0.1008, 0.0283],
                        ],
                        bs: [
                          [1.9305],
                          [5.5339, 1.2009],
                          [11.6773, 1.9873, 1.0861],
                          [20.2948, 3.1808, 1.4507, 1.0478],
                          [31.3788, 4.7363, 1.9952, 1.2638, 1.0304],
                        ],
                      },
                      allpass: {
                        as: [
                          [1.6278],
                          [2.337, 1.3506],
                          [2.6117, 2.0706, 1.0967],
                          [2.7541, 2.4174, 1.785, 0.9239],
                          [2.8406, 2.612, 2.1733, 1.5583, 0.8018],
                        ],
                        bs: [
                          [0.8832],
                          [1.4878, 1.1837],
                          [1.7763, 1.6015, 1.2596],
                          [1.942, 1.83, 1.6101, 1.2822],
                          [2.049, 1.9714, 1.8184, 1.5923, 1.2877],
                        ],
                      },
                    },
                    d = function (_, w) {
                      var E = [],
                        A = 0;
                      if (w !== "fromPZ")
                        for (
                          _.order > 12 && (_.order = 12), A = 0;
                          A < _.order;
                          A++
                        ) {
                          var C, I, tt;
                          _.transform === "matchedZ"
                            ? E.push(
                                u.lowpassMZ({
                                  Fs: _.Fs,
                                  Fc: _.Fc,
                                  preGain: _.preGain,
                                  as: p[_.characteristic].as[_.order - 1][A],
                                  bs: p[_.characteristic].bs[_.order - 1][A],
                                }),
                              )
                            : (_.characteristic === "butterworth"
                                ? ((C =
                                    0.5 /
                                    Math.sin(
                                      (Math.PI / (2 * _.order)) * (A + 0.5),
                                    )),
                                  (I = 1))
                                : ((C = h[_.characteristic].q[_.order - 1][A]),
                                  (I = _.oneDb
                                    ? h[_.characteristic].f1dB[_.order - 1][A]
                                    : h[_.characteristic].f3dB[_.order - 1][
                                        A
                                      ])),
                              (tt = w === "highpass" ? _.Fc / I : _.Fc * I),
                              (w !== "bandpass" && w !== "bandstop") ||
                                (_.characteristic === "bessel" &&
                                  (tt = (Math.sqrt(_.order) * tt) / _.order)),
                              E.push(
                                u[w]({
                                  Fs: _.Fs,
                                  Fc: tt,
                                  Q: C,
                                  BW: _.BW || 0,
                                  gain: _.gain || 0,
                                  preGain: _.preGain || !1,
                                }),
                              ));
                        }
                      else for (A = 0; A < _.length; A++) E.push(u[w](_[A]));
                      return E;
                    },
                    m = function (_) {
                      return function (w) {
                        return d(w, _);
                      };
                    },
                    b = {},
                    S = function () {
                      var _ = [];
                      for (var w in u) ((b[w] = m(w)), _.push(w));
                      return (
                        (b.available = function () {
                          return _;
                        }),
                        b
                      );
                    };
                  l.exports = S;
                },
                { "./iirCoeffs": 6 },
              ],
              3: [
                function (a, l, o) {
                  var c = function (u) {
                    if (
                      !(function (T) {
                        return !(T & (T - 1));
                      })(u)
                    )
                      return !1;
                    var h = {};
                    ((h.length = u),
                      (h.buffer = new Float64Array(u)),
                      (h.re = new Float64Array(u)),
                      (h.im = new Float64Array(u)),
                      (h.reI = new Float64Array(u)),
                      (h.imI = new Float64Array(u)),
                      (h.twiddle = new Int32Array(u)),
                      (h.sinTable = new Float64Array(u - 1)),
                      (h.cosTable = new Float64Array(u - 1)));
                    var p = 2 * Math.PI,
                      d = Math.floor(Math.log(u) / Math.LN2);
                    for (b = h.sinTable.length; b--; )
                      ((h.sinTable[b] = Math.sin(p * (b / u))),
                        (h.cosTable[b] = Math.cos(p * (b / u))));
                    for (
                      var m = u >> 1, b = 0, S = 0;
                      (h.twiddle[b] = S), !(++b >= u);
                    ) {
                      for (d = m; d <= S; ) ((S -= d), (d >>= 1));
                      S += d;
                    }
                    var _ = Math.PI,
                      w = 2 * Math.PI,
                      E = Math.abs,
                      A = Math.pow,
                      C = Math.cos,
                      I = Math.sin,
                      tt = function (T) {
                        return I(_ * T) / (_ * T);
                      },
                      Z = Math.E,
                      F = {
                        rectangular: {
                          calc: function () {
                            return 1;
                          },
                          values: [],
                          correction: 1,
                        },
                        none: {
                          calc: function () {
                            return 1;
                          },
                          values: [],
                          correction: 1,
                        },
                        hanning: {
                          calc: function (T, x) {
                            return 0.5 * (1 - C((w * T) / (x - 1)));
                          },
                          values: [],
                          correction: 2,
                        },
                        hamming: {
                          calc: function (T, x) {
                            return 0.54 - 0.46 * C((w * T) / (x - 1));
                          },
                          values: [],
                          correction: 1.8518999946875638,
                        },
                        tukery: {
                          calc: function (T, x, v) {
                            return T < (v * (x - 1)) / 2
                              ? 0.5 * (1 + C(_ * ((2 * T) / (v * (x - 1)) - 1)))
                              : (x - 1) * (1 - v / 2) < T
                                ? 0.5 *
                                  (1 +
                                    C(
                                      _ * ((2 * T) / (v * (x - 1)) - 2 / v + 1),
                                    ))
                                : 1;
                          },
                          values: [],
                          correction: 4 / 3,
                        },
                        cosine: {
                          calc: function (T, x) {
                            return I((_ * T) / (x - 1));
                          },
                          values: [],
                          correction: 1.570844266360796,
                        },
                        lanczos: {
                          calc: function (T, x) {
                            return tt((2 * T) / (x - 1) - 1);
                          },
                          values: [],
                          correction: 1.6964337576195783,
                        },
                        triangular: {
                          calc: function (T, x) {
                            return (
                              (2 / (x + 1)) * ((x + 1) / 2 - E(T - (x - 1) / 2))
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        bartlett: {
                          calc: function (T, x) {
                            return (
                              (2 / (x - 1)) * ((x - 1) / 2 - E(T - (x - 1) / 2))
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        gaussian: {
                          calc: function (T, x, v) {
                            return A(
                              Z,
                              -0.5 *
                                A((T - (x - 1) / 2) / ((v * (x - 1)) / 2), 2),
                            );
                          },
                          values: [],
                          correction: 5 / 3,
                        },
                        bartlettHanning: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.62 - 0.48 * E(T / (x - 1) - 0.5) - 0.38 * C(v)
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        blackman: {
                          calc: function (T, x, v) {
                            var H = (1 - v) / 2,
                              R = v / 2,
                              B = (w * T) / (x - 1);
                            return H - 0.5 * C(B) + R * C(2 * B);
                          },
                          values: [],
                          correction: 4 / 3,
                        },
                        blackmanHarris: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.35875 -
                              0.48829 * C(v) +
                              0.14128 * C(2 * v) -
                              0.01168 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.5594508635,
                        },
                        nuttall3: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return 0.375 - 0.5 * C(v) + 0.125 * C(2 * v);
                          },
                          values: [],
                          correction: 1.56,
                        },
                        nuttall3a: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return 0.40897 - 0.5 * C(v) + 0.09103 * C(2 * v);
                          },
                          values: [],
                          correction: 1.692,
                        },
                        nuttall3b: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.4243801 - 0.4973406 * C(v) + 0.078793 * C(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.7372527,
                        },
                        nuttall4: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.3125 -
                              0.46875 * C(v) +
                              0.1875 * C(2 * v) -
                              0.03125 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.454543,
                        },
                        nuttall4a: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.338946 -
                              0.481973 * C(v) +
                              0.161054 * C(2 * v) -
                              0.018027 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.512732763,
                        },
                        nuttall4b: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.355768 -
                              0.481973 * C(v) +
                              0.144232 * C(2 * v) -
                              0.012604 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.55223262,
                        },
                        nuttall4c: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.3635819 -
                              0.4891775 * C(v) +
                              0.1365995 * C(2 * v) -
                              0.0106411 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.57129067,
                        },
                        sft3f: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return 0.26526 - 0.5 * C(v) + 0.23474 * C(2 * v);
                          },
                          values: [],
                          correction: 1.3610238,
                        },
                        sft4f: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.21706 -
                              0.42103 * C(v) +
                              0.28294 * C(2 * v) -
                              0.07897 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.2773573,
                        },
                        sft5f: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.1881 -
                              0.36923 * C(v) +
                              0.28702 * C(2 * v) -
                              0.13077 * C(3 * v) +
                              0.02488 * C(4 * v)
                            );
                          },
                          values: [],
                          correction: 1.23167769,
                        },
                        sft3m: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.28235 - 0.52105 * C(v) + 0.19659 * C(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.39343451,
                        },
                        sft4m: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.241906 -
                              0.460841 * C(v) +
                              0.2552381 * C(2 * v) -
                              0.041872 * C(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.3190596,
                        },
                        sft5m: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.209671 -
                              0.407331 * C(v) +
                              0.281225 * C(2 * v) -
                              0.092669 * C(3 * v) +
                              0.0091036 * C(4 * v)
                            );
                          },
                          values: [],
                          correction: 1.26529456464,
                        },
                        nift: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              0.2810639 -
                              0.5208972 * C(v) +
                              0.1980399 * C(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.39094182,
                        },
                        hpft: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.912510941 * C(v) +
                                1.079173272 * C(2 * v) -
                                0.1832630879 * C(3 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        srft: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.93 * C(v) +
                                1.29 * C(2 * v) -
                                0.388 * C(3 * v) +
                                0.028 * C(4 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft70: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.90796 * C(v) +
                                1.07349 * C(2 * v) -
                                0.18199 * C(3 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft95: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.9383379 * C(v) +
                                1.3045202 * C(2 * v) -
                                0.402827 * C(3 * v) +
                                0.0350665 * C(4 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft90d: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.942604 * C(v) +
                                1.340318 * C(2 * v) -
                                0.440811 * C(3 * v) +
                                0.043097 * C(4 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft116d: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.9575375 * C(v) +
                                1.4780705 * C(2 * v) -
                                0.6367431 * C(3 * v) +
                                0.1228389 * C(4 * v) -
                                0.0066288 * C(5 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft144d: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.96760033 * C(v) +
                                1.57983607 * C(2 * v) -
                                0.81123644 * C(3 * v) +
                                0.22583558 * C(4 * v) -
                                0.02773848 * C(5 * v) +
                                9036e-7 * C(6 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft196d: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.97441842 * C(v) +
                                1.65409888 * C(2 * v) -
                                0.95788186 * C(3 * v) +
                                0.3367342 * C(4 * v) -
                                0.06364621 * C(5 * v) +
                                0.00521942 * C(6 * v) -
                                10599e-8 * C(7 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft223d: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.98298997309 * C(v) +
                                1.75556083063 * C(2 * v) -
                                1.19037717712 * C(3 * v) +
                                0.56155440797 * C(4 * v) -
                                0.17296769663 * C(5 * v) +
                                0.03233247087 * C(6 * v) -
                                0.00324954578 * C(7 * v) +
                                0.0001380104 * C(8 * v) -
                                132725e-11 * C(9 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft248d: {
                          calc: function (T, x) {
                            var v = (w * T) / (x - 1);
                            return (
                              (1 -
                                1.985844164102 * C(v) +
                                1.791176438506 * C(2 * v) -
                                1.282075284005 * C(3 * v) +
                                0.667777530266 * C(4 * v) -
                                0.240160796576 * C(5 * v) +
                                0.056656381764 * C(6 * v) -
                                0.008134974479 * C(7 * v) +
                                0.00062454465 * C(8 * v) -
                                19808998e-12 * C(9 * v) +
                                132974e-12 * C(10 * v)) /
                              x
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                      },
                      $ = function (T) {
                        return F[T.name].values.length !== T.N
                          ? (T.n === 0 && (F[T.name].values.length = 0),
                            (F[T.name].values[T.n] =
                              F[T.name].correction *
                              F[T.name].calc(T.n, T.N, T.a)),
                            F[T.name].values[T.n])
                          : F[T.name].values;
                      };
                    return {
                      forward: function (T, x) {
                        var v, H, R, B, J, st, at, j, G, et, it, rt;
                        R = h.buffer.length;
                        var O = { name: x, N: R, a: 0.5, n: 0 },
                          k = $(O);
                        if (typeof k == "number")
                          for (v = 0; v < R; ++v)
                            ((O.n = v), (h.buffer[v] = T[v] * $(O)));
                        else for (v = 0; v < R; ++v) h.buffer[v] = T[v] * k[v];
                        for (v = R; v--; )
                          ((h.re[v] = h.buffer[h.twiddle[v]]), (h.im[v] = 0));
                        for (B = 1; B < R; B = J)
                          for (
                            st = 0, J = B + B, at = R / J, H = 0;
                            H < B;
                            H++
                          ) {
                            for (
                              j = h.cosTable[st], G = h.sinTable[st], v = H;
                              v < R;
                              v += J
                            )
                              ((et = v + B),
                                (it = G * h.im[et] + j * h.re[et]),
                                (rt = j * h.im[et] - G * h.re[et]),
                                (h.re[et] = h.re[v] - it),
                                (h.re[v] += it),
                                (h.im[et] = h.im[v] - rt),
                                (h.im[v] += rt));
                            st += at;
                          }
                        return { re: h.re, im: h.im };
                      },
                      inverse: function (T, x) {
                        var v, H, R, B, J, st, at, j, G, et, it, rt;
                        for (R = T.length, v = R; v--; )
                          ((H = h.twiddle[v]),
                            (h.reI[v] = T[H]),
                            (h.imI[v] = -x[H]));
                        for (B = 1; B < R; B = J)
                          for (
                            st = 0, J = B + B, at = R / J, H = 0;
                            H < B;
                            H++
                          ) {
                            for (
                              j = h.cosTable[st], G = h.sinTable[st], v = H;
                              v < R;
                              v += J
                            )
                              ((et = v + B),
                                (it = G * h.imI[et] + j * h.reI[et]),
                                (rt = j * h.imI[et] - G * h.reI[et]),
                                (h.reI[et] = h.reI[v] - it),
                                (h.reI[v] += it),
                                (h.imI[et] = h.imI[v] - rt),
                                (h.imI[v] += rt));
                            st += at;
                          }
                        for (v = R; v--; ) h.buffer[v] = h.reI[v] / R;
                        return h.buffer;
                      },
                      magnitude: function (T) {
                        for (var x = [], v = 0; v < T.re.length; v++)
                          x.push(
                            Math.sqrt(T.re[v] * T.re[v] + T.im[v] * T.im[v]),
                          );
                        return x;
                      },
                      magToDb: function (T) {
                        for (var x = [], v = 0; v < T.length; v++)
                          x.push(20 * Math.log(T[v]) * Math.LOG10E);
                        return x;
                      },
                      phase: function (T) {
                        for (var x = [], v = 0; v < T.re.length; v++)
                          x.push(Math.atan2(T.im[v], T.re[v]));
                        return x;
                      },
                      windows: function () {
                        var T = [];
                        for (var x in F) T.push(x);
                        return T;
                      },
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              4: [
                function (a, l, o) {
                  var c = function () {
                    var u = function (m) {
                        var b = m.Fs,
                          S = m.Fa,
                          _ = m.Fb,
                          w = m.order || 51,
                          E = m.Att || 100,
                          A = function (T) {
                            for (var x = 0, v = 1, H = 1; v > 1e-6 * H; )
                              ((x += 2), (v *= (T * T) / (x * x)), (H += v));
                            return H;
                          };
                        w / 2 - Math.floor(w / 2) == 0 && w++;
                        var C,
                          I = (w - 1) / 2,
                          tt = [],
                          Z = 0,
                          F = 0,
                          $ = [];
                        for (tt[0] = (2 * (_ - S)) / b, F = 1; F <= I; F++)
                          tt[F] =
                            (Math.sin((2 * F * Math.PI * _) / b) -
                              Math.sin((2 * F * Math.PI * S) / b)) /
                            (F * Math.PI);
                        for (
                          Z =
                            E < 21
                              ? 0
                              : E > 50
                                ? 0.1102 * (E - 8.7)
                                : 0.5842 * Math.pow(E - 21, 0.4) +
                                  0.07886 * (E - 21),
                            C = A(Z),
                            F = 0;
                          F <= I;
                          F++
                        )
                          $[I + F] =
                            (tt[F] * A(Z * Math.sqrt(1 - (F * F) / (I * I)))) /
                            C;
                        for (F = 0; F < I; F++) $[F] = $[w - 1 - F];
                        return $;
                      },
                      h = function (m) {
                        var b = m.Fs,
                          S = m.Fc,
                          _ = m.order,
                          w = (2 * Math.PI * S) / b,
                          E = 0,
                          A = 0,
                          C = [];
                        for (E = 0; E <= _; E++)
                          (E - _ / 2 == 0
                            ? (C[E] = w)
                            : ((C[E] = Math.sin(w * (E - _ / 2)) / (E - _ / 2)),
                              (C[E] *=
                                0.54 - 0.46 * Math.cos((2 * Math.PI * E) / _))),
                            (A += C[E]));
                        for (E = 0; E <= _; E++) C[E] /= A;
                        return C;
                      },
                      p = function (m) {
                        var b;
                        for (b = 0; b < m.length; b++) m[b] = -m[b];
                        return (m[(m.length - 1) / 2]++, m);
                      },
                      d = function (m) {
                        for (
                          var b = h({ order: m.order, Fs: m.Fs, Fc: m.F2 }),
                            S = p(h({ order: m.order, Fs: m.Fs, Fc: m.F1 })),
                            _ = [],
                            w = 0;
                          w < b.length;
                          w++
                        )
                          _.push(b[w] + S[w]);
                        return _;
                      };
                    return {
                      lowpass: function (m) {
                        return h(m);
                      },
                      highpass: function (m) {
                        return p(h(m));
                      },
                      bandstop: function (m) {
                        return d(m);
                      },
                      bandpass: function (m) {
                        return p(d(m));
                      },
                      kbFilter: function (m) {
                        return u(m);
                      },
                      available: function () {
                        return [
                          "lowpass",
                          "highpass",
                          "bandstop",
                          "bandpass",
                          "kbFilter",
                        ];
                      },
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              5: [
                function (a, l, o) {
                  var c = a("./utils"),
                    u = c.runMultiFilter,
                    h = c.runMultiFilterReverse,
                    p = c.complex,
                    d = c.evaluatePhase,
                    m = function (b) {
                      var S = b,
                        _ = [],
                        w = 0;
                      for (w = 0; w < S.length; w++) _[w] = { re: S[w], im: 0 };
                      var E = function (Z) {
                          var F,
                            $ = [];
                          for (F = 0; F < Z; F++) $.push(0);
                          return { buf: $, pointer: 0 };
                        },
                        A = E(S.length - 1),
                        C = function (Z, F) {
                          F.buf[F.pointer] = Z;
                          var $ = 0;
                          for (w = 0; w < F.buf.length; w++)
                            $ += S[w] * F.buf[(F.pointer + w) % F.buf.length];
                          return (
                            (F.pointer = (F.pointer + 1) % F.buf.length),
                            $
                          );
                        },
                        I = function (Z) {
                          var F = E(S.length - 1);
                          return u(Z, F, C);
                        },
                        tt = function (Z) {
                          for (
                            var F = Z.Fs,
                              $ = Z.Fr,
                              T = -Math.PI * ($ / F) * 2,
                              x = { re: 0, im: 0 },
                              v = 0;
                            v < S.length - 1;
                            v++
                          )
                            x = p.add(
                              x,
                              p.mul(_[v], {
                                re: Math.cos(T * v),
                                im: Math.sin(T * v),
                              }),
                            );
                          var H = p.magnitude(x);
                          return {
                            magnitude: H,
                            phase: p.phase(x),
                            dBmagnitude: 20 * Math.log(H) * Math.LOG10E,
                          };
                        };
                      return {
                        responsePoint: function (Z) {
                          return tt(Z);
                        },
                        response: function (Z) {
                          Z = Z || 100;
                          var F = [],
                            $ = 0,
                            T = 2 * Z;
                          for ($ = 0; $ < Z; $++) F[$] = tt({ Fs: T, Fr: $ });
                          return (d(F), F);
                        },
                        simulate: function (Z) {
                          return I(Z);
                        },
                        singleStep: function (Z) {
                          return C(Z, A);
                        },
                        multiStep: function (Z, F) {
                          return u(Z, A, C, F);
                        },
                        filtfilt: function (Z, F) {
                          return h(u(Z, A, C, F), A, C, !0);
                        },
                        reinit: function () {
                          A = E(S.length - 1);
                        },
                      };
                    };
                  l.exports = m;
                },
                { "./utils": 9 },
              ],
              6: [
                function (a, l, o) {
                  var c = function () {
                    var u = function (d, m) {
                        var b = d.Q,
                          S = d.Fc,
                          _ = d.Fs,
                          w = {},
                          E = (2 * Math.PI * S) / _;
                        return (
                          d.BW
                            ? (w.alpha =
                                Math.sin(E) *
                                Math.sinh(
                                  ((Math.log(2) / 2) * d.BW * E) / Math.sin(E),
                                ))
                            : (w.alpha = Math.sin(E) / (2 * b)),
                          (w.cw = Math.cos(E)),
                          (w.a0 = 1 + w.alpha),
                          (m.a0 = w.a0),
                          m.a.push((-2 * w.cw) / w.a0),
                          (m.k = 1),
                          m.a.push((1 - w.alpha) / w.a0),
                          w
                        );
                      },
                      h = function (d) {
                        var m = d.Q,
                          b = d.Fc,
                          S = d.Fs,
                          _ = {},
                          w = (2 * Math.PI * b) / S;
                        return (
                          (_.alpha = Math.sin(w) / (2 * m)),
                          (_.cw = Math.cos(w)),
                          (_.A = Math.pow(10, d.gain / 40)),
                          _
                        );
                      },
                      p = function () {
                        var d = {};
                        return ((d.z = [0, 0]), (d.a = []), (d.b = []), d);
                      };
                    return {
                      fromPZ: function (d) {
                        var m = p();
                        return (
                          (m.a0 = 1),
                          m.b.push(1),
                          m.b.push(-d.z0.re - d.z1.re),
                          m.b.push(d.z0.re * d.z1.re - d.z0.im * d.z1.im),
                          m.a.push(-d.p0.re - d.p1.re),
                          m.a.push(d.p0.re * d.p1.re - d.p0.im * d.p1.im),
                          d.type === "lowpass"
                            ? (m.k =
                                (1 + m.a[0] + m.a[1]) / (1 + m.b[1] + m.b[2]))
                            : (m.k =
                                (1 - m.a[0] + m.a[1]) / (1 - m.b[1] + m.b[2])),
                          m
                        );
                      },
                      lowpassMZ: function (d) {
                        var m = p();
                        m.a0 = 1;
                        var b = d.as,
                          S = d.bs,
                          _ = (2 * Math.PI * d.Fc) / d.Fs,
                          w = -b / (2 * S);
                        return (
                          m.a.push(
                            2 *
                              -Math.pow(Math.E, w * _) *
                              Math.cos(
                                -_ *
                                  Math.sqrt(
                                    Math.abs(
                                      Math.pow(b, 2) / (4 * Math.pow(S, 2)) -
                                        1 / S,
                                    ),
                                  ),
                              ),
                          ),
                          m.a.push(Math.pow(Math.E, 2 * w * _)),
                          d.preGain
                            ? (m.b.push(1), (m.k = m.a0 + m.a[0] + m.a[1]))
                            : (m.b.push(m.a0 + m.a[0] + m.a[1]), (m.k = 1)),
                          m.b.push(0),
                          m.b.push(0),
                          m
                        );
                      },
                      lowpassBT: function (d) {
                        var m = p();
                        return (
                          (d.Q = 1),
                          (m.wp = Math.tan((2 * Math.PI * d.Fc) / (2 * d.Fs))),
                          (m.wp2 = m.wp * m.wp),
                          d.BW && delete d.BW,
                          (m.k = 1),
                          (m.a0 = 3 * m.wp + 3 * m.wp2 + 1),
                          m.b.push((3 * m.wp2 * d.Q) / m.a0),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m.a.push((6 * m.wp2 - 2) / m.a0),
                          m.a.push((3 * m.wp2 - 3 * m.wp + 1) / m.a0),
                          m
                        );
                      },
                      highpassBT: function (d) {
                        var m = p();
                        return (
                          (d.Q = 1),
                          (m.wp = Math.tan((2 * Math.PI * d.Fc) / (2 * d.Fs))),
                          (m.wp2 = m.wp * m.wp),
                          d.BW && delete d.BW,
                          (m.k = 1),
                          (m.a0 = m.wp + m.wp2 + 3),
                          m.b.push((3 * d.Q) / m.a0),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m.a.push((2 * m.wp2 - 6) / m.a0),
                          m.a.push((m.wp2 - m.wp + 3) / m.a0),
                          m
                        );
                      },
                      lowpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = u(d, m);
                        return (
                          d.preGain
                            ? ((m.k = 0.5 * (1 - b.cw)), m.b.push(1 / b.a0))
                            : ((m.k = 1), m.b.push((1 - b.cw) / (2 * b.a0))),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      highpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = u(d, m);
                        return (
                          d.preGain
                            ? ((m.k = 0.5 * (1 + b.cw)), m.b.push(1 / b.a0))
                            : ((m.k = 1), m.b.push((1 + b.cw) / (2 * b.a0))),
                          m.b.push(-2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      allpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push((1 - b.alpha) / b.a0),
                          m.b.push((-2 * b.cw) / b.a0),
                          m.b.push((1 + b.alpha) / b.a0),
                          m
                        );
                      },
                      bandpassQ: function (d) {
                        var m = p(),
                          b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push((b.alpha * d.Q) / b.a0),
                          m.b.push(0),
                          m.b.push(-m.b[0]),
                          m
                        );
                      },
                      bandpass: function (d) {
                        var m = p(),
                          b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push(b.alpha / b.a0),
                          m.b.push(0),
                          m.b.push(-m.b[0]),
                          m
                        );
                      },
                      bandstop: function (d) {
                        var m = p(),
                          b = u(d, m);
                        return (
                          (m.k = 1),
                          m.b.push(1 / b.a0),
                          m.b.push((-2 * b.cw) / b.a0),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      peak: function (d) {
                        var m = p(),
                          b = h(d);
                        return (
                          (m.k = 1),
                          (m.a0 = 1 + b.alpha / b.A),
                          m.a.push((-2 * b.cw) / m.a0),
                          m.a.push((1 - b.alpha / b.A) / m.a0),
                          m.b.push((1 + b.alpha * b.A) / m.a0),
                          m.b.push((-2 * b.cw) / m.a0),
                          m.b.push((1 - b.alpha * b.A) / m.a0),
                          m
                        );
                      },
                      lowshelf: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = h(d);
                        m.k = 1;
                        var S = 2 * Math.sqrt(b.A) * b.alpha;
                        return (
                          (m.a0 = b.A + 1 + (b.A - 1) * b.cw + S),
                          m.a.push((-2 * (b.A - 1 + (b.A + 1) * b.cw)) / m.a0),
                          m.a.push((b.A + 1 + (b.A - 1) * b.cw - S) / m.a0),
                          m.b.push(
                            (b.A * (b.A + 1 - (b.A - 1) * b.cw + S)) / m.a0,
                          ),
                          m.b.push(
                            (2 * b.A * (b.A - 1 - (b.A + 1) * b.cw)) / m.a0,
                          ),
                          m.b.push(
                            (b.A * (b.A + 1 - (b.A - 1) * b.cw - S)) / m.a0,
                          ),
                          m
                        );
                      },
                      highshelf: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = h(d);
                        m.k = 1;
                        var S = 2 * Math.sqrt(b.A) * b.alpha;
                        return (
                          (m.a0 = b.A + 1 - (b.A - 1) * b.cw + S),
                          m.a.push((2 * (b.A - 1 - (b.A + 1) * b.cw)) / m.a0),
                          m.a.push((b.A + 1 - (b.A - 1) * b.cw - S) / m.a0),
                          m.b.push(
                            (b.A * (b.A + 1 + (b.A - 1) * b.cw + S)) / m.a0,
                          ),
                          m.b.push(
                            (-2 * b.A * (b.A - 1 + (b.A + 1) * b.cw)) / m.a0,
                          ),
                          m.b.push(
                            (b.A * (b.A + 1 + (b.A - 1) * b.cw - S)) / m.a0,
                          ),
                          m
                        );
                      },
                      aweighting: function (d) {
                        var m = p();
                        m.k = 1;
                        var b = (2 * Math.PI * d.Fc) / d.Fs,
                          S = 2 * Math.tan(b / 2),
                          _ = d.Q,
                          w = Math.pow(S, 2);
                        return (
                          (m.a0 = 4 * _ + w * _ + 2 * S),
                          m.a.push(2 * w * _ - 8 * _),
                          m.a.push(4 * _ + w * _ - 2 * S),
                          m.b.push(w * _),
                          m.b.push(2 * w * _),
                          m.b.push(w * _),
                          m
                        );
                      },
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              7: [
                function (a, l, o) {
                  var c = a("./utils"),
                    u = c.complex,
                    h = c.runMultiFilter,
                    p = c.runMultiFilterReverse,
                    d = c.evaluatePhase,
                    m = function (b) {
                      for (
                        var S = b, _ = { re: 1, im: 0 }, w = [], E = [], A = 0;
                        A < S.length;
                        A++
                      ) {
                        w[A] = {};
                        var C = S[A];
                        ((w[A].b0 = { re: C.b[0], im: 0 }),
                          (w[A].b1 = { re: C.b[1], im: 0 }),
                          (w[A].b2 = { re: C.b[2], im: 0 }),
                          (w[A].a1 = { re: C.a[0], im: 0 }),
                          (w[A].a2 = { re: C.a[1], im: 0 }),
                          (w[A].k = { re: C.k, im: 0 }),
                          (w[A].z = [0, 0]),
                          (E[A] = {}),
                          (E[A].b1 = C.b[1] / C.b[0]),
                          (E[A].b2 = C.b[2] / C.b[0]),
                          (E[A].a1 = C.a[0]),
                          (E[A].a2 = C.a[1]));
                      }
                      var I = function (R, B) {
                          var J =
                              B * R.k.re - R.a1.re * R.z[0] - R.a2.re * R.z[1],
                            st =
                              R.b0.re * J + R.b1.re * R.z[0] + R.b2.re * R.z[1];
                          return ((R.z[1] = R.z[0]), (R.z[0] = J), st);
                        },
                        tt = function (R, B) {
                          var J = R,
                            st = 0;
                          for (st = 0; st < B.length; st++) J = I(B[st], J);
                          return J;
                        },
                        Z = function (R, B) {
                          var J = R.Fs,
                            st = R.Fr,
                            at = -Math.PI * (st / J) * 2,
                            j = { re: Math.cos(at), im: Math.sin(at) },
                            G = u.mul(
                              B.k,
                              u.add(
                                B.b0,
                                u.mul(j, u.add(B.b1, u.mul(B.b2, j))),
                              ),
                            ),
                            et = u.add(
                              _,
                              u.mul(j, u.add(B.a1, u.mul(B.a2, j))),
                            ),
                            it = u.div(G, et);
                          return {
                            magnitude: u.magnitude(it),
                            phase: u.phase(it),
                          };
                        },
                        F = function (R) {
                          var B = 0,
                            J = { magnitude: 1, phase: 0 };
                          for (B = 0; B < w.length; B++) {
                            var st = Z(R, w[B]);
                            ((J.magnitude *= st.magnitude),
                              (J.phase += st.phase));
                          }
                          return (
                            (J.dBmagnitude =
                              20 * Math.log(J.magnitude) * Math.LOG10E),
                            J
                          );
                        },
                        $ = function () {
                          for (var R = [], B = 0; B < S.length; B++)
                            R[B] = {
                              b0: { re: C.b[0], im: 0 },
                              b1: { re: C.b[1], im: 0 },
                              b2: { re: C.b[2], im: 0 },
                              a1: { re: C.a[0], im: 0 },
                              a2: { re: C.a[1], im: 0 },
                              k: { re: C.k, im: 0 },
                              z: [0, 0],
                            };
                          return R;
                        },
                        T = function (R) {
                          var B = $();
                          return h(R, B, tt);
                        },
                        x = function (R, B) {
                          var J = {},
                            st = [],
                            at = 0;
                          for (at = 0; at < B; at++) st.push(R(at));
                          J.out = T(st);
                          var j = !1,
                            G = !1;
                          for (at = 0; at < B - 1; at++)
                            if (
                              (J.out[at] > J.out[at + 1] &&
                                !j &&
                                ((j = !0),
                                (J.max = { sample: at, value: J.out[at] })),
                              j && !G && J.out[at] < J.out[at + 1])
                            ) {
                              ((G = !0),
                                (J.min = { sample: at, value: J.out[at] }));
                              break;
                            }
                          return J;
                        },
                        v = function (R, B) {
                          var J = Math.pow(R / 2, 2) - B;
                          return J < 0
                            ? [
                                { re: -R / 2, im: Math.sqrt(Math.abs(J)) },
                                { re: -R / 2, im: -Math.sqrt(Math.abs(J)) },
                              ]
                            : [
                                { re: -R / 2 + Math.sqrt(J), im: 0 },
                                { re: -R / 2 - Math.sqrt(J), im: 0 },
                              ];
                        },
                        H = function () {
                          for (var R = [], B = 0; B < E.length; B++)
                            ((R[B] = {}),
                              (R[B].z = v(E[B].b1, E[B].b2)),
                              (R[B].p = v(E[B].a1, E[B].a2)));
                          return R;
                        };
                      return {
                        singleStep: function (R) {
                          return tt(R, w);
                        },
                        multiStep: function (R, B) {
                          return h(R, w, tt, B);
                        },
                        filtfilt: function (R, B) {
                          return p(h(R, w, tt, B), w, tt, !0);
                        },
                        simulate: function (R) {
                          return T(R);
                        },
                        stepResponse: function (R) {
                          return x(function () {
                            return 1;
                          }, R);
                        },
                        impulseResponse: function (R) {
                          return x(function (B) {
                            return B === 0 ? 1 : 0;
                          }, R);
                        },
                        responsePoint: function (R) {
                          return F(R);
                        },
                        response: function (R) {
                          R = R || 100;
                          var B = [],
                            J = 0,
                            st = 2 * R;
                          for (J = 0; J < R; J++) B[J] = F({ Fs: st, Fr: J });
                          return (d(B), B);
                        },
                        polesZeros: function () {
                          return H();
                        },
                        reinit: function () {
                          for (A = 0; A < w.length; A++) w[A].z = [0, 0];
                        },
                      };
                    };
                  l.exports = m;
                },
                { "./utils": 9 },
              ],
              8: [
                function (a, l, o) {
                  var c = function (u) {
                    var h,
                      p = u,
                      d = [],
                      m = function (w) {
                        for (h = 0; h < w.steps; h++)
                          d.push(
                            p.singleStep(
                              (Math.random() - 0.5) * w.pp + w.offset,
                            ),
                          );
                      },
                      b = function (w) {
                        var E = w.offset + w.pp,
                          A = w.offset - w.pp;
                        for (h = 0; h < w.steps; h++)
                          h % 200 < 100
                            ? d.push(p.singleStep(E))
                            : d.push(p.singleStep(A));
                      },
                      S = function (w) {
                        var E = w.offset + w.pp,
                          A = w.offset - w.pp;
                        for (h = 0; h < w.steps; h++)
                          h % 100 == 0
                            ? d.push(p.singleStep(E))
                            : d.push(p.singleStep(A));
                      },
                      _ = function (w) {
                        var E = w.offset + w.pp,
                          A = w.offset - w.pp,
                          C = A,
                          I = (E - A) / 100;
                        for (h = 0; h < w.steps; h++)
                          (h % 200 < 100 ? (C += I) : (C -= I),
                            d.push(p.singleStep(C)));
                      };
                    return {
                      randomStability: function (w) {
                        for (
                          p.reinit(), d.length = 0, m(w), h = w.setup;
                          h < d.length;
                          h++
                        )
                          if (d[h] > w.maxStable || d[h] < w.minStable)
                            return d[h];
                        return !0;
                      },
                      directedRandomStability: function (w) {
                        (p.reinit(), (d.length = 0));
                        var E;
                        for (E = 0; E < w.tests; E++) {
                          var A = Math.random();
                          A < 0.25
                            ? m(w)
                            : A < 0.5
                              ? b(w)
                              : A < 0.75
                                ? S(w)
                                : _(w);
                        }
                        for (m(w), h = w.setup; h < d.length; h++)
                          if (d[h] > w.maxStable || d[h] < w.minStable)
                            return d[h];
                        return !0;
                      },
                      evaluateBehavior: function () {},
                    };
                  };
                  l.exports = c;
                },
                {},
              ],
              9: [
                function (a, l, o) {
                  ((o.evaluatePhase = function (d) {
                    var m = 0,
                      b = 0,
                      S = Math.PI,
                      _ = 2 * S,
                      w = [];
                    for (b = 0; b < d.length; b++) w.push(d[b].phase);
                    for (
                      d[0].unwrappedPhase = d[0].phase,
                        d[0].groupDelay = 0,
                        b = 1;
                      b < w.length;
                      b++
                    ) {
                      var E = w[b] - w[b - 1];
                      if (E > S) for (m = b; m < w.length; m++) w[m] -= _;
                      else if (E < -S) for (m = b; m < w.length; m++) w[m] += _;
                      (w[b] < 0
                        ? (d[b].unwrappedPhase = -w[b])
                        : (d[b].unwrappedPhase = w[b]),
                        (d[b].phaseDelay =
                          d[b].unwrappedPhase / (b / d.length)),
                        (d[b].groupDelay =
                          (d[b].unwrappedPhase - d[b - 1].unwrappedPhase) /
                          (S / d.length)),
                        d[b].groupDelay < 0 &&
                          (d[b].groupDelay = -d[b].groupDelay));
                    }
                    d[0].magnitude !== 0
                      ? ((d[0].phaseDelay = d[1].phaseDelay),
                        (d[0].groupDelay = d[1].groupDelay))
                      : ((d[0].phaseDelay = d[2].phaseDelay),
                        (d[0].groupDelay = d[2].groupDelay),
                        (d[1].phaseDelay = d[2].phaseDelay),
                        (d[1].groupDelay = d[2].groupDelay));
                  }),
                    (o.runMultiFilter = function (d, m, b, S) {
                      var _ = [];
                      S && (_ = d);
                      var w;
                      for (w = 0; w < d.length; w++) _[w] = b(d[w], m);
                      return _;
                    }),
                    (o.runMultiFilterReverse = function (d, m, b, S) {
                      var _ = [];
                      S && (_ = d);
                      var w;
                      for (w = d.length - 1; w >= 0; w--) _[w] = b(d[w], m);
                      return _;
                    }));
                  var c = function (d, m) {
                    for (var b = !0; b; ) {
                      var S = d,
                        _ = m;
                      if (
                        ((b = !1),
                        _ || (_ = 1),
                        S !== Math.floor(S) || _ !== Math.floor(_))
                      )
                        return 1;
                      if (S === 0 || S === 1) return _;
                      ((d = S - 1), (m = _ * S), (b = !0));
                    }
                  };
                  o.besselFactors = function (d) {
                    for (var m = [], b = 0; b < d + 1; b++) {
                      var S = c(2 * d - b),
                        _ = Math.pow(2, d - b) * c(b) * c(d - b);
                      m.unshift(Math.floor(S / _));
                    }
                    return m;
                  };
                  var u = function (d, m) {
                      for (var b = 0, S = 0; S < m; S++) {
                        var _ = 1 / Math.pow(2, S + 1);
                        d > _ && ((d -= _), (b += _));
                      }
                      return b;
                    },
                    h = function (d, m) {
                      return d & Math.pow(2, m);
                    },
                    p = function (d, m, b) {
                      var S = Math.abs(d),
                        _ = d - S;
                      return {
                        number: h(S, m).toString(),
                        fraction: u(_, b).toString(),
                        numberBits: m,
                        fractionBits: b,
                      };
                    };
                  ((o.fixedPoint = {
                    convert: function (d, m, b) {
                      return p(d, m, b);
                    },
                    add: function (d, m) {},
                    sub: function (d, m) {},
                    mul: function (d, m) {},
                    div: function (d, m) {},
                  }),
                    (o.complex = {
                      div: function (d, m) {
                        var b = d.re,
                          S = d.im,
                          _ = m.re,
                          w = m.im,
                          E = _ * _ + w * w;
                        return {
                          re: (b * _ + S * w) / E,
                          im: (S * _ - b * w) / E,
                        };
                      },
                      mul: function (d, m) {
                        var b = d.re,
                          S = d.im,
                          _ = m.re,
                          w = m.im;
                        return {
                          re: b * _ - S * w,
                          im: (b + S) * (_ + w) - b * _ - S * w,
                        };
                      },
                      add: function (d, m) {
                        return { re: d.re + m.re, im: d.im + m.im };
                      },
                      sub: function (d, m) {
                        return { re: d.re - m.re, im: d.im - m.im };
                      },
                      phase: function (d) {
                        return Math.atan2(d.im, d.re);
                      },
                      magnitude: function (d) {
                        return Math.sqrt(d.re * d.re + d.im * d.im);
                      },
                    }));
                },
                {},
              ],
            },
            {},
            [1],
          )(1);
        });
      })(kf)),
    kf.exports
  );
}
var ZS = QS();
const Yl = lb(ZS);
function KS(i) {
  const e = new Yl.CalcCascades(),
    a = {
      order: i.order,
      characteristic: "butterworth",
      Fs: i.Fs,
      preGain: !!i.preGain,
    };
  if (i.filterType === "lowpass") return e.lowpass({ ...a, Fc: i.Fc });
  if (i.filterType === "highpass") return e.highpass({ ...a, Fc: i.Fc });
  if (i.filterType === "bandpass") {
    const l = Math.max(1e-6, (i.F2 ?? 0) - (i.F1 ?? 0)),
      o = i.Fc ?? (i.F1 + i.F2) / 2;
    return e.bandpass({ ...a, Fc: o, BW: l });
  }
  if (i.filterType === "bandstop") {
    const l = Math.max(1e-6, (i.F2 ?? 0) - (i.F1 ?? 0)),
      o = i.Fc ?? (i.F1 + i.F2) / 2;
    return e.bandstop({ ...a, Fc: o, BW: l });
  }
  return null;
}
function PS(i) {
  const e = new Yl.FirCoeffs();
  if (i.windowMode === "KaiserBessel") {
    i.characteristic === "FIR" && i.order < 3 && (i.order = 3);
    let a = i.order;
    return (
      a % 2 === 0 && (a += 1),
      e.kbFilter({ order: a, Fs: i.Fs, Fa: i.Fa, Fb: i.Fb, Att: i.Att })
    );
  }
  return i.filterType === "lowpass"
    ? e.lowpass({ order: i.order, Fs: i.Fs, Fc: i.Fc })
    : i.filterType === "highpass"
      ? e.highpass({ order: i.order, Fs: i.Fs, Fc: i.Fc })
      : i.filterType === "bandpass"
        ? e.bandpass({ order: i.order, Fs: i.Fs, F1: i.F1, F2: i.F2 })
        : i.filterType === "bandstop"
          ? e.bandstop({ order: i.order, Fs: i.Fs, F1: i.F1, F2: i.F2 })
          : null;
}
function IS(i, e) {
  if (!Array.isArray(i) || !i.length) return [];
  if (e.characteristic === "IIR") {
    const a = KS(e);
    return a ? new Yl.IirFilter(a).multiStep(i) : i;
  }
  if (e.characteristic === "FIR") {
    const a = PS(e);
    return new Yl.FirFilter(a).multiStep(i);
  }
  return i;
}
xs.register(rh, ch, dh, hh, fh, uh);
function WS(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const o = [];
  for (let c = 0; c < i.length; c += l) o.push(i[Math.floor(c)]);
  return o;
}
function $S(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const JS = () => {
    const {
        time: i,
        originalFs: e,
        config: a,
        filteredECG: l,
        rawSamples: o,
        setFilteredSamples: c,
      } = ft.useContext(Un),
      u = ft.useMemo(() => {
        if (!o.length || !l) return [];
        const d = $S(o),
          m = WS(o, d, e),
          b = m.map((E) => E.y),
          S = { ...a, Fs: Number(e) },
          _ = IS(b, S);
        return m.map((E, A) => ({ x: E.x, y: _[A] })).filter((E) => E.x <= i);
      }, [i, e, a, l, o]);
    ft.useEffect(() => {
      c(u);
    }, [i, e, a, l, o, u, c]);
    const h = {
        datasets: [
          {
            label: "Filtered EMG",
            data: u,
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      p = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            title: {
              display: !0,
              text: "Time (s)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            title: {
              display: !0,
              text: "Amplitude (mV)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: XS.signalContainer,
      children: [
        U.jsxs("h3", {
          children: [
            "EMG Signal (Filtered) ",
            U.jsx("span", { children: " Filter Used : " }),
            U.jsx("span", {
              children:
                a.characteristic === "FIR"
                  ? `Window based FIR - ${a.windowMode} - ${a.filterType}`
                  : `Butterworth IIR - ${a.filterType}`,
            }),
          ],
        }),
        U.jsx(Gl, { data: h, options: p }),
      ],
    });
  },
  t5 = "_signalContainer_sipfw_1",
  e5 = { signalContainer: t5 };
function n5(i, e, a = 0.2, l = 50) {
  return i.map((o, c) => o + a * Math.sin(2 * Math.PI * l * (c / e)));
}
function i5(i, e = 0.15) {
  return i.map((a) => a + e * (Math.random() * 2 - 1));
}
function a5(i, e, a = 0.25, l = 15) {
  return i.map((o, c) => o + a * Math.sin(2 * Math.PI * l * (c / e)));
}
function s5(i, e, a = 0.1, l = 1) {
  return i.map((o, c) => o + a * Math.sin(2 * Math.PI * l * (c / e)));
}
xs.register(rh, ch, dh, hh, fh, uh);
function l5(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const o = [];
  for (let c = 0; c < i.length; c += l) o.push(i[Math.floor(c)]);
  return o;
}
function o5(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const r5 = () => {
  const {
    time: i,
    originalFs: e,
    applyNoiseTrigger: a,
    setApplyNoiseTrigger: l,
    noise: o,
    rawSamples: c,
    setNoisySamples: u,
  } = ft.useContext(Un);
  ft.useEffect(() => {
    !o.baselineDrift &&
      !o.Powerline &&
      !o.muscleNoise &&
      !o.motionArtifact &&
      l(!1);
  }, [o, l]);
  const h = ft.useMemo(() => {
    if (!c.length || !a) return [];
    const m = o5(c),
      S = l5(c, m, e).filter((w) => w.x <= i);
    let _ = S.map((w) => w.y);
    return (
      o.baselineDrift && (_ = s5(_, e)),
      o.Powerline && (_ = n5(_, e)),
      o.muscleNoise && (_ = i5(_)),
      o.motionArtifact && (_ = a5(_, e)),
      S.map((w, E) => ({ x: w.x, y: _[E] }))
    );
  }, [a, o, i, e, c]);
  ft.useEffect(() => {
    u(h);
  }, [a, o, i, e, c, h, u]);
  const p = {
      datasets: [
        {
          label: "EMG Signal",
          data: h,
          borderColor: "red",
          borderWidth: 1,
          pointRadius: 0,
          tension: 0,
        },
      ],
    },
    d = {
      responsive: !0,
      animation: !0,
      parsing: !1,
      plugins: { legend: { display: !1 } },
      scales: {
        x: {
          type: "linear",
          title: {
            display: !0,
            text: "Time (s)",
            font: { size: 13, weight: "bold" },
          },
          ticks: { font: { size: 13 } },
        },
        y: {
          title: {
            display: !0,
            text: "Amplitude (mV)",
            font: { size: 13, weight: "bold" },
          },
          ticks: { font: { size: 12 } },
        },
      },
    };
  return U.jsxs("div", {
    className: e5.signalContainer,
    children: [
      U.jsxs("h3", {
        children: [
          "EMG Signal",
          " ",
          U.jsxs("span", {
            children: [
              " ",
              "(Contiminated with",
              " ",
              o.baselineDrift
                ? `Baseline Wander ${(o.baselineDrift && o.Powerline) || (o.baselineDrift && o.muscleNoise) ? "," : ""}`
                : "",
              " ",
              o.Powerline ? `Powerline Noise${o.muscleNoise ? "," : ""}` : "",
              " ",
              o.muscleNoise ? "Muscle Noise" : "",
              " ",
              o.motionArtifact ? "Motion Artifact" : "",
              ")",
            ],
          }),
        ],
      }),
      U.jsx(Gl, { data: p, options: d }),
    ],
  });
};
function Kb(i, e) {
  const a = 1 << Math.ceil(Math.log2(i.length)),
    l = new Yl.Fft(a),
    o = new Array(a).fill(0);
  for (let b = 0; b < i.length; b++) o[b] = i[b];
  const c = l.forward(o, "hanning"),
    u = l.magnitude(c),
    p = l.magToDb(u).map((b) => ((b * b) / (a * e)) * 1e3),
    d = p.map((b, S) => (S * e) / a),
    m = Math.floor(a / 2);
  return { freqs: d.slice(0, m), psd: p.slice(0, m) };
}
const c5 = "_signalContainer_v98p0_1",
  u5 = { signalContainer: c5 },
  f5 = () => {
    const {
        rawSamples: i,
        noisySamples: e,
        generateECG: a,
        originalFs: l,
        applypsdTrigger: o,
      } = ft.useContext(Un),
      c = ft.useMemo(() => {
        if (!a || i.length === 0) return null;
        const p = e && e.length > 0 ? e : i;
        if (!p || p.length === 0) return null;
        const d = p.map((b) => b.y);
        return Kb(d, l);
      }, [i, e, a, l, o]);
    if (!c) return null;
    const u = {
        datasets: [
          {
            label: "Unfiltered EMG PSD",
            data: c.psd.map((p, d) => ({ x: c.freqs[d], y: p })),
            borderColor: "#005FA7",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      h = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: l / 2,
            title: {
              display: !0,
              text: "Frequency (Hz)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            min: 0,
            title: {
              display: !0,
              text: "PSD (dB/Hz) x 10^3",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: u5.signalContainer,
      children: [
        U.jsx("h3", { children: "Power Spectral Density — Unfiltered EMG" }),
        U.jsx(Gl, { data: u, options: h }),
      ],
    });
  },
  h5 = "_signalContainer_ealwr_1",
  d5 = { signalContainer: h5 },
  g5 = () => {
    const {
        filteredSamples: i,
        generateECG: e,
        originalFs: a,
        csvFilePath: l,
      } = ft.useContext(Un),
      o = ft.useMemo(() => {
        if (!e || i.length === 0) return null;
        const h = i.map((d) => d.y);
        return Kb(h, a);
      }, [i, e, a, l]);
    if (!o) return null;
    const c = {
        datasets: [
          {
            label: "Filtered EMG PSD",
            data: o.psd.map((h, p) => ({ x: o.freqs[p], y: h })),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      u = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: a / 2,
            title: {
              display: !0,
              text: "Frequency (Hz)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            min: 0,
            title: {
              display: !0,
              text: "PSD (dB/Hz) x 10^3",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: d5.signalContainer,
      children: [
        U.jsx("h3", { children: "Power Spectral Density — Filtered EMG" }),
        U.jsx(Gl, { data: c, options: u }),
      ],
    });
  },
  p5 = () => {
    const {
      generateECG: i,
      applyNoiseTrigger: e,
      filteredECG: a,
      applypsdTrigger: l,
    } = ft.useContext(Un);
    return U.jsx("div", {
      className: xf.leftPanelContainer,
      children: U.jsxs("div", {
        className: xf.container,
        children: [
          U.jsxs("div", {
            className: xf.psdContainer,
            children: [l && U.jsx(f5, {}), l && U.jsx(g5, {})],
          }),
          U.jsx("div", { children: i && U.jsx(VS, {}) }),
          U.jsx("div", { children: e && U.jsx(r5, {}) }),
          U.jsx("div", { children: a && U.jsx(JS, {}) }),
        ],
      }),
    });
  },
  m5 = "_rightPanelContainer_1jr2z_1",
  b5 = "_right_1jr2z_1",
  y5 = "_box_1jr2z_49",
  v5 = "_syncInputContainer_1jr2z_251",
  w5 = "_buttonContainer_1jr2z_279",
  _5 = "_psdContainer_1jr2z_291",
  si = {
    rightPanelContainer: m5,
    right: b5,
    box: y5,
    syncInputContainer: v5,
    buttonContainer: w5,
    psdContainer: _5,
  };
function Pb(i, e, a) {
  if (typeof i == "function" ? i === e : i.has(e))
    return arguments.length < 3 ? e : a;
  throw new TypeError("Private element is not present on this object");
}
function x5(i, e) {
  if (e.has(i))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object",
    );
}
function P0(i, e) {
  return i.get(Pb(i, e));
}
function S5(i, e, a) {
  (x5(i, e), e.set(i, a));
}
function M5(i, e, a) {
  return (i.set(Pb(i, e), a), a);
}
const C5 = 100,
  ht = {},
  E5 = () => {
    ht.previousActiveElement instanceof HTMLElement
      ? (ht.previousActiveElement.focus(), (ht.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  A5 = (i) =>
    new Promise((e) => {
      if (!i) return e();
      const a = window.scrollX,
        l = window.scrollY;
      ((ht.restoreFocusTimeout = setTimeout(() => {
        (E5(), e());
      }, C5)),
        window.scrollTo(a, l));
    }),
  Ib = "swal2-",
  T5 = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  Q = T5.reduce((i, e) => ((i[e] = Ib + e), i), {}),
  O5 = ["success", "warning", "info", "question", "error"],
  qr = O5.reduce((i, e) => ((i[e] = Ib + e), i), {}),
  Wb = "SweetAlert2:",
  gh = (i) => i.charAt(0).toUpperCase() + i.slice(1),
  ke = (i) => {
    console.warn(`${Wb} ${typeof i == "object" ? i.join(" ") : i}`);
  },
  Ea = (i) => {
    console.error(`${Wb} ${i}`);
  },
  I0 = [],
  D5 = (i) => {
    I0.includes(i) || (I0.push(i), ke(i));
  },
  $b = (i, e = null) => {
    D5(
      `"${i}" is deprecated and will be removed in the next major release.${e ? ` Use "${e}" instead.` : ""}`,
    );
  },
  $r = (i) => (typeof i == "function" ? i() : i),
  ph = (i) => i && typeof i.toPromise == "function",
  Xl = (i) => (ph(i) ? i.toPromise() : Promise.resolve(i)),
  mh = (i) => i && Promise.resolve(i) === i,
  Re = () => document.body.querySelector(`.${Q.container}`),
  Ql = (i) => {
    const e = Re();
    return e ? e.querySelector(i) : null;
  },
  nn = (i) => Ql(`.${i}`),
  Ht = () => nn(Q.popup),
  Ss = () => nn(Q.icon),
  z5 = () => nn(Q["icon-content"]),
  Jb = () => nn(Q.title),
  bh = () => nn(Q["html-container"]),
  t2 = () => nn(Q.image),
  yh = () => nn(Q["progress-steps"]),
  Jr = () => nn(Q["validation-message"]),
  Nn = () => Ql(`.${Q.actions} .${Q.confirm}`),
  Ms = () => Ql(`.${Q.actions} .${Q.cancel}`),
  Aa = () => Ql(`.${Q.actions} .${Q.deny}`),
  k5 = () => nn(Q["input-label"]),
  Cs = () => Ql(`.${Q.loader}`),
  Zl = () => nn(Q.actions),
  e2 = () => nn(Q.footer),
  tc = () => nn(Q["timer-progress-bar"]),
  vh = () => nn(Q.close),
  R5 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  wh = () => {
    const i = Ht();
    if (!i) return [];
    const e = i.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
      ),
      a = Array.from(e).sort((c, u) => {
        const h = parseInt(c.getAttribute("tabindex") || "0"),
          p = parseInt(u.getAttribute("tabindex") || "0");
        return h > p ? 1 : h < p ? -1 : 0;
      }),
      l = i.querySelectorAll(R5),
      o = Array.from(l).filter((c) => c.getAttribute("tabindex") !== "-1");
    return [...new Set(a.concat(o))].filter((c) => Xe(c));
  },
  _h = () =>
    ci(document.body, Q.shown) &&
    !ci(document.body, Q["toast-shown"]) &&
    !ci(document.body, Q["no-backdrop"]),
  ec = () => {
    const i = Ht();
    return i ? ci(i, Q.toast) : !1;
  },
  B5 = () => {
    const i = Ht();
    return i ? i.hasAttribute("data-loading") : !1;
  },
  an = (i, e) => {
    if (((i.textContent = ""), e)) {
      const l = new DOMParser().parseFromString(e, "text/html"),
        o = l.querySelector("head");
      o &&
        Array.from(o.childNodes).forEach((u) => {
          i.appendChild(u);
        });
      const c = l.querySelector("body");
      c &&
        Array.from(c.childNodes).forEach((u) => {
          u instanceof HTMLVideoElement || u instanceof HTMLAudioElement
            ? i.appendChild(u.cloneNode(!0))
            : i.appendChild(u);
        });
    }
  },
  ci = (i, e) => {
    if (!e) return !1;
    const a = e.split(/\s+/);
    for (let l = 0; l < a.length; l++)
      if (!i.classList.contains(a[l])) return !1;
    return !0;
  },
  L5 = (i, e) => {
    Array.from(i.classList).forEach((a) => {
      !Object.values(Q).includes(a) &&
        !Object.values(qr).includes(a) &&
        !Object.values(e.showClass || {}).includes(a) &&
        i.classList.remove(a);
    });
  },
  en = (i, e, a) => {
    if ((L5(i, e), !e.customClass)) return;
    const l = e.customClass[a];
    if (l) {
      if (typeof l != "string" && !l.forEach) {
        ke(
          `Invalid type of customClass.${a}! Expected string or iterable object, got "${typeof l}"`,
        );
        return;
      }
      jt(i, l);
    }
  },
  nc = (i, e) => {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return i.querySelector(`.${Q.popup} > .${Q[e]}`);
      case "checkbox":
        return i.querySelector(`.${Q.popup} > .${Q.checkbox} input`);
      case "radio":
        return (
          i.querySelector(`.${Q.popup} > .${Q.radio} input:checked`) ||
          i.querySelector(`.${Q.popup} > .${Q.radio} input:first-child`)
        );
      case "range":
        return i.querySelector(`.${Q.popup} > .${Q.range} input`);
      default:
        return i.querySelector(`.${Q.popup} > .${Q.input}`);
    }
  },
  n2 = (i) => {
    if ((i.focus(), i.type !== "file")) {
      const e = i.value;
      ((i.value = ""), (i.value = e));
    }
  },
  i2 = (i, e, a) => {
    !i ||
      !e ||
      (typeof e == "string" && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach((l) => {
        Array.isArray(i)
          ? i.forEach((o) => {
              a ? o.classList.add(l) : o.classList.remove(l);
            })
          : a
            ? i.classList.add(l)
            : i.classList.remove(l);
      }));
  },
  jt = (i, e) => {
    i2(i, e, !0);
  },
  _n = (i, e) => {
    i2(i, e, !1);
  },
  Fi = (i, e) => {
    const a = Array.from(i.children);
    for (let l = 0; l < a.length; l++) {
      const o = a[l];
      if (o instanceof HTMLElement && ci(o, e)) return o;
    }
  },
  xa = (i, e, a) => {
    (a === `${parseInt(`${a}`)}` && (a = parseInt(a)),
      a || parseInt(`${a}`) === 0
        ? i.style.setProperty(e, typeof a == "number" ? `${a}px` : a)
        : i.style.removeProperty(e));
  },
  ve = (i, e = "flex") => {
    i && (i.style.display = e);
  },
  De = (i) => {
    i && (i.style.display = "none");
  },
  xh = (i, e = "block") => {
    i &&
      new MutationObserver(() => {
        Kl(i, i.innerHTML, e);
      }).observe(i, { childList: !0, subtree: !0 });
  },
  W0 = (i, e, a, l) => {
    const o = i.querySelector(e);
    o && o.style.setProperty(a, l);
  },
  Kl = (i, e, a = "flex") => {
    e ? ve(i, a) : De(i);
  },
  Xe = (i) =>
    !!(i && (i.offsetWidth || i.offsetHeight || i.getClientRects().length)),
  j5 = () => !Xe(Nn()) && !Xe(Aa()) && !Xe(Ms()),
  Gf = (i) => i.scrollHeight > i.clientHeight,
  H5 = (i, e) => {
    let a = i;
    for (; a && a !== e; ) {
      if (Gf(a)) return !0;
      a = a.parentElement;
    }
    return !1;
  },
  a2 = (i) => {
    const e = window.getComputedStyle(i),
      a = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      l = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return a > 0 || l > 0;
  },
  Sh = (i, e = !1) => {
    const a = tc();
    a &&
      Xe(a) &&
      (e && ((a.style.transition = "none"), (a.style.width = "100%")),
      setTimeout(() => {
        ((a.style.transition = `width ${i / 1e3}s linear`),
          (a.style.width = "0%"));
      }, 10));
  },
  N5 = () => {
    const i = tc();
    if (!i) return;
    const e = parseInt(window.getComputedStyle(i).width);
    (i.style.removeProperty("transition"), (i.style.width = "100%"));
    const a = parseInt(window.getComputedStyle(i).width),
      l = (e / a) * 100;
    i.style.width = `${l}%`;
  },
  U5 = () => typeof window > "u" || typeof document > "u",
  q5 = `
 <div aria-labelledby="${Q.title}" aria-describedby="${Q["html-container"]}" class="${Q.popup}" tabindex="-1">
   <button type="button" class="${Q.close}"></button>
   <ul class="${Q["progress-steps"]}"></ul>
   <div class="${Q.icon}"></div>
   <img class="${Q.image}" />
   <h2 class="${Q.title}" id="${Q.title}"></h2>
   <div class="${Q["html-container"]}" id="${Q["html-container"]}"></div>
   <input class="${Q.input}" id="${Q.input}" />
   <input type="file" class="${Q.file}" />
   <div class="${Q.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${Q.select}" id="${Q.select}"></select>
   <div class="${Q.radio}"></div>
   <label class="${Q.checkbox}">
     <input type="checkbox" id="${Q.checkbox}" />
     <span class="${Q.label}"></span>
   </label>
   <textarea class="${Q.textarea}" id="${Q.textarea}"></textarea>
   <div class="${Q["validation-message"]}" id="${Q["validation-message"]}"></div>
   <div class="${Q.actions}">
     <div class="${Q.loader}"></div>
     <button type="button" class="${Q.confirm}"></button>
     <button type="button" class="${Q.deny}"></button>
     <button type="button" class="${Q.cancel}"></button>
   </div>
   <div class="${Q.footer}"></div>
   <div class="${Q["timer-progress-bar-container"]}">
     <div class="${Q["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  F5 = () => {
    const i = Re();
    return i
      ? (i.remove(),
        _n(
          [document.documentElement, document.body],
          [Q["no-backdrop"], Q["toast-shown"], Q["has-column"]],
        ),
        !0)
      : !1;
  },
  pa = () => {
    ht.currentInstance && ht.currentInstance.resetValidationMessage();
  },
  Y5 = () => {
    const i = Ht();
    if (!i) return;
    const e = Fi(i, Q.input),
      a = Fi(i, Q.file),
      l = i.querySelector(`.${Q.range} input`),
      o = i.querySelector(`.${Q.range} output`),
      c = Fi(i, Q.select),
      u = i.querySelector(`.${Q.checkbox} input`),
      h = Fi(i, Q.textarea);
    (e && (e.oninput = pa),
      a && (a.onchange = pa),
      c && (c.onchange = pa),
      u && (u.onchange = pa),
      h && (h.oninput = pa),
      l &&
        o &&
        ((l.oninput = () => {
          (pa(), (o.value = l.value));
        }),
        (l.onchange = () => {
          (pa(), (o.value = l.value));
        })));
  },
  V5 = (i) => {
    if (typeof i == "string") {
      const e = document.querySelector(i);
      if (!e) throw new Error(`Target element "${i}" not found`);
      return e;
    }
    return i;
  },
  G5 = (i) => {
    const e = Ht();
    e &&
      (e.setAttribute("role", i.toast ? "alert" : "dialog"),
      e.setAttribute("aria-live", i.toast ? "polite" : "assertive"),
      i.toast || e.setAttribute("aria-modal", "true"));
  },
  X5 = (i) => {
    window.getComputedStyle(i).direction === "rtl" &&
      (jt(Re(), Q.rtl), (ht.isRTL = !0));
  },
  Q5 = (i) => {
    const e = F5();
    if (U5()) {
      Ea("SweetAlert2 requires document to initialize");
      return;
    }
    const a = document.createElement("div");
    ((a.className = Q.container),
      e && jt(a, Q["no-transition"]),
      an(a, q5),
      (a.dataset.swal2Theme = i.theme));
    const l = V5(i.target || "body");
    (l.appendChild(a),
      i.topLayer && (a.setAttribute("popover", ""), a.showPopover()),
      G5(i),
      X5(l),
      Y5());
  },
  Mh = (i, e) => {
    i instanceof HTMLElement
      ? e.appendChild(i)
      : typeof i == "object"
        ? Z5(i, e)
        : i && an(e, i);
  },
  Z5 = (i, e) => {
    "jquery" in i ? K5(e, i) : an(e, i.toString());
  },
  K5 = (i, e) => {
    if (((i.textContent = ""), 0 in e))
      for (let a = 0; a in e; a++) i.appendChild(e[a].cloneNode(!0));
    else i.appendChild(e.cloneNode(!0));
  },
  P5 = (i, e) => {
    const a = Zl(),
      l = Cs();
    !a ||
      !l ||
      (!e.showConfirmButton && !e.showDenyButton && !e.showCancelButton
        ? De(a)
        : ve(a),
      en(a, e, "actions"),
      I5(a, l, e),
      an(l, e.loaderHtml || ""),
      en(l, e, "loader"));
  };
function I5(i, e, a) {
  const l = Nn(),
    o = Aa(),
    c = Ms();
  !l ||
    !o ||
    !c ||
    (Bf(l, "confirm", a),
    Bf(o, "deny", a),
    Bf(c, "cancel", a),
    W5(l, o, c, a),
    a.reverseButtons &&
      (a.toast
        ? (i.insertBefore(c, l), i.insertBefore(o, l))
        : (i.insertBefore(c, e), i.insertBefore(o, e), i.insertBefore(l, e))));
}
function W5(i, e, a, l) {
  if (!l.buttonsStyling) {
    _n([i, e, a], Q.styled);
    return;
  }
  (jt([i, e, a], Q.styled),
    l.confirmButtonColor &&
      i.style.setProperty(
        "--swal2-confirm-button-background-color",
        l.confirmButtonColor,
      ),
    l.denyButtonColor &&
      e.style.setProperty(
        "--swal2-deny-button-background-color",
        l.denyButtonColor,
      ),
    l.cancelButtonColor &&
      a.style.setProperty(
        "--swal2-cancel-button-background-color",
        l.cancelButtonColor,
      ),
    Rf(i),
    Rf(e),
    Rf(a));
}
function Rf(i) {
  const e = window.getComputedStyle(i);
  if (e.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const a = e.backgroundColor.replace(
    /rgba?\((\d+), (\d+), (\d+).*/,
    "rgba($1, $2, $3, 0.5)",
  );
  i.style.setProperty(
    "--swal2-action-button-focus-box-shadow",
    e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${a}`),
  );
}
function Bf(i, e, a) {
  const l = gh(e);
  (Kl(i, a[`show${l}Button`], "inline-block"),
    an(i, a[`${e}ButtonText`] || ""),
    i.setAttribute("aria-label", a[`${e}ButtonAriaLabel`] || ""),
    (i.className = Q[e]),
    en(i, a, `${e}Button`));
}
const $5 = (i, e) => {
    const a = vh();
    a &&
      (an(a, e.closeButtonHtml || ""),
      en(a, e, "closeButton"),
      Kl(a, e.showCloseButton),
      a.setAttribute("aria-label", e.closeButtonAriaLabel || ""));
  },
  J5 = (i, e) => {
    const a = Re();
    a &&
      (t3(a, e.backdrop),
      e3(a, e.position),
      n3(a, e.grow),
      en(a, e, "container"));
  };
function t3(i, e) {
  typeof e == "string"
    ? (i.style.background = e)
    : e || jt([document.documentElement, document.body], Q["no-backdrop"]);
}
function e3(i, e) {
  e &&
    (e in Q
      ? jt(i, Q[e])
      : (ke('The "position" parameter is not valid, defaulting to "center"'),
        jt(i, Q.center)));
}
function n3(i, e) {
  e && jt(i, Q[`grow-${e}`]);
}
var It = { innerParams: new WeakMap(), domCache: new WeakMap() };
const i3 = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  a3 = (i, e) => {
    const a = Ht();
    if (!a) return;
    const l = It.innerParams.get(i),
      o = !l || e.input !== l.input;
    (i3.forEach((c) => {
      const u = Fi(a, Q[c]);
      u && (o3(c, e.inputAttributes), (u.className = Q[c]), o && De(u));
    }),
      e.input && (o && s3(e), r3(e)));
  },
  s3 = (i) => {
    if (!i.input) return;
    if (!re[i.input]) {
      Ea(
        `Unexpected type of input! Expected ${Object.keys(re).join(" | ")}, got "${i.input}"`,
      );
      return;
    }
    const e = s2(i.input);
    if (!e) return;
    const a = re[i.input](e, i);
    (ve(e),
      i.inputAutoFocus &&
        setTimeout(() => {
          n2(a);
        }));
  },
  l3 = (i) => {
    for (let e = 0; e < i.attributes.length; e++) {
      const a = i.attributes[e].name;
      ["id", "type", "value", "style"].includes(a) || i.removeAttribute(a);
    }
  },
  o3 = (i, e) => {
    const a = Ht();
    if (!a) return;
    const l = nc(a, i);
    if (l) {
      l3(l);
      for (const o in e) l.setAttribute(o, e[o]);
    }
  },
  r3 = (i) => {
    if (!i.input) return;
    const e = s2(i.input);
    e && en(e, i, "input");
  },
  Ch = (i, e) => {
    !i.placeholder &&
      e.inputPlaceholder &&
      (i.placeholder = e.inputPlaceholder);
  },
  Pl = (i, e, a) => {
    if (a.inputLabel) {
      const l = document.createElement("label"),
        o = Q["input-label"];
      (l.setAttribute("for", i.id),
        (l.className = o),
        typeof a.customClass == "object" && jt(l, a.customClass.inputLabel),
        (l.innerText = a.inputLabel),
        e.insertAdjacentElement("beforebegin", l));
    }
  },
  s2 = (i) => {
    const e = Ht();
    if (e) return Fi(e, Q[i] || Q.input);
  },
  Fr = (i, e) => {
    ["string", "number"].includes(typeof e)
      ? (i.value = `${e}`)
      : mh(e) ||
        ke(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`,
        );
  },
  re = {};
re.text =
  re.email =
  re.password =
  re.number =
  re.tel =
  re.url =
  re.search =
  re.date =
  re["datetime-local"] =
  re.time =
  re.week =
  re.month =
    (i, e) => {
      const a = i;
      return (
        Fr(a, e.inputValue),
        Pl(a, a, e),
        Ch(a, e),
        (a.type = e.input),
        a
      );
    };
re.file = (i, e) => {
  const a = i;
  return (Pl(a, a, e), Ch(a, e), a);
};
re.range = (i, e) => {
  const a = i,
    l = a.querySelector("input"),
    o = a.querySelector("output");
  return (
    l && (Fr(l, e.inputValue), (l.type = e.input), Pl(l, i, e)),
    o && Fr(o, e.inputValue),
    i
  );
};
re.select = (i, e) => {
  const a = i;
  if (((a.textContent = ""), e.inputPlaceholder)) {
    const l = document.createElement("option");
    (an(l, e.inputPlaceholder),
      (l.value = ""),
      (l.disabled = !0),
      (l.selected = !0),
      a.appendChild(l));
  }
  return (Pl(a, a, e), a);
};
re.radio = (i) => {
  const e = i;
  return ((e.textContent = ""), i);
};
re.checkbox = (i, e) => {
  const a = Ht();
  if (!a) throw new Error("Popup not found");
  const l = nc(a, "checkbox");
  if (!l) throw new Error("Checkbox input not found");
  ((l.value = "1"), (l.checked = !!e.inputValue));
  const c = i.querySelector("span");
  if (c) {
    const u = e.inputPlaceholder || e.inputLabel;
    u && an(c, u);
  }
  return l;
};
re.textarea = (i, e) => {
  const a = i;
  (Fr(a, e.inputValue), Ch(a, e), Pl(a, a, e));
  const l = (o) =>
    parseInt(window.getComputedStyle(o).marginLeft) +
    parseInt(window.getComputedStyle(o).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const o = Ht();
        if (!o) return;
        const c = parseInt(window.getComputedStyle(o).width),
          u = () => {
            if (!document.body.contains(a)) return;
            const h = a.offsetWidth + l(a),
              p = Ht();
            p && (h > c ? (p.style.width = `${h}px`) : xa(p, "width", e.width));
          };
        new MutationObserver(u).observe(a, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    a
  );
};
const c3 = (i, e) => {
    const a = bh();
    a &&
      (xh(a),
      en(a, e, "htmlContainer"),
      e.html
        ? (Mh(e.html, a), ve(a, "block"))
        : e.text
          ? ((a.textContent = e.text), ve(a, "block"))
          : De(a),
      a3(i, e));
  },
  u3 = (i, e) => {
    const a = e2();
    a &&
      (xh(a),
      Kl(a, !!e.footer, "block"),
      e.footer && Mh(e.footer, a),
      en(a, e, "footer"));
  },
  f3 = (i, e) => {
    const a = It.innerParams.get(i),
      l = Ss();
    if (!l) return;
    if (a && e.icon === a.icon) {
      (J0(l, e), $0(l, e));
      return;
    }
    if (!e.icon && !e.iconHtml) {
      De(l);
      return;
    }
    if (e.icon && Object.keys(qr).indexOf(e.icon) === -1) {
      (Ea(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`,
      ),
        De(l));
      return;
    }
    (ve(l),
      J0(l, e),
      $0(l, e),
      jt(l, e.showClass && e.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", l2));
  },
  $0 = (i, e) => {
    for (const [a, l] of Object.entries(qr)) e.icon !== a && _n(i, l);
    (jt(i, e.icon && qr[e.icon]), g3(i, e), l2(), en(i, e, "icon"));
  },
  l2 = () => {
    const i = Ht();
    if (!i) return;
    const e = window.getComputedStyle(i).getPropertyValue("background-color"),
      a = i.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix",
      );
    for (let l = 0; l < a.length; l++) a[l].style.backgroundColor = e;
  },
  h3 = (i) => `
  ${i.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${i.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${i.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  d3 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  J0 = (i, e) => {
    if (!e.icon && !e.iconHtml) return;
    let a = i.innerHTML,
      l = "";
    (e.iconHtml
      ? (l = tb(e.iconHtml))
      : e.icon === "success"
        ? ((l = h3(e)), (a = a.replace(/ style=".*?"/g, "")))
        : e.icon === "error"
          ? (l = d3)
          : e.icon &&
            (l = tb({ question: "?", warning: "!", info: "i" }[e.icon])),
      a.trim() !== l.trim() && an(i, l));
  },
  g3 = (i, e) => {
    if (e.iconColor) {
      ((i.style.color = e.iconColor), (i.style.borderColor = e.iconColor));
      for (const a of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        W0(i, a, "background-color", e.iconColor);
      W0(i, ".swal2-success-ring", "border-color", e.iconColor);
    }
  },
  tb = (i) => `<div class="${Q["icon-content"]}">${i}</div>`,
  p3 = (i, e) => {
    const a = t2();
    if (a) {
      if (!e.imageUrl) {
        De(a);
        return;
      }
      (ve(a, ""),
        a.setAttribute("src", e.imageUrl),
        a.setAttribute("alt", e.imageAlt || ""),
        xa(a, "width", e.imageWidth),
        xa(a, "height", e.imageHeight),
        (a.className = Q.image),
        en(a, e, "image"));
    }
  };
let Eh = !1,
  o2 = 0,
  r2 = 0,
  c2 = 0,
  u2 = 0;
const m3 = (i) => {
    (i.addEventListener("mousedown", Yr),
      document.body.addEventListener("mousemove", Vr),
      i.addEventListener("mouseup", Gr),
      i.addEventListener("touchstart", Yr),
      document.body.addEventListener("touchmove", Vr),
      i.addEventListener("touchend", Gr));
  },
  b3 = (i) => {
    (i.removeEventListener("mousedown", Yr),
      document.body.removeEventListener("mousemove", Vr),
      i.removeEventListener("mouseup", Gr),
      i.removeEventListener("touchstart", Yr),
      document.body.removeEventListener("touchmove", Vr),
      i.removeEventListener("touchend", Gr));
  },
  Yr = (i) => {
    const e = Ht();
    if (!e) return;
    const a = Ss();
    if (i.target === e || (a && a.contains(i.target))) {
      Eh = !0;
      const l = f2(i);
      ((o2 = l.clientX),
        (r2 = l.clientY),
        (c2 = parseInt(e.style.insetInlineStart) || 0),
        (u2 = parseInt(e.style.insetBlockStart) || 0),
        jt(e, "swal2-dragging"));
    }
  },
  Vr = (i) => {
    const e = Ht();
    if (e && Eh) {
      let { clientX: a, clientY: l } = f2(i);
      const o = a - o2;
      ((e.style.insetInlineStart = `${c2 + (ht.isRTL ? -o : o)}px`),
        (e.style.insetBlockStart = `${u2 + (l - r2)}px`));
    }
  },
  Gr = () => {
    const i = Ht();
    ((Eh = !1), _n(i, "swal2-dragging"));
  },
  f2 = (i) => {
    let e = 0,
      a = 0;
    return (
      i.type.startsWith("mouse")
        ? ((e = i.clientX), (a = i.clientY))
        : i.type.startsWith("touch") &&
          ((e = i.touches[0].clientX), (a = i.touches[0].clientY)),
      { clientX: e, clientY: a }
    );
  },
  y3 = (i, e) => {
    const a = Re(),
      l = Ht();
    if (!(!a || !l)) {
      if (e.toast) {
        (xa(a, "width", e.width), (l.style.width = "100%"));
        const o = Cs();
        o && l.insertBefore(o, Ss());
      } else xa(l, "width", e.width);
      (xa(l, "padding", e.padding),
        e.color && (l.style.color = e.color),
        e.background && (l.style.background = e.background),
        De(Jr()),
        v3(l, e),
        e.draggable && !e.toast
          ? (jt(l, Q.draggable), m3(l))
          : (_n(l, Q.draggable), b3(l)));
    }
  },
  v3 = (i, e) => {
    const a = e.showClass || {};
    ((i.className = `${Q.popup} ${Xe(i) ? a.popup : ""}`),
      e.toast
        ? (jt([document.documentElement, document.body], Q["toast-shown"]),
          jt(i, Q.toast))
        : jt(i, Q.modal),
      en(i, e, "popup"),
      typeof e.customClass == "string" && jt(i, e.customClass),
      e.icon && jt(i, Q[`icon-${e.icon}`]));
  },
  w3 = (i, e) => {
    const a = yh();
    if (!a) return;
    const { progressSteps: l, currentProgressStep: o } = e;
    if (!l || l.length === 0 || o === void 0) {
      De(a);
      return;
    }
    (ve(a),
      (a.textContent = ""),
      o >= l.length &&
        ke(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
        ),
      l.forEach((c, u) => {
        const h = _3(c);
        if (
          (a.appendChild(h),
          u === o && jt(h, Q["active-progress-step"]),
          u !== l.length - 1)
        ) {
          const p = x3(e);
          a.appendChild(p);
        }
      }));
  },
  _3 = (i) => {
    const e = document.createElement("li");
    return (jt(e, Q["progress-step"]), an(e, i), e);
  },
  x3 = (i) => {
    const e = document.createElement("li");
    return (
      jt(e, Q["progress-step-line"]),
      i.progressStepsDistance && xa(e, "width", i.progressStepsDistance),
      e
    );
  },
  S3 = (i, e) => {
    const a = Jb();
    a &&
      (xh(a),
      Kl(a, !!(e.title || e.titleText), "block"),
      e.title && Mh(e.title, a),
      e.titleText && (a.innerText = e.titleText),
      en(a, e, "title"));
  },
  h2 = (i, e) => {
    var a;
    (y3(i, e),
      J5(i, e),
      w3(i, e),
      f3(i, e),
      p3(i, e),
      S3(i, e),
      $5(i, e),
      c3(i, e),
      P5(i, e),
      u3(i, e));
    const l = Ht();
    (typeof e.didRender == "function" && l && e.didRender(l),
      (a = ht.eventEmitter) === null || a === void 0 || a.emit("didRender", l));
  },
  M3 = () => Xe(Ht()),
  d2 = () => {
    var i;
    return (i = Nn()) === null || i === void 0 ? void 0 : i.click();
  },
  C3 = () => {
    var i;
    return (i = Aa()) === null || i === void 0 ? void 0 : i.click();
  },
  E3 = () => {
    var i;
    return (i = Ms()) === null || i === void 0 ? void 0 : i.click();
  },
  Es = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  g2 = (i) => {
    if (i.keydownTarget && i.keydownHandlerAdded && i.keydownHandler) {
      const e = i.keydownHandler;
      (i.keydownTarget.removeEventListener("keydown", e, {
        capture: i.keydownListenerCapture,
      }),
        (i.keydownHandlerAdded = !1));
    }
  },
  A3 = (i, e, a) => {
    if ((g2(i), !e.toast)) {
      const l = (c) => O3(e, c, a);
      i.keydownHandler = l;
      const o = e.keydownListenerCapture ? window : Ht();
      if (o) {
        ((i.keydownTarget = o),
          (i.keydownListenerCapture = e.keydownListenerCapture));
        const c = l;
        (i.keydownTarget.addEventListener("keydown", c, {
          capture: i.keydownListenerCapture,
        }),
          (i.keydownHandlerAdded = !0));
      }
    }
  },
  Xf = (i, e) => {
    var a;
    const l = wh();
    if (l.length) {
      ((i = i + e),
        i === -2 && (i = l.length - 1),
        i === l.length ? (i = 0) : i === -1 && (i = l.length - 1),
        l[i].focus());
      return;
    }
    (a = Ht()) === null || a === void 0 || a.focus();
  },
  p2 = ["ArrowRight", "ArrowDown"],
  T3 = ["ArrowLeft", "ArrowUp"],
  O3 = (i, e, a) => {
    i &&
      (e.isComposing ||
        e.keyCode === 229 ||
        (i.stopKeydownPropagation && e.stopPropagation(),
        e.key === "Enter"
          ? D3(e, i)
          : e.key === "Tab"
            ? z3(e)
            : [...p2, ...T3].includes(e.key)
              ? k3(e.key)
              : e.key === "Escape" && R3(e, i, a)));
  },
  D3 = (i, e) => {
    if (!$r(e.allowEnterKey)) return;
    const a = Ht();
    if (!a || !e.input) return;
    const l = nc(a, e.input);
    if (
      i.target &&
      l &&
      i.target instanceof HTMLElement &&
      i.target.outerHTML === l.outerHTML
    ) {
      if (["textarea", "file"].includes(e.input)) return;
      (d2(), i.preventDefault());
    }
  },
  z3 = (i) => {
    const e = i.target,
      a = wh();
    let l = -1;
    for (let o = 0; o < a.length; o++)
      if (e === a[o]) {
        l = o;
        break;
      }
    (i.shiftKey ? Xf(l, -1) : Xf(l, 1),
      i.stopPropagation(),
      i.preventDefault());
  },
  k3 = (i) => {
    const e = Zl(),
      a = Nn(),
      l = Aa(),
      o = Ms();
    if (!e || !a || !l || !o) return;
    const c = [a, l, o];
    if (
      document.activeElement instanceof HTMLElement &&
      !c.includes(document.activeElement)
    )
      return;
    const u = p2.includes(i) ? "nextElementSibling" : "previousElementSibling";
    let h = document.activeElement;
    if (h) {
      for (let p = 0; p < e.children.length; p++) {
        if (((h = h[u]), !h)) return;
        if (h instanceof HTMLButtonElement && Xe(h)) break;
      }
      h instanceof HTMLButtonElement && h.focus();
    }
  },
  R3 = (i, e, a) => {
    (i.preventDefault(), $r(e.allowEscapeKey) && a(Es.esc));
  };
var ys = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const B3 = () => {
    const i = Re();
    Array.from(document.body.children).forEach((a) => {
      a.contains(i) ||
        (a.hasAttribute("aria-hidden") &&
          a.setAttribute(
            "data-previous-aria-hidden",
            a.getAttribute("aria-hidden") || "",
          ),
        a.setAttribute("aria-hidden", "true"));
    });
  },
  m2 = () => {
    Array.from(document.body.children).forEach((e) => {
      e.hasAttribute("data-previous-aria-hidden")
        ? (e.setAttribute(
            "aria-hidden",
            e.getAttribute("data-previous-aria-hidden") || "",
          ),
          e.removeAttribute("data-previous-aria-hidden"))
        : e.removeAttribute("aria-hidden");
    });
  },
  b2 = typeof window < "u" && !!window.GestureEvent,
  L3 = () => {
    if (b2 && !ci(document.body, Q.iosfix)) {
      const i = document.body.scrollTop;
      ((document.body.style.top = `${i * -1}px`),
        jt(document.body, Q.iosfix),
        j3());
    }
  },
  j3 = () => {
    const i = Re();
    if (!i) return;
    let e;
    ((i.ontouchstart = (a) => {
      e = H3(a);
    }),
      (i.ontouchmove = (a) => {
        e && (a.preventDefault(), a.stopPropagation());
      }));
  },
  H3 = (i) => {
    const e = i.target,
      a = Re(),
      l = bh();
    return !a || !l || N3(i) || U3(i)
      ? !1
      : e === a ||
          (!Gf(a) &&
            e instanceof HTMLElement &&
            !H5(e, l) &&
            e.tagName !== "INPUT" &&
            e.tagName !== "TEXTAREA" &&
            !(Gf(l) && l.contains(e)));
  },
  N3 = (i) =>
    !!(i.touches && i.touches.length && i.touches[0].touchType === "stylus"),
  U3 = (i) => i.touches && i.touches.length > 1,
  q3 = () => {
    if (ci(document.body, Q.iosfix)) {
      const i = parseInt(document.body.style.top, 10);
      (_n(document.body, Q.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = i * -1));
    }
  },
  F3 = () => {
    const i = document.createElement("div");
    ((i.className = Q["scrollbar-measure"]), document.body.appendChild(i));
    const e = i.getBoundingClientRect().width - i.clientWidth;
    return (document.body.removeChild(i), e);
  };
let gs = null;
const Y3 = (i) => {
    gs === null &&
      (document.body.scrollHeight > window.innerHeight || i === "scroll") &&
      ((gs = parseInt(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("padding-right"),
      )),
      (document.body.style.paddingRight = `${gs + F3()}px`));
  },
  V3 = () => {
    gs !== null &&
      ((document.body.style.paddingRight = `${gs}px`), (gs = null));
  };
function y2(i, e, a, l) {
  (ec() ? eb(i, l) : (A5(a).then(() => eb(i, l)), g2(ht)),
    b2
      ? (e.setAttribute("style", "display:none !important"),
        e.removeAttribute("class"),
        (e.innerHTML = ""))
      : e.remove(),
    _h() && (V3(), q3(), m2()),
    G3());
}
function G3() {
  _n(
    [document.documentElement, document.body],
    [Q.shown, Q["height-auto"], Q["no-backdrop"], Q["toast-shown"]],
  );
}
function Yi(i) {
  i = Q3(i);
  const e = ys.swalPromiseResolve.get(this),
    a = X3(this);
  this.isAwaitingPromise ? i.isDismissed || (Il(this), e(i)) : a && e(i);
}
const X3 = (i) => {
  const e = Ht();
  if (!e) return !1;
  const a = It.innerParams.get(i);
  if (!a || ci(e, a.hideClass.popup)) return !1;
  (_n(e, a.showClass.popup), jt(e, a.hideClass.popup));
  const l = Re();
  return (
    _n(l, a.showClass.backdrop),
    jt(l, a.hideClass.backdrop),
    Z3(i, e, a),
    !0
  );
};
function v2(i) {
  const e = ys.swalPromiseReject.get(this);
  (Il(this), e && e(i));
}
const Il = (i) => {
    i.isAwaitingPromise &&
      (delete i.isAwaitingPromise, It.innerParams.get(i) || i._destroy());
  },
  Q3 = (i) =>
    typeof i > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, i),
  Z3 = (i, e, a) => {
    var l;
    const o = Re(),
      c = a2(e);
    (typeof a.willClose == "function" && a.willClose(e),
      (l = ht.eventEmitter) === null || l === void 0 || l.emit("willClose", e),
      c && o
        ? K3(i, e, o, !!a.returnFocus, a.didClose)
        : o && y2(i, o, !!a.returnFocus, a.didClose));
  },
  K3 = (i, e, a, l, o) => {
    ht.swalCloseEventFinishedCallback = y2.bind(null, i, a, l, o);
    const c = function (u) {
      if (u.target === e) {
        var h;
        ((h = ht.swalCloseEventFinishedCallback) === null ||
          h === void 0 ||
          h.call(ht),
          delete ht.swalCloseEventFinishedCallback,
          e.removeEventListener("animationend", c),
          e.removeEventListener("transitionend", c));
      }
    };
    (e.addEventListener("animationend", c),
      e.addEventListener("transitionend", c));
  },
  eb = (i, e) => {
    setTimeout(() => {
      var a;
      (typeof e == "function" && e.bind(i.params)(),
        (a = ht.eventEmitter) === null || a === void 0 || a.emit("didClose"),
        i._destroy && i._destroy());
    });
  },
  vs = (i) => {
    let e = Ht();
    if ((e || new wa(), (e = Ht()), !e)) return;
    const a = Cs();
    (ec() ? De(Ss()) : P3(e, i),
      ve(a),
      e.setAttribute("data-loading", "true"),
      e.setAttribute("aria-busy", "true"),
      e.focus());
  },
  P3 = (i, e) => {
    const a = Zl(),
      l = Cs();
    !a ||
      !l ||
      (!e && Xe(Nn()) && (e = Nn()),
      ve(a),
      e &&
        (De(e),
        l.setAttribute("data-button-to-replace", e.className),
        a.insertBefore(l, e)),
      jt([i, a], Q.loading));
  },
  I3 = (i, e) => {
    e.input === "select" || e.input === "radio"
      ? e4(i, e)
      : ["text", "email", "number", "tel", "textarea"].some(
          (a) => a === e.input,
        ) &&
        (ph(e.inputValue) || mh(e.inputValue)) &&
        (vs(Nn()), n4(i, e));
  },
  W3 = (i, e) => {
    const a = i.getInput();
    if (!a) return null;
    switch (e.input) {
      case "checkbox":
        return $3(a);
      case "radio":
        return J3(a);
      case "file":
        return t4(a);
      default:
        return e.inputAutoTrim ? a.value.trim() : a.value;
    }
  },
  $3 = (i) => (i.checked ? 1 : 0),
  J3 = (i) => (i.checked ? i.value : null),
  t4 = (i) =>
    i.files && i.files.length
      ? i.getAttribute("multiple") !== null
        ? i.files
        : i.files[0]
      : null,
  e4 = (i, e) => {
    const a = Ht();
    if (!a) return;
    const l = (o) => {
      e.input === "select"
        ? i4(a, Xr(o), e)
        : e.input === "radio" && a4(a, Xr(o), e);
    };
    ph(e.inputOptions) || mh(e.inputOptions)
      ? (vs(Nn()),
        Xl(e.inputOptions).then((o) => {
          (i.hideLoading(), l(o));
        }))
      : typeof e.inputOptions == "object"
        ? l(e.inputOptions)
        : Ea(
            `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`,
          );
  },
  n4 = (i, e) => {
    const a = i.getInput();
    a &&
      (De(a),
      Xl(e.inputValue)
        .then((l) => {
          ((a.value = e.input === "number" ? `${parseFloat(l) || 0}` : `${l}`),
            ve(a),
            a.focus(),
            i.hideLoading());
        })
        .catch((l) => {
          (Ea(`Error in inputValue promise: ${l}`),
            (a.value = ""),
            ve(a),
            a.focus(),
            i.hideLoading());
        }));
  };
function i4(i, e, a) {
  const l = Fi(i, Q.select);
  if (!l) return;
  const o = (c, u, h) => {
    const p = document.createElement("option");
    ((p.value = h),
      an(p, u),
      (p.selected = w2(h, a.inputValue)),
      c.appendChild(p));
  };
  (e.forEach((c) => {
    const u = c[0],
      h = c[1];
    if (Array.isArray(h)) {
      const p = document.createElement("optgroup");
      ((p.label = u),
        (p.disabled = !1),
        l.appendChild(p),
        h.forEach((d) => o(p, d[1], d[0])));
    } else o(l, h, u);
  }),
    l.focus());
}
function a4(i, e, a) {
  const l = Fi(i, Q.radio);
  if (!l) return;
  e.forEach((c) => {
    const u = c[0],
      h = c[1],
      p = document.createElement("input"),
      d = document.createElement("label");
    ((p.type = "radio"),
      (p.name = Q.radio),
      (p.value = u),
      w2(u, a.inputValue) && (p.checked = !0));
    const m = document.createElement("span");
    (an(m, h),
      (m.className = Q.label),
      d.appendChild(p),
      d.appendChild(m),
      l.appendChild(d));
  });
  const o = l.querySelectorAll("input");
  o.length && o[0].focus();
}
const Xr = (i) => {
    const e = [];
    return (
      i instanceof Map
        ? i.forEach((a, l) => {
            let o = a;
            (typeof o == "object" && (o = Xr(o)), e.push([l, o]));
          })
        : Object.keys(i).forEach((a) => {
            let l = i[a];
            (typeof l == "object" && (l = Xr(l)), e.push([a, l]));
          }),
      e
    );
  },
  w2 = (i, e) =>
    !!e && e !== null && e !== void 0 && e.toString() === i.toString(),
  s4 = (i) => {
    const e = It.innerParams.get(i);
    (i.disableButtons(), e.input ? _2(i, "confirm") : Th(i, !0));
  },
  l4 = (i) => {
    const e = It.innerParams.get(i);
    (i.disableButtons(), e.returnInputValueOnDeny ? _2(i, "deny") : Ah(i, !1));
  },
  o4 = (i, e) => {
    (i.disableButtons(), e(Es.cancel));
  },
  _2 = (i, e) => {
    const a = It.innerParams.get(i);
    if (!a.input) {
      Ea(
        `The "input" parameter is needed to be set when using returnInputValueOn${gh(e)}`,
      );
      return;
    }
    const l = i.getInput(),
      o = W3(i, a);
    a.inputValidator
      ? r4(i, o, e)
      : l && !l.checkValidity()
        ? (i.enableButtons(),
          i.showValidationMessage(a.validationMessage || l.validationMessage))
        : e === "deny"
          ? Ah(i, o)
          : Th(i, o);
  },
  r4 = (i, e, a) => {
    const l = It.innerParams.get(i);
    (i.disableInput(),
      Promise.resolve()
        .then(() => Xl(l.inputValidator(e, l.validationMessage)))
        .then((c) => {
          (i.enableButtons(),
            i.enableInput(),
            c
              ? i.showValidationMessage(c)
              : a === "deny"
                ? Ah(i, e)
                : Th(i, e));
        }));
  },
  Ah = (i, e) => {
    const a = It.innerParams.get(i);
    (a.showLoaderOnDeny && vs(Aa()),
      a.preDeny
        ? ((i.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Xl(a.preDeny(e, a.validationMessage)))
            .then((o) => {
              o === !1
                ? (i.hideLoading(), Il(i))
                : i.close({ isDenied: !0, value: typeof o > "u" ? e : o });
            })
            .catch((o) => x2(i, o)))
        : i.close({ isDenied: !0, value: e }));
  },
  nb = (i, e) => {
    i.close({ isConfirmed: !0, value: e });
  },
  x2 = (i, e) => {
    i.rejectPromise(e);
  },
  Th = (i, e) => {
    const a = It.innerParams.get(i);
    (a.showLoaderOnConfirm && vs(),
      a.preConfirm
        ? (i.resetValidationMessage(),
          (i.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Xl(a.preConfirm(e, a.validationMessage)))
            .then((o) => {
              Xe(Jr()) || o === !1
                ? (i.hideLoading(), Il(i))
                : nb(i, typeof o > "u" ? e : o);
            })
            .catch((o) => x2(i, o)))
        : nb(i, e));
  };
function Qr() {
  const i = It.innerParams.get(this);
  if (!i) return;
  const e = It.domCache.get(this);
  (De(e.loader),
    ec() ? i.icon && ve(Ss()) : c4(e),
    _n([e.popup, e.actions], Q.loading),
    e.popup.removeAttribute("aria-busy"),
    e.popup.removeAttribute("data-loading"),
    (e.confirmButton.disabled = !1),
    (e.denyButton.disabled = !1),
    (e.cancelButton.disabled = !1));
}
const c4 = (i) => {
  const e = i.loader.getAttribute("data-button-to-replace"),
    a = e ? i.popup.getElementsByClassName(e) : [];
  a.length ? ve(a[0], "inline-block") : j5() && De(i.actions);
};
function S2() {
  const i = It.innerParams.get(this),
    e = It.domCache.get(this);
  return e ? nc(e.popup, i.input) : null;
}
function M2(i, e, a) {
  const l = It.domCache.get(i);
  e.forEach((o) => {
    l[o].disabled = a;
  });
}
function C2(i, e) {
  const a = Ht();
  if (!(!a || !i))
    if (i.type === "radio") {
      const l = a.querySelectorAll(`[name="${Q.radio}"]`);
      for (let o = 0; o < l.length; o++) l[o].disabled = e;
    } else i.disabled = e;
}
function E2() {
  M2(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function A2() {
  M2(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function T2() {
  C2(this.getInput(), !1);
}
function O2() {
  C2(this.getInput(), !0);
}
function D2(i) {
  const e = It.domCache.get(this),
    a = It.innerParams.get(this);
  (an(e.validationMessage, i),
    (e.validationMessage.className = Q["validation-message"]),
    a.customClass &&
      a.customClass.validationMessage &&
      jt(e.validationMessage, a.customClass.validationMessage),
    ve(e.validationMessage));
  const l = this.getInput();
  l &&
    (l.setAttribute("aria-invalid", "true"),
    l.setAttribute("aria-describedby", Q["validation-message"]),
    n2(l),
    jt(l, Q.inputerror));
}
function z2() {
  const i = It.domCache.get(this);
  i.validationMessage && De(i.validationMessage);
  const e = this.getInput();
  e &&
    (e.removeAttribute("aria-invalid"),
    e.removeAttribute("aria-describedby"),
    _n(e, Q.inputerror));
}
const Vi = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  u4 = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  f4 = { allowEnterKey: void 0 },
  h4 = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  k2 = (i) => Object.prototype.hasOwnProperty.call(Vi, i),
  R2 = (i) => u4.indexOf(i) !== -1,
  B2 = (i) => f4[i],
  d4 = (i) => {
    k2(i) || ke(`Unknown parameter "${i}"`);
  },
  g4 = (i) => {
    h4.includes(i) && ke(`The parameter "${i}" is incompatible with toasts`);
  },
  p4 = (i) => {
    const e = B2(i);
    e && $b(i, e);
  },
  L2 = (i) => {
    (i.backdrop === !1 &&
      i.allowOutsideClick &&
      ke(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
      ),
      i.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "bootstrap-4",
          "bootstrap-4-light",
          "bootstrap-4-dark",
          "bootstrap-5",
          "bootstrap-5-light",
          "bootstrap-5-dark",
          "material-ui",
          "material-ui-light",
          "material-ui-dark",
          "embed-iframe",
          "bulma",
          "bulma-light",
          "bulma-dark",
        ].includes(i.theme) &&
        ke(`Invalid theme "${i.theme}"`));
    for (const e in i) (d4(e), i.toast && g4(e), p4(e));
  };
function j2(i) {
  const e = Re(),
    a = Ht(),
    l = It.innerParams.get(this);
  if (!a || ci(a, l.hideClass.popup)) {
    ke(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
    );
    return;
  }
  const o = m4(i),
    c = Object.assign({}, l, o);
  (L2(c),
    e && (e.dataset.swal2Theme = c.theme),
    h2(this, c),
    It.innerParams.set(this, c),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, i),
        writable: !1,
        enumerable: !0,
      },
    }));
}
const m4 = (i) => {
  const e = {};
  return (
    Object.keys(i).forEach((a) => {
      if (R2(a)) {
        const l = i;
        e[a] = l[a];
      } else ke(`Invalid parameter to update: ${a}`);
    }),
    e
  );
};
function H2() {
  var i;
  const e = It.domCache.get(this),
    a = It.innerParams.get(this);
  if (!a) {
    N2(this);
    return;
  }
  (e.popup &&
    ht.swalCloseEventFinishedCallback &&
    (ht.swalCloseEventFinishedCallback(),
    delete ht.swalCloseEventFinishedCallback),
    typeof a.didDestroy == "function" && a.didDestroy(),
    (i = ht.eventEmitter) === null || i === void 0 || i.emit("didDestroy"),
    b4(this));
}
const b4 = (i) => {
    (N2(i),
      delete i.params,
      delete ht.keydownHandler,
      delete ht.keydownTarget,
      delete ht.currentInstance);
  },
  N2 = (i) => {
    i.isAwaitingPromise
      ? (Lf(It, i), (i.isAwaitingPromise = !0))
      : (Lf(ys, i),
        Lf(It, i),
        delete i.isAwaitingPromise,
        delete i.disableButtons,
        delete i.enableButtons,
        delete i.getInput,
        delete i.disableInput,
        delete i.enableInput,
        delete i.hideLoading,
        delete i.disableLoading,
        delete i.showValidationMessage,
        delete i.resetValidationMessage,
        delete i.close,
        delete i.closePopup,
        delete i.closeModal,
        delete i.closeToast,
        delete i.rejectPromise,
        delete i.update,
        delete i._destroy);
  },
  Lf = (i, e) => {
    for (const a in i) i[a].delete(e);
  };
var y4 = Object.freeze({
  __proto__: null,
  _destroy: H2,
  close: Yi,
  closeModal: Yi,
  closePopup: Yi,
  closeToast: Yi,
  disableButtons: A2,
  disableInput: O2,
  disableLoading: Qr,
  enableButtons: E2,
  enableInput: T2,
  getInput: S2,
  handleAwaitingPromise: Il,
  hideLoading: Qr,
  rejectPromise: v2,
  resetValidationMessage: z2,
  showValidationMessage: D2,
  update: j2,
});
const v4 = (i, e, a) => {
    i.toast ? w4(i, e, a) : (x4(e), S4(e), M4(i, e, a));
  },
  w4 = (i, e, a) => {
    e.popup.onclick = () => {
      (i && (_4(i) || i.timer || i.input)) || a(Es.close);
    };
  },
  _4 = (i) =>
    !!(
      i.showConfirmButton ||
      i.showDenyButton ||
      i.showCancelButton ||
      i.showCloseButton
    );
let Zr = !1;
const x4 = (i) => {
    i.popup.onmousedown = () => {
      i.container.onmouseup = function (e) {
        ((i.container.onmouseup = () => {}),
          e.target === i.container && (Zr = !0));
      };
    };
  },
  S4 = (i) => {
    i.container.onmousedown = (e) => {
      (e.target === i.container && e.preventDefault(),
        (i.popup.onmouseup = function (a) {
          ((i.popup.onmouseup = () => {}),
            (a.target === i.popup ||
              (a.target instanceof HTMLElement &&
                i.popup.contains(a.target))) &&
              (Zr = !0));
        }));
    };
  },
  M4 = (i, e, a) => {
    e.container.onclick = (l) => {
      if (Zr) {
        Zr = !1;
        return;
      }
      l.target === e.container && $r(i.allowOutsideClick) && a(Es.backdrop);
    };
  },
  C4 = (i) => typeof i == "object" && i.jquery,
  ib = (i) => i instanceof Element || C4(i),
  E4 = (i) => {
    const e = {};
    return (
      typeof i[0] == "object" && !ib(i[0])
        ? Object.assign(e, i[0])
        : ["title", "html", "icon"].forEach((a, l) => {
            const o = i[l];
            typeof o == "string" || ib(o)
              ? (e[a] = o)
              : o !== void 0 &&
                Ea(
                  `Unexpected type of ${a}! Expected "string" or "Element", got ${typeof o}`,
                );
          }),
      e
    );
  };
function A4(...i) {
  return new this(...i);
}
function T4(i) {
  class e extends this {
    _main(l, o) {
      return super._main(l, Object.assign({}, i, o));
    }
  }
  return e;
}
const O4 = () => ht.timeout && ht.timeout.getTimerLeft(),
  U2 = () => {
    if (ht.timeout) return (N5(), ht.timeout.stop());
  },
  q2 = () => {
    if (ht.timeout) {
      const i = ht.timeout.start();
      return (Sh(i), i);
    }
  },
  D4 = () => {
    const i = ht.timeout;
    return i && (i.running ? U2() : q2());
  },
  z4 = (i) => {
    if (ht.timeout) {
      const e = ht.timeout.increase(i);
      return (Sh(e, !0), e);
    }
  },
  k4 = () => !!(ht.timeout && ht.timeout.isRunning());
let ab = !1;
const Qf = {};
function R4(i = "data-swal-template") {
  ((Qf[i] = this),
    ab || (document.body.addEventListener("click", B4), (ab = !0)));
}
const B4 = (i) => {
  for (let e = i.target; e && e !== document; e = e.parentNode)
    for (const a in Qf) {
      const l = e.getAttribute && e.getAttribute(a);
      if (l) {
        Qf[a].fire({ template: l });
        return;
      }
    }
};
class L4 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(e) {
    return (
      typeof this.events[e] > "u" && (this.events[e] = []),
      this.events[e]
    );
  }
  on(e, a) {
    const l = this._getHandlersByEventName(e);
    l.includes(a) || l.push(a);
  }
  once(e, a) {
    const l = (...o) => {
      (this.removeListener(e, l), a.apply(this, o));
    };
    this.on(e, l);
  }
  emit(e, ...a) {
    this._getHandlersByEventName(e).forEach((l) => {
      try {
        l.apply(this, a);
      } catch (o) {
        console.error(o);
      }
    });
  }
  removeListener(e, a) {
    const l = this._getHandlersByEventName(e),
      o = l.indexOf(a);
    o > -1 && l.splice(o, 1);
  }
  removeAllListeners(e) {
    this.events[e] !== void 0 && (this.events[e].length = 0);
  }
  reset() {
    this.events = {};
  }
}
ht.eventEmitter = new L4();
const j4 = (i, e) => {
    ht.eventEmitter && ht.eventEmitter.on(i, e);
  },
  H4 = (i, e) => {
    ht.eventEmitter && ht.eventEmitter.once(i, e);
  },
  N4 = (i, e) => {
    if (ht.eventEmitter) {
      if (!i) {
        ht.eventEmitter.reset();
        return;
      }
      e
        ? ht.eventEmitter.removeListener(i, e)
        : ht.eventEmitter.removeAllListeners(i);
    }
  };
var U4 = Object.freeze({
  __proto__: null,
  argsToParams: E4,
  bindClickHandler: R4,
  clickCancel: E3,
  clickConfirm: d2,
  clickDeny: C3,
  enableLoading: vs,
  fire: A4,
  getActions: Zl,
  getCancelButton: Ms,
  getCloseButton: vh,
  getConfirmButton: Nn,
  getContainer: Re,
  getDenyButton: Aa,
  getFocusableElements: wh,
  getFooter: e2,
  getHtmlContainer: bh,
  getIcon: Ss,
  getIconContent: z5,
  getImage: t2,
  getInputLabel: k5,
  getLoader: Cs,
  getPopup: Ht,
  getProgressSteps: yh,
  getTimerLeft: O4,
  getTimerProgressBar: tc,
  getTitle: Jb,
  getValidationMessage: Jr,
  increaseTimer: z4,
  isDeprecatedParameter: B2,
  isLoading: B5,
  isTimerRunning: k4,
  isUpdatableParameter: R2,
  isValidParameter: k2,
  isVisible: M3,
  mixin: T4,
  off: N4,
  on: j4,
  once: H4,
  resumeTimer: q2,
  showLoading: vs,
  stopTimer: U2,
  toggleTimer: D4,
});
class q4 {
  constructor(e, a) {
    ((this.callback = e),
      (this.remaining = a),
      (this.running = !1),
      this.start());
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(e) {
    const a = this.running;
    return (
      a && this.stop(),
      (this.remaining += e),
      a && this.start(),
      this.remaining
    );
  }
  getTimerLeft() {
    return (this.running && (this.stop(), this.start()), this.remaining);
  }
  isRunning() {
    return this.running;
  }
}
const F2 = ["swal-title", "swal-html", "swal-footer"],
  F4 = (i) => {
    const e =
      typeof i.template == "string"
        ? document.querySelector(i.template)
        : i.template;
    if (!e) return {};
    const a = e.content;
    return (
      P4(a),
      Object.assign(Y4(a), V4(a), G4(a), X4(a), Q4(a), Z4(a), K4(a, F2))
    );
  },
  Y4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-param")).forEach((l) => {
        Ma(l, ["name", "value"]);
        const o = l.getAttribute("name"),
          c = l.getAttribute("value");
        !o ||
          !c ||
          (o in Vi && typeof Vi[o] == "boolean"
            ? (e[o] = c !== "false")
            : o in Vi && typeof Vi[o] == "object"
              ? (e[o] = JSON.parse(c))
              : (e[o] = c));
      }),
      e
    );
  },
  V4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-function-param")).forEach((l) => {
        const o = l.getAttribute("name"),
          c = l.getAttribute("value");
        !o || !c || (e[o] = new Function(`return ${c}`)());
      }),
      e
    );
  },
  G4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-button")).forEach((l) => {
        Ma(l, ["type", "color", "aria-label"]);
        const o = l.getAttribute("type");
        if (!(!o || !["confirm", "cancel", "deny"].includes(o))) {
          if (
            ((e[`${o}ButtonText`] = l.innerHTML),
            (e[`show${gh(o)}Button`] = !0),
            l.hasAttribute("color"))
          ) {
            const c = l.getAttribute("color");
            c !== null && (e[`${o}ButtonColor`] = c);
          }
          if (l.hasAttribute("aria-label")) {
            const c = l.getAttribute("aria-label");
            c !== null && (e[`${o}ButtonAriaLabel`] = c);
          }
        }
      }),
      e
    );
  },
  X4 = (i) => {
    const e = {},
      a = i.querySelector("swal-image");
    return (
      a &&
        (Ma(a, ["src", "width", "height", "alt"]),
        a.hasAttribute("src") && (e.imageUrl = a.getAttribute("src") || void 0),
        a.hasAttribute("width") &&
          (e.imageWidth = a.getAttribute("width") || void 0),
        a.hasAttribute("height") &&
          (e.imageHeight = a.getAttribute("height") || void 0),
        a.hasAttribute("alt") &&
          (e.imageAlt = a.getAttribute("alt") || void 0)),
      e
    );
  },
  Q4 = (i) => {
    const e = {},
      a = i.querySelector("swal-icon");
    return (
      a &&
        (Ma(a, ["type", "color"]),
        a.hasAttribute("type") && (e.icon = a.getAttribute("type")),
        a.hasAttribute("color") && (e.iconColor = a.getAttribute("color")),
        (e.iconHtml = a.innerHTML)),
      e
    );
  },
  Z4 = (i) => {
    const e = {},
      a = i.querySelector("swal-input");
    a &&
      (Ma(a, ["type", "label", "placeholder", "value"]),
      (e.input = a.getAttribute("type") || "text"),
      a.hasAttribute("label") && (e.inputLabel = a.getAttribute("label")),
      a.hasAttribute("placeholder") &&
        (e.inputPlaceholder = a.getAttribute("placeholder")),
      a.hasAttribute("value") && (e.inputValue = a.getAttribute("value")));
    const l = Array.from(i.querySelectorAll("swal-input-option"));
    return (
      l.length &&
        ((e.inputOptions = {}),
        l.forEach((o) => {
          Ma(o, ["value"]);
          const c = o.getAttribute("value");
          if (!c) return;
          const u = o.innerHTML;
          e.inputOptions[c] = u;
        })),
      e
    );
  },
  K4 = (i, e) => {
    const a = {};
    for (const l in e) {
      const o = e[l],
        c = i.querySelector(o);
      c && (Ma(c, []), (a[o.replace(/^swal-/, "")] = c.innerHTML.trim()));
    }
    return a;
  },
  P4 = (i) => {
    const e = F2.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(i.children).forEach((a) => {
      const l = a.tagName.toLowerCase();
      e.includes(l) || ke(`Unrecognized element <${l}>`);
    });
  },
  Ma = (i, e) => {
    Array.from(i.attributes).forEach((a) => {
      e.indexOf(a.name) === -1 &&
        ke([
          `Unrecognized attribute "${a.name}" on <${i.tagName.toLowerCase()}>.`,
          `${e.length ? `Allowed attributes are: ${e.join(", ")}` : "To set the value, use HTML within the element."}`,
        ]);
    });
  },
  Y2 = 10,
  I4 = (i) => {
    var e, a;
    const l = Re(),
      o = Ht();
    if (!l || !o) return;
    (typeof i.willOpen == "function" && i.willOpen(o),
      (e = ht.eventEmitter) === null || e === void 0 || e.emit("willOpen", o));
    const u = window.getComputedStyle(document.body).overflowY;
    if (
      (J4(l, o, i),
      setTimeout(() => {
        W4(l, o);
      }, Y2),
      _h() &&
        ($4(l, i.scrollbarPadding !== void 0 ? i.scrollbarPadding : !1, u),
        B3()),
      !ec() &&
        !ht.previousActiveElement &&
        (ht.previousActiveElement = document.activeElement),
      typeof i.didOpen == "function")
    ) {
      const h = i.didOpen;
      setTimeout(() => h(o));
    }
    (a = ht.eventEmitter) === null || a === void 0 || a.emit("didOpen", o);
  },
  Kr = (i) => {
    const e = Ht();
    if (!e || i.target !== e) return;
    const a = Re();
    a &&
      (e.removeEventListener("animationend", Kr),
      e.removeEventListener("transitionend", Kr),
      (a.style.overflowY = "auto"),
      _n(a, Q["no-transition"]));
  },
  W4 = (i, e) => {
    a2(e)
      ? ((i.style.overflowY = "hidden"),
        e.addEventListener("animationend", Kr),
        e.addEventListener("transitionend", Kr))
      : (i.style.overflowY = "auto");
  },
  $4 = (i, e, a) => {
    (L3(),
      e && a !== "hidden" && Y3(a),
      setTimeout(() => {
        i.scrollTop = 0;
      }));
  },
  J4 = (i, e, a) => {
    var l;
    ((l = a.showClass) !== null &&
      l !== void 0 &&
      l.backdrop &&
      jt(i, a.showClass.backdrop),
      a.animation
        ? (e.style.setProperty("opacity", "0", "important"),
          ve(e, "grid"),
          setTimeout(() => {
            var o;
            ((o = a.showClass) !== null &&
              o !== void 0 &&
              o.popup &&
              jt(e, a.showClass.popup),
              e.style.removeProperty("opacity"));
          }, Y2))
        : ve(e, "grid"),
      jt([document.documentElement, document.body], Q.shown),
      a.heightAuto &&
        a.backdrop &&
        !a.toast &&
        jt([document.documentElement, document.body], Q["height-auto"]));
  };
var sb = {
  email: (i, e) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(i)
      ? Promise.resolve()
      : Promise.resolve(e || "Invalid email address"),
  url: (i, e) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      i,
    )
      ? Promise.resolve()
      : Promise.resolve(e || "Invalid URL"),
};
function tM(i) {
  i.inputValidator ||
    (i.input === "email" && (i.inputValidator = sb.email),
    i.input === "url" && (i.inputValidator = sb.url));
}
function eM(i) {
  (!i.target ||
    (typeof i.target == "string" && !document.querySelector(i.target)) ||
    (typeof i.target != "string" && !i.target.appendChild)) &&
    (ke('Target parameter is not valid, defaulting to "body"'),
    (i.target = "body"));
}
function nM(i) {
  (tM(i),
    i.showLoaderOnConfirm &&
      !i.preConfirm &&
      ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    eM(i),
    typeof i.title == "string" &&
      (i.title = i.title
        .split(
          `
`,
        )
        .join("<br />")),
    Q5(i));
}
let jn;
var Tr = new WeakMap();
class ue {
  constructor(...e) {
    if (
      (S5(
        this,
        Tr,
        Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 }),
      ),
      typeof window > "u")
    )
      return;
    jn = this;
    const a = Object.freeze(this.constructor.argsToParams(e));
    ((this.params = a),
      (this.isAwaitingPromise = !1),
      M5(Tr, this, this._main(jn.params)));
  }
  _main(e, a = {}) {
    if ((L2(Object.assign({}, a, e)), ht.currentInstance)) {
      const c = ys.swalPromiseResolve.get(ht.currentInstance),
        { isAwaitingPromise: u } = ht.currentInstance;
      (ht.currentInstance._destroy(),
        u || c({ isDismissed: !0 }),
        _h() && m2());
    }
    ht.currentInstance = jn;
    const l = aM(e, a);
    (nM(l),
      Object.freeze(l),
      ht.timeout && (ht.timeout.stop(), delete ht.timeout),
      clearTimeout(ht.restoreFocusTimeout));
    const o = sM(jn);
    return (h2(jn, l), It.innerParams.set(jn, l), iM(jn, o, l));
  }
  then(e) {
    return P0(Tr, this).then(e);
  }
  finally(e) {
    return P0(Tr, this).finally(e);
  }
}
const iM = (i, e, a) =>
    new Promise((l, o) => {
      const c = (u) => {
        i.close({ isDismissed: !0, dismiss: u, isConfirmed: !1, isDenied: !1 });
      };
      (ys.swalPromiseResolve.set(i, l),
        ys.swalPromiseReject.set(i, o),
        (e.confirmButton.onclick = () => {
          s4(i);
        }),
        (e.denyButton.onclick = () => {
          l4(i);
        }),
        (e.cancelButton.onclick = () => {
          o4(i, c);
        }),
        (e.closeButton.onclick = () => {
          c(Es.close);
        }),
        v4(a, e, c),
        A3(ht, a, c),
        I3(i, a),
        I4(a),
        lM(ht, a, c),
        oM(e, a),
        setTimeout(() => {
          e.container.scrollTop = 0;
        }));
    }),
  aM = (i, e) => {
    const a = F4(i),
      l = Object.assign({}, Vi, e, a, i);
    return (
      (l.showClass = Object.assign({}, Vi.showClass, l.showClass)),
      (l.hideClass = Object.assign({}, Vi.hideClass, l.hideClass)),
      l.animation === !1 &&
        ((l.showClass = { backdrop: "swal2-noanimation" }), (l.hideClass = {})),
      l
    );
  },
  sM = (i) => {
    const e = {
      popup: Ht(),
      container: Re(),
      actions: Zl(),
      confirmButton: Nn(),
      denyButton: Aa(),
      cancelButton: Ms(),
      loader: Cs(),
      closeButton: vh(),
      validationMessage: Jr(),
      progressSteps: yh(),
    };
    return (It.domCache.set(i, e), e);
  },
  lM = (i, e, a) => {
    const l = tc();
    (De(l),
      e.timer &&
        ((i.timeout = new q4(() => {
          (a("timer"), delete i.timeout);
        }, e.timer)),
        e.timerProgressBar &&
          l &&
          (ve(l),
          en(l, e, "timerProgressBar"),
          setTimeout(() => {
            i.timeout && i.timeout.running && Sh(e.timer);
          }))));
  },
  oM = (i, e) => {
    if (!e.toast) {
      if (!$r(e.allowEnterKey)) {
        ($b("allowEnterKey"), uM());
        return;
      }
      rM(i) || cM(i, e) || Xf(-1, 1);
    }
  },
  rM = (i) => {
    const e = Array.from(i.popup.querySelectorAll("[autofocus]"));
    for (const a of e)
      if (a instanceof HTMLElement && Xe(a)) return (a.focus(), !0);
    return !1;
  },
  cM = (i, e) =>
    e.focusDeny && Xe(i.denyButton)
      ? (i.denyButton.focus(), !0)
      : e.focusCancel && Xe(i.cancelButton)
        ? (i.cancelButton.focus(), !0)
        : e.focusConfirm && Xe(i.confirmButton)
          ? (i.confirmButton.focus(), !0)
          : !1,
  uM = () => {
    document.activeElement instanceof HTMLElement &&
      typeof document.activeElement.blur == "function" &&
      document.activeElement.blur();
  };
ue.prototype.disableButtons = A2;
ue.prototype.enableButtons = E2;
ue.prototype.getInput = S2;
ue.prototype.disableInput = O2;
ue.prototype.enableInput = T2;
ue.prototype.hideLoading = Qr;
ue.prototype.disableLoading = Qr;
ue.prototype.showValidationMessage = D2;
ue.prototype.resetValidationMessage = z2;
ue.prototype.close = Yi;
ue.prototype.closePopup = Yi;
ue.prototype.closeModal = Yi;
ue.prototype.closeToast = Yi;
ue.prototype.rejectPromise = v2;
ue.prototype.update = j2;
ue.prototype._destroy = H2;
Object.assign(ue, U4);
Object.keys(y4).forEach((i) => {
  ue[i] = function (...e) {
    if (jn && jn[i]) return jn[i](...e);
  };
});
ue.DismissReason = Es;
ue.version = "11.26.17";
const wa = ue;
wa.default = wa;
typeof document < "u" &&
  (function (i, e) {
    var a = i.createElement("style");
    if ((i.getElementsByTagName("head")[0].appendChild(a), a.styleSheet))
      a.styleSheet.disabled || (a.styleSheet.cssText = e);
    else
      try {
        a.innerHTML = e;
      } catch {
        a.innerText = e;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}',
  );
const fM = () => {
    const {
        time: i,
        setTime: e,
        originalFs: a,
        setGenerateECG: l,
        setApplyNoiseTrigger: o,
        config: c,
        setConfig: u,
        setFilteredECG: h,
        noise: p,
        setNoise: d,
        csvFilePath: m,
        prevPathRef: b,
        setCsvFilePath: S,
        generateECG: _,
        setApplypsdTrigger: w,
        setFilteredSamples: E,
      } = ft.useContext(Un),
      [A, C] = ft.useState("IIR"),
      [I, tt] = ft.useState("windowSync"),
      [Z, F] = ft.useState("highpass"),
      [$, T] = ft.useState(10),
      [x, v] = ft.useState(100),
      [H, R] = ft.useState(5),
      [B, J] = ft.useState(100),
      [st, at] = ft.useState(!1),
      j = () => {
        if (!_) {
          wa.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate EMG signal first!",
          });
          return;
        }
        w(!0);
      },
      G = () => {
        if (!_) {
          wa.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate EMG signal first!",
          });
          return;
        }
        const k = {
          ...c,
          characteristic: A,
          filterType: Z,
          windowMode: I,
          Att: Number(B),
          preGain: st,
          order: Number(H),
          Fs: Number(a),
          Fc: Number(et()),
          F1: Number($),
          F2: Number(x),
          Fa: Number(it()),
          Fb: Number(rt()),
        };
        (u(k), h(!0));
      },
      et = () => {
        if (
          (A === "IIR" && Z === "highpass") ||
          (A === "FIR" && I === "windowSync" && Z === "highpass")
        )
          return Number($);
        if (
          (A === "IIR" && Z === "lowpass") ||
          (A === "FIR" && I === "windowSync" && Z === "lowpass")
        )
          return Number(x);
        if (
          (A === "IIR" && Z === "bandpass") ||
          (A === "IIR" && Z === "bandstop")
        ) {
          const k = Number($),
            V = Number(x);
          return (k + V) / 2;
        }
      },
      it = () => {
        if (I === "KaiserBessel") {
          if (Z === "lowpass") return 0;
          if (Z === "highpass") return $;
          if (Z === "bandpass") return $;
        }
      },
      rt = () => {
        if (I === "KaiserBessel") {
          if (Z === "lowpass") return x;
          if (Z === "highpass") return Number(a) / 2;
          if (Z === "bandpass") return x;
        }
      },
      O = () => {
        if (_)
          if (
            !p.baselineDrift &&
            !p.Powerline &&
            !p.muscleNoise &&
            !p.motionArtifact
          ) {
            wa.fire({
              icon: "info",
              title: "Oops...",
              text: "Please select at least one noise type!",
            });
            return;
          } else o(!0);
        else {
          wa.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate EMG signal first!",
          });
          return;
        }
      };
    return (
      ft.useEffect(() => {
        G();
      }, [x, $, A, Z, I, H, B, st]),
      ft.useEffect(() => {
        b.current !== m && (o(!1), w(!1), h(!1), E([]), (b.current = m));
      }, [m, b, o, w, h, E]),
      U.jsx("div", {
        className: si.rightPanelContainer,
        children: U.jsxs("div", {
          className: si.right,
          children: [
            U.jsx("h2", { children: "EMG Signal & Filter Controls" }),
            U.jsxs("div", {
              className: si.box,
              children: [
                U.jsx("h3", { children: "Signal Setup" }),
                U.jsx("label", { children: "Select EMG Dataset" }),
                U.jsxs("select", {
                  value: m,
                  onChange: (k) => S(k.target.value),
                  children: [
                    U.jsx("option", {
                      value: "vlabEMGnormalAndContraction.csv",
                      children: "EMG Dataset 1 (normal and contraction)",
                    }),
                    U.jsx("option", {
                      value: "vlabEMGcontraction.csv",
                      children: "EMG Dataset 2(with contraction)",
                    }),
                  ],
                }),
                U.jsxs("label", {
                  children: [
                    "Duration : ",
                    U.jsxs("span", { id: "demo", children: [i, " seconds"] }),
                    " ",
                  ],
                }),
                U.jsx("input", {
                  type: "range",
                  min: "1",
                  max: "120",
                  value: i,
                  onChange: (k) => e(Number(k.target.value)),
                }),
                U.jsxs("label", {
                  children: [
                    "Sampling Rate : ",
                    U.jsxs("span", { id: "demo", children: [a, " Hz"] }),
                    " ",
                  ],
                }),
                U.jsx("button", {
                  onClick: () => l(!0),
                  children: "Generate EMG Signal",
                }),
              ],
            }),
            U.jsxs("div", {
              className: si.box,
              children: [
                U.jsx("h3", { children: "Add Noise" }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: p.baselineDrift,
                      onChange: (k) =>
                        d({ ...p, baselineDrift: k.target.checked }),
                    }),
                    "Baseline Drift",
                  ],
                }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: p.Powerline,
                      onChange: (k) => d({ ...p, Powerline: k.target.checked }),
                    }),
                    "Powerline (50 Hz)",
                  ],
                }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: p.muscleNoise,
                      onChange: (k) =>
                        d({ ...p, muscleNoise: k.target.checked }),
                    }),
                    "Muscle Noise",
                  ],
                }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: p.motionArtifact,
                      onChange: (k) =>
                        d({ ...p, motionArtifact: k.target.checked }),
                    }),
                    "Motion Artifact",
                  ],
                }),
                U.jsx("div", {
                  className: si.buttonContainer,
                  children: U.jsx("button", {
                    onClick: () => O(),
                    children: "Add Noise to Signal",
                  }),
                }),
              ],
            }),
            U.jsxs("div", {
              className: si.box,
              children: [
                U.jsx("h3", { children: "Filter Design" }),
                U.jsx("label", { children: "Filter Algorithm" }),
                U.jsxs("select", {
                  value: A,
                  onChange: (k) => C(k.target.value),
                  children: [
                    U.jsx("option", {
                      value: "IIR",
                      children: "Butterworth (IIR)",
                    }),
                    U.jsx("option", { value: "FIR", children: "FIR Window" }),
                  ],
                }),
                A === "FIR" &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsx("label", { children: "Window Mode" }),
                      U.jsxs("select", {
                        value: I,
                        onChange: (k) => tt(k.target.value),
                        children: [
                          U.jsx("option", {
                            value: "windowSync",
                            children: "window-sync",
                          }),
                          U.jsx("option", {
                            value: "KaiserBessel",
                            children: "Kaiser–Bessel",
                          }),
                        ],
                      }),
                    ],
                  }),
                U.jsxs(U.Fragment, {
                  children: [
                    U.jsx("label", { children: "Filter Type" }),
                    U.jsxs("select", {
                      value: Z,
                      onChange: (k) => F(k.target.value),
                      children: [
                        U.jsx("option", {
                          value: "lowpass",
                          children: "Lowpass",
                        }),
                        U.jsx("option", {
                          value: "highpass",
                          children: "Highpass",
                        }),
                        U.jsx("option", {
                          value: "bandpass",
                          children: "Bandpass",
                        }),
                        I === "windowSync" &&
                          U.jsx("option", {
                            value: "bandstop",
                            children: "Bandstop",
                          }),
                      ],
                    }),
                    " ",
                  ],
                }),
                (Z === "highpass" || Z === "bandpass" || Z === "bandstop") &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsxs("div", {
                        className: si.syncInputContainer,
                        children: [
                          U.jsx("label", { children: "Low Cutoff (Hz) : " }),
                          U.jsx("input", {
                            type: "number",
                            step: "0.1",
                            min: "0",
                            max: "100",
                            value: $,
                            onChange: (k) => T(k.target.value),
                          }),
                        ],
                      }),
                      U.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: $,
                        onChange: (k) => T(Number(k.target.value)),
                      }),
                    ],
                  }),
                (Z === "lowpass" || Z === "bandpass" || Z === "bandstop") &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsxs("div", {
                        className: si.syncInputContainer,
                        children: [
                          U.jsx("label", { children: "High Cutoff (Hz) : " }),
                          U.jsx("input", {
                            type: "number",
                            step: "0.1",
                            min: "0",
                            max: "100",
                            value: x,
                            onChange: (k) => v(k.target.value),
                          }),
                        ],
                      }),
                      U.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "200",
                        step: "0.1",
                        value: x,
                        onChange: (k) => v(Number(k.target.value)),
                      }),
                    ],
                  }),
                U.jsxs("label", {
                  children: [
                    "Filter Order ",
                    I === "KaiserBessel" ? "(odd)" : "",
                    " ",
                  ],
                }),
                U.jsx("input", {
                  type: "number",
                  min: A === "IIR" ? 2 : 21,
                  max: A === "IIR" ? 12 : 201,
                  step: I === "KaiserBessel" ? 2 : 1,
                  value: H,
                  onChange: (k) => {
                    let V = Number(k.target.value);
                    (A === "FIR" &&
                      I === "KaiserBessel" &&
                      V % 2 === 0 &&
                      (V = V + 1),
                      R(V));
                  },
                }),
                A === "FIR" &&
                  I === "KaiserBessel" &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsx("label", { children: "Attenuation (dB) " }),
                      U.jsx("input", {
                        type: "number",
                        value: B,
                        onChange: (k) => J(k.target.value),
                      }),
                    ],
                  }),
                A === "IIR" &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsx("label", { children: "preGain" }),
                      U.jsxs("select", {
                        value: st,
                        onChange: (k) => at(k.target.value === "true"),
                        children: [
                          U.jsx("option", { value: !1, children: "false" }),
                          U.jsx("option", { value: !0, children: "true" }),
                        ],
                      }),
                    ],
                  }),
                U.jsxs("div", {
                  className: si.psdContainer,
                  children: [
                    U.jsx("button", { onClick: G, children: "Apply Filter" }),
                    U.jsx("button", { onClick: j, children: "Compute PSD" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  hM = () => {
    const {
        showInstruction: i,
        setShowInstruction: e,
        buttonRef: a,
      } = ft.useContext(Un),
      l = ft.useRef(null);
    return (
      ft.useEffect(() => {
        const o = (c) => {
          l.current &&
            !l.current.contains(c.target) &&
            a.current &&
            !a.current.contains(c.target) &&
            e(!1);
        };
        return (
          i && document.addEventListener("mousedown", o),
          () => {
            document.removeEventListener("mousedown", o);
          }
        );
      }, [i, e, a]),
      U.jsx("div", {
        className: ji.grandContainer,
        children: U.jsxs("div", {
          className: ji.parentContainer,
          children: [
            U.jsx("div", {
              className: ji.topContainer,
              children: U.jsx(Dv, {}),
            }),
            U.jsxs("div", {
              className: ji.middleContainer,
              children: [
                i &&
                  U.jsx("div", {
                    ref: l,
                    className: ji.instructionContainer,
                    children: U.jsx(Bv, {}),
                  }),
                U.jsx(p5, { className: ji.leftPanelContainer }),
                U.jsx(fM, { className: ji.rightPanelContainer }),
              ],
            }),
            U.jsx("div", {
              className: ji.footerContainer,
              children: "©Copyright 2025 Virtual Labs, IIT Roorkee",
            }),
          ],
        }),
      })
    );
  };
function dM() {
  return U.jsx(U.Fragment, { children: U.jsx(hM, {}) });
}
gv.createRoot(document.getElementById("root")).render(
  U.jsx(ft.StrictMode, { children: U.jsx(Ov, { children: U.jsx(dM, {}) }) }),
);
