const images = [
    'p2.jpg',
    'p3.jpg',
    'p22.jpg',
   
            ];
            let start=0 
            const imagesHtml = document.getElementById('image');
        function img(){
            images.map((val, index) => {
                console.log(val);
                if(index==start){
                    imagesHtml.innerHTML=`<img src="${val}"/>`;
                }
                })
            
            }
            

img(start)

            function Next(){
                if(start==images.length-1){
                    start=0

                }else{
                img(next)

                }
                imagesHtml(start)
                
            }



          