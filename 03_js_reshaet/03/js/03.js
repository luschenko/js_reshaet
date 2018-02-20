$(document).ready(function(){
    showStartModal();
});

function showStartModal(){
    //start timeout
   if(localStorage.getItem('modalYesBtn')!=1){    
       setTimeout(function(){
        $('#exampleModal').modal('show');
        $('#modal-yes-btn').on('click',function(){
            // save state modal
            localStorage.setItem('modalYesBtn', 1);
            $('#exampleModal').modal('hide');
        });
    }, 5000);
  }
}