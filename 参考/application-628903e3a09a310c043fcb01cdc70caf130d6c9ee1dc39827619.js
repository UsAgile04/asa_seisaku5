!(function(t, e) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function(t) {
            if (!t.document)
              throw new Error('jQuery requires a window with a document')
            return e(t)
          })
    : e(t)
})('undefined' != typeof window ? window : this, function(t, e) {
  function i(t) {
    var e = !!t && 'length' in t && t.length,
      i = pt.type(t)
    return (
      'function' !== i &&
      !pt.isWindow(t) &&
      ('array' === i ||
        0 === e ||
        ('number' == typeof e && e > 0 && e - 1 in t))
    )
  }
  function n(t, e, i) {
    if (pt.isFunction(e))
      return pt.grep(t, function(t, n) {
        return !!e.call(t, n, t) !== i
      })
    if (e.nodeType)
      return pt.grep(t, function(t) {
        return (t === e) !== i
      })
    if ('string' == typeof e) {
      if (xt.test(e)) return pt.filter(e, t, i)
      e = pt.filter(e, t)
    }
    return pt.grep(t, function(t) {
      return pt.inArray(t, e) > -1 !== i
    })
  }
  function o(t, e) {
    do t = t[e]
    while (t && 1 !== t.nodeType)
    return t
  }
  function r(t) {
    var e = {}
    return (
      pt.each(t.match(Et) || [], function(t, i) {
        e[i] = !0
      }),
      e
    )
  }
  function s() {
    nt.addEventListener
      ? (nt.removeEventListener('DOMContentLoaded', a),
        t.removeEventListener('load', a))
      : (nt.detachEvent('onreadystatechange', a), t.detachEvent('onload', a))
  }
  function a() {
    ;(nt.addEventListener ||
      'load' === t.event.type ||
      'complete' === nt.readyState) &&
      (s(), pt.ready())
  }
  function l(t, e, i) {
    if (void 0 === i && 1 === t.nodeType) {
      var n = 'data-' + e.replace(It, '-$1').toLowerCase()
      if (((i = t.getAttribute(n)), 'string' == typeof i)) {
        try {
          i =
            'true' === i ||
            ('false' !== i &&
              ('null' === i
                ? null
                : +i + '' === i
                ? +i
                : Pt.test(i)
                ? pt.parseJSON(i)
                : i))
        } catch (t) {}
        pt.data(t, e, i)
      } else i = void 0
    }
    return i
  }
  function c(t) {
    var e
    for (e in t)
      if (('data' !== e || !pt.isEmptyObject(t[e])) && 'toJSON' !== e) return !1
    return !0
  }
  function u(t, e, i, n) {
    if (jt(t)) {
      var o,
        r,
        s = pt.expando,
        a = t.nodeType,
        l = a ? pt.cache : t,
        c = a ? t[s] : t[s] && s
      if (
        (c && l[c] && (n || l[c].data)) ||
        void 0 !== i ||
        'string' != typeof e
      )
        return (
          c || (c = a ? (t[s] = it.pop() || pt.guid++) : s),
          l[c] || (l[c] = a ? {} : { toJSON: pt.noop }),
          ('object' != typeof e && 'function' != typeof e) ||
            (n
              ? (l[c] = pt.extend(l[c], e))
              : (l[c].data = pt.extend(l[c].data, e))),
          (r = l[c]),
          n || (r.data || (r.data = {}), (r = r.data)),
          void 0 !== i && (r[pt.camelCase(e)] = i),
          'string' == typeof e
            ? ((o = r[e]), null == o && (o = r[pt.camelCase(e)]))
            : (o = r),
          o
        )
    }
  }
  function d(t, e, i) {
    if (jt(t)) {
      var n,
        o,
        r = t.nodeType,
        s = r ? pt.cache : t,
        a = r ? t[pt.expando] : pt.expando
      if (s[a]) {
        if (e && (n = i ? s[a] : s[a].data)) {
          pt.isArray(e)
            ? (e = e.concat(pt.map(e, pt.camelCase)))
            : e in n
            ? (e = [e])
            : ((e = pt.camelCase(e)), (e = e in n ? [e] : e.split(' '))),
            (o = e.length)
          for (; o--; ) delete n[e[o]]
          if (i ? !c(n) : !pt.isEmptyObject(n)) return
        }
        ;(i || (delete s[a].data, c(s[a]))) &&
          (r
            ? pt.cleanData([t], !0)
            : dt.deleteExpando || s != s.window
            ? delete s[a]
            : (s[a] = void 0))
      }
    }
  }
  function h(t, e, i, n) {
    var o,
      r = 1,
      s = 20,
      a = n
        ? function() {
            return n.cur()
          }
        : function() {
            return pt.css(t, e, '')
          },
      l = a(),
      c = (i && i[3]) || (pt.cssNumber[e] ? '' : 'px'),
      u = (pt.cssNumber[e] || ('px' !== c && +l)) && Lt.exec(pt.css(t, e))
    if (u && u[3] !== c) {
      ;(c = c || u[3]), (i = i || []), (u = +l || 1)
      do (r = r || '.5'), (u /= r), pt.style(t, e, u + c)
      while (r !== (r = a() / l) && 1 !== r && --s)
    }
    return (
      i &&
        ((u = +u || +l || 0),
        (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = c), (n.start = u), (n.end = o))),
      o
    )
  }
  function p(t) {
    var e = zt.split('|'),
      i = t.createDocumentFragment()
    if (i.createElement) for (; e.length; ) i.createElement(e.pop())
    return i
  }
  function f(t, e) {
    var i,
      n,
      o = 0,
      r =
        'undefined' != typeof t.getElementsByTagName
          ? t.getElementsByTagName(e || '*')
          : 'undefined' != typeof t.querySelectorAll
          ? t.querySelectorAll(e || '*')
          : void 0
    if (!r)
      for (r = [], i = t.childNodes || t; null != (n = i[o]); o++)
        !e || pt.nodeName(n, e) ? r.push(n) : pt.merge(r, f(n, e))
    return void 0 === e || (e && pt.nodeName(t, e)) ? pt.merge([t], r) : r
  }
  function m(t, e) {
    for (var i, n = 0; null != (i = t[n]); n++)
      pt._data(i, 'globalEval', !e || pt._data(e[n], 'globalEval'))
  }
  function g(t) {
    Rt.test(t.type) && (t.defaultChecked = t.checked)
  }
  function v(t, e, i, n, o) {
    for (
      var r, s, a, l, c, u, d, h = t.length, v = p(e), y = [], w = 0;
      w < h;
      w++
    )
      if (((s = t[w]), s || 0 === s))
        if ('object' === pt.type(s)) pt.merge(y, s.nodeType ? [s] : s)
        else if (Ut.test(s)) {
          for (
            l = l || v.appendChild(e.createElement('div')),
              c = (Ot.exec(s) || ['', ''])[1].toLowerCase(),
              d = Yt[c] || Yt._default,
              l.innerHTML = d[1] + pt.htmlPrefilter(s) + d[2],
              r = d[0];
            r--;

          )
            l = l.lastChild
          if (
            (!dt.leadingWhitespace &&
              qt.test(s) &&
              y.push(e.createTextNode(qt.exec(s)[0])),
            !dt.tbody)
          )
            for (
              s =
                'table' !== c || Xt.test(s)
                  ? '<table>' !== d[1] || Xt.test(s)
                    ? 0
                    : l
                  : l.firstChild,
                r = s && s.childNodes.length;
              r--;

            )
              pt.nodeName((u = s.childNodes[r]), 'tbody') &&
                !u.childNodes.length &&
                s.removeChild(u)
          for (pt.merge(y, l.childNodes), l.textContent = ''; l.firstChild; )
            l.removeChild(l.firstChild)
          l = v.lastChild
        } else y.push(e.createTextNode(s))
    for (
      l && v.removeChild(l),
        dt.appendChecked || pt.grep(f(y, 'input'), g),
        w = 0;
      (s = y[w++]);

    )
      if (n && pt.inArray(s, n) > -1) o && o.push(s)
      else if (
        ((a = pt.contains(s.ownerDocument, s)),
        (l = f(v.appendChild(s), 'script')),
        a && m(l),
        i)
      )
        for (r = 0; (s = l[r++]); ) Wt.test(s.type || '') && i.push(s)
    return (l = null), v
  }
  function y() {
    return !0
  }
  function w() {
    return !1
  }
  function b() {
    try {
      return nt.activeElement
    } catch (t) {}
  }
  function _(t, e, i, n, o, r) {
    var s, a
    if ('object' == typeof e) {
      'string' != typeof i && ((n = n || i), (i = void 0))
      for (a in e) _(t, a, i, n, e[a], r)
      return t
    }
    if (
      (null == n && null == o
        ? ((o = i), (n = i = void 0))
        : null == o &&
          ('string' == typeof i
            ? ((o = n), (n = void 0))
            : ((o = n), (n = i), (i = void 0))),
      o === !1)
    )
      o = w
    else if (!o) return t
    return (
      1 === r &&
        ((s = o),
        (o = function(t) {
          return pt().off(t), s.apply(this, arguments)
        }),
        (o.guid = s.guid || (s.guid = pt.guid++))),
      t.each(function() {
        pt.event.add(this, e, o, n, i)
      })
    )
  }
  function k(t, e) {
    return pt.nodeName(t, 'table') &&
      pt.nodeName(11 !== e.nodeType ? e : e.firstChild, 'tr')
      ? t.getElementsByTagName('tbody')[0] ||
          t.appendChild(t.ownerDocument.createElement('tbody'))
      : t
  }
  function x(t) {
    return (t.type = (null !== pt.find.attr(t, 'type')) + '/' + t.type), t
  }
  function C(t) {
    var e = oe.exec(t.type)
    return e ? (t.type = e[1]) : t.removeAttribute('type'), t
  }
  function T(t, e) {
    if (1 === e.nodeType && pt.hasData(t)) {
      var i,
        n,
        o,
        r = pt._data(t),
        s = pt._data(e, r),
        a = r.events
      if (a) {
        delete s.handle, (s.events = {})
        for (i in a)
          for (n = 0, o = a[i].length; n < o; n++) pt.event.add(e, i, a[i][n])
      }
      s.data && (s.data = pt.extend({}, s.data))
    }
  }
  function S(t, e) {
    var i, n, o
    if (1 === e.nodeType) {
      if (((i = e.nodeName.toLowerCase()), !dt.noCloneEvent && e[pt.expando])) {
        o = pt._data(e)
        for (n in o.events) pt.removeEvent(e, n, o.handle)
        e.removeAttribute(pt.expando)
      }
      'script' === i && e.text !== t.text
        ? ((x(e).text = t.text), C(e))
        : 'object' === i
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          dt.html5Clone &&
            t.innerHTML &&
            !pt.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : 'input' === i && Rt.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : 'option' === i
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ('input' !== i && 'textarea' !== i) ||
          (e.defaultValue = t.defaultValue)
    }
  }
  function $(t, e, i, n) {
    e = rt.apply([], e)
    var o,
      r,
      s,
      a,
      l,
      c,
      u = 0,
      d = t.length,
      h = d - 1,
      p = e[0],
      m = pt.isFunction(p)
    if (m || (d > 1 && 'string' == typeof p && !dt.checkClone && ne.test(p)))
      return t.each(function(o) {
        var r = t.eq(o)
        m && (e[0] = p.call(this, o, r.html())), $(r, e, i, n)
      })
    if (
      d &&
      ((c = v(e, t[0].ownerDocument, !1, t, n)),
      (o = c.firstChild),
      1 === c.childNodes.length && (c = o),
      o || n)
    ) {
      for (a = pt.map(f(c, 'script'), x), s = a.length; u < d; u++)
        (r = c),
          u !== h &&
            ((r = pt.clone(r, !0, !0)), s && pt.merge(a, f(r, 'script'))),
          i.call(t[u], r, u)
      if (s)
        for (l = a[a.length - 1].ownerDocument, pt.map(a, C), u = 0; u < s; u++)
          (r = a[u]),
            Wt.test(r.type || '') &&
              !pt._data(r, 'globalEval') &&
              pt.contains(l, r) &&
              (r.src
                ? pt._evalUrl && pt._evalUrl(r.src)
                : pt.globalEval(
                    (r.text || r.textContent || r.innerHTML || '').replace(
                      re,
                      ''
                    )
                  ))
      c = o = null
    }
    return t
  }
  function D(t, e, i) {
    for (var n, o = e ? pt.filter(e, t) : t, r = 0; null != (n = o[r]); r++)
      i || 1 !== n.nodeType || pt.cleanData(f(n)),
        n.parentNode &&
          (i && pt.contains(n.ownerDocument, n) && m(f(n, 'script')),
          n.parentNode.removeChild(n))
    return t
  }
  function E(t, e) {
    var i = pt(e.createElement(t)).appendTo(e.body),
      n = pt.css(i[0], 'display')
    return i.detach(), n
  }
  function A(t) {
    var e = nt,
      i = ce[t]
    return (
      i ||
        ((i = E(t, e)),
        ('none' !== i && i) ||
          ((le = (
            le || pt("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(e.documentElement)),
          (e = (le[0].contentWindow || le[0].contentDocument).document),
          e.write(),
          e.close(),
          (i = E(t, e)),
          le.detach()),
        (ce[t] = i)),
      i
    )
  }
  function M(t, e) {
    return {
      get: function() {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments)
      }
    }
  }
  function j(t) {
    if (t in Ce) return t
    for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = xe.length; i--; )
      if (((t = xe[i] + e), t in Ce)) return t
  }
  function P(t, e) {
    for (var i, n, o, r = [], s = 0, a = t.length; s < a; s++)
      (n = t[s]),
        n.style &&
          ((r[s] = pt._data(n, 'olddisplay')),
          (i = n.style.display),
          e
            ? (r[s] || 'none' !== i || (n.style.display = ''),
              '' === n.style.display &&
                Ft(n) &&
                (r[s] = pt._data(n, 'olddisplay', A(n.nodeName))))
            : ((o = Ft(n)),
              ((i && 'none' !== i) || !o) &&
                pt._data(n, 'olddisplay', o ? i : pt.css(n, 'display'))))
    for (s = 0; s < a; s++)
      (n = t[s]),
        n.style &&
          ((e && 'none' !== n.style.display && '' !== n.style.display) ||
            (n.style.display = e ? r[s] || '' : 'none'))
    return t
  }
  function I(t, e, i) {
    var n = be.exec(e)
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || 'px') : e
  }
  function N(t, e, i, n, o) {
    for (
      var r = i === (n ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0,
        s = 0;
      r < 4;
      r += 2
    )
      'margin' === i && (s += pt.css(t, i + Ht[r], !0, o)),
        n
          ? ('content' === i && (s -= pt.css(t, 'padding' + Ht[r], !0, o)),
            'margin' !== i &&
              (s -= pt.css(t, 'border' + Ht[r] + 'Width', !0, o)))
          : ((s += pt.css(t, 'padding' + Ht[r], !0, o)),
            'padding' !== i &&
              (s += pt.css(t, 'border' + Ht[r] + 'Width', !0, o)))
    return s
  }
  function L(t, e, i) {
    var n = !0,
      o = 'width' === e ? t.offsetWidth : t.offsetHeight,
      r = fe(t),
      s = dt.boxSizing && 'border-box' === pt.css(t, 'boxSizing', !1, r)
    if (o <= 0 || null == o) {
      if (
        ((o = me(t, e, r)),
        (o < 0 || null == o) && (o = t.style[e]),
        de.test(o))
      )
        return o
      ;(n = s && (dt.boxSizingReliable() || o === t.style[e])),
        (o = parseFloat(o) || 0)
    }
    return o + N(t, e, i || (s ? 'border' : 'content'), n, r) + 'px'
  }
  function H(t, e, i, n, o) {
    return new H.prototype.init(t, e, i, n, o)
  }
  function F() {
    return (
      t.setTimeout(function() {
        Te = void 0
      }),
      (Te = pt.now())
    )
  }
  function B(t, e) {
    var i,
      n = { height: t },
      o = 0
    for (e = e ? 1 : 0; o < 4; o += 2 - e)
      (i = Ht[o]), (n['margin' + i] = n['padding' + i] = t)
    return e && (n.opacity = n.width = t), n
  }
  function R(t, e, i) {
    for (
      var n,
        o = (q.tweeners[e] || []).concat(q.tweeners['*']),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((n = o[r].call(i, e, t))) return n
  }
  function O(t, e, i) {
    var n,
      o,
      r,
      s,
      a,
      l,
      c,
      u,
      d = this,
      h = {},
      p = t.style,
      f = t.nodeType && Ft(t),
      m = pt._data(t, 'fxshow')
    i.queue ||
      ((a = pt._queueHooks(t, 'fx')),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (l = a.empty.fire),
        (a.empty.fire = function() {
          a.unqueued || l()
        })),
      a.unqueued++,
      d.always(function() {
        d.always(function() {
          a.unqueued--, pt.queue(t, 'fx').length || a.empty.fire()
        })
      })),
      1 === t.nodeType &&
        ('height' in e || 'width' in e) &&
        ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (c = pt.css(t, 'display')),
        (u = 'none' === c ? pt._data(t, 'olddisplay') || A(t.nodeName) : c),
        'inline' === u &&
          'none' === pt.css(t, 'float') &&
          (dt.inlineBlockNeedsLayout && 'inline' !== A(t.nodeName)
            ? (p.zoom = 1)
            : (p.display = 'inline-block'))),
      i.overflow &&
        ((p.overflow = 'hidden'),
        dt.shrinkWrapBlocks() ||
          d.always(function() {
            ;(p.overflow = i.overflow[0]),
              (p.overflowX = i.overflow[1]),
              (p.overflowY = i.overflow[2])
          }))
    for (n in e)
      if (((o = e[n]), $e.exec(o))) {
        if (
          (delete e[n], (r = r || 'toggle' === o), o === (f ? 'hide' : 'show'))
        ) {
          if ('show' !== o || !m || void 0 === m[n]) continue
          f = !0
        }
        h[n] = (m && m[n]) || pt.style(t, n)
      } else c = void 0
    if (pt.isEmptyObject(h))
      'inline' === ('none' === c ? A(t.nodeName) : c) && (p.display = c)
    else {
      m ? 'hidden' in m && (f = m.hidden) : (m = pt._data(t, 'fxshow', {})),
        r && (m.hidden = !f),
        f
          ? pt(t).show()
          : d.done(function() {
              pt(t).hide()
            }),
        d.done(function() {
          var e
          pt._removeData(t, 'fxshow')
          for (e in h) pt.style(t, e, h[e])
        })
      for (n in h)
        (s = R(f ? m[n] : 0, n, d)),
          n in m ||
            ((m[n] = s.start),
            f &&
              ((s.end = s.start),
              (s.start = 'width' === n || 'height' === n ? 1 : 0)))
    }
  }
  function W(t, e) {
    var i, n, o, r, s
    for (i in t)
      if (
        ((n = pt.camelCase(i)),
        (o = e[n]),
        (r = t[i]),
        pt.isArray(r) && ((o = r[1]), (r = t[i] = r[0])),
        i !== n && ((t[n] = r), delete t[i]),
        (s = pt.cssHooks[n]),
        s && 'expand' in s)
      ) {
        ;(r = s.expand(r)), delete t[n]
        for (i in r) i in t || ((t[i] = r[i]), (e[i] = o))
      } else e[n] = o
  }
  function q(t, e, i) {
    var n,
      o,
      r = 0,
      s = q.prefilters.length,
      a = pt.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (o) return !1
        for (
          var e = Te || F(),
            i = Math.max(0, c.startTime + c.duration - e),
            n = i / c.duration || 0,
            r = 1 - n,
            s = 0,
            l = c.tweens.length;
          s < l;
          s++
        )
          c.tweens[s].run(r)
        return (
          a.notifyWith(t, [c, r, i]),
          r < 1 && l ? i : (a.resolveWith(t, [c]), !1)
        )
      },
      c = a.promise({
        elem: t,
        props: pt.extend({}, e),
        opts: pt.extend(
          !0,
          { specialEasing: {}, easing: pt.easing._default },
          i
        ),
        originalProperties: e,
        originalOptions: i,
        startTime: Te || F(),
        duration: i.duration,
        tweens: [],
        createTween: function(e, i) {
          var n = pt.Tween(
            t,
            c.opts,
            e,
            i,
            c.opts.specialEasing[e] || c.opts.easing
          )
          return c.tweens.push(n), n
        },
        stop: function(e) {
          var i = 0,
            n = e ? c.tweens.length : 0
          if (o) return this
          for (o = !0; i < n; i++) c.tweens[i].run(1)
          return (
            e
              ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
              : a.rejectWith(t, [c, e]),
            this
          )
        }
      }),
      u = c.props
    for (W(u, c.opts.specialEasing); r < s; r++)
      if ((n = q.prefilters[r].call(c, t, u, c.opts)))
        return (
          pt.isFunction(n.stop) &&
            (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(n.stop, n)),
          n
        )
    return (
      pt.map(u, R, c),
      pt.isFunction(c.opts.start) && c.opts.start.call(t, c),
      pt.fx.timer(pt.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    )
  }
  function z(t) {
    return pt.attr(t, 'class') || ''
  }
  function Y(t) {
    return function(e, i) {
      'string' != typeof e && ((i = e), (e = '*'))
      var n,
        o = 0,
        r = e.toLowerCase().match(Et) || []
      if (pt.isFunction(i))
        for (; (n = r[o++]); )
          '+' === n.charAt(0)
            ? ((n = n.slice(1) || '*'), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i)
    }
  }
  function U(t, e, i, n) {
    function o(a) {
      var l
      return (
        (r[a] = !0),
        pt.each(t[a] || [], function(t, a) {
          var c = a(e, i, n)
          return 'string' != typeof c || s || r[c]
            ? s
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), o(c), !1)
        }),
        l
      )
    }
    var r = {},
      s = t === Qe
    return o(e.dataTypes[0]) || (!r['*'] && o('*'))
  }
  function X(t, e) {
    var i,
      n,
      o = pt.ajaxSettings.flatOptions || {}
    for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n])
    return i && pt.extend(!0, t, i), t
  }
  function V(t, e, i) {
    for (var n, o, r, s, a = t.contents, l = t.dataTypes; '*' === l[0]; )
      l.shift(),
        void 0 === o && (o = t.mimeType || e.getResponseHeader('Content-Type'))
    if (o)
      for (s in a)
        if (a[s] && a[s].test(o)) {
          l.unshift(s)
          break
        }
    if (l[0] in i) r = l[0]
    else {
      for (s in i) {
        if (!l[0] || t.converters[s + ' ' + l[0]]) {
          r = s
          break
        }
        n || (n = s)
      }
      r = r || n
    }
    if (r) return r !== l[0] && l.unshift(r), i[r]
  }
  function K(t, e, i, n) {
    var o,
      r,
      s,
      a,
      l,
      c = {},
      u = t.dataTypes.slice()
    if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s]
    for (r = u.shift(); r; )
      if (
        (t.responseFields[r] && (i[t.responseFields[r]] = e),
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = r),
        (r = u.shift()))
      )
        if ('*' === r) r = l
        else if ('*' !== l && l !== r) {
          if (((s = c[l + ' ' + r] || c['* ' + r]), !s))
            for (o in c)
              if (
                ((a = o.split(' ')),
                a[1] === r && (s = c[l + ' ' + a[0]] || c['* ' + a[0]]))
              ) {
                s === !0
                  ? (s = c[o])
                  : c[o] !== !0 && ((r = a[0]), u.unshift(a[1]))
                break
              }
          if (s !== !0)
            if (s && t['throws']) e = s(e)
            else
              try {
                e = s(e)
              } catch (t) {
                return {
                  state: 'parsererror',
                  error: s ? t : 'No conversion from ' + l + ' to ' + r
                }
              }
        }
    return { state: 'success', data: e }
  }
  function J(t) {
    return (t.style && t.style.display) || pt.css(t, 'display')
  }
  function G(t) {
    if (!pt.contains(t.ownerDocument || nt, t)) return !0
    for (; t && 1 === t.nodeType; ) {
      if ('none' === J(t) || 'hidden' === t.type) return !0
      t = t.parentNode
    }
    return !1
  }
  function Q(t, e, i, n) {
    var o
    if (pt.isArray(e))
      pt.each(e, function(e, o) {
        i || ni.test(t)
          ? n(t, o)
          : Q(
              t + '[' + ('object' == typeof o && null != o ? e : '') + ']',
              o,
              i,
              n
            )
      })
    else if (i || 'object' !== pt.type(e)) n(t, e)
    else for (o in e) Q(t + '[' + o + ']', e[o], i, n)
  }
  function Z() {
    try {
      return new t.XMLHttpRequest()
    } catch (t) {}
  }
  function tt() {
    try {
      return new t.ActiveXObject('Microsoft.XMLHTTP')
    } catch (t) {}
  }
  function et(t) {
    return pt.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow)
  }
  var it = [],
    nt = t.document,
    ot = it.slice,
    rt = it.concat,
    st = it.push,
    at = it.indexOf,
    lt = {},
    ct = lt.toString,
    ut = lt.hasOwnProperty,
    dt = {},
    ht = '1.12.4',
    pt = function(t, e) {
      return new pt.fn.init(t, e)
    },
    ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    mt = /^-ms-/,
    gt = /-([\da-z])/gi,
    vt = function(t, e) {
      return e.toUpperCase()
    }
  ;(pt.fn = pt.prototype = {
    jquery: ht,
    constructor: pt,
    selector: '',
    length: 0,
    toArray: function() {
      return ot.call(this)
    },
    get: function(t) {
      return null != t
        ? t < 0
          ? this[t + this.length]
          : this[t]
        : ot.call(this)
    },
    pushStack: function(t) {
      var e = pt.merge(this.constructor(), t)
      return (e.prevObject = this), (e.context = this.context), e
    },
    each: function(t) {
      return pt.each(this, t)
    },
    map: function(t) {
      return this.pushStack(
        pt.map(this, function(e, i) {
          return t.call(e, i, e)
        })
      )
    },
    slice: function() {
      return this.pushStack(ot.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(t) {
      var e = this.length,
        i = +t + (t < 0 ? e : 0)
      return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: st,
    sort: it.sort,
    splice: it.splice
  }),
    (pt.extend = pt.fn.extend = function() {
      var t,
        e,
        i,
        n,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1
      for (
        'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
          'object' == typeof s || pt.isFunction(s) || (s = {}),
          a === l && ((s = this), a--);
        a < l;
        a++
      )
        if (null != (o = arguments[a]))
          for (n in o)
            (t = s[n]),
              (i = o[n]),
              s !== i &&
                (c && i && (pt.isPlainObject(i) || (e = pt.isArray(i)))
                  ? (e
                      ? ((e = !1), (r = t && pt.isArray(t) ? t : []))
                      : (r = t && pt.isPlainObject(t) ? t : {}),
                    (s[n] = pt.extend(c, r, i)))
                  : void 0 !== i && (s[n] = i))
      return s
    }),
    pt.extend({
      expando: 'jQuery' + (ht + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(t) {
        throw new Error(t)
      },
      noop: function() {},
      isFunction: function(t) {
        return 'function' === pt.type(t)
      },
      isArray:
        Array.isArray ||
        function(t) {
          return 'array' === pt.type(t)
        },
      isWindow: function(t) {
        return null != t && t == t.window
      },
      isNumeric: function(t) {
        var e = t && t.toString()
        return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
      },
      isEmptyObject: function(t) {
        var e
        for (e in t) return !1
        return !0
      },
      isPlainObject: function(t) {
        var e
        if (!t || 'object' !== pt.type(t) || t.nodeType || pt.isWindow(t))
          return !1
        try {
          if (
            t.constructor &&
            !ut.call(t, 'constructor') &&
            !ut.call(t.constructor.prototype, 'isPrototypeOf')
          )
            return !1
        } catch (t) {
          return !1
        }
        if (!dt.ownFirst) for (e in t) return ut.call(t, e)
        for (e in t);
        return void 0 === e || ut.call(t, e)
      },
      type: function(t) {
        return null == t
          ? t + ''
          : 'object' == typeof t || 'function' == typeof t
          ? lt[ct.call(t)] || 'object'
          : typeof t
      },
      globalEval: function(e) {
        e &&
          pt.trim(e) &&
          (t.execScript ||
            function(e) {
              t.eval.call(t, e)
            })(e)
      },
      camelCase: function(t) {
        return t.replace(mt, 'ms-').replace(gt, vt)
      },
      nodeName: function(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function(t, e) {
        var n,
          o = 0
        if (i(t))
          for (n = t.length; o < n && e.call(t[o], o, t[o]) !== !1; o++);
        else for (o in t) if (e.call(t[o], o, t[o]) === !1) break
        return t
      },
      trim: function(t) {
        return null == t ? '' : (t + '').replace(ft, '')
      },
      makeArray: function(t, e) {
        var n = e || []
        return (
          null != t &&
            (i(Object(t))
              ? pt.merge(n, 'string' == typeof t ? [t] : t)
              : st.call(n, t)),
          n
        )
      },
      inArray: function(t, e, i) {
        var n
        if (e) {
          if (at) return at.call(e, t, i)
          for (
            n = e.length, i = i ? (i < 0 ? Math.max(0, n + i) : i) : 0;
            i < n;
            i++
          )
            if (i in e && e[i] === t) return i
        }
        return -1
      },
      merge: function(t, e) {
        for (var i = +e.length, n = 0, o = t.length; n < i; ) t[o++] = e[n++]
        if (i !== i) for (; void 0 !== e[n]; ) t[o++] = e[n++]
        return (t.length = o), t
      },
      grep: function(t, e, i) {
        for (var n, o = [], r = 0, s = t.length, a = !i; r < s; r++)
          (n = !e(t[r], r)), n !== a && o.push(t[r])
        return o
      },
      map: function(t, e, n) {
        var o,
          r,
          s = 0,
          a = []
        if (i(t))
          for (o = t.length; s < o; s++)
            (r = e(t[s], s, n)), null != r && a.push(r)
        else for (s in t) (r = e(t[s], s, n)), null != r && a.push(r)
        return rt.apply([], a)
      },
      guid: 1,
      proxy: function(t, e) {
        var i, n, o
        if (
          ('string' == typeof e && ((o = t[e]), (e = t), (t = o)),
          pt.isFunction(t))
        )
          return (
            (i = ot.call(arguments, 2)),
            (n = function() {
              return t.apply(e || this, i.concat(ot.call(arguments)))
            }),
            (n.guid = t.guid = t.guid || pt.guid++),
            n
          )
      },
      now: function() {
        return +new Date()
      },
      support: dt
    }),
    'function' == typeof Symbol &&
      (pt.fn[Symbol.iterator] = it[Symbol.iterator]),
    pt.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function(t, e) {
        lt['[object ' + e + ']'] = e.toLowerCase()
      }
    )
  var yt = (function(t) {
    function e(t, e, i, n) {
      var o,
        r,
        s,
        a,
        l,
        c,
        d,
        p,
        f = e && e.ownerDocument,
        m = e ? e.nodeType : 9
      if (
        ((i = i || []),
        'string' != typeof t || !t || (1 !== m && 9 !== m && 11 !== m))
      )
        return i
      if (
        !n &&
        ((e ? e.ownerDocument || e : R) !== j && M(e), (e = e || j), I)
      ) {
        if (11 !== m && (c = vt.exec(t)))
          if ((o = c[1])) {
            if (9 === m) {
              if (!(s = e.getElementById(o))) return i
              if (s.id === o) return i.push(s), i
            } else if (f && (s = f.getElementById(o)) && F(e, s) && s.id === o)
              return i.push(s), i
          } else {
            if (c[2]) return Q.apply(i, e.getElementsByTagName(t)), i
            if (
              (o = c[3]) &&
              _.getElementsByClassName &&
              e.getElementsByClassName
            )
              return Q.apply(i, e.getElementsByClassName(o)), i
          }
        if (_.qsa && !Y[t + ' '] && (!N || !N.test(t))) {
          if (1 !== m) (f = e), (p = t)
          else if ('object' !== e.nodeName.toLowerCase()) {
            for (
              (a = e.getAttribute('id'))
                ? (a = a.replace(wt, '\\$&'))
                : e.setAttribute('id', (a = B)),
                d = T(t),
                r = d.length,
                l = ht.test(a) ? '#' + a : "[id='" + a + "']";
              r--;

            )
              d[r] = l + ' ' + h(d[r])
            ;(p = d.join(',')), (f = (yt.test(t) && u(e.parentNode)) || e)
          }
          if (p)
            try {
              return Q.apply(i, f.querySelectorAll(p)), i
            } catch (t) {
            } finally {
              a === B && e.removeAttribute('id')
            }
        }
      }
      return $(t.replace(at, '$1'), e, i, n)
    }
    function i() {
      function t(i, n) {
        return (
          e.push(i + ' ') > k.cacheLength && delete t[e.shift()],
          (t[i + ' '] = n)
        )
      }
      var e = []
      return t
    }
    function n(t) {
      return (t[B] = !0), t
    }
    function o(t) {
      var e = j.createElement('div')
      try {
        return !!t(e)
      } catch (t) {
        return !1
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null)
      }
    }
    function r(t, e) {
      for (var i = t.split('|'), n = i.length; n--; ) k.attrHandle[i[n]] = e
    }
    function s(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || X) - (~t.sourceIndex || X)
      if (n) return n
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1
      return t ? 1 : -1
    }
    function a(t) {
      return function(e) {
        var i = e.nodeName.toLowerCase()
        return 'input' === i && e.type === t
      }
    }
    function l(t) {
      return function(e) {
        var i = e.nodeName.toLowerCase()
        return ('input' === i || 'button' === i) && e.type === t
      }
    }
    function c(t) {
      return n(function(e) {
        return (
          (e = +e),
          n(function(i, n) {
            for (var o, r = t([], i.length, e), s = r.length; s--; )
              i[(o = r[s])] && (i[o] = !(n[o] = i[o]))
          })
        )
      })
    }
    function u(t) {
      return t && 'undefined' != typeof t.getElementsByTagName && t
    }
    function d() {}
    function h(t) {
      for (var e = 0, i = t.length, n = ''; e < i; e++) n += t[e].value
      return n
    }
    function p(t, e, i) {
      var n = e.dir,
        o = i && 'parentNode' === n,
        r = W++
      return e.first
        ? function(e, i, r) {
            for (; (e = e[n]); ) if (1 === e.nodeType || o) return t(e, i, r)
          }
        : function(e, i, s) {
            var a,
              l,
              c,
              u = [O, r]
            if (s) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || o) && t(e, i, s)) return !0
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || o) {
                  if (
                    ((c = e[B] || (e[B] = {})),
                    (l = c[e.uniqueID] || (c[e.uniqueID] = {})),
                    (a = l[n]) && a[0] === O && a[1] === r)
                  )
                    return (u[2] = a[2])
                  if (((l[n] = u), (u[2] = t(e, i, s)))) return !0
                }
          }
    }
    function f(t) {
      return t.length > 1
        ? function(e, i, n) {
            for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1
            return !0
          }
        : t[0]
    }
    function m(t, i, n) {
      for (var o = 0, r = i.length; o < r; o++) e(t, i[o], n)
      return n
    }
    function g(t, e, i, n, o) {
      for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (r = t[a]) && ((i && !i(r, n, o)) || (s.push(r), c && e.push(a)))
      return s
    }
    function v(t, e, i, o, r, s) {
      return (
        o && !o[B] && (o = v(o)),
        r && !r[B] && (r = v(r, s)),
        n(function(n, s, a, l) {
          var c,
            u,
            d,
            h = [],
            p = [],
            f = s.length,
            v = n || m(e || '*', a.nodeType ? [a] : a, []),
            y = !t || (!n && e) ? v : g(v, h, t, a, l),
            w = i ? (r || (n ? t : f || o) ? [] : s) : y
          if ((i && i(y, w, a, l), o))
            for (c = g(w, p), o(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (w[p[u]] = !(y[p[u]] = d))
          if (n) {
            if (r || t) {
              if (r) {
                for (c = [], u = w.length; u--; )
                  (d = w[u]) && c.push((y[u] = d))
                r(null, (w = []), c, l)
              }
              for (u = w.length; u--; )
                (d = w[u]) &&
                  (c = r ? tt(n, d) : h[u]) > -1 &&
                  (n[c] = !(s[c] = d))
            }
          } else (w = g(w === s ? w.splice(f, w.length) : w)), r ? r(null, s, w, l) : Q.apply(s, w)
        })
      )
    }
    function y(t) {
      for (
        var e,
          i,
          n,
          o = t.length,
          r = k.relative[t[0].type],
          s = r || k.relative[' '],
          a = r ? 1 : 0,
          l = p(
            function(t) {
              return t === e
            },
            s,
            !0
          ),
          c = p(
            function(t) {
              return tt(e, t) > -1
            },
            s,
            !0
          ),
          u = [
            function(t, i, n) {
              var o =
                (!r && (n || i !== D)) ||
                ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
              return (e = null), o
            }
          ];
        a < o;
        a++
      )
        if ((i = k.relative[t[a].type])) u = [p(f(u), i)]
        else {
          if (((i = k.filter[t[a].type].apply(null, t[a].matches)), i[B])) {
            for (n = ++a; n < o && !k.relative[t[n].type]; n++);
            return v(
              a > 1 && f(u),
              a > 1 &&
                h(
                  t
                    .slice(0, a - 1)
                    .concat({ value: ' ' === t[a - 2].type ? '*' : '' })
                ).replace(at, '$1'),
              i,
              a < n && y(t.slice(a, n)),
              n < o && y((t = t.slice(n))),
              n < o && h(t)
            )
          }
          u.push(i)
        }
      return f(u)
    }
    function w(t, i) {
      var o = i.length > 0,
        r = t.length > 0,
        s = function(n, s, a, l, c) {
          var u,
            d,
            h,
            p = 0,
            f = '0',
            m = n && [],
            v = [],
            y = D,
            w = n || (r && k.find.TAG('*', c)),
            b = (O += null == y ? 1 : Math.random() || 0.1),
            _ = w.length
          for (
            c && (D = s === j || s || c);
            f !== _ && null != (u = w[f]);
            f++
          ) {
            if (r && u) {
              for (
                d = 0, s || u.ownerDocument === j || (M(u), (a = !I));
                (h = t[d++]);

              )
                if (h(u, s || j, a)) {
                  l.push(u)
                  break
                }
              c && (O = b)
            }
            o && ((u = !h && u) && p--, n && m.push(u))
          }
          if (((p += f), o && f !== p)) {
            for (d = 0; (h = i[d++]); ) h(m, v, s, a)
            if (n) {
              if (p > 0) for (; f--; ) m[f] || v[f] || (v[f] = J.call(l))
              v = g(v)
            }
            Q.apply(l, v),
              c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
          }
          return c && ((O = b), (D = y)), m
        }
      return o ? n(s) : s
    }
    var b,
      _,
      k,
      x,
      C,
      T,
      S,
      $,
      D,
      E,
      A,
      M,
      j,
      P,
      I,
      N,
      L,
      H,
      F,
      B = 'sizzle' + 1 * new Date(),
      R = t.document,
      O = 0,
      W = 0,
      q = i(),
      z = i(),
      Y = i(),
      U = function(t, e) {
        return t === e && (A = !0), 0
      },
      X = 1 << 31,
      V = {}.hasOwnProperty,
      K = [],
      J = K.pop,
      G = K.push,
      Q = K.push,
      Z = K.slice,
      tt = function(t, e) {
        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i
        return -1
      },
      et =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      it = '[\\x20\\t\\r\\n\\f]',
      nt = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      ot =
        '\\[' +
        it +
        '*(' +
        nt +
        ')(?:' +
        it +
        '*([*^$|!~]?=)' +
        it +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        nt +
        '))|)' +
        it +
        '*\\]',
      rt =
        ':(' +
        nt +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        ot +
        ')*)|.*)\\)|)',
      st = new RegExp(it + '+', 'g'),
      at = new RegExp(
        '^' + it + '+|((?:^|[^\\\\])(?:\\\\.)*)' + it + '+$',
        'g'
      ),
      lt = new RegExp('^' + it + '*,' + it + '*'),
      ct = new RegExp('^' + it + '*([>+~]|' + it + ')' + it + '*'),
      ut = new RegExp('=' + it + '*([^\\]\'"]*?)' + it + '*\\]', 'g'),
      dt = new RegExp(rt),
      ht = new RegExp('^' + nt + '$'),
      pt = {
        ID: new RegExp('^#(' + nt + ')'),
        CLASS: new RegExp('^\\.(' + nt + ')'),
        TAG: new RegExp('^(' + nt + '|[*])'),
        ATTR: new RegExp('^' + ot),
        PSEUDO: new RegExp('^' + rt),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            it +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            it +
            '*(?:([+-]|)' +
            it +
            '*(\\d+)|))' +
            it +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + et + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            it +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            it +
            '*((?:-\\d)?\\d*)' +
            it +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      ft = /^(?:input|select|textarea|button)$/i,
      mt = /^h\d$/i,
      gt = /^[^{]+\{\s*\[native \w/,
      vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      yt = /[+~]/,
      wt = /'|\\/g,
      bt = new RegExp('\\\\([\\da-f]{1,6}' + it + '?|(' + it + ')|.)', 'ig'),
      _t = function(t, e, i) {
        var n = '0x' + e - 65536
        return n !== n || i
          ? e
          : n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320)
      },
      kt = function() {
        M()
      }
    try {
      Q.apply((K = Z.call(R.childNodes)), R.childNodes),
        K[R.childNodes.length].nodeType
    } catch (t) {
      Q = {
        apply: K.length
          ? function(t, e) {
              G.apply(t, Z.call(e))
            }
          : function(t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1
            }
      }
    }
    ;(_ = e.support = {}),
      (C = e.isXML = function(t) {
        var e = t && (t.ownerDocument || t).documentElement
        return !!e && 'HTML' !== e.nodeName
      }),
      (M = e.setDocument = function(t) {
        var e,
          i,
          n = t ? t.ownerDocument || t : R
        return n !== j && 9 === n.nodeType && n.documentElement
          ? ((j = n),
            (P = j.documentElement),
            (I = !C(j)),
            (i = j.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener('unload', kt, !1)
                : i.attachEvent && i.attachEvent('onunload', kt)),
            (_.attributes = o(function(t) {
              return (t.className = 'i'), !t.getAttribute('className')
            })),
            (_.getElementsByTagName = o(function(t) {
              return (
                t.appendChild(j.createComment('')),
                !t.getElementsByTagName('*').length
              )
            })),
            (_.getElementsByClassName = gt.test(j.getElementsByClassName)),
            (_.getById = o(function(t) {
              return (
                (P.appendChild(t).id = B),
                !j.getElementsByName || !j.getElementsByName(B).length
              )
            })),
            _.getById
              ? ((k.find.ID = function(t, e) {
                  if ('undefined' != typeof e.getElementById && I) {
                    var i = e.getElementById(t)
                    return i ? [i] : []
                  }
                }),
                (k.filter.ID = function(t) {
                  var e = t.replace(bt, _t)
                  return function(t) {
                    return t.getAttribute('id') === e
                  }
                }))
              : (delete k.find.ID,
                (k.filter.ID = function(t) {
                  var e = t.replace(bt, _t)
                  return function(t) {
                    var i =
                      'undefined' != typeof t.getAttributeNode &&
                      t.getAttributeNode('id')
                    return i && i.value === e
                  }
                })),
            (k.find.TAG = _.getElementsByTagName
              ? function(t, e) {
                  return 'undefined' != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : _.qsa
                    ? e.querySelectorAll(t)
                    : void 0
                }
              : function(t, e) {
                  var i,
                    n = [],
                    o = 0,
                    r = e.getElementsByTagName(t)
                  if ('*' === t) {
                    for (; (i = r[o++]); ) 1 === i.nodeType && n.push(i)
                    return n
                  }
                  return r
                }),
            (k.find.CLASS =
              _.getElementsByClassName &&
              function(t, e) {
                if ('undefined' != typeof e.getElementsByClassName && I)
                  return e.getElementsByClassName(t)
              }),
            (L = []),
            (N = []),
            (_.qsa = gt.test(j.querySelectorAll)) &&
              (o(function(t) {
                ;(P.appendChild(t).innerHTML =
                  "<a id='" +
                  B +
                  "'></a><select id='" +
                  B +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    N.push('[*^$]=' + it + '*(?:\'\'|"")'),
                  t.querySelectorAll('[selected]').length ||
                    N.push('\\[' + it + '*(?:value|' + et + ')'),
                  t.querySelectorAll('[id~=' + B + '-]').length || N.push('~='),
                  t.querySelectorAll(':checked').length || N.push(':checked'),
                  t.querySelectorAll('a#' + B + '+*').length ||
                    N.push('.#.+[+~]')
              }),
              o(function(t) {
                var e = j.createElement('input')
                e.setAttribute('type', 'hidden'),
                  t.appendChild(e).setAttribute('name', 'D'),
                  t.querySelectorAll('[name=d]').length &&
                    N.push('name' + it + '*[*^$|!~]?='),
                  t.querySelectorAll(':enabled').length ||
                    N.push(':enabled', ':disabled'),
                  t.querySelectorAll('*,:x'),
                  N.push(',.*:')
              })),
            (_.matchesSelector = gt.test(
              (H =
                P.matches ||
                P.webkitMatchesSelector ||
                P.mozMatchesSelector ||
                P.oMatchesSelector ||
                P.msMatchesSelector)
            )) &&
              o(function(t) {
                ;(_.disconnectedMatch = H.call(t, 'div')),
                  H.call(t, "[s!='']:x"),
                  L.push('!=', rt)
              }),
            (N = N.length && new RegExp(N.join('|'))),
            (L = L.length && new RegExp(L.join('|'))),
            (e = gt.test(P.compareDocumentPosition)),
            (F =
              e || gt.test(P.contains)
                ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode
                    return (
                      t === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(n))
                      )
                    )
                  }
                : function(t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0
                    return !1
                  }),
            (U = e
              ? function(t, e) {
                  if (t === e) return (A = !0), 0
                  var i =
                    !t.compareDocumentPosition - !e.compareDocumentPosition
                  return i
                    ? i
                    : ((i =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1),
                      1 & i ||
                      (!_.sortDetached && e.compareDocumentPosition(t) === i)
                        ? t === j || (t.ownerDocument === R && F(R, t))
                          ? -1
                          : e === j || (e.ownerDocument === R && F(R, e))
                          ? 1
                          : E
                          ? tt(E, t) - tt(E, e)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                }
              : function(t, e) {
                  if (t === e) return (A = !0), 0
                  var i,
                    n = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    a = [t],
                    l = [e]
                  if (!o || !r)
                    return t === j
                      ? -1
                      : e === j
                      ? 1
                      : o
                      ? -1
                      : r
                      ? 1
                      : E
                      ? tt(E, t) - tt(E, e)
                      : 0
                  if (o === r) return s(t, e)
                  for (i = t; (i = i.parentNode); ) a.unshift(i)
                  for (i = e; (i = i.parentNode); ) l.unshift(i)
                  for (; a[n] === l[n]; ) n++
                  return n
                    ? s(a[n], l[n])
                    : a[n] === R
                    ? -1
                    : l[n] === R
                    ? 1
                    : 0
                }),
            j)
          : j
      }),
      (e.matches = function(t, i) {
        return e(t, null, null, i)
      }),
      (e.matchesSelector = function(t, i) {
        if (
          ((t.ownerDocument || t) !== j && M(t),
          (i = i.replace(ut, "='$1']")),
          _.matchesSelector &&
            I &&
            !Y[i + ' '] &&
            (!L || !L.test(i)) &&
            (!N || !N.test(i)))
        )
          try {
            var n = H.call(t, i)
            if (
              n ||
              _.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return n
          } catch (t) {}
        return e(i, j, null, [t]).length > 0
      }),
      (e.contains = function(t, e) {
        return (t.ownerDocument || t) !== j && M(t), F(t, e)
      }),
      (e.attr = function(t, e) {
        ;(t.ownerDocument || t) !== j && M(t)
        var i = k.attrHandle[e.toLowerCase()],
          n = i && V.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !I) : void 0
        return void 0 !== n
          ? n
          : _.attributes || !I
          ? t.getAttribute(e)
          : (n = t.getAttributeNode(e)) && n.specified
          ? n.value
          : null
      }),
      (e.error = function(t) {
        throw new Error('Syntax error, unrecognized expression: ' + t)
      }),
      (e.uniqueSort = function(t) {
        var e,
          i = [],
          n = 0,
          o = 0
        if (
          ((A = !_.detectDuplicates),
          (E = !_.sortStable && t.slice(0)),
          t.sort(U),
          A)
        ) {
          for (; (e = t[o++]); ) e === t[o] && (n = i.push(o))
          for (; n--; ) t.splice(i[n], 1)
        }
        return (E = null), t
      }),
      (x = e.getText = function(t) {
        var e,
          i = '',
          n = 0,
          o = t.nodeType
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof t.textContent) return t.textContent
            for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
          } else if (3 === o || 4 === o) return t.nodeValue
        } else for (; (e = t[n++]); ) i += x(e)
        return i
      }),
      (k = e.selectors = {
        cacheLength: 50,
        createPseudo: n,
        match: pt,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' }
        },
        preFilter: {
          ATTR: function(t) {
            return (
              (t[1] = t[1].replace(bt, _t)),
              (t[3] = (t[3] || t[4] || t[5] || '').replace(bt, _t)),
              '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
              t.slice(0, 4)
            )
          },
          CHILD: function(t) {
            return (
              (t[1] = t[1].toLowerCase()),
              'nth' === t[1].slice(0, 3)
                ? (t[3] || e.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ('even' === t[3] || 'odd' === t[3]))),
                  (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
                : t[3] && e.error(t[0]),
              t
            )
          },
          PSEUDO: function(t) {
            var e,
              i = !t[6] && t[2]
            return pt.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || '')
                  : i &&
                    dt.test(i) &&
                    (e = T(i, !0)) &&
                    (e = i.indexOf(')', i.length - e) - i.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                t.slice(0, 3))
          }
        },
        filter: {
          TAG: function(t) {
            var e = t.replace(bt, _t).toLowerCase()
            return '*' === t
              ? function() {
                  return !0
                }
              : function(t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e
                }
          },
          CLASS: function(t) {
            var e = q[t + ' ']
            return (
              e ||
              ((e = new RegExp('(^|' + it + ')' + t + '(' + it + '|$)')) &&
                q(t, function(t) {
                  return e.test(
                    ('string' == typeof t.className && t.className) ||
                      ('undefined' != typeof t.getAttribute &&
                        t.getAttribute('class')) ||
                      ''
                  )
                }))
            )
          },
          ATTR: function(t, i, n) {
            return function(o) {
              var r = e.attr(o, t)
              return null == r
                ? '!=' === i
                : !i ||
                    ((r += ''),
                    '=' === i
                      ? r === n
                      : '!=' === i
                      ? r !== n
                      : '^=' === i
                      ? n && 0 === r.indexOf(n)
                      : '*=' === i
                      ? n && r.indexOf(n) > -1
                      : '$=' === i
                      ? n && r.slice(-n.length) === n
                      : '~=' === i
                      ? (' ' + r.replace(st, ' ') + ' ').indexOf(n) > -1
                      : '|=' === i &&
                        (r === n || r.slice(0, n.length + 1) === n + '-'))
            }
          },
          CHILD: function(t, e, i, n, o) {
            var r = 'nth' !== t.slice(0, 3),
              s = 'last' !== t.slice(-4),
              a = 'of-type' === e
            return 1 === n && 0 === o
              ? function(t) {
                  return !!t.parentNode
                }
              : function(e, i, l) {
                  var c,
                    u,
                    d,
                    h,
                    p,
                    f,
                    m = r !== s ? 'nextSibling' : 'previousSibling',
                    g = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !l && !a,
                    w = !1
                  if (g) {
                    if (r) {
                      for (; m; ) {
                        for (h = e; (h = h[m]); )
                          if (
                            a
                              ? h.nodeName.toLowerCase() === v
                              : 1 === h.nodeType
                          )
                            return !1
                        f = m = 'only' === t && !f && 'nextSibling'
                      }
                      return !0
                    }
                    if (((f = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (
                        h = g,
                          d = h[B] || (h[B] = {}),
                          u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                          c = u[t] || [],
                          p = c[0] === O && c[1],
                          w = p && c[2],
                          h = p && g.childNodes[p];
                        (h = (++p && h && h[m]) || (w = p = 0) || f.pop());

                      )
                        if (1 === h.nodeType && ++w && h === e) {
                          u[t] = [O, p, w]
                          break
                        }
                    } else if (
                      (y &&
                        ((h = e),
                        (d = h[B] || (h[B] = {})),
                        (u = d[h.uniqueID] || (d[h.uniqueID] = {})),
                        (c = u[t] || []),
                        (p = c[0] === O && c[1]),
                        (w = p)),
                      w === !1)
                    )
                      for (
                        ;
                        (h = (++p && h && h[m]) || (w = p = 0) || f.pop()) &&
                        ((a
                          ? h.nodeName.toLowerCase() !== v
                          : 1 !== h.nodeType) ||
                          !++w ||
                          (y &&
                            ((d = h[B] || (h[B] = {})),
                            (u = d[h.uniqueID] || (d[h.uniqueID] = {})),
                            (u[t] = [O, w])),
                          h !== e));

                      );
                    return (w -= o), w === n || (w % n === 0 && w / n >= 0)
                  }
                }
          },
          PSEUDO: function(t, i) {
            var o,
              r =
                k.pseudos[t] ||
                k.setFilters[t.toLowerCase()] ||
                e.error('unsupported pseudo: ' + t)
            return r[B]
              ? r(i)
              : r.length > 1
              ? ((o = [t, t, '', i]),
                k.setFilters.hasOwnProperty(t.toLowerCase())
                  ? n(function(t, e) {
                      for (var n, o = r(t, i), s = o.length; s--; )
                        (n = tt(t, o[s])), (t[n] = !(e[n] = o[s]))
                    })
                  : function(t) {
                      return r(t, 0, o)
                    })
              : r
          }
        },
        pseudos: {
          not: n(function(t) {
            var e = [],
              i = [],
              o = S(t.replace(at, '$1'))
            return o[B]
              ? n(function(t, e, i, n) {
                  for (var r, s = o(t, null, n, []), a = t.length; a--; )
                    (r = s[a]) && (t[a] = !(e[a] = r))
                })
              : function(t, n, r) {
                  return (e[0] = t), o(e, null, r, i), (e[0] = null), !i.pop()
                }
          }),
          has: n(function(t) {
            return function(i) {
              return e(t, i).length > 0
            }
          }),
          contains: n(function(t) {
            return (
              (t = t.replace(bt, _t)),
              function(e) {
                return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
              }
            )
          }),
          lang: n(function(t) {
            return (
              ht.test(t || '') || e.error('unsupported lang: ' + t),
              (t = t.replace(bt, _t).toLowerCase()),
              function(e) {
                var i
                do
                  if (
                    (i = I
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (i = i.toLowerCase()), i === t || 0 === i.indexOf(t + '-')
                    )
                while ((e = e.parentNode) && 1 === e.nodeType)
                return !1
              }
            )
          }),
          target: function(e) {
            var i = t.location && t.location.hash
            return i && i.slice(1) === e.id
          },
          root: function(t) {
            return t === P
          },
          focus: function(t) {
            return (
              t === j.activeElement &&
              (!j.hasFocus || j.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            )
          },
          enabled: function(t) {
            return t.disabled === !1
          },
          disabled: function(t) {
            return t.disabled === !0
          },
          checked: function(t) {
            var e = t.nodeName.toLowerCase()
            return (
              ('input' === e && !!t.checked) || ('option' === e && !!t.selected)
            )
          },
          selected: function(t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
          },
          empty: function(t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1
            return !0
          },
          parent: function(t) {
            return !k.pseudos.empty(t)
          },
          header: function(t) {
            return mt.test(t.nodeName)
          },
          input: function(t) {
            return ft.test(t.nodeName)
          },
          button: function(t) {
            var e = t.nodeName.toLowerCase()
            return ('input' === e && 'button' === t.type) || 'button' === e
          },
          text: function(t) {
            var e
            return (
              'input' === t.nodeName.toLowerCase() &&
              'text' === t.type &&
              (null == (e = t.getAttribute('type')) ||
                'text' === e.toLowerCase())
            )
          },
          first: c(function() {
            return [0]
          }),
          last: c(function(t, e) {
            return [e - 1]
          }),
          eq: c(function(t, e, i) {
            return [i < 0 ? i + e : i]
          }),
          even: c(function(t, e) {
            for (var i = 0; i < e; i += 2) t.push(i)
            return t
          }),
          odd: c(function(t, e) {
            for (var i = 1; i < e; i += 2) t.push(i)
            return t
          }),
          lt: c(function(t, e, i) {
            for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n)
            return t
          }),
          gt: c(function(t, e, i) {
            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n)
            return t
          })
        }
      }),
      (k.pseudos.nth = k.pseudos.eq)
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      k.pseudos[b] = a(b)
    for (b in { submit: !0, reset: !0 }) k.pseudos[b] = l(b)
    return (
      (d.prototype = k.filters = k.pseudos),
      (k.setFilters = new d()),
      (T = e.tokenize = function(t, i) {
        var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = z[t + ' ']
        if (u) return i ? 0 : u.slice(0)
        for (a = t, l = [], c = k.preFilter; a; ) {
          ;(n && !(o = lt.exec(a))) ||
            (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
            (n = !1),
            (o = ct.exec(a)) &&
              ((n = o.shift()),
              r.push({ value: n, type: o[0].replace(at, ' ') }),
              (a = a.slice(n.length)))
          for (s in k.filter)
            !(o = pt[s].exec(a)) ||
              (c[s] && !(o = c[s](o))) ||
              ((n = o.shift()),
              r.push({ value: n, type: s, matches: o }),
              (a = a.slice(n.length)))
          if (!n) break
        }
        return i ? a.length : a ? e.error(t) : z(t, l).slice(0)
      }),
      (S = e.compile = function(t, e) {
        var i,
          n = [],
          o = [],
          r = Y[t + ' ']
        if (!r) {
          for (e || (e = T(t)), i = e.length; i--; )
            (r = y(e[i])), r[B] ? n.push(r) : o.push(r)
          ;(r = Y(t, w(o, n))), (r.selector = t)
        }
        return r
      }),
      ($ = e.select = function(t, e, i, n) {
        var o,
          r,
          s,
          a,
          l,
          c = 'function' == typeof t && t,
          d = !n && T((t = c.selector || t))
        if (((i = i || []), 1 === d.length)) {
          if (
            ((r = d[0] = d[0].slice(0)),
            r.length > 2 &&
              'ID' === (s = r[0]).type &&
              _.getById &&
              9 === e.nodeType &&
              I &&
              k.relative[r[1].type])
          ) {
            if (
              ((e = (k.find.ID(s.matches[0].replace(bt, _t), e) || [])[0]), !e)
            )
              return i
            c && (e = e.parentNode), (t = t.slice(r.shift().value.length))
          }
          for (
            o = pt.needsContext.test(t) ? 0 : r.length;
            o-- && ((s = r[o]), !k.relative[(a = s.type)]);

          )
            if (
              (l = k.find[a]) &&
              (n = l(
                s.matches[0].replace(bt, _t),
                (yt.test(r[0].type) && u(e.parentNode)) || e
              ))
            ) {
              if ((r.splice(o, 1), (t = n.length && h(r)), !t))
                return Q.apply(i, n), i
              break
            }
        }
        return (
          (c || S(t, d))(
            n,
            e,
            !I,
            i,
            !e || (yt.test(t) && u(e.parentNode)) || e
          ),
          i
        )
      }),
      (_.sortStable =
        B.split('')
          .sort(U)
          .join('') === B),
      (_.detectDuplicates = !!A),
      M(),
      (_.sortDetached = o(function(t) {
        return 1 & t.compareDocumentPosition(j.createElement('div'))
      })),
      o(function(t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          '#' === t.firstChild.getAttribute('href')
        )
      }) ||
        r('type|href|height|width', function(t, e, i) {
          if (!i) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2)
        }),
      (_.attributes &&
        o(function(t) {
          return (
            (t.innerHTML = '<input/>'),
            t.firstChild.setAttribute('value', ''),
            '' === t.firstChild.getAttribute('value')
          )
        })) ||
        r('value', function(t, e, i) {
          if (!i && 'input' === t.nodeName.toLowerCase()) return t.defaultValue
        }),
      o(function(t) {
        return null == t.getAttribute('disabled')
      }) ||
        r(et, function(t, e, i) {
          var n
          if (!i)
            return t[e] === !0
              ? e.toLowerCase()
              : (n = t.getAttributeNode(e)) && n.specified
              ? n.value
              : null
        }),
      e
    )
  })(t)
  ;(pt.find = yt),
    (pt.expr = yt.selectors),
    (pt.expr[':'] = pt.expr.pseudos),
    (pt.uniqueSort = pt.unique = yt.uniqueSort),
    (pt.text = yt.getText),
    (pt.isXMLDoc = yt.isXML),
    (pt.contains = yt.contains)
  var wt = function(t, e, i) {
      for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (o && pt(t).is(i)) break
          n.push(t)
        }
      return n
    },
    bt = function(t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t)
      return i
    },
    _t = pt.expr.match.needsContext,
    kt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    xt = /^.[^:#\[\.,]*$/
  ;(pt.filter = function(t, e, i) {
    var n = e[0]
    return (
      i && (t = ':not(' + t + ')'),
      1 === e.length && 1 === n.nodeType
        ? pt.find.matchesSelector(n, t)
          ? [n]
          : []
        : pt.find.matches(
            t,
            pt.grep(e, function(t) {
              return 1 === t.nodeType
            })
          )
    )
  }),
    pt.fn.extend({
      find: function(t) {
        var e,
          i = [],
          n = this,
          o = n.length
        if ('string' != typeof t)
          return this.pushStack(
            pt(t).filter(function() {
              for (e = 0; e < o; e++) if (pt.contains(n[e], this)) return !0
            })
          )
        for (e = 0; e < o; e++) pt.find(t, n[e], i)
        return (
          (i = this.pushStack(o > 1 ? pt.unique(i) : i)),
          (i.selector = this.selector ? this.selector + ' ' + t : t),
          i
        )
      },
      filter: function(t) {
        return this.pushStack(n(this, t || [], !1))
      },
      not: function(t) {
        return this.pushStack(n(this, t || [], !0))
      },
      is: function(t) {
        return !!n(
          this,
          'string' == typeof t && _t.test(t) ? pt(t) : t || [],
          !1
        ).length
      }
    })
  var Ct,
    Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    St = (pt.fn.init = function(t, e, i) {
      var n, o
      if (!t) return this
      if (((i = i || Ct), 'string' == typeof t)) {
        if (
          ((n =
            '<' === t.charAt(0) &&
            '>' === t.charAt(t.length - 1) &&
            t.length >= 3
              ? [null, t, null]
              : Tt.exec(t)),
          !n || (!n[1] && e))
        )
          return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t)
        if (n[1]) {
          if (
            ((e = e instanceof pt ? e[0] : e),
            pt.merge(
              this,
              pt.parseHTML(
                n[1],
                e && e.nodeType ? e.ownerDocument || e : nt,
                !0
              )
            ),
            kt.test(n[1]) && pt.isPlainObject(e))
          )
            for (n in e)
              pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n])
          return this
        }
        if (((o = nt.getElementById(n[2])), o && o.parentNode)) {
          if (o.id !== n[2]) return Ct.find(t)
          ;(this.length = 1), (this[0] = o)
        }
        return (this.context = nt), (this.selector = t), this
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : pt.isFunction(t)
        ? 'undefined' != typeof i.ready
          ? i.ready(t)
          : t(pt)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          pt.makeArray(t, this))
    })
  ;(St.prototype = pt.fn), (Ct = pt(nt))
  var $t = /^(?:parents|prev(?:Until|All))/,
    Dt = { children: !0, contents: !0, next: !0, prev: !0 }
  pt.fn.extend({
    has: function(t) {
      var e,
        i = pt(t, this),
        n = i.length
      return this.filter(function() {
        for (e = 0; e < n; e++) if (pt.contains(this, i[e])) return !0
      })
    },
    closest: function(t, e) {
      for (
        var i,
          n = 0,
          o = this.length,
          r = [],
          s = _t.test(t) || 'string' != typeof t ? pt(t, e || this.context) : 0;
        n < o;
        n++
      )
        for (i = this[n]; i && i !== e; i = i.parentNode)
          if (
            i.nodeType < 11 &&
            (s
              ? s.index(i) > -1
              : 1 === i.nodeType && pt.find.matchesSelector(i, t))
          ) {
            r.push(i)
            break
          }
      return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r)
    },
    index: function(t) {
      return t
        ? 'string' == typeof t
          ? pt.inArray(this[0], pt(t))
          : pt.inArray(t.jquery ? t[0] : t, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function(t, e) {
      return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
    },
    addBack: function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
  }),
    pt.each(
      {
        parent: function(t) {
          var e = t.parentNode
          return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
          return wt(t, 'parentNode')
        },
        parentsUntil: function(t, e, i) {
          return wt(t, 'parentNode', i)
        },
        next: function(t) {
          return o(t, 'nextSibling')
        },
        prev: function(t) {
          return o(t, 'previousSibling')
        },
        nextAll: function(t) {
          return wt(t, 'nextSibling')
        },
        prevAll: function(t) {
          return wt(t, 'previousSibling')
        },
        nextUntil: function(t, e, i) {
          return wt(t, 'nextSibling', i)
        },
        prevUntil: function(t, e, i) {
          return wt(t, 'previousSibling', i)
        },
        siblings: function(t) {
          return bt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
          return bt(t.firstChild)
        },
        contents: function(t) {
          return pt.nodeName(t, 'iframe')
            ? t.contentDocument || t.contentWindow.document
            : pt.merge([], t.childNodes)
        }
      },
      function(t, e) {
        pt.fn[t] = function(i, n) {
          var o = pt.map(this, e, i)
          return (
            'Until' !== t.slice(-5) && (n = i),
            n && 'string' == typeof n && (o = pt.filter(n, o)),
            this.length > 1 &&
              (Dt[t] || (o = pt.uniqueSort(o)),
              $t.test(t) && (o = o.reverse())),
            this.pushStack(o)
          )
        }
      }
    )
  var Et = /\S+/g
  ;(pt.Callbacks = function(t) {
    t = 'string' == typeof t ? r(t) : pt.extend({}, t)
    var e,
      i,
      n,
      o,
      s = [],
      a = [],
      l = -1,
      c = function() {
        for (o = t.once, n = e = !0; a.length; l = -1)
          for (i = a.shift(); ++l < s.length; )
            s[l].apply(i[0], i[1]) === !1 &&
              t.stopOnFalse &&
              ((l = s.length), (i = !1))
        t.memory || (i = !1), (e = !1), o && (s = i ? [] : '')
      },
      u = {
        add: function() {
          return (
            s &&
              (i && !e && ((l = s.length - 1), a.push(i)),
              (function e(i) {
                pt.each(i, function(i, n) {
                  pt.isFunction(n)
                    ? (t.unique && u.has(n)) || s.push(n)
                    : n && n.length && 'string' !== pt.type(n) && e(n)
                })
              })(arguments),
              i && !e && c()),
            this
          )
        },
        remove: function() {
          return (
            pt.each(arguments, function(t, e) {
              for (var i; (i = pt.inArray(e, s, i)) > -1; )
                s.splice(i, 1), i <= l && l--
            }),
            this
          )
        },
        has: function(t) {
          return t ? pt.inArray(t, s) > -1 : s.length > 0
        },
        empty: function() {
          return s && (s = []), this
        },
        disable: function() {
          return (o = a = []), (s = i = ''), this
        },
        disabled: function() {
          return !s
        },
        lock: function() {
          return (o = !0), i || u.disable(), this
        },
        locked: function() {
          return !!o
        },
        fireWith: function(t, i) {
          return (
            o ||
              ((i = i || []),
              (i = [t, i.slice ? i.slice() : i]),
              a.push(i),
              e || c()),
            this
          )
        },
        fire: function() {
          return u.fireWith(this, arguments), this
        },
        fired: function() {
          return !!n
        }
      }
    return u
  }),
    pt.extend({
      Deferred: function(t) {
        var e = [
            ['resolve', 'done', pt.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', pt.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', pt.Callbacks('memory')]
          ],
          i = 'pending',
          n = {
            state: function() {
              return i
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            then: function() {
              var t = arguments
              return pt
                .Deferred(function(i) {
                  pt.each(e, function(e, r) {
                    var s = pt.isFunction(t[e]) && t[e]
                    o[r[1]](function() {
                      var t = s && s.apply(this, arguments)
                      t && pt.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[r[0] + 'With'](
                            this === n ? i.promise() : this,
                            s ? [t] : arguments
                          )
                    })
                  }),
                    (t = null)
                })
                .promise()
            },
            promise: function(t) {
              return null != t ? pt.extend(t, n) : n
            }
          },
          o = {}
        return (
          (n.pipe = n.then),
          pt.each(e, function(t, r) {
            var s = r[2],
              a = r[3]
            ;(n[r[1]] = s.add),
              a &&
                s.add(
                  function() {
                    i = a
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (o[r[0]] = function() {
                return o[r[0] + 'With'](this === o ? n : this, arguments), this
              }),
              (o[r[0] + 'With'] = s.fireWith)
          }),
          n.promise(o),
          t && t.call(o, o),
          o
        )
      },
      when: function(t) {
        var e,
          i,
          n,
          o = 0,
          r = ot.call(arguments),
          s = r.length,
          a = 1 !== s || (t && pt.isFunction(t.promise)) ? s : 0,
          l = 1 === a ? t : pt.Deferred(),
          c = function(t, i, n) {
            return function(o) {
              ;(i[t] = this),
                (n[t] = arguments.length > 1 ? ot.call(arguments) : o),
                n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
            }
          }
        if (s > 1)
          for (e = new Array(s), i = new Array(s), n = new Array(s); o < s; o++)
            r[o] && pt.isFunction(r[o].promise)
              ? r[o]
                  .promise()
                  .progress(c(o, i, e))
                  .done(c(o, n, r))
                  .fail(l.reject)
              : --a
        return a || l.resolveWith(n, r), l.promise()
      }
    })
  var At
  ;(pt.fn.ready = function(t) {
    return pt.ready.promise().done(t), this
  }),
    pt.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(t) {
        t ? pt.readyWait++ : pt.ready(!0)
      },
      ready: function(t) {
        ;(t === !0 ? --pt.readyWait : pt.isReady) ||
          ((pt.isReady = !0),
          (t !== !0 && --pt.readyWait > 0) ||
            (At.resolveWith(nt, [pt]),
            pt.fn.triggerHandler &&
              (pt(nt).triggerHandler('ready'), pt(nt).off('ready'))))
      }
    }),
    (pt.ready.promise = function(e) {
      if (!At)
        if (
          ((At = pt.Deferred()),
          'complete' === nt.readyState ||
            ('loading' !== nt.readyState && !nt.documentElement.doScroll))
        )
          t.setTimeout(pt.ready)
        else if (nt.addEventListener)
          nt.addEventListener('DOMContentLoaded', a),
            t.addEventListener('load', a)
        else {
          nt.attachEvent('onreadystatechange', a), t.attachEvent('onload', a)
          var i = !1
          try {
            i = null == t.frameElement && nt.documentElement
          } catch (t) {}
          i &&
            i.doScroll &&
            !(function e() {
              if (!pt.isReady) {
                try {
                  i.doScroll('left')
                } catch (i) {
                  return t.setTimeout(e, 50)
                }
                s(), pt.ready()
              }
            })()
        }
      return At.promise(e)
    }),
    pt.ready.promise()
  var Mt
  for (Mt in pt(dt)) break
  ;(dt.ownFirst = '0' === Mt),
    (dt.inlineBlockNeedsLayout = !1),
    pt(function() {
      var t, e, i, n
      ;(i = nt.getElementsByTagName('body')[0]),
        i &&
          i.style &&
          ((e = nt.createElement('div')),
          (n = nt.createElement('div')),
          (n.style.cssText =
            'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
          i.appendChild(n).appendChild(e),
          'undefined' != typeof e.style.zoom &&
            ((e.style.cssText =
              'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'),
            (dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
            t && (i.style.zoom = 1)),
          i.removeChild(n))
    }),
    (function() {
      var t = nt.createElement('div')
      dt.deleteExpando = !0
      try {
        delete t.test
      } catch (t) {
        dt.deleteExpando = !1
      }
      t = null
    })()
  var jt = function(t) {
      var e = pt.noData[(t.nodeName + ' ').toLowerCase()],
        i = +t.nodeType || 1
      return (
        (1 === i || 9 === i) &&
        (!e || (e !== !0 && t.getAttribute('classid') === e))
      )
    },
    Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    It = /([A-Z])/g
  pt.extend({
    cache: {},
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function(t) {
      return (
        (t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]), !!t && !c(t)
      )
    },
    data: function(t, e, i) {
      return u(t, e, i)
    },
    removeData: function(t, e) {
      return d(t, e)
    },
    _data: function(t, e, i) {
      return u(t, e, i, !0)
    },
    _removeData: function(t, e) {
      return d(t, e, !0)
    }
  }),
    pt.fn.extend({
      data: function(t, e) {
        var i,
          n,
          o,
          r = this[0],
          s = r && r.attributes
        if (void 0 === t) {
          if (
            this.length &&
            ((o = pt.data(r)), 1 === r.nodeType && !pt._data(r, 'parsedAttrs'))
          ) {
            for (i = s.length; i--; )
              s[i] &&
                ((n = s[i].name),
                0 === n.indexOf('data-') &&
                  ((n = pt.camelCase(n.slice(5))), l(r, n, o[n])))
            pt._data(r, 'parsedAttrs', !0)
          }
          return o
        }
        return 'object' == typeof t
          ? this.each(function() {
              pt.data(this, t)
            })
          : arguments.length > 1
          ? this.each(function() {
              pt.data(this, t, e)
            })
          : r
          ? l(r, t, pt.data(r, t))
          : void 0
      },
      removeData: function(t) {
        return this.each(function() {
          pt.removeData(this, t)
        })
      }
    }),
    pt.extend({
      queue: function(t, e, i) {
        var n
        if (t)
          return (
            (e = (e || 'fx') + 'queue'),
            (n = pt._data(t, e)),
            i &&
              (!n || pt.isArray(i)
                ? (n = pt._data(t, e, pt.makeArray(i)))
                : n.push(i)),
            n || []
          )
      },
      dequeue: function(t, e) {
        e = e || 'fx'
        var i = pt.queue(t, e),
          n = i.length,
          o = i.shift(),
          r = pt._queueHooks(t, e),
          s = function() {
            pt.dequeue(t, e)
          }
        'inprogress' === o && ((o = i.shift()), n--),
          o &&
            ('fx' === e && i.unshift('inprogress'),
            delete r.stop,
            o.call(t, s, r)),
          !n && r && r.empty.fire()
      },
      _queueHooks: function(t, e) {
        var i = e + 'queueHooks'
        return (
          pt._data(t, i) ||
          pt._data(t, i, {
            empty: pt.Callbacks('once memory').add(function() {
              pt._removeData(t, e + 'queue'), pt._removeData(t, i)
            })
          })
        )
      }
    }),
    pt.fn.extend({
      queue: function(t, e) {
        var i = 2
        return (
          'string' != typeof t && ((e = t), (t = 'fx'), i--),
          arguments.length < i
            ? pt.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function() {
                var i = pt.queue(this, t, e)
                pt._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== i[0] && pt.dequeue(this, t)
              })
        )
      },
      dequeue: function(t) {
        return this.each(function() {
          pt.dequeue(this, t)
        })
      },
      clearQueue: function(t) {
        return this.queue(t || 'fx', [])
      },
      promise: function(t, e) {
        var i,
          n = 1,
          o = pt.Deferred(),
          r = this,
          s = this.length,
          a = function() {
            --n || o.resolveWith(r, [r])
          }
        for (
          'string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx';
          s--;

        )
          (i = pt._data(r[s], t + 'queueHooks')),
            i && i.empty && (n++, i.empty.add(a))
        return a(), o.promise(e)
      }
    }),
    (function() {
      var t
      dt.shrinkWrapBlocks = function() {
        if (null != t) return t
        t = !1
        var e, i, n
        return (
          (i = nt.getElementsByTagName('body')[0]),
          i && i.style
            ? ((e = nt.createElement('div')),
              (n = nt.createElement('div')),
              (n.style.cssText =
                'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
              i.appendChild(n).appendChild(e),
              'undefined' != typeof e.style.zoom &&
                ((e.style.cssText =
                  '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
                (e.appendChild(nt.createElement('div')).style.width = '5px'),
                (t = 3 !== e.offsetWidth)),
              i.removeChild(n),
              t)
            : void 0
        )
      }
    })()
  var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Lt = new RegExp('^(?:([+-])=|)(' + Nt + ')([a-z%]*)$', 'i'),
    Ht = ['Top', 'Right', 'Bottom', 'Left'],
    Ft = function(t, e) {
      return (
        (t = e || t),
        'none' === pt.css(t, 'display') || !pt.contains(t.ownerDocument, t)
      )
    },
    Bt = function(t, e, i, n, o, r, s) {
      var a = 0,
        l = t.length,
        c = null == i
      if ('object' === pt.type(i)) {
        o = !0
        for (a in i) Bt(t, e, a, i[a], !0, r, s)
      } else if (
        void 0 !== n &&
        ((o = !0),
        pt.isFunction(n) || (s = !0),
        c &&
          (s
            ? (e.call(t, n), (e = null))
            : ((c = e),
              (e = function(t, e, i) {
                return c.call(pt(t), i)
              }))),
        e)
      )
        for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)))
      return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
    },
    Rt = /^(?:checkbox|radio)$/i,
    Ot = /<([\w:-]+)/,
    Wt = /^$|\/(?:java|ecma)script/i,
    qt = /^\s+/,
    zt =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video'
  !(function() {
    var t = nt.createElement('div'),
      e = nt.createDocumentFragment(),
      i = nt.createElement('input')
    ;(t.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (dt.leadingWhitespace = 3 === t.firstChild.nodeType),
      (dt.tbody = !t.getElementsByTagName('tbody').length),
      (dt.htmlSerialize = !!t.getElementsByTagName('link').length),
      (dt.html5Clone =
        '<:nav></:nav>' !== nt.createElement('nav').cloneNode(!0).outerHTML),
      (i.type = 'checkbox'),
      (i.checked = !0),
      e.appendChild(i),
      (dt.appendChecked = i.checked),
      (t.innerHTML = '<textarea>x</textarea>'),
      (dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      e.appendChild(t),
      (i = nt.createElement('input')),
      i.setAttribute('type', 'radio'),
      i.setAttribute('checked', 'checked'),
      i.setAttribute('name', 't'),
      t.appendChild(i),
      (dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (dt.noCloneEvent = !!t.addEventListener),
      (t[pt.expando] = 1),
      (dt.attributes = !t.getAttribute(pt.expando))
  })()
  var Yt = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    area: [1, '<map>', '</map>'],
    param: [1, '<object>', '</object>'],
    thead: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: dt.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
  }
  ;(Yt.optgroup = Yt.option),
    (Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead),
    (Yt.th = Yt.td)
  var Ut = /<|&#?\w+;/,
    Xt = /<tbody/i
  !(function() {
    var e,
      i,
      n = nt.createElement('div')
    for (e in { submit: !0, change: !0, focusin: !0 })
      (i = 'on' + e),
        (dt[e] = i in t) ||
          (n.setAttribute(i, 't'), (dt[e] = n.attributes[i].expando === !1))
    n = null
  })()
  var Vt = /^(?:input|select|textarea)$/i,
    Kt = /^key/,
    Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Gt = /^(?:focusinfocus|focusoutblur)$/,
    Qt = /^([^.]*)(?:\.(.+)|)/
  ;(pt.event = {
    global: {},
    add: function(t, e, i, n, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g = pt._data(t)
      if (g) {
        for (
          i.handler && ((l = i), (i = l.handler), (o = l.selector)),
            i.guid || (i.guid = pt.guid++),
            (s = g.events) || (s = g.events = {}),
            (u = g.handle) ||
              ((u = g.handle = function(t) {
                return 'undefined' == typeof pt ||
                  (t && pt.event.triggered === t.type)
                  ? void 0
                  : pt.event.dispatch.apply(u.elem, arguments)
              }),
              (u.elem = t)),
            e = (e || '').match(Et) || [''],
            a = e.length;
          a--;

        )
          (r = Qt.exec(e[a]) || []),
            (p = m = r[1]),
            (f = (r[2] || '').split('.').sort()),
            p &&
              ((c = pt.event.special[p] || {}),
              (p = (o ? c.delegateType : c.bindType) || p),
              (c = pt.event.special[p] || {}),
              (d = pt.extend(
                {
                  type: p,
                  origType: m,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: o,
                  needsContext: o && pt.expr.match.needsContext.test(o),
                  namespace: f.join('.')
                },
                l
              )),
              (h = s[p]) ||
                ((h = s[p] = []),
                (h.delegateCount = 0),
                (c.setup && c.setup.call(t, n, f, u) !== !1) ||
                  (t.addEventListener
                    ? t.addEventListener(p, u, !1)
                    : t.attachEvent && t.attachEvent('on' + p, u))),
              c.add &&
                (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)),
              o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
              (pt.event.global[p] = !0))
        t = null
      }
    },
    remove: function(t, e, i, n, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g = pt.hasData(t) && pt._data(t)
      if (g && (u = g.events)) {
        for (e = (e || '').match(Et) || [''], c = e.length; c--; )
          if (
            ((a = Qt.exec(e[c]) || []),
            (p = m = a[1]),
            (f = (a[2] || '').split('.').sort()),
            p)
          ) {
            for (
              d = pt.event.special[p] || {},
                p = (n ? d.delegateType : d.bindType) || p,
                h = u[p] || [],
                a =
                  a[2] &&
                  new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                l = r = h.length;
              r--;

            )
              (s = h[r]),
                (!o && m !== s.origType) ||
                  (i && i.guid !== s.guid) ||
                  (a && !a.test(s.namespace)) ||
                  (n && n !== s.selector && ('**' !== n || !s.selector)) ||
                  (h.splice(r, 1),
                  s.selector && h.delegateCount--,
                  d.remove && d.remove.call(t, s))
            l &&
              !h.length &&
              ((d.teardown && d.teardown.call(t, f, g.handle) !== !1) ||
                pt.removeEvent(t, p, g.handle),
              delete u[p])
          } else for (p in u) pt.event.remove(t, p + e[c], i, n, !0)
        pt.isEmptyObject(u) && (delete g.handle, pt._removeData(t, 'events'))
      }
    },
    trigger: function(e, i, n, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        h = [n || nt],
        p = ut.call(e, 'type') ? e.type : e,
        f = ut.call(e, 'namespace') ? e.namespace.split('.') : []
      if (
        ((a = u = n = n || nt),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Gt.test(p + pt.event.triggered) &&
          (p.indexOf('.') > -1 &&
            ((f = p.split('.')), (p = f.shift()), f.sort()),
          (s = p.indexOf(':') < 0 && 'on' + p),
          (e = e[pt.expando] ? e : new pt.Event(p, 'object' == typeof e && e)),
          (e.isTrigger = o ? 2 : 3),
          (e.namespace = f.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (i = null == i ? [e] : pt.makeArray(i, [e])),
          (c = pt.event.special[p] || {}),
          o || !c.trigger || c.trigger.apply(n, i) !== !1))
      ) {
        if (!o && !c.noBubble && !pt.isWindow(n)) {
          for (
            l = c.delegateType || p, Gt.test(l + p) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            h.push(a), (u = a)
          u === (n.ownerDocument || nt) &&
            h.push(u.defaultView || u.parentWindow || t)
        }
        for (d = 0; (a = h[d++]) && !e.isPropagationStopped(); )
          (e.type = d > 1 ? l : c.bindType || p),
            (r =
              (pt._data(a, 'events') || {})[e.type] && pt._data(a, 'handle')),
            r && r.apply(a, i),
            (r = s && a[s]),
            r &&
              r.apply &&
              jt(a) &&
              ((e.result = r.apply(a, i)),
              e.result === !1 && e.preventDefault())
        if (
          ((e.type = p),
          !o &&
            !e.isDefaultPrevented() &&
            (!c._default || c._default.apply(h.pop(), i) === !1) &&
            jt(n) &&
            s &&
            n[p] &&
            !pt.isWindow(n))
        ) {
          ;(u = n[s]), u && (n[s] = null), (pt.event.triggered = p)
          try {
            n[p]()
          } catch (t) {}
          ;(pt.event.triggered = void 0), u && (n[s] = u)
        }
        return e.result
      }
    },
    dispatch: function(t) {
      t = pt.event.fix(t)
      var e,
        i,
        n,
        o,
        r,
        s = [],
        a = ot.call(arguments),
        l = (pt._data(this, 'events') || {})[t.type] || [],
        c = pt.event.special[t.type] || {}
      if (
        ((a[0] = t),
        (t.delegateTarget = this),
        !c.preDispatch || c.preDispatch.call(this, t) !== !1)
      ) {
        for (
          s = pt.event.handlers.call(this, t, l), e = 0;
          (o = s[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, i = 0;
            (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace && !t.rnamespace.test(r.namespace)) ||
              ((t.handleObj = r),
              (t.data = r.data),
              (n = (
                (pt.event.special[r.origType] || {}).handle || r.handler
              ).apply(o.elem, a)),
              void 0 !== n &&
                (t.result = n) === !1 &&
                (t.preventDefault(), t.stopPropagation()))
        return c.postDispatch && c.postDispatch.call(this, t), t.result
      }
    },
    handlers: function(t, e) {
      var i,
        n,
        o,
        r,
        s = [],
        a = e.delegateCount,
        l = t.target
      if (
        a &&
        l.nodeType &&
        ('click' !== t.type || isNaN(t.button) || t.button < 1)
      )
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || 'click' !== t.type)) {
            for (n = [], i = 0; i < a; i++)
              (r = e[i]),
                (o = r.selector + ' '),
                void 0 === n[o] &&
                  (n[o] = r.needsContext
                    ? pt(o, this).index(l) > -1
                    : pt.find(o, this, null, [l]).length),
                n[o] && n.push(r)
            n.length && s.push({ elem: l, handlers: n })
          }
      return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s
    },
    fix: function(t) {
      if (t[pt.expando]) return t
      var e,
        i,
        n,
        o = t.type,
        r = t,
        s = this.fixHooks[o]
      for (
        s ||
          (this.fixHooks[o] = s = Jt.test(o)
            ? this.mouseHooks
            : Kt.test(o)
            ? this.keyHooks
            : {}),
          n = s.props ? this.props.concat(s.props) : this.props,
          t = new pt.Event(r),
          e = n.length;
        e--;

      )
        (i = n[e]), (t[i] = r[i])
      return (
        t.target || (t.target = r.srcElement || nt),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        s.filter ? s.filter(t, r) : t
      )
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '
    ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function(t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        )
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '
      ),
      filter: function(t, e) {
        var i,
          n,
          o,
          r = e.button,
          s = e.fromElement
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((n = t.target.ownerDocument || nt),
            (o = n.documentElement),
            (i = n.body),
            (t.pageX =
              e.clientX +
              ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((o && o.scrollTop) || (i && i.scrollTop) || 0) -
              ((o && o.clientTop) || (i && i.clientTop) || 0))),
          !t.relatedTarget &&
            s &&
            (t.relatedTarget = s === t.target ? e.toElement : s),
          t.which ||
            void 0 === r ||
            (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          t
        )
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== b() && this.focus)
            try {
              return this.focus(), !1
            } catch (t) {}
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          if (this === b() && this.blur) return this.blur(), !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          if (
            pt.nodeName(this, 'input') &&
            'checkbox' === this.type &&
            this.click
          )
            return this.click(), !1
        },
        _default: function(t) {
          return pt.nodeName(t.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function(t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result)
        }
      }
    },
    simulate: function(t, e, i) {
      var n = pt.extend(new pt.Event(), i, { type: t, isSimulated: !0 })
      pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
    }
  }),
    (pt.removeEvent = nt.removeEventListener
      ? function(t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i)
        }
      : function(t, e, i) {
          var n = 'on' + e
          t.detachEvent &&
            ('undefined' == typeof t[n] && (t[n] = null), t.detachEvent(n, i))
        }),
    (pt.Event = function(t, e) {
      return this instanceof pt.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && t.returnValue === !1)
                  ? y
                  : w))
            : (this.type = t),
          e && pt.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || pt.now()),
          void (this[pt.expando] = !0))
        : new pt.Event(t, e)
    }),
    (pt.Event.prototype = {
      constructor: pt.Event,
      isDefaultPrevented: w,
      isPropagationStopped: w,
      isImmediatePropagationStopped: w,
      preventDefault: function() {
        var t = this.originalEvent
        ;(this.isDefaultPrevented = y),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1))
      },
      stopPropagation: function() {
        var t = this.originalEvent
        ;(this.isPropagationStopped = y),
          t &&
            !this.isSimulated &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0))
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent
        ;(this.isImmediatePropagationStopped = y),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation()
      }
    }),
    pt.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function(t, e) {
        pt.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
            var i,
              n = this,
              o = t.relatedTarget,
              r = t.handleObj
            return (
              (o && (o === n || pt.contains(n, o))) ||
                ((t.type = r.origType),
                (i = r.handler.apply(this, arguments)),
                (t.type = e)),
              i
            )
          }
        }
      }
    ),
    dt.submit ||
      (pt.event.special.submit = {
        setup: function() {
          return (
            !pt.nodeName(this, 'form') &&
            void pt.event.add(this, 'click._submit keypress._submit', function(
              t
            ) {
              var e = t.target,
                i =
                  pt.nodeName(e, 'input') || pt.nodeName(e, 'button')
                    ? pt.prop(e, 'form')
                    : void 0
              i &&
                !pt._data(i, 'submit') &&
                (pt.event.add(i, 'submit._submit', function(t) {
                  t._submitBubble = !0
                }),
                pt._data(i, 'submit', !0))
            })
          )
        },
        postDispatch: function(t) {
          t._submitBubble &&
            (delete t._submitBubble,
            this.parentNode &&
              !t.isTrigger &&
              pt.event.simulate('submit', this.parentNode, t))
        },
        teardown: function() {
          return (
            !pt.nodeName(this, 'form') && void pt.event.remove(this, '._submit')
          )
        }
      }),
    dt.change ||
      (pt.event.special.change = {
        setup: function() {
          return Vt.test(this.nodeName)
            ? (('checkbox' !== this.type && 'radio' !== this.type) ||
                (pt.event.add(this, 'propertychange._change', function(t) {
                  'checked' === t.originalEvent.propertyName &&
                    (this._justChanged = !0)
                }),
                pt.event.add(this, 'click._change', function(t) {
                  this._justChanged && !t.isTrigger && (this._justChanged = !1),
                    pt.event.simulate('change', this, t)
                })),
              !1)
            : void pt.event.add(this, 'beforeactivate._change', function(t) {
                var e = t.target
                Vt.test(e.nodeName) &&
                  !pt._data(e, 'change') &&
                  (pt.event.add(e, 'change._change', function(t) {
                    !this.parentNode ||
                      t.isSimulated ||
                      t.isTrigger ||
                      pt.event.simulate('change', this.parentNode, t)
                  }),
                  pt._data(e, 'change', !0))
              })
        },
        handle: function(t) {
          var e = t.target
          if (
            this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ('radio' !== e.type && 'checkbox' !== e.type)
          )
            return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
          return pt.event.remove(this, '._change'), !Vt.test(this.nodeName)
        }
      }),
    dt.focusin ||
      pt.each({ focus: 'focusin', blur: 'focusout' }, function(t, e) {
        var i = function(t) {
          pt.event.simulate(e, t.target, pt.event.fix(t))
        }
        pt.event.special[e] = {
          setup: function() {
            var n = this.ownerDocument || this,
              o = pt._data(n, e)
            o || n.addEventListener(t, i, !0), pt._data(n, e, (o || 0) + 1)
          },
          teardown: function() {
            var n = this.ownerDocument || this,
              o = pt._data(n, e) - 1
            o
              ? pt._data(n, e, o)
              : (n.removeEventListener(t, i, !0), pt._removeData(n, e))
          }
        }
      }),
    pt.fn.extend({
      on: function(t, e, i, n) {
        return _(this, t, e, i, n)
      },
      one: function(t, e, i, n) {
        return _(this, t, e, i, n, 1)
      },
      off: function(t, e, i) {
        var n, o
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            pt(t.delegateTarget).off(
              n.namespace ? n.origType + '.' + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          )
        if ('object' == typeof t) {
          for (o in t) this.off(o, e, t[o])
          return this
        }
        return (
          (e !== !1 && 'function' != typeof e) || ((i = e), (e = void 0)),
          i === !1 && (i = w),
          this.each(function() {
            pt.event.remove(this, t, i, e)
          })
        )
      },
      trigger: function(t, e) {
        return this.each(function() {
          pt.event.trigger(t, e, this)
        })
      },
      triggerHandler: function(t, e) {
        var i = this[0]
        if (i) return pt.event.trigger(t, e, i, !0)
      }
    })
  var Zt = / jQuery\d+="(?:null|\d+)"/g,
    te = new RegExp('<(?:' + zt + ')[\\s/>]', 'i'),
    ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ie = /<script|<style|<link/i,
    ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    oe = /^true\/(.*)/,
    re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    se = p(nt),
    ae = se.appendChild(nt.createElement('div'))
  pt.extend({
    htmlPrefilter: function(t) {
      return t.replace(ee, '<$1></$2>')
    },
    clone: function(t, e, i) {
      var n,
        o,
        r,
        s,
        a,
        l = pt.contains(t.ownerDocument, t)
      if (
        (dt.html5Clone || pt.isXMLDoc(t) || !te.test('<' + t.nodeName + '>')
          ? (r = t.cloneNode(!0))
          : ((ae.innerHTML = t.outerHTML), ae.removeChild((r = ae.firstChild))),
        !(
          (dt.noCloneEvent && dt.noCloneChecked) ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          pt.isXMLDoc(t)
        ))
      )
        for (n = f(r), a = f(t), s = 0; null != (o = a[s]); ++s)
          n[s] && S(o, n[s])
      if (e)
        if (i)
          for (a = a || f(t), n = n || f(r), s = 0; null != (o = a[s]); s++)
            T(o, n[s])
        else T(t, r)
      return (
        (n = f(r, 'script')),
        n.length > 0 && m(n, !l && f(t, 'script')),
        (n = a = o = null),
        r
      )
    },
    cleanData: function(t, e) {
      for (
        var i,
          n,
          o,
          r,
          s = 0,
          a = pt.expando,
          l = pt.cache,
          c = dt.attributes,
          u = pt.event.special;
        null != (i = t[s]);
        s++
      )
        if ((e || jt(i)) && ((o = i[a]), (r = o && l[o]))) {
          if (r.events)
            for (n in r.events)
              u[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, r.handle)
          l[o] &&
            (delete l[o],
            c || 'undefined' == typeof i.removeAttribute
              ? (i[a] = void 0)
              : i.removeAttribute(a),
            it.push(o))
        }
    }
  }),
    pt.fn.extend({
      domManip: $,
      detach: function(t) {
        return D(this, t, !0)
      },
      remove: function(t) {
        return D(this, t)
      },
      text: function(t) {
        return Bt(
          this,
          function(t) {
            return void 0 === t
              ? pt.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || nt).createTextNode(t)
                )
          },
          null,
          t,
          arguments.length
        )
      },
      append: function() {
        return $(this, arguments, function(t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = k(this, t)
            e.appendChild(t)
          }
        })
      },
      prepend: function() {
        return $(this, arguments, function(t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = k(this, t)
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function() {
        return $(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function() {
        return $(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild)
          t.options && pt.nodeName(t, 'select') && (t.options.length = 0)
        }
        return this
      },
      clone: function(t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function() {
            return pt.clone(this, t, e)
          })
        )
      },
      html: function(t) {
        return Bt(
          this,
          function(t) {
            var e = this[0] || {},
              i = 0,
              n = this.length
            if (void 0 === t)
              return 1 === e.nodeType ? e.innerHTML.replace(Zt, '') : void 0
            if (
              'string' == typeof t &&
              !ie.test(t) &&
              (dt.htmlSerialize || !te.test(t)) &&
              (dt.leadingWhitespace || !qt.test(t)) &&
              !Yt[(Ot.exec(t) || ['', ''])[1].toLowerCase()]
            ) {
              t = pt.htmlPrefilter(t)
              try {
                for (; i < n; i++)
                  (e = this[i] || {}),
                    1 === e.nodeType &&
                      (pt.cleanData(f(e, !1)), (e.innerHTML = t))
                e = 0
              } catch (t) {}
            }
            e && this.empty().append(t)
          },
          null,
          t,
          arguments.length
        )
      },
      replaceWith: function() {
        var t = []
        return $(
          this,
          arguments,
          function(e) {
            var i = this.parentNode
            pt.inArray(this, t) < 0 &&
              (pt.cleanData(f(this)), i && i.replaceChild(e, this))
          },
          t
        )
      }
    }),
    pt.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(t, e) {
        pt.fn[t] = function(t) {
          for (var i, n = 0, o = [], r = pt(t), s = r.length - 1; n <= s; n++)
            (i = n === s ? this : this.clone(!0)),
              pt(r[n])[e](i),
              st.apply(o, i.get())
          return this.pushStack(o)
        }
      }
    )
  var le,
    ce = { HTML: 'block', BODY: 'block' },
    ue = /^margin/,
    de = new RegExp('^(' + Nt + ')(?!px)[a-z%]+$', 'i'),
    he = function(t, e, i, n) {
      var o,
        r,
        s = {}
      for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r])
      o = i.apply(t, n || [])
      for (r in e) t.style[r] = s[r]
      return o
    },
    pe = nt.documentElement
  !(function() {
    function e() {
      var e,
        u,
        d = nt.documentElement
      d.appendChild(l),
        (c.style.cssText =
          '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
        (i = o = a = !1),
        (n = s = !0),
        t.getComputedStyle &&
          ((u = t.getComputedStyle(c)),
          (i = '1%' !== (u || {}).top),
          (a = '2px' === (u || {}).marginLeft),
          (o = '4px' === (u || { width: '4px' }).width),
          (c.style.marginRight = '50%'),
          (n = '4px' === (u || { marginRight: '4px' }).marginRight),
          (e = c.appendChild(nt.createElement('div'))),
          (e.style.cssText = c.style.cssText =
            '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
          (e.style.marginRight = e.style.width = '0'),
          (c.style.width = '1px'),
          (s = !parseFloat((t.getComputedStyle(e) || {}).marginRight)),
          c.removeChild(e)),
        (c.style.display = 'none'),
        (r = 0 === c.getClientRects().length),
        r &&
          ((c.style.display = ''),
          (c.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
          (c.childNodes[0].style.borderCollapse = 'separate'),
          (e = c.getElementsByTagName('td')),
          (e[0].style.cssText = 'margin:0;border:0;padding:0;display:none'),
          (r = 0 === e[0].offsetHeight),
          r &&
            ((e[0].style.display = ''),
            (e[1].style.display = 'none'),
            (r = 0 === e[0].offsetHeight))),
        d.removeChild(l)
    }
    var i,
      n,
      o,
      r,
      s,
      a,
      l = nt.createElement('div'),
      c = nt.createElement('div')
    c.style &&
      ((c.style.cssText = 'float:left;opacity:.5'),
      (dt.opacity = '0.5' === c.style.opacity),
      (dt.cssFloat = !!c.style.cssFloat),
      (c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (dt.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      (l = nt.createElement('div')),
      (l.style.cssText =
        'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
      (c.innerHTML = ''),
      l.appendChild(c),
      (dt.boxSizing =
        '' === c.style.boxSizing ||
        '' === c.style.MozBoxSizing ||
        '' === c.style.WebkitBoxSizing),
      pt.extend(dt, {
        reliableHiddenOffsets: function() {
          return null == i && e(), r
        },
        boxSizingReliable: function() {
          return null == i && e(), o
        },
        pixelMarginRight: function() {
          return null == i && e(), n
        },
        pixelPosition: function() {
          return null == i && e(), i
        },
        reliableMarginRight: function() {
          return null == i && e(), s
        },
        reliableMarginLeft: function() {
          return null == i && e(), a
        }
      }))
  })()
  var fe,
    me,
    ge = /^(top|right|bottom|left)$/
  t.getComputedStyle
    ? ((fe = function(e) {
        var i = e.ownerDocument.defaultView
        return (i && i.opener) || (i = t), i.getComputedStyle(e)
      }),
      (me = function(t, e, i) {
        var n,
          o,
          r,
          s,
          a = t.style
        return (
          (i = i || fe(t)),
          (s = i ? i.getPropertyValue(e) || i[e] : void 0),
          ('' !== s && void 0 !== s) ||
            pt.contains(t.ownerDocument, t) ||
            (s = pt.style(t, e)),
          i &&
            !dt.pixelMarginRight() &&
            de.test(s) &&
            ue.test(e) &&
            ((n = a.width),
            (o = a.minWidth),
            (r = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = i.width),
            (a.width = n),
            (a.minWidth = o),
            (a.maxWidth = r)),
          void 0 === s ? s : s + ''
        )
      }))
    : pe.currentStyle &&
      ((fe = function(t) {
        return t.currentStyle
      }),
      (me = function(t, e, i) {
        var n,
          o,
          r,
          s,
          a = t.style
        return (
          (i = i || fe(t)),
          (s = i ? i[e] : void 0),
          null == s && a && a[e] && (s = a[e]),
          de.test(s) &&
            !ge.test(e) &&
            ((n = a.left),
            (o = t.runtimeStyle),
            (r = o && o.left),
            r && (o.left = t.currentStyle.left),
            (a.left = 'fontSize' === e ? '1em' : s),
            (s = a.pixelLeft + 'px'),
            (a.left = n),
            r && (o.left = r)),
          void 0 === s ? s : s + '' || 'auto'
        )
      }))
  var ve = /alpha\([^)]*\)/i,
    ye = /opacity\s*=\s*([^)]*)/i,
    we = /^(none|table(?!-c[ea]).+)/,
    be = new RegExp('^(' + Nt + ')(.*)$', 'i'),
    _e = { position: 'absolute', visibility: 'hidden', display: 'block' },
    ke = { letterSpacing: '0', fontWeight: '400' },
    xe = ['Webkit', 'O', 'Moz', 'ms'],
    Ce = nt.createElement('div').style
  pt.extend({
    cssHooks: {
      opacity: {
        get: function(t, e) {
          if (e) {
            var i = me(t, 'opacity')
            return '' === i ? '1' : i
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: dt.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function(t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          r,
          s,
          a = pt.camelCase(e),
          l = t.style
        if (
          ((e = pt.cssProps[a] || (pt.cssProps[a] = j(a) || a)),
          (s = pt.cssHooks[e] || pt.cssHooks[a]),
          void 0 === i)
        )
          return s && 'get' in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e]
        if (
          ((r = typeof i),
          'string' === r &&
            (o = Lt.exec(i)) &&
            o[1] &&
            ((i = h(t, e, o)), (r = 'number')),
          null != i &&
            i === i &&
            ('number' === r &&
              (i += (o && o[3]) || (pt.cssNumber[a] ? '' : 'px')),
            dt.clearCloneStyle ||
              '' !== i ||
              0 !== e.indexOf('background') ||
              (l[e] = 'inherit'),
            !(s && 'set' in s && void 0 === (i = s.set(t, i, n)))))
        )
          try {
            l[e] = i
          } catch (t) {}
      }
    },
    css: function(t, e, i, n) {
      var o,
        r,
        s,
        a = pt.camelCase(e)
      return (
        (e = pt.cssProps[a] || (pt.cssProps[a] = j(a) || a)),
        (s = pt.cssHooks[e] || pt.cssHooks[a]),
        s && 'get' in s && (r = s.get(t, !0, i)),
        void 0 === r && (r = me(t, e, n)),
        'normal' === r && e in ke && (r = ke[e]),
        '' === i || i
          ? ((o = parseFloat(r)), i === !0 || isFinite(o) ? o || 0 : r)
          : r
      )
    }
  }),
    pt.each(['height', 'width'], function(t, e) {
      pt.cssHooks[e] = {
        get: function(t, i, n) {
          if (i)
            return we.test(pt.css(t, 'display')) && 0 === t.offsetWidth
              ? he(t, _e, function() {
                  return L(t, e, n)
                })
              : L(t, e, n)
        },
        set: function(t, i, n) {
          var o = n && fe(t)
          return I(
            t,
            i,
            n
              ? N(
                  t,
                  e,
                  n,
                  dt.boxSizing &&
                    'border-box' === pt.css(t, 'boxSizing', !1, o),
                  o
                )
              : 0
          )
        }
      }
    }),
    dt.opacity ||
      (pt.cssHooks.opacity = {
        get: function(t, e) {
          return ye.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ''
          )
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : e
            ? '1'
            : ''
        },
        set: function(t, e) {
          var i = t.style,
            n = t.currentStyle,
            o = pt.isNumeric(e) ? 'alpha(opacity=' + 100 * e + ')' : '',
            r = (n && n.filter) || i.filter || ''
          ;(i.zoom = 1),
            ((e >= 1 || '' === e) &&
              '' === pt.trim(r.replace(ve, '')) &&
              i.removeAttribute &&
              (i.removeAttribute('filter'), '' === e || (n && !n.filter))) ||
              (i.filter = ve.test(r) ? r.replace(ve, o) : r + ' ' + o)
        }
      }),
    (pt.cssHooks.marginRight = M(dt.reliableMarginRight, function(t, e) {
      if (e) return he(t, { display: 'inline-block' }, me, [t, 'marginRight'])
    })),
    (pt.cssHooks.marginLeft = M(dt.reliableMarginLeft, function(t, e) {
      if (e)
        return (
          (parseFloat(me(t, 'marginLeft')) ||
            (pt.contains(t.ownerDocument, t)
              ? t.getBoundingClientRect().left -
                he(t, { marginLeft: 0 }, function() {
                  return t.getBoundingClientRect().left
                })
              : 0)) + 'px'
        )
    })),
    pt.each({ margin: '', padding: '', border: 'Width' }, function(t, e) {
      ;(pt.cssHooks[t + e] = {
        expand: function(i) {
          for (
            var n = 0, o = {}, r = 'string' == typeof i ? i.split(' ') : [i];
            n < 4;
            n++
          )
            o[t + Ht[n] + e] = r[n] || r[n - 2] || r[0]
          return o
        }
      }),
        ue.test(t) || (pt.cssHooks[t + e].set = I)
    }),
    pt.fn.extend({
      css: function(t, e) {
        return Bt(
          this,
          function(t, e, i) {
            var n,
              o,
              r = {},
              s = 0
            if (pt.isArray(e)) {
              for (n = fe(t), o = e.length; s < o; s++)
                r[e[s]] = pt.css(t, e[s], !1, n)
              return r
            }
            return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e)
          },
          t,
          e,
          arguments.length > 1
        )
      },
      show: function() {
        return P(this, !0)
      },
      hide: function() {
        return P(this)
      },
      toggle: function(t) {
        return 'boolean' == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function() {
              Ft(this) ? pt(this).show() : pt(this).hide()
            })
      }
    }),
    (pt.Tween = H),
    (H.prototype = {
      constructor: H,
      init: function(t, e, i, n, o, r) {
        ;(this.elem = t),
          (this.prop = i),
          (this.easing = o || pt.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = r || (pt.cssNumber[i] ? '' : 'px'))
      },
      cur: function() {
        var t = H.propHooks[this.prop]
        return t && t.get ? t.get(this) : H.propHooks._default.get(this)
      },
      run: function(t) {
        var e,
          i = H.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = e = pt.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : H.propHooks._default.set(this),
          this
        )
      }
    }),
    (H.prototype.init.prototype = H.prototype),
    (H.propHooks = {
      _default: {
        get: function(t) {
          var e
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : ((e = pt.css(t.elem, t.prop, '')), e && 'auto' !== e ? e : 0)
        },
        set: function(t) {
          pt.fx.step[t.prop]
            ? pt.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[pt.cssProps[t.prop]] &&
                !pt.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : pt.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }),
    (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }),
    (pt.easing = {
      linear: function(t) {
        return t
      },
      swing: function(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2
      },
      _default: 'swing'
    }),
    (pt.fx = H.prototype.init),
    (pt.fx.step = {})
  var Te,
    Se,
    $e = /^(?:toggle|show|hide)$/,
    De = /queueHooks$/
  ;(pt.Animation = pt.extend(q, {
    tweeners: {
      '*': [
        function(t, e) {
          var i = this.createTween(t, e)
          return h(i.elem, t, Lt.exec(e), i), i
        }
      ]
    },
    tweener: function(t, e) {
      pt.isFunction(t) ? ((e = t), (t = ['*'])) : (t = t.match(Et))
      for (var i, n = 0, o = t.length; n < o; n++)
        (i = t[n]),
          (q.tweeners[i] = q.tweeners[i] || []),
          q.tweeners[i].unshift(e)
    },
    prefilters: [O],
    prefilter: function(t, e) {
      e ? q.prefilters.unshift(t) : q.prefilters.push(t)
    }
  })),
    (pt.speed = function(t, e, i) {
      var n =
        t && 'object' == typeof t
          ? pt.extend({}, t)
          : {
              complete: i || (!i && e) || (pt.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !pt.isFunction(e) && e)
            }
      return (
        (n.duration = pt.fx.off
          ? 0
          : 'number' == typeof n.duration
          ? n.duration
          : n.duration in pt.fx.speeds
          ? pt.fx.speeds[n.duration]
          : pt.fx.speeds._default),
        (null != n.queue && n.queue !== !0) || (n.queue = 'fx'),
        (n.old = n.complete),
        (n.complete = function() {
          pt.isFunction(n.old) && n.old.call(this),
            n.queue && pt.dequeue(this, n.queue)
        }),
        n
      )
    }),
    pt.fn.extend({
      fadeTo: function(t, e, i, n) {
        return this.filter(Ft)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n)
      },
      animate: function(t, e, i, n) {
        var o = pt.isEmptyObject(t),
          r = pt.speed(e, i, n),
          s = function() {
            var e = q(this, pt.extend({}, t), r)
            ;(o || pt._data(this, 'finish')) && e.stop(!0)
          }
        return (
          (s.finish = s),
          o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        )
      },
      stop: function(t, e, i) {
        var n = function(t) {
          var e = t.stop
          delete t.stop, e(i)
        }
        return (
          'string' != typeof t && ((i = e), (e = t), (t = void 0)),
          e && t !== !1 && this.queue(t || 'fx', []),
          this.each(function() {
            var e = !0,
              o = null != t && t + 'queueHooks',
              r = pt.timers,
              s = pt._data(this)
            if (o) s[o] && s[o].stop && n(s[o])
            else for (o in s) s[o] && s[o].stop && De.test(o) && n(s[o])
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != t && r[o].queue !== t) ||
                (r[o].anim.stop(i), (e = !1), r.splice(o, 1))
            ;(!e && i) || pt.dequeue(this, t)
          })
        )
      },
      finish: function(t) {
        return (
          t !== !1 && (t = t || 'fx'),
          this.each(function() {
            var e,
              i = pt._data(this),
              n = i[t + 'queue'],
              o = i[t + 'queueHooks'],
              r = pt.timers,
              s = n ? n.length : 0
            for (
              i.finish = !0,
                pt.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length;
              e--;

            )
              r[e].elem === this &&
                r[e].queue === t &&
                (r[e].anim.stop(!0), r.splice(e, 1))
            for (e = 0; e < s; e++)
              n[e] && n[e].finish && n[e].finish.call(this)
            delete i.finish
          })
        )
      }
    }),
    pt.each(['toggle', 'show', 'hide'], function(t, e) {
      var i = pt.fn[e]
      pt.fn[e] = function(t, n, o) {
        return null == t || 'boolean' == typeof t
          ? i.apply(this, arguments)
          : this.animate(B(e, !0), t, n, o)
      }
    }),
    pt.each(
      {
        slideDown: B('show'),
        slideUp: B('hide'),
        slideToggle: B('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(t, e) {
        pt.fn[t] = function(t, i, n) {
          return this.animate(e, t, i, n)
        }
      }
    ),
    (pt.timers = []),
    (pt.fx.tick = function() {
      var t,
        e = pt.timers,
        i = 0
      for (Te = pt.now(); i < e.length; i++)
        (t = e[i]), t() || e[i] !== t || e.splice(i--, 1)
      e.length || pt.fx.stop(), (Te = void 0)
    }),
    (pt.fx.timer = function(t) {
      pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
    }),
    (pt.fx.interval = 13),
    (pt.fx.start = function() {
      Se || (Se = t.setInterval(pt.fx.tick, pt.fx.interval))
    }),
    (pt.fx.stop = function() {
      t.clearInterval(Se), (Se = null)
    }),
    (pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (pt.fn.delay = function(e, i) {
      return (
        (e = pt.fx ? pt.fx.speeds[e] || e : e),
        (i = i || 'fx'),
        this.queue(i, function(i, n) {
          var o = t.setTimeout(i, e)
          n.stop = function() {
            t.clearTimeout(o)
          }
        })
      )
    }),
    (function() {
      var t,
        e = nt.createElement('input'),
        i = nt.createElement('div'),
        n = nt.createElement('select'),
        o = n.appendChild(nt.createElement('option'))
      ;(i = nt.createElement('div')),
        i.setAttribute('className', 't'),
        (i.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (t = i.getElementsByTagName('a')[0]),
        e.setAttribute('type', 'checkbox'),
        i.appendChild(e),
        (t = i.getElementsByTagName('a')[0]),
        (t.style.cssText = 'top:1px'),
        (dt.getSetAttribute = 't' !== i.className),
        (dt.style = /top/.test(t.getAttribute('style'))),
        (dt.hrefNormalized = '/a' === t.getAttribute('href')),
        (dt.checkOn = !!e.value),
        (dt.optSelected = o.selected),
        (dt.enctype = !!nt.createElement('form').enctype),
        (n.disabled = !0),
        (dt.optDisabled = !o.disabled),
        (e = nt.createElement('input')),
        e.setAttribute('value', ''),
        (dt.input = '' === e.getAttribute('value')),
        (e.value = 't'),
        e.setAttribute('type', 'radio'),
        (dt.radioValue = 't' === e.value)
    })()
  var Ee = /\r/g,
    Ae = /[\x20\t\r\n\f]+/g
  pt.fn.extend({
    val: function(t) {
      var e,
        i,
        n,
        o = this[0]
      {
        if (arguments.length)
          return (
            (n = pt.isFunction(t)),
            this.each(function(i) {
              var o
              1 === this.nodeType &&
                ((o = n ? t.call(this, i, pt(this).val()) : t),
                null == o
                  ? (o = '')
                  : 'number' == typeof o
                  ? (o += '')
                  : pt.isArray(o) &&
                    (o = pt.map(o, function(t) {
                      return null == t ? '' : t + ''
                    })),
                (e =
                  pt.valHooks[this.type] ||
                  pt.valHooks[this.nodeName.toLowerCase()]),
                (e && 'set' in e && void 0 !== e.set(this, o, 'value')) ||
                  (this.value = o))
            })
          )
        if (o)
          return (
            (e = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()]),
            e && 'get' in e && void 0 !== (i = e.get(o, 'value'))
              ? i
              : ((i = o.value),
                'string' == typeof i ? i.replace(Ee, '') : null == i ? '' : i)
          )
      }
    }
  }),
    pt.extend({
      valHooks: {
        option: {
          get: function(t) {
            var e = pt.find.attr(t, 'value')
            return null != e ? e : pt.trim(pt.text(t)).replace(Ae, ' ')
          }
        },
        select: {
          get: function(t) {
            for (
              var e,
                i,
                n = t.options,
                o = t.selectedIndex,
                r = 'select-one' === t.type || o < 0,
                s = r ? null : [],
                a = r ? o + 1 : n.length,
                l = o < 0 ? a : r ? o : 0;
              l < a;
              l++
            )
              if (
                ((i = n[l]),
                (i.selected || l === o) &&
                  (dt.optDisabled
                    ? !i.disabled
                    : null === i.getAttribute('disabled')) &&
                  (!i.parentNode.disabled ||
                    !pt.nodeName(i.parentNode, 'optgroup')))
              ) {
                if (((e = pt(i).val()), r)) return e
                s.push(e)
              }
            return s
          },
          set: function(t, e) {
            for (
              var i, n, o = t.options, r = pt.makeArray(e), s = o.length;
              s--;

            )
              if (((n = o[s]), pt.inArray(pt.valHooks.option.get(n), r) > -1))
                try {
                  n.selected = i = !0
                } catch (t) {
                  n.scrollHeight
                }
              else n.selected = !1
            return i || (t.selectedIndex = -1), o
          }
        }
      }
    }),
    pt.each(['radio', 'checkbox'], function() {
      ;(pt.valHooks[this] = {
        set: function(t, e) {
          if (pt.isArray(e))
            return (t.checked = pt.inArray(pt(t).val(), e) > -1)
        }
      }),
        dt.checkOn ||
          (pt.valHooks[this].get = function(t) {
            return null === t.getAttribute('value') ? 'on' : t.value
          })
    })
  var Me,
    je,
    Pe = pt.expr.attrHandle,
    Ie = /^(?:checked|selected)$/i,
    Ne = dt.getSetAttribute,
    Le = dt.input
  pt.fn.extend({
    attr: function(t, e) {
      return Bt(this, pt.attr, t, e, arguments.length > 1)
    },
    removeAttr: function(t) {
      return this.each(function() {
        pt.removeAttr(this, t)
      })
    }
  }),
    pt.extend({
      attr: function(t, e, i) {
        var n,
          o,
          r = t.nodeType
        if (3 !== r && 8 !== r && 2 !== r)
          return 'undefined' == typeof t.getAttribute
            ? pt.prop(t, e, i)
            : ((1 === r && pt.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (o =
                  pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? je : Me))),
              void 0 !== i
                ? null === i
                  ? void pt.removeAttr(t, e)
                  : o && 'set' in o && void 0 !== (n = o.set(t, i, e))
                  ? n
                  : (t.setAttribute(e, i + ''), i)
                : o && 'get' in o && null !== (n = o.get(t, e))
                ? n
                : ((n = pt.find.attr(t, e)), null == n ? void 0 : n))
      },
      attrHooks: {
        type: {
          set: function(t, e) {
            if (!dt.radioValue && 'radio' === e && pt.nodeName(t, 'input')) {
              var i = t.value
              return t.setAttribute('type', e), i && (t.value = i), e
            }
          }
        }
      },
      removeAttr: function(t, e) {
        var i,
          n,
          o = 0,
          r = e && e.match(Et)
        if (r && 1 === t.nodeType)
          for (; (i = r[o++]); )
            (n = pt.propFix[i] || i),
              pt.expr.match.bool.test(i)
                ? (Le && Ne) || !Ie.test(i)
                  ? (t[n] = !1)
                  : (t[pt.camelCase('default-' + i)] = t[n] = !1)
                : pt.attr(t, i, ''),
              t.removeAttribute(Ne ? i : n)
      }
    }),
    (je = {
      set: function(t, e, i) {
        return (
          e === !1
            ? pt.removeAttr(t, i)
            : (Le && Ne) || !Ie.test(i)
            ? t.setAttribute((!Ne && pt.propFix[i]) || i, i)
            : (t[pt.camelCase('default-' + i)] = t[i] = !0),
          i
        )
      }
    }),
    pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var i = Pe[e] || pt.find.attr
      ;(Le && Ne) || !Ie.test(e)
        ? (Pe[e] = function(t, e, n) {
            var o, r
            return (
              n ||
                ((r = Pe[e]),
                (Pe[e] = o),
                (o = null != i(t, e, n) ? e.toLowerCase() : null),
                (Pe[e] = r)),
              o
            )
          })
        : (Pe[e] = function(t, e, i) {
            if (!i)
              return t[pt.camelCase('default-' + e)] ? e.toLowerCase() : null
          })
    }),
    (Le && Ne) ||
      (pt.attrHooks.value = {
        set: function(t, e, i) {
          return pt.nodeName(t, 'input')
            ? void (t.defaultValue = e)
            : Me && Me.set(t, e, i)
        }
      }),
    Ne ||
      ((Me = {
        set: function(t, e, i) {
          var n = t.getAttributeNode(i)
          if (
            (n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))),
            (n.value = e += ''),
            'value' === i || e === t.getAttribute(i))
          )
            return e
        }
      }),
      (Pe.id = Pe.name = Pe.coords = function(t, e, i) {
        var n
        if (!i)
          return (n = t.getAttributeNode(e)) && '' !== n.value ? n.value : null
      }),
      (pt.valHooks.button = {
        get: function(t, e) {
          var i = t.getAttributeNode(e)
          if (i && i.specified) return i.value
        },
        set: Me.set
      }),
      (pt.attrHooks.contenteditable = {
        set: function(t, e, i) {
          Me.set(t, '' !== e && e, i)
        }
      }),
      pt.each(['width', 'height'], function(t, e) {
        pt.attrHooks[e] = {
          set: function(t, i) {
            if ('' === i) return t.setAttribute(e, 'auto'), i
          }
        }
      })),
    dt.style ||
      (pt.attrHooks.style = {
        get: function(t) {
          return t.style.cssText || void 0
        },
        set: function(t, e) {
          return (t.style.cssText = e + '')
        }
      })
  var He = /^(?:input|select|textarea|button|object)$/i,
    Fe = /^(?:a|area)$/i
  pt.fn.extend({
    prop: function(t, e) {
      return Bt(this, pt.prop, t, e, arguments.length > 1)
    },
    removeProp: function(t) {
      return (
        (t = pt.propFix[t] || t),
        this.each(function() {
          try {
            ;(this[t] = void 0), delete this[t]
          } catch (t) {}
        })
      )
    }
  }),
    pt.extend({
      prop: function(t, e, i) {
        var n,
          o,
          r = t.nodeType
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && pt.isXMLDoc(t)) ||
              ((e = pt.propFix[e] || e), (o = pt.propHooks[e])),
            void 0 !== i
              ? o && 'set' in o && void 0 !== (n = o.set(t, i, e))
                ? n
                : (t[e] = i)
              : o && 'get' in o && null !== (n = o.get(t, e))
              ? n
              : t[e]
          )
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var e = pt.find.attr(t, 'tabindex')
            return e
              ? parseInt(e, 10)
              : He.test(t.nodeName) || (Fe.test(t.nodeName) && t.href)
              ? 0
              : -1
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    dt.hrefNormalized ||
      pt.each(['href', 'src'], function(t, e) {
        pt.propHooks[e] = {
          get: function(t) {
            return t.getAttribute(e, 4)
          }
        }
      }),
    dt.optSelected ||
      (pt.propHooks.selected = {
        get: function(t) {
          var e = t.parentNode
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          )
        },
        set: function(t) {
          var e = t.parentNode
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
      }),
    pt.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function() {
        pt.propFix[this.toLowerCase()] = this
      }
    ),
    dt.enctype || (pt.propFix.enctype = 'encoding')
  var Be = /[\t\r\n\f]/g
  pt.fn.extend({
    addClass: function(t) {
      var e,
        i,
        n,
        o,
        r,
        s,
        a,
        l = 0
      if (pt.isFunction(t))
        return this.each(function(e) {
          pt(this).addClass(t.call(this, e, z(this)))
        })
      if ('string' == typeof t && t)
        for (e = t.match(Et) || []; (i = this[l++]); )
          if (
            ((o = z(i)),
            (n = 1 === i.nodeType && (' ' + o + ' ').replace(Be, ' ')))
          ) {
            for (s = 0; (r = e[s++]); )
              n.indexOf(' ' + r + ' ') < 0 && (n += r + ' ')
            ;(a = pt.trim(n)), o !== a && pt.attr(i, 'class', a)
          }
      return this
    },
    removeClass: function(t) {
      var e,
        i,
        n,
        o,
        r,
        s,
        a,
        l = 0
      if (pt.isFunction(t))
        return this.each(function(e) {
          pt(this).removeClass(t.call(this, e, z(this)))
        })
      if (!arguments.length) return this.attr('class', '')
      if ('string' == typeof t && t)
        for (e = t.match(Et) || []; (i = this[l++]); )
          if (
            ((o = z(i)),
            (n = 1 === i.nodeType && (' ' + o + ' ').replace(Be, ' ')))
          ) {
            for (s = 0; (r = e[s++]); )
              for (; n.indexOf(' ' + r + ' ') > -1; )
                n = n.replace(' ' + r + ' ', ' ')
            ;(a = pt.trim(n)), o !== a && pt.attr(i, 'class', a)
          }
      return this
    },
    toggleClass: function(t, e) {
      var i = typeof t
      return 'boolean' == typeof e && 'string' === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : pt.isFunction(t)
        ? this.each(function(i) {
            pt(this).toggleClass(t.call(this, i, z(this), e), e)
          })
        : this.each(function() {
            var e, n, o, r
            if ('string' === i)
              for (n = 0, o = pt(this), r = t.match(Et) || []; (e = r[n++]); )
                o.hasClass(e) ? o.removeClass(e) : o.addClass(e)
            else
              (void 0 !== t && 'boolean' !== i) ||
                ((e = z(this)),
                e && pt._data(this, '__className__', e),
                pt.attr(
                  this,
                  'class',
                  e || t === !1 ? '' : pt._data(this, '__className__') || ''
                ))
          })
    },
    hasClass: function(t) {
      var e,
        i,
        n = 0
      for (e = ' ' + t + ' '; (i = this[n++]); )
        if (
          1 === i.nodeType &&
          (' ' + z(i) + ' ').replace(Be, ' ').indexOf(e) > -1
        )
          return !0
      return !1
    }
  }),
    pt.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function(t, e) {
        pt.fn[e] = function(t, i) {
          return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
      }
    ),
    pt.fn.extend({
      hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    })
  var Re = t.location,
    Oe = pt.now(),
    We = /\?/,
    qe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
  ;(pt.parseJSON = function(e) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(e + '')
    var i,
      n = null,
      o = pt.trim(e + '')
    return o &&
      !pt.trim(
        o.replace(qe, function(t, e, o, r) {
          return (
            i && e && (n = 0), 0 === n ? t : ((i = o || e), (n += !r - !o), '')
          )
        })
      )
      ? Function('return ' + o)()
      : pt.error('Invalid JSON: ' + e)
  }),
    (pt.parseXML = function(e) {
      var i, n
      if (!e || 'string' != typeof e) return null
      try {
        t.DOMParser
          ? ((n = new t.DOMParser()), (i = n.parseFromString(e, 'text/xml')))
          : ((i = new t.ActiveXObject('Microsoft.XMLDOM')),
            (i.async = 'false'),
            i.loadXML(e))
      } catch (t) {
        i = void 0
      }
      return (
        (i &&
          i.documentElement &&
          !i.getElementsByTagName('parsererror').length) ||
          pt.error('Invalid XML: ' + e),
        i
      )
    })
  var ze = /#.*$/,
    Ye = /([?&])_=[^&]*/,
    Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ve = /^(?:GET|HEAD)$/,
    Ke = /^\/\//,
    Je = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ge = {},
    Qe = {},
    Ze = '*/'.concat('*'),
    ti = Re.href,
    ei = Je.exec(ti.toLowerCase()) || []
  pt.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ti,
      type: 'GET',
      isLocal: Xe.test(ei[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Ze,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': pt.parseJSON,
        'text xml': pt.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(t, e) {
      return e ? X(X(t, pt.ajaxSettings), e) : X(pt.ajaxSettings, t)
    },
    ajaxPrefilter: Y(Ge),
    ajaxTransport: Y(Qe),
    ajax: function(e, i) {
      function n(e, i, n, o) {
        var r,
          d,
          y,
          w,
          _,
          x = i
        2 !== b &&
          ((b = 2),
          l && t.clearTimeout(l),
          (u = void 0),
          (a = o || ''),
          (k.readyState = e > 0 ? 4 : 0),
          (r = (e >= 200 && e < 300) || 304 === e),
          n && (w = V(h, k, n)),
          (w = K(h, w, k, r)),
          r
            ? (h.ifModified &&
                ((_ = k.getResponseHeader('Last-Modified')),
                _ && (pt.lastModified[s] = _),
                (_ = k.getResponseHeader('etag')),
                _ && (pt.etag[s] = _)),
              204 === e || 'HEAD' === h.type
                ? (x = 'nocontent')
                : 304 === e
                ? (x = 'notmodified')
                : ((x = w.state), (d = w.data), (y = w.error), (r = !y)))
            : ((y = x), (!e && x) || ((x = 'error'), e < 0 && (e = 0))),
          (k.status = e),
          (k.statusText = (i || x) + ''),
          r ? m.resolveWith(p, [d, x, k]) : m.rejectWith(p, [k, x, y]),
          k.statusCode(v),
          (v = void 0),
          c && f.trigger(r ? 'ajaxSuccess' : 'ajaxError', [k, h, r ? d : y]),
          g.fireWith(p, [k, x]),
          c &&
            (f.trigger('ajaxComplete', [k, h]),
            --pt.active || pt.event.trigger('ajaxStop')))
      }
      'object' == typeof e && ((i = e), (e = void 0)), (i = i || {})
      var o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        h = pt.ajaxSetup({}, i),
        p = h.context || h,
        f = h.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
        m = pt.Deferred(),
        g = pt.Callbacks('once memory'),
        v = h.statusCode || {},
        y = {},
        w = {},
        b = 0,
        _ = 'canceled',
        k = {
          readyState: 0,
          getResponseHeader: function(t) {
            var e
            if (2 === b) {
              if (!d)
                for (d = {}; (e = Ue.exec(a)); ) d[e[1].toLowerCase()] = e[2]
              e = d[t.toLowerCase()]
            }
            return null == e ? null : e
          },
          getAllResponseHeaders: function() {
            return 2 === b ? a : null
          },
          setRequestHeader: function(t, e) {
            var i = t.toLowerCase()
            return b || ((t = w[i] = w[i] || t), (y[t] = e)), this
          },
          overrideMimeType: function(t) {
            return b || (h.mimeType = t), this
          },
          statusCode: function(t) {
            var e
            if (t)
              if (b < 2) for (e in t) v[e] = [v[e], t[e]]
              else k.always(t[k.status])
            return this
          },
          abort: function(t) {
            var e = t || _
            return u && u.abort(e), n(0, e), this
          }
        }
      if (
        ((m.promise(k).complete = g.add),
        (k.success = k.done),
        (k.error = k.fail),
        (h.url = ((e || h.url || ti) + '')
          .replace(ze, '')
          .replace(Ke, ei[1] + '//')),
        (h.type = i.method || i.type || h.method || h.type),
        (h.dataTypes = pt
          .trim(h.dataType || '*')
          .toLowerCase()
          .match(Et) || ['']),
        null == h.crossDomain &&
          ((o = Je.exec(h.url.toLowerCase())),
          (h.crossDomain = !(
            !o ||
            (o[1] === ei[1] &&
              o[2] === ei[2] &&
              (o[3] || ('http:' === o[1] ? '80' : '443')) ===
                (ei[3] || ('http:' === ei[1] ? '80' : '443')))
          ))),
        h.data &&
          h.processData &&
          'string' != typeof h.data &&
          (h.data = pt.param(h.data, h.traditional)),
        U(Ge, h, i, k),
        2 === b)
      )
        return k
      ;(c = pt.event && h.global),
        c && 0 === pt.active++ && pt.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Ve.test(h.type)),
        (s = h.url),
        h.hasContent ||
          (h.data &&
            ((s = h.url += (We.test(s) ? '&' : '?') + h.data), delete h.data),
          h.cache === !1 &&
            (h.url = Ye.test(s)
              ? s.replace(Ye, '$1_=' + Oe++)
              : s + (We.test(s) ? '&' : '?') + '_=' + Oe++)),
        h.ifModified &&
          (pt.lastModified[s] &&
            k.setRequestHeader('If-Modified-Since', pt.lastModified[s]),
          pt.etag[s] && k.setRequestHeader('If-None-Match', pt.etag[s])),
        ((h.data && h.hasContent && h.contentType !== !1) || i.contentType) &&
          k.setRequestHeader('Content-Type', h.contentType),
        k.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ('*' !== h.dataTypes[0] ? ', ' + Ze + '; q=0.01' : '')
            : h.accepts['*']
        )
      for (r in h.headers) k.setRequestHeader(r, h.headers[r])
      if (h.beforeSend && (h.beforeSend.call(p, k, h) === !1 || 2 === b))
        return k.abort()
      _ = 'abort'
      for (r in { success: 1, error: 1, complete: 1 }) k[r](h[r])
      if ((u = U(Qe, h, i, k))) {
        if (((k.readyState = 1), c && f.trigger('ajaxSend', [k, h]), 2 === b))
          return k
        h.async &&
          h.timeout > 0 &&
          (l = t.setTimeout(function() {
            k.abort('timeout')
          }, h.timeout))
        try {
          ;(b = 1), u.send(y, n)
        } catch (t) {
          if (!(b < 2)) throw t
          n(-1, t)
        }
      } else n(-1, 'No Transport')
      return k
    },
    getJSON: function(t, e, i) {
      return pt.get(t, e, i, 'json')
    },
    getScript: function(t, e) {
      return pt.get(t, void 0, e, 'script')
    }
  }),
    pt.each(['get', 'post'], function(t, e) {
      pt[e] = function(t, i, n, o) {
        return (
          pt.isFunction(i) && ((o = o || n), (n = i), (i = void 0)),
          pt.ajax(
            pt.extend(
              { url: t, type: e, dataType: o, data: i, success: n },
              pt.isPlainObject(t) && t
            )
          )
        )
      }
    }),
    (pt._evalUrl = function(t) {
      return pt.ajax({
        url: t,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }),
    pt.fn.extend({
      wrapAll: function(t) {
        if (pt.isFunction(t))
          return this.each(function(e) {
            pt(this).wrapAll(t.call(this, e))
          })
        if (this[0]) {
          var e = pt(t, this[0].ownerDocument)
            .eq(0)
            .clone(!0)
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function() {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild
                return t
              })
              .append(this)
        }
        return this
      },
      wrapInner: function(t) {
        return pt.isFunction(t)
          ? this.each(function(e) {
              pt(this).wrapInner(t.call(this, e))
            })
          : this.each(function() {
              var e = pt(this),
                i = e.contents()
              i.length ? i.wrapAll(t) : e.append(t)
            })
      },
      wrap: function(t) {
        var e = pt.isFunction(t)
        return this.each(function(i) {
          pt(this).wrapAll(e ? t.call(this, i) : t)
        })
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            pt.nodeName(this, 'body') || pt(this).replaceWith(this.childNodes)
          })
          .end()
      }
    }),
    (pt.expr.filters.hidden = function(t) {
      return dt.reliableHiddenOffsets()
        ? t.offsetWidth <= 0 &&
            t.offsetHeight <= 0 &&
            !t.getClientRects().length
        : G(t)
    }),
    (pt.expr.filters.visible = function(t) {
      return !pt.expr.filters.hidden(t)
    })
  var ii = /%20/g,
    ni = /\[\]$/,
    oi = /\r?\n/g,
    ri = /^(?:submit|button|image|reset|file)$/i,
    si = /^(?:input|select|textarea|keygen)/i
  ;(pt.param = function(t, e) {
    var i,
      n = [],
      o = function(t, e) {
        ;(e = pt.isFunction(e) ? e() : null == e ? '' : e),
          (n[n.length] = encodeURIComponent(t) + '=' + encodeURIComponent(e))
      }
    if (
      (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional),
      pt.isArray(t) || (t.jquery && !pt.isPlainObject(t)))
    )
      pt.each(t, function() {
        o(this.name, this.value)
      })
    else for (i in t) Q(i, t[i], e, o)
    return n.join('&').replace(ii, '+')
  }),
    pt.fn.extend({
      serialize: function() {
        return pt.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var t = pt.prop(this, 'elements')
          return t ? pt.makeArray(t) : this
        })
          .filter(function() {
            var t = this.type
            return (
              this.name &&
              !pt(this).is(':disabled') &&
              si.test(this.nodeName) &&
              !ri.test(t) &&
              (this.checked || !Rt.test(t))
            )
          })
          .map(function(t, e) {
            var i = pt(this).val()
            return null == i
              ? null
              : pt.isArray(i)
              ? pt.map(i, function(t) {
                  return { name: e.name, value: t.replace(oi, '\r\n') }
                })
              : { name: e.name, value: i.replace(oi, '\r\n') }
          })
          .get()
      }
    }),
    (pt.ajaxSettings.xhr =
      void 0 !== t.ActiveXObject
        ? function() {
            return this.isLocal
              ? tt()
              : nt.documentMode > 8
              ? Z()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Z()) ||
                tt()
          }
        : Z)
  var ai = 0,
    li = {},
    ci = pt.ajaxSettings.xhr()
  t.attachEvent &&
    t.attachEvent('onunload', function() {
      for (var t in li) li[t](void 0, !0)
    }),
    (dt.cors = !!ci && 'withCredentials' in ci),
    (ci = dt.ajax = !!ci),
    ci &&
      pt.ajaxTransport(function(e) {
        if (!e.crossDomain || dt.cors) {
          var i
          return {
            send: function(n, o) {
              var r,
                s = e.xhr(),
                a = ++ai
              if (
                (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (r in e.xhrFields) s[r] = e.xhrFields[r]
              e.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  n['X-Requested-With'] ||
                  (n['X-Requested-With'] = 'XMLHttpRequest')
              for (r in n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + '')
              s.send((e.hasContent && e.data) || null),
                (i = function(t, n) {
                  var r, l, c
                  if (i && (n || 4 === s.readyState))
                    if (
                      (delete li[a],
                      (i = void 0),
                      (s.onreadystatechange = pt.noop),
                      n)
                    )
                      4 !== s.readyState && s.abort()
                    else {
                      ;(c = {}),
                        (r = s.status),
                        'string' == typeof s.responseText &&
                          (c.text = s.responseText)
                      try {
                        l = s.statusText
                      } catch (t) {
                        l = ''
                      }
                      r || !e.isLocal || e.crossDomain
                        ? 1223 === r && (r = 204)
                        : (r = c.text ? 200 : 404)
                    }
                  c && o(r, l, c, s.getAllResponseHeaders())
                }),
                e.async
                  ? 4 === s.readyState
                    ? t.setTimeout(i)
                    : (s.onreadystatechange = li[a] = i)
                  : i()
            },
            abort: function() {
              i && i(void 0, !0)
            }
          }
        }
      }),
    pt.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function(t) {
          return pt.globalEval(t), t
        }
      }
    }),
    pt.ajaxPrefilter('script', function(t) {
      void 0 === t.cache && (t.cache = !1),
        t.crossDomain && ((t.type = 'GET'), (t.global = !1))
    }),
    pt.ajaxTransport('script', function(t) {
      if (t.crossDomain) {
        var e,
          i = nt.head || pt('head')[0] || nt.documentElement
        return {
          send: function(n, o) {
            ;(e = nt.createElement('script')),
              (e.async = !0),
              t.scriptCharset && (e.charset = t.scriptCharset),
              (e.src = t.url),
              (e.onload = e.onreadystatechange = function(t, i) {
                ;(i || !e.readyState || /loaded|complete/.test(e.readyState)) &&
                  ((e.onload = e.onreadystatechange = null),
                  e.parentNode && e.parentNode.removeChild(e),
                  (e = null),
                  i || o(200, 'success'))
              }),
              i.insertBefore(e, i.firstChild)
          },
          abort: function() {
            e && e.onload(void 0, !0)
          }
        }
      }
    })
  var ui = [],
    di = /(=)\?(?=&|$)|\?\?/
  pt.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var t = ui.pop() || pt.expando + '_' + Oe++
      return (this[t] = !0), t
    }
  }),
    pt.ajaxPrefilter('json jsonp', function(e, i, n) {
      var o,
        r,
        s,
        a =
          e.jsonp !== !1 &&
          (di.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              di.test(e.data) &&
              'data')
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (o = e.jsonpCallback = pt.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(di, '$1' + o))
            : e.jsonp !== !1 &&
              (e.url += (We.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
          (e.converters['script json'] = function() {
            return s || pt.error(o + ' was not called'), s[0]
          }),
          (e.dataTypes[0] = 'json'),
          (r = t[o]),
          (t[o] = function() {
            s = arguments
          }),
          n.always(function() {
            void 0 === r ? pt(t).removeProp(o) : (t[o] = r),
              e[o] && ((e.jsonpCallback = i.jsonpCallback), ui.push(o)),
              s && pt.isFunction(r) && r(s[0]),
              (s = r = void 0)
          }),
          'script'
        )
    }),
    (pt.parseHTML = function(t, e, i) {
      if (!t || 'string' != typeof t) return null
      'boolean' == typeof e && ((i = e), (e = !1)), (e = e || nt)
      var n = kt.exec(t),
        o = !i && []
      return n
        ? [e.createElement(n[1])]
        : ((n = v([t], e, o)),
          o && o.length && pt(o).remove(),
          pt.merge([], n.childNodes))
    })
  var hi = pt.fn.load
  ;(pt.fn.load = function(t, e, i) {
    if ('string' != typeof t && hi) return hi.apply(this, arguments)
    var n,
      o,
      r,
      s = this,
      a = t.indexOf(' ')
    return (
      a > -1 && ((n = pt.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
      pt.isFunction(e)
        ? ((i = e), (e = void 0))
        : e && 'object' == typeof e && (o = 'POST'),
      s.length > 0 &&
        pt
          .ajax({ url: t, type: o || 'GET', dataType: 'html', data: e })
          .done(function(t) {
            ;(r = arguments),
              s.html(
                n
                  ? pt('<div>')
                      .append(pt.parseHTML(t))
                      .find(n)
                  : t
              )
          })
          .always(
            i &&
              function(t, e) {
                s.each(function() {
                  i.apply(this, r || [t.responseText, e, t])
                })
              }
          ),
      this
    )
  }),
    pt.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function(t, e) {
        pt.fn[e] = function(t) {
          return this.on(e, t)
        }
      }
    ),
    (pt.expr.filters.animated = function(t) {
      return pt.grep(pt.timers, function(e) {
        return t === e.elem
      }).length
    }),
    (pt.offset = {
      setOffset: function(t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = pt.css(t, 'position'),
          d = pt(t),
          h = {}
        'static' === u && (t.style.position = 'relative'),
          (a = d.offset()),
          (r = pt.css(t, 'top')),
          (l = pt.css(t, 'left')),
          (c =
            ('absolute' === u || 'fixed' === u) &&
            pt.inArray('auto', [r, l]) > -1),
          c
            ? ((n = d.position()), (s = n.top), (o = n.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))),
          null != e.top && (h.top = e.top - a.top + s),
          null != e.left && (h.left = e.left - a.left + o),
          'using' in e ? e.using.call(t, h) : d.css(h)
      }
    }),
    pt.fn.extend({
      offset: function(t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function(e) {
                pt.offset.setOffset(this, t, e)
              })
        var e,
          i,
          n = { top: 0, left: 0 },
          o = this[0],
          r = o && o.ownerDocument
        if (r)
          return (
            (e = r.documentElement),
            pt.contains(e, o)
              ? ('undefined' != typeof o.getBoundingClientRect &&
                  (n = o.getBoundingClientRect()),
                (i = et(r)),
                {
                  top:
                    n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  left:
                    n.left +
                    (i.pageXOffset || e.scrollLeft) -
                    (e.clientLeft || 0)
                })
              : n
          )
      },
      position: function() {
        if (this[0]) {
          var t,
            e,
            i = { top: 0, left: 0 },
            n = this[0]
          return (
            'fixed' === pt.css(n, 'position')
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                pt.nodeName(t[0], 'html') || (i = t.offset()),
                (i.top += pt.css(t[0], 'borderTopWidth', !0)),
                (i.left += pt.css(t[0], 'borderLeftWidth', !0))),
            {
              top: e.top - i.top - pt.css(n, 'marginTop', !0),
              left: e.left - i.left - pt.css(n, 'marginLeft', !0)
            }
          )
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var t = this.offsetParent;
            t && !pt.nodeName(t, 'html') && 'static' === pt.css(t, 'position');

          )
            t = t.offsetParent
          return t || pe
        })
      }
    }),
    pt.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(
      t,
      e
    ) {
      var i = /Y/.test(e)
      pt.fn[t] = function(n) {
        return Bt(
          this,
          function(t, n, o) {
            var r = et(t)
            return void 0 === o
              ? r
                ? e in r
                  ? r[e]
                  : r.document.documentElement[n]
                : t[n]
              : void (r
                  ? r.scrollTo(
                      i ? pt(r).scrollLeft() : o,
                      i ? o : pt(r).scrollTop()
                    )
                  : (t[n] = o))
          },
          t,
          n,
          arguments.length,
          null
        )
      }
    }),
    pt.each(['top', 'left'], function(t, e) {
      pt.cssHooks[e] = M(dt.pixelPosition, function(t, i) {
        if (i)
          return (i = me(t, e)), de.test(i) ? pt(t).position()[e] + 'px' : i
      })
    }),
    pt.each({ Height: 'height', Width: 'width' }, function(t, e) {
      pt.each({ padding: 'inner' + t, content: e, '': 'outer' + t }, function(
        i,
        n
      ) {
        pt.fn[n] = function(n, o) {
          var r = arguments.length && (i || 'boolean' != typeof n),
            s = i || (n === !0 || o === !0 ? 'margin' : 'border')
          return Bt(
            this,
            function(e, i, n) {
              var o
              return pt.isWindow(e)
                ? e.document.documentElement['client' + t]
                : 9 === e.nodeType
                ? ((o = e.documentElement),
                  Math.max(
                    e.body['scroll' + t],
                    o['scroll' + t],
                    e.body['offset' + t],
                    o['offset' + t],
                    o['client' + t]
                  ))
                : void 0 === n
                ? pt.css(e, i, s)
                : pt.style(e, i, n, s)
            },
            e,
            r ? n : void 0,
            r,
            null
          )
        }
      })
    }),
    pt.fn.extend({
      bind: function(t, e, i) {
        return this.on(t, null, e, i)
      },
      unbind: function(t, e) {
        return this.off(t, null, e)
      },
      delegate: function(t, e, i, n) {
        return this.on(e, t, i, n)
      },
      undelegate: function(t, e, i) {
        return 1 === arguments.length
          ? this.off(t, '**')
          : this.off(e, t || '**', i)
      }
    }),
    (pt.fn.size = function() {
      return this.length
    }),
    (pt.fn.andSelf = pt.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function() {
        return pt
      })
  var pi = t.jQuery,
    fi = t.$
  return (
    (pt.noConflict = function(e) {
      return (
        t.$ === pt && (t.$ = fi), e && t.jQuery === pt && (t.jQuery = pi), pt
      )
    }),
    e || (t.jQuery = t.$ = pt),
    pt
  )
}),
  (function(t, e) {
    'use strict'
    t.rails !== e && t.error('jquery-ujs has already been loaded!')
    var i,
      n = t(document)
    ;(t.rails = i = {
      linkClickSelector:
        'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
      buttonClickSelector:
        'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',
      inputChangeSelector:
        'select[data-remote], input[data-remote], textarea[data-remote]',
      formSubmitSelector: 'form',
      formInputClickSelector:
        'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
      disableSelector:
        'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
      enableSelector:
        'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
      requiredInputSelector:
        'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',
      fileInputSelector: 'input[name][type=file]:not([disabled])',
      linkDisableSelector: 'a[data-disable-with], a[data-disable]',
      buttonDisableSelector:
        'button[data-remote][data-disable-with], button[data-remote][data-disable]',
      csrfToken: function() {
        return t('meta[name=csrf-token]').attr('content')
      },
      csrfParam: function() {
        return t('meta[name=csrf-param]').attr('content')
      },
      CSRFProtection: function(t) {
        var e = i.csrfToken()
        e && t.setRequestHeader('X-CSRF-Token', e)
      },
      refreshCSRFTokens: function() {
        t('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken())
      },
      fire: function(e, i, n) {
        var o = t.Event(i)
        return e.trigger(o, n), o.result !== !1
      },
      confirm: function(t) {
        return confirm(t)
      },
      ajax: function(e) {
        return t.ajax(e)
      },
      href: function(t) {
        return t[0].href
      },
      isRemote: function(t) {
        return t.data('remote') !== e && t.data('remote') !== !1
      },
      handleRemote: function(n) {
        var o, r, s, a, l, c
        if (i.fire(n, 'ajax:before')) {
          if (
            ((a = n.data('with-credentials') || null),
            (l = n.data('type') || (t.ajaxSettings && t.ajaxSettings.dataType)),
            n.is('form'))
          ) {
            ;(o = n.data('ujs:submit-button-formmethod') || n.attr('method')),
              (r = n.data('ujs:submit-button-formaction') || n.attr('action')),
              (s = t(n[0]).serializeArray())
            var u = n.data('ujs:submit-button')
            u && (s.push(u), n.data('ujs:submit-button', null)),
              n.data('ujs:submit-button-formmethod', null),
              n.data('ujs:submit-button-formaction', null)
          } else
            n.is(i.inputChangeSelector)
              ? ((o = n.data('method')),
                (r = n.data('url')),
                (s = n.serialize()),
                n.data('params') && (s = s + '&' + n.data('params')))
              : n.is(i.buttonClickSelector)
              ? ((o = n.data('method') || 'get'),
                (r = n.data('url')),
                (s = n.serialize()),
                n.data('params') && (s = s + '&' + n.data('params')))
              : ((o = n.data('method')),
                (r = i.href(n)),
                (s = n.data('params') || null))
          return (
            (c = {
              type: o || 'GET',
              data: s,
              dataType: l,
              beforeSend: function(t, o) {
                return (
                  o.dataType === e &&
                    t.setRequestHeader(
                      'accept',
                      '*/*;q=0.5, ' + o.accepts.script
                    ),
                  !!i.fire(n, 'ajax:beforeSend', [t, o]) &&
                    void n.trigger('ajax:send', t)
                )
              },
              success: function(t, e, i) {
                n.trigger('ajax:success', [t, e, i])
              },
              complete: function(t, e) {
                n.trigger('ajax:complete', [t, e])
              },
              error: function(t, e, i) {
                n.trigger('ajax:error', [t, e, i])
              },
              crossDomain: i.isCrossDomain(r)
            }),
            a && (c.xhrFields = { withCredentials: a }),
            r && (c.url = r),
            i.ajax(c)
          )
        }
        return !1
      },
      isCrossDomain: function(t) {
        var e = document.createElement('a')
        e.href = location.href
        var i = document.createElement('a')
        try {
          return (
            (i.href = t),
            (i.href = i.href),
            !(
              ((!i.protocol || ':' === i.protocol) && !i.host) ||
              e.protocol + '//' + e.host == i.protocol + '//' + i.host
            )
          )
        } catch (t) {
          return !0
        }
      },
      handleMethod: function(n) {
        var o = i.href(n),
          r = n.data('method'),
          s = n.attr('target'),
          a = i.csrfToken(),
          l = i.csrfParam(),
          c = t('<form method="post" action="' + o + '"></form>'),
          u = '<input name="_method" value="' + r + '" type="hidden" />'
        l === e ||
          a === e ||
          i.isCrossDomain(o) ||
          (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
          s && c.attr('target', s),
          c
            .hide()
            .append(u)
            .appendTo('body'),
          c.submit()
      },
      formElements: function(e, i) {
        return e.is('form') ? t(e[0].elements).filter(i) : e.find(i)
      },
      disableFormElements: function(e) {
        i.formElements(e, i.disableSelector).each(function() {
          i.disableFormElement(t(this))
        })
      },
      disableFormElement: function(t) {
        var i, n
        ;(i = t.is('button') ? 'html' : 'val'),
          (n = t.data('disable-with')),
          n !== e && (t.data('ujs:enable-with', t[i]()), t[i](n)),
          t.prop('disabled', !0),
          t.data('ujs:disabled', !0)
      },
      enableFormElements: function(e) {
        i.formElements(e, i.enableSelector).each(function() {
          i.enableFormElement(t(this))
        })
      },
      enableFormElement: function(t) {
        var i = t.is('button') ? 'html' : 'val'
        t.data('ujs:enable-with') !== e &&
          (t[i](t.data('ujs:enable-with')), t.removeData('ujs:enable-with')),
          t.prop('disabled', !1),
          t.removeData('ujs:disabled')
      },
      allowAction: function(t) {
        var e,
          n = t.data('confirm'),
          o = !1
        if (!n) return !0
        if (i.fire(t, 'confirm')) {
          try {
            o = i.confirm(n)
          } catch (t) {
            ;(console.error || console.log).call(console, t.stack || t)
          }
          e = i.fire(t, 'confirm:complete', [o])
        }
        return o && e
      },
      blankInputs: function(e, i, n) {
        var o,
          r,
          s,
          a,
          l = t(),
          c = i || 'input,textarea',
          u = e.find(c),
          d = {}
        return (
          u.each(function() {
            ;(o = t(this)),
              o.is('input[type=radio]')
                ? ((a = o.attr('name')),
                  d[a] ||
                    (0 ===
                      e.find('input[type=radio]:checked[name="' + a + '"]')
                        .length &&
                      ((s = e.find('input[type=radio][name="' + a + '"]')),
                      (l = l.add(s))),
                    (d[a] = a)))
                : ((r = o.is('input[type=checkbox],input[type=radio]')
                    ? o.is(':checked')
                    : !!o.val()),
                  r === n && (l = l.add(o)))
          }),
          !!l.length && l
        )
      },
      nonBlankInputs: function(t, e) {
        return i.blankInputs(t, e, !0)
      },
      stopEverything: function(e) {
        return (
          t(e.target).trigger('ujs:everythingStopped'),
          e.stopImmediatePropagation(),
          !1
        )
      },
      disableElement: function(t) {
        var n = t.data('disable-with')
        n !== e && (t.data('ujs:enable-with', t.html()), t.html(n)),
          t.bind('click.railsDisable', function(t) {
            return i.stopEverything(t)
          }),
          t.data('ujs:disabled', !0)
      },
      enableElement: function(t) {
        t.data('ujs:enable-with') !== e &&
          (t.html(t.data('ujs:enable-with')), t.removeData('ujs:enable-with')),
          t.unbind('click.railsDisable'),
          t.removeData('ujs:disabled')
      }
    }),
      i.fire(n, 'rails:attachBindings') &&
        (t.ajaxPrefilter(function(t, e, n) {
          t.crossDomain || i.CSRFProtection(n)
        }),
        t(window).on('pageshow.rails', function() {
          t(t.rails.enableSelector).each(function() {
            var e = t(this)
            e.data('ujs:disabled') && t.rails.enableFormElement(e)
          }),
            t(t.rails.linkDisableSelector).each(function() {
              var e = t(this)
              e.data('ujs:disabled') && t.rails.enableElement(e)
            })
        }),
        n.on('ajax:complete', i.linkDisableSelector, function() {
          i.enableElement(t(this))
        }),
        n.on('ajax:complete', i.buttonDisableSelector, function() {
          i.enableFormElement(t(this))
        }),
        n.on('click.rails', i.linkClickSelector, function(e) {
          var n = t(this),
            o = n.data('method'),
            r = n.data('params'),
            s = e.metaKey || e.ctrlKey
          if (!i.allowAction(n)) return i.stopEverything(e)
          if (
            (!s && n.is(i.linkDisableSelector) && i.disableElement(n),
            i.isRemote(n))
          ) {
            if (s && (!o || 'GET' === o) && !r) return !0
            var a = i.handleRemote(n)
            return (
              a === !1
                ? i.enableElement(n)
                : a.fail(function() {
                    i.enableElement(n)
                  }),
              !1
            )
          }
          return o ? (i.handleMethod(n), !1) : void 0
        }),
        n.on('click.rails', i.buttonClickSelector, function(e) {
          var n = t(this)
          if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(e)
          n.is(i.buttonDisableSelector) && i.disableFormElement(n)
          var o = i.handleRemote(n)
          return (
            o === !1
              ? i.enableFormElement(n)
              : o.fail(function() {
                  i.enableFormElement(n)
                }),
            !1
          )
        }),
        n.on('change.rails', i.inputChangeSelector, function(e) {
          var n = t(this)
          return i.allowAction(n) && i.isRemote(n)
            ? (i.handleRemote(n), !1)
            : i.stopEverything(e)
        }),
        n.on('submit.rails', i.formSubmitSelector, function(n) {
          var o,
            r,
            s = t(this),
            a = i.isRemote(s)
          if (!i.allowAction(s)) return i.stopEverything(n)
          if (s.attr('novalidate') === e)
            if (s.data('ujs:formnovalidate-button') === e) {
              if (
                ((o = i.blankInputs(s, i.requiredInputSelector, !1)),
                o && i.fire(s, 'ajax:aborted:required', [o]))
              )
                return i.stopEverything(n)
            } else s.data('ujs:formnovalidate-button', e)
          if (a) {
            if ((r = i.nonBlankInputs(s, i.fileInputSelector))) {
              setTimeout(function() {
                i.disableFormElements(s)
              }, 13)
              var l = i.fire(s, 'ajax:aborted:file', [r])
              return (
                l ||
                  setTimeout(function() {
                    i.enableFormElements(s)
                  }, 13),
                l
              )
            }
            return i.handleRemote(s), !1
          }
          setTimeout(function() {
            i.disableFormElements(s)
          }, 13)
        }),
        n.on('click.rails', i.formInputClickSelector, function(e) {
          var n = t(this)
          if (!i.allowAction(n)) return i.stopEverything(e)
          var o = n.attr('name'),
            r = o ? { name: o, value: n.val() } : null,
            s = n.closest('form')
          0 === s.length && (s = t('#' + n.attr('form'))),
            s.data('ujs:submit-button', r),
            s.data('ujs:formnovalidate-button', n.attr('formnovalidate')),
            s.data('ujs:submit-button-formaction', n.attr('formaction')),
            s.data('ujs:submit-button-formmethod', n.attr('formmethod'))
        }),
        n.on('ajax:send.rails', i.formSubmitSelector, function(e) {
          this === e.target && i.disableFormElements(t(this))
        }),
        n.on('ajax:complete.rails', i.formSubmitSelector, function(e) {
          this === e.target && i.enableFormElements(t(this))
        }),
        t(function() {
          i.refreshCSRFTokens()
        }))
  })(jQuery),
  (function(t) {
    'use strict'
    t.ajaxPrefilter(function(t) {
      if (t.iframe) return 'iframe'
    }),
      t.ajaxTransport('iframe', function(e, i, n) {
        function o() {
          u.each(function(e) {
            t(this).replaceWith(c[e]), u.splice(e, 1)
          }),
            s.remove(),
            a.bind('load', function() {
              a.remove()
            }),
            a.attr('src', 'about:blank')
        }
        var r,
          s = null,
          a = null,
          l = 'iframe-' + t.now(),
          c = t(e.files).filter(':file:enabled'),
          u = null
        if ((e.dataTypes.shift(), c.length))
          return (
            (s = t("<form enctype='multipart/form-data' method='post'></form>")
              .hide()
              .attr({ action: e.url, target: l })),
            'string' == typeof e.data &&
              e.data.length > 0 &&
              t.error('data must not be serialized'),
            t.each(e.data || {}, function(e, i) {
              t.isPlainObject(i) && ((e = i.name), (i = i.value)),
                t("<input type='hidden' />")
                  .attr({ name: e, value: i })
                  .appendTo(s)
            }),
            t(
              "<input type='hidden' value='IFrame' name='X-Requested-With' />"
            ).appendTo(s),
            (r =
              e.dataTypes[0] && e.accepts[e.dataTypes[0]]
                ? e.accepts[e.dataTypes[0]] +
                  ('*' !== e.dataTypes[0] ? ', */*; q=0.01' : '')
                : e.accepts['*']),
            t("<input type='hidden' name='X-Http-Accept'>")
              .attr('value', r)
              .appendTo(s),
            (u = c
              .after(function() {
                return t(this)
                  .clone()
                  .prop('disabled', !0)
              })
              .next()),
            c.appendTo(s),
            {
              send: function(e, i) {
                ;(a = t(
                  "<iframe src='about:blank' name='" +
                    l +
                    "' id='" +
                    l +
                    "' style='display:none'></iframe>"
                )),
                  a.bind('load', function() {
                    a.unbind('load').bind('load', function() {
                      var t = this.contentWindow
                          ? this.contentWindow.document
                          : this.contentDocument
                          ? this.contentDocument
                          : this.document,
                        e = t.documentElement ? t.documentElement : t.body,
                        r = e.getElementsByTagName('textarea')[0],
                        s = (r && r.getAttribute('data-type')) || null,
                        a = (r && r.getAttribute('data-status')) || 200,
                        l = (r && r.getAttribute('data-statusText')) || 'OK',
                        c = {
                          html: e.innerHTML,
                          text: s
                            ? r.value
                            : e
                            ? e.textContent || e.innerText
                            : null
                        }
                      o(),
                        n.responseText || (n.responseText = c.text),
                        i(a, l, c, s ? 'Content-Type: ' + s : null)
                    }),
                      s[0].submit()
                  }),
                  t('body').append(s, a)
              },
              abort: function() {
                null !== a &&
                  (a.unbind('load').attr('src', 'javascript:false;'), o())
              }
            }
          )
      })
  })(jQuery),
  (function(t) {
    var e
    ;(t.remotipart = e = {
      setup: function(i) {
        var n = i.data('ujs:submit-button'),
          o = t('meta[name="csrf-param"]').attr('content'),
          r = t('meta[name="csrf-token"]').attr('content'),
          s = i.find('input[name="' + o + '"]').length
        i.one('ajax:beforeSend.remotipart', function(a, l, c) {
          return (
            delete c.beforeSend,
            (c.iframe = !0),
            (c.files = t(t.rails.fileInputSelector, i)),
            (c.data = i.serializeArray()),
            n && c.data.push(n),
            c.files.each(function(t, e) {
              for (var i = c.data.length - 1; i >= 0; i--)
                c.data[i].name == e.name && c.data.splice(i, 1)
            }),
            (c.processData = !1),
            void 0 === c.dataType && (c.dataType = 'script *'),
            c.data.push({ name: 'remotipart_submitted', value: !0 }),
            r && o && !s && c.data.push({ name: o, value: r }),
            t.rails.fire(i, 'ajax:remotipartSubmit', [l, c]) &&
              (t.rails.ajax(c).complete(function(e) {
                t.rails.fire(i, 'ajax:remotipartComplete', [e])
              }),
              setTimeout(function() {
                t.rails.disableFormElements(i)
              }, 20)),
            e.teardown(i),
            !1
          )
        }).data('remotipartSubmitted', !0)
      },
      teardown: function(t) {
        t.unbind('ajax:beforeSend.remotipart').removeData('remotipartSubmitted')
      }
    }),
      t(document).on('ajax:aborted:file', 'form', function() {
        var i = t(this)
        return e.setup(i), t.rails.handleRemote(i), !1
      })
  })(jQuery),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : t(jQuery)
  })(function(t) {
    function e(e, n) {
      var o,
        r,
        s,
        a = e.nodeName.toLowerCase()
      return 'area' === a
        ? ((o = e.parentNode),
          (r = o.name),
          !(!e.href || !r || 'map' !== o.nodeName.toLowerCase()) &&
            ((s = t("img[usemap='#" + r + "']")[0]), !!s && i(s)))
        : (/^(input|select|textarea|button|object)$/.test(a)
            ? !e.disabled
            : 'a' === a
            ? e.href || n
            : n) && i(e)
    }
    function i(e) {
      return (
        t.expr.filters.visible(e) &&
        !t(e)
          .parents()
          .addBack()
          .filter(function() {
            return 'hidden' === t.css(this, 'visibility')
          }).length
      )
    }
    ;(t.ui = t.ui || {}),
      t.extend(t.ui, {
        version: '1.11.4',
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38
        }
      }),
      t.fn.extend({
        scrollParent: function(e) {
          var i = this.css('position'),
            n = 'absolute' === i,
            o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            r = this.parents()
              .filter(function() {
                var e = t(this)
                return (
                  (!n || 'static' !== e.css('position')) &&
                  o.test(
                    e.css('overflow') +
                      e.css('overflow-y') +
                      e.css('overflow-x')
                  )
                )
              })
              .eq(0)
          return 'fixed' !== i && r.length
            ? r
            : t(this[0].ownerDocument || document)
        },
        uniqueId: (function() {
          var t = 0
          return function() {
            return this.each(function() {
              this.id || (this.id = 'ui-id-' + ++t)
            })
          }
        })(),
        removeUniqueId: function() {
          return this.each(function() {
            ;/^ui-id-\d+$/.test(this.id) && t(this).removeAttr('id')
          })
        }
      }),
      t.extend(t.expr[':'], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function(e) {
              return function(i) {
                return !!t.data(i, e)
              }
            })
          : function(e, i, n) {
              return !!t.data(e, n[3])
            },
        focusable: function(i) {
          return e(i, !isNaN(t.attr(i, 'tabindex')))
        },
        tabbable: function(i) {
          var n = t.attr(i, 'tabindex'),
            o = isNaN(n)
          return (o || n >= 0) && e(i, !o)
        }
      }),
      t('<a>').outerWidth(1).jquery ||
        t.each(['Width', 'Height'], function(e, i) {
          function n(e, i, n, r) {
            return (
              t.each(o, function() {
                ;(i -= parseFloat(t.css(e, 'padding' + this)) || 0),
                  n &&
                    (i -= parseFloat(t.css(e, 'border' + this + 'Width')) || 0),
                  r && (i -= parseFloat(t.css(e, 'margin' + this)) || 0)
              }),
              i
            )
          }
          var o = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
            r = i.toLowerCase(),
            s = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight
            }
          ;(t.fn['inner' + i] = function(e) {
            return void 0 === e
              ? s['inner' + i].call(this)
              : this.each(function() {
                  t(this).css(r, n(this, e) + 'px')
                })
          }),
            (t.fn['outer' + i] = function(e, o) {
              return 'number' != typeof e
                ? s['outer' + i].call(this, e)
                : this.each(function() {
                    t(this).css(r, n(this, e, !0, o) + 'px')
                  })
            })
        }),
      t.fn.addBack ||
        (t.fn.addBack = function(t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          )
        }),
      t('<a>')
        .data('a-b', 'a')
        .removeData('a-b')
        .data('a-b') &&
        (t.fn.removeData = (function(e) {
          return function(i) {
            return arguments.length
              ? e.call(this, t.camelCase(i))
              : e.call(this)
          }
        })(t.fn.removeData)),
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      t.fn.extend({
        focus: (function(e) {
          return function(i, n) {
            return 'number' == typeof i
              ? this.each(function() {
                  var e = this
                  setTimeout(function() {
                    t(e).focus(), n && n.call(e)
                  }, i)
                })
              : e.apply(this, arguments)
          }
        })(t.fn.focus),
        disableSelection: (function() {
          var t =
            'onselectstart' in document.createElement('div')
              ? 'selectstart'
              : 'mousedown'
          return function() {
            return this.bind(t + '.ui-disableSelection', function(t) {
              t.preventDefault()
            })
          }
        })(),
        enableSelection: function() {
          return this.unbind('.ui-disableSelection')
        },
        zIndex: function(e) {
          if (void 0 !== e) return this.css('zIndex', e)
          if (this.length)
            for (var i, n, o = t(this[0]); o.length && o[0] !== document; ) {
              if (
                ((i = o.css('position')),
                ('absolute' === i || 'relative' === i || 'fixed' === i) &&
                  ((n = parseInt(o.css('zIndex'), 10)), !isNaN(n) && 0 !== n))
              )
                return n
              o = o.parent()
            }
          return 0
        }
      }),
      (t.ui.plugin = {
        add: function(e, i, n) {
          var o,
            r = t.ui[e].prototype
          for (o in n)
            (r.plugins[o] = r.plugins[o] || []), r.plugins[o].push([i, n[o]])
        },
        call: function(t, e, i, n) {
          var o,
            r = t.plugins[e]
          if (
            r &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (o = 0; o < r.length; o++)
              t.options[r[o][0]] && r[o][1].apply(t.element, i)
        }
      })
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : t(jQuery)
  })(function(t) {
    var e = 0,
      i = Array.prototype.slice
    return (
      (t.cleanData = (function(e) {
        return function(i) {
          var n, o, r
          for (r = 0; null != (o = i[r]); r++)
            try {
              ;(n = t._data(o, 'events')),
                n && n.remove && t(o).triggerHandler('remove')
            } catch (t) {}
          e(i)
        }
      })(t.cleanData)),
      (t.widget = function(e, i, n) {
        var o,
          r,
          s,
          a,
          l = {},
          c = e.split('.')[0]
        return (
          (e = e.split('.')[1]),
          (o = c + '-' + e),
          n || ((n = i), (i = t.Widget)),
          (t.expr[':'][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
          }),
          (t[c] = t[c] || {}),
          (r = t[c][e]),
          (s = t[c][e] = function(t, e) {
            return this._createWidget
              ? void (arguments.length && this._createWidget(t, e))
              : new s(t, e)
          }),
          t.extend(s, r, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
          }),
          (a = new i()),
          (a.options = t.widget.extend({}, a.options)),
          t.each(n, function(e, n) {
            return t.isFunction(n)
              ? void (l[e] = (function() {
                  var t = function() {
                      return i.prototype[e].apply(this, arguments)
                    },
                    o = function(t) {
                      return i.prototype[e].apply(this, t)
                    }
                  return function() {
                    var e,
                      i = this._super,
                      r = this._superApply
                    return (
                      (this._super = t),
                      (this._superApply = o),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = r),
                      e
                    )
                  }
                })())
              : void (l[e] = n)
          }),
          (s.prototype = t.widget.extend(
            a,
            { widgetEventPrefix: r ? a.widgetEventPrefix || e : e },
            l,
            { constructor: s, namespace: c, widgetName: e, widgetFullName: o }
          )),
          r
            ? (t.each(r._childConstructors, function(e, i) {
                var n = i.prototype
                t.widget(n.namespace + '.' + n.widgetName, s, i._proto)
              }),
              delete r._childConstructors)
            : i._childConstructors.push(s),
          t.widget.bridge(e, s),
          s
        )
      }),
      (t.widget.extend = function(e) {
        for (
          var n, o, r = i.call(arguments, 1), s = 0, a = r.length;
          s < a;
          s++
        )
          for (n in r[s])
            (o = r[s][n]),
              r[s].hasOwnProperty(n) &&
                void 0 !== o &&
                (t.isPlainObject(o)
                  ? (e[n] = t.isPlainObject(e[n])
                      ? t.widget.extend({}, e[n], o)
                      : t.widget.extend({}, o))
                  : (e[n] = o))
        return e
      }),
      (t.widget.bridge = function(e, n) {
        var o = n.prototype.widgetFullName || e
        t.fn[e] = function(r) {
          var s = 'string' == typeof r,
            a = i.call(arguments, 1),
            l = this
          return (
            s
              ? this.each(function() {
                  var i,
                    n = t.data(this, o)
                  return 'instance' === r
                    ? ((l = n), !1)
                    : n
                    ? t.isFunction(n[r]) && '_' !== r.charAt(0)
                      ? ((i = n[r].apply(n, a)),
                        i !== n && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            r +
                            "' for " +
                            e +
                            ' widget instance'
                        )
                    : t.error(
                        'cannot call methods on ' +
                          e +
                          " prior to initialization; attempted to call method '" +
                          r +
                          "'"
                      )
                })
              : (a.length && (r = t.widget.extend.apply(null, [r].concat(a))),
                this.each(function() {
                  var e = t.data(this, o)
                  e
                    ? (e.option(r || {}), e._init && e._init())
                    : t.data(this, o, new n(r, this))
                })),
            l
          )
        }
      }),
      (t.Widget = function() {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: { disabled: !1, create: null },
        _createWidget: function(i, n) {
          ;(n = t(n || this.defaultElement || this)[0]),
            (this.element = t(n)),
            (this.uuid = e++),
            (this.eventNamespace = '.' + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            n !== this &&
              (t.data(n, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function(t) {
                  t.target === n && this.destroy()
                }
              }),
              (this.document = t(n.style ? n.ownerDocument : n.document || n)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              i
            )),
            this._create(),
            this._trigger('create', null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr('aria-disabled')
              .removeClass(this.widgetFullName + '-disabled ui-state-disabled'),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass('ui-state-hover'),
            this.focusable.removeClass('ui-state-focus')
        },
        _destroy: t.noop,
        widget: function() {
          return this.element
        },
        option: function(e, i) {
          var n,
            o,
            r,
            s = e
          if (0 === arguments.length) return t.widget.extend({}, this.options)
          if ('string' == typeof e)
            if (((s = {}), (n = e.split('.')), (e = n.shift()), n.length)) {
              for (
                o = s[e] = t.widget.extend({}, this.options[e]), r = 0;
                r < n.length - 1;
                r++
              )
                (o[n[r]] = o[n[r]] || {}), (o = o[n[r]])
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === o[e] ? null : o[e]
              o[e] = i
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e]
              s[e] = i
            }
          return this._setOptions(s), this
        },
        _setOptions: function(t) {
          var e
          for (e in t) this._setOption(e, t[e])
          return this
        },
        _setOption: function(t, e) {
          return (
            (this.options[t] = e),
            'disabled' === t &&
              (this.widget().toggleClass(
                this.widgetFullName + '-disabled',
                !!e
              ),
              e &&
                (this.hoverable.removeClass('ui-state-hover'),
                this.focusable.removeClass('ui-state-focus'))),
            this
          )
        },
        enable: function() {
          return this._setOptions({ disabled: !1 })
        },
        disable: function() {
          return this._setOptions({ disabled: !0 })
        },
        _on: function(e, i, n) {
          var o,
            r = this
          'boolean' != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = o = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (o = this.widget())),
            t.each(n, function(n, s) {
              function a() {
                if (
                  e ||
                  (r.options.disabled !== !0 &&
                    !t(this).hasClass('ui-state-disabled'))
                )
                  return ('string' == typeof s ? r[s] : s).apply(r, arguments)
              }
              'string' != typeof s &&
                (a.guid = s.guid = s.guid || a.guid || t.guid++)
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                c = l[1] + r.eventNamespace,
                u = l[2]
              u ? o.delegate(u, c, a) : i.bind(c, a)
            })
        },
        _off: function(e, i) {
          ;(i =
            (i || '').split(' ').join(this.eventNamespace + ' ') +
            this.eventNamespace),
            e.unbind(i).undelegate(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()))
        },
        _delay: function(t, e) {
          function i() {
            return ('string' == typeof t ? n[t] : t).apply(n, arguments)
          }
          var n = this
          return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
          ;(this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function(e) {
                t(e.currentTarget).addClass('ui-state-hover')
              },
              mouseleave: function(e) {
                t(e.currentTarget).removeClass('ui-state-hover')
              }
            })
        },
        _focusable: function(e) {
          ;(this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function(e) {
                t(e.currentTarget).addClass('ui-state-focus')
              },
              focusout: function(e) {
                t(e.currentTarget).removeClass('ui-state-focus')
              }
            })
        },
        _trigger: function(e, i, n) {
          var o,
            r,
            s = this.options[e]
          if (
            ((n = n || {}),
            (i = t.Event(i)),
            (i.type = (e === this.widgetEventPrefix
              ? e
              : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (r = i.originalEvent))
          )
            for (o in r) o in i || (i[o] = r[o])
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(s) &&
                s.apply(this.element[0], [i].concat(n)) === !1) ||
              i.isDefaultPrevented()
            )
          )
        }
      }),
      t.each({ show: 'fadeIn', hide: 'fadeOut' }, function(e, i) {
        t.Widget.prototype['_' + e] = function(n, o, r) {
          'string' == typeof o && (o = { effect: o })
          var s,
            a = o ? (o === !0 || 'number' == typeof o ? i : o.effect || i) : e
          ;(o = o || {}),
            'number' == typeof o && (o = { duration: o }),
            (s = !t.isEmptyObject(o)),
            (o.complete = r),
            o.delay && n.delay(o.delay),
            s && t.effects && t.effects.effect[a]
              ? n[e](o)
              : a !== e && n[a]
              ? n[a](o.duration, o.easing, r)
              : n.queue(function(i) {
                  t(this)[e](), r && r.call(n[0]), i()
                })
        }
      }),
      t.widget
    )
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery', './widget'], t)
      : t(jQuery)
  })(function(t) {
    var e = !1
    return (
      t(document).mouseup(function() {
        e = !1
      }),
      t.widget('ui.mouse', {
        version: '1.11.4',
        options: {
          cancel: 'input,textarea,button,select,option',
          distance: 1,
          delay: 0
        },
        _mouseInit: function() {
          var e = this
          this.element
            .bind('mousedown.' + this.widgetName, function(t) {
              return e._mouseDown(t)
            })
            .bind('click.' + this.widgetName, function(i) {
              if (!0 === t.data(i.target, e.widgetName + '.preventClickEvent'))
                return (
                  t.removeData(i.target, e.widgetName + '.preventClickEvent'),
                  i.stopImmediatePropagation(),
                  !1
                )
            }),
            (this.started = !1)
        },
        _mouseDestroy: function() {
          this.element.unbind('.' + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
          if (!e) {
            ;(this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(i),
              (this._mouseDownEvent = i)
            var n = this,
              o = 1 === i.which,
              r =
                !(
                  'string' != typeof this.options.cancel || !i.target.nodeName
                ) && t(i.target).closest(this.options.cancel).length
            return (
              !(o && !r && this._mouseCapture(i)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function() {
                  n.mouseDelayMet = !0
                }, this.options.delay)),
              this._mouseDistanceMet(i) &&
              this._mouseDelayMet(i) &&
              ((this._mouseStarted = this._mouseStart(i) !== !1),
              !this._mouseStarted)
                ? (i.preventDefault(), !0)
                : (!0 ===
                    t.data(i.target, this.widgetName + '.preventClickEvent') &&
                    t.removeData(
                      i.target,
                      this.widgetName + '.preventClickEvent'
                    ),
                  (this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t)
                  }),
                  (this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t)
                  }),
                  this.document
                    .bind(
                      'mousemove.' + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  i.preventDefault(),
                  (e = !0),
                  !0))
            )
          }
        },
        _mouseMove: function(e) {
          if (this._mouseMoved) {
            if (
              t.ui.ie &&
              (!document.documentMode || document.documentMode < 9) &&
              !e.button
            )
              return this._mouseUp(e)
            if (!e.which) return this._mouseUp(e)
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    this._mouseStart(this._mouseDownEvent, e) !== !1),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          )
        },
        _mouseUp: function(i) {
          return (
            this.document
              .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              i.target === this._mouseDownEvent.target &&
                t.data(i.target, this.widgetName + '.preventClickEvent', !0),
              this._mouseStop(i)),
            (e = !1),
            !1
          )
        },
        _mouseDistanceMet: function(t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          )
        },
        _mouseDelayMet: function() {
          return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
          return !0
        }
      })
    )
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery', './core', './mouse', './widget'], t)
      : t(jQuery)
  })(function(t) {
    return t.widget('ui.sortable', t.ui.mouse, {
      version: '1.11.4',
      widgetEventPrefix: 'sort',
      ready: !1,
      options: {
        appendTo: 'parent',
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        items: '> *',
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: 'default',
        tolerance: 'intersect',
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null
      },
      _isOverAxis: function(t, e, i) {
        return t >= e && t < e + i
      },
      _isFloating: function(t) {
        return (
          /left|right/.test(t.css('float')) ||
          /inline|table-cell/.test(t.css('display'))
        )
      },
      _create: function() {
        ;(this.containerCache = {}),
          this.element.addClass('ui-sortable'),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0)
      },
      _setOption: function(t, e) {
        this._super(t, e), 'handle' === t && this._setHandleClassName()
      },
      _setHandleClassName: function() {
        this.element
          .find('.ui-sortable-handle')
          .removeClass('ui-sortable-handle'),
          t.each(this.items, function() {
            ;(this.instance.options.handle
              ? this.item.find(this.instance.options.handle)
              : this.item
            ).addClass('ui-sortable-handle')
          })
      },
      _destroy: function() {
        this.element
          .removeClass('ui-sortable ui-sortable-disabled')
          .find('.ui-sortable-handle')
          .removeClass('ui-sortable-handle'),
          this._mouseDestroy()
        for (var t = this.items.length - 1; t >= 0; t--)
          this.items[t].item.removeData(this.widgetName + '-item')
        return this
      },
      _mouseCapture: function(e, i) {
        var n = null,
          o = !1,
          r = this
        return (
          !this.reverting &&
          (!this.options.disabled &&
            'static' !== this.options.type &&
            (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function() {
                if (t.data(this, r.widgetName + '-item') === r)
                  return (n = t(this)), !1
              }),
            t.data(e.target, r.widgetName + '-item') === r && (n = t(e.target)),
            !!n &&
              (!(
                this.options.handle &&
                !i &&
                (t(this.options.handle, n)
                  .find('*')
                  .addBack()
                  .each(function() {
                    this === e.target && (o = !0)
                  }),
                !o)
              ) &&
                ((this.currentItem = n), this._removeCurrentsFromItems(), !0))))
        )
      },
      _mouseStart: function(e, i, n) {
        var o,
          r,
          s = this.options
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(e)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
          }),
          t.extend(this.offset, {
            click: {
              left: e.pageX - this.offset.left,
              top: e.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
          }),
          this.helper.css('position', 'absolute'),
          (this.cssPosition = this.helper.css('position')),
          (this.originalPosition = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0]
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          s.containment && this._setContainment(),
          s.cursor &&
            'auto' !== s.cursor &&
            ((r = this.document.find('body')),
            (this.storedCursor = r.css('cursor')),
            r.css('cursor', s.cursor),
            (this.storedStylesheet = t(
              '<style>*{ cursor: ' + s.cursor + ' !important; }</style>'
            ).appendTo(r))),
          s.opacity &&
            (this.helper.css('opacity') &&
              (this._storedOpacity = this.helper.css('opacity')),
            this.helper.css('opacity', s.opacity)),
          s.zIndex &&
            (this.helper.css('zIndex') &&
              (this._storedZIndex = this.helper.css('zIndex')),
            this.helper.css('zIndex', s.zIndex)),
          this.scrollParent[0] !== this.document[0] &&
            'HTML' !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger('start', e, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !n)
        )
          for (o = this.containers.length - 1; o >= 0; o--)
            this.containers[o]._trigger('activate', e, this._uiHash(this))
        return (
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          t.ui.ddmanager &&
            !s.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(this, e),
          (this.dragging = !0),
          this.helper.addClass('ui-sortable-helper'),
          this._mouseDrag(e),
          !0
        )
      },
      _mouseDrag: function(e) {
        var i,
          n,
          o,
          r,
          s = this.options,
          a = !1
        for (
          this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo('absolute'),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== this.document[0] &&
              'HTML' !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    e.pageY <
                  s.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = a =
                        this.scrollParent[0].scrollTop + s.scrollSpeed)
                    : e.pageY - this.overflowOffset.top < s.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = a =
                        this.scrollParent[0].scrollTop - s.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    e.pageX <
                  s.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = a =
                        this.scrollParent[0].scrollLeft + s.scrollSpeed)
                    : e.pageX - this.overflowOffset.left <
                        s.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = a =
                        this.scrollParent[0].scrollLeft - s.scrollSpeed))
                : (e.pageY - this.document.scrollTop() < s.scrollSensitivity
                    ? (a = this.document.scrollTop(
                        this.document.scrollTop() - s.scrollSpeed
                      ))
                    : this.window.height() -
                        (e.pageY - this.document.scrollTop()) <
                        s.scrollSensitivity &&
                      (a = this.document.scrollTop(
                        this.document.scrollTop() + s.scrollSpeed
                      )),
                  e.pageX - this.document.scrollLeft() < s.scrollSensitivity
                    ? (a = this.document.scrollLeft(
                        this.document.scrollLeft() - s.scrollSpeed
                      ))
                    : this.window.width() -
                        (e.pageX - this.document.scrollLeft()) <
                        s.scrollSensitivity &&
                      (a = this.document.scrollLeft(
                        this.document.scrollLeft() + s.scrollSpeed
                      ))),
              a !== !1 &&
                t.ui.ddmanager &&
                !s.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo('absolute'),
            (this.options.axis && 'y' === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + 'px'),
            (this.options.axis && 'x' === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + 'px'),
            i = this.items.length - 1;
          i >= 0;
          i--
        )
          if (
            ((n = this.items[i]),
            (o = n.item[0]),
            (r = this._intersectsWithPointer(n)),
            r &&
              n.instance === this.currentContainer &&
              !(
                o === this.currentItem[0] ||
                this.placeholder[1 === r ? 'next' : 'prev']()[0] === o ||
                t.contains(this.placeholder[0], o) ||
                ('semi-dynamic' === this.options.type &&
                  t.contains(this.element[0], o))
              ))
          ) {
            if (
              ((this.direction = 1 === r ? 'down' : 'up'),
              'pointer' !== this.options.tolerance &&
                !this._intersectsWithSides(n))
            )
              break
            this._rearrange(e, n), this._trigger('change', e, this._uiHash())
            break
          }
        return (
          this._contactContainers(e),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          this._trigger('sort', e, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        )
      },
      _mouseStop: function(e, i) {
        if (e) {
          if (
            (t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              t.ui.ddmanager.drop(this, e),
            this.options.revert)
          ) {
            var n = this,
              o = this.placeholder.offset(),
              r = this.options.axis,
              s = {}
            ;(r && 'x' !== r) ||
              (s.left =
                o.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === this.document[0].body
                  ? 0
                  : this.offsetParent[0].scrollLeft)),
              (r && 'y' !== r) ||
                (s.top =
                  o.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              t(this.helper).animate(
                s,
                parseInt(this.options.revert, 10) || 500,
                function() {
                  n._clear(e)
                }
              )
          } else this._clear(e, i)
          return !1
        }
      },
      cancel: function() {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            'original' === this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass('ui-sortable-helper')
              : this.currentItem.show()
          for (var e = this.containers.length - 1; e >= 0; e--)
            this.containers[e]._trigger('deactivate', null, this._uiHash(this)),
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger('out', null, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0))
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            'original' !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            t.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null
            }),
            this.domPosition.prev
              ? t(this.domPosition.prev).after(this.currentItem)
              : t(this.domPosition.parent).prepend(this.currentItem)),
          this
        )
      },
      serialize: function(e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          n = []
        return (
          (e = e || {}),
          t(i).each(function() {
            var i = (t(e.item || this).attr(e.attribute || 'id') || '').match(
              e.expression || /(.+)[\-=_](.+)/
            )
            i &&
              n.push(
                (e.key || i[1] + '[]') +
                  '=' +
                  (e.key && e.expression ? i[1] : i[2])
              )
          }),
          !n.length && e.key && n.push(e.key + '='),
          n.join('&')
        )
      },
      toArray: function(e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          n = []
        return (
          (e = e || {}),
          i.each(function() {
            n.push(t(e.item || this).attr(e.attribute || 'id') || '')
          }),
          n
        )
      },
      _intersectsWith: function(t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          n = this.positionAbs.top,
          o = n + this.helperProportions.height,
          r = t.left,
          s = r + t.width,
          a = t.top,
          l = a + t.height,
          c = this.offset.click.top,
          u = this.offset.click.left,
          d = 'x' === this.options.axis || (n + c > a && n + c < l),
          h = 'y' === this.options.axis || (e + u > r && e + u < s),
          p = d && h
        return 'pointer' === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ('pointer' !== this.options.tolerance &&
            this.helperProportions[this.floating ? 'width' : 'height'] >
              t[this.floating ? 'width' : 'height'])
          ? p
          : r < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < s &&
              a < n + this.helperProportions.height / 2 &&
              o - this.helperProportions.height / 2 < l
      },
      _intersectsWithPointer: function(t) {
        var e =
            'x' === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top,
              t.height
            ),
          i =
            'y' === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left,
              t.width
            ),
          n = e && i,
          o = this._getDragVerticalDirection(),
          r = this._getDragHorizontalDirection()
        return (
          !!n &&
          (this.floating
            ? (r && 'right' === r) || 'down' === o
              ? 2
              : 1
            : o && ('down' === o ? 2 : 1))
        )
      },
      _intersectsWithSides: function(t) {
        var e = this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          i = this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          n = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection()
        return this.floating && o
          ? ('right' === o && i) || ('left' === o && !i)
          : n && (('down' === n && e) || ('up' === n && !e))
      },
      _getDragVerticalDirection: function() {
        var t = this.positionAbs.top - this.lastPositionAbs.top
        return 0 !== t && (t > 0 ? 'down' : 'up')
      },
      _getDragHorizontalDirection: function() {
        var t = this.positionAbs.left - this.lastPositionAbs.left
        return 0 !== t && (t > 0 ? 'right' : 'left')
      },
      refresh: function(t) {
        return (
          this._refreshItems(t),
          this._setHandleClassName(),
          this.refreshPositions(),
          this
        )
      },
      _connectWith: function() {
        var t = this.options
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith
      },
      _getItemsAsjQuery: function(e) {
        function i() {
          a.push(this)
        }
        var n,
          o,
          r,
          s,
          a = [],
          l = [],
          c = this._connectWith()
        if (c && e)
          for (n = c.length - 1; n >= 0; n--)
            for (r = t(c[n], this.document[0]), o = r.length - 1; o >= 0; o--)
              (s = t.data(r[o], this.widgetFullName)),
                s &&
                  s !== this &&
                  !s.options.disabled &&
                  l.push([
                    t.isFunction(s.options.items)
                      ? s.options.items.call(s.element)
                      : t(s.options.items, s.element)
                          .not('.ui-sortable-helper')
                          .not('.ui-sortable-placeholder'),
                    s
                  ])
        for (
          l.push([
            t.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem
                })
              : t(this.options.items, this.element)
                  .not('.ui-sortable-helper')
                  .not('.ui-sortable-placeholder'),
            this
          ]),
            n = l.length - 1;
          n >= 0;
          n--
        )
          l[n][0].each(i)
        return t(a)
      },
      _removeCurrentsFromItems: function() {
        var e = this.currentItem.find(':data(' + this.widgetName + '-item)')
        this.items = t.grep(this.items, function(t) {
          for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1
          return !0
        })
      },
      _refreshItems: function(e) {
        ;(this.items = []), (this.containers = [this])
        var i,
          n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = this.items,
          d = [
            [
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem
                  })
                : t(this.options.items, this.element),
              this
            ]
          ],
          h = this._connectWith()
        if (h && this.ready)
          for (i = h.length - 1; i >= 0; i--)
            for (o = t(h[i], this.document[0]), n = o.length - 1; n >= 0; n--)
              (r = t.data(o[n], this.widgetFullName)),
                r &&
                  r !== this &&
                  !r.options.disabled &&
                  (d.push([
                    t.isFunction(r.options.items)
                      ? r.options.items.call(r.element[0], e, {
                          item: this.currentItem
                        })
                      : t(r.options.items, r.element),
                    r
                  ]),
                  this.containers.push(r))
        for (i = d.length - 1; i >= 0; i--)
          for (s = d[i][1], a = d[i][0], n = 0, c = a.length; n < c; n++)
            (l = t(a[n])),
              l.data(this.widgetName + '-item', s),
              u.push({
                item: l,
                instance: s,
                width: 0,
                height: 0,
                left: 0,
                top: 0
              })
      },
      refreshPositions: function(e) {
        ;(this.floating =
          !!this.items.length &&
          ('x' === this.options.axis || this._isFloating(this.items[0].item))),
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset())
        var i, n, o, r
        for (i = this.items.length - 1; i >= 0; i--)
          (n = this.items[i]),
            (n.instance !== this.currentContainer &&
              this.currentContainer &&
              n.item[0] !== this.currentItem[0]) ||
              ((o = this.options.toleranceElement
                ? t(this.options.toleranceElement, n.item)
                : n.item),
              e || ((n.width = o.outerWidth()), (n.height = o.outerHeight())),
              (r = o.offset()),
              (n.left = r.left),
              (n.top = r.top))
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this)
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (r = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = r.left),
              (this.containers[i].containerCache.top = r.top),
              (this.containers[i].containerCache.width = this.containers[
                i
              ].element.outerWidth()),
              (this.containers[i].containerCache.height = this.containers[
                i
              ].element.outerHeight())
        return this
      },
      _createPlaceholder: function(e) {
        e = e || this
        var i,
          n = e.options
        ;(n.placeholder && n.placeholder.constructor !== String) ||
          ((i = n.placeholder),
          (n.placeholder = {
            element: function() {
              var n = e.currentItem[0].nodeName.toLowerCase(),
                o = t('<' + n + '>', e.document[0])
                  .addClass(
                    i || e.currentItem[0].className + ' ui-sortable-placeholder'
                  )
                  .removeClass('ui-sortable-helper')
              return (
                'tbody' === n
                  ? e._createTrPlaceholder(
                      e.currentItem.find('tr').eq(0),
                      t('<tr>', e.document[0]).appendTo(o)
                    )
                  : 'tr' === n
                  ? e._createTrPlaceholder(e.currentItem, o)
                  : 'img' === n && o.attr('src', e.currentItem.attr('src')),
                i || o.css('visibility', 'hidden'),
                o
              )
            },
            update: function(t, o) {
              ;(i && !n.forcePlaceholderSize) ||
                (o.height() ||
                  o.height(
                    e.currentItem.innerHeight() -
                      parseInt(e.currentItem.css('paddingTop') || 0, 10) -
                      parseInt(e.currentItem.css('paddingBottom') || 0, 10)
                  ),
                o.width() ||
                  o.width(
                    e.currentItem.innerWidth() -
                      parseInt(e.currentItem.css('paddingLeft') || 0, 10) -
                      parseInt(e.currentItem.css('paddingRight') || 0, 10)
                  ))
            }
          })),
          (e.placeholder = t(
            n.placeholder.element.call(e.element, e.currentItem)
          )),
          e.currentItem.after(e.placeholder),
          n.placeholder.update(e, e.placeholder)
      },
      _createTrPlaceholder: function(e, i) {
        var n = this
        e.children().each(function() {
          t('<td>&#160;</td>', n.document[0])
            .attr('colspan', t(this).attr('colspan') || 1)
            .appendTo(i)
        })
      },
      _contactContainers: function(e) {
        var i,
          n,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          h = null,
          p = null
        for (i = this.containers.length - 1; i >= 0; i--)
          if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
            if (this._intersectsWith(this.containers[i].containerCache)) {
              if (h && t.contains(this.containers[i].element[0], h.element[0]))
                continue
              ;(h = this.containers[i]), (p = i)
            } else
              this.containers[i].containerCache.over &&
                (this.containers[i]._trigger('out', e, this._uiHash(this)),
                (this.containers[i].containerCache.over = 0))
        if (h)
          if (1 === this.containers.length)
            this.containers[p].containerCache.over ||
              (this.containers[p]._trigger('over', e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1))
          else {
            for (
              o = 1e4,
                r = null,
                u = h.floating || this._isFloating(this.currentItem),
                s = u ? 'left' : 'top',
                a = u ? 'width' : 'height',
                d = u ? 'clientX' : 'clientY',
                n = this.items.length - 1;
              n >= 0;
              n--
            )
              t.contains(
                this.containers[p].element[0],
                this.items[n].item[0]
              ) &&
                this.items[n].item[0] !== this.currentItem[0] &&
                ((l = this.items[n].item.offset()[s]),
                (c = !1),
                e[d] - l > this.items[n][a] / 2 && (c = !0),
                Math.abs(e[d] - l) < o &&
                  ((o = Math.abs(e[d] - l)),
                  (r = this.items[n]),
                  (this.direction = c ? 'up' : 'down')))
            if (!r && !this.options.dropOnEmpty) return
            if (this.currentContainer === this.containers[p])
              return void (
                this.currentContainer.containerCache.over ||
                (this.containers[p]._trigger('over', e, this._uiHash()),
                (this.currentContainer.containerCache.over = 1))
              )
            r
              ? this._rearrange(e, r, null, !0)
              : this._rearrange(e, null, this.containers[p].element, !0),
              this._trigger('change', e, this._uiHash()),
              this.containers[p]._trigger('change', e, this._uiHash(this)),
              (this.currentContainer = this.containers[p]),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[p]._trigger('over', e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1)
          }
      },
      _createHelper: function(e) {
        var i = this.options,
          n = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
            : 'clone' === i.helper
            ? this.currentItem.clone()
            : this.currentItem
        return (
          n.parents('body').length ||
            t(
              'parent' !== i.appendTo
                ? i.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(n[0]),
          n[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css('position'),
              top: this.currentItem.css('top'),
              left: this.currentItem.css('left')
            }),
          (n[0].style.width && !i.forceHelperSize) ||
            n.width(this.currentItem.width()),
          (n[0].style.height && !i.forceHelperSize) ||
            n.height(this.currentItem.height()),
          n
        )
      },
      _adjustOffsetFromHelper: function(e) {
        'string' == typeof e && (e = e.split(' ')),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          'left' in e && (this.offset.click.left = e.left + this.margins.left),
          'right' in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          'top' in e && (this.offset.click.top = e.top + this.margins.top),
          'bottom' in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top)
      },
      _getParentOffset: function() {
        this.offsetParent = this.helper.offsetParent()
        var e = this.offsetParent.offset()
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === this.document[0].body ||
            (this.offsetParent[0].tagName &&
              'html' === this.offsetParent[0].tagName.toLowerCase() &&
              t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
          }
        )
      },
      _getRelativeOffset: function() {
        if ('relative' === this.cssPosition) {
          var t = this.currentItem.position()
          return {
            top:
              t.top -
              (parseInt(this.helper.css('top'), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              t.left -
              (parseInt(this.helper.css('left'), 10) || 0) +
              this.scrollParent.scrollLeft()
          }
        }
        return { top: 0, left: 0 }
      },
      _cacheMargins: function() {
        this.margins = {
          left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
          top: parseInt(this.currentItem.css('marginTop'), 10) || 0
        }
      },
      _cacheHelperProportions: function() {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
        }
      },
      _setContainment: function() {
        var e,
          i,
          n,
          o = this.options
        'parent' === o.containment &&
          (o.containment = this.helper[0].parentNode),
          ('document' !== o.containment && 'window' !== o.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              'document' === o.containment
                ? this.document.width()
                : this.window.width() -
                  this.helperProportions.width -
                  this.margins.left,
              ('document' === o.containment
                ? this.document.width()
                : this.window.height() ||
                  this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top
            ]),
          /^(document|window|parent)$/.test(o.containment) ||
            ((e = t(o.containment)[0]),
            (i = t(o.containment).offset()),
            (n = 'hidden' !== t(e).css('overflow')),
            (this.containment = [
              i.left +
                (parseInt(t(e).css('borderLeftWidth'), 10) || 0) +
                (parseInt(t(e).css('paddingLeft'), 10) || 0) -
                this.margins.left,
              i.top +
                (parseInt(t(e).css('borderTopWidth'), 10) || 0) +
                (parseInt(t(e).css('paddingTop'), 10) || 0) -
                this.margins.top,
              i.left +
                (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                (parseInt(t(e).css('borderLeftWidth'), 10) || 0) -
                (parseInt(t(e).css('paddingRight'), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              i.top +
                (n
                  ? Math.max(e.scrollHeight, e.offsetHeight)
                  : e.offsetHeight) -
                (parseInt(t(e).css('borderTopWidth'), 10) || 0) -
                (parseInt(t(e).css('paddingBottom'), 10) || 0) -
                this.helperProportions.height -
                this.margins.top
            ]))
      },
      _convertPositionTo: function(e, i) {
        i || (i = this.position)
        var n = 'absolute' === e ? 1 : -1,
          o =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          r = /(html|body)/i.test(o[0].tagName)
        return {
          top:
            i.top +
            this.offset.relative.top * n +
            this.offset.parent.top * n -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : r
              ? 0
              : o.scrollTop()) *
              n,
          left:
            i.left +
            this.offset.relative.left * n +
            this.offset.parent.left * n -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : r
              ? 0
              : o.scrollLeft()) *
              n
        }
      },
      _generatePosition: function(e) {
        var i,
          n,
          o = this.options,
          r = e.pageX,
          s = e.pageY,
          a =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          l = /(html|body)/i.test(a[0].tagName)
        return (
          'relative' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (e.pageX - this.offset.click.left < this.containment[0] &&
                (r = this.containment[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < this.containment[1] &&
                (s = this.containment[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > this.containment[2] &&
                (r = this.containment[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > this.containment[3] &&
                (s = this.containment[3] + this.offset.click.top)),
            o.grid &&
              ((i =
                this.originalPageY +
                Math.round((s - this.originalPageY) / o.grid[1]) * o.grid[1]),
              (s = this.containment
                ? i - this.offset.click.top >= this.containment[1] &&
                  i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                  ? i - o.grid[1]
                  : i + o.grid[1]
                : i),
              (n =
                this.originalPageX +
                Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0]),
              (r = this.containment
                ? n - this.offset.click.left >= this.containment[0] &&
                  n - this.offset.click.left <= this.containment[2]
                  ? n
                  : n - this.offset.click.left >= this.containment[0]
                  ? n - o.grid[0]
                  : n + o.grid[0]
                : n))),
          {
            top:
              s -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : l
                ? 0
                : a.scrollTop()),
            left:
              r -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : l
                ? 0
                : a.scrollLeft())
          }
        )
      },
      _rearrange: function(t, e, i, n) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              'down' === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1)
        var o = this.counter
        this._delay(function() {
          o === this.counter && this.refreshPositions(!n)
        })
      },
      _clear: function(t, e) {
        function i(t, e, i) {
          return function(n) {
            i._trigger(t, n, e._uiHash(e))
          }
        }
        this.reverting = !1
        var n,
          o = []
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (n in this._storedCSS)
            ('auto' !== this._storedCSS[n] &&
              'static' !== this._storedCSS[n]) ||
              (this._storedCSS[n] = '')
          this.currentItem
            .css(this._storedCSS)
            .removeClass('ui-sortable-helper')
        } else this.currentItem.show()
        for (
          this.fromOutside &&
            !e &&
            o.push(function(t) {
              this._trigger('receive', t, this._uiHash(this.fromOutside))
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not('.ui-sortable-helper')[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              o.push(function(t) {
                this._trigger('update', t, this._uiHash())
              }),
            this !== this.currentContainer &&
              (e ||
                (o.push(function(t) {
                  this._trigger('remove', t, this._uiHash())
                }),
                o.push(
                  function(t) {
                    return function(e) {
                      t._trigger('receive', e, this._uiHash(this))
                    }
                  }.call(this, this.currentContainer)
                ),
                o.push(
                  function(t) {
                    return function(e) {
                      t._trigger('update', e, this._uiHash(this))
                    }
                  }.call(this, this.currentContainer)
                ))),
            n = this.containers.length - 1;
          n >= 0;
          n--
        )
          e || o.push(i('deactivate', this, this.containers[n])),
            this.containers[n].containerCache.over &&
              (o.push(i('out', this, this.containers[n])),
              (this.containers[n].containerCache.over = 0))
        if (
          (this.storedCursor &&
            (this.document.find('body').css('cursor', this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css('opacity', this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              'zIndex',
              'auto' === this._storedZIndex ? '' : this._storedZIndex
            ),
          (this.dragging = !1),
          e || this._trigger('beforeStop', t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            (this.helper = null)),
          !e)
        ) {
          for (n = 0; n < o.length; n++) o[n].call(this, t)
          this._trigger('stop', t, this._uiHash())
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval
      },
      _trigger: function() {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 &&
          this.cancel()
      },
      _uiHash: function(e) {
        var i = e || this
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null
        }
      }
    })
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : t(jQuery)
  })(function(t) {
    return (
      (function() {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)
          ]
        }
        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0
        }
        function n(e) {
          var i = e[0]
          return 9 === i.nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 }
              }
            : t.isWindow(i)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() }
              }
            : i.preventDefault
            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
              }
        }
        t.ui = t.ui || {}
        var o,
          r,
          s = Math.max,
          a = Math.abs,
          l = Math.round,
          c = /left|center|right/,
          u = /top|center|bottom/,
          d = /[\+\-]\d+(\.[\d]+)?%?/,
          h = /^\w+/,
          p = /%$/,
          f = t.fn.position
        ;(t.position = {
          scrollbarWidth: function() {
            if (void 0 !== o) return o
            var e,
              i,
              n = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              r = n.children()[0]
            return (
              t('body').append(n),
              (e = r.offsetWidth),
              n.css('overflow', 'scroll'),
              (i = r.offsetWidth),
              e === i && (i = n[0].clientWidth),
              n.remove(),
              (o = e - i)
            )
          },
          getScrollInfo: function(e) {
            var i =
                e.isWindow || e.isDocument ? '' : e.element.css('overflow-x'),
              n = e.isWindow || e.isDocument ? '' : e.element.css('overflow-y'),
              o =
                'scroll' === i ||
                ('auto' === i && e.width < e.element[0].scrollWidth),
              r =
                'scroll' === n ||
                ('auto' === n && e.height < e.element[0].scrollHeight)
            return {
              width: r ? t.position.scrollbarWidth() : 0,
              height: o ? t.position.scrollbarWidth() : 0
            }
          },
          getWithinInfo: function(e) {
            var i = t(e || window),
              n = t.isWindow(i[0]),
              o = !!i[0] && 9 === i[0].nodeType
            return {
              element: i,
              isWindow: n,
              isDocument: o,
              offset: i.offset() || { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: n || o ? i.width() : i.outerWidth(),
              height: n || o ? i.height() : i.outerHeight()
            }
          }
        }),
          (t.fn.position = function(o) {
            if (!o || !o.of) return f.apply(this, arguments)
            o = t.extend({}, o)
            var p,
              m,
              g,
              v,
              y,
              w,
              b = t(o.of),
              _ = t.position.getWithinInfo(o.within),
              k = t.position.getScrollInfo(_),
              x = (o.collision || 'flip').split(' '),
              C = {}
            return (
              (w = n(b)),
              b[0].preventDefault && (o.at = 'left top'),
              (m = w.width),
              (g = w.height),
              (v = w.offset),
              (y = t.extend({}, v)),
              t.each(['my', 'at'], function() {
                var t,
                  e,
                  i = (o[this] || '').split(' ')
                1 === i.length &&
                  (i = c.test(i[0])
                    ? i.concat(['center'])
                    : u.test(i[0])
                    ? ['center'].concat(i)
                    : ['center', 'center']),
                  (i[0] = c.test(i[0]) ? i[0] : 'center'),
                  (i[1] = u.test(i[1]) ? i[1] : 'center'),
                  (t = d.exec(i[0])),
                  (e = d.exec(i[1])),
                  (C[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (o[this] = [h.exec(i[0])[0], h.exec(i[1])[0]])
              }),
              1 === x.length && (x[1] = x[0]),
              'right' === o.at[0]
                ? (y.left += m)
                : 'center' === o.at[0] && (y.left += m / 2),
              'bottom' === o.at[1]
                ? (y.top += g)
                : 'center' === o.at[1] && (y.top += g / 2),
              (p = e(C.at, m, g)),
              (y.left += p[0]),
              (y.top += p[1]),
              this.each(function() {
                var n,
                  c,
                  u = t(this),
                  d = u.outerWidth(),
                  h = u.outerHeight(),
                  f = i(this, 'marginLeft'),
                  w = i(this, 'marginTop'),
                  T = d + f + i(this, 'marginRight') + k.width,
                  S = h + w + i(this, 'marginBottom') + k.height,
                  $ = t.extend({}, y),
                  D = e(C.my, u.outerWidth(), u.outerHeight())
                'right' === o.my[0]
                  ? ($.left -= d)
                  : 'center' === o.my[0] && ($.left -= d / 2),
                  'bottom' === o.my[1]
                    ? ($.top -= h)
                    : 'center' === o.my[1] && ($.top -= h / 2),
                  ($.left += D[0]),
                  ($.top += D[1]),
                  r || (($.left = l($.left)), ($.top = l($.top))),
                  (n = { marginLeft: f, marginTop: w }),
                  t.each(['left', 'top'], function(e, i) {
                    t.ui.position[x[e]] &&
                      t.ui.position[x[e]][i]($, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: h,
                        collisionPosition: n,
                        collisionWidth: T,
                        collisionHeight: S,
                        offset: [p[0] + D[0], p[1] + D[1]],
                        my: o.my,
                        at: o.at,
                        within: _,
                        elem: u
                      })
                  }),
                  o.using &&
                    (c = function(t) {
                      var e = v.left - $.left,
                        i = e + m - d,
                        n = v.top - $.top,
                        r = n + g - h,
                        l = {
                          target: {
                            element: b,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g
                          },
                          element: {
                            element: u,
                            left: $.left,
                            top: $.top,
                            width: d,
                            height: h
                          },
                          horizontal:
                            i < 0 ? 'left' : e > 0 ? 'right' : 'center',
                          vertical: r < 0 ? 'top' : n > 0 ? 'bottom' : 'middle'
                        }
                      m < d && a(e + i) < m && (l.horizontal = 'center'),
                        g < h && a(n + r) < g && (l.vertical = 'middle'),
                        s(a(e), a(i)) > s(a(n), a(r))
                          ? (l.important = 'horizontal')
                          : (l.important = 'vertical'),
                        o.using.call(this, t, l)
                    }),
                  u.offset(t.extend($, { using: c }))
              })
            )
          }),
          (t.ui.position = {
            fit: {
              left: function(t, e) {
                var i,
                  n = e.within,
                  o = n.isWindow ? n.scrollLeft : n.offset.left,
                  r = n.width,
                  a = t.left - e.collisionPosition.marginLeft,
                  l = o - a,
                  c = a + e.collisionWidth - r - o
                e.collisionWidth > r
                  ? l > 0 && c <= 0
                    ? ((i = t.left + l + e.collisionWidth - r - o),
                      (t.left += l - i))
                    : c > 0 && l <= 0
                    ? (t.left = o)
                    : l > c
                    ? (t.left = o + r - e.collisionWidth)
                    : (t.left = o)
                  : l > 0
                  ? (t.left += l)
                  : c > 0
                  ? (t.left -= c)
                  : (t.left = s(t.left - a, t.left))
              },
              top: function(t, e) {
                var i,
                  n = e.within,
                  o = n.isWindow ? n.scrollTop : n.offset.top,
                  r = e.within.height,
                  a = t.top - e.collisionPosition.marginTop,
                  l = o - a,
                  c = a + e.collisionHeight - r - o
                e.collisionHeight > r
                  ? l > 0 && c <= 0
                    ? ((i = t.top + l + e.collisionHeight - r - o),
                      (t.top += l - i))
                    : c > 0 && l <= 0
                    ? (t.top = o)
                    : l > c
                    ? (t.top = o + r - e.collisionHeight)
                    : (t.top = o)
                  : l > 0
                  ? (t.top += l)
                  : c > 0
                  ? (t.top -= c)
                  : (t.top = s(t.top - a, t.top))
              }
            },
            flip: {
              left: function(t, e) {
                var i,
                  n,
                  o = e.within,
                  r = o.offset.left + o.scrollLeft,
                  s = o.width,
                  l = o.isWindow ? o.scrollLeft : o.offset.left,
                  c = t.left - e.collisionPosition.marginLeft,
                  u = c - l,
                  d = c + e.collisionWidth - s - l,
                  h =
                    'left' === e.my[0]
                      ? -e.elemWidth
                      : 'right' === e.my[0]
                      ? e.elemWidth
                      : 0,
                  p =
                    'left' === e.at[0]
                      ? e.targetWidth
                      : 'right' === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  f = -2 * e.offset[0]
                u < 0
                  ? ((i = t.left + h + p + f + e.collisionWidth - s - r),
                    (i < 0 || i < a(u)) && (t.left += h + p + f))
                  : d > 0 &&
                    ((n =
                      t.left - e.collisionPosition.marginLeft + h + p + f - l),
                    (n > 0 || a(n) < d) && (t.left += h + p + f))
              },
              top: function(t, e) {
                var i,
                  n,
                  o = e.within,
                  r = o.offset.top + o.scrollTop,
                  s = o.height,
                  l = o.isWindow ? o.scrollTop : o.offset.top,
                  c = t.top - e.collisionPosition.marginTop,
                  u = c - l,
                  d = c + e.collisionHeight - s - l,
                  h = 'top' === e.my[1],
                  p = h
                    ? -e.elemHeight
                    : 'bottom' === e.my[1]
                    ? e.elemHeight
                    : 0,
                  f =
                    'top' === e.at[1]
                      ? e.targetHeight
                      : 'bottom' === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  m = -2 * e.offset[1]
                u < 0
                  ? ((n = t.top + p + f + m + e.collisionHeight - s - r),
                    (n < 0 || n < a(u)) && (t.top += p + f + m))
                  : d > 0 &&
                    ((i =
                      t.top - e.collisionPosition.marginTop + p + f + m - l),
                    (i > 0 || a(i) < d) && (t.top += p + f + m))
              }
            },
            flipfit: {
              left: function() {
                t.ui.position.flip.left.apply(this, arguments),
                  t.ui.position.fit.left.apply(this, arguments)
              },
              top: function() {
                t.ui.position.flip.top.apply(this, arguments),
                  t.ui.position.fit.top.apply(this, arguments)
              }
            }
          }),
          (function() {
            var e,
              i,
              n,
              o,
              s,
              a = document.getElementsByTagName('body')[0],
              l = document.createElement('div')
            ;(e = document.createElement(a ? 'div' : 'body')),
              (n = {
                visibility: 'hidden',
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: 'none'
              }),
              a &&
                t.extend(n, {
                  position: 'absolute',
                  left: '-1000px',
                  top: '-1000px'
                })
            for (s in n) e.style[s] = n[s]
            e.appendChild(l),
              (i = a || document.documentElement),
              i.insertBefore(e, i.firstChild),
              (l.style.cssText = 'position: absolute; left: 10.7432222px;'),
              (o = t(l).offset().left),
              (r = o > 10 && o < 11),
              (e.innerHTML = ''),
              i.removeChild(e)
          })()
      })(),
      t.ui.position
    )
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery', './core', './widget', './position'], t)
      : t(jQuery)
  })(function(t) {
    return t.widget('ui.menu', {
      version: '1.11.4',
      defaultElement: '<ul>',
      delay: 300,
      options: {
        icons: { submenu: 'ui-icon-carat-1-e' },
        items: '> *',
        menus: 'ul',
        position: { my: 'left-1 top', at: 'right top' },
        role: 'menu',
        blur: null,
        focus: null,
        select: null
      },
      _create: function() {
        ;(this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .addClass('ui-menu ui-widget ui-widget-content')
            .toggleClass(
              'ui-menu-icons',
              !!this.element.find('.ui-icon').length
            )
            .attr({ role: this.options.role, tabIndex: 0 }),
          this.options.disabled &&
            this.element
              .addClass('ui-state-disabled')
              .attr('aria-disabled', 'true'),
          this._on({
            'mousedown .ui-menu-item': function(t) {
              t.preventDefault()
            },
            'click .ui-menu-item': function(e) {
              var i = t(e.target)
              !this.mouseHandled &&
                i.not('.ui-state-disabled').length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                i.has('.ui-menu').length
                  ? this.expand(e)
                  : !this.element.is(':focus') &&
                    t(this.document[0].activeElement).closest('.ui-menu')
                      .length &&
                    (this.element.trigger('focus', [!0]),
                    this.active &&
                      1 === this.active.parents('.ui-menu').length &&
                      clearTimeout(this.timer)))
            },
            'mouseenter .ui-menu-item': function(e) {
              if (!this.previousFilter) {
                var i = t(e.currentTarget)
                i.siblings('.ui-state-active').removeClass('ui-state-active'),
                  this.focus(e, i)
              }
            },
            mouseleave: 'collapseAll',
            'mouseleave .ui-menu': 'collapseAll',
            focus: function(t, e) {
              var i = this.active || this.element.find(this.options.items).eq(0)
              e || this.focus(t, i)
            },
            blur: function(e) {
              this._delay(function() {
                t.contains(this.element[0], this.document[0].activeElement) ||
                  this.collapseAll(e)
              })
            },
            keydown: '_keydown'
          }),
          this.refresh(),
          this._on(this.document, {
            click: function(t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t),
                (this.mouseHandled = !1)
            }
          })
      },
      _destroy: function() {
        this.element
          .removeAttr('aria-activedescendant')
          .find('.ui-menu')
          .addBack()
          .removeClass(
            'ui-menu ui-widget ui-widget-content ui-menu-icons ui-front'
          )
          .removeAttr('role')
          .removeAttr('tabIndex')
          .removeAttr('aria-labelledby')
          .removeAttr('aria-expanded')
          .removeAttr('aria-hidden')
          .removeAttr('aria-disabled')
          .removeUniqueId()
          .show(),
          this.element
            .find('.ui-menu-item')
            .removeClass('ui-menu-item')
            .removeAttr('role')
            .removeAttr('aria-disabled')
            .removeUniqueId()
            .removeClass('ui-state-hover')
            .removeAttr('tabIndex')
            .removeAttr('role')
            .removeAttr('aria-haspopup')
            .children()
            .each(function() {
              var e = t(this)
              e.data('ui-menu-submenu-carat') && e.remove()
            }),
          this.element
            .find('.ui-menu-divider')
            .removeClass('ui-menu-divider ui-widget-content')
      },
      _keydown: function(e) {
        var i,
          n,
          o,
          r,
          s = !0
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e)
            break
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e)
            break
          case t.ui.keyCode.HOME:
            this._move('first', 'first', e)
            break
          case t.ui.keyCode.END:
            this._move('last', 'last', e)
            break
          case t.ui.keyCode.UP:
            this.previous(e)
            break
          case t.ui.keyCode.DOWN:
            this.next(e)
            break
          case t.ui.keyCode.LEFT:
            this.collapse(e)
            break
          case t.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is('.ui-state-disabled') &&
              this.expand(e)
            break
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e)
            break
          case t.ui.keyCode.ESCAPE:
            this.collapse(e)
            break
          default:
            ;(s = !1),
              (n = this.previousFilter || ''),
              (o = String.fromCharCode(e.keyCode)),
              (r = !1),
              clearTimeout(this.filterTimer),
              o === n ? (r = !0) : (o = n + o),
              (i = this._filterMenuItems(o)),
              (i =
                r && i.index(this.active.next()) !== -1
                  ? this.active.nextAll('.ui-menu-item')
                  : i),
              i.length ||
                ((o = String.fromCharCode(e.keyCode)),
                (i = this._filterMenuItems(o))),
              i.length
                ? (this.focus(e, i),
                  (this.previousFilter = o),
                  (this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                  }, 1e3)))
                : delete this.previousFilter
        }
        s && e.preventDefault()
      },
      _activate: function(t) {
        this.active.is('.ui-state-disabled') ||
          (this.active.is("[aria-haspopup='true']")
            ? this.expand(t)
            : this.select(t))
      },
      refresh: function() {
        var e,
          i,
          n = this,
          o = this.options.icons.submenu,
          r = this.element.find(this.options.menus)
        this.element.toggleClass(
          'ui-menu-icons',
          !!this.element.find('.ui-icon').length
        ),
          r
            .filter(':not(.ui-menu)')
            .addClass('ui-menu ui-widget ui-widget-content ui-front')
            .hide()
            .attr({
              role: this.options.role,
              'aria-hidden': 'true',
              'aria-expanded': 'false'
            })
            .each(function() {
              var e = t(this),
                i = e.parent(),
                n = t('<span>')
                  .addClass('ui-menu-icon ui-icon ' + o)
                  .data('ui-menu-submenu-carat', !0)
              i.attr('aria-haspopup', 'true').prepend(n),
                e.attr('aria-labelledby', i.attr('id'))
            }),
          (e = r.add(this.element)),
          (i = e.find(this.options.items)),
          i.not('.ui-menu-item').each(function() {
            var e = t(this)
            n._isDivider(e) && e.addClass('ui-widget-content ui-menu-divider')
          }),
          i
            .not('.ui-menu-item, .ui-menu-divider')
            .addClass('ui-menu-item')
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() }),
          i.filter('.ui-state-disabled').attr('aria-disabled', 'true'),
          this.active &&
            !t.contains(this.element[0], this.active[0]) &&
            this.blur()
      },
      _itemRole: function() {
        return { menu: 'menuitem', listbox: 'option' }[this.options.role]
      },
      _setOption: function(t, e) {
        'icons' === t &&
          this.element
            .find('.ui-menu-icon')
            .removeClass(this.options.icons.submenu)
            .addClass(e.submenu),
          'disabled' === t &&
            this.element
              .toggleClass('ui-state-disabled', !!e)
              .attr('aria-disabled', e),
          this._super(t, e)
      },
      focus: function(t, e) {
        var i, n
        this.blur(t, t && 'focus' === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (n = this.active
            .addClass('ui-state-focus')
            .removeClass('ui-state-active')),
          this.options.role &&
            this.element.attr('aria-activedescendant', n.attr('id')),
          this.active
            .parent()
            .closest('.ui-menu-item')
            .addClass('ui-state-active'),
          t && 'keydown' === t.type
            ? this._close()
            : (this.timer = this._delay(function() {
                this._close()
              }, this.delay)),
          (i = e.children('.ui-menu')),
          i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger('focus', t, { item: e })
      },
      _scrollIntoView: function(e) {
        var i, n, o, r, s, a
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], 'borderTopWidth')) || 0),
          (n = parseFloat(t.css(this.activeMenu[0], 'paddingTop')) || 0),
          (o = e.offset().top - this.activeMenu.offset().top - i - n),
          (r = this.activeMenu.scrollTop()),
          (s = this.activeMenu.height()),
          (a = e.outerHeight()),
          o < 0
            ? this.activeMenu.scrollTop(r + o)
            : o + a > s && this.activeMenu.scrollTop(r + o - s + a))
      },
      blur: function(t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this.active.removeClass('ui-state-focus'),
            (this.active = null),
            this._trigger('blur', t, { item: this.active }))
      },
      _startOpening: function(t) {
        clearTimeout(this.timer),
          'true' === t.attr('aria-hidden') &&
            (this.timer = this._delay(function() {
              this._close(), this._open(t)
            }, this.delay))
      },
      _open: function(e) {
        var i = t.extend({ of: this.active }, this.options.position)
        clearTimeout(this.timer),
          this.element
            .find('.ui-menu')
            .not(e.parents('.ui-menu'))
            .hide()
            .attr('aria-hidden', 'true'),
          e
            .show()
            .removeAttr('aria-hidden')
            .attr('aria-expanded', 'true')
            .position(i)
      },
      collapseAll: function(e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function() {
            var n = i
              ? this.element
              : t(e && e.target).closest(this.element.find('.ui-menu'))
            n.length || (n = this.element),
              this._close(n),
              this.blur(e),
              (this.activeMenu = n)
          }, this.delay))
      },
      _close: function(t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find('.ui-menu')
            .hide()
            .attr('aria-hidden', 'true')
            .attr('aria-expanded', 'false')
            .end()
            .find('.ui-state-active')
            .not('.ui-state-focus')
            .removeClass('ui-state-active')
      },
      _closeOnDocumentClick: function(e) {
        return !t(e.target).closest('.ui-menu').length
      },
      _isDivider: function(t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text())
      },
      collapse: function(t) {
        var e =
          this.active &&
          this.active.parent().closest('.ui-menu-item', this.element)
        e && e.length && (this._close(), this.focus(t, e))
      },
      expand: function(t) {
        var e =
          this.active &&
          this.active
            .children('.ui-menu ')
            .find(this.options.items)
            .first()
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function() {
            this.focus(t, e)
          }))
      },
      next: function(t) {
        this._move('next', 'first', t)
      },
      previous: function(t) {
        this._move('prev', 'last', t)
      },
      isFirstItem: function() {
        return this.active && !this.active.prevAll('.ui-menu-item').length
      },
      isLastItem: function() {
        return this.active && !this.active.nextAll('.ui-menu-item').length
      },
      _move: function(t, e, i) {
        var n
        this.active &&
          (n =
            'first' === t || 'last' === t
              ? this.active['first' === t ? 'prevAll' : 'nextAll'](
                  '.ui-menu-item'
                ).eq(-1)
              : this.active[t + 'All']('.ui-menu-item').eq(0)),
          (n && n.length && this.active) ||
            (n = this.activeMenu.find(this.options.items)[e]()),
          this.focus(i, n)
      },
      nextPage: function(e) {
        var i, n, o
        return this.active
          ? void (
              this.isLastItem() ||
              (this._hasScroll()
                ? ((n = this.active.offset().top),
                  (o = this.element.height()),
                  this.active.nextAll('.ui-menu-item').each(function() {
                    return (i = t(this)), i.offset().top - n - o < 0
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? 'last' : 'first']()
                  ))
            )
          : void this.next(e)
      },
      previousPage: function(e) {
        var i, n, o
        return this.active
          ? void (
              this.isFirstItem() ||
              (this._hasScroll()
                ? ((n = this.active.offset().top),
                  (o = this.element.height()),
                  this.active.prevAll('.ui-menu-item').each(function() {
                    return (i = t(this)), i.offset().top - n + o > 0
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu.find(this.options.items).first()
                  ))
            )
          : void this.next(e)
      },
      _hasScroll: function() {
        return this.element.outerHeight() < this.element.prop('scrollHeight')
      },
      select: function(e) {
        this.active = this.active || t(e.target).closest('.ui-menu-item')
        var i = { item: this.active }
        this.active.has('.ui-menu').length || this.collapseAll(e, !0),
          this._trigger('select', e, i)
      },
      _filterMenuItems: function(e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'),
          n = new RegExp('^' + i, 'i')
        return this.activeMenu
          .find(this.options.items)
          .filter('.ui-menu-item')
          .filter(function() {
            return n.test(t.trim(t(this).text()))
          })
      }
    })
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery', './core', './widget', './position', './menu'], t)
      : t(jQuery)
  })(function(t) {
    return (
      t.widget('ui.autocomplete', {
        version: '1.11.4',
        defaultElement: '<input>',
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: 'left top', at: 'left bottom', collision: 'none' },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
          var e,
            i,
            n,
            o = this.element[0].nodeName.toLowerCase(),
            r = 'textarea' === o,
            s = 'input' === o
          ;(this.isMultiLine =
            !!r || (!s && this.element.prop('isContentEditable'))),
            (this.valueMethod = this.element[r || s ? 'val' : 'text']),
            (this.isNewMenu = !0),
            this.element
              .addClass('ui-autocomplete-input')
              .attr('autocomplete', 'off'),
            this._on(this.element, {
              keydown: function(o) {
                if (this.element.prop('readOnly'))
                  return (e = !0), (n = !0), void (i = !0)
                ;(e = !1), (n = !1), (i = !1)
                var r = t.ui.keyCode
                switch (o.keyCode) {
                  case r.PAGE_UP:
                    ;(e = !0), this._move('previousPage', o)
                    break
                  case r.PAGE_DOWN:
                    ;(e = !0), this._move('nextPage', o)
                    break
                  case r.UP:
                    ;(e = !0), this._keyEvent('previous', o)
                    break
                  case r.DOWN:
                    ;(e = !0), this._keyEvent('next', o)
                    break
                  case r.ENTER:
                    this.menu.active &&
                      ((e = !0), o.preventDefault(), this.menu.select(o))
                    break
                  case r.TAB:
                    this.menu.active && this.menu.select(o)
                    break
                  case r.ESCAPE:
                    this.menu.element.is(':visible') &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(o),
                      o.preventDefault())
                    break
                  default:
                    ;(i = !0), this._searchTimeout(o)
                }
              },
              keypress: function(n) {
                if (e)
                  return (
                    (e = !1),
                    void (
                      (this.isMultiLine && !this.menu.element.is(':visible')) ||
                      n.preventDefault()
                    )
                  )
                if (!i) {
                  var o = t.ui.keyCode
                  switch (n.keyCode) {
                    case o.PAGE_UP:
                      this._move('previousPage', n)
                      break
                    case o.PAGE_DOWN:
                      this._move('nextPage', n)
                      break
                    case o.UP:
                      this._keyEvent('previous', n)
                      break
                    case o.DOWN:
                      this._keyEvent('next', n)
                  }
                }
              },
              input: function(t) {
                return n
                  ? ((n = !1), void t.preventDefault())
                  : void this._searchTimeout(t)
              },
              focus: function() {
                ;(this.selectedItem = null), (this.previous = this._value())
              },
              blur: function(t) {
                return this.cancelBlur
                  ? void delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t))
              }
            }),
            this._initSource(),
            (this.menu = t('<ul>')
              .addClass('ui-autocomplete ui-front')
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu('instance')),
            this._on(this.menu.element, {
              mousedown: function(e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function() {
                    delete this.cancelBlur
                  })
                var i = this.menu.element[0]
                t(e.target).closest('.ui-menu-item').length ||
                  this._delay(function() {
                    var e = this
                    this.document.one('mousedown', function(n) {
                      n.target === e.element[0] ||
                        n.target === i ||
                        t.contains(i, n.target) ||
                        e.close()
                    })
                  })
              },
              menufocus: function(e, i) {
                var n, o
                return this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                  ? (this.menu.blur(),
                    void this.document.one('mousemove', function() {
                      t(e.target).trigger(e.originalEvent)
                    }))
                  : ((o = i.item.data('ui-autocomplete-item')),
                    !1 !== this._trigger('focus', e, { item: o }) &&
                      e.originalEvent &&
                      /^key/.test(e.originalEvent.type) &&
                      this._value(o.value),
                    (n = i.item.attr('aria-label') || o.value),
                    void (
                      n &&
                      t.trim(n).length &&
                      (this.liveRegion.children().hide(),
                      t('<div>')
                        .text(n)
                        .appendTo(this.liveRegion))
                    ))
              },
              menuselect: function(t, e) {
                var i = e.item.data('ui-autocomplete-item'),
                  n = this.previous
                this.element[0] !== this.document[0].activeElement &&
                  (this.element.focus(),
                  (this.previous = n),
                  this._delay(function() {
                    ;(this.previous = n), (this.selectedItem = i)
                  })),
                  !1 !== this._trigger('select', t, { item: i }) &&
                    this._value(i.value),
                  (this.term = this._value()),
                  this.close(t),
                  (this.selectedItem = i)
              }
            }),
            (this.liveRegion = t('<span>', {
              role: 'status',
              'aria-live': 'assertive',
              'aria-relevant': 'additions'
            })
              .addClass('ui-helper-hidden-accessible')
              .appendTo(this.document[0].body)),
            this._on(this.window, {
              beforeunload: function() {
                this.element.removeAttr('autocomplete')
              }
            })
        },
        _destroy: function() {
          clearTimeout(this.searching),
            this.element
              .removeClass('ui-autocomplete-input')
              .removeAttr('autocomplete'),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
          this._super(t, e),
            'source' === t && this._initSource(),
            'appendTo' === t && this.menu.element.appendTo(this._appendTo()),
            'disabled' === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
          var e = this.options.appendTo
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest('.ui-front')),
            e.length || (e = this.document[0].body),
            e
          )
        },
        _initSource: function() {
          var e,
            i,
            n = this
          t.isArray(this.options.source)
            ? ((e = this.options.source),
              (this.source = function(i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
              }))
            : 'string' == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function(e, o) {
                n.xhr && n.xhr.abort(),
                  (n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: 'json',
                    success: function(t) {
                      o(t)
                    },
                    error: function() {
                      o([])
                    }
                  }))
              }))
            : (this.source = this.options.source)
        },
        _searchTimeout: function(t) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function() {
              var e = this.term === this._value(),
                i = this.menu.element.is(':visible'),
                n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
              ;(e && (!e || i || n)) ||
                ((this.selectedItem = null), this.search(null, t))
            }, this.options.delay))
        },
        search: function(t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : this._trigger('search', e) !== !1
              ? this._search(t)
              : void 0
          )
        },
        _search: function(t) {
          this.pending++,
            this.element.addClass('ui-autocomplete-loading'),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response())
        },
        _response: function() {
          var e = ++this.requestIndex
          return t.proxy(function(t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending ||
                this.element.removeClass('ui-autocomplete-loading')
          }, this)
        },
        __response: function(t) {
          t && (t = this._normalize(t)),
            this._trigger('response', null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger('open'))
              : this._close()
        },
        close: function(t) {
          ;(this.cancelSearch = !0), this._close(t)
        },
        _close: function(t) {
          this.menu.element.is(':visible') &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger('close', t))
        },
        _change: function(t) {
          this.previous !== this._value() &&
            this._trigger('change', t, { item: this.selectedItem })
        },
        _normalize: function(e) {
          return e.length && e[0].label && e[0].value
            ? e
            : t.map(e, function(e) {
                return 'string' == typeof e
                  ? { label: e, value: e }
                  : t.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label
                    })
              })
        },
        _suggest: function(e) {
          var i = this.menu.element.empty()
          this._renderMenu(i, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
          var t = this.menu.element
          t.outerWidth(
            Math.max(t.width('').outerWidth() + 1, this.element.outerWidth())
          )
        },
        _renderMenu: function(e, i) {
          var n = this
          t.each(i, function(t, i) {
            n._renderItemData(e, i)
          })
        },
        _renderItemData: function(t, e) {
          return this._renderItem(t, e).data('ui-autocomplete-item', e)
        },
        _renderItem: function(e, i) {
          return t('<li>')
            .text(i.label)
            .appendTo(e)
        },
        _move: function(t, e) {
          return this.menu.element.is(':visible')
            ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e)
            : void this.search(null, e)
        },
        widget: function() {
          return this.menu.element
        },
        _value: function() {
          return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
          ;(this.isMultiLine && !this.menu.element.is(':visible')) ||
            (this._move(t, e), e.preventDefault())
        }
      }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
        },
        filter: function(e, i) {
          var n = new RegExp(t.ui.autocomplete.escapeRegex(i), 'i')
          return t.grep(e, function(t) {
            return n.test(t.label || t.value || t)
          })
        }
      }),
      t.widget('ui.autocomplete', t.ui.autocomplete, {
        options: {
          messages: {
            noResults: 'No search results.',
            results: function(t) {
              return (
                t +
                (t > 1 ? ' results are' : ' result is') +
                ' available, use up and down arrow keys to navigate.'
              )
            }
          }
        },
        __response: function(e) {
          var i
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t('<div>')
                .text(i)
                .appendTo(this.liveRegion))
        }
      }),
      t.ui.autocomplete
    )
  }),
  (function(t) {
    'function' == typeof define && define.amd
      ? define(['jquery', './core'], t)
      : t(jQuery)
  })(function(t) {
    function e(t) {
      for (var e, i; t.length && t[0] !== document; ) {
        if (
          ((e = t.css('position')),
          ('absolute' === e || 'relative' === e || 'fixed' === e) &&
            ((i = parseInt(t.css('zIndex'), 10)), !isNaN(i) && 0 !== i))
        )
          return i
        t = t.parent()
      }
      return 0
    }
    function i() {
      ;(this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = 'ui-datepicker-div'),
        (this._inlineClass = 'ui-datepicker-inline'),
        (this._appendClass = 'ui-datepicker-append'),
        (this._triggerClass = 'ui-datepicker-trigger'),
        (this._dialogClass = 'ui-datepicker-dialog'),
        (this._disableClass = 'ui-datepicker-disabled'),
        (this._unselectableClass = 'ui-datepicker-unselectable'),
        (this._currentClass = 'ui-datepicker-current-day'),
        (this._dayOverClass = 'ui-datepicker-days-cell-over'),
        (this.regional = []),
        (this.regional[''] = {
          closeText: 'Done',
          prevText: 'Prev',
          nextText: 'Next',
          currentText: 'Today',
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          weekHeader: 'Wk',
          dateFormat: 'mm/dd/yy',
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: ''
        }),
        (this._defaults = {
          showOn: 'focus',
          showAnim: 'fadeIn',
          showOptions: {},
          defaultDate: null,
          appendText: '',
          buttonText: '...',
          buttonImage: '',
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: 'c-10:c+10',
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: '+10',
          minDate: null,
          maxDate: null,
          duration: 'fast',
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: '',
          altFormat: '',
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1
        }),
        t.extend(this._defaults, this.regional['']),
        (this.regional.en = t.extend(!0, {}, this.regional[''])),
        (this.regional['en-US'] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = n(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ))
    }
    function n(e) {
      var i =
        'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a'
      return e
        .delegate(i, 'mouseout', function() {
          t(this).removeClass('ui-state-hover'),
            this.className.indexOf('ui-datepicker-prev') !== -1 &&
              t(this).removeClass('ui-datepicker-prev-hover'),
            this.className.indexOf('ui-datepicker-next') !== -1 &&
              t(this).removeClass('ui-datepicker-next-hover')
        })
        .delegate(i, 'mouseover', o)
    }
    function o() {
      t.datepicker._isDisabledDatepicker(
        s.inline ? s.dpDiv.parent()[0] : s.input[0]
      ) ||
        (t(this)
          .parents('.ui-datepicker-calendar')
          .find('a')
          .removeClass('ui-state-hover'),
        t(this).addClass('ui-state-hover'),
        this.className.indexOf('ui-datepicker-prev') !== -1 &&
          t(this).addClass('ui-datepicker-prev-hover'),
        this.className.indexOf('ui-datepicker-next') !== -1 &&
          t(this).addClass('ui-datepicker-next-hover'))
    }
    function r(e, i) {
      t.extend(e, i)
      for (var n in i) null == i[n] && (e[n] = i[n])
      return e
    }
    t.extend(t.ui, { datepicker: { version: '1.11.4' } })
    var s
    return (
      t.extend(i.prototype, {
        markerClassName: 'hasDatepicker',
        maxRows: 4,
        _widgetDatepicker: function() {
          return this.dpDiv
        },
        setDefaults: function(t) {
          return r(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
          var n, o, r
          ;(n = e.nodeName.toLowerCase()),
            (o = 'div' === n || 'span' === n),
            e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
            (r = this._newInst(t(e), o)),
            (r.settings = t.extend({}, i || {})),
            'input' === n
              ? this._connectDatepicker(e, r)
              : o && this._inlineDatepicker(e, r)
        },
        _newInst: function(e, i) {
          var o = e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1')
          return {
            id: o,
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: i,
            dpDiv: i
              ? n(
                  t(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                  )
                )
              : this.dpDiv
          }
        },
        _connectDatepicker: function(e, i) {
          var n = t(e)
          ;(i.append = t([])),
            (i.trigger = t([])),
            n.hasClass(this.markerClassName) ||
              (this._attachments(n, i),
              n
                .addClass(this.markerClassName)
                .keydown(this._doKeyDown)
                .keypress(this._doKeyPress)
                .keyup(this._doKeyUp),
              this._autoSize(i),
              t.data(e, 'datepicker', i),
              i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
          var n,
            o,
            r,
            s = this._get(i, 'appendText'),
            a = this._get(i, 'isRTL')
          i.append && i.append.remove(),
            s &&
              ((i.append = t(
                "<span class='" + this._appendClass + "'>" + s + '</span>'
              )),
              e[a ? 'before' : 'after'](i.append)),
            e.unbind('focus', this._showDatepicker),
            i.trigger && i.trigger.remove(),
            (n = this._get(i, 'showOn')),
            ('focus' !== n && 'both' !== n) || e.focus(this._showDatepicker),
            ('button' !== n && 'both' !== n) ||
              ((o = this._get(i, 'buttonText')),
              (r = this._get(i, 'buttonImage')),
              (i.trigger = t(
                this._get(i, 'buttonImageOnly')
                  ? t('<img/>')
                      .addClass(this._triggerClass)
                      .attr({ src: r, alt: o, title: o })
                  : t("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        r ? t('<img/>').attr({ src: r, alt: o, title: o }) : o
                      )
              )),
              e[a ? 'before' : 'after'](i.trigger),
              i.trigger.click(function() {
                return (
                  t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput === e[0]
                    ? t.datepicker._hideDatepicker()
                    : t.datepicker._datepickerShowing &&
                      t.datepicker._lastInput !== e[0]
                    ? (t.datepicker._hideDatepicker(),
                      t.datepicker._showDatepicker(e[0]))
                    : t.datepicker._showDatepicker(e[0]),
                  !1
                )
              }))
        },
        _autoSize: function(t) {
          if (this._get(t, 'autoSize') && !t.inline) {
            var e,
              i,
              n,
              o,
              r = new Date(2009, 11, 20),
              s = this._get(t, 'dateFormat')
            s.match(/[DM]/) &&
              ((e = function(t) {
                for (i = 0, n = 0, o = 0; o < t.length; o++)
                  t[o].length > i && ((i = t[o].length), (n = o))
                return n
              }),
              r.setMonth(
                e(
                  this._get(t, s.match(/MM/) ? 'monthNames' : 'monthNamesShort')
                )
              ),
              r.setDate(
                e(this._get(t, s.match(/DD/) ? 'dayNames' : 'dayNamesShort')) +
                  20 -
                  r.getDay()
              )),
              t.input.attr('size', this._formatDate(t, r).length)
          }
        },
        _inlineDatepicker: function(e, i) {
          var n = t(e)
          n.hasClass(this.markerClassName) ||
            (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, 'datepicker', i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css('display', 'block'))
        },
        _dialogDatepicker: function(e, i, n, o, s) {
          var a,
            l,
            c,
            u,
            d,
            h = this._dialogInst
          return (
            h ||
              ((this.uuid += 1),
              (a = 'dp' + this.uuid),
              (this._dialogInput = t(
                "<input type='text' id='" +
                  a +
                  "' style='position: absolute; top: -100px; width: 0px;'/>"
              )),
              this._dialogInput.keydown(this._doKeyDown),
              t('body').append(this._dialogInput),
              (h = this._dialogInst = this._newInst(this._dialogInput, !1)),
              (h.settings = {}),
              t.data(this._dialogInput[0], 'datepicker', h)),
            r(h.settings, o || {}),
            (i = i && i.constructor === Date ? this._formatDate(h, i) : i),
            this._dialogInput.val(i),
            (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
            this._pos ||
              ((l = document.documentElement.clientWidth),
              (c = document.documentElement.clientHeight),
              (u =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (d =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [l / 2 - 100 + u, c / 2 - 150 + d])),
            this._dialogInput
              .css('left', this._pos[0] + 20 + 'px')
              .css('top', this._pos[1] + 'px'),
            (h.settings.onSelect = n),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], 'datepicker', h),
            this
          )
        },
        _destroyDatepicker: function(e) {
          var i,
            n = t(e),
            o = t.data(e, 'datepicker')
          n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            t.removeData(e, 'datepicker'),
            'input' === i
              ? (o.append.remove(),
                o.trigger.remove(),
                n
                  .removeClass(this.markerClassName)
                  .unbind('focus', this._showDatepicker)
                  .unbind('keydown', this._doKeyDown)
                  .unbind('keypress', this._doKeyPress)
                  .unbind('keyup', this._doKeyUp))
              : ('div' !== i && 'span' !== i) ||
                n.removeClass(this.markerClassName).empty(),
            s === o && (s = null))
        },
        _enableDatepicker: function(e) {
          var i,
            n,
            o = t(e),
            r = t.data(e, 'datepicker')
          o.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            'input' === i
              ? ((e.disabled = !1),
                r.trigger
                  .filter('button')
                  .each(function() {
                    this.disabled = !1
                  })
                  .end()
                  .filter('img')
                  .css({ opacity: '1.0', cursor: '' }))
              : ('div' !== i && 'span' !== i) ||
                ((n = o.children('.' + this._inlineClass)),
                n.children().removeClass('ui-state-disabled'),
                n
                  .find('select.ui-datepicker-month, select.ui-datepicker-year')
                  .prop('disabled', !1)),
            (this._disabledInputs = t.map(this._disabledInputs, function(t) {
              return t === e ? null : t
            })))
        },
        _disableDatepicker: function(e) {
          var i,
            n,
            o = t(e),
            r = t.data(e, 'datepicker')
          o.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            'input' === i
              ? ((e.disabled = !0),
                r.trigger
                  .filter('button')
                  .each(function() {
                    this.disabled = !0
                  })
                  .end()
                  .filter('img')
                  .css({ opacity: '0.5', cursor: 'default' }))
              : ('div' !== i && 'span' !== i) ||
                ((n = o.children('.' + this._inlineClass)),
                n.children().addClass('ui-state-disabled'),
                n
                  .find('select.ui-datepicker-month, select.ui-datepicker-year')
                  .prop('disabled', !0)),
            (this._disabledInputs = t.map(this._disabledInputs, function(t) {
              return t === e ? null : t
            })),
            (this._disabledInputs[this._disabledInputs.length] = e))
        },
        _isDisabledDatepicker: function(t) {
          if (!t) return !1
          for (var e = 0; e < this._disabledInputs.length; e++)
            if (this._disabledInputs[e] === t) return !0
          return !1
        },
        _getInst: function(e) {
          try {
            return t.data(e, 'datepicker')
          } catch (t) {
            throw 'Missing instance data for this datepicker'
          }
        },
        _optionDatepicker: function(e, i, n) {
          var o,
            s,
            a,
            l,
            c = this._getInst(e)
          return 2 === arguments.length && 'string' == typeof i
            ? 'defaults' === i
              ? t.extend({}, t.datepicker._defaults)
              : c
              ? 'all' === i
                ? t.extend({}, c.settings)
                : this._get(c, i)
              : null
            : ((o = i || {}),
              'string' == typeof i && ((o = {}), (o[i] = n)),
              void (
                c &&
                (this._curInst === c && this._hideDatepicker(),
                (s = this._getDateDatepicker(e, !0)),
                (a = this._getMinMaxDate(c, 'min')),
                (l = this._getMinMaxDate(c, 'max')),
                r(c.settings, o),
                null !== a &&
                  void 0 !== o.dateFormat &&
                  void 0 === o.minDate &&
                  (c.settings.minDate = this._formatDate(c, a)),
                null !== l &&
                  void 0 !== o.dateFormat &&
                  void 0 === o.maxDate &&
                  (c.settings.maxDate = this._formatDate(c, l)),
                'disabled' in o &&
                  (o.disabled
                    ? this._disableDatepicker(e)
                    : this._enableDatepicker(e)),
                this._attachments(t(e), c),
                this._autoSize(c),
                this._setDate(c, s),
                this._updateAlternate(c),
                this._updateDatepicker(c))
              ))
        },
        _changeDatepicker: function(t, e, i) {
          this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
          var e = this._getInst(t)
          e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
          var i = this._getInst(t)
          i &&
            (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
          var i = this._getInst(t)
          return (
            i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
          )
        },
        _doKeyDown: function(e) {
          var i,
            n,
            o,
            r = t.datepicker._getInst(e.target),
            s = !0,
            a = r.dpDiv.is('.ui-datepicker-rtl')
          if (((r._keyEvent = !0), t.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), (s = !1)
                break
              case 13:
                return (
                  (o = t(
                    'td.' +
                      t.datepicker._dayOverClass +
                      ':not(.' +
                      t.datepicker._currentClass +
                      ')',
                    r.dpDiv
                  )),
                  o[0] &&
                    t.datepicker._selectDay(
                      e.target,
                      r.selectedMonth,
                      r.selectedYear,
                      o[0]
                    ),
                  (i = t.datepicker._get(r, 'onSelect')),
                  i
                    ? ((n = t.datepicker._formatDate(r)),
                      i.apply(r.input ? r.input[0] : null, [n, r]))
                    : t.datepicker._hideDatepicker(),
                  !1
                )
              case 27:
                t.datepicker._hideDatepicker()
                break
              case 33:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(r, 'stepBigMonths')
                    : -t.datepicker._get(r, 'stepMonths'),
                  'M'
                )
                break
              case 34:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(r, 'stepBigMonths')
                    : +t.datepicker._get(r, 'stepMonths'),
                  'M'
                )
                break
              case 35:
                ;(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                  (s = e.ctrlKey || e.metaKey)
                break
              case 36:
                ;(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                  (s = e.ctrlKey || e.metaKey)
                break
              case 37:
                ;(e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? 1 : -1, 'D'),
                  (s = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? -t.datepicker._get(r, 'stepBigMonths')
                        : -t.datepicker._get(r, 'stepMonths'),
                      'M'
                    )
                break
              case 38:
                ;(e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, -7, 'D'),
                  (s = e.ctrlKey || e.metaKey)
                break
              case 39:
                ;(e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? -1 : 1, 'D'),
                  (s = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? +t.datepicker._get(r, 'stepBigMonths')
                        : +t.datepicker._get(r, 'stepMonths'),
                      'M'
                    )
                break
              case 40:
                ;(e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, 7, 'D'),
                  (s = e.ctrlKey || e.metaKey)
                break
              default:
                s = !1
            }
          else
            36 === e.keyCode && e.ctrlKey
              ? t.datepicker._showDatepicker(this)
              : (s = !1)
          s && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
          var i,
            n,
            o = t.datepicker._getInst(e.target)
          if (t.datepicker._get(o, 'constrainInput'))
            return (
              (i = t.datepicker._possibleChars(
                t.datepicker._get(o, 'dateFormat')
              )),
              (n = String.fromCharCode(
                null == e.charCode ? e.keyCode : e.charCode
              )),
              e.ctrlKey || e.metaKey || n < ' ' || !i || i.indexOf(n) > -1
            )
        },
        _doKeyUp: function(e) {
          var i,
            n = t.datepicker._getInst(e.target)
          if (n.input.val() !== n.lastVal)
            try {
              ;(i = t.datepicker.parseDate(
                t.datepicker._get(n, 'dateFormat'),
                n.input ? n.input.val() : null,
                t.datepicker._getFormatConfig(n)
              )),
                i &&
                  (t.datepicker._setDateFromField(n),
                  t.datepicker._updateAlternate(n),
                  t.datepicker._updateDatepicker(n))
            } catch (t) {}
          return !0
        },
        _showDatepicker: function(i) {
          if (
            ((i = i.target || i),
            'input' !== i.nodeName.toLowerCase() &&
              (i = t('input', i.parentNode)[0]),
            !t.datepicker._isDisabledDatepicker(i) &&
              t.datepicker._lastInput !== i)
          ) {
            var n, o, s, a, l, c, u
            ;(n = t.datepicker._getInst(i)),
              t.datepicker._curInst &&
                t.datepicker._curInst !== n &&
                (t.datepicker._curInst.dpDiv.stop(!0, !0),
                n &&
                  t.datepicker._datepickerShowing &&
                  t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
              (o = t.datepicker._get(n, 'beforeShow')),
              (s = o ? o.apply(i, [i, n]) : {}),
              s !== !1 &&
                (r(n.settings, s),
                (n.lastVal = null),
                (t.datepicker._lastInput = i),
                t.datepicker._setDateFromField(n),
                t.datepicker._inDialog && (i.value = ''),
                t.datepicker._pos ||
                  ((t.datepicker._pos = t.datepicker._findPos(i)),
                  (t.datepicker._pos[1] += i.offsetHeight)),
                (a = !1),
                t(i)
                  .parents()
                  .each(function() {
                    return (a |= 'fixed' === t(this).css('position')), !a
                  }),
                (l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
                (t.datepicker._pos = null),
                n.dpDiv.empty(),
                n.dpDiv.css({
                  position: 'absolute',
                  display: 'block',
                  top: '-1000px'
                }),
                t.datepicker._updateDatepicker(n),
                (l = t.datepicker._checkOffset(n, l, a)),
                n.dpDiv.css({
                  position:
                    t.datepicker._inDialog && t.blockUI
                      ? 'static'
                      : a
                      ? 'fixed'
                      : 'absolute',
                  display: 'none',
                  left: l.left + 'px',
                  top: l.top + 'px'
                }),
                n.inline ||
                  ((c = t.datepicker._get(n, 'showAnim')),
                  (u = t.datepicker._get(n, 'duration')),
                  n.dpDiv.css('z-index', e(t(i)) + 1),
                  (t.datepicker._datepickerShowing = !0),
                  t.effects && t.effects.effect[c]
                    ? n.dpDiv.show(c, t.datepicker._get(n, 'showOptions'), u)
                    : n.dpDiv[c || 'show'](c ? u : null),
                  t.datepicker._shouldFocusInput(n) && n.input.focus(),
                  (t.datepicker._curInst = n)))
          }
        },
        _updateDatepicker: function(e) {
          ;(this.maxRows = 4),
            (s = e),
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e)
          var i,
            n = this._getNumberOfMonths(e),
            r = n[1],
            a = 17,
            l = e.dpDiv.find('.' + this._dayOverClass + ' a')
          l.length > 0 && o.apply(l.get(0)),
            e.dpDiv
              .removeClass(
                'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4'
              )
              .width(''),
            r > 1 &&
              e.dpDiv
                .addClass('ui-datepicker-multi-' + r)
                .css('width', a * r + 'em'),
            e.dpDiv[(1 !== n[0] || 1 !== n[1] ? 'add' : 'remove') + 'Class'](
              'ui-datepicker-multi'
            ),
            e.dpDiv[(this._get(e, 'isRTL') ? 'add' : 'remove') + 'Class'](
              'ui-datepicker-rtl'
            ),
            e === t.datepicker._curInst &&
              t.datepicker._datepickerShowing &&
              t.datepicker._shouldFocusInput(e) &&
              e.input.focus(),
            e.yearshtml &&
              ((i = e.yearshtml),
              setTimeout(function() {
                i === e.yearshtml &&
                  e.yearshtml &&
                  e.dpDiv
                    .find('select.ui-datepicker-year:first')
                    .replaceWith(e.yearshtml),
                  (i = e.yearshtml = null)
              }, 0))
        },
        _shouldFocusInput: function(t) {
          return (
            t.input &&
            t.input.is(':visible') &&
            !t.input.is(':disabled') &&
            !t.input.is(':focus')
          )
        },
        _checkOffset: function(e, i, n) {
          var o = e.dpDiv.outerWidth(),
            r = e.dpDiv.outerHeight(),
            s = e.input ? e.input.outerWidth() : 0,
            a = e.input ? e.input.outerHeight() : 0,
            l =
              document.documentElement.clientWidth +
              (n ? 0 : t(document).scrollLeft()),
            c =
              document.documentElement.clientHeight +
              (n ? 0 : t(document).scrollTop())
          return (
            (i.left -= this._get(e, 'isRTL') ? o - s : 0),
            (i.left -=
              n && i.left === e.input.offset().left
                ? t(document).scrollLeft()
                : 0),
            (i.top -=
              n && i.top === e.input.offset().top + a
                ? t(document).scrollTop()
                : 0),
            (i.left -= Math.min(
              i.left,
              i.left + o > l && l > o ? Math.abs(i.left + o - l) : 0
            )),
            (i.top -= Math.min(
              i.top,
              i.top + r > c && c > r ? Math.abs(r + a) : 0
            )),
            i
          )
        },
        _findPos: function(e) {
          for (
            var i, n = this._getInst(e), o = this._get(n, 'isRTL');
            e &&
            ('hidden' === e.type ||
              1 !== e.nodeType ||
              t.expr.filters.hidden(e));

          )
            e = e[o ? 'previousSibling' : 'nextSibling']
          return (i = t(e).offset()), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
          var i,
            n,
            o,
            r,
            s = this._curInst
          !s ||
            (e && s !== t.data(e, 'datepicker')) ||
            (this._datepickerShowing &&
              ((i = this._get(s, 'showAnim')),
              (n = this._get(s, 'duration')),
              (o = function() {
                t.datepicker._tidyDialog(s)
              }),
              t.effects && (t.effects.effect[i] || t.effects[i])
                ? s.dpDiv.hide(i, t.datepicker._get(s, 'showOptions'), n, o)
                : s.dpDiv[
                    'slideDown' === i
                      ? 'slideUp'
                      : 'fadeIn' === i
                      ? 'fadeOut'
                      : 'hide'
                  ](i ? n : null, o),
              i || o(),
              (this._datepickerShowing = !1),
              (r = this._get(s, 'onClose')),
              r &&
                r.apply(s.input ? s.input[0] : null, [
                  s.input ? s.input.val() : '',
                  s
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: 'absolute',
                  left: '0',
                  top: '-100px'
                }),
                t.blockUI && (t.unblockUI(), t('body').append(this.dpDiv))),
              (this._inDialog = !1)))
        },
        _tidyDialog: function(t) {
          t.dpDiv
            .removeClass(this._dialogClass)
            .unbind('.ui-datepicker-calendar')
        },
        _checkExternalClick: function(e) {
          if (t.datepicker._curInst) {
            var i = t(e.target),
              n = t.datepicker._getInst(i[0])
            ;((i[0].id === t.datepicker._mainDivId ||
              0 !== i.parents('#' + t.datepicker._mainDivId).length ||
              i.hasClass(t.datepicker.markerClassName) ||
              i.closest('.' + t.datepicker._triggerClass).length ||
              !t.datepicker._datepickerShowing ||
              (t.datepicker._inDialog && t.blockUI)) &&
              (!i.hasClass(t.datepicker.markerClassName) ||
                t.datepicker._curInst === n)) ||
              t.datepicker._hideDatepicker()
          }
        },
        _adjustDate: function(e, i, n) {
          var o = t(e),
            r = this._getInst(o[0])
          this._isDisabledDatepicker(o[0]) ||
            (this._adjustInstDate(
              r,
              i + ('M' === n ? this._get(r, 'showCurrentAtPos') : 0),
              n
            ),
            this._updateDatepicker(r))
        },
        _gotoToday: function(e) {
          var i,
            n = t(e),
            o = this._getInst(n[0])
          this._get(o, 'gotoCurrent') && o.currentDay
            ? ((o.selectedDay = o.currentDay),
              (o.drawMonth = o.selectedMonth = o.currentMonth),
              (o.drawYear = o.selectedYear = o.currentYear))
            : ((i = new Date()),
              (o.selectedDay = i.getDate()),
              (o.drawMonth = o.selectedMonth = i.getMonth()),
              (o.drawYear = o.selectedYear = i.getFullYear())),
            this._notifyChange(o),
            this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
          var o = t(e),
            r = this._getInst(o[0])
          ;(r['selected' + ('M' === n ? 'Month' : 'Year')] = r[
            'draw' + ('M' === n ? 'Month' : 'Year')
          ] = parseInt(i.options[i.selectedIndex].value, 10)),
            this._notifyChange(r),
            this._adjustDate(o)
        },
        _selectDay: function(e, i, n, o) {
          var r,
            s = t(e)
          t(o).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(s[0]) ||
            ((r = this._getInst(s[0])),
            (r.selectedDay = r.currentDay = t('a', o).html()),
            (r.selectedMonth = r.currentMonth = i),
            (r.selectedYear = r.currentYear = n),
            this._selectDate(
              e,
              this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)
            ))
        },
        _clearDate: function(e) {
          var i = t(e)
          this._selectDate(i, '')
        },
        _selectDate: function(e, i) {
          var n,
            o = t(e),
            r = this._getInst(o[0])
          ;(i = null != i ? i : this._formatDate(r)),
            r.input && r.input.val(i),
            this._updateAlternate(r),
            (n = this._get(r, 'onSelect')),
            n
              ? n.apply(r.input ? r.input[0] : null, [i, r])
              : r.input && r.input.trigger('change'),
            r.inline
              ? this._updateDatepicker(r)
              : (this._hideDatepicker(),
                (this._lastInput = r.input[0]),
                'object' != typeof r.input[0] && r.input.focus(),
                (this._lastInput = null))
        },
        _updateAlternate: function(e) {
          var i,
            n,
            o,
            r = this._get(e, 'altField')
          r &&
            ((i = this._get(e, 'altFormat') || this._get(e, 'dateFormat')),
            (n = this._getDate(e)),
            (o = this.formatDate(i, n, this._getFormatConfig(e))),
            t(r).each(function() {
              t(this).val(o)
            }))
        },
        noWeekends: function(t) {
          var e = t.getDay()
          return [e > 0 && e < 6, '']
        },
        iso8601Week: function(t) {
          var e,
            i = new Date(t.getTime())
          return (
            i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            (e = i.getTime()),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
          )
        },
        parseDate: function(e, i, n) {
          if (null == e || null == i) throw 'Invalid arguments'
          if (((i = 'object' == typeof i ? i.toString() : i + ''), '' === i))
            return null
          var o,
            r,
            s,
            a,
            l = 0,
            c =
              (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            u =
              'string' != typeof c
                ? c
                : (new Date().getFullYear() % 100) + parseInt(c, 10),
            d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
            h = (n ? n.dayNames : null) || this._defaults.dayNames,
            p =
              (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
            f = (n ? n.monthNames : null) || this._defaults.monthNames,
            m = -1,
            g = -1,
            v = -1,
            y = -1,
            w = !1,
            b = function(t) {
              var i = o + 1 < e.length && e.charAt(o + 1) === t
              return i && o++, i
            },
            _ = function(t) {
              var e = b(t),
                n =
                  '@' === t
                    ? 14
                    : '!' === t
                    ? 20
                    : 'y' === t && e
                    ? 4
                    : 'o' === t
                    ? 3
                    : 2,
                o = 'y' === t ? n : 1,
                r = new RegExp('^\\d{' + o + ',' + n + '}'),
                s = i.substring(l).match(r)
              if (!s) throw 'Missing number at position ' + l
              return (l += s[0].length), parseInt(s[0], 10)
            },
            k = function(e, n, o) {
              var r = -1,
                s = t
                  .map(b(e) ? o : n, function(t, e) {
                    return [[e, t]]
                  })
                  .sort(function(t, e) {
                    return -(t[1].length - e[1].length)
                  })
              if (
                (t.each(s, function(t, e) {
                  var n = e[1]
                  if (i.substr(l, n.length).toLowerCase() === n.toLowerCase())
                    return (r = e[0]), (l += n.length), !1
                }),
                r !== -1)
              )
                return r + 1
              throw 'Unknown name at position ' + l
            },
            x = function() {
              if (i.charAt(l) !== e.charAt(o))
                throw 'Unexpected literal at position ' + l
              l++
            }
          for (o = 0; o < e.length; o++)
            if (w) "'" !== e.charAt(o) || b("'") ? x() : (w = !1)
            else
              switch (e.charAt(o)) {
                case 'd':
                  v = _('d')
                  break
                case 'D':
                  k('D', d, h)
                  break
                case 'o':
                  y = _('o')
                  break
                case 'm':
                  g = _('m')
                  break
                case 'M':
                  g = k('M', p, f)
                  break
                case 'y':
                  m = _('y')
                  break
                case '@':
                  ;(a = new Date(_('@'))),
                    (m = a.getFullYear()),
                    (g = a.getMonth() + 1),
                    (v = a.getDate())
                  break
                case '!':
                  ;(a = new Date((_('!') - this._ticksTo1970) / 1e4)),
                    (m = a.getFullYear()),
                    (g = a.getMonth() + 1),
                    (v = a.getDate())
                  break
                case "'":
                  b("'") ? x() : (w = !0)
                  break
                default:
                  x()
              }
          if (l < i.length && ((s = i.substr(l)), !/^\s+/.test(s)))
            throw 'Extra/unparsed characters found in date: ' + s
          if (
            (m === -1
              ? (m = new Date().getFullYear())
              : m < 100 &&
                (m +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (m <= u ? 0 : -100)),
            y > -1)
          )
            for (g = 1, v = y; ; ) {
              if (((r = this._getDaysInMonth(m, g - 1)), v <= r)) break
              g++, (v -= r)
            }
          if (
            ((a = this._daylightSavingAdjust(new Date(m, g - 1, v))),
            a.getFullYear() !== m ||
              a.getMonth() + 1 !== g ||
              a.getDate() !== v)
          )
            throw 'Invalid date'
          return a
        },
        ATOM: 'yy-mm-dd',
        COOKIE: 'D, dd M yy',
        ISO_8601: 'yy-mm-dd',
        RFC_822: 'D, d M y',
        RFC_850: 'DD, dd-M-y',
        RFC_1036: 'D, d M y',
        RFC_1123: 'D, d M yy',
        RFC_2822: 'D, d M yy',
        RSS: 'D, d M y',
        TICKS: '!',
        TIMESTAMP: '@',
        W3C: 'yy-mm-dd',
        _ticksTo1970:
          24 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
          60 *
          60 *
          1e7,
        formatDate: function(t, e, i) {
          if (!e) return ''
          var n,
            o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            r = (i ? i.dayNames : null) || this._defaults.dayNames,
            s =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            a = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function(e) {
              var i = n + 1 < t.length && t.charAt(n + 1) === e
              return i && n++, i
            },
            c = function(t, e, i) {
              var n = '' + e
              if (l(t)) for (; n.length < i; ) n = '0' + n
              return n
            },
            u = function(t, e, i, n) {
              return l(t) ? n[e] : i[e]
            },
            d = '',
            h = !1
          if (e)
            for (n = 0; n < t.length; n++)
              if (h)
                "'" !== t.charAt(n) || l("'") ? (d += t.charAt(n)) : (h = !1)
              else
                switch (t.charAt(n)) {
                  case 'd':
                    d += c('d', e.getDate(), 2)
                    break
                  case 'D':
                    d += u('D', e.getDay(), o, r)
                    break
                  case 'o':
                    d += c(
                      'o',
                      Math.round(
                        (new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate()
                        ).getTime() -
                          new Date(e.getFullYear(), 0, 0).getTime()) /
                          864e5
                      ),
                      3
                    )
                    break
                  case 'm':
                    d += c('m', e.getMonth() + 1, 2)
                    break
                  case 'M':
                    d += u('M', e.getMonth(), s, a)
                    break
                  case 'y':
                    d += l('y')
                      ? e.getFullYear()
                      : (e.getYear() % 100 < 10 ? '0' : '') +
                        (e.getYear() % 100)
                    break
                  case '@':
                    d += e.getTime()
                    break
                  case '!':
                    d += 1e4 * e.getTime() + this._ticksTo1970
                    break
                  case "'":
                    l("'") ? (d += "'") : (h = !0)
                    break
                  default:
                    d += t.charAt(n)
                }
          return d
        },
        _possibleChars: function(t) {
          var e,
            i = '',
            n = !1,
            o = function(i) {
              var n = e + 1 < t.length && t.charAt(e + 1) === i
              return n && e++, n
            }
          for (e = 0; e < t.length; e++)
            if (n) "'" !== t.charAt(e) || o("'") ? (i += t.charAt(e)) : (n = !1)
            else
              switch (t.charAt(e)) {
                case 'd':
                case 'm':
                case 'y':
                case '@':
                  i += '0123456789'
                  break
                case 'D':
                case 'M':
                  return null
                case "'":
                  o("'") ? (i += "'") : (n = !0)
                  break
                default:
                  i += t.charAt(e)
              }
          return i
        },
        _get: function(t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, 'dateFormat'),
              n = (t.lastVal = t.input ? t.input.val() : null),
              o = this._getDefaultDate(t),
              r = o,
              s = this._getFormatConfig(t)
            try {
              r = this.parseDate(i, n, s) || o
            } catch (t) {
              n = e ? '' : n
            }
            ;(t.selectedDay = r.getDate()),
              (t.drawMonth = t.selectedMonth = r.getMonth()),
              (t.drawYear = t.selectedYear = r.getFullYear()),
              (t.currentDay = n ? r.getDate() : 0),
              (t.currentMonth = n ? r.getMonth() : 0),
              (t.currentYear = n ? r.getFullYear() : 0),
              this._adjustInstDate(t)
          }
        },
        _getDefaultDate: function(t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, 'defaultDate'), new Date())
          )
        },
        _determineDate: function(e, i, n) {
          var o = function(t) {
              var e = new Date()
              return e.setDate(e.getDate() + t), e
            },
            r = function(i) {
              try {
                return t.datepicker.parseDate(
                  t.datepicker._get(e, 'dateFormat'),
                  i,
                  t.datepicker._getFormatConfig(e)
                )
              } catch (t) {}
              for (
                var n =
                    (i.toLowerCase().match(/^c/)
                      ? t.datepicker._getDate(e)
                      : null) || new Date(),
                  o = n.getFullYear(),
                  r = n.getMonth(),
                  s = n.getDate(),
                  a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                  l = a.exec(i);
                l;

              ) {
                switch (l[2] || 'd') {
                  case 'd':
                  case 'D':
                    s += parseInt(l[1], 10)
                    break
                  case 'w':
                  case 'W':
                    s += 7 * parseInt(l[1], 10)
                    break
                  case 'm':
                  case 'M':
                    ;(r += parseInt(l[1], 10)),
                      (s = Math.min(s, t.datepicker._getDaysInMonth(o, r)))
                    break
                  case 'y':
                  case 'Y':
                    ;(o += parseInt(l[1], 10)),
                      (s = Math.min(s, t.datepicker._getDaysInMonth(o, r)))
                }
                l = a.exec(i)
              }
              return new Date(o, r, s)
            },
            s =
              null == i || '' === i
                ? n
                : 'string' == typeof i
                ? r(i)
                : 'number' == typeof i
                ? isNaN(i)
                  ? n
                  : o(i)
                : new Date(i.getTime())
          return (
            (s = s && 'Invalid Date' === s.toString() ? n : s),
            s &&
              (s.setHours(0),
              s.setMinutes(0),
              s.setSeconds(0),
              s.setMilliseconds(0)),
            this._daylightSavingAdjust(s)
          )
        },
        _daylightSavingAdjust: function(t) {
          return t
            ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
            : null
        },
        _setDate: function(t, e, i) {
          var n = !e,
            o = t.selectedMonth,
            r = t.selectedYear,
            s = this._restrictMinMax(t, this._determineDate(t, e, new Date()))
          ;(t.selectedDay = t.currentDay = s.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = s.getFullYear()),
            (o === t.selectedMonth && r === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? '' : this._formatDate(t))
        },
        _getDate: function(t) {
          var e =
            !t.currentYear || (t.input && '' === t.input.val())
              ? null
              : this._daylightSavingAdjust(
                  new Date(t.currentYear, t.currentMonth, t.currentDay)
                )
          return e
        },
        _attachHandlers: function(e) {
          var i = this._get(e, 'stepMonths'),
            n = '#' + e.id.replace(/\\\\/g, '\\')
          e.dpDiv.find('[data-handler]').map(function() {
            var e = {
              prev: function() {
                t.datepicker._adjustDate(n, -i, 'M')
              },
              next: function() {
                t.datepicker._adjustDate(n, +i, 'M')
              },
              hide: function() {
                t.datepicker._hideDatepicker()
              },
              today: function() {
                t.datepicker._gotoToday(n)
              },
              selectDay: function() {
                return (
                  t.datepicker._selectDay(
                    n,
                    +this.getAttribute('data-month'),
                    +this.getAttribute('data-year'),
                    this
                  ),
                  !1
                )
              },
              selectMonth: function() {
                return t.datepicker._selectMonthYear(n, this, 'M'), !1
              },
              selectYear: function() {
                return t.datepicker._selectMonthYear(n, this, 'Y'), !1
              }
            }
            t(this).bind(
              this.getAttribute('data-event'),
              e[this.getAttribute('data-handler')]
            )
          })
        },
        _generateHTML: function(t) {
          var e,
            i,
            n,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            w,
            b,
            _,
            k,
            x,
            C,
            T,
            S,
            $,
            D,
            E,
            A,
            M,
            j,
            P,
            I,
            N,
            L,
            H,
            F,
            B,
            R = new Date(),
            O = this._daylightSavingAdjust(
              new Date(R.getFullYear(), R.getMonth(), R.getDate())
            ),
            W = this._get(t, 'isRTL'),
            q = this._get(t, 'showButtonPanel'),
            z = this._get(t, 'hideIfNoPrevNext'),
            Y = this._get(t, 'navigationAsDateFormat'),
            U = this._getNumberOfMonths(t),
            X = this._get(t, 'showCurrentAtPos'),
            V = this._get(t, 'stepMonths'),
            K = 1 !== U[0] || 1 !== U[1],
            J = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9)
            ),
            G = this._getMinMaxDate(t, 'min'),
            Q = this._getMinMaxDate(t, 'max'),
            Z = t.drawMonth - X,
            tt = t.drawYear
          if ((Z < 0 && ((Z += 12), tt--), Q))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  Q.getFullYear(),
                  Q.getMonth() - U[0] * U[1] + 1,
                  Q.getDate()
                )
              ),
                e = G && e < G ? G : e;
              this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

            )
              Z--, Z < 0 && ((Z = 11), tt--)
          for (
            t.drawMonth = Z,
              t.drawYear = tt,
              i = this._get(t, 'prevText'),
              i = Y
                ? this.formatDate(
                    i,
                    this._daylightSavingAdjust(new Date(tt, Z - V, 1)),
                    this._getFormatConfig(t)
                  )
                : i,
              n = this._canAdjustMonth(t, -1, tt, Z)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (W ? 'e' : 'w') +
                  "'>" +
                  i +
                  '</span></a>'
                : z
                ? ''
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (W ? 'e' : 'w') +
                  "'>" +
                  i +
                  '</span></a>',
              o = this._get(t, 'nextText'),
              o = Y
                ? this.formatDate(
                    o,
                    this._daylightSavingAdjust(new Date(tt, Z + V, 1)),
                    this._getFormatConfig(t)
                  )
                : o,
              r = this._canAdjustMonth(t, 1, tt, Z)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  o +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (W ? 'w' : 'e') +
                  "'>" +
                  o +
                  '</span></a>'
                : z
                ? ''
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  o +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (W ? 'w' : 'e') +
                  "'>" +
                  o +
                  '</span></a>',
              s = this._get(t, 'currentText'),
              a = this._get(t, 'gotoCurrent') && t.currentDay ? J : O,
              s = Y ? this.formatDate(s, a, this._getFormatConfig(t)) : s,
              l = t.inline
                ? ''
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, 'closeText') +
                  '</button>',
              c = q
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (W ? l : '') +
                  (this._isInRange(t, a)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      s +
                      '</button>'
                    : '') +
                  (W ? '' : l) +
                  '</div>'
                : '',
              u = parseInt(this._get(t, 'firstDay'), 10),
              u = isNaN(u) ? 0 : u,
              d = this._get(t, 'showWeek'),
              h = this._get(t, 'dayNames'),
              p = this._get(t, 'dayNamesMin'),
              f = this._get(t, 'monthNames'),
              m = this._get(t, 'monthNamesShort'),
              g = this._get(t, 'beforeShowDay'),
              v = this._get(t, 'showOtherMonths'),
              y = this._get(t, 'selectOtherMonths'),
              w = this._getDefaultDate(t),
              b = '',
              k = 0;
            k < U[0];
            k++
          ) {
            for (x = '', this.maxRows = 4, C = 0; C < U[1]; C++) {
              if (
                ((T = this._daylightSavingAdjust(
                  new Date(tt, Z, t.selectedDay)
                )),
                (S = ' ui-corner-all'),
                ($ = ''),
                K)
              ) {
                if ((($ += "<div class='ui-datepicker-group"), U[1] > 1))
                  switch (C) {
                    case 0:
                      ;($ += ' ui-datepicker-group-first'),
                        (S = ' ui-corner-' + (W ? 'right' : 'left'))
                      break
                    case U[1] - 1:
                      ;($ += ' ui-datepicker-group-last'),
                        (S = ' ui-corner-' + (W ? 'left' : 'right'))
                      break
                    default:
                      ;($ += ' ui-datepicker-group-middle'), (S = '')
                  }
                $ += "'>"
              }
              for (
                $ +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  S +
                  "'>" +
                  (/all|left/.test(S) && 0 === k ? (W ? r : n) : '') +
                  (/all|right/.test(S) && 0 === k ? (W ? n : r) : '') +
                  this._generateMonthYearHeader(
                    t,
                    Z,
                    tt,
                    G,
                    Q,
                    k > 0 || C > 0,
                    f,
                    m
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  D = d
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, 'weekHeader') +
                      '</th>'
                    : '',
                  _ = 0;
                _ < 7;
                _++
              )
                (E = (_ + u) % 7),
                  (D +=
                    "<th scope='col'" +
                    ((_ + u + 6) % 7 >= 5
                      ? " class='ui-datepicker-week-end'"
                      : '') +
                    "><span title='" +
                    h[E] +
                    "'>" +
                    p[E] +
                    '</span></th>')
              for (
                $ += D + '</tr></thead><tbody>',
                  A = this._getDaysInMonth(tt, Z),
                  tt === t.selectedYear &&
                    Z === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, A)),
                  M = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7,
                  j = Math.ceil((M + A) / 7),
                  P = K && this.maxRows > j ? this.maxRows : j,
                  this.maxRows = P,
                  I = this._daylightSavingAdjust(new Date(tt, Z, 1 - M)),
                  N = 0;
                N < P;
                N++
              ) {
                for (
                  $ += '<tr>',
                    L = d
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, 'calculateWeek')(I) +
                        '</td>'
                      : '',
                    _ = 0;
                  _ < 7;
                  _++
                )
                  (H = g
                    ? g.apply(t.input ? t.input[0] : null, [I])
                    : [!0, '']),
                    (F = I.getMonth() !== Z),
                    (B = (F && !y) || !H[0] || (G && I < G) || (Q && I > Q)),
                    (L +=
                      "<td class='" +
                      ((_ + u + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                      (F ? ' ui-datepicker-other-month' : '') +
                      ((I.getTime() === T.getTime() &&
                        Z === t.selectedMonth &&
                        t._keyEvent) ||
                      (w.getTime() === I.getTime() &&
                        w.getTime() === T.getTime())
                        ? ' ' + this._dayOverClass
                        : '') +
                      (B
                        ? ' ' + this._unselectableClass + ' ui-state-disabled'
                        : '') +
                      (F && !v
                        ? ''
                        : ' ' +
                          H[1] +
                          (I.getTime() === J.getTime()
                            ? ' ' + this._currentClass
                            : '') +
                          (I.getTime() === O.getTime()
                            ? ' ui-datepicker-today'
                            : '')) +
                      "'" +
                      ((F && !v) || !H[2]
                        ? ''
                        : " title='" + H[2].replace(/'/g, '&#39;') + "'") +
                      (B
                        ? ''
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          I.getMonth() +
                          "' data-year='" +
                          I.getFullYear() +
                          "'") +
                      '>' +
                      (F && !v
                        ? '&#xa0;'
                        : B
                        ? "<span class='ui-state-default'>" +
                          I.getDate() +
                          '</span>'
                        : "<a class='ui-state-default" +
                          (I.getTime() === O.getTime()
                            ? ' ui-state-highlight'
                            : '') +
                          (I.getTime() === J.getTime()
                            ? ' ui-state-active'
                            : '') +
                          (F ? ' ui-priority-secondary' : '') +
                          "' href='#'>" +
                          I.getDate() +
                          '</a>') +
                      '</td>'),
                    I.setDate(I.getDate() + 1),
                    (I = this._daylightSavingAdjust(I))
                $ += L + '</tr>'
              }
              Z++,
                Z > 11 && ((Z = 0), tt++),
                ($ +=
                  '</tbody></table>' +
                  (K
                    ? '</div>' +
                      (U[0] > 0 && C === U[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : '')
                    : '')),
                (x += $)
            }
            b += x
          }
          return (b += c), (t._keyEvent = !1), b
        },
        _generateMonthYearHeader: function(t, e, i, n, o, r, s, a) {
          var l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g = this._get(t, 'changeMonth'),
            v = this._get(t, 'changeYear'),
            y = this._get(t, 'showMonthAfterYear'),
            w = "<div class='ui-datepicker-title'>",
            b = ''
          if (r || !g)
            b += "<span class='ui-datepicker-month'>" + s[e] + '</span>'
          else {
            for (
              l = n && n.getFullYear() === i,
                c = o && o.getFullYear() === i,
                b +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0;
              u < 12;
              u++
            )
              (!l || u >= n.getMonth()) &&
                (!c || u <= o.getMonth()) &&
                (b +=
                  "<option value='" +
                  u +
                  "'" +
                  (u === e ? " selected='selected'" : '') +
                  '>' +
                  a[u] +
                  '</option>')
            b += '</select>'
          }
          if ((y || (w += b + (!r && g && v ? '' : '&#xa0;')), !t.yearshtml))
            if (((t.yearshtml = ''), r || !v))
              w += "<span class='ui-datepicker-year'>" + i + '</span>'
            else {
              for (
                d = this._get(t, 'yearRange').split(':'),
                  h = new Date().getFullYear(),
                  p = function(t) {
                    var e = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                      ? h + parseInt(t, 10)
                      : parseInt(t, 10)
                    return isNaN(e) ? h : e
                  },
                  f = p(d[0]),
                  m = Math.max(f, p(d[1] || '')),
                  f = n ? Math.max(f, n.getFullYear()) : f,
                  m = o ? Math.min(m, o.getFullYear()) : m,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                f <= m;
                f++
              )
                t.yearshtml +=
                  "<option value='" +
                  f +
                  "'" +
                  (f === i ? " selected='selected'" : '') +
                  '>' +
                  f +
                  '</option>'
              ;(t.yearshtml += '</select>'),
                (w += t.yearshtml),
                (t.yearshtml = null)
            }
          return (
            (w += this._get(t, 'yearSuffix')),
            y && (w += (!r && g && v ? '' : '&#xa0;') + b),
            (w += '</div>')
          )
        },
        _adjustInstDate: function(t, e, i) {
          var n = t.drawYear + ('Y' === i ? e : 0),
            o = t.drawMonth + ('M' === i ? e : 0),
            r =
              Math.min(t.selectedDay, this._getDaysInMonth(n, o)) +
              ('D' === i ? e : 0),
            s = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(n, o, r))
            )
          ;(t.selectedDay = s.getDate()),
            (t.drawMonth = t.selectedMonth = s.getMonth()),
            (t.drawYear = t.selectedYear = s.getFullYear()),
            ('M' !== i && 'Y' !== i) || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
          var i = this._getMinMaxDate(t, 'min'),
            n = this._getMinMaxDate(t, 'max'),
            o = i && e < i ? i : e
          return n && o > n ? n : o
        },
        _notifyChange: function(t) {
          var e = this._get(t, 'onChangeMonthYear')
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t
            ])
        },
        _getNumberOfMonths: function(t) {
          var e = this._get(t, 'numberOfMonths')
          return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
          return this._determineDate(t, this._get(t, e + 'Date'), null)
        },
        _getDaysInMonth: function(t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
          return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, n) {
          var o = this._getNumberOfMonths(t),
            r = this._daylightSavingAdjust(
              new Date(i, n + (e < 0 ? e : o[0] * o[1]), 1)
            )
          return (
            e < 0 &&
              r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())),
            this._isInRange(t, r)
          )
        },
        _isInRange: function(t, e) {
          var i,
            n,
            o = this._getMinMaxDate(t, 'min'),
            r = this._getMinMaxDate(t, 'max'),
            s = null,
            a = null,
            l = this._get(t, 'yearRange')
          return (
            l &&
              ((i = l.split(':')),
              (n = new Date().getFullYear()),
              (s = parseInt(i[0], 10)),
              (a = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (s += n),
              i[1].match(/[+\-].*/) && (a += n)),
            (!o || e.getTime() >= o.getTime()) &&
              (!r || e.getTime() <= r.getTime()) &&
              (!s || e.getFullYear() >= s) &&
              (!a || e.getFullYear() <= a)
          )
        },
        _getFormatConfig: function(t) {
          var e = this._get(t, 'shortYearCutoff')
          return (
            (e =
              'string' != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            {
              shortYearCutoff: e,
              dayNamesShort: this._get(t, 'dayNamesShort'),
              dayNames: this._get(t, 'dayNames'),
              monthNamesShort: this._get(t, 'monthNamesShort'),
              monthNames: this._get(t, 'monthNames')
            }
          )
        },
        _formatDate: function(t, e, i, n) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear))
          var o = e
            ? 'object' == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(n, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              )
          return this.formatDate(
            this._get(t, 'dateFormat'),
            o,
            this._getFormatConfig(t)
          )
        }
      }),
      (t.fn.datepicker = function(e) {
        if (!this.length) return this
        t.datepicker.initialized ||
          (t(document).mousedown(t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t('#' + t.datepicker._mainDivId).length &&
            t('body').append(t.datepicker.dpDiv)
        var i = Array.prototype.slice.call(arguments, 1)
        return 'string' != typeof e ||
          ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
          ? 'option' === e &&
            2 === arguments.length &&
            'string' == typeof arguments[1]
            ? t.datepicker['_' + e + 'Datepicker'].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function() {
                'string' == typeof e
                  ? t.datepicker['_' + e + 'Datepicker'].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e)
              })
          : t.datepicker['_' + e + 'Datepicker'].apply(
              t.datepicker,
              [this[0]].concat(i)
            )
      }),
      (t.datepicker = new i()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = '1.11.4'),
      t.datepicker
    )
  }),
  (function(t) {
    function e(t, e) {
      if (!(t.originalEvent.touches.length > 1)) {
        t.preventDefault()
        var i = t.originalEvent.changedTouches[0],
          n = document.createEvent('MouseEvents')
        n.initMouseEvent(
          e,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          t.target.dispatchEvent(n)
      }
    }
    if (((t.support.touch = 'ontouchend' in document), t.support.touch)) {
      var i,
        n = t.ui.mouse.prototype,
        o = n._mouseInit
      ;(n._touchStart = function(t) {
        var n = this
        !i &&
          n._mouseCapture(t.originalEvent.changedTouches[0]) &&
          ((i = !0),
          (n._touchMoved = !1),
          e(t, 'mouseover'),
          e(t, 'mousemove'),
          e(t, 'mousedown'))
      }),
        (n._touchMove = function(t) {
          i && ((this._touchMoved = !0), e(t, 'mousemove'))
        }),
        (n._touchEnd = function(t) {
          i &&
            (e(t, 'mouseup'),
            e(t, 'mouseout'),
            this._touchMoved || e(t, 'click'),
            (i = !1))
        }),
        (n._mouseInit = function() {
          var e = this
          e.element
            .bind('touchstart', t.proxy(e, '_touchStart'))
            .bind('touchmove', t.proxy(e, '_touchMove'))
            .bind('touchend', t.proxy(e, '_touchEnd')),
            o.call(e)
        })
    }
  })(jQuery),
  (function(t) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : 'undefined' != typeof exports
      ? (module.exports = t(require('jquery')))
      : t(jQuery)
  })(function(t) {
    'use strict'
    var e = window.Slick || {}
    ;(e = (function() {
      function e(e, n) {
        var o,
          r = this
        ;(r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(e),
          appendDots: t(e),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function(e, i) {
            return t(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(i + 1)
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
          }),
          t.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = 'hidden'),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = t(e)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = 'visibilitychange'),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = t(e).data('slick') || {}),
          (r.options = t.extend({}, r.defaults, n, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          'undefined' != typeof document.mozHidden
            ? ((r.hidden = 'mozHidden'),
              (r.visibilityChange = 'mozvisibilitychange'))
            : 'undefined' != typeof document.webkitHidden &&
              ((r.hidden = 'webkitHidden'),
              (r.visibilityChange = 'webkitvisibilitychange')),
          (r.autoPlay = t.proxy(r.autoPlay, r)),
          (r.autoPlayClear = t.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = t.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = t.proxy(r.changeSlide, r)),
          (r.clickHandler = t.proxy(r.clickHandler, r)),
          (r.selectHandler = t.proxy(r.selectHandler, r)),
          (r.setPosition = t.proxy(r.setPosition, r)),
          (r.swipeHandler = t.proxy(r.swipeHandler, r)),
          (r.dragHandler = t.proxy(r.dragHandler, r)),
          (r.keyHandler = t.proxy(r.keyHandler, r)),
          (r.instanceUid = i++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0)
      }
      var i = 0
      return e
    })()),
      (e.prototype.activateADA = function() {
        var t = this
        t.$slideTrack
          .find('.slick-active')
          .attr({ 'aria-hidden': 'false' })
          .find('a, input, button, select')
          .attr({ tabindex: '0' })
      }),
      (e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var o = this
        if ('boolean' == typeof i) (n = i), (i = null)
        else if (i < 0 || i >= o.slideCount) return !1
        o.unload(),
          'number' == typeof i
            ? 0 === i && 0 === o.$slides.length
              ? t(e).appendTo(o.$slideTrack)
              : n
              ? t(e).insertBefore(o.$slides.eq(i))
              : t(e).insertAfter(o.$slides.eq(i))
            : n === !0
            ? t(e).prependTo(o.$slideTrack)
            : t(e).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function(e, i) {
            t(i).attr('data-slick-index', e)
          }),
          (o.$slidesCache = o.$slides),
          o.reinit()
      }),
      (e.prototype.animateHeight = function() {
        var t = this
        if (
          1 === t.options.slidesToShow &&
          t.options.adaptiveHeight === !0 &&
          t.options.vertical === !1
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0)
          t.$list.animate({ height: e }, t.options.speed)
        }
      }),
      (e.prototype.animateSlide = function(e, i) {
        var n = {},
          o = this
        o.animateHeight(),
          o.options.rtl === !0 && o.options.vertical === !1 && (e = -e),
          o.transformsEnabled === !1
            ? o.options.vertical === !1
              ? o.$slideTrack.animate(
                  { left: e },
                  o.options.speed,
                  o.options.easing,
                  i
                )
              : o.$slideTrack.animate(
                  { top: e },
                  o.options.speed,
                  o.options.easing,
                  i
                )
            : o.cssTransitions === !1
            ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
              t({ animStart: o.currentLeft }).animate(
                { animStart: e },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function(t) {
                    ;(t = Math.ceil(t)),
                      o.options.vertical === !1
                        ? ((n[o.animType] = 'translate(' + t + 'px, 0px)'),
                          o.$slideTrack.css(n))
                        : ((n[o.animType] = 'translate(0px,' + t + 'px)'),
                          o.$slideTrack.css(n))
                  },
                  complete: function() {
                    i && i.call()
                  }
                }
              ))
            : (o.applyTransition(),
              (e = Math.ceil(e)),
              o.options.vertical === !1
                ? (n[o.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
                : (n[o.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
              o.$slideTrack.css(n),
              i &&
                setTimeout(function() {
                  o.disableTransition(), i.call()
                }, o.options.speed))
      }),
      (e.prototype.getNavTarget = function() {
        var e = this,
          i = e.options.asNavFor
        return i && null !== i && (i = t(i).not(e.$slider)), i
      }),
      (e.prototype.asNavFor = function(e) {
        var i = this,
          n = i.getNavTarget()
        null !== n &&
          'object' == typeof n &&
          n.each(function() {
            var i = t(this).slick('getSlick')
            i.unslicked || i.slideHandler(e, !0)
          })
      }),
      (e.prototype.applyTransition = function(t) {
        var e = this,
          i = {}
        e.options.fade === !1
          ? (i[e.transitionType] =
              e.transformType +
              ' ' +
              e.options.speed +
              'ms ' +
              e.options.cssEase)
          : (i[e.transitionType] =
              'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
          e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
      }),
      (e.prototype.autoPlay = function() {
        var t = this
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ))
      }),
      (e.prototype.autoPlayClear = function() {
        var t = this
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
      }),
      (e.prototype.autoPlayIterator = function() {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (t.options.infinite === !1 &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 === 0 && (t.direction = 1))),
          t.slideHandler(e))
      }),
      (e.prototype.buildArrows = function() {
        var e = this
        e.options.arrows === !0 &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass('slick-arrow')),
          (e.$nextArrow = t(e.options.nextArrow).addClass('slick-arrow')),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass('slick-hidden')
                .removeAttr('aria-hidden tabindex'),
              e.$nextArrow
                .removeClass('slick-hidden')
                .removeAttr('aria-hidden tabindex'),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              e.options.infinite !== !0 &&
                e.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass('slick-hidden')
                .attr({ 'aria-disabled': 'true', tabindex: '-1' }))
      }),
      (e.prototype.buildDots = function() {
        var e,
          i,
          n = this
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
          for (
            n.$slider.addClass('slick-dotted'),
              i = t('<ul />').addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            i.append(
              t('<li />').append(n.options.customPaging.call(this, n, e))
            )
          ;(n.$dots = i.appendTo(n.options.appendDots)),
            n.$dots
              .find('li')
              .first()
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
        }
      }),
      (e.prototype.buildOut = function() {
        var e = this
        ;(e.$slides = e.$slider
          .children(e.options.slide + ':not(.slick-cloned)')
          .addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function(e, i) {
            t(i)
              .attr('data-slick-index', e)
              .data('originalStyling', t(i).attr('style') || '')
          }),
          e.$slider.addClass('slick-slider'),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          e.$slideTrack.css('opacity', 0),
          (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
            (e.options.slidesToScroll = 1),
          t('img[data-lazy]', e.$slider)
            .not('[src]')
            .addClass('slick-loading'),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            'number' == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.options.draggable === !0 && e.$list.addClass('draggable')
      }),
      (e.prototype.buildRows = function() {
        var t,
          e,
          i,
          n,
          o,
          r,
          s,
          a = this
        if (
          ((n = document.createDocumentFragment()),
          (r = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              t = 0;
            t < o;
            t++
          ) {
            var l = document.createElement('div')
            for (e = 0; e < a.options.rows; e++) {
              var c = document.createElement('div')
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var u = t * s + (e * a.options.slidesPerRow + i)
                r.get(u) && c.appendChild(r.get(u))
              }
              l.appendChild(c)
            }
            n.appendChild(l)
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + '%',
                display: 'inline-block'
              })
        }
      }),
      (e.prototype.checkResponsive = function(e, i) {
        var n,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || t(window).width()
        if (
          ('window' === s.respondTo
            ? (r = c)
            : 'slider' === s.respondTo
            ? (r = l)
            : 'min' === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          o = null
          for (n in s.breakpoints)
            s.breakpoints.hasOwnProperty(n) &&
              (s.originalSettings.mobileFirst === !1
                ? r < s.breakpoints[n] && (o = s.breakpoints[n])
                : r > s.breakpoints[n] && (o = s.breakpoints[n]))
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || i) &&
                ((s.activeBreakpoint = o),
                'unslick' === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = t.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    e === !0 && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (a = o))
              : ((s.activeBreakpoint = o),
                'unslick' === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = t.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    e === !0 && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              e === !0 && (s.currentSlide = s.options.initialSlide),
              s.refresh(e),
              (a = o)),
            e || a === !1 || s.$slider.trigger('breakpoint', [s, a])
        }
      }),
      (e.prototype.changeSlide = function(e, i) {
        var n,
          o,
          r,
          s = this,
          a = t(e.currentTarget)
        switch (
          (a.is('a') && e.preventDefault(),
          a.is('li') || (a = a.closest('li')),
          (r = s.slideCount % s.options.slidesToScroll !== 0),
          (n = r
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
          e.data.message)
        ) {
          case 'previous':
            ;(o =
              0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide - o, !1, i)
            break
          case 'next':
            ;(o = 0 === n ? s.options.slidesToScroll : n),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide + o, !1, i)
            break
          case 'index':
            var l =
              0 === e.data.index
                ? 0
                : e.data.index || a.index() * s.options.slidesToScroll
            s.slideHandler(s.checkNavigable(l), !1, i),
              a.children().trigger('focus')
            break
          default:
            return
        }
      }),
      (e.prototype.checkNavigable = function(t) {
        var e,
          i,
          n = this
        if (((e = n.getNavigableIndexes()), (i = 0), t > e[e.length - 1]))
          t = e[e.length - 1]
        else
          for (var o in e) {
            if (t < e[o]) {
              t = i
              break
            }
            i = e[o]
          }
        return t
      }),
      (e.prototype.cleanUpEvents = function() {
        var e = this
        e.options.dots &&
          null !== e.$dots &&
          t('li', e.$dots)
            .off('click.slick', e.changeSlide)
            .off('mouseenter.slick', t.proxy(e.interrupt, e, !0))
            .off('mouseleave.slick', t.proxy(e.interrupt, e, !1)),
          e.$slider.off('focus.slick blur.slick'),
          e.options.arrows === !0 &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
            e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide)),
          e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
          e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
          e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
          e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
          e.$list.off('click.slick', e.clickHandler),
          t(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          e.options.accessibility === !0 &&
            e.$list.off('keydown.slick', e.keyHandler),
          e.options.focusOnSelect === !0 &&
            t(e.$slideTrack)
              .children()
              .off('click.slick', e.selectHandler),
          t(window).off(
            'orientationchange.slick.slick-' + e.instanceUid,
            e.orientationChange
          ),
          t(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
          t('[draggable!=true]', e.$slideTrack).off(
            'dragstart',
            e.preventDefault
          ),
          t(window).off('load.slick.slick-' + e.instanceUid, e.setPosition),
          t(document).off('ready.slick.slick-' + e.instanceUid, e.setPosition)
      }),
      (e.prototype.cleanUpSlideEvents = function() {
        var e = this
        e.$list.off('mouseenter.slick', t.proxy(e.interrupt, e, !0)),
          e.$list.off('mouseleave.slick', t.proxy(e.interrupt, e, !1))
      }),
      (e.prototype.cleanUpRows = function() {
        var t,
          e = this
        e.options.rows > 1 &&
          ((t = e.$slides.children().children()),
          t.removeAttr('style'),
          e.$slider.empty().append(t))
      }),
      (e.prototype.clickHandler = function(t) {
        var e = this
        e.shouldClick === !1 &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault())
      }),
      (e.prototype.destroy = function(e) {
        var i = this
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          t('.slick-cloned', i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass(
                'slick-slide slick-active slick-center slick-visible slick-current'
              )
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function() {
                t(this).attr('style', t(this).data('originalStyling'))
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass('slick-slider'),
          i.$slider.removeClass('slick-initialized'),
          i.$slider.removeClass('slick-dotted'),
          (i.unslicked = !0),
          e || i.$slider.trigger('destroy', [i])
      }),
      (e.prototype.disableTransition = function(t) {
        var e = this,
          i = {}
        ;(i[e.transitionType] = ''),
          e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
      }),
      (e.prototype.fadeSlide = function(t, e) {
        var i = this
        i.cssTransitions === !1
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function() {
                i.disableTransition(t), e.call()
              }, i.options.speed))
      }),
      (e.prototype.fadeSlideOut = function(t) {
        var e = this
        e.cssTransitions === !1
          ? e.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: e.options.zIndex - 2 },
                e.options.speed,
                e.options.easing
              )
          : (e.applyTransition(t),
            e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }))
      }),
      (e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this
        null !== t &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(t).appendTo(e.$slideTrack),
          e.reinit())
      }),
      (e.prototype.focusHandler = function() {
        var e = this
        e.$slider
          .off('focus.slick blur.slick')
          .on('focus.slick blur.slick', '*:not(.slick-arrow)', function(i) {
            i.stopImmediatePropagation()
            var n = t(this)
            setTimeout(function() {
              e.options.pauseOnFocus &&
                ((e.focussed = n.is(':focus')), e.autoPlay())
            }, 0)
          })
      }),
      (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this
        return t.currentSlide
      }),
      (e.prototype.getDotCount = function() {
        var t = this,
          e = 0,
          i = 0,
          n = 0
        if (t.options.infinite === !0)
          for (; e < t.slideCount; )
            ++n,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow)
        else if (t.options.centerMode === !0) n = t.slideCount
        else if (t.options.asNavFor)
          for (; e < t.slideCount; )
            ++n,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow)
        else
          n =
            1 +
            Math.ceil(
              (t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
            )
        return n - 1
      }),
      (e.prototype.getLeft = function(t) {
        var e,
          i,
          n,
          o = this,
          r = 0
        return (
          (o.slideOffset = 0),
          (i = o.$slides.first().outerHeight(!0)),
          o.options.infinite === !0
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                (r = i * o.options.slidesToShow * -1)),
              o.slideCount % o.options.slidesToScroll !== 0 &&
                t + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (t > o.slideCount
                  ? ((o.slideOffset =
                      (o.options.slidesToShow - (t - o.slideCount)) *
                      o.slideWidth *
                      -1),
                    (r =
                      (o.options.slidesToShow - (t - o.slideCount)) * i * -1))
                  : ((o.slideOffset =
                      (o.slideCount % o.options.slidesToScroll) *
                      o.slideWidth *
                      -1),
                    (r = (o.slideCount % o.options.slidesToScroll) * i * -1))))
            : t + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (t + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (r = (t + o.options.slidesToShow - o.slideCount) * i)),
          o.slideCount <= o.options.slidesToShow &&
            ((o.slideOffset = 0), (r = 0)),
          o.options.centerMode === !0 && o.options.infinite === !0
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : o.options.centerMode === !0 &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (e =
            o.options.vertical === !1
              ? t * o.slideWidth * -1 + o.slideOffset
              : t * i * -1 + r),
          o.options.variableWidth === !0 &&
            ((n =
              o.slideCount <= o.options.slidesToShow ||
              o.options.infinite === !1
                ? o.$slideTrack.children('.slick-slide').eq(t)
                : o.$slideTrack
                    .children('.slick-slide')
                    .eq(t + o.options.slidesToShow)),
            (e =
              o.options.rtl === !0
                ? n[0]
                  ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1
                  : 0
                : n[0]
                ? n[0].offsetLeft * -1
                : 0),
            o.options.centerMode === !0 &&
              ((n =
                o.slideCount <= o.options.slidesToShow ||
                o.options.infinite === !1
                  ? o.$slideTrack.children('.slick-slide').eq(t)
                  : o.$slideTrack
                      .children('.slick-slide')
                      .eq(t + o.options.slidesToShow + 1)),
              (e =
                o.options.rtl === !0
                  ? n[0]
                    ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1
                    : 0
                  : n[0]
                  ? n[0].offsetLeft * -1
                  : 0),
              (e += (o.$list.width() - n.outerWidth()) / 2))),
          e
        )
      }),
      (e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this
        return e.options[t]
      }),
      (e.prototype.getNavigableIndexes = function() {
        var t,
          e = this,
          i = 0,
          n = 0,
          o = []
        for (
          e.options.infinite === !1
            ? (t = e.slideCount)
            : ((i = e.options.slidesToScroll * -1),
              (n = e.options.slidesToScroll * -1),
              (t = 2 * e.slideCount));
          i < t;

        )
          o.push(i),
            (i = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow)
        return o
      }),
      (e.prototype.getSlick = function() {
        return this
      }),
      (e.prototype.getSlideCount = function() {
        var e,
          i,
          n,
          o = this
        return (
          (n =
            o.options.centerMode === !0
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          o.options.swipeToSlide === !0
            ? (o.$slideTrack.find('.slick-slide').each(function(e, r) {
                if (r.offsetLeft - n + t(r).outerWidth() / 2 > o.swipeLeft * -1)
                  return (i = r), !1
              }),
              (e =
                Math.abs(t(i).attr('data-slick-index') - o.currentSlide) || 1))
            : o.options.slidesToScroll
        )
      }),
      (e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this
        i.changeSlide({ data: { message: 'index', index: parseInt(t) } }, e)
      }),
      (e.prototype.init = function(e) {
        var i = this
        t(i.$slider).hasClass('slick-initialized') ||
          (t(i.$slider).addClass('slick-initialized'),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          e && i.$slider.trigger('init', [i]),
          i.options.accessibility === !0 && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay())
      }),
      (e.prototype.initADA = function() {
        var e = this
        e.$slides
          .add(e.$slideTrack.find('.slick-cloned'))
          .attr({ 'aria-hidden': 'true', tabindex: '-1' })
          .find('a, input, button, select')
          .attr({ tabindex: '-1' }),
          e.$slideTrack.attr('role', 'listbox'),
          e.$slides.not(e.$slideTrack.find('.slick-cloned')).each(function(i) {
            t(this).attr({
              role: 'option',
              'aria-describedby': 'slick-slide' + e.instanceUid + i
            })
          }),
          null !== e.$dots &&
            e.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function(i) {
                t(this).attr({
                  role: 'presentation',
                  'aria-selected': 'false',
                  'aria-controls': 'navigation' + e.instanceUid + i,
                  id: 'slick-slide' + e.instanceUid + i
                })
              })
              .first()
              .attr('aria-selected', 'true')
              .end()
              .find('button')
              .attr('role', 'button')
              .end()
              .closest('div')
              .attr('role', 'toolbar'),
          e.activateADA()
      }),
      (e.prototype.initArrowEvents = function() {
        var t = this
        t.options.arrows === !0 &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow
            .off('click.slick')
            .on('click.slick', { message: 'previous' }, t.changeSlide),
          t.$nextArrow
            .off('click.slick')
            .on('click.slick', { message: 'next' }, t.changeSlide))
      }),
      (e.prototype.initDotEvents = function() {
        var e = this
        e.options.dots === !0 &&
          e.slideCount > e.options.slidesToShow &&
          t('li', e.$dots).on(
            'click.slick',
            { message: 'index' },
            e.changeSlide
          ),
          e.options.dots === !0 &&
            e.options.pauseOnDotsHover === !0 &&
            t('li', e.$dots)
              .on('mouseenter.slick', t.proxy(e.interrupt, e, !0))
              .on('mouseleave.slick', t.proxy(e.interrupt, e, !1))
      }),
      (e.prototype.initSlideEvents = function() {
        var e = this
        e.options.pauseOnHover &&
          (e.$list.on('mouseenter.slick', t.proxy(e.interrupt, e, !0)),
          e.$list.on('mouseleave.slick', t.proxy(e.interrupt, e, !1)))
      }),
      (e.prototype.initializeEvents = function() {
        var e = this
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            'touchstart.slick mousedown.slick',
            { action: 'start' },
            e.swipeHandler
          ),
          e.$list.on(
            'touchmove.slick mousemove.slick',
            { action: 'move' },
            e.swipeHandler
          ),
          e.$list.on(
            'touchend.slick mouseup.slick',
            { action: 'end' },
            e.swipeHandler
          ),
          e.$list.on(
            'touchcancel.slick mouseleave.slick',
            { action: 'end' },
            e.swipeHandler
          ),
          e.$list.on('click.slick', e.clickHandler),
          t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
          e.options.accessibility === !0 &&
            e.$list.on('keydown.slick', e.keyHandler),
          e.options.focusOnSelect === !0 &&
            t(e.$slideTrack)
              .children()
              .on('click.slick', e.selectHandler),
          t(window).on(
            'orientationchange.slick.slick-' + e.instanceUid,
            t.proxy(e.orientationChange, e)
          ),
          t(window).on(
            'resize.slick.slick-' + e.instanceUid,
            t.proxy(e.resize, e)
          ),
          t('[draggable!=true]', e.$slideTrack).on(
            'dragstart',
            e.preventDefault
          ),
          t(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
          t(document).on('ready.slick.slick-' + e.instanceUid, e.setPosition)
      }),
      (e.prototype.initUI = function() {
        var t = this
        t.options.arrows === !0 &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.show(), t.$nextArrow.show()),
          t.options.dots === !0 &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.show()
      }),
      (e.prototype.keyHandler = function(t) {
        var e = this
        t.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === t.keyCode && e.options.accessibility === !0
            ? e.changeSlide({
                data: { message: e.options.rtl === !0 ? 'next' : 'previous' }
              })
            : 39 === t.keyCode &&
              e.options.accessibility === !0 &&
              e.changeSlide({
                data: { message: e.options.rtl === !0 ? 'previous' : 'next' }
              }))
      }),
      (e.prototype.lazyLoad = function() {
        function e(e) {
          t('img[data-lazy]', e).each(function() {
            var e = t(this),
              i = t(this).attr('data-lazy'),
              n = document.createElement('img')
            ;(n.onload = function() {
              e.animate({ opacity: 0 }, 100, function() {
                e.attr('src', i).animate({ opacity: 1 }, 200, function() {
                  e.removeAttr('data-lazy').removeClass('slick-loading')
                }),
                  s.$slider.trigger('lazyLoaded', [s, e, i])
              })
            }),
              (n.onerror = function() {
                e
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                  s.$slider.trigger('lazyLoadError', [s, e, i])
              }),
              (n.src = i)
          })
        }
        var i,
          n,
          o,
          r,
          s = this
        s.options.centerMode === !0
          ? s.options.infinite === !0
            ? ((o = s.currentSlide + (s.options.slidesToShow / 2 + 1)),
              (r = o + s.options.slidesToShow + 2))
            : ((o = Math.max(
                0,
                s.currentSlide - (s.options.slidesToShow / 2 + 1)
              )),
              (r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide))
          : ((o = s.options.infinite
              ? s.options.slidesToShow + s.currentSlide
              : s.currentSlide),
            (r = Math.ceil(o + s.options.slidesToShow)),
            s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)),
          (i = s.$slider.find('.slick-slide').slice(o, r)),
          e(i),
          s.slideCount <= s.options.slidesToShow
            ? ((n = s.$slider.find('.slick-slide')), e(n))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? ((n = s.$slider
                .find('.slick-cloned')
                .slice(0, s.options.slidesToShow)),
              e(n))
            : 0 === s.currentSlide &&
              ((n = s.$slider
                .find('.slick-cloned')
                .slice(s.options.slidesToShow * -1)),
              e(n))
      }),
      (e.prototype.loadSlider = function() {
        var t = this
        t.setPosition(),
          t.$slideTrack.css({ opacity: 1 }),
          t.$slider.removeClass('slick-loading'),
          t.initUI(),
          'progressive' === t.options.lazyLoad && t.progressiveLazyLoad()
      }),
      (e.prototype.next = e.prototype.slickNext = function() {
        var t = this
        t.changeSlide({ data: { message: 'next' } })
      }),
      (e.prototype.orientationChange = function() {
        var t = this
        t.checkResponsive(), t.setPosition()
      }),
      (e.prototype.pause = e.prototype.slickPause = function() {
        var t = this
        t.autoPlayClear(), (t.paused = !0)
      }),
      (e.prototype.play = e.prototype.slickPlay = function() {
        var t = this
        t.autoPlay(),
          (t.options.autoplay = !0),
          (t.paused = !1),
          (t.focussed = !1),
          (t.interrupted = !1)
      }),
      (e.prototype.postSlide = function(t) {
        var e = this
        e.unslicked ||
          (e.$slider.trigger('afterChange', [e, t]),
          (e.animating = !1),
          e.setPosition(),
          (e.swipeLeft = null),
          e.options.autoplay && e.autoPlay(),
          e.options.accessibility === !0 && e.initADA())
      }),
      (e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this
        t.changeSlide({ data: { message: 'previous' } })
      }),
      (e.prototype.preventDefault = function(t) {
        t.preventDefault()
      }),
      (e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1
        var i,
          n,
          o,
          r = this,
          s = t('img[data-lazy]', r.$slider)
        s.length
          ? ((i = s.first()),
            (n = i.attr('data-lazy')),
            (o = document.createElement('img')),
            (o.onload = function() {
              i
                .attr('src', n)
                .removeAttr('data-lazy')
                .removeClass('slick-loading'),
                r.options.adaptiveHeight === !0 && r.setPosition(),
                r.$slider.trigger('lazyLoaded', [r, i, n]),
                r.progressiveLazyLoad()
            }),
            (o.onerror = function() {
              e < 3
                ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                  }, 500)
                : (i
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading')
                    .addClass('slick-lazyload-error'),
                  r.$slider.trigger('lazyLoadError', [r, i, n]),
                  r.progressiveLazyLoad())
            }),
            (o.src = n))
          : r.$slider.trigger('allImagesLoaded', [r])
      }),
      (e.prototype.refresh = function(e) {
        var i,
          n,
          o = this
        ;(n = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (i = o.currentSlide),
          o.destroy(!0),
          t.extend(o, o.initials, { currentSlide: i }),
          o.init(),
          e || o.changeSlide({ data: { message: 'index', index: i } }, !1)
      }),
      (e.prototype.registerBreakpoints = function() {
        var e,
          i,
          n,
          o = this,
          r = o.options.responsive || null
        if ('array' === t.type(r) && r.length) {
          o.respondTo = o.options.respondTo || 'window'
          for (e in r)
            if (
              ((n = o.breakpoints.length - 1),
              (i = r[e].breakpoint),
              r.hasOwnProperty(e))
            ) {
              for (; n >= 0; )
                o.breakpoints[n] &&
                  o.breakpoints[n] === i &&
                  o.breakpoints.splice(n, 1),
                  n--
              o.breakpoints.push(i), (o.breakpointSettings[i] = r[e].settings)
            }
          o.breakpoints.sort(function(t, e) {
            return o.options.mobileFirst ? t - e : e - t
          })
        }
      }),
      (e.prototype.reinit = function() {
        var e = this
        ;(e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          e.options.focusOnSelect === !0 &&
            t(e.$slideTrack)
              .children()
              .on('click.slick', e.selectHandler),
          e.setSlideClasses(
            'number' == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger('reInit', [e])
      }),
      (e.prototype.resize = function() {
        var e = this
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function() {
            ;(e.windowWidth = t(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition()
          }, 50)))
      }),
      (e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this
        return (
          'boolean' == typeof t
            ? ((e = t), (t = e === !0 ? 0 : n.slideCount - 1))
            : (t = e === !0 ? --t : t),
          !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) &&
            (n.unload(),
            i === !0
              ? n.$slideTrack.children().remove()
              : n.$slideTrack
                  .children(this.options.slide)
                  .eq(t)
                  .remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            void n.reinit())
        )
      }),
      (e.prototype.setCSS = function(t) {
        var e,
          i,
          n = this,
          o = {}
        n.options.rtl === !0 && (t = -t),
          (e = 'left' == n.positionProp ? Math.ceil(t) + 'px' : '0px'),
          (i = 'top' == n.positionProp ? Math.ceil(t) + 'px' : '0px'),
          (o[n.positionProp] = t),
          n.transformsEnabled === !1
            ? n.$slideTrack.css(o)
            : ((o = {}),
              n.cssTransitions === !1
                ? ((o[n.animType] = 'translate(' + e + ', ' + i + ')'),
                  n.$slideTrack.css(o))
                : ((o[n.animType] = 'translate3d(' + e + ', ' + i + ', 0px)'),
                  n.$slideTrack.css(o)))
      }),
      (e.prototype.setDimensions = function() {
        var t = this
        t.options.vertical === !1
          ? t.options.centerMode === !0 &&
            t.$list.css({ padding: '0px ' + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            t.options.centerMode === !0 &&
              t.$list.css({ padding: t.options.centerPadding + ' 0px' })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          t.options.vertical === !1 && t.options.variableWidth === !1
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children('.slick-slide').length
                )
              ))
            : t.options.variableWidth === !0
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children('.slick-slide').length
                )
              ))
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width()
        t.options.variableWidth === !1 &&
          t.$slideTrack.children('.slick-slide').width(t.slideWidth - e)
      }),
      (e.prototype.setFade = function() {
        var e,
          i = this
        i.$slides.each(function(n, o) {
          ;(e = i.slideWidth * n * -1),
            i.options.rtl === !0
              ? t(o).css({
                  position: 'relative',
                  right: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0
                })
              : t(o).css({
                  position: 'relative',
                  left: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0
                })
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 })
      }),
      (e.prototype.setHeight = function() {
        var t = this
        if (
          1 === t.options.slidesToShow &&
          t.options.adaptiveHeight === !0 &&
          t.options.vertical === !1
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0)
          t.$list.css('height', e)
        }
      }),
      (e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e,
          i,
          n,
          o,
          r,
          s = this,
          a = !1
        if (
          ('object' === t.type(arguments[0])
            ? ((n = arguments[0]), (a = arguments[1]), (r = 'multiple'))
            : 'string' === t.type(arguments[0]) &&
              ((n = arguments[0]),
              (o = arguments[1]),
              (a = arguments[2]),
              'responsive' === arguments[0] && 'array' === t.type(arguments[1])
                ? (r = 'responsive')
                : 'undefined' != typeof arguments[1] && (r = 'single')),
          'single' === r)
        )
          s.options[n] = o
        else if ('multiple' === r)
          t.each(n, function(t, e) {
            s.options[t] = e
          })
        else if ('responsive' === r)
          for (i in o)
            if ('array' !== t.type(s.options.responsive))
              s.options.responsive = [o[i]]
            else {
              for (e = s.options.responsive.length - 1; e >= 0; )
                s.options.responsive[e].breakpoint === o[i].breakpoint &&
                  s.options.responsive.splice(e, 1),
                  e--
              s.options.responsive.push(o[i])
            }
        a && (s.unload(), s.reinit())
      }),
      (e.prototype.setPosition = function() {
        var t = this
        t.setDimensions(),
          t.setHeight(),
          t.options.fade === !1
            ? t.setCSS(t.getLeft(t.currentSlide))
            : t.setFade(),
          t.$slider.trigger('setPosition', [t])
      }),
      (e.prototype.setProps = function() {
        var t = this,
          e = document.body.style
        ;(t.positionProp = t.options.vertical === !0 ? 'top' : 'left'),
          'top' === t.positionProp
            ? t.$slider.addClass('slick-vertical')
            : t.$slider.removeClass('slick-vertical'),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
            (t.options.useCSS === !0 && (t.cssTransitions = !0)),
          t.options.fade &&
            ('number' == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = 'OTransform'),
            (t.transformType = '-o-transform'),
            (t.transitionType = 'OTransition'),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = 'MozTransform'),
            (t.transformType = '-moz-transform'),
            (t.transitionType = 'MozTransition'),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = 'webkitTransform'),
            (t.transformType = '-webkit-transform'),
            (t.transitionType = 'webkitTransition'),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = 'msTransform'),
            (t.transformType = '-ms-transform'),
            (t.transitionType = 'msTransition'),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            t.animType !== !1 &&
            ((t.animType = 'transform'),
            (t.transformType = 'transform'),
            (t.transitionType = 'transition')),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && t.animType !== !1)
      }),
      (e.prototype.setSlideClasses = function(t) {
        var e,
          i,
          n,
          o,
          r = this
        ;(i = r.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
          r.$slides.eq(t).addClass('slick-current'),
          r.options.centerMode === !0
            ? ((e = Math.floor(r.options.slidesToShow / 2)),
              r.options.infinite === !0 &&
                (t >= e && t <= r.slideCount - 1 - e
                  ? r.$slides
                      .slice(t - e, t + e + 1)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')
                  : ((n = r.options.slidesToShow + t),
                    i
                      .slice(n - e + 1, n + e + 2)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')),
                0 === t
                  ? i
                      .eq(i.length - 1 - r.options.slidesToShow)
                      .addClass('slick-center')
                  : t === r.slideCount - 1 &&
                    i.eq(r.options.slidesToShow).addClass('slick-center')),
              r.$slides.eq(t).addClass('slick-center'))
            : t >= 0 && t <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(t, t + r.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : i.length <= r.options.slidesToShow
            ? i.addClass('slick-active').attr('aria-hidden', 'false')
            : ((o = r.slideCount % r.options.slidesToShow),
              (n = r.options.infinite === !0 ? r.options.slidesToShow + t : t),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - t < r.options.slidesToShow
                ? i
                    .slice(n - (r.options.slidesToShow - o), n + o)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : i
                    .slice(n, n + r.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')),
          'ondemand' === r.options.lazyLoad && r.lazyLoad()
      }),
      (e.prototype.setupInfinite = function() {
        var e,
          i,
          n,
          o = this
        if (
          (o.options.fade === !0 && (o.options.centerMode = !1),
          o.options.infinite === !0 &&
            o.options.fade === !1 &&
            ((i = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            n =
              o.options.centerMode === !0
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              e = o.slideCount;
            e > o.slideCount - n;
            e -= 1
          )
            (i = e - 1),
              t(o.$slides[i])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', i - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass('slick-cloned')
          for (e = 0; e < n; e += 1)
            (i = e),
              t(o.$slides[i])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', i + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass('slick-cloned')
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function() {
              t(this).attr('id', '')
            })
        }
      }),
      (e.prototype.interrupt = function(t) {
        var e = this
        t || e.autoPlay(), (e.interrupted = t)
      }),
      (e.prototype.selectHandler = function(e) {
        var i = this,
          n = t(e.target).is('.slick-slide')
            ? t(e.target)
            : t(e.target).parents('.slick-slide'),
          o = parseInt(n.attr('data-slick-index'))
        return (
          o || (o = 0),
          i.slideCount <= i.options.slidesToShow
            ? (i.setSlideClasses(o), void i.asNavFor(o))
            : void i.slideHandler(o)
        )
      }),
      (e.prototype.slideHandler = function(t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          l = null,
          c = this
        if (
          ((e = e || !1),
          (c.animating !== !0 || c.options.waitForAnimate !== !0) &&
            !(
              (c.options.fade === !0 && c.currentSlide === t) ||
              c.slideCount <= c.options.slidesToShow
            ))
        )
          return (
            e === !1 && c.asNavFor(t),
            (n = t),
            (l = c.getLeft(n)),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            c.options.infinite === !1 &&
            c.options.centerMode === !1 &&
            (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)
              ? void (
                  c.options.fade === !1 &&
                  ((n = c.currentSlide),
                  i !== !0
                    ? c.animateSlide(s, function() {
                        c.postSlide(n)
                      })
                    : c.postSlide(n))
                )
              : c.options.infinite === !1 &&
                c.options.centerMode === !0 &&
                (t < 0 || t > c.slideCount - c.options.slidesToScroll)
              ? void (
                  c.options.fade === !1 &&
                  ((n = c.currentSlide),
                  i !== !0
                    ? c.animateSlide(s, function() {
                        c.postSlide(n)
                      })
                    : c.postSlide(n))
                )
              : (c.options.autoplay && clearInterval(c.autoPlayTimer),
                (o =
                  n < 0
                    ? c.slideCount % c.options.slidesToScroll !== 0
                      ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                      : c.slideCount + n
                    : n >= c.slideCount
                    ? c.slideCount % c.options.slidesToScroll !== 0
                      ? 0
                      : n - c.slideCount
                    : n),
                (c.animating = !0),
                c.$slider.trigger('beforeChange', [c, c.currentSlide, o]),
                (r = c.currentSlide),
                (c.currentSlide = o),
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor &&
                  ((a = c.getNavTarget()),
                  (a = a.slick('getSlick')),
                  a.slideCount <= a.options.slidesToShow &&
                    a.setSlideClasses(c.currentSlide)),
                c.updateDots(),
                c.updateArrows(),
                c.options.fade === !0
                  ? (i !== !0
                      ? (c.fadeSlideOut(r),
                        c.fadeSlide(o, function() {
                          c.postSlide(o)
                        }))
                      : c.postSlide(o),
                    void c.animateHeight())
                  : void (i !== !0
                      ? c.animateSlide(l, function() {
                          c.postSlide(o)
                        })
                      : c.postSlide(o)))
          )
      }),
      (e.prototype.startLoad = function() {
        var t = this
        t.options.arrows === !0 &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.hide(), t.$nextArrow.hide()),
          t.options.dots === !0 &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
          t.$slider.addClass('slick-loading')
      }),
      (e.prototype.swipeDirection = function() {
        var t,
          e,
          i,
          n,
          o = this
        return (
          (t = o.touchObject.startX - o.touchObject.curX),
          (e = o.touchObject.startY - o.touchObject.curY),
          (i = Math.atan2(e, t)),
          (n = Math.round((180 * i) / Math.PI)),
          n < 0 && (n = 360 - Math.abs(n)),
          n <= 45 && n >= 0
            ? o.options.rtl === !1
              ? 'left'
              : 'right'
            : n <= 360 && n >= 315
            ? o.options.rtl === !1
              ? 'left'
              : 'right'
            : n >= 135 && n <= 225
            ? o.options.rtl === !1
              ? 'right'
              : 'left'
            : o.options.verticalSwiping === !0
            ? n >= 35 && n <= 135
              ? 'down'
              : 'up'
            : 'vertical'
        )
      }),
      (e.prototype.swipeEnd = function() {
        var t,
          e,
          i = this
        if (
          ((i.dragging = !1),
          (i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1
        if (
          (i.touchObject.edgeHit === !0 &&
            i.$slider.trigger('edge', [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((e = i.swipeDirection())) {
            case 'left':
            case 'down':
              ;(t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0)
              break
            case 'right':
            case 'up':
              ;(t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1)
          }
          'vertical' != e &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger('swipe', [i, e]))
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}))
      }),
      (e.prototype.swipeHandler = function(t) {
        var e = this
        if (
          !(
            e.options.swipe === !1 ||
            ('ontouchend' in document && e.options.swipe === !1) ||
            (e.options.draggable === !1 && t.type.indexOf('mouse') !== -1)
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            e.options.verticalSwiping === !0 &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case 'start':
              e.swipeStart(t)
              break
            case 'move':
              e.swipeMove(t)
              break
            case 'end':
              e.swipeEnd(t)
          }
      }),
      (e.prototype.swipeMove = function(t) {
        var e,
          i,
          n,
          o,
          r,
          s = this
        return (
          (r = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!s.dragging || (r && 1 !== r.length)) &&
            ((e = s.getLeft(s.currentSlide)),
            (s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX),
            (s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY),
            (s.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))
            )),
            s.options.verticalSwiping === !0 &&
              (s.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(s.touchObject.curY - s.touchObject.startY, 2)
                )
              )),
            (i = s.swipeDirection()),
            'vertical' !== i
              ? (void 0 !== t.originalEvent &&
                  s.touchObject.swipeLength > 4 &&
                  t.preventDefault(),
                (o =
                  (s.options.rtl === !1 ? 1 : -1) *
                  (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                s.options.verticalSwiping === !0 &&
                  (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                (n = s.touchObject.swipeLength),
                (s.touchObject.edgeHit = !1),
                s.options.infinite === !1 &&
                  ((0 === s.currentSlide && 'right' === i) ||
                    (s.currentSlide >= s.getDotCount() && 'left' === i)) &&
                  ((n = s.touchObject.swipeLength * s.options.edgeFriction),
                  (s.touchObject.edgeHit = !0)),
                s.options.vertical === !1
                  ? (s.swipeLeft = e + n * o)
                  : (s.swipeLeft =
                      e + n * (s.$list.height() / s.listWidth) * o),
                s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * o),
                s.options.fade !== !0 &&
                  s.options.touchMove !== !1 &&
                  (s.animating === !0
                    ? ((s.swipeLeft = null), !1)
                    : void s.setCSS(s.swipeLeft)))
              : void 0)
        )
      }),
      (e.prototype.swipeStart = function(t) {
        var e,
          i = this
        return (
          (i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
          i.slideCount <= i.options.slidesToShow
            ? ((i.touchObject = {}), !1)
            : (void 0 !== t.originalEvent &&
                void 0 !== t.originalEvent.touches &&
                (e = t.originalEvent.touches[0]),
              (i.touchObject.startX = i.touchObject.curX =
                void 0 !== e ? e.pageX : t.clientX),
              (i.touchObject.startY = i.touchObject.curY =
                void 0 !== e ? e.pageY : t.clientY),
              void (i.dragging = !0))
        )
      }),
      (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this
        null !== t.$slidesCache &&
          (t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.appendTo(t.$slideTrack),
          t.reinit())
      }),
      (e.prototype.unload = function() {
        var e = this
        t('.slick-cloned', e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '')
      }),
      (e.prototype.unslick = function(t) {
        var e = this
        e.$slider.trigger('unslick', [e, t]), e.destroy()
      }),
      (e.prototype.updateArrows = function() {
        var t,
          e = this
        ;(t = Math.floor(e.options.slidesToShow / 2)),
          e.options.arrows === !0 &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass('slick-disabled')
              .attr('aria-disabled', 'false'),
            e.$nextArrow
              .removeClass('slick-disabled')
              .attr('aria-disabled', 'false'),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$nextArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                e.options.centerMode === !1
              ? (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - 1 &&
                e.options.centerMode === !0 &&
                (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false')))
      }),
      (e.prototype.updateDots = function() {
        var t = this
        null !== t.$dots &&
          (t.$dots
            .find('li')
            .removeClass('slick-active')
            .attr('aria-hidden', 'true'),
          t.$dots
            .find('li')
            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
            .addClass('slick-active')
            .attr('aria-hidden', 'false'))
      }),
      (e.prototype.visibility = function() {
        var t = this
        t.options.autoplay &&
          (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1))
      }),
      (t.fn.slick = function() {
        var t,
          i,
          n = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = n.length
        for (t = 0; t < s; t++)
          if (
            ('object' == typeof o || 'undefined' == typeof o
              ? (n[t].slick = new e(n[t], o))
              : (i = n[t].slick[o].apply(n[t].slick, r)),
            'undefined' != typeof i)
          )
            return i
        return n
      })
  })
var Jpostal = {}
;(Jpostal.Database = function() {
  'use strict'
  ;(this.address = []),
    (this.map = {}),
    (this.url = {
      http: '//jpostal-1006.appspot.com/json/',
      https: '//jpostal-1006.appspot.com/json/'
    })
}),
  (Jpostal.Database.prototype.find = function(t) {
    'use strict'
    var e = []
    return (
      this.address.forEach(function(i) {
        i[0] === '_' + t && (e = i)
      }),
      e
    )
  }),
  (Jpostal.Database.prototype.get = function(t) {
    'use strict'
    var e,
      i,
      n = ['', '', '', '', '', '', '', '', '']
    switch (t.length) {
      case 3:
      case 4:
      case 5:
      case 6:
        ;(i = t.substr(0, 3)), (e = this.find(i)), (e = $.extend(n, e))
        break
      case 7:
        ;(e = this.find(t)),
          0 === e.length && ((i = t.substr(0, 3)), (e = this.find(i))),
          (e = $.extend(n, e))
        break
      default:
        e = n
    }
    return e
  }),
  (Jpostal.Database.prototype.getUrl = function(t) {
    'use strict'
    var e = ''
    switch (this.getProtocol()) {
      case 'http:':
        e = this.url.http
        break
      case 'https:':
        e = this.url.https
    }
    return (e = e + t + '.json')
  }),
  (Jpostal.Database.prototype.request = function(t, e) {
    'use strict'
    var i, n, o
    return (
      (i = t.substr(0, 3)),
      !(t.length <= 2 || 'none' !== this.getStatus(i) || i.match(/\D/)) &&
        (this.setStatus(i, 'waiting'),
        (n = this.getUrl(i)),
        (o = {
          async: !1,
          dataType: 'jsonp',
          jsonpCallback: 'jQuery_jpostal_callback',
          type: 'GET',
          url: n,
          success: function() {
            e()
          },
          timeout: 5e3
        }),
        this.ajax(o),
        !0)
    )
  }),
  (Jpostal.Database.prototype.ajax = function(t) {
    'use strict'
    $.ajax(t)
  }),
  (Jpostal.Database.prototype.save = function(t) {
    'use strict'
    var e = this
    t.forEach(function(t) {
      var i = t[0]
      void 0 === e.map[i]
        ? (e.address.push(t), (e.map[i] = { state: 'complete', time: 0 }))
        : 'waiting' === e.map[i].state &&
          (e.address.push(t), (e.map[i].state = 'complete'))
    })
  }),
  (Jpostal.Database.prototype.getStatus = function(t) {
    'use strict'
    var e,
      i = '',
      n = '_' + t
    return (
      void 0 === this.map[n]
        ? (i = 'none')
        : 'complete' === this.map[n].state
        ? (i = 'complete')
        : ((e = this.getTime() - this.map[n].time),
          (i = e < 5e3 ? 'waiting' : 'none')),
      i
    )
  }),
  (Jpostal.Database.prototype.setStatus = function(t) {
    'use strict'
    var e = '_' + t
    void 0 === this.map[e] && (this.map[e] = { state: 'waiting', time: 0 }),
      (this.map[e].time = this.getTime())
  }),
  (Jpostal.Database.prototype.getProtocol = function() {
    'use strict'
    return window.location.protocol
  }),
  (Jpostal.Database.prototype.getTime = function() {
    'use strict'
    return new Date().getTime()
  }),
  (function() {
    'use strict'
    var t
    Jpostal.Database.getInstance = function() {
      return void 0 === t && (t = new Jpostal.Database()), t
    }
  })(),
  (Jpostal.Jpostal = function(t) {
    'use strict'
    ;(this.address = ''),
      (this.jposDb = t),
      (this.options = {}),
      (this.postcode = ''),
      (this.minLen = 3)
  }),
  (Jpostal.Jpostal.prototype.displayAddress = function() {
    'use strict'
    var t = this
    '000info' === this.postcode &&
      (this.address[2] += ' ' + this.getScriptSrc()),
      Object.keys(this.options.address).forEach(function(e) {
        var i = t.options.address[e],
          n = t.formatAddress(i, t.address)
        t.isSelectTagForPrefecture(e, i)
          ? t.setSelectTagForPrefecture(e, n)
          : $(e).val(n)
      })
  }),
  (Jpostal.Jpostal.prototype.isSelectTagForPrefecture = function(t, e) {
    'use strict'
    var i
    switch (e) {
      case '%3':
      case '%p':
      case '%prefecture':
        i =
          'SELECT' ===
          $(t)
            .get(0)
            .tagName.toUpperCase()
        break
      default:
        i = !1
    }
    return i
  }),
  (Jpostal.Jpostal.prototype.setSelectTagForPrefecture = function(t, e) {
    'use strict'
    var i, n
    $(t).val(e),
      $(t).val() !== e &&
        ((i = ''),
        (n = $(t)[0]),
        Object.keys(n.options).forEach(function(t) {
          var o = String(n.options[t].text).indexOf(e)
          0 <= o && (i = n.options[t].value)
        }),
        '' !== i && $(t).val(i))
  }),
  (Jpostal.Jpostal.prototype.formatAddress = function(t, e) {
    'use strict'
    var i = t
    return (
      (i = i.replace(/%3|%p|%prefecture/, e[1])),
      (i = i.replace(/%4|%c|%city/, e[2])),
      (i = i.replace(/%5|%t|%town/, e[3])),
      (i = i.replace(/%6|%a|%address/, e[4])),
      (i = i.replace(/%7|%n|%name/, e[5])),
      (i = i.replace(/%8/, e[6])),
      (i = i.replace(/%9/, e[7])),
      (i = i.replace(/%10/, e[8]))
    )
  }),
  (Jpostal.Jpostal.prototype.getScriptSrc = function() {
    'use strict'
    var t,
      e,
      i,
      n,
      o = ''
    for (
      t = document.getElementsByTagName('script'), i = t.length, e = 0;
      e < i;
      e += 1
    )
      if (((n = t[e].src), 0 <= n.indexOf('jquery.jpostal.js'))) {
        o = n
        break
      }
    return o
  }),
  (Jpostal.Jpostal.prototype.init = function(t) {
    'use strict'
    if (void 0 === t.postcode) throw new Error('postcode undefined')
    if (void 0 === t.address) throw new Error('address undefined')
    ;(this.options.postcode = []),
      'string' == typeof t.postcode
        ? this.options.postcode.push(t.postcode)
        : (this.options.postcode = t.postcode),
      (this.options.address = t.address),
      void 0 !== t.url && (this.jposDb.url = t.url)
  }),
  (Jpostal.Jpostal.prototype.main = function() {
    'use strict'
    var t, e
    this.scanPostcode(),
      this.postcode.length < this.minLen ||
        ((t = this),
        (e = this.jposDb.request(this.postcode, function() {
          t.callback()
        })),
        e || this.callback())
  }),
  (Jpostal.Jpostal.prototype.callback = function() {
    'use strict'
    ;(this.address = this.jposDb.get(this.postcode)), this.displayAddress()
  }),
  (Jpostal.Jpostal.prototype.scanPostcode = function() {
    'use strict'
    var t,
      e,
      i = ''
    switch (this.options.postcode.length) {
      case 0:
        break
      case 1:
        ;(i = String($(this.options.postcode[0]).val())),
          (i =
            0 <= i.search(/^([0-9]{3})([0-9A-Za-z]{4})/)
              ? i.substr(0, 7)
              : 0 <= i.search(/^([0-9]{3})-([0-9A-Za-z]{4})/)
              ? i.substr(0, 3) + i.substr(4, 4)
              : 0 <= i.search(/^([0-9]{3})/)
              ? i.substr(0, 3)
              : '')
        break
      case 2:
        ;(t = String($(this.options.postcode[0]).val())),
          (e = String($(this.options.postcode[1]).val())),
          (i =
            0 <= t.search(/^[0-9]{3}$/)
              ? 0 <= e.search(/^[0-9A-Za-z]{4}$/)
                ? t + e
                : t
              : '')
    }
    this.postcode = i
  })
var jQuery_jpostal_callback = function(t) {
  'use strict'
  Jpostal.Database.getInstance().save(t)
}
!(function(t) {
  'use strict'
  t.fn.jpostal = function(e) {
    var i, n
    ;(i = new Jpostal.Jpostal(Jpostal.Database.getInstance())),
      i.init(e),
      'string' == typeof e.click && '' !== e.click
        ? t(e.click).bind('click', function() {
            i.main()
          })
        : ((n = i.options.postcode[0]),
          t(n).bind('keyup change', function() {
            i.main()
          }),
          1 <= i.options.postcode.length &&
            ((n = i.options.postcode[1]),
            t(n).bind('keyup change', function() {
              i.main()
            })))
  }
})(jQuery),
  (function(t) {
    var e = !1
    if (
      ('function' == typeof define && define.amd && (define(t), (e = !0)),
      'object' == typeof exports && ((module.exports = t()), (e = !0)),
      !e)
    ) {
      var i = window.Cookies,
        n = (window.Cookies = t())
      n.noConflict = function() {
        return (window.Cookies = i), n
      }
    }
  })(function() {
    function t() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var i = arguments[t]
        for (var n in i) e[n] = i[n]
      }
      return e
    }
    function e(i) {
      function n(e, o, r) {
        var s
        if ('undefined' != typeof document) {
          if (arguments.length > 1) {
            if (
              ((r = t({ path: '/' }, n.defaults, r)),
              'number' == typeof r.expires)
            ) {
              var a = new Date()
              a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires),
                (r.expires = a)
            }
            try {
              ;(s = JSON.stringify(o)), /^[\{\[]/.test(s) && (o = s)
            } catch (t) {}
            return (
              (o = i.write
                ? i.write(o, e)
                : encodeURIComponent(String(o)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
              (e = encodeURIComponent(String(e))),
              (e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
              (e = e.replace(/[\(\)]/g, escape)),
              (document.cookie = [
                e,
                '=',
                o,
                r.expires ? '; expires=' + r.expires.toUTCString() : '',
                r.path ? '; path=' + r.path : '',
                r.domain ? '; domain=' + r.domain : '',
                r.secure ? '; secure' : ''
              ].join(''))
            )
          }
          e || (s = {})
          for (
            var l = document.cookie ? document.cookie.split('; ') : [],
              c = /(%[0-9A-Z]{2})+/g,
              u = 0;
            u < l.length;
            u++
          ) {
            var d = l[u].split('='),
              h = d.slice(1).join('=')
            '"' === h.charAt(0) && (h = h.slice(1, -1))
            try {
              var p = d[0].replace(c, decodeURIComponent)
              if (
                ((h = i.read
                  ? i.read(h, p)
                  : i(h, p) || h.replace(c, decodeURIComponent)),
                this.json)
              )
                try {
                  h = JSON.parse(h)
                } catch (t) {}
              if (e === p) {
                s = h
                break
              }
              e || (s[p] = h)
            } catch (t) {}
          }
          return s
        }
      }
      return (
        (n.set = n),
        (n.get = function(t) {
          return n.call(n, t)
        }),
        (n.getJSON = function() {
          return n.apply({ json: !0 }, [].slice.call(arguments))
        }),
        (n.defaults = {}),
        (n.remove = function(e, i) {
          n(e, '', t(i, { expires: -1 }))
        }),
        (n.withConverter = e),
        n
      )
    }
    return e(function() {})
  }),
  (function(t) {
    var e = (function() {
      'use strict'
      var t = 's',
        i = function(t) {
          var e = -t.getTimezoneOffset()
          return null !== e ? e : 0
        },
        n = function(t, e, i) {
          var n = new Date()
          return (
            void 0 !== t && n.setFullYear(t), n.setDate(i), n.setMonth(e), n
          )
        },
        o = function(t) {
          return i(n(t, 0, 2))
        },
        r = function(t) {
          return i(n(t, 5, 2))
        },
        s = function(t) {
          var e = t.getMonth() > 7 ? r(t.getFullYear()) : o(t.getFullYear()),
            n = i(t)
          return e - n !== 0
        },
        a = function() {
          var e = o(),
            i = r(),
            n = o() - r()
          return n < 0 ? e + ',1' : n > 0 ? i + ',1,' + t : e + ',0'
        },
        l = function() {
          var t = a()
          return new e.TimeZone(e.olson.timezones[t])
        },
        c = function(t) {
          var e = new Date(2010, 6, 15, 1, 0, 0, 0),
            i = {
              'America/Denver': new Date(2011, 2, 13, 3, 0, 0, 0),
              'America/Mazatlan': new Date(2011, 3, 3, 3, 0, 0, 0),
              'America/Chicago': new Date(2011, 2, 13, 3, 0, 0, 0),
              'America/Mexico_City': new Date(2011, 3, 3, 3, 0, 0, 0),
              'America/Asuncion': new Date(2012, 9, 7, 3, 0, 0, 0),
              'America/Santiago': new Date(2012, 9, 3, 3, 0, 0, 0),
              'America/Campo_Grande': new Date(2012, 9, 21, 5, 0, 0, 0),
              'America/Montevideo': new Date(2011, 9, 2, 3, 0, 0, 0),
              'America/Sao_Paulo': new Date(2011, 9, 16, 5, 0, 0, 0),
              'America/Los_Angeles': new Date(2011, 2, 13, 8, 0, 0, 0),
              'America/Santa_Isabel': new Date(2011, 3, 5, 8, 0, 0, 0),
              'America/Havana': new Date(2012, 2, 10, 2, 0, 0, 0),
              'America/New_York': new Date(2012, 2, 10, 7, 0, 0, 0),
              'Asia/Beirut': new Date(2011, 2, 27, 1, 0, 0, 0),
              'Europe/Helsinki': new Date(2011, 2, 27, 4, 0, 0, 0),
              'Europe/Istanbul': new Date(2011, 2, 28, 5, 0, 0, 0),
              'Asia/Damascus': new Date(2011, 3, 1, 2, 0, 0, 0),
              'Asia/Jerusalem': new Date(2011, 3, 1, 6, 0, 0, 0),
              'Asia/Gaza': new Date(2009, 2, 28, 0, 30, 0, 0),
              'Africa/Cairo': new Date(2009, 3, 25, 0, 30, 0, 0),
              'Pacific/Auckland': new Date(2011, 8, 26, 7, 0, 0, 0),
              'Pacific/Fiji': new Date(2010, 11, 29, 23, 0, 0, 0),
              'America/Halifax': new Date(2011, 2, 13, 6, 0, 0, 0),
              'America/Goose_Bay': new Date(2011, 2, 13, 2, 1, 0, 0),
              'America/Miquelon': new Date(2011, 2, 13, 5, 0, 0, 0),
              'America/Godthab': new Date(2011, 2, 27, 1, 0, 0, 0),
              'Europe/Moscow': e,
              'Asia/Yekaterinburg': e,
              'Asia/Omsk': e,
              'Asia/Krasnoyarsk': e,
              'Asia/Irkutsk': e,
              'Asia/Yakutsk': e,
              'Asia/Vladivostok': e,
              'Asia/Kamchatka': e,
              'Europe/Minsk': e,
              'Australia/Perth': new Date(2008, 10, 1, 1, 0, 0, 0)
            }
          return i[t]
        }
      return { determine: l, date_is_dst: s, dst_start_for: c }
    })()
    ;(e.TimeZone = function(t) {
      'use strict'
      var i = {
          'America/Denver': ['America/Denver', 'America/Mazatlan'],
          'America/Chicago': ['America/Chicago', 'America/Mexico_City'],
          'America/Santiago': [
            'America/Santiago',
            'America/Asuncion',
            'America/Campo_Grande'
          ],
          'America/Montevideo': ['America/Montevideo', 'America/Sao_Paulo'],
          'Asia/Beirut': [
            'Asia/Beirut',
            'Europe/Helsinki',
            'Europe/Istanbul',
            'Asia/Damascus',
            'Asia/Jerusalem',
            'Asia/Gaza'
          ],
          'Pacific/Auckland': ['Pacific/Auckland', 'Pacific/Fiji'],
          'America/Los_Angeles': [
            'America/Los_Angeles',
            'America/Santa_Isabel'
          ],
          'America/New_York': ['America/Havana', 'America/New_York'],
          'America/Halifax': ['America/Goose_Bay', 'America/Halifax'],
          'America/Godthab': ['America/Miquelon', 'America/Godthab'],
          'Asia/Dubai': ['Europe/Moscow'],
          'Asia/Dhaka': ['Asia/Yekaterinburg'],
          'Asia/Jakarta': ['Asia/Omsk'],
          'Asia/Shanghai': ['Asia/Krasnoyarsk', 'Australia/Perth'],
          'Asia/Tokyo': ['Asia/Irkutsk'],
          'Australia/Brisbane': ['Asia/Yakutsk'],
          'Pacific/Noumea': ['Asia/Vladivostok'],
          'Pacific/Tarawa': ['Asia/Kamchatka'],
          'Africa/Johannesburg': ['Asia/Gaza', 'Africa/Cairo'],
          'Asia/Baghdad': ['Europe/Minsk']
        },
        n = t,
        o = function() {
          for (var t = i[n], o = t.length, r = 0, s = t[0]; r < o; r += 1)
            if (((s = t[r]), e.date_is_dst(e.dst_start_for(s))))
              return void (n = s)
        },
        r = function() {
          return 'undefined' != typeof i[n]
        }
      return (
        r() && o(),
        {
          name: function() {
            return n
          }
        }
      )
    }),
      (e.olson = {}),
      (e.olson.timezones = {
        '-720,0': 'Etc/GMT+12',
        '-660,0': 'Pacific/Pago_Pago',
        '-600,1': 'America/Adak',
        '-600,0': 'Pacific/Honolulu',
        '-570,0': 'Pacific/Marquesas',
        '-540,0': 'Pacific/Gambier',
        '-540,1': 'America/Anchorage',
        '-480,1': 'America/Los_Angeles',
        '-480,0': 'Pacific/Pitcairn',
        '-420,0': 'America/Phoenix',
        '-420,1': 'America/Denver',
        '-360,0': 'America/Guatemala',
        '-360,1': 'America/Chicago',
        '-360,1,s': 'Pacific/Easter',
        '-300,0': 'America/Bogota',
        '-300,1': 'America/New_York',
        '-270,0': 'America/Caracas',
        '-240,1': 'America/Halifax',
        '-240,0': 'America/Santo_Domingo',
        '-240,1,s': 'America/Santiago',
        '-210,1': 'America/St_Johns',
        '-180,1': 'America/Godthab',
        '-180,0': 'America/Argentina/Buenos_Aires',
        '-180,1,s': 'America/Montevideo',
        '-120,0': 'Etc/GMT+2',
        '-120,1': 'Etc/GMT+2',
        '-60,1': 'Atlantic/Azores',
        '-60,0': 'Atlantic/Cape_Verde',
        '0,0': 'Etc/UTC',
        '0,1': 'Europe/London',
        '60,1': 'Europe/Berlin',
        '60,0': 'Africa/Lagos',
        '60,1,s': 'Africa/Windhoek',
        '120,1': 'Asia/Beirut',
        '120,0': 'Africa/Johannesburg',
        '180,0': 'Asia/Baghdad',
        '180,1': 'Europe/Moscow',
        '210,1': 'Asia/Tehran',
        '240,0': 'Asia/Dubai',
        '240,1': 'Asia/Baku',
        '270,0': 'Asia/Kabul',
        '300,1': 'Asia/Yekaterinburg',
        '300,0': 'Asia/Karachi',
        '330,0': 'Asia/Kolkata',
        '345,0': 'Asia/Kathmandu',
        '360,0': 'Asia/Dhaka',
        '360,1': 'Asia/Omsk',
        '390,0': 'Asia/Rangoon',
        '420,1': 'Asia/Krasnoyarsk',
        '420,0': 'Asia/Jakarta',
        '480,0': 'Asia/Shanghai',
        '480,1': 'Asia/Irkutsk',
        '525,0': 'Australia/Eucla',
        '525,1,s': 'Australia/Eucla',
        '540,1': 'Asia/Yakutsk',
        '540,0': 'Asia/Tokyo',
        '570,0': 'Australia/Darwin',
        '570,1,s': 'Australia/Adelaide',
        '600,0': 'Australia/Brisbane',
        '600,1': 'Asia/Vladivostok',
        '600,1,s': 'Australia/Sydney',
        '630,1,s': 'Australia/Lord_Howe',
        '660,1': 'Asia/Kamchatka',
        '660,0': 'Pacific/Noumea',
        '690,0': 'Pacific/Norfolk',
        '720,1,s': 'Pacific/Auckland',
        '720,0': 'Pacific/Tarawa',
        '765,1,s': 'Pacific/Chatham',
        '780,0': 'Pacific/Tongatapu',
        '780,1,s': 'Pacific/Apia',
        '840,0': 'Pacific/Kiritimati'
      }),
      'undefined' != typeof exports ? (exports.jstz = e) : (t.jstz = e)
  })(this),
  (function() {
    Cookies.set('browser.timezone', jstz.determine().name(), {
      expires: 365,
      path: '/'
    })
  })(),
  function() {
    ;(function() {
      ;(function() {
        this.Turbolinks = {
          supported: (function() {
            return (
              null != window.history.pushState &&
              null != window.requestAnimationFrame
            )
          })(),
          visit: function(e, i) {
            return t.controller.visit(e, i)
          },
          clearCache: function() {
            return t.controller.clearCache()
          }
        }
      }.call(this))
    }.call(this))
    var t = this.Turbolinks
    ;(function() {
      ;(function() {
        var e, i
        ;(t.copyObject = function(t) {
          var e, i, n
          i = {}
          for (e in t) (n = t[e]), (i[e] = n)
          return i
        }),
          (t.closest = function(t, i) {
            return e.call(t, i)
          }),
          (e = (function() {
            var t, e
            return (
              (t = document.documentElement),
              null != (e = t.closest)
                ? e
                : function(t) {
                    var e
                    for (e = this; e; ) {
                      if (e.nodeType === Node.ELEMENT_NODE && i.call(e, t))
                        return e
                      e = e.parentNode
                    }
                  }
            )
          })()),
          (t.defer = function(t) {
            return setTimeout(t, 1)
          }),
          (t.dispatch = function(t, e) {
            var i, n, o, r, s
            return (
              (r = null != e ? e : {}),
              (s = r.target),
              (i = r.cancelable),
              (n = r.data),
              (o = document.createEvent('Events')),
              o.initEvent(t, !0, i === !0),
              (o.data = null != n ? n : {}),
              (null != s ? s : document).dispatchEvent(o),
              o
            )
          }),
          (t.match = function(t, e) {
            return i.call(t, e)
          }),
          (i = (function() {
            var t, e, i, n
            return (
              (t = document.documentElement),
              null !=
              (e =
                null !=
                (i =
                  null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector)
                  ? i
                  : t.msMatchesSelector)
                ? e
                : t.mozMatchesSelector
            )
          })()),
          (t.uuid = function() {
            var t, e, i
            for (i = '', t = e = 1; 36 >= e; t = ++e)
              i +=
                9 === t || 14 === t || 19 === t || 24 === t
                  ? '-'
                  : 15 === t
                  ? '4'
                  : 20 === t
                  ? (Math.floor(4 * Math.random()) + 8).toString(16)
                  : Math.floor(15 * Math.random()).toString(16)
            return i
          })
      }.call(this),
        function() {
          t.Location = (function() {
            function t(t) {
              var e, i
              null == t && (t = ''),
                (i = document.createElement('a')),
                (i.href = t.toString()),
                (this.absoluteURL = i.href),
                (e = i.hash.length),
                2 > e
                  ? (this.requestURL = this.absoluteURL)
                  : ((this.requestURL = this.absoluteURL.slice(0, -e)),
                    (this.anchor = i.hash.slice(1)))
            }
            var e, i, n, o
            return (
              (t.wrap = function(t) {
                return t instanceof this ? t : new this(t)
              }),
              (t.prototype.getOrigin = function() {
                return this.absoluteURL.split('/', 3).join('/')
              }),
              (t.prototype.getPath = function() {
                var t, e
                return null !=
                  (t =
                    null != (e = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/))
                      ? e[1]
                      : void 0)
                  ? t
                  : '/'
              }),
              (t.prototype.getPathComponents = function() {
                return this.getPath()
                  .split('/')
                  .slice(1)
              }),
              (t.prototype.getLastPathComponent = function() {
                return this.getPathComponents().slice(-1)[0]
              }),
              (t.prototype.getExtension = function() {
                var t, e
                return null !=
                  (t =
                    null != (e = this.getLastPathComponent().match(/\.[^.]*$/))
                      ? e[0]
                      : void 0)
                  ? t
                  : ''
              }),
              (t.prototype.isHTML = function() {
                return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
              }),
              (t.prototype.isPrefixedBy = function(t) {
                var e
                return (e = i(t)), this.isEqualTo(t) || o(this.absoluteURL, e)
              }),
              (t.prototype.isEqualTo = function(t) {
                return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
              }),
              (t.prototype.toCacheKey = function() {
                return this.requestURL
              }),
              (t.prototype.toJSON = function() {
                return this.absoluteURL
              }),
              (t.prototype.toString = function() {
                return this.absoluteURL
              }),
              (t.prototype.valueOf = function() {
                return this.absoluteURL
              }),
              (i = function(t) {
                return e(t.getOrigin() + t.getPath())
              }),
              (e = function(t) {
                return n(t, '/') ? t : t + '/'
              }),
              (o = function(t, e) {
                return t.slice(0, e.length) === e
              }),
              (n = function(t, e) {
                return t.slice(-e.length) === e
              }),
              t
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }
          t.HttpRequest = (function() {
            function i(i, n, o) {
              ;(this.delegate = i),
                (this.requestCanceled = e(this.requestCanceled, this)),
                (this.requestTimedOut = e(this.requestTimedOut, this)),
                (this.requestFailed = e(this.requestFailed, this)),
                (this.requestLoaded = e(this.requestLoaded, this)),
                (this.requestProgressed = e(this.requestProgressed, this)),
                (this.url = t.Location.wrap(n).requestURL),
                (this.referrer = t.Location.wrap(o).absoluteURL),
                this.createXHR()
            }
            return (
              (i.NETWORK_FAILURE = 0),
              (i.TIMEOUT_FAILURE = -1),
              (i.timeout = 60),
              (i.prototype.send = function() {
                var t
                return this.xhr && !this.sent
                  ? (this.notifyApplicationBeforeRequestStart(),
                    this.setProgress(0),
                    this.xhr.send(),
                    (this.sent = !0),
                    'function' == typeof (t = this.delegate).requestStarted
                      ? t.requestStarted()
                      : void 0)
                  : void 0
              }),
              (i.prototype.cancel = function() {
                return this.xhr && this.sent ? this.xhr.abort() : void 0
              }),
              (i.prototype.requestProgressed = function(t) {
                return t.lengthComputable
                  ? this.setProgress(t.loaded / t.total)
                  : void 0
              }),
              (i.prototype.requestLoaded = function() {
                return this.endRequest(
                  (function(t) {
                    return function() {
                      var e
                      return 200 <= (e = t.xhr.status) && 300 > e
                        ? t.delegate.requestCompletedWithResponse(
                            t.xhr.responseText,
                            t.xhr.getResponseHeader('Turbolinks-Location')
                          )
                        : ((t.failed = !0),
                          t.delegate.requestFailedWithStatusCode(
                            t.xhr.status,
                            t.xhr.responseText
                          ))
                    }
                  })(this)
                )
              }),
              (i.prototype.requestFailed = function() {
                return this.endRequest(
                  (function(t) {
                    return function() {
                      return (
                        (t.failed = !0),
                        t.delegate.requestFailedWithStatusCode(
                          t.constructor.NETWORK_FAILURE
                        )
                      )
                    }
                  })(this)
                )
              }),
              (i.prototype.requestTimedOut = function() {
                return this.endRequest(
                  (function(t) {
                    return function() {
                      return (
                        (t.failed = !0),
                        t.delegate.requestFailedWithStatusCode(
                          t.constructor.TIMEOUT_FAILURE
                        )
                      )
                    }
                  })(this)
                )
              }),
              (i.prototype.requestCanceled = function() {
                return this.endRequest()
              }),
              (i.prototype.notifyApplicationBeforeRequestStart = function() {
                return t.dispatch('turbolinks:request-start', {
                  data: { url: this.url, xhr: this.xhr }
                })
              }),
              (i.prototype.notifyApplicationAfterRequestEnd = function() {
                return t.dispatch('turbolinks:request-end', {
                  data: { url: this.url, xhr: this.xhr }
                })
              }),
              (i.prototype.createXHR = function() {
                return (
                  (this.xhr = new XMLHttpRequest()),
                  this.xhr.open('GET', this.url, !0),
                  (this.xhr.timeout = 1e3 * this.constructor.timeout),
                  this.xhr.setRequestHeader(
                    'Accept',
                    'text/html, application/xhtml+xml'
                  ),
                  this.xhr.setRequestHeader(
                    'Turbolinks-Referrer',
                    this.referrer
                  ),
                  (this.xhr.onprogress = this.requestProgressed),
                  (this.xhr.onload = this.requestLoaded),
                  (this.xhr.onerror = this.requestFailed),
                  (this.xhr.ontimeout = this.requestTimedOut),
                  (this.xhr.onabort = this.requestCanceled)
                )
              }),
              (i.prototype.endRequest = function(t) {
                return this.xhr
                  ? (this.notifyApplicationAfterRequestEnd(),
                    null != t && t.call(this),
                    this.destroy())
                  : void 0
              }),
              (i.prototype.setProgress = function(t) {
                var e
                return (
                  (this.progress = t),
                  'function' == typeof (e = this.delegate).requestProgressed
                    ? e.requestProgressed(this.progress)
                    : void 0
                )
              }),
              (i.prototype.destroy = function() {
                var t
                return (
                  this.setProgress(1),
                  'function' == typeof (t = this.delegate).requestFinished &&
                    t.requestFinished(),
                  (this.delegate = null),
                  (this.xhr = null)
                )
              }),
              i
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }
          t.ProgressBar = (function() {
            function t() {
              ;(this.trickle = e(this.trickle, this)),
                (this.stylesheetElement = this.createStylesheetElement()),
                (this.progressElement = this.createProgressElement())
            }
            var i
            return (
              (i = 300),
              (t.defaultCSS =
                '.turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width ' +
                i +
                'ms ease-out, opacity ' +
                i / 2 +
                'ms ' +
                i / 2 +
                'ms ease-in;\n  transform: translate3d(0, 0, 0);\n}'),
              (t.prototype.show = function() {
                return this.visible
                  ? void 0
                  : ((this.visible = !0),
                    this.installStylesheetElement(),
                    this.installProgressElement(),
                    this.startTrickling())
              }),
              (t.prototype.hide = function() {
                return this.visible && !this.hiding
                  ? ((this.hiding = !0),
                    this.fadeProgressElement(
                      (function(t) {
                        return function() {
                          return (
                            t.uninstallProgressElement(),
                            t.stopTrickling(),
                            (t.visible = !1),
                            (t.hiding = !1)
                          )
                        }
                      })(this)
                    ))
                  : void 0
              }),
              (t.prototype.setValue = function(t) {
                return (this.value = t), this.refresh()
              }),
              (t.prototype.installStylesheetElement = function() {
                return document.head.insertBefore(
                  this.stylesheetElement,
                  document.head.firstChild
                )
              }),
              (t.prototype.installProgressElement = function() {
                return (
                  (this.progressElement.style.width = 0),
                  (this.progressElement.style.opacity = 1),
                  document.documentElement.insertBefore(
                    this.progressElement,
                    document.body
                  ),
                  this.refresh()
                )
              }),
              (t.prototype.fadeProgressElement = function(t) {
                return (
                  (this.progressElement.style.opacity = 0),
                  setTimeout(t, 1.5 * i)
                )
              }),
              (t.prototype.uninstallProgressElement = function() {
                return this.progressElement.parentNode
                  ? document.documentElement.removeChild(this.progressElement)
                  : void 0
              }),
              (t.prototype.startTrickling = function() {
                return null != this.trickleInterval
                  ? this.trickleInterval
                  : (this.trickleInterval = setInterval(this.trickle, i))
              }),
              (t.prototype.stopTrickling = function() {
                return (
                  clearInterval(this.trickleInterval),
                  (this.trickleInterval = null)
                )
              }),
              (t.prototype.trickle = function() {
                return this.setValue(this.value + Math.random() / 100)
              }),
              (t.prototype.refresh = function() {
                return requestAnimationFrame(
                  (function(t) {
                    return function() {
                      return (t.progressElement.style.width =
                        10 + 90 * t.value + '%')
                    }
                  })(this)
                )
              }),
              (t.prototype.createStylesheetElement = function() {
                var t
                return (
                  (t = document.createElement('style')),
                  (t.type = 'text/css'),
                  (t.textContent = this.constructor.defaultCSS),
                  t
                )
              }),
              (t.prototype.createProgressElement = function() {
                var t
                return (
                  (t = document.createElement('div')),
                  (t.className = 'turbolinks-progress-bar'),
                  t
                )
              }),
              t
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }
          t.BrowserAdapter = (function() {
            function i(i) {
              ;(this.controller = i),
                (this.showProgressBar = e(this.showProgressBar, this)),
                (this.progressBar = new t.ProgressBar())
            }
            var n, o, r, s
            return (
              (s = t.HttpRequest),
              (n = s.NETWORK_FAILURE),
              (r = s.TIMEOUT_FAILURE),
              (o = 500),
              (i.prototype.visitProposedToLocationWithAction = function(t, e) {
                return this.controller.startVisitToLocationWithAction(t, e)
              }),
              (i.prototype.visitStarted = function(t) {
                return (
                  t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                )
              }),
              (i.prototype.visitRequestStarted = function(t) {
                return (
                  this.progressBar.setValue(0),
                  t.hasCachedSnapshot() || 'restore' !== t.action
                    ? this.showProgressBarAfterDelay()
                    : this.showProgressBar()
                )
              }),
              (i.prototype.visitRequestProgressed = function(t) {
                return this.progressBar.setValue(t.progress)
              }),
              (i.prototype.visitRequestCompleted = function(t) {
                return t.loadResponse()
              }),
              (i.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                switch (e) {
                  case n:
                  case r:
                    return this.reload()
                  default:
                    return t.loadResponse()
                }
              }),
              (i.prototype.visitRequestFinished = function() {
                return this.hideProgressBar()
              }),
              (i.prototype.visitCompleted = function(t) {
                return t.followRedirect()
              }),
              (i.prototype.pageInvalidated = function() {
                return this.reload()
              }),
              (i.prototype.showProgressBarAfterDelay = function() {
                return (this.progressBarTimeout = setTimeout(
                  this.showProgressBar,
                  o
                ))
              }),
              (i.prototype.showProgressBar = function() {
                return this.progressBar.show()
              }),
              (i.prototype.hideProgressBar = function() {
                return (
                  this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                )
              }),
              (i.prototype.reload = function() {
                return window.location.reload()
              }),
              i
            )
          })()
        }.call(this),
        function() {
          var e,
            i = function(t, e) {
              return function() {
                return t.apply(e, arguments)
              }
            }
          ;(e = !1),
            addEventListener(
              'load',
              function() {
                return t.defer(function() {
                  return (e = !0)
                })
              },
              !1
            ),
            (t.History = (function() {
              function n(t) {
                ;(this.delegate = t),
                  (this.onPopState = i(this.onPopState, this))
              }
              return (
                (n.prototype.start = function() {
                  return this.started
                    ? void 0
                    : (addEventListener('popstate', this.onPopState, !1),
                      (this.started = !0))
                }),
                (n.prototype.stop = function() {
                  return this.started
                    ? (removeEventListener('popstate', this.onPopState, !1),
                      (this.started = !1))
                    : void 0
                }),
                (n.prototype.push = function(e, i) {
                  return (e = t.Location.wrap(e)), this.update('push', e, i)
                }),
                (n.prototype.replace = function(e, i) {
                  return (e = t.Location.wrap(e)), this.update('replace', e, i)
                }),
                (n.prototype.onPopState = function(e) {
                  var i, n, o, r
                  return this.shouldHandlePopState() &&
                    (r = null != (n = e.state) ? n.turbolinks : void 0)
                    ? ((i = t.Location.wrap(window.location)),
                      (o = r.restorationIdentifier),
                      this.delegate.historyPoppedToLocationWithRestorationIdentifier(
                        i,
                        o
                      ))
                    : void 0
                }),
                (n.prototype.shouldHandlePopState = function() {
                  return e === !0
                }),
                (n.prototype.update = function(t, e, i) {
                  var n
                  return (
                    (n = { turbolinks: { restorationIdentifier: i } }),
                    history[t + 'State'](n, null, e)
                  )
                }),
                n
              )
            })())
        }.call(this),
        function() {
          t.Snapshot = (function() {
            function e(t) {
              var e, i
              ;(i = t.head),
                (e = t.body),
                (this.head = null != i ? i : document.createElement('head')),
                (this.body = null != e ? e : document.createElement('body'))
            }
            return (
              (e.wrap = function(t) {
                return t instanceof this ? t : this.fromHTML(t)
              }),
              (e.fromHTML = function(t) {
                var e
                return (
                  (e = document.createElement('html')),
                  (e.innerHTML = t),
                  this.fromElement(e)
                )
              }),
              (e.fromElement = function(t) {
                return new this({
                  head: t.querySelector('head'),
                  body: t.querySelector('body')
                })
              }),
              (e.prototype.clone = function() {
                return new e({
                  head: this.head.cloneNode(!0),
                  body: this.body.cloneNode(!0)
                })
              }),
              (e.prototype.getRootLocation = function() {
                var e, i
                return (
                  (i = null != (e = this.getSetting('root')) ? e : '/'),
                  new t.Location(i)
                )
              }),
              (e.prototype.getCacheControlValue = function() {
                return this.getSetting('cache-control')
              }),
              (e.prototype.hasAnchor = function(t) {
                try {
                  return null != this.body.querySelector("[id='" + t + "']")
                } catch (t) {}
              }),
              (e.prototype.isPreviewable = function() {
                return 'no-preview' !== this.getCacheControlValue()
              }),
              (e.prototype.isCacheable = function() {
                return 'no-cache' !== this.getCacheControlValue()
              }),
              (e.prototype.getSetting = function(t) {
                var e, i
                return (
                  (i = this.head.querySelectorAll(
                    "meta[name='turbolinks-" + t + "']"
                  )),
                  (e = i[i.length - 1]),
                  null != e ? e.getAttribute('content') : void 0
                )
              }),
              e
            )
          })()
        }.call(this),
        function() {
          var e = [].slice
          t.Renderer = (function() {
            function t() {}
            var i
            return (
              (t.render = function() {
                var t, i, n, o
                return (
                  (n = arguments[0]),
                  (i = arguments[1]),
                  (t = 3 <= arguments.length ? e.call(arguments, 2) : []),
                  (o = (function(t, e, i) {
                    i.prototype = t.prototype
                    var n = new i(),
                      o = t.apply(n, e)
                    return Object(o) === o ? o : n
                  })(this, t, function() {})),
                  (o.delegate = n),
                  o.render(i),
                  o
                )
              }),
              (t.prototype.renderView = function(t) {
                return (
                  this.delegate.viewWillRender(this.newBody),
                  t(),
                  this.delegate.viewRendered(this.newBody)
                )
              }),
              (t.prototype.invalidateView = function() {
                return this.delegate.viewInvalidated()
              }),
              (t.prototype.createScriptElement = function(t) {
                var e
                return 'false' === t.getAttribute('data-turbolinks-eval')
                  ? t
                  : ((e = document.createElement('script')),
                    (e.textContent = t.textContent),
                    i(e, t),
                    e)
              }),
              (i = function(t, e) {
                var i, n, o, r, s, a, l
                for (r = e.attributes, a = [], i = 0, n = r.length; n > i; i++)
                  (s = r[i]),
                    (o = s.name),
                    (l = s.value),
                    a.push(t.setAttribute(o, l))
                return a
              }),
              t
            )
          })()
        }.call(this),
        function() {
          t.HeadDetails = (function() {
            function t(t) {
              var e, i, r, s, a, l, c
              for (
                this.element = t,
                  this.elements = {},
                  c = this.element.childNodes,
                  s = 0,
                  l = c.length;
                l > s;
                s++
              )
                (r = c[s]),
                  r.nodeType === Node.ELEMENT_NODE &&
                    ((a = r.outerHTML),
                    (i =
                      null != (e = this.elements)[a]
                        ? e[a]
                        : (e[a] = { type: o(r), tracked: n(r), elements: [] })),
                    i.elements.push(r))
            }
            var e, i, n, o
            return (
              (t.prototype.hasElementWithKey = function(t) {
                return t in this.elements
              }),
              (t.prototype.getTrackedElementSignature = function() {
                var t, e
                return function() {
                  var i, n
                  ;(i = this.elements), (n = [])
                  for (t in i) (e = i[t].tracked), e && n.push(t)
                  return n
                }
                  .call(this)
                  .join('')
              }),
              (t.prototype.getScriptElementsNotInDetails = function(t) {
                return this.getElementsMatchingTypeNotInDetails('script', t)
              }),
              (t.prototype.getStylesheetElementsNotInDetails = function(t) {
                return this.getElementsMatchingTypeNotInDetails('stylesheet', t)
              }),
              (t.prototype.getElementsMatchingTypeNotInDetails = function(
                t,
                e
              ) {
                var i, n, o, r, s, a
                ;(o = this.elements), (s = [])
                for (n in o)
                  (r = o[n]),
                    (a = r.type),
                    (i = r.elements),
                    a !== t || e.hasElementWithKey(n) || s.push(i[0])
                return s
              }),
              (t.prototype.getProvisionalElements = function() {
                var t, e, i, n, o, r, s
                ;(i = []), (n = this.elements)
                for (e in n)
                  (o = n[e]),
                    (s = o.type),
                    (r = o.tracked),
                    (t = o.elements),
                    null != s || r
                      ? t.length > 1 && i.push.apply(i, t.slice(1))
                      : i.push.apply(i, t)
                return i
              }),
              (o = function(t) {
                return e(t) ? 'script' : i(t) ? 'stylesheet' : void 0
              }),
              (n = function(t) {
                return 'reload' === t.getAttribute('data-turbolinks-track')
              }),
              (e = function(t) {
                var e
                return (e = t.tagName.toLowerCase()), 'script' === e
              }),
              (i = function(t) {
                var e
                return (
                  (e = t.tagName.toLowerCase()),
                  'style' === e ||
                    ('link' === e && 'stylesheet' === t.getAttribute('rel'))
                )
              }),
              t
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
              function n() {
                this.constructor = t
              }
              for (var o in e) i.call(e, o) && (t[o] = e[o])
              return (
                (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.__super__ = e.prototype),
                t
              )
            },
            i = {}.hasOwnProperty
          t.SnapshotRenderer = (function(i) {
            function n(e, i) {
              ;(this.currentSnapshot = e),
                (this.newSnapshot = i),
                (this.currentHeadDetails = new t.HeadDetails(
                  this.currentSnapshot.head
                )),
                (this.newHeadDetails = new t.HeadDetails(
                  this.newSnapshot.head
                )),
                (this.newBody = this.newSnapshot.body)
            }
            return (
              e(n, i),
              (n.prototype.render = function(t) {
                return this.trackedElementsAreIdentical()
                  ? (this.mergeHead(),
                    this.renderView(
                      (function(e) {
                        return function() {
                          return (
                            e.replaceBody(),
                            e.focusFirstAutofocusableElement(),
                            t()
                          )
                        }
                      })(this)
                    ))
                  : this.invalidateView()
              }),
              (n.prototype.mergeHead = function() {
                return (
                  this.copyNewHeadStylesheetElements(),
                  this.copyNewHeadScriptElements(),
                  this.removeCurrentHeadProvisionalElements(),
                  this.copyNewHeadProvisionalElements()
                )
              }),
              (n.prototype.replaceBody = function() {
                return (
                  this.activateBodyScriptElements(),
                  this.importBodyPermanentElements(),
                  this.assignNewBody()
                )
              }),
              (n.prototype.trackedElementsAreIdentical = function() {
                return (
                  this.currentHeadDetails.getTrackedElementSignature() ===
                  this.newHeadDetails.getTrackedElementSignature()
                )
              }),
              (n.prototype.copyNewHeadStylesheetElements = function() {
                var t, e, i, n, o
                for (
                  n = this.getNewHeadStylesheetElements(),
                    o = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  (t = n[e]), o.push(document.head.appendChild(t))
                return o
              }),
              (n.prototype.copyNewHeadScriptElements = function() {
                var t, e, i, n, o
                for (
                  n = this.getNewHeadScriptElements(),
                    o = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  (t = n[e]),
                    o.push(
                      document.head.appendChild(this.createScriptElement(t))
                    )
                return o
              }),
              (n.prototype.removeCurrentHeadProvisionalElements = function() {
                var t, e, i, n, o
                for (
                  n = this.getCurrentHeadProvisionalElements(),
                    o = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  (t = n[e]), o.push(document.head.removeChild(t))
                return o
              }),
              (n.prototype.copyNewHeadProvisionalElements = function() {
                var t, e, i, n, o
                for (
                  n = this.getNewHeadProvisionalElements(),
                    o = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  (t = n[e]), o.push(document.head.appendChild(t))
                return o
              }),
              (n.prototype.importBodyPermanentElements = function() {
                var t, e, i, n, o, r
                for (
                  n = this.getNewBodyPermanentElements(),
                    r = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  (o = n[e]),
                    (t = this.findCurrentBodyPermanentElement(o))
                      ? r.push(o.parentNode.replaceChild(t, o))
                      : r.push(void 0)
                return r
              }),
              (n.prototype.activateBodyScriptElements = function() {
                var t, e, i, n, o, r
                for (
                  n = this.getNewBodyScriptElements(),
                    r = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  (o = n[e]),
                    (t = this.createScriptElement(o)),
                    r.push(o.parentNode.replaceChild(t, o))
                return r
              }),
              (n.prototype.assignNewBody = function() {
                return (document.body = this.newBody)
              }),
              (n.prototype.focusFirstAutofocusableElement = function() {
                var t
                return null != (t = this.findFirstAutofocusableElement())
                  ? t.focus()
                  : void 0
              }),
              (n.prototype.getNewHeadStylesheetElements = function() {
                return this.newHeadDetails.getStylesheetElementsNotInDetails(
                  this.currentHeadDetails
                )
              }),
              (n.prototype.getNewHeadScriptElements = function() {
                return this.newHeadDetails.getScriptElementsNotInDetails(
                  this.currentHeadDetails
                )
              }),
              (n.prototype.getCurrentHeadProvisionalElements = function() {
                return this.currentHeadDetails.getProvisionalElements()
              }),
              (n.prototype.getNewHeadProvisionalElements = function() {
                return this.newHeadDetails.getProvisionalElements()
              }),
              (n.prototype.getNewBodyPermanentElements = function() {
                return this.newBody.querySelectorAll(
                  '[id][data-turbolinks-permanent]'
                )
              }),
              (n.prototype.findCurrentBodyPermanentElement = function(t) {
                return document.body.querySelector(
                  '#' + t.id + '[data-turbolinks-permanent]'
                )
              }),
              (n.prototype.getNewBodyScriptElements = function() {
                return this.newBody.querySelectorAll('script')
              }),
              (n.prototype.findFirstAutofocusableElement = function() {
                return document.body.querySelector('[autofocus]')
              }),
              n
            )
          })(t.Renderer)
        }.call(this),
        function() {
          var e = function(t, e) {
              function n() {
                this.constructor = t
              }
              for (var o in e) i.call(e, o) && (t[o] = e[o])
              return (
                (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.__super__ = e.prototype),
                t
              )
            },
            i = {}.hasOwnProperty
          t.ErrorRenderer = (function(t) {
            function i(t) {
              this.html = t
            }
            return (
              e(i, t),
              (i.prototype.render = function(t) {
                return this.renderView(
                  (function(e) {
                    return function() {
                      return (
                        e.replaceDocumentHTML(),
                        e.activateBodyScriptElements(),
                        t()
                      )
                    }
                  })(this)
                )
              }),
              (i.prototype.replaceDocumentHTML = function() {
                return (document.documentElement.innerHTML = this.html)
              }),
              (i.prototype.activateBodyScriptElements = function() {
                var t, e, i, n, o, r
                for (
                  n = this.getScriptElements(), r = [], e = 0, i = n.length;
                  i > e;
                  e++
                )
                  (o = n[e]),
                    (t = this.createScriptElement(o)),
                    r.push(o.parentNode.replaceChild(t, o))
                return r
              }),
              (i.prototype.getScriptElements = function() {
                return document.documentElement.querySelectorAll('script')
              }),
              i
            )
          })(t.Renderer)
        }.call(this),
        function() {
          t.View = (function() {
            function e(t) {
              ;(this.delegate = t), (this.element = document.documentElement)
            }
            return (
              (e.prototype.getRootLocation = function() {
                return this.getSnapshot().getRootLocation()
              }),
              (e.prototype.getSnapshot = function() {
                return t.Snapshot.fromElement(this.element)
              }),
              (e.prototype.render = function(t, e) {
                var i, n, o
                return (
                  (o = t.snapshot),
                  (i = t.error),
                  (n = t.isPreview),
                  this.markAsPreview(n),
                  null != o ? this.renderSnapshot(o, e) : this.renderError(i, e)
                )
              }),
              (e.prototype.markAsPreview = function(t) {
                return t
                  ? this.element.setAttribute('data-turbolinks-preview', '')
                  : this.element.removeAttribute('data-turbolinks-preview')
              }),
              (e.prototype.renderSnapshot = function(e, i) {
                return t.SnapshotRenderer.render(
                  this.delegate,
                  i,
                  this.getSnapshot(),
                  t.Snapshot.wrap(e)
                )
              }),
              (e.prototype.renderError = function(e, i) {
                return t.ErrorRenderer.render(this.delegate, i, e)
              }),
              e
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }
          t.ScrollManager = (function() {
            function t(t) {
              ;(this.delegate = t), (this.onScroll = e(this.onScroll, this))
            }
            return (
              (t.prototype.start = function() {
                return this.started
                  ? void 0
                  : (addEventListener('scroll', this.onScroll, !1),
                    this.onScroll(),
                    (this.started = !0))
              }),
              (t.prototype.stop = function() {
                return this.started
                  ? (removeEventListener('scroll', this.onScroll, !1),
                    (this.started = !1))
                  : void 0
              }),
              (t.prototype.scrollToElement = function(t) {
                return t.scrollIntoView()
              }),
              (t.prototype.scrollToPosition = function(t) {
                var e, i
                return (e = t.x), (i = t.y), window.scrollTo(e, i)
              }),
              (t.prototype.onScroll = function() {
                return this.updatePosition({
                  x: window.pageXOffset,
                  y: window.pageYOffset
                })
              }),
              (t.prototype.updatePosition = function(t) {
                var e
                return (
                  (this.position = t),
                  null != (e = this.delegate)
                    ? e.scrollPositionChanged(this.position)
                    : void 0
                )
              }),
              t
            )
          })()
        }.call(this),
        function() {
          t.SnapshotCache = (function() {
            function e(t) {
              ;(this.size = t), (this.keys = []), (this.snapshots = {})
            }
            var i
            return (
              (e.prototype.has = function(t) {
                var e
                return (e = i(t)), e in this.snapshots
              }),
              (e.prototype.get = function(t) {
                var e
                if (this.has(t)) return (e = this.read(t)), this.touch(t), e
              }),
              (e.prototype.put = function(t, e) {
                return this.write(t, e), this.touch(t), e
              }),
              (e.prototype.read = function(t) {
                var e
                return (e = i(t)), this.snapshots[e]
              }),
              (e.prototype.write = function(t, e) {
                var n
                return (n = i(t)), (this.snapshots[n] = e)
              }),
              (e.prototype.touch = function(t) {
                var e, n
                return (
                  (n = i(t)),
                  (e = this.keys.indexOf(n)),
                  e > -1 && this.keys.splice(e, 1),
                  this.keys.unshift(n),
                  this.trim()
                )
              }),
              (e.prototype.trim = function() {
                var t, e, i, n, o
                for (
                  n = this.keys.splice(this.size), o = [], t = 0, i = n.length;
                  i > t;
                  t++
                )
                  (e = n[t]), o.push(delete this.snapshots[e])
                return o
              }),
              (i = function(e) {
                return t.Location.wrap(e).toCacheKey()
              }),
              e
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }
          t.Visit = (function() {
            function i(i, n, o) {
              ;(this.controller = i),
                (this.action = o),
                (this.performScroll = e(this.performScroll, this)),
                (this.identifier = t.uuid()),
                (this.location = t.Location.wrap(n)),
                (this.adapter = this.controller.adapter),
                (this.state = 'initialized'),
                (this.timingMetrics = {})
            }
            var n
            return (
              (i.prototype.start = function() {
                return 'initialized' === this.state
                  ? (this.recordTimingMetric('visitStart'),
                    (this.state = 'started'),
                    this.adapter.visitStarted(this))
                  : void 0
              }),
              (i.prototype.cancel = function() {
                var t
                return 'started' === this.state
                  ? (null != (t = this.request) && t.cancel(),
                    this.cancelRender(),
                    (this.state = 'canceled'))
                  : void 0
              }),
              (i.prototype.complete = function() {
                var t
                return 'started' === this.state
                  ? (this.recordTimingMetric('visitEnd'),
                    (this.state = 'completed'),
                    'function' == typeof (t = this.adapter).visitCompleted &&
                      t.visitCompleted(this),
                    this.controller.visitCompleted(this))
                  : void 0
              }),
              (i.prototype.fail = function() {
                var t
                return 'started' === this.state
                  ? ((this.state = 'failed'),
                    'function' == typeof (t = this.adapter).visitFailed
                      ? t.visitFailed(this)
                      : void 0)
                  : void 0
              }),
              (i.prototype.changeHistory = function() {
                var t, e
                return this.historyChanged
                  ? void 0
                  : ((t = this.location.isEqualTo(this.referrer)
                      ? 'replace'
                      : this.action),
                    (e = n(t)),
                    this.controller[e](
                      this.location,
                      this.restorationIdentifier
                    ),
                    (this.historyChanged = !0))
              }),
              (i.prototype.issueRequest = function() {
                return this.shouldIssueRequest() && null == this.request
                  ? ((this.progress = 0),
                    (this.request = new t.HttpRequest(
                      this,
                      this.location,
                      this.referrer
                    )),
                    this.request.send())
                  : void 0
              }),
              (i.prototype.getCachedSnapshot = function() {
                var t
                return !(t = this.controller.getCachedSnapshotForLocation(
                  this.location
                )) ||
                  (null != this.location.anchor &&
                    !t.hasAnchor(this.location.anchor)) ||
                  ('restore' !== this.action && !t.isPreviewable())
                  ? void 0
                  : t
              }),
              (i.prototype.hasCachedSnapshot = function() {
                return null != this.getCachedSnapshot()
              }),
              (i.prototype.loadCachedSnapshot = function() {
                var t, e
                return (e = this.getCachedSnapshot())
                  ? ((t = this.shouldIssueRequest()),
                    this.render(function() {
                      var i
                      return (
                        this.cacheSnapshot(),
                        this.controller.render(
                          { snapshot: e, isPreview: t },
                          this.performScroll
                        ),
                        'function' == typeof (i = this.adapter).visitRendered &&
                          i.visitRendered(this),
                        t ? void 0 : this.complete()
                      )
                    }))
                  : void 0
              }),
              (i.prototype.loadResponse = function() {
                return null != this.response
                  ? this.render(function() {
                      var t, e
                      return (
                        this.cacheSnapshot(),
                        this.request.failed
                          ? (this.controller.render(
                              { error: this.response },
                              this.performScroll
                            ),
                            'function' ==
                              typeof (t = this.adapter).visitRendered &&
                              t.visitRendered(this),
                            this.fail())
                          : (this.controller.render(
                              { snapshot: this.response },
                              this.performScroll
                            ),
                            'function' ==
                              typeof (e = this.adapter).visitRendered &&
                              e.visitRendered(this),
                            this.complete())
                      )
                    })
                  : void 0
              }),
              (i.prototype.followRedirect = function() {
                return this.redirectedToLocation && !this.followedRedirect
                  ? ((this.location = this.redirectedToLocation),
                    this.controller.replaceHistoryWithLocationAndRestorationIdentifier(
                      this.redirectedToLocation,
                      this.restorationIdentifier
                    ),
                    (this.followedRedirect = !0))
                  : void 0
              }),
              (i.prototype.requestStarted = function() {
                var t
                return (
                  this.recordTimingMetric('requestStart'),
                  'function' == typeof (t = this.adapter).visitRequestStarted
                    ? t.visitRequestStarted(this)
                    : void 0
                )
              }),
              (i.prototype.requestProgressed = function(t) {
                var e
                return (
                  (this.progress = t),
                  'function' == typeof (e = this.adapter).visitRequestProgressed
                    ? e.visitRequestProgressed(this)
                    : void 0
                )
              }),
              (i.prototype.requestCompletedWithResponse = function(e, i) {
                return (
                  (this.response = e),
                  null != i && (this.redirectedToLocation = t.Location.wrap(i)),
                  this.adapter.visitRequestCompleted(this)
                )
              }),
              (i.prototype.requestFailedWithStatusCode = function(t, e) {
                return (
                  (this.response = e),
                  this.adapter.visitRequestFailedWithStatusCode(this, t)
                )
              }),
              (i.prototype.requestFinished = function() {
                var t
                return (
                  this.recordTimingMetric('requestEnd'),
                  'function' == typeof (t = this.adapter).visitRequestFinished
                    ? t.visitRequestFinished(this)
                    : void 0
                )
              }),
              (i.prototype.performScroll = function() {
                return this.scrolled
                  ? void 0
                  : ('restore' === this.action
                      ? this.scrollToRestoredPosition() || this.scrollToTop()
                      : this.scrollToAnchor() || this.scrollToTop(),
                    (this.scrolled = !0))
              }),
              (i.prototype.scrollToRestoredPosition = function() {
                var t, e
                return (
                  (t =
                    null != (e = this.restorationData)
                      ? e.scrollPosition
                      : void 0),
                  null != t ? (this.controller.scrollToPosition(t), !0) : void 0
                )
              }),
              (i.prototype.scrollToAnchor = function() {
                return null != this.location.anchor
                  ? (this.controller.scrollToAnchor(this.location.anchor), !0)
                  : void 0
              }),
              (i.prototype.scrollToTop = function() {
                return this.controller.scrollToPosition({ x: 0, y: 0 })
              }),
              (i.prototype.recordTimingMetric = function(t) {
                var e
                return null != (e = this.timingMetrics)[t]
                  ? e[t]
                  : (e[t] = new Date().getTime())
              }),
              (i.prototype.getTimingMetrics = function() {
                return t.copyObject(this.timingMetrics)
              }),
              (n = function(t) {
                switch (t) {
                  case 'replace':
                    return 'replaceHistoryWithLocationAndRestorationIdentifier'
                  case 'advance':
                  case 'restore':
                    return 'pushHistoryWithLocationAndRestorationIdentifier'
                }
              }),
              (i.prototype.shouldIssueRequest = function() {
                return 'restore' !== this.action || !this.hasCachedSnapshot()
              }),
              (i.prototype.cacheSnapshot = function() {
                return this.snapshotCached
                  ? void 0
                  : (this.controller.cacheSnapshot(),
                    (this.snapshotCached = !0))
              }),
              (i.prototype.render = function(t) {
                return (
                  this.cancelRender(),
                  (this.frame = requestAnimationFrame(
                    (function(e) {
                      return function() {
                        return (e.frame = null), t.call(e)
                      }
                    })(this)
                  ))
                )
              }),
              (i.prototype.cancelRender = function() {
                return this.frame ? cancelAnimationFrame(this.frame) : void 0
              }),
              i
            )
          })()
        }.call(this),
        function() {
          var e = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }
          t.Controller = (function() {
            function i() {
              ;(this.clickBubbled = e(this.clickBubbled, this)),
                (this.clickCaptured = e(this.clickCaptured, this)),
                (this.pageLoaded = e(this.pageLoaded, this)),
                (this.history = new t.History(this)),
                (this.view = new t.View(this)),
                (this.scrollManager = new t.ScrollManager(this)),
                (this.restorationData = {}),
                this.clearCache()
            }
            return (
              (i.prototype.start = function() {
                return t.supported && !this.started
                  ? (addEventListener('click', this.clickCaptured, !0),
                    addEventListener('DOMContentLoaded', this.pageLoaded, !1),
                    this.scrollManager.start(),
                    this.startHistory(),
                    (this.started = !0),
                    (this.enabled = !0))
                  : void 0
              }),
              (i.prototype.disable = function() {
                return (this.enabled = !1)
              }),
              (i.prototype.stop = function() {
                return this.started
                  ? (removeEventListener('click', this.clickCaptured, !0),
                    removeEventListener(
                      'DOMContentLoaded',
                      this.pageLoaded,
                      !1
                    ),
                    this.scrollManager.stop(),
                    this.stopHistory(),
                    (this.started = !1))
                  : void 0
              }),
              (i.prototype.clearCache = function() {
                return (this.cache = new t.SnapshotCache(10))
              }),
              (i.prototype.visit = function(e, i) {
                var n, o
                return (
                  null == i && (i = {}),
                  (e = t.Location.wrap(e)),
                  this.applicationAllowsVisitingLocation(e)
                    ? this.locationIsVisitable(e)
                      ? ((n = null != (o = i.action) ? o : 'advance'),
                        this.adapter.visitProposedToLocationWithAction(e, n))
                      : (window.location = e)
                    : void 0
                )
              }),
              (i.prototype.startVisitToLocationWithAction = function(e, i, n) {
                var o
                return t.supported
                  ? ((o = this.getRestorationDataForIdentifier(n)),
                    this.startVisit(e, i, { restorationData: o }))
                  : (window.location = e)
              }),
              (i.prototype.startHistory = function() {
                return (
                  (this.location = t.Location.wrap(window.location)),
                  (this.restorationIdentifier = t.uuid()),
                  this.history.start(),
                  this.history.replace(
                    this.location,
                    this.restorationIdentifier
                  )
                )
              }),
              (i.prototype.stopHistory = function() {
                return this.history.stop()
              }),
              (i.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(
                e,
                i
              ) {
                return (
                  (this.restorationIdentifier = i),
                  (this.location = t.Location.wrap(e)),
                  this.history.push(this.location, this.restorationIdentifier)
                )
              }),
              (i.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(
                e,
                i
              ) {
                return (
                  (this.restorationIdentifier = i),
                  (this.location = t.Location.wrap(e)),
                  this.history.replace(
                    this.location,
                    this.restorationIdentifier
                  )
                )
              }),
              (i.prototype.historyPoppedToLocationWithRestorationIdentifier = function(
                e,
                i
              ) {
                var n
                return (
                  (this.restorationIdentifier = i),
                  this.enabled
                    ? ((n = this.getRestorationDataForIdentifier(
                        this.restorationIdentifier
                      )),
                      this.startVisit(e, 'restore', {
                        restorationIdentifier: this.restorationIdentifier,
                        restorationData: n,
                        historyChanged: !0
                      }),
                      (this.location = t.Location.wrap(e)))
                    : this.adapter.pageInvalidated()
                )
              }),
              (i.prototype.getCachedSnapshotForLocation = function(t) {
                var e
                return (e = this.cache.get(t)), e ? e.clone() : void 0
              }),
              (i.prototype.shouldCacheSnapshot = function() {
                return this.view.getSnapshot().isCacheable()
              }),
              (i.prototype.cacheSnapshot = function() {
                var t
                return this.shouldCacheSnapshot()
                  ? (this.notifyApplicationBeforeCachingSnapshot(),
                    (t = this.view.getSnapshot()),
                    this.cache.put(this.lastRenderedLocation, t.clone()))
                  : void 0
              }),
              (i.prototype.scrollToAnchor = function(t) {
                var e
                return (e = document.getElementById(t))
                  ? this.scrollToElement(e)
                  : this.scrollToPosition({ x: 0, y: 0 })
              }),
              (i.prototype.scrollToElement = function(t) {
                return this.scrollManager.scrollToElement(t)
              }),
              (i.prototype.scrollToPosition = function(t) {
                return this.scrollManager.scrollToPosition(t)
              }),
              (i.prototype.scrollPositionChanged = function(t) {
                var e
                return (
                  (e = this.getCurrentRestorationData()), (e.scrollPosition = t)
                )
              }),
              (i.prototype.render = function(t, e) {
                return this.view.render(t, e)
              }),
              (i.prototype.viewInvalidated = function() {
                return this.adapter.pageInvalidated()
              }),
              (i.prototype.viewWillRender = function(t) {
                return this.notifyApplicationBeforeRender(t)
              }),
              (i.prototype.viewRendered = function() {
                return (
                  (this.lastRenderedLocation = this.currentVisit.location),
                  this.notifyApplicationAfterRender()
                )
              }),
              (i.prototype.pageLoaded = function() {
                return (
                  (this.lastRenderedLocation = this.location),
                  this.notifyApplicationAfterPageLoad()
                )
              }),
              (i.prototype.clickCaptured = function() {
                return (
                  removeEventListener('click', this.clickBubbled, !1),
                  addEventListener('click', this.clickBubbled, !1)
                )
              }),
              (i.prototype.clickBubbled = function(t) {
                var e, i, n
                return this.enabled &&
                  this.clickEventIsSignificant(t) &&
                  (i = this.getVisitableLinkForNode(t.target)) &&
                  (n = this.getVisitableLocationForLink(i)) &&
                  this.applicationAllowsFollowingLinkToLocation(i, n)
                  ? (t.preventDefault(),
                    (e = this.getActionForLink(i)),
                    this.visit(n, { action: e }))
                  : void 0
              }),
              (i.prototype.applicationAllowsFollowingLinkToLocation = function(
                t,
                e
              ) {
                var i
                return (
                  (i = this.notifyApplicationAfterClickingLinkToLocation(t, e)),
                  !i.defaultPrevented
                )
              }),
              (i.prototype.applicationAllowsVisitingLocation = function(t) {
                var e
                return (
                  (e = this.notifyApplicationBeforeVisitingLocation(t)),
                  !e.defaultPrevented
                )
              }),
              (i.prototype.notifyApplicationAfterClickingLinkToLocation = function(
                e,
                i
              ) {
                return t.dispatch('turbolinks:click', {
                  target: e,
                  data: { url: i.absoluteURL },
                  cancelable: !0
                })
              }),
              (i.prototype.notifyApplicationBeforeVisitingLocation = function(
                e
              ) {
                return t.dispatch('turbolinks:before-visit', {
                  data: { url: e.absoluteURL },
                  cancelable: !0
                })
              }),
              (i.prototype.notifyApplicationAfterVisitingLocation = function(
                e
              ) {
                return t.dispatch('turbolinks:visit', {
                  data: { url: e.absoluteURL }
                })
              }),
              (i.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                return t.dispatch('turbolinks:before-cache')
              }),
              (i.prototype.notifyApplicationBeforeRender = function(e) {
                return t.dispatch('turbolinks:before-render', {
                  data: { newBody: e }
                })
              }),
              (i.prototype.notifyApplicationAfterRender = function() {
                return t.dispatch('turbolinks:render')
              }),
              (i.prototype.notifyApplicationAfterPageLoad = function(e) {
                return (
                  null == e && (e = {}),
                  t.dispatch('turbolinks:load', {
                    data: { url: this.location.absoluteURL, timing: e }
                  })
                )
              }),
              (i.prototype.startVisit = function(t, e, i) {
                var n
                return (
                  null != (n = this.currentVisit) && n.cancel(),
                  (this.currentVisit = this.createVisit(t, e, i)),
                  this.currentVisit.start(),
                  this.notifyApplicationAfterVisitingLocation(t)
                )
              }),
              (i.prototype.createVisit = function(e, i, n) {
                var o, r, s, a, l
                return (
                  (r = null != n ? n : {}),
                  (a = r.restorationIdentifier),
                  (s = r.restorationData),
                  (o = r.historyChanged),
                  (l = new t.Visit(this, e, i)),
                  (l.restorationIdentifier = null != a ? a : t.uuid()),
                  (l.restorationData = t.copyObject(s)),
                  (l.historyChanged = o),
                  (l.referrer = this.location),
                  l
                )
              }),
              (i.prototype.visitCompleted = function(t) {
                return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
              }),
              (i.prototype.clickEventIsSignificant = function(t) {
                return !(
                  t.defaultPrevented ||
                  t.target.isContentEditable ||
                  t.which > 1 ||
                  t.altKey ||
                  t.ctrlKey ||
                  t.metaKey ||
                  t.shiftKey
                )
              }),
              (i.prototype.getVisitableLinkForNode = function(e) {
                return this.nodeIsVisitable(e)
                  ? t.closest(e, 'a[href]:not([target])')
                  : void 0
              }),
              (i.prototype.getVisitableLocationForLink = function(e) {
                var i
                return (
                  (i = new t.Location(e.getAttribute('href'))),
                  this.locationIsVisitable(i) ? i : void 0
                )
              }),
              (i.prototype.getActionForLink = function(t) {
                var e
                return null != (e = t.getAttribute('data-turbolinks-action'))
                  ? e
                  : 'advance'
              }),
              (i.prototype.nodeIsVisitable = function(e) {
                var i
                return (
                  !(i = t.closest(e, '[data-turbolinks]')) ||
                  'false' !== i.getAttribute('data-turbolinks')
                )
              }),
              (i.prototype.locationIsVisitable = function(t) {
                return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
              }),
              (i.prototype.getCurrentRestorationData = function() {
                return this.getRestorationDataForIdentifier(
                  this.restorationIdentifier
                )
              }),
              (i.prototype.getRestorationDataForIdentifier = function(t) {
                var e
                return null != (e = this.restorationData)[t]
                  ? e[t]
                  : (e[t] = {})
              }),
              i
            )
          })()
        }.call(this),
        function() {
          var e, i, n
          ;(t.start = function() {
            return i()
              ? (null == t.controller && (t.controller = e()),
                t.controller.start())
              : void 0
          }),
            (i = function() {
              return null == window.Turbolinks && (window.Turbolinks = t), n()
            }),
            (e = function() {
              var e
              return (
                (e = new t.Controller()),
                (e.adapter = new t.BrowserAdapter(e)),
                e
              )
            }),
            (n = function() {
              return window.Turbolinks === t
            }),
            n() && t.start()
        }.call(this))
    }.call(this),
      'object' == typeof module && module.exports
        ? (module.exports = t)
        : 'function' == typeof define && define.amd && define(t))
  }.call(this),
  function() {
    ;(window.initAddressForm = function(t) {
      var e, i, n, o, r, s
      for (
        null == t && (t = $('#addressForm')),
          t.find('#addressSubmitBtn').on('click', function() {
            var e, i
            return (
              t
                .find('.addresses-form__form-inp-wrap .email-msg.valid')
                .removeClass('active'),
              t
                .find('#address_email,#shipping_email')
                .focus()
                .blur(),
              (e = t.find('#billing_same_false')),
              (i = e.length > 0 && e[0].checked),
              i &&
                t
                  .find('#billing_email')
                  .focus()
                  .blur(),
              s(0, i)
            )
          }),
          s = function(e, i) {
            return setTimeout(function() {
              if (
                $('#addressValidMailMsg,#shippingValidMailMsg').hasClass(
                  'active'
                ) &&
                (!i || $('#billingValidMailMsg').hasClass('active'))
              )
                return t.submit()
              if (
                $('#addressInvalidMailMsg,#shippingInvalidMailMsg').hasClass(
                  'active'
                ) ||
                (i && $('#billingInvalidMailMsg').hasClass('active'))
              );
              else if ((e++, e < 30)) return s(e, i)
            }, 500)
          },
          t.on('ajax:success', function(t, e) {
            var i, n, o, r
            if (e.valid === !0) return (location.href = '/addresses')
            if (e.valid === !1) {
              for (r = e.keys, i = 0, o = r.length; i < o; i++)
                (n = r[i]),
                  $('#' + n)
                    .addClass('error')
                    .attr('oninput', 'removeErrorFromInput(event)')
              return (
                ($(
                  '.addresses-form__form-btn,.registers-address__form-btn-wrap .btn'
                ).disabled = !1),
                reloadNoticeHashScript()
              )
            }
          }),
          t.find('.zipcode').each(function(t, e) {
            var i, n, o
            return (
              (e = $(e)),
              (i = '#' + e.attr('id')),
              (o = i.split('_')[0]),
              e.jpostal({
                postcode: [i],
                address: ((n = {}),
                (n[o + '_prefecture_code'] = '%3'),
                (n[o + '_city'] = '%4'),
                n)
              })
            )
          }),
          n = ['address', 'shipping', 'billing'],
          o = [],
          e = 0,
          i = n.length;
        e < i;
        e++
      )
        (r = n[e]),
          o.push(
            t.find('#' + r + '_email').on('blur', function(t) {
              var e
              return (
                (e = $(this)),
                t.target.value.match(
                  /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z]{2,8})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
                )
                  ? (e
                      .next()
                      .next()
                      .removeClass('active'),
                    e.next().addClass('active'))
                  : (e
                      .next()
                      .next()
                      .addClass('active'),
                    e.next().removeClass('active'))
              )
            })
          )
      return o
    }),
      (window.replaceDefaultAddressesForOrder = function(t, e, i) {
        return (
          modalHide(),
          $.ajax({
            url: '/register/address/replace.json',
            datatype: 'json',
            type: 'put',
            data: '&old_id=' + e + '&new_id=' + i + '&type=' + t
          }).done(function() {
            return location.reload()
          })
        )
      }),
      (window.confirmDeleteAddress = function(t) {
        var e, i
        return (
          document.getElementById('deleteAddressWrap') ||
            ((i = '/addresses/confirm_destroy.js'), (e = '&id=' + t)),
          modalShow(i, e)
        )
      }),
      (window.deleteAddress = function(t) {
        return (
          modalHide(),
          $.ajax({
            url: '/addresses/' + t + '.json',
            datatype: 'json',
            type: 'delete'
          }).done(function() {
            return (location.href = '/addresses')
          })
        )
      })
  }.call(this),
  function() {
    window.getAnnouncements = function() {
      var t
      return (
        (t = $('#announcementsList .announcements__list-item').length),
        $.ajax({
          url: '/announcements/list.js',
          datatype: 'js',
          data: '&loaded_count=' + t
        }).done(function(t) {
          if (t.no_result || $('.announcements__no-result').length > 0)
            return $('#showMore').hide()
        })
      )
    }
  }.call(this),
  function() {
    var t
    ;(window.getBookList = function(e) {
      var i, n, o, r
      return (
        null == e && (e = $('#bookList')),
        (r = $('.books.infinite-loader .wavy-loader')),
        e.hasClass('books__users-list') || 0 === r.length
          ? placeBookListBoxes(null)
          : r.length > 0
          ? (r.addClass('standby'),
            setTimeout(function() {
              return r.addClass('active')
            }, 10),
            (i = $('.books__list-box-wrap,.books__no-result').length),
            (n = '&book_count=' + i),
            '/favorites' === location.pathname
              ? (o = '/book_keepings.js')
              : e.hasClass('show') || e.hasClass('cart')
              ? ((o = '/books/flyers.js'),
                (n += '&book_ids=' + e.attr('data-book-ids')))
              : (o = '/discover/book_list.js'),
            '/discover/book_list.js' === o && getUserList(),
            $.ajax({ url: o, datatype: 'js', data: n }).done(function(e) {
              var n
              if (
                (r.removeClass('active'),
                setTimeout(function() {
                  return e.no_result ? r.remove() : r.removeClass('standby')
                }, 300),
                !e.no_result)
              )
                return 0 === i && (n = initBookListEventListeners), t(n)
            }))
          : void 0
      )
    }),
      (t = function(t) {
        var e, i
        return (
          null == t && (t = null),
          (e = $('.books__list-box-wrap')
            .not('.active')
            .find('.img')),
          e.length > 0
            ? ((i = 0),
              e.each(function(n, o) {
                var r
                return (
                  (r = $(o).attr('src')),
                  $(o).attr('src', ''),
                  $(o).bind('load', function() {
                    if (((i += 1), i === e.length)) return placeBookListBoxes(t)
                  }),
                  $(o).attr('src', r)
                )
              }))
            : placeBookListBoxes(t)
        )
      }),
      (window.placeBookListBoxes = function(t) {
        var e, i, n, o, r, s, a, l, c
        for (
          n = 'function' == typeof t,
            s = $('#bookList'),
            a = s.find('.books__list-box-wrap'),
            o = 0,
            r = a.length;
          o < r;
          o++
        )
          (c = a[o]),
            (c = $(c)),
            (e = c.find('.books__list-box')),
            e.attr('style') ||
              (e.innerHeight(e.innerWidth()),
              (i = e.find('.books__list-box-img')),
              i.innerHeight(Math.floor((3 * i.innerWidth()) / 4)),
              (l = $(document).scrollTop() + window.innerHeight),
              (!n || l > c.offset().top) &&
                e.innerHeight() > 1 &&
                c.addClass('active'))
        if ((objectFitImages(), n)) return t(s)
      }),
      (window.initBookListEventListeners = function(t) {
        var e, i
        return (
          null == t && (t = $('#bookList')),
          (i = !1),
          (e = location.pathname),
          $(window)
            .unbind('.discoverBooksScroll')
            .on('scroll.discoverBooksScroll', function() {
              var n, o, r, s, a
              if (e !== location.pathname)
                return setTimeout(function() {
                  return (t = $('#bookList')), (e = location.pathname)
                }, 1e3)
              if (t.length > 0) {
                for (
                  s = $(document).scrollTop() + window.innerHeight,
                    r = $('.books__list-box-wrap').not('.active'),
                    n = 0,
                    o = r.length;
                  n < o;
                  n++
                )
                  (a = r[n]),
                    (a = $(a)),
                    s > a.offset().top &&
                      a.find('.books__list-box').innerHeight() > 1 &&
                      a.addClass('active')
                return (
                  i !== !1 && clearTimeout(i),
                  (i = setTimeout(function() {
                    var e
                    if (
                      t.length > 0 &&
                      ((s = $(document).scrollTop() + window.innerHeight),
                      (e = t.offset().top + t.height() - 300),
                      s > e)
                    )
                      return getBookList()
                  }, 300))
                )
              }
            })
        )
      }),
      (window.selectBookCategory = function(t) {
        var e
        return (
          (e = t.id.split('_')[1]),
          $.ajax({
            url: '/discover_books/change_category',
            datatype: 'json',
            data: '&category_id=' + e
          }).done(function(t) {
            return (location.href = t.path)
          })
        )
      })
  }.call(this),
  function() {
    ;(window.handleBookKeeping = function(t, e) {
      var i, n, o, r
      return (
        (t = $(t)),
        (i = t.find('.svg')),
        (n = i.hasClass('active')),
        n
          ? ((r = '/book_keepings/' + t.attr('data-id') + '.json'),
            (o = 'delete'))
          : ((r = '/book_keepings.json'), (o = 'post')),
        $.ajax({
          url: r,
          datatype: 'json',
          type: o,
          data: '&book_id=' + e
        }).done(function(e) {
          return e.success === !0
            ? n
              ? (i
                  .addClass('icon-svg_like_n')
                  .removeClass('icon-svg_like_o active'),
                t.attr('data-id', 0))
              : (i
                  .addClass('icon-svg_like_o active')
                  .removeClass('icon-svg_like_n'),
                t.attr('data-id', e.id))
            : userSigninModal()
        })
      )
    }),
      (window.removeBookFromKeepList = function(t, e, i) {
        return (
          (t = $(t)),
          $.ajax({
            url: '/book_keepings/' + e + '.json',
            datatype: 'json',
            type: 'delete',
            data: '&book_id=' + i
          }).done(function() {
            var e
            return (
              (e = t.parents('.books__list-box-wrap')),
              e.removeClass('active'),
              setTimeout(function() {
                return e.remove()
              }, 650)
            )
          })
        )
      })
  }.call(this),
  function() {
    ;(window.toggleBookPublishingSetting = function(t, e) {
      var i, n
      return (
        (n = $('.books-manage__book-list-label.btn.active').length),
        (i = $(e).hasClass('active') ? 'hide' : 'publish'),
        'publish' === i && n > 2
          ? modalShow('/books/confirm_publish.js', '&book_id=' + t)
          : $.ajax({
              url: '/books/' + t + '/' + i + '.json',
              datatype: 'json',
              type: 'put'
            }).done(function(t) {
              return t.success ? location.reload() : reloadNoticeHashScript()
            })
      )
    }),
      (window.confirmDeleteBook = function(t) {
        return modalShow('/books/confirm_destroy.js?id=' + t)
      }),
      (window.deleteBook = function(t) {
        return (
          modalHide(),
          $.ajax({
            url: '/books/' + t + '.json',
            datatype: 'json',
            type: 'delete'
          }).done(function() {
            return (location.href = '/books/manage')
          })
        )
      }),
      (window.createBookFromExhb = function(t) {
        return $.ajax({
          url: '/books.html',
          datatype: 'html',
          type: 'post',
          data: '&exhibition_id=' + t
        })
      })
  }.call(this),
  function() {
    ;(window.startPicDragOntoBook = function(t) {
      return t.dataTransfer.setData('text', t.target.id)
    }),
      (window.pasteDroppedPicToBook = function(t) {
        var e, i
        if (
          (t.preventDefault(),
          (e = t.target.id.split('_').pop()),
          (i = t.dataTransfer
            .getData('text')
            .split('_')
            .pop()))
        )
          return $.ajax({
            url: '/book_pictures.js',
            datatype: 'js',
            type: 'post',
            data: '&id=' + i + '&page_num=' + e
          })
      }),
      (window.removePicFromBook = function(t) {
        return (
          modalHide(),
          $.ajax({
            url: '/book_pictures/' + t + '.js',
            datatype: 'js',
            type: 'delete'
          })
        )
      })
  }.call(this),
  function() {
    var t, e
    ;(window.showBookPreviewModal = function(t) {
      var e
      return (
        (e = $('#fullWindowModal')),
        $.ajax({
          url: '/book_preview/slider.js',
          datatype: 'js',
          data: '&id=' + t
        }).done(function() {
          return e.addClass('standby active'), initBookPreviewSlider()
        })
      )
    }),
      (window.initBookPreviewSlider = function() {
        var i, n
        return (
          (n = $('#bookPreviewSlider')),
          n.slick({
            draggable: !1,
            slidesToShow: 1,
            speed: 300,
            cssEase: 'ease-out',
            infinite: !1,
            fade: !0,
            responsive: [{ breakpoint: 1e3, settings: { draggable: !0 } }]
          }),
          t(n),
          (i = location.pathname),
          $(window)
            .unbind('.bookPreviewResize')
            .on('resize.bookPreviewResize', function(o) {
              var r
              return i !== location.pathname
                ? $(this).unbind(o)
                : ((n = $('#bookPreviewSlider')),
                  n.is(':visible') && t(n),
                  (r = $(
                    '#expandedBookPreviewWrap, #expandedApiBookPreviewWrap'
                  )),
                  r.is(':visible') ? e(r) : void 0)
            })
        )
      }),
      (t = function(t) {
        var e, i, n, o, r, s, a
        return (
          null == t && (t = $('#bookPreviewSlider')),
          (i = location.pathname),
          $('.slick-arrow').addClass('icon-svg_arrow'),
          (a = $(window).width()),
          i.includes('edit') &&
            ((s = $(window).height()),
            t.innerHeight(Math.min.apply(null, [(2 * a) / 3, s, 640]))),
          t.find('.slide').innerWidth(a),
          (r = t.find('.slide-in')),
          (e = t.hasClass('remote') ? '80%' : '90%'),
          r.css('width', e),
          r.css('height', '100%'),
          (n = r.innerHeight()),
          (o = r.innerWidth()),
          2 * n < o ? r.innerWidth(2 * n) : r.innerHeight(o / 2)
        )
      }),
      (window.hideBookPreviewModal = function() {
        var t
        return (
          (t = $('#fullWindowModal')),
          t.removeClass('active'),
          setTimeout(function() {
            return t.removeClass('standby')
          }, 500)
        )
      }),
      (window.showExpandedBookPreview = function(t, i, n) {
        var o, r
        return (
          t.stopPropagation(),
          $('#bookPreviewHide, #bookPreviewWrap').fadeOut('fast'),
          (r = $('#expandedBookPreviewWrap')),
          r.fadeIn('fast'),
          e(r),
          (o = r.find('.book-preview__expanded-pic-wrap')),
          0 === i
            ? r.find('.expanded-front').addClass('active')
            : (r
                .find('.expanded-inside .book-preview__expanded-pic')
                .attr('src', n),
              r.find('.expanded-inside').addClass('active'))
        )
      }),
      (window.hideExpandedBookPreview = function() {
        var e
        if (
          ((e = $('#expandedBookPreviewWrap, #expandedApiBookPreviewWrap')),
          e.is(':visible'))
        )
          return (
            $('#bookPreviewWrap').fadeIn('fast'),
            location.pathname.includes('edit') &&
              $('#bookPreviewHide').fadeIn('fast'),
            e.fadeOut('fast'),
            e
              .find(
                '.book-preview__expanded-page, .book-preview__expanded-api-front'
              )
              .removeClass('active'),
            t()
          )
      }),
      (e = function(t) {
        var e, i, n
        return (
          null == t &&
            (t = $('#expandedBookPreviewWrap, #expandedApiBookPreviewWrap')),
          (n = $(window).width()),
          (i = location.pathname.includes('edit')
            ? $(window).height()
            : $('#galleryBookPreview').innerHeight()),
          (e = Math.min.apply(null, [n, i, 640])),
          t.innerWidth(e),
          t.innerHeight(e)
        )
      }),
      (window.showExpandedApiBookPreview = function(t) {
        var i
        return (
          t.stopPropagation(),
          $('#bookPreviewHide, #bookPreviewWrap').fadeOut('fast'),
          (i = $('#expandedApiBookPreviewWrap')),
          e(i),
          i.fadeIn('fast'),
          i.find('.book-preview__expanded-api-front').addClass('active')
        )
      })
  }.call(this),
  function() {
    var t
    ;(window.initBookForm = function() {
      var t, e
      return (
        (e = document.getElementsByClassName('touchable').length > 0),
        (t = e ? 'mobile' : 'pc'),
        $.ajax({
          url: '/books/form.js',
          datatype: 'js',
          data: '&client=' + t
        }).done(function() {
          var i, n
          return (
            e
              ? initMobileBookForm()
              : ((n = $('#booksPreviewSliderMain').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: !1,
                  fade: !0,
                  asNavFor: '#booksPreviewSliderNav'
                })),
                n.on('afterChange', function() {
                  return handleBookPreviewSliderChange()
                }),
                (i = 7),
                $('#booksPreviewSliderNav').slick({
                  slidesToShow: i,
                  slidesToScroll: 3,
                  infinite: !1,
                  asNavFor: '#booksPreviewSliderMain',
                  focusOnSelect: !0,
                  swipeToSlide: !0
                }),
                $('.slick-arrow').addClass('icon-svg_arrow'),
                adjustBookThumbAspect(i),
                $("input[type='radio'][name='book[book_length_id]']").on(
                  'change',
                  function(t) {
                    var e, i
                    return (
                      (i = t.target.value),
                      (e = $(t.target)
                        .parent()
                        .attr('data-book-id')),
                      $.ajax({
                        url: '/books/' + e + '.json',
                        datatype: 'json',
                        type: 'put',
                        data: '&book[book_length_id]=' + i
                      }).done(function() {
                        return location.reload()
                      })
                    )
                  }
                )),
            renderBookPictureSelector(t)
          )
        })
      )
    }),
      (window.adjustBookThumbAspect = function(t) {
        var e, i, n, o, r, s, a, l, c, u, d, h, p
        for (
          p = $('.preview-slider-nav .slide'),
            c = p.find('.slide-in'),
            n = 0,
            r = c.length;
          n < r;
          n++
        )
          (h = c[n]),
            $(h).outerHeight($(h).outerWidth() / 2),
            $(h).hasClass('front') && $(h).outerWidth($(h).outerWidth() / 2)
        for (
          adjustBookPreviewAspect(), u = [], e = o = 0, s = p.length;
          o < s;
          e = ++o
        )
          (h = p[e]),
            $(h).hasClass('slick-cloned') &&
              ((d = e < t ? p.length - 10 + (e - t) : e + t - p.length),
              u.push(
                (function() {
                  var t, e, n, o
                  for (
                    n = $(h).find('.pic-wrap'), o = [], i = e = 0, t = n.length;
                    e < t;
                    i = ++e
                  ) {
                    switch (((l = n[i]), d)) {
                      case 0:
                        a = d
                        break
                      case 1:
                        continue
                      default:
                        a = 2 * (d - 1) + i
                    }
                    o.push($(l).attr('id', 'dummy_' + a))
                  }
                  return o
                })()
              ))
        return u
      }),
      (window.adjustBookPreviewAspect = function() {
        var t, e, i, n, o, r, s, a, l, c
        for (
          c = $('.books-edit__form-book-box').outerHeight(),
            i = $('.preview-slider-nav-wrap').outerHeight(),
            r = c - i - 20 - 40,
            s = $('.preview-slider-main'),
            a = s.find('.slide'),
            s.height(r),
            a.height(r),
            l = a.find('.slide-in'),
            r < l.outerWidth() / 2
              ? (s.width(2 * r),
                a.outerWidth(2 * r),
                l.outerWidth(2 * r),
                l.outerHeight(r))
              : l.outerHeight($(l[1]).outerWidth() / 2),
            n = [],
            t = 0,
            e = l.length;
          t < e;
          t++
        )
          (o = l[t]),
            $(o).hasClass('front') &&
              n.push($(o).outerWidth($(o).outerWidth() / 2))
        return n
      }),
      (window.renderBookPictureSelector = function(t) {
        var e
        return (
          (e = $(
            '.' +
              ('mobile' === t ? 'sp-' : '') +
              'books-edit__form-picture-list-item'
          ).length),
          $.ajax({
            url: '/book_pictures/selector.js',
            datatype: 'js',
            data: '&client=' + t + '&count=' + e
          }).done(function() {
            return 'pc' === t
              ? handleBookPreviewSliderChange()
              : adjustMobileBookPictureBoxAspect()
          })
        )
      }),
      (window.updateBookCategory = function(t, e) {
        return $.ajax({
          url: '/books/' + e + '.json',
          datatype: 'json',
          type: 'put',
          data: '&book[category_id]=' + t.target.value
        })
      }),
      (window.showBookLengthSelectModal = function(t) {
        var e, i
        return (
          document.getElementById('bookLengthSelect') ||
            ((i = '/book_lengths/select.js'), (e = '&book_id=' + t)),
          modalShow(i, e)
        )
      }),
      (window.showBookFormModal = function(t, e) {
        var i, n
        return (
          null == e && (e = 'title'),
          null == document.getElementById(e + 'BookForm') &&
            ((n = '/books/' + t + '/edit.js'), (i = '&type=' + e)),
          modalShow(n, i)
        )
      }),
      (window.handleBookPreviewSliderChange = function() {
        var t
        return (
          (t = $('.books-edit__form-picture-list-item-in.pasted')),
          $('.preview-slider-main .slide')
            .first()
            .hasClass('slick-current')
            ? (t.find('.img').attr('draggable', !0),
              t.find('.cover').fadeOut('fast'))
            : (t.find('.img').attr('draggable', !1),
              t.find('.cover').fadeIn('fast'))
        )
      }),
      (window.confirmToPublishBook = function(t) {
        var e, i
        return (
          document.getElementById('publishBookWrap') ||
            ((i = '/books/confirm_publish.js'), (e = '&book_id=' + t)),
          modalShow(i, e)
        )
      }),
      (window.publishBook = function(t) {
        return $.ajax({ url: '/books/publish_modal.js', datatype: 'js' }).done(
          function() {
            return $.ajax({
              url: '/books/' + t + '/publish.html',
              datatype: 'html',
              type: 'put'
            })
          }
        )
      }),
      (window.initBookShow = function() {
        var e, i
        return (
          initBookPreviewSlider(),
          t(),
          (i = location.pathname),
          (e = !1),
          $(window)
            .unbind('.bookShowPicsResize')
            .on('resize.bookShowPicsResize', function() {
              if (i === location.pathname)
                return (
                  e !== !1 && clearTimeout(e),
                  (e = setTimeout(function() {
                    return t()
                  }, 300))
                )
            })
        )
      }),
      (t = function() {
        var t
        return (t = $('.book__pics-page')), t.innerHeight(t.innerWidth())
      })
  }.call(this),
  function() {
    var t = [].slice
    ;(this.ActionCable = {
      INTERNAL: {
        message_types: {
          welcome: 'welcome',
          ping: 'ping',
          confirmation: 'confirm_subscription',
          rejection: 'reject_subscription'
        },
        default_mount_path: '/cable',
        protocols: ['actioncable-v1-json', 'actioncable-unsupported']
      },
      createConsumer: function(t) {
        var e
        return (
          null == t &&
            (t =
              null != (e = this.getConfig('url'))
                ? e
                : this.INTERNAL.default_mount_path),
          new ActionCable.Consumer(this.createWebSocketURL(t))
        )
      },
      getConfig: function(t) {
        var e
        return (
          (e = document.head.querySelector(
            "meta[name='action-cable-" + t + "']"
          )),
          null != e ? e.getAttribute('content') : void 0
        )
      },
      createWebSocketURL: function(t) {
        var e
        return t && !/^wss?:/i.test(t)
          ? ((e = document.createElement('a')),
            (e.href = t),
            (e.href = e.href),
            (e.protocol = e.protocol.replace('http', 'ws')),
            e.href)
          : t
      },
      startDebugging: function() {
        return (this.debugging = !0)
      },
      stopDebugging: function() {
        return (this.debugging = null)
      },
      log: function() {
        var e
        if (
          ((e = 1 <= arguments.length ? t.call(arguments, 0) : []),
          this.debugging)
        )
          return (
            e.push(Date.now()),
            console.log.apply(console, ['[ActionCable]'].concat(t.call(e)))
          )
      }
    }),
      'undefined' != typeof window &&
        null !== window &&
        (window.ActionCable = this.ActionCable),
      'undefined' != typeof module &&
        null !== module &&
        (module.exports = this.ActionCable)
  }.call(this),
  function() {
    var t = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    }
    ActionCable.ConnectionMonitor = (function() {
      function e(e) {
        ;(this.connection = e),
          (this.visibilityDidChange = t(this.visibilityDidChange, this)),
          (this.reconnectAttempts = 0)
      }
      var i, n, o
      return (
        (e.pollInterval = { min: 3, max: 30 }),
        (e.staleThreshold = 6),
        (e.prototype.start = function() {
          if (!this.isRunning())
            return (
              (this.startedAt = n()),
              delete this.stoppedAt,
              this.startPolling(),
              document.addEventListener(
                'visibilitychange',
                this.visibilityDidChange
              ),
              ActionCable.log(
                'ConnectionMonitor started. pollInterval = ' +
                  this.getPollInterval() +
                  ' ms'
              )
            )
        }),
        (e.prototype.stop = function() {
          if (this.isRunning())
            return (
              (this.stoppedAt = n()),
              this.stopPolling(),
              document.removeEventListener(
                'visibilitychange',
                this.visibilityDidChange
              ),
              ActionCable.log('ConnectionMonitor stopped')
            )
        }),
        (e.prototype.isRunning = function() {
          return null != this.startedAt && null == this.stoppedAt
        }),
        (e.prototype.recordPing = function() {
          return (this.pingedAt = n())
        }),
        (e.prototype.recordConnect = function() {
          return (
            (this.reconnectAttempts = 0),
            this.recordPing(),
            delete this.disconnectedAt,
            ActionCable.log('ConnectionMonitor recorded connect')
          )
        }),
        (e.prototype.recordDisconnect = function() {
          return (
            (this.disconnectedAt = n()),
            ActionCable.log('ConnectionMonitor recorded disconnect')
          )
        }),
        (e.prototype.startPolling = function() {
          return this.stopPolling(), this.poll()
        }),
        (e.prototype.stopPolling = function() {
          return clearTimeout(this.pollTimeout)
        }),
        (e.prototype.poll = function() {
          return (this.pollTimeout = setTimeout(
            (function(t) {
              return function() {
                return t.reconnectIfStale(), t.poll()
              }
            })(this),
            this.getPollInterval()
          ))
        }),
        (e.prototype.getPollInterval = function() {
          var t, e, n, o
          return (
            (o = this.constructor.pollInterval),
            (n = o.min),
            (e = o.max),
            (t = 5 * Math.log(this.reconnectAttempts + 1)),
            Math.round(1e3 * i(t, n, e))
          )
        }),
        (e.prototype.reconnectIfStale = function() {
          if (this.connectionIsStale())
            return (
              ActionCable.log(
                'ConnectionMonitor detected stale connection. reconnectAttempts = ' +
                  this.reconnectAttempts +
                  ', pollInterval = ' +
                  this.getPollInterval() +
                  ' ms, time disconnected = ' +
                  o(this.disconnectedAt) +
                  ' s, stale threshold = ' +
                  this.constructor.staleThreshold +
                  ' s'
              ),
              this.reconnectAttempts++,
              this.disconnectedRecently()
                ? ActionCable.log(
                    'ConnectionMonitor skipping reopening recent disconnect'
                  )
                : (ActionCable.log('ConnectionMonitor reopening'),
                  this.connection.reopen())
            )
        }),
        (e.prototype.connectionIsStale = function() {
          var t
          return (
            o(null != (t = this.pingedAt) ? t : this.startedAt) >
            this.constructor.staleThreshold
          )
        }),
        (e.prototype.disconnectedRecently = function() {
          return (
            this.disconnectedAt &&
            o(this.disconnectedAt) < this.constructor.staleThreshold
          )
        }),
        (e.prototype.visibilityDidChange = function() {
          if ('visible' === document.visibilityState)
            return setTimeout(
              (function(t) {
                return function() {
                  if (t.connectionIsStale() || !t.connection.isOpen())
                    return (
                      ActionCable.log(
                        'ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = ' +
                          document.visibilityState
                      ),
                      t.connection.reopen()
                    )
                }
              })(this),
              200
            )
        }),
        (n = function() {
          return new Date().getTime()
        }),
        (o = function(t) {
          return (n() - t) / 1e3
        }),
        (i = function(t, e, i) {
          return Math.max(e, Math.min(i, t))
        }),
        e
      )
    })()
  }.call(this),
  function() {
    var t,
      e,
      i,
      n,
      o,
      r,
      s = [].slice,
      a = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      },
      l =
        [].indexOf ||
        function(t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e
          return -1
        }
    ;(n = ActionCable.INTERNAL),
      (e = n.message_types),
      (i = n.protocols),
      (o = 2 <= i.length ? s.call(i, 0, (t = i.length - 1)) : ((t = 0), [])),
      (r = i[t++]),
      (ActionCable.Connection = (function() {
        function t(t) {
          ;(this.consumer = t),
            (this.open = a(this.open, this)),
            (this.subscriptions = this.consumer.subscriptions),
            (this.monitor = new ActionCable.ConnectionMonitor(this)),
            (this.disconnected = !0)
        }
        return (
          (t.reopenDelay = 500),
          (t.prototype.send = function(t) {
            return (
              !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)), !0)
            )
          }),
          (t.prototype.open = function() {
            if (this.isActive())
              throw (ActionCable.log(
                'Attempted to open WebSocket, but existing socket is ' +
                  this.getState()
              ),
              new Error('Existing connection must be closed before opening'))
            return (
              ActionCable.log(
                'Opening WebSocket, current state is ' +
                  this.getState() +
                  ', subprotocols: ' +
                  i
              ),
              null != this.webSocket && this.uninstallEventHandlers(),
              (this.webSocket = new WebSocket(this.consumer.url, i)),
              this.installEventHandlers(),
              this.monitor.start(),
              !0
            )
          }),
          (t.prototype.close = function(t) {
            var e, i
            if (
              ((e = (null != t ? t : { allowReconnect: !0 }).allowReconnect),
              e || this.monitor.stop(),
              this.isActive())
            )
              return null != (i = this.webSocket) ? i.close() : void 0
          }),
          (t.prototype.reopen = function() {
            var t
            if (
              (ActionCable.log(
                'Reopening WebSocket, current state is ' + this.getState()
              ),
              !this.isActive())
            )
              return this.open()
            try {
              return this.close()
            } catch (e) {
              return (t = e), ActionCable.log('Failed to reopen WebSocket', t)
            } finally {
              ActionCable.log(
                'Reopening WebSocket in ' + this.constructor.reopenDelay + 'ms'
              ),
                setTimeout(this.open, this.constructor.reopenDelay)
            }
          }),
          (t.prototype.getProtocol = function() {
            var t
            return null != (t = this.webSocket) ? t.protocol : void 0
          }),
          (t.prototype.isOpen = function() {
            return this.isState('open')
          }),
          (t.prototype.isActive = function() {
            return this.isState('open', 'connecting')
          }),
          (t.prototype.isProtocolSupported = function() {
            var t
            return (t = this.getProtocol()), l.call(o, t) >= 0
          }),
          (t.prototype.isState = function() {
            var t, e
            return (
              (e = 1 <= arguments.length ? s.call(arguments, 0) : []),
              (t = this.getState()),
              l.call(e, t) >= 0
            )
          }),
          (t.prototype.getState = function() {
            var t, e, i
            for (e in WebSocket)
              if (
                ((i = WebSocket[e]),
                i === (null != (t = this.webSocket) ? t.readyState : void 0))
              )
                return e.toLowerCase()
            return null
          }),
          (t.prototype.installEventHandlers = function() {
            var t, e
            for (t in this.events)
              (e = this.events[t].bind(this)), (this.webSocket['on' + t] = e)
          }),
          (t.prototype.uninstallEventHandlers = function() {
            var t
            for (t in this.events) this.webSocket['on' + t] = function() {}
          }),
          (t.prototype.events = {
            message: function(t) {
              var i, n, o, r
              if (this.isProtocolSupported())
                switch (
                  ((o = JSON.parse(t.data)),
                  (i = o.identifier),
                  (n = o.message),
                  (r = o.type),
                  r)
                ) {
                  case e.welcome:
                    return (
                      this.monitor.recordConnect(), this.subscriptions.reload()
                    )
                  case e.ping:
                    return this.monitor.recordPing()
                  case e.confirmation:
                    return this.subscriptions.notify(i, 'connected')
                  case e.rejection:
                    return this.subscriptions.reject(i)
                  default:
                    return this.subscriptions.notify(i, 'received', n)
                }
            },
            open: function() {
              if (
                (ActionCable.log(
                  "WebSocket onopen event, using '" +
                    this.getProtocol() +
                    "' subprotocol"
                ),
                (this.disconnected = !1),
                !this.isProtocolSupported())
              )
                return (
                  ActionCable.log(
                    'Protocol is unsupported. Stopping monitor and disconnecting.'
                  ),
                  this.close({ allowReconnect: !1 })
                )
            },
            close: function() {
              if (
                (ActionCable.log('WebSocket onclose event'), !this.disconnected)
              )
                return (
                  (this.disconnected = !0),
                  this.monitor.recordDisconnect(),
                  this.subscriptions.notifyAll('disconnected', {
                    willAttemptReconnect: this.monitor.isRunning()
                  })
                )
            },
            error: function() {
              return ActionCable.log('WebSocket onerror event')
            }
          }),
          t
        )
      })())
  }.call(this),
  function() {
    var t = [].slice
    ActionCable.Subscriptions = (function() {
      function e(t) {
        ;(this.consumer = t), (this.subscriptions = [])
      }
      return (
        (e.prototype.create = function(t, e) {
          var i, n, o
          return (
            (i = t),
            (n = 'object' == typeof i ? i : { channel: i }),
            (o = new ActionCable.Subscription(this.consumer, n, e)),
            this.add(o)
          )
        }),
        (e.prototype.add = function(t) {
          return (
            this.subscriptions.push(t),
            this.consumer.ensureActiveConnection(),
            this.notify(t, 'initialized'),
            this.sendCommand(t, 'subscribe'),
            t
          )
        }),
        (e.prototype.remove = function(t) {
          return (
            this.forget(t),
            this.findAll(t.identifier).length ||
              this.sendCommand(t, 'unsubscribe'),
            t
          )
        }),
        (e.prototype.reject = function(t) {
          var e, i, n, o, r
          for (n = this.findAll(t), o = [], e = 0, i = n.length; e < i; e++)
            (r = n[e]), this.forget(r), this.notify(r, 'rejected'), o.push(r)
          return o
        }),
        (e.prototype.forget = function(t) {
          var e
          return (
            (this.subscriptions = function() {
              var i, n, o, r
              for (
                o = this.subscriptions, r = [], i = 0, n = o.length;
                i < n;
                i++
              )
                (e = o[i]), e !== t && r.push(e)
              return r
            }.call(this)),
            t
          )
        }),
        (e.prototype.findAll = function(t) {
          var e, i, n, o, r
          for (n = this.subscriptions, o = [], e = 0, i = n.length; e < i; e++)
            (r = n[e]), r.identifier === t && o.push(r)
          return o
        }),
        (e.prototype.reload = function() {
          var t, e, i, n, o
          for (i = this.subscriptions, n = [], t = 0, e = i.length; t < e; t++)
            (o = i[t]), n.push(this.sendCommand(o, 'subscribe'))
          return n
        }),
        (e.prototype.notifyAll = function() {
          var e, i, n, o, r, s, a
          for (
            i = arguments[0],
              e = 2 <= arguments.length ? t.call(arguments, 1) : [],
              r = this.subscriptions,
              s = [],
              n = 0,
              o = r.length;
            n < o;
            n++
          )
            (a = r[n]),
              s.push(this.notify.apply(this, [a, i].concat(t.call(e))))
          return s
        }),
        (e.prototype.notify = function() {
          var e, i, n, o, r, s, a
          for (
            s = arguments[0],
              i = arguments[1],
              e = 3 <= arguments.length ? t.call(arguments, 2) : [],
              a = 'string' == typeof s ? this.findAll(s) : [s],
              r = [],
              n = 0,
              o = a.length;
            n < o;
            n++
          )
            (s = a[n]),
              r.push('function' == typeof s[i] ? s[i].apply(s, e) : void 0)
          return r
        }),
        (e.prototype.sendCommand = function(t, e) {
          var i
          return (
            (i = t.identifier),
            this.consumer.send({ command: e, identifier: i })
          )
        }),
        e
      )
    })()
  }.call(this),
  function() {
    ActionCable.Subscription = (function() {
      function t(t, i, n) {
        ;(this.consumer = t),
          null == i && (i = {}),
          (this.identifier = JSON.stringify(i)),
          e(this, n)
      }
      var e
      return (
        (t.prototype.perform = function(t, e) {
          return null == e && (e = {}), (e.action = t), this.send(e)
        }),
        (t.prototype.send = function(t) {
          return this.consumer.send({
            command: 'message',
            identifier: this.identifier,
            data: JSON.stringify(t)
          })
        }),
        (t.prototype.unsubscribe = function() {
          return this.consumer.subscriptions.remove(this)
        }),
        (e = function(t, e) {
          var i, n
          if (null != e) for (i in e) (n = e[i]), (t[i] = n)
          return t
        }),
        t
      )
    })()
  }.call(this),
  function() {
    ActionCable.Consumer = (function() {
      function t(t) {
        ;(this.url = t),
          (this.subscriptions = new ActionCable.Subscriptions(this)),
          (this.connection = new ActionCable.Connection(this))
      }
      return (
        (t.prototype.send = function(t) {
          return this.connection.send(t)
        }),
        (t.prototype.connect = function() {
          return this.connection.open()
        }),
        (t.prototype.disconnect = function() {
          return this.connection.close({ allowReconnect: !1 })
        }),
        (t.prototype.ensureActiveConnection = function() {
          if (!this.connection.isActive()) return this.connection.open()
        }),
        t
      )
    })()
  }.call(this),
  function() {
    this.App || (this.App = {}), (App.cable = ActionCable.createConsumer())
  }.call(this),
  function() {
    ;(window.addBookToCart = function(t, e) {
      var i, n
      return (
        (t = $(t)),
        (n = document.getElementById('order_quantity')),
        (i = n ? n.value : '1'),
        $.ajax({
          url: '/cart_books.json',
          datatype: 'json',
          type: 'post',
          data: '&book_id=' + e + '&quantity=' + i
        }).done(function(e) {
          var i
          return (
            reloadNoticeHashScript(),
            e.success === !0
              ? (t.hasClass('book__info-btn-in') &&
                  (t.fadeOut('fast'),
                  t
                    .next()
                    .fadeIn('fast')
                    .css('display', 'block')),
                modalShow('/cart/modal.js'),
                (i = $('#icoCartCounter,#menuCartCounter')),
                i.text(e.total),
                i.addClass('active'))
              : userSigninModal()
          )
        })
      )
    }),
      (window.updateCartBookQuantity = function(t, e) {
        return $.ajax({
          url: '/cart_books/' + e + '.json',
          datatype: 'json',
          type: 'put',
          data: '&quantity=' + t.value
        }).done(function() {
          return (location.href = '/cart')
        })
      }),
      (window.confirmRemoveBookFromCart = function(t) {
        var e
        return (
          document.getElementById('removeBookFromCartWrap') ||
            (e = '/cart_books/confirm_destroy.js?id=' + t),
          modalShow(e)
        )
      }),
      (window.removeBookFromCart = function(t) {
        return (
          modalHide(),
          $.ajax({
            url: '/cart_books/' + t + '.json',
            datatype: 'json',
            type: 'delete'
          }).done(function() {
            return (location.href = '/cart')
          })
        )
      })
  }.call(this),
  function() {
    var t
    ;(window.getPastExhibitionList = function(e) {
      var i, n
      if (((n = $('.exhibits.infinite-loader .wavy-loader')), n.length > 0))
        return (
          n.addClass('standby'),
          setTimeout(function() {
            return n.addClass('active')
          }, 10),
          (i = $('.past-exhibition__list-box-wrap,.past-exhibitions__no-result')
            .length),
          $.ajax({
            url: '/exhibition/closed.js',
            datatype: 'js',
            data: '&exhb_count=' + i + '&user_id=' + e
          }).done(function(e) {
            var o
            if (
              (n.removeClass('active'),
              setTimeout(function() {
                return e.no_result ? n.remove() : n.removeClass('standby')
              }, 300),
              !e.no_result)
            )
              return 0 === i && (o = initPastListEventListeners), t(o)
          })
        )
    }),
      (t = function(t) {
        var e, i
        return (
          null == t && (t = null),
          (e = $('.past-exhibition__list-box-wrap .img').not('.loaded')),
          e.length > 0
            ? ((i = 0),
              e.each(function(n, o) {
                var r
                return (
                  (r = $(o).attr('src')),
                  $(o).attr('src', ''),
                  $(o).bind('load', function() {
                    if (($(this).addClass('loaded'), (i += 1), i === e.length))
                      return initPastExhibitionBoxes(t)
                  }),
                  $(o).attr('src', r)
                )
              }))
            : initPastExhibitionBoxes(t)
        )
      }),
      (window.initPastExhibitionBoxes = function(t) {
        var e, i, n, o
        if (
          (null == t && (t = null),
          (e = $('.past-exhibition__list-box-wrap')),
          (o = $(document).scrollTop() + window.innerHeight),
          (n = window.matchMedia('(max-width: 640px)').matches
            ? 2
            : window.matchMedia('(max-width: 1000px)').matches
            ? 3
            : 4),
          (i = []),
          setTimeout(function() {
            var t, r, s, a, l, c, u, d, h, p
            for (p = [], s = a = 0, u = e.length; a < u; s = ++a) {
              if (
                ((t = e[s]),
                (i[s % n] = $(t)),
                (s + 1) % n === 0 || s + 1 === e.length)
              ) {
                for (
                  r = (function() {
                    var e, n, o
                    for (o = [], e = 0, n = i.length; e < n; e++)
                      (t = i[e]),
                        o.push(
                          $(t)
                            .find('img.img')
                            .height()
                        )
                    return o
                  })(),
                    h = Math.max.apply(null, r),
                    l = 0,
                    d = i.length;
                  l < d;
                  l++
                )
                  (c = i[l]),
                    c
                      .find('.past-exhibition__list-box-img-wrap')
                      .css('height', h)
                i = []
              }
              o > $(t).offset().top
                ? p.push($(t).addClass('active'))
                : p.push(void 0)
            }
            return p
          }, 300),
          'function' == typeof t)
        )
          return t()
      }),
      (window.initPastListEventListeners = function() {
        var t, e, i, n
        return (
          (t = $('#pastExhibitionList')),
          (e = location.pathname),
          (n = !1),
          $(window)
            .unbind('.closedScroll')
            .on('scroll.closedScroll', function() {
              var i
              return location.pathname !== e
                ? setTimeout(function() {
                    return (
                      (t = $('#pastExhibitionList')), (e = location.pathname)
                    )
                  }, 1e3)
                : t.length > 0
                ? ((i = $(document).scrollTop() + window.innerHeight),
                  t
                    .find('.past-exhibition__list-box-wrap')
                    .not('.active')
                    .each(function(t, e) {
                      var n
                      if (((n = $(e).offset().top), i > n))
                        return $(e).addClass('active')
                    }),
                  n !== !1 && clearTimeout(n),
                  (n = setTimeout(function() {
                    if (
                      ((i =
                        $(document).scrollTop() +
                        window.innerHeight -
                        t.offset().top),
                      i > t.height() - 200 && t.is(':visible'))
                    )
                      return getPastExhibitionList(t.attr('data'))
                  }, 300)))
                : void 0
            }),
          (i = !1),
          $(window)
            .unbind('.closedListResize')
            .on('resize.closedListResize', function() {
              if (location.pathname === e)
                return (
                  i !== !1 && clearTimeout(i),
                  (i = setTimeout(function() {
                    return initPastExhibitionBoxes()
                  }, Math.floor((1e3 / 60) * 10)))
                )
            })
        )
      })
  }.call(this),
  function() {
    var t
    ;(t = !1),
      (window.showCommentModal = function(t, e) {
        var i
        return (
          null == e && (e = 0),
          (i = (function() {
            switch (t) {
              case 'post':
                if (null === document.getElementById('new_comment'))
                  return '/comments/new.js'
                break
              case 'edit':
                if (null === document.getElementById('edit_comment_' + e))
                  return '/comments/' + e + '/edit.js'
                break
              case 'reply':
                if (null === document.getElementById('reply_to_' + e))
                  return '/comments/new.js?&reply_to_id=' + e
            }
          })()),
          modalShow(i)
        )
      }),
      (window.getComments = function() {
        var t, e, i, n
        return (
          (i = $('.comments__list-show-more .txt')),
          (n = $('.comments__list-show-more .wavy-loader')),
          (t = $('#commentCount').attr('data')),
          n.length > 0 &&
            (i.removeClass('active'),
            n.addClass('standby'),
            setTimeout(function() {
              return n.addClass('active')
            }, 10)),
          (e = document.getElementsByClassName('comments__list-item').length),
          $.ajax({
            url: '/comments.js',
            datatype: 'js',
            data: '&count=' + e + '&ids=' + t
          }).done(function(t) {
            return hideCommentShowMore(t.no_result, i, n)
          })
        )
      }),
      (window.hideCommentShowMore = function(t, e, i) {
        return (
          null == t && (t = null),
          null == e && (e = null),
          null == i && (i = null),
          t
            ? (0 ===
                document.getElementsByClassName('comments__list-item').length &&
                $('#commentListWrap').addClass('no_result'),
              $('.comments__list-show-more').fadeOut())
            : (e || (e = $('.comments__list-show-more .txt')),
              i || (i = $('.comments__list-show-more .wavy-loader')),
              e.addClass('active'),
              i.removeClass('active'),
              setTimeout(function() {
                return i.removeClass('standby')
              }, 200))
        )
      }),
      (window.handleShowingReportButton = function(e, i) {
        var n, o, r
        return (
          (n = $(i)),
          (o = e.targetTouches[0].clientX),
          t
            ? ((r = t - o),
              (r = r < 0 ? 0 : r > 45 ? 45 + Math.sqrt(r - 45) : r),
              n.css('margin-right', r),
              n.css('margin-left', r * -1))
            : (t = o + 1 * n.css('margin-right').replace('px', ''))
        )
      }),
      (window.resetOrgCmtX = function(e, i) {
        var n, o, r
        return (
          (n = $(i)),
          n.addClass('delay'),
          (o = e.changedTouches[0].clientX),
          t &&
            ((r = t - o),
            (r = r > 30 ? 45 : r <= 30 ? 0 : void 0),
            n.css('margin-right', r),
            n.css('margin-left', r * -1)),
          (t = !1),
          setTimeout(function() {
            return n.removeClass('delay')
          }, 200)
        )
      }),
      (window.showCommentReportModal = function(t) {
        var e
        return (e = '/comment_reports/new.js?id=' + t), modalShow(e)
      }),
      (window.toggleReportBodyField = function(t) {
        var e
        return (
          (e = '1' !== $(t).attr('value')),
          $('#reportBodyField').prop('disabled', e)
        )
      }),
      (window.toggleReportedComment = function(t, e, i) {
        var n, o
        return (
          (n = $(t)),
          (o = n.find('.comments__list-item-reported-btn')),
          n.hasClass('hidden')
            ? (n.removeClass('hidden'), o.text(i))
            : (n.addClass('hidden'), o.text(e))
        )
      })
  }.call(this),
  function() {
    var t
    ;(window.getContestEntryList = function(e) {
      var i
      return (
        null == e && (e = document.getElementById('contestEntryListShowMore')),
        (e = $(e)),
        (i = $('.contest-entry__list-box-wrap,.contest-entry__list-no-result')
          .length),
        $.ajax({
          url: '/contests/entry/list.js',
          datatype: 'js',
          data: '&count=' + i + '&id=' + e.attr('data-contest-id')
        }).done(function(n) {
          var o
          return n.no_result
            ? e
              ? e.remove()
              : void 0
            : (0 === i && (o = initContestEntryListEventListeners), t(o))
        })
      )
    }),
      (t = function(t) {
        var e, i
        return (
          null == t && (t = null),
          (e = $('.contest-entry__list-box-wrap .img').not('.loaded')),
          e.length > 0
            ? ((i = 0),
              e.each(function(n, o) {
                var r
                return (
                  (r = $(o).attr('src')),
                  $(o).attr('src', ''),
                  $(o).bind('load', function() {
                    if (($(this).addClass('loaded'), (i += 1), i === e.length))
                      return initContestEntryListBoxes(t)
                  }),
                  $(o).attr('src', r)
                )
              }))
            : initContestEntryListBoxes(t)
        )
      }),
      (window.initContestEntryListBoxes = function(t) {
        var e, i, n
        if (
          (null == t && (t = null),
          (e = $('.contest-entry__list-box-wrap')),
          (n = window.matchMedia('(max-width: 640px)').matches
            ? 2
            : window.matchMedia('(max-width: 1000px)').matches
            ? 3
            : 4),
          (i = []),
          setTimeout(function() {
            var t, o, r, s, a, l, c, u, d, h
            for (h = [], r = s = 0, c = e.length; s < c; r = ++s) {
              if (
                ((t = e[r]),
                (i[r % n] = $(t)),
                (r + 1) % n === 0 || r + 1 === e.length)
              ) {
                for (
                  o = (function() {
                    var e, n, o
                    for (o = [], e = 0, n = i.length; e < n; e++)
                      (t = i[e]),
                        o.push(
                          $(t)
                            .find('img.img')
                            .height()
                        )
                    return o
                  })(),
                    d = Math.max.apply(null, o),
                    a = 0,
                    u = i.length;
                  a < u;
                  a++
                )
                  (l = i[a]),
                    l.find('.contest-entry__list-box-img-wrap').css('height', d)
                i = []
              }
              h.push($(t).addClass('active'))
            }
            return h
          }, 300),
          'function' == typeof t)
        )
          return t()
      }),
      (window.initContestEntryListEventListeners = function() {
        var t, e, i
        return (
          (e = $('#ContestEntryList')),
          (t = location.pathname),
          (i = !1),
          $(window)
            .unbind('.contestEntryListResize')
            .on('resize.contestEntryListResize', function() {
              if (location.pathname === t)
                return (
                  i !== !1 && clearTimeout(i),
                  (i = setTimeout(function() {
                    return initPastExhibitionBoxes()
                  }, Math.floor((1e3 / 60) * 10)))
                )
            })
        )
      })
  }.call(this),
  function() {
    var t, e, i
    ;(window.initContestShow = function() {
      var e
      return (e = $('.contest-show__result')), i(e), t(e)
    }),
      (i = function(e) {
        var i, n
        return (
          (i = location.pathname),
          (n = !1),
          $(window)
            .unbind('.contestShowResize')
            .on('resize.contestShowResize', function() {
              return (
                location.pathname !== i &&
                  ((e = $('.contest-show__result')), (i = location.pathname)),
                n !== !1 && clearTimeout(n),
                (n = setTimeout(function() {
                  return t(e)
                }, Math.floor((1e3 / 60) * 10)))
              )
            })
        )
      }),
      (t = function(t) {
        return setTimeout(function() {
          var i, n, o, r, s, a, l
          if (t.length > 0)
            for (
              r = t.find('.contest-show__result-item-exhb-img-wrap'),
                i = 0,
                s = r.length;
              i < s;
              i++
            )
              (a = r[i]),
                (a = $(a)),
                (n = a.find('.img')),
                n.css('height', 'auto'),
                (l = Math.min.apply(null, [
                  566,
                  (n.innerHeight() * a.innerWidth()) / n.innerWidth()
                ])),
                a.css('height', l),
                (o = n.innerHeight() <= l ? l : 'auto'),
                n.css('height', o)
          return setTimeout(function() {
            return e()
          }, 400)
        }, 50)
      }),
      (e = function() {
        var t, e, i, n, o, r, s
        return (
          (o = $('#contestShowSide')),
          (s = o.find('.contest-show__side-in')),
          (r = s.outerHeight()),
          (n = window.matchMedia('(max-width: 1000px)').matches ? 60 : 40),
          (i = o.offset().top - n),
          (e =
            $(document).innerHeight() - $('#footer').innerHeight() - n - 100),
          (t = location.pathname),
          $(window)
            .unbind('.contestShowScroll')
            .on('scroll.contestShowScroll', function() {
              var n
              if (!window.matchMedia('(min-width: 641px)').matches)
                return s.removeClass('fixed')
              if (
                (location.pathname !== t &&
                  ((o = $('#contestShowSide')), (t = location.pathname)),
                o.length > 0)
              ) {
                if (((n = $(document).scrollTop()), n >= i && n + r < e))
                  return (
                    s.addClass('fixed'),
                    s.css('right', o.offset().right),
                    s.removeClass('btm')
                  )
                if ((s.removeClass('fixed'), n + r >= e))
                  return s.addClass('btm')
              }
            })
        )
      }),
      (window.goToEnterAContest = function(t) {
        return $.ajax({
          url: '/contests/' + t + '/entry_check.json',
          datatype: 'json'
        }).done(function(e) {
          return e.success
            ? (location.href = '/contests/' + t + '/entry')
            : (reloadNoticeHashScript(),
              e.signed_in ? void 0 : userSigninModal())
        })
      }),
      (window.contestNoticeHide = function(t) {
        if ((modalHide($('#contestNoticeWrap')), t)) return (location.href = t)
      }),
      (window.preventContestNoticeHide = function(t) {
        return t.stopPropagation()
      })
  }.call(this),
  function() {
    ;(window.initCoverImgUploader = function() {
      var t, e, i
      return (
        (t = $('#coverUploadForm')),
        (e = $('#coverImage')),
        (i = $('.cover-image-loader.wavy-loader')),
        t
          .unbind('.coverImgFormBefore')
          .on('ajax:beforeSend.coverImgFormBefore', function() {
            return (
              t.removeClass('active'),
              i.addClass('standby'),
              setTimeout(function() {
                return i.addClass('active'), e.removeClass('self')
              }, 10)
            )
          }),
        t
          .unbind('.coverImgFormSuccess')
          .on('ajax:success.coverImgFormSuccess', function() {
            return (
              t.addClass('active'),
              i.removeClass('active'),
              setTimeout(function() {
                return (
                  i.removeClass('standby'),
                  e.addClass('self'),
                  $('.user-show__cover-wrap.narrow').removeClass('narrow'),
                  reloadNoticeHashScript()
                )
              }, 200)
            )
          })
      )
    }),
      (window.clickSubmitCoverBtn = function() {
        return $('#submitCoverBtn').click()
      })
  }.call(this),
  function() {
    ;(window.getExhibitionsForAdmin = function() {
      var t
      return (
        (t = $('#dashboardExhibitions .dashboard__exhibition').length),
        $.ajax({
          url: '/exhibitions/unchecked.js',
          datatype: 'js',
          data: '&exhb_count=' + t
        }).done(function(t) {
          if (t.no_result || $('.exhibitions__no-result').length > 0)
            return $('#showMore').hide()
        })
      )
    }),
      (window.getBooksForAdmin = function() {
        return $.ajax({
          url: '/checkandcountbooks.js',
          datatype: 'js',
          data:
            '&book_count=' +
            $('.dashboard__publlished-book-item.published').length
        })
      }),
      (window.getOrdersForAdmin = function() {
        return $.ajax({
          url: '/dashboard/order_list.js',
          datatype: 'js',
          data:
            '&order_count=' + $('.dashboard__publlished-order-tr.body').length
        })
      })
  }.call(this),
  function() {
    window.prepareRegistForm = function(t) {
      var e, i, n, o, r, s, a, l, c
      return (
        $(t).on('submit', function() {
          return (
            (document.getElementById('uniqueEmailMsg').className =
              'devise__valid-msg'),
            $('#user_email')
              .focus()
              .blur(),
            c(0),
            !1
          )
        }),
        (c = function(e) {
          return setTimeout(function() {
            if ($('#uniqueEmailMsg').hasClass('active')) return t.submit()
            if (
              $('#formCheckEmailMsg').hasClass('active') ||
              $('#notUniqueEmailMsg').hasClass('active')
            );
            else if ((e++, e < 30)) return c(e)
          }, 500)
        }),
        (l = 600),
        (o = $('input#user_id_name')),
        (i = o[0].value),
        (a = !1),
        o.on('keyup blur', function(t) {
          return (
            a !== !1 && clearTimeout(a),
            (a = setTimeout(function() {
              return e(t)
            }, l))
          )
        }),
        (r = $('input#user_email')),
        (n = r[0].value),
        (s = !1),
        r.on('keyup', function(t) {
          return (
            s !== !1 && clearTimeout(s),
            (s = setTimeout(function() {
              return e(t)
            }, l))
          )
        }),
        r.on('blur', function(t) {
          return t.target.value.match(
            /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z]{2,8})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
          )
            ? e(t)
            : setTimeout(function() {
                return (
                  $('.devise__submit-btn,.account-form__submit').prop(
                    'disabled',
                    !0
                  ),
                  (document.getElementById('formCheckEmailMsg').className +=
                    ' invalid active'),
                  (document.getElementById('uniqueEmailMsg').className =
                    'devise__valid-msg'),
                  (document.getElementById('notUniqueEmailMsg').className =
                    'devise__valid-msg')
                )
              }, l)
        }),
        (e = function(t) {
          var e, o, r, s, a, l, c, u, d, h
          return (
            (d = t.target),
            (h = d.value),
            (c = $('.devise__submit-btn,.account-form__submit')),
            'user_id_name' === d.id
              ? ((u = document.getElementById('uniqueIdNameMsg')),
                (a = document.getElementById('notUniqueIdNameMsg')),
                (r = document.getElementById('invalidFormIdNameMsg')),
                (o = document.getElementById('charCheckIdNameMsg')),
                (s = document.getElementById('notPresentIdNameMsg')),
                (l = '&id_name='),
                (e = i),
                (r.className = 'devise__valid-msg'),
                (o.className = 'devise__valid-msg'),
                (s.className = 'devise__valid-msg'),
                '' === h
                  ? ((h = null), (s.className += ' invalid active'))
                  : h.match(/^[0-9a-zA-Z_]+$/)
                  ? ((o.className = 'devise__valid-msg'),
                    0 === $('.devise__valid-msg.invalid.active').length &&
                      c.prop('disabled', !1))
                  : ((h = null), (o.className += ' invalid active')),
                (document.getElementById('profUrlPreview').textContent = h
                  ? h
                  : ' -'))
              : ((document.getElementById('formCheckEmailMsg').className =
                  'devise__valid-msg'),
                h.match(
                  /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z]{2,8})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
                ) || (h = null),
                (u = document.getElementById('uniqueEmailMsg')),
                (a = document.getElementById('notUniqueEmailMsg')),
                (l = '&email='),
                (e = n)),
            (u.className = 'devise__valid-msg'),
            (a.className = 'devise__valid-msg'),
            h
              ? h !== e
                ? r && h.length < 3
                  ? ((u.className = 'devise__valid-msg'),
                    (r.className += ' invalid active'),
                    c.prop('disabled', !0))
                  : $.ajax({
                      url: '/users/unique_check.js',
                      datatype: 'js',
                      data: l + h
                    }).done(function(t) {
                      if (t.success) {
                        if (
                          ((u.className += ' valid active'),
                          (a.className = 'devise__valid-msg'),
                          r && (r.className = 'devise__valid-msg'),
                          0 === $('.devise__valid-msg.invalid.active').length)
                        )
                          return c.prop('disabled', !1)
                      } else {
                        if (
                          ((u.className = 'devise__valid-msg'),
                          c.prop('disabled', !0),
                          'unique' !== t.type)
                        )
                          return (
                            (a.className = 'devise__valid-msg'),
                            (r.className += ' invalid active')
                          )
                        if (((a.className += ' invalid active'), r))
                          return (r.className = 'devise__valid-msg')
                      }
                    })
                : ((u.className += ' valid active'),
                  (a.className = 'devise__valid-msg'),
                  r && (r.className = 'devise__valid-msg'),
                  0 === $('.devise__valid-msg.invalid.active').length
                    ? c.prop('disabled', !1)
                    : void 0)
              : ((a.className = 'devise__valid-msg'),
                (u.className = 'devise__valid-msg'),
                r && (r.className = 'devise__valid-msg'),
                c.prop('disabled', !0))
          )
        })
      )
    }
  }.call(this),
  function() {
    var t
    ;(window.getExhibitionList = function(e) {
      var i, n, o
      if (
        (null == e && (e = $('#exhibitionList')),
        (o = $('.exhibits.infinite-loader .wavy-loader')),
        o.length > 0)
      )
        return (
          o.addClass('standby'),
          setTimeout(function() {
            return o.addClass('active')
          }, 10),
          (n =
            e.hasClass('lp') || e.hasClass('home')
              ? '/home/exhibitions.js'
              : e.hasClass('favorites')
              ? '/favorites/exhibitions.js'
              : (getUserList(), '/discover/exhibition_list.js')),
          (i = e
            .find('.exhibition__list-box-wrap.default,.exhibitions__no-result')
            .not('.recommended').length),
          $.ajax({ url: n, datatype: 'js', data: '&exhb_count=' + i }).done(
            function(n) {
              var r
              if (
                (o.removeClass('active'),
                setTimeout(function() {
                  return n.no_result
                    ? e.hasClass('home')
                      ? getFlyerList()
                      : void 0
                    : e.hasClass('lp')
                    ? $('.exhibits.infinite-loader').remove()
                    : o.removeClass('standby')
                }, 300),
                !n.no_result)
              )
                return 0 === i && (r = initExhbListEventListeners), t(e, r)
            }
          )
        )
    }),
      (window.getFlyerList = function(e) {
        var i, n, o
        if (
          (null == e && (e = $('#flyerList')),
          $('.exhibits.infinite-loader').remove(),
          (o = $('.flyers.infinite-loader .wavy-loader')),
          o.length > 0)
        )
          return (
            o.addClass('standby'),
            setTimeout(function() {
              return o.addClass('active')
            }, 10),
            $('.mypage__flyers-wrap').addClass('active'),
            (n = e.find(
              '.exhibition__list-box-wrap.default,.exhibitions__no-result'
            ).length),
            (i = e.hasClass('mypage__flyer-list') ? 'home' : 'exhibition'),
            $.ajax({
              url: '/' + i + '/flyers.js',
              datatype: 'js',
              data: '&exhb_count=' + n
            }).done(function(i) {
              var r
              if (
                (o.removeClass('active'),
                setTimeout(function() {
                  return i.no_result ? o.remove() : o.removeClass('standby')
                }, 300),
                !i.no_result)
              )
                return 0 === n && (r = initExhbListEventListeners), t(e, r)
            })
          )
      }),
      (t = function(t, e) {
        var i, n
        return (
          null == e && (e = null),
          (i = $('.exhibition__list-box-wrap .img').not('[class*=line0] img')),
          i.length > 0
            ? ((n = 0),
              i.each(function(o, r) {
                var s
                return (
                  (s = $(r).attr('src')),
                  $(r).attr('src', ''),
                  $(r).bind('load', function() {
                    if (((n += 1), n === i.length))
                      return placeExhibitionBoxes(t, e, !0)
                  }),
                  $(r).attr('src', s)
                )
              }))
            : placeExhibitionBoxes(t, e, !0)
        )
      }),
      (window.placeExhibitionBoxes = function(t, e, i) {
        var n, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, w, b, _, k, x
        for (
          null == i && (i = !1),
            l = window.matchMedia('(max-width: 640px)').matches
              ? 1
              : window.matchMedia('(max-width: 1000px)').matches
              ? 2
              : 3,
            t.hasClass('lp') || t.hasClass('home')
              ? (l -= 1)
              : t.hasClass('discover') && l > 2 && (l -= 1),
            m = function() {
              _ = []
              for (var t = 0; 0 <= l ? t <= l : t >= l; 0 <= l ? t++ : t--)
                _.push(t)
              return _
            }.apply(this),
            x = (100 / m.length).toFixed(2),
            c = [],
            g = 0,
            u = m.length;
          g < u;
          g++
        )
          (a = m[g]), c.push(x * a + '%')
        for (r = [], s = v = 0, d = m.length; v < d; s = ++v) {
          if (((a = m[s]), (f = 0), i))
            for (
              b = t.find('.exhibition__list-box-wrap.line0' + a),
                y = 0,
                h = b.length;
              y < h;
              y++
            )
              (n = b[y]), (f += $(n).height())
          r.push(f)
        }
        if (i) o = t.find('.exhibition__list-box-wrap').not('[class*=line0]')
        else
          for (
            o = t.find('.exhibition__list-box-wrap'), s = w = 0, p = o.length;
            w < p;
            s = ++w
          )
            (n = o[s]),
              $(n).removeClass(function(t, e) {
                return (e.match(/\bline\d+/g) || []).join(' ')
              }),
              $(n).css('width', x + '%')
        if (
          ((k = $(document).scrollTop() + window.innerHeight),
          setTimeout(function() {
            var e, i, a, l, u, d, h
            for (s = d = 0, i = o.length; d < i; s = ++d)
              for (
                n = o[s],
                  $(n).css('width', x + '%'),
                  u = Math.min.apply(null, r),
                  h = 0,
                  a = m.length;
                h < a;
                h++
              )
                if (((e = m[h]), u === r[e])) {
                  $(n).css('top', r[e] + 'px'),
                    $(n).css('left', c[e]),
                    $(n).addClass('line0' + e),
                    k > r[e] + t.offset().top && $(n).addClass('active'),
                    (r[e] += $(n).outerHeight())
                  break
                }
            return (
              (l = Math.max.apply(null, r)), t.css('height', l > 0 ? l : 'auto')
            )
          }, 300),
          'function' == typeof e)
        )
          return e(t)
      }),
      (window.initExhbListEventListeners = function(t) {
        var e, i, n, o, r, s, a, l
        return (
          (n = t.attr('id')),
          (l = '.' + n + 'Scroll'),
          (r = '.' + n + 'Resize'),
          (a = !1),
          (o = 0),
          (i = t.height()),
          (e = location.pathname),
          $(window)
            .unbind(l)
            .on('scroll' + l, function() {
              var r
              return e !== location.pathname
                ? setTimeout(function() {
                    return (
                      (t = $('#' + n)),
                      (i = 0),
                      (o = 0),
                      (e = location.pathname)
                    )
                  }, 1e3)
                : t.length > 0
                ? ((r = $(document).scrollTop() + window.innerHeight),
                  t
                    .find('.exhibition__list-box-wrap[class*=line0]')
                    .not('.active')
                    .each(function(e, i) {
                      var n
                      if (
                        ((n =
                          t.offset().top +
                          1 *
                            $(i)
                              .css('top')
                              .replace('px', '')),
                        r > n)
                      )
                        return $(i).addClass('active')
                    }),
                  a !== !1 && clearTimeout(a),
                  (a = setTimeout(function() {
                    var e
                    return (
                      t.length > 0 &&
                        !document.getElementById('lpMainImg') &&
                        ((r = $(document).scrollTop() + window.innerHeight),
                        (e = t.offset().top + t.height() - 300),
                        r > e &&
                          t.is(':visible') &&
                          ('flyerList' === n
                            ? getFlyerList()
                            : getExhibitionList())),
                      (o = i),
                      (i = t.height())
                    )
                  }, 300)))
                : void 0
            }),
          (s = !1),
          $(window)
            .unbind(r)
            .on('resize' + r, function() {
              if (e === location.pathname || $('#' + n).length > 0)
                return (
                  s !== !1 && clearTimeout(s),
                  (s = setTimeout(function() {
                    return placeExhibitionBoxes(t)
                  }, Math.floor((1e3 / 60) * 10)))
                )
            })
        )
      }),
      (window.submitTextSearchForm = function() {
        return $('.head__discover-search-form').submit()
      }),
      (window.selectCategory = function(t) {
        var e
        return (
          (e = t.id.split('_')[1]),
          $.ajax({
            url: '/discover/change_category.json',
            datatype: 'json',
            data: '&category_id=' + e
          }).done(function(t) {
            return (location.href = t.path)
          })
        )
      }),
      (window.discoverWithTag = function(t, e) {
        return (location.href =
          '/exhibitions/' +
          e +
          '?&q%5Btitle_or_tags_tag_name_or_user_first_name_or_user_last_name_or_user_id_name_cont%5D=' +
          t)
      }),
      (window.showDetailSearchModal = function(t) {
        return modalShow('/' + t + '/new.js')
      })
  }.call(this),
  function() {
    var t
    ;(window.getUserList = function() {
      return (
        $('#userList').empty(),
        $.ajax({ url: '/discover/user_list.js', datatype: 'js' }).done(
          function() {
            return t()
          }
        )
      )
    }),
      (t = function() {
        var t
        if (((t = $('#userListSlider')), 0 !== t.length))
          return (
            t.slick({
              draggable: !1,
              slidesToShow: 8,
              slidesToScroll: 8,
              speed: 600,
              cssEase: 'cubic-bezier(0.3, 0.0, 0.3, 1.0)',
              infinite: !1,
              responsive: [
                {
                  breakpoint: 1280,
                  settings: { slidesToShow: 6, slidesToScroll: 6 }
                },
                {
                  breakpoint: 1e3,
                  settings: {
                    draggable: !0,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    speed: 200,
                    cssEase: 'ease-out'
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    draggable: !0,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    speed: 200,
                    cssEase: 'ease-out'
                  }
                }
              ]
            }),
            $('.slick-arrow').addClass('icon-svg_arrow'),
            t
              .unbind('.breakUserSlider')
              .on('breakpoint.breakUserSlider', function() {
                return $('.slick-arrow').addClass('icon-svg_arrow')
              })
          )
      })
  }.call(this),
  function() {
    window.initFormForDragDrop = function() {
      var t, e
      return (
        (t = !1),
        (e = $('.dragDropArea')),
        e
          .on(
            'drag dragstart dragend dragover dragenter dragleave drop',
            function(t) {
              return t.preventDefault(), t.stopPropagation()
            }
          )
          .on('dragover dragenter', function() {
            return e.addClass('dragover')
          })
          .on('dragleave dragend drop', function() {
            return e.removeClass('dragover')
          })
          .on('drop', function(i) {
            return (
              (t = i.originalEvent.dataTransfer.files),
              e.find('input[type="file"]').prop('files', t)
            )
          })
      )
    }
  }.call(this),





  function() {
    ;(window.initDropdowns = function() {
      var t, e, i, n, o, r
      if (
        ($('#wrapper')
          .unbind('.hideDropdown')
          .on('click.hideDropdown', function() {
            return hideVisibleDropdowns()
          }),
        (n = $('.cmn__dropdown-wrap, .cmn__dropdown-btn')),
        n.unbind('.stopHideDropdown'),
        n.length &&
          n.on('click.stopHideDropdown', function(t) {
            return t.stopPropagation()
          }),
        (e = $('#discoverSelect')),
        e.unbind('.toggleDiscDropdown'),
        e.length &&
          e.on('click.toggleDiscDropdown', function() {
            var t
            if (
              (hideVisibleDropdowns(),
              (t = $('#discoverDropdown')),
              !t.is(':visible'))
            )
              return setTimeout(function() {
                return t.slideDown(200, 'swing')
              }, 1)
          }),
        (t = $('.head__discover-cat-select')),
        t.unbind('.toggleCatDropdown'),
        t.length &&
          t.on('click.toggleCatDropdown', function() {
            var t
            if (
              (hideVisibleDropdowns(),
              (t = $('#catsDropdown')),
              !t.is(':visible'))
            )
              return t.slideDown(200, 'swing')
          }),
        (i = $('.head__btns-discover-in.cmn__dropdown-btn')),
        i.unbind('.toggleDiscoverDropdown'),
        i.length &&
          i.on('click.toggleDiscoverDropdown', function() {
            var t
            if (
              (hideVisibleDropdowns(),
              (t = $('#discoverDropdown')),
              !t.is(':visible'))
            )
              return (
                i.addClass('active'),
                setTimeout(function() {
                  return t.slideDown(200, 'swing')
                }, 10)
              )
          }),
        (o = $('.head__btns-notification.cmn__dropdown-btn')),
        o.unbind('.toggleNotifDropdown'),
        o.length &&
          o.on('click.toggleNotifDropdown', function() {
            var t
            return window.matchMedia('(max-width: 1000px)').matches
              ? (location.href = '/notifications')
              : (hideVisibleDropdowns(),
                (t = $('#notificationDropdown')),
                t.is(':visible')
                  ? void 0
                  : (o.addClass('active'),
                    $.ajax({
                      url: '/notifications/dropdown.js',
                      datatype: 'js'
                    }).done(function() {
                      return (
                        t.slideDown(200, 'swing'),
                        $.ajax({
                          url: '/notifications/read.json',
                          datatype: 'json',
                          type: 'post'
                        }).done(function() {
                          return $('#notificationDisc').slideUp(250, 'swing')
                        })
                      )
                    })))
          }),
        (r = $('#shareDropdownBtn')),
        r.unbind('.toggleShareDropdown'),
        r.length)
      )
        return r.on('click.toggleShareDropdown', function() {
          var t
          if (
            (hideVisibleDropdowns(),
            (t = $('#shareDropdown')),
            !t.is(':visible'))
          )
            return (
              $(this).addClass('active'),
              t.slideDown(200, 'swing'),
              setTimeout(function() {
                var e
                if (
                  ((e =
                    t.offset().top +
                    t.outerHeight() -
                    $(window).innerHeight() +
                    15),
                  $(this).scrollTop() < e)
                )
                  return $('body,html').animate({ scrollTop: e }, 100, 'swing')
              }, 200)
            )
        })
    }),
      (window.hideVisibleDropdowns = function() {
        var t
        return (
          (t = $('.cmn__dropdown-wrap')),
          t.is(':visible') &&
            (t.slideUp(450, 'swing'),
            $('.cmn__dropdown-btn').removeClass('active')),
          $('#userMenu,#discoverDropdown').removeClass('active')
        )
      }),
      (window.showUserMenu = function() {
        return (
          hideVisibleDropdowns(),
          setTimeout(function() {
            return $('#userMenu').addClass('active')
          }, 10)
        )
      })
  }.call(this),



  
  function() {
    ;(window.showEventCommentModal = function(t, e) {
      var i
      return (
        null == e && (e = 0),
        (i = (function() {
          switch (t) {
            case 'post':
              if (null === document.getElementById('new_comment'))
                return '/event_comments/new.js'
              break
            case 'edit':
              if (null === document.getElementById('edit_comment_' + e))
                return '/event_comments/' + e + '/edit.js'
              break
            case 'reply':
              if (null === document.getElementById('reply_to_' + e))
                return '/event_comments/new.js?&reply_to_id=' + e
          }
        })()),
        modalShow(i)
      )
    }),
      (window.getEventComments = function() {
        var t, e, i, n
        return (
          (i = $('.comments__list-show-more .txt')),
          (n = $('.comments__list-show-more .wavy-loader')),
          (t = $('#commentCount').attr('data')),
          n.length > 0 &&
            (i.removeClass('active'),
            n.addClass('standby'),
            setTimeout(function() {
              return n.addClass('active')
            }, 10)),
          (e = document.getElementsByClassName('comments__list-item').length),
          $.ajax({
            url: '/event_comments.js',
            datatype: 'js',
            data: '&count=' + e + '&ids=' + t
          }).done(function(t) {
            return hideEventCommentShowMore(t.no_result, i, n)
          })
        )
      }),
      (window.hideEventCommentShowMore = function(t, e, i) {
        return (
          null == t && (t = null),
          null == e && (e = null),
          null == i && (i = null),
          t
            ? (0 === document.getElementsByClassName('event__cmt').length &&
                $('#cmtList').addClass('no_result'),
              $('.comments__list-show-more').fadeOut())
            : (e || (e = $('.comments__list-show-more .txt')),
              i || (i = $('.comments__list-show-more .wavy-loader')),
              e.addClass('active'),
              i.removeClass('active'),
              setTimeout(function() {
                return i.removeClass('standby')
              }, 200))
        )
      }),
      (window.showEventCommentReportModal = function(t) {
        var e
        return (e = '/event_comment_reports/new.js?id=' + t), modalShow(e)
      }),
      (window.toggleReportedEventComment = function(t, e, i) {
        var n, o
        return (
          (n = $(t)),
          (o = n.find('.event__cmt-reported-btn')),
          n.hasClass('hidden')
            ? (n.removeClass('hidden'), o.text(i))
            : (n.addClass('hidden'), o.text(e))
        )
      })
  }.call(this),
  function() {
    var t, e
    ;(window.getEventList = function(e) {
      var i, n, o, r
      if (
        (null == e && (e = $('#eventList')),
        (r = $('.events.infinite-loader .wavy-loader')),
        r.length > 0)
      )
        return (
          r.addClass('standby'),
          setTimeout(function() {
            return r.addClass('active')
          }, 10),
          (n = $('.events__list-box,.events__list-no-result').length),
          (i = '&event_count=' + n),
          e.hasClass('lp')
            ? (o = '/home/events.js')
            : e.hasClass('favorites')
            ? (o = '/event_favorites.js')
            : e.hasClass('show')
            ? ((o = '/events/flyers.js'),
              (i += '&event_ids=' + e.attr('data-event-ids')))
            : e.hasClass('profile')
            ? ((o = '/events/users/list.js'),
              (i += '&user_id=' + e.attr('data-user-id')))
            : ((o = '/events/discover/list.js'), initVisitDatePicker()),
          $.ajax({ url: o, datatype: 'js', data: i }).done(function(i) {
            if (
              (r.removeClass('active'),
              setTimeout(function() {
                return i.no_result
                  ? r.remove()
                  : document.getElementById('lpMainImg')
                  ? $('.events.infinite-loader').remove()
                  : r.removeClass('standby')
              }, 300),
              !i.no_result && 0 === n)
            )
              return t(e)
          })
        )
    }),
      (window.initVisitDatePicker = function() {
        var t, i
        return (
          (t = $('#visitDateField, #mobileVisitDateField')),
          (i = $('#visitDatePicker, #mobileVisitDatePicker')),
          i.datepicker({
            beforeShow:
              0 === t.val().length
                ? setTimeout(function() {
                    return i
                      .find('.ui-state-active')
                      .removeClass('ui-state-active')
                  }, 0)
                : void 0,
            dateFormat: 'yy-mm-dd',
            defaultDate: t.val() || '',
            monthNames: [
              '1\u6708',
              '2\u6708',
              '3\u6708',
              '4\u6708',
              '5\u6708',
              '6\u6708',
              '7\u6708',
              '8\u6708',
              '9\u6708',
              '10\u6708',
              '11\u6708',
              '12\u6708'
            ],
            dayNamesMin: [
              '\u65e5',
              '\u6708',
              '\u706b',
              '\u6c34',
              '\u6728',
              '\u91d1',
              '\u571f'
            ],
            nextText: '>>',
            onSelect: e,
            prevText: '<<'
          })
        )
      }),
      (t = function(t) {
        var e, i
        return (
          (i = !1),
          (e = location.pathname),
          $(window)
            .unbind('.discoverEventScroll')
            .on('scroll.discoverEventScroll', function() {
              return e !== location.pathname
                ? setTimeout(function() {
                    return (t = $('#eventList')), (e = location.pathname)
                  }, 1e3)
                : t.length > 0
                ? (i !== !1 && clearTimeout(i),
                  (i = setTimeout(function() {
                    var e, i
                    if (0 !== t.length)
                      return (
                        (i = $(document).scrollTop() + window.innerHeight),
                        (e = t.offset().top + t.height() - 300),
                        i > e && t.is(':visible') ? getEventList() : void 0
                      )
                  }, 300)))
                : void 0
            })
        )
      }),
      (window.enableEventSearchBtn = function() {
        return $('.events__side-search-form-submit').attr('disabled', !1)
      }),
      (e = function(t, e) {
        var i
        return (
          (i = $('#visitDateField, #mobileVisitDateField')),
          t === i.val()
            ? (i.val(''),
              setTimeout(function() {
                return $(e.dpDiv)
                  .find('.ui-state-active')
                  .removeClass('ui-state-active')
              }, 0))
            : i.val(t),
          enableEventSearchBtn()
        )
      })
  }.call(this),
  function() {
    window.sayLikeToEvent = function(t) {
      var e
      return (
        (e = location.pathname.split('/').pop()),
        $.ajax({
          url: '/event_favorites/toggle/' + e + '.json',
          datatype: 'json',
          type: 'post'
        }).done(function(e) {
          var i, n, o
          return e.errors
            ? (userSigninModal(), reloadNoticeHashScript())
            : e.is_self
            ? void 0
            : ((o = $('#likeCount')),
              (i = $(t).find('.svg')),
              (n = o.text()),
              e.canceled
                ? (i
                    .addClass('icon-svg_like_n')
                    .removeClass('icon-svg_like_o active'),
                  o.text(1 * n - 1))
                : (i
                    .addClass('icon-svg_like_o active')
                    .removeClass('icon-svg_like_n'),
                  o.text(1 * n + 1)))
        })
      )
    }
  }.call(this),
  function() {
    ;(window.initEventImgUploader = function() {
      var t, e, i
      return (
        (t = $('#eventImageUploader')),
        (e = $('#eventImageThumb')),
        (i = $('.event-image-loader.wavy-loader')),
        t
          .unbind('.eventImgFormBefore')
          .on('ajax:beforeSend.eventImgFormBefore', function() {
            return (
              t.removeClass('active'),
              i.addClass('standby'),
              setTimeout(function() {
                return i.addClass('active'), e.removeClass('active')
              }, 10)
            )
          }),
        t
          .unbind('.eventImgFormSuccess')
          .on('ajax:success.eventImgFormSuccess', function() {
            return (
              t.parent().removeClass('error'),
              t.addClass('active'),
              i.removeClass('active'),
              setTimeout(function() {
                return (
                  i.removeClass('standby'),
                  e.addClass('active'),
                  reloadNoticeHashScript(),
                  checkEventNeededValues()
                )
              }, 200)
            )
          })
      )
    }),
      (window.clickSubmitEventImgBtn = function() {
        return $('#submitEventImgBtn').click()
      })
  }.call(this),
  function() {
    var t, e, i, n, o, r, s
    ;(window.initEventShow = function() {
      var e
      return (
        (e = location.pathname.split('/').pop()),
        t(),
        o(),
        r(e),
        i(e),
        $.ajax({
          url: '/event_statistics/' + e + '/update.json',
          datatype: 'json',
          type: 'put'
        })
      )
    }),
      (t = function() {
        var t, e
        return (
          (e = $('#eventImage')),
          (t = (e.width() / 3) * 2),
          setTimeout(function() {
            if (e.find('.img').outerHeight() > t) return e.height(t)
          }, 500)
        )
      }),
      (o = function() {
        var e, i
        return (
          (e = location.pathname),
          (i = !1),
          $(window)
            .unbind('.eventShowResize')
            .on('resize.eventShowResize', function() {
              if (e === location.pathname)
                return (
                  i !== !1 && clearTimeout(i),
                  (i = setTimeout(function() {
                    return t()
                  }, Math.floor((1e3 / 60) * 10)))
                )
            })
        )
      }),
      (r = function(t) {
        var i
        return (
          (i = $('#sideUser')),
          0 === i.length ||
          i.find('.event__content-side-user-posts-in').length > 0
            ? e(t)
            : $.ajax({
                url: '/events/user_data.js',
                datatype: 'js',
                data: '&user_id=' + i.attr('data-user-id')
              }).done(function() {
                return e(t)
              })
        )
      }),
      (e = function(t) {
        if (document.getElementById('rankedInEvents'))
          return $.ajax({
            url: '/events/' + t + '/ranked_in.js',
            datatype: 'js'
          }).done(function() {
            return $('#eventContent').css(
              'min-height',
              $('#eventSide').outerHeight()
            )
          })
      }),
      (i = function(t) {
        return $.ajax({
          url: '/events/' + t + '/recommended.js',
          datatype: 'js'
        })
      }),
      (window.initEventForm = function() {
        var t
        return (
          checkEventNeededValues(t),
          initEventImgUploader(),
          n(),
          (t = $('#eventForm')),
          t.unbind('.eventFormChange').on('change.eventFormChange', function() {
            return checkEventNeededValues(t)
          }),
          t
            .unbind('.eventFormSuccess')
            .on('ajax:success.eventFormSuccess', function(t, e) {
              var i, n, o, r
              if (e.valid === !1) {
                for (r = e.keys, i = 0, o = r.length; i < o; i++)
                  (n = r[i]),
                    'event_artists' === n && (n = 'event_profile'),
                    $('#' + n)
                      .addClass('error')
                      .attr('oninput', 'removeErrorFromInput(event)')
                return reloadNoticeHashScript()
              }
            })
        )
      }),
      (window.checkEventNeededValues = function(t) {
        return (
          null == t && (t = $('#eventForm')),
          setTimeout(function() {
            var e, i, n, o, r
            if (
              ((e =
                0 ===
                $('#eventImageThumb .events-edit__form-image-preview').length),
              !e &&
                ((e =
                  0 === t.find('.events-edit__form-place-registered').length),
                !e))
            )
              for (
                i = t.find('.events-edit__form-input-wrap .input.needed'),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (
                  ((n = i[o]),
                  (n = $(n)),
                  n.is(':visible') && 0 === n.val().length)
                ) {
                  e = !0
                  break
                }
            return t
              .find('.events-edit__form-submit-btn.publish')
              .attr('disabled', e)
          }, 300)
        )
      }),
      (window.transitProfileInputs = function(t, e) {
        var i
        return (
          $('#profileLabel').text(e),
          (i = $('#holderNameBlock')),
          'personal' === t ? i.fadeIn('fast') : i.fadeOut('fast')
        )
      }),
      (n = function() {
        var t, e, i, n, o
        for (
          n = [
            { altField: $('#event_open_date'), picker: $('#openDatePicker') },
            { altField: $('#event_close_date'), picker: $('#closeDatePicker') }
          ],
            o = [],
            t = 0,
            e = n.length;
          t < e;
          t++
        )
          (i = n[t]),
            o.push(
              i.picker.datepicker({
                beforeShow:
                  0 === i.altField.val().length
                    ? setTimeout(function() {
                        return i.picker
                          .find('.ui-state-active')
                          .removeClass('ui-state-active')
                      }, 0)
                    : void 0,
                dateFormat: 'yy-mm-dd',
                defaultDate: i.altField.val() || '',
                monthNames: [
                  '1\u6708',
                  '2\u6708',
                  '3\u6708',
                  '4\u6708',
                  '5\u6708',
                  '6\u6708',
                  '7\u6708',
                  '8\u6708',
                  '9\u6708',
                  '10\u6708',
                  '11\u6708',
                  '12\u6708'
                ],
                dayNamesMin: [
                  '\u65e5',
                  '\u6708',
                  '\u706b',
                  '\u6c34',
                  '\u6728',
                  '\u91d1',
                  '\u571f'
                ],
                nextText: '>>',
                onSelect: s,
                prevText: '<<'
              })
            )
        return o
      }),
      (window.showEventDatePicker = function(t) {
        var e, i
        if (
          ((e = $('#' + t + 'DatePicker')),
          (i = e.is(':visible')),
          $('.events-edit__form-date-picker').slideUp(300, 'swing'),
          !i)
        )
          return (
            e.slideDown(150, 'swing'),
            setTimeout(function() {
              var t
              if (
                ((t =
                  e.offset().top +
                  e.outerHeight() -
                  $(window).innerHeight() +
                  15),
                $(this).scrollTop() < t)
              )
                return $('body,html').animate({ scrollTop: t }, 100, 'swing')
            }, 150)
          )
      }),
      (s = function(t, e) {
        var i, n
        return (
          (n = $(e.dpDiv).parent()),
          (i = n.attr('id').match('open')
            ? $('#event_open_date')
            : $('#event_close_date')),
          t === i.val()
            ? (i.val(''),
              setTimeout(function() {
                return $(e.dpDiv)
                  .find('.ui-state-active')
                  .removeClass('ui-state-active')
              }, 0))
            : (i.val(t), checkEventNeededValues(), n.slideUp(300, 'swing'))
        )
      }),
      (window.toggleHideEvent = function(t, e) {
        var i
        return (
          (i = $(e).hasClass('active') ? 'delete' : 'put'),
          $.ajax({
            url: '/events/' + t + '/hide.json',
            datatype: 'json',
            type: i
          }).done(function() {
            return location.reload()
          })
        )
      }),
      (window.confirmDeleteEvent = function(t) {
        return modalShow('/events/' + t + '/destroy_confirmations.js')
      }),
      (window.deleteEvent = function(t) {
        return (
          modalHide(),
          $.ajax({
            url: '/events/' + t + '.json',
            datatype: 'json',
            type: 'delete'
          }).done(function() {
            return (location.href = '/events/manage')
          })
        )
      }),
      (window.showEventReportModal = function(t) {
        var e
        return (e = '/event_reports/new.js?id=' + t), modalShow(e)
      })
  }.call(this),
  function() {
    ;(window.initFormForExhibition = function() {
      var t, e, i, n
      if (
        (initTagAutocomplete(),
        (n = $('#exhibition_introduction')),
        (i = $('#exhibitionFormWrap')),
        (e = i.find('#exhibitionForm')),
        e.unbind('keydown'),
        e.on('keydown', function(t) {
          var e
          if (((e = t.keyCode || t.which), !n.is(':focus') && 13 === e))
            return t.preventDefault(), saveNewTag()
        }),
        e.on('ajax:success', function(t, e) {
          var i, n, o, r
          if (e.valid === !1) {
            for (r = e.keys, i = 0, o = r.length; i < o; i++)
              (n = r[i]),
                $('#' + n)
                  .addClass('error')
                  .attr('oninput', 'removeErrorFromInput(event)')
            return reloadNoticeHashScript()
          }
        }),
        (t = location.pathname),
        $(window).scroll(function(e) {
          return location.pathname === t
            ? $(document).scrollTop() > 60
              ? i.addClass('fixed')
              : i.removeClass('fixed')
            : $(this).unbind(e)
        }),
        !$('.exhibition__form-exif-check').prop('checked'))
      )
        return $('#picturesFormWrap').addClass('no_exif')
    }),
      (window.toggleExifInputs = function(t) {
        var e
        return (
          (e = $('#picturesFormWrap')),
          $(t).prop('checked')
            ? e.removeClass('no_exif')
            : e.addClass('no_exif')
        )
      }),
      (window.confirmDeleteExhibition = function(t) {
        return modalShow('/exhibitions/confirm_destroy.js?id=' + t)
      }),
      (window.deleteExhibition = function(t) {
        return (
          modalHide(),
          $.ajax({
            url: '/exhibitions/' + t + '.json',
            datatype: 'json',
            type: 'delete'
          }).done(function() {
            return (location.href = '/manage')
          })
        )
      }),
      (window.showExhibitionReportModal = function(t) {
        var e
        return (e = '/exhibition_reports/new.js?id=' + t), modalShow(e)
      })
  }.call(this),
  function() {
    ;(window.sayLikeToExhibition = function(t) {
      var e
      return (
        (e = location.pathname.split('/').pop()),
        $.ajax({
          url: '/favorites/toggle/' + e + '.json',
          datatype: 'json',
          type: 'post'
        }).done(function(e) {
          var i, n, o
          return e.errors
            ? (userSigninModal(), reloadNoticeHashScript())
            : e.is_self
            ? void 0
            : ((o = $('#likeCount')),
              (i = $(t).find('.svg')),
              (n = o.text()),
              e.canceled
                ? (i
                    .addClass('icon-svg_like_n')
                    .removeClass('icon-svg_like_o active'),
                  o.text(1 * n - 1))
                : (i
                    .addClass('icon-svg_like_o active')
                    .removeClass('icon-svg_like_n'),
                  o.text(1 * n + 1)))
        })
      )
    }),
      (window.transitFavoriteTabs = function(t) {
        var e, i, n, o, r, s, a
        switch (
          ((a = $('#exhbTab,#exhibitionListWrap')),
          (n = $('#bookTab,#bookListWrap')),
          (s = $('#evntTab,#eventListWrap')),
          t)
        ) {
          case 0:
            return (
              a.addClass('current'),
              n.removeClass('current'),
              s.removeClass('current'),
              placeExhibitionBoxes()
            )
          case 1:
            if (
              (a.removeClass('current'),
              n.addClass('current'),
              s.removeClass('current'),
              (i = $('#bookListWrap')),
              (e = i.find('.books__list')),
              !e.attr('id'))
            )
              return (
                i.css(
                  'min-height',
                  window.innerHeight - i.offset().top - $('#footer').height()
                ),
                e.attr('id', 'bookList'),
                getBookList(e)
              )
            break
          case 2:
            if (
              (a.removeClass('current'),
              n.removeClass('current'),
              s.addClass('current'),
              (r = $('#eventListWrap')),
              (o = r.find('.events__list')),
              !o.attr('id'))
            )
              return (
                r.css(
                  'min-height',
                  window.innerHeight - r.offset().top - $('#footer').height()
                ),
                o.attr('id', 'eventList'),
                getEventList(o)
              )
        }
      })
  }.call(this),
  function() {
    ;(window.toggleFollowUser = function(t, e) {
      var i
      return (
        (i = $(e).parents('.user-show__user-btn-wrap').length),
        e.removeAttribute('onclick'),
        $.ajax({
          url: '/follows/toggle.js',
          datatype: 'js',
          type: 'post',
          data: '&user_id=' + t + '&toggle_count=' + i
        }).done(function(t) {
          if (t.errors) return userSigninModal(), reloadNoticeHashScript()
        })
      )
    }),
      (window.showFollowerModal = function(t) {
        var e, i
        return (
          null == t && (t = null),
          (i = document.getElementById('followersListWrap')
            ? ''
            : '/follows/followers.js'),
          (e = t ? '&user_id=' + t : ''),
          modalShow(i, e)
        )
      }),
      (window.showFollowingModal = function(t) {
        var e, i
        return (
          null == t && (t = null),
          (i = document.getElementById('followingsListWrap')
            ? ''
            : '/follows/followings.js'),
          (e = t ? '&user_id=' + t : ''),
          modalShow(i, e)
        )
      })
  }.call(this),
  function() {
    ;(window.initFullWindowModal = function() {
      var t, e, i, n, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, w
      return (
        (r = $('#fullWindowModal')),
        (w = window.innerWidth),
        (y = window.innerHeight),
        (o = 0),
        (a = 0),
        (s = 0),
        (p = 0),
        (u = 0),
        (l = w / 2),
        (c = y / 2),
        (f = l),
        (m = c),
        (g = 0),
        (v = 0),
        (d = 0),
        (h = 0),
        (n = !1),
        (i = r.find('.img')),
        (e = new Hammer.Manager(i[0])),
        e.add(new Hammer.Pan({ threshold: 1 })),
        e.on('panmove', function(t) {
          var e, s
          if (!n)
            return (
              (s = i.width()),
              (e = i.height()),
              0 === o && (o = r.height()),
              s === w || e === o || (s < w && e < o)
                ? (i.css('left', l + t.deltaX), i.css('top', c + t.deltaY))
                : (i.css('left', f + t.deltaX), i.css('top', m + t.deltaY))
            )
        }),
        e.on('panend', function(e) {
          var u, d, h, p
          if (!n)
            return (
              (d = i.width()),
              (u = i.height()),
              0 === o && (o = r.height()),
              d === w || u === o || (d < w && u < o)
                ? Math.abs(e.deltaX) < 50 && Math.abs(e.deltaY) < 50
                  ? (i.css('left', '50%'), i.css('top', '50%'))
                  : (i.css('left', l + 3 * e.deltaX),
                    i.css('top', c + 3 * e.deltaY),
                    (a = 0),
                    (s = 0),
                    hideFullWindowModal(r),
                    setTimeout(function() {
                      return i.css('left', '50%'), i.css('top', '50%')
                    }, 500))
                : ((h = 1 * i.css('left').replace('px', '')),
                  (p = 1 * i.css('top').replace('px', '')),
                  t(d, u, h, p))
            )
        }),
        e.add(new Hammer.Tap({ event: 'doubletap', taps: 2 })),
        e.add(new Hammer.Tap({ event: 'singletap' })),
        e.get('doubletap').recognizeWith('singletap'),
        e.get('singletap').requireFailure('doubletap'),
        e.on('doubletap', function(t) {
          var e, n, u, d
          return (
            (n = i.width()),
            (e = i.height()),
            0 === o && (o = r.height()),
            n === w || e === o || (n < w && e < o)
              ? (0 === a && 0 === s && ((a = n), (s = e)),
                i.css('width', 3 * a),
                i.css('max-width', 3 * a),
                i.css('max-height', 3 * s),
                (u = l + 2 * (l - t.changedPointers[0].clientX)),
                (d = c + 2 * (c - t.changedPointers[0].clientY)),
                i.css('left', u),
                i.css('top', d),
                (f = u),
                (m = d))
              : (i.css('width', 'auto'),
                i.css('max-width', '100%'),
                i.css('max-height', '100%'),
                i.css('left', '50%'),
                i.css('top', '50%'),
                (f = l),
                (m = c))
          )
        }),
        e.add(new Hammer.Pinch({ enable: !0 })),
        e.on('pinchstart', function() {
          if (((n = !0), (p = i.width()), (u = i.height()), 0 === a && 0 === s))
            return (a = p), (s = u)
        }),
        e.on('pinchmove', function(t) {
          var e, n, o, r, s, a, l
          return (
            (e = t.pointers[0]),
            (r = t.pointers[1]),
            (n = e.clientX),
            (o = e.clientY),
            (s = r.clientX),
            (a = r.clientY),
            (g = (n + s) / 2),
            (v = (o + a) / 2),
            0 === d && 0 === h && ((d = g), (h = v)),
            (l = t.scale),
            i.css('width', p * l),
            i.css('max-width', p * l),
            i.css('max-height', u * l),
            i.css('left', f + (f - g) * (l - 1) + (g - d) * l),
            i.css('top', m + (m - v) * (l - 1) + (v - h) * l)
          )
        }),
        e.on('pinchend', function() {
          var e, u, p, y, b, _
          return (
            (u = i.width()),
            (e = i.height()),
            0 === o && (o = r.height()),
            u < w && e < o
              ? (i.css('width', 'auto'),
                i.css('max-width', '100%'),
                i.css('max-height', '100%'),
                i.css('left', '50%'),
                i.css('top', '50%'),
                (f = l),
                (m = c))
              : ((b = 3 * a),
                (y = 3 * s),
                (p = 1 * i.css('left').replace('px', '')),
                (_ = 1 * i.css('top').replace('px', '')),
                u > b &&
                  e > y &&
                  ((p += (p - g) * (b / u - 1)),
                  (_ += (_ - v) * (y / e - 1)),
                  i.css('width', b),
                  i.css('max-width', b),
                  i.css('max-height', y),
                  i.css('left', p),
                  i.css('top', _),
                  (u = b),
                  (e = y)),
                t(u, e, p, _)),
            (d = 0),
            (h = 0),
            setTimeout(function() {
              return (n = !1)
            }, 200)
          )
        }),
        (t = function(t, e, n, r) {
          var s, a, l, c
          return (
            t > w
              ? ((s = t / 2), (l = w - t / 2))
              : ((s = w - t / 2), (l = t / 2)),
            (n = n > s ? s : n < l ? l : n),
            e > o
              ? ((a = e / 2), (c = y - e / 2))
              : ((a = y - e / 2), (c = e / 2)),
            (r = r > a ? a : r < c ? c : r),
            i.css('left', n),
            i.css('top', r),
            (f = n),
            (m = r)
          )
        }),
        $(window).resize(function(t) {
          return location.pathname.match(/^\/exhibitions\/\d+$/)
            ? (i.css('width', 'auto'),
              i.css('max-width', '100%'),
              i.css('max-height', '100%'),
              i.css('left', '50%'),
              i.css('top', '50%'),
              setTimeout(function() {
                return (
                  (w = window.innerWidth),
                  (y = window.innerHeight),
                  (a = i[0].clientWidth),
                  (s = i[0].clientHeight),
                  (p = a),
                  (u = s),
                  (l = w / 2),
                  (c = y / 2),
                  (f = l),
                  (m = c),
                  (g = 0),
                  (v = 0),
                  (o = r.height())
                )
              }, 300))
            : $(this).unbind(t)
        }),
        $('#fullWindowModal')
          .unbind('.fullWindowMarginClick')
          .on('click.fullWindowMarginClick', function() {
            return (a = 0), (s = 0), hideFullWindowModal(this)
          })
      )
    }),
      (window.showFullWindowModal = function(t) {
        var e, i
        return (
          (i = $('#fullWindowModal')),
          (e = i.find('.img')),
          e.css('left', '50%'),
          e.css('top', '50%'),
          e.css('max-width', '100%'),
          e.css('max-height', '100%'),
          i.addClass('standby active'),
          e.attr({ src: t }),
          e.addClass('active'),
          $('#wrapper').addClass('on-modal')
        )
      }),
      (window.preventHideFullWindowModal = function(t) {
        return t.stopPropagation()
      }),
      (window.hideFullWindowModal = function(t) {
        var e, i
        return (
          (i = $(t)),
          (e = i.find('.img')),
          e.removeClass('active'),
          i.removeClass('active'),
          setTimeout(function() {
            return (
              $('#wrapper').removeClass('on-modal'),
              i.removeClass('standby'),
              e.attr({ src: '' })
            )
          }, 500)
        )
      })
  }.call(this),
  function() {
    var t, e, i, n, o, r, s
    ;(window.initExhibitionSlider = function() {
      var t, e, i, r, a, l, c, u, d, h
      return (
        (d = document.getElementsByClassName('touchable').length > 0),
        (u = $('#exhibitionSlider')),
        (c = d
          ? {
              centerMode: !0,
              centerPadding: 0,
              slidesToShow: 1,
              infinite: !1,
              draggable: !0,
              speed: 400,
              cssEase: 'ease-out'
            }
          : {
              centerMode: !0,
              centerPadding: 0,
              slidesToShow: 1,
              infinite: !1,
              fade: !0,
              speed: 800,
              cssEase: 'cubic-bezier(0.3, 0.0, 0.3, 1.0)'
            }),
        u.slick(c),
        u.on('afterChange', function() {
          return prepareDownArrow()
        }),
        (l = $('#showPictureInfo')),
        (t = location.pathname),
        l.length > 0 &&
          (d
            ? (l.on('click', function() {
                var t, e, i
                return (
                  (t = $('.exhibition-show__gallery-slide.slick-current')),
                  (e = t
                    .attr('id')
                    .split('_')
                    .pop()),
                  (i = '/pictures/' + e + '/exif.js'),
                  modalShow(i)
                )
              }),
              (e = $('#exhibitionInfo')),
              (i = $('#galleryWrap')),
              $(window)
                .unbind('.galleryScroll')
                .on('scroll.galleryScroll', function(n) {
                  return t === location.pathname ? s(e, i) : $(this).unbind(n)
                }))
            : ((r = []),
              $('.exhibition-show__gallery-txt').each(function(t, e) {
                return r.push(e.clientHeight)
              }),
              (a = Math.max.apply(null, r)),
              $(window)
                .unbind('.galleryScroll')
                .on('scroll.galleryScroll', function(e) {
                  return t !== location.pathname
                    ? $(this).unbind(e)
                    : $(this).scrollTop() <= a
                    ? l.fadeIn('50')
                    : l.is(':visible')
                    ? l.fadeOut('100')
                    : void 0
                }),
              l.on('click', function() {
                var t
                return (
                  (t = $(window).scrollTop() < a / 2 ? a : 0),
                  $('body,html').animate({ scrollTop: t }, 150, 'swing')
                )
              }))),
        $('.exhibition-show__gallery-wrap').contextmenu(function() {
          return !1
        }),
        (h = $('#galleryLoading .wavy-loader')),
        h.addClass('standby'),
        setTimeout(function() {
          return h.addClass('active')
        }, 10),
        d || o(),
        initFullWindowModal(),
        n(h, d)
      )
    }),
      (n = function(t, i) {
        var n
        return (
          (n = $('.exhibition-show__gallery-img .img').first()),
          !n.length || n[0].complete
            ? e(t, i)
            : n.on('load', function() {
                return e(t, i)
              })
        )
      }),
      (e = function(e, i) {
        var n, o, a
        return (
          (o = $('#galleryWrap')),
          i &&
            (r(o),
            (n = location.pathname),
            (a = !1),
            $(window)
              .unbind('.galleryResize')
              .on('resize.galleryResize', function() {
                return n === location.pathname
                  ? (a && clearTimeout(a),
                    (a = setTimeout(function() {
                      return r(o)
                    }, Math.floor((1e3 / 60) * 10))))
                  : $(this).unbind('.galleryResize')
              })),
          setTimeout(function() {
            return (
              o.removeClass('loading'),
              e.removeClass('active'),
              t(),
              getFlyerList(),
              setTimeout(function() {
                var t, e
                if (
                  (o.addClass('active'),
                  s($('#exhibitionInfo'), o),
                  $('.slick-arrow').addClass('icon-svg_arrow'),
                  (i || 0 === $(window).scrollTop()) &&
                    $('#showPictureInfo').fadeIn('50'),
                  $('#galleryLoading').remove(),
                  (t = $(location.hash)),
                  0 !== t.length)
                )
                  return (
                    (e = t.offset().top - 40),
                    $('body,html').animate({ scrollTop: e }, 600, 'swing')
                  )
              }, 500)
            )
          }, 500)
        )
      }),
      (r = function(t) {
        return t
          .find('.exhibition-show__gallery-img-wrap')
          .css('max-height', $(window).innerHeight() - 41)
      }),
      (s = function(t, e) {
        return $(window).scrollTop() <= 0 && e.hasClass('active')
          ? (t.addClass('hidden'),
            e.addClass('fixed'),
            setTimeout(function() {
              return e.removeClass('absolute')
            }, 10))
          : (t.removeClass('hidden'),
            e.removeClass('fixed'),
            setTimeout(function() {
              return e.addClass('absolute')
            }, 10))
      }),
      (t = function() {
        return $.ajax({
          url:
            '/statistics/' +
            location.pathname.split('/').pop() +
            '/update.json',
          datatype: 'json',
          type: 'put'
        })
      }),
      (window.prepareDownArrow = function() {
        var t
        if (
          ((t = $('.slick-next.slick-arrow')),
          t.unbind('.downToInfoClick'),
          $('.exhibition-show__gallery-slide')
            .last()
            .hasClass('slick-current'))
        )
          return t.on('click.downToInfoClick', function() {
            var t, e
            return (
              (t = window.matchMedia('(max-width: 1000px)').matches ? 41 : 0),
              (e = $('#exhibitionInfo').offset().top - t),
              $('body,html').animate({ scrollTop: e }, 500, 'swing')
            )
          })
      }),
      (window.showWhoLikedModal = function(t) {
        return modalShow('/favorites/' + t + '.js')
      }),
      (o = function() {
        if (0 !== $('.exhibition-show__signup').length)
          return $.ajax({
            url: '/exhibitions/signup_banner.js',
            datatype: 'js'
          }).done(function(t) {
            var e
            if (t.show !== !1)
              return (
                (e = $('#noticeModal')),
                e.addClass('standby'),
                $(window)
                  .unbind('.signupBannerScroll')
                  .on('scroll.signupBannerScroll', function() {
                    return e.find('.exhibition-show__signup-tit').length > 0
                      ? $(this).scrollTop() > 600
                        ? e.addClass('active')
                        : e.removeClass('active')
                      : $(this).unbind('.signupBannerScroll')
                  })
              )
          })
      }),
      (window.initClosedExhibition = function() {
        return (
          i(initClosedImgsListener),
          $('.exhibition-show__closed-img-wrap').contextmenu(function() {
            return !1
          }),
          setTimeout(function() {
            return $('.exhibition-show__closed-lbl-wrap').addClass('active')
          }, 600)
        )
      }),
      (i = function(t) {
        var e, i
        return (
          null == t && (t = null),
          (e = $('.exhibition-show__closed-img-wrap .img')),
          e.length > 0
            ? ((i = 0),
              e.each(function(n, o) {
                var r
                return (
                  (r = $(o).attr('src')),
                  $(o).attr('src', ''),
                  $(o).bind('load', function() {
                    if (((i += 1), i === e.length)) return initClosedImgBoxes(t)
                  }),
                  $(o).attr('src', r)
                )
              }))
            : initClosedImgBoxes(t)
        )
      }),
      (window.initClosedImgBoxes = function(t) {
        var e, i, n
        if (
          (null == t && (t = null),
          (e = $('.exhibition-show__closed-img-wrap')),
          (n = window.matchMedia('(max-width: 640px)').matches
            ? 2
            : window.matchMedia('(max-width: 1000px)').matches
            ? 3
            : 5),
          (i = []),
          setTimeout(function() {
            var t, o, r, s, a, l, c, u, d, h
            for (h = [], r = s = 0, c = e.length; s < c; r = ++s)
              if (
                ((t = e[r]),
                (i[r % n] = $(t)),
                (r + 1) % n === 0 || r + 1 === e.length)
              ) {
                for (
                  o = (function() {
                    var e, n, o
                    for (o = [], e = 0, n = i.length; e < n; e++)
                      (t = i[e]),
                        o.push(
                          $(t)
                            .find('img.img')
                            .height()
                        )
                    return o
                  })(),
                    d = Math.max.apply(null, o),
                    a = 0,
                    u = i.length;
                  a < u;
                  a++
                )
                  (l = i[a]), $(l).css('height', d)
                h.push((i = []))
              } else h.push(void 0)
            return h
          }, 300),
          getFlyerList(),
          'function' == typeof t)
        )
          return t()
      }),
      (window.initClosedImgsListener = function() {
        var t, e
        return (
          (t = location.pathname),
          (e = !1),
          $(window)
            .unbind('.closedImgResize')
            .on('resize.closedImgResize', function() {
              if (location.pathname === t)
                return (
                  e !== !1 && clearTimeout(e),
                  (e = setTimeout(function() {
                    return initClosedImgBoxes()
                  }, Math.floor((1e3 / 60) * 10)))
                )
            })
        )
      })
  }.call(this),
  function() {
    !(function(t, e, i) {
      var n,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g,
        v,
        y,
        w,
        b,
        _,
        k,
        x,
        C,
        T,
        S,
        $,
        D,
        E,
        A,
        M,
        j,
        P,
        I,
        N,
        L,
        H,
        F,
        B,
        R,
        O,
        W,
        q,
        z,
        Y,
        U,
        X,
        V,
        K,
        J,
        G,
        Q,
        Z,
        tt,
        et,
        it,
        nt,
        ot,
        rt,
        st,
        at,
        lt,
        ct,
        ut,
        dt,
        ht,
        pt,
        ft,
        mt,
        gt,
        vt,
        yt,
        wt,
        bt,
        _t,
        kt,
        xt,
        Ct,
        Tt,
        St,
        $t,
        Dt,
        Et,
        At,
        Mt,
        jt,
        Pt,
        It,
        Nt,
        Lt,
        Ht,
        Ft,
        Bt,
        Rt,
        Ot,
        Wt,
        qt,
        zt,
        Yt,
        Ut,
        Xt,
        Vt,
        Kt,
        Jt,
        Gt,
        Qt,
        Zt,
        te,
        ee,
        ie,
        ne,
        oe,
        re,
        se,
        ae,
        le,
        ce,
        ue,
        de,
        he,
        pe,
        fe,
        me,
        ge,
        ve,
        ye,
        we,
        be,
        _e
      ;(pe = function(t, e, i) {
        return setTimeout(Dt(t, i), e)
      }),
        (ne = function(t, e, i) {
          return !!Array.isArray(t) && (Ht(t, i[e], i), !0)
        }),
        (Ht = function(t, e, i) {
          var n
          if (((n = void 0), t))
            if (t.forEach) t.forEach(e, i)
            else if (void 0 !== t.length)
              for (n = 0; n < t.length; ) e.call(i, t[n], n, t), n++
            else
              for (n in t) (n = n), t.hasOwnProperty(n) && e.call(i, t[n], n, t)
        }),
        (Nt = function(e, i, n) {
          var o
          return (
            (o = 'DEPRECATED METHOD: ' + i + '\n' + n + ' AT \n'),
            function() {
              var i, n, r
              return (
                (i = new Error('get-stack-trace')),
                (r =
                  i && i.stack
                    ? i.stack
                        .replace(/^[^\(]+?[\n$]/gm, '')
                        .replace(/^\s+at\s+/gm, '')
                        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                    : 'Unknown Stack Trace'),
                (n = t.console && (t.console.warn || t.console.log)),
                n && n.call(t.console, o, r),
                e.apply(this, arguments)
              )
            }
          )
        }),
        (ee = function(t, e, i) {
          var n, o
          ;(n = e.prototype),
            (o = void 0),
            (o = t.prototype = Object.create(n)),
            (o.constructor = t),
            (o._super = n),
            i && $t(o, i)
        }),
        (Dt = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }),
        (Et = function(t, e) {
          return typeof t === yt ? t.apply(e ? e[0] || void 0 : void 0, e) : t
        }),
        (Qt = function(t, e) {
          return void 0 === t ? e : t
        }),
        (St = function(t, e, i) {
          Ht(me(e), function(e) {
            t.addEventListener(e, i, !1)
          })
        }),
        (ue = function(t, e, i) {
          Ht(me(e), function(e) {
            t.removeEventListener(e, i, !1)
          })
        }),
        (Gt = function(t, e) {
          for (; t; ) {
            if (t === e) return !0
            t = t.parentNode
          }
          return !1
        }),
        (te = function(t, e) {
          return t.indexOf(e) > -1
        }),
        (me = function(t) {
          return t.trim().split(/\s+/g)
        }),
        (Zt = function(t, e, i) {
          var n
          if (t.indexOf && !i) return t.indexOf(e)
          for (n = 0; n < t.length; ) {
            if ((i && t[n][i] === e) || (!i && t[n] === e)) return n
            n++
          }
          return -1
        }),
        (ve = function(t) {
          return Array.prototype.slice.call(t, 0)
        }),
        (be = function(t, e, i) {
          var n, o, r, s
          for (o = [], s = [], n = 0; n < t.length; )
            (r = e ? t[n][e] : t[n]),
              Zt(s, r) < 0 && o.push(t[n]),
              (s[n] = r),
              n++
          return (
            i &&
              (o = e
                ? o.sort(function(t, i) {
                    return t[e] > i[e]
                  })
                : o.sort()),
            o
          )
        }),
        (le = function(t, e) {
          var i, n, o, r
          for (
            o = void 0, r = void 0, i = e[0].toUpperCase() + e.slice(1), n = 0;
            n < xt.length;

          ) {
            if (((o = xt[n]), (r = o ? o + i : e), r in t)) return r
            n++
          }
        }),
        (_e = function() {
          return Ct++
        }),
        (Jt = function(e) {
          var i
          return (
            (i = e.ownerDocument || e), i.defaultView || i.parentWindow || t
          )
        }),
        (S = function(t, e) {
          var i
          ;(i = this),
            (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function(e) {
              Et(t.options.enable, [t]) && i.handler(e)
            }),
            this.init()
        }),
        (It = function(t) {
          var e, i
          return (
            (e = void 0),
            (i = t.options.inputClass),
            new (e = i ? i : ot ? W : nt ? _t : rt ? kt : j)(t, ie)
          )
        }),
        (ie = function(t, e, i) {
          var n, o, r, s
          ;(s = i.pointers.length),
            (n = i.changedPointers.length),
            (r = e & _ && s - n === 0),
            (o = e & (w | y) && s - n === 0),
            (i.isFirst = !!r),
            (i.isFinal = !!o),
            r && (t.session = {}),
            (i.eventType = e),
            jt(t, i),
            t.emit('hammer.input', i),
            t.recognize(i),
            (t.session.prevInput = i)
        }),
        (jt = function(t, e) {
          var i, n, o, r, s, a, l, c, u
          ;(c = t.session),
            (a = e.pointers),
            (l = a.length),
            c.firstInput || (c.firstInput = fe(e)),
            l > 1 && !c.firstMultiple
              ? (c.firstMultiple = fe(e))
              : 1 === l && (c.firstMultiple = !1),
            (n = c.firstInput),
            (o = c.firstMultiple),
            (r = o ? o.center : n.center),
            (i = e.center = Ot(a)),
            (e.timeStamp = ae()),
            (e.deltaTime = e.timeStamp - n.timeStamp),
            (e.angle = Rt(r, i)),
            (e.distance = qt(r, i)),
            Mt(c, e),
            (e.offsetDirection = Wt(e.deltaX, e.deltaY)),
            (s = Kt(e.deltaTime, e.deltaX, e.deltaY)),
            (e.overallVelocityX = s.x),
            (e.overallVelocityY = s.y),
            (e.overallVelocity = Tt(s.x) > Tt(s.y) ? s.x : s.y),
            (e.scale = o ? Ut(o.pointers, a) : 1),
            (e.rotation = o ? Yt(o.pointers, a) : 0),
            (e.maxPointers = c.prevInput
              ? e.pointers.length > c.prevInput.maxPointers
                ? e.pointers.length
                : c.prevInput.maxPointers
              : e.pointers.length),
            Pt(c, e),
            (u = t.element),
            Gt(e.srcEvent.target, u) && (u = e.srcEvent.target),
            (e.target = u)
        }),
        (Mt = function(t, e) {
          var i, n, o, r
          ;(i = e.center),
            (n = t.offsetDelta || {}),
            (o = t.prevDelta || {}),
            (r = t.prevInput || {}),
            (e.eventType !== _ && r.eventType !== w) ||
              ((o = t.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }),
              (n = t.offsetDelta = { x: i.x, y: i.y })),
            (e.deltaX = o.x + i.x - n.x),
            (e.deltaY = o.y + i.y - n.y)
        }),
        (Pt = function(t, e) {
          var i, n, r, s, a, l, c, u, d
          ;(a = t.lastInterval || e),
            (i = e.timeStamp - a.timeStamp),
            (c = void 0),
            (u = void 0),
            (d = void 0),
            (s = void 0),
            e.eventType !== y && (i > o || void 0 === a.velocity)
              ? ((n = e.deltaX - a.deltaX),
                (r = e.deltaY - a.deltaY),
                (l = Kt(i, n, r)),
                (u = l.x),
                (d = l.y),
                (c = Tt(l.x) > Tt(l.y) ? l.x : l.y),
                (s = Wt(n, r)),
                (t.lastInterval = e))
              : ((c = a.velocity),
                (u = a.velocityX),
                (d = a.velocityY),
                (s = a.direction)),
            (e.velocity = c),
            (e.velocityX = u),
            (e.velocityY = d),
            (e.direction = s)
        }),
        (fe = function(t) {
          var e, i
          for (i = [], e = 0; e < t.pointers.length; )
            (i[e] = {
              clientX: de(t.pointers[e].clientX),
              clientY: de(t.pointers[e].clientY)
            }),
              e++
          return {
            timeStamp: ae(),
            pointers: i,
            center: Ot(i),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }),
        (Ot = function(t) {
          var e, i, n, o
          if (((i = t.length), 1 === i))
            return { x: de(t[0].clientX), y: de(t[0].clientY) }
          for (n = 0, o = 0, e = 0; e < i; )
            (n += t[e].clientX), (o += t[e].clientY), e++
          return { x: de(n / i), y: de(o / i) }
        }),
        (Kt = function(t, e, i) {
          return { x: e / t || 0, y: i / t || 0 }
        }),
        (Wt = function(t, e) {
          return t === e ? d : Tt(t) >= Tt(e) ? (t < 0 ? u : h) : e < 0 ? p : l
        }),
        (qt = function(t, e, i) {
          var n, o
          return (
            i || (i = B),
            (n = e[i[0]] - t[i[0]]),
            (o = e[i[1]] - t[i[1]]),
            Math.sqrt(n * n + o * o)
          )
        }),
        (Rt = function(t, e, i) {
          var n, o
          return (
            i || (i = B),
            (n = e[i[0]] - t[i[0]]),
            (o = e[i[1]] - t[i[1]]),
            (180 * Math.atan2(o, n)) / Math.PI
          )
        }),
        (Yt = function(t, e) {
          return Rt(e[1], e[0], F) + Rt(t[1], t[0], F)
        }),
        (Ut = function(t, e) {
          return qt(e[0], e[1], F) / qt(t[0], t[1], F)
        }),
        (j = function() {
          ;(this.evEl = D),
            (this.evWin = A),
            (this.pressed = !1),
            S.apply(this, arguments)
        }),
        (W = function() {
          ;(this.evEl = I),
            (this.evWin = L),
            S.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = [])
        }),
        (st = function() {
          ;(this.evTarget = X),
            (this.evWin = V),
            (this.started = !1),
            S.apply(this, arguments)
        }),
        (se = function(t, e) {
          var i, n
          return (
            (i = ve(t.touches)),
            (n = ve(t.changedTouches)),
            e & (w | y) && (i = be(i.concat(n), 'identifier', !0)),
            [i, n]
          )
        }),
        (_t = function() {
          ;(this.evTarget = vt), (this.targetIds = {}), S.apply(this, arguments)
        }),
        (Vt = function(t, e) {
          var i, n, o, r, s, a, l
          if (
            ((i = ve(t.touches)),
            (a = this.targetIds),
            e & (_ | b) && 1 === i.length)
          )
            return (a[i[0].identifier] = !0), [i, i]
          if (
            ((r = void 0),
            (l = void 0),
            (o = ve(t.changedTouches)),
            (n = []),
            (s = this.target),
            (l = i.filter(function(t) {
              return Gt(t.target, s)
            })),
            e === _)
          )
            for (r = 0; r < l.length; ) (a[l[r].identifier] = !0), r++
          for (r = 0; r < o.length; )
            a[o[r].identifier] && n.push(o[r]),
              e & (w | y) && delete a[o[r].identifier],
              r++
          return n.length ? [be(l.concat(n), 'identifier', !0), n] : void 0
        }),
        (kt = function() {
          var t
          S.apply(this, arguments),
            (t = Dt(this.handler, this)),
            (this.touch = new _t(this.manager, t)),
            (this.mouse = new j(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = [])
        }),
        (ce = function(t, e) {
          t & _
            ? ((this.primaryTouch = e.changedPointers[0].identifier),
              he.call(this, e))
            : t & (w | y) && he.call(this, e)
        }),
        (he = function(t) {
          var e, i, n, o
          ;(o = t.changedPointers[0]),
            o.identifier === this.primaryTouch &&
              ((e = { x: o.clientX, y: o.clientY }),
              this.lastTouches.push(e),
              (i = this.lastTouches),
              (n = function() {
                var t
                ;(t = i.indexOf(e)), t > -1 && i.splice(t, 1)
              }),
              setTimeout(n, s))
        }),
        (oe = function(t) {
          var e, i, n, o, s, a
          for (
            s = t.srcEvent.clientX, a = t.srcEvent.clientY, n = 0;
            n < this.lastTouches.length;

          ) {
            if (
              ((o = this.lastTouches[n]),
              (e = Math.abs(s - o.x)),
              (i = Math.abs(a - o.y)),
              e <= r && i <= r)
            )
              return !0
            n++
          }
          return !1
        }),
        (bt = function(t, e) {
          ;(this.manager = t), this.set(e)
        }),
        (At = function(t) {
          var e, i
          return te(t, pt)
            ? pt
            : ((e = te(t, ft)),
              (i = te(t, mt)),
              e && i ? pt : e || i ? (e ? ft : mt) : te(t, dt) ? dt : ct)
        }),
        (Xt = function() {
          var e, i
          return (
            !!P &&
            ((i = {}),
            (e = t.CSS && t.CSS.supports),
            [
              'auto',
              'manipulation',
              'pan-y',
              'pan-x',
              'pan-x pan-y',
              'none'
            ].forEach(function(n) {
              i[n] = !e || t.CSS.supports('touch-action', n)
            }),
            i)
          )
        }),
        (z = function(t) {
          ;(this.options = $t({}, this.defaults, t || {})),
            (this.id = _e()),
            (this.manager = null),
            (this.options.enable = Qt(this.options.enable, !0)),
            (this.state = tt),
            (this.simultaneous = {}),
            (this.requireFail = [])
        }),
        (ge = function(t) {
          return t & J
            ? 'cancel'
            : t & Q
            ? 'end'
            : t & G
            ? 'move'
            : t & K
            ? 'start'
            : ''
        }),
        (Lt = function(t) {
          return t === l
            ? 'down'
            : t === p
            ? 'up'
            : t === u
            ? 'left'
            : t === h
            ? 'right'
            : ''
        }),
        (zt = function(t, e) {
          var i
          return (i = e.manager), i ? i.get(t) : t
        }),
        (n = function() {
          z.apply(this, arguments)
        }),
        (R = function() {
          n.apply(this, arguments), (this.pX = null), (this.pY = null)
        }),
        (O = function() {
          n.apply(this, arguments)
        }),
        (q = function() {
          z.apply(this, arguments), (this._timer = null), (this._input = null)
        }),
        (Y = function() {
          n.apply(this, arguments)
        }),
        (at = function() {
          n.apply(this, arguments)
        }),
        (wt = function() {
          z.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0)
        }),
        (g = function(t, e) {
          return (
            (e = e || {}),
            (e.recognizers = Qt(e.recognizers, g.defaults.preset)),
            new M(t, e)
          )
        }),
        (M = function(t, e) {
          ;(this.options = $t({}, g.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = It(this)),
            (this.touchAction = new bt(this, this.options.touchAction)),
            ye(this, !0),
            Ht(
              this.options.recognizers,
              function(t) {
                var e
                ;(e = this.add(new t[0](t[1]))),
                  t[2] && e.recognizeWith(t[2]),
                  t[3] && e.requireFailure(t[3])
              },
              this
            )
        }),
        (ye = function(t, e) {
          var i, n
          ;(i = t.element),
            i.style &&
              ((n = void 0),
              Ht(t.options.cssProps, function(o, r) {
                ;(n = le(i.style, r)),
                  e
                    ? ((t.oldCssProps[n] = i.style[n]), (i.style[n] = o))
                    : (i.style[n] = t.oldCssProps[n] || '')
              }),
              e || (t.oldCssProps = {}))
        }),
        (we = function(t, i) {
          var n
          ;(n = e.createEvent('Event')),
            n.initEvent(t, !0, !0),
            (n.gesture = i),
            i.target.dispatchEvent(n)
        }),
        (xt = ['', 'webkit', 'Moz', 'MS', 'ms', 'o']),
        (lt = e.createElement('div')),
        (yt = 'function'),
        (de = Math.round),
        (Tt = Math.abs),
        (ae = Date.now),
        ($t = void 0),
        ($t =
          'function' != typeof Object.assign
            ? function(t) {
                var e, i, n, o
                if (void 0 === t || null === t)
                  throw new TypeError(
                    'Cannot convert undefined or null to object'
                  )
                for (n = Object(t), e = 1; e < arguments.length; ) {
                  if (((o = arguments[e]), void 0 !== o && null !== o))
                    for (i in o) o.hasOwnProperty(i) && (n[i] = o[i])
                  e++
                }
                return n
              }
            : Object.assign),
        (Ft = Nt(
          function(t, e, i) {
            var n, o
            for (o = Object.keys(e), n = 0; n < o.length; )
              (!i || (i && void 0 === t[o[n]])) && (t[o[n]] = e[o[n]]), n++
            return t
          },
          'extend',
          'Use `assign`.'
        )),
        (re = Nt(
          function(t, e) {
            return Ft(t, e, !0)
          },
          'merge',
          'Use `assign`.'
        )),
        (Ct = 1),
        ($ = /mobile|tablet|ip(ad|hone|od)|android/i),
        (rt = 'ontouchstart' in t),
        (ot = void 0 !== le(t, 'PointerEvent')),
        (nt = rt && $.test(navigator.userAgent)),
        (T = 'touch'),
        (C = 'pen'),
        (x = 'mouse'),
        (k = 'kinect'),
        (o = 25),
        (_ = 1),
        (b = 2),
        (w = 4),
        (y = 8),
        (d = 1),
        (u = 2),
        (h = 4),
        (p = 8),
        (l = 16),
        (c = u | h),
        (f = p | l),
        (a = c | f),
        (B = ['x', 'y']),
        (F = ['clientX', 'clientY']),
        (S.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && St(this.element, this.evEl, this.domHandler),
              this.evTarget && St(this.target, this.evTarget, this.domHandler),
              this.evWin && St(Jt(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && ue(this.element, this.evEl, this.domHandler),
              this.evTarget && ue(this.target, this.evTarget, this.domHandler),
              this.evWin && ue(Jt(this.element), this.evWin, this.domHandler)
          }
        }),
        (E = { mousedown: _, mousemove: b, mouseup: w }),
        (D = 'mousedown'),
        (A = 'mousemove mouseup'),
        ee(j, S, {
          handler: function(t) {
            var e
            ;(e = E[t.type]),
              e & _ && 0 === t.button && (this.pressed = !0),
              e & b && 1 !== t.which && (e = w),
              this.pressed &&
                (e & w && (this.pressed = !1),
                this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: x,
                  srcEvent: t
                }))
          }
        }),
        (N = {
          pointerdown: _,
          pointermove: b,
          pointerup: w,
          pointercancel: y,
          pointerout: y
        }),
        (v = { 2: T, 3: C, 4: x, 5: k }),
        (I = 'pointerdown'),
        (L = 'pointermove pointerup pointercancel'),
        t.MSPointerEvent &&
          !t.PointerEvent &&
          ((I = 'MSPointerDown'),
          (L = 'MSPointerMove MSPointerUp MSPointerCancel')),
        ee(W, S, {
          handler: function(t) {
            var e, i, n, o, r, s, a
            ;(s = this.store),
              (r = !1),
              (i = t.type.toLowerCase().replace('ms', '')),
              (e = N[i]),
              (o = v[t.pointerType] || t.pointerType),
              (n = o === T),
              (a = Zt(s, t.pointerId, 'pointerId')),
              e & _ && (0 === t.button || n)
                ? a < 0 && (s.push(t), (a = s.length - 1))
                : e & (w | y) && (r = !0),
              a < 0 ||
                ((s[a] = t),
                this.callback(this.manager, e, {
                  pointers: s,
                  changedPointers: [t],
                  pointerType: o,
                  srcEvent: t
                }),
                r && s.splice(a, 1))
          }
        }),
        (U = { touchstart: _, touchmove: b, touchend: w, touchcancel: y }),
        (X = 'touchstart'),
        (V = 'touchstart touchmove touchend touchcancel'),
        ee(st, S, {
          handler: function(t) {
            var e, i
            ;(i = U[t.type]),
              i === _ && (this.started = !0),
              this.started &&
                ((e = se.call(this, t, i)),
                i & (w | y) &&
                  e[0].length - e[1].length === 0 &&
                  (this.started = !1),
                this.callback(this.manager, i, {
                  pointers: e[0],
                  changedPointers: e[1],
                  pointerType: T,
                  srcEvent: t
                }))
          }
        }),
        (gt = { touchstart: _, touchmove: b, touchend: w, touchcancel: y }),
        (vt = 'touchstart touchmove touchend touchcancel'),
        ee(_t, S, {
          handler: function(t) {
            var e, i
            ;(i = gt[t.type]),
              (e = Vt.call(this, t, i)),
              e &&
                this.callback(this.manager, i, {
                  pointers: e[0],
                  changedPointers: e[1],
                  pointerType: T,
                  srcEvent: t
                })
          }
        }),
        (s = 2500),
        (r = 25),
        ee(kt, S, {
          handler: function(t, e, i) {
            var n, o
            if (
              ((o = i.pointerType === T),
              (n = i.pointerType === x),
              !(
                n &&
                i.sourceCapabilities &&
                i.sourceCapabilities.firesTouchEvents
              ))
            ) {
              if (o) ce.call(this, e, i)
              else if (n && oe.call(this, i)) return
              this.callback(t, e, i)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        }),
        (H = le(lt.style, 'touchAction')),
        (P = void 0 !== H),
        (ut = 'compute'),
        (ct = 'auto'),
        (dt = 'manipulation'),
        (pt = 'none'),
        (ft = 'pan-x'),
        (mt = 'pan-y'),
        (ht = Xt()),
        (bt.prototype = {
          set: function(t) {
            t === ut && (t = this.compute()),
              P &&
                this.manager.element.style &&
                ht[t] &&
                (this.manager.element.style[H] = t),
              (this.actions = t.toLowerCase().trim())
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t
            return (
              (t = []),
              Ht(this.manager.recognizers, function(e) {
                Et(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              }),
              At(t.join(' '))
            )
          },
          preventDefaults: function(t) {
            var e, i, n, o, r, s, a, l, u
            return (
              (u = t.srcEvent),
              (i = t.offsetDirection),
              this.manager.session.prevented
                ? void u.preventDefault()
                : ((e = this.actions),
                  (n = te(e, pt) && !ht[pt]),
                  (r = te(e, mt) && !ht[mt]),
                  (o = te(e, ft) && !ht[ft]),
                  (n &&
                    ((a = 1 === t.pointers.length),
                    (s = t.distance < 2),
                    (l = t.deltaTime < 250),
                    a && s && l)) ||
                  (o && r)
                    ? void 0
                    : n || (r && i & c) || (o && i & f)
                    ? this.preventSrc(u)
                    : void 0)
            )
          },
          preventSrc: function(t) {
            ;(this.manager.session.prevented = !0), t.preventDefault()
          }
        }),
        (tt = 1),
        (K = 2),
        (G = 4),
        (Q = 8),
        (et = Q),
        (J = 16),
        (Z = 32),
        (z.prototype = {
          defaults: {},
          set: function(t) {
            return (
              $t(this.options, t),
              this.manager && this.manager.touchAction.update(),
              this
            )
          },
          recognizeWith: function(t) {
            var e
            return ne(t, 'recognizeWith', this)
              ? this
              : ((e = this.simultaneous),
                (t = zt(t, this)),
                e[t.id] || ((e[t.id] = t), t.recognizeWith(this)),
                this)
          },
          dropRecognizeWith: function(t) {
            return ne(t, 'dropRecognizeWith', this)
              ? this
              : ((t = zt(t, this)), delete this.simultaneous[t.id], this)
          },
          requireFailure: function(t) {
            var e
            return ne(t, 'requireFailure', this)
              ? this
              : ((e = this.requireFail),
                (t = zt(t, this)),
                Zt(e, t) === -1 && (e.push(t), t.requireFailure(this)),
                this)
          },
          dropRequireFailure: function(t) {
            var e
            return ne(t, 'dropRequireFailure', this)
              ? this
              : ((t = zt(t, this)),
                (e = Zt(this.requireFail, t)),
                e > -1 && this.requireFail.splice(e, 1),
                this)
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
          },
          emit: function(t) {
            var e, i, n
            ;(i = this),
              (n = this.state),
              (e = function(e) {
                i.manager.emit(e, t)
              }),
              n < Q && e(i.options.event + ge(n)),
              e(i.options.event),
              t.additionalEvent && e(t.additionalEvent),
              n >= Q && e(i.options.event + ge(n))
          },
          tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = Z)
          },
          canEmit: function() {
            var t
            for (t = 0; t < this.requireFail.length; ) {
              if (!(this.requireFail[t].state & (Z | tt))) return !1
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e
            return (
              (e = $t({}, t)),
              Et(this.options.enable, [this, e])
                ? (this.state & (et | J | Z) && (this.state = tt),
                  (this.state = this.process(e)),
                  void (this.state & (K | G | Q | J) && this.tryEmit(e)))
                : (this.reset(), void (this.state = Z))
            )
          },
          process: function() {},
          getTouchAction: function() {},
          reset: function() {}
        }),
        ee(n, z, {
          defaults: { pointers: 1 },
          attrTest: function(t) {
            var e
            return (
              (e = this.options.pointers), 0 === e || t.pointers.length === e
            )
          },
          process: function(t) {
            var e, i, n, o
            return (
              (o = this.state),
              (e = t.eventType),
              (i = o & (K | G)),
              (n = this.attrTest(t)),
              i && (e & y || !n)
                ? o | J
                : i || n
                ? e & w
                  ? o | Q
                  : o & K
                  ? o | G
                  : K
                : Z
            )
          }
        }),
        ee(R, n, {
          defaults: { event: 'pan', threshold: 10, pointers: 1, direction: a },
          getTouchAction: function() {
            var t, e
            return (
              (e = this.options.direction),
              (t = []),
              e & c && t.push(mt),
              e & f && t.push(ft),
              t
            )
          },
          directionTest: function(t) {
            var e, i, n, o, r, s
            return (
              (o = this.options),
              (n = !0),
              (i = t.distance),
              (e = t.direction),
              (r = t.deltaX),
              (s = t.deltaY),
              e & o.direction ||
                (o.direction & c
                  ? ((e = 0 === r ? d : r < 0 ? u : h),
                    (n = r !== this.pX),
                    (i = Math.abs(t.deltaX)))
                  : ((e = 0 === s ? d : s < 0 ? p : l),
                    (n = s !== this.pY),
                    (i = Math.abs(t.deltaY)))),
              (t.direction = e),
              n && i > o.threshold && e & o.direction
            )
          },
          attrTest: function(t) {
            return (
              n.prototype.attrTest.call(this, t) &&
              (this.state & K || (!(this.state & K) && this.directionTest(t)))
            )
          },
          emit: function(t) {
            var e
            ;(this.pX = t.deltaX),
              (this.pY = t.deltaY),
              (e = Lt(t.direction)),
              e && (t.additionalEvent = this.options.event + e),
              this._super.emit.call(this, t)
          }
        }),
        ee(O, n, {
          defaults: { event: 'pinch', threshold: 0, pointers: 2 },
          getTouchAction: function() {
            return [pt]
          },
          attrTest: function(t) {
            return (
              this._super.attrTest.call(this, t) &&
              (Math.abs(t.scale - 1) > this.options.threshold || this.state & K)
            )
          },
          emit: function(t) {
            var e
            1 !== t.scale &&
              ((e = t.scale < 1 ? 'in' : 'out'),
              (t.additionalEvent = this.options.event + e)),
              this._super.emit.call(this, t)
          }
        }),
        ee(q, z, {
          defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
          getTouchAction: function() {
            return [ct]
          },
          process: function(t) {
            var e, i, n, o
            if (
              ((e = this.options),
              (n = t.pointers.length === e.pointers),
              (i = t.distance < e.threshold),
              (o = t.deltaTime > e.time),
              (this._input = t),
              !i || !n || (t.eventType & (w | y) && !o))
            )
              this.reset()
            else if (t.eventType & _)
              this.reset(),
                (this._timer = pe(
                  function() {
                    ;(this.state = et), this.tryEmit()
                  },
                  e.time,
                  this
                ))
            else if (t.eventType & w) return et
            return Z
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            this.state === et &&
              (t && t.eventType & w
                ? this.manager.emit(this.options.event + 'up', t)
                : ((this._input.timeStamp = ae()),
                  this.manager.emit(this.options.event, this._input)))
          }
        }),
        ee(Y, n, {
          defaults: { event: 'rotate', threshold: 0, pointers: 2 },
          getTouchAction: function() {
            return [pt]
          },
          attrTest: function(t) {
            return (
              this._super.attrTest.call(this, t) &&
              (Math.abs(t.rotation) > this.options.threshold || this.state & K)
            )
          }
        }),
        ee(at, n, {
          defaults: {
            event: 'swipe',
            threshold: 10,
            velocity: 0.3,
            direction: c | f,
            pointers: 1
          },
          getTouchAction: function() {
            return R.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, i
            return (
              (e = this.options.direction),
              (i = void 0),
              e & (c | f)
                ? (i = t.overallVelocity)
                : e & c
                ? (i = t.overallVelocityX)
                : e & f && (i = t.overallVelocityY),
              this._super.attrTest.call(this, t) &&
                e & t.offsetDirection &&
                t.distance > this.options.threshold &&
                t.maxPointers === this.options.pointers &&
                Tt(i) > this.options.velocity &&
                t.eventType & w
            )
          },
          emit: function(t) {
            var e
            ;(e = Lt(t.offsetDirection)),
              e && this.manager.emit(this.options.event + e, t),
              this.manager.emit(this.options.event, t)
          }
        }),
        ee(wt, z, {
          defaults: {
            event: 'tap',
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [dt]
          },
          process: function(t) {
            var e, i, n, o, r, s, a
            if (
              ((e = this.options),
              (s = t.pointers.length === e.pointers),
              (o = t.distance < e.threshold),
              (a = t.deltaTime < e.time),
              this.reset(),
              t.eventType & _ && 0 === this.count)
            )
              return this.failTimeout()
            if (o && a && s) {
              if (t.eventType !== w) return this.failTimeout()
              if (
                ((n = !this.pTime || t.timeStamp - this.pTime < e.interval),
                (r =
                  !this.pCenter || qt(this.pCenter, t.center) < e.posThreshold),
                (this.pTime = t.timeStamp),
                (this.pCenter = t.center),
                r && n ? (this.count += 1) : (this.count = 1),
                (this._input = t),
                (i = this.count % e.taps),
                0 === i)
              )
                return this.hasRequireFailures()
                  ? ((this._timer = pe(
                      function() {
                        ;(this.state = et), this.tryEmit()
                      },
                      e.interval,
                      this
                    )),
                    K)
                  : et
            }
            return Z
          },
          failTimeout: function() {
            return (
              (this._timer = pe(
                function() {
                  this.state = Z
                },
                this.options.interval,
                this
              )),
              Z
            )
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            this.state === et &&
              ((this._input.tapCount = this.count),
              this.manager.emit(this.options.event, this._input))
          }
        }),
        (g.VERSION = '2.0.8'),
        (g.defaults = {
          domEvents: !1,
          touchAction: ut,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Y, { enable: !1 }],
            [O, { enable: !1 }, ['rotate']],
            [at, { direction: c }],
            [R, { direction: c }, ['swipe']],
            [wt],
            [wt, { event: 'doubletap', taps: 2 }, ['tap']],
            [q]
          ],
          cssProps: {
            userSelect: 'none',
            touchSelect: 'none',
            touchCallout: 'none',
            contentZooming: 'none',
            userDrag: 'none',
            tapHighlightColor: 'rgba(0,0,0,0)'
          }
        }),
        (it = 1),
        (m = 2),
        (M.prototype = {
          set: function(t) {
            return (
              $t(this.options, t),
              t.touchAction && this.touchAction.update(),
              t.inputTarget &&
                (this.input.destroy(),
                (this.input.target = t.inputTarget),
                this.input.init()),
              this
            )
          },
          stop: function(t) {
            this.session.stopped = t ? m : it
          },
          recognize: function(t) {
            var e, i, n, o, r
            if (((r = this.session), !r.stopped))
              for (
                this.touchAction.preventDefaults(t),
                  n = void 0,
                  o = this.recognizers,
                  e = r.curRecognizer,
                  (!e || (e && e.state & et)) && (e = r.curRecognizer = null),
                  i = 0;
                i < o.length;

              )
                (n = o[i]),
                  r.stopped === m || (e && n !== e && !n.canRecognizeWith(e))
                    ? n.reset()
                    : n.recognize(t),
                  !e && n.state & (K | G | Q) && (e = r.curRecognizer = n),
                  i++
          },
          get: function(t) {
            var e, i
            if (t instanceof z) return t
            for (i = this.recognizers, e = 0; e < i.length; ) {
              if (i[e].options.event === t) return i[e]
              e++
            }
            return null
          },
          add: function(t) {
            var e
            return ne(t, 'add', this)
              ? this
              : ((e = this.get(t.options.event)),
                e && this.remove(e),
                this.recognizers.push(t),
                (t.manager = this),
                this.touchAction.update(),
                t)
          },
          remove: function(t) {
            var e, i
            return ne(t, 'remove', this)
              ? this
              : ((t = this.get(t)),
                t &&
                  ((i = this.recognizers),
                  (e = Zt(i, t)),
                  e !== -1 && (i.splice(e, 1), this.touchAction.update())),
                this)
          },
          on: function(t, e) {
            var i
            if (void 0 !== t && void 0 !== e)
              return (
                (i = this.handlers),
                Ht(me(t), function(t) {
                  ;(i[t] = i[t] || []), i[t].push(e)
                }),
                this
              )
          },
          off: function(t, e) {
            var i
            if (void 0 !== t)
              return (
                (i = this.handlers),
                Ht(me(t), function(t) {
                  e ? i[t] && i[t].splice(Zt(i[t], e), 1) : delete i[t]
                }),
                this
              )
          },
          emit: function(t, e) {
            var i, n
            if (
              (this.options.domEvents && we(t, e),
              (i = this.handlers[t] && this.handlers[t].slice()),
              i && i.length)
            )
              for (
                e.type = t,
                  e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                  },
                  n = 0;
                n < i.length;

              )
                i[n](e), n++
          },
          destroy: function() {
            this.element && ye(this, !1),
              (this.handlers = {}),
              (this.session = {}),
              this.input.destroy(),
              (this.element = null)
          }
        }),
        $t(g, {
          INPUT_START: _,
          INPUT_MOVE: b,
          INPUT_END: w,
          INPUT_CANCEL: y,
          STATE_POSSIBLE: tt,
          STATE_BEGAN: K,
          STATE_CHANGED: G,
          STATE_ENDED: Q,
          STATE_RECOGNIZED: et,
          STATE_CANCELLED: J,
          STATE_FAILED: Z,
          DIRECTION_NONE: d,
          DIRECTION_LEFT: u,
          DIRECTION_RIGHT: h,
          DIRECTION_UP: p,
          DIRECTION_DOWN: l,
          DIRECTION_HORIZONTAL: c,
          DIRECTION_VERTICAL: f,
          DIRECTION_ALL: a,
          Manager: M,
          Input: S,
          TouchAction: bt,
          TouchInput: _t,
          MouseInput: j,
          PointerEventInput: W,
          TouchMouseInput: kt,
          SingleTouchInput: st,
          Recognizer: z,
          AttrRecognizer: n,
          Tap: wt,
          Pan: R,
          Swipe: at,
          Pinch: O,
          Rotate: Y,
          Press: q,
          on: St,
          off: ue,
          each: Ht,
          merge: re,
          extend: Ft,
          assign: $t,
          inherit: ee,
          bindFn: Dt,
          prefixed: le
        }),
        (Bt =
          'undefined' != typeof t ? t : 'undefined' != typeof self ? self : {}),
        (Bt.Hammer = g),
        'function' == typeof define && define.amd
          ? define(function() {
              return g
            })
          : 'undefined' != typeof module && module.exports
          ? (module.exports = g)
          : (t[i] = g)
    })(window, document, 'Hammer')
  }.call(this),
  function() {
    ;(window.transitHideButtonTxt = function(t, e) {
      if (window.matchMedia('(min-width: 1001px)').matches)
        return (t.textContent = e)
    }),
      (window.toggleHideExhibition = function(t, e) {
        return (
          e.removeAttribute('onclick'),
          $.ajax({
            url: '/exhibitions/toggle.js',
            datatype: 'js',
            type: 'put',
            data: '&id=' + t
          })
        )
      }),
      (window.initLpHeader = function(t) {
        return $(window).scroll(function(e) {
          if ('/' !== location.pathname) return $(this).unbind(e)
          if (window.matchMedia('(max-width: 1000px)').matches) {
            if (0 === $(this).scrollTop()) return t.css('border-width', '0px')
            if ('0px' === t.css('border-width'))
              return t.css('border-width', '1px')
          }
        })
      }),
      (window.transitLpTabs = function(t) {
        var e, i, n, o
        switch (
          ((o = $('#exhbTab,#exhibitionListWrap')),
          (n = $('#evntTab,#eventListWrap')),
          t)
        ) {
          case 0:
            return (
              o.addClass('current'),
              n.removeClass('current'),
              placeExhibitionBoxes()
            )
          case 1:
            if (
              (o.removeClass('current'),
              n.addClass('current'),
              (i = $('#eventListWrap')),
              (e = i.find('.events__list')),
              !e.attr('id'))
            )
              return (
                i.css(
                  'min-height',
                  window.innerHeight - i.offset().top - $('#footer').height()
                ),
                e.attr('id', 'eventList'),
                getEventList(e)
              )
        }
      })
  }.call(this),
  function() {
    var t
    ;(window.initInstructionModal = function(e) {
      var i
      return (
        (e.className += ' standby'),
        (i = $('#instructionSlider')),
        i.slick({
          dots: !0,
          draggable: !1,
          slidesToShow: 1,
          speed: 300,
          cssEase: 'ease-out',
          infinite: !1,
          responsive: [{ breakpoint: 1e3, settings: { draggable: !0 } }]
        }),
        $('.slick-arrow').addClass('icon-svg_arrow'),
        i
          .unbind('.breakInstSlider')
          .on('breakpoint.breakInstSlider', function() {
            return $('.slick-arrow').addClass('icon-svg_arrow')
          }),
        setTimeout(function() {
          return (e.className += ' active')
        }, 10),
        $('.instructions__list .slick-arrow').on('click', function() {
          var e
          if (!window.matchMedia('(max-width: 1000px)').matches)
            return (
              (e =
                1 *
                $('.instructions__content.slick-current').attr(
                  'data-slick-index'
                )),
              t(e)
            )
        }),
        $('.instructions__list .slick-dots button').on('click', function() {
          var e
          if (!window.matchMedia('(max-width: 1000px)').matches)
            return (e = 1 * $(this).text() - 1), t(e)
        })
      )
    }),
      (t = function(t) {
        var e, i, n
        switch (
          ((e = $('.instructions__arw.disc')),
          (i = $('.instructions__arw.post')),
          (n = $('#userMenu')),
          t)
        ) {
          case 1:
            return (
              n.removeClass('active'),
              e.addClass('active'),
              i.removeClass('active')
            )
          case 2:
            return (
              n.addClass('active'),
              e.removeClass('active'),
              i.addClass('active')
            )
          default:
            return (
              n.removeClass('active'),
              e.removeClass('active'),
              i.removeClass('active')
            )
        }
      }),
      (window.hideInstruction = function() {
        var t
        return (
          (t = document.getElementById('instructionWrap')),
          (t.className = 'instructions__wrap standby'),
          $.ajax({
            url: '/users/read_instruction.js',
            datatype: 'js',
            type: 'put'
          }).done(function() {
            return setTimeout(function() {
              return (t.className = 'instructions__wrap')
            }, 500)
          })
        )
      })
  }.call(this),
  function() {
    !(function(t) {
      'function' == typeof define && define.amd
        ? define(['jquery', 'hammerjs'], t)
        : 'object' == typeof exports
        ? t(require('jquery'), require('hammerjs'))
        : t(jQuery, Hammer)
    })(function(t, e) {
      var i
      ;(i = function(i, n) {
        var o
        ;(o = t(i)), o.data('hammer') || o.data('hammer', new e(o[0], n))
      }),
        (t.fn.hammer = function(t) {
          return this.each(function() {
            i(this, t)
          })
        }),
        (e.Manager.prototype.emit = (function(e) {
          return function(i, n) {
            e.call(this, i, n), t(this.element).trigger({ type: i, gesture: n })
          }
        })(e.Manager.prototype.emit))
    })
  }.call(this),
  !(function(t) {
    function e(t, e) {
      if (!(t.originalEvent.touches.length > 1)) {
        t.preventDefault()
        var i = t.originalEvent.changedTouches[0],
          n = document.createEvent('MouseEvents')
        n.initMouseEvent(
          e,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          t.target.dispatchEvent(n)
      }
    }
    if (((t.support.touch = 'ontouchend' in document), t.support.touch)) {
      var i,
        n = t.ui.mouse.prototype,
        o = n._mouseInit,
        r = n._mouseDestroy
      ;(n._touchStart = function(t) {
        var n = this
        !i &&
          n._mouseCapture(t.originalEvent.changedTouches[0]) &&
          ((i = !0),
          (n._touchMoved = !1),
          e(t, 'mouseover'),
          e(t, 'mousemove'),
          e(t, 'mousedown'))
      }),
        (n._touchMove = function(t) {
          i && ((this._touchMoved = !0), e(t, 'mousemove'))
        }),
        (n._touchEnd = function(t) {
          i &&
            (e(t, 'mouseup'),
            e(t, 'mouseout'),
            this._touchMoved || e(t, 'click'),
            (i = !1))
        }),
        (n._mouseInit = function() {
          var e = this
          e.element.bind({
            touchstart: t.proxy(e, '_touchStart'),
            touchmove: t.proxy(e, '_touchMove'),
            touchend: t.proxy(e, '_touchEnd')
          }),
            o.call(e)
        }),
        (n._mouseDestroy = function() {
          var e = this
          e.element.unbind({
            touchstart: t.proxy(e, '_touchStart'),
            touchmove: t.proxy(e, '_touchMove'),
            touchend: t.proxy(e, '_touchEnd')
          }),
            r.call(e)
        })
    }
  })(jQuery),
  function() {
    var t
    ;(window.initMobileBookForm = function() {
      return adjustMobileBookPreviewAspect(), initMobileBookFormTouchEvent()
    }),
      (window.adjustMobileBookPreviewAspect = function() {
        var t, e
        return (
          (t = $('.sp-books-edit__form-block')),
          (e = $(t[0])
            .find('.sp-books-edit__form-block-box')
            .outerWidth()),
          t.find('.sp-books-edit__form-block-box').outerHeight(e)
        )
      }),
      (window.adjustMobileBookPictureBoxAspect = function() {
        var t
        return (
          (t = $('.sp-books-edit__form-picture-list-item')),
          t.outerHeight(t.outerWidth())
        )
      }),
      (window.initMobileBookFormTouchEvent = function() {
        var e, i, n, o, r, s, a, l, c, u
        for (
          n = $('#spBookForm'),
            $('.books-edit__content-wrap').outerHeight(
              n.parent().outerHeight()
            ),
            n.sortable({
              disabled: !0,
              items: '.sp-books-edit__form-block.inside.both',
              revert: !0,
              tolerance: 'pointer',
              scrollSpeed: 6,
              scrollSensitivity: 30,
              update: function(e) {
                return t(e)
              }
            }),
            l = n.find('.sp-books-edit__form-block.inside.both'),
            c = [],
            o = 0,
            r = l.length;
          o < r;
          o++
        )
          (e = l[o]),
            (u = !1),
            (s = 0),
            (a = 0),
            $(e).on('touchstart', function(t) {
              var e
              return (
                (s = t.originalEvent.touches[0].clientX),
                (a = t.originalEvent.touches[0].clientY),
                (e = this),
                u && clearTimeout(u),
                (u = setTimeout(function() {
                  return (
                    n.sortable('enable'),
                    $(t.target).addClass('ui-sortable-helper'),
                    $(e).trigger(t)
                  )
                }, 250))
              )
            }),
            $(e).on('touchend', function(t) {
              return $(t.target).removeClass('ui-sortable-helper'), i()
            }),
            $(e).on('touchmove', function(t) {
              var e, n, o
              if (
                ((n = t.originalEvent.touches[0].clientX - s),
                (o = t.originalEvent.touches[0].clientY - a),
                (e = Math.sqrt(n * n + o * o)),
                e > 10)
              )
                return i()
            }),
            c.push(
              (i = function() {
                return clearTimeout(u), n.sortable('disable')
              })
            )
        return c
      }),
      (t = function(t) {
        var e, i, n, o, r, s, a, l, c, u, d, h
        for (
          c = '',
            i = $(t.target).attr('data-book-id'),
            d = $(t.target).find('.sp-books-edit__form-block.inside.both'),
            n = r = 0,
            a = d.length;
          r < a;
          n = ++r
        )
          for (
            e = d[n],
              h = $(e).find('.sp-books-edit__form-block-num'),
              o = s = 0,
              l = h.length;
            s < l;
            o = ++s
          )
            (u = h[o]),
              '' !== c && (c += ','),
              (c += $(u).text()),
              $(u).text(2 * (n + 2) + o)
        return $.ajax({
          url: '/books/' + i + '/sort_page.json',
          datatype: 'json',
          type: 'put',
          data: '&new_order=' + c
        })
      }),
      (window.handleClickMobileBookPicWrap = function(t) {
        var e, i, n, o, r
        return (
          (o = $(t.target)),
          (n =
            1 *
            o
              .attr('id')
              .split('_')
              .pop()),
          o.hasClass('empty')
            ? ($('.sp-books-edit__form-picture-hidden.start-at').val(n),
              showMobileBookFormPictureBox(n))
            : ((i = o.attr('data-pic-id')),
              null == document.getElementById('mobile_menu_' + i) &&
                ((r = '/book_pictures/' + i + '/mobile_menu.js'),
                (e = '&page_num=' + n)),
              modalShow(r, e))
        )
      }),
      (window.beginReplacingBookPic = function(t) {
        return (
          modalHide(),
          $('.sp-books-edit__form-picture-hidden.start-at').val(t),
          showMobileBookFormPictureBox(t)
        )
      }),
      (window.showMobileBookFormPictureBox = function(t) {
        var e
        return (
          (e = $('#pictureBox')),
          e.addClass('active'),
          0 === t
            ? (e.addClass('cover-select'),
              e.find('.cover').fadeOut('fast'),
              e
                .find('.pasted .mark')
                .not('.checked')
                .addClass('hidden'))
            : (e.removeClass('cover-select'),
              e.find('.cover').fadeIn('fast'),
              e.find('.pasted .mark').removeClass('hidden'))
        )
      }),
      (window.hideMobileBookFormPictureBox = function(t) {
        var e, i, n, o, r, s
        for (
          r = $(t).parents('#pictureBox'),
            r.removeClass('active'),
            i = r.find('.sp-books-edit__form-picture-check:checked'),
            s = [],
            n = 0,
            o = i.length;
          n < o;
          n++
        )
          (e = i[n]),
            (e.value = 0),
            $(e).attr('checked', !1),
            s.push(
              $(e)
                .next()
                .removeClass('checked')
                .text('')
            )
        return s
      }),
      (window.handleMobileBookFormPictureCheck = function(t) {
        var e, i, n, o, r, s, a, l, c, u, d, h, p, f, m
        if (
          ((m = t.target),
          (d = $(m).parents('#pictureBox')),
          (i = d.find('.sp-books-edit__form-picture-check:checked')),
          m.checked)
        ) {
          for (
            m.value = i.length,
              $(m)
                .next()
                .addClass('checked')
                .text(m.value),
              h = d.find('.books-edit__form-picture-list-item-in.pasted'),
              f = [],
              n = 0,
              r = h.length;
            n < r;
            n++
          )
            (u = h[n]),
              (u = $(u)),
              (c = u.find('.mark')),
              c.removeClass('hidden'),
              c.hasClass('checked') || f.push(u.find('.cover').fadeIn('fast'))
          return f
        }
        if (
          ($(m)
            .next()
            .removeClass('checked')
            .text(''),
          i.length > 0)
        ) {
          for (o = 0, s = i.length; o < s; o++)
            (e = i[o]),
              e.value < m.value ||
                ((e.value -= 1),
                $(e)
                  .next()
                  .text(e.value))
          for (
            p = d.find('.books-edit__form-picture-list-item-in.pasted'),
              l = 0,
              a = p.length;
            l < a;
            l++
          )
            (u = p[l]),
              (u = $(u)),
              (c = u.find('.mark')),
              c.removeClass('hidden'),
              c.hasClass('checked') || u.find('.cover').fadeIn('fast')
        } else
          d.hasClass('cover-select') &&
            (d.find('.cover').fadeOut('fast'),
            d.find('.pasted .mark').addClass('hidden'))
        return (m.value = 0)
      })
  }.call(this),
  function() {
    ;(window.modalShow = function(t, e) {
      var i
      return (
        null == t && (t = ''),
        null == e && (e = ''),
        (i = $('#cmnModalWrap')),
        i.addClass('standby'),
        '' !== t
          ? $.ajax({ url: t, datatype: 'js', data: e })
              .done(function(t) {
                return t.show === !1
                  ? (reloadNoticeHashScript(), i.removeClass('standby active'))
                  : 'signin' === t.should
                  ? (reloadNoticeHashScript(), userSigninModal())
                  : i.addClass('active')
              })
              .fail(function() {
                return (i.removeClass = 'standby active')
              })
          : setTimeout(function() {
              return i.addClass('active')
            }, 10)
      )
    }),
      (window.modalHide = function(t) {
        return (
          null == t && (t = $('#cmnModalWrap')),
          t.removeClass('active'),
          setTimeout(function() {
            return t.removeClass('standby')
          }, 500)
        )
      }),
      (window.preventModalHide = function(t) {
        return t.stopPropagation()
      })
  }.call(this),
  function() {
    var t
    ;(t = !1),
      (window.initNoticeModal = function() {
        var t
        if (
          ((t = $('#noticeModal')),
          t.is(':visible') && t.removeClass('standby active'),
          'undefined' != typeof noticeModalHash && !noticeModalHash.nothing)
        )
          return showNoticeModal(noticeModalHash, t)
      }),
      (window.reloadNoticeHashScript = function() {
        return $.ajax({ url: '/notices/reload.js', datatype: 'js' }).done(
          function() {
            return initNoticeModal()
          }
        )
      }),
      (window.showNoticeModal = function(e, i) {
        var n
        return (
          t !== !1 && clearTimeout(t),
          (n = i.find('#noticeModalIn')),
          i.addClass('standby'),
          setTimeout(function() {
            var t, o, r, s, a, l, c, u, d
            for (
              n.is(':empty') || n.empty(),
                a = [],
                l = ['notice', 'alert'],
                t = 0,
                r = l.length;
              t < r;
              t++
            )
              if (((d = l[t]), e[d]))
                for (
                  u = e[d].txt,
                    u = 'string' == typeof u ? [u] : u,
                    o = 0,
                    s = u.length;
                  o < s;
                  o++
                )
                  (c = u[o]),
                    n.append(
                      "<p class='notice-modal__txt " + d + "'>" + c + '</p>'
                    )
            return (
              i.addClass('active'),
              e.alert || noticeModalHideLater(i, n, 1e4),
              (document.getElementById('noticeHashScript').innerHTML = '')
            )
          }, 100)
        )
      }),
      (window.noticeModalHideLater = function(e, i, n) {
        return (t = setTimeout(function() {
          return noticeModalHide(e, i)
        }, n))
      }),
      (window.noticeModalHide = function(t, e) {
        return (
          null == t && (t = null),
          null == e && (e = null),
          t || (t = $('#noticeModal')),
          e || (e = t.find('#noticeModalIn')),
          t.removeClass('active'),
          setTimeout(function() {
            return t.removeClass(), e.empty()
          }, 300)
        )
      })
  }.call(this),
  function() {
    ;(window.countNotifications = function() {
      var t
      if (((t = $('#notificationDisc')), t.length > 0))
        return $.ajax({
          url: '/notifications/count.json',
          datatype: 'json'
        }).done(function(e) {
          if (e.unread) return t.show()
        })
    }),
      (window.getNotifications = function() {
        var t, e, i, n, o, r, s, a, l, c, u, d, h
        if (((h = $('.notification-loader .wavy-loader')), h.length > 0)) {
          for (
            h.addClass('standby'),
              setTimeout(function() {
                return h.addClass('active')
              }, 10),
              i = $('.notifications__list-box'),
              s = 0,
              n = 0,
              d = 0,
              r = 0,
              o = 0,
              e = 0,
              u = 0,
              a = 0,
              l = 0,
              c = i.length;
            l < c;
            l++
          )
            (t = i[l]),
              $(t).hasClass('favorite') && (s += 1),
              $(t).hasClass('comment') && (n += 1),
              $(t).hasClass('recommend') && (d += 1),
              $(t).hasClass('event_favorite') && (s += 1),
              $(t).hasClass('event_comment') && (n += 1),
              $(t).hasClass('book_recommend') && (e += 1),
              $(t).hasClass('cart_book') && (u += 1),
              $(t).hasClass('follow') && (a += 1)
          if (!i.hasClass('no-result'))
            return $.ajax({
              url: 'notifications/load.js',
              datatype: 'js',
              data:
                '&fav_count=' +
                s +
                '&cmt_count=' +
                n +
                '&rcm_count=' +
                d +
                '&e_fav_count=' +
                r +
                '&e_cmt_count=' +
                o +
                '&b_rcm_count=' +
                e +
                '&p_bok_count=' +
                u +
                '&flw_count=' +
                a
            }).done(function(t) {
              if (
                (h.removeClass('active'),
                setTimeout(function() {
                  return t.no_result ? h.remove() : h.removeClass('standby')
                }, 300),
                !t.no_result)
              )
                return (
                  $('.notifications__list-box').slideDown(200, 'swing'),
                  initNotifListEventListener()
                )
            })
        }
      }),
      (window.initNotifListEventListener = function() {
        var t, e
        return (
          (t = $('#notificationList')),
          (e = !1),
          $(window)
            .unbind('notificationsScroll')
            .on('scroll.notificationsScroll', function() {
              var i
              if ('/notifications' === location.pathname)
                return (
                  e !== !1 && clearTimeout(e),
                  (i =
                    $(document).scrollTop() +
                    window.innerHeight -
                    t.offset().top),
                  (e = setTimeout(function() {
                    if (i > t.height()) return getNotifications()
                  }, 300))
                )
            })
        )
      })
  }.call(this)
var objectFitImages = (function() {
  'use strict'
  function t(t, e) {
    return (
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
      t +
      "' height='" +
      e +
      "'%3E%3C/svg%3E"
    )
  }
  function e(t) {
    if (t.srcset && !f && window.picturefill) {
      var e = window.picturefill._
      ;(t[e.ns] && t[e.ns].evaled) || e.fillImg(t, { reselect: !0 }),
        t[e.ns].curSrc ||
          ((t[e.ns].supported = !1), e.fillImg(t, { reselect: !0 })),
        (t.currentSrc = t[e.ns].curSrc || t.src)
    }
  }
  function i(t) {
    for (
      var e, i = getComputedStyle(t).fontFamily, n = {};
      null !== (e = c.exec(i));

    )
      n[e[1]] = e[2]
    return n
  }
  function n(e, i, n) {
    var o = t(i || 1, n || 0)
    m.call(e, 'src') !== o && g.call(e, 'src', o)
  }
  function o(t, e) {
    t.naturalWidth ? e(t) : setTimeout(o, 100, t, e)
  }
  function r(t) {
    var r = i(t),
      a = t[l]
    if (((r['object-fit'] = r['object-fit'] || 'fill'), !a.img)) {
      if ('fill' === r['object-fit']) return
      if (!a.skipTest && d && !r['object-position']) return
    }
    if (!a.img) {
      ;(a.img = new Image(t.width, t.height)),
        (a.img.srcset = m.call(t, 'data-ofi-srcset') || t.srcset),
        (a.img.src = m.call(t, 'data-ofi-src') || t.src),
        g.call(t, 'data-ofi-src', t.src),
        t.srcset && g.call(t, 'data-ofi-srcset', t.srcset),
        n(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
        t.srcset && (t.srcset = '')
      try {
        s(t)
      } catch (t) {
        window.console && console.warn('https://bit.ly/ofi-old-browser')
      }
    }
    e(a.img),
      (t.style.backgroundImage =
        'url("' + (a.img.currentSrc || a.img.src).replace(/"/g, '\\"') + '")'),
      (t.style.backgroundPosition = r['object-position'] || 'center'),
      (t.style.backgroundRepeat = 'no-repeat'),
      (t.style.backgroundOrigin = 'content-box'),
      /scale-down/.test(r['object-fit'])
        ? o(a.img, function() {
            a.img.naturalWidth > t.width || a.img.naturalHeight > t.height
              ? (t.style.backgroundSize = 'contain')
              : (t.style.backgroundSize = 'auto')
          })
        : (t.style.backgroundSize = r['object-fit']
            .replace('none', 'auto')
            .replace('fill', '100% 100%')),
      o(a.img, function(e) {
        n(t, e.naturalWidth, e.naturalHeight)
      })
  }
  function s(t) {
    var e = {
      get: function(e) {
        return t[l].img[e || 'src']
      },
      set: function(e, i) {
        return (
          (t[l].img[i || 'src'] = e), g.call(t, 'data-ofi-' + i, e), r(t), e
        )
      }
    }
    Object.defineProperty(t, 'src', e),
      Object.defineProperty(t, 'currentSrc', {
        get: function() {
          return e.get('currentSrc')
        }
      }),
      Object.defineProperty(t, 'srcset', {
        get: function() {
          return e.get('srcset')
        },
        set: function(t) {
          return e.set(t, 'srcset')
        }
      })
  }
  function a(t, e) {
    var i = !v && !t
    if (((e = e || {}), (t = t || 'img'), (h && !e.skipTest) || !p)) return !1
    'img' === t
      ? (t = document.getElementsByTagName('img'))
      : 'string' == typeof t
      ? (t = document.querySelectorAll(t))
      : 'length' in t || (t = [t])
    for (var n = 0; n < t.length; n++)
      (t[n][l] = t[n][l] || { skipTest: e.skipTest }), r(t[n])
    i &&
      (document.body.addEventListener(
        'load',
        function(t) {
          'IMG' === t.target.tagName && a(t.target, { skipTest: e.skipTest })
        },
        !0
      ),
      (v = !0),
      (t = 'img')),
      e.watchMQ &&
        window.addEventListener(
          'resize',
          a.bind(null, t, { skipTest: e.skipTest })
        )
  }
  var l = 'bfred-it:object-fit-images',
    c = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
    u =
      'undefined' == typeof Image
        ? { style: { 'object-position': 1 } }
        : new Image(),
    d = 'object-fit' in u.style,
    h = 'object-position' in u.style,
    p = 'background-size' in u.style,
    f = 'string' == typeof u.currentSrc,
    m = u.getAttribute,
    g = u.setAttribute,
    v = !1
  return (
    (a.supportsObjectFit = d),
    (a.supportsObjectPosition = h),
    (function() {
      function t(t, e) {
        return t[l] && t[l].img && ('src' === e || 'srcset' === e)
          ? t[l].img
          : t
      }
      h ||
        ((HTMLImageElement.prototype.getAttribute = function(e) {
          return m.call(t(this, e), e)
        }),
        (HTMLImageElement.prototype.setAttribute = function(e, i) {
          return g.call(t(this, e), e, String(i))
        }))
    })(),
    a
  )
})()
;(function() {
  window.getOrderHistoryList = function() {
    var t
    if (
      ((t = $(
        '.orders__history-body .orders__history-tr, .mobile-orders__history-list-item'
      )),
      t.length > 9)
    )
      return $.ajax({
        url: '/orders.js',
        datatype: 'js',
        data: '&count=' + t.length
      })
  }
}.call(this),
  function() {
    var t, e
    ;(e = !1),
      (t = ''),
      (window.getPictureForm = function(t, e) {
        var i, n
        return (
          null == t && (t = !1),
          null == e && (e = !1),
          (n = $('#exhibitionForm')
            .attr('action')
            .split('/')
            .pop()),
          (i =
            document.getElementsByClassName('touchable').length > 0
              ? 'sp'
              : 'pc'),
          $.ajax({
            url: '/exhibitions/picture_form.js',
            datatype: 'js',
            data: '&exhb_id=' + n + '&client=' + i
          }).done(function() {
            if (
              (initFormForDragDrop(),
              initExhibitionPicUploader(),
              isPicFormPicsLoaded(initSortPictureDragDrop, e),
              initAsCoverCheckBoxes(),
              !t)
            )
              return reloadNoticeHashScript()
          })
        )
      }),
      (window.initExhibitionPicUploader = function() {
        var t, e
        return (
          (t = $('#pictureUploadForm')),
          (e = $('#exhibitionPictureLoading')),
          t
            .unbind('.exhbPicFormBefore')
            .on('ajax:beforeSend.exhbPicFormBefore', function() {
              return (
                e.addClass('standby'),
                setTimeout(function() {
                  return e.addClass('active')
                }, 10)
              )
            }),
          t
            .unbind('.exhbPicFormSuccess')
            .on('ajax:success.exhbPicFormSuccess', function() {
              return (
                e.removeClass('active'),
                setTimeout(function() {
                  return getPictureForm(!1, !0)
                }, 200)
              )
            })
        )
      }),
      (window.clickSubmitPictureBtn = function() {
        return $('#submitPictureBtn').click()
      }),
      (window.initAsCoverCheckBoxes = function() {
        var t, e, i, n, o, r, s
        for (
          i = document.getElementsByClassName(
            'exhibition__form-picture-form-check'
          ),
            e = 0,
            s = [],
            n = 0,
            r = i.length;
          n < r;
          n++
        )
          (t = i[n]),
            (o = t.nextElementSibling),
            t.checked
              ? ((e += 1), s.push((o.className += ' checked')))
              : s.push(
                  (o.className = 'exhibition__form-picture-form-check-label')
                )
        return s
      }),
      (window.editPictureFromSp = function(t) {
        var e, i
        return (
          (e = $(t)
            .parents('.sp-exhibition__form-picture-wrap')
            .attr('id')
            .split('_')
            .pop()),
          (i = !$('#picturesFormWrap').hasClass('no_exif')),
          modalShow('/pictures/' + e + '/edit.js?show_exif=' + i)
        )
      }),
      (window.autoUpdatePictureData = function(i) {
        return (
          e !== !1 && i.id === t && clearTimeout(e),
          (t = i.id),
          (e = setTimeout(function() {
            var t
            return (
              (t = i.id.match('picture_title')
                ? 'title'
                : i.id.match('exif_model')
                ? 'model'
                : i.id.match('exif_lens')
                ? 'lens'
                : i.id.match('exif_focal_length')
                ? 'focal_length'
                : i.id.match('exif_f_number')
                ? 'f_number'
                : i.id.match('exif_exposure_time')
                ? 'exposure_time'
                : i.id.match('exif_iso')
                ? 'iso'
                : void 0),
              $.ajax({
                url: '/pictures/' + i.id.split('_').pop() + '/auto_update.json',
                datatype: 'json',
                type: 'put',
                data: '&' + t + '=' + i.value
              })
            )
          }, 2e3))
        )
      }),
      (window.removePictureFromPc = function(t, e) {
        var i
        return (
          (i = $(e).parents('.exhibition__form-picture-wrap')),
          i.addClass('removing'),
          removePicture(t)
        )
      }),
      (window.removePictureFromSp = function(t) {
        return modalHide(), removePicture(t)
      }),
      (window.removePicture = function(t) {
        return $.ajax({
          url: '/pictures/' + t + '/remove.json',
          datatype: 'json',
          type: 'delete'
        }).done(function() {
          return getPictureForm()
        })
      }),
      (window.savePictureAsCover = function(t) {
        var e, i, n, o, r
        for (
          r = document.getElementsByClassName(
            'exhibition__form-picture-form-check'
          ),
            i = 0,
            n = r.length;
          i < n;
          i++
        )
          (e = r[i]), e !== t && (e.checked = !1)
        return (
          (o = t.id.split('_').pop()),
          $.ajax({
            url: '/pictures/' + o + '/auto_update.json',
            datatype: 'json',
            type: 'put',
            data: '&as_cover=' + t.checked
          }).done(function() {
            return initAsCoverCheckBoxes()
          })
        )
      }),
      (window.isPicFormPicsLoaded = function(t, e) {
        var i, n
        return (
          (i = 0),
          (n = $('.uploaded-image .img')),
          n.each(function(o, r) {
            var s
            return (
              (s = $(r).attr('src')),
              $(r).attr('src', ''),
              $(r).bind('load', function() {
                if (((i += 1), i === n.length && 'function' == typeof t))
                  return t(n, e)
              }),
              $(r).attr('src', s)
            )
          })
        )
      }),
      (window.initSortPictureDragDrop = function(t, e) {
        var i, n, o, r, s, a, l, c, u
        if (
          (null == e && (e = !1),
          (a = $('#picturesList')),
          (c = document.getElementsByClassName('touchable').length > 0))
        ) {
          for (s = 0, i = 0, n = t.length; i < n; i++)
            (o = t[i]),
              (r = $(o).width()),
              $(o)
                .parents('.sp-exhibition__form-picture-wrap')
                .css('width', r + 10),
              (s += r)
          return (
            (l = s + 10 * t.length),
            a.css('width', l),
            e &&
              ((u = l - $(window)[0].innerWidth + 30),
              u > 0 && a.parent().animate({ scrollLeft: u }, 500)),
            a.sortable({
              items: '.uploaded-image',
              axis: 'x',
              revert: !0,
              tolerance: 'intersect',
              scrollSpeed: 6,
              scrollSensitivity: 30,
              update: function() {
                return savePicturesNewOrder(
                  $('#picturesList').sortable('toArray')
                )
              }
            }),
            a.sortable('disable'),
            a.disableSelection(),
            c && initFullWindowModal(),
            initSortableByPress(a)
          )
        }
        return a.sortable({
          items: '.uploaded-image',
          revert: !0,
          tolerance: 'pointer',
          update: function() {
            return savePicturesNewOrder($('#picturesList').sortable('toArray'))
          }
        })
      }),
      (window.savePicturesNewOrder = function(t) {
        var e, i, n, o
        for (o = [], i = 0, n = t.length; i < n; i++)
          (e = t[i]), o.push(e.split('_').pop())
        return $.ajax({
          url: '/pictures/sort.json',
          datatype: 'json',
          type: 'put',
          data: '&picture_ids=' + o
        })
      }),
      (window.initSortableByPress = function(t) {
        var e, i, n, o, r, s
        for (
          n = t.find('.sp-exhibition__form-picture-wrap'),
            s = [],
            o = 0,
            r = n.length;
          o < r;
          o++
        )
          (i = n[o]),
            (e = new Hammer.Manager(i)),
            e.add(new Hammer.Press({ time: 300 })),
            s.push(
              e.on('press', function() {
                return handleSortablePictures(t)
              })
            )
        return s
      }),
      (window.handleSortablePictures = function(t) {
        return (
          null == t && (t = $('#picturesList')),
          t.hasClass('sorting')
            ? stopSortablePictures(t)
            : enableSortablePictures(t)
        )
      }),
      (window.enableSortablePictures = function(t) {
        return (
          t.sortable('enable'),
          t.addClass('sorting'),
          $(
            '.sp-exhibition__form-picture-edit-btn, .sp-exhibition__form-picture-cover-mark'
          ).removeClass('active'),
          t.find('.img').css('pointer-events', 'none')
        )
      }),
      (window.stopSortablePictures = function(t) {
        return (
          null == t && (t = $('#picturesList')),
          t.sortable('disable'),
          t.removeClass('sorting'),
          t.find('.img').css('pointer-events', 'auto'),
          setTimeout(function() {
            return $(
              '.sp-exhibition__form-picture-edit-btn, .sp-exhibition__form-picture-cover-mark'
            ).addClass('active')
          }, 300)
        )
      }),
      (window.showSmallImgModal = function(t) {
        var e
        return (
          (e = $('#cmnModalWrap')),
          e.addClass('standby'),
          e.find('#cmnModalTit').text(''),
          e.find('#cmnModalContent').html(
            $(
              "<div class='small-img-wrap'><img class='img' src='" +
                $(t)
                  .find('img')
                  .attr('src') +
                "'></div>"
            )
          ),
          setTimeout(function() {
            return e.addClass('active')
          }, 10)
        )
      }),
      (window.showSmallImgCautionModal = function() {
        var t
        return (
          document.getElementById('smallImgCaution') ||
            (t = '/pictures/small_caution.js'),
          modalShow(t)
        )
      })
  }.call(this),
  function() {
    ;(window.execSearchPlace = function() {
      return $.ajax({
        url: '/places/search.js',
        datatype: 'js',
        data: '&query=' + $('#event_place_id').val()
      }).done(function() {
        var t
        return (
          (t = $('.events-edit__form-place-result-form')),
          t.find('#place_zipcode').jpostal({
            postcode: ['#place_zipcode'],
            address: {
              '#place_prefecture_code': '%3',
              '#place_address': '%4%5'
            }
          }),
          t
            .find('.input')
            .unbind('.placeInputChange')
            .on('change.placeInputChange', function() {
              return t
                .find('.events-edit__form-place-result-btn .disabled')
                .removeClass('disabled')
            })
        )
      })
    }),
      (window.submitPlaceInfo = function(t, e) {
        var i
        return (
          null == e && (e = null),
          !$(t.target).hasClass('disabled') &&
            ((i = ''),
            e
              ? (i += '&place_id=' + e)
              : ((i += '&name=' + $('#place_name').val()),
                (i += '&zipcode=' + $('#place_zipcode').val()),
                (i += '&prefecture_code=' + $('#place_prefecture_code').val()),
                (i += '&address=' + $('#place_address').val())),
            $.ajax({
              url: '/places/create.js',
              datatype: 'js',
              type: 'post',
              data: i
            }).done(function(t) {
              var e, i, n, o
              if (t.valid === !1) {
                for (o = t.keys, e = 0, n = o.length; e < n; e++)
                  (i = o[e]),
                    $('#' + i)
                      .addClass('error')
                      .attr('oninput', 'removeErrorFromInput(event)')
                return reloadNoticeHashScript()
              }
              return checkEventNeededValues()
            }))
        )
      })
  }.call(this),
  function() {
    window.countEntriesCheckedAsPrized = function(t) {
      var e, i, n, o, r, s, a, l, c
      for (
        n = $('.contest-form__prize-entry-check'), i = 0, r = 0, a = n.length;
        r < a;
        r++
      )
        (e = n[r]), e.checked && (i += 1)
      for (o = !(i < t), c = [], s = 0, l = n.length; s < l; s++)
        (e = n[s]),
          o && !e.checked
            ? c.push(e.setAttribute('disabled', ''))
            : c.push(e.removeAttribute('disabled'))
      return c
    }
  }.call(this),
  function() {
    ;(window.initQuestionnaireForm = function() {
      return $('.edit_questionnaire').on('ajax:success', function() {
        return setTimeout(function() {
          return reloadNoticeHashScript()
        }, 200)
      })
    }),
      (window.showQuestionnaireModal = function(t) {
        var e
        return (
          (e = document.getElementById('answersFormWrap')
            ? ''
            : '/answers/new.js'),
          modalShow(e, 'questionnaire_id=' + t)
        )
      }),
      (window.rejectAnsweringQuestionnaire = function(t, e) {
        return (
          e.stopPropagation(),
          $.ajax({
            url: '/answers.json',
            datatype: 'json',
            type: 'post',
            data: '&reject=true&questionnaire_id=' + t
          }).done(function() {
            var t
            return (
              (t = $('#questionnaireNotice')),
              t.removeClass('active'),
              setTimeout(function() {
                return t.remove()
              }, 300)
            )
          })
        )
      })
  }.call(this),
  function() {
    ;(window.renderNewQuestionForm = function(t, e) {
      return $.ajax({
        url: '/questions/new.js',
        datatype: 'js',
        data: '&qn_id=' + e
      }).done(function() {
        return (t.className += ' hidden')
      })
    }),
      (window.renderNewChoiceInput = function(t, e) {
        return $.ajax({
          url: '/choices/new.js',
          datatype: 'json',
          data: '&q_id=' + e
        }).done(function() {
          return (t.className += ' hidden')
        })
      }),
      (window.cancelNewQuestion = function() {
        return (
          $('#addQuestionBtn').removeClass('hidden'),
          $('#newQuestionWrap').empty()
        )
      }),
      (window.cancelNewChoice = function(t) {
        return (
          $('#addChoiceBtn' + t).removeClass('hidden'),
          $('#newChoiceWrap' + t).empty()
        )
      })
  }.call(this),
  function() {
    var t
    ;(window.initBillingAddressSameRadio = function() {
      var e
      return (
        (e = $('.registers-address__form-billing-same-radio .button')),
        t(e),
        e.on('change', function() {
          return (
            t(e),
            'billing_same_false' === $(this).attr('id')
              ? $('#billingForm').slideDown(200, 'swing')
              : $('#billingForm').slideUp(300, 'swing')
          )
        })
      )
    }),
      (t = function(t) {
        return t.each(function(t, e) {
          return e.checked
            ? $(e)
                .next()
                .addClass('active')
            : $(e)
                .next()
                .removeClass('active')
        })
      }),
      (window.showAddressSelectModal = function(t, e) {
        var i, n
        return (
          document.getElementById(e + 'Select') ||
            ((n = '/register/address/modal.js'),
            (i = '&id=' + t + '&type=' + e)),
          modalShow(n, i)
        )
      }),
      (window.beginOrderingProcess = function() {
        return modalShow('/order/processing.js')
      })
  }.call(this),
  function() {
    ;(window.initRoyaltyForm = function() {
      return $('#royalty_log_email').on('blur', function(t) {
        var e
        return (
          (e = $(this)),
          t.target.value.match(
            /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z]{2,8})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
          )
            ? (e
                .prev()
                .prev()
                .addClass('active'),
              e.prev().removeClass('active'))
            : (e
                .prev()
                .prev()
                .removeClass('active'),
              e.prev().addClass('active'))
        )
      })
    }),
      (window.transitRoyaltyReceiveForm = function(t) {
        return $(
          '.royalty__manage-menu-receive-lbl,.royalty__manage-menu-receive-detail'
        ).each(function(e, i) {
          return (
            (i = $(i)),
            i.hasClass(t) ? i.addClass('active') : i.removeClass('active')
          )
        })
      }),
      (window.getRoyaltyLogList = function(t) {
        var e, i
        if (
          (null == t && (t = $('#royaltyLogTableBody')),
          (e = t.find('.royalty__log-table-tr').length),
          (i = t.find('.royalty__log-table-no-result').length > 0),
          !i)
        )
          return $.ajax({
            url: '/royalty/log.js',
            datatype: 'js',
            data: '&count=' + e
          })
      })
  }.call(this),
  function() {
    window.toggleAnswer = function(t) {
      var e
      return (
        (e = $(t)
          .parent()
          .children('.support__article-a')),
        e.is(':visible') ? e.slideUp(300, 'swing') : e.slideDown(200, 'swing')
      )
    }
  }.call(this),
  function() {
    var t
    ;(t = []),
      (window.initTagAutocomplete = function() {
        return 0 === t.length
          ? $.ajax({ url: '/tags.json', datatype: 'json' }).done(function(e) {
              return (t = e.tags), execInitTagAutocomplete()
            })
          : execInitTagAutocomplete()
      }),
      (window.execInitTagAutocomplete = function() {
        var e
        return (
          (e = $('#newTagField')),
          e.autocomplete({
            source: t,
            multiple: !0,
            minLength: 2,
            delay: 500,
            autoFocus: !0,
            messages: { noResults: '', results: function() {} }
          })
        )
      }),
      (window.removeTag = function(t, e) {
        return $.ajax({
          url: '/tags/' + e + '.js',
          datatype: 'js',
          type: 'delete',
          data: '&exhb_id=' + t
        })
      }),
      (window.saveNewTag = function(t) {
        var e, i, n
        if (
          (null == t && (t = null),
          (i = $('#newTagField')),
          (n = i.val()),
          (i.is(':focus') || (t && 'tags__input-plus-btn' === t.className)) &&
            '' !== n)
        )
          return (
            (e = i.attr('class').split('_')[2]),
            $.ajax({
              url: '/tags.js',
              datatype: 'js',
              type: 'post',
              data: '&tag_name=' + n + '&exhb_id=' + e
            }).done(function() {
              return reloadNoticeHashScript()
            })
          )
      })
  }.call(this),
  function() {
    ;(document.userSignout = function() {
      return $.ajax({
        url: '/users/sign_out.json',
        datatype: 'json',
        type: 'delete'
      }).always(function() {
        return (location.href = '/')
      })
    }),
      (window.userSigninModal = function() {
        var t
        return (
          (t = document.getElementById('userSignin')
            ? ''
            : '/users/sign_in.js'),
          modalShow(t)
        )
      }),
      (window.deleteSigninError = function() {
        return $('#cmnModalError').html(
          "<p class='devise-signin__failure'>Trying..Trying...</p>"
        )
      }),
      (window.initUserImgUploaders = function() {
        return initCoverImgUploader(), initAvatarUploader()
      }),
      (window.initAvatarUploader = function() {
        var t, e, i
        return (
          (t = $('#avatarUploadForm')),
          (e = $('#userAvatar')),
          (i = $('.avatar-loader.wavy-loader')),
          t
            .unbind('.avaFormBefore')
            .on('ajax:beforeSend.avaFormBefore', function() {
              return (
                t.removeClass('active'),
                i.addClass('standby'),
                setTimeout(function() {
                  return i.addClass('active'), e.removeClass('self')
                }, 10)
              )
            }),
          t
            .unbind('.avaFormSuccess')
            .on('ajax:success.avaFormSuccess', function() {
              return (
                t.addClass('active'),
                i.removeClass('active'),
                setTimeout(function() {
                  return (
                    i.removeClass('standby'),
                    e.addClass('self'),
                    reloadNoticeHashScript()
                  )
                }, 200)
              )
            })
        )
      }),
      (window.clickSubmitAvatarBtn = function() {
        return $('#submitAvatarBtn').click()
      }),
      (window.toggleUserIntroduction = function(t, e) {
        var i
        return (
          (t = $(t)),
          (i = $('.user-show__user-intro .hidden')),
          t.hasClass('active')
            ? (i.removeClass('visible'),
              t.removeClass('active'),
              t.text(
                'ja' === e ? '\u3082\u3063\u3068\u898b\u308b' : 'Show more'
              ))
            : (i.addClass('visible'),
              t.addClass('active'),
              t.text('ja' === e ? '\u96a0\u3059' : 'Hide'))
        )
      }),
      (window.transitProfileTabs = function(t, e) {
        var i, n, o, r
        switch (
          (null == e && (e = null),
          (r = $('#exhbTab,#exhbContent')),
          (i = $('#bookTab,#bookContent')),
          (n = $('#eventTab,#eventContent')),
          t)
        ) {
          case 0:
            return (
              r.addClass('current'),
              i.removeClass('current'),
              n.removeClass('current'),
              initPastExhibitionBoxes(null)
            )
          case 1:
            if (
              (r.removeClass('current'),
              i.addClass('current'),
              n.removeClass('current'),
              !document.getElementById('bookList'))
            )
              return $.ajax({
                url: '/books/users_list.js',
                datatype: 'js',
                data: '&user_id=' + e
              }).done(function() {
                return placeBookListBoxes(null, !0)
              })
            break
          case 2:
            if (
              (r.removeClass('current'),
              i.removeClass('current'),
              n.addClass('current'),
              (o = $('.events__list.profile')),
              'eventList' !== o.attr('id'))
            )
              return o.attr('id', 'eventList'), getEventList(o)
        }
      }),
      (window.transitProfileCurrentExhibitionLayout = function(t) {
        var e
        if (((e = $(t).width()), e > 300))
          return $(t)
            .parents('.user-show__current-exhibition')
            .addClass('sp')
      }),
      (window.confirmDeleteAccount = function() {
        var t
        return (
          document.getElementById('deleteAccountWrap') ||
            (t = '/users/confirm_destroy.js'),
          modalShow(t)
        )
      }),
      (window.deleteAccount = function() {
        return (
          modalHide(),
          $.ajax({ url: '/users.json', datatype: 'json', type: 'delete' })
        )
      })
  }.call(this),
  function() {
    var t
    ;(t = function() {
      var t, e, i, n, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, w, b, _, k
      switch (
        ((p = window.matchMedia('(max-width: 1000px)').matches),
        p && $('body').addClass('touchable'),
        initDropdowns(),
        initNoticeModal(),
        countNotifications(),
        (s = $('#exhibitionList')),
        s.length > 0
          ? getExhibitionList(s)
          : (i = document.getElementById('pastExhibitionList')) &&
            getPastExhibitionList(i.getAttribute('data')),
        (e = $('#bookList')),
        e.length > 0 && getBookList(e),
        (r = $('#eventList')),
        r.length > 0 && getEventList(r),
        (t = $('#addressForm,#new_address,.edit_address')),
        t.length > 0 && (initAddressForm(t), initBillingAddressSameRadio()),
        (b = location.pathname))
      ) {
        case '/':
        case '/thanks/oauth':
          ;(h = $('.lp-head')),
            h.length > 0
              ? initLpHeader(h)
              : ((g = location.search.match(/answer_to=(\d+)/)),
                g && (_ = g[1]),
                _ === 1 * _ + '' && showQuestionnaireModal(_),
                setTimeout(function() {
                  return $('#questionnaireNotice').addClass('active')
                }, 800)),
            (l = document.getElementById('instructionWrap')),
            l && initInstructionModal(l)
          break
        case '/manage':
          if (
            ((v = location.search.substring(1)),
            v.length > 0 && v.indexOf('published_now') >= 0)
          )
            for (y = v.split('&'), a = c = 0, u = y.length; c < u; a = ++c)
              if (((f = y[a]), (f = f.split('=')), 'published_now' === f[0])) {
                'true' === f[1] && modalShow('/manage/book_modal.js')
                break
              }
          break
        case '/users/sign_up':
        case '/users':
          ;(k =
            document.getElementById('new_user') ||
            document.getElementById('edit_user')),
            k && '/users' === k.getAttribute('action') && prepareRegistForm(k)
          break
        case '/profiles/edit':
          initFormForDragDrop(), initAvatarUploader()
          break
        case '/users/edit':
          ;(k = document.getElementById('edit_user')),
            k && '/users' === k.getAttribute('action') && prepareRegistForm(k)
          break
        case '/royalty':
          initRoyaltyForm()
          break
        case '/notifications':
          getNotifications()
          break
        case '/announcements':
          getAnnouncements()
          break
        case '/checkexhibitionsandblockharmful':
          getExhibitionsForAdmin()
          break
        case '/checkandcountbooks':
          getBooksForAdmin()
          break
        case '/checkandcountorders':
          getOrdersForAdmin()
          break
        default:
          b.match(/^\/exhibitions\/\d+\/edit$/)
            ? (initFormForExhibition(), getPictureForm(!0))
            : b.match(/^\/exhibitions\/\d+$/)
            ? (document.getElementById('exhibitionSlider')
                ? initExhibitionSlider()
                : initClosedExhibition(),
              getComments())
            : b.match(/^\/events\/\d+$/)
            ? (initEventShow(), getEventComments())
            : b.match(/^\/events\/\d+\/edit$/)
            ? (initFormForDragDrop(), initEventForm())
            : b.match(/^\/contests\/\d+$/)
            ? initContestShow()
            : b.match(/^\/contests\/\d+\/entry$/)
            ? getContestEntryList()
            : b.match(/^\/books\/\d+\/edit$/)
            ? initBookForm()
            : b.match(/^\/books\/\d+$/)
            ? initBookShow()
            : b.match(/^\/questionnaires\/\d+\/edit$/)
            ? initQuestionnaireForm()
            : $('.user-show__content-wrap').length > 0 && initUserImgUploaders()
      }
      return (
        (n = location.pathname),
        (m = $('#pagetop')),
        m.length > 0 &&
          $(window)
            .unbind('.pagetopScroll')
            .on('scroll.pagetopScroll', function() {
              return n !== location.pathname
                ? setTimeout(function() {
                    return (m = $('#pagetop')), (n = location.pathname)
                  }, 10)
                : m.length > 0
                ? $(this).scrollTop() > 600
                  ? m.fadeIn('fast')
                  : m.fadeOut('fast')
                : void 0
            }),
        p &&
          ((d = $('.head-lower__links')),
          d.length > 0 &&
            ((w = 0),
            $(window)
              .unbind('.lowHeadScroll')
              .on('scroll.lowHeadScroll', function() {
                var t
                return n !== location.pathname
                  ? setTimeout(function() {
                      return (
                        (d = $('.head-lower__links')), (n = location.pathname)
                      )
                    }, 1e3)
                  : d.length > 0
                  ? ((t = $(document).scrollTop()),
                    $(document).scrollTop() <= 41 || t < w
                      ? d.removeClass('hidden')
                      : d.addClass('hidden'),
                    (w = t))
                  : void 0
              })),
          (o = $('.user-show__current-exhibition-img-in .img')) &&
            transitProfileCurrentExhibitionLayout(o)),
        $('a[href="#top"]').on('click', function(t) {
          return (
            t.preventDefault(),
            $('body,html').animate({ scrollTop: '0' }, 500, 'swing')
          )
        }),
        $(document).on('keypress', 'input:not(.allow_submit)', function(t) {
          return 13 !== t.which
        }),
        objectFitImages()
      )
    }),
      (window.slideDownToTarget = function(t, e) {
        var i, n, o
        return (
          t.preventDefault(),
          (o = $($(e).attr('href'))),
          (i = window.matchMedia('(max-width: 1000px)').matches ? 50 : 20),
          (n = o.offset().top - i),
          $('body,html').animate({ scrollTop: n }, 400, 'swing')
        )
      }),
      (window.countLettersOfInput = function(t, e) {
        return (document.getElementById(e).textContent = t.value.length)
      }),
      (window.forceToInputHalfNum = function(t) {
        var e, i
        return (
          (i = $(t).attr('maxLength')),
          (e = t.value
            .replace(/[\uff10-\uff19]/g, function(t) {
              return String.fromCharCode(t.charCodeAt(0) - 65248)
            })
            .replace(/[^0-9]/g, '')),
          (t.value = i ? e.slice(0, i) : e)
        )
      }),
      (window.removeErrorFromInput = function(t) {
        return $(t.target).removeClass('error')
      }),
      $(function() {
        return $(document).on('turbolinks:render', function() {
          if (null != window.ga)
            return (
              ga('set', 'location', location.href.split('#')[0]),
              ga('send', 'pageview')
            )
        })
      }),
      $(document).on('turbolinks:load', t)
  }.call(this))
