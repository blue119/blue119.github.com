---
layout: post
title: "octopress 安裝"
date: 2012-04-15 23:02
comments: true
categories: octopress
---

剛開始有 blog 時，也是跟一般人一樣自已架 wordpress ，不過那已經是很久以前的事了，後來有了 blogspot 之後，就換到那了，最主要原因還是 hosting 的問題，有人能幫忙 hosting 當然是最好了。只是一直不是很習慣 WYSIWYG 的方式寫 blog 尤其是常常要寫到一半又切到 html mode 去改 code 很不方便。而最近 lag 了半年才發現 octopress 這個東西，對我來說太棒了，可以直接用 vi 來寫 blog 、用 git 來管理文章而且又可以讓 github 來幫我 hosting :)。 第一篇文章也不免淑寫一下安裝過程。

系統環境
----
**OS**: ``Debian testing``

**ruby**:
	ii  ruby1.9.1                             1.9.3.0-2                      Interpreter of object-oriented scripting language Ruby
	ii  ruby1.9.1-full                        1.9.3.0-2                      Ruby 1.9.1 full installation
	ii  ruby1.9.3                             1.9.3.0-2                      Interpreter of object-oriented scripting language Ruby, version 1.9.3


下載 octopress
------------

從 github 下載 octopress 
	git clone git://github.com/imathis/octopress.git octopress && cd octopress

ruby 版本於官網教學中使用的是 ruby 1.9.2，但 Debian 裡的 1.9.3 使用起來沒什麼問題
	$ ruby --version
	ruby 1.9.3p0 (2011-10-30 revision 33570) [x86_64-linux]

### dependencies 安裝
**$ sudo gem install bundler**
	Successfully installed bundler-1.1.3
	1 gem installed
	Installing ri documentation for bundler-1.1.3...
	Installing RDoc documentation for bundler-1.1.3...

**$ bundle install**
	Using rake (0.9.2) 
	Using RedCloth (4.2.8) 
	Using posix-spawn (0.3.6) 
	Using albino (1.3.3) 
	Using blankslate (2.1.2.4) 
	Using chunky_png (1.2.1) 
	Using fast-stemmer (1.0.0) 
	Using classifier (1.3.3) 
	Using fssm (0.2.7) 
	Using sass (3.1.5) 
	Using compass (0.11.5) 
	Using directory_watcher (1.4.0) 
	Using ffi (1.0.9) 
	Using haml (3.1.2) 
	Using kramdown (0.13.3) 
	Using liquid (2.2.2) 
	Using syntax (1.0.0) 
	Using maruku (0.6.0) 
	Using jekyll (0.11.0) 
	Using rubypython (0.5.1) 
	Using pygments.rb (0.1.3) 
	Using rack (1.3.2) 
	Using rb-fsevent (0.4.3.1) 
	Using rdiscount (1.6.8) 
	Using rubypants (0.2.0) 
	Using tilt (1.3.2) 
	Using sinatra (1.2.6) 
	Using stringex (1.3.0) 
	Using bundler (1.1.3) 
	Your bundle is complete! Use `bundle show [gemname]` to see where a bundled gem is installed.

Install the default Octopress theme.  **$ rake install**
	A theme is already installed, proceeding will overwrite existing files. Are you sure? [y/n] y
	## Copying classic theme into ./source and ./sass

到目前為止，已經 octopress 已經設定好了，在來就是把它放到你的 hosting 上。

Deploying to Github Pages
-------------------------
平時就有在使用 github ，由所當然要把 octopress 放到 github 上，而且我還希望我的 blog 的 url 為 **blue119.github.com。**

1.先到 github 上新增一個以你 url 的專安名稱，所以我的專案名稱為 **blue119.github.com。**這裡需要注意一下，開頭一定要是你的 username。

**$ rake setup_github_pages**
	Enter the read/write url for your repository: git@github.com:blu119/blue119.github.com.git
	Added remote git@github.com:blu119/blue119.github.com.git as origin
	Set origin as default remote
	Master branch renamed to 'source' for committing your blog source files
	Initialized empty Git repository in /home/blue119/iLab/Blog/octopress-blue119/_deploy/.git/
	[master (root-commit) df85434] Octopress init
	 1 files changed, 1 insertions(+), 0 deletions(-)
	 create mode 100644 index.html
	
	---
	## Now you can deploy to http://blu119.github.com with `rake deploy` ##

2.開始產生網站檔案

