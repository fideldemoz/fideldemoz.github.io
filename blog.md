---
permalink: /blog/
layout: home
title: Read Fideldemoz's blog
---
# Change your way
Dive deep into another experience and change the way you learn to code.  With my rich experience, I detail complex topics 
so that any one can understand.  Plus, my experience has shed light to efficient methods that can benefit you.

# My latest blogs
<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.author }} - {{ post.date || date_to_long_string}}
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
