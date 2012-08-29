window.onload = initPage;

function initPage(){ 
    hom = document.getElementById("con_hom");
	hom.onclick = disp_cont_hom;
	
	format = document.getElementById("con_format");
	format.onclick = disp_cont_format;
	
	contact = document.getElementById("con_contact");
	contact.onclick = disp_cont_contact;	
	
}

function disp_cont_hom(){	
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	var url = "con_hom.php";
	
	req.open("GET",url,true);
	req.onreadystatechange=display;	
	req.send(null);
}

function disp_cont_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	var url = "con_format.php";
	
	req.open("GET",url,true);
	req.onreadystatechange=display;	
	req.send(null);
}

function disp_cont_contact(){	
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	var url = "con_contact.php";
	
	req.open("GET",url,true);
	req.onreadystatechange=display;	
	req.send(null);
}

function display(){
     if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("concontent").innerHTML = req.responseText;
		}
	}
}

function createRequest(){   
   try{
      req=new XMLHttpRequest();
   }catch(tryMS){
      try{
	      req=new ActiveXObject("Msxml2.XMLHTTP");
	  }
	  catch(otherMS){
	     try{
		    req=new ActiveXObject("Microsoft.XMLHTTP");
		 }
		 catch(failed){
		    req=null;
		 }
	  }
   }
   return req;
}


// JavaScript Document
$(document).ready(function(){

	$("ul#menu li").mouseover(function(){
		$(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
		$(this).children("#hel").stop().animate({marginTop:'5px'},"fast");
	});
	
	
	$("ul#menu li").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
		$(this).children("#hel").stop().animate({marginTop:'15px'},{easing: 'easeOutBounce'});
		
	});
	//eventlist begins
	$("#heading2").mouseover(function(){
		$(".online").hide(400);
		$(".onsite").show(500);
	});
	$("#heading1").mouseover(function(){
		$(".onsite").hide(400);
		$(".online").show(500);
	});
	$("#submenu li").mouseover(function(){
		$(this).children("#two").stop().animate({marginLeft:'-200px'},{easing: 'easeOutBounce'});
	});
	$("#submenu li").mouseout(function(){
		$(this).children("#two").stop().animate({marginLeft:'0px'},"slow");
	});
	$(".onsite li").mouseover(function(){
		$(this).children("#two").stop().animate({marginLeft:'-200px'},{easing: 'easeOutBounce'});
	});
	$(".onsite li").mouseout(function(){
		$(this).children("#two").stop().animate({marginLeft:'0px'},"slow");
	});
	//eventlist ends
	//updatebar cycle begins
	$('.slideshow').cycle({
		//fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		 fx:      'custom', 
    sync: 1, 
    cssBefore: {  
        top:  0, 
        left: 900, 
        display: 'block',
		width:830 
    }, 
    animIn:  { 
        left: 0,
	}, 
    animOut: {  
        top: 232 
    }, 
    delay: -2000
	});
	//updatebar ends
});