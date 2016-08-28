'use strict';
var input = $('#input');

ClearInput();
BindEvents();

function CreateListElements(){
    //Get the contents element
    var contEl = $("#contents");

    //create the list item.
    var newDivEl = document.createElement('div');
    var paraEl = document.createElement('p');
    var btnEl = document.createElement('button');

    $(newDivEl).addClass('item');
    $(btnEl).text('X').addClass('rBtn').attr('type', 'button').attr('name', 'removeButton');

    if(GetInput() !== ""){

        $(paraEl).text(GetInput());
        $(newDivEl).append(paraEl).append(btnEl);
        $(contEl).append(newDivEl);
        ClearInput();
    }else{
        alert("Error, nothing in text field");
    }
    for (var index = 0; index < $('.rBtn').length; index++) {
        $('.rBtn').click(RemoveItems);
    }
}

function GetInput(){
    return $(input).val();
}

function ClearInput(){
    $(input).val(null);
}

function RemoveItems(){
    this.parentElement.remove(this);
}

function BindEvents(){
    $('#btn').click(CreateListElements);

    $(input).keydown(function(e){
        //If the enter key is pressed
        if(e.keyCode === 13){
            CreateListElements();
        }
    })
}
