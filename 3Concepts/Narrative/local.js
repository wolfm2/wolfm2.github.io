/*
TO VIS:
1 Rising incar rates: line chart	
    area chart / horizon chart by offense type
2 incar by race / year: multi line, flipbook stacked bar chart
3 Inmates moved to fed for overcrowding
    ppl per state /  line %
4 Felony disenfranchisement   1of13 b vs 1 of 56 nonb
    People markers
    Disenfranchisement rules by stateIncar & unsentenced (re: bail)
5 buildout by state op capacity vs designed capacity
    stacked area, multi line
  
Privatized prison rates 			
suicide rates fed  : http://www.cnn.com/2017/04/19/health/prison-suicides-massachusetts-trnd/index.html

*/

$( document ).ready(function() {

  // content
  $().timelinr({
      orientation: 'horizontal',
      // value: horizontal | vertical, default to horizontal
      containerDiv: '#timeline',
      // value: any HTML tag or #id, default to #timeline
      datesDiv: '#dates',
      // value: any HTML tag or #id, default to #dates
      datesSelectedClass: 'selected',
      // value: any class, default to selected
      datesSpeed: 'normal',
      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
      issuesDiv : '#issues',
      // value: any HTML tag or #id, default to #issues
      issuesSelectedClass: 'selected',
      // value: any class, default to selected
      issuesSpeed: 'fast',
      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
      issuesTransparency: 0.2,
      // value: integer between 0 and 1 (recommended), default to 0.2
      issuesTransparencySpeed: 500,
      // value: integer between 100 and 1000 (recommended), default to 500 (normal)
      prevButton: '#prev',
      // value: any HTML tag or #id, default to #prev
      nextButton: '#next',
      // value: any HTML tag or #id, default to #next
      arrowKeys: 'false',
      // value: true/false, default to false
      startAt: 1,
      // value: integer, default to 1 (first)
      autoPlay: 'false',
      // value: true | false, default to false
      autoPlayDirection: 'forward',
      // value: forward | backward, default to forward
      autoPlayPause: 2000
      // value: integer (1000 = 1 seg), default to 2000 (2segs)< });
   });
});
