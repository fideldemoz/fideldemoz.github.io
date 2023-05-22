---
layout: home
title: Fidel Livino Pedro's Blog
---
# Fidel Livino Pedro
## JavaScript Software developer  
While I am currently learning Web Development at The Odin Project, I engage in building functional open source projects.  
## Favourite quote
> If you get tired, learn to rest, not to quit.

# Read my latest blogs
<ol class="blog_li">
  {% for post in site.posts | limit:3 %}
  <hr>
    <li class="blogs">
    	<p> {{ post.date || date_to_long_string}}</p>
      <h2><a class="toright" href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
  {% endfor %}
</ol>