var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',additem);

itemlist.addEventListener('click',remove);

filter.addEventListener('keyup',show);
function additem(e){


    e.preventDefault();
    
    var newitem =document.getElementById('item').value;
    //create li elemnet

    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newitem));

    var delbtn=document.createElement('button');

    delbtn.className="btn btn-danger btn-sm float-right delete";

    delbtn.appendChild(document.createTextNode('x'));
    li.appendChild(delbtn)

    itemlist.appendChild(li);
    document.getElementById('item').value='';
}

function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete this list?')){
            li=e.target.parentElement;
           itemlist.removeChild(li);
        }
    }
  
}

function show(e){
    var text=e.target.value.toLowerCase();
    // console.log(text);
    var items =itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
            document.getElementById('msg').innerHTML='';

        }else{
            item.style.display='none';
            document.getElementById('msg').innerHTML='No results Found';
        }
    })
}