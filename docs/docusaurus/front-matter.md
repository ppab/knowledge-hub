# Docusaurus Front Matter  fields

## Below is a full example of all the default front matter fields in one code block, along with a brief comment explaining each field:

```md
---
title: My Custom Page # The title of the document (used as the page heading)
description: A page with custom front matter. # Short description for SEO
id: custom-page-id # Unique ID for the document (optional, default is the filename)

slug: /custom-url-path # Custom URL path for this document
tags: ['custom', 'example', 'tutorial'] # Tags for the document (used for categorization)

sidebar_label: Custom Page # Label to display in the sidebar (optional, default is the title)
sidebar_position: 1 # Position in the sidebar (optional, controls ordering)

hide_title: false # If true, hides the title on the page but keeps it in the browser/tab title
hide_table_of_contents: false # If true, hides the table of contents (right sidebar)

pagination_prev: another-document-id # ID of the previous document in pagination
pagination_next: other-document-id # ID of the next document in pagination

keywords: ['docusaurus', 'tutorial', 'example'] # Keywords for SEO
image: /img/custom-page-image.png # URL of an image for social media sharing

author: John Doe # Author of the document (used in blog posts)
date: 2024-09-15 # Publication date of the document (ISO format, used in blog posts)
draft: false # Marks the document as a draft (won't appear on the live site)

custom_edit_url: https://github.com/myrepo/docs/edit/main/custom-page.md # Custom edit URL
hide_edit_button: false # If true, hides the "Edit this page" button

# You can also add custom fields like 'instructors' for your own purposes:
instructors:
  - name: John Doe
    bio: Cloud expert with 10 years of experience.
  - name: Jane Smith
    bio: AWS Solutions Architect Professional.
---

```