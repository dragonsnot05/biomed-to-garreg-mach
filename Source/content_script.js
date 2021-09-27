walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Deal with the easy case
  v = v.replace(/\b(B|b)io( |-)(M|m)ed/g, function(match, p1, p2, offset, string) {
    // t - 7 = m
    // c - 1 = b
    // m = String.fromCharCode(p1.charCodeAt(0) - 7);
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Garreg Mach";
  });
  v = v.replace(/\b(B|b)io(M|m)ed/g, function(match, p1, p2, offset, string) {
    // t - 7 = m
    // c - 1 = b
    // m = String.fromCharCode(p1.charCodeAt(0) - 7);
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Garreg Mach";
  });
  // Deal with private clouds
  v = v.replace(/\b((A|a)cademy|(S|s)cience (A|a)cademy)/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Monestary";
  });
  v = v.replace(/\b(B|b)(M|m)(S|s)(A|a)/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Church of Seiros";
  });
  v = v.replace(/\b(N|n)(E|e)(O|o)(M|m)(E|e)(D|d)/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Fódlan";
  });
  v = v.replace(/\bSTEM School/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Officer's Academy";
  });
  v = v.replace(/\b(R|r)avenna/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Adrestian Empire";
  });
  v = v.replace(/\b(S|s)halersville/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Leister Alliance";
  });
  v = v.replace(/\b(R|r)ootstown/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Holy Kingdom of Faerghus";
  });
  v = v.replace(/\b(M|m)astery/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    // b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return "Ass";
  });
  // Get the corner cases
  // if(v.match(/cloud/i)) {
  //   // If we're not talking about weather
  //   // if(v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
  //     v = v.replace(/(S|s)cience /gi, function(match, p1, offset, string) {
  //       // c - 1 = b
  //       b = String.fromCharCode(p1.charCodeAt(0) - 1);
  //       return b + "utt";
  //     });
    // }
  // }
	textNode.nodeValue = v;
}


