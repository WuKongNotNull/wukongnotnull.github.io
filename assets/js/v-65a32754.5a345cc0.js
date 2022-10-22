"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[98539],{99056:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(55511);const p=(0,e._)("p",null,"Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。",-1),o=(0,e.uE)('<p>我们以内建的 sys 模块为例，编写一个 hello 的模块:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>\n<span class="token comment"># -*- coding: utf-8 -*-</span>\n\n<span class="token string">&#39; a test module &#39;</span>\n\n__author__ <span class="token operator">=</span> <span class="token string">&#39;Mr.Hope&#39;</span>\n\n<span class="token keyword">import</span> sys\n\n<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    args <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv\n    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, %s!&#39;</span> <span class="token operator">%</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Too many arguments!&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>\n    test<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 1 行和第 2 行是标准注释，第 1 行注释可以让这个 <code>hello.py</code> 文件直接在 <code>Unix/Linux/Mac</code> 上运行，第 2 行注释表示 <code>.py</code> 文件本身使用标准 UTF-8 编码；</p><p>第 4 行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；</p><p>第 6 行使用 <code>__author__</code> 变量把作者写进去，这样当您公开源代码后别人就可以瞻仰您的大名；</p><p>以上就是 Python 模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。</p><p>后面开始就是真正的代码部分。</p><p>您可能注意到了，使用 <code>sys</code> 模块的第一步，就是导入该模块:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>导入 sys 模块后，我们就有了变量 sys 指向该模块，利用 sys 这个变量，就可以访问 sys 模块的所有功能。</p><p>sys 模块有一个 <code>argv</code> 变量，用 list 存储了命令行的所有参数。<code>argv</code> 至少有一个元素，因为第一个参数永远是该.py 文件的名称，例如:</p><p>运行 <code>python3 hello.py</code> 获得的 <code>sys.argv</code> 就是 <code>[&#39;hello.py&#39;]</code>；</p><p>运行 <code>python3 hello.py Mr.Hope</code> 获得的 <code>sys.argv</code> 就是 <code>[&#39;hello.py&#39;, &#39;Mr.Hope&#39;]</code>。</p><p>最后，注意到这两行代码:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>\n    test<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在命令行运行 hello 模块文件时，Python 解释器把一个特殊变量 <code>__name__</code> 置为 <code>__main__</code>，而如果在其他地方导入该 hello 模块时，if 判断将失败，因此，这种 if 测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试。</p><p>我们可以用命令行运行 hello.py 看看效果:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python3 hello.py\nHello, world<span class="token operator">!</span>\n$ python hello.py Michael\nHello, Michael<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果启动 Python 交互环境，再导入 hello 模块:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python3\nPython <span class="token number">3.4</span>.3 <span class="token punctuation">(</span>v3.4.3:9b73f1c3e601, Feb <span class="token number">23</span> <span class="token number">2015</span>, 02:52:03<span class="token punctuation">)</span>\n<span class="token punctuation">[</span>GCC <span class="token number">4.2</span>.1 <span class="token punctuation">(</span>Apple Inc. build <span class="token number">5666</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>dot <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on darwin\nType <span class="token string">&quot;help&quot;</span>, <span class="token string">&quot;copyright&quot;</span>, <span class="token string">&quot;credits&quot;</span> or <span class="token string">&quot;license&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information.\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> hello\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入时，没有打印 <code>Hello, word!</code>，因为没有执行 <code>test()</code> 函数。</p><p>调用 <code>hello.test()</code> 时，才能打印出 <code>Hello, word!</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hello.test<span class="token punctuation">(</span><span class="token punctuation">)</span>\nHello, world<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>在一个模块中，我们可能会定义很多函数和变量，但有的函数和变量我们希望给别人使用，有的函数和变量我们希望仅仅在模块内部使用。在 Python 中，是通过_前缀来实现的。</p><p>正常的函数和变量名是公开的 (public) ，可以被直接引用，比如: <code>abc</code>，<code>x123</code>，<code>PI</code> 等；</p><p>类似 <code>__xxx__</code> 这样的变量是特殊变量，可以被直接引用，但是有特殊用途，比如上面的 <code>__author__</code>，<code>__name__</code> 就是特殊变量，hello 模块定义的文档注释也可以用特殊变量 <code>__doc__</code> 访问，我们自己的变量一般不要用这种变量名；</p><p>类似 <code>_xxx</code> 和 <code>__xxx</code> 这样的函数或变量就是非公开的 (private) ，不应该被直接引用，比如 <code>_abc</code>，<code>__abc</code> 等；</p><p>之所以我们说，private 函数和变量“不应该”被直接引用，而不是“不能”被直接引用，是因为 Python 并没有一种方法可以完全限制访问 private 函数或变量，但是，从编程习惯上不应该引用 private 函数或变量。</p><p>private 函数或变量不应该被别人引用，那它们有什么用呢？请看例子:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_private_1</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Hello, %s&#39;</span> <span class="token operator">%</span> name\n\n<span class="token keyword">def</span> <span class="token function">_private_2</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Hi, %s&#39;</span> <span class="token operator">%</span> name\n\n<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> _private_1<span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> _private_2<span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在模块里公开 <code>greeting()</code> 函数，而把内部逻辑用 private 函数隐藏起来了，这样，调用 <code>greeting()</code> 函数不用关心内部的 private 函数细节，这也是一种非常有用的代码封装和抽象的方法，即:</p><p>外部不需要引用的函数全部定义成 private，只有外部需要引用的函数才定义为 public。</p>',33),t={},c=(0,a(61935).Z)(t,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,[p,(0,e.kq)(" more "),o])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},55834:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-65a32754","path":"/code/language/python/module/usage.html","title":"使用模块","lang":"zh-CN","frontmatter":{"title":"使用模块","icon":"config","author":"廖雪峰","date":"2021-03-27T00:00:00.000Z","category":["Python"],"summary":"Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/module/usage.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"使用模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。</p>\\n","headers":[{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[]}],"git":{"createdTime":1616944982000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":3.62,"words":1086},"filePathRelative":"code/language/python/module/usage.md","localizedDate":"2021年3月27日"}')}}]);