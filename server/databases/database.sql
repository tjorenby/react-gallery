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
			('White Stag','White Stag Sign, Portland OR', 'https://www.insidehook.com/wp-content/uploads/2019/12/pr-20191007-White-Stag-0003-e1577135227940.jpg?fit=1195%2C800', 0),
			('Gertie and Oswald', 'Gertie and Oswald, spring 2017', './images/gertie_oswald.jpg', 0),
			('Wedding Day', 'Wedding Day, March 2017', './images/wedding_day.png', 0), 
			('Isla Mujeres', 'Arial view of Isla Mujeres, MX', 'https://www.playadelcarmen.com/blog/wp-content/uploads/Isla-2.png', 0);

--IMAGE URL FOR TESTING--

--Minneapolis Skyline--
	https://kstp.com/kstpImages/repository/2020-04/800SkylineMpls.jpg

