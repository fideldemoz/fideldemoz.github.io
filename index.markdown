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
<ol>
  {% for post in site.posts %}
    <li>
    	<p> {{ post.date || date_to_long_string}}</p>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>Written by: {{ post.author }} </p>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ol>