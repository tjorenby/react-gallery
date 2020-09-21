database_name: react_gallery

--COPY and PASTE the following--

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (256),
	"description" VARCHAR (256),
	"path" VARCHAR (500),
	"loveCount" NUMERIC
	);

--DATABASE TEST VALUES--

INSERT INTO "gallery" ("title", "description", "path", "loveCount")
	VALUES ('Christmas', 'Family on Christmas, 2019', './images/fam_xmas.jpg', 0),
			('Mexico Vacation', 'Kasey and Tyler in Mexico, Feb of 2020', './images/mexico_2020.jpg', 0),
			('JunkFM 2020','JunkFM promotional photo, August 2020', './images/junkfm_2020.jpg', 0),
			('Gertie and Oswald', 'Gertie and Oswald, spring 2017', './images/gertie_oswald.jpg', 0),
			('Wedding Day', 'Wedding Day, March 2017', './images/wedding_day.png', 0), 
			('JunkFM Oktoberfest', 'JunkFM at LaCrosse Oktoberfest, 2019', './images/junkfm_oktoberfest.jpg', 0);