var div1 = document.createElement("div")
document.body.append(div1)

var heading = document.createElement("h1")
heading.setAttribute("id", "myHeading")
div1.appendChild(heading)


const display = () => {
    setTimeout(() => {
        console.log("Display 10");
        document.getElementById("myHeading").innerText = "10"
        setTimeout(() => {
            console.log("Display 9");
            document.getElementById("myHeading").innerText = "9"
            setTimeout(() => {
                console.log("Display 8")
                document.getElementById("myHeading").innerText = "8"
                setTimeout(() => {
                    console.log("Display 7")
                    document.getElementById("myHeading").innerText = "7"
                    setTimeout(() => {
                        console.log("Display 6")
                        document.getElementById("myHeading").innerText = "6"
                        setTimeout(() => {
                            console.log("Display 5")
                            document.getElementById("myHeading").innerText = "5"
                            setTimeout(() => {
                                console.log("Display 4")
                                document.getElementById("myHeading").innerText = "4"
                                setTimeout(() => {
                                    console.log("Display 3")
                                    document.getElementById("myHeading").innerText = "3"
                                    setTimeout(() => {
                                        console.log("Display 2")
                                        document.getElementById("myHeading").innerText = "2"
                                        setTimeout(() => {
                                            console.log("Display 1")
                                            document.getElementById("myHeading").innerText = "1"
                                            setTimeout(() => {
                                                console.log("Happy Independence Day")
                                                document.getElementById("myHeading").innerText = "Happy Independence Day"
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

// const animate = (word) => {
//     word.classList.add("animate");
// }

display();
