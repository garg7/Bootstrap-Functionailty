$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAGqyy6kCOzZAjPtoE9s0JYG8vn1xO2orN0R244ZBcZBLf3P86tBRyKU6ph8LuHx6cHyUFq3YzKqmcAPdj5UnrmycZAiRexgAOcNX1sBsbVFJ6gGNNQoaT2cIZAz5ozqdZBi8N9s6KZBjGRhOPt16ODYCJipLZCYdI5Q0jYf8VbZANodaX3SJg35cZD';

    function getPosts(){

        $.ajax('https://graph.facebook.com/me/posts?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response.data);
                    console.log(typeof(response));
                    jQuery.each(response.data,function(i, val) {
                        if(typeof(val.message) != "undefined"){
                            $("#posts").append(val.message+'<br/>');
                        }
                    });
            },
            error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                }
          }

            );//end argument list 

// end get facebook info
}

    $("#facebookBtn").on('click',getPosts);
  });