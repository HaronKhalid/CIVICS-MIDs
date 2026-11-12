/* Start-up: navigation, lesson cards, links to scenarios, progress, open the page from the URL */
buildNav();setupTopics();addTopicLinks();
progress();
go((location.hash||"#home").slice(1));
