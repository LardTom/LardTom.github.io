
fetch("scripts/hashtaglists.json")
    .then(response => response.json())
    .then(data => {    
        
        const container = document.querySelector(".container")


        const button = document.createElement("button")
        button.innerText = "generate Hashtags"
        button.setAttribute("id", "generatebtn")
        container.appendChild(button)

        const outputwrapper = document.createElement("div")
        outputwrapper.setAttribute("id", "outputwrapper")
        container.appendChild(outputwrapper)


        for (let i = 0; i < data.length; i++) {
            const elem = data[i];
                        
            const wrapper = document.createElement("div")
            wrapper.setAttribute("class", "wrapper")
            const list = document.createElement("span")
            list.innerText = elem.list

            const listcheckbox = document.createElement("input")
            listcheckbox.setAttribute("data-hashtags", elem.hashtag)
            listcheckbox.setAttribute("type", "checkbox")
            listcheckbox.setAttribute("id", elem.list)

            wrapper.appendChild(listcheckbox)
            wrapper.appendChild(list)

            container.appendChild(wrapper)
            

        }
       

        button.addEventListener("click", () => {
            //generate string
            let hashtagstring = ""
            for (let i = 0; i < document.querySelectorAll(".wrapper").length; i++) {
                const element = document.querySelectorAll(".wrapper")[i];
                


                if (element.getElementsByTagName("input")[0].checked) {
                    element.getElementsByTagName("span")[0].innerText

                    // get array from custom property
                    str = element.getElementsByTagName("input")[0].dataset.hashtags
                    arr = str.split(",")
                    console.log(arr)

                    hashtagstring = hashtagstring + arr.join(" ") + " "
                    

                    if (hashtagstring.split(" ").length > 30) {
                        alert("you have " + ((hashtagstring.split(" ").length)-1) + " hashtags. That are " + ((hashtagstring.split(" ").length)-31) + " to many." )
                    }
                    // console.log(hashtagstring)

                    
                }
            }

            hashtagstring = ".\n.\n.\n.\n" + hashtagstring

            function copy_text(string) {
                var copyText = string;
                var textArea = document.createElement("textarea");
                textArea.value = copyText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("Copy");
                textArea.remove();
                }

            copy_text(hashtagstring)
            button.innerText = "Copied!"
            setTimeout(function(){ button.innerText = "generate Hashtags" }, 3000);
        })

        
    })

    
    
    // hashtag ripper (remove hashtags of largest list until the max is 30
    
    // custom hashtag input