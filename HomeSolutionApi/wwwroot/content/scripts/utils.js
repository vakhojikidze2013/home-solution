function windowLocationChanger(param){

    let isLocal = isLocalHost();
    if (isLocal){
        if (param == "home"){
            window.location.href = "index.html";
            return;
        }

        window.location.href = param;
        return;
    } else {

        if (param == "home"){
            window.location.href = window.location.origin;
            return;
        }

        let newWindowLocation = `${window.location.origin}/${param}`;
        window.location.href = newWindowLocation; 
        return;
    }
}

function isLocalHost(){
    if (window.location.protocol == "file:"){
        return true;
    }

    if (window.location.host == "" || window.location.hostname == ""){
        return true;
    }

    return false;
}