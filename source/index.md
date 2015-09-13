---
layout: front-page
use_sitedesc: true
links:
    -   url: "#about"
        text: About Us
    -   url: "#services"
        text: Services
    -   url: "#team"
        text: Our Team
    -   url: "#contact"
        text: Contact Us
---
{% assign sections = site.home | sort:"order" | where: "type", "home" %}
{% include front-page.html %}
<main>
    {% for section in sections %}
        {% include section.html %}
    {% endfor %}
</main>
{% include footer.html %}
