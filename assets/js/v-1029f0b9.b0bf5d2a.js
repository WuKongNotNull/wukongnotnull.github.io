"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[53308],{88666:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(55511);const t=[(0,e.uE)('<h2 id="name-属性" tabindex="-1"><a class="header-anchor" href="#name-属性" aria-hidden="true">#</a> name 属性</h2><p>函数的 <code>name</code> 属性返回函数的名字。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nf1<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &quot;f1&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是通过变量赋值定义的函数，那么 <code>name</code> 属性返回变量名。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nf2<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &quot;f2&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么 <code>name</code> 属性返回 <code>function</code> 关键字之后的那个函数名。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">myName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nf3<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;myName&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>f3.name</code> 返回函数表达式的名字。注意，真正的函数名还是 <code>f3</code>，而 <code>myName</code> 这个名字只在函数体内部可用。</p><p><code>name</code> 属性的一个用处，就是获取参数函数的名字。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">myFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span>myFunc<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myFunc</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>test</code> 内部通过 <code>name</code> 属性，就可以知道传入的参数是什么函数。</p><h2 id="length-属性" tabindex="-1"><a class="header-anchor" href="#length-属性" aria-hidden="true">#</a> length 属性</h2><p>函数的 <code>length</code> 属性返回函数预期传入的参数个数，即函数定义之中的参数个数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nf<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码定义了空函数 <code>f</code>，它的 <code>length</code> 属性就是定义时的参数个数。不管调用时输入了多少个参数，<code>length</code> 属性始终等于 2。</p><p><code>length</code> 属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”(overload)。</p><h2 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString()</h2><p>函数的 <code>toString</code> 方法返回一个字符串，内容是函数的源码。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// function f() {</span>\n<span class="token comment">//  a();</span>\n<span class="token comment">//  b();</span>\n<span class="token comment">//  c();</span>\n<span class="token comment">// }</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于那些原生的函数，<code>toString()</code> 方法返回 <code>function (){[native code]}</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span>sqrt<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &quot;function sqrt() { [native code] }&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Math.sqrt</code> 是 JavaScript 引擎提供的原生函数，<code>toString()</code> 方法就返回原生代码的提示。</p><p>函数内部的注释也可以返回。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*\n  这是一个\n  多行注释\n*/</span><span class="token punctuation">}</span>\n\nf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &quot;function f(){/*</span>\n<span class="token comment">//   这是一个</span>\n<span class="token comment">//   多行注释</span>\n<span class="token comment">// */}&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这一点，可以变相实现多行字符串。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">multiline</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> arr <span class="token operator">=</span> fn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*\n  这是一个\n  多行注释\n*/</span><span class="token punctuation">}</span>\n\n<span class="token function">multiline</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &quot; 这是一个</span>\n<span class="token comment">//   多行注释&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',26)],p={},c=(0,a(61935).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},70716:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-1029f0b9","path":"/code/language/js/function/method.html","title":"函数的属性和方法","lang":"zh-CN","frontmatter":{"title":"函数的属性和方法","icon":"list","category":["JavaScript"],"summary":"name 属性 函数的 name 属性返回函数的名字。 如果是通过变量赋值定义的函数，那么 name 属性返回变量名。 但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么 name 属性返回 function 关键字之后的那个函数名。 上面代码中，f3.name 返回函数表达式的名字。注意，真正的函数名还是 f3，而","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/function/method.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数的属性和方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-28T12:33:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-28T12:33:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"name 属性","slug":"name-属性","link":"#name-属性","children":[]},{"level":2,"title":"length 属性","slug":"length-属性","link":"#length-属性","children":[]},{"level":2,"title":"toString()","slug":"tostring","link":"#tostring","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1611837236000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"code/language/js/function/method.md","localizedDate":"2020年6月3日"}')}}]);