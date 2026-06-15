CGBVRR Pass 5 — Site architecture and navigation hub cleanup

Purpose:
- Stabilize the public information architecture around the agreed top navigation:
  Home, About, Projects, News, Resources, Team, Contact, Donate.
- Make every desktop top-level navigation label link to a real page.
- Keep Resources as the document/toolbox hub.
- Move institutional material such as partners, funders, governance and advisory committees under About.
- Keep Team as a people/roles page, with an employment pathway pointing to Contact.
- Keep Contact as the action page for general inquiries, employment, volunteer/internship inquiries and future forms.

Files changed / added:
- ADDED: about/index.html
- ADDED: contact/index.html
- MODIFIED: _includes/nav.html
- MODIFIED: _includes/footer.html
- MODIFIED: resources/index.html
- MODIFIED: team/index.html
- MODIFIED: donations/index.html
- MODIFIED: assets/css/main.css
- MODIFIED: assets/js/main.js

Do not copy or commit _site from this patch.

Suggested local application:
1. Work from: D:\Work\Restigouche\live-repo\cgbvrr\
2. Run:
   git pull --rebase
   git status
3. Copy the patch files into the matching repo paths.
4. Run:
   bundle exec jekyll build
5. Clean generated _site noise if it appears:
   git restore _site
   git clean -fd -- _site
6. Stage exact files only:
   git add about/index.html
   git add contact/index.html
   git add _includes/nav.html
   git add _includes/footer.html
   git add resources/index.html
   git add team/index.html
   git add donations/index.html
   git add assets/css/main.css
   git add assets/js/main.js
7. Review:
   git diff --cached --name-status
8. Commit:
   git commit -m "Clean up site architecture and navigation hubs"
9. Pull before push:
   git pull --rebase
10. Push:
   git push

Notes:
- The top navigation parents are now real links, not button-only dropdown triggers.
- Desktop dropdown panels still work by hover/focus.
- Mobile menu shows panel links when the menu is open.
- News CMS is not expanded in this pass.
- Resources CMS is not expanded in this pass.
- This is structure/page cleanup only.
