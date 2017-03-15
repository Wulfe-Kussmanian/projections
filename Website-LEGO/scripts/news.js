// Edit this array and follow the conventions shown
var news = [
    {
        title: `Your Title Here`,
        date: `Februrary 13, 2017`,
        body: `Ben found dead at computer. America rejoices.`
    },
    {
        title: `Filler article 1`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 2`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 3`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 4`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 5`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 6`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 7`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 8`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 9`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 10`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 11`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 12`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 13`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 14`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
    {
        title: `Filler article 15`,
        date: `January 22, 2016`,
        body: `Body of article.`
    },
];


// DO NOT TOUCH THE CODE BELOW

function fillNews(elem, slots){
    for(var i = 0; i < news.length; i++){
        if(i === slots) break;
        if(news[i].title.length > 60){
            var t = news[i].title.substring(0,60)+"...";
        }else{
            var t = news[i].title;
        }
        if(news[i].body.length > 20){
            var b = news[i].body.substring(0,120)+"...";
        }else{
            var b = news[i].body;
        }
        $("#"+elem).append("<a href='article.html?id="+i+"'><div class='news-list-entry'><div class='news-entry-title'>"+t+"</div><br><div class='news-entry-content'>"+b+"</div><div class='news-entry-date'>"+news[i].date+"</div></div></a>");
    }
}


function getParameterByName(name, url) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function fillNewsContent(title_elem, date_elem, body_elem){
    var i = getParameterByName("id");
    $("#"+title_elem).append(news[i].title);
    $("#"+date_elem).append(news[i].date);
    $("#"+body_elem).append(news[i].body);
    document.title = news[i].title + " - INTOXICATED";
}
