function Validate()
{
    var un = document.getElementById("fname").value
    var em = document.getElementById("Email").value
    var ph = document.getElementById("phone").value

    var unpa = /^[A-Z][a-zA-Z]+$/
    var php = /^[6-9][0-9]+$/
    var eme = /^[a-zA-Z][@gmail.com]+$/
    if(un == "")
    {
        document.getElementById("msg1").innerText="This field is must and should"
        return false
    }
    if(un.match(unpa))
    {
        true
    }
    else
    {
        document.getElementById("msg1").innerText="Full Name only contains alphabets and first Letter should be Capital letters"
        return false
    }
    if(em == "")
    {
        document.getElementById("msg2").innerText="This field should not empty"
        return false
    }
    // if(em.match(eme))
    // {
    //     true
    // }
    // else
    // {
    //     document.getElementById("msg2").innerText="It should match the Pattern"
    //     return false
    // }
    if(ph == "")
    {
        document.getElementById("msg3").innerText="This field required and should not empty"
        return false
        // if(ph.match(php))
        // {
        //     true
        // }
        // else
        // {
        //     document.getElementById("msg3").innerText="starting number must be in the range of 6-9"
        //     return false
        // }
        // if(ph.length == 10)
        // {
        //     return true
        // }
        // else
        // {
        //     document.getElementById("msg3").innerText="It is mandatory to have 10 numbers only"
        //     return false
        // }
    }
    if(ph.match(php))
    {
        true
    }
    else
    {
        document.getElementById("msg3").innerText="starting number must be in the range of 6-9"
        return false
    }
    if(ph.length == 10)
    {
        return true
    }
    else
    {
        document.getElementById("msg3").innerText="It is mandatory to have 10 numbers only"
        return false
    }
}