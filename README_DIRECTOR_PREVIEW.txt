CGBVRR Director Preview Patch v3

Apply to test copy first:
D:\Work\Restigouche\test\cgbvrr-preview\

Modified files:
- _includes/nav.html
- assets/css/main.css
- assets/js/main.js
- projets/watershade/index.html
- equipe/index.html

Purpose:
- Keep the full-width institutional navbar dropdown panels.
- Do not force sticky navigation for the meeting preview.
- Convert visible preview-page copy to French-first language.
- Remove direct “Questions for the director” wording from the pages.
- Make the Équipe page feel less hierarchical and more collaborative/non-profit.

Apply example:
Copy-Item -Path ".\*" -Destination "D:\Work\Restigouche\test\cgbvrr-preview\" -Recurse -Force

Run preview:
cd "D:\Work\Restigouche\test\cgbvrr-preview"
bundle exec jekyll serve

Open:
http://localhost:4000
