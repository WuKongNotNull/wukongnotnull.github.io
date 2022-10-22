"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80023],{11870:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(55511);const t=(0,e._)("p",null,"ES6 新引入的 Map 与 Set 是对数组和对象欠缺功能的一种补充。",-1),p=(0,e.uE)('<h2 id="map-的引入" tabindex="-1"><a class="header-anchor" href="#map-的引入" aria-hidden="true">#</a> Map 的引入</h2><p>JavaScript 的默认对象表示方式 <code>{}</code> 可以视为其他语言中的 <code>Map</code> 或 <code>Dictionary</code> 的数据结构，即一组键值对。</p><p>但是 JavaScript 的对象有个小问题，就是键必须是字符串。但实际上 Number 或者其他数据类型作为键也是非常合理的。</p><p>为了解决这个问题，最新的 ES6 规范引入了新的数据类型 <code>Map</code>。</p><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p><code>Map</code> 是一组键值对的结构，具有极快的查找速度。</p><p>举个例子，假设要根据同学的名字查找对应的成绩，如果用 Array 实现，需要两个 Array:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tracy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>给定一个名字，要查找对应的成绩，就先要在 <code>names</code> 中找到对应的位置，再从 <code>scores</code> 取出对应的成绩，Array 越长，耗时越长。</p><p>如果用 Map 实现，只需要一个 <code>“名字”-“成绩”</code> 的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。用 JavaScript 写一个 <code>Map</code> 如下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&quot;Tracy&quot;</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 95</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化 <code>Map</code> 需要一个二维数组，或者直接初始化一个空 <code>Map</code>。<code>Map</code> 具有以下方法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空Map</span>\n\nm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加新的key-value</span>\nm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nm<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是否存在key &#39;Adam&#39;: true</span>\nm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 67</span>\nm<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除key &#39;Adam&#39;</span>\nm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于一个 <code>key</code> 只能对应一个 <code>value</code> ，所以，多次对一个 <code>key</code> 放入 <code>value</code>，后面的值会把前面的值冲掉:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Adam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 88</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2><p><code>Set</code> 和 <code>Map</code> 类似，也是一组 <code>key</code> 的集合，但不存储 <code>value</code>。由于 <code>key</code> 不能重复，所以，在 <code>Set</code> 中，没有重复的 <code>key</code>。</p><p>要创建一个 <code>Set</code>，需要提供一个 <code>Array</code> 作为输入，或者直接创建一个空 <code>Set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空Set</span>\n<span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 含1, 2, 3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重复元素在 <code>Set</code> 中自动被过滤:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ns<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2, 3, &quot;3&quot;}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意数字 <code>3</code> 和字符串 <code>&#39;3&#39;</code> 是不同的元素。</p><p>通过 <code>add(key)</code> 方法可以添加元素到 <code>Set</code> 中，可以重复添加，但不会有效果:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ns<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2, 3, 4}</span>\ns<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ns<span class="token punctuation">;</span> <span class="token comment">// 仍然是 Set {1, 2, 3, 4}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>delete(key)</code> 方法可以删除元素:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ns<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2, 3}</span>\ns<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ns<span class="token punctuation">;</span> <span class="token comment">// Set {1, 2}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Map 和 Set 是 ES6 标准新增的数据类型，请根据浏览器的支持情况决定是否要使用。</p>',28),c={},o=(0,a(61935).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},5368:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-19e36b6e","path":"/code/language/js/guide/map-and-set.html","title":"Map 和 Set","lang":"zh-CN","frontmatter":{"title":"Map 和 Set","icon":"map","date":"2019-09-19T00:00:00.000Z","category":["JavaScript"],"summary":"ES6 新引入的 Map 与 Set 是对数组和对象欠缺功能的一种补充。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/guide/map-and-set.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Map 和 Set"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>ES6 新引入的 Map 与 Set 是对数组和对象欠缺功能的一种补充。</p>\\n","headers":[{"level":2,"title":"Map 的引入","slug":"map-的引入","link":"#map-的引入","children":[]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[]},{"level":2,"title":"Set","slug":"set","link":"#set","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1604856355000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":2.29,"words":686},"filePathRelative":"code/language/js/guide/map-and-set.md","localizedDate":"2019年9月19日"}')}}]);