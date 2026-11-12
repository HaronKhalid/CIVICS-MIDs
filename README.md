# Civics & Community Engagement Notes

Study notes for **Civics and Community Engagement**, built from the Lecture 1 handout and the course-book pages on civics, citizenship, civic engagement, democracy and modern society. Plain HTML, CSS and JavaScript: no build step, no backend, works on GitHub Pages.

## Made for easy reading
- Every lesson has an **“In one line”** summary, then **headings with the details under each heading**
- Lists of 5, 7, 9 or 14 points are shown as **numbered cards**, definitions as **quote cards** with the scholar's name
- An **“In this topic”** menu jumps to any lesson; lessons are open by default
- **A− / A+** buttons change the text size; light and dark mode; works well on phones
- Short **Urdu summaries** under the main lessons

## Topics (26 lessons)
1. **Civics:** meaning, origin and development, significance (7 reasons), key concepts
2. **Citizenship:** concept, definitions (Marshall, Miliband, Miller, Kymlicka), natural-born vs naturalized, 9 types, rights, responsibilities, principles
3. **Civic and community engagement:** meaning, definitions (Delli Carpini, Ehrlich, Van Benshoten), community engagement / public participation / volunteerism / advocacy, importance (7), ways to engage, challenges
4. **Democracy:** concept, definitions (Dahl, Schumpeter, Dewey, Lincoln), 5 types, relationship with citizenship (9 points)
5. **Modern society and citizenship:** the 14 foundations and how modern society shapes citizenship

## Practice
- **30 scenarios**: real-life situations across all topics, with guided mode (hints) and exam mode (timer, no answers until you submit)
- **Quiz**: 106 questions; quick, scenario, mixed, topic practice and a 30-question mock exam
- **Flashcards**, a searchable glossary and a one-page cheat sheet
- Progress is saved in the browser only (it does not sync across devices)

## Files
```
index.html            all lessons and pages
css/style.css         theme and layout
css/reading.css       reading components (headings, point cards, definition cards, contents menu)
js/core.js            navigation, lessons, progress, text size
js/scenario-data.js   scenarios (edit here to add more)
js/scenarios.js       scenario engine
js/quiz-data.js       quiz questions
js/quiz-modes.js      quiz modes
js/revise.js          flashcards and glossary
js/progress.js        local progress storage
Civics-Notes.pdf      printable notes
```

## Run and deploy
Open `index.html` in a browser. For GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root** (site: `https://haronkhalid.github.io/CIVICS-MIDs/`).

## Not covered
Page 1 of the book (definition and characteristics of civics) and the end of the essay-question list were not in the provided files.
