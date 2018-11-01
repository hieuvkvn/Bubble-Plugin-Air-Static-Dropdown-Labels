function(instance, properties, context) {
  $(function() {
    var start, el = document.getElementById(properties.target_dropdown_id)
    var disp = properties.display_choices.split("\n")
    if(properties.required){
        start = 1
    }
    else{
      el.options[1].text = "";
      start = 2
    }
    for(i=start,j=0;i<el.options.length;i++,j++){  
      el.options[i].text = disp[j]
      console.log(disp[j])
    }
 });
	
}