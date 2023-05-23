---
layout: home
title: Fidel Livino Pedro's Blog
---
# Fidel Livino Pedro

#### <span>Collaborative skilled Javascript software developer</span>

I am a JavaScript software developer. I build outstanding personal and organizational websites, according to clients' expectations and
market trends.

Apart from building software, I keep a blog. I like writing about various topics such as System Maintenance, Operating Systems 
and Web Development. Scrol down to see my top latest blogs. If like reading them, please subscribe to my email list. I won't fill you
up with useless stuff.

## My Recent Projects
- ### Library Landing Page
<img src="/assets/images/odin-landing-page.svg" class="project" alt="odin-landing-page"/>  
This is a Library landing page designed using Html5 and Css3 only. It works better on Desktop devices.  
<button class="btn"><a href="https://fideldemoz.github.io/odin-landing-page/">See project >></a></button> 

- ### Calculator
<img src="/assets/images/javascript-calculator.png" class="project" alt="javascript calculator"/>  
This is a Calculator I designed applying JavaScript, Html5 and Css3. It works on all devices.  
<button class="btn"><a href="https://fideldemoz.github.io/odin-calculator/">See project >></a></button> 

- ### Editor
<img src="/assets/images/editor.png" class="project" alt="javascript calculator"/>  
This is an Editor I created with Html5, JavaScript and Css3. It works on all devices.  
<button class="btn"><a href="https://fideldemoz.github.io/editor/">See project >></a></button> 
<button class="btn"><a href="https://github.com/fideldemoz?tab=repositories">See all projects >></a></button> 

{% include skills.html %}
## Favourite quote
> If you get tired, learn to rest, not to quit.
> <p style="text-align:right">Banksy</p>

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