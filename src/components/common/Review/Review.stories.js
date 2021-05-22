import React from 'react'
import Review from '.'
import FlexBox from '../ui/FlexBox'

export default { title: 'Review' }

const DATA = {
	'author': 'Cat Ellington',
	'author_details': {
		'name': 'Cat Ellington',
		'username': 'CatEllington',
		'avatar_path': '/uCmwgSbJAcHqNwSvQvTv2dB95tx.jpg',
		'rating': null
	},
	'content': '(As I\'m writing this review, Darth Vader\'s theme music begins to build in my mind...)\r\n\r\nWell, it actually has a title, what the Darth Vader theme. And that title is "The Imperial March", composed by the great John Williams, whom, as many of you may already know, also composed the theme music for "Jaws" - that legendary score simply titled, "Main Title (Theme From Jaws)".\r\n\r\nNow, with that lil\' bit of trivia aside, let us procede with the fabled film currently under review: Star Wars. It had been at a drive-in theater in some small Illinois town or other where my mother, my older brother, and I had spent our weekly "Movie Date Night" watching this George Lucas directed cult masterpiece from our car in the parking lot. On the huge outdoor screen, the film appeared to be a silent one, but thanks to an old wire-attached speaker, we were able to hear both the character dialogue and soundtrack loud and clear. We even had ourselves a carful of vittles and snacks - walked back to our vehicle, of course, from the wide-opened cinema\'s briefly distant concession stand. Indeed, it had been a lovely summer evening that July.\r\n\r\nFrom the time the film started, with my brother and I following along as our mother sped-read the opening crawl, I began to feel rather antsy, thinking that this movie, the first in a franchise that would soon be world-renowned, was going to be boring, due to its genre being Science Fiction: A respectably likable, but not a passionately lovable genre of mine DURING THAT TIME. I just didn\'t believe I was going to like Star Wars all that much ... But I soon found myself intrigued ... And awed.\r\n\r\nGeorge Lucas is a man with a phenomenal, and I do mean phenomenal imagination. Apart from his human characters (Han, Luke, Leia, and Obi-Wan Kenobi, among others), the droids: C-3P0, R2-D2, R2-series, and IG-88, not to mention those unusual characters like Jabba the Hutt, Yoda, and Chewbacca, just to name a few, are all creations of Lucas\'s phenomenal imagination. And I was completely in awe of each one of these strange beings. Then there was Vader ... And the evil Emperor ... And the Stormtroopers ... And the Spacecraft ... And the galaxies (I\'ll admit that I am a huge lover of the Universe in all its Celestial glory) ... And the magnificent planets ... The Lightsabers ... And so on. Star Wars is a gorgeously shot space opera; it is truly an epic masterpiece. We enjoyed this film tremendously. And my brother was a die-hard fan from that night onward. He, my brother, had even received for Christmas that year, nearly every Star Wars action figure that my mother could find, including two of the spacecraft: The Millennium Falcon and Star Destroyer. The Death Star space station had too been wrapped beneath our Christmas tree - tagged with his name. It was totally crazy, what the new Star Wars era. Frenzied! But it was great ... Even still, to this day.\r\n\r\nI don\'t personally know anyone whom has yet to see Star Wars, but that certainly doesn\'t suggest there are still a few people out there who haven\'t. And if you\'re one of the latter, then you should know that this classic space opera comes highly recommended. The entire series is told backwards, so you\'ll definitely want to see Star Wars first, followed by its two sequels: The Empire Strikes Back and Return of the Jedi ... In that order. I trust that you\'ll too discover yourself to be a lifelong cult fan in the wake. 😊',
	'created_at': '2017-02-13T22:23:01.268Z',
	'id': '58a231c5925141179e000674',
	'updated_at': '2017-02-13T23:16:19.538Z',
	'url': 'https://www.themoviedb.org/review/58a231c5925141179e000674'
}

export const review = () => (
	<>
		<Review {...DATA}/>
		<FlexBox my={3}/>
		<Review />
	</>
)