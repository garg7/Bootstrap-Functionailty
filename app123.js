 // main document ready function to check if dom is loaded fully or not
  $(document).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAGqyy6kCOzZAjPtoE9s0JYG8vn1xO2orN0R244ZBcZBLf3P86tBRyKU6ph8LuHx6cHyUFq3YzKqmcAPdj5UnrmycZAiRexgAOcNX1sBsbVFJ6gGNNQoaT2cIZAz5ozqdZBi8N9s6KZBjGRhOPt16ODYCJipLZCYdI5Q0jYf8VbZANodaX3SJg35cZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                      $("#name").text(response.name);
                      $("#quotes").text(response.quotes);  
                    },
                      
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                }

                


               
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });