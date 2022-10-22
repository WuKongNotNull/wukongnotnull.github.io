"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[72302],{90710:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});var n=s(55511);const i=[(0,n.uE)('<h1 id="命名管道" tabindex="-1"><a class="header-anchor" href="#命名管道" aria-hidden="true">#</a> 命名管道</h1><p>在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。</p><p>命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>process1 <span class="token operator">&gt;</span> named_pipe\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>和</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>process2 <span class="token operator">&lt;</span> named_pipe\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表现出来就像这样:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>process1 <span class="token operator">|</span> process2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置一个命名管道" tabindex="-1"><a class="header-anchor" href="#设置一个命名管道" aria-hidden="true">#</a> 设置一个命名管道</h2><p>使用 mkfifo 命令能够创建命令管道:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkfifo</span> pipe1\n$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> pipe1\nprw-r--r-- <span class="token number">1</span> me me <span class="token number">0</span> <span class="token number">2009</span>-07-17 06:41 pipe1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们使用 mkfifo 创建了一个名为 pipe1 的命名管道。使用 ls 命令，我们查看这个文件， 看到位于属性字段的第一个字母是 “p”，表明它是一个命名管道。</p><h2 id="使用命名管道" tabindex="-1"><a class="header-anchor" href="#使用命名管道" aria-hidden="true">#</a> 使用命名管道</h2><p>为了演示命名管道是如何工作的，我们将需要两个终端窗口(或用两个虚拟控制台代替)。在第一个终端中，我们输入一个简单命令，并把命令的输出重定向到命名管道:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">&gt;</span> pipe1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们按下 Enter 按键之后，命令将会挂起。这是因为在管道的另一端没有任何接受数据。当这种现象发生的时候， 据说是管道阻塞了。一旦我们绑定一个进程到管道的另一端，该进程开始从管道中读取输入的时候，这种情况会消失。使用第二个终端窗口，我们输入这个命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;</span> pipe1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后产自第一个终端窗口的目录列表出现在第二个终端中，并作为来自 cat 命令的输出。在第一个终端 窗口中的 ls 命令一旦它不再阻塞，会成功地结束。</p>',18)],r={},t=(0,s(61935).Z)(r,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,i)}]])},61935:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}},7431:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-1e6259a0","path":"/linux/bash/archives/named-pipe.html","title":"命名管道","lang":"zh-CN","frontmatter":{"summary":"命名管道 在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。 命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西: 和 表现出来就像这样:","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/bash/archives/named-pipe.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"命名管道"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2020-11-06T18:10:03.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2020-11-06T18:10:03.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"设置一个命名管道","slug":"设置一个命名管道","link":"#设置一个命名管道","children":[]},{"level":2,"title":"使用命名管道","slug":"使用命名管道","link":"#使用命名管道","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1604686203000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.7,"words":509},"filePathRelative":"linux/bash/archives/named-pipe.md","localizedDate":"2020年6月3日"}')}}]);