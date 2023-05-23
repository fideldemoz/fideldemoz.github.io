---
permalink: /blog/
layout: home
title: Read Fideldemoz's blog
---
# Change your way
Dive deep into another experience and change the way you learn to code.  With my rich experience, I detail complex topics 
so that any one can understand.  Plus, my experience has shed light to efficient methods that can benefit you.

Not only do I write about Programming, I also bring topics about System Maintenance, Operating Systems (oh, dear Linux) and Organization 
tips.

# A complete list of my blogs
<ul class="blog_li">
  {% for post in site.posts %}
    <hr>
    <li class="blogs">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.author }} - {{ post.date || date_to_long_string}}</p>
    </li>
    {{ post.excerpt }}
  {% endfor %}
</ul>
