---
type: section
order: 3
id: team
bg: "/img/bg-imac.jpg"
title: Our Team
---

{% assign team = site.team | sort:"order" %}

<div class="cleared">
{% for member in team %}
    <div class="col-2">
        <img src="{{ member.image }}" alt="{{ member.name }}" width="356" height="356">
        <h2>{{ member.name }}</h2>
        {{ member.content }}
    </div>
{% endfor %}
</div>
