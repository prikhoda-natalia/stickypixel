---
layout: page
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

{% assign sections = site.home | sort:"order" | where: "type", "section" %}
{% assign footers = site.home | sort:"order" | where: "type", "footer" %}

{% include home.html %}

<main>
    {% for section in sections %}
        {% include section.html %}
    {% endfor %}
</main>

{% for footer in footers %}
    {% include footer.html %}
{% endfor %}
