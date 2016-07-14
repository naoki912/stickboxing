function title(money) {
    document.write(money);
}
function list() {
    list=document.selbox.itemlist;
    if (list.options.length < 1) {
        var cnt=0;
        for(var i=0; globe[i]!=null; i++) {
            list.options[cnt] = new Option(globe[i].name, globe[i].id);
            cnt++;
        }
        for(var i=0; pants[i]!=null; i++) {
            list.options[cnt] = new Option(pants[i].name, pants[i].id+10);
            cnt++;
        }
        for(var i=0; belt[i]!=null; i++) {
            list.options[cnt] = new Option(belt[i].name, belt[i].id+20);
            cnt++;
        }
    }
}
function changeIMG(obj) {
    var idx = obj.selectedIndex;
    var value = obj.options[idx].value;
    var text  = obj.options[idx].text;
    if (value < 10) {
        item.src = "/images/" + text + ".jpg";
        for (var i = 0; hasGlobeIDList[i] != null; i++) {
            if (hasGlobeIDList[i] == value) {
                if (equip.globe == value) {
                    document.getElementById('itemButton').value = "装備中";
                }else {
                    document.getElementById('itemButton').value = text + "を装備";
                }
                break;
            }else {
                document.getElementById('itemButton').value = globe[value].price + "で購入";
            }
        }
    }else if (value < 20) {
        item.src = "/images/" + text + ".jpg";
        for (var i = 0; hasGlobeIDList[i] != null; i++) {
            if (hasPantsIDList[i] == value-10) {
                if (equip.pants == value-10 ) {
                    document.getElementById('itemButton').value = "装備中";
                }else {
                    document.getElementById('itemButton').value = text + "を装備";
                }
                break;
            }else {
                document.getElementById('itemButton').value = pants[value-10].price + "で購入";
            }
        }
    }else if (value < 30) {
        item.src = "/images/" + text + ".jpg";
        for (var i = 0; hasGlobeIDList[i] != null; i++) {
            if (hasBeltIDList[i] == value-20) {
                if (equip.belt == value-20) {
                    document.getElementById('itemButton').value = "装備中";
                }else {
                    document.getElementById('itemButton').value = text + "を装備";
                }
                break;
            }else {
                document.getElementById('itemButton').value = belt[value-20].price + "で購入";
            }
        }
    }
    document.getElementById('itemButton').style.visibility = 'visible';
}
function changeequip() {
    if (!document.getElementById('itemButton').value.equals("装備中")) {
        if (document.getElementById('itemButton').value.indexOf("購入")) {
            if (value < 10){
                if (globe[value].price <= money) {
                    money -= globe[value].price;
                    document.getElementById('itemButton').value = text + "を装備";
                }
            }else if (value < 20) {
                if (pants[value-10].price <= money) {
                    money -= globe[value-10].price;
                    document.getElementById('itemButton').value = text + "を装備";
                }
            }else if (value < 30) {
                if (belt[value-20].price <= money) {
                    money -= globe[value-20].price;
                    document.getElementById('itemButton').value = text + "を装備";
                }
            }
        }else {
            if (value < 10){
                equip.globe = value;
            }else if (value < 20) {
                equip.pants = value;
            }else if (value < 30) {
                equip.belt = value;
            }
            document.getElementById('itemButton').value = "装備中";
        }
    }
}
function listSet() {
    globe=new Array();
    globe[0]=new globeList(0, "Globe1", "/images/globe1.jpg", 100);
    globe[1]=new globeList(1, "Globe2", "/images/globe2.jpg", 100);
    globe[2]=new globeList(2, "Globe3", "/images/globe3.jpg", 100);
    globe[3]=new globeList(3, "Globe4", "/images/globe4.jpg", 100);

    pants=new Array();
    pants[0]=new pantsList(0, "Pant1", "/images/pant.jpg", 100);
    pants[1]=new pantsList(1, "Pant2", "/images/pant.jpg", 100);
    pants[2]=new pantsList(2, "Pant3", "/images/pant.jpg", 100);
    pants[3]=new pantsList(3, "Pant4", "/images/pant.jpg", 100);

    belt=new Array();
    belt[0]=new beltList(0, "belt1", "/images/belt.jpg", 100);
    belt[1]=new beltList(1, "belt2", "/images/belt.jpg", 100);
    belt[2]=new beltList(2, "belt3", "/images/belt.jpg", 100);
    belt[3]=new beltList(3, "belt4", "/images/belt.jpg", 100);

    hasGlobeIDList=new Array();
    hasGlobeIDList[0]=0;

    hasPantsIDList=new Array();
    hasPantsIDList[0]=0;

    hasBeltIDList=new Array();
    hasBeltIDList[0]=0;

    equip=new equipments(1);
    equip=new equipments(0, 0, 0);
}
function globeList(id, name, image, price) {
    this.id=id;
    this.name=name;
    this.image=image;
    this.price=price;
}
function pantsList(id, name, image, price) {
    this.id=id;
    this.name=name;
    this.image=image;
    this.price=price;
}
function beltList(id, name, image, price) {
    this.id=id;
    this.name=name;
    this.image=image;
    this.price=price;
}
function equipments(globe, pants, belt) {
    this.globe=globe;
    this.pants=pants;
    this.belt=belt;
}