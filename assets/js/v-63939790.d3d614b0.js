"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[88729],{43730:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(55511);const t=[(0,e.uE)('<p>Python 的 <code>functools</code> 模块提供了很多有用的功能，其中一个就是偏函数 (Partial function) 。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>要注意，这里的偏函数和数学意义上的偏函数不一样。</p></div><p>在介绍函数参数的时候，我们讲到，通过设定参数的默认值，可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下:</p><p><code>int()</code> 函数可以把字符串转换为整数，当仅传入字符串时，<code>int()</code> 函数默认按十进制转换:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">)</span>\n<span class="token number">12345</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但 <code>int()</code> 函数还提供额外的 <code>base</code> 参数，默认值为 <code>10</code>。如果传入 <code>base</code> 参数，就可以做 N 进制的转换:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>\n<span class="token number">5349</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n<span class="token number">74565</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设要转换大量的二进制字符串，每次都传入 <code>int(x, base=2)</code> 非常麻烦，于是，我们想到，可以定义一个 <code>int2()</code> 的函数，默认把 <code>base=2</code> 传进去:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">int2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> base<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们转换二进制就非常方便了:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">)</span>\n<span class="token number">64</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1010101&#39;</span><span class="token punctuation">)</span>\n<span class="token number">85</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>functools.partial</code> 就是帮助我们创建一个偏函数的，不需要我们自己定义 <code>int2()</code>，可以直接使用下面的代码创建一个新的函数 <code>int2</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> functools\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">)</span>\n<span class="token number">64</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1010101&#39;</span><span class="token punctuation">)</span>\n<span class="token number">85</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，简单总结 <code>functools.partial</code> 的作用就是，把一个函数的某些参数给固定住 (也就是设置默认值) ，返回一个新的函数，调用这个新函数会更简单。</p><p>注意到上面的新的 <code>int2</code> 函数，仅仅是把 <code>base</code> 参数重新设定默认值为 <code>2</code>，但也可以在函数调用时传入其他值:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> int2<span class="token punctuation">(</span><span class="token string">&#39;1000000&#39;</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>\n<span class="token number">1000000</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，创建偏函数时，实际上可以接收函数对象、<code>*args</code> 和 <code>**kw</code> 这 3 个参数，当传入:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>int2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上固定了 <code>int()</code> 函数的关键字参数 <code>base</code>，也就是:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>int2<span class="token punctuation">(</span><span class="token string">&#39;10010&#39;</span><span class="token punctuation">)</span>\n相当于<span class="token punctuation">:</span>\n\nkw <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>\n<span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&#39;10010&#39;</span><span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传入:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>max2 <span class="token operator">=</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上会把 10 作为 <code>*args</code> 的一部分自动加到左边，也就是:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>max2<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>args <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>\n<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为 <code>10</code>。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>当函数的参数个数太多，需要简化时，使用 <code>functools.partial</code> 可以创建一个新的函数，这个新函数可以固定住原函数的部分参数，从而在调用时更简单。</p>',29)],p={},o=(0,a(61935).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},96663:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-63939790","path":"/code/language/python/functional-programming/parital-function.html","title":"偏函数","lang":"zh-CN","frontmatter":{"title":"偏函数","icon":"plugin","author":"廖雪峰","date":"2021-03-15T00:00:00.000Z","category":["Python"],"summary":"Python 的 functools 模块提供了很多有用的功能，其中一个就是偏函数 (Partial function) 。 要注意，这里的偏函数和数学意义上的偏函数不一样。 在介绍函数参数的时候，我们讲到，通过设定参数的默认值，可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下: int() 函数可以把字符串转换为整数，当仅传入字符串时，int()","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/functional-programming/parital-function.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"偏函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1615823008000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.06,"words":619},"filePathRelative":"code/language/python/functional-programming/parital-function.md","localizedDate":"2021年3月15日"}')}}]);