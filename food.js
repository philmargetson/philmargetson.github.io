var foodCat = ["steak", "BBQ/USA/Burger", "Indian/curry", "chinkehhhh", "thai", "japanese", "lebanese", "mexican", "italian/pizza", "tapas", "pub", "vegetarian(pick again plz)"];

var priceCat=["£","££","£££","££££","£££££"];

var steak3=["blackhouse","bem brazil","featherblade"];
var steak4= ["fazenda"];
var steak5=["gaucho","hawksmoor"];

var bbq1=["kfc","mcdonalds","five guys"];
var bbq2=["reds bbq","homesweethome","burger king(pick again)","almost famous"];
var bbq3=["yard and coop","solita"];

var indian=["mughli","nawaab","afghan cafe","rusholme chippy","sanams"];

var thai=["thaikhun","crzy wendys","thai spice","chaobaby","chaophraya","phangthong","siam village"]

var japanese3=["yo sushi","wasabi","kyotoro","wagamamas"];

var lebanese=["bakchich"];

var mexican1=["panchos","changos","barburrito","chilangos"];

var italian2=["crazy pedros"];
var italian3=["croma","pizza hut","pizza express","zizi","prezzo","jamies italian"];

var tapas=["la vina","evuna","la lunya","nueve"];

var pub=["footage","weatherspoons","coach and four"];

var other=["pieminister","greens","earth cafe","the french","le bistrot pierre","lime bar","greggs","nandos","subway","alchemist","menagerie","laundrette","bakerie","moose coffee","artisan","las iguanas","smoke yard","cockadoodlemoo","revs de cuba","australasia"];
//var selectedFoodCat = food[Math.floor(Math.random() * foodCat.length)];

function submit(){
var foodCatList = document.getElementById("foodCat");
var foodCatSelected = foodCatList.options[foodCatList.selectedIndex].text;

var priceCatList = document.getElementById("priceCat");
var priceCatList = foodCatList.options[priceCatList.selectedIndex].text;


if(foodCatSelected=="steak"){
  alert("its steak");
}

if(foodCatSelected=="bbq/american"){

}
if(foodCatSelected=="indian"){

}
if(foodCatSelected=="thai"){

}
if(foodCatSelected=="japanese"){

}
if(foodCatSelected=="lebanese"){

}
if(foodCatSelected=="mexican"){

}
if(foodCatSelected=="pub"){

}
if(foodCatSelected=="italian"){

}
if(foodCatSelected=="tapas"){

}
if(foodCatSelected=="other"){

}
}//end submit
alert("selected food category is: "+foodCatSelected);
