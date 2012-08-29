window.onload = initPage;

function initPage(){   
	/* For main menu */
    document.getElementById("hom").onclick = gethom;
	document.getElementById("register").onclick = getreg;
	document.getElementById("event").onclick = geteve;
	document.getElementById("work").onclick = getwork;	
	document.getElementById("cont").onclick = getcont;
	document.getElementById("sponsors").onclick = getspon;
	document.getElementById("abt").onclick = getabt;
	
	/* For Code Conundrum */
	document.getElementById("conundrum_span").onclick = getcon;	
	
	/* For Chamber of Secrets */		
	document.getElementById("cos_span").onclick = getcos;	
	
	/* For Virtua Artist */	
	document.getElementById("va_span").onclick = getva;	
	
	/* For Code Freaks */
	document.getElementById("cf_span").onclick = getcf;	
	
	/* For Bug Hunt */		
	document.getElementById("bh_span").onclick = getbh;	
	
	/* For ingineur*/
	document.getElementById("ing_span").onclick = geting;	
	
	/* For Web Prodigy */
	document.getElementById("wp_span").onclick = getwp;	
	
	/* For Blind Event */		
	document.getElementById("be_span").onclick = getbe;	
	
	/* For Quiz Off */	
	document.getElementById("qo_span").onclick = getqo;	
	
	/* For Paper Presentation */
	document.getElementById("pp_span").onclick = getpp;
	
}