**$ rake generate**
	## Generating Site with Jekyll
	directory source/stylesheets/ 
	   create source/stylesheets/screen.css 
	/var/lib/gems/1.9.1/gems/maruku-0.6.0/lib/maruku/input/parse_doc.rb:22:in `<top (required)>': iconv will be deprecated in the future, use String#encode instead.
	Configuration from /home/blue119/iLab/Blog/octopress/_config.yml
	/var/lib/gems/1.9.1/gems/ffi-1.0.9/lib/ffi/platform.rb:27: Use RbConfig instead of obsolete and deprecated Config.
	Building site: source -> public
	Successfully generated site: source -> public

3.一切都準備好了，可以發佈到 GitHub 了。

**$ rake deploy**
	## Deploying branch to Github Pages 
	
	## copying public to _deploy
	
	## Commiting: Site updated at 2012-04-15 12:30:46 UTC
	[master 8bffe50] Site updated at 2012-04-15 12:30:46 UTC
	 61 files changed, 2658 insertions(+), 1 deletions(-)
	 create mode 100644 assets/jwplayer/glow/controlbar/background.png
	 create mode 100644 assets/jwplayer/glow/controlbar/blankButton.png
	 create mode 100644 assets/jwplayer/glow/controlbar/divider.png
	 create mode 100644 assets/jwplayer/glow/controlbar/fullscreenButton.png
	 create mode 100644 assets/jwplayer/glow/controlbar/fullscreenButtonOver.png
	 create mode 100644 assets/jwplayer/glow/controlbar/muteButton.png
	 ...
	 create mode 100644 javascripts/libs/swfobject-dynamic.js
	 create mode 100644 javascripts/modernizr-2.0.js
	 create mode 100644 javascripts/octopress.js
	 create mode 100644 javascripts/pinboard.js
	 create mode 100644 javascripts/twitter.js
	 create mode 100644 sitemap.xml
	 create mode 100644 stylesheets/screen.css
	
	## Pushing generated _deploy website
	Counting objects: 79, done.
	Delta compression using up to 2 threads.
	Compressing objects: 100% (72/72), done.
	Writing objects: 100% (79/79), 179.57 KiB, done.
	Total 79 (delta 1), reused 0 (delta 0)
	To git@github.com:blue119/blue119.github.com.git
	 * [new branch]      master -> master
	
	## Github Pages deploy complete

4.沒問題的話，你會收到一封 notification 的 mail，之後就連到你剛所設定的 URL。
	$ sensible-browser blue119.github.com

5.把 octopress commit 到 github 的 source branch
	$ git add .
	$ git commit -m 'your message'
	$ git push origin source

新增文章
----
1.在 octopress 裡，如要新增文章利用下面指令 

**$ rake new_post["title"]**
	Creating new post: source/_posts/2012-04-15-title.markdown


2.在來直接利用 vim 編輯文章。 

**$ cat source/_posts/2012-04-15-title.markdown**
	---
	layout: post
	title: "title"
	date: 2012-04-15 22:09
	comments: true
	categories: 
	---
	
	Hello Wold


3.一切都完成後，利用 rake generate 重新產生網頁。

$ rake generate
	## Generating Site with Jekyll
	unchanged sass/screen.scss
	/var/lib/gems/1.9.1/gems/maruku-0.6.0/lib/maruku/input/parse_doc.rb:22:in `<top (required)>': iconv will be deprecated in the future, use String#encode instead.
	Configuration from /home/blue119/iLab/Blog/octopress-blue119/_config.yml
	/var/lib/gems/1.9.1/gems/ffi-1.0.9/lib/ffi/platform.rb:27: Use RbConfig instead of obsolete and deprecated Config.
	Building site: source -> public
	Successfully generated site: source -> public


4.發佈到 github 上吧。 

**$ rake deploy**
	## Deploying branch to Github Pages 
	
	## copying public to _deploy
	
	## Commiting: Site updated at 2012-04-15 14:13:22 UTC
	[master 3cdac07] Site updated at 2012-04-15 14:13:22 UTC
	 13 files changed, 362 insertions(+), 14 deletions(-)
	 create mode 100644 blog/2012/04/15/title/index.html
	
	## Pushing generated _deploy website
	Counting objects: 53, done.
	Delta compression using up to 2 threads.
	Compressing objects: 100% (21/21), done.
	Writing objects: 100% (29/29), 3.05 KiB, done.
	Total 29 (delta 14), reused 0 (delta 0)
	To git@github.com:blue119/blue119.github.com.git
	   2426470..3cdac07  master -> master
	
	## Github Pages deploy complete


5.還有另一個指令可用來 debug
	rake preview    # Watches, and mounts a webserver at http://localhost:4000


Custom Domains
--------------
1.建立 CNAME file，在 git push 上 github
	echo "ypwang.info" > source/CNAME


2.在你的 DNS Host 網站，把你的 domain 指到 207.97.227.245，建立 www 的 alias name 指到你的github page(www.ypwang.info).

