"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[85121],{42612:(n,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(55511);const i=[(0,a.uE)('<h1 id="网络服务器相关" tabindex="-1"><a class="header-anchor" href="#网络服务器相关" aria-hidden="true">#</a> 网络服务器相关</h1><h2 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp" aria-hidden="true">#</a> ftp</h2><h3 id="vsftpd" tabindex="-1"><a class="header-anchor" href="#vsftpd" aria-hidden="true">#</a> vsftpd</h3><ul><li><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> vsftpd <span class="token function">ftp</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd.conf\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至少要更改:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">write_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>\n<span class="token key attr-name">utf8_filesystem</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><ul><li><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx 默认安装在 <code>/etc/nginx</code> 目录下</p></li><li><p>配置</p><p>配置文件为 <code>nginx.conf</code>。</p><p>默认站点配置文件在 <code>/etc/nginx/sites-available/default</code></p><p>为了使得 Nginx 能使用 PHP，需要配置</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>\n<span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span>           /var/www/html</span><span class="token punctuation">;</span>\n    <span class="token comment"># 配置给 socks 应该可行，还在研究中</span>\n    <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Apache</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php\n\n<span class="token comment"># Ngnix</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-fpm\n\n<span class="token comment"># MySQL</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-mysql\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql-apt-config_0.8.14-1_all.deb\n<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> mysql-apt-config_0.8.14-1_all.deb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置版本(一般是 5.7)后安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mysql-server\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后重启，完成配置</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mysql restart\nmysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nmp" tabindex="-1"><a class="header-anchor" href="#nmp" aria-hidden="true">#</a> NMP</h2><p>需要对 Nginx 的配置文件进行修改: 主要改动的目标是把 Nginx 代理端口转发给 php-fpm。</p><p>首先配置 index:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">index</span> index.php index.html</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，Nginx 将端口转发给 php 默认的 9000 端口。而通过 apt-get 安装的 php 默认使用本地 sock 文件通信，需要对 php 的配置进行修改。要修改的文件位于: <code>/etc/php/7.2/fpm/pool.d/www.conf</code>，将</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">/run/php/php7.0-fpm.sock</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改成:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1:9000</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果报了 permission limitted 的错误，说明 php 没法访问 html 文件夹，修改配置的 html 文件夹权限即可。</p></div>',24)],t={},l=(0,s(61935).Z)(t,[["render",function(n,e){return(0,a.wg)(),(0,a.iD)("div",null,i)}]])},61935:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},28999:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-14aa1354","path":"/linux/ubuntu/webserver.html","title":"网络服务器相关","lang":"zh-CN","frontmatter":{"icon":"network","date":"2019-11-22T00:00:00.000Z","summary":"网络服务器相关 ftp vsftpd 安装; 配置; 至少要更改: Nginx 安装; Nginx 默认安装在 /etc/nginx 目录下 配置; 配置文件为 nginx.conf。 默认站点配置文件在 /etc/nginx/sites-available/default 为了使得 Nginx 能使用 PHP，需要配置 PHP MySQL 安装 配置版本(","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/ubuntu/webserver.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"网络服务器相关"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-11-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"ftp","slug":"ftp","link":"#ftp","children":[{"level":3,"title":"vsftpd","slug":"vsftpd","link":"#vsftpd","children":[]}]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":2,"title":"PHP","slug":"php","link":"#php","children":[]},{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"NMP","slug":"nmp","link":"#nmp","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.18,"words":355},"filePathRelative":"linux/ubuntu/webserver.md","localizedDate":"2019年11月22日"}')}}]);