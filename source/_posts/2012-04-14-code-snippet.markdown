---
layout: post
title: "code snippet"
date: 2012-04-14 22:19
comments: true
categories: 
---

code snippet
``` ruby Discover if a number is prime http://www.noulakaz.net/weblog/2007/03/18/a-regular-expression-to-check-for-prime-numbers/ Source Article
class Fixnum
  def prime?
    ('1' * self) !~ /^1?$|^(11+?)\1+$/
  end
end
```

show from gist
{% gist 2384728 %}

show from file
{% include_code ip_verify.js %}

Inline Code Blocks
{% codeblock lang:python %}
if len(sys.argv) < 2:
    print 'give me a exist file'
    sys.exit()
{% endcodeblock %}
