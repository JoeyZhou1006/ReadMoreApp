import React from 'react';
import '../assets/css/custom.css';

/**
 *  Article Component which will render the content that will be displayed to the user
 *  */
class Article extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div> 
                <p>
                Adelaide (/ˈædəleɪd/ (About this soundlisten) AD-ə-layd)[8] is the capital city of the state of South Australia, and the fifth-most populous city of Australia. Adelaide is home to 77 percent of the South Australian population, making it the most centralised population of any state in Australia.

Adelaide is north of the Fleurieu Peninsula, on the Adelaide Plains between the Gulf St Vincent in the west and the low-lying Mount Lofty Ranges in the east. Adelaide stretches 20 km (12 mi) from the coast to the foothills, and 94 to 104 km (58 to 65 mi) from Gawler at its northern extent to Sellicks Beach in the south.

Named in honour of Adelaide of Saxe-Meiningen, queen consort to King William IV[9], the city was founded in 1836 as the planned capital for a freely-settled British province in Australia. Colonel William Light, one of Adelaide's founding fathers, designed the city centre and chose its location close to the River Torrens, in the area originally inhabited by the Kaurna people and known as Tarntanya or Tarndanyangga ("place of the red kangaroo"). Light's design set out the city centre in a grid layout, interspaced by wide boulevards and large public squares, and entirely surrounded by parklands.

Early colonial Adelaide was shaped by prosperity and wealth, and was one of the few Australian cities without a convict history. Until the post-war era, it was Australia's third-largest city. It has been noted for early examples of religious freedom, a commitment to political progressivism and civil liberties. It has been known as the "City of Churches" since the mid-19th century, referring to its diversity of faiths. As South Australia's government and commercial centre, Adelaide is the site of many governmental and financial institutions. Most of these are concentrated in the city centre along the cultural boulevard of North Terrace, King William Street and in various districts of the metropolitan area.

Adelaide is noted for its many festivals and sporting events, its food and wine, its long beachfronts, and its large defence and manufacturing sectors. Its quality of life has ranked highly in various measures through the 2010s. The demonym "Adelaidean" is used in reference to the city and its residents.
                </p> 

            </div>

        )
    }

}

export default Article;