function gethom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","current");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","purple");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");

	document.getElementById("til").innerHTML="Events";
		
	$(".eventlist2").hide(500);	
	$(".eventlist1").show(500);	
		
	req.open("GET","home.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getreg(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","current");
	document.getElementById("event").setAttribute("class","purple");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	document.getElementById("til").innerHTML="Events";
	
	$(".eventlist2").hide(500);	
	$(".eventlist1").show(500);	
	
	req.open("GET","register.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function geteve(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	document.getElementById("til").innerHTML="Events";
		
	$(".eventlist2").hide(500);	
	$(".eventlist1").show(500);	
	
	req.open("GET","events.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getwork(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","purple");
	document.getElementById("work").setAttribute("class","current");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
		
	$(".eventlist1").hide(500);	
	$(".eventlist2").show(500);	
	
	document.getElementById("til").innerHTML="Workshop on";
	req.open("GET","workshop/ws2.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getaccom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	$(".eventlist1").hide(500);	
	$(".eventlist2").show(500);	
		
	req.open("GET","workshop/accommodation.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);    
}

function getcont(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","purple");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","current");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	document.getElementById("til").innerHTML="Events";
	
	$(".eventlist2").hide(500);	
	$(".eventlist1").show(500);	
	
	req.open("GET","contact.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getspon(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","purple");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","current");
	document.getElementById("abt").setAttribute("class","purple");
	
	document.getElementById("til").innerHTML="Events";
	
	$(".eventlist2").hide(500);	
	$(".eventlist1").show(500);	
	
	req.open("GET","sponsor.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getabt(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","purple");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","current");
	
	document.getElementById("til").innerHTML="Events";
	
	$(".eventlist2").hide(500);	
	$(".eventlist1").show(500);	
	
	req.open("GET","about.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("mainbar").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getpp(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_pp_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ppcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
} 

function get_pp_topics(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp_topics.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ppcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
} 

function get_pp_prelims(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp_prelims.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ppcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
} 

function get_pp_finals(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp_finals.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ppcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
} 

function get_pp_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp_contact.php",true);
	req.onreadystatechange=function(){
		if(req.readyState==4){
			if(req.status==200){
		     document.getElementById("ppcontent").innerHTML = req.responseText;
			}
		}
	}
	req.send(null);
} 

function get_pp_results(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	req.open("GET","paperpresentation/pp_results.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ppcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function getcon(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
    	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","conundrum/conundrum.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);			
}

function get_con_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","conundrum/con_hom.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("concontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_con_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","conundrum/con_format.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("concontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_con_scoring(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","conundrum/con_score.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("concontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_con_faq(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","conundrum/con_faq.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("concontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_con_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","conundrum/con_contact.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("concontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getcos(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","chamberofsecrets/cos.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function getva(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}		

function get_va_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va_hom.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("vacontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_va_theme(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va_theme.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("vacontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_va_rules(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va_rules.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("vacontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_va_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va_format.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("vacontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_va_results(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va_results.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("vacontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function get_va_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","virtuaartist/va_contact.php",true);
	req.onreadystatechange= function(){
		if(req.readyState==4){
			if(req.status==200){
				document.getElementById("vacontent").innerHTML = req.responseText;
			}
		}
    }	
	req.send(null);
}

function getcf(){
   req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","codefreaks/cf.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_cf_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","codefreaks/cf_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("cfcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_cf_rules(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","codefreaks/cf_rules.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("cfcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_cf_judge(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","codefreaks/cf_judge.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("cfcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_cf_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","codefreaks/cf_format.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("cfcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_cf_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","codefreaks/cf_contact.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("cfcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function getbh(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","bughunt/bh.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_bh_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","bughunt/bh_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("bhcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_bh_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","bughunt/bh_format.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("bhcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_bh_rules(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","bughunt/bh_rules.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("bhcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_bh_faq(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","bughunt/bh_faq.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("bhcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_bh_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","bughunt/bh_contact.php",true);
		   
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		    document.getElementById("bhcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function geting(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","ingineur/ing.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_in_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","ingineur/ing_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ingcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_in_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","ingineur/ing_format.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("ingcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_in_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","ingineur/ing_contact.php",true);
		   
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		    document.getElementById("ingcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function getwp(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","webprodigy/wp.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_wp_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","webprodigy/wp_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("wpcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function get_wp_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","webprodigy/wp_format.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("wpcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function get_wp_faq(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","webprodigy/wp_faq.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("wpcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function get_wp_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","webprodigy/wp_contact.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("wpcontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);		
}

function getbe(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","blindevent/be.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_blindevent(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","blindevent/blindevent.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_be_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","blindevent/be_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("becontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_be_rule(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","blindevent/be_rule.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("becontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_be_faq(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","blindevent/be_faq.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("becontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_be_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","blindevent/be_contact.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("becontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function getqo(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","quizoff/qo.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("mainbar").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);	
}

function get_qo_hom(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","quizoff/qo_hom.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("qocontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function get_qo_format(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","quizoff/qo_format.php",true);
	req.onreadystatechange=function(){
	   if(req.readyState==4){
	    if(req.status==200){
		     document.getElementById("qocontent").innerHTML = req.responseText;
		}
	  }
	}
	req.send(null);
}

function get_qo_contact(){
    req = createRequest();
	if(req==null){
	    alert("Cannot create request");
		return;
	}
	
	document.getElementById("hom").setAttribute("class","purple");
	document.getElementById("register").setAttribute("class","purple");
	document.getElementById("event").setAttribute("class","current");
	document.getElementById("work").setAttribute("class","purple");
	document.getElementById("cont").setAttribute("class","purple");
	document.getElementById("sponsors").setAttribute("class","purple");
	document.getElementById("abt").setAttribute("class","purple");
	
	req.open("GET","quizoff/qo_contact.php",true);
	
	req.onreadystatechange=function(){	
		if(req.readyState==4){	       
			if(req.status==200){			
				document.getElementById("qocontent").innerHTML = req.responseText;
			}	
		}
	}
	req.send(null);
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
	$('#slideshow_image').jqFancyTransitions({ 
			effect: 'zipper', // wave, zipper, curtain
			width: 450,		
			height: 270,
			strips: 10, // number of strips
			delay: 4000, // delay between images in ms
			stripDelay: 50, // delay beetwen strips in ms
			titleOpacity: 0.7, // opacity of title
			titleSpeed: 2000, // speed of title appereance in ms
			position: 'alternate', // top, bottom, alternate, curtain
			direction: 'fountainAlternate', // left, right, alternate, random, fountain, fountainAlternate
			navigation: false, // prev and next navigation buttons
			links: true // show images as links
	});
	
	$(".onsite").css("display","block");
	$(".online").css("display","none");
	$(".eventlist2").hide(500);
	
/*	$("ul#menu li").mouseover(function(){
		$(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
		$(this).children("#hel").stop().animate({marginTop:'5px'},"fast");
	});
	
	
	$("ul#menu li").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
		$(this).children("#hel").stop().animate({marginTop:'15px'},{easing: 'easeOutBounce'});
		
	});*/
	//eventlist begins
	$("#heading1").mouseover(function(){
		$(".online").hide(400);
		$(".onsite").show(500);
	});
	$("#heading2").mouseover(function(){
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

/*Loading image*/
$(window).load(function() {
  jQuery('#loading-image').hide();
  $("#webpage").css("opacity","1.0");
});

/*JS for TImer / Countdown*/


