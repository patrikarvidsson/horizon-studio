---
title: Jotex
description: Application to create marketing campaigns more effectively.
type: personal
layout: page
published: true
date: 2017-12-18
heroImage: /static/jotex/hero.jpg
metaDescription: A web based tool for automating a lot of the repetitive work done when creating newsletter campaigns.
metaKeywords: tool, automation, newsletter, jotex, ellos, robot
---

## Making the production of marketing emails more efficient.

_Jotex is one of Swedens largest e-commerce websites for household linen and
interior design. The company was founded 1963 and is now a part of the larger
Ellos Group organization._

![Interface](/static/jotex/hero.jpg "Application interface")

When working for Jotex, one of my tasks was to help the team create
marketing e-mails on a weekly basis. A large chunk of the process from idea to finalized mail required manual work, and to speed this process up I created an application that would automate the majority of that work for me and my co-workers.

### Issue

Jotex had its product catalog translated to several different
markets. This meant that when an employee created a campaign for all those
markets, they had to go to each website and copy the product names, prices and
labels and paste that data into Photoshop to create a mockup.

The mockup was then printed out and presented to the marketing director for
approval. Upon approval, the employee would move on to create the actual e-mail
(following the mockup design) in the marketing application.

Depending on how large the campaign was (which often correlated with the number
of products), it was fairly common that it took the employee atleast 8 hours to
to have a mockup for presentation.

### Automation

By utilizing the product SKUs we were able to crawl the website in all
different languages, automatically fetch the necessary data and
present them in an interface where the employee could copy and paste to the
marketing application with the click of a button.

Product images were stitched together with the appropriate labels in all
languages and thumbnails with correct size were generated and named following
the internal naming conventions for download so that they quickly could be
uploaded to the marketing application.

The employee was automatically notified when a product ran out of stock and
needed to be switched out. When that happened, one could enter a new product SKU
and the application would crawl the data again and generate the appropriate
data.

A lot of the redundant work the employees did was no longer needed, which allowed for
creation of marketing mails to be more effective.